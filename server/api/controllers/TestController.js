/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var users = [{
  username: 'xiaoshuangjiu',
  password: 'aaaaaa',
  name: '肖双九',
  role: 'Faculty',
  title: "Assistant Professor"
}, {
  username: 'dongdeli',
  password: 'aaaaaa',
  name: '董德礼',
  role: 'Faculty',
  title: "Teacher"
}, {
  username: 'hechong',
  password: 'aaaaaa',
  name: '何冲',
  role: 'Student',
  title: "Master"
}, {
  username: 'hanrui',
  password: 'aaaaaa',
  name: '韩蕊',
  role: 'Student',
  title: "Master"
}, {
  username: 'lizhi',
  password: 'aaaaaa',
  name: '李智',
  role: 'Student',
  title: "Master"
}, {
  username: 'zhangjingjing',
  password: 'aaaaaa',
  name: '张京京',
  role: 'Student',
  title: "Master"
}, {
  username: 'huangxin',
  password: 'aaaaaa',
  name: '黄鑫',
  role: 'Student',
  title: "Master"
}, {
  username: 'jianglan',
  password: 'aaaaaa',
  name: '蒋兰',
  role: 'Student',
  title: "Master"
}]


module.exports = {
  importTestData: coExpress(function*(req, res) {
    for (var i = 0; i < users.length; ++i) {
      var user = users[i];
      var createdUser = yield User.findOrCreate({
        username: user.username
      }, user);
    }
    res.ok();
  })
};