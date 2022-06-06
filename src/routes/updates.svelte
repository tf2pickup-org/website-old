<script>
  import UpdateEntryTile from '../core/update-entry-tile.svelte';
  import { globToArray } from '../utils/glob-to-array.js';
  import SubpageWrapper from '../core/subpage-wrapper.svelte';
  const modules = import.meta.globEager('../routes/updates/*.md');

  console.log(modules);
  const posts = globToArray(modules);
  let currentYear = new Date().getFullYear();

  let postsByYear = () => {
    return {
      thisYear: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
      lastYear: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear - 1)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
      twoYearsAgo: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear - 2)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
      threeYearsAgo: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear - 3)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
      fourYearsAgo: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear - 4)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
      fiveYearsAgo: posts
        .filter(post => post.metadata.date.substring(0, 4) == currentYear - 5)
        .sort(function (p, d) {
          return new Date(d.metadata.date) - new Date(p.metadata.date);
        }),
    };
  };
  let checkYear = date => date.substring(0, 4);
</script>

<svelte:head>
  <title>Updates | tf2pickup.org</title>
</svelte:head>
<SubpageWrapper pageTitle="Updates">
  {#if postsByYear().thisYear.length > 0}
    <div class="updates-year">
      <div class="updates-left">
        <p class="update-year">{currentYear}</p>
      </div>
      <div class="updates-divider" />
      <div class="update-right">
        {#each postsByYear().thisYear as post}
          <UpdateEntryTile {post} />
        {/each}
      </div>
    </div>
  {/if}
  {#if postsByYear().lastYear.length > 0}
    <div class="updates-year">
      <div class="updates-left">
        <p class="update-year">{currentYear - 1}</p>
      </div>
      <div class="updates-divider" />
      <div class="update-right">
        {#each postsByYear().lastYear as post}
          <UpdateEntryTile {post} />
        {/each}
      </div>
    </div>
  {/if}
  {#if postsByYear().twoYearsAgo.length > 0}
    <div class="updates-year">
      <div class="updates-left">
        <p class="update-year">{currentYear - 2}</p>
      </div>
      <div class="updates-divider" />
      <div class="update-right">
        {#each postsByYear().twoYearsAgo as post}
          <UpdateEntryTile {post} />
        {/each}
      </div>
    </div>
  {/if}
  {#if postsByYear().twoYearsAgo.length > 0}
    <div class="updates-year">
      <div class="updates-left">
        <p class="update-year">{currentYear - 3}</p>
      </div>
      <div class="updates-divider" />
      <div class="update-right">
        {#each postsByYear().twoYearsAgo as post}
          <UpdateEntryTile {post} />
        {/each}
      </div>
    </div>
  {/if}
</SubpageWrapper>

<style lang="scss">
  .updates-year {
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
  }
  .updates-left {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .update-year {
    position: sticky;
    top: 80px;
    bottom: 80px;
    font-size: 22px;
    font-weight: 600;
  }
  .update-right {
    padding-bottom: 80px;
    flex: 1;
  }
  .updates-divider {
    width: 1px;
    height: auto;
    margin-right: 80px;
    margin-left: 80px;
    background-color: hsla(0, 0%, 100%, 0.5);
  }
  .update-date {
    color: hsla(0, 0%, 100%, 0.8);
  }
</style>
