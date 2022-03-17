<script>
  export let direction;
</script>

{#if direction === 'left'}
  <div
    data-w-id="35722799-5f83-b4bb-9d35-86e3a604fda6"
    class="region-slider-arrow left w-slider-arrow-left"
  >
    <img
      style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
      loading="lazy"
      src="images/arrow-left.svg"
      alt=""
      class="rsa-img"
    />
  </div>
{:else}
  <div
    data-w-id="35722799-5f83-b4bb-9d35-86e3a604fda6"
    class="region-slider-arrow right w-slider-arrow-right"
  >
    <img
      style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
      loading="lazy"
      src="images/arrow-right.svg"
      alt=""
      class="rsa-img"
    />
  </div>
{/if}

<style lang="scss">
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
</style>
