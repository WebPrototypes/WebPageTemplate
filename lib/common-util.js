/**
 * http://usejsdoc.org/
 */
function buildDataTableHeaderObject(headerArray) {
	if (headerArray == null || headerArray.length == 0)
		return null;
	var headers = [];
	for (var int = 0; int < headerArray.length; int++) {
		var titleRow = {
			title : headerArray[int]
		};
		headers.push(titleRow);
	}

	return headers;
}
// common function move to a new JS
function populateDataTable(dataRow, headerArrays, tableId) {
	var headers = buildDataTableHeaderObject(headerArrays);
	var buttonArray = [ 'csv', 'excel'];
	var table=$(tableId).DataTable({
		data : dataRow,
		 lengthChange: false,
		paging : true,
		bSort : true,
		dom : 'Bfrtip',
	    "bDestroy" : true,
		buttons : buttonArray,
		columns : headers,
		"bAutoWidth" : false
	})

}

function reverseString(str) {
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	return joinArray;
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

function getDefaultCodeMirror(id) {
	var jsonSchemaOutput = CodeMirror.fromTextArea((id), {
		lineNumbers : true,
		mode : "text/html",
		styleActiveLine : true,
		matchBrackets : true,
		lineWrapping:true,
		foldGutter : true,
		autofocus : true,
		autorefresh : true,
		lineSeprator:'\n'
	});

	jsonSchemaOutput = setDefaultCodeMirrorTheme(jsonSchemaOutput);
	jsonSchemaOutput = setDefaultCodeMirrorSize(jsonSchemaOutput);
	return jsonSchemaOutput;

}

function setDefaultCodeMirrorTheme(codeMirror) {
	codeMirror.setOption("theme", codemirroetheme);
	return codeMirror;

}

function setDefaultCodeMirrorSize(codeMirror) {
	// width,height
	codeMirror.setSize(750, 300);
	return codeMirror;

}
function getDefaultCodeMirror(id, data) {
	jsonSchemaOutput = CodeMirror.fromTextArea(document.getElementById(id), {
		lineNumbers : true,
		mode : "text/html",
		styleActiveLine : true,
		matchBrackets : true,
		lineWrapping:true,
		foldGutter : true,
		autofocus : true,
		autorefresh : true,
		lineSeprator:'\n'
	});

	// jsonSchemaOutput = setDefaultCodeMirrorTheme(jsonSchemaOutput);
	jsonSchemaOutput = setDefaultCodeMirrorSize(jsonSchemaOutput);
	jsonSchemaOutput.setOption("theme", randomThemeSelector());
	let codemirrorconf = jsonSchemaOutput;
	let codemirrornote = jsonSchemaOutput;
	return jsonSchemaOutput;

}

function refreshTheme(codemirrorobject)
{
	
	jsonSchemaOutput.setOption("theme", randomThemeSelector());
	jsonSchemaOutput.refresh();
}



var enterDate = new Date();
function getPageViewingTime()
{
	var sec = secondsSinceEnter();
	  if (sec < 10)
	    return sec + " sec";
}


function secondsSinceEnter()
{
  return (new Date() - enterDate) / 1000;
}	

/*
 * function setDefaultCodeMirrorSize(codeMirror) { // width,height
 * codeMirror.setSize(750, 400); return codeMirror; }
 */
/*function refreshTheme() {
	jsonSchemaOutput.setOption("theme", $("#theme").val());
	codemirrorconf.setOption("theme", $("#theme").val());
	codemirrornote.setOption("theme", $("#theme").val());
	 alert($("#theme").val()) 
	// var data=$("#trails").val();
}
*/
function randomThemeSelector() {

	var limit = 10;
	var index = Math.floor(Math.random() * (limit + 1));
	var prefferedthemes = [ "abcdef", "blackboard", "mdn-like", "dracula",
			"icecoder", "mbo", "rubyblue", "seti", "colorforth" ]
	//alert(prefferedthemes[index]);
	if (index < prefferedthemes.length)
		return prefferedthemes[index];
	else
		return prefferedthemes[1];
}


function copyspan(spanid) {
    var copyText = $('#'+spanid);
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

function getSpinnerSpan(height,width)
{	
var html='<span id="supplierurlstatus"><img src="img/load.gif" alt="Loading..." width="'+width+'" height="'+height+'" /></span>';
return html;
}