<template>
  <section id="profile" class="section hero is-light">
    <div class="container is-fluid">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child is-vertical notification">
            <!-- My Profile -->
            <div class="tile is-child">
              <p class="title">My Profile</p>
            </div>
            <article
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child is-white box"
            >
              <div class="content">
                <p class="title is-4">{{ me.name_ja }}</p>
                <p class="subtitle">{{ me.name_en }}</p>
                <template v-for="(note, index) in me.notes">
                  <p v-if="note" :key="index">{{ note }}</p>
                  <br v-else :key="index" />
                </template>
              </div>
            </article>
            <!-- / My Profile -->
            <!-- Experience -->
            <div class="tile is-child">
              <p class="title">Experience</p>
            </div>
            <article
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child has-background-dark has-text-white box"
            >
              <div class="timeline is-centered">
                <div
                  v-for="(item, index) in exp"
                  :key="index"
                  class="timeline-item is-light"
                >
                  <div :class="item.color" class="timeline-marker"></div>
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
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child has-background-info has-text-white box"
            >
              <div class="content">
                <p class="title">Programming language</p>
              </div>
              <ul>
                <li v-for="(item, index) in progs" :key="index">
                  <skill :name="item.name" :value="item.value" />
                </li>
              </ul>
            </article>
            <article
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child has-background-primary has-text-white box"
            >
              <p class="title">Database</p>
              <p>
                <strong>{{ dbs.join(' / ') }}</strong>
              </p>
            </article>
            <article
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child has-background-success has-text-white box"
            >
              <p class="title">Framework</p>
              <p>
                <strong>{{ fws.join(' / ') }}</strong>
              </p>
            </article>
            <article
              v-clipscroll="{ className: 'fadein' }"
              class="fadein-content tile is-child has-background-warning box"
            >
              <p class="title">Tool</p>
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
    Skill,
  },
  data() {
    return {
      me: {
        name_ja: '小山貴史',
        name_en: 'Takafumi Koyama',
        notes: [
          '北海道在住のエンジニア',
          '1985年生まれ',
          '',
          '.NET Framework を用いた Windows アプリケーション、Unity と Leap Motion を用いたインタラクティブコンテンツ、NodeJS を用いた SPA の開発などをしていました。',
          '',
          '最近は Nuxt.js の勉強をしています。',
        ],
      },
      exp: [
        {
          date: 'June 2013 - March 2018',
          note: '有限会社宏曜に入社',
          color: 'is-danger',
        },
        {
          date: 'March 2014',
          note: '北海学園大学人文学部英米文化学科卒業',
          color: 'is-danger',
        },
        {
          date: 'August 2019 - Present',
          note: '無職転生中',
          color: 'is-primary',
        },
      ],
      progs: [
        { name: 'C#', value: '95' },
        { name: 'C++', value: '50' },
        { name: 'Java', value: '60' },
        { name: 'Javascript', value: '80' },
        { name: 'TypeScript', value: '65' },
        { name: 'PHP', value: '80' },
      ],
      dbs: ['MySQL', 'Microsoft SQL Server', 'SQLite', 'Oracle'],
      fws: [
        '.NET Framework',
        'ASP.NET Core',
        '.NET Core',
        'Xamarin',
        'Unity',
        'Qt',
        'Laravel',
        'AngularJS (v1.x)',
        'Vue.js',
      ],
      tools: [
        'Visual Studio',
        'Visual Studio Code',
        'PHPStorm',
        'SourceTree',
        'etc..',
      ],
    }
  },
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
</style>
