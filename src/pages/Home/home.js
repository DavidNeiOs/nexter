import React from "react";

import { Realtors } from "./realtors";
import { Features } from "./features";
import { Story } from "./story";
import { Homes } from "./homes";
import { Gallery } from "./gallery";

export const Home = () => {
  return (
    <>
      <Realtors>Top 3 realtors</Realtors>
      <Features />
      <Story />
      <Homes />
      <Gallery>Gallery</Gallery>
    </>
  );
};
