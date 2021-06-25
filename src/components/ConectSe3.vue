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
          <input class="input" type="text" v-model="formData.productName" />
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
          <input class="input" type="text" v-model="formData.Add" />
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
          <textarea class="textarea" type="text" v-model="formData.need" />
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
              <input class="input" type="text" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>廳數</span>
            </div>
            <div>
              <input class="input" type="text" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>衛數</span>
            </div>
            <div>
              <input class="input" type="text" />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="p-2">
            <div>
              <span>廚數</span>
            </div>
            <div>
              <input class="input" type="text" />
            </div>
          </div>
          <div class="p-2">
            <div>
              <span>陽台</span>
            </div>
            <div>
              <input class="input" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto sm:flex">
      <div class="flex py-2 w-6/12 sm:pr-4">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>是否交屋</span>
          </div>
        </div>
        <div class="flex" style="margin-top: 7px">
          <div class="px-1">
            <input type="radio" name="pay" id="payyes" />
            <label class="font-black" for="payyes">是</label>
          </div>
          <div class="px-1">
            <input type="radio" name="pay" id="payno" />
            <label class="font-black" for="payno">否</label>
          </div>
        </div>
      </div>
      <div class="flex py-2 w-6/12 sm:pl-4">
        <div class="font-black flex">
          <div class="must-write text-size">
            <span>能否勘場</span>
          </div>
        </div>
        <div class="flex" style="margin-top: 7px">
          <div class="px-1">
            <input type="radio" name="watch" id="watchyes" />
            <label class="font-black" for="watchyes">是</label>
          </div>
          <div class="px-1">
            <input type="radio" name="watch" id="watchno" />
            <label class="font-black" for="no">否</label>
          </div>
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
            <select class="input" name="" id="">
              <option value="1">請選擇</option>
              <option value="2">30坪以下</option>
              <option value="3">30坪~40坪</option>
              <option value="4">40坪~60坪</option>
              <option value="5">60坪~100坪</option>
              <option value="6">100坪以上</option>
            </select>
          </div>
        </div>
        <div class="flex py-2 md:w-6/12 md:pl-4">
          <div class="font-black flex">
            <div class="must-write text-size">
              <span>相關檔案</span>
            </div>
          </div>
          <div class="w-full">
            <input class="hidden" type="file" id="files" />
            <label class="files" for="files">
              <div class="flex">
                <div class="file-white"></div>
                <div class="file-btn">
                  <span class="block" style="margin-top: 7px">Browse</span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto sm:flex border-t border-gray-200 my-4"></div>
    <div>
      <div class="flex items-center justify-center">
        <div class="flex py-2 pr-4">
          <div class="font-black flex">
            <div class="must-write text-size">
              <span>驗證碼</span>
            </div>
          </div>
          <div class="w-full">
            <input class="input" type="text" v-model="formData.verification" />
            <small class="text-red-600">{{ errMsg.verification }}</small>
          </div>
        </div>
        <div class="pl-4" style="width: 150px">
          <img class="w-full" style="height: 40px" src="../assets/images/validate.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="flex py-6 justify-center">
      <button class="border-0 rounded-full px-5 py-2" style="background-color: #d3dce0" @click="sumbit">確認送出</button>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const formData = reactive({
      verification: '',
      productName: '',
      Add: '',
      need: '',
    })
    const errMsg = reactive({})

    const errKey = (key) => {
      return key
    }
    const key = Object.keys(formData)

    const sumbit = () => {
      key.forEach((element) => {
        const errName = {}
        if (element === 'verification') {
          errName.verification = '驗證碼'
        } else if (element === 'productName') {
          errName.productName = '建案名稱'
        } else if (element === 'Add') {
          errName.Add = '建案地址'
        }
        switch (true) {
          case formData[element] === '':
            errMsg[element] = '請填寫正確的' + errName[element]
          case formData[element] === null:
            errMsg[element] = '請填寫正確的' + errName[element]
          case isNaN(formData[element]) === null:
            errMsg[element] = '請填寫正確的' + errName[element]
          case !(Array.isArray(formData[element]) && formData[element].length) === null:
            errMsg[element] = '請填寫正確的' + errName[element]

            break

          default:
            break
        }
      })
    }
    return {
      formData,
      sumbit,
      errMsg,
      errKey,
    }
  },
}
</script>

<style lang="scss" scoped>
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
