import React from "react";
import { GoSettings } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { PrimaryButton, SearchField } from "../../Atoms";
import { useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

export default function TableHeader() {
    const [isShowAddTaskForm,setIsShowAddTaskForm]=useState(false)
  return (
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
            <FaRegCalendarAlt className="h-6 w-6" />
            <span className="mx-2">Schedule Event(5)</span>
            <BsFillPlayFill className="h-4 w-4" />
          </PrimaryButton>
        </div>
        <div className="w-12 mr-5 ml-7">
          <PrimaryButton>
            <GoSettings className="rotate-90 h-6 w-8" />
          </PrimaryButton>
        </div>
        <div className="w-40">
          <PrimaryButton onButtonClick={()=>setIsShowAddTaskForm(true)} >Add Task</PrimaryButton>
          <AddTaskForm isShowForm={isShowAddTaskForm}/>
        </div>
      </div>
    </div>
  );
}
