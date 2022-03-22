<p align="center">
  <img width="250" height="250" src="logo.png">
</p>

# CDX Code Engine V4 is the Fourth Major Revision Of CDX Code Engine, An GDJS Simplification.
### Currently Under Beta.

## Table Of Contents:
- How To Use
- Contributing
- To-Do List
- Documentation

## How To Use:

Create An New Scene And Copy [This Script](/script/engine.js), And Then Either Look At The [Documentation](/docs/engine.md) or Follow These Examples:

Example: Json Request
```javascript
cvar("url","http://testapi.com")
cvar("res","")
req(gvar("url"), "GET", "res")
```
Add And Create Object Instance
```javascript
var x = 100
var y = 200
addobj("sprite1","./sprite1.png")
crobj("sprite1", x, y)
```
On Input Exit game
```javascript
var x = sinp("X")
if (x == true) {
  gdjsclose()
}
```

## Contributing: 
Contributing is highly recommended as it helps the development of the engine.
If you Do Contribute With An Pull Request, Please Specify:
- The changes youve made
- What Are The Improvements
- Why you did These Changes?

## To-Do List:
- [ ] Finish Functions 
- [ ] Finish ReadMe
- [x] Development
- [x] Planned Release


