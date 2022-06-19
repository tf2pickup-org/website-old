<script>
  import PickupPreview from './pickup-preview.svelte';
  import CarouselSlideNavButton from './carousel-slide-nav-button.svelte';
  export let pickups;

  import { onMount } from 'svelte';
  let innerWidth
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
  let pickupsPerSlide = 4;

  let pickupGrouped = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / pickupsPerSlide);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

  const pickupsGroupedinOne = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 1);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

  const pickupsGroupedinTwo = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 2);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

  const pickupsGroupedinThree = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 3);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

  const pickupsGroupedinFour = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 4);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

</script>
<svelte:window bind:innerWidth={ innerWidth } />
<div class="carousel-wrapper">
  <div class="region-slider-wrapper grid w-slider">
        {#if innerWidth < 720}
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
            {#each pickupsGroupedinOne as group, i}
              <div class="slide-{i} region-slide w-slide">
                <div class="region-slide-layout grid-group-one">
                  {#each group as pickup}
                    <PickupPreview pickupData={pickup} />
                  {/each}
                </div>
              </div>
            {/each}
              <div slot="next" class="slide-navigation-button" on:click={goToNextPage}>
                <CarouselSlideNavButton direction="right" />
              </div>
            </svelte:component>
          </div>
          {:else if innerWidth > 721 && innerWidth < 860}
          <div class="region-slider-mask w-slider-mask">
            <svelte:component
              this={carouselComponent}
              bind:this={carousel}
              let:showPrevPage
              let:showNextPage
            >
              <div class="slide-navigation-button" slot="prev" on:click={goToPrevPage}>
                <CarouselSlideNavButton direction="left"/>
              </div>
              {#each pickupsGroupedinTwo as group, i}
                <div class="slide-{i} region-slide w-slide">
                  <div class="region-slide-layout grid-group-two">
                    {#each group as pickup}
                      <PickupPreview pickupData={pickup}/>
                    {/each}
                  </div>
                </div>
              {/each}
              <div slot="next" class="slide-navigation-button" on:click={goToNextPage}>
                <CarouselSlideNavButton direction="right"/>
              </div>
            </svelte:component>
          </div>
        {:else if innerWidth > 861 && innerWidth < 1180}
          <div class="region-slider-mask w-slider-mask">
            <svelte:component
              this={carouselComponent}
              bind:this={carousel}
              let:showPrevPage
              let:showNextPage
            >
              <div class="slide-navigation-button" slot="prev" on:click={goToPrevPage}>
                <CarouselSlideNavButton direction="left"/>
              </div>
              {#each pickupsGroupedinThree as group, i}
                <div class="slide-{i} region-slide w-slide">
                  <div class="region-slide-layout grid-group-three">
                    {#each group as pickup}
                      <PickupPreview pickupData={pickup}/>
                    {/each}
                  </div>
                </div>
              {/each}
              <div slot="next" class="slide-navigation-button" on:click={goToNextPage}>
                <CarouselSlideNavButton direction="right"/>
              </div>
            </svelte:component>
          </div>
        {:else if innerWidth > 1181}
          <div class="region-slider-mask w-slider-mask">
            <svelte:component
              this={carouselComponent}
              bind:this={carousel}
              let:showPrevPage
              let:showNextPage
            >
              <div class="slide-navigation-button" slot="prev" on:click={goToPrevPage}>
                <CarouselSlideNavButton direction="left"/>
              </div>
              {#each pickupsGroupedinFour as group, i}
                <div class="slide-{i} region-slide w-slide">
                  <div class="region-slide-layout grid-group-four">
                    {#each group as pickup}
                      <PickupPreview pickupData={pickup}/>
                    {/each}
                  </div>
                </div>
              {/each}
              <div slot="next" class="slide-navigation-button" on:click={goToNextPage}>
                <CarouselSlideNavButton direction="right"/>
              </div>
            </svelte:component>
          </div>
        {/if}
  </div>
</div>

<style>
  .region-slide-layout {
    border-radius: 0.25rem;
    overflow: hidden;
  }
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
    grid-template-rows: auto;
  }
  .grid-group-one{ grid-template-columns: 1fr;}
  .grid-group-two {grid-template-columns: 1fr 1fr;}
  .grid-group-three {grid-template-columns: 1fr 1fr 1fr;}
  .grid-group-four {grid-template-columns: 1fr 1fr 1fr 1fr;}
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
  :global(.grid .grid-group-two) {
    grid-template-columns: 1fr 1fr;
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
