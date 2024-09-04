import "./auth.scss";
import SignIn from "../../components/auth/login";
import SignUp from "../../components/auth/register";
import AuthDetails from "../../components/auth/authDetails";

const UserAuth = () => {
    return (
        <div className="PageBody">
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    )
}

export default UserAuth;