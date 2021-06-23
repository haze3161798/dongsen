<template>
  <ConectSe1 />
  <ConectSe2 />
  <ConectSe3 />
  <div>
    <div>????????</div>
    <Form @submit="onSubmit">
      <Field class="input" name="email" :rules="validateEmail" />
      <ErrorMessage name="email" />

      <button>Sign up for newsletter</button>
    </Form>
  </div>
</template>

<script>
import ConectSe1 from '../components/ConectSe1.vue'
import ConectSe2 from '../components/ConectSe2.vue'
import ConectSe3 from '../components/ConectSe3.vue'

export default {
  components: {
    ConectSe1,
    ConectSe2,
    ConectSe3,
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
