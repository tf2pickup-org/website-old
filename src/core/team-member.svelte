<script>
  import SocialMediaIcon from '../core/social-media-icon.svelte';

  export let name;
  export let socialMediaArray;
  export let avatarUrl;
</script>

<div class="meet-the-team-item">
  <img
    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
    loading="lazy"
    alt=""
    class="meet-the-team-item-img"
  />
  <div class="meeth-the-team-item-text">
    <p class="meet-the-team-item-p">{name}</p>
    <div class="meet-the-team-item-socials-wrapper">
      {#each socialMediaArray as social}
        <SocialMediaIcon name={social.name} link={social.link} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .meet-the-team-item {
    border-radius: 4px;
    background-color: #fff;
  }
  .meet-the-team-item-img {
    width: 100%;
    height: 300px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .meeth-the-team-item-text {
    padding: 20px;
  }
  .meet-the-team-item-p {
    color: #0a1a33;
    font-weight: 600;
    text-align: center;
  }
  .meet-the-team-item-socials-wrapper {
    margin-top: 20px;
    text-align: center;
  }
  .meet-the-team-item-social {
    width: 26px;
    height: 26px;
    margin-right: 6px;
    margin-left: 6px;
    border-radius: 4px;
    background-color: #0a1a33;
  }
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
</style>
