import React from "react";
import { nanoid } from "nanoid";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Copy, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { FormInputSchema } from "@/types/form";
import FormInputChange from "./FormInputChange";
import FormOptionsField from "./FormOptionsField";

export interface FormInputProps {
  formInput: FormInputSchema;
  changeFormInput: React.Dispatch<React.SetStateAction<FormInputSchema[]>>;
}

function FormInput({ formInput, changeFormInput }: FormInputProps) {
  let formInputField = <></>;

  switch (formInput.type) {
    case "input":
    case "textarea":
      break;
    case "radio":
      formInputField = (
        <FormOptionsField
          type="radio"
          formInput={formInput}
          changeFormInput={changeFormInput}
        />
      );
      break;
    case "checkbox":
      formInputField = (
        <FormOptionsField
          type="checkbox"
          formInput={formInput}
          changeFormInput={changeFormInput}
        />
      );
      break;
  }

  const handleInputLabelChange = (newLabel: string) => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) =>
        schema.id !== formInput.id ? schema : { ...schema, label: newLabel }
      );
    });
  };

  const handleInputRequiredToggle = () => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) =>
        schema.id !== formInput.id
          ? schema
          : { ...schema, required: !schema.required }
      );
    });
  };

  const handleInputFieldDuplicate = () => {
    changeFormInput((prevFormSchema) => {
      // first find the index of the form input to be duplicated
      const duplicateIndex = prevFormSchema.findIndex(
        (schema) => schema.id === formInput.id
      );
      // the separate the left and right half of the formSchema array
      const leftHalf = prevFormSchema.slice(0, duplicateIndex + 1);
      const rightHalf = prevFormSchema.slice(duplicateIndex + 1);

      // then update the formSchema by inserting the form input between the two halves
      return [
        ...leftHalf,
        { ...prevFormSchema[duplicateIndex], id: nanoid(6) },
        ...rightHalf,
      ];
    });
  };

  const handleInputFieldRemove = () => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.filter((schema) => schema.id !== formInput.id);
    });
  };

  return (
    <Card>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor={formInput.id}>Write your question:</Label>
            <div className="flex gap-2">
              <Input
                type="text"
                value={formInput.label}
                onChange={(event) => handleInputLabelChange(event.target.value)}
                placeholder="Question"
                id={formInput.id}
              />
              <FormInputChange
                formInput={formInput}
                changeFormInput={changeFormInput}
              />
            </div>
            {formInputField}
            <div className="flex justify-end items-center gap-4 h-5 mt-2">
              <Button
                onClick={handleInputFieldDuplicate}
                variant={"ghost"}
                size={"icon"}
                className="rounded-full"
              >
                <Copy />
              </Button>
              <Button
                onClick={handleInputFieldRemove}
                variant={"ghost"}
                size={"icon"}
                className="rounded-full"
              >
                <Trash2 />
              </Button>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <span className="text-sm">Required</span>
                <Switch
                  checked={formInput.required}
                  onCheckedChange={handleInputRequiredToggle}
                  className="w-8 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormInput;
