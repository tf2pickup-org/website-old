<script>
  import Button from './button.svelte';
  import OnlinePlayers from './online-players.svelte';
  import { onMount } from 'svelte';
  let innerWidth;
  const breakPoint = 1000;
  const breakPointDesktop = 1260;
  let showMobileMenu = false;
  let layoutIsMobile = false;

  const handleMobileMenuTriggerClick = () => {
    showMobileMenu = !showMobileMenu;
  };
  const handleMobileLayoutChange = () => {
    layoutIsMobile = innerWidth < breakPoint;
  };

  const navItems = [
    { label: 'Regions', href: '/#Regions' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Updates', href: '/updates' },
    { label: 'Partners', href: '/partners' },
    { label: 'How to Play', href: '#' },
  ];

</script>

<svelte:window bind:innerWidth on:resize={handleMobileLayoutChange} />
<svelte:head>
  {#if showMobileMenu}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>
<div role="banner" class="navbar-wrapper">
  <div class="navbar-container">
    <div class="navbar-items">
      <div class={`brand-nav-wrapper ${layoutIsMobile ? ' mobile' : ''}`}>
        <a href="/" aria-current="page" class="navbar-logo w-nav-brand w--current">
          <img
            src="../images/tf2pickup-pl-logo.png"
            loading="lazy"
            alt="tf2pickup.org logo"
            class="navbar-logo-img"
          />
        </a>
        <div class={`navbar-divider nd-left ${layoutIsMobile ? ' disable' : ''}`} />
        <nav class="navbar-menu w-nav-menu">
          <div class="inner">
            <div
              on:click={handleMobileMenuTriggerClick}
              class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
            >
              <div class="middle-line" />
            </div>
            <ul class={`navbar-links-wrapper navbar-list${showMobileMenu ? ' mobile' : ''}`}>
              {#each navItems as item}
                <li on:click={handleMobileMenuTriggerClick}>
                  <a href={item.href} class="navbar-link">{item.label} </a>
                </li>
              {/each}
            </ul>
          </div>
        </nav>
      </div>
      {#if innerWidth > 1000}
        <div class="navbar-buttons">
          <a href="/#regions" class="navbar-regions-btn inline-block">
            <img
              src="../images/regions-img.png"
              loading="lazy"
              alt="Regions icon"
              class="navbar-regions-btn-img"
            /></a
          >
          <Button destination="#/PlayNow" text="Play Now" />
          {#if innerWidth > 1260}
            <div class="navbar-divider nd-left" />
            <OnlinePlayers />
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .brand-nav-wrapper {
    display: flex;
  }
  .disable {
    display: none;
  }
  .brand-nav-wrapper.mobile {
    justify-content: space-between;
  }
  .navbar-mobile-btn {
    padding: 15px;
  }
  .w-icon-nav-menu:before {
    content: '\e602';
  }
  .navbar-mobile-btn.w--open {
    background-color: $main-background;
  }
  .navbar-wrapper {
    padding: 20px;
    background-color: transparent;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
  }

  .navbar-items {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-logo.w--current {
    padding-left: 0px;
    flex: 0 0 auto;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .w-nav-brand {
    position: relative;
    float: left;
    text-decoration: none;
  }

  .navbar-divider {
    width: 1px;
    height: 100%;
    min-height: 50px;
    margin-right: 15px;
    margin-left: 30px;
    background-color: $light-background-transparent-50;
  }

  .navbar-menu {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .w-nav-menu {
    position: relative;
    float: right;
  }

  .navbar-link {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    padding: 20px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;

    transition: color 200ms ease;
    color: $main-text-color;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: $link-hovered;
    }
  }

  .navbar-buttons {
    display: flex;
    align-items: center;
  }

  .navbar-regions-btn {
    margin-right: 15px;
    flex: 0 0 auto;
    transition: opacity 200ms ease;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  .navbar-regions-btn-img {
    width: 40px;
    height: 40px;
  }

  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $light-background;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: $main-background;
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    top: 90px;
    left: 0;
    z-index: 99;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }
  .navbar-list a {
    color: $main-text-color;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
  }
  @media only screen and (min-width: $tablet-breakpoint) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>
