<script>
  import Hero from '../core/hero.svelte';
  import PickupTabbedCarousel from '../core/pickup-tabbed-carousel.svelte';
  import AboutHomepageSection from '../core/about-homepage-section.svelte';
  import RegionHomepageSection from '../core/regions-homepage-section.svelte';
  import UpdatesHomepageSection from '../core/updates-homepage-section.svelte';
</script>

<Hero />
<RegionHomepageSection sectionName="Regions" />
<PickupTabbedCarousel />
<AboutHomepageSection sectionName="About Us" />
<UpdatesHomepageSection sectionName="Updates" />
