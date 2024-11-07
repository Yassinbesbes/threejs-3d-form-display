import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene setup
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 20);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Parent object
const parent = new THREE.Object3D();
scene.add(parent);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Plane
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -6;
plane.receiveShadow = true;
scene.add(plane);

// First part
const points = [];
points.push(new THREE.Vector2(0, 0));
points.push(new THREE.Vector2(0.5, 0.1));
points.push(new THREE.Vector2(1, 0.3));
points.push(new THREE.Vector2(1.5, 0.7));
points.push(new THREE.Vector2(2, 1.5));
points.push(new THREE.Vector2(2.3, 2.5));
points.push(new THREE.Vector2(2.5, 3.5));
points.push(new THREE.Vector2(2.6, 4.5));
points.push(new THREE.Vector2(2.6, 5.5));
points.push(new THREE.Vector2(2.5, 6));

const geometry = new THREE.LatheGeometry(points, 128);
const material = new THREE.MeshBasicMaterial({
  color: 0xd9d9d9,
});

const bowl = new THREE.Mesh(geometry, material);
bowl.castShadow = true;
bowl.receiveShadow = true;
parent.add(bowl);

// Second part (cylinder)
const cylinderGeometry = new THREE.CylinderGeometry(0.15, 0.15, 5, 64);
const cylinderMaterial = new THREE.MeshBasicMaterial({
  color: 0xd9d9d9,
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0, -2.4, 0);
cylinder.castShadow = true;
cylinder.receiveShadow = true;
parent.add(cylinder);

// Third part (cylinder base)
const cylinderGeometry1 = new THREE.CylinderGeometry(0.15, 1, 0.5, 64);
const cylinderMaterial1 = new THREE.MeshBasicMaterial({
  color: 0xd9d9d9,
});
const cylinder1 = new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);
cylinder1.position.set(0, -5, 0);
cylinder1.castShadow = true;
cylinder1.receiveShadow = true;
parent.add(cylinder1);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
