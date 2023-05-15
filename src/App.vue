<template>
  <div class="layout-container loading">
    <site-header />
    <router-view />
  </div>
  <site-background />
  <custom-cursor />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteBackground from "./components/SiteBackground.vue";
import CustomCursor from "./components/shared/CustomCursor.vue";
import SiteProjects from "./components/SiteProjects.vue";

import Lenis from "@studio-freight/lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteBackground,
    CustomCursor,
    SiteProjects,
  },
  provide() {
    return {
      getDisplayProjects: () => {
        return this.displayProjects;
      },
    };
  },
  data() {
    return {
      loaded: false,
      displayProjects: false,
    };
  },
  mounted() {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    this.$eventBus.on("site-loaded", () => {
      this.loaded = true;
    });
    this.$eventBus.on("display-projects", () => {
      this.displayProjects = true;
    });
    this.$eventBus.on("display-home", () => {
      this.displayProjects = false;
    });
  },
};
</script>

<style>
@custom-media --medium-viewport (max-width: 800px);

#app {
  height: 100vh;
  width: 100vw;
  background: var(--background-gray);
  color: var(--near-white);
  padding: 40px 50px;
  overflow: hidden;
  overscroll-behavior: none;
}

.layout-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  z-index: 10;
  position: relative;

  &.loading {
    main {
      display: none;
    }

    footer {
      display: none;
    }
  }
}

@media (--medium-viewport) {
  #app {
    padding: 20px 15px;
  }
}

@media (--small-viewport) {
}
</style>