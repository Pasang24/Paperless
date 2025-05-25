import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormInputProps } from "./FormInput";
import { FormInputSchema } from "@/types/form";
import { nanoid } from "nanoid";
import { AlignLeft, CircleDot, CopyCheck, Equal } from "lucide-react";

type InputTypes = Record<FormInputSchema["type"], React.ReactNode>;
type InputSchemas = Record<FormInputSchema["type"], FormInputSchema>;

function FormInputChange({ formInput, changeFormInput }: FormInputProps) {
  const inputTypes: InputTypes = {
    "input": (
      <>
        <Equal /> Short Answer
      </>
    ),
    "textarea": (
      <>
        <AlignLeft />
        Paragraph
      </>
    ),
    "radio": (
      <>
        <CircleDot /> Multiple Choices
      </>
    ),
    "checkbox": (
      <>
        <CopyCheck /> Checkboxes
      </>
    ),
  };
  const inputSchemas: InputSchemas = {
    "input": { ...formInput, type: "input" },
    "textarea": {
      ...formInput,
      type: "textarea",
    },
    "checkbox": {
      ...formInput,
      options: [{ id: nanoid(3), option: "Option 1" }],
      type: "checkbox",
    },
    "radio": {
      ...formInput,
      options: [{ id: nanoid(3), option: "Option 1" }],
      type: "radio",
    },
  };

  const handleFormInputTypeChange = (newType: string) => {
    if (newType === formInput.type) return;

    changeFormInput((prevFormSchema) => {
      return prevFormSchema.map((schema) =>
        schema.id === formInput.id
          ? inputSchemas[newType as keyof InputSchemas]
          : schema
      );
    });
  };
  return (
    <Select onValueChange={handleFormInputTypeChange}>
      <SelectTrigger className="w-[180px] border border-accent rounded-sm">
        <SelectValue
          defaultValue={formInput.type}
          placeholder={inputTypes[formInput.type]}
        />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(inputTypes).map((inputType) => (
          <SelectItem value={inputType[0]} key={inputType[0]}>
            {inputType[1]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FormInputChange;
