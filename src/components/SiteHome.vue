<template>
  <main>
    <nav class="contact-links">
      <a href="https://twitter.com/bodeslomo"
        ><img src="../assets/icon-twitter.svg" alt=""
      /></a>
      <a><img src="../assets/icon-linkedin.svg" alt="" /></a>
      <a href="https://github.com/seeniolabode"
        ><img src="../assets/icon-github.svg" alt=""
      /></a>
      <a href="https://codepen.io/seeniolabode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
        >
          <path
            d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z"
          ></path>
        </svg>
      </a>
    </nav>
    <div class="about">
      <nav class="contact-links mobile" :class="{ open: navOpen }">
        <action-button
          text="socials"
          :variant="navOpen ? 'primary' : 'secondary'"
          @click="navOpen = !navOpen"
        >
        </action-button>
        <div class="links-div">
          <a href="https://twitter.com/bodeslomo"
            ><img src="../assets/icon-twitter.svg" alt=""
          /></a>
          <a><img src="../assets/icon-linkedin.svg" alt="" /></a>
          <a href="https://github.com/seeniolabode"
            ><img src="../assets/icon-github.svg" alt=""
          /></a>
          <a href="https://codepen.io/seeniolabode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
      <h1 class="nippo hero-title">
        <span class="frontend">FRONTEND</span> <br />
        <span>DEVELOPER</span>
      </h1>
      <div class="body-part">
        <p class="author hero-description generic-slide-down">
          I have a thing for converting designs into quality code, with
          interesting interactions and precision. I’m currently focused on
          improving the user’s experience through animations and web
          interactions.
        </p>
        <p class="author hero-description generic-slide-down">
          I have close to 2 years of experience in Frontend Web Development, and
          I’ve worked at
          <site-link href="https://qucoon.com/">Qucoon</site-link>
          and
          <site-link href="https://univaciti.com">Univaciti</site-link> as an
          Intern.
        </p>
        <p class="author hero-description generic-slide-down action-section">
          <action-button
            variant="primary"
            text="View my projects"
            style="margin-right: 20px"
            customClass="md-buttons"
          />
          <action-button text="Download my Resume" customClass="md-buttons" />

          <action-button
            variant="primary"
            text="projects"
            style="margin-right: 10px"
            customClass="xs-buttons"
          />
          <action-button text="resume" customClass="xs-buttons" />
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";
import SiteLink from "./shared/SiteLink.vue";

export default {
  name: "SiteHome",
  components: {
    ActionButton,
    SiteLink,
  },
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

<style >
main {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  .xs-buttons {
    display: none;
  }
}
.about {
  position: relative;
  transform: translateY(-80%);
  .hero-title {
    font-size: 72px;
    line-height: 0.9;
    flex-basis: 100%;
    .frontend {
      letter-spacing: 4px;
    }
  }

  .body-part {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0 6px;

    .hero-description {
      text-align: justify;
    }
  }

  .action-section {
    margin-top: 30px;
  }
}

nav.contact-links {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-self: start;
  position: absolute;
  align-items: center;
  left: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.contact-links.mobile {
  display: none;
}

@custom-media --medium-viewport (max-width: 800px);
@custom-media --small-viewport (max-width: 650px);
@custom-media --xs-viewport (max-width: 450px);

@media (--small-viewport) {
  main {
    flex-direction: column;
    .contact-links.mobile {
      position: static;
      flex-direction: row;
      justify-content: start;
      width: 100%;
      display: flex;
      margin-bottom: 20px;

      img {
        width: 24px;
      }
    }

    .links-div {
      display: flex;
      gap: 24px;

      @for $i from 1 to 4 {
        a:nth-child($(i)) {
          transform: translateX(calc($(i) * -200%));
          opacity: 0;
          position: relative;
          z-index: -1;
          transition: all 0.2s ease-in-out;
          transition-delay: calc($(i) * 0.1s);
        }
      }
    }

    .contact-links.open {
      a {
        transform: translateX(0);
        opacity: 1;
        z-index: 1;
      }

      @for $i from 1 to 4 {
        a:nth-child($(i)) {
          transition-delay: calc((4 - $(i)) * 0.1s);
        }
      }
    }

    .contact-links:not(.mobile) {
      display: none;
    }
  }
}

@media (--xs-viewport) {
  .about {
    .hero-title {
      font-size: 54px;
      line-height: 0.9;
      flex-basis: 100%;
      .frontend {
        letter-spacing: 3px;
      }
    }

    .md-buttons {
      display: none;
    }

    .xs-buttons {
      display: inline-block;
    }
  }
}
</style>