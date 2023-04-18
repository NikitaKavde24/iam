import React from "react";
import { PrimaryButton, Table, Card, Tiles } from "../../Components/Atoms";
import CustomAreaChart from "../../Components/Molecules/AreaChart/AreaChart";
import { ProjectInfoCard, ProjectStats } from "../../Components/Organisms";
import formatTaskData from "../../Helpers/formatTaskData";
import SearchField from "../../Components/Atoms/FormFields/SearchField";
import { GoSettings } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

function Dashboard() {
  return (
    <div>
      <Card className="flex flex-row">
        <ProjectInfoCard className="mr-10"/>
        <ProjectStats data={data && formatTaskData(data)}/>
        <CustomAreaChart />
      </Card>
      <Card>
        {/* table header start */}
        <div className="flex justify-between mb-6">
          <div className="flex items-center ml-[50px] gap-9">
            <div className="font-semibold text-2xl text left text-iamblack leading-[17px]">
              All Tickets
            </div>
            <div className="w-[288px]">
              <SearchField
                onSearch={(text) => {
                  alert(text);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-52">
              <PrimaryButton>
                <FaRegCalendarAlt className="w-6 h-6" />
                <span className="mx-2">Schedule Event(5)</span>
                <BsFillPlayFill className="w-4 h-4"/>
              </PrimaryButton>
            </div>
            <div className="w-12 mr-5 ml-7">
              <PrimaryButton>
                <GoSettings className="w-8 h-6 rotate-90" />
              </PrimaryButton>
            </div>
            <div className="w-40">
              <PrimaryButton>Add Task</PrimaryButton>
            </div>
          </div>
        </div>
        {/* table header end */}
        <Table />
      </Card>
    </div>
  );
}

export default Dashboard;

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
