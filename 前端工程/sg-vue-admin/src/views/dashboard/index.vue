<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      三更博客管理系统
    </div>
    <div>
      欢迎关注三更的B站账号：<a href="https://space.bilibili.com/663528522">https://space.bilibili.com/663528522</a>   三更草堂
    </div>
    <div>
      项目资料获取：关注后会收到自动回复的交流群号，三连截图私聊群主即可获得项目资料。
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
