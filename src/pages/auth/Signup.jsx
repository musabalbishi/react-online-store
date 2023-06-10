import { VStack, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/ui/TextField";
export default function Signup() {
  //

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(1, "Username is too short"),
        password: Yup.string()
          .required("Password required")
          .min(3, "Password is too short"),
        email: Yup.string().email("invalid email").required("email required"),
      })}
      onSubmit={() => {
        navigate("/signin");
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="55vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading>Sign Up</Heading>

          <TextField name="username" placeholder="enter username" />
          <TextField name="email" placeholder="enter email" type="email" />

          <TextField
            name="password"
            type="password"
            placeholder="enter password"
          />

          <Button type="submit" variant="outline">
            Create Acc
          </Button>
        </VStack>
      )}
    </Formik>
  );
}
