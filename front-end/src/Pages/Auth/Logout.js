import { LOGOUT, baseURL } from "../../APi/Api";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Logout() {
  // cookie
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  async function handLogout() {
    try {
      const res = await axios.get(`${baseURL}/${LOGOUT}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={handLogout}>Logout</button>;
}
