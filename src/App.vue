<template>
  <div id='app'>
    <div class='container mx-auto py-10 px-12 text-center justify-center'>
      <h1 class='text-white'>Hi!</h1>
    </div>
  </div>
</template>
<script lang='ts'>
import type { GitHubSponsorResponse, Sponsorship } from '~/interfaces/GitHubSponsor';
import type { GitHubRepoResponse } from '~/interfaces/GitHubRepository';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'application',
  data() {
    return {
      topRepos: [],
      sponsors: [],
      projects: [
        {
          description: 'Advanced and cute moderation discord bot as an entry of Discord\'s Hack Week!',
          language: 'TypeScript, Kotlin',
          image: 'https://augu.dev/images/Nino.png',
          links: [
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/NinoDiscord/Nino'
            },
            {
              icon: ['fas', 'home'],
              url: 'https://nino.augu.dev'
            }
          ],
          name: 'Nino',
          role: 'Lead Dev'
        },
        {
          description: 'All your social profiles in one place. (WIP)',
          language: 'JavaScript',
          image: 'https://profile.place/assets/img/logo.png',
          links: [
            {
              icon: ['fas', 'home'],
              url: 'https://profile.place'
            },
            {
              icon: ['fab', 'discord'],
              url: 'https://discord.profile.place'
            },
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/profile-place'
            },
            {
              icon: ['fab', 'twitter'],
              url: 'https://twitter.profile.place'
            }
          ],
          name: 'profile.place',
          role: 'Frontend Dev'
        }
      ]
    };
  },
  async beforeMount(this: any) {
    await this.getTopStarredRepos();
    await this.getSponsors();
  },
  methods: {
    async getSponsors() {
      const res = await fetch('https://api.augu.dev/sponsors?login=auguwu&first=10');
      const data: GitHubSponsorResponse = await res.json();

      (this as any).sponsors = data.data;
    },

    getAge() {
      const date = new Date();
      const birthday = new Date(2004, 2, 24);

      return {
        birthday,
        age: (date.getFullYear() - 2004 + (
          date.getMonth() >= 2
            ? date.getDate() === 24
              ? 1
              : 0
            : 0
        ))
      };
    },

    getCopyrightYear() {
      const date = new Date();
      return date.getFullYear() === 2018 ? '2018' : `2018-${date.getFullYear()}`;
    },

    async getTopStarredRepos() {
      const res = await fetch('https://api.github.com/users/auguwu/repos');
      const data: GitHubRepoResponse = await res.json();

      const top = data.sort((uno, dos) =>
        dos.stargazers_count - uno.stargazers_count
      ).slice(0, 5);

      (this as any).topRepos = top;
    }
  }
})
export default class Application extends Vue {}
</script>
<style lang='scss'>

</style>
