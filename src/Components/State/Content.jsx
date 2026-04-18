import React, { createContext, useContext } from "react";

const UserContext = createContext();

const Content = () => {

  function Profile() {
    const user = useContext(UserContext);

    return <h1>Hello {user}</h1>;
  }

  function Explain() {
    const name = useContext(UserContext);

    return <h1>I am {name}</h1>;
  }

  return (
    <div>
      <UserContext.Provider value="alawoddin">
        <Profile />
      </UserContext.Provider>

      <UserContext.Provider value="developer">
        <Explain />
      </UserContext.Provider>
    </div>
  );
};

export default Content;