import { useEffect } from "react";
import { USERS, baseURL } from "../../APi/Api";
import Cookie from "cookie-universal";
import axios from "axios";
import Logout from "../Auth/Logout";

export default function Users() {
  // cookie
  const cookie = Cookie();
  const token = cookie.get("e-commerce");

  useEffect(() => {
    axios
      .get(`${baseURL}/${USERS}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>User Pages</div>
      <Logout />
    </>
  );
}
