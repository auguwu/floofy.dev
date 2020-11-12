<template>
  <div id='app'>
    <section class='hero is-fullheight is-dark'>
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

                View below for maintaining projects and donators! 💜
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
          <div class='columns is-multiline'>
            <div
              class='column is-3'
              v-for='(project, idx) of this.projects'
              :key='idx'
            >
              <div class='card' style='height:100%;'>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img :src='project.image' :alt='project.name.toLowerCase()' class='round' draggable='false' />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>{{ project.name }}</p>
                      <p class='subtitle is-6'>{{ project.description }}</p>
                    </div>
                  </div>
                  <div class='content'>
                    Technologies: {{ project.technologies }}<br />
                    Languages: {{ project.languages }}<br />
                    Roles: {{ project.role }}<br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='hero is-dark'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Donators</h1>
          <h2 class='subtitle'>
            Curated list of donators on <a href='https://github.com/sponsors/auguwu'>GitHub</a>!<br /><br />
            Note: The data shown here is updated in real-time by GitHub, so if you recently sponsored,
            refresh the page to see yourself! If your sponsorship is under a private subscription, you won't be
            listed here.<br /><br />
            <p v-if='loading'>Loading...</p>
            <p v-if='!transaction.success'>
              Unable to load sponsors:<br />
              {{ transaction.error }}
            </p>
            <p v-else>
              Total Sponsors: {{ sponsors?.total_count || 0 }}
            </p>
          </h2>
          <div class='columns is-multiline'>
            <div
              class='column is-3'
              v-for='(sponsor, idx) of sponsors?.data || []'
              :key='idx'
            >
            <div class='card' style='height:100%;'>
              <div class='card-content'>
                <div class='media'>
                  <div class='media-left'>
                    <figure class='image is-48x48'>
                      <img :src='sponsor.user.avatar_url' :alt='sponsor.user.login' draggable='false' class='round' />
                    </figure>
                  </div>
                  <div class='media-content'>
                    <p class='title is-4'>
                      <a class='white-text' :href='sponsor.user.url'>{{ sponsor.user.name || sponsor.user.login }}</a>
                    </p>
                    <p class='subtitle is-6'>
                      Tier: {{ sponsor.tier.name }}<br />
                      Joined At: {{ this.formatJoinedAt(new Date(sponsor.created_at)) }}
                    </p>
                  </div>
                </div>
                <div class='content'>
                  {{ sponsor.user.bio || 'User is a mystery...' }}<br /><br />
                  <i class='fas fa-address-book' /> Followers: {{ sponsor.user.followers }}
                  <p v-if='sponsor.user.website_url !== null'>
                    <i class='fas fa-home' /> <a :href='sponsor.user.website_url' class='white-text'>Website</a>
                  </p>
                  <p v-if='sponsor.user.company !== null'>
                    <i class='fas fa-building' /> {{ sponsor.user.company }}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='hero is-dark'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Sponsoring</h1>
          <h2 class='subtitle'>
            Creators and friends who I am giving money away to, they should be show-cased here for their hardwork!<br /><br />
            <p v-if='loading'>Loading...</p>
            <p v-if='!transaction.success'>
              Unable to load sponsors:<br />
              {{ transaction.error }}
            </p>
            <p v-else>
              Total Sponsors: {{ sponsorships?.total_count || 0 }}
            </p>
          </h2>
          <div class='columns is-multiline'>
            <div
              class='column is-3'
              v-for='(sponsor, idx) of sponsorships?.data || []'
              :key='idx'
            >
              <div class='card' style='height:100%;'>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img :src='sponsor.user.avatar_url' class='round' draggable='false' />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>
                        <a class='white-text' :href='sponsor.user.url'>{{ sponsor.user.name || sponsor.user.login }}</a>
                      </p>
                      <p class='subtitle is-6'>
                        Tier: {{ sponsor.tier.name }}<br />
                        Joined At: {{ this.formatJoinedAt(new Date(sponsor.created_at)) }}
                      </p>
                    </div>
                  </div>
                  <div class='content'>
                    {{ sponsor.user.bio || 'User is a mystery...' }}<br /><br />
                    <i class='fas fa-address-book' /> Followers: {{ sponsor.user.followers }}
                    <p v-if='sponsor.user.website_url !== null'>
                      <i class='fas fa-home' /> <a :href='sponsor.user.website_url' class='white-text'>Website</a>
                    </p>
                    <p v-if='sponsor.user.company !== null'>
                      <i class='fas fa-building' /> {{ sponsor.user.company }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang='ts'>
import type { GitHubSponsorResponse, Sponsorship } from '~/interfaces/GitHubSponsor';
import { defineComponent, onMounted, reactive, Ref, ref } from 'vue';

interface ApplicationState {
  sponsorships: Ref<GitHubSponsorResponse['user_sponsors'] | null>;
  transaction: Ref<{ success: boolean; error: any }>;
  sponsors: Ref<GitHubSponsorResponse['sponsors'] | null>;
  birthday: Date;
  projects: Project[];
  current: number;
  loading: Ref<boolean>;
  years: number;
  age: number;
}

interface ProjectLink {
  icon: [type: 'fab' | 'fas', icon: string];
  url: string;
}

interface Project {
  technologies: string;
  description: string;
  languages: string;
  image: string;
  role: string;
  name: string;
}

const projects: Project[] = [
  {
    technologies: 'Docker, PostgreSQL, MongoDB, Redis, Vue.js',
    description: 'Advanced moderation Discord bot as an entry to Discord\'s Hack Week.',
    languages: 'Kotlin, TypeScript, JavaScript',
    image: 'https://cdn.floofy.dev/images/Nino.png',
    role: 'Databases, Sysadmin, DevOps, Web Development',
    name: 'Nino'
  },
  {
    technologies: 'HTML, CSS',
    description: 'All your social profiles in one place. (Work in Progress)',
    languages: 'Elixir',
    image: 'https://profile.place/assets/img/logo.png',
    role: 'Frontend',
    name: 'profile.place'
  }
];

const MONTHS = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};

