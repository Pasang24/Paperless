"use client";

import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { NotebookPen, Eye } from "lucide-react";
import { FormInputSchema } from "@/types/form";
import { nanoid } from "nanoid";
import FormTitleDescription from "./FormTitleDescription";
import FormInput from "./FormInput";

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

  useEffect(() => {
    // replace the placeholder id with a random id
    setFormSchema([
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
  }, []);

  return (
    <Tabs defaultValue="questions">
      <TabsList>
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
        <div className="space-y-2">
          <FormTitleDescription
            title={formTitle}
            setTitle={setFormTitle}
            description={formDescription}
            setDescription={setFormDescription}
          />
          {formSchema.map((schema) => (
            <FormInput
              formInput={schema}
              changeFormInput={setFormSchema}
              key={schema.id}
            />
          ))}
          <Button onClick={handleAddQuestion}>+ Add Question</Button>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <></>
      </TabsContent>
    </Tabs>
  );
}

export default FormContainer;
