import UserProfileForm from "@/components/UserProfileForm";
import React from "react";

function UserProfile() {
  return (
    <div className="p-16 max-w-3xl mx-auto text-[#814256] min-h-screen">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p>Complete your profile</p>

      <UserProfileForm />
    </div>
  );
}

export default UserProfile;
