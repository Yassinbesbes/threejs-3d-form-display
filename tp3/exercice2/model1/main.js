import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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

const fene = new THREE.Object3D();
scene.add(fene);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Plane
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = 0; // Set the plane's position to y = 0
scene.add(plane);

// Cube
const geometry = new THREE.BoxGeometry(10, 8, 10);
const material = new THREE.MeshBasicMaterial({ color: 0xd9d9d9 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 4;
parent.add(cube);

//door parte1
const gdoor = new THREE.BoxGeometry(0.2, 4, 2);
const mdoor = new THREE.MeshBasicMaterial({ color: 0x65390c });
const door = new THREE.Mesh(gdoor, mdoor);
door.position.set(5, 2, 0);
parent.add(door);

//parte2
var sphere1Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var sphere1Geometry = new THREE.SphereGeometry(0.1, 64, 64);
var sphere1 = new THREE.Mesh(sphere1Geometry, sphere1Material);
sphere1.position.set(5.1, 2, 0.6);
parent.add(sphere1);

//ftop of the door
const gtorus = new THREE.TorusGeometry(0.8, 0.1, 16, 100);
const torus = new THREE.Mesh(gtorus, mdoor);
torus.position.set(5.1, 6.5, 0);
torus.rotation.set(0, 1.5, 0);
parent.add(torus);

const gc = new THREE.CylinderGeometry(0.07, 0.07, 1.5, 32);
const cylinder1 = new THREE.Mesh(gc, mdoor);
cylinder1.position.set(5.1, 6.5, 0);

parent.add(cylinder1);

const cylinder2 = new THREE.Mesh(gc, mdoor);
cylinder2.position.set(5.1, 6.5, 0);
cylinder2.rotation.set(1.5, 0, 0);
parent.add(cylinder2);

//Fene

//Cadre
const gf = new THREE.CylinderGeometry(0.09, 0.09, 2, 32);
const cylinderf = new THREE.Mesh(gf, mdoor);
cylinderf.position.set(3.1, 4, 5);

fene.add(cylinderf);

const gf1 = new THREE.CylinderGeometry(0.09, 0.09, 2.5, 32);
const cylinderf1 = new THREE.Mesh(gf1, mdoor);
cylinderf1.position.set(3.1, 4, 5);
cylinderf1.rotation.set(0, 0, 1.55);
fene.add(cylinderf1);

const top = new THREE.Mesh(gf1, mdoor);
top.position.set(3.1, 5, 5);
top.rotation.set(0, 0, 1.55);
fene.add(top);

const bottom = new THREE.Mesh(gf1, mdoor);
bottom.position.set(3.1, 3, 5);
bottom.rotation.set(0, 0, 1.55);
fene.add(bottom);

const right = new THREE.Mesh(gf, mdoor);
right.position.set(1.9, 4, 5);
fene.add(right);

const left = new THREE.Mesh(gf, mdoor);
left.position.set(4.3, 4, 5);
fene.add(left);

function duplicateFene(fene) {
  const feneDuplicate = fene.clone();
  feneDuplicate.position.set(-5, 0, 0);
  scene.add(feneDuplicate);
}

duplicateFene(fene);

// Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
