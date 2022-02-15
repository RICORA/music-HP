import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import About from "../../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>RICORA MusicTeam</title>
      </Helmet>
      <Hero />
      <About />
    </Layout>
  );
};
export default IndexPage;
