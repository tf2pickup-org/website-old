<script>
  import Button from './button.svelte';
  let innerWidth;
</script>

<svelte:window bind:innerWidth />
<header class="header">
  <a href="/" aria-current="page" class="logo">
    <img
      src="../images/tf2pickup-pl-logo.png"
      loading="lazy"
      alt="tf2pickup.org logo"
      class="navbar-logo-img"
    />
  </a>
  <!-- Hamburger icon -->
  <input class="side-menu" type="checkbox" id="side-menu" />
  <label class="mobile-menu-trigger" for="side-menu"><span class="icon-line" /></label>

  <nav class="navigation">
    <ul class="menu">
      <li class="menu-item"><a href="/#Regions" class="menu-item-link">Regions</a></li>
      <li class="menu-item"><a href="/about-us" class="menu-item-link">About</a></li>
      <li class="menu-item"><a href="/updates" class="menu-item-link">Updates</a></li>
      <li class="menu-item"><a href="/partners" class="menu-item-link">Partners</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    background: #0a1a33;
    z-index: 399;
  }
  /* Logo */
  .logo {
    display: inline-block;
    font-size: 60px;
    margin-left: 15px;
    padding-top: 20px;
  }
  /* Nav menu */
  .navigation {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
  }
  .menu {
    background: #0a1a33;
    padding-top: 20px;
  }
  .menu a {
    display: block;
    padding: 30px;
    color: #fff;
  }
  .menu a:hover {
  }
  .navigation {
    max-height: 0;
    transition: max-height 0.5s ease-out;
  }
  /* Menu Icon */
  .mobile-menu-trigger {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
  } /* Style label tag */

  .icon-line {
    background: #fff;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  } /* Style span tag */

  .icon-line::before,
  .icon-line::after {
    background: #fff;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .icon-line::before {
    top: 5px;
  }
  .icon-line::after {
    top: -5px;
  }

  .side-menu {
    display: none;
  } /* Hide checkbox */
  /* Toggle menu icon */
  .side-menu:checked ~ nav {
    max-height: 100%;
  }
  .side-menu:checked ~ .mobile-menu-trigger .icon-line {
    background: transparent;
  }
  .side-menu:checked ~ .mobile-menu-trigger .icon-line::before {
    transform: rotate(-45deg);
    top: 0;
  }
  .side-menu:checked ~ .mobile-menu-trigger .icon-line::after {
    transform: rotate(45deg);
    top: 0;
  }
  /* Responsiveness */
  @media (min-width: 768px) {
    .navigation {
      max-height: none;
      top: 0;
      position: relative;
      float: right;
      width: fit-content;
    }
    .menu li {
      float: left;
    }
    .menu a:hover {
      background-color: transparent;
    }
    .mobile-menu-trigger {
      display: none;
    }
  }
</style>
