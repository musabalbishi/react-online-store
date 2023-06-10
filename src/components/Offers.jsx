import { Box, Text, Image, VStack } from "@chakra-ui/react";
const Offers = () => {
  return (
    <Box as="section" p={"1rem 3rem"}>
      <Text color={"#333"} fontSize={"1.5rem"}>
        OFFERS
      </Text>

      <VStack>
        <Image
          src="../notify.png"
          objectFit={"cover"}
          width={"20rem"}
          height={"20rem"}
        />
        <Text color={"#333"} fontSize={"2.5rem"} fontWeight={"bold"}>
          Sorry, No Offers Yet
        </Text>
      </VStack>
    </Box>
  );
};

export default Offers;
