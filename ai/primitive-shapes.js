var width = 100;
var height = 100;
var doc = app.documents.add(null, width, height);
var p = doc.pathItems; //set up path item for shape

p.rectangle(height, 0, 50, 50);
p.ellipse(20, 30, 20, 10);
p.polygon(10, 50, 20, 6);
p.roundedRectangle(height, 60, 30, 30, 5, 5);
p.star(70, 30, 10, 20, 8);