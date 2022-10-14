import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux-state/userSlice";
import Layout from "../layout/Layout";
import Axios from "../../utils/Axios";

function RegisterPage() {
  const [userRegistration, setUserRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("/register-user", {
        ...userRegistration,
      });
      const { user } = response.data;
      dispatch(signIn(user));
      navigate("/");
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
        <TextField
          label="First Name"
          variant="outlined"
          required
          value={userRegistration.firstName}
          onChange={(e) =>
            setUserRegistration({
              ...userRegistration,
              firstName: e.target.value,
            })
          }
        />
        <TextField
          label="Last Name"
          variant="outlined"
          required
          value={userRegistration.lastName}
          onChange={(e) =>
            setUserRegistration({
              ...userRegistration,
              lastName: e.target.value,
            })
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          value={userRegistration.email}
          onChange={(e) =>
            setUserRegistration({
              ...userRegistration,
              email: e.target.value,
            })
          }
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          value={userRegistration.password}
          onChange={(e) =>
            setUserRegistration({
              ...userRegistration,
              password: e.target.value,
            })
          }
        />
        <TextField
          label="Profile Picture"
          variant="outlined"
          required
          value={userRegistration.profilePicture}
          onChange={(e) =>
            setUserRegistration({
              ...userRegistration,
              profilePicture: e.target.value,
            })
          }
        />
        <Button onClick={handleSubmit}>Register</Button>
      </Box>
    </Layout>
  );
}

export default RegisterPage;
