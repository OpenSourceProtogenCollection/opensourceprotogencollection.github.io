const api_TreeURL = "https://api.github.com/repos/OpenSourceProtogenCollection/opensourceprotogencollection.github.io/git/trees/master?recursive=1";
const website_Domain = "https://protogencollection.aerofur.nz/"

fetch(api_TreeURL)
	.then(function(response) {
		return response.json()
	}).then(function(json) {
		function GetSortOrder(prop) {    
			return function(a, b) {    
				if (a[prop] > b[prop]) {    
					return 1;    
				} else if (a[prop] < b[prop]) {    
					return -1;    
				}    
				return 0;    
			}    
		}    
			
		(json.tree).sort(GetSortOrder("path"));  

		document.write("RestAPI JSON Paths : ");   
		document.write("<br>"); 

		for (var item in (json.tree)) {  
			var sortedPaths = ((json.tree)[item].path)

			if (RegExp('^blog/*').test(sortedPaths)) {
				if (RegExp('.md$').test(sortedPaths)) {
					var filename = sortedPaths.replace(/^.*[\\\/]/, '')
					var postname = ((filename.replace(/.md$/, '')).replace(/\d{2,4}[\-|\.|\/]\d{1,2}[\-|\.|\/]\d{1,2}/g, "")).replace(/-/g, ' ')
					var postdate = ((filename.replace(/.md$/, '')).substring(0,10)).replace(/[\-|\.|\/]/g, '-')

					document.write("<br>" + "url: " + (website_Domain+sortedPaths));    
					document.write("<br>" + "filename: " + filename);   
					document.write("<br>" + "postname: " + postname);   
					document.write("<br>" + "postdate: " + postdate);  
					document.write("<br>"); 
				}
			}
		}      

	}).catch(function(ex) {
		console.log('parsing failed', ex)
	}
)     
