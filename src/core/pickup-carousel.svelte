<script>
  import { Tabs, TabList, TabPanel, Tab } from '../utils/tabs.js';
  import { pickupList } from '../utils/pickup-list.js';
  //If regions change edit here
  let activeRegions = () => {
    return {
      EU: pickupList.filter((pickup) => pickup.region === 'EU').length,
      CIS: pickupList.filter((pickup) => pickup.region === 'CIS').length,
      NA: pickupList.filter((pickup) => pickup.region === 'NA').length,
      AO: pickupList.filter((pickup) => pickup.region === 'AO').length,
    };
  };
</script>

<div id="playNow" data-scroll="mid" class="regions-wrapper">
  <div class="main-container">
    <Tabs>
      <TabList>
        {#if activeRegions().EU > 0}<Tab>Europe</Tab>{/if}
        {#if activeRegions().CIS > 0} <Tab>Cis</Tab>{/if}
        {#if activeRegions().NA > 0}<Tab>North America</Tab>{/if}
        {#if activeRegions().AO > 0}<Tab>Asia & Oceania</Tab>{/if}
      </TabList>
    </Tabs>
    <div
      data-current="Tab 1"
      data-easing="ease"
      data-duration-in="300"
      data-duration-out="100"
      class="regions-tabs w-tabs"
    >
      <div class="regions-tabs-menu w-tab-menu">
        <a data-w-tab="Tab 1" class="region-tab-link w-inline-block w-tab-link w--current">
          <div class="region-tab-p">Europe</div>
        </a>
        <a data-w-tab="Tab 2" class="region-tab-link w-inline-block w-tab-link">
          <div class="region-tab-p">Cis</div>
        </a>
        <a data-w-tab="Tab 3" class="region-tab-link w-inline-block w-tab-link">
          <div class="region-tab-p">north america</div>
        </a>
        <a data-w-tab="Tab 4" class="region-tab-link w-inline-block w-tab-link">
          <div class="region-tab-p">Asia &amp; oceania</div>
        </a>
      </div>
      <div class="regions-tabs-content w-tab-content">
        <div data-w-tab="Tab 1" class="region-tab-content w-tab-pane w--tab-active">
          <div
            data-delay="4000"
            data-animation="slide"
            class="region-slider-wrapper w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="region-slider-mask w-slider-mask">
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
            </div>
            <div
              data-w-id="35722799-5f83-b4bb-9d35-86e3a604fda6"
              class="region-slider-arrow left w-slider-arrow-left"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-left.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div
              data-w-id="35722799-5f83-b4bb-9d35-86e3a604fda8"
              class="region-slider-arrow right w-slider-arrow-right"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-right.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div class="region-slider-nav w-slider-nav w-round" />
          </div>
        </div>
        <div data-w-tab="Tab 2" class="region-tab-content w-tab-pane">
          <div
            data-delay="4000"
            data-animation="slide"
            class="region-slider-wrapper w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="region-slider-mask w-slider-mask">
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
            </div>
            <div
              data-w-id="bcb1d142-3855-a4c1-d942-9d6c1621ac25"
              class="region-slider-arrow left w-slider-arrow-left"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-left.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div
              data-w-id="bcb1d142-3855-a4c1-d942-9d6c1621ac27"
              class="region-slider-arrow right w-slider-arrow-right"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-right.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div class="region-slider-nav w-slider-nav w-round" />
          </div>
        </div>
        <div data-w-tab="Tab 3" class="region-tab-content w-tab-pane">
          <div
            data-delay="4000"
            data-animation="slide"
            class="region-slider-wrapper w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="region-slider-mask w-slider-mask">
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
            </div>
            <div
              data-w-id="d7e26ae8-d77c-2c6d-74a7-2423dc70498b"
              class="region-slider-arrow left w-slider-arrow-left"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-left.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div
              data-w-id="d7e26ae8-d77c-2c6d-74a7-2423dc70498d"
              class="region-slider-arrow right w-slider-arrow-right"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-right.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div class="region-slider-nav w-slider-nav w-round" />
          </div>
        </div>
        <div data-w-tab="Tab 4" class="region-tab-content w-tab-pane">
          <div
            data-delay="4000"
            data-animation="slide"
            class="region-slider-wrapper w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="region-slider-mask w-slider-mask">
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
              <div class="region-slide w-slide">
                <div class="region-slide-layout" />
              </div>
            </div>
            <div
              data-w-id="b3c555de-c563-a460-d825-9aeb83666ab7"
              class="region-slider-arrow left w-slider-arrow-left"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-left.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div
              data-w-id="b3c555de-c563-a460-d825-9aeb83666ab9"
              class="region-slider-arrow right w-slider-arrow-right"
            >
              <img
                style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                loading="lazy"
                src="images/arrow-right.svg"
                alt=""
                class="rsa-img"
              />
            </div>
            <div class="region-slider-nav w-ssssssssssslider-nav w-round" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .regions-tabs-menu {
    display: inline-block;
    width: 100%;
    margin-bottom: -1px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
  }
  .region-tab-link {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    opacity: 0.4;
    color: #fff;
  }
  .w-tab-link {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    padding: 9px 30px;
    text-align: left;
    cursor: pointer;
    color: #222222;
    background-color: #dddddd;
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

  .regions-wrapper {
    margin-top: 160px;
  }

  .regions-tabs-menu {
    display: inline-block;
    width: 100%;
    margin-bottom: -1px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
  }

  .region-tab-link {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    opacity: 0.4;
    color: #fff;
  }

  .region-tab-link.w--current {
    border-bottom: 1px solid #fff;
    background-color: transparent;
    opacity: 1;
  }

  .regions-tabs-content {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .region-tab-p {
    text-transform: uppercase;
  }

  .region-slider-wrapper {
    height: auto;
    background-color: transparent;
  }

  .region-slider-arrow {
    z-index: 50;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 60px;
    height: 60px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #eb1557;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .region-slider-arrow.left {
    margin-left: 15px;
  }

  .region-slider-arrow.right {
    margin-right: 15px;
  }

  .region-slider-nav {
    position: static;
    display: none;
  }

  .region-slide-layout {
    display: -ms-grid;
    display: grid;
    width: 100%;
    height: 100%;
    padding-right: 45px;
    padding-left: 45px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  .region-slide-item {
    height: 100%;
    -webkit-transition: opacity 300ms ease;
    transition: opacity 300ms ease;
    color: #fff;
    text-decoration: none;
  }

  .rsa-img {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 991px) {
    .region-slide-layout {
      padding-right: 0px;
      padding-left: 0px;
    }
  }
</style>
