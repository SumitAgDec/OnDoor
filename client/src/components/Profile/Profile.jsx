import React, { useEffect, useState } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userProfile, setSetUserProfile] = useState(null);
  const [userType, setUserType] = useState("");
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log(userDetails);
    setEmail(userDetails.email);
    setFullName(userDetails.fullName);
    setSetUserProfile(userDetails.userProfile);
    setUserType(userDetails.userType);
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 pt-12 ">
        <div className="flex justify-center md:justify-center md:w-1/3 mb-8 md:mb-0">
          <img
            src={`http://localhost:5001${userProfile}`}
            alt="Profile Picture"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>

        <div className="md:w-2/3 md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 mb-6 ">
            Profile Information
          </h1>
          <div className="space-y-4 text-gray-700">
            <div className="flex flex-col md:flex-row">
              <span className="font-semibold md:w-1/3">Full Name:</span>
              <span className="md:w-2/3">{fullName}</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-semibold md:w-1/3">Email:</span>
              <span className="md:w-2/3">{email}</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="font-semibold md:w-1/3">User Type:</span>
              <span className="md:w-2/3">{userType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
