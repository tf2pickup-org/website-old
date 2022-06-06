<script>
  import PickupService from '../core/pickup-service.svelte';
  import CarouselSlideNavButton from '../core/carousel-slide-nav-button.svelte';
  export let pickups;

  import { onMount } from 'svelte';

  let carouselComponent; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance

  onMount(async () => {
    const module = await import('svelte-carousel');
    carouselComponent = module.default;
  });

  function goToPrevPage() {
    carousel.goToPrev();
  }

  function goToNextPage() {
    carousel.goToNext();
  }

  const pickupsPerSlide = 4;

  const pickupGrouped = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / pickupsPerSlide);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);
</script>

<div class="carousel-wrapper">
  <div class="region-slider-wrapper w-slider">
    <div class="region-slider-mask w-slider-mask">
      <svelte:component
        this={carouselComponent}
        bind:this={carousel}
        let:showPrevPage
        let:showNextPage
      >
        <div class="slide-navigation-button" slot="prev" on:click={goToPrevPage}>
          <CarouselSlideNavButton direction="left" />
        </div>
        {#each pickupGrouped as group, i}
          <div class="slide-{i} region-slide w-slide">
            <div class="region-slide-layout">
              {#each group as pickup}
                <PickupService pickupData={pickup} />
              {/each}
            </div>
          </div>
        {/each}
        <div slot="next" class="slide-navigation-button" on:click={goToNextPage}>
          <CarouselSlideNavButton direction="right" />
        </div>
      </svelte:component>
    </div>
  </div>
</div>

<style>
  .slide-navigation-button {
    display: flex;
    align-items: center;
  }
  .region-slide-layout {
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
  .w-slider-mask {
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    left: 0;
    right: 0;
    height: 100%;
    white-space: nowrap;
  }

  .w-slider {
    position: relative;
    text-align: center;
    clear: both;
    tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .region-slider-wrapper {
    height: auto;
    background-color: transparent;
  }
</style>
