<script>
  import Hero from '../core/homepage/hero.svelte';
  import PickupTabbedCarousel from '../core/homepage/pickup-tabbed-carousel.svelte';
  import AboutHomepageSection from '../core/homepage/about-homepage-section.svelte';
  import RegionHomepageSection from '../core/homepage/regions-homepage-section.svelte';
  import UpdatesHomepageSection from '../core/homepage/updates-homepage-section.svelte';
</script>

<Hero />
<RegionHomepageSection sectionName="Regions" />
<PickupTabbedCarousel />
<AboutHomepageSection sectionName="About Us" />
<UpdatesHomepageSection sectionName="Updates" />
