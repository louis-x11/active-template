<template>
  <div class="container">
    <p v-text="mess"></p>
    <div class="main">

    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// vant https://youzan.github.io/vant/#/zh-CN/quickstart
import {Button} from 'vant'

export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return{
      mess: 'hello world'
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      console.log(this.$.add(1, 2))  // 测试 lodash
    }
  }
}
</script>

<style lang="scss">
@import "~@/style/app.scss";
</style>
