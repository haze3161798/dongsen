<template>
  <form @submit="submit">
    <ConectSe1 :errMsg="errMsg" :userData="userData" />
    <ConectSe2 :errMsg="errMsg" :userData="userData" />
    <ConectSe3 :errMsg="errMsg" :userData="userData" />
    <div class="flex py-6 justify-center">
      <button type="submit" class="border-0 rounded-full px-5 py-2" style="background-color: #d3dce0" @click="submit">確認送出</button>
    </div>
  </form>
</template>

<script>
import ConectSe1 from '../components/ConectSe1.vue'
import ConectSe2 from '../components/ConectSe2.vue'
import ConectSe3 from '../components/ConectSe3.vue'
import { reactive } from 'vue'
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
    const submit = (e) => {
      e.preventDefault()
      validate()
      if (Object.keys(errMsg).length) {
        return
      }
      console.log('grecaptcha', grecaptcha)
      grecaptcha.ready(() => {
        grecaptcha.execute('6LfkCHQbAAAAAEzfumOvE2yrMGTlJ27KgAfZ-w5-', { action: 'submit' }).then((token) => {})
      })
    }
    return {
      errMsg,
      userData,
      submit,
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
</style>
