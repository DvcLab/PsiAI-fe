const projects = [
  {
    title: 'StyleTransfer',
    // 图片地址
    imgUrl: '',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    // 简介
    desc: "This repository contains a slightly modified version of Fast Style Transfer in TensorFlow. It trains a neural network on the style of any image you provide it and outputs a model you can use in ml5.js with the ml5.styleTransfer() method.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本、任务
    star: 1500,           // 收藏
    fork: 11,             // fork
    // 标签
    tags: ['计算机视觉', '机器学习'],
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
    },{
      userId: 'admin3',
      nickname: 'Admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      nickname: 'Admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      nickname: 'Admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      nickname: 'Admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: false
  },
  {
    title: 'Fashion MNIST',
    // 图片地址
    imgUrl: '',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本
    star: 1500,           // 收藏
    fork: 16,             // fork
    // 标签
    tags: ['机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      nickname: 'Admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      nickname: 'Admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      nickname: 'Admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      nickname: 'Admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      nickname: 'Admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      nickname: 'Admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: true
  }
]

const datasets = [
  {
    title: 'Fashion MNIST',
    // 图片地址
    imgUrl: '',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    type: '图片',         // 框架
    task: '标签分类',     // 任务
    like: 11,            // 点赞
    star: 1500,          // 收藏
    watch: 16000,        // 浏览
    // 标签
    tags: ['科学', '生活'],
    // 参与用户
    users: [{
      userId: 'admin1',
      nickname: 'Admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      nickname: 'Admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      nickname: 'Admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      nickname: 'Admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      nickname: 'Admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      nickname: 'Admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: false
  },
]

const papers = [
  {
    id: 1,
    title: 'GENIA corpus—a semantically annotated corpus for bio-textmining',
    abstract: 'Motivation: Natural language processing (NLP) methods are regarded as being useful to raise the potential of text mining from biological literature. The lack of an extensively annotated corpus of this literature, however, causes a major bottleneck for applying NLP …',
    authors: ['JD Kim', 'T Ohta', 'Y Tateisi', 'J Tsujii'],
    publication: 'Literary and linguistic computing',
    website: 'academic.oup.com',
    citations: 1148,
    releaseTime: '2003',
    readTime: 1608175895208
  },
  {
    id: 2,
    title: 'Corpus design criteria',
    abstract: 'Motivation: Natural language processing (NLP) methods are regarded as being useful to raise the potential of text mining from biological literature. The lack of an extensively annotated corpus of this literature, however, causes a major bottleneck for applying NLP …',
    authors: ['S Atkins', 'J Clear', 'N Ostler'],
    publication: 'Literary and linguistic computing',
    website: 'academic.oup.com',
    citations: 734,
    releaseTime: '1992',
  }
]

const notes = [
  {
    id: 1,
    title: '人工智能(crawler)',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    type: 'proj',
    createdTime: 1608174894608,
    updateTime: 1608175895208,
    detail: '通过对各种爬虫的主流技术进行研究得出了关于目前网络爬虫所遇到的问题与解决方案进行了较为详细的阐述。在实例中，选用了对国内主流的豆瓣，猫眼电影，今日头条等进行实际的数据抓取，但是随着时间流逝，目标网站的更新，可能有部分代码无法正常运行。本讲义研究内容和组织结构按照如下编排：第一章：爬虫简介，简单介绍了什么是爬虫',
    comment: 56,
    star: 32,
    isInvalid: false
  },
  {
    id: 2,
    title: 'crawler',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    type: 'paper',
    createdTime: 1608174890608,
    updateTime: 1608176895208,
    detail: 'Learning to store information over extended time intervals via recurrent back propagation takes a very long time, mostly due to insu cient, decaying error back ow. We brie y review 1991 analysis of this problem, then address it by introducing a novel, e cient, gradient-based method called long Short-Term Memory" (LSTM). Truncating the ',
    comment: 0,
    star: 2,
    isInvalid: false
  },
  {
    id: 3,
    title: '人工智能(crawler)',
    userId: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    type: 'paper',
    createdTime: 1608174890608,
    updateTime: 1608176895208,
    detail: 'Learning to store information over extended time intervals via recurrent back propagation takes a very long time, mostly due to insu cient, decaying error back ow. We brie y review 1991 analysis of this problem, then address it by introducing a novel, e cient, gradient-based method called long Short-Term Memory" (LSTM). Truncating the ',
    comment: 10,
    star: 22,
    isInvalid: true
  },
]

const containers = [
  {
    title: 'a1b2c3a1b2c3a1b2',
    type: '基础版',
    detail: '2核4G内存',
    username: 'admin',
    nickname: 'Admin',
    avatar: require('@assets/images/users/avatar.svg'),
    proj: 'Lafayette / StyleTrans',
    branch: 'ChaosTransStype',
    createdTime: 1608174894608,
    updateTime: 1608175895208,
    state: 'running',
    runningDuration: 100000,
    users: [{
      userId: 'admin1',
      nickname: 'Admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      nickname: 'Admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      nickname: 'Admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      nickname: 'Admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      nickname: 'Admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      nickname: 'Admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
  },
]

const user = {
  id: 1,
  username: 'admin',
  nickname: 'Admin',
  avatar: require('@assets/images/users/avatar.svg'),
  detail: 'Hi I\'m Shreyu. I am user experience and user interface designer. I have been working on UI & UX since last 10 years.',
  email: 'admin@gmail.com',
  // phone: '(123) 123 1234',
  blog: 'www.google.com',
  from: 'github',
  profileCompeted: 0.7,
  skills: ['UI design', 'UX', 'Sketch', 'Photoshop', 'Frontend']
}

export { projects, datasets, papers, notes, containers, user }