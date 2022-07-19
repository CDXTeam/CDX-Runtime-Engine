// Variable def
 
const scene = {}
const global = {}
const input = {}
const object = {}

/** 
 * Changes Scene
 * @param {string} scene - The title of the scene.
*/
scene.goto = function (scene) { 
  /** @suppress {missingProperties} */
  runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, scene)
}

/**
 * Sets Scene Variable Value to what is defined in second param
 * @param {string} variable - The name of the Variable.
 * @param {string} value - The Data The Variable Should Contain
*/
scene.setvar = function (variable, value) {
  runtimeScene.getVariables().get(variable).setString(value);
}

/**
 * Returns Scene Variable Value
 * @param {string} variable - The name of the Variable.
*/
scene.getvar = function gvar(variable) {
  return runtimeScene.getVariables().get(variable).getAsString();
}

/**
 * Sets Global Variable Value to what is defined in second param
 * @param {string} variable - The name of the Variable.
 * @param {string} value - The Data The Variable Should Contain
*/
global.setvar = function cgvar(variable, value) {
  runtimeScene.getGame.getVariables().get(variable).setString(value);
}

/**
 * Returns Global Variable Value
 * @param {string} variable - The name of the Variable.
*/
global.getvar = function ggvar(variable) {
  return runtimeScene.getGame.getVariables().get(variable).getAsString();
}

/**
 * Checks For Colision Between 2 Objects
 * @param {string} object - The name of the first object.
 * @param {string} object2 - The name of the second object.
 * @return {boolean} true if objects are coliding, false if not.
*/
object.colision = function (object, object2) {
  try {
    const a1 = runtimeScene.getObjects(object)[0]
    const a2 = runtimeScene.getObjects(object2)[0]
    return gdjs.RuntimeObject.collisionTest(a1, a2, false);
  }catch(e){
    return false
  }
}
/**
 * Checks if Mouse / Touch is touching object.
 * @param {string} object - The name of the object.
 * @return {boolean} true if mouse is touching object, false if not.
*/
object.touching = function (obj) {
  try {
    const obja = runtimeScene.getObjects(obj)[0]
    return obja.cursorOnObject(runtimeScene)
  }catch(e){
    return e
  }
}

/**
 * Creates a Object, Do note that the object in question (sprite) has to exist.
 * @param {string} name - The name of the object.
 * @param {string} sprite - The url (or data uri) of the sprite image.
 * @param {number} x - x position of object.
 * @param {number} y - y position of object.
*/
object.create = function (name, sprite, x, y) {
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

/**
 * Moves a Object, object has to exist in order to move.
 * @param {string} obj - The name of the object.
 * @param {number} x - x position where the object should be set.
 * @param {number} y - y position where the object should be set.
*/
object.move = function (obj, x, y){
  for(const object of runtimeScene.getObjects(obj)) {
    object.setPosition(x, y)
  }
}
/**
 * Adds Permanent Force to a Object.
 * @param {string} obj - The name of the object.
 * @param {number} forcex - how much force should be applied to the object in the x Direction
 * @param {number} forcey - how much force should be applied to the object in the y Direction
 * @param {number} pps - how fast a object should move in pixels per second
*/
object.permf = function (obj, forcex, forcey, pps){
  for(const object of runtimeScene.getObjects(obj)) {
    object.addForce(forcex, forcey, pps)
  }
}

/**
 * Deletes Object (none of this runtimescene shiz arthuro555)
 * @param {string} obj - The name of the object.
*/
object.del = function(obj) { 
  for(const object of runtimeScene.getObjects(obj)) {
    object.deleteFromScene(runtimeScene)
  }
}
/**
 * Gets Object X Position
 * @param {string} obj - The name of the object.
 * @return {number} X Position of Object
*/
object.getx = function(obj){
  for(const object of runtimeScene.getObjects(obj)) {
    return parseInt(object.getX())
  }
}
/**
 * Gets Object Y Position
 * @param {string} obj - The name of the object.
 * @return {number} Y Position of Object
*/
object.gety = function(obj){
  for(const object of runtimeScene.getObjects(obj)) {
    return parseInt(object.getY())
  }
}

/**
 * Checks if Key (defined in keycodes) Is Pressed
 * @param {string} key - The Number of the Key (yes it has to be a string.)
 * @return {boolean} true if is pressed, false if not pressed
*/
input.keycode = function (key) {
  return gdjs.evtTools.input.isKeyPressed(runtimeScene, key)
}
/**
 * Checks if Mouse Button is Pressed, The Buttons Avalible Are: Left, Right, Middle, Left can also be used for is touchscreen pressed
 * @param {string} mousebutton - The Name of the Key
 * @return {boolean} true if is pressed, false if not pressed
*/
input.mouse = function (mousebutton) {
  return gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, mousebutton)
}

