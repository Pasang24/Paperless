import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  position: number;
}

function FeatureCard({
  title,
  description,
  imageUrl,
  position,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col md:gap-4 md:flex-row md:items-start ${
        position % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="space-y-4 mb-4">
        <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
        <p className="sm:text-xl max-w-[800px] text-muted-foreground">
          {description}
        </p>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={400}
        className="w-full md:w-[50%] lg:w-[60%] border-2 border-primary rounded-lg"
      />
    </div>
  );
}

export default FeatureCard;
