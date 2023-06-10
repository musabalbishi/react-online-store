import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Navigate } from "react-router-dom";

export default function Signin() {
  const username = useRef();
  const password = useRef();
  const getUsername = localStorage.getItem("username");
  const getPassword = localStorage.getItem("password");
  const handleLogin = () => {
    if (
      username.current.value === username &&
      password.current.value === password
    ) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  };
  return (
    <>
      {getUsername && getPassword ? (
        <Navigate to="/home" />
      ) : (
        // <HomePage />
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          // bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading
                fontSize={"4xl"}
                color={"#333"}
                _dark={{ color: "#fff" }}
              >
                Sign in to your account
              </Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="username">
                  <FormLabel color={"#333"} _dark={{ color: "#fff" }}>
                    username
                  </FormLabel>
                  <Input
                    type="text"
                    ref={username}
                    // onChange={(e) =>
                    //   setUser({ user, username: e.target.value || "" })
                    // }
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color={"#333"} _dark={{ color: "#fff" }}>
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    ref={password}
                    // onChange={(e) =>
                    //   setUser({ user, password: e.target.value || "" })
                    // }
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    onClick={handleLogin}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
}
