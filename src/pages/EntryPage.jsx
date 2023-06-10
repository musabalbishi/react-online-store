import { NavLink, Outlet } from "react-router-dom";
import { Box, Text, Flex } from "@chakra-ui/react";
const EntryPage = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} gap={"1rem"} p={"1rem 0"}>
        <NavLink to="/signin">
          <Text p={"1rem"} bg={"gray.300"} borderRadius={"10px"}>
            Sign In
          </Text>
        </NavLink>
        <NavLink to="/">
          <Text p={"1rem"} bg={"gray.300"} borderRadius={"10px"}>
            Sign Up
          </Text>
        </NavLink>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default EntryPage;
