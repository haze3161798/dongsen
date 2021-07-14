<template>
  <section class="container mx-auto py-6 2xs:px-6 lg:px-0">
    <div class="py-6">
      <h2 class="text-2xl font-black text-center">預計規劃空間</h2>
    </div>
    <div class="max-w-3xl mx-auto">
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>建案名稱</span>
          </div>
        </div>
        <div class="w-full">
          <input class="input" type="text" v-model="userData.productName" />
          <small class="text-red-600">{{ errMsg.productName }}</small>
        </div>
      </div>
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>建案地址</span>
          </div>
        </div>
        <div class="w-full">
          <input class="input" type="text" v-model="userData.Add" />
          <small class="text-red-600">{{ errMsg.Add }}</small>
        </div>
      </div>
      <div class="flex py-2">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>需求簡述</span>
          </div>
        </div>
        <div class="w-full">
          <textarea class="textarea" type="text" v-model="userData.need" />
          <small class="text-red-600">{{ errMsg.need }}</small>
        </div>
      </div>
      <div class="sm:flex">
        <div class="flex">
          <div class="p-2">
            <div>
              <span>房數</span>
            </div>
            <div>
              <input class="input" type="text" v-model="userData.room" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>廳數</span>
            </div>
            <div>
              <input class="input" type="text" v-model="userData.hall" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>衛數</span>
            </div>
            <div>
              <input class="input" type="text" v-model="userData.wc" />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="p-2">
            <div>
              <span>廚數</span>
            </div>
            <div>
              <input class="input" type="text" v-model="userData.kiching" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>陽台</span>
            </div>
            <div>
              <input class="input" type="text" v-model="userData.balcony" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto sm:flex">
      <div class="flex py-2 sm:pr-4 w-6/12">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>是否交屋</span>
          </div>
        </div>
        <div>
          <div class="flex" style="margin-top: 7px">
            <div class="px-1">
              <input type="radio" name="pay" id="payyes" v-model="userData.spend" />
              <label class="font-black" for="payyes">是</label>
            </div>
            <div class="px-1">
              <input type="radio" name="pay" id="payno" v-model="userData.spend" />
              <label class="font-black" for="payno">否</label>
            </div>
          </div>
          <small class="text-red-600">{{ errMsg.spend }}</small>
        </div>
      </div>

      <div class="flex py-2 sm:pl-4 w-6/12">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>能否勘場</span>
          </div>
        </div>
        <div>
          <div class="flex" style="margin-top: 7px">
            <div class="px-1">
              <input type="radio" name="watch" id="watchyes" v-model="userData.watch" />
              <label class="font-black" for="watchyes">是</label>
            </div>
            <div class="px-1">
              <input type="radio" name="watch" id="watchno" v-model="userData.watch" />
              <label class="font-black" for="watchno">否</label>
            </div>
          </div>
          <small class="text-red-600">{{ errMsg.watch }}</small>
        </div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto sm:flex">
      <div class="md:flex w-full">
        <div class="flex py-2 md:w-6/12 md:pr-4">
          <div class="font-black flex">
            <div class="text-size">
              <span class="must-write">坪數</span>
            </div>
          </div>
          <div class="w-full">
            <select class="input" v-model="userData.size">
              <option value="1">請選擇</option>
              <option value="2">30坪以下</option>
              <option value="3">30坪~40坪</option>
              <option value="4">40坪~60坪</option>
              <option value="5">60坪~100坪</option>
              <option value="6">100坪以上</option>
            </select>
            <small class="text-red-600">{{ errMsg.size }}</small>
          </div>
        </div>
        <div class="flex py-2 md:w-6/12 md:pl-4">
          <div class="font-black flex">
            <div class="text-size">
              <span>相關檔案</span>
            </div>
          </div>
          <div class="w-full">
            <input class="hidden" type="file" id="files" @change="upload" />
            <label class="files" for="files">
              <div class="flex overflow-hidden">
                <div class="file-white">
                  <div class="" style="margin-top: 7px">{{ uploadName }}</div>
                </div>
                <div class="file-btn">
                  <span class="block" style="margin-top: 7px">Browse</span>
                </div>
              </div>
            </label>
            <small class="text-red-600">{{ errFileMsg }}</small>
            <div class="pt-2">
              <div class="border w-full flex justify-center p-2 relative" style="height: 200px">
                <div>
                  <button @click="delImg" v-if="imgReader" type="button" class="absolute top-2 left-2" style="width: 30px; height: 30px">
                    <div class="cross"></div>
                  </button>
                </div>
                <img :src="imgReader" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
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
    const errFileMsg = ref()
    const userData = props.userData
    const uploadName = ref('')
    const imgReader = ref()
    const upload = (e) => {
      if (e.target.files.length === 0) {
        return
      }
      const file = e.target.files[0]
      if (/image/.test(file.type)) {
        userData.files = file
        uploadName.value = e.target.files[0].name
        errFileMsg.value = ''
        const reader = new FileReader()
        reader.onload = (e) => {
          const base64 = e.target.result
          imgReader.value = base64
        }
        reader.readAsDataURL(file)
      } else {
        errFileMsg.value = '檔案類型只接受圖片'
        uploadName.value = ''
      }
    }
    const delImg = () => {
      errFileMsg.value = ''
      uploadName.value = ''
      imgReader.value = ''
    }
    return {
      uploadName,
      upload,
      errFileMsg,
      imgReader,
      delImg,
    }
  },
}
</script>

<style lang="scss" scoped>
.cross {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 20px;
    height: 2px;
    background-color: red;
    transform: rotate(45deg);
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 20px;
    height: 2px;
    background-color: red;
    transform: rotate(-45deg);
  }
}
.file-white {
  height: 38px;
  width: 60%;
}
.file-btn {
  text-align: center;
  height: 38px;
  width: 40%;
  background-color: #e9ecef;
}
.files {
  border-width: 1px;
  border-color: #ced4da;
  border-style: solid;
  display: block;
  height: 38px;
  width: 100%;
}
.textarea {
  border-width: 1px;
  border-color: #ced4da;
  border-style: solid;
  height: 120px;
  width: 100%;
}
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
