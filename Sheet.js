// Get the sheetId from the PropertiesService
function getSheetId() {
    return getProperty(sheetId)
}
// Get a cell as the range
function getSheetRange(){
    let scriptId = getProperty("scriptId")
    let ss = SpreadsheetApp.openById(scriptId)
    return ss.getRange("A1")
}