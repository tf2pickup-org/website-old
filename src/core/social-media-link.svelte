<script>
  export let link;
  export let name;
</script>

<a href={link} target="_blank" class="social-link w-inline-block">{name}</a>

<style lang="scss">
  .social-link {
    color: $dark-text;
    margin-right: 8px;
    &:hover {
      color: $main-accent-color;
    }
    &:visited {
      color: $main-accent-color;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
</style>
