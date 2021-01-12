const activities = [
  {
    time: '02 hours ago',
    title: 'Designing Shreyu Admin',
    text: 'Shreyu Admin - A responsive admin and dashboard template',
  },
  {
    time: '21 hours ago',
    title: 'UX and UI for Shreyu Admin',
    text: 'Shreyu Admin - A responsive admin and dashboard template',
  },
  {
    time: '22 hours ago',
    title: 'UX and UI for Hyper Admin',
    text: 'Hyper Admin - A responsive admin and dashboard template',
  },
]

const messageData = [
  {
    image: require('@assets/images/users/avatar-2.jpg'),
    name: 'John Jack',
    text: 'The languages only differ in their grammar',
  },
  {
    image: require('@assets/images/users/avatar-3.jpg'),
    name: 'Theodore',
    text: 'Everyone realizes why a new common language',
  },
  {
    font: 'M',
    name: 'Michael',
    text: 'To an English person, it will seem like simplified',
  },
  {
    image: require('@assets/images/users/avatar-5.jpg'),
    name: 'Tony Lindsey',
    text: 'If several languages coalesce the grammar',
  },
  {
    font: 'R',
    name: 'Robert Wilke',
    text: 'Their separate existence is a myth',
  },
  {
    image: require('@assets/images/users/avatar-7.jpg'),
    name: 'James',
    text: 'The European languages are members.',
  },
  {
    font: 'B',
    name: 'Brian',
    text: 'At vero eos et accusamus et iusto odio',
  },
  {
    image: require('@assets/images/users/avatar-5.jpg'),
    name: 'Aaron Nickel',
    text: 'Itaque earum rerum hic tenetur a sapiente',
  },
]

const projectData = [
  {
    id: 1,
    type: 'Web design',
    status: 'Completed',
    color: 'success',
    title: 'Landing page Design',
    text:
      'If several languages coalesce, the grammar of the resulting language is more regular.',
    images: [
      require('@assets/images/users/avatar-2.jpg'),
      require('@assets/images/users/avatar-3.jpg'),
    ],
    date: '15 Dec',
    bars: 56,
    comment: 224,
    progress: 100,
  },
  {
    id: 2,
    type: 'Android',
    status: 'Pending',
    color: 'warning',
    title: 'App Design and Develop',
    text:
      'To achieve this, it would be necessary to have uniform grammar and more common words.',
    images: [
      require('@assets/images/users/avatar-4.jpg'),
      require('@assets/images/users/avatar-5.jpg'),
    ],
    date: '28 Nov',
    bars: 62,
    comment: 196,
    progress: 72,
  },
  {
    id: 3,
    type: 'Web design',
    status: 'Completed',
    color: 'success',
    title: 'New Admin Design',
    text:
      'To an English person, it will seem like simplified english, as a skeptical Cambridge.',
    images: [require('@assets/images/users/avatar-7.jpg')],
    date: '19 Nov',
    bars: 69,
    comment: 201,
    progress: 100,
  },
  {
    id: 4,
    type: 'Android',
    status: 'Pending',
    color: 'warning',
    title: 'Custom Software Development',
    text:
      'Their separate existence is a myth. For science, music, sport, etc uses the vocabulary',
    images: [
      require('@assets/images/users/avatar-6.jpg'),
      require('@assets/images/users/avatar-7.jpg'),
    ],
    date: '02 Nov',
    bars: 72,
    comment: 184,
    progress: 60,
  },
  {
    id: 5,
    type: 'Web design',
    status: 'Completed',
    color: 'success',
    title: 'Brand logo design',
    text:
      'Everyone realizes why a new common language refuse to pay expensive translators.',
    images: [require('@assets/images/users/avatar-8.jpg')],
    date: '15 Dec',
    bars: 56,
    comment: 224,
    progress: 100,
  },
  {
    id: 6,
    type: 'Android',
    status: 'Completed',
    color: 'success',
    title: 'Landing page Design',
    text:
      'If several languages coalesce, the grammar of the resulting language is more regular.',
    images: [
      require('@assets/images/users/avatar-9.jpg'),
      require('@assets/images/users/avatar-10.jpg'),
    ],
    date: '11 Oct',
    bars: 71,
    comment: 163,
    progress: 100,
  },
]

const tasks = [
  {
    name: 'Draft the new contract document for sales team',
    user: require('@assets//images/users/avatar-9.jpg'),
    time: 'Today 10am',
    task: '3/7',
    message: 21,
    status: 'High',
  },
  {
    name: 'iOS App home page',
    user: require('@assets//images/users/avatar-2.jpg'),
    time: 'Today 4pm',
    task: '2/7',
    message: 48,
    status: 'High',
  },
  {
    name: 'Write a release note',
    user: require('@assets//images/users/avatar-4.jpg'),
    time: 'Today 6pm',
    task: '18/21',
    message: 73,
    status: 'Medium',
  },
  {
    name: 'Invite user to a project',
    user: require('@assets//images/users/avatar-2.jpg'),
    time: 'Tomorrow 7am',
    task: '1/12',
    message: 36,
    status: 'High',
  },
  {
    name: 'Enable analytics tracking',
    user: require('@assets//images/users/avatar-2.jpg'),
    time: '27 Aug 10am',
    task: '13/72',
    message: 211,
    status: 'Low',
  },
  {
    name: 'Code HTML email template',
    user: require('@assets//images/users/avatar-7.jpg'),
    time: 'No Due Date',
    task: '0/7',
    message: 0,
    status: 'Medium',
  },
]
export { activities, messageData, projectData, tasks }
