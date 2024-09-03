import * as THREE from 'three'

import Model from "./Model.js"
import {scene, meshes} from "./main.js"

export function addModels() {
	const walls = new Model({
		name: 'walls',
		url: './meshes/walls.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	walls.init()

	const bed = new Model({
		name: 'bed',
		url: './meshes/bed.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	bed.init()

	const contact = new Model({
		name: 'contact',
		url: './meshes/contactjoinednamed.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	contact.init()

	const wip = new Model({
		name: 'wip',
		url: './meshes/wipnamedjoined.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	wip.init()

	const portfolio = new Model({
		name: 'portfolio',
		url: './meshes/portfoliojoinednamed.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	portfolio.init()

	const largeobjects = new Model({
		name: 'largeobjects',
		url: './meshes/large-objects.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	largeobjects.init()

	const books = new Model({
		name: 'books',
		url: './meshes/books.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	books.init()

	const bigplant = new Model({
		name: 'bigplant',
		url: './meshes/big-plant.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	bigplant.init()

	const extras = new Model({
		name: 'extras',
		url: './meshes/extras.glb',
		scene: scene,
		meshes: meshes,
		position: new THREE.Vector3(-1, -1, -1),
	})
	extras.init()
}
