import * as THREE from '../node_modules/three/build/three.module.min.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.127/examples/jsm/loaders/GLTFLoader.js'

function main(){
    const canvas = document.querySelector('#canvas');

    const fov = 50
    let aspect = canvas.clientWidth / canvas.clientHeight
    const near = 0.1
    const far = 2000
    
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    
    // const loader = new GLTFLoader()
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true}) 
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    let scene = new THREE.Scene()
    camera.position.set(0, 0, 3.5)
    
    let texture = new THREE.TextureLoader().load('/Textures/eye3.png')
    const backgroundTexture = new THREE.TextureLoader().load('/images/space.jpg')
    scene.background = backgroundTexture;

    const SphereGeometry = new THREE.SphereGeometry()
    const material = new THREE.MeshStandardMaterial({map : texture})
    const eye = new THREE.Mesh(SphereGeometry, material)
    
    const light = new THREE.HemisphereLight(0xb1becc, 0xffffff, 3)
    scene.add(light)
    
    const textureLoader = new THREE.TextureLoader();

    const textureFlare0 = textureLoader.load('/Textures/eye3.png');

    scene.add(eye)

    function rotation(event){
        let y = event.movementY * 0.01;
        let x = event.movementX * 0.01;
        eye.rotation.y += x;
        eye.rotation.x += y;

        if (eye.rotation.x >= 0.60) {
            eye.rotation.x = 0.60;
        } else if (eye.rotation.x <= 0.00) {
            eye.rotation.x = 0.00;
        }

        if (eye.rotation.y <= -2.1) {
            eye.rotation.y = -2.1;
        } else if (eye.rotation.y >= -1.1) {
            eye.rotation.y = -1.1;
        }
    }
    document.addEventListener('mousemove', rotation);
    
    window.addEventListener('load', () => {
        eye.rotation.set(0,-1.54,0)
    });

    function onWindowResize() {
        aspect = canvas.clientWidth / canvas.clientHeight
        camera.aspect = aspect
        camera.updateProjectionMatrix()
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    }
    
    window.addEventListener('resize', onWindowResize, false)
    
    onWindowResize();
    
    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    animate()
}
main()


