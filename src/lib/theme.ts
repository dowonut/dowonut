import { createTheme, type CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "red",
  fontFamily: "Hack, monospace",
  defaultRadius: "0",
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--border-default":
      "calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-default-border)",
  },
  light: {},
  dark: {
    "--mantine-color-body": theme.colors.dark[9],
    "--mantine-color-default": theme.colors.dark[8],
    "--mantine-color-default-hover": theme.colors.dark[7],
    "--mantine-color-default-border": theme.colors.dark[6],
  },
});
