<template>
  <div>
    <div id="demo"></div>
  </div>
</template>

<script>
import * as Three from 'three'
export default {
  data () {
    return {
      camera: null, // 定义相机
      scene: null, // 定义场景
      renderer: null // 定义渲染器
    }
  },
  created () {},
  mounted () {
    this.init()
  },
  watch: {},
  methods: {
    init: function () {
      /**
       * 创建三要素
       * 场景scene、相机camera、渲染器renderer
       */
      this.scene = new Three.Scene() // 定义场景

      // 相机设置
      this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
      this.camera.position.z = 1

      // 渲染器设置
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0x000000)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)

      // 渲染场景
      this.renderer.render(this.scene, this.camera)
    }
  },
  components: {},
  filters: {}
}
</script>

<style scoped lang="less">
</style>
