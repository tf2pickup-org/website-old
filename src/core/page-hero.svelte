<script>
  export let pageTitle;
</script>

<section>
  <h1 class="subpage-h1">{pageTitle}</h1>
</section>

<style lang="scss">
  .subpage-h1 {
    margin-top: 30px;
    font-family: Staatliches, sans-serif;
    font-size: 70px;
    line-height: 1;
    font-weight: 400;
    text-align: center;
  }
  @media screen and (max-width: $tablet-breakpoint) {
    .subpage-h1 {
      font-size: 40px;
      line-height: 46px;
    }
  }
  @media screen and (max-width: $mobile-breakpoint) {
    .subpage-h1 {
      font-size: 35px;
      line-height: 42px;
    }
  }
</style>
