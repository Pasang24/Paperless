import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const featureList: Feature[] = [
  {
    title: "A form builder like no other",
    description:
      "Paperless makes it simple for anyone to build free online forms. No need to code — just type your questions like you would in a doc.",
    imageUrl: "/landing-images/image1.png",
  },
  {
    title: "Easily arrange your form fields",
    description:
      " Paperless makes it for you to arrange the order of your form inputs. Just drag and drop where you want to place it.",
    imageUrl: "/landing-images/image2.png",
  },
  {
    title: "Preview your form before publishing",
    description:
      "Paperless allows you to see how your form looks to your target audience, by allowing you to preview the form while you are still creating it.",
    imageUrl: "/landing-images/image3.png",
  },
];

function FeatureSection() {
  return (
    <div className="space-y-16">
      <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-bold">
        Why use Paperless?
      </h2>
      {featureList.map((feature, index) => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          key={feature.title}
          position={index + 1}
        />
      ))}
    </div>
  );
}

export default FeatureSection;
