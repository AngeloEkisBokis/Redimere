/*:
 * @target MZ
 * @plugindesc Redimere Framework v0.1.0
 * @author Limones Studio
 * @url https://github.com/AngeloEkisBokis/Redimere
 *
 * @help
 * ============================================================================
 * Redimere Framework
 * ============================================================================
 *
 * Framework base utilizado por todos os plugins do projeto Redimere.
 *
 * Este plugin deve permanecer SEMPRE acima dos demais plugins
 * Redimere no Plugin Manager.
 *
 */

(() => {

"use strict";

//==========================================================================
// Namespace
//==========================================================================

window.Redimere = window.Redimere || {};

const RDM = window.Redimere;

//==========================================================================
// Version
//==========================================================================

RDM.version = "0.1.0";

//==========================================================================
// Plugin Registry
//==========================================================================

RDM.plugins = {};

//==========================================================================
// Logger
//==========================================================================

RDM.log = function(message){

    console.log("[Redimere] " + message);

};

//==========================================================================
// Error
//==========================================================================

RDM.error = function(message){

    console.error("[Redimere] " + message);

};

//==========================================================================
// Register Plugin
//==========================================================================

RDM.registerPlugin = function(name, version){

    this.plugins[name] = {

        version: version

    };

    this.log(name + " v" + version + " carregado.");

};

//==========================================================================
// Utils
//==========================================================================

RDM.utils = {};

RDM.utils.clamp = function(value, min, max){

    return Math.max(min, Math.min(max, value));

};

RDM.utils.lerp = function(start, end, amount){

    return start + (end - start) * amount;

};

RDM.utils.centerX = function(sprite){

    sprite.x = Graphics.width / 2;

};

RDM.utils.centerY = function(sprite){

    sprite.y = Graphics.height / 2;

};

RDM.utils.center = function(sprite){

    this.centerX(sprite);

    this.centerY(sprite);

};

//==========================================================================
// Startup
//==========================================================================

//==========================================================================
// Core
//==========================================================================

RDM.Core = {};

RDM.Core.name = "Redimere Framework";

RDM.Core.author = "Limones Studio";

RDM.Core.version = RDM.version;

//==========================================================================
// Audio
//==========================================================================

RDM.Audio = {};

RDM.Audio.playSE = function(name, volume = 90, pitch = 100, pan = 0){

    AudioManager.playSe({

        name: name,

        volume: volume,

        pitch: pitch,

        pan: pan

    });

};

RDM.Audio.playBGM = function(name, volume = 90, pitch = 100, pan = 0){

    AudioManager.playBgm({

        name: name,

        volume: volume,

        pitch: pitch,

        pan: pan

    });

};

//==========================================================================
// Scene
//==========================================================================

RDM.Scene = {};

RDM.Scene.goto = function(scene){

    SceneManager.goto(scene);

};

//==========================================================================
// Screen
//==========================================================================

RDM.Screen = {};

RDM.Screen.fadeOut = function(duration = 30){

    if(SceneManager._scene){

        SceneManager._scene.startFadeOut(duration,false);

    }

};

RDM.Screen.fadeIn = function(duration = 30){

    if(SceneManager._scene){

        SceneManager._scene.startFadeIn(duration,false);

    }

};

//==========================================================================
// Banner
//==========================================================================

console.log(
"%c========================================",
"color:#66ffcc;"
);

console.log(
"%c REDIMERE FRAMEWORK " + RDM.version,
"color:#66ffcc;font-weight:bold;"
);

console.log(
"%c Limones Studio",
"color:white;"
);

console.log(
"%c========================================",
"color:#66ffcc;"
);

RDM.log("Framework inicializado.");

})();

