const mongoose = require('mongoose')
// 链接数据库
mongoose.connect('mongodb://localhost/playload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log('数据库连接失败'))
// 创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})
// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Couese = mongoose.model('Course', courseSchema) // courses

// Couese.create({
//   name: 'java',
//   author: '黑马讲师',
//   isPublished: true
// }, (err, doc) => {
//   // 错误对象
//   console.log(err);
//   // 当前插入的文档
//   console.log(doc);
// })

// 通过构造函数的create 方法进行创建
Couese.create({
  name: 'UI设计',
  author: '黑马讲师',
  isPublished: false
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})