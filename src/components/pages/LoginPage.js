import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { sampleUserData } from "../../mockData";
import { signIn, signOut } from "../../redux-state/userSlice";
import Axios from "../../utils/Axios";
import Layout from "../layout/Layout";

function LoginPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const response = await Axios.post("/sign-in", {
        ...loginDetails,
      });
      const { user: loggedInUser } = response.data;
      dispatch(signIn(loggedInUser));
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignOut = async () => {
    try {
      await Axios.get("/sign-out");
      dispatch(signOut());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        {user ? (
          <Button onClick={handleSignOut}>Log out</Button>
        ) : (
          <>
            <TextField
              label="Email"
              variant="outlined"
              required
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
            <TextField
              label="Password"
              variant="outlined"
              required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
            <Button onClick={handleSignIn}>Sign In</Button>
            <Box>
              <Typography
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/register")}
              >
                Register new user
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
}

export default LoginPage;
