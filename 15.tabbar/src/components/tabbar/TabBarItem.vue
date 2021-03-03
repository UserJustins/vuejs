<template>
  <!-- 点击事件的监听，负责路由的跳转 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeFontColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 组件静态传值
    path: String,
    activeColor: {
      type: String,
      default: "salmon"
    }
  },
  methods: {
    itemClick() {
      // 路由跳转
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeFontColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>