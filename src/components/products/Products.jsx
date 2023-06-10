import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import ProductCard from "./ProductCard";
import NotFound from "../NotFound";
const Products = () => {
  // let { id } = useParams();

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
    <Box as="section" p={"3rem"}>
      <Text>PRODUCTS</Text>
      <Input
        type="search"
        placeholder="search"
        w={"40vw"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flex gap={"2"} p={"3"} wrap={"wrap"} justifyContent={"start"}>
        {searchItems()}
      </Flex>
    </Box>
  );
};
export default Products;
