"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CounterAnimation = ({
  end,
  duration,
}: {
  end: number;
  duration: number;
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("counter-section")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <span>{count}</span>;
};

const FunFact = () => {
  const [usersCount, setUsersCount] = useState(0);

  const getUsersCount = async () => {
    const res = await fetch("/api/user/users");
    const data = await res.json();
    setUsersCount(data.total_count);
  };

  useEffect(() => {
    getUsersCount();
  }, []);

  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-[90px] 2xl:px-0">
        <div className="relative z-10 mx-auto max-w-[1390px] rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-[90px] dark:bg-gradient-to-t dark:from-gray-900 dark:to-transparent dark:stroke-gray-700 xl:py-[110px]">
          <Image
            width={335}
            height={384}
            src="/shape/shape-04.png"
            alt="Man"
            className="absolute -left-[60px] -top-[100px] -z-10 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-10"
          />

          <Image
            fill
            src="/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-10 dark:hidden"
          />
          <Image
            fill
            src="/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-10 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate-fade-down mx-auto mb-[50px] px-4 text-center md:w-4/5 md:px-0 lg:mb-[70px] lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold xl:text-[40px]">
              Trusted by AASTU Software Engineering Department.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Backed by AASTU, Our association collaborates with Software
              Engineering Department and Student Union to provide you with
              unparalleled opportunities.
            </p>
          </motion.div>

          <div
            id="counter-section"
            className="flex flex-wrap justify-center gap-8 lg:gap-[170px]"
          >
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate-fade-down text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
                <CounterAnimation end={usersCount} duration={5000} />+
              </h3>
              <p className="text-lg lg:text-xl">Students Registered</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate-fade-down text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
                <CounterAnimation end={3} duration={2000} />+
              </h3>
              <p className="text-lg lg:text-xl">Events Planned</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate-fade-down text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
                <CounterAnimation end={2} duration={2000} />
              </h3>
              <p className="text-lg lg:text-xl">Projects Started</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
