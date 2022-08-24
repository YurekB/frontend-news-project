import { Link } from "react-router-dom";

const Header = ({ loggedInUser }) => {
  const checkUser = () => {
    if (loggedInUser === "") {
      return "Not logged in!";
    } else {
      return `Logged in as ${loggedInUser}`;
    }
  };

  return (
    <>
      <Link to="/">
        <h1>NC NEWS</h1>
      </Link>
      <p className="LoggedIn">{checkUser()}</p>
    </>
  );
};

export default Header;
