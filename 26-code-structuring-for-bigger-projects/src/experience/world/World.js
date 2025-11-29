import Experience from '../Experience.js';
import Environment from './Environment.js';
import Floor from './Floor.js';
import EventEmitter from '../utils/EventEmitter.js';
import Fox from './Fox.js';

export default class World extends EventEmitter {
    constructor() {
        super();

        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            // Setup
            this.floor = new Floor();
            this.fox = new Fox();
            this.environment = new Environment();
        })
    }

    update() {
        if (this.fox) {
            this.fox.update();
        }
    }
}