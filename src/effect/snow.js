import * as Three from 'three'
import { Points } from './points'

export class Snow{
  constructor(scene) {

    this.points = new Points(scene, {
      size: 30,
      opacity: 0.8,
      range: 1000,
      count: 600,
      setAnimation(position) {
        position.x -= position.speedX;
        position.y -= position.speedY;
        position.z -= position.speedZ;

        if (position.y <= 0) {
          position.y = this.range / 2;
        }
      },
      setPosition(position) {
        position.speedX = Math.random() - 0.5;
        position.speedY = Math.random() + 4;
        position.speedZ = Math.random() - 0.5;
      },
      url: '/three-new/assets/snow.png',
    })
    this.scene = scene;
  }

  remove() {
    if(this.points) this.points.remove();
  }

  animation() {
    this.points.animation();
  }
}