const network = {}
p2p = {}
p2p.server = {}
p2p.client = {}
p2p.data = {}

/**
 * Connects To PeerJS Server.
 * @param {string} host - The Host URL of The Server
 * @param {number} port - Port of Server (Usually 9000)
 * @param {string} path - Path for PeerJS Connections
 * @param {string} key - Key for PeerJS Server
 * @param {boolean} ssl - Is SSL Enabled?
*/
p2p.server.connect = function (host, port, path, key, ssl) {
  var chknum = isNaN(port)
  if (chknum == false && typeof ssl == "boolean") {
    gdjs.evtTools.p2p.useCustomBrokerServer(host, port, path, key, ssl)
  }
}

/**
 * Connects To P2P Client.
 * @param {string} id - The Client ID
*/
p2p.client.connect = function (id) {
  gdjs.evtTools.p2p.connect(id)
}

/**
 * It just returns the P2P ID
 * @return {string} P2P ID
*/
p2p.client.getid = function () {
  return gdjs.evtTools.p2p.getCurrentId();
}

/**
 * Sends Event To All Connected Clients.
 * @param {string} name - Name Of Event
 * @param {string} data - Data that Event contains (optional)
*/
p2p.client.sendall = function (name, data = "") {
  gdjs.evtTools.p2p.sendDataToAll(name, data)
}

/**
 * Sends Event To Specified Client
 * @param {string} id - Client ID That Should Recieve The Event.
 * @param {string} name - Name Of Event
 * @param {string} data - Data that Event contains (optional)
*/
p2p.client.sendtoid = function (id, name, data = "") {
  gdjs.evtTools.p2p.sendDataTo(id, name, data)
}

/**
 * Sets P2P Client ID, do this before connecting into any server.
 * @param {string} id - The Client ID That should be set.
*/
p2p.client.setid = function (id) {
  gdjs.evtTools.p2p.overrideId(id)
}

// these require loops.
/**
 * Returns Data From Event
 * @param {string} name - Event Name
 * @return {string} Event Data
*/
p2p.data.get = function (name) {
  return gdjs.evtTools.p2p.getEventData(name)
}

/**
 * Returns Last Error
 * @return {string} Last Error Data
*/
p2p.data.geterror = function () { 
  return gdjs.evtTools.p2p.getLastError()
}

// HTTP Requests
http = {}
http.load = {}
http.send = {}

/**
 * Sends HTTP (or HTTPS) Request To Server / API
 * @param {string} url - URL of Server / API
 * @param {string} method - Method for Request (ex. GET, POST), optional
 * @param {string} body - http body (optional)
 * @return {string} Response
*/
http.send.request = function(url, method = "GET", body = "") { 
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, false)
    xhr.send([body])
    return xhr.responseText
}

/**
 * Does a Beatshape and loads a song from a url
 * @param {string} url - URL of song file (song.mp3 for example)
 * @param {number} channel - Channel Song Should Be Played on (optional, plays on channel 0)
 * @param {number} vol - Volume Song should be played on (optional, default 100)
 * @param {number} vol - Pitch (or speed) Song should be played on (optional, default 100)
*/
http.load.song = function(url, channel = 0, vol = 100, pitch = 1){
  var sound_manager = runtimeScene.getGame().getSoundManager(); 
  sound_manager.playSoundOnChannel(url, channel, false, vol, pitch); 
}

// Websockets
ws = {}
ws.server = {}
ws.client = {}

/**
 * Connects to Websocket Server
 * @param {string} url - Websocket Server URL (must contain either ws:// or wss://)
 * @param {string} method - Websocket Method (i am as clueless as you are.)
*/
ws.server.connect = function (url, method = "") {
  window.socket = new WebSocket(url, method);
}

/**
 * Does a Function or JS Code When You Connect to The Server
 * @param {string} text - thing to do
*/
ws.client.onopen = function (text) { 
  Function(text)
  return
}

/**
 * Does a Function or JS Code When a message is broadcasted.
 * @param {string} text - thing to do
*/
ws.client.onmessage = function (text) {
  Funtion(text)
  return
}

/**
 * returns message when a message is broadcasted
 * @return {string} Message Data
*/
ws.client.getmessage = function () {
  return window.socket.onmessage = function (event) {
    return event.data
  }
} 
/**
 * Sends Message
 * @param {string} message - message to send
*/
ws.client.send = function (message) {
  window.socket.send(message)
}
/**
 * Closes Websocket Connection.
*/
ws.server.close = function () {
  window.socket.close()
}
// as always, code goes below this line!!!
