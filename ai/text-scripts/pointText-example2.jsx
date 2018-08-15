//pointText function akin to
//text() in processing.

var width = 100;
var height = 100;
var doc = app.documents.add(null,width,height);
var text1 = doc.textFrames.pointText( [0, height-50] );
text1.contents = "Handgloves";
var fontStyle = text1.textRange.characterAttributes;
fontStyle.fillColor = makeColor(255,10,255);
fontStyle.textFont = app.textFonts.getByName("Consolas");
fontStyle.strokeColor = makeColor(0,255,255); //constructed below
fontStyle.strokeWeight = 0.3;
fontStyle.size = 20.7;

function makeColor(r, g, b) {
    var c = new RGBColor();
    c.red = r;
    c.green = g;
    c.blue = b;
    return c;
}