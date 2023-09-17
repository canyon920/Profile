<template>
  <div class="button_wrap">
    <div class="background">
      <Renderer ref="renderer">
        <Camera :position="{ z: 1 }" />
        <Scene>
          <PointLight :position="{ y: 20, z: 20 }" />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <LambertMaterial />
          </Box>
        </Scene>
      </Renderer>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
};
</script>

<style>
canvas {
  width: 100%;
}

.button_wrap {
  width: 100%;
  height: 1020px;
  opacity: 0;
  animation: fadeOut 3s;
  position: absolute;
  z-index: -9;
}
.background {
}

@keyframes fadeOut {
  0% {
    z-index: 999;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
