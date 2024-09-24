import { CommunitySection } from "@/components/sections/landing/community";
// import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/sections/landing/faq";
// import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/sections/landing/hero";
import CoursesPage from "./learning/page";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/sections/landing/sponsors";
import { TeamSection } from "@/components/sections/landing/team";
import { CourseSection } from "@/components/sections/landing/courses";
import { BenefitsSection } from "@/components/sections/landing/benefits";
import Facts from "@/components/sections/landing/facts";
import MembershipSection from "@/components/sections/landing/membership";
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
