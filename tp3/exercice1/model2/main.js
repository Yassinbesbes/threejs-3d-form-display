import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene setup
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 20);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Parent object
const parent = new THREE.Object3D();
scene.add(parent);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

//plane
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -0.5;
scene.add(plane);

const points = [];
points.push(new THREE.Vector2(0, 0));
points.push(new THREE.Vector2(0.7, 0));
points.push(new THREE.Vector2(1, 0.5));
points.push(new THREE.Vector2(1.4, 1));
points.push(new THREE.Vector2(1.6, 1.5));
points.push(new THREE.Vector2(1.8, 2));
points.push(new THREE.Vector2(1.8, 2.5));
points.push(new THREE.Vector2(1.6, 3));
points.push(new THREE.Vector2(1.26, 3.45));
points.push(new THREE.Vector2(1, 3.6));
points.push(new THREE.Vector2(0.75, 4));
points.push(new THREE.Vector2(0.6, 4.5));
points.push(new THREE.Vector2(1, 5));

const bowlGeometry = new THREE.LatheGeometry(points, 128);
const bowlMaterial = new THREE.MeshBasicMaterial({
  color: 0xd9d9d9,
});

const bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
bowl.castShadow = true;
bowl.receiveShadow = true;
parent.add(bowl);

// Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
