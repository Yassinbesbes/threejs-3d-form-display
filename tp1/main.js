import * as THREE from "three";

// Scene setup
const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
loader.load("./img/background.jpg", function (texture) {
  scene.background = texture;
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;
camera.position.y = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Create a parent object for the snowman
const parent = new THREE.Object3D();
scene.add(parent);
const parent1 = new THREE.Object3D();
scene.add(parent1);

// Snowman parts: body and head (spheres)
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const bodyGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const body = new THREE.Mesh(bodyGeometry, sphereMaterial);
body.position.y = 1.5;
parent.add(body);

const headGeometry = new THREE.SphereGeometry(1, 32, 32);
const head = new THREE.Mesh(headGeometry, sphereMaterial);
head.position.y = 4;
parent.add(head);

// Snowman arms (cylinders)
const armMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);

const leftArm = new THREE.Mesh(armGeometry, armMaterial);
leftArm.position.set(-2, 2, 0);
leftArm.rotation.z = 2;
parent.add(leftArm);

const rightArm = new THREE.Mesh(armGeometry, armMaterial);
rightArm.position.set(2, 1.6, 0);
rightArm.rotation.z = 4;
parent.add(rightArm);

// Snowman nose (cone)
const noseGeometry = new THREE.ConeGeometry(0.3, 1.3, 32);
const noseMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.set(0, 4, 1);
nose.rotation.x = 1.6;
parent.add(nose);

// Snowman eyes (small spheres)
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const leftEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.18, 32, 32),
  eyeMaterial
);
leftEye.position.set(-0.37, 4.3, 0.8);
parent.add(leftEye);

const rightEye = new THREE.Mesh(
  new THREE.SphereGeometry(0.18, 32, 32),
  eyeMaterial
);
rightEye.position.set(0.37, 4.3, 0.8);
parent.add(rightEye);

// Snowman buttons (small spheres)
const buttonMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const button = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 32, 32),
  buttonMaterial
);
button.position.set(0, 1.8, 1.22);
parent.add(button);

const button2 = button.clone();
button2.position.set(0, 1.2, 1.2);
parent.add(button2);

const button3 = button.clone();
button3.position.set(0, 2.38, 0.9);
parent.add(button3);

// Scarf (torus between body and head)
const scarfMaterial = new THREE.MeshStandardMaterial({ color: 0xbf40bf });
const scarfGeometry = new THREE.TorusGeometry(0.9, 0.3, 14, 100);
const scarf = new THREE.Mesh(scarfGeometry, scarfMaterial);
scarf.position.y = 3;
scarf.rotation.x = 4.7;
parent.add(scarf);

// Hat (part 1)
const hatHeight1 = 0.19;
const hatGeometry1 = new THREE.CylinderGeometry(1, 1, hatHeight1, 32);
const hatMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const hat1 = new THREE.Mesh(hatGeometry1, hatMaterial);
hat1.position.set(0, 4.8, 0.5);
parent.add(hat1);

// Hat (part 2)
const hatHeight2 = 1.3;
const hatGeometry2 = new THREE.CylinderGeometry(0.8, 0.8, hatHeight2, 32);
const hat2 = new THREE.Mesh(hatGeometry2, hatMaterial);
hat2.position.set(0, 5.5, 0.5);
parent.add(hat2);

// Tree

// Create the triangle mesh
const tGeometry1 = new THREE.ConeGeometry(1.4, 4, 32);
const tMaterial = new THREE.MeshStandardMaterial({ color: 0x008800 });
const triangle = new THREE.Mesh(tGeometry1, tMaterial);
triangle.position.set(10, 6.5, 0);
parent1.add(triangle);

const tGeometry = new THREE.ConeGeometry(1.5, 3, 32);
const triangle1 = new THREE.Mesh(tGeometry, tMaterial);
triangle1.position.set(10, 4, 0);
parent1.add(triangle1);

//trunck of the tree
const trunckMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.4, 3);

const trunck = new THREE.Mesh(trunkGeometry, trunckMaterial);
trunck.position.set(10, 1.9, 0);
parent1.add(trunck);





function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
