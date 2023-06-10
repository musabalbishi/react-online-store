import { VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <VStack>
      <Text>
        {" "}
        <NavLink to="/home/products">Products</NavLink>{" "}
      </Text>
      <Text>
        {" "}
        <NavLink to="/home/offers">Offers</NavLink>{" "}
      </Text>
      <Text>
        {" "}
        <NavLink to="/home/bookmarks">Bookmarks</NavLink>{" "}
      </Text>
    </VStack>
  );
}

export default Sidebar;
