import { Group } from "@mantine/core";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <Group pos="absolute" top="0" left="0" w="100%" p="md" justify="end">
      <ThemeToggle />
    </Group>
  );
}
