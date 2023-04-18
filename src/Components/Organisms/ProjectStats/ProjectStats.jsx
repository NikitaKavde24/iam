import React, { useState } from "react";
import { Divider } from "./ProjectStats.style";
import TaskPopUp from "../../Molecules/TaskPopUp/TaskPopUp";

const ProjectStats = ({ data, isEndDivider = false }) => {
  const [show, setShow] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const handleHover = (id) => {
    setShow(true);
    setShowIndex(id + 1);
  };
  return (
    <div className="flex items-center justify-between w-1/2 mx-10">
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <div
              key={index}
              onMouseOver={() => handleHover(index)}
              onMouseLeave={() => setShow(false)}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="pt-6 mb-4 text-4xl font-semibold px-7 text-iamblack">
                  {item[Object.keys(item)[0]]["total"] &&
                    item[Object.keys(item)[0]]["total"]}
                </div>
                <div className="mb-6 text-sm font-semibold text-iamblack">
                  {Object.keys(item)[0] && Object.keys(item)[0]}
                </div>
                {show && showIndex && showIndex === index + 1 && (
                  <TaskPopUp data={item} />
                )}
              </div>
            </div>
            {data && index !== data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProjectStats;
