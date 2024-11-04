import SignIn from "@components/auth/login";
import SignUp from "@components/auth/register";
import AuthDetails from "@components/auth/authDetails";

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
