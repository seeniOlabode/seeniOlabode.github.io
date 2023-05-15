<template>
  <header :class="{ 'loader-header': !siteLoaded }">
    <site-loader @site-loaded="siteLoaded = true" />
    <site-time />
    <nav class="generic-slide-down site-main-nav" :class="{ open: navOpen }">
      <action-button
        variant="primary"
        text="menu"
        customClass="mobile-menu"
        @click="navOpen = !navOpen"
      />
      <action-button
        variant="secondary"
        text="projects"
        @click="() => $router.push('projects')"
      />
      <action-button variant="secondary" text="resume" />
      <action-button
        variant="primary"
        href="mailto:seeniolabode8734@gmail.com"
        text="contact"
      />
    </nav>
  </header>
</template>

<script>
import SiteLoader from "./SiteLoader.vue";
import ActionButton from "./shared/ActionButton.vue";
import SiteTime from "./SiteTime.vue";

export default {
  name: "SiteHeader",
  components: {
    SiteLoader,
    ActionButton,
    SiteTime,
  },
  inject: ["getDisplayProjects"],
  data() {
    return {
      siteLoaded: false,
      navOpen: false,
    };
  },
  computed: {
    projectButtonData() {},
    displayProjects() {
      return this.getDisplayProjects();
    },
  },
};
</script>

<style>
@custom-media --medium-viewport (max-width: 800px);
@custom-media --small-viewport (max-width: 650px);

header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .time {
    font-size: 14px;
    user-select: none;

    .time-colon {
      animation: blink 1s infinite;
      animation-direction: alternate;
    }
  }

  > nav {
    display: flex;
    gap: 25px;

    .mobile-menu {
      display: none;
    }
  }
}

.loader-header {
  display: block;
  overflow: visible;

  .time {
    display: none;
  }

  > nav {
    display: none;

    .mobile-menu {
      display: none;
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (--medium-viewport) {
  .time {
    display: none;
  }
}

@media (--small-viewport) {
  header {
    > nav {
      gap: 15px;
      overflow-x: hidden;
      position: absolute;
      right: 0;

      .mobile-menu {
        display: block;
        order: 1;
      }

      @for $i from 2 to 4 {
        button:nth-child($(i)) {
          transform: translateX(calc($(i) * 200%));
          opacity: 0;
          transition: transform 0.2s ease-in-out, opacity 0.2s;
          transition-delay: calc((3 - $(i)) * 0.05s);
          z-index: -1;
        }
      }

      button:not(.mobile-menu) {
        /* opacity: 0; */
      }
    }

    > nav.open {
      /* flex-basis: 100%; */
      @for $i from 2 to 4 {
        button:nth-child($(i)) {
          transform: translateX(0%);
          opacity: 1;
          transition-delay: calc($(i) * 0.05s);
          z-index: 1;
        }
      }
    }
  }
}
</style>