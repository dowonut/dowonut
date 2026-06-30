import "@mantine/core/styles.layer.css";

import "./App.css";

import { MantineProvider } from "@mantine/core";
import { Header } from "./lib/components/header";
import { Overview } from "./lib/components/overview";
import { resolver, theme } from "./lib/theme";

function App() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="auto"
    >
      <Header />
      <Overview />
    </MantineProvider>
  );
}

export default App;
