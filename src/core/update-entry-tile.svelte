<script>
  export let post;
</script>

<div>
  <p class="update-date">{post.metadata.date} - {post.metadata.version}</p>
  <h2 class="update-title">{post.metadata.title}</h2>
  <p class="update-content">{post.metadata.excerpt}</p>
  <a class="update-read-more-btn" href="/updates/{post.metadata.slug}">Read more</a>
  <div class="update-lines">
    <div class="update-line-first" />
    <div class="update-line-second" />
  </div>
</div>

<style lang="scss">
  .update-lines {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 80px;
  }
  .update-line-first {
    width: 75%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.5);
  }

  .update-line-second {
    height: 1px;
    margin-left: 30px;
    flex: 1;
    background-color: hsla(0, 0%, 100%, 0.5);
  }
  .update-date {
    color: hsla(0, 0%, 100%, 0.8);
  }
  .updates-year {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
  }
</style>
