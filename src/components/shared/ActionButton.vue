<template>
  <button
    class="jet-brains"
    :class="[variant, customClass]"
    @click="handleClick"
  >
    <div class="button-wrapper">
      <span class="text-span">{{ text }} <slot></slot></span>
      <span class="text-span">{{ text }}<slot></slot></span>
    </div>
  </button>
</template>

<script>
export default {
  // props: ["text", "variant", "href", "action"],
  props: {
    text: {
      type: String,
    },
    variant: {
      type: String,
    },
    href: {
      type: String,
    },
    action: {
      type: Object,
      default: {
        handler: () => {
          return "";
        },
      },
    },
    customClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleClick() {
      if (this.href) {
        this.$router.push(this.href);
      } else {
        this.action.handler();
      }
    },
  },
};
</script>

<style scoped>
@custom-media --small-viewport (max-width: 650px);

button {
  user-select: none;
  background: none;
  border: none;
  overflow: hidden;
  height: 28px;
  position: relative;
  padding: 0 10px;
  border: solid 1px var(--near-white);
  border-radius: 14px;
  cursor: pointer;
  color: var(--near-white);
  text-align: center;

  text-transform: uppercase;

  .button-wrapper {
    height: 200%;
    transition: transform 0.3s;
    text-align: center;
  }

  .text-span {
    display: flex;
    height: 50%;
    align-items: center;
    justify-content: center;
  }

  &.primary {
    background: var(--near-white);
    color: black;
  }

  &.secondary {
  }
}

button:hover {
  .button-wrapper {
    transform: translateY(-50%);
  }
}

@media (--small-viewport) {
  button {
    font-size: 12px;
  }
}
</style>