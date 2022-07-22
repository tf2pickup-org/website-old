<section class="footer wf-section">
  <div class="footer-left">
    <a href="index.html" aria-current="page" class="navbar-logo footer-nav w-nav-brand w--current"
      ><img
        src="../images/tf2pickup-pl-logo.png"
        loading="lazy"
        alt="Tf2pickup logo - Poland"
        class="navbar-logo-img"
      /></a
    >
    <div class="navbar-divider" />
    <a href="/#regions" class="navbar-link">Regions</a>
    <a href="/about-us" class="navbar-link">About us</a>
    <a href="/updates" class="navbar-link">Updates</a>
    <a href="/partners" class="navbar-link">Partners</a>
    <div class="disabled-link-wrapper">
      <a href="#" class="navbar-link disabled-link">How To Play</a>
      <div class="tool-tip">
        <div class="tool-tip-top" />
        <p class="tool-tip-p">coming soon</p>
      </div>
    </div>
  </div>
  <div class="footer-right">
    <p class="footer-p">tf2pickup.org | <span id="year" class="footer-year">2022</span></p>
    <a href="#" class="navbar-link">Privacy Policy</a>
  </div>
</section>

<style lang="scss">
  .footer {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-left {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .footer-right {
    display: flex;
  }

  .footer-p {
    padding: 15px;
    color: $main-text-color;
    text-decoration: none;
  }

  .navbar-link {
    padding: 15px;
    transition: color 200ms ease;
    color: $main-text-color;
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
      color: $link-hovered;
    }
  }

  .navbar-link.disabled-link {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navbar-divider {
    display: none;
  }

  .disabled-link-wrapper {
    position: relative;
    z-index: 10;
    display: inline-block;
  }

  .navbar-link.disabled-link {
    opacity: 0.5;
    cursor: not-allowed;
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
    background-color: $main-accent-color;
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
    background-color: $main-accent-color;
    transform: rotate(45deg);
  }

  .tool-tip-p {
    margin-top: -4px;
    line-height: 1;
    text-align: center;
  }
  @media screen and (max-width: $desktop-breakpoint) {
    .footer {
      flex-direction: column;
    }

    .footer-right {
      margin-top: 20px;
    }

    .footer-p {
      padding-right: 20px;
      padding-left: 20px;
    }
  }
  @media screen and (max-width: $tablet-breakpoint) {
    .footer-left {
      width: 100%;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: $mobile-breakpoint) {
    .footer-left {
      flex-direction: column;
      align-items: flex-start;
    }
    .footer-right {
      flex-direction: column;
    }
  }
</style>
