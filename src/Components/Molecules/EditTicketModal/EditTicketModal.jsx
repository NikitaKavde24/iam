import SideModal from "../../Atoms/SideModal/SideModal";
import UserStack from "../UserStack/UserStack";

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
          <div >
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
        <div></div>
        {/* row-3 */}
        <div></div>
        {/* row-4 */}
        <div></div>
        {/* row-5 */}
        <div></div>
        {/* row-6 */}
        <div></div>
        {/* row-7 */}
        <div></div>
        {/* row-8 */}
        <div></div>
        {/* row-9 */}
        <div></div>
        {/* row-10 */}
        <div></div>
      </div>
    </SideModal>
  );
}
