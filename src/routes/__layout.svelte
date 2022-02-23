<script>
  import '../app.scss';
</script>

<slot />

<style>
  @font-face {
    font-family: 'Staatliches-Regular';
    src: url('./static/fonts/Staatliches-Regular.woff') format('woff'),
      url('static/fonts/Staatliches-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
</style>
