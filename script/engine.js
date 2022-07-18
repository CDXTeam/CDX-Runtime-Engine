// Variable def
 
const cdx = {}
cdx.local = {}
cdx.global = {}
cdx.input = {}
cdx.object = {}
cdx.scene = {}

// network shit
cdx.network.p2p = {}
cdx.network.http = {}
cdx.network.ws = {}

cdx.scene.goto = function (scene) { 
  runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, scene)
}
// scene variables

cdx.local.setvar = function (variable, value) {
  runtimeScene.getVariables().get(variable).setString(value);
}
cdx.local.getvar = function gvar(variable) {
  return runtimeScene.getVariables().get(variable).getAsString();
}

// global variables

cdx.global.setvar = function cgvar(variable, value) {
  runtimeScene.getGame.getVariables().get(variable).setString(value);
}
cdx.global.getvar = function ggvar(variable) {
  return runtimeScene.getGame.getVariables().get(variable).getAsString();
}

// object
cdx.object.colision = function (ob1, ob2) {
  try {
    const a1 = runtimeScene.getObjects(ob1)[0]
    const a2 = runtimeScene.getObjects(ob2)[0]
    return gdjs.RuntimeObject.collisionTest(a1, a2, false);
  }catch(e){
    return false
  }
}

cdx.object.touching = function (obj) {
  try {
    const obja = runtimeScene.getObjects(obj)[0]
    return obja.cursorOnObject(runtimeScene)
  }catch(e){
    return e
  }
}


cdx.object.create = function (name, sprite, x, y) {
  // creates object instance
  
  var object = runtimeScene.createObject(name)
  object.setX(x)
  object.setY(y)
  
  // by default
  var object = name
  var anim = 0
  var url = sprite
  
  // loads new external function to loader
  // image loader
  var a = {}
  a.load = function (loader, resources) { 
    
    // load sprite into resources from object
    var mySprite = resources[object];
    
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
  PIXI.Loader.shared.add(object, url);
  PIXI.Loader.shared.load(a.load);
  
}


cdx.object.move = function (obj, x, y){
  for(const object of runtimeScene.getObjects(obj)) {
    object.setPosition(x, y)
  }
}

cdx.object.permf = function (obj, forcex, forcey, pps){
  for(const object of runtimeScene.getObjects(obj)) {
    object.addForce(forcex, forcey, pps)
  }
}

cdx.object.del = function(obj) { 
  for(const object of runtimeScene.getObjects(obj)) {
    object.deleteFromScene(runtimeScene)
  }
}
cdx.object.getx = function(obj){
  for(const object of runtimeScene.getObjects(obj)) {
    return parseInt(object.getX())
  }
}

cdx.object.gety = function(obj){
  for(const object of runtimeScene.getObjects(obj)) {
    return parseInt(object.getY())
  }
}

// user input (keycodes: http://gcctech.org/csc/javascript/javascript_keycodes.htm)
cdx.input.keycode = function (key) {
  return gdjs.evtTools.input.isKeyPressed(runtimeScene, key)
}

// Mouse Buttons Are: Left, Right, Middle
cdx.input.mouse = function (mousebutton) {
  return gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, mousebutton)
}
// p2p func

cdx.network.p2p.server = {}
cdx.network.p2p.client = {}
cdx.network.p2p.data = {}

cdx.network.p2p.server.connect = function (host, port, path, key, ssl) {
  var chknum = isNaN(port)
  if (chknum == false && typeof ssl == "boolean") {
    gdjs.evtTools.p2p.useCustomBrokerServer(host, port, path, key, ssl)
  }
}

cdx.network.p2p.client.connect = function (id) {
  gdjs.evtTools.p2p.connect(id)
}

cdx.network.p2p.client.getid = function () {
  return gdjs.evtTools.p2p.getCurrentId();
}

cdx.network.p2p.client.sendall = function (name, data) {
  gdjs.evtTools.p2p.sendDataToAll(name, data)
}

cdx.network.p2p.client.sendtoid = function (id, name, data) {
  gdjs.evtTools.p2p.sendDataTo(id, name, data)
}

cdx.network.p2p.client.setid = function (id) {
  gdjs.evtTools.p2p.overrideId(id)
}

// these require loops.

cdx.network.p2p.data.get = function (name) {
  return gdjs.evtTools.p2p.getEventData(name)
}

cdx.network.p2p.data.geterror = function (variable) { 
  return gdjs.evtTools.p2p.getLastError()
}

// HTTP Requests
cdx.network.http.load = {}
cdx.network.http.send = {}
cdx.network.http.send.request = function(url, method, body = "") { 
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, false)
    xhr.send([body])
    return xhr.responseText
}
cdx.network.http.load.song = function(url, channel, vol, pitch){
  var sound_manager = runtimeScene.getGame().getSoundManager(); 
  sound_manager.playSoundOnChannel(url, channel, false, vol, pitch); 
}

// Websockets
cdx.network.ws.server = {}
cdx.network.ws.client = {}
cdx.network.ws.server.connect = function (url, method = "") {
  window.socket = new WebSocket(url, method);
}

cdx.network.ws.client.onopen = function (texttodosomethin) { 
  Function(texttodosomethin)
  return
}

cdx.network.ws.client.onmessage = function (text) {
  Funtion(text)
  return
}

cdx.network.ws.client.storemessagevariable = function (variable) {
  return window.socket.onmessage = function (event) {
    return event.data
  }
} 

cdx.network.ws.client.send = function (message) {
  window.socket.send(message)
}

cdx.network.ws.server.close = function () {
  window.socket.close()
}
// as always, code goes below this line!!!
