"use client";

import HeroSection from "../components/other/HeroSection";
import Layout from "../components/layout/Layout";
import ComponentListing from "../components/other/ComponentListing";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ComponentListing featured={6} />
    </Layout>
  );
}
