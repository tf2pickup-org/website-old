<script>
  import '../app.scss';
  import NavigationBar from '../core/navigation-bar.svelte';
  import Footer from '../core/footer.svelte';
</script>

<NavigationBar />
<slot />
<Footer />

<style lang="scss">
  @font-face {
    font-family: 'Staatliches-Regular';
    src: url('../static/fonts/Staatliches-Regular.woff') format('woff'),
      url('../static/fonts/Staatliches-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :global(.main-container) {
    position: relative;
    z-index: 100;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
  }
</style>
