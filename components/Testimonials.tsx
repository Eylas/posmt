
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  stars: number;
}

const testimonials: TestimonialProps[] = [
  {
    image: "",
    name: "Terry Mitchelmore",
    userName: "@terry.mitchelmore.7",
    comment: "I have suffered with neck and back issues for the past year and a half and the sports massage therapy with paul was absolutely great! From great communication to outstanding practical skill he was able to identify the issue promptly and get to work!My issues are far from being a quick fix but Paul has got me through the first step to recovery that I will surely return to achieve.",
    stars: 4
  },
  {
    image: "",
    name: "Rob Owen",
    userName: "@rob.owen.79",
    comment:
      "As a runner I have been suffering with several aches and pains, predominantly  my calves and ankles. Paul was excellent, focusing on all the areas I’ve had problems with. Just one session has made so much difference. The home visit is so convenient and Paul makes you feel at ease straight away. I would highly recommend, and will definitely be booking my next session soon",
      stars: 5
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Dyfan Jones",
    userName: "@dyfan.jones.37",
    comment:
      "I have been suffering with my back for many years and seen several people about it and got nowhere. I've had 2 sessions with paul, deep massages on my back and the right side of my body, i couldn't believe the improvements and movement to my body just after 2 sessions with Paul. I would highly recommend and I will be going back!",
    stars:5
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why Our Clients 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Keep Coming Back{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment, stars }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
              <CardFooter>
                <div className="stars">
                  <Star>{stars}</Star>
                </div>                
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
