import { CommentCardContainer } from "./CommentCard.style";
const CommentCard = ({ data }) => {
  return <CommentCardContainer>{JSON.stringify(data)}</CommentCardContainer>;
};

export default CommentCard;
