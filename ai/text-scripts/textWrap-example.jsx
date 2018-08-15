var width = 200;
var height = 200;
var doc = app.documents.add( null, width, height );

//create the path
var m = 30; //margin
var path1 = doc.pathItems.add();
path1.setEntirePath ([
    [m,m],
    [m, height-m],
    [width-m, height-m],
    [width-m, m]
]);

//create the text
var text1 = doc.textFrames.areaText( path1 );
text1.contents = "She knew that technolog was \
a means to an end - and that the end was people. \
She saw it as something you needed to get to the \
real work: improving people's lives, making them \
feel more connected, bringing delight in big and \
small ways, and empowering them to affect change.";

var fontStyle = text1.textRange.characterAttributes;
fontStyle.textFont = app.textFonts.getByName( "Consolas" );
fontStyle.size = 2.5;