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
      const container = document.getElementById('demo')
      /**
       * 创建三要素
       * 场景scene、相机camera、渲染器renderer
       */
      this.scene = new Three.Scene() // 定义场景

      // 相机设置
      this.camera = new Three.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      // 添加场景
      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2) // 定义长宽高
      const material = new Three.MeshBasicMaterial({ color: 0xffffff })

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      // 渲染器设置
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0x000000)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      // 渲染场景
      this.renderer.render(this.scene, this.camera)
    }
  },
  components: {},
  filters: {}
}
</script>

<style scoped lang="less">
#demo {
  height: 400px;
}
</style>
