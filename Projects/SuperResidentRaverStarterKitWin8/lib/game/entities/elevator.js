﻿/**
 *  @elevator.js
 *  @version: 1.00
 *  @author: Jesse Freeman
 *  @date: May 2013
 *  @copyright (c) 2013 Jesse Freeman, under The MIT License (see LICENSE)
 *  
 *  Part of the Super Resident Raver Starter Kit: 
 */
ig.module(
    'game.entities.elevator'
)
    .requires(
    'bootstrap.entities.base-elevator'

)
    .defines(function () {

        EntityElevatorPlatform.inject({
            speed: 100,
            size: { x: 160, y: 25 },
            maxVel: { x: 500, y: 500 },
            debug: false,
        })

        EntityElevator = EntityBaseElevator.extend({
            _wmIgnore: false,
            size: { x: 160, y: 170 },
            offset: { x: 20, y: 65 },
            speed: 100,
            topOffset: -25,
            pasue: false,
            init: function (x, y, settings) {
                this.parent(x, y, settings);

                var atlas = ig.entitiesTextureAtlas;
                this.addTextureAtlasAnim(atlas, 'idle', 1, ['elevator-00.png']);
                this.addTextureAtlasAnim(atlas, 'down', 1, ['elevator-01.png']);
                this.addTextureAtlasAnim(atlas, 'up', 1, ['elevator-02.png']);
            },
            update: function () {

                if (this.pasue)
                    return;

                this.parent();

                if (this.angle < 0)
                    this.currentAnim = this.anims.up;
                else if (this.angle > 0)
                    this.currentAnim = this.anims.down;
                else
                    this.currentAnim = this.anims.idle;
            }
        })

    })