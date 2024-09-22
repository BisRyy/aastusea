import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the Software Engineers Association?",
    answer:
      "The Software Engineers Association is a community of software engineers who are passionate about technology and innovation. We are committed to empowering the next generation of software engineers.",
    value: "item-1",
  },
  {
    question: "How can I join the AASTU Software Engineers Association?",
    answer:
      "You can join the SEA by filling out the membership form on the association&apos;s website. Membership fees vary depending on your status (student, professional, or corporate).",
    value: "item-2",
  },
  {
    question: "Who can join the Software Engineers Association?",
    answer:
      "Our association is open to all students currently enrolled at AASTU who have an interest in software engineers. We also welcome alumni who wish to stay connected and contribute to the community.",
    value: "item-3",
  },
  {
    question: "Can I get involved in organizing events?",
    answer:
      "Absolutely! We encourage our members to take an active role in the association. If you are interested in helping to organize events or have ideas for new initiatives, please reach out to us. We have committees and volunteer opportunities where you can contribute your skills and gain leadership experience.",
    value: "item-4",
  },
  {
    question: "How can I stay updated on events and activities?",
    answer:
      "We regularly post updates on our website, social media platforms, and in our newsletter. Make sure to follow us on social media and sign up for our newsletter to stay informed about upcoming events and activities.",
    value: "item-5",
  },
  {
    question: "How can I get involved in the Software Engineers Association?",
    answer:
      "You can get involved in the Software Engineers Association by attending our events, joining our committees, and volunteering for our initiatives. You can also follow us on social media and sign up for our newsletter to stay informed about upcoming events and activities.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
