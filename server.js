const express = require('express');  
const app = express();  

app.use(express.static('./dist/HerokuApp'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/HerokuApp/'}
  );
  });
  app.listen(process.env.PORT || 8080);

// app.use(express.static(HerokuApp + '/dist'));  
// app.all('*', (req, res) => {  
//   res.status(200).sendFile(HerokuApp + '/dist/index.html');  
// });  
// app.listen(process.env.PORT || 8080); 