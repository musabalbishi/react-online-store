import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleTheme = () => {
  const { colorMode, toggleThemeColorMode } = useColorMode();
  return (
    <Button onClick={() => toggleThemeColorMode()} m="1rem">
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
};

export default ToggleTheme;
