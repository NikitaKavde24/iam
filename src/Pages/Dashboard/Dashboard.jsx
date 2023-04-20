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
import SideModal from "../../Components/Atoms/SideModal/SideModal";
import EditTicketModal from "../../Components/Molecules/EditTicketModal/EditTicketModal";

function Dashboard() {
  const [showCommentPanel, setShowCommentPannel] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEdit = () => {
    setShowEditModal(!showEditModal);
  };
  const tableColumns = [
    { column: "S.No", label: "S.No" },
    { column: "Project Name", label: "Project Name", breakWord: true },
    {
      column: "Ticket ID",
      label: "Ticket ID",
    },
    {
      column: "Sub Ticket ID",
      label: "Sub Ticket ID",
      breakWord: true,
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
      breakWord: true,
    },
    {
      column: "Actual End Date",
      label: "Actual End Date",
      breakWord: true,
    },
    {
      column: "Expected TAT",
      label: "Expected TAT",
      breakWord: true,
    },
    {
      column: "Actual TAT",
      label: "Actual TAT",
      breakWord:true
    },
    {
      column: "Comment",
      label: "Comment",
      cell: (row) => {
        return (
          <CommentButton data={row} CommentBody={<CommentCard data={row} />} />
        );
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
            <PrimaryButton onButtonClick={handleEdit}>
              <ImPencil className="w-8 h-6" />
            </PrimaryButton>
            <EditTicketModal isOpen={showEditModal} onBack={handleEdit} />
          </div>
        );
      },
    },
  ];

  const sampleTableData = [
    {
      "S.No": "1",
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
      "S.No": "2",
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
      "S.No": "3",
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
      "S.No": "4",
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
      "S.No": "5",
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
      "S.No": "6",
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
      "S.No": "7",
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
      "S.No": "8",
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
        low: 3,
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
