<template>
  <div class="work-card" :style="{background: randomColor}">
    <div class="work-card-details-container">
      <g-image alt="Cover Image" class="work-image" :src="work.cover_image" />
      <h4 class="work-card-title" v-html="work.title"></h4>
    </div>
    <g-link class="work-card-link" :to="work.path">Link</g-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['work', 'index'],
  computed: {
    randomColor: function() {
      let colors = [
        'linear-gradient(0deg, rgb(12, 4, 64) 0%, rgb(11, 38, 133) 43%, rgb(47, 141, 245) 100%)', // blue shade
        'linear-gradient(0deg, rgba(1,0,8,1) 0%, rgba(88,9,121,1) 43%, rgba(124,0,255,1) 100%)', // deep purple shade
        'linear-gradient(0deg, rgb(12, 6, 33) 0%, rgb(52, 18, 121) 46%, rgb(120, 59, 206) 100%)' // middle shade
      ];
      if (this.index % 3 == 0) {
        return colors[1];
      } else if (this.index % 2 == 0) {
        return colors[0];
      } else {
        return colors[2];
      }
    }
  }
};
</script>


<style lang="scss">
.work-card {
  width: 100%;
  height: 480px;
  overflow: hidden;
  margin: auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2f2f2f7c;
  }
  &-details-container {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .work-image {
      // margin-bottom: 3rem;
    }
  }

  &-title {
    margin-top: 0;
    position: absolute;
    bottom: 10%;
  }

  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 4;
    opacity: 0;
  }

  &:hover {
    .work-image {
      margin-bottom: 40px;
      transition: margin-bottom 0.3s;
    }
  }
}
.work-image {
  min-width: 100%;
  margin-bottom: 25px;
  transition: margin-bottom 0.3s;
}
@media screen and (max-width: 625px) {
  .work-card {
    width: 90%;
    height: 450px;
    margin-top: 30px;
  }
}
@media screen and (min-width: 1440px) {
  .work-card {
    height: 550px;
  }
  .work-card-title {
    font-size: 2rem;
    margin-top: 20px;
  }
}

@media screen and (min-width: 2560px) {
  .work-card {
    height: 800px;
  }
  .work-card-title {
    font-size: 2rem;
    margin-top: 20px;
  }
}
</style>
