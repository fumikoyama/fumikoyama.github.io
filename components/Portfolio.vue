<template>
  <section class="section hero">
    <div class="hero-head">
      <div class="container">
        <h1 class="title">My Recent Works</h1>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-multiline is-centered">
          <portfolioItem
            v-for="(item, index) in portfolioItems"
            :key="index"
            :image="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem.vue'
export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolioItems: [
        {
          image: require('~/assets/images/my-page.png'),
          title: 'My website',
          description: 'Nuxt.js と Bulma を使って作成しました。'
        }
      ]
    }
  }
}
</script>
