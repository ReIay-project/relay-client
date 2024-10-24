<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'StorybookExample',

});
interface StoryExampleInt {
  name: string;
}

defineProps<{
  /**
   * test description
   */
  title: string;
  // asdkfjh
  item: StoryExampleInt;
  /**
   * @description test description 123
   */
  list: StoryExampleInt[]
}>();

defineEmits({
  /**
   * @description test emit
   */
  'test-emit': (value: boolean) => value
});
</script>

<style scoped>

</style>