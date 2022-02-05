<p align="center">
  <img width="150" height="150" src="logo.png">
</p>

# CDX Code Engine V4 is the Fourth Major Revision Of CDX Code Engine, An GDJSON Compiler.

### Currently Under Beta.

## Table Of Contents:
- How To Use
- Contributing
- To-Do List

## How To Use:

Example: Json Request
```python
import engine
jsonurl = 'engine.req("api.test.com/v1/json", "varname")'
engine.event("once","exec " + jsonurl)

engine.compile()
```
Add And Create Object Instance
```python
import engine
engine.addsprite("image.png", sprite1)
engine.newscene("scene")
engine.scene("scene", engine.addobj("sprite1", "x", "y"))
```
