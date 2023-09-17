<script setup>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
</script>
<template>
  <div>
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
</template>
