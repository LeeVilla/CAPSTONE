import React from "react";
import Header from "../components/Header";
import UserField from "../components/UserField";

const User = () => {
  return (
    <div>
      <Header back />
      <p>This is the User Page. Track your assets here</p>
      <UserField />
     
    </div>
  );
};
export default User;
