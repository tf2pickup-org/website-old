<script>
  import PageHero from '../core/page-hero.svelte';
  import Dots from '../core/dots.svelte';
  export let pageTitle;
</script>

<div class="subpage-section-content">
  <PageHero {pageTitle} />
  <div class="subpage-content-wrapper">
    <Dots />
    <slot />
  </div>
</div>

<style lang="scss">
  .subpage-section-content {
    padding-right: 20px;
    padding-bottom: 50px;
    padding-left: 20px;
    flex: 1;
    background-image: url('../images/main-bg-img.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .subpage-content-wrapper {
    position: relative;
    max-width: 1400px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: 80px;
    border-radius: 5px;
    background-color: rgba(10, 26, 51, 0.6);
  }
</style>
