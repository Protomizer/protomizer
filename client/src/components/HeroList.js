import React from "react";
import ListItem from "./ListItem";

const HeroList = () => {
  return (
    <ul className="text-[#803FFE]">
      <ListItem content="Set Up Asynchronous Tests & Invite Your Users" />
      <ListItem content="Choose From 5 Different Test Types" />
      <ListItem content="100% GDPR and privacy compliant" />
    </ul>
  );
};

export default HeroList;
