# js-library-zhuhaot1
Heroku link: http://easymap-zhuhaot1.herokuapp.com/

# Getting Start:

### Installation: include these script in html head tag.
```html
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer type="text/javascript" src="js/EasyMapLib.js"></script>
```
### First you need to initializes EasyMapLib:
```javascript
    const easy_map = new EasyMapLib()
```
### To create an empty map:
```javascript
   let map = easy_map.createEasyMap(700, 1200, "src/first_map.jpg", 2, 'map1')
```
This will create a div contains the map, with height = 700px, width = 1200px, id = map1 and the image this map using  is "src/first_map.jpg". Then you can append this div to any div you want.
### To add node in map by code:
```javascript
    easy_map.addNodeToMap("map1", "My Node", 100, 740, "src/star.png", 30, 30)
```
This code will add a node call 'My Node' at (left = 100px, height = 740px) into 'map1', with height and width both equal to 30px, it's appearance will be "src/star.png".
### To add property and value by code:
```javascript
   easy_map.addElement('map1', ['this is property', 'this is value'], 'the name of node')
```
 This will add 'this is property: this is value' into a node called 'the name of node' in map1.
### To add tag by code:
```javascript
  easy_map.addKeyword('map1', 'Alkaid', 'Ursa Major')
```
This will add a tag 'Ursa Major' into a node called 'Alkaid' in map1.
 After finish adding tag or property, call this function to update the map.
```javascript
   easy_map.updateAllNode('map1')
```
This will update every thing in map1.

documentation link: http://easymap-zhuhaot1.herokuapp.com/doc
