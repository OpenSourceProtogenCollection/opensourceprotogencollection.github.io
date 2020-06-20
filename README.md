# Open Source Protogen Collection
Hi! Welcome to the Home Page of the Open Source Protogen Collection, which is a collective of Developers, Fursuit Makers, and many more, making resources for people wanting to make Protogen Fursuits.

## We are still in the process of building our Website
So if you find any bugs leave a Issue on the [Github Page!](https://github.com/OpenSourceProtogenCollection/website)

## Dont mind the garbage below here, it is for our Developers to test out new features. Thank you.

JS:
```js
const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '/audio');

function removeCard(CardIDRC) {
    var audioSourceElement = document.getElementById((CardIDRC + 'audiosource'));
    var audioFilePath = audioSourceElement.getAttribute('src');
    var fileName = path.basename((audioFilePath.toString()))
    var fullPath = (directoryPath + "/" + fileName)
    var cardElement = document.getElementById(CardIDRC);

    let removeCardConfirmData = {
        data: 1
    };

    ipcRenderer.send('backendrequest-DeleteConfirm', removeCardConfirmData);

    ipcRenderer.on('frontendrequest-DeleteConfirmed', (event, arg) => {
        if (arg.rdata == 1) {
            cardElement.style.display = "none";

            fs.unlink(fullPath, (err) => {
                if(err) {
                    return console.log(err);
                }
            }); 
        }
    });
}

fs.readdir(directoryPath, function(err, files) {
    if(err) {
        return console.log('Unable to fetch directory: ' + err);
    } 

    files.forEach(function(file) {
        var unicardID = ('_' + Math.random().toString(36).substr(2, 9))
        var cardname = file.replace('.mp3','');

        createcard(unicardID,cardname,("audio/" + file))
    });
});
```

CSS:
```css
#main_content {
    max-width: 1000px;
    margin: auto;
    padding: 20px 0 50px 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text);
    margin-top: 0 !important;
    margin-bottom: 16px !important;    
}

h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica;
    /*font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    line-height: 1.3;
    letter-spacing: -0.75px;
    -webkit-font-smoothing: antialiased;
    font-weight: 100;    
}

h1 {
    font-size: 36px;
    padding-bottom: .3em;
    border-bottom: 1px solid #eaecef;
}
```

Test Test, Hello World!

> **NOTE:** This is a note, WOWIE!!

> This is a normal backquote.
