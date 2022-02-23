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
    src: url('./static/fonts/Staatliches-Regular.woff') format('woff'),
      url('static/fonts/Staatliches-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
</style>
