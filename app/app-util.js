/**
 * http://usejsdoc.org/
 */

window.setTimeout(function() {
	alert("User Session Expired ,This Page Will Reload Now.");
	location.reload();
}, 1000 * 60 * 60);// refresh every hour
/*$(document).ready(function() {
	

});*/

/**
 * 
 * @param {*} value 
 */
function ifNullUndefinedfalse(value) {
    if (value == undefined || value == null)
        return false;
    else
        return value;
}
/**
 * 
 * @param {*} value 
 */
function ifNullUndefinedBlank(value) {
    if (value == undefined || value == null)
        return "";
    else
        return value;
}

/**
 * 
 * @param {*} element 
 */
function getDoubleQuotedElement(element)
{
    return '"'+element+'"';
}
/**
 * 
 * @returns
 */

function create_UUID() {
	var dt = new Date().getTime();
	var uuid = 'xxxxxxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}

function formatJson(json) {
	var jsonStr = {};
	try {
		jsonStr = JSON.parse(json);
	} catch (err) {
		// console.log('warning ' + err);
		return json;
	}
	return JSON.stringify(jsonStr, null, 2);
}

