<template>
  <el-form ref="myFormRef" v-model="formData">
    <el-form-item label="test">
      <el-input v-model="formData.input" placeholder="输入"></el-input>
    </el-form-item>
    <el-button type="primary" @click="clickHandler">click</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const formData = ref({
  input: ''
});
const myFormRef = ref(null);

const clickHandler = () => {
  console.log(formData.value.input)
}
</script>

<style scoped>

</style>