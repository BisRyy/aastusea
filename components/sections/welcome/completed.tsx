import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ConfettiComponent from "./confetti";
import { useUser } from "@clerk/nextjs";

async function updateUserPublicMetadata(
  userId: string,
  key: string,
  value: any
) {
  try {
    const response = await fetch("/api/user/private", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, key, value }),
    });
    if (!response.ok) {
      throw new Error("Failed to update user metadata");
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error updating user metadata:", error);
    throw error;
  }
}

const MembershipConfirmation = ({
  next,
  finish,
}: {
  next: () => void;
  finish: () => void;
}) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-foreground">
      <div className="max-w-md w-full space-y-8 p-10 bg-card/50 rounded-xl shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold">
            Welcome to AASTU SEA, {user?.fullName}!
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your membership has been confirmed. We&apos;re excited to have you
            on board!
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow">
            <Button
              className="w-full"
              onClick={() => {
                updateUserPublicMetadata(
                  user?.id as string,
                  "isOnboardingCompleted",
                  true
                );
                finish();
              }}
            >
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
