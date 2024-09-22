"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
};

const MembershipData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Fill out the Membership Form",
    desc1:
      "Complete the membership form with your details to officially join our association.",
    desc2:
      "This form helps us keep track of our members and ensures you receive all the benefits of membership.",
    image: "/courses/1.png",
    imageDark: "/courses/2.jpg",
  },
  {
    id: "tabTwo",
    title: "Attend the Orientation Session",
    desc1:
      "Attend our orientation session where we provide an overview of our association, its goals, and how you can get involved.",
    desc2:
      "This session is your opportunity to learn more about us and ask any questions you may have.",
    image: "/courses/1.png",
    imageDark: "/courses/2.jpg",
  },
  {
    id: "tabThree",
    title: "Receive Your Membership Confirmation",
    desc1:
      "Once you've completed the membership form and attended the orientation session, you'll receive a membership confirmation email.",
    desc2:
      "This email will officially welcome you to our association and provide you with further details on how to access our resources and events.",
    image: "/courses/1.png",
    imageDark: "/courses/2.jpg",
  },
];

const Membership = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 -z-10 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="block dark:hidden"
            src="/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center rounded-lg shadow-md dark:border-gray-800 dark:bg-gray-900/50 md:flex-nowrap md:items-center lg:gap-8 xl:mb-24 xl:gap-12"
        >
          {MembershipData.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-gray-200 px-6 py-4 last:border-b-0 dark:border-gray-700 md:w-auto md:border-b-0 xl:px-14 xl:py-6 ${
                currentTab === tab.id
                  ? "before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-t-sm before:bg-blue-500"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <p className="text-lg font-medium">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium xl:text-base">
                  {tab.title.split(" ").slice(-2).join(" ")}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          {MembershipData.map((feature) => (
            <div
              className={feature.id === currentTab ? "block" : "hidden"}
              key={feature.id}
            >
              <MembershipItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MembershipItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <div className="flex items-center gap-8 lg:gap-19">
      <div className="md:w-1/2">
        <h2 className="mb-7 text-2xl font-bold xl:text-4xl">{title}</h2>
        <p className="mb-5">{desc1}</p>
        <p className="w-11/12">{desc2}</p>
      </div>
      <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="dark:hidden" />
        <Image src={imageDark} alt={title} fill className="hidden dark:block" />
      </div>
    </div>
  );
};

export default Membership;
