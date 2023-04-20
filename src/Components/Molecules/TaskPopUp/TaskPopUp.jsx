import React from "react";
import { TaskPopUpContainer, TaskChip } from "./TaskPopUp.style";

const TaskPopUp = ({ data }) => {
  function getTaskKey(data) {
    const [firstKey] = Object.keys(data);
    return firstKey;
  }

  function getTaskData(data) {
    return Object.keys(data)[0] !== "total"
      ? Object.entries(data[Object.keys(data)[0]])
          .filter(([key]) => key !== "total")
          .map(([key, value]) => ({ [key]: value }))
      : [];
  }

  return (
    <TaskPopUpContainer>
      <div className="flex items-center justify-center w-full gap-2 h-1/2">
        <div className="text-[16px] font-semibold">{getTaskKey(data)}</div>
        <div className="text-[34px] font-semibold">
          {data && data[getTaskKey(data)]["total"]}
        </div>
      </div>
      <div className="flex justify-around transition duration-150 ease-in-out">
        {getTaskData(data).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-[22px] font-medium text-iamblack-50">
              {Object.values(item)[0]}
            </div>
            <div className="flex items-center gap-1">
              <TaskChip color={Object.keys(item)[0]} />
              <div className="text-[12px] capitalize">{Object.keys(item)[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </TaskPopUpContainer>
  );
};

export default TaskPopUp;
