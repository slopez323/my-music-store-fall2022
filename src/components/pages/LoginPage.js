import { Button, TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sampleUserData } from "../../mockData";
import { signIn, signOut } from "../../redux-state/userSlice";
import Layout from "../layout/Layout";

function LoginPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <Button onClick={() => dispatch(signOut())}>Log out</Button>
        ) : (
          <>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button
              onClick={() => {
                dispatch(signIn(sampleUserData));
                navigate("/");
              }}
            >
              Sign In
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
}

export default LoginPage;
