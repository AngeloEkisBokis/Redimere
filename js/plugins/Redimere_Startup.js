/*:
 * @target MZ
 * @plugindesc Redimere Startup System v0.1.0
 * @author Limones Studio
 *
 * @help
 * ============================================================================
 * Redimere Startup System
 * ============================================================================
 *
 * Exibe a logo do estúdio antes da tela de título.
 *
 * ============================================================================
 *
 * Estrutura esperada:
 *
 * img/system/LimonesStudio.png
 * audio/se/Gear.wav
 *
 * ============================================================================
 *
 * @param Logo Image
 * @text Logo
 * @type file
 * @dir img/system/
 * @default LimonesStudio
 *
 * @param Sound Effect
 * @text Som
 * @type file
 * @dir audio/se/
 * @default Gear
 *
 * @param Fade In
 * @type number
 * @default 60
 *
 * @param Hold Time
 * @type number
 * @default 180
 *
 * @param Fade Out
 * @type number
 * @default 60
 *
 * @param Volume
 * @type number
 * @default 90
 *
 * @param Pitch
 * @type number
 * @default 100
 *
 */

(() => {

"use strict";

const pluginName = "Redimere_Startup";

const params = PluginManager.parameters(pluginName);

const Config = {

    logo: String(params["Logo Image"] || "LimonesStudio"),

    sound: String(params["Sound Effect"] || "Gear"),

    fadeIn: Number(params["Fade In"] || 60),

    hold: Number(params["Hold Time"] || 180),

    fadeOut: Number(params["Fade Out"] || 60),

    volume: Number(params["Volume"] || 90),

    pitch: Number(params["Pitch"] || 100)

};

window.Redimere = window.Redimere || {};

Redimere.Startup = {};

Redimere.Startup.Version = "0.1.0";

Redimere.Startup.Config = Config;

Redimere.Startup.log = function(text){

    console.log("[Redimere Startup] " + text);

};

const StartupState = {

    FadeIn : 0,

    Wait : 1,

    FadeOut : 2,

    Finish : 3

};

})();
