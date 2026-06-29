import { Text, Title } from "@mantine/core";
import { useState } from "react";

import styles from "./name.module.css";

type Variant = "dowonut" | "linusguy";

export function Name() {
  const [variant, setVariant] = useState<Variant>("linusguy");

  const titleInner =
    variant === "dowonut" ? (
      <>
        d
        <Text inherit span c="red">
          owo
        </Text>
        nut
      </>
    ) : (
      <>
        <Text inherit span c="red">
          linus
        </Text>
        guy
      </>
    );
  const subtitle = variant === "dowonut" ? "/ linusguy" : "/ dowonut";

  return (
    <div>
      <Title
        onClick={() =>
          setVariant((v) => (v === "dowonut" ? "linusguy" : "dowonut"))
        }
        className={styles.title}
      >
        {titleInner}
      </Title>
      <Text className={styles.subtitle}>{subtitle}</Text>
    </div>
  );
}
