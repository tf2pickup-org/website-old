<script>
  export let name;
</script>

<div class="partners-title">
  <p class="partners-heading">{name}</p>
  <div class="partners-line" />
</div>

<style lang="scss">
  .partners-title {
    display: flex;
    align-items: center;
  }
  .partners-heading {
    margin-right: 40px;
    font-weight: 600;
  }
  .partners-line {
    height: 1px;
    flex: 1;
    background-color: $light-background-transparent-50;
  }
</style>
