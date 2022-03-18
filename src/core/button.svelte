<script>
  export let destination;
  export let text;
</script>

<a href={destination} class="playnow-btn inline-block">
  <p class="playnow-p">{text}</p>
  <img src="../images/arrow-right-svg.svg" loading="lazy" alt="Arrow right" class="playnow-img" />
  <div class="playnow-dot" />
</a>

<style lang="scss">
  .playnow-btn {
    position: relative;
    display: flex;
    width: 190px;
    height: 44px;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    background-image: url('../images/playnow-cta-svg.svg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    text-decoration: none;
  }

  .playnow-p {
    margin-right: 8px;
    color: #fff;
    text-transform: uppercase;
  }

  .playnow-img {
    width: 16px;
    height: 16px;
    margin-left: 40px;
    display: inline-block;
  }

  .playnow-dot {
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    width: 3px;
    height: 3px;
    background-color: #ffe497;
  }
</style>
