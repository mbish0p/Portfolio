import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaTags = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Mateusz Biskup</title>
        <meta
          name="description"
          content="Portfolio created by Mateusz Biskup"
        />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaTags;
