#target illustrator  
  
// script.name = makeAllTextDynamic.jsx;  
// script.description = makes ALL text Dynamic, creates Variables;  
// script.required = one document with at leas one textFrame;  
// script.parent = CarlosCanto // 7/5/11;  
// script.elegant = false;  
  
var idoc = app.activeDocument;  
for (i=0; i<idoc.textFrames.length; i++)  
     {  
          var itext = idoc.textFrames[i];  
          var idocvar = idoc.variables.add();  
          idocvar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = idocvar;  
     }  