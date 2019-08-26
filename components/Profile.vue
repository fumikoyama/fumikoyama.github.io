<template>
  <section id="profile" class="section hero is-light">
    <div v-scroll="handleScroll" class="container is-fluid">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child is-vertical notification">
            <!-- My Profile -->
            <div class="tile is-child">
              <p class="title">My Profile</p>
            </div>
            <article class="fadein-content tile is-child is-white box">
              <div class="content">
                <p class="title is-4">{{ me.name_ja }}</p>
                <p class="subtitle">{{ me.name_en }}</p>
                <p class="note">{{ me.note }}</p>
              </div>
            </article>
            <!-- / My Profile -->
            <!-- Experience -->
            <div class="tile is-child">
              <p class="title">Experience</p>
            </div>
            <article
              class="fadein-content tile is-child has-background-dark has-text-white box"
            >
              <div class="timeline is-centered">
                <div
                  v-for="(item, index) in exp"
                  :key="index"
                  class="timeline-item is-light"
                >
                  <div class="timeline-marker" :class="item.color"></div>
                  <div class="timeline-content">
                    <p class="heading">{{ item.date }}</p>
                    <p class="note">{{ item.note }}</p>
                  </div>
                </div>
              </div>
            </article>
            <!-- / Experience -->
          </div>
          <div class="tile is-child is-vertical notification">
            <!-- My Skills -->
            <div class="tile is-child">
              <h1 class="title">My Skills</h1>
            </div>
            <article
              class="fadein-content tile is-child has-background-info has-text-white box"
            >
              <div class="content">
                <p class="title">programming language</p>
              </div>
              <ul>
                <li v-for="(item, index) in progs" :key="index">
                  <skill :name="item.name" :value="item.value" />
                </li>
              </ul>
            </article>
            <article
              class="fadein-content tile is-child has-background-primary has-text-white box"
            >
              <p class="title">Database</p>
              <p>
                <strong>{{ dbs.join(' / ') }}</strong>
              </p>
            </article>
            <article
              class="fadein-content tile is-child has-background-success has-text-white box"
            >
              <p class="title">Framework</p>
              <p>
                <strong>{{ fws.join(' / ') }}</strong>
              </p>
            </article>
            <article
              class="fadein-content tile is-child has-background-warning box"
            >
              <p class="title">Tools</p>
              <p>
                <strong>{{ tools.join(' / ') }}</strong>
              </p>
            </article>
            <!-- / My Skills -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from '~/components/Skill.vue'
export default {
  components: {
    Skill
  },
  data() {
    return {
      me: {
        name_ja: '小山貴史',
        name_en: 'Takafumi Koyama',
        note:
          '北海道在住のエンジニア\n1985年生まれ\n\n.NET Framework を用いた Windows アプリケーション、Unity と Leap Motion を用いたインタラクティブコンテンツ、NodeJS を用いた SPA の開発などをしていました。'
      },
      exp: [
        {
          date: 'June 2013 - March 2018',
          note: '有限会社宏曜に入社',
          color: 'is-danger'
        },
        {
          date: 'March 2014',
          note: '北海学園大学人文学部英米文化科卒業',
          color: 'is-danger'
        },
        {
          date: 'March 2018 - July 2019',
          note: '株式会社インプルに入社',
          color: 'is-danger'
        },
        {
          date: 'August 2019 - Present',
          note: '無職転生中',
          color: 'is-primary'
        }
      ],
      progs: [
        { name: 'C#', value: '95' },
        { name: 'C++', value: '50' },
        { name: 'Java', value: '60' },
        { name: 'Javascript', value: '80' },
        { name: 'TypeScript', value: '65' },
        { name: 'PHP', value: '80' }
      ],
      dbs: ['MySQL', 'Microsoft SQL Server', 'SQLite'],
      fws: [
        '.NET Framework',
        'ASP.NET Core',
        '.NET Core',
        'Xamarin',
        'Unity',
        'Qt',
        'Laravel',
        'AngularJS (v1.x)',
        'Vue.js'
      ],
      tools: [
        'Visual Studio',
        'Visual Studio Code',
        'PHPStorm',
        'SourceTree',
        'etc..'
      ]
    }
  },
  mounted() {
    this.$nextTick(this.test)
  },
  methods: {
    handleScroll(evt, el) {
      return this.test()
    },
    test() {
      // 未表示の要素だけ取得する
      const list = Array.from(
        document.getElementsByClassName('fadein-content')
      ).filter((e) => !e.classList.contains('fadein'))
      // 取得した要素について画面に表示されてるかチェックする
      list.forEach((e) => {
        // 要素のy座標をスクロール量を考慮して取得する
        const targetTop = e.getBoundingClientRect().top + window.pageYOffset
        // スクロールのy座標が所定位置を超えていたら表示する
        if (window.scrollY > targetTop - window.innerHeight)
          e.classList.add('fadein')
      })
      // リストが空かどうかの値を返す
      return list.length === 0
    }
  }
}
</script>

<style scoped>
@import url('bulma-timeline/dist/css/bulma-timeline.min.css');
.fadein-content {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fadein {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.note {
  white-space: pre-wrap;
}
</style>
