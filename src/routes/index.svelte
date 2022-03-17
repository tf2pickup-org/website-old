<script>
  import NavigationBar from '../core/navigation-bar.svelte';
  import ContentSectionWithHeading from '../core/content-section-with-heading.svelte';
  import PickupService from '../core/pickup-service.svelte';
  import Hero from '../core/hero.svelte';
  import { pickupList } from '../utils/pickup-list.js';
  import PickupTabbedCarousel from '../core/pickup-tabbed-carousel.svelte';
</script>

<Hero />
<ContentSectionWithHeading sectionName="Regions" />
<PickupTabbedCarousel />
<ContentSectionWithHeading sectionName="About Us" />
<ContentSectionWithHeading sectionName="Updates" />
