#ChangelogJS

Demo http://moritzgoeckel.com/ChangelogJS/

A simple changelog frontend for a code competition. It supports the following data structure:
```javascript
 {
        "product":"", //The product name
        "version":"", //The version
        "type":"", //May be "Task" "Cleanup" "Feature" or "Bugfix"
        "title":"", //The title of the change
        "media":"" //Additional information in HTML-format
 }
```

It generates a fancy changlog page with the given changes. There is no backend yet, only example data. I use JQuery and Bootstrap, it is fully responsive. 
