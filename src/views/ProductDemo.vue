<template>
  <section class="container mx-auto p-6">
    <div class="md:flex">
      <div class="md:w-6/12 p-4">       
        <Swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
        <Swiper-slide>
          <img src="../../public/img/workplace-1.png" />
          </Swiper-slide>
            <Swiper-slide v-for="item in imgUrl" key="item.id">
              <img :src="item.url" />
            </Swiper-slide>
            
            
        </Swiper>
        <Swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesVisibility="true" :watchSlidesProgress="true" class="mySwiper">
        <Swiper-slide>
          <img src="../../public/img/workplace-1.png" />
          </Swiper-slide>
            <Swiper-slide v-for="item in imgUrl" key="item.id">
              <img :src="item.url" />
            </Swiper-slide>
           
        </Swiper>
      </div>
      <div class="md:w-6/12 p-4 text-center">
        <div class="py-4">
          <h2 class="text-3xl">新營透天蔡公館</h2>
        </div>
        <div class="py-4">
          <span>
            我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容我是內容，我是內容我是內容我是內容我是內容我是內容。</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation,Thumbs]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
   data() {
    return {
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
        thumbsSwiper: null
    };
  },
  methods: {
    
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  }
}
</script>

<style lang="scss" scoped>
.list-bin {
  border-radius: 50%;
  height: 10px;
  width: 10px;
  display: block;
  background-color: gray;
}
</style>
