import { useInterval } from "@mantine/hooks";
import { useState } from "react";

export function useAge() {
  const [seconds, setSeconds] = useState(getSecondsAge());

  useInterval(() => setSeconds((s) => s + 1), 1000, { autoInvoke: true });

  const digits = 8;
  const years = (Math.floor(toYears(seconds) * 10 ** digits) / 10 ** digits)
    .toString()
    .padEnd(digits + 3, "0");

  return years;
}

function getSecondsAge() {
  return (Date.now() - new Date("2004-12-18").getTime()) / 1000;
}

function toYears(seconds: number) {
  return seconds / (60 * 60 * 24 * 365);
}
