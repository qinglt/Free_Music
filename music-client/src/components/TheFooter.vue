<template>
  <div class="the-footer">
    <p v-for="(item, index) in list" :key="index">
      {{item}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'the-footer',
  data () {
    return {
      list: [
        `Copyright © 2022`
      ]
    }
  }
}
</script>

<style scoped>
.the-footer{
  width: 100%;
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.the-footer p {
  height: 10px;
}
</style>
