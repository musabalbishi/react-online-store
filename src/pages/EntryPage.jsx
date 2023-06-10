import { NavLink, Outlet } from "react-router-dom";
import { Box, Text, Flex } from "@chakra-ui/react";
const EntryPage = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"1rem"}>
        <NavLink to="/signin">
          <Text p={"1rem"} bg={"gray.300"}>
            Sign In
          </Text>
        </NavLink>
        <NavLink to="/">
          <Text p={"1rem"} bg={"gray.300"}>
            Sign Up
          </Text>
        </NavLink>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default EntryPage;
