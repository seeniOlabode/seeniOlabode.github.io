<template>
  <footer>
    <div class="footer-text">
      <span class="jet-brains location">Lagos, Nigeria </span>
      |
      <span class="jet-brains credit">
        <span class="des-dev">Design + Dev - </span>Seeni</span
      >
    </div>
    <div class="skills-section">
      <h4 class="author skills-heading">Skills</h4>
      <div class="marquee">
        <div class="marquee-row">
          <span class="skill jet-brains" v-for="skill in skills" :key="skill">
            {{ skill }}
          </span>
          <span class="skill jet-brains" v-for="skill in skills" :key="skill">
            {{ skill }}
          </span>
        </div>
        <div class="marquee-row">
          <span class="skill jet-brains" v-for="skill in skills" :key="skill">
            {{ skill }}
          </span>
          <span class="skill jet-brains" v-for="skill in skills" :key="skill">
            {{ skill }}
          </span>
        </div>
        <div class="marquee-overlay"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "vuejs",
        "nodejs",
        "typescript",
        "gsap",
        "postcss",
        "tailwind",
        "firebase",
        "sass",
      ],
    };
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: end;

  .footer-text {
    display: flex;
    gap: 20px;
  }

  .location,
  .credit {
    font-size: 14px;

    .des-dev {
      opacity: 0.8;
    }
  }

  .skills-heading {
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .marquee {
    width: 300px;
    overflow: hidden;
    position: relative;
    user-select: none;

    .marquee-overlay {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: -webkit-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 5%,
        rgba(0, 0, 0, 0) 95%,
        rgba(0, 0, 0, 0.8) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 5%,
        rgba(0, 0, 0, 0) 95%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
    .marquee-row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: fit-content;

      .skill {
        height: 28px;
        border: 1px solid var(--near-white);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        border-radius: 14px;
        text-transform: uppercase;
        font-size: 12px;
      }
    }

    .marquee-row {
      z-index: 20;
    }

    .marquee-row:nth-child(1) {
      animation: marqueeAnimationFirst 15s infinite linear;
    }

    .marquee-row:nth-child(2) {
      margin-top: 10px;
      animation: marqueeAnimationSecond 15s infinite linear;
      z-index: 20;
    }

    .marquee-row:hover {
      animation-play-state: paused;
    }
  }
}

@keyframes marqueeAnimationFirst {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marqueeAnimationSecond {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

@custom-media --medium-viewport (max-width: 800px);
@custom-media --small-viewport (max-width: 650px);

@media (--medium-viewport) {
  footer {
    .credit,
    .location {
      font-size: 12px;
    }
  }
}

@media (--small-viewport) {
  footer {
    flex-direction: column;

    > * {
      width: 100%;
    }

    .footer-text {
      order: 1;
      margin-top: 100px;
      justify-content: center;
    }

    .skills-section {
      margin-bottom: 50px;
      .skills-heading {
        text-align: center;
        font-size: 20px;
      }

      .marquee {
        width: auto;
        position: absolute;
        left: 0;
        right: 0;

        .marquee-row:nth-child(1) {
          animation: marqueeAnimationFirst 30s infinite linear;
          animation-duration: 30s;
        }

        .marquee-row:nth-child(2) {
          margin-top: 10px;
          animation-duration: 30s;
        }
      }
    }
  }
}
</style>