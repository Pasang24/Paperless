import React from "react";
import { FormCheckBox, FormMultiChoice, FormInputSchema } from "@/types/form";
import { Input } from "./ui/input";
import { Square, Circle, X } from "lucide-react";
import { Button } from "./ui/button";
import { nanoid } from "nanoid";

interface FormCheckboxFieldProps {
  type: "checkbox";
  formInput: FormCheckBox;
  changeFormInput: React.Dispatch<React.SetStateAction<FormInputSchema[]>>;
}
interface FormMultiChoiceProps {
  type: "radio";
  formInput: FormMultiChoice;
  changeFormInput: React.Dispatch<React.SetStateAction<FormInputSchema[]>>;
}

function FormOptionsField({
  type,
  formInput,
  changeFormInput,
}: FormCheckboxFieldProps | FormMultiChoiceProps) {
  const isFormCheckbox = (
    schema: FormInputSchema | FormCheckBox
  ): schema is FormCheckBox => {
    return schema.id === formInput.id;
  };

  const handleAddOption = () => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) => {
        return isFormCheckbox(schema)
          ? {
              ...schema,
              options: [
                ...schema.options,
                { id: nanoid(3), option: "Add Option" },
              ],
            }
          : schema;
      });
    });
  };

  const handleRemoveOption = (optionId: string) => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) => {
        if (isFormCheckbox(schema)) {
          const optionIndex = schema.options.findIndex(
            (option) => option.id === optionId
          );

          if (schema.options.length === 1) return schema;

          const leftHalf = schema.options.slice(0, optionIndex);
          const rightHalf = schema.options.slice(optionIndex + 1);

          return { ...schema, options: [...leftHalf, ...rightHalf] };
        } else {
          return schema;
        }
      });
    });
  };

  const handleChangeOption = (optionId: string, newOptionValue: string) => {
    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) => {
        if (isFormCheckbox(schema)) {
          const optionIndex = schema.options.findIndex(
            (option) => option.id === optionId
          );

          const leftHalf = schema.options.slice(0, optionIndex);
          const rightHalf = schema.options.slice(optionIndex + 1);

          return {
            ...schema,
            options: [
              ...leftHalf,
              { ...schema.options[optionIndex], option: newOptionValue },
              ...rightHalf,
            ],
          };
        } else {
          return schema;
        }
      });
    });
  };
  return (
    <div className="flex flex-col gap-2">
      {formInput.options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          {type === "checkbox" && <Square stroke="gray" />}
          {type === "radio" && <Circle stroke="gray" />}
          <Input
            value={option.option}
            onChange={(event) =>
              handleChangeOption(option.id, event.target.value)
            }
          />
          <Button
            onClick={() => handleRemoveOption(option.id)}
            variant={"ghost"}
            size={"icon"}
            className="rounded-full"
          >
            <X />
          </Button>
        </div>
      ))}
      <Button onClick={handleAddOption} variant={"ghost"} className="self-end">
        + Add Option
      </Button>
    </div>
  );
}

export default FormOptionsField;
