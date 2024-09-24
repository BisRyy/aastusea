import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import ConfettiComponent from "./confetti";

const MembershipConfirmation = ({
  next,
  finish,
}: {
  next: () => void;
  finish: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-foreground">
      <div className="max-w-md w-full space-y-8 p-10 bg-card/50 rounded-xl shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold">
            Welcome to AASTU SEA!
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your membership has been confirmed. We&apos;re excited to have you
            on board!
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow">
            <Button className="w-full" onClick={finish}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
      <ConfettiComponent />
    </div>
  );
};

export default MembershipConfirmation;
