<template>
  <div>
    <!-- タイトル画面 -->
    <intro />
    <!-- プロフィール -->
    <profile />
    <!-- ポートフォリオ -->
    <portfolio />
    <!-- フッター -->
    <bottom />
  </div>
</template>

<script>
import Vue from 'vue'
import lazysizes from 'lazysizes'
import Intro from '~/components/Intro.vue'
import Profile from '~/components/Profile.vue'
import Portfolio from '~/components/Portfolio.vue'
import Bottom from '~/components/Bottom.vue'

Vue.use(lazysizes)

export default {
  components: {
    Intro,
    Profile,
    Portfolio,
    Bottom
  }
}
</script>
