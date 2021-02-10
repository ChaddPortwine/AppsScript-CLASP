/*
 * Use these functions for testing
 */ 

// RUN: clasp run hello
function hello(){
    return "hello"
};
// Pass an argument to a function
// RUN: clasp run print -p '["hello"]'
function print(string){
    return string
};
// Post the hello string to a Spreadsheet
// The sheetId is stored in the PropertiesService
// RUN: clasp run helloSheet
// 
function helloSheet(){
    let range = getSheetRange()
    range.setValue("hello")
    return "helloSheet Completed"
}
