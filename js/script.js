console.log('Hello wolrd');

/**
 * Création de la scène et de la caméra principal.
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

/**
 * Création du renderer (canvas) qui rend tous nos objets.
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/**
 * Création du sol
 */

const plane_geometry = new THREE.PlaneGeometry( 5, 20, 32 );
const plane_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( plane_geometry, plane_material );

scene.add( plane );
/**
 *  Création d'un cube
 */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


/**
 * Contrôle de la caméra 
 */
const controls = new THREE.OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {
    requestAnimationFrame(animate);

/**
 * Animations
 */
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();