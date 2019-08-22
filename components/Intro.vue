<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <div>
          <span
            v-for="(t, index) in text"
            :key="index"
            class="item"
            :style="{ animationDelay: index * 100 + 'ms' }"
            v-text="t"
          ></span>
        </div>
        <h1
          class="title"
          :style="{ animationDelay: (text.length + 4) * 100 + 'ms' }"
        >
          I am Takafumi Koyama.
        </h1>
        <h2
          class="subtitle"
          :style="{ animationDelay: (text.length + 12) * 100 + 'ms' }"
        >
          Engineer
        </h2>
        <nuxt-link
          v-scroll-to="'#profile'"
          to
          class="button is-info is-inverted is-outlined is-medium"
          :style="{ animationDelay: (text.length + 16) * 100 + 'ms' }"
        >
          <span>Learn More</span>
          <span class="icon is-small">
            <i class="fas fa-chevron-down"></i>
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
  /* color: rgb(111, 146, 241); */
  animation: text-emerge 1s backwards;
}
.hero.is-dark .subtitle {
  color: rgb(111, 241, 137);
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
  color: rgb(219, 252, 99);
  animation: text-in 0.7s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
.button {
  opacity: 0;
  animation: rise 1.8s forwards;
}
@keyframes rise {
  0% {
    opacity: 0;
    top: 50px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
</style>
