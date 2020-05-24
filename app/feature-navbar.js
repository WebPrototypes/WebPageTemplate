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

        liarray = liarray +'<!--   ref #_nav_' + element +'-->'+ '<li class="nav-item"><a class="nav-link ' + linkclass + '"' + ' data-toggle="tab" href="#_nav_' + element + '">' + element + '</a></li>';
    }
    //alert(tabedhtml + liarray + '</ul>');
    return tabedhtml + liarray + '</ul>';
}

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