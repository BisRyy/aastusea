"use client";

import MembershipConfirmation from "@/components/sections/welcome/completed";
import Intro from "@/components/sections/welcome/intro";
import { LinkedInConnect } from "@/components/sections/welcome/linkedin-connect";
import { NotionConnect } from "@/components/sections/welcome/notion-connect";
import { UserDetailsForm } from "@/components/sections/welcome/user-details-form";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const steps: { component: React.ComponentType<any>; props: any }[] = [
  { component: Intro, props: {} },
  { component: UserDetailsForm, props: {} },
  { component: NotionConnect, props: {} },
  { component: LinkedInConnect, props: {} },
  { component: MembershipConfirmation, props: {} },
];

export default function RegistrationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepParam = searchParams.get("step");
    const lastStep = localStorage.getItem("lastStep");
    const lastStepNumber = parseInt(lastStep || "0", 10);

    if (lastStep === steps.length.toString()) {
      router.push("/dashboard");
    } else if (stepParam) {
      const newStep = parseInt(stepParam, 10);
      updateStep(newStep);
    } else if (lastStep && !isNaN(lastStepNumber)) {
      setCurrentStep(lastStepNumber);
    }
  }, [searchParams, router]);

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    localStorage.setItem("lastStep", newStep.toString());
  };

  const nextStep = () => {
    const newStep = currentStep + 1;
    updateStep(newStep);
    if (newStep === steps.length) {
      finishOnboarding();
    }
  };

  const finishOnboarding = () => {
    router.push("/dashboard");
    updateStep(currentStep + 1);
  };

  const CurrentStepComponent = steps[currentStep]?.component;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <BackgroundGradient />
      {CurrentStepComponent && (
        <CurrentStepComponent
          {...steps[currentStep].props}
          next={nextStep}
          finish={finishOnboarding}
        />
      )}
    </div>
  );
}
function BackgroundGradient() {
  return (
    <div
      className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-300 to-purple-600 opacity-80 dark:opacity-30 dark:from-[#80caff] dark:to-[#4f46e5]"
        style={{
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      />
    </div>
  );
}
