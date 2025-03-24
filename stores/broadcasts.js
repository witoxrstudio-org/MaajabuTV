import { defineStore } from "pinia";

export const useBroadcastStore = defineStore("broadcasts", {
  state: () => ({
    emissions: [],
    episodes: [],
  }),
  actions: {
    async fetchEmissions() {
      const response = await fetch("https://maajabu.space/items/emission");
      const data = await response.json();
      this.emissions = data.data;
    },
    async fetchEpisodes(emissionId) {
      const response = await fetch(
        `https://maajabu.space/items/episodes?filter[emission_id][_eq]=${emissionId}`
      );
      const data = await response.json();
      this.episodes = data.data;
    },
  },
});
