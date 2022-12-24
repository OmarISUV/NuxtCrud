<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Revisa si es palindromo">
        <el-input v-model="formInline.palindromo" placeholder="Ingresa la frase " />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Check</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  
  const formInline = reactive({
    palindromo: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>
  