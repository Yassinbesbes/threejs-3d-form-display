import * as THREE from "three";
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 20);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const shape = new THREE.Shape();

shape.moveTo(0, 3);
shape.bezierCurveTo(0, 3, 0.75, 2.2, 1, 1.5);
shape.bezierCurveTo(1, 1.5, 1.75, 1.5, 2.5, 1.5);
shape.bezierCurveTo(2.5, 1.5, 2, 1, 1.5, 0.7);
shape.bezierCurveTo(1.5, 0.7, 1.8, -0.4, 2, -1);
shape.bezierCurveTo(2, -1, 1, -0.5, 0, 0);
shape.bezierCurveTo(0, 0, -1, -0.5, -2, -1);
shape.bezierCurveTo(-2, -1, -1.8, -0.4, -1.5, 0.7);
shape.bezierCurveTo(-1.5, 0.7, -2, 1, -2.5, 1.5);
shape.bezierCurveTo(-2.5, 1.5, -1.75, 1.5, -1, 1.5);
shape.bezierCurveTo(-1, 1.5, -0.75, 2.2, 0, 3);

const extrudeSettings = {
  steps: 2,
  depth: 0.5,
  bevelEnabled: true,
  bevelThickness: 0.2,
  bevelSize: 0.2,
  bevelSegments: 2,
};
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const star = new THREE.Mesh(geometry, material);
scene.add(star);

// Animation
function animate() {
  requestAnimationFrame(animate);

  // star.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();

