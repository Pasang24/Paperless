import { SelectTrigger } from "@radix-ui/react-select";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";

function FormContainer() {
  return (
    <div className="space-y-2">
      <Card>
        <CardContent>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-title">Form Title*</Label>
              <Input type="text" placeholder="Title" id="form-title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-description">Form Description*</Label>
              <Textarea placeholder="Description" id="form-description" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-question">Write your question:</Label>
              <div className="flex gap-2">
                <Input type="text" placeholder="Title" id="form-question" />
                <Select>
                  <SelectTrigger className="w-[180px] border border-accent rounded-sm">
                    <SelectValue
                      defaultValue="text"
                      placeholder="Short Answer"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Short Answer</SelectItem>
                    <SelectItem value="textarea">Paragraph</SelectItem>
                    <SelectItem value="radio">Multiple Choice</SelectItem>
                    <SelectItem value="checkbox">Checkboxes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end items-center gap-4 h-5 mt-2">
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="rounded-full"
                >
                  <Trash2 />
                </Button>
                <Separator orientation="vertical" />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Required</span>
                  <Switch className="w-8 h-5" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button>+ Add Question</Button>
    </div>
  );
}

export default FormContainer;
