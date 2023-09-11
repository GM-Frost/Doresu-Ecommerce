import { SingleUserData } from "./SingleUserData";
import SingleUserProps from "./SingleUserProps";

const SingleUser = () => {
  return (
    <>
      <div className="users">
        <SingleUserProps {...SingleUserData} />
      </div>
    </>
  );
};

export default SingleUser;
