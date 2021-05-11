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
    this.initThree()
    this.initCamera()
    this.initScene()
    this.initGeometry()
    this.initHelper()
    this.render()
  },
  watch: {},
  methods: {
    // 渲染器设置
    initThree () {
      const container = document.getElementById('demo')
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0x000000)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    // 相机设置
    initCamera () {
      this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10)
      this.camera.position.z = 1
    },
    // 场景设置
    initScene () {
      this.scene = new Three.Scene()
    },
    // 添加六面体 
    initGeometry () {
      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2) // 定义长宽高
      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)
    },
    // 添加网格线
    initHelper () {
      const helper = new Three.GridHelper(1000, 50, 0x0000ff, 0x808080)
      this.scene.add(helper)
    },
    render () {
      requestAnimationFrame(this.render)

      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01
      this.mesh.rotation.z += 0.01
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
