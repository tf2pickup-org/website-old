<script>
   export let sectionName;
</script>

<section class="section-title-wrapper">
    <div class="section-title-lines">
        <div class="first-line"></div>
        <div class="second-line"></div>
        <div class="third-line"></div>
        <div class="fourh-line"></div>
    </div>
    <div class="main-container">
        <div class="section-headings">
            <h2 class="section-title-h2-secondary">{ sectionName }</h2>
            <h2 class="section-title-h2">{ sectionName }</h2>
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
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
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
        font-size: 200px;
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
      font-family: "Staatliches-Regular";
      letter-spacing: 32px;
      color: #0a1a33;
      text-shadow: .5px .5px 0 #3a6092, -.5px -.5px 0 #3a6092, .5px -.5px 0 #3a6092,
      -.5px .5px 0 #3a6092, .5px .5px 0 #3a6092;
    }
      .section-headings {
        position: absolute;
        top: -210px;
        z-index: 5;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
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
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: #eb1557;
    }

    .fourh-line {
        width: 11px;
        margin-left: 5px;
        background-color: #eb1557;
    }
</style>