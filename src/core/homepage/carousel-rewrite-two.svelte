<script>
  import PickupPreview from './pickup-preview.svelte';
  import CarouselSlideNavButton from './carousel-slide-nav-button.svelte';
  export let pickups;

  let innerWidth;
  let scrollPosition

  let pickupGroupedForDesktop = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 3);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

  let pickupGroupedForMobile = pickups.reduce((arr, item, index) => {
    const groupIndex = Math.floor(index / 1);
    arr[groupIndex] = [...(arr[groupIndex] ?? []), item];
    return arr;
  }, []);

</script>

<svelte:window bind:innerWidth={innerWidth}  bind:scrollY={scrollPosition} />
<div class="carousel-wrapper">
  <ul class="region-slider-mask w-slider-mask">
    {#each pickupGroupedForDesktop as group, i}
      {#if i === 0}
      <input type="radio" name="radio-btn" id="slide-{i}" checked/>
      {:else}
      <input type="radio" name="radio-btn" id="slide-{i}"/>
      {/if}
        <li id="slide-{i}" class="region-slide w-slide">
          {#if i === 0}
            <label for="slide-1" class="slide-navigation-button next"><CarouselSlideNavButton direction="right"/></label>
            <label for="slide-{ pickupGroupedForDesktop.length - 1}" class="slide-navigation-button prev"><CarouselSlideNavButton direction="left"/></label>
          {:else if i === pickupGroupedForDesktop.length - 1}
            <label for="slide-0" class="slide-navigation-button next"><CarouselSlideNavButton direction="right"/></label>
            <label for="slide-{i - 1}" class="slide-navigation-button prev"><CarouselSlideNavButton direction="left"/></label>
          {:else}
            <label for="slide-{i + 1}" class="slide-navigation-button next"><CarouselSlideNavButton direction="right"/></label>
            <label for="slide-{i - 1}" class="slide-navigation-button prev"><CarouselSlideNavButton direction="left"/></label>
          {/if}
          <div class="region-slide-layout-desktop">
            {#each group as pickup}
              <PickupPreview pickupData={pickup} />
            {/each}
          </div>
        </li>
    {/each}
  </ul>
</div>

<style>
  .region-slider-mask input {
    display: none;
  }
  input:checked + .region-slide  .region-slide-layout-desktop {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
  }
  .region-slide {
    opacity: 0;
    transform: scale(0)
  }
  .region-slide-layout-desktop {
    display: grid;
    width: 100%;
    height: 100%;
    padding-right: 45px;
    padding-left: 45px;
    justify-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .region-slider-mask,
  .region-slide {
    display: grid;
    gap: 0.25rem;
    grid-auto-flow: column;
  }
  .region-slider-mask {
    overflow-x: hidden;
    scroll-behavior: smooth;
    grid-auto-columns: 100%;
    padding: 0 3rem;
    scroll-padding-inline: 3rem;
  }
</style>
