import { Link } from "react-router-dom";
import { useState } from "react";

const MainPage = ({ setLoggedInUser }) => {
  const [button, setButton] = useState(true);

  const formSubmit = (event) => {
    event.preventDefault();
    setLoggedInUser(event.target[0].value);
    setButton(false);
  };

  const changeHandler = () => {};

  return (
    <>
      <div className="LoginPage">
        <h2>Please Login:</h2>
        <form onSubmit={formSubmit}>
          <label htmlFor="username">
            Username:
            <br />
            <input
              type="text"
              onChange={changeHandler}
              name="username"
              required
              maxLength={10}
            />
          </label>
          <br />
          <input id="LoginButton" type="submit" value="Submit" />
        </form>

        <Link to="/articles">
          <button disabled={button}>Show me the news!</button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
