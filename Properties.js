/**
 * SET/GET/PRINT - scriptProperties, e.g., SECRETS,
 *   from the Apps Script PropertiesService
 *   to the GCP Logger & terminal
 * 
 * clasp commands
 *   clasp run printPropertiesInCLASP
 *   clasp run setProperty -p '["key","value"]'
 *   clasp run getProperty -p '["key"]'
 */
// MAIN
/**
 * SET - a script property
 *   in the Apps Script's PropertyService
 * 
 * @param {String} key - the key label
 * @param {String} value - the value
 * @returns {String} - new values printed to the terminal
 */
function setProperty(key,value) {
    let scriptProperties = PropertiesService.getScriptProperties()
    scriptProperties.setProperty(key,value)
    return "SUCCESS: scriptProperties Updated - {" + key + ": " + value + "}"
};
/**
 * GET - a script property
 *   from the Apps Script's PropertyService
 * 
 * @param {String} key - the key label
 * @returns {String} - value of the key
 */
function getProperty(key){
    key = key || "test" // Mock for Debugging in UI
    let scriptProperties = PropertiesService.getScriptProperties()
    let property = scriptProperties.getProperty(key)
    if(property != null) {
        return scriptProperties.getProperty(key)
    } else {console.log(key + " not found."); return key + ": not found. Check Logs";}
};
/**
 * GET - all script properties
 *   from the Apps Script's PropertyService
 * 
 * @returns {Object} - JSON formatted key/value pairs
 */
function getProperties() {
    let scriptProperties = PropertiesService.getScriptProperties()
    return scriptProperties.getProperties()
};
/**
 * PRINT - all script properties
 *   from the Apps Script's PropertyService
 * 
 * @returns {String} - property values intended for the terminal
 */
function printPropertiesInCLASP() {
    let scriptProperties = PropertiesService.getScriptProperties()
    console.log("scriptProperties.getProperties():", scriptProperties.getProperties())
    return scriptProperties.getProperties()
};
