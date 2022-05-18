<!---
<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/updates/posts.json`);
    const { posts } = await res.json();
    return {
      props: { posts },
    };
  }
</script>
---->
<script>
  import PageHero from '../core/page-hero.svelte';
  import UpdateEntryTile from '../core/update-entry-tile.svelte';
  import globToArray from '../utils/globToArray.js';
  const modules = import.meta.globEager('../routes/updates/*.md');

  console.log(modules);
  const posts = globToArray(modules);
  let currentYear = new Date().getFullYear()

  let postsByYear = () => {
    let currentYear = new Date().getFullYear()
    return {
      'thisYear': posts.filter(post => post.metadata.date.substring(0,4) == currentYear),
      'lastYear': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 1)),
      '2YAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 2)),
      '3YAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 3)),
      '4YAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 4)),
      '5YAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 5)),
    }
  }
  console.log('tt',postsByYear())
  let checkYear = (date) => date.substring(0,4);

</script>

<svelte:head>
  <title>Updates | tf2pickup.org</title>
</svelte:head>

<PageHero pageTitle="Updates" />
{#each posts as post}
  {#if checkYear(post.metadata.date) === '2022'}
    2022
    <UpdateEntryTile post={post}/>
  {:else}
    {#if checkYear(post.metadata.date) === '2021'}
      2021
      <UpdateEntryTile post={post}/>
    {/if}
  {/if}
{/each}
