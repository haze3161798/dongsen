<template>
  <section class="mx-auto container py-6 md:max-w-3xl 2xs:px-6 lg:px-0">
    <div class="py-6">
      <h2 class="text-2xl font-black text-center">空間設計資料</h2>
    </div>
    <div class="md:flex">
      <div class="flex py-2 md:w-6/12 md:pr-4">
        <div class="font-black flex">
          <div class="text-size">
            <span class="must-write">空間類別</span>
          </div>
        </div>
        <div class="w-full">
          <select class="input" v-model="userData.houseType">
            <option value="1">請選擇</option>
            <option value="2">別墅</option>
            <option value="3">預售屋</option>
            <option value="4">新成屋</option>
            <option value="5">店面</option>
            <option value="6">公寓大廈</option>
            <option value="7">獨棟透天</option>
            <option value="8">工商廠辦</option>
            <option value="9">其他</option>
          </select>
          <small class="text-red-600">{{ errMsg.houseType }}</small>
        </div>
      </div>
      <div class="flex py-2 md:w-6/12 md:pl-4">
        <div class="font-black flex">
          <div class="text-size">
            <span class="must-write">喜好風格</span>
          </div>
        </div>
        <div class="w-full">
          <select class="input" v-model="userData.style">
            <option value="1">請選擇</option>
            <option value="2">現代風</option>
            <option value="3">北歐風</option>
            <option value="4">工業風</option>
            <option value="5">鄉村風</option>
            <option value="6">簡約風</option>
          </select>
          <small class="text-red-600">{{ errMsg.style }}</small>
        </div>
      </div>
    </div>
    <div class="md:flex">
      <div class="flex py-2 md:w-6/12 md:pr-4">
        <div class="font-black flex">
          <div class="text-size">
            <span class="must-write">預算金額</span>
          </div>
        </div>
        <div class="w-full">
          <select class="input" v-model="userData.budget">
            <option value="1">請選擇</option>
            <option value="2">20萬~30萬</option>
            <option value="3">30萬~50萬</option>
            <option value="4">50萬~100萬</option>
            <option value="5">100萬~150萬</option>
            <option value="6">150萬~200萬</option>
            <option value="7">200萬~500萬</option>
            <option value="8">500萬~1000萬</option>
            <option value="9">1000萬以上</option>
          </select>
          <small class="text-red-600">{{ errMsg.budget }}</small>
        </div>
      </div>
      <div class="flex py-2 md:w-6/12 md:pl-4">
        <div class="font-black flex">
          <div class="" style="margin-top: 7px">
            <span class="whitespace-nowrap mr-4">使用成員(人數)</span>
          </div>
        </div>
        <div class="w-full">
          <input type="text" class="input" v-model="userData.members" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    userData: {
      type: Object,
      default: () => ({}),
    },
    errMsg: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const userData = reactive(props.userData)
    return {
      userData,
    }
  },
}
</script>

<style lang="scss" scoped>
.must-write {
  position: relative;
  &::after {
    content: '※';
    position: absolute;
    color: red;
    top: 0;
    left: -16px;
  }
}
.input {
  border-width: 1px;
  border-color: #ced4da;
  border-style: solid;
  height: 38px;
  width: 100%;
}
.text-size {
  width: 76px;
  margin-top: 7px;
}
</style>
