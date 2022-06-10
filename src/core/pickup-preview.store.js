import { readable } from 'svelte/store';
import { pickupList } from '../utils/pickup-list.js';

export const pickupPreviews = readable([], set => {
  const activeRegions = [
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
  ]
    .map(({ designator, name }) => ({
      designator,
      name,
      pickups: pickupList.filter(pickup => pickup.region === designator),
    }))
    .filter(({ pickups }) => pickups.length > 0);

});
