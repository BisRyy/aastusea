import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import Link from "next/link";

interface sponsorsProps {
  icon: string;
  name: string;
  id: number;
  href: string;
  image: string;
  imageLight: string;
}

const sponsors: sponsorsProps[] = [
  {
    id: 1,
    href: "https://aastu.edu.et/",
    icon: "Crown",
    name: "AASTU",
    image: "/logos/aastu.jpg",
    imageLight: "/logos/aastu.jpg",
  },
  {
    id: 2,
    href: "https://microsoft.com?wt.mc_id=studentamb_410163",
    icon: "Crown",
    name: "Microsoft",
    image: "/logos/mlsa.png",
    imageLight: "/logos/mlsa.png",
  },
  {
    id: 3,
    href: "https://github.com/?wt.mc_id=studentamb_410163",
    icon: "Github",
    name: "Github",
    image: "/logos/github.svg",
    imageLight: "/logos/github-white.svg",
  },
  {
    id: 4,
    href: "https://ntn.so/bisratk",
    icon: "Ghost",
    name: "Notion",
    image: "/logos/campus-leader-black.png",
    imageLight: "/logos/campus-leader-white.png",
  },
  {
    id: 5,
    href: "https://efuyegela.com/",
    icon: "Puzzle",
    name: "Efuye Gela",
    image: "/logos/efuye-gela.png",
    imageLight: "/logos/efuye-gela.png",
  },
  {
    id: 6,
    href: "https://gdscaastu.club/",
    icon: "Squirrel",
    name: "GDSC AASTU",
    image: "/logos/gdsc.png",
    imageLight: "/logos/gdsc.png",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container min-w-screen mx-auto lg:p-12">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-center">
        Our Partners
      </h1>

      <div className="md:mx-auto w-full">
        <Marquee
          className="gap-[3rem] md:gap-[6rem]"
          fade
          innerClassName="gap-[3rem] md:gap-[6rem]"
          pauseOnHover
        >
          {sponsors.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center w-[120px] md:w-[180px] h-[80px] md:h-[100px]"
            >
              <Link
                href={brand.href}
                className="relative w-full h-full cursor-pointer"
              >
                <Image
                  className="opacity-75 transition-all duration-300 hover:opacity-100 dark:hidden"
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  style={{ objectFit: "contain" }}
                  title={brand.name}
                />
                <Image
                  className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
                  src={brand.imageLight}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 120px, 180px"
                  style={{ objectFit: "contain" }}
                  title={brand.name}
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
      {/* <div className="flex justify-center mt-20">
        <Button variant="default" className="text-lg md:text-xl">
          <Icon name="Heart" size={24} color="white" className="mr-2" />
          Become a sponsor
        </Button>
      </div> */}
    </section>
  );
};
