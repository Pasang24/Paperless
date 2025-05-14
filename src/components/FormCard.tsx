import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  FileSpreadsheet,
  FileChartLine,
  Calendar,
  CalendarSync,
  Eye,
  FilePen,
  Trash2,
} from "lucide-react";

interface FormCardProps {
  formData: {
    id: string;
    title: string;
    responseCount: number;
    createdAt: Date;
    updatedAt: Date | null;
  };
}

function FormCard({ formData }: FormCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col justify-between gap-3 sm:flex-row">
        <div className="flex flex-col gap-1.5 sm:w-[60%]">
          <p className="flex items-center gap-1 text-xl">
            <FileSpreadsheet className="shrink-0" />
            <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
              Contact Form
            </span>
          </p>
          <p className="flex items-center ml-6.5">
            <FileChartLine size={18} />
            12 Responses
          </p>
          <div className="flex gap-2 ml-6.5">
            <Button>
              <Eye />
              View
            </Button>
            <Button variant={"secondary"}>
              <FilePen />
              Edit
            </Button>
            <Button variant={"outline"}>
              <Trash2 />
              Delete
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 ml-6.5">
          <p className="flex items-center gap-1">
            <Calendar size={18} />
            Created: May 12, 2025
          </p>
          <p className="flex items-center gap-1">
            <CalendarSync size={18} />
            Last Edited: May 12, 2025
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormCard;
