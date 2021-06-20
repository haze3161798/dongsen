<template>
  <section>
    <div class="py-6">
      <Carousel>
        <Slide v-for="slide in test" :key="slide.id">
          <div class="carousel__viewport">
            <img class="w-full" :src="slide.url" alt="" />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  data() {
    return {
      test: [
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
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style lang="scss">
.carousel__viewport {
  min-height: 100px;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
