import { PrimaryButton, SelectField, TextArea, TextField } from "../../Atoms";
import SideModal from "../../Atoms/SideModal/SideModal";
import { TaskChip } from "../TaskPopUp/TaskPopUp.style";
import UserStack from "../UserStack/UserStack";
import { HiPlus } from "react-icons/hi";

export default function EditTicketModal({ isOpen, onBack = () => {} }) {
  const Data = [
    "cleverkitten",
    "techguru23",
    "naturelover88",
    "musicjunkie12",
    "bookworm42",
    "foodiegalore",
    "Bdventureseeker99",
    "fitnessfanatic7",
    "sanderlust22",
    "rtofwords11",
    "fleverkitten",
    "techguru23",
    "naturelover88",
    "cleverkitten",
    "techguru23",

    "naturelover88",

    "musicjunkie12",

    "bookworm42",

    "foodiegalore",

    "adventureseeker99",

    "fitnessfanatic7",

    "wanderlust22",

    "artofwords11",

    "cleverkitten",

    "techguru23",

    "naturelover88",

    "musicjunkie12",

    "bookworm42",

    "foodiegalore",

    "adventureseeker99",

    "fitnessfanatic7",

    "wanderlust22",

    "artofwords11",

    "musicjunkie12",

    "bookworm42",

    "foodiegalore",

    "adventureseeker99",

    "fitnessfanatic7",

    "wanderlust22",

    "Wrtofwords11",
  ];
  return (
    <SideModal isOpen={isOpen} onBack={onBack}>
      <div className="flex flex-col mx-[50px] mt-4">
        {/* row-1 */}
        <div className="flex justify-between">
          <div>
            <div className="text-[30px] font-semibold text-left leading-[17px] text-iamblack">
              Project Xpress
            </div>
            <div className="text-xs text-left leading-[17px] text-iamblack-50 mt-2">
              Created on 01/01/2023
            </div>
          </div>

          <UserStack usersData={Data} />
        </div>

        {/* row-2 */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <TaskChip color={"critical"} />
            <span className="capitalize">critical</span>
          </div>

          <div className="text-lg text-left leading-[17px] text-iamblack mt-4">
            [Design]Screen Number 123 Has no cancel in Pay....
          </div>
        </div>

        {/* row-3 */}
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <span className="text-base text-left leading-[17px] text-iamblack ">
              Ticket ID:
            </span>
            <span className="text-lg font-medium text-left leading-[17px] text-iamblack ml-1 ">
              B29847
            </span>
          </div>
          <div>
            <span className="text-base text-left leading-[17px] text-iamblack ">
              Sub Ticket ID:
            </span>
            <span className="text-lg font-medium text-left leading-[17px] text-iamblack ml-1">
              B29847
            </span>
          </div>
          <div className="flex">
            <span className="text-base text-left leading-[17px] text-iamblack ">
              Assignee:
            </span>
            <div className="h-4 w-4 bg-iamblue text-[7px] text-iamwhite text-center rounded-full pt-1 ml-1">
              {" "}
              SH
            </div>
            <span className="text-lg font-medium text-left leading-[17px] text-iamblack ml-1 ">
              Sara H
            </span>
          </div>
          <div>
            <span className="text-base text-left leading-[17px] text-iamblack ">
              Exp. End Date:
            </span>
            <span className="text-lg font-medium text-left leading-[17px] text-iamblack ml-1 ">
              14 Apr,2023
            </span>
          </div>
        </div>

        {/* row-4 */}
        <div className="mt-10">
          <div className="flex justify-between">
            <TextField
              label={"Exp. Hours:"}
              placeholder={"9hrs"}
              className="w-32"
            />
            <TextField
              label={"Actual End Date:"}
              placeholder={"15 Apr,2023"}
              className="w-60"
            />
            <SelectField
              label={"Status:"}
              placeholder={"Done"}
              className="w-[148px]"
            />
          </div>
          <div className="mt-5">
            <TextArea
              label={"Description:"}
              placeholder={"Description"}
              className="w-[548px] h-[132px]"
            />
          </div>
          <div className="mt-5 flex items-end">
            <TextField
              label={"Attach Link"}
              placeholder={"paste here"}
              isAttachIcon={true}
              className="w-[300px]"
            />
            <div className="flex flex-col ml-[63px] gap-1 justify-center items-center mt-3 h-[58px] w-[58px] rounded-[10px] border border-dashed border-iamblue-900">
              <HiPlus className="h-4 w-4 text-iamblack" />
              <span className="text-[10px] font-medium leading-[17px] text-iamblack-50">
                Attach
              </span>
            </div>
          </div>
        </div>

        {/* row-5 */}
        <div className="flex justify-center mt-20 gap-10">
          <div className="w-[160px]">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
          <button
            onClick={onBack}
            type="button"
            className="font-medium text-lg underline text-iamblue mr-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </SideModal>
  );
}
