import axios from "axios";
import { useEffect } from "react";
import { Google_Call_Back, baseURL } from "../../APi/Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal";

export default function GoogleCallback() {
  const cookie = Cookie();
  const location = useLocation();
  useEffect(() => {
    async function GoogleCall() {
      try {
        let res = await axios.get(
          `${baseURL}/${Google_Call_Back}${location.search}`
        );
        console.log(res);
        const token = res.data.access.token;
        cookie.set("e-commerce", token);
      } catch (err) {
        console.log(err);
      }
    }
    GoogleCall();
  }, []);
  return <h1>Test</h1>;
}
