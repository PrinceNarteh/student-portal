import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <Card bgColor="bg-lightTeal" />
        <Card bgColor="bg-darkTeal" />
        <Card bgColor="bg-navyBlue" />
      </div>
    </div>
  );
};

export default Dashboard;
