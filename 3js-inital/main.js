import * as THREE from 'three';
import './style.css'
import {OrbitControls} from'three/examples/jsm/controls/OrbitControls.js'

// scene

const scene = new THREE.Scene();

// create Sphere

const geometry = new THREE.SphereGeometry( 3,64,64 );
const material = new THREE.MeshStandardMaterial ({ color: '#00ff83'} );

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh)

// Light

// const light = new THREE.PointLight( 0xffffff, 1, 100 );

const light = new THREE.PointLight(0xffffcc, 2, 200);


light.position.set(0,10,4)
light.castShadow = true;
scene.add(light)

// size for viewport

const sizes = {
  width:window.innerWidth,
  height:window.innerHeight,
}

// Camera

const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,100);
camera.position.z =20
scene.add(camera)

// render the scene

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera)

const controls = new  OrbitControls(camera,canvas);


// loop

const loop = () =>{
renderer.render(scene,camera)
window.requestAnimationFrame(loop)
}
loop()