// Variable def

// scene variables

function cvar(v, val) {
  runtimeScene.getVariables().get(v).setString(val);
}
function gvar(v) {
  return runtimeScene.getVariables().get(v).getAsString();
}

// global variables

function cgvar(v, val) {
  runtimeScene.getGame.getVariables().get(v).setString(val);
}
function ggvar(v) {
  return runtimeScene.getGame.getVariables().get(v).getAsString();
}

// object
function addobj(name, sprite) {
  var object = name;var anim = 0;var url = sprite
  runtimeScene.myCallback = function(loader, resources){ var mySprite= resources[name];var game = runtimeScene.getGame();var object_texture_image = runtimeScene.getObjects(object);var object_texture_image_renderer = object_texture_image[anim].getRendererObject();object_texture_image_renderer.texture = mySprite.texture;};PIXI.Loader.shared.reset(); 
PIXI.Loader.shared.add(name, url);
PIXI.Loader.shared.load(runtimeScene.myCallback);
}

function crobj(obj, posx, posy) {
  var object = RuntimeScene.createObject(obj)
  object.setX(posx)
  object.setY(posy)
}

function objpos(obj, posx, posy){
  const object = RuntimeScene.getObjects(obj);
  object.setX(posx);
  object.setY(posy)
}

// user input (keycodes: http://gcctech.org/csc/javascript/javascript_keycodes.htm)
function sinp(keycode) {
  return gdjs.InputManager.isKeyPressed(keycode)
}

// p2p func
const p2p = {}

p2p.connectserv = function (host, port, path, key, ssl) {
  var chknum = isNaN(port)
  if (chknum == false && typeof ssl == "boolean") {
    gdjs.evtTools.p2p.useCustomBrokerServer(host)
  }
}

p2p.connectcli = function (id) {
  gdjs.evtTools.p2p.connect(id)
}

p2p.getcurid = function () {
  return gdjs.evtTools.p2p.getCurrentId();
}

p2p.sendall = function (name, data) {
  gdjs.evtTools.p2p.sendDataToAll(name, data)
}

p2p.sendtoid = function (id, name, data) {
  gdjs.evtTools.p2p.sendDataTo(id, name, data)
}

p2p.id = function (id) {
  gdjs.evtTools.p2p.overrideId(id)
}

// these require loops.

p2p.getdata = function (name) {
  gdjs.evtTools.p2p.getEventData(name)
}

p2p.geterror = function (stvar) { 
    runtimeScene.getVariables().get(stvar).setString(gdjs.evtTools.p2p.getLastError());
}
