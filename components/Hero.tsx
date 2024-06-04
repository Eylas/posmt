import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import Container from "./ui/container";



export const Hero = () => {
  return (
    <section className="w-full bg-neutral-800 text-white h-[75vh]">
      <Container>
          <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
              <main className="text-5xl md:text-6xl font-bold">
                <h1>SOME TEXT GOES HERE</h1>
              </main>

              <p className="text-xl md:w-10/12 mx-auto lg:mx-0">
                Build your React landing page effortlessly with the required sections
                to your project.
              </p>

              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button className="w-full md:w-1/3 text-white">Book a session</Button>
              </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
          </section>
      </Container>
    </section>
  );
};
