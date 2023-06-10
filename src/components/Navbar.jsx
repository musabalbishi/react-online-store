/* eslint-disable react/prop-types */
import {
  Box,
  Avatar,
  Menu,
  Image,
  Flex,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
// import { useState } from "react";
const Navbar = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Flex
      p={"3"}
      px={"12"}
      w={"100vw"}
      // boxShadow={"sm"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} gap={"1rem"}>
        <Image
          alt="dev logo"
          w={"auto"}
          h={12}
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        />
      </Flex>

      {/* avatar */}
      <Box display={"flex"} alignItems={"center"} gap={"5"}>
        <Button bg={"red.300"} variant={"outline"} display={props.display}>
          <Button onClick={handleLogout}>logout</Button>
        </Button>
        <Menu>
          <MenuButton>
            <Avatar src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <Text fontWeight="500">Muhammad Ahmad</Text>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
