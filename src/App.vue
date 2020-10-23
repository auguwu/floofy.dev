<template>
  <div id='app'>
    <div class='container mx-auto h-screen'>
      <p class='text-black'>uwu my owo</p>
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
