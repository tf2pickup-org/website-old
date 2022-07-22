<script>
  import SubpageWrapper from '../core/subpage-wrapper.svelte';
  import { partnerList } from '../utils/partner-list.js';
  import PartnerTile from '../core/partner-tile.svelte';
  import PartnerSectionDivider from '../core/partner-section-divider.svelte';
</script>

<SubpageWrapper pageTitle="Partners">
  <p>
    Morbi vitae nulla risus. In tempus felis erat, facilisis mollis tellus fringilla mollis. Cras
    arcu ante, gravida non hendrerit id, finibus sit amet diam. Vestibulum pellentesque eu tellus
    quis hendrerit. Cras blandit vulputate justo volutpat sagittis. Nam congue vel justo ut
    volutpat. Praesent vulputate malesuada blandit. Nam a porttitor lectus, volutpat ornare mauris.
    Sed vehicula eu arcu ac ornare.
  </p>

  <PartnerSectionDivider name="Technical partners" />
  <div class="partners-grid">
    {#each partnerList as partner}
      <PartnerTile {partner} />
    {/each}
  </div>
</SubpageWrapper>

<style lang="scss">
  .partners-grid {
    display: grid;
    margin-top: 24px;
    grid-column-gap: 26px;
    grid-row-gap: 26px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  p {
    margin-bottom: 32px;
  }
  @media screen and (max-width: 766px) {
    .partners-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 479px) {
    .partners-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
