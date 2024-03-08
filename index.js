const express = require('express');
const app = express();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  
const upload = multer({storage});
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/upload', upload.single('file'), (req,res)=>{
    res.json(req.file);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
