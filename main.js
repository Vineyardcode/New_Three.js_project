import * as THREE from 'three';
import {
  scene,
  camera,
  renderer,
  controls,
  ambientLight,
  directionalLight,
  events,
} from "./renderer.js";

init();

function init() {
  const geometry = new THREE.BoxGeometry( 5, 5, 5 );
  const material = new THREE.MeshBasicMaterial( { transparent: true } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.x = 0;
  mesh.position.y = 0;
  mesh.position.z = 0;

  scene.add( mesh );
}
