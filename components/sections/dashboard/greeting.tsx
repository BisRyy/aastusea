import { currentUser } from "@clerk/nextjs/server";

const Greeting: React.FC = async () => {
  const user = await currentUser();
  return (
    <div className="flex flex-col items-start mx-2 my-4">
      <h1 className="text-2xl font-bold">Hi, {user?.firstName ? user.firstName : "there"} 👋</h1>
      <p className="text-sm">Let&apos;s learn something new today!</p>
    </div>
  );
};

export default Greeting;
