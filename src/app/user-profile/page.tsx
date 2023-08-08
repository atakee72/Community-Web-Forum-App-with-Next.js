import UserProfileForm from "@/components/UserProfileForm";
import React from "react";

function UserProfile() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <p>Please fill in the form below</p>

      <UserProfileForm />
    </div>
  );
}

export default UserProfile;
