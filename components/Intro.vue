<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h2 class="subtitle">Hello, World.</h2>
        <h1 class="title">I am Takafumi Koyama.</h1>
        <h2 class="subtitle">Engineer</h2>
        <nuxt-link
          v-scroll-to="'#profile'"
          to
          class="button is-info is-inverted is-outlined is-medium"
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
