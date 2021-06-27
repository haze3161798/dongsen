<template>
  <ConectSe1 :errMsg="errMsg" :userData="userData" />
  <ConectSe2 :errMsg="errMsg" :userData="userData" />
  <ConectSe3 :errMsg="errMsg" :userData="userData" />
  <div class="flex py-6 justify-center">
    <button class="border-0 rounded-full px-5 py-2" style="background-color: #d3dce0" @click="sumbit">確認送出</button>
  </div>
</template>

<script>
import ConectSe1 from '../components/ConectSe1.vue'
import ConectSe2 from '../components/ConectSe2.vue'
import ConectSe3 from '../components/ConectSe3.vue'
import { reactive } from 'vue'
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
      verification: '',
    })
    const errMsg = reactive({})
    const errKey = (key) => {
      return key
    }
    const key = Object.keys(userData)

    const sumbit = () => {
      key.forEach((element) => {
        const errName = {}
        if (element === 'verification') {
          errName.verification = '驗證碼'
        } else if (element === 'productName') {
          errName.productName = '建案名稱'
        } else if (element === 'Add') {
          errName.Add = '建案地址'
        } else if (element === 'need') {
          errName.need = '需求簡述'
        } else if (element === 'spend') {
          errName.spend = '選項'
        } else if (element === 'watch') {
          errName.watch = '選項'
        } else if (element === 'size') {
          errName.size = '坪數'
        } else if (element === 'budget') {
          errName.budget = '預算'
        } else if (element === 'style') {
          errName.style = '喜好風格'
        } else if (element === 'houseType') {
          errName.houseType = '空間類別'
        } else if (element === 'fixExperience') {
          errName.fixExperience = '選項'
        } else if (element === 'phone') {
          errName.phone = '連絡電話'
        } else if (element === 'mail') {
          errName.mail = '電子郵件'
        } else if (element === 'userName') {
          errName.userName = '姓名'
        }
        switch (true) {
          case userData[element] === '':
            errMsg[element] = '請填寫正確的' + errName[element]
          case userData[element] === null:
            errMsg[element] = '請填寫正確的' + errName[element]
          case isNaN(userData[element]) === null:
            errMsg[element] = '請填寫正確的' + errName[element]
          case !(Array.isArray(userData[element]) && userData[element].length) === null:
            errMsg[element] = '請填寫正確的' + errName[element]

            break

          default:
            break
        }
      })
    }
    return {
      sumbit,
      errMsg,
      errKey,
      userData,
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
