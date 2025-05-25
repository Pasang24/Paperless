import {
  Calendar,
  CalendarSync,
  FileChartLine,
  FileSpreadsheet,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function FormCardSkeleton() {
  return (
    <Card>
      <CardContent className="flex flex-col justify-between gap-3 sm:flex-row">
        <div className="flex flex-col gap-2 sm:w-[60%] text-secondary-foreground">
          <div className="flex items-center gap-1">
            <FileSpreadsheet className="shrink-0" />
            <Skeleton className="w-full h-[28px]" />
          </div>
          <div className="flex items-center text-muted-foreground ml-6.5">
            <FileChartLine size={18} className="shrink-0" />
            <Skeleton className="w-[120px] h-[20px]" />
          </div>
          <div className="flex gap-2 ml-6.5">
            <Skeleton className="w-[78.09px] h-[36px] rounded-full" />
            <Skeleton className="w-[72.13px] h-[36px] rounded-full" />
            <Skeleton className="w-[88.47px] h-[36px] rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-6.5">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar size={18} />
            <Skeleton className="w-[150px] h-[20px]" />
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <CalendarSync size={18} />
            <Skeleton className="w-[150px] h-[20px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormCardSkeleton;
