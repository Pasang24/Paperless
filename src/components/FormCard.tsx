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
        <div className="flex flex-col gap-2 sm:w-[60%] text-secondary-foreground">
          <p className="flex items-center gap-1 text-xl">
            <FileSpreadsheet className="shrink-0" />
            <span className="font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden">
              {formData.title}
            </span>
          </p>
          <p className="flex items-center text-sm text-muted-foreground ml-6.5">
            <FileChartLine size={18} />
            {formData?.responseCount ?? "N/A"} Responses
          </p>
          <div className="flex gap-2 ml-6.5">
            <Button variant={"default"} className="rounded-full">
              <Eye />
              View
            </Button>
            <Button variant={"secondary"} className="rounded-full">
              <FilePen />
              Edit
            </Button>
            <Button variant={"secondary"} className="rounded-full">
              <Trash2 />
              Delete
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-6.5">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={18} />
            Created:{" "}
            {new Date(formData.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarSync size={18} />
            Last Edited:{" "}
            {formData.updatedAt
              ? new Date(formData.updatedAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Not Edited"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormCard;
