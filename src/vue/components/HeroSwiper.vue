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
              {{ slide.name }}
              <span class="title__colored">{{ slide.price }}</span>
              {{ slide.id }}
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
import axios from "axios";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

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
  },

  methods: {
    getPageData() {
      this.productsLoading = true;
      clearTimeout(this.loadProductTimer);
      this.loadProductTimer = setTimeout(() => {
        axios
          .get("https://gorest.co.in/public-api/products")
          .then((response) => {
            this.products = response.data.data;
          })
          .then(() => {
            this.productsLoading = false;
          });
      }, this.loadProductTimer);
    },
  },

  created() {
    this.getPageData();
  },
};
</script>