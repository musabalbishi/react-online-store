import { Box, Text, Flex, Input, Center } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import NotFound from "../NotFound";
import { FaAccusoft, FaListUl } from "react-icons/fa";
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
const Products = () => {
  let { id } = useParams();

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setItems(res);
  };
  useEffect(() => {
    getData();
  }, []);

  const searchItems = () => {
    let filterdItems = items.filter((row) => {
      if (search.trim() === "") {
        return row;
      } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
        return row;
      }
    });

    return filterdItems.length !== 0 ? (
      filterdItems.map((data) => (
        <NavLink key={data.id} to={`/home/products/${data.id}`}>
          <ProductCard
            image={data.image}
            title={data.title}
            price={data.price}
          />
        </NavLink>
      ))
    ) : (
      <NotFound message={"no items found"} />
    );
  };
  return (
    <Box as="section" p={"1rem 3rem"}>
      <Text color={"#333"} fontSize={"1.5rem"}>
        PRODUCTS
      </Text>
      <Center>
        <Input
          type="search"
          bg={"#eee"}
          placeholder="search"
          w={"40vw"}
          mb={"1rem"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Center>
      <Flex
        alignItems={"center"}
        justifyContent={"end"}
        border={"1px solid #eee"}
        borderRadius={"10px"}
        gap={"1rem"}
        p={"1rem"}
      >
        <BsGrid3X3Gap size={"1.5rem"} />
        <BsGrid size={"1.5rem"} />
        <FaListUl size={"1.5rem"} />
      </Flex>
      <Flex gap={"2"} p={"1rem"} wrap={"wrap"} justifyContent={"start"}>
        {searchItems()}
      </Flex>
    </Box>
  );
};
export default Products;
