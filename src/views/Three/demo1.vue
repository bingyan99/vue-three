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
      camera: null,
      scene: null,
      renderer: null
    }
  },
  mounted () {
    this.init()
    this.render()
  },
  methods: {
    init: function () {
      const container = document.getElementById('demo')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(0x000000)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    render () {
      requestAnimationFrame(this.render);
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped lang="less">
#demo {
  height: 400px;
}
</style>
