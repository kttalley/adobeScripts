//All text objects live inside the text collection,
//Document.textFrames.
//Add new things to it in the same way you would with shapes/artboards.

var width = 100;
var height = 100;
var doc = app.documents.add(null, width, height);
var text1 = doc.textFrames.pointText( [20, height-50] );
text1.contents = "Handgloves";

let fontStyle = text1.textRange.characterAttributes;

fontStyle 