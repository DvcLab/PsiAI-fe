const chatData = [
    {
        id: 1,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Steven Franklin',
        message: 'Hey! there I\'m available',
        time: '05 min',
        color: 'secondary'
    },
    {
        id: 2,
        image: require('@/assets/images/users/avatar-3.jpg'),
        name: 'Adam Miller',
        message: 'I\'ve finished it! See you so',
        time: '12 min',
        color: 'success'
    },
    {
        id: 3,
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
    {
        id: 4,
        image: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '1 hr',
        color: 'warning'
    },
    {
        id: 5,
        name: 'Mitchel Givens',
        message: 'Hey! there I\'m available',
        time: '3 hrs',
        color: 'secondary'
    },
    {
        id: 6,
        image: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Stephen Hadley',
        message: 'I\'ve finished it! See you so',
        time: '5 hrs',
        color: 'success'
    },
    {
        id: 7,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Leord Joseph',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
];

const chatMessagesData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];

export { chatData, chatMessagesData };