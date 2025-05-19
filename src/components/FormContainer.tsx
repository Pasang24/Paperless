"use client";

import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { NotebookPen, Eye, ArrowLeft, Send } from "lucide-react";
import { FormInputSchema } from "@/types/form";
import { nanoid } from "nanoid";
import FormTitleDescription from "./FormTitleDescription";
import FormInput from "./FormInput";
import FormPreview from "./FormPreview";
import Link from "next/link";

function FormContainer() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formSchema, setFormSchema] = useState<FormInputSchema[]>([
    { id: "placeholder_id", label: "Question", type: "input", required: false },
  ]);

  const handleAddQuestion = () => {
    setFormSchema((prevFormSchema) => [
      ...prevFormSchema,
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
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

  useEffect(() => {
    // replace the placeholder id with a random id
    setFormSchema([
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
  }, []);

  return (
    <>
      <div className="flex justify-between mb-2">
        <Link href="/forms" className="flex gap-1">
          <ArrowLeft />
          Back
        </Link>
        <Button>
          <Send />
          Publish
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
            <DndContext onDragEnd={handleReorderInputFields}>
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
          />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default FormContainer;
