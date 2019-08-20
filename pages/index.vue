<template>
  <div>
    <!-- タイトル画面 -->
    <intro />
    <!-- プロフィール -->
    <profile />
    <!-- ポートフォリオ -->
    <portfolio />
    <!-- リンク -->
    <links />
    <!-- フッター -->
    <bottom />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Profile from '~/components/Profile.vue'
import Portfolio from '~/components/Portfolio.vue'
import Links from '~/components/Links.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: {
    Intro,
    Profile,
    Portfolio,
    Links,
    Bottom
  }
}
</script>
