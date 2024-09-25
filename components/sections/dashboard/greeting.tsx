"use client";

import { useUser } from "@clerk/nextjs";

const Greeting: React.FC = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="flex flex-col items-start mx-4 my-4">
      <h1 className="text-2xl font-bold">
        Hi, {isLoaded && isSignedIn ? user?.firstName : "there"} 👋
      </h1>
      <p className="text-sm">Let&apos;s learn something new today!</p>
    </div>
  );
};

export default Greeting;
