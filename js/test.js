import * as THREE from '../node_modules/three/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from '../node_modules/three/examples/jsm/renderers/CSS2DRenderer.js'
import { RGB_PVRTC_2BPPV1_Format } from 'three';


const canvas = document.querySelector('#canvas');
const container = document.querySelector('.container')
const hover = document.querySelectorAll('i')
const arrowback = document.querySelector('.arrowback')
const home = document.querySelector('.home')
const contact = document.querySelector('.contact')
const services = document.querySelector('.services')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 9;

const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft global light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 80, 50);
pointLight.position.set(2.5, 5, 5);
pointLight.castShadow = true;
scene.add(pointLight);

// const background = new THREE.TextureLoader().load('/images/galaxy.jpg')
// scene.background = background


function music() {
    const backgroundMusic = new Audio('/audio/Atmosphere.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    backgroundMusic.play()
}



const menuCount = 11;  // Number of plates
const radius = 5;      // Radius of the circle
const speed = 0.001;    // Rotation speed

const texture = new THREE.TextureLoader().load('/images/rock.avif')

const menu3d = new Array(menuCount).fill().map((_, index) => {
    const object = new THREE.BoxGeometry(0.3, 2, 3)
    const material = new THREE.MeshPhysicalMaterial({
        color: 'white',
        metalness: 0.7,  // Higher for shininess
        roughness: 0.2,  // Lower for sharper reflections
        reflectivity: 1, // Enable reflections
        // envMap: envMap,  // Apply environment reflections
        clearcoat: 1,    // Extra glossy layer
        clearcoatRoughness: 0.1,
        side: THREE.DoubleSide
    });
    const plate = new THREE.Mesh(object, material);

    plate.castShadow = true;
    plate.receiveShadow = true;

    const object3d = new THREE.Object3D();
    object3d.add(plate);
    
    // Initial angle & position
    object3d.userData.angle = (index / menuCount) * Math.PI * 2;
    object3d.position.x = Math.cos(object3d.userData.angle) * radius;
    object3d.position.y = Math.sin(object3d.userData.angle) * radius;

    // Rotate to face center
    object3d.lookAt(0, 0, 0);
    scene.add(object3d);
    return object3d;
});

// const stars = new Array(1000).fill().map(() => {
//     const object = new THREE.SphereGeometry(1,10,5)
//     const material = new THREE.MeshPhysicalMaterial({color:'white'});
//     const star = new THREE.Mesh(object, material);
//     const object3d = new THREE.Object3D()
//     object3d.add(star)
//     star.position.x = (Math.random() - 0.5) * 1500
//     star.position.y = (Math.random() - 0.5) * 1000
//     star.position.z = (Math.random() - 1.5) * 500
//     scene.add(star);
//     return star
// });


// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableZoom = false
controls.enablePan = false
controls.enableRotate = false

let angle = 0

function rotate() {
    angle += 0.1
    container.style.transform = `rotate(${angle}deg)`
    requestAnimationFrame(rotate)
}

// rotate();

let animationEnabled = false

function toggleAnimation() {
    animationEnabled = true
}
function onanimate() {
    const Elemental = new Audio('/audio/Exploding.mp3')
    Elemental.volume = 0.1
    Elemental.play()
}
function animation(){
    toggleAnimation()
    music()
    onanimate()
    const interval = setInterval(function(){
        menu3d.forEach((object) => {
            object.userData.angle += speed + 0.030
            camera.position.x -= 0.006
            camera.position.y -= 0.006
            object.position.z -= 0.030
            object.rotation.z -= 0.006
        });
    },16)

    setTimeout(() => {
        clearInterval(interval)
        console.log("Animation stopped after 2 seconds.")
    }, 1000)
}

home.addEventListener('click', animation)
home.addEventListener('touchstart', animation)
contact.addEventListener('click', animation)
services.addEventListener('click', animation)
about.addEventListener('click', animation)
projects.addEventListener('click', animation)

function backanimation(){
    animationEnabled = false
    onanimate()
    const interval2 = setInterval(function(){
        menu3d.forEach((object) => {
            object.userData.angle -= speed + 0.030
            camera.position.x += 0.006
            camera.position.y += 0.006
            object.position.z += 0.030
        });
    },16)

    setTimeout(() => {
        clearInterval(interval2);
        console.log("Animation stopped after 2 seconds.")
    }, 1000);
    arrowback.removeEventListener('click', backanimation)
}
function click(){
    const clickSound = new Audio('/audio/Whoosh.mp3')
    clickSound.volume = 1
    clickSound.play()
}
home.addEventListener('click', () => {
    click()
    if (typeof animation === 'function' ) {
        arrowback.style.display = 'flex'
        container.style.transform = 'scale(0)'
        arrowback.addEventListener('click', backanimation)
    }
});
contact.addEventListener('click', () => {
    click()
    if (typeof animation === 'function' ) {
        arrowback.style.display = 'flex';
        container.style.transform = 'scale(0)'
        arrowback.addEventListener('click', backanimation)
    }
});
about.addEventListener('click', () => {
    click()
    if (typeof animation === 'function' ) {
        arrowback.style.display = 'flex';
        container.style.transform = 'scale(0)'
        arrowback.addEventListener('click', backanimation)
    }
});
services.addEventListener('click', () => {
    click()
    if (typeof animation === 'function' ) {
        arrowback.style.display = 'flex';
        container.style.transform = 'scale(0)'
        arrowback.addEventListener('click', backanimation)
    }
});
projects.addEventListener('click', () => {
    click()
    if (typeof animation === 'function' ) {
        arrowback.style.display = 'flex';
        container.style.transform = 'scale(0)'
        arrowback.addEventListener('click', backanimation)
    }
});

arrowback.addEventListener('click', ()=> {
    click()
    if(typeof backanimation === 'function'){
        arrowback.style.display = 'none';
        container.style.transform = 'scale(1)'
        home.addEventListener('click', animation);
        contact.addEventListener('click', animation)
    }
})

function resize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', resize)
window.addEventListener('orientationchange', resize)

const mobile = window.matchMedia("(max-width: 1024px)")
function updateControls() {
    if (mobile.matches) {
        // If it's a mobile screen
        controls.enableRotate = false; // Disable rotation on mobile
        controls.enableZoom = true;    // Enable pinch-to-zoom
        controls.enablePan = true;     // Enable panning for mobile (drag to move)
        controls.maxDistance = 500 // Set a maximum zoom-out distance for mobile
    } else {
        // If it's a desktop screen
        controls.enableRotate = false;  // Enable rotation for desktop
        controls.enableZoom = false;    // Enable zooming for desktop
        controls.enablePan = false;    // Disable panning on desktop
    }
}
// Call the function initially
updateControls();

// Add a listener to recheck when screen size changes
mobile.addEventListener('change', updateControls);


function animate() {
    requestAnimationFrame(animate)
    menu3d.forEach((object) => {
        if (animationEnabled) {
            object.userData.angle += speed
        } 
        else{
            object.userData.angle -= speed
        }

        // Circular motion
        object.position.x = Math.cos(object.userData.angle) * radius
        object.position.y = Math.sin(object.userData.angle) * radius

        // Keep objects facing center
        object.lookAt(0, 0, 0)
    })
    controls.update();
    renderer.render(scene, camera)
}
animate()






