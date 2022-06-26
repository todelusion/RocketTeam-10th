<template>
  <ul class="hidden w-full lg:block">
    <li class="mb-2 flex items-center justify-between border-b-2 py-5">
      <img :src="url" class="h-[116px] w-[157px] object-cover object-center" />

      <p class="mb-2 text-xl font-light text-primary">
        焦糖瑪卡龍<br />NT$ 450
      </p>
      <ul class="flex w-max border-2 text-center">
        <li class="flex h-12 w-12 items-center justify-center border-r-2">
          <p>-</p>
        </li>
        <li class="flex h-12 w-12 items-center justify-center border-r-2">
          <p>2</p>
        </li>
        <li class="flex h-12 w-12 items-center justify-center"><p>+</p></li>
      </ul>
      <p class="py-2 text-right text-xl font-semibold text-primary">NT$ 900</p>
      <font-awesome-icon
        :icon="['far', 'trash-can']"
        class="mr-4 text-xl text-primary"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["url"],
};
</script>
