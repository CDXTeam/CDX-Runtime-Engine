const scene={},global={},input={},object={},sprite={},text={};scene.goto=function(a){runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE,a)},scene.changecolor=function(a,c,d){runtimeScene.setBackgroundColor(a,c,d)},scene.setvar=function(a,b){runtimeScene.getVariables().get(a).setString(b)},scene.getvar=function(a){return runtimeScene.getVariables().get(a).getAsString()},scene.once=function(){window.once=!0},scene.clearonce=function(){window.once=!1},global.setvar=function(a,b){runtimeScene.getGame.getVariables().get(a).setString(b)},global.getvar=function(a){return runtimeScene.getGame.getVariables().get(a).getAsString()},object.colision=function(a,b){try{const c=runtimeScene.getObjects(a)[0],d=runtimeScene.getObjects(b)[0];return gdjs.RuntimeObject.collisionTest(c,d,!1)}catch(a){return!1}},object.touching=function(a){try{const b=runtimeScene.getObjects(a)[0];return b.cursorOnObject(runtimeScene)}catch(a){return a}},sprite.create=function(b,c,d,e){var f=runtimeScene.createObject(b);f.setX(d),f.setY(e);var f=b,g={};g.load=function(a,b){var c=b[f],d=runtimeScene.getGame(),e=runtimeScene.getObjects(f),g=e[0].getRendererObject();g.texture=c.texture},PIXI.Loader.shared.reset(),PIXI.Loader.shared.add(f,c),PIXI.Loader.shared.load(g.load)},object.move=function(a,b,c){const d=runtimeScene.getObjects(a)[0];d.setPosition(b,c)},object.permf=function(a,b,c,d){const e=runtimeScene.getObjects(a)[0];e.addForce(b,c,d)},object.del=function(a){const b=runtimeScene.getObjects(a)[0];b.deleteFromScene(runtimeScene)},object.getx=function(a){const b=runtimeScene.getObjects(a)[0];return parseInt(b.getX())},object.gety=function(a){const b=runtimeScene.getObjects(a)[0];return parseInt(b.getY())},text.setText=function(a,b){const c=runtimeScene.getObjects(a)[0];c.setString(b)},text.getText=function(a){const b=runtimeScene.getObjects(a)[0];return b.getString()},object.setOpacity=function(a,b){const c=runtimeScene.getObjects(a)[0];c.setOpacity(b)},object.getOpacity=function(a){const b=runtimeScene.getObjects(a)[0];b.getOpacity(opacity)},object.setTint=function(a,c,d,e){const b=runtimeScene.getObjects(a)[0];b.setColor(toString(c)+";"+toString(d)+";"+toString(e))},input.keycode=function(a){return gdjs.evtTools.input.isKeyPressed(runtimeScene,a)},input.mouse=function(a){return gdjs.evtTools.input.isMouseButtonPressed(runtimeScene,a)};var p2p={};p2p.server={},p2p.client={},p2p.data={},p2p.server.connect=function(a,b,c,d,e){var f=isNaN(b);!1==f&&"boolean"==typeof e&&gdjs.evtTools.p2p.useCustomBrokerServer(a,b,c,d,e)},p2p.client.connect=function(a){gdjs.evtTools.p2p.connect(a)},p2p.client.getid=function(){return gdjs.evtTools.p2p.getCurrentId()},p2p.client.sendall=function(a,b=""){gdjs.evtTools.p2p.sendDataToAll(a,b)},p2p.client.sendtoid=function(a,b,c=""){gdjs.evtTools.p2p.sendDataTo(a,b,c)},p2p.client.setid=function(a){gdjs.evtTools.p2p.overrideId(a)},p2p.data.get=function(a){return gdjs.evtTools.p2p.getEventData(a)},p2p.data.geterror=function(){return gdjs.evtTools.p2p.getLastError()};var http={};http.load={},http.send={},http.send.request=function(a,b="GET",c=""){let d=new XMLHttpRequest;return d.open(b,a,!1),d.send([c]),d.responseText},http.load.song=function(a,b=0,c=100,d=1){var e=runtimeScene.getGame().getSoundManager();e.playSoundOnChannel(a,b,!1,c,d)};var ws={};ws.server={},ws.client={},ws.server.connect=function(a,b=""){window.socket=new WebSocket(a,b)},ws.client.onopen=function(a){Function(a)},ws.client.onmessage=function(a){Funtion(a)},ws.client.getmessage=function(){return window.socket.onmessage=function(a){return a.data}},ws.client.send=function(a){window.socket.send(a)},ws.server.close=function(){window.socket.close()};var tween={};tween.quad={},tween.sine={},tween.bounce={},tween.quad.easeinout=function(a,b,c){gdjs.evtTools.tween.ease("easeInOutQuad",a,b,c)},tween.quad.easein=function(a,b,c){gdjs.evtTools.tween.ease("easeInQuad",a,b,c)},tween.quad.easeout=function(a,b,c){gdjs.evtTools.tween.ease("easeOutQuad",a,b,c)},tween.sine.easeinout=function(a,b,c){gdjs.evtTools.tween.ease("easeInOutSine",a,b,c)},tween.sine.easein=function(a,b,c){gdjs.evtTools.tween.ease("easeInSine",a,b,c)},tween.sine.easeout=function(a,b,c){gdjs.evtTools.tween.ease("easeOutSine",a,b,c)},tween.bounce.bounce=function(a,b,c){gdjs.evtTools.tween.ease("bounce",a,b,c)};
// as always, code goes below this line!