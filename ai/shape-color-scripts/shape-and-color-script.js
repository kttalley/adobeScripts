//create a new document of size 100x100 points.
var doc = app.documents.add(null, 100, 100);

doc.pathItems.rectangle(0,50,50,20);

//unlike processing, illustrator's doc origin point
//is at the bottom left.


//opens a doc 
var width = 100;
var height = 100;
var doc = app.documents.add(null, width, height);
doc.pathItems.rectangle(height, 0, 50, 20);

