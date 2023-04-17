import { UserNameChip, UserStackContainer } from "./UserStack.style";
import getColorForLetter from "../../../Helpers/getColorForLetter";

const UserStack = ({ usersData, maxItems = 7}) => {
  const numRemaining = usersData && usersData.length - maxItems;
  const displayedItems = usersData && usersData.slice(1, maxItems);
  const COLORS = ["#0A0E1B", "#498DD6", "#29BB77", "#bb293a"];
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-4">
        <UserStackContainer className="flex">
          <UserNameChip className="w-8 h-8 rounded-full" bgColor={COLORS[0]}>
            {displayedItems && displayedItems[0][0]}
          </UserNameChip>
        </UserStackContainer>
        <UserStackContainer className="flex -space-x-6">
          {displayedItems &&
            displayedItems.map((username, index) => {
              return (
                <UserNameChip
                  className="w-8 h-8 rounded-full"
                  bgColor={() => getColorForLetter(COLORS, username[0])}
                  key={index}
                >
                  {username[0]}
                </UserNameChip>
              );
            })}
        </UserStackContainer>
      </div>
      <div className="text-sm text-iamblack-50">
        {numRemaining > 0 && `+ ${numRemaining}`}
      </div>
    </div>
  );
};

export default UserStack;
