import { useState } from "react";
import { Box, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import AlertMessage from "./Alert";
export default function Signup() {
  //

  const navigate = useNavigate();

  const [alert, setAlert] = useState("none");

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const logIn = () => {
    if (
      !user.username ||
      // !user.password.length <= 3 ||
      !user.email
    ) {
      setAlert("block");
    } else {
      console.log(user);
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
      navigate("/signin");
      // alert("you are log In ");
    }
  };

  return (
    <>
      <Box as="form" maxW={"800px"} mx={"auto"}>
        <AlertMessage display={alert} />
        <FormLabel>username</FormLabel>
        <Input
          type="text"
          value={user.username}
          name="username"
          // onChange={(e) => console.log(e.target.value)}

          onChange={(e) => setUser({ ...user, username: e.target.value || "" })}
        />
        <br></br>
        <FormLabel> email:</FormLabel>
        <Input
          type="email"
          value={user.email}
          name="email"
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setUser({ ...user, email: e.target.value || "" })}
        />
        <br></br>
        <FormLabel>password</FormLabel>
        <Input
          type="password"
          value={user.password}
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value || "" })}
        ></Input>
        <Text>
          Already have an account? <NavLink to="/signin">Login here</NavLink>
        </Text>
        <br></br>
        <Button onClick={logIn}>Sign Up</Button>
      </Box>
    </>
  );
}
