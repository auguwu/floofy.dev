<template>
  <div id='app'>
    <div class='container mx-auto pb-16 pt-24 mt-8 mb-8 pl-32 center'>
      <div class='sm:hidden md:flex md:mb-4'>
        <div class='w-1/2 h-12'>
          <img src='https://cdn.floofy.dev/images/August.png' draggable='false' class='avatar' alt='augustpfp' />
        </div>
        <div class='w-1/2 h-12 pr-48'>
          <p class='text-white pb-4 pt-10 font-bold text-2xl'>Chris Hernandez</p>
          <p class='text-white text-xl'>uwu my owo?</p>
        </div>
      </div>
      <div class='sm:mb-4 md:hidden'>
        <p class='text-white'>hi</p>
      </div>
    </div>
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
  age: number;
}

export default defineComponent({
  setup() {
    const current = new Date();
    const birthday = new Date(2004, 2, 24);

    const state = reactive<ApplicationState>({
      sponsors: null,
      topRepos: [],
      birthday,
      age: (current.getFullYear() - 2004 + (current.getMonth() && current.getDate() === 24 ? 1 : 0))
    });

    return state;
  },
  async beforeMount() {
    await this.getMostStarredRepos();
    await this.getSponsorships();
  },
  methods: {
    async getSponsorships() {
      const resp = await fetch('https://api.augu.dev/sponsors?login=auguwu&first=10');
      const data: GitHubSponsorResponse = await resp.json();

      this.sponsors = data;
      console.log(`[Application] Received ${resp.statusText} on "/sponsors?login=auguwu&first=10" (success: ${resp.ok ? 'yes' : 'no'})`);
    },

    async getMostStarredRepos() {
      const resp = await fetch('https://api.github.com/users/auguwu/repos');
      const data: GitHubRepoResponse = await resp.json();

      this.topRepos = data.sort((uno, dos) => dos.stargazers_count - uno.stargazers_count);
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
