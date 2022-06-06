<script>
  import { Tabs, TabList, TabPanel, Tab } from '../utils/tabs.js';
  import { pickupList } from '../utils/pickup-list.js';
  import CarouselOfPickups from '../core/carousel-of-pickups.svelte';
  let pickupsEu = pickupList.filter((item) => item.region === 'EU');
  let pickupsCis = pickupList.filter((item) => item.region === 'CIS');
  //If regions change edit here
  let activeRegions = () => {
    return {
      EU: pickupList.filter((pickup) => pickup.region === 'EU').length,
      CIS: pickupList.filter((pickup) => pickup.region === 'CIS').length,
      NA: pickupList.filter((pickup) => pickup.region === 'NA').length,
      AO: pickupList.filter((pickup) => pickup.region === 'AO').length,
    };
  };
  console.log('asd > ', pickupList);
</script>

<div id="playNow" data-scroll="mid" class="regions-wrapper">
  <div class="main-container">
    <Tabs>
      <TabList>
        {#if activeRegions().EU > 0}<Tab>Europe</Tab>{/if}
        {#if activeRegions().CIS > 0} <Tab>Cis</Tab>{/if}
        {#if activeRegions().NA > 0}<Tab>North America</Tab>{/if}
        {#if activeRegions().AO > 0}<Tab>Asia & Oceania</Tab>{/if}
      </TabList>
      <TabPanel>
        <CarouselOfPickups region="EU" pickups={pickupsEu} />
      </TabPanel>
      <TabPanel>
        <CarouselOfPickups region="CIS" pickups={pickupsCis} />
      </TabPanel>
    </Tabs>
  </div>
</div>

<style lang="scss">
  .regions-tabs-menu {
    display: inline-block;
    width: 100%;
    margin-bottom: -1px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
  }
  .region-tab-link {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    opacity: 0.4;
    color: #fff;
  }
  .w-tab-link {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    padding: 9px 30px;
    text-align: left;
    cursor: pointer;
    color: #222222;
    background-color: #dddddd;
  }

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

  .regions-tabs-menu {
    display: inline-block;
    width: 100%;
    margin-bottom: -1px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
  }

  .region-tab-link {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    opacity: 0.4;
    color: #fff;
  }

  .region-tab-link.w--current {
    border-bottom: 1px solid #fff;
    background-color: transparent;
    opacity: 1;
  }

  .regions-tabs-content {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .region-tab-p {
    text-transform: uppercase;
  }

  .region-slider-wrapper {
    height: auto;
    background-color: transparent;
  }

  .region-slider-arrow {
    z-index: 50;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #eb1557;
    transform: rotate(45deg);
  }

  .region-slider-arrow.left {
    margin-left: 15px;
  }

  .region-slider-arrow.right {
    margin-right: 15px;
  }

  .region-slider-nav {
    position: static;
    display: none;
  }

  .region-slide-layout {
    display: -ms-grid;
    display: grid;
    width: 100%;
    height: 100%;
    padding-right: 45px;
    padding-left: 45px;
    justify-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  .region-slide-item {
    height: 100%;
    transition: opacity 300ms ease;
    color: #fff;
    text-decoration: none;
  }

  .rsa-img {
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 991px) {
    .region-slide-layout {
      padding-right: 0px;
      padding-left: 0px;
    }
  }
</style>
