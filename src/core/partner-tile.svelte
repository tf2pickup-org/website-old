<script>
  export let partner;
  const logoUrl = partner.logoUrl;
  const link = partner.link;
</script>

<a href={link} target="_blank" class="partner-link-block w-inline-block">
  <img src={logoUrl} loading="lazy" alt="" class="partner-img" />
</a>

<style lang="scss">
  .partner-img {
    height: 50px;
    max-width: 90%;
    object-fit: contain;
  }
  .partner-link-block {
    height: 100px;
  }
  .partner-link-block {
    display: flex;
    height: 120px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: $border-color-light;
    background-color: $light-background-transparent-10
  }
</style>
