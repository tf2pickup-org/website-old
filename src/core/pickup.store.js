import { derived, readable } from 'svelte/store';
import { pickupList } from '../utils/pickup-list.js';

function getVoteWinningMap(data) {
  return data.mapVoteResults.reduce(function (prev, curr) {
    return prev.voteCount > curr.voteCount ? prev : curr;
  }).map;
}

function getMapImageFileName(map, arr) {
  return (
    arr.find(el => {
      return map.includes(el);
    }) ?? 'unknown'
  );
}

export const pickups = readable([], set => {
  Promise.all(
    pickupList.map(async pickup => {
      try {
        const data = await fetch(`${pickup.apiUrl}/queue`).then(response => response.json());
        const status = {
          players: data.slots.filter(slot => !!slot.player).length,
          playerSlots: data.slots.length,
          map: getVoteWinningMap(data),
          mapUrl: getMapImageFileName(getVoteWinningMap(data), mapImageFileNameList),
        };
        return { ...pickup, status };
      } catch (error) {
        console.error(`${pickup.name}: ${error}`);
        return { ...pickup };
      }
    }),
  ).then(pickups => set(pickups));
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

const mapImageFileNameList = [
  'product',
  'prolands',
  'propaganda',
  'process',
  'proplant',
  'prowater',
  'ramjam',
  'reckoner',
  'shiftwater',
  'snakewater',
  'summercoast',
  'sunshine',
  'upward',
  'vigil',
  'villa',
  'warmtic',
  'ashville',
  'badlads',
  'bagel',
  'ballin_comptf',
  'ballin_sky',
  'barnblitz',
  'bball_sweethills',
  'borneo',
  'cardinal',
  'cascade',
  'clearcut',
  'coalplant',
  'granary',
  'gullywash',
  'kalinka',
  'lakeside',
  'logjam',
  'mannbase',
];

export const activeRegions = derived(pickups, pickups =>
  allRegions
    .map(({ designator, name }) => ({
      designator,
      name,
      pickups: pickups.filter(pickup => pickup.region === designator),
    }))
    .filter(ar => ar.pickups.length > 0),
);
