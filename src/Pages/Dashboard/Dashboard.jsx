import React from "react";
import { PrimaryButton, Table, Card, Tiles } from "../../Components/Atoms";
import { ProjectInfoCard, ProjectStats } from "../../Components/Organisms";
import formatTaskData from "../../Helpers/formatTaskData";

function Dashboard() {
  return (
    <div>
      <Card className="flex flex-row">
        <ProjectInfoCard className="mr-24"/>
        <ProjectStats data={data && formatTaskData(data)}/>
      </Card>
      <Card>
        <Table />
      </Card>
    </div>
  );
}

export default Dashboard;



const data = {
  "cards_list": {
    "Completed_tasks": {
      "low": 1,
      "high": 1,
      "medium": 2,
      "complex": 1,
      "total": 5
    },
    "Pending_tasks": {
      "low": 1,
      "high": 1,
      "medium": 0,
      "complex": 2,
      "total": 4
    },
    "InProgress_tasks": {
      "low": 100,
      "high": 0,
      "medium": 1,
      "complex": 2,
      "total": 6
    },
    "Total_tasks": 15
  }
}




