<script setup>
  /*-----------------------------------------
   * SETUP SCRIPT
   *-----------------------------------------*/

  const props = defineProps({
    data: Object,
  });

  console.log(props.data)

  const changePage = (val) => {
    if (this.data.type === 'Negocios') {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 640);
    }
    this.$emit('change-page', val);
  }
 
</script>

<template>
  <div class="component font-text">
    <div class="w-full md:block hidden">
      <el-pagination
        v-model:currentPage="data.currentPage"
        v-model:page-size="data.pageSize"
        :disabled="data.disabled"
        background
        layout="prev, pager, next, jumper"
        :total="data.total"
        @size-change="changePage"
        @current-change="changePage"
        text="ir"
        :pager-count="5">
      </el-pagination>
    </div>
    <div class="w-full md:hidden block">
      <el-pagination
        v-model:currentPage="data.currentPage"
        v-model:page-size="data.pageSize"
        :disabled="data.disabled"
        background
        layout="prev, pager, next"
        :total="data.total"
        @size-change="changePage"
        @current-change="changePage"
        text="ir"
        :pager-count="5">
      </el-pagination>
    </div>
  </div>
</template>

