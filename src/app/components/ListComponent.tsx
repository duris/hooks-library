// ListComponent.tsx
import React, { useEffect } from "react";
import { useDynamicRefs } from "../hooks/useDynamicRefs";

export type Item = {
  id: number;
  value: string;
};

export type ListComponentProps = {
  items: Item[];
};

const ListComponent: React.FC<ListComponentProps> = ({ items }) => {
  const refs = useDynamicRefs(items);

  useEffect(() => {
    // Access the refs here, for example:
    refs[1].current?.focus();
  }, [refs]);

  return (
    <div>
      {items.map((item, index) => (
        <input key={item.id} ref={refs[index]} defaultValue={item.value} />
      ))}
    </div>
  );
};

export default ListComponent;
