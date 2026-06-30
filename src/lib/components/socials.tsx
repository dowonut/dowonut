import {
  Button,
  Group,
  useComputedColorScheme,
  type ButtonProps,
} from "@mantine/core";
import type { ReactNode } from "react";

import DiscordIcon from "../../assets/discord.svg?react";
import GithhubIcon from "../../assets/github_black.svg?react";
import TwitterIcon from "../../assets/twitter.svg?react";
import LetterboxdLightIcon from "../../assets/letterboxd_light.svg?react";
import LetterboxdDarkIcon from "../../assets/letterboxd_dark.svg?react";

import styles from "./socials.module.css";

export function Socials() {
  const theme = useComputedColorScheme("light");

  return (
    <Group>
      <SocialButton href="https://github.com/dowonut" icon={<GithhubIcon />}>
        dowonut
      </SocialButton>
      <SocialButton icon={<DiscordIcon />}>dwonut</SocialButton>
      <SocialButton href="https://twitter.com/dwownut" icon={<TwitterIcon />}>
        dwownut
      </SocialButton>
      <SocialButton
        href="https://letterboxd.com/dowonut/"
        icon={
          theme === "light" ? <LetterboxdLightIcon /> : <LetterboxdDarkIcon />
        }
      >
        dowonut
      </SocialButton>
    </Group>
  );
}

function SocialButton({
  href,
  icon,
  children,
  ...props
}: { href?: string; icon: ReactNode } & ButtonProps) {
  return (
    <Button
      component={href ? "a" : undefined}
      target={href ? "_blank" : undefined}
      href={href}
      variant="default"
      size="compact-md"
      leftSection={icon}
      className={styles.button}
      {...props}
    >
      {children}
    </Button>
  );
}
