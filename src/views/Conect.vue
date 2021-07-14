<template>
  <div class="relative">
    <div v-if="witeData" class="fixed inset-0 flex justify-center items-center">
      <div class="bg-gray-800 bg-opacity-50 flex justify-center items-center w-full h-full">
        <div class="circle"></div>
      </div>
    </div>
    <form @submit="submit">
      <ConectSe1 :errMsg="errMsg" :userData="userData" />
      <ConectSe2 :errMsg="errMsg" :userData="userData" />
      <ConectSe3 :errMsg="errMsg" :userData="userData" />
      <div class="flex py-6 justify-center">
        <button type="submit" class="border-0 rounded-full px-5 py-2" style="background-color: #d3dce0">確認送出</button>
      </div>
    </form>
  </div>
</template>

<script>
import ConectSe1 from '../components/ConectSe1.vue'
import ConectSe2 from '../components/ConectSe2.vue'
import ConectSe3 from '../components/ConectSe3.vue'
import { reactive, ref } from 'vue'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:3090/api/',
})
export default {
  components: {
    ConectSe1,
    ConectSe2,
    ConectSe3,
  },
  setup() {
    const userData = reactive({
      userName: '',
      mail: '',
      phone: '',
      fixExperience: '',
      fixFrequency: '',
      connectionTime: '',
      day: '',
      houseType: '',
      style: '',
      budget: '',
      members: '',
      productName: '',
      Add: '',
      need: '',
      room: '',
      hall: '',
      wc: '',
      kiching: '',
      balcony: '',
      spend: '',
      watch: '',
      size: '',
      files: '',
    })
    // const userData1 = reactive({
    //   userName: 'zxc',
    //   mail: 'zxc',
    //   phone: 'asd',
    //   fixExperience: 'zxc',
    //   fixFrequency: 'zxc',
    //   connectionTime: 'zxc',
    //   day: 'zxc',
    //   houseType: 'zxc',
    //   style: 'zxc',
    //   budget: 'zxc',
    //   members: 'zxc',
    //   productName: 'zxc',
    //   Add: 'zxc',
    //   need: 'zxc',
    //   room: 'zxc',
    //   hall: 'zxc',
    //   wc: 'zxc',
    //   kiching: 'zxc',
    //   balcony: 'asd',
    //   spend: 'zxc',
    //   watch: 'zxc',
    //   size: 'zxc',
    //   files: 'zxc',
    // })

    const errMsg = reactive({})

    const errName = {
      productName: '請填寫建案名稱',
      Add: '請填寫正確的建案地址',
      need: '請填寫正確的需求簡述',
      spend: '請勾選正確的選項',
      watch: '請勾選正確的選項',
      size: '請填寫正確的建案坪數',
      budget: '請填寫正確的預算',
      houseType: '請填寫正確的喜好風格',
      fixExperience: '請勾選正確的選項',
      phone: '請填寫正確的連絡電話',
      mail: '請填寫正確的電子郵件',
      userName: '請填寫正確的姓名',
    }
    const validate = () => {
      Object.keys(errName).forEach((element) => {
        switch (true) {
          case userData[element] === '':
            errMsg[element] = errName[element]
            break
          case userData[element] === null:
            errMsg[element] = errName[element]
            break
          case isNaN(userData[element]) === null:
            errMsg[element] = errName[element]
            break
          case !(Array.isArray(userData[element]) && userData[element].length) === null:
            errMsg[element] = errName[element]
            break
          default:
            delete errMsg[element]
        }
      })
    }
    const witeData = ref(0)

    const submit = (e) => {
      e.preventDefault()
      validate()
      if (Object.keys(errMsg).length) {
        return
      }
      witeData.value = 1
      grecaptcha.ready(() => {
        grecaptcha.execute('6LfkCHQbAAAAAEzfumOvE2yrMGTlJ27KgAfZ-w5-', { action: 'submit' }).then((token) => {
          const form = new FormData()
          const userDataKey = Object.keys(userData)
          userDataKey.forEach((el) => {
            if (el instanceof Blob) {
              form.append(el, userData[el], userData[el].name)
            } else {
              form.append(el, userData[el])
            }
          })
          request
            .post('form', form, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => {
              if (res.data === 'sessus') {
                witeData.value = 0
              } else {
                alert('很抱歉 系統錯誤')
                witeData.value = 0
              }
            })
        })
      })
    }

    return {
      errMsg,
      userData,
      submit,
      witeData,
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  border-width: 1px;
  border-color: #ced4da;
  border-style: solid;
  height: 38px;
  width: 100%;
}
.circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border-width: 3px;
  border-color: white transparent white white;
  animation: rotate 0.5s infinite linear;
  transform: rotate(0deg);
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
