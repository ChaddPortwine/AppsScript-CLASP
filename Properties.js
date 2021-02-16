/*
 * Use these functions to set and get secrets
 * from the Apps Script PropertiesService
 */

// RUN: clasp run setProperty -p ['key','value']
function setProperty(key,value) {
    let scriptProperties = PropertiesService.getScriptProperties()
    scriptProperties.setProperty(key,value)
    return "setProperty Complete"
};
function logProperties() {
    let scriptProperties = PropertiesService.getScriptProperties()
    return scriptProperties
};
function getProperty(key){
    let scriptProperties = PropertiesService.getScriptProperties()
    return scriptProperties.getProperty(key)
};
