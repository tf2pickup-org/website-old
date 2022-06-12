<script>
  import SubpageWrapper from '../core/subpage-wrapper.svelte';
  import TeamMember from '../core/team-member.svelte';
  import { teamMemberList } from '../utils/team-member-list.js';
</script>

<SubpageWrapper pageTitle="About">
  <p>content</p>
  <h2 class="subpage-h2">MEET THE TEAM</h2>
  <div class="meet-the-team-grid">
    {#each teamMemberList as member}
      <TeamMember {member} />
    {/each}
  </div>
</SubpageWrapper>

<style lang="scss">
  .subpage-h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Staatliches, sans-serif;
    font-size: 45px;
    line-height: 1;
    text-align: center;
  }

  .meet-the-team-grid {
    display: grid;
    margin-top: 24px;
    grid-column-gap: 26px;
    grid-row-gap: 26px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
</style>
