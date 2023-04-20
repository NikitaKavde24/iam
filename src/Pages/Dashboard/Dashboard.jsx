import React, { useState } from "react";
import {
  Table,
  Card,
  Tiles,
  PrimaryButton,
  Chip,
  CommentButton,
} from "../../Components/Atoms";
import CustomAreaChart from "../../Components/Molecules/AreaChart/AreaChart";
import {
  CommentCard,
  ProjectInfoCard,
  ProjectStats,
} from "../../Components/Organisms";
import formatTaskData from "../../Helpers/formatTaskData";
import TableHeader from "../../Components/Molecules/TableHeader/TableHeader";
import { ImPencil } from "react-icons/im";

function Dashboard() {
  const [showCommentPanel, setShowCommentPannel] = useState(false);
  const tableColumns = [
    { column: "S.No", label: "S.No" },
    { column: "Project Name", label: "Project Name" },
    {
      column: "Ticket ID",
      label: "Ticket ID",
    },
    {
      column: "Sub Ticket ID",
      label: "Sub Ticket ID",
    },
    {
      column: "Description",
      label: "Description",
    },
    {
      column: "Start Date",
      label: "Start Date",
    },
    {
      column: "Expected End Date",
      label: "Expected End Date",
    },
    {
      column: "Actual End Date",
      label: "Actual End Date",
    },
    {
      column: "Actual TAT",
      label: "Actual TAT",
    },
    {
      column: "Comment",
      label: "Comment",
      cell: (row) => {
        return <CommentButton data={row} CommentBody={<CommentCard data={row}/>} />;
      },
    },
    {
      column: "Status",
      label: "Status",
      cell: (row) => {
        return <Chip status={row.Status}>{row.Status}</Chip>;
      },
    },
    {
      column: "Actions",
      label: "Actions",
      cell: (row) => {
        return (
          <div>
            <PrimaryButton>
              <ImPencil className="w-8 h-6" />
            </PrimaryButton>
          </div>
        );
      },
    },
  ];

  const sampleTableData = [
    {
      "S.No": "01",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Hold",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "02",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Hold",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "03",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Hold",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "04",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Done",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "05",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Done",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "06",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "In Progress",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "07",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Done",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
    {
      "S.No": "08",
      Description: "This is some description",
      "Ticket ID": "09865",
      "Project Name": "Xpress",
      Actions: "Edit/delete",
      Status: "Done",
      Comment: "updated",
      "Actual TAT": "20:00",
      "Actual End Date": "Apr 06, 2023",
      "Expected End Date": "Apr 06, 2023",
      "Satrt Date": "Apr 06, 2023",
    },
  ];

  const data = {
    cards_list: {
      Completed_tasks: {
        low: 1,
        high: 1,
        medium: 2,
        complex: 1,
        total: 5,
      },
      Pending_tasks: {
        low: 1,
        high: 1,
        medium: 0,
        complex: 2,
        total: 4,
      },
      InProgress_tasks: {
        low: 100,
        high: 0,
        medium: 1,
        complex: 2,
        total: 6,
      },
      Total_tasks: 15,
    },
  };

  const onCommentClickHandler = (row) => {
    alert(JSON.stringify(row));
    setShowCommentPannel(true);
  };

  return (
    <div>
      <Card className="flex flex-row">
        <ProjectInfoCard className="mr-10" />
        <ProjectStats data={data && formatTaskData(data)} />
        <CustomAreaChart />
      </Card>
      <Card>
        {/* table header start */}
        <TableHeader />
        {/* table header end */}
        <Table columns={tableColumns} data={sampleTableData} />
      </Card>
    </div>
  );
}

export default Dashboard;
