import { Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sampleUserData } from "../../mockData";
import Layout from "../layout/Layout";

function LoginPage(props) {
  const { user, setUser } = props;
  const navigate = useNavigate();

  return (
    <Layout user={user}>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        {user ? (
          <Button>Log out</Button>
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
                setUser({ ...sampleUserData });
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
