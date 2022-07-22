<script>
  import SocialMediaLink from './social-media-link.svelte';

  export let member;
  const name = member.name;
  const socialMediaArray = member.socialMediaLinks;
  const avatarUrl = member.avatarUrl;
</script>

<div class="meet-the-team-item">
  <img src={avatarUrl} loading="lazy" alt="" class="meet-the-team-item-img" />
  <div class="meet-the-team-item-text">
    <p class="meet-the-team-item-p">{name}</p>
    <div class="meet-the-team-item-socials-wrapper">
      {#each socialMediaArray as social}
        <SocialMediaLink name={social.name} link={social.link} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .meet-the-team-item {
    border-radius: 4px;
    background-color: $light-background;
  }
  .meet-the-team-item-img {
    width: 100%;
    height: 300px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .meet-the-team-item-text {
    padding: 20px;
  }
  .meet-the-team-item-p {
    color: $dark-text;
    font-weight: 600;
    text-align: center;
  }
  .meet-the-team-item-socials-wrapper {
    margin-top: 20px;
    text-align: center;
  }
</style>
