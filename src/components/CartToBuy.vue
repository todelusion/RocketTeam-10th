<template>
  <ul class="max-w-[315px] lg:hidden">
    <li class="mb-2 flex">
      <img :src="url" class="h-[116px] w-[157px] object-cover object-center" />
      <div class="ml-4">
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
      </div>
    </li>
    <li class="border-y-2 py-2 text-right">NT$ 900</li>
  </ul>
</template>

<script>
export default {
  props: ["url"],
};
</script>
