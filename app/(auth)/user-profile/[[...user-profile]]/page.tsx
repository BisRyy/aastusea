import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex items-center justify-center m-3">
    <div className="flex w-full h-screen items-center justify-center m-3">
      {/* embed another page here */}
      <iframe
        src="http://localhost:3000/user-profile"
        width="100%"
        height="100%"
        className="border-none"
      ></iframe>
    </div>
    <div className="flex w-[80%] items-center justify-center m-3">
      <UserProfile path="/user-profile" />
    </div>
  </div>
);
export default UserProfilePage;
