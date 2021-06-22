<template>
  <section class="container mx-auto">
    <div class="py-6">
      <Swiper class="swiper" :options="swiperOption" :loop="true" navigation :pagination="{ clickable: true }" :autoplay="{delay: 3000, disableOnInteraction: true,}">
        <Swiper-slide v-for="item in imgUrl" key="item.id">
          <img class="transform -translate-y-20" :src="item.url" alt="" />
        </Swiper-slide>
      </Swiper>
    </div>

    <div class="container mx-auto md:flex px-6">
      <div class="flex justify-center md:px-12">
        <div>
          <div>
            <h2 class="text-2xl font-black tracking-wide">關於冬森</h2>
          </div>
          <div class="py-6">
            <div style="max-width: 500px">
              <span class="font-weight-400 mr-2">冬</span>
              <span class="tracking-wide font-weight-300">天的光影豐富漸變的軌跡，構築清新脫俗的生活場景，為家中的每一份子，規劃出獨一無二的夢想住所。 </span>
            </div>
            <div style="max-width: 500px">
              <span class="font-weight-400 mr-3">森</span>
              <span class="tracking-wide font-weight-300">林的靜謐、空靈，賦予空間一抹安定的力量，符合人性與溫潤舒適的環境。</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center md:px-12">
        <div>
          <div>
            <h2 class="text-2xl font-black tracking-wide">公司簡介</h2>
          </div>
          <div class="py-6">
            <div class="pb-6" style="max-width: 500px">
              <span class="tracking-wide font-weight-300"
                >我們是由一群具有熱忱的年輕團隊組成， 聆聽業主的想法與意見，注重與客人間的互動，對於我們來說是一種『態度』也是一種『責任』
              </span>
            </div>
            <div class="pb-6" style="max-width: 500px">
              <span class="tracking-wide font-weight-300"
                >每個空間都乘載著屬於他自己的故事，我們能提供良好的設計規劃，跳脫傳統框限的思維，發揮無限創意，使設計更貼近生活所需，共同創造生活的想像與藍圖。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'swiper-example-navigation',
  title: 'Navigation',
  data() {
    return {
      swiperOption: {
        navigation: {},
      },
      imgUrl: [
        {
          id: 1,
          url: '../../public/img/workplace-1.png',
        },
        {
          id: 2,
          url: '../../public/img/workplace-2.png',
        },
        {
          id: 3,
          url: '../../public/img/workplace-3.png',
        },
        {
          id: 4,
          url: '../../public/img/workplace-4.png',
        },
        {
          id: 5,
          url: '../../public/img/workplace-5.png',
        },
        {
          id: 6,
          url: '../../public/img/workplace-6.png',
        },
        {
          id: 7,
          url: '../../public/img/workplace-7.png',
        },
        {
          id: 8,
          url: '../../public/img/workplace-8.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.swiper-pagination {
  bottom: 20%;
}

.swiper-container{
.swiper-button-prev {
  color: gray ;
}
.swiper-button-next {
  right: 40px ;
  color: gray ;
}
}
.swiper-container {
  max-height: 740px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev {
  transform: translate(20px, 0);
  background-color: gray;
}
.carousel__next {
  transform: translate(-10px, 0);
  background-color: gray;
}
@media (max-width: 1680px) {
  .swiper-button-next {
    right: 10px !important;
  }
}
@media (max-width:1410px) {
  .swiper-container{
    .swiper-pagination{
      bottom:90px
      }
  }
}
@media (max-width: 844px) {
  .swiper-container{
    .swiper-button-prev,
    .swiper-button-next{
      display: none ;
    }
  }
  
}
</style>
