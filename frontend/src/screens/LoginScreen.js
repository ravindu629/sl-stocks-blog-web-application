import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/admin/bloglist");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/admin/bloglist");
    } catch (err) {
      //console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div
      class="row"
      style={{
        paddingLeft: "600px",
        paddingTop: "50px",
        paddingBottom: "100px",
      }}
    >
      <div class="col-lg-5">
        <div class="contact-form">
          <h2>Admin Login</h2>
          <form class="row" onSubmit={submitHandler}>
            <div class="col-md-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="col-md-12">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="col-md-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-6">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default LoginScreen;
