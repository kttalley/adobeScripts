//build a path with verticies.
//akin to beginShape() in processing.

//In illustrator, you tell the pathItems collection
//to create a new path, which will live in that collection.

//You take that shape as a variable and do things to it,
//Including setting the verticies,
//closing/opening it and stroke/fill information.


var width = 500;
var height = 500;
var doc = app.documents.add(null, width, height);
var p = doc.pathItems;
var shape = p.add();

shape.setEntirePath([
    [178.5, 226],
    [159.8, 277.3],
    [178.5,226],
    [159.8,277.3],
    [118.3,277.3],
    [116.3,274.7],
    [117.5,271.5],
    [133.2,271.5],
    [139.5,277.5],
    [154.7,277.5],
    [131.7,235.8],
    [142,250.8],
    [148,251.8],
    [145,259.5],
    [149.2,268.8],
    [159,264]


]);

shape.closed = true;
shape.filled = false;
shape.strokeCap = StrokeCap.ROUNDENDCAP;
shape.strokeJoin = StrokeJoin.ROUNDENDJOIN;
shape.strokeWidth = 10;

