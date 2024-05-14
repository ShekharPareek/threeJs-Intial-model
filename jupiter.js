import * as THREE from './path/to/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

let webGlFunction = () =>{
// Sizes for viewport
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Camera for gemoetry
// const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.01, 10);
// camera.position.z = 1;

// Camera for object loader
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 0, 5)

// const scene = new THREE.Scene();

// Hear we create or import an geometry

// const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// *****************************************

// Add the lights in the scene

const light = new THREE.PointLight(0xffffff, 50)
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

// rendering the scene into the canvas
const container = document.getElementById('container');
const canvas = document.querySelector('.webgl');
container.appendChild(canvas);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x1f2937);

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
 controls.enableDamping = true // for extra properties 
controls.target.set(0, 1, 0)

// Render loop
const loop = () => {
  renderer.render(scene, camera);
  controls.update();
  window.requestAnimationFrame(loop);
};
loop();
}



const Btn = document.getElementById('btn');
const btnCross = document.getElementById('crossBtn');
Btn.addEventListener('click',function(e){
  e.preventDefault();
  btnCross.style.display ="inline";
  webGlFunction ();
  
});

const crossBtn = document.getElementById('crossBtn');
crossBtn.addEventListener('click',function(){
  window.location.reload();
});



// Load FBX model
const loader = new FBXLoader();
const scene = new THREE.Scene();
loader.load('/assests/000.FBX', function (fbx) {
  fbx.scale.set(0.009,0.009,0.009); 
    scene.add(fbx);
}, undefined, function (error) {
    console.error(error);
});
