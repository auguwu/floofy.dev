<template>
  <div id='app'>
    <section class='hero is-fullheight is-dark'>
      <noscript>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>⚠️ Notice</h1>
            <h2 class='subtitle'>
              Noticed that you disabled JavaScript, and I will say -- I get it.<br />

              But don't worry! This website is FoSS under the MIT License, so you can
              see what goes on behind the scenes!<br /><br />

              Source code is available on <a href='https://github.com/auguwu/augu.dev' ref='noreferrer'>GitHub</a> to view.
            </h2>
          </div>
        </div>
      </noscript>

      <div class='hero-body is-fullheight'>
        <div class='container blurred is-fullhd'>
          <div class='columns is-centered'>
            <div class='column is-3'>
              <img src='https://cdn.floofy.dev/images/August.png' alt='Avatar' class='avatar' draggable='false' />
            </div>
            <div class='column is-6'>
              <h1 class='title'>Chris Hernandez</h1>
              <h2 class='subtitle'>
                "Fullstack" developer from the United States.<br />
                Kotlin and TypeScript scientist, {{ age }} years old and has
                been developing projects for {{ years }} years.<br /><br />

                View below for projects, sponsors, environments, and achivements!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='hero is-dark'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Projects</h1>
          <h2 class='subtitle'>
            Shows a curated listed of projects I maintain<br />
            Last Updated: 08/11/20
          </h2>
        </div>
        <div class='columns is-multiline'>
          <div v-for='project of this.projects' :key="project.name" class='column is-3' :id="`project-${project.name.toLowerCase()}`">
            <div class='card' style='height:100%;'>
              <p>yes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang='ts'>
import type { GitHubSponsorResponse, Sponsorship } from '~/interfaces/GitHubSponsor';
import type { GitHubRepoResponse } from '~/interfaces/GitHubRepository';
import { defineComponent, reactive } from 'vue';

interface ApplicationState {
  sponsors: GitHubSponsorResponse | null;
  topRepos: GitHubRepoResponse;
  birthday: Date;
  projects: Project[];
  years: number;
  age: number;
}

interface Project {
  name: string;
}

const projects: Project[] = [
  {
    name: 'Nino'
  }
];

export default defineComponent({
  setup() {
    const current = new Date();
    const birthday = new Date(2004, 2, 24);

    const state = reactive<ApplicationState>({
      sponsors: null,
      topRepos: [],
      birthday,
      projects,
      years: (current.getFullYear() - 2017 + (current.getMonth() === 2 ? 1 : 0)),
      age: (current.getFullYear() - 2004 + (current.getMonth() === 2 && current.getDate() === 24 ? 1 : 0))
    });

    return state;
  },
  async beforeMount() {
    await this.getMostStarredRepos();
    await this.getSponsorships();
  },
  methods: {
    async getSponsorships() {
      const resp = await fetch('https://api.floofy.dev/sponsors/auguwu?first=10&pricing=dollars');
      const data: GitHubSponsorResponse = await resp.json();

      this.sponsors = data;
      console.log(`[Application] Received status ${resp.status} on "https://api.floofy.dev/sponsors/auguwu?first=10&pricing=dollars" (success: ${resp.ok ? 'yes' : 'no'})`);
    },

    async getMostStarredRepos() {
      const resp = await fetch('https://api.github.com/users/auguwu/repos');
      const data: GitHubRepoResponse = await resp.json();

      this.topRepos = data.sort((uno, dos) => dos.stargazers_count - uno.stargazers_count);
      console.log(`[Application] Received status ${resp.status} on "https://api.github.com/users/auguwu/repos" (success: ${resp.ok ? 'yes' : 'no'})`);
    }
  }
});
</script>
<style lang='scss'>
.centered {
  border-radius: 1.5rem;
  background: #121212;
  transform: translte(0, -50%);
  position: absolute;
  border: 0;
  top: 50%;
}
</style>
