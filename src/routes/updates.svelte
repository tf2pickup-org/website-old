<!---
<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/updates/posts.json`);
    const { posts } = await res.json();
    return {
      props: { posts },
    };
  }
</script>
---->
<script>
  import PageHero from '../core/page-hero.svelte';

  import globToArray from '../utils/globToArray.js';

  const modules = import.meta.globEager('../routes/updates/*.md');
  console.log(modules);
  const posts = globToArray(modules);
</script>

<svelte:head>
  <title>Updates | tf2pickup.org</title>
</svelte:head>

<PageHero pageTitle="Updates" />
{#each posts as post}
  <div>
    {post.metadata.title}
    <a href="/updates/{post.metadata.slug}">Read more</a>
  </div>
{/each}
