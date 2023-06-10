import { VStack, Text, HStack } from "@chakra-ui/react";
import { BsBagFill, BsGrid1X2Fill, BsPercent } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <VStack as={"aside"}>
      {" "}
      <NavLink to="/home/products">
        <HStack as={"nav"}>
          <BsBagFill />
          <Text>Products</Text>
        </HStack>
      </NavLink>
      <NavLink to="/home/offers">
        <HStack as={"nav"}>
          <BsPercent />
          <Text>Offers</Text>
        </HStack>
      </NavLink>
      <HStack as={"nav"}>
        <BsGrid1X2Fill />
        <Text>Categories</Text>
      </HStack>
    </VStack>
  );
}

export default Sidebar;
