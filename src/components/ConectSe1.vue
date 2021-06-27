<template>
  <section class="container mx-auto p-6 2xs:px-6 lg:px-0">
    <div class="pb-6">
      <div class="mx-auto w-full lg:w-10/12" style="background-color: #d3dce0">
        <h2 class="text-center font-black py-1" style="color: #6c757d; font-size: 2rem">INQUIRY FORM諮詢表</h2>
      </div>
    </div>
    <div class="py-6">
      <h2 class="text-2xl font-black text-center">顧客資料填寫</h2>
    </div>
    <div class="lg:max-w-3xl mx-auto">
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>姓名</span>
          </div>
        </div>
        <div class="w-full">
          <input class="input" type="text" v-model="userData.userName" />
          <small class="text-red-600">{{ errMsg.userName }}</small>
        </div>
      </div>
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>電子郵件</span>
          </div>
        </div>
        <div class="w-full">
          <input class="input" type="text" v-model="userData.mail" />
          <small class="text-red-600">{{ errMsg.mail }}</small>
        </div>
      </div>
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>連絡電話</span>
          </div>
        </div>
        <div class="w-full">
          <input class="input" type="text" v-model="userData.phone" />
          <small class="text-red-600">{{ errMsg.phone }}</small>
        </div>
      </div>
      <div class="md:flex">
        <div class="flex py-2">
          <div class="font-black flex">
            <div class="must-write text-size">
              <span>裝修經驗</span>
            </div>
          </div>
          <div>
            <div class="flex" style="margin-top: 7px">
              <div class="px-1">
                <input type="radio" name="experience" id="yes" v-model="userData.fixExperience" />
                <label class="font-black" for="yes">是</label>
              </div>
              <div class="px-1">
                <input type="radio" name="experience" id="no" v-model="userData.fixExperience" />
                <label class="font-black" for="no">否</label>
              </div>
            </div>
            <small class="text-red-600">{{ errMsg.fixExperience }}</small>
          </div>
        </div>
        <div class="flex py-2">
          <div class="font-black flex">
            <div class="text-size md:text-right md:pr-4">
              <span>次數</span>
            </div>
          </div>
          <div class="w-full">
            <input class="input" type="number" v-model="userData.fixFrequency" />
          </div>
        </div>
      </div>
      <div class="md:flex">
        <div class="flex py-2 md:w-6/12">
          <div class="font-black flex">
            <div class="text-size">
              <span>聯絡時間</span>
            </div>
          </div>
          <div class="w-full">
            <select class="input" name="" id="" v-model="userData.connectionTime">
              <option value="1">請選擇</option>
              <option value="2">9~13時</option>
              <option value="3">13~17時</option>
              <option value="4">17~21時</option>
              <option value="5">不指定</option>
            </select>
          </div>
        </div>
        <div class="flex py-2 md:w-6/12 md:pl-4">
          <div class="font-black flex">
            <div class="text-size">
              <span>星期</span>
            </div>
          </div>
          <div class="w-full">
            <select class="input" name="" id="" v-model="userData.day">
              <option value="1">請選擇</option>
              <option value="2">星期一</option>
              <option value="3">星期二</option>
              <option value="4">星期三</option>
              <option value="5">星期四</option>
              <option value="6">星期五</option>
              <option value="7">星期六</option>
              <option value="8">星期日</option>
              <option value="9">不指定</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
