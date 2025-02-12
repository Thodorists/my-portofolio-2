import * as THREE from '../node_modules/three/build/three.module.min.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
    
const canvas = document.querySelector('#canvas');
const container = document.querySelector('.container')
const about = document.querySelector('.about')
const about2 = document.querySelector('.about2')
const about3 = document.querySelector('.about3')
const about4 = document.querySelector('.about4')

const fov = 50
let aspect = canvas.clientWidth / canvas.clientHeight
const near = 0.1
const far = 2000
    
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true}) 
renderer.setSize(canvas.clientWidth, canvas.clientHeight)
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    aspect = canvas.clientWidth / canvas.clientHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}
let scene = new THREE.Scene()
camera.position.set(0, 0, 7)

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

const sphere = new THREE.ConeGeometry(5,20,32); 
const material = new THREE.MeshStandardMaterial({color: 'purple'})
const ball = new THREE.Mesh(sphere, material)


const wire = new THREE.ConeGeometry(5, 19.9, 32);  
const wirematerial = new THREE.MeshStandardMaterial({color:'white', wireframe: true})
const wire2 = new THREE.Mesh(wire, wirematerial)
wire2.scale.setScalar(1.0001)
ball.add(wire2)

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

const light = new THREE.HemisphereLight(0xb1becc, 0xffffff, 3)
scene.add(light)
scene.add(ball)
ball.scale.set(0.06,0.03,0.06)
ball.position.set(0,2.75,0)
ball.rotation.set(3.5,0,0)
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
let isMouseOverAbout = false;
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
about.addEventListener('mouseover', function(){
    ball.position.y = -(canvasHeight / canvasWidth) - about.clientHeight / 200 + 4;
    ball.position.x = -(canvasWidth / canvasHeight) - about.clientWidth / 190
    ball.rotation.set(3.5,0,-1)
    isMouseOverAbout = true;
})
about.addEventListener('mouseout', function(){
    ball.position.set(0,2.75,0)
    ball.rotation.set(3.5,0,0)
    isMouseOverAbout = false;
})
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
about2.addEventListener('mouseover', function(){
    ball.position.y = -(canvasHeight / canvasWidth) - about.clientHeight / 200 + 4;
    ball.position.x = +(canvasWidth / canvasHeight) + about.clientWidth / 175
    ball.rotation.set(3.5,0,1)
    isMouseOverAbout = true;
})
about2.addEventListener('mouseout', function(){
    ball.position.set(0,2.75,0)
    ball.rotation.set(3.5,0,0)
    isMouseOverAbout = false;
})
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
about3.addEventListener('mouseover', function(){
    ball.position.y = -(canvasHeight / canvasWidth) - about.clientHeight / 200 + 1.3;
    ball.position.x = -(canvasWidth / canvasHeight) - about.clientWidth / 190
    ball.rotation.set(3.5,0,-1)
    isMouseOverAbout = true;
})
about3.addEventListener('mouseout', function(){
    ball.position.set(0,2.75,0)
    ball.rotation.set(3.5,0,0)
    isMouseOverAbout = false;
})
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
about4.addEventListener('mouseover', function(){
    ball.position.y = -(canvasHeight / canvasWidth) - about.clientHeight / 200 + 1.3;
    ball.position.x = +(canvasWidth / canvasHeight) + about.clientWidth / 175
    ball.rotation.set(3.5,0,1)
    isMouseOverAbout = true;
})

about4.addEventListener('mouseout', function(){
    ball.position.set(0,2.75,0)
    ball.rotation.set(3.5,0,0)
    isMouseOverAbout = false;
})
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
ball.position.z = 0


function animate() {
    requestAnimationFrame(animate);

    if (!isMouseOverAbout) {
        ball.rotation.y += -0.01;
        ball.position.y += Math.sin(Date.now() * 0.009) * 0.003;
    }
    else{
        ball.position.x += Math.sin(Date.now() * 0.01) * 0.003;
    }
    renderer.render(scene, camera);
}
animate()