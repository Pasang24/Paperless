import React from "react";
import {
  FormCheckBox,
  FormMultiChoice,
  FormInputSchema,
  FormOption,
} from "@/types/form";
import { Input } from "../ui/input";
import { Square, Circle, X, GripVertical } from "lucide-react";
import { Button } from "../ui/button";
import { nanoid } from "nanoid";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

  const handleReorderOptions = (event: DragEndEvent) => {
    if (!event.over) return;

    if (event.active.id !== event.over.id) {
      changeFormInput((prevFormSchema) => {
        return prevFormSchema.map((schema) => {
          if (isFormCheckbox(schema)) {
            const oldIndex = schema.options.findIndex(
              (option) => option.id === event.active.id
            );
            const newIndex = schema.options.findIndex(
              (option) => option.id === event.over!.id
            );

            return {
              ...schema,
              options: arrayMove(schema.options, oldIndex, newIndex),
            };
          } else {
            return schema;
          }
        });
      });
    }
  };
  return (
    <DndContext
      onDragEnd={handleReorderOptions}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext
        items={formInput.options}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-2">
          {formInput.options.map((option) => (
            <OpionField
              type={type}
              option={option}
              handleChangeOption={handleChangeOption}
              handleRemoveOption={handleRemoveOption}
              key={option.id}
            />
          ))}
          <Button
            onClick={handleAddOption}
            variant={"ghost"}
            className="self-end"
          >
            + Add Option
          </Button>
        </div>
      </SortableContext>
    </DndContext>
  );
}

function OpionField({
  type,
  option,
  handleChangeOption,
  handleRemoveOption,
}: {
  type: "radio" | "checkbox";
  option: FormOption;
  handleChangeOption: (optionId: string, newOptionValue: string) => void;
  handleRemoveOption: (optionId: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: option.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      className="flex items-center gap-2"
    >
      <Button
        variant={"ghost"}
        size={"icon"}
        {...attributes}
        {...listeners}
        className="-ml-5 -mr-1 cursor-grab touch-none"
      >
        <GripVertical />
      </Button>
      {type === "checkbox" && <Square stroke="gray" />}
      {type === "radio" && <Circle stroke="gray" />}
      <Input
        value={option.option}
        onChange={(event) => handleChangeOption(option.id, event.target.value)}
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
  );
}

export default FormOptionsField;
