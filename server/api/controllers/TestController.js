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
}];

var publications = [{
  title: 'Single-View Hair Modeling Using A Hairstyle Database',
  year: 2015,
  authors: 'Liwen Hu, Chongyang Ma, Linjie Luo, Hao Li',
  journal: 'ACM Transactions on Graphics, Siggraph 2015'
}, {
  title: 'A Reduced Model for Interactive Hairs',
  year: 2014,
  authors: 'Menglei Chai, Changxi Zheng, Kun Zhou',
  journal: 'ACM Transactions on Graphics, Siggraph 2014'
}, {
  title: 'Robust Hair Capture Using Simulated Examples',
  year: 2014,
  authors: 'Liwen Hu, Chongyang Ma, Linjie Luo, Hao Li',
  journal: 'ACM Transactions on Graphics, Siggraph 2014'
}, {
  title: 'Dynamic Hair Manipulation in Images and Videos',
  year: 2013,
  authors: 'Menglei Chai, Lvdi Wang, Yanlin Weng, Xiaogang Jin, Kun Zhou',
  journal: 'ACM Transactions on Graphics, Siggraph 2013'
}, {
  title: 'Structure-aware Hair Capture',
  year: 2013,
  authors: 'Linjie Luo, Hao Li, Szymon Rusinkiewicz',
  journal: 'ACM Transactions on Graphics, Siggraph 2013'
}, {
  title: 'Single-view Hair Modeling for Portrait Manipulation',
  year: 2012,
  authors: 'Menglei Chai, Lvdi Wang, Yanlin Weng, Yizhou Yu, Baining Guo, Kun Zhou',
  journal: 'ACM Transactions on Graphics, Siggraph 2012'
}, {
  title: 'Example-based Hair Geometry Synthesis',
  year: 2009,
  authors: 'Lvdi Wang, Yizhou Yu, Kun Zhou, Baining Guo',
  journal: 'ACM Transactions on Graphics, Siggraph 2009'
}, {
  title: 'Hair Photobooth: Geometry and Photometric Acquisition of Real Hairstyle',
  year: 2008,
  authors: 'Sylvain Paris, Will Chang, Oleg I. Kozhushnyan, Wojciech Jarosz',
  journal: 'ACM Transactions on Graphics, Siggraph 2008'
}, {
  title: 'A Survey on Hair Modeling: Styling, Simulation, and Rendering',
  year: 2007,
  authors: 'Kelly Ward, Florence Betails, Tae-Yong Kim',
  journal: 'IEEE Transactions on Visualization and Computer Graphics'
}];

var projects = [{
  name: 'Anti-Terrorist Training System',
  abstract: 'ATTS is a mixed-reality project for anti-terrorist action training.'
}, {
  name: 'Anti Plane-Hijack System',
  abstract: 'ATTS is a mixed-reality project for anti-terrorist action training.'
}];

module.exports = {
  importTestData: coExpress(function*(req, res) {
    for (var i = 0; i < users.length; ++i) {
      var user = users[i];
      var createdUser = yield User.findOrCreate({
        username: user.username
      }, user);
    }

    for (var i = 0; i < publications.length; ++i) {
      var pub = publications[i];
      var createdPub = yield Publication.findOrCreate({
        title: pub.title
      }, pub);
    }

    for (var i = 0; i < projects.length; ++i) {
      var project = projects[i];
      var createdProject = yield Project.findOrCreate({
        name: project.name
      }, project);
    }

    res.ok();
  })
};