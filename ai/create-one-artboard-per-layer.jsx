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

//looping on layers to create one artboard per layer
    for ( var i = 0; i < totalLayers; i++){
        var currentLayer = doc.layers[i];
        var tempItem;

    //We don't want to deal with hidden layers
    if (currentLayer.visible == false){
        continue;  
    } 

    //unlock the layer if needed
    currentLayer.locked = false;


    //Select everything in layer
    currentLayer.hasSelectedArtwork = true;

    //create new artboard based on diemensions of the doc
    var artboard = doc.artboards[0];
    var ABrect = artboard.artboardRect;

    if(doc.visibleBounds[2] == 0) {
        //ignore empty layers
        continue;
    }
    var newAB = doc.artboards.add(ABrect);
    var indexAB = doc.artboards.getActiveArtboardIndex();
    doc.fitArtboardToSelectedArt(indexAB);
    doc.selection = null;
    
}
