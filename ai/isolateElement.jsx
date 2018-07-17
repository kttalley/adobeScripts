if (app.documents.length > 0 ) {
    doc = app.activeDocument;

    if(!doc.saved){
        Window.alert("This script needs to modify your doc. Please save.");
    }    
} else {
    Window.alert("you must open at least one document.");
}

//get the total number of layers in the active document
var totalLayers = doc.layers.length;

for ( var i = 0 ; i < totalLayers ; i++){
 
    var currentLayer = doc.layers[i];

    var tempItem;

    //We don't want to deal with hidden layers
    if(currentLayer.visible == false) continue;

    //Unlock the layer if needed
    currentLayer.locked = false;

    //Select ALL in the layer
    currentLayer.hasSelectedArtwork = true;

    //Create a new artboard based on the dimension of the document
    var artboard = doc.artboards[0];
    var ABrect = artboard.artboardRect;

    if(doc.visibleBounds[2] == 0) {
        // ignore empty layers ** Tricks by David Deraedt
        continue;
    } 

    var newAB = doc.artboards.add(ABrect);
    var indexAB = doc.artboards.getActiveArtboardIndex();
    doc.fitArtboardToSelectedArt(indexAB);
    doc.selection = null;
}