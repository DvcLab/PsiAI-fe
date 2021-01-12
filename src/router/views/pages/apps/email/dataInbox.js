const emailData = [
  {
    status: 'unread',
    star: 'true',
    title: 'Lucas Kriebel (via Twitter)',
    subject:
      'Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter! @LucasKriebel - Very cool :) Nicklas, You have a new direct message.',
    date: '10-Jan',
  },
  {
    status: 'unread',
    star: 'true',
    title: 'Randy, me (5)',
    subject:
      "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
    date: '01-Feb',
  },
  {
    status: 'unread',
    title: 'Bruen-McCullough',
    subject:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    date: '28-Apr',
  },
  {
    status: 'important',
    title: 'Muller LLC',
    subject:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    date: '08-Jan',
  },
  {
    status: 'important',
    star: 'true',
    title: 'Haley and Sons',
    subject:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    date: '16-Nov',
  },
  {
    status: 'important',
    title: 'Kohler-Effertz',
    subject:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    date: '05-Oct',
  },
  {
    status: 'important',
    star: 'true',
    title: 'Stokes, Fay and Pfeffer',
    subject:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    date: '16-Apr',
  },
  {
    status: 'else',
    star: 'true',
    title: "Hintz-O'Reilly",
    subject:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    date: '30-Dec',
  },
  {
    status: 'else',
    title: 'Franecki, Simonis and Dach',
    subject:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    date: '20-Feb',
  },
  {
    status: 'else',
    star: 'true',
    title: 'Keeling-Bergstrom',
    subject:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    date: '26-Jan',
  },
  {
    status: 'else',
    title: 'Waters, Jacobs and Ortiz',
    subject:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    date: '09-Dec',
  },
  {
    status: 'else',
    star: 'true',
    title: 'Ernser, Bernier and Schaden',
    subject:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '29-Apr',
  },
  {
    status: 'else',
    title: 'Davis, Pouros and Welch',
    subject:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    date: '12-Jun',
  },
  {
    status: 'else',
    title: "O'Keefe Group'",
    subject:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    date: '01-Mar',
  },
  {
    status: 'else',
    star: 'true',
    title: 'Batz, Abbott and Jakubowski',
    subject:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    date: '12-Oct',
  },
  {
    status: 'else',
    title: 'Mertz and Sons',
    subject:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    date: '09-May',
  },
  {
    status: 'else',
    title: 'Muller LLC',
    subject:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    date: '08-Jan',
  },
  {
    status: 'else',
    title: "Hintz-O'Reilly",
    subject:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    date: '30-Dec',
  },
]

export { emailData }
