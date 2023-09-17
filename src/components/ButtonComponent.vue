<script setup>
const scene = new Scene()
const geometry = new BoxGeometry()
const material = new MeshBasicMaterial();

const geometry = new BoxGeometry()
const material = new MeshBasicMateral(width?: number, )

const box = new Mesh(geometry)

</script>
<template>
  <div>
    <TreeCanvas clear-color="#82DBC5">
      <TressPerspectiveCamera />
      <TreeMath>
        <TreeBoxGeometry />
        <TresMeshBasicMaterial :color="teal">
        </TresMeshBasicMaterial>
      </TreeMath>
    </TreeCanvas>
  </div>
</template>
