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


// 创建文档
const courses = new Couese({
  name: 'node.js基础',
  author: '黑马讲师',
  isPublished: true
});

// 保存
courses.save()