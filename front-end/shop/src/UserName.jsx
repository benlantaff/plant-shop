import { userSelector } from "react-dom";

function Username() {
  const username = userSelector((state) => state.user, username);

  if (!username) return null;
  return <div>{username}</div>;
}
export default Username;
