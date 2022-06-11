<script>
  export let link;
  export let name;
</script>

<a href={link} target="_blank" class="social-link w-inline-block">{ name }</a>


<style lang="scss">
  .social-link {
    color: #0a1a33;
    margin-right: 8px;
    &:hover {
      color: #eb1557;
    }
    &:visited {
      color: #0a1a33;
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
