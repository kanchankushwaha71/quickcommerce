import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProfile(user); // Set the profile data if it exists in localStorage
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>; // Wait until the profile data is loaded
  }

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <div className="mb-4">
          <label className="block text-sm">Name:</label>
          <p>{profile.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm">Email:</label>
          <p>{profile.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm">Phone:</label>
          <p>{profile.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm">Address:</label>
          <p>{profile.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
