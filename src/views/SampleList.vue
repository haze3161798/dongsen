<template>
  <section class="container mx-auto p-6">
    <div class="flex flex-wrap">
      <div v-for="item in sampleList" :key="item.id" class="sm:w-6/12 lg:w-4/12 p-4">
        <router-link to="/ProductDemo" class="shadow-lg block" href="">
          <div>
            <img class="w-full" :src="item.img" alt="" />
          </div>
          <div class="flex justify-center items-center" style="height: 64px">
            <h5 class="text-xl font-black">新營透天蔡公館</h5>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import sampleList from '../assets/sample-list.json'
export default {
  data() {
    return {
      sampleList,
    }
  },
}
</script>

<style></style>
