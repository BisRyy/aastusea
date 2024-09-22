import { CommunitySection } from "@/components/layout/sections/community";
// import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import CoursesPage from "./learning/page";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { CourseSection } from "@/components/layout/sections/courses";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import Facts from "@/components/layout/sections/facts";
import MembershipSection from "@/components/layout/sections/membership";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "AASTU Software Engineers Association",
  description:
    "We are a community of software engineers who are passionate about technology and innovation. We are committed to empowering the next generation of software engineers.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <Facts />
      <MembershipSection />
      <CourseSection />
      {/* <TeamSection /> */}
      <CommunitySection />
      <FAQSection />
    </>
  );
}
// <ServicesSection />
// <TestimonialSection />
// <ContactSection />
// <FooterSection />
