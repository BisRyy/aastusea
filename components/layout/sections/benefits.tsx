import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Networking Hub",
    description:
      "Connect with industry professionals and fellow enthusiasts to expand your horizons.",
  },
  {
    icon: "ChartLine",
    title: "Skill Workshops",
    description:
      "Sharpen your abilities with tailored workshops designed to enhance your expertise.",
  },
  {
    icon: "Wallet",
    title: "Project Showcase",
    description:
      "Present your projects and gain valuable feedback while exploring collaboration opportunities.",
  },
  {
    icon: "Sparkle",
    title: "Workspace Access",
    description:
      "Collaborate in our dedicated workspace, fostering creativity and teamwork.",
  },
  {
    icon: "Sparkle",
    title: "Hackathons & Events",
    description:
      "Immerse yourself in exhilarating hackathons and events, fueling your passion for innovation.",
  },
  {
    icon: "Sparkle",
    title: "Mentorship Program",
    description:
      "Access guidance and support from experienced mentors, accelerating your growth in the field.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-3 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Members Benefits
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock a world of opportunities and accelerate your journey in
            software engineering with our exclusive membership benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 w-full col-span-2">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
