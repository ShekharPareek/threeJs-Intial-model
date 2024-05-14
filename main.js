

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// // Scene
// const scene = new THREE.Scene();

// // Create Sphere
// // const geometry = new THREE.SphereGeometry(3, 64, 64);
// // const geometry = new THREE.BoxGeometry(5, 1, 5);
// var geometry1 = new THREE.BoxBufferGeometry(1, 1, 1);
// var geometry2 = new THREE.SphereBufferGeometry(0.5, 32, 32);

// let  mergedGeometry = new THREE.BufferGeometry();
// mergedGeometry.merge(geometry1,0);
// mergedGeometry.merge(geometry2,1);

// const material = new THREE.MeshPhongMaterial({color: 'orange'});
// const mesh = new THREE.Mesh(mergedGeometry, material);
// scene.add(mesh);

// // Light
// const light = new THREE.HemisphereLight('#FFFFFF', '#757575', 1.7);
// // light.position.set(0, 10, 4);
// // light.castShadow = true;
// scene.add(light);

// // Sizes for viewport
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;
// scene.add(camera);

// // Render the scene
// const canvas = document.querySelector('.webgl');
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(sizes.width, sizes.height);

// // Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Loop
// const loop = () => {
//   renderer.render(scene, camera);
//   controls.update(); // Update controls in the loop
//   window.requestAnimationFrame(loop);
// };
// loop();