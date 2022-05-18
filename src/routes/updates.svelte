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
    return {
      'thisYear': posts.filter(post => post.metadata.date.substring(0,4) == currentYear),
      'lastYear': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 1)),
      'twoYearsAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 2)),
      'threeYearsAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 3)),
      'fourYearsAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 4)),
      'fiveYearsAgo': posts.filter(post => post.metadata.date.substring(0,4) == (currentYear - 5)),
    }
  }
  console.log('tt',postsByYear())
  let checkYear = (date) => date.substring(0,4);

</script>

<svelte:head>
  <title>Updates | tf2pickup.org</title>
</svelte:head>

<PageHero pageTitle="Updates" />
{#if postsByYear().thisYear.length > 0}
<div class="updates-year">
  <div class="updates-left">
    <p class="update-year">{currentYear}</p>
  </div>
  <div class="updates-divider"></div>
  <div class="update-right">
    {#each postsByYear().thisYear as post}
      <UpdateEntryTile post={post}/>
    {/each}
  </div>
</div>
{/if}
{#if postsByYear().lastYear.length > 0}
<div class="updates-year">
  <div class="updates-left">
    <p class="update-year">{currentYear - 1}</p>
  </div>
  <div class="updates-divider"></div>
  <div class="update-right">
    {#each postsByYear().lastYear as post}
      <UpdateEntryTile post={post}/>
    {/each}
  </div>
</div>
{/if}
{#if postsByYear().twoYearsAgo.length > 0}
<div class="updates-year">
  <div class="updates-left">
    <p class="update-year">{currentYear - 2}</p>
  </div>
  <div class="updates-divider"></div>
  <div class="update-right">
    {#each postsByYear().twoYearsAgo as post}
      <UpdateEntryTile post={post}/>
    {/each}
  </div>
</div>
{/if}
