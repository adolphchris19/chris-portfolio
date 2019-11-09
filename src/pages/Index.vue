<template>
  <Layout>
    <carousel
      :per-page="1"
      :loop="true"
      :navigationEnabled="true"
      :navigationNextLabel="nextIcon"
      :navigationPrevLabel="previousIcon"
      :scrollPerPage="true"
      paginationPosition="bottom"
      paginationColor="#31363d"
      paginationActiveColor="#4ecca3"
      :perPageCustom="[[768,2], [1024, 3]]"
      :speed="800"
    >
      <slide v-for="edge in $page.portfolio.edges" :key="edge.node.id">
        <WorkCard :work="edge.node" />
      </slide>
    </carousel>
  </Layout>
</template>

<page-query>
query{
  portfolio: allPortfolio( filter: {published: {eq: true}}, sortBy: "date"){
    edges{
      node{
        id
        title
        path
        cover_image(width: 700, height: 400, blur: 7, fit:cover )
        date(format: "D. MMMM YYYY")
        tags{
          id
          title
          path
        }
      }
    }
  }
}

</page-query>

<script>
import WorkCard from '~/components/WorkCard.vue';
import { Carousel, Slide } from 'vue-carousel';
export default {
  data() {
    return {};
  },
  computed: {
    previousIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 24 24"
style=" fill:var(--bg-header);">    <path d="M13.893,21L13.893,21c1.329,0,2.122-1.481,1.385-2.587L11.003,12l4.275-6.413C16.015,4.481,15.222,3,13.893,3h0 c-0.556,0-1.076,0.278-1.385,0.741l-4.766,7.15c-0.448,0.672-0.448,1.547,0,2.219l4.766,7.15C12.817,20.722,13.337,21,13.893,21z"></path></svg>`;
    },
    nextIcon() {
      return `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 24 24"
style=" fill:var(--bg-header);">    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path></svg>`;
    }
  },
  components: {
    WorkCard,
    Carousel,
    Slide
  },
  metaInfo: {
    title: 'Work'
  }
};
</script>

<style lang="scss">
.VueCarousel-navigation /deep/ button.VueCarousel-navigation-button {
  &:focus {
    outline: none;
  }
}

@media screen and (max-width: 768px) {
  .VueCarousel-navigation /deep/ button.VueCarousel-navigation-button {
    &.VueCarousel-navigation-next {
      right: 20px;
    }
    &.VueCarousel-navigation-prev {
      left: 20px;
    }
  }
}
</style>
