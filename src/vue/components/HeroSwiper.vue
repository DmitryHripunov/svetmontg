<template>
  <div class="swiper-container hero__container js-hero-swiper"
    v-if="mainBanners"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide hero__slide"
        v-for="(slide, index) in mainBanners" :key='index'
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

            <a href="#" class="btn btn_brand">
              Каталог продукции

              <svg class="icon btn__icon icon_color_darkest icon_size_m">
                <use xlink:href="#link-arrow"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- <div
        class="swiper-slide hero__slide"
        :style="{
          background: `linear-gradient(
                  99.37deg,
                  rgba(0, 0, 0, 0.57) 0%,
                  rgba(0, 0, 0, 0.31) 100%
                ),
                url(https://cdn.dribbble.com/users/535615/screenshots/15486806/media/629c6eb52be65239b4a6fcba006081bb.png)
                  center/cover`,
        }"
      >
        <div class="hero__wrapper">
          <div class="hero__content">
            <div class="title title_white title_main hero__title">
              Подчёркиваем
              <span class="title__colored">уникальность</span>
            </div>

            <a href="#" class="btn btn_brand">
              Каталог продукции

              <svg class="icon btn__icon icon_color_darkest icon_size_m">
                <use xlink:href="#link-arrow"></use>
              </svg>
            </a>
          </div>
        </div>
      </div> -->
    </div>

    <!-- <div class="swiper-button">
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
    </div> -->

    <div class="pagination">
      <div class="swiper-pagination hero__pagination"></div>
    </div>
  </div>
</template>

<script>
import mainBanners from "../../assets/data/dataMainBanners.js";

export default {
  data() {
    return {
      mainBanners,
    };
  },

  computed: {
    banners() {
      return this.mainBanners;
    },
  },
};
</script>