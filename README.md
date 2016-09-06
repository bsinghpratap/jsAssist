# jsAssist
---------------------------------------------

> There are many libraries that we include in our code for different purposes. To name a few: Bootstrap, typeAhead, font-awesome, semantic etc. 

> But you do not wish to include all these files at every page. Putting them in the basic layout and then using it in all the pages, decrease the speed of many pages.

jsAssist helps in tackling this problem where you can just provide the name of the library that you wish to be included and that library will get included in your file, but it is limited to the number of libraries that are there in the jsAssistConfig file.

```js
var jquery = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
var jqueryUI = 'https://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.min.js';
var bootstrap_css = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css';
var bootstrap_js = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
var dataTables_css = 'https://cdn.datatables.net/1.10.12/css/jquery.dataTables.css';
var dataTables_js = 'https://cdn.datatables.net/1.10.12/js/jquery.dataTables.js';
var typeAhead = 'https://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.js';
var font_awesome = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
var d3 = 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.1.0/d3.min.js';
var semantic_css = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css';
var semantic_js = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js';
```

Only certain changes need to be done to add more libraries into this. 

All that need to be done is: 
```HTML
<script>
	var jsAssistList = ['jquery','bootstrap-min-js','bootstrap-min-css','dataTables','jquery-ui','typeAhead',
	'font_awesome','semantic-min-css','semantic-min-js'];
</script>
<script src="jsAssistConfig.js"></script>
<script src="jsAssist.js"></script>
```

While using the library: 
- If you feel any error or issue, just raise the issue and I'll try to resolve this asap. 
- I have not added a lot of libraries that need to be used.