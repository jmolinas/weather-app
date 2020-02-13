<template>
  <div class="site-content">
    <Header />
    <Hero />
    <Forecast />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Forecast from "~/components/Forecast";
import Hero from "~/components/Hero";
export default {
  components: {
    Header,
    Footer,
    Forecast,
    Hero
  }
};
</script>