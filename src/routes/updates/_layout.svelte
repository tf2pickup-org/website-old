<script>
  export let title;
</script>

<svelte:head>
  <title>{title} | tf2pickup.org</title>
</svelte:head>

<div class="main-container">
  <slot />
</div>

<style>
  .main-container {
  }
</style>
