<template>
  <div
    class="
      container px-4 mx-auto w-full h-full flex justify-center items-center
      lg:px-0
    "
  >
    <div class="card bg-base-200 w-full lg:w-[512px]">
      <div class="card-body">
        <FormLogin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import FormLogin from '../components/form/FormLogin.vue';
</script>

<style scoped>

</style>