<script>
  import Button from '../core/button.svelte';
  import { onMount } from 'svelte';

  export let endpoint;
  export let pickupLink;

  let pickup = {};
  onMount(async () => {
    try {
      const data = await fetch(endpoint).then((response) => response.json());
      pickup = {
        players: data.slots.filter((slot) => !!slot.player).length,
        playerSlots: data.slots.length,
        map: data.mapVoteResults.reduce(function (prev, curr) {
          return prev.voteCount > curr.voteCount ? prev : curr;
        }).map,
      };
    } catch (error) {
      console.log(error);
    }
  });
  //TODO: Prepare images for each map, Edit it so background changes depending on the map currently wining votes
</script>

<a href={pickupLink} class="region-slide-item w-inline-block">
  <div class="rs-top">
    <img
      loading="lazy"
      src="images/tf2pickup-pl-logo.png"
      alt="Tf2pickup logo - Poland"
      class="rs-logo"
    />
  </div>
  <div class="rs-mid">
    <div class="rs-players">
      <div class="rs-players-info">
        PLAYERS: <span class="rs-current-players">{pickup.players}</span>/{pickup.playerSlots}
      </div>
    </div>
    <img
      loading="lazy"
      src="images/maps/slider-map-preview.png"
      alt="Map preview"
      class="rs-map-preview"
    />
  </div>
  <div class="navbar-playnow-btn region-slider">
    <Button destination={pickupLink} text="Play Now" />
  </div>
</a>

<style lang="scss">
  .navbar-playnow-btn.region-slider {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .navbar-playnow-img.region-slider {
    margin-left: 0px;
  }
  .region-slide-item {
    height: 100%;
    flex: 0 0 23%;
    transition: opacity 300ms ease;
    color: #fff;
    text-decoration: none;
  }

  .region-slide-item:hover {
    opacity: 0.7;
  }

  .rs-top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }

  .rs-mid {
    position: relative;
  }

  .rs-map-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }

  .rs-btm {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }

  .rs-players {
    position: absolute;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 20px;
    text-align: center;
  }

  .rs-players-info {
    display: inline-block;
    padding: 14px 16px;
    background-color: rgba(10, 26, 51, 0.5);
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }

  .rsa-img {
    transform: rotate(-45deg);
  }

  .w-slide {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    white-space: normal;
    text-align: left;
  }
</style>
