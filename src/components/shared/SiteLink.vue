<template>
  <a class="site-link" :href="href" target="_blank">
    <span class="hidden">
      <slot></slot>
    </span>

    <span class="site-link-inner">
      <span class="site-link-span">
        <slot></slot>
      </span>

      <span class="site-link-span">
        <slot></slot>
      </span>
    </span>
  </a>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style>
a.site-link {
  color: white;
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow-x: hidden;
  top: 4px;
  font-weight: 600;

  .site-link-inner {
    display: flex;
    flex-direction: column;
    transform: translateY(0%);
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    top: 0;
    transition: 0.3s;
  }

  span.hidden {
    opacity: 0;
  }

  &::before {
    content: " ";
    position: absolute;
    height: 3px;
    bottom: -1px;
    left: 0;
    right: 0;
    background-color: var(--near-white);
    opacity: 0.4;
  }

  &::after {
    content: " ";
    position: absolute;
    height: 3px;
    bottom: -1px;
    left: 0;
    right: 0;
    background-color: var(--near-white);
    transform: translateX(-100%);
    transition: transform 0.3s linear;
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
    .site-link-inner {
      transform: translateY(-50%);
    }
  }
}
</style>