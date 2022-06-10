<script>
  import TeamMember from '../core/team-member.svelte';
  export let member;
  let name = member.name;
  let socialMediaArray = member.socialMediaLinks;
  let avatarUrl = member.avatarUrl;
</script>

<TeamMember {name} {socialMediaArray} {avatarUrl} />
