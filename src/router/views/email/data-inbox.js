const emailData = [
    {
        id: 1,
        unread: true,
        text: 'warning',
        title: 'Lucas Kriebel (via Twitter)',
        subject: 'Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter! @LucasKriebel - Very cool :) Nicklas, You have a new direct message.',
        date: '10-Jan'
    },
    {
        id: 2,
        title: 'Randy, me (5)',
        subject: 'Yeah i\'d like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!',
        date: '01-Feb'
    },
    {
        id: 3,
        title: 'Bruen-McCullough',
        subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        date: '28-Apr'
    }, {
        id: 4,
        text: 'warning',
        title: 'Muller LLC',
        subject: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        date: '08-Jan'
    }, {
        id: 5,
        title: 'Haley and Sons',
        subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        date: '16-Nov'
    }, {
        id: 6,
        unread: true,
        title: 'Kohler-Effertz',
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '05-Oct'
    }, {
        id: 7,
        text: 'warning',
        title: 'Stokes, Fay and Pfeffer',
        subject: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '16-Apr'
    }, {
        id: 8,
        text: 'warning',
        title: 'Hintz-O\'Reilly',
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        date: '30-Dec'
    }, {
        id: 9,
        title: 'Franecki, Simonis and Dach',
        subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        date: '20-Feb'
    }, {
        id: 10,
        unread: true,
        text: 'warning',
        title: 'Keeling-Bergstrom',
        subject: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        date: '26-Jan'
    }, {
        id: 11,
        title: 'Waters, Jacobs and Ortiz',
        subject: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        date: '09-Dec'
    }, {
        id: 12,
        text: 'warning',
        title: 'Ernser, Bernier and Schaden',
        subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '29-Apr'
    }, {
        id: 13,
        title: 'Davis, Pouros and Welch',
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        date: '12-Jun'
    }, {
        id: 14,
        title: 'O\'Keefe Group\'',
        subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        date: '01-Mar'
    }, {
        id: 15,
        text: 'warning',
        title: 'Batz, Abbott and Jakubowski',
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        date: '12-Oct'
    }, {
        id: 16,
        unread: true,
        title: 'Mertz and Sons',
        subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        date: '09-May'
    }, {
        id: 17,
        title: 'Thompson Group',
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '26-Dec'
    }, {
        id: 18,
        title: 'Jerde, Okuneva and Klocko',
        subject: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        date: '02-Feb'
    }, {
        id: 19,
        text: 'warning',
        title: 'Boyer-Lubowitz',
        subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        date: '13-Nov'
    }, {
        id: 20,
        title: 'Gutmann, McLaughlin and Nienow',
        subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '25-Jul'
    }, {
        id: 21,
        text: 'warning',
        title: 'Lebsack-Schmitt',
        subject: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Sep'
    }, {
        id: 22,
        unread: true,
        title: 'Jacobi-Greenholt',
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '16-May'
    }, {
        id: 23,
        title: 'Kutch, Jacobson and Kozey',
        subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        date: '06-Apr'
    }, {
        id: 24,
        text: 'warning',
        title: 'Bernhard and Sons',
        subject: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '09-Feb'
    }, {
        id: 25,
        title: 'Kunze Inc',
        text: 'warning',
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '11-May'
    }, {
        id: 26,
        title: 'Miller Group',
        subject: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        date: '19-Jul'
    }, {
        id: 27,
        title: 'Durgan and Sons',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '23-Dec'
    }, {
        id: 28,
        text: 'warning',
        title: 'Pfannerstill-Kautzer',
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '20-Jan'
    }, {
        id: 29,
        title: 'O\'Reilly-Ferry',
        subject: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        date: '29-Apr'
    }, {
        id: 30,
        title: 'Shields, Jast and Towne',
        subject: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '16-Feb'
    }, {
        id: 31,
        text: 'warning',
        title: 'Mayert-Dickinson',
        subject: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Dec'
    }, {
        id: 32,
        title: 'Little LLC',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '07-Mar'
    }, {
        id: 33,
        text: 'warning',
        title: 'Crist, Blanda and Wuckert',
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        date: '13-Aug'
    }, {
        id: 34,
        text: 'warning',
        title: 'Williamson-Sanford',
        subject: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        date: '09-Jul'
    }, {
        id: 35,
        title: 'Gleason-Shanahan',
        subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        date: '13-May'
    }, {
        id: 36,
        unread: true,
        title: 'Franecki-Hodkiewicz',
        subject: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        date: '15-Mar'
    }, {
        id: 37,
        title: 'Bailey-Simonis',
        subject: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '18-Sep'
    }, {
        id: 38,
        text: 'warning',
        title: 'Grant-Volkman',
        subject: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        date: '13-Mar'
    }, {
        id: 39,
        title: 'Kshlerin-Cole',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '21-Nov'
    }, {
        id: 40,
        title: 'Pouros-Funk',
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        date: '05-Jun'
    }, {
        id: 41,
        title: 'Ziemann-Denesik',
        subject: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        date: '14-Apr'
    }, {
        id: 42,
        title: 'Johnson LLC',
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '30-Nov'
    }, {
        id: 43,
        title: 'Cummings-Ferry',
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        date: '30-Nov'
    }, {
        id: 44,
        title: 'Weimann-Lueilwitz',
        subject: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        date: '06-Nov'
    }, {
        id: 45,
        unread: true,
        title: 'Zieme, Krajcik and Champlin',
        subject: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        date: '28-Mar'
    }, {
        id: 46,
        title: 'Toy-Kunde',
        subject: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        date: '27-Dec'
    }, {
        id: 47,
        title: 'Mosciski and Sons',
        subject: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '04-Feb'
    }, {
        id: 48,
        title: 'Lowe, Windler and Wolff',
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '13-Mar'
    }, {
        id: 49,
        text: 'warning',
        title: 'Bruen-Bashirian',
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        date: '04-Mar'
    }, {
        id: 50,
        title: 'Nader, Hickle and Ullrich',
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '28-May'
    }, {
        id: 51,
        text: 'warning',
        title: 'Reilly-Homenick',
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '18-Jan'
    }, {
        id: 52,
        unread: true,
        title: 'O\'Connell and Sons',
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '03-Aug'
    }];


export { emailData };

