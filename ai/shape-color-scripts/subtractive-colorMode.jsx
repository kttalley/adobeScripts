var width = 250;
var height = 250;
var doc = app.documents.add(null, width, height);
var p = doc.pathItems;

for ( var y = 0; y < height; y += 10){
    for( var x = 0; x < width; x += width/3){
        var s = p.rectangle(width-y, x, width/3, 10);
        if (x == 0){
            s.fillColor = makeColor(y,100-y,y);
        }else if(x==width/3){
            s.fillColor = makeColor(0,y,100-y,y);
        }else{
            s.fillColor = makeColor(100-y,y,0,0);
        }
        s.stroked = false;
    }
}

/* necessary since CMYKColor class has no constructor. */

function makeColor(c, m, y, k){
    var ink = new CMYKColor();
    ink.cyan = c;
    ink.magenta = m;
    ink.yellow = y;
    ink.black = k;
    return ink;
}