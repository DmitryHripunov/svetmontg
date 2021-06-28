<template>
  <div>
    <div class="hero__preloader" v-if="productsLoading"></div>

    <swiper ref="heroSwiper" 
      :options="swiperOptions" 
      v-if="!productsLoading"
    >
      <swiper-slide
        class="swiper-slide hero__slide"
        v-for="(slide, index) in products"
        :key="index"
        :style="{
          background: `linear-gradient(
                    99.37deg,
                    rgba(0, 0, 0, 0.57) 0%,
                    rgba(0, 0, 0, 0.31) 100%
                  ),
                  url('${slide.image}')
                    center/cover`,
        }"
      >
        <div class="hero__wrapper">
          <div class="hero__content">
            <div class="title title_white title_main hero__title">
              {{ slide.titleBefore }}
              <span class="title__colored">{{ slide.titleColored }}</span>
              {{ slide.titleAfter }}
            </div>

            <router-link
              :to="{ name: 'catalog' }"
              class="btn btn_brand btn_large"
            >
              Каталог продукции

              <svg class="icon btn__icon icon_color_darkest icon_size_m">
                <use xlink:href="#link-arrow"></use>
              </svg>
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-button">
      <div class="swiper-button-prev">
        <svg class="icon icon_color_gradient icon_size_xl">
          <use xlink:href="#arrow"></use>
        </svg>
      </div>

      <div class="swiper-button-next">
        <svg class="icon icon_color_gradient icon_size_xl">
          <use xlink:href="#arrow"></use>
        </svg>
      </div>
    </div>
    
    <div class="pagination swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

const heroBanners = [
  {
    image: '/img/main_banner.jpg',
    titleBefore: 'Подчёркиваем',
    titleColored: 'уникальность',
    titleAfter: 'зданий днём и ночью',
  },
  {
    image: '/img/main_banner_2.webp',
    titleBefore: 'Подчёркиваем',
    titleColored: 'уникальность',
    titleAfter: 'ночью',
  },

  {
    image: '/img/main_banner.jpg',
    titleBefore: 'Text',
    titleColored: 'home',
  },
]

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  data() {
    return {
      products: null,
      productsLoading: false,
      swiperOptions: {
        lazy: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  computed: {
    swiper() {
      return this.$refs.heroSwiper.$swiper;
    },
    getProducts() {
      return this.products = heroBanners;
    }
  },

  // methods: {
  //   getPageData() {
  //     this.productsLoading = true;
  //     clearTimeout(this.loadProductTimer);
  //     this.loadProductTimer = setTimeout(() => {
  //       axios
  //         .get("https://gorest.co.in/public-api/products")
  //         .then((response) => {
  //           this.products = response.data.data;
  //         })
  //         .then(() => {
  //           this.productsLoading = false;
  //         });
  //     }, this.loadProductTimer);
  //   },
  // },

  // created() {
  //   this.getPageData();
  // },
};
</script>