import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <></>,
    title: "Sports Massage Therapy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi nihil sint laudantium est libero beatae accusantium explicabo, doloremque eaque accusamus minus aliquid quam modi nostrum! Obcaecati praesentium nihil blanditiis!",
  },
  {
    icon: <></>,
    title: "Dry Cupping",
    description:
      "Dry Cupping increases blood circulation at the point of the injury, increased circulation reduces tension and spasms, can promote cell repair through improved blood flow, reduce pain and increase range of motion.",
  },
  {
    icon: <></>,
    title: "Instrument-assisted soft tissue mobilization",
    description:
      "IASTM works similarly to a standard massage, but specialized instruments are used in place of a physical therapist's hands. These instruments allow more direct treatment of the soft tissues involved with movement.",
  },
];

export const HowItWorks = () => {
  return (

    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Services that keep up with {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        you.  {" "}
        </span>   
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-neutral-800 text-white"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <Button className="" variant={"link"}>Find out more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
