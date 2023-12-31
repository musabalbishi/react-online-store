import { Stack, HStack, Link, Divider, IconButton } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  "Blog",
  "Documentation",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];
const accounts = [
  {
    url: "https://github.com/MA-Ahmad/templateskart",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://twitter.com/muhammad_ahmaad",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://linkedin.com/in/muhammad-ahmad20",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="https://templateskart.com" isExternal></Link>

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack d={{ base: "flex", md: "none" }} alignItems="center">
        <HStack alignItems="center">
          <>Sign up</>
          <Divider h="1rem" orientation="vertical" />
          <>Blog</>
          <Divider h="1rem" orientation="vertical" />
          <>Career</>
        </HStack>
        <HStack alignItems="center">
          <>Documentation</>
          <Divider h="1rem" orientation="vertical" />
          <>Terms of use</>
        </HStack>
        <>Privacy policy</>
      </Stack>

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
