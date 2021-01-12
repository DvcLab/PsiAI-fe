const projects = [
  {
    id: 1,
    title: 'StyleTransfer',
    // 图片地址
    imgUrl: require('@assets/images/covers/2.jpg'),
    username: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    size: 10240,
    // 简介
    desc: "This repository contains a slightly modified version of Fast Style Transfer in TensorFlow. It trains a neural network on the style of any image you provide it and outputs a model you can use in ml5.js with the ml5.styleTransfer() method.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本、任务
    like: 11,             // 点赞
    star: 1500,             // 收藏
    watch: 16000,          // 浏览
    // 标签
    tags: ['计算机视觉', '机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      nickname: 'Admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
      skills: ['UI design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: false
  },
  {
    id: 2,
    title: 'Fashion MNIST',
    // 图片地址
    imgUrl: require('@assets/images/covers/2.jpg'),
    username: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本
    like: 11,             // 点赞
    star: 1500,           // 收藏
    watch: 16000,         // 浏览
    size: 12240,
    // 标签
    tags: ['机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      nickname: 'Admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
      skills: ['UI design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
    },{
      userId: 'admin2',
      nickname: 'Admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    }],
    // 最近更新时间
    updateTime: 1608599994608,
    isArchive: false,
    isInvalid: true
  }
]

const boardList = [
  {
    id: 1,
    username: 'Schubert',
    projName: 'StyleTransfer',
    originRank: 5
  },
  {
    id: 2,
    username: 'Zalando',
    projName: 'Fashion MNIST',
    originRank: 6
  },
  {
    id: 3,
    username: 'Schubert',
    projName: 'StyleTransfer',
    originRank: 1
  },
  {
    id: 4,
    username: 'Zalando',
    projName: 'Fashion MNIST',
    originRank: 3
  },
  {
    id: 5,
    username: 'Schubert',
    projName: 'StyleTransfer',
    originRank: 2
  },
  {
    id: 6,
    username: 'Zalando',
    projName: 'Fashion MNIST',
    originRank: 50
  },
  {
    id: 7,
    username: 'Schubert',
    projName: 'StyleTransfer',
    originRank: 11
  },
  {
    id: 8,
    username: 'Zalando',
    projName: 'Fashion MNIST',
    originRank: 15
  },
  {
    id: 9,
    username: 'Schubert',
    projName: 'StyleTransfer',
    originRank: 9
  },
  {
    id: 10,
    username: 'Zalando',
    projName: 'Fashion MNIST',
    originRank: 8
  },
]
export { projects, boardList }