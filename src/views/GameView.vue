<script setup>
import { onMounted, ref, reactive } from "vue";
import * as THREE from "three";
const target = ref("");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(500, 500);

const goemetry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(goemetry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

const result = () => {
  document.createElement("div");
};
onMounted(() => {
  target.value = result(renderer.domElement);
  animate();
});
</script>
<temlate>
<div ref="target"></div>
</temlate>
