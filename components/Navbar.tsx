import Link from "next/link";
import { Button } from "./ui/button";
import { CalendarCheck, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Container from "./ui/container";
import mainLogo from "../assets/Main logo.jpg";
import Image from "next/image";

const routes = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "Services",
  },
  {
    href: "/",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <header className="sm:flex sm:justify-evenly py-3 px-4 border-b bg-black text-white">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between mx-auto w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <div className="flex flex-col items-center justify-center">
                  <Menu className="h-6 md:hidden w-6"></Menu>
                  <p className="md:hidden">Menu</p>
                </div>
              </SheetTrigger>
              <SheetContent
                side={"top"}
                className="flex flex-col gap-4 bg-black text-white"
              >
                <Link href={"/"} className="m-3 mx-auto">
                  <Image
                    src={mainLogo}
                    alt="logo"
                    height={90}
                    width={90}
                  ></Image>
                </Link>
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </SheetContent>
            </Sheet>
          </div>
          <Link href={"/"} className="m-3">
            <Image
              src={mainLogo}
              alt="Nodehex logo"
              height={120}
              width={120}
            ></Image>
          </Link>
          <nav className="mx-6 flex items center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button key={i} asChild variant={"ghost"}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button size={"lg"} className="text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
