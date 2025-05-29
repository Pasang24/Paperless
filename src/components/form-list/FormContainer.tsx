"use client";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useEffect, useState } from "react";
import { NotebookPen, Eye, ArrowLeft, Send } from "lucide-react";
import { FormInputSchema } from "@/types/form";
import { usePrevious } from "@/hooks/usePrevious";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import FormTitleDescription from "../form-edit/FormTitleDescription";
import FormInput from "../form-edit/FormInput";
import FormPreview from "../form-preview/FormPreview";
import Link from "next/link";

function FormContainer() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formSchema, setFormSchema] = useState<FormInputSchema[]>([
    { id: "placeholder_id", label: "Question", type: "input", required: false },
  ]);
  const [isAddingForm, setIsAddingForm] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const router = useRouter();

  const prevFormSchema = usePrevious(formSchema);

  const handleAddQuestion = () => {
    setFormSchema((prevFormSchema) => [
      ...prevFormSchema,
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);

    setScrollToBottom(true);
  };

  const handleReorderInputFields = (event: DragEndEvent) => {
    if (!event.over) return;

    if (event.active.id !== event.over.id) {
      setFormSchema((prevFormSchema) => {
        const oldIndex = prevFormSchema.findIndex(
          (schema) => schema.id === event.active.id
        );
        const newIndex = prevFormSchema.findIndex(
          (schema) => schema.id === event.over?.id
        );

        return arrayMove(prevFormSchema, oldIndex, newIndex);
      });
    }
  };

  const handleAddForm = async () => {
    try {
      setIsAddingForm(true);

      const response = await fetch("/api/form/add-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formTitle,
          description: formDescription,
          formSchema,
        }),
      });

      const form = await response.json();
      console.log(form);
      router.replace("/forms");
    } catch (error) {
      console.log(error);
      setIsAddingForm(false);
    }
  };

  useEffect(() => {
    // replace the placeholder id with a random id
    setFormSchema([
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
  }, []);

  useEffect(() => {
    if (formSchema.length > (prevFormSchema?.length || 0) && scrollToBottom) {
      window.scrollTo(0, document.body.scrollHeight);
      setScrollToBottom(false);
    }
  }, [formSchema]);

  return (
    <>
      <div className="flex justify-between mb-2">
        <Link href="/forms" className="flex gap-1">
          <ArrowLeft />
          Back
        </Link>
        <Button disabled={isAddingForm} onClick={handleAddForm}>
          <Send />
          {isAddingForm ? "Publishing..." : "Publish"}
        </Button>
      </div>
      <Tabs defaultValue="questions">
        <TabsList className="self-center">
          <TabsTrigger value="questions">
            <NotebookPen />
            Questions
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye />
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="questions">
          <div className="space-y-4">
            <FormTitleDescription
              title={formTitle}
              setTitle={setFormTitle}
              description={formDescription}
              setDescription={setFormDescription}
            />
            <DndContext
              onDragEnd={handleReorderInputFields}
              modifiers={[restrictToWindowEdges]}
            >
              <SortableContext
                items={formSchema}
                strategy={verticalListSortingStrategy}
              >
                {formSchema.map((schema) => (
                  <FormInput
                    formInput={schema}
                    changeFormInput={setFormSchema}
                    key={schema.id}
                  />
                ))}
              </SortableContext>
            </DndContext>
            <Button onClick={handleAddQuestion} variant={"outline"}>
              + Add Question
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <FormPreview
            formData={{
              title: formTitle,
              description: formDescription,
              formSchema,
            }}
            mode="preview"
          />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default FormContainer;
