<template>
  <div class="bg-white sticky top-0 z-30">
    <div class="container mx-auto px-6 relative py-2">
      <div class="flex justify-between items-center">
        <h1 style="width: 180px">
          <router-link to="/">
            <img class="w-full" src="../assets/images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="nav-768-list" :class="{ active: isActive }">
          <div class="flex justify-center py-28 md:py-0 font-black">
            <ul class="md:flex">
              <a class="block py-4 px-4" href="">
                <li class="text-white bottom-line bottom-md-line text-2xl md:text-black">公司簡介</li>
              </a>
              <router-link class="block py-4 px-4" to="/About">
                <li class="text-white bottom-line bottom-md-line text-2xl md:text-black">服務流程</li>
              </router-link>

              <router-link to="/Sample" class="block py-4 px-4" href="">
                <li class="text-white bottom-line bottom-md-line text-2xl md:text-black">作品案例</li>
              </router-link>
              <router-link to="/Conect" class="block py-4 px-4" href="">
                <li class="text-white bottom-line bottom-md-line text-2xl md:text-black">聯絡我們</li>
              </router-link>
            </ul>
          </div>
        </div>
        <button
          class="border border-black rounded md:hidden relative z-20 active-color cross-btn"
          style="width: 56px; height: 40px"
          @click="listBtn"
          :class="{ active: isActive }"
        >
          <div class="cross"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
    }
  },
  methods: {
    listBtn() {
      if (this.isActive === 0) {
        this.isActive = 1
      } else {
        this.isActive = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cross-btn {
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 12px;
    width: 30px;
    height: 2px;
    background-color: black;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 12px;
    width: 30px;
    height: 2px;
    background-color: black;
  }
}
.cross-btn.active {
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
}
.bottom-line {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scale(0);
    transition: all 0.3s;
    transform-origin: left;
  }
  &:hover {
    &::after {
      transform: scale(1);
    }
  }
}
.active.active-color {
  border-color: white;
}
.active .btn-line {
  display: none;
}
.active .cross {
  &::before {
    transform: rotate(45deg);
    background-color: white;
  }
  &::after {
    transform: rotate(-45deg);
    background-color: white;
  }
}
.cross {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    width: 30px;
    height: 1px;
    background-color: black;
    transition: all 0.3s;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    width: 30px;
    height: 1px;
    background-color: black;
    transition: all 0.3s;
  }
}
@media (max-width: 768px) {
  .nav-768-list {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.5s;
  }

  .active.nav-768-list {
    transform: scaleX(1);
  }
}
@media (min-width: 768px) {
  .bottom-md-line {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      transform: scale(0);
      transition: all 0.3s;
      transform-origin: left;
    }
    &:hover {
      &::after {
        transform: scale(1);
      }
    }
  }
}
</style>
