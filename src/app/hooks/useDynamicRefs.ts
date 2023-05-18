import { useRef } from "react";

type Item = {
  id: number;
  value: string;
};

export function useDynamicRefs(items: Item[]) {
  return items.map(() => useRef<HTMLInputElement>(null));
}
