import { VStack, Image, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <VStack>
      <Image
        src="../notify.png"
        objectFit={"cover"}
        width={"20rem"}
        height={"20rem"}
      />
      <Text color={"#333"} fontSize={"2.5rem"} fontWeight={"bold"}>
        Sorry, No Products Found
      </Text>
    </VStack>
  );
}

export default NotFound;
