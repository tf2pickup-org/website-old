<script>
  import { getContext } from 'svelte';
  import { TABS } from './tabs.svelte';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<a
  class="region-tab-link w-inline-block w-tab-link"
  class:w--current={$selectedTab === tab}
  on:click={() => selectTab(tab)}
>
  <div class="region-tab-p">
    <slot />
  </div>
</a>

<style lang="scss">
  button {
    background: none;
    border: none;
    border-bottom: 2px solid white;
    border-radius: 0;
    margin: 0;
    color: #ccc;
  }
  .region-tab-link.w--current {
    border-bottom: 1px solid #fff;
    background-color: transparent;
    opacity: 1;
  }
  .w-tab-link {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    padding: 9px 30px;
    text-align: left;
    cursor: pointer;
  }
  .region-tab-p {
    text-transform: uppercase;
  }
</style>
