import SignIn from "components/Auth/login";
import SignUp from "components/Auth/register";
import AuthDetails from "components/Auth/authDetails";

import "./styles.scss";

const UserAuth = () => {
  return (
    <div className="PageBody">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
};

export default UserAuth;
