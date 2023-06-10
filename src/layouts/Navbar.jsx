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
  Container,
} from "@chakra-ui/react";
import ToggleTheme from "../components/ui/ToggleTheme";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const getUsername = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/signin");
  };
  return (
    <Flex
      p={"3"}
      px={"12"}
      w={"100vw"}
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
        <ToggleTheme />
        <Container>
          {/* logout */}
          {getUsername ? (
            <Button onClick={handleLogout} bg={"red.300"} variant={"outline"}>
              logout
            </Button>
          ) : (
            <Button onClick={handleLogin} bg={"red.300"} variant={"outline"}>
              login
            </Button>
          )}
        </Container>
        <Menu>
          <MenuButton>
            <Avatar src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <Text fontWeight="500">{getUsername}</Text>
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
