var DEFAULT_DATA_TYPE = 'json'
var DEFAULT_CONTENT_TYPE = 'application/json'
/**
 * @param {*} invokeUrl 
 * @param {*} method 
 * @param {*} requestBody 
 * @param {*} successFunction 
 * @param {*} errorFunction 
 * @param {*} aysncFlag 
 */
function invokeHttpServiceWithRequestBody(invokeUrl, method, requestBody, successFunction, errorFunction, aysncFlag) {
    var httpsync = ifNullUndefinedfalse(aysncFlag);
    $.ajax({
        url: invokeUrl,
        data: requestBody,
        type: method,
        dataType: DEFAULT_DATA_TYPE,
        contentType: DEFAULT_CONTENT_TYPE,
        aysnc: aysncFlag,
        success: function (data, xhr) {
            successFunction(data, xhr);
        },
        error: function (xhr) {
            errorFunction(xhr);
        }
    });
}

/**
 * 
 * @param {*} invokeUrl 
 * @param {*} method 
 * @param {*} successFunction 
 * @param {*} errorFunction 
 * @param {*} aysncFlag 
 */
function invokeHttpService(invokeUrl, method, successFunction, errorFunction, aysncFlag) {
    var httpsync = ifNullUndefinedfalse(aysncFlag);
    $.ajax({
        url: invokeUrl,
        type: method,
        dataType: DEFAULT_DATA_TYPE,
        contentType: DEFAULT_CONTENT_TYPE,
        aysnc: httpsync,
        success: function (data, xhr) {
            successFunction(data, xhr);
        },
        error: function (xhr) {
            errorFunction(xhr);
        }
    });
}

function invokeHttpServiceWithSuccessArgument(invokeUrl, method, successFunction, errorFunction, aysncFlag,arg) {
    var httpsync = ifNullUndefinedfalse(aysncFlag);
    $.ajax({
        url: invokeUrl,
        type: method,
        dataType: DEFAULT_DATA_TYPE,
        contentType: DEFAULT_CONTENT_TYPE,
        aysnc: httpsync,
        success: function (data, xhr) {
            successFunction(data, xhr,arg);
        },
        error: function (xhr) {
            errorFunction(xhr);
        }
    });
}



function invokeHttpServiceWithSuccessArgumentFailureArgument(invokeUrl, method, successFunction, errorFunction, aysncFlag,arg,failurearg) {
    var httpsync = ifNullUndefinedfalse(aysncFlag);
    $.ajax({
        url: invokeUrl,
        type: method,
        dataType: DEFAULT_DATA_TYPE,
        contentType: DEFAULT_CONTENT_TYPE,
        aysnc: httpsync,
        success: function (data, xhr) {
            successFunction(data, xhr,arg);
        },
        error: function (xhr,failurearg) {
            errorFunction(xhr,failurearg);
        }
    });
}