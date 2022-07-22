<p align="center">
  <img width="250" height="250" src="logo.png">
</p>

# CDX Runtime Engine is An Lighter Alternative Of CDX Code Engine.
### This Turns GDJS Into an Messy Unknown Thing to an Simplified JS Runtime.
### Currently Under Beta.

## Table Of Contents:
- How To Use
- Contributing
- To-Do List
- Documentation

## How To Use:

There Are 2 Ways on how to use this.

1. Embed Into Javascript Code Block (RECOMMENDED)

https://user-images.githubusercontent.com/60990459/180346971-d2db19cb-085b-48d0-a7e1-8499a7527ae7.mp4

2. Use the Auto-Embed Feature Once Game Starts. [(Not Recommended)](docs/unsafe.md)


Example: Add And Create Object Instance
```javascript
var x = 100
var y = 200
cdx.object.create("foo", "./bar.png", x, y)
```
On Input Console Log
```javascript
var x_pressed = cdx.input.keycode("88")
if (x_pressed == true) {
  console.log("X has been pressed!")
}
```

## Contributing: 
Contributing is highly recommended as it helps the development of the engine.
If you Do Contribute With An Pull Request, Please Specify:
- The changes you've made
- What Improvements You've Made
- Why you did These Changes?

## To-Do List:
- [ ] Finish Functions 
- [ ] Finish ReadME
- [x] Development
- [x] Planned Release

## Documentation:
Coming Soon or smth idk
