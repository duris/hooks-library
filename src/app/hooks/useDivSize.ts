import { useEffect, useState } from "react";

export type DivProps = {
  div: HTMLDivElement;
};

const useDivSize = ({ div }: DivProps) => {
  const [divSize, setDivSize] = useState({
    width: div.style.width,
    height: div.style.height,
  });
  const [divHeight, setDivHeight] = useState(div.style.height);

  return { divSize };
};

export default useDivSize;
