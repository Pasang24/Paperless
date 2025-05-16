export interface Form {
  title: string;
  description: string;
  formSchema: FormInputSchema[];
}

export type FormInputSchema = FormText | FormMultiChoice | FormCheckBox;

interface BaseFormInput {
  id: string;
  label: string;
  required: boolean;
}

interface FormCheckBoxeOption {
  id: string;
  option: string;
}

export interface FormText extends BaseFormInput {
  type: "input" | "textarea";
}

export interface FormMultiChoice extends BaseFormInput {
  type: "radio";
  options: string[];
}

export interface FormCheckBox extends BaseFormInput {
  type: "checkbox";
  options: FormCheckBoxeOption[];
}
