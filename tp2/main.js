import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Scene setup
const scene = new THREE.Scene();
// const loader = new THREE.TextureLoader();
// loader.load("./img/background.jpg", function (texture) {
//   scene.background = texture;
// });

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;
camera.position.y = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// // // Orbit Controls for camera
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.target.set(9, 3, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 15);
light.castShadow = true;
scene.add(light);


// Ground plane
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x986a2e });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
ground.receiveShadow = true;
scene.add(ground);

// Create a parent
const chair = new THREE.Object3D();
chair.castShadow = true;
scene.add(chair);

const table = new THREE.Object3D();
table.castShadow = true;

scene.add(table);

// Rearleg
const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 6);
const legMaterial = new THREE.MeshLambertMaterial({ color: 0x20182e });

const leg1 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(10, 3, 0);
leg1.castShadow = true; 
chair.add(leg1);

const leg2 = new THREE.Mesh(legGeometry, legMaterial);
leg2.position.set(8, 3, 0);
leg2.castShadow = true; 

chair.add(leg2);

// Frontleg
const legGeometry1 = new THREE.CylinderGeometry(0.1, 0.1, 3);

const leg3 = new THREE.Mesh(legGeometry1, legMaterial);
leg3.position.set(10, 1.5, -2);
leg3.castShadow = true; 

chair.add(leg3);

const leg4 = new THREE.Mesh(legGeometry1, legMaterial);
leg4.position.set(8, 1.5, -2);
leg4.castShadow = true; 

chair.add(leg4);

// Seat
const Seatgeometry = new THREE.BoxGeometry(3, 0.25, 3, 1);
const SeatMaterial = new THREE.MeshBasicMaterial({ color: 0xbf9386 });
const Seat = new THREE.Mesh(Seatgeometry, SeatMaterial);
Seat.position.set(9, 3, -1);
Seat.castShadow = true; 

chair.add(Seat);

// Back
const backgeometry = new THREE.BoxGeometry(3, 1.5, 0.3, 1);
const back = new THREE.Mesh(backgeometry, SeatMaterial);
back.position.set(9, 6, 0);
back.castShadow = true; 

chair.add(back);
chair.position.set(9, 0, 0);
chair.rotation.set(0, 3, 0);

// table
const frontgeometry = new THREE.BoxGeometry(14, 0.4, 6, 1);
const frontable = new THREE.Mesh(frontgeometry, SeatMaterial);
frontable.position.set(-2, 6, 2.5);
frontable.castShadow = true; 

table.add(frontable);

//leg1
const legtableGeometry = new THREE.CylinderGeometry(0.2, 0.2, 6);
const legtable1 = new THREE.Mesh(legtableGeometry, legMaterial);
legtable1.position.set(4, 3, 0);
legtable1.castShadow = true; 

table.add(legtable1);

//leg2
const legtable2 = new THREE.Mesh(legtableGeometry, legMaterial);
legtable2.position.set(-8, 3, 0);
legtable2.castShadow = true; 
table.add(legtable2);


//leg3
const legtable3 = new THREE.Mesh(legtableGeometry, legMaterial);
legtable3.position.set(-8, 3, 5);
legtable3.castShadow = true; 
table.add(legtable3);

//leg4
const legtable4 = new THREE.Mesh(legtableGeometry, legMaterial);
legtable4.position.set(4, 3, 5);
legtable4.castShadow = true; 
table.add(legtable4);

//lampe
//parte1
const Geometryparte1 = new THREE.CylinderGeometry(0.2, 0.2, 6);
const parte1 = new THREE.Mesh(Geometryparte1, legMaterial);
parte1.position.set(0, 15, 0);
table.add(parte1);



const Geometryparte2 = new THREE.SphereGeometry(1, 32, 16);
const parte2 = new THREE.Mesh(Geometryparte2, SeatMaterial);
parte2.position.set(0, 12, 0);
table.add(parte2);

// Duplicate the parent object
const duplicatechair = new THREE.Object3D();
duplicatechair.position.set(5, 0, 0);
duplicatechair.rotation.set(0, 3, 0);

const duplicatechair1 = new THREE.Object3D();
duplicatechair1.position.set(16, 0, 0);
duplicatechair1.rotation.set(0, 1, 0);

const duplicatechair2 = new THREE.Object3D();
duplicatechair1.position.set(2, 0, 0);
duplicatechair1.rotation.set(0, -2, 0);

const duplicatechair3 = new THREE.Object3D();
duplicatechair1.position.set(2, 0, 0);
duplicatechair1.rotation.set(0, -2, 0);

chair.children.forEach((child) => {
  const clone = child.clone();
  duplicatechair.add(clone);
});

chair.children.forEach((child) => {
  const clone = child.clone();
  duplicatechair1.add(clone);
});

chair.children.forEach((child) => {
  const clone = child.clone();
  duplicatechair2.add(clone);
});
chair.children.forEach((child) => {
  const clone = child.clone();
  duplicatechair3.add(clone);
});

scene.add(duplicatechair);
scene.add(duplicatechair1);
scene.add(duplicatechair2);
scene.add(duplicatechair3);


// Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
