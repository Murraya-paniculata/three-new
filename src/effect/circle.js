import { Cylinder } from "./cylinder"
import { color } from '../config/index'

export class Circle {
    constructor(scene, time) {
        this.config = {
            radius: 50,
            height: 1,
            open: false,
            color: color.circle,
            opacity: 0.6,
            position: {
                x: 300,
                y: 0,
                z: 300
            },
            speed: 2.0,
        }

        this.circle = new Cylinder(scene, time)
        this.circle.createCylinder(this.config);
    }
    remove() {
        this.circle.remove()
    }
}