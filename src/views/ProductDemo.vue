<template>
  <section class="container mx-auto p-6">
    <div class="md:flex">
      <div class="md:w-6/12 p-4">
        <div class="py-1">
          <img class="w-full" src="../assets/images/workplace-1.png" alt="" />
        </div>
        <div class="flex relative py-1">
          <div>
            <img class="w-full" src="../assets/images/workplace-1.png" alt="" />
          </div>
          <div>
            <img class="w-full" src="../assets/images/workplace-2.png" alt="" />
          </div>
          <div>
            <img class="w-full" src="../assets/images/workplace-3.png" alt="" />
          </div>
          <div>
            <div class="absolute z-10 inset-0 flex items-center justify-between px-4">
              <button class="rounded-full transform rotate-180">
                <img class="w-full" src="../assets/images/arrow.png" alt="" />
              </button>
              <button class="rounded-full">
                <img class="w-full" src="../assets/images/arrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <ul class="flex mx-auto justify-between py-2" style="max-width: 100px">
          <li class="list-bin"></li>
          <li class="list-bin"></li>
          <li class="list-bin"></li>
          <li class="list-bin"></li>
          <li class="list-bin"></li>
          <li class="list-bin"></li>
        </ul>
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
export default {}
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
