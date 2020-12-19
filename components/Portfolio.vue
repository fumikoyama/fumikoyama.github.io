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
            @click.native="openModal(item)"
          />
        </div>
      </div>
    </div>
    <portfolioModal />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import PortfolioItem from '~/components/PortfolioItem.vue'
import PortfolioModal from '~/components/PortfolioModal.vue'

export default {
  components: {
    PortfolioItem,
    PortfolioModal,
  },
  data() {
    return {
      portfolioItems: [
        {
          image: require('~/assets/images/my-page.png'),
          description: 'Nuxt.js と Bulma を使って作成しました。',
        },
      ],
    }
  },
  methods: {
    ...mapActions('portfolio_modal', ['openModal']),
  },
}
</script>
