<script>
  import Button from './button.svelte';
</script>

<div role="banner" class="navbar-wrapper">
  <div class="navbar-container">
    <div class="navbar-items">
      <a href="index.html" aria-current="page" class="navbar-logo w-nav-brand w--current">
        <img
          src="images/tf2pickup-pl-logo.png"
          loading="lazy"
          alt="tf2pickup.org logo"
          class="navbar-logo-img"
        />
      </a>
      <div class="navbar-divider" />
      <nav role="navigation" class="navbar-menu w-nav-menu">
        <div class="navbar-links-wrapper">
          <a href="/#regions" class="navbar-link">Regions</a>
          <a href="about-us.html" class="navbar-link">about us</a>
          <a href="updates.html" class="navbar-link">updates</a>
          <a href="partners.html" class="navbar-link">partners</a>
          <div class="disabled-link-wrapper">
            <a href="#" class="navbar-link disabled-link">how to play</a>
            <div class="tool-tip">
              <div class="tool-tip-top" />
              <p class="tool-tip-p">coming soon</p>
            </div>
          </div>
        </div>
        <div class="navbar-buttons">
          <a href="/#regions" class="navbar-regions-btn inline-block">
            <img
              src="images/regions-img.png"
              loading="lazy"
              alt="Regions icon"
              class="navbar-regions-btn-img"
            /></a>
          <Button destination="#/PlayNow" text="Play Now" />
          <div class="navbar-divider nd-left" />
          <div class="navbar-players-total">
            <p class="navbar-players-total-large">420</p>
            <p class="navbar-players-total-small">players<br />online</p>
          </div>
        </div>
      </nav>
    </div>
    <div class="navbar-mobile-btn w-nav-button">
      <div class="navbar-mobile-btn-icon w-icon-nav-menu" />
    </div>
  </div>
</div>

<style lang="scss">
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
    color: #333333;
  }

  .navbar-divider {
    width: 1px;
    height: 100%;
    min-height: 50px;
    margin-right: 15px;
    margin-left: 30px;
    background-color: hsla(0, 0%, 100%, 0.5);
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
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: hsla(0, 0%, 100%, 0.7);
    }

    &.current {
      color: #ffe497;
    }

    &.disabled-link {
      opacity: 0.5;
      cursor: not-allowed;
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

  .navbar-players-total {
    display: flex;
    align-items: center;
  }

  .navbar-players-total-large {
    font-size: 40px;
    line-height: 1.1;
  }

  .navbar-players-total-small {
    margin-left: 5px;
    color: hsla(0, 0%, 100%, 0.8);
    text-transform: uppercase;
  }

  .disabled-link-wrapper {
    position: relative;
    z-index: 10;
    display: inline-block;
  }

  .tool-tip {
    position: absolute;
    z-index: 5;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: #eb1557;
    display: none;
  }

  .tool-tip-top {
    position: absolute;
    left: 50%;
    top: -4px;
    right: auto;
    bottom: auto;
    width: 8px;
    height: 8px;
    margin-right: auto;
    margin-left: auto;
    background-color: #eb1557;
    transform: rotate(45deg);
  }

  .tool-tip-p {
    margin-top: -4px;
    line-height: 1;
    text-align: center;
  }
</style>
