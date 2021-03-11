const clothsData = [
    {
        id: 1,
        product: require('@/assets/images/product/img-1.png'),
        discount: 10,
        name: 'Half sleeve T-shirt',
        oldprice: 450,
        newprice: 405,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Red'
        }],
        images: [require('@/assets/images/product/img-1.png'), require('@/assets/images/product/img-5.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-6.png')],
        colorVariant: [{
            key: 'Red',
            value: require('@/assets/images/product/img-1.png')
        },
        {
            key: 'Black',
            value: require('@/assets/images/product/img-1.png')
        }]
    },
    {
        id: 2,
        product: require('@/assets/images/product/img-2.png'),
        name: 'Light blue T-shirt',
        discount: 20,
        oldprice: 225,
        newprice: 175,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'Color',
            value: 'Light Blue'
        }],
        images: [require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png'), require('@/assets/images/product/img-5.png'), require('@/assets/images/product/img-3.png')],
        colorVariant: [{
            key: 'Red',
            value: require('@/assets/images/product/img-2.png')
        },
        {
            key: 'Yellow',
            value: require('@/assets/images/product/img-2.png')
        },
        {
            key: 'Green',
            value: require('@/assets/images/product/img-2.png')
        }]
    },
    {
        id: 3,
        product: require('@/assets/images/product/img-3.png'),
        discount: 14,
        name: 'Black Color T-shirt',
        oldprice: 177,
        newprice: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Black'
        }],
        images: [require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-1.png'), require('@/assets/images/product/img-5.png'), require('@/assets/images/product/img-2.png')],
        colorVariant: [{
            key: 'Black',
            value: require('@/assets/images/product/img-3.png')
        },
        {
            key: 'Yellow',
            value: require('@/assets/images/product/img-3.png')
        }]
    },
    {
        id: 4,
        product: require('@/assets/images/product/img-4.png'),
        name: 'Hoodie (Blue)',
        discount: 5,
        oldprice: 150,
        newprice: 145,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Blue'
        }],
        images: [require('@/assets/images/product/img-4.png'), require('@/assets/images/product/img-4.png'), require('@/assets/images/product/img-4.png'), require('@/assets/images/product/img-4.png')],
        colorVariant: [{
            key: 'Blue',
            value: require('@/assets/images/product/img-4.png')
        },
        {
            key: 'Pink',
            value: require('@/assets/images/product/img-4.png')
        }]
    },
    {
        id: 5,
        product: require('@/assets/images/product/img-5.png'),
        discount: 14,
        name: 'Half sleeve T-Shirt',
        oldprice: 177,
        newprice: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Pink'
        }],
        images: [require('@/assets/images/product/img-5.png'), require('@/assets/images/product/img-1.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-3.png')],
        colorVariant: [{
            key: 'Pink',
            value: require('@/assets/images/product/img-5.png')
        },
        {
            key: 'Yellow',
            value: require('@/assets/images/product/img-5.png')
        }]
    },
    {
        id: 6,
        product: require('@/assets/images/product/img-6.png'),
        discount: 22,
        name: 'Green color T-shirt',
        oldprice: 240,
        newprice: 225,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Green'
        }],
        images: [require('@/assets/images/product/img-6.png'), require('@/assets/images/product/img-3.png'), require('@/assets/images/product/img-2.png'), require('@/assets/images/product/img-1.png')],
        colorVariant: [{
            key: 'Black',
            value: require('@/assets/images/product/img-6.png')
        },
        {
            key: 'Yellow',
            value: require('@/assets/images/product/img-6.png')
        }]
    }
];

export { clothsData };