"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Register on Our Website",
    desc1:
      "Create an account on our website to start your journey with our association.",
    desc2:
      "This initial step allows you to access our member-only resources and stay updated with our latest news and events.",
    image: "/membership/register.png",
    imageDark: "/membership/register-dark.png",
  },
  {
    id: "tabTwo",
    title: "Fill out the Membership Form",
    desc1:
      "Complete the detailed membership form to provide us with more information about your interests and skills.",
    desc2:
      "This form helps us tailor our services to your needs and match you with relevant opportunities within our community.",
    image: "/membership/membership-form.png",
    imageDark: "/membership/membership-form-dark.png",
  },
  {
    id: "tabThree",
    title: "Join Our Notion Workspace",
    desc1:
      "After your membership is confirmed, you'll receive an invitation to join our Notion workspace.",
    desc2:
      "This collaborative platform is where we share resources, organize projects, and facilitate communication among our members.",
    image: "/membership/notion-hq.png",
    imageDark: "/membership/notion-space.png",
  },
];

const Membership = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((prevTab) => {
        const currentIndex = MembershipData.findIndex(
          (tab) => tab.id === prevTab
        );
        const nextIndex = (currentIndex + 1) % MembershipData.length;
        return MembershipData[nextIndex].id;
      });
    }, 4000); // Changed from 2000 to 4000 for a slower transition

    return () => clearInterval(interval);
  }, []);

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
          <AnimatePresence mode="wait">
            {MembershipData.map(
              (feature) =>
                feature.id === currentTab && (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }} // Increased from 0.3 to 0.5 for smoother transition
                  >
                    <MembershipItem featureTab={feature} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
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
