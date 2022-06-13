<script>
  import { Tabs, TabList, TabPanel, Tab } from '../../utils/tabs.js';
  import { activeRegions } from '../pickup.store.js';
  import CarouselOfPickups from './carousel-of-pickups.svelte';
  import CarouselRewrite from './carousel-rewrite.svelte';
  import CarouselRewriteTwo from './carousel-rewrite-two.svelte';
</script>

<div id="playNow" data-scroll="mid" class="regions-wrapper">
  <div class="main-container">
    <Tabs>
      <TabList>
        {#each $activeRegions as region}
          <Tab>{region.name}</Tab>
        {/each}
      </TabList>

      {#each $activeRegions as region}
        <TabPanel>
          <CarouselOfPickups pickups={region.pickups} />
          <CarouselRewriteTwo pickups={region.pickups} />
        </TabPanel>
      {/each}
    </Tabs>
  </div>
</div>

<style lang="scss">
  .main-container {
    position: relative;
    z-index: 100;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .regions-wrapper {
    margin-top: 160px;
  }
</style>
