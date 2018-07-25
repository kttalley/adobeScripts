var myObject = app.selection[0];

 

    for(var i=0; i<app.selection.length; i++){

 

        var myObject = app.selection[i];

 

         with(myObject.transparencySettings.dropShadowSettings){

            angle = 135;

            opacity = 33;

            distance = .06;

            mode = ShadowMode.DROP;

            blendMode = BlendMode.NORMAL;

        }

 

 

}