function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  var Id = "id_google_Sheets_File";
  var ss = SpreadsheetApp.openById(Id);
  var sheet = ss.getSheetByName('sheets_name');
  var data = sheet.getDataRange().getDisplayValues().slice(1);
  Logger.log(data);
  return data;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
