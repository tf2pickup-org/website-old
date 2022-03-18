<script>
  import NavigationBar from '../core/navigation-bar.svelte';
  import PickupService from '../core/pickup-service.svelte';
  import Hero from '../core/hero.svelte';
  import { pickupList } from '../utils/pickup-list.js';
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
