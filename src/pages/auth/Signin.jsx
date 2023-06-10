import { Button, Heading, VStack } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/ui/TextField";
export default function Signin() {
  const navigatee = useNavigate();

  const getUsername = localStorage.getItem("username");
  const getPassword = localStorage.getItem("password");

  return (
    <>
      {getUsername && getPassword ? (
        <Navigate to="/home" />
      ) : (
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .required("Username required")
              .min(1, "Username is too short"),
            password: Yup.string()
              .required("Password required")
              .min(3, "Password is too short"),
          })}
          onSubmit={(values) => {
            localStorage.setItem("username", values.username);
            localStorage.setItem("password", values.password);
            navigatee("/home");
          }}
        >
          {(formik) => (
            <VStack
              as="form"
              mx="auto"
              w={{ base: "90%", md: 500 }}
              h="100vh"
              justifyContent="center"
              onSubmit={formik.handleSubmit}
            >
              <Heading>Sign in</Heading>

              <TextField name="username" placeholder="enter username" />

              <TextField
                name="password"
                type="password"
                placeholder="enter password"
              />

              <Button type="submit" variant="outline">
                sign in
              </Button>
            </VStack>
          )}
        </Formik>
      )}
    </>
  );
}
