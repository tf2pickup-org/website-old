<script>
  import SectionHeading from '../core/section-heading.svelte';
  import Button from '../core/button.svelte';
  export let sectionName;
</script>

<section class="homepage-section wf-section" id={sectionName}>
  <SectionHeading {sectionName} />
  <div class="main-container">
    <div class="about-us-wrapper">
      <p class="about-us-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum sem. Nunc
        ut venenatis purus, vitae venenatis nisl. Etiam id sem sed velit pulvinar dictum. Vivamus ac
        risus ultricies, lobortis magna sed, imperdiet massa. Fusce vitae consequat nibh. Proin sit
        amet tincidunt lacus, vel lacinia nunc. <br /><br />Donec gravida purus eget lectus pretium
        feugiat. Nulla odio mi, laoreet vel sollicitudin et, feugiat sit amet massa. Ut egestas
        porttitor dapibus. Maecenas quis lorem sed tellus varius sagittis nec venenatis nisl.
        Maecenas et nisl non magna eleifend sodales sed non purus. Praesent sed enim at justo
        aliquam feugiat. Nulla a enim lacus. In at congue dui.
      </p>
    </div>
    <Button destination="#/PlayNow" text="Read More" />
  </div>
  <div class="section-background-wrapper">
    <div class="section-gradient-overlay" />
    <img
      src="images/main-bg-img.jpg"
      loading="lazy"
      sizes="100vw"
      srcset="images/main-bg-img-p-500.jpeg 500w, images/main-bg-img-p-800.jpeg 800w, images/main-bg-img-p-1600.jpeg 1600w, images/main-bg-img.jpg 1920w"
      alt=""
      class="section-bg"
    />
  </div>
</section>

<style lang="scss">
  .homepage-section {
    position: relative;
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .about-us-wrapper {
    max-width: 650px;
    margin-top: 160px;
  }

  .about-us-p {
    margin-bottom: 30px;
  }

  .section-background-wrapper {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 10;
  }

  .section-gradient-overlay {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 50;
    background-image: linear-gradient(180deg, #0a1a33 5%, transparent 30%),
      linear-gradient(180deg, transparent 70%, #0a1a33 95%),
      linear-gradient(90deg, #0a1a33 50%, transparent 75%);
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

  .section-bg {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
