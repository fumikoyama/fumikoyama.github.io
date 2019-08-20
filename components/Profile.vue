<template>
  <section id="profile" class="section hero is-light is-fullheight">
    <div v-scroll="handleScroll" class="erros container is-fluid">
      <div class="tile is-ancestor">
        <!-- 左側 -->
        <div class="tile is-parent is-3">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">My Profile</p>
            </div>
            <article class="tile is-child notification is-white box">
              <div class="content">
                <p class="title is-4">{{ me.name_ja }}</p>
                <p class="subtitle">{{ me.name_en }}</p>
                <p class="note">{{ me.note }}</p>
              </div>
            </article>
          </article>
        </div>
        <!-- 中央 -->
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">Experience</p>
            </div>
            <article class="tile is-child notification is-dark box">
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
          </article>
        </div>
        <!-- 右側 -->
        <div class="tile is-parent is-vertical is-5">
          <div class="tile is-parent is-vertical">
            <div class="tile is-parent">
              <h1 class="title">My Skills</h1>
            </div>
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info box">
                    <div class="content">
                      <p class="title">programming language</p>
                    </div>
                    <ul>
                      <li v-for="(item, index) in progs" :key="index">
                        <skill :name="item.name" :value="item.value" />
                      </li>
                    </ul>
                  </article>
                </div>
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary box">
                    <p class="title">Database</p>
                    <ul>
                      <li v-for="(item, index) in dbs" :key="index">
                        <strong>{{ item }}</strong>
                      </li>
                    </ul>
                  </article>
                  <article class="tile is-child notification is-success box">
                    <p class="title">Framework</p>
                    <ul>
                      <li v-for="(item, index) in fws" :key="index">
                        <strong>{{ item }}</strong>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-warning box">
                <p class="title">Tools</p>
                <p>{{ tools.join(' / ') }}</p>
              </article>
            </div>
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
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  }
}
</script>

<style>
@import url('bulma-timeline/dist/css/bulma-timeline.min.css');
.erros {
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.note {
  white-space: pre-wrap;
}
</style>
