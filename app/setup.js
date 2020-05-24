const options=["config","update"];

$(document).ready(
    function() {
    loadSetup();
    }
)
function loadSetup()
{
    populateDataList(["name","address","location",""]);
    var menuList=getTabedNavigationsMenuList(options);
    $('#'+homepagetabs).html(menuList);
    var menuListContent=getTabedNavigationsMenuTabcontent(options);
    $("#menucontent").html(menuListContent);
// hooking the prebuilt datalist to home page
    $('#_nav_'+options[0]+'_content').html($("#serachdatalist").html());
}

/**
 * populate dataList 
 */

