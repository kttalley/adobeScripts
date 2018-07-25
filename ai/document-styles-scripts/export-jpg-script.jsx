function exportFileToJPEG (dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsJPEG ();
        var type = ExportType.JPEG;
        var fileSpec = new File(dest);
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting = 100;
        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}