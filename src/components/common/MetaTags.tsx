import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = () => {
  return (
    <Helmet>
      <title>Mateusz Biskup</title>
      <meta name="description" content="Portfolio created by Mateusz Biskup" />
      <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
    </Helmet>
  );
};

export default MetaTags;
