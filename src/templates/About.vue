<template>
  <Layout>
    <div class="layout">
      <div class="about">
        <div class="about-text">
          <h1>About Me</h1>
          <p v-html="$page.about.content"></p>
        </div>
        <div class="about-photo">
          <g-image :src="$page.about.profile_image" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
  about(path: "/about"){
    content
    profile_image(width: 370, height: 500, blur: 10, fit:cover )
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
};
</script>

<style lang="scss" scoped>
.about {
  &-text {
    text-align: left;
  }

  &-photo {
    margin-top: 70px;
  }
}
@media screen and (min-width: 768px) {
  .about {
    display: flex;
    flex-wrap: wrap;
    &-text {
      margin-right: 30px;
      max-width: 350px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .about-text {
    margin-right: 50px;
    max-width: 520px;
  }
}
</style>

