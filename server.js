var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var  articles = {
   'article-one': {
        title: 'Article One | Satya Sahoo',
        heading: 'Article One',
        date: 'sep 5,2017',
        content: `
              <p>
                satya sahoo satya sahoo satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
              </p>
              <p>
                satya sahoo satya sahoo satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
              </p>
              <p>
                satya sahoo satya sahoo satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
                satya sahoo satya sahoosatya sahoo satya sahoosatya sahoo satya sahoo
              </p> `
     
    
    },
   'article-two': { 
        title: 'Article Two | Satya Sahoo',
        heading: 'Article Two',
        date: 'july 7,2017',
        content: `
              <p>
                its article two page 
              </p> `
              
     },
   'articl-three': { 
        title: 'Article three | Satya Sahoo',
        heading: 'Article three',
        date: 'aug 7,2017',
        content: `
              <p>
               its article three page setup
              </p> `
     }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    
    var htmlTemplate =`
     <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
               ${date}
            </div>
            <div>
               ${content}
            </div>
          </div>
        </body>
    </html>
  `;
  return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
 });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
