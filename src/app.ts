import * as PIXI from 'pixi.js'
import greenImage from "./green.png"
import { Application } from 'pixi.js'



const pixi = new PIXI.Application({width : 800, height:600, backgroundColor:0xFF0000})
const div = document.querySelector("#jadencontainer")!
console.log("add to")
console.log(div)
div.appendChild(pixi.view)


const green = PIXI.Sprite.from(greenImage)

green.anchor.set(0.5);

green.scale.set(0.3);

green.x = 400;
green.y = 300;

pixi.stage.addChild(green);

