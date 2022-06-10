<script>
  import SubpageWrapper from '../core/subpage-wrapper.svelte';
  import MeetTheTeam from '../core/meet-the-team.svelte';
  import { teamMemberList } from '../utils/team-member-list.js';

  console.log(teamMemberList);
</script>

<SubpageWrapper pageTitle="About">
  <p>content</p>
  <h2 class="subpage-h2">MEET THE TEAM</h2>
  {#each teamMemberList as member}
    <MeetTheTeam {member} />
  {/each}
</SubpageWrapper>

<style>
  .subpage-h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Staatliches, sans-serif;
    font-size: 45px;
    line-height: 1;
    text-align: center;
  }
</style>
