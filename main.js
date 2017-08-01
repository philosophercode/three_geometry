console.log('main.js ~connected~');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( Math.random()*1, Math.random()*1, Math.random()*1 );
var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


geometry = new THREE.TorusKnotGeometry( 12, 2, 100, 200, 8, 90 );

var torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z = 50;

function cameraP() {
    camera.position.z = Math.round(Math.random()*1000);
    
}

function ranHue() {
    return Math.round(Math.random()*100)
}


function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 1;
    cube.rotation.y += 1;
    torusKnot.rotation.x -= 0.1;
    torusKnot.rotation.y -= 0.1;

    // cube.geometry = new THREE.BoxGeometry( Math.random()*1, Math.random()*1, Math.random()*1 );

    // let hue = `rgb(${Math.round(Math.random()*100)}%, ${Math.round(Math.random()*100)}%, ${Math.round(Math.random()*100)}%)`;
    // console.log(hue);

    cube.material = new THREE.MeshBasicMaterial( { color: `rgb(${ranHue()}, ${ranHue()}, ${ranHue()})` } );
    torusKnot.material = new THREE.MeshBasicMaterial( { color: `rgb(${ranHue()}, ${ranHue()}, 0)` } );
    //cameraP();
    renderer.render( scene, camera );
    // window.setTimeout(callback, 1000^10);
}
animate();