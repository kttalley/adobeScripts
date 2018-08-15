var width = 150;
var height = 150;
var doc = app.documents.add(null, width, height);

//create the path
var path1 = doc.pathItems.add();
path1.setEntirePath ([
    [6.7,78.8],[52.3,78.8],[61.7,77.7],[70.3,73.7],
    [80.2,65.2],[84.7,55.8],[87.2,44.2],[85.5,35.2],
    [80.3,26.5],[72,20.7],[61.3,17.3],[51.5,19.2],
    [43.3,25.2],[38.3,34.8],[38.7,45],[44.2,52.5],
    [53.2,56.8],[60.3,55.8],[66.3,51.2],[69.2,44],
    [67.3,36.3],[62.2,32.2],[54.2,32.2],[49.2,38.5],
    [50,45.2],[53.7,47.3],[58.5,47.2],[61,44],
    [61.8,41.2],[60.2,38.5],[58.3,38]
]);

//create the text

var text1 = doc.textFrames.pathText( path1 );
text1.contents = "She had plenty of time as she " +
"went down to look about her and to what what " +
"was going to happen next. First, she tried to look" +
"down and make out what she was coming to, " +
"but it was too dark to see anything.";


var fontStyle = text1.textRange.characterAttributes;
fontStyle.size = 3.4;
fontStyle.textFont = app.textFonts.getByName("CiscoSans");