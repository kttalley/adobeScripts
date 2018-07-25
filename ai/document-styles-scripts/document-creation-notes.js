//Create a new document
applicationCache.documents.addDocument('',new DocumentPreset(), true);
var doc = app.documents.addDocument('',new DocumentPreset(), true);


//Let's say you want to automate the creation of documents,
//you would call documents.add() like this:

//create a new document of size 100x100 points
var doc = app.documents.add( null, 100, 100);

//create a new document of default size, with 4 art boards.
var doc = app.documents.add(null, null, null, 4);

//makes a 10x10 grid of artboards, each sized 10x10, with margin spacing of 10.
var doc = app.documents.add(null, 10, 10, 100, DocumentArtboardLayout.Column, 10, 10);

