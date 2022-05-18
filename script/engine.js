// Variable def
const cdx = {}

// scene variables

cdx.setvar = function (variable, value) {
  runtimeScene.getVariables().get(v).setString(val);
}
cdx.getvar = function gvar(variable) {
  return runtimeScene.getVariables().get(v).getAsString();
}

// global variables

cdx.global.setvar = function cgvar(variable, value) {
  runtimeScene.getGame.getVariables().get(v).setString(val);
}
cdx.global.getvar = function ggvar(variable) {
  return runtimeScene.getGame.getVariables().get(v).getAsString();
}

// object

cdx.object.create = function (name, sprite, x, y) {
  // creates object instance
  
  var object = RuntimeScene.createObject(name)
  object.setX(x)
  object.setY(y)
  
  // by default
  var object = name
  var anim = 0
  var url = sprite
  
  // loads new external function to loader
  // image loader
  
  cdx.image.load = function (loader, resources) { 
    
    // load sprite into resources from object
    var mySprite= resources[name];
    
    //Get Game
    var game = runtimeScene.getGame();
    
    // get object
    var object_texture_image = runtimeScene.getObjects(object);
    
    // get object renderer.
    var object_texture_image_renderer = object_texture_image[anim].getRendererObject();
    
    // add image to object renderer.
    object_texture_image_renderer.texture = mySprite.texture;
    
  }
  
  // loads the image into pixi, and it does its thing.
  PIXI.Loader.shared.reset(); 
  PIXI.Loader.shared.add(name, url);
  PIXI.Loader.shared.load(cdx.image.load);
  
}


cdx.object.position = function (obj, x, y){
  const object = RuntimeScene.getObjects(obj);
  object.setX(x);
  object.setY(y)
}

// user input (keycodes: http://gcctech.org/csc/javascript/javascript_keycodes.htm)
cdx.input.keycode = function (keycode) {
  return gdjs.InputManager.isKeyPressed(keycode)
}

// p2p func
const p2p = {}

p2p.connect.server = function (host, port, path, key, ssl) {
  var chknum = isNaN(port)
  if (chknum == false && typeof ssl == "boolean") {
    gdjs.evtTools.p2p.useCustomBrokerServer(host, port, path, key, ssl)
  }
}

p2p.client.connect = function (id) {
  gdjs.evtTools.p2p.connect(id)
}

p2p.client.getid = function () {
  return gdjs.evtTools.p2p.getCurrentId();
}

p2p.client.sendall = function (name, data) {
  gdjs.evtTools.p2p.sendDataToAll(name, data)
}

p2p.client.sendtoid = function (id, name, data) {
  gdjs.evtTools.p2p.sendDataTo(id, name, data)
}

p2p.client.setid = function (id) {
  gdjs.evtTools.p2p.overrideId(id)
}

// these require loops.

p2p.data.get = function (name) {
  gdjs.evtTools.p2p.getEventData(name)
}

p2p.data.geterror = function (variable) { 
    runtimeScene.getVariables().get(variable).setString(gdjs.evtTools.p2p.getLastError());
}
