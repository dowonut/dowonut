import { Text, Title } from "@mantine/core";
import { useState, type ReactNode } from "react";

import styles from "./name.module.css";

type Variant = "dowonut" | "linusguy" | "other";

export function Name() {
  let defaultVariant: Variant;
  switch (window.location.hostname) {
    case "linusguy.com":
    case "localhost":
      defaultVariant = "linusguy";
      break;
    case "dowonut.com":
      defaultVariant = "dowonut";
      break;
    default:
      defaultVariant = "other";
      break;
  }

  const [variant, setVariant] = useState<Variant>(defaultVariant);

  function toggle() {
    setVariant((v) => {
      switch (v) {
        case "dowonut":
          return "linusguy";
        case "linusguy":
          return "dowonut";
        case "other":
          return "other";
      }
    });
  }

  let titleInner: ReactNode, subtitle: ReactNode;
  switch (variant) {
    case "dowonut":
      titleInner = (
        <>
          d
          <Text inherit span className={styles.highlight}>
            owo
          </Text>
          nut
        </>
      );
      subtitle = "/ linusguy";
      break;
    case "linusguy":
      titleInner = (
        <>
          <Text inherit span className={styles.highlight}>
            linus
          </Text>
          guy
        </>
      );
      subtitle = "/ dowonut";
      break;
    case "other":
      titleInner = (
        <>
          <Text inherit span className={styles.highlight}>
            how
          </Text>
        </>
      );
      subtitle = "/ did you get here?";
      break;
  }

  return (
    <div>
      <Title onClick={toggle} className={styles.title}>
        {titleInner}
      </Title>
      <Text className={styles.subtitle}>{subtitle}</Text>
    </div>
  );
}
