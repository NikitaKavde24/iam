import { ProjectInfoCardContainer } from "./ProjectInfoCard.style";
import { UserStack } from "../../Molecules";
const ProjectInfoCard = ({className}) => {
  return (
    <ProjectInfoCardContainer className={className}>
      <div className="mb-1 text-3xl font-semibold text-iamblack">
        Project Name 
      </div>
      <div className="mb-3 text-xs font-medium text-iamblack-50">Created on 01/01/2023</div>
      <div>
        <UserStack
          usersData={Data}
        ></UserStack>
      </div>
    </ProjectInfoCardContainer>
  );
};

export default ProjectInfoCard;

//   <PrimaryButton> Add User</PrimaryButton>


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
]