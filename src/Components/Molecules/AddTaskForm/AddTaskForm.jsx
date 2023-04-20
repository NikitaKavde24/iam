import {
  FileField,
  PrimaryButton,
  SelectField,
  TextArea,
  TextField,
} from "../../Atoms";
import Modal from "../../Atoms/Modal/Modal";

export default function AddTaskForm({ isShowForm, handleCancel = () => {} }) {
  return (
    <Modal isOpen={isShowForm} isHeader={true} headerText={"Adding Task"}>
      {/* modal body */}
      <div className="flex flex-col px-[30px]">
        {/* row-1 */}
        <div className="mt-10">
          <div className="text-[30px] font-semibold text-left leading-[17px] text-iamblack">
            Project Xpress
          </div>
          <div className="text-xs text-left leading-[17px] text-iamblack-50 mt-4 font-medium">
            Created on April 20, 2023
          </div>
        </div>
        {/* row-2 */}
        <div className="flex justify-between mt-12 gap-7">
          {/* <TextField
            label={"Task Category"}
            placeholder={"Select Task Type"}
            className={"w-[348px]"}
            error={" "}
          /> */}
          <SelectField
            label={"Task Category"}
            placeholder={"Select Task Type"}
            className={"w-[348px]"}
          />
          <TextField
            label={"Feature Name"}
            placeholder={"Feature Name"}
            className={"w-[232px]"}
          />
          <TextField
            label={"Main Ticket ID."}
            placeholder={"Ticket Number"}
            className={"w-[348px]"}
          />
          <TextField
            label={"Sub Ticket ID"}
            placeholder={"Sub Ticket Number"}
            className={"w-[348px]"}
          />
        </div>
        {/* row-2 */}
        <div className="flex justify-between mt-8 gap-7">
          <TextField
            label={"Epic ID"}
            placeholder={"Epic ID"}
            className={"min-w-[348px]"}
          />
          <TextField
            label={"Estimated Hours."}
            placeholder={"Expected Hours"}
            className={"min-w-[180px]"}
          />
          <TextField
            label={"Exp. End Date"}
            placeholder={"DD/MM/YYYY"}
            className={"min-w-[180px]"}
          />
          <TextField
            label={"Priority"}
            placeholder={"Select Priority Level"}
            className={"min-w-[230px]"}
          />
          <TextField
            label={"Attach Link"}
            placeholder={"Paste Here"}
            className={"min-w-[301px]"}
            isAttachIcon={true}
          />
        </div>
        {/* row-3 */}
        <div className="flex justify-between mt-8 gap-7">
          <TextArea
            label={"Description"}
            placeholder={"Description"}
            charLimit={"340"}
            className={"min-w-[824px]"}
          />
          <FileField
            label={"Attachments"}
            placeholder={"Upload Screenshots or Doc, PPT"}
            className={"min-w-[507px]"}
          />
        </div>
        {/* row-4 */}
        <div className="flex justify-end gap-10 mt-11">
          <div className="w-[160px]">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
          <button
            onClick={handleCancel}
            type="button"
            className="mr-4 text-lg font-medium hover:underline text-iamblue"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
