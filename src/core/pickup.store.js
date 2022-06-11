import { derived, readable } from 'svelte/store';
import { pickupList } from '../utils/pickup-list.js';

export const pickups = readable([], set => {
  Promise.all(pickupList.map(async pickup => {
    try {
      const data = await fetch(`${pickup.apiUrl}/queue`).then(response => response.json());
      const status = {
        players: data.slots.filter(slot => !!slot.player).length,
        playerSlots: data.slots.length,
        map: data.mapVoteResults.reduce(function (prev, curr) {
          return prev.voteCount > curr.voteCount ? prev : curr;
        }).map,
      };
      return { ...pickup, status };
    } catch (error) {
      console.error(`${pickup.name}: ${error}`);
      return { ...pickup };
    }
  }))
  .then(pickups => set(pickups));
});

const allRegions = [
  {
    designator: 'EU',
    name: 'Europe',
  },
  {
    designator: 'CIS',
    name: 'Cis',
  },
  {
    designator: 'NA',
    name: 'North America',
  },
  {
    designator: 'SA',
    name: 'South America',
  },
  {
    designator: 'AO',
    name: 'Asia & Oceania',
  },
];

export const activeRegions = derived(pickups,
  pickups => allRegions.map(({ designator, name }) => ({
    designator,
    name,
    pickups: pickups.filter(pickup => pickup.region === designator),
  })).filter(ar => ar.pickups.length > 0)
);
