<script>
  export let sectionName;
</script>

<section class="section-title-wrapper">
  <div class="section-title-lines">
    <div class="first-line" />
    <div class="second-line" />
    <div class="third-line" />
    <div class="fourh-line" />
  </div>
  <div class="main-container">
    <div class="section-headings">
      <h2 class="section-title-h2-secondary">{sectionName}</h2>
      <h2 class="section-title-h2">{sectionName}</h2>
    </div>
  </div>
</section>

<style lang="scss">
  .section-title-wrapper {
    position: relative;
    z-index: 100;
    padding-top: 32px;
  }
  .main-container {
    position: relative;
    z-index: 100;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
  }
  .section-title-lines {
    display: flex;
    margin-top: 230px;
  }
  .section-title-h2 {
    position: absolute;
    left: -13.8px;
    top: 71px;
    z-index: 10;
    display: inline-block;
    width: 120%;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #eb1557;
    font-size: clamp(4rem, 50.7vw - 19.2rem, 12.5rem);
    line-height: 1;
    text-transform: uppercase;
  }
  .section-title-h2-secondary {
    position: absolute;
    left: -6px;
    top: -32px;
    font-size: 240px;
    line-height: 1;
    text-transform: uppercase;
    font-family: 'Staatliches';
    letter-spacing: 32px;
    color: #0a1a33;
    text-shadow: 0.5px 0.5px 0 #3a6092, -0.5px -0.5px 0 #3a6092, 0.5px -0.5px 0 #3a6092,
      -0.5px 0.5px 0 #3a6092, 0.5px 0.5px 0 #3a6092;
  }
  .section-headings {
    position: absolute;
    top: -210px;
    z-index: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .first-line {
    height: 2px;
    min-width: 110px;
    margin-right: 5px;
    background-color: #eb1557;
  }

  .second-line {
    height: 2px;
    min-width: 11px;
    margin-right: 5px;
    background-color: #eb1557;
  }

  .third-line {
    height: 2px;
    flex: 1;
    background-color: #eb1557;
  }

  .fourh-line {
    width: 11px;
    margin-left: 5px;
    background-color: #eb1557;
  }
  @media screen and (max-width: 991px) {
    .section-title-h2-secondary {
      display: none;
    }
    .section-title-h2 {
      position: static;
      background-color: #0a1a33;
      width: fit-content;
    }
    .section-headings {
      top: -53px;
    }
    .section-title-lines {
      margin-top: 0px;
    }
  }
</style>
