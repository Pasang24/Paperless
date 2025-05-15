import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface FormTitleDescriptionProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

function FormTitleDescription({
  title,
  setTitle,
  description,
  setDescription,
}: FormTitleDescriptionProps) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="form-title">Form Title*</Label>
            <Input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
              id="form-title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="form-description">Form Description*</Label>
            <Textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
              id="form-description"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormTitleDescription;
