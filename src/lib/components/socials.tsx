import { Button, Group, Image } from "@mantine/core";

import discordIcon from "../../assets/discord.svg";
import githhubIcon from "../../assets/github_black.svg";
import twitterIcon from "../../assets/twitter.svg";

export function Socials() {
  return (
    <Group>
      <Button
        component="a"
        href="https://github.com/dowonut"
        target="_blank"
        variant="default"
        size="compact-md"
        leftSection={<Image src={githhubIcon} alt="GitHub" w="1.5rem" />}
      >
        dowonut
      </Button>
      <Button
        variant="default"
        size="compact-md"
        leftSection={<Image src={discordIcon} alt="Discord" w="1.5rem" />}
      >
        @dwonut
      </Button>
      <Button
        component="a"
        href="https://twitter.com/dwownut"
        target="_blank"
        variant="default"
        size="compact-md"
        leftSection={<Image src={twitterIcon} alt="Twitter" w="1.5rem" />}
      >
        @dwownut
      </Button>
    </Group>
  );
}