export default defineComponent({
  setup() {
    const current = new Date();
    const birthday = new Date(2004, 2, 24);

    const sponsors = ref<GitHubSponsorResponse['sponsors'] | null>(null);
    const isLoading = ref(true);
    const transaction = ref({ success: true, error: null });
    const userSponsors = ref<GitHubSponsorResponse['user_sponsors'] | null>(null);

    function fetchSponsorships() {
      isLoading.value = true;
      fetch('https://api.floofy.dev/sponsors/auguwu?first=10&pricing=dollars')
        .then(async (res) => {
          if (!res.ok) {
            const error = new Error(`Received ${res.status} on api.floofy.dev (${JSON.stringify(await res.json())})`);
            error.name = 'HttpError';

            isLoading.value = false;
            console.log(error);
            throw error;
          }

          return res.json();
        })
        .then((data) => {
          sponsors.value = data.sponsors;
          userSponsors.value = data.user_sponsors;

          isLoading.value = false;
          transaction.value = { success: true, error: null };
        })
        .catch(error => {
          transaction.value = { success: false, error };
        });
    }

    onMounted(() => {
      fetchSponsorships();
    });

    const state = reactive<ApplicationState>({
      sponsorships: userSponsors,
      transaction,
      current: current.getFullYear(),
      sponsors,
      birthday,
      projects,
      loading: isLoading,
      years: (current.getFullYear() - 2017 + (current.getMonth() === 2 ? 1 : 0)),
      age: (current.getFullYear() - 2004 + (current.getMonth() === 2 && current.getDate() === 24 ? 1 : 0))
    });

    return state;
  },

  methods: {
    formatJoinedAt(date: Date) {
      return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
  }
});
</script>
