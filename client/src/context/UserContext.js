import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();
function UserContextProvider(props) {
    const [userInfo, setUserInfo] = useState(undefined);
    async function getUserInfo() {
    const userInfoRes = await axios.get(
      "http://localhost:5000/api/users/userInfo"
    );
    setUserInfo(userInfoRes.data);
    }
    useEffect(() => {
    getUserInfo();
    }, []);
    return (
        <UserContext.Provider value={{ userInfo, getUserInfo }}>
      {props.children}
    </UserContext.Provider>
    )
}
export default UserContext;
export { UserContextProvider };