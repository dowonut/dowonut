import { Stack, Text } from "@mantine/core";
import { Name } from "./name";
import { useAge } from "../hooks/use-age";
import { Socials } from "./socials";

export function Overview() {
  return (
    <Stack
      p="lg"
      w="48rem"
      maw="100%"
      bg="var(--mantine-color-body)"
      bd="var(--border-default)"
    >
      <Name />
      <Text c="dimmed">
        {useAge()} years old / full-stack developer / photographer / anti-AI
      </Text>
      <Socials />
    </Stack>
  );
}
