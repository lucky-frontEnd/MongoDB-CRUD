const mongoose = require('mongoose')

// 数据库连接 port:27017
mongoose.connect('mongodb://localhost/testdemo', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log(err, '数据库连接失败'))
