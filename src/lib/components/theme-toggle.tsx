import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  function toggleColorScheme() {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  }

  return (
    <ActionIcon onClick={toggleColorScheme} variant="default" size="input-md">
      {computedColorScheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </ActionIcon>
  );
}
