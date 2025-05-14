import React from "react";
import FormCard from "./FormCard";

const formDatas: {
  id: string;
  title: string;
  responseCount: number;
  createdAt: Date;
  updatedAt: Date | null;
}[] = [
  {
    id: "jfhgfjfdjb",
    title: "Contact Form",
    responseCount: 127,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: "jfhgfjfdjb",
    title: "Contact Form",
    responseCount: 127,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: "jfhgfjfdjb",
    title: "Contact Form",
    responseCount: 127,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: "jfhgfjfdjb",
    title: "Contact Form",
    responseCount: 127,
    createdAt: new Date(),
    updatedAt: null,
  },
];

function FormList() {
  return (
    <div className="my-4 space-y-4">
      {formDatas.map((formData) => (
        <FormCard formData={formData} key={formData.id} />
      ))}
    </div>
  );
}

export default FormList;
