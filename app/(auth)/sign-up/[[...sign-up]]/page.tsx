import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center m-4">
      <SignUp />
    </div>
  );
}
