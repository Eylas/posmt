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
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi nihil sint laudantium est libero beatae accusantium explicabo, doloremque eaque accusamus minus aliquid quam modi nostrum! Obcaecati praesentium nihil blanditiis!",
  },
  {
    icon: <></>,
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi nihil sint laudantium est libero beatae accusantium explicabo, doloremque eaque accusamus minus aliquid quam modi nostrum! Obcaecati praesentium nihil blanditiis!",
  },
  {
    icon: <></>,
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi nihil sint laudantium est libero beatae accusantium explicabo, doloremque eaque accusamus minus aliquid quam modi nostrum! Obcaecati praesentium nihil blanditiis!",
  },
  {
    icon: <></>,
    title: "Service 4",
    description:
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quasi nihil sint laudantium est libero beatae accusantium explicabo, doloremque eaque accusamus minus aliquid quam modi nostrum! Obcaecati praesentium nihil blanditiis!",
  },
];

export const HowItWorks = () => {
  return (

    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
