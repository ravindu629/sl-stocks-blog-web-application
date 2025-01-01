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
      className="row justify-content-center"
      style={{ margin: 0, padding: "20px" }}
    >
      <div
        className="col-12 col-md-6"
        style={{
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <div className="contact-form">
          <h2 className="text-center" style={{ marginBottom: "20px" }}>
            Admin Login
          </h2>
          <form className="row" onSubmit={submitHandler}>
            <div className="col-12" style={{ marginBottom: "15px" }}>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-12" style={{ marginBottom: "15px" }}>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-12" style={{ marginBottom: "15px" }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "10px 20px" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
