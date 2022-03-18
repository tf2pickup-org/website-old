<script>
  import Button from './button.svelte';
</script>

<section class="home-hero-section">
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1 class="main-h1">tf2pickup.org</h1>
      <p class="hero-p">The easiest way to play Team Fortress 2 competitive pick-up games<br /></p>
      <div class="npb-hero">
        <Button destination="/play-now" text="Play Now" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .home-hero-section {
    display: flex;
    min-height: calc(100vh - 92px);
    flex-direction: column;
  }
  .hero-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-image: url('../images/main-bg-img.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-content {
    width: 888px;
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(10, 26, 51, 0.75);
    text-align: center;
  }

  .main-h1 {
    font-size: 42px;
    line-height: 54px;
  }

  .hero-p {
    margin-top: 30px;
    margin-bottom: 30px;
    color: hsla(0, 0%, 100%, 0.8);
  }

  .npb-hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
