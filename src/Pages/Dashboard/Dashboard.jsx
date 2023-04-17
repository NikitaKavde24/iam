import React from "react";
import { PrimaryButton, Table, Card, Tiles } from "../../Components/Atoms";
import { ProjectInfoCard } from "../../Components/Organisms";

function Dashboard() {
  return (
    <div>
      <Card className="flex flex-row">
       <ProjectInfoCard />
        <Tiles />
      </Card>
      <Card>
        <Table />
      </Card>
    </div>
  );
}

export default Dashboard;
