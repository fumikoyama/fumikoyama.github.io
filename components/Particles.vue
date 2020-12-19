<template>
  <div
    :id="id"
    :count="count"
    :maxCount="maxCount"
    :colors="colors"
    :particleMinSize="particleMinSize"
    :particleMaxSize="particleMaxSize"
    :particleBaseSpeed="particleBaseSpeed"
  ></div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 40,
    },
    maxCount: {
      type: Number,
      default: undefined,
    },
    colors: {
      type: Array,
      default: () => ['#eeb900', '#6DD0A5', '#f799db'],
    },
    particleMinSize: {
      type: Number,
      default: 20,
    },
    particleMaxSize: {
      type: Number,
      default: 100,
    },
    particleBaseSpeed: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      id: 'particles-' + ~~(Math.random() * 5000),
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$particleSystem(
        this.$el.id,
        this.count,
        this.maxCount,
        this.colors,
        this.particleMinSize,
        this.particleMaxSize,
        this.particleBaseSpeed
      )
    })
  },
}
</script>
