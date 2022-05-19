# Documentation:

## Module cdx:

### local:
- cdx.local.setvar(variable, value) | Sets Scene / Public RuntimeScene Variable
- cdx.local.getvar(variable) | Gets Scene / Public RuntimeScene Variable And Returns Its Value.


### global:
- cdx.global.setvar(variable, value) | Sets Global / Public RuntimeScene Variable
- cdx.global.getvar(variable) | Gets Global / Public RuntimeScene Variable And Returns Its Value.

### input:
- cdx.input.keycode(keycode) | Gets Input From Keycode and Returns Boolean.

### object:
- cdx.object.create(name, sprite, x_pos, y_pos) | Creates an object with the name and sprite specified and sets it to the specified x and y position.

- cdx.object.move(object, x_pos, y_pos) | sets the object's position to the specified x and y position.

## Module p2p:

### client:
- p2p.client.connect(id) | connects to specified p2p id.
- p2p.client.getid() | gets client id and returns its value
- p2p.client.sendall(name, data) | sends an event with the specified name and data to all connected clients.
- p2p.cliend.sendtoid(id, name, data) | sends an event to the specified id with the specified name and data.
- p2p.client.setid(id) | Sets P2P client id, call this before ```javascript p2p.connect.server```