/**
 * change it as per the id defined for dataList
 */
/**
 * population logic
 * 
 */
//	populateCaseIdDataList("caseIdName", names, caseDuedate, "caseNameId")
function populateDataList(arr) {
	var datalist = '<datalist id=' + '"' + home_data_list_name + '" class="small">';
	for (var i = 0; i < arr.length; i++) {
		datalist = datalist + '<option value=' + arr[i] + '>' + arr[i]
				+ "</option>";
	}
	datalist = datalist + '<datalist>';
	$("#"+home_data_list_id).append(datalist);
}

/**This is for action on default home page datalist logic in case 
 * its used
 */
 $("#"+home_data_list_id).change(
    function() {
        var value = $(homepageId).val();
        dataListActionTrigger(value);
    }
)
/***
 * what need to happen in case of datalist change put the logic here.
 * 
 */
function dataListActionTrigger(value)
{
    if (value != null || value.length > 0) {
        alert(value);
    }
}
