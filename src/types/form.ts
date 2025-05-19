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

export interface FormOption {
  id: string;
  option: string;
}

export interface FormText extends BaseFormInput {
  type: "input" | "textarea";
}

export interface FormMultiChoice extends BaseFormInput {
  type: "radio";
  options: FormOption[];
}

export interface FormCheckBox extends BaseFormInput {
  type: "checkbox";
  options: FormOption[];
}
