<script>
  import Button from '../button.svelte';
  /**
   * @type {object}
   * @property {name} name
   * @property {string} region
   * @property {string} link
   * @property {string} apiUrl
   * @property {string} logo
   * @property {object} status
   */
  export let pickupData;
  console.log(pickupData);
</script>

<a href={pickupData.link} class="region-slide-item w-inline-block" target="_blank">
  <div class="rs-top">
    <img loading="lazy" src={pickupData.logo} alt={pickupData.name} class="rs-logo" />
  </div>
  {#if pickupData.status}
  <div class="rs-mid">
    <div class="rs-players">
      <div class="rs-players-info">
        PLAYERS: <span class="rs-current-players">{pickupData.status.players}</span>/{pickupData
        .status.playerSlots}
      </div>
    </div>
    <img
      loading="lazy"
      src="images/maps/{pickupData.status.mapUrl}.png"
      alt="Map preview"
      class="rs-map-preview"
    />
  </div>
  {:else}
    <div class="rs-mid">
      <div class="rs-players">
        <div class="rs-players-info">
          <span class="rs-current-players">API MAY BE DOWN </span>
        </div>
      </div>
      <img loading="lazy" src="images/maps/unknown.png" alt="Map preview" class="rs-map-preview" />
    </div>
  {/if}
  <div class="navbar-playnow-btn region-slider">
    <Button destination={pickupData.link} text="Play Now" />
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
  .region-slide-item {
    height: 100%;
    flex: 0 0 23%;
    transition: opacity 300ms ease;
    color: $main-text-color;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  .rs-top {
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
    background-color: $main-background-transparent-50;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
</style>
