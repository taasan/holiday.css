import React from "react";

export default {
  title: "Image and multimedia/<img>",
};

export const small = () => (
  <img src="https://via.placeholder.com/150" alt="Placeholder" />
);

small.storyName = "small";

export const big = () => (
  <img src="https://via.placeholder.com/4096x2160" alt="Placeholder" />
);

big.storyName = "big";
big.parameters = {
  chromatic: {
    viewports: [320, 1200],
  },
};
