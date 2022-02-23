<script>
  import NavigationBar from '../core/navigation-bar.svelte';
  import ContentSectionWithHeading from '../core/content-section-with-heading.svelte';
  import Hero from '../core/hero.svelte';
</script>

<section class="home-hero-section">
  <NavigationBar />
  <Hero />
</section>
<ContentSectionWithHeading sectionName="Regions" />

<style lang="scss">
  .home-hero-section {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
