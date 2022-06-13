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
<svelte:head>
  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      let btns = document.querySelectorAll('.slide-navigation-button')
      btns.forEach(el => {
        el.addEventListener("click", function(event) {
          console.log('fire')
          event.preventDefault();
        })
      })
    });
  </script>
</svelte:head>
<svelte:window bind:innerWidth={innerWidth}  bind:scrollY={scrollPosition} />
<svelte:body style="scroll-margin-top: 300px; scroll-padding-top: 300px;"/>
<div class="carousel-wrapper">
  <div class="region-slider-mask w-slider-mask">
    {#if innerWidth > 900}
      {#each pickupGroupedForDesktop as group, i}
        <div id="slide-{i}" class="region-slide w-slide">
          {#if i === 0}
            <a
              href="#slide-{pickupGroupedForDesktop.length - 1}"
              class="slide-navigation-button next"
              on:click|preventDefault
            >
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {:else if i > 0}
            <a href="#slide-{i - 1}" class="slide-navigation-button prev" on:click|preventDefault>
              <CarouselSlideNavButton direction="prev" to={i - 1} />
            </a>
          {/if}
          <div class="region-slide-layout-desktop">
            {#each group as pickup}
              <PickupPreview pickupData={pickup} />
            {/each}
          </div>
          {#if i === pickupGroupedForDesktop.length - 1}
            <a href="#slide-0" class="slide-navigation-button next" on:click|preventDefault>
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {:else if i <= pickupGroupedForDesktop.length - 1}
            <a href="#slide-{i + 1}" class="slide-navigation-button next" on:click|preventDefault>
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {/if}
        </div>
      {/each}
    {:else}
      {#each pickupGroupedForMobile as group, i}
        <div id="slide-{i}" class="region-slide w-slide">
          {#if i === 0}
            <a
              href="#slide-{pickupGroupedForMobile.length - 1}"
              class="slide-navigation-button next"
            >
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {:else if i > 0}
            <a href="#slide-{i - 1}" class="slide-navigation-button prev">
              <CarouselSlideNavButton direction="prev" to={i - 1} />
            </a>
          {/if}
          <div class="region-slide-layout-mobile">
            {#each group as pickup}
              <PickupPreview pickupData={pickup} />
            {/each}
          </div>
          {#if i === pickupGroupedForMobile.length - 1}
            <a href="#slide-0" class="slide-navigation-button next">
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {:else if i <= pickupGroupedForMobile.length - 1}
            <a href="#slide-{i + 1}" class="slide-navigation-button next">
              <CarouselSlideNavButton direction="next" to={i} />
            </a>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .carousel-wrapper {
    position: relative;
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
  .region-slide {
    grid-auto-columns: 1fr;
  }
  .slide-navigation-button {
    align-items: center;
    z-index: 10;
    /*position: absolute;
    width: 3rem;
    padding: 1rem;*/
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
  .region-slide-layout-mobile {
    display: grid;
    width: 100%;
    height: 100%;
    padding-right: 45px;
    padding-left: 45px;
    justify-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr;
  }
  .next,
  .prev {
    display: none;
    align-items: center;
    z-index: 10;
    position: absolute;
    width: 3rem;
    padding: 1rem;
    background: rgb(0 0 0 / 0);
    opacity: 0;
  }
  .prev {
    left: 0;
    top: 0;
    bottom: 0;
  }
  .next {
    right: 0;
    top: 0;
    bottom: 0;
  }
  .region-slide:first-child :where(.next, .prev) {
    display: flex;
    scroll-margin-top: 300px; scroll-padding-top: 300px;
  }
  .region-slider-mask:hover :where(.next, .prev) {
    opacity: 1;
  }
  :where(.next, .prev):hover {
    background: rgb(0 0 0 / 0.3);
  }
  :where(.next, .prev) > img {
    transition: transform 75ms linear;
    transform: scale(1);
  }
  :where(.next, .prev):hover > img {
    transform: scale(1.2);
  }
  .region-slide:target :where(.next, .prev) {
    display: flex;
  }
  .region-slider-mask:has(:target:not(:first-child)) .region-slide:first-of-type .next {
    display: none;
  }
</style>
