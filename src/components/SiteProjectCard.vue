<template>
  <div class="project-container">
    <img class="project-image" :src="image" alt="" />
    <div class="project-details">
      <div class="detail-wrapper">
        <div class="text-wrapper">
          <h4 class="project-title author">Developer Portfolio</h4>
          <p class="project-description author">
            This is a Portfolio Website for Developer "Olabode-Odebunmi
            Oluwaseeni" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi libero id ex amet iste corrupti, sequi unde, ducimus eos
            molestiae nihil! Optio voluptas dignissimos consequatur, quam
            possimus quod eaque inventore?
          </p>
        </div>
        <!-- <div class="project-demo">
          <video
            src="../assets/project-demos/developer-portfolio.mp4"
            type='video/mp4; codecs="avc1.4d002a, mp4a.40.2"'
          ></video>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img"],
  computed: {
    image() {
      return new URL(
        `../assets/project-images/${this.img}.png`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
.project-container:hover {
  display: none;
}
.project-container {
  min-width: 800px;
  position: relative;
  z-index: 1000000;
  border: solid 2px rgba(255, 255, 247, 0.1);
  overflow: hidden;

  .project-image {
    object-fit: contain;
    width: 100%;
  }

  .project-details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    opacity: 0;

    .detail-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;

      .project-demo {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        video {
          object-fit: cover;
          width: 100%;
        }
      }
    }

    .text-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 24px;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
    }

    h4.project-title {
      font-size: 64px;
      text-transform: uppercase;
      margin: 0;
      width: 100%;
    }

    p.project-description {
      margin: 0;
      font-size: 16px;
      text-align: justify;
    }
  }
}
</style>