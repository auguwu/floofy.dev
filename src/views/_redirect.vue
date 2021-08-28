<template>
  <div />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

// TODO: mode this to src/assets
const redirects = [
  {
    id: 'discord',
    redirect: 'https://discord.gg/JjHGR6vhcG',
  },
  {
    id: 'github',
    redirect: 'https://github.com/auguwu',
  },
  {
    id: 'twitter',
    redirect: 'https://twitter.com/auguuwu',
  },
  {
    id: 'telegram',
    redirect: 'https://t.me/auguwu',
  },
  {
    id: 'steam',
    redirect: 'https://steamcommunity.com/id/auguwu',
  },
];

export default {
  // TODO: remove `this` when this stops breaking:
  //  ERROR  ERROR in src/views/_redirect.vue:34:24                                                                                              16:50:39
  //  TS2339: Property '$router' does not exist on type '{ mounted(): void; }'.
  mounted(this: any) {
    const id = this.$route.params.redirect;
    const redirect = redirects.find((red) => red.id === id);

    if (redirect !== undefined) window.open(redirect.redirect);
  },
};
</script>
