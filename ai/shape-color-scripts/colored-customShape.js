//Unlike processing, stroke and fill 
//are not lobal properties
//of the sketch. instead,
//they are individual properties
//of the object. Here is an example
//of how to take a pathItem object, and color it.

var doc = app.documents.add(null, 300, 300);
var p = doc.pathItems;

var star1 = p.star(140, 250, 250, 160, 3);
star1.blendingMode = BlendModes.LIGHTEN;
star1.fillColor = makeColor(255, 0, 0);
star1.strokeColor = makeColor(0, 255, 0);
star1.strokeWidth = 7;

var star2 = p.star(160, 250, 250, 160, 200,6);
star2.blendingMode = BlendModes.LIGHTEN;
star2.fillColor = makeColor(0, 0, 255);
star2.strokeColor = makeColor(255, 0, 255);

/*
    necessary since rgbcolor class has no constructor.
*/

function makeColor(r,g,b){
    var c = new RGBColor();
    c.red = r;
    c.green = g;
    c.blue = b;
    return c;
}