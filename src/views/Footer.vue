<template>
  <div>
    <div class="py-6">
      <div class="border border-gray-100 w-full"></div>
    </div>
    <div class="container mx-auto px-6 text-center py-6">
      <div class="mb-4">
        <span class="text-2xl font-black">此作品僅供面試使用 不做任何商業行為與授權</span>
      </div>
      <div class="mx-auto footer-width md-max-w-100 py-4">
        <span class="font-black"> TEL: 0938123340 | dongsendesign@gmail.com </span>
        <span class="hidden md:inline">|</span>
        <span class="font-black">周一至周六 AM09:00~PM06:00 </span>
      </div>
      <div class="flex justify-center mx-auto" style="max-width: 230px">
        <div class="px-2 w-3/12">
          <a href="">
            <img class="w-full" src="../assets/images/fb.png" alt="" />
          </a>
        </div>
        <div class="px-2 w-3/12">
          <a href="">
            <img class="w-full" src="../assets/images/ig.png" alt="" />
          </a>
        </div>
        <div class="px-2 w-3/12">
          <a href="">
            <img class="w-full" src="../assets/images/line.png" alt="" />
          </a>
        </div>
        <div class="px-2 w-3/12">
          <a href="">
            <img class="w-full" src="../assets/images/google.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-width {
  max-width: 360px;
}
@media (min-width: 768px) {
  .md-max-w-100 {
    max-width: 100%;
  }
}
</style>
