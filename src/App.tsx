import "@mantine/core/styles.css";

import "./App.css";

import { MantineProvider, Stack, Text } from "@mantine/core";
import { Name } from "./lib/components/name";
import { Socials } from "./lib/components/socials";
import { useAge } from "./lib/hooks/use-age";
import { theme } from "./lib/theme";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Stack p="2rem" w="50rem" maw="100%" bg="white">
        <Name />
        <Text c="dimmed">
          {useAge()} years old / full-stack developer / photographer / anti-AI
        </Text>
        <Socials />
      </Stack>
    </MantineProvider>
  );
}

export default App;
