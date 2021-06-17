<template>
  <section class="container mx-auto p-6 max-w-6xl">
    <div>
      <div class="pb-6">
        <h2 class="text-3xl font-black text-center">作品案例</h2>
      </div>

      <div v-for="item in data" :key="item.id" class="relative py-6">
        <div>
          <img src="../assets/images/workplace-3.png" alt="" />
        </div>
        <div class="absolute inset-0 flex justify-center items-center flex-col">
          <div class="px-2">
            <router-link to="/SampleList">
              <button type="button" class="demo-btn-1">
                <span class="relative" style="z-index: 1">{{ item.content }}</span>
              </button>
            </router-link>
          </div>
          <div class="unuseless-line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          content: '全部',
          id: 1,
        },
        {
          content: '商業空間',
          id: 2,
        },
        {
          content: '住宅設計',
          id: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.demo-btn-1 {
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  border-radius: 4px;
  width: 210px;
  height: 44px;

  &::after {
    top: 0;
    left: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(241, 232, 233);
    transition: all 0.3s;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: left;
      animation: leftToRight 2s infinite;
    }
  }
}

@keyframes leftToRight {
  0% {
    transform: scaleX(0);
  }

  24.9% {
    transform-origin: left;
  }
  25% {
    transform-origin: right;
    transform: scaleX(1);
  }
  60% {
    transform: scaleX(1);
  }
  89.9% {
    transform-origin: right;
  }
  90% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(0);
  }
}
.sample-btn {
  width: 180px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.8);
}
.unuseless-line {
  width: 160px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
}
</style>
