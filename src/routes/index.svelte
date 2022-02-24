<script>
  import NavigationBar from '../core/navigation-bar.svelte';
  import ContentSectionWithHeading from '../core/content-section-with-heading.svelte';
  import PickupService from '../core/pickup-service.svelte';
  import Hero from '../core/hero.svelte';
  import { pickupList } from '../utils/pickup-list.js';
</script>

<Hero />
<ContentSectionWithHeading sectionName="Regions" />
{#each pickupList as pickup}
  <PickupService pickupInfo={pickup} />
{/each}
<ContentSectionWithHeading sectionName="About Us" />
<ContentSectionWithHeading sectionName="Updates" />
