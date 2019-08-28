<template>
  <div
    :id="id"
    :count="count"
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
      default: 40
    },
    colors: {
      type: Array,
      default: () => ['#eeb900', '#6DD0A5', '#f799db']
    },
    particleMinSize: {
      type: Number,
      default: 20
    },
    particleMaxSize: {
      type: Number,
      default: 100
    },
    particleBaseSpeed: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      id: 'particles-' + Math.floor(Math.random() * 5000)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$particleSystem(
        this.$el.id,
        this.count,
        this.colors,
        this.particleMinSize,
        this.particleMaxSize,
        this.particleBaseSpeed
      )
    })
  }
}
</script>
