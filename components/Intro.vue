<template>
  <section class="hero is-dark is-fullheight">
    <particles
      :count="60"
      :max-count="60 * 3"
      :colors="[
        'rgba(255, 199, 0, 0.76)',
        'rgba(123, 228, 165, 0.76)',
        'rgba(255, 153, 219, 0.76)',
        'rgba(255, 255, 255, 0.76)'
      ]"
      class="particles-container"
    />
    <div class="intro">
      <div class="intro-content">
        <div>
          <span
            v-for="(t, index) in text"
            :key="index"
            :style="{ animationDelay: index * 100 + 'ms' }"
            v-text="t"
            class="item has-text-info"
          ></span>
        </div>
        <h1
          :style="{ animationDelay: (text.length + 4) * 100 + 'ms' }"
          class="title"
        >
          I am Takafumi Koyama.
        </h1>
        <h2
          :style="{ animationDelay: (text.length + 10) * 100 + 'ms' }"
          class="subtitle has-text-primary"
        >
          Engineer
        </h2>
        <nuxt-link
          v-scroll-to="'#profile'"
          :style="{ animationDelay: (text.length + 13) * 100 + 'ms' }"
          to
          class="button is-info is-inverted is-outlined is-medium"
        >
          <span>Learn More</span>
          <span class="icon is-small">
            <font-awesome-icon icon="chevron-down" />
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from '~/components/Particles.vue'
export default {
  components: {
    Particles
  },
  data() {
    return {
      text: 'Hello, World.'
    }
  }
}
</script>

<style scoped>
@keyframes text-emerge {
  0% {
    opacity: 0;
  }
}
.hero.is-dark .title {
  animation: text-emerge 1s backwards;
}
.hero.is-dark .subtitle {
  animation: text-emerge 1s backwards;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 1.8em;
  font-weight: bold;
  animation: text-in 0.7s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
.button {
  opacity: 0;
  animation: rise 1s forwards;
}
@keyframes rise {
  0% {
    opacity: 0;
    top: 20px;
  }
  10% {
    opacity: 0;
    top: 20px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
.intro {
  margin: auto;
  position: relative;
  background-color: rgba(67, 67, 67, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  padding: 2rem;
}
.intro-content {
  text-align: center !important;
}
@media screen and (max-height: 500px) and (max-width: 900px) {
  .button {
    display: flex;
    width: 100%;
  }
}
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
