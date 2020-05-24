/**
 * 
 * @param {*} options 
 */
function getTabedNavigationsMenuList(options) {
    if (options == null || options.length == 0)
        return "";
    let tabedhtml = '<ul class="nav nav-tabs" role="tablist">';
    let liarray = "";
    for (let index = 0; index < options.length; index++) {
        const element = options[index];
        var linkclass = '';
        if (index == 0) {
            linkclass = 'active';
        }
        liarray = liarray + '<li class="nav-item"><a class="nav-link ' + linkclass + '"' + ' data-toggle="tab" href="#_nav_' + element + '">' + element + '</a></li>';
    }
    //alert(tabedhtml + liarray + '</ul>');
    return tabedhtml + liarray + '</ul>';
}

/**
 * 
 * @param {*} options 
 */
function getTabedNavigationsMenuTabcontent(options) {
    if (options == null || options.length == 0)
        return "";
    let tabedcontent = '';
    for (let index = 0; index < options.length; index++) {
        const element = options[index];
        var linkclass = '';
        if (index == 0) {
            linkclass = 'active';
        }
        tabedcontent = tabedcontent + '<div id="_nav_' + element + '" class=" tab-pane ' + linkclass + '"><div id="' + '_nav_' + element + '_content"><h5>todo ' + element + ' content</h5> </div></div>';
    }
    //alert(tabedcontent);
    return tabedcontent;
}
/**
 * 
 * @param {*} companylogo 
 * @param {*} companyName 
 * @param {*} title1 
 * @param {*} title2 
 * @param {*} isbeta 
 * @param {*} rightdivid 
 */
function getCompanyTitleHeaderBanner(companylogo, companyName, title1, title2, isbeta, rightdivid) {

    var isbetamarkup = ''
    if (isbeta) {
        isbetamarkup = '<sup>&nbsp;&nbsp;<span class="badge badge-danger">Beta</span></sup>';
    }

    let html = '<div class="card-header main_div_debugger">' +
        '<div class="row"><div class="col-sm-4"><span ><img class="logoimg" src=' + getDoubleQuotedElement(companylogo) + 'alt="logo" id="headerlogo"></span>' +
        '<span class="main_div_debugger_company">' + (companyName) + '</span>' +
        '</div><div class="col-sm-6"><div><div><span class="main_div_debugger_company_title_1">' +
        title1 + '</span> <span class="main_div_debugger_company_title_2">' + title2 + '</span>' +
        isbetamarkup +
        '</div></div><div></div></div>' +
        '<div class="col-sm-2 "><div align="right"><div id=' + getDoubleQuotedElement(rightdivid) + ' class="userloggedin"></div></div></div></div></div>';
   
    return html;
}
/**
 * 
 * @param {*} copyright 
 * @param {*} company 
 * @param {*} version 
 * @param {*} message 
 */
function getFooter(copyright, company, version, message ) {
    let html = '<div class="card-footer" align="center">' +
        '<span id="_footercontent" class="f12"><strong>' + company + '</strong>&nbsp;&nbsp;' + copyright + '</span></div>';
    return html;
}

function getFullScreenLoader() {
    var fullscreenloader = '<div id="loader"  class="fullscreenpopup"><div class="spinner"><img id="loading-image" src="./img/load.gif" ' +
        'alt="Loading..." width="72" height="72" /></div></div>'
    return fullscreenloader;
}

/**
 *useful for creating quick dialog box  
 * @param {*} id 
 * @param {*} header 
 * @param {*} classname 
 */
function createDefaultModal(id, header, classname) {
    var modal = '<div class="modal" id="' + id + '">' +
        '<div class="' + classname + '"><div class="modal-content"> <div class="modal-header"> <span class="modal-title">' + header +
        '</span><button type="button" class="close" data-dismiss="modal">&times;</button></div>' +
        ' <div class="modal-body"><div id="' + id + '_content' + '"></div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>';
    return modal;
}

/**
 * 
 * @param {*} elementid 
 */
function hideElement(elementid) {
    $("#" + elementid).css("display", "none");
}
/**
 * 
 * @param {*} elementid 
 */
