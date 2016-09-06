document.addEventListener("DOMContentLoaded", function(event) { 
    for(i=0;i<jsAssistList.length;i++){
        loadFiles(jsAssistList[i]);
    }
});

function loadFiles(packName){
    switch(packName){
        case "jquery":
            loadScript(jquery, loadedFunction('jquery'));
            break;
        case "bootstrap-min-js":
            loadScript(bootstrap_js, loadedFunction('Bootstrap JS'));
            break;
        case "bootstrap-min-css":
            loadCSS(bootstrap_css, packName);
            console.log("Bootstrap CSS");
            break;
        case "jquery-ui":
            loadScript(jqueryUI, loadedFunction('jquery UI'));
            break;
        case "dataTables":
            loadScript(dataTables_js, loadedFunction('dataTables JS'));
            loadCSS(dataTables_css, packName);
            console.log("dataTables CSS");
            break;
        case "typeAhead":
            loadScript(typeAhead, loadedFunction('typeAhead'));
            break;
        case "font_awesome":
            loadCSS(font_awesome, packName);
            console.log("Font Awesome");
            break;
        case "d3":
            loadScript(d3, loadedFunction('D3'));
            break;
        case "semantic-min-css":
            loadCSS(semantic_css, packName);
            console.log("Semantic CSS");
            break;
        case "semantic-min-js":
            loadScript(semantic_js, loadedFunction('Semantic JS'));
            break;
    }
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function loadCSS(url, cssId){
    if (!document.getElementById){
        document.write('<link rel="stylesheet" type="text/css" href="'+url+'">');
    }
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href =  url;
        link.media = 'all';
        head.appendChild(link);
    }
}

//var loadedFunction = function(lib) {
function loadedFunction(lib) {
    console.log(lib+' - Loaded');
};