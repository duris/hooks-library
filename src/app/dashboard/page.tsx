"use client";
import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import useDivSize from "../hooks/useDivSize";
import ListComponent from "../components/ListComponent";
import { Item } from "../components/ListComponent";

const Dashboard = () => {
  const { width, height } = useWindowSize();

  const item1 = {
    id: 1,
    value: "apple",
  };
  const item2 = {
    id: 2,
    value: "peach",
  };
  const item3 = {
    id: 3,
    value: "pear",
  };

  const items = [item1, item2, item3];

  return (
    <div>
      {width}, {height}
      <ListComponent items={items} />
    </div>
  );
};

export default Dashboard;