function unhideElement(elementid) {
    $("#" + elementid).css("display", "block");
}
/**
 * 
 * @param {*} elementidarray 
 */
function hideElements(elementidarray) {
    elementidarray.forEach(element => {
        $("#" + element).css("display", "none");
    });

}
/**
 * 
 * @param {*} elementidarray 
 */
function unhideElements(elementidarray) {
    elementidarray.forEach(element => {
        $("#" + element).css("display", "block");
    });
}
/**
 * 
 */
function getActionLoader() {
    var actionLoaderMarkUp = '<div id="actionloader" align="center" class="loadingnew pt-4" >' +
        '<span><img id="loading-image" src="img/load.gif"' +
        'alt="Loading..." width="120" height="120" /></span></div>';
    return actionLoaderMarkUp;
}

/***
 * alertclass: alert-danger ,alert-warning,alert-su
 * 
 */
function getAlertMarkUp(alertclass, alertid) {
    var html = '<div class="container alert appAlert ' + alertclass + '" id=' + getDoubleQuotedElement(alertid) + ' ">' +
        '<button type="button" class="close" data-dismiss="alert">x</button>' +
        '<span id=' + getDoubleQuotedElement(alertid + '_msg') + ' class="f12"></span></div>';
    // alert(html);
    return html;
}
/**
 * 
 * @param {*} parentid 
 * @param {*} msgid 
 * @param {*} msg 
 */
function displayAlertMessage(parentid, msgid, msg) {
    unhideElement(parentid);
    
    $('#' + msgid).html(msg);
    
    $("#" + parentid).fadeTo(4000, 500).slideUp(500, function () {
        $("#" + parentid).slideUp(500);
    })
}
/**
 * JQUERY based dom manupulation utilities 
 * 
 */
function updateHtml(targetid,htmlcontent) {

    var existing = $("#" + targetid).html();
    var updated = existing + htmlcontent;
    $("#" + targetid).html(updated);
}
/**
 * 
 * @param {*} htmlcontent 
 * @param {*} targetid 
 */
function addHtml(targetid,htmlcontent ) {
    $("#" + targetid).html(htmlcontent);
}


function populateMarkUpDataTable(headers, data, classname, id) {
    var markupdata = buildTableMarkup(headers, data, classname);
    $('#' + id).html(markupdata);
}
/**
 * 
 * @param {*} headers 
 * @param {*} data 
 * @param {*} classname 
 */
function buildTableMarkup(headers, data, classname) {
    var tabledata = '<table class="' + classname + '">'
    var tableheader = '<thead><tr>';
    var tablebody = '<tbody>';
    var completetabledata;
    for (let index = 0; index < headers.length; index++) {
        tableheader = tableheader + '<th>' + headers[index] + '</th>';
    }
    tableheader = tableheader + '</tr></thead>';
    for (let index = 0; index < data.length; index++) {
        var row = data[index];
        tablebody = tablebody + '<tr>';

        for (let j = 0; j < row.length; j++) {
            tablebody = tablebody + '<td>' + row[j] + '</td>';
        }
        tablebody = tablebody + '</tr>';
    }
    completetabledata = tabledata + tableheader + tablebody + '</tbody></table>'
    console.log(completetabledata);
    return completetabledata;
}

function getErrorModal() {
	var errorHtml = '<div class="modal" id="errormsgdiv" role="dialog">'
			+ '<div class="modal-dialog" role="document">'
			+ '<div class="modal-content">'
			+ '<div class="modal-header">'
			+ '<h5 class="modal-title">Error</h5>'
			+ '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
			+ '<span aria-hidden="true">&times;</span>'
			+ '</button>'
			+ '</div>'
			+ '<div class="modal-body">'
			+ '<span id="errormsg" class="f12"><span>'
			+ '</div>'
			+ '<div class="modal-footer">'
			+ '<button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">ok</button>'
			+ '</div>' + '</div>' + '</div>' + '</div>';
	return errorHtml;
}

function showError(msg) {
	unhideElement("errormodal"); // parent div
	// errormsgdiv/errormsg
	$('#errormsg').html(msg);
	$('#errormsgdiv').modal('show');

}