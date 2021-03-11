export const menuItems = [
    {
        id: 1,
        label: 'menuitems.dashboards.text',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'menuitems.dashboards.list.default',
                link: '/',
                parentId: 1
            },
            {
                id: 3,
                label: 'menuitems.dashboards.list.saas',
                link: '/dashboard/saas',
                parentId: 1
            },
            {
                id: 4,
                label: 'menuitems.dashboards.list.crypto',
                link: '/dashboard/crypto',
                parentId: 1
            },
            {
                id: 5,
                label: 'menuitems.dashboards.list.blog',
                link: '/dashboard/blog',
                parentId: 1
            },
        ]
    },
    {
        id: 6,
        label: 'menuitems.uielements.text',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'menuitems.uielements.list.alerts',
                link: '/ui/alerts',
                parentId: 6
            },
            {
                id: 8,
                label: 'menuitems.uielements.list.buttons',
                link: '/ui/buttons',
                parentId: 6
            },
            {
                id: 9,
                label: 'menuitems.uielements.list.cards',
                link: '/ui/cards',
                parentId: 6
            },
            {
                id: 10,
                label: 'menuitems.uielements.list.carousel',
                link: '/ui/carousel',
                parentId: 6
            },
            {
                id: 11,
                label: 'menuitems.uielements.list.dropdowns',
                link: '/ui/dropdowns',
                parentId: 6
            },
            {
                id: 12,
                label: 'menuitems.uielements.list.grid',
                link: '/ui/grid',
                parentId: 6
            },
            {
                id: 13,
                label: 'menuitems.uielements.list.images',
                link: '/ui/images',
                parentId: 6
            },
            {
                id: 14,
                label: 'menuitems.uielements.list.modals',
                link: '/ui/modals',
                parentId: 6
            },
            {
                id: 15,
                label: 'menuitems.uielements.list.rangeslider',
                link: '/ui/rangeslider',
                parentId: 6
            },
            {
                id: 16,
                label: 'menuitems.uielements.list.progressbar',
                link: '/ui/progressbars',
                parentId: 6
            },
            {
                id: 17,
                label: 'menuitems.uielements.list.sweetalert',
                link: '/ui/sweet-alert',
                parentId: 6
            },
            {
                id: 18,
                label: 'menuitems.uielements.list.tabs',
                link: '/ui/tabs-accordions',
                parentId: 6
            },
            {
                id: 19,
                label: 'menuitems.uielements.list.typography',
                link: '/ui/typography',
                parentId: 6
            },
            {
                id: 20,
                label: 'menuitems.uielements.list.video',
                link: '/ui/video',
                parentId: 6
            },
            {
                id: 21,
                label: 'menuitems.uielements.list.general',
                link: '/ui/general',
                parentId: 6
            },
            {
                id: 22,
                label: 'menuitems.uielements.list.colors',
                link: '/ui/colors',
                parentId: 6
            },
            {
                id: 23,
                label: "menuitems.uielements.list.lightbox",
                link: "/ui/lightbox",
                parentId: 6
            },
            {
                id: 24,
                label: "menuitems.uielements.list.cropper",
                link: "/ui/image-cropper",
                parentId: 6
            },
        ]
    },
    {
        id: 25,
        label: 'menuitems.apps.text',
        icon: 'bx-customize',
        subItems: [
            {
                id: 26,
                label: 'menuitems.calendar.text',
                link: '/calendar',
                parentId: 25
            },
            {
                id: 27,
                label: 'menuitems.chat.text',
                link: '/chat',
                parentId: 25
            },
            {
                id: 28,
                label: "menuitems.filemanager.text",
                link: "/apps/file-manager",
                parentId: 25
            },
            {
                id: 29,
                label: 'menuitems.email.text',
                subItems: [
                    {
                        id: 30,
                        label: 'menuitems.email.list.inbox',
                        link: '/email/inbox',
                        parentId: 29
                    },
                    {
                        id: 31,
                        label: 'menuitems.email.list.reademail',
                        link: '/email/reademail',
                        parentId: 29
                    },
                    {
                        id: 32,
                        label: "menuitems.email.list.template.text",
                        parentId: 29,
                        subItems: [
                            {
                                id: 33,
                                label: 'menuitems.email.list.template.list.basic',
                                link: '/email/templates/basic',
                                parentId: 32
                            },
                            {
                                id: 34,
                                label: 'menuitems.email.list.template.list.alert',
                                link: '/email/templates/alert',
                                parentId: 32
                            },
                            {
                                id: 35,
                                label: 'menuitems.email.list.template.list.billing',
                                link: '/email/templates/billing',
                                parentId: 32
                            }
                        ]
                    }
                ]
            },
            {
                id: 36,
                label: 'menuitems.ecommerce.text',
                subItems: [
                    {
                        id: 37,
                        label: 'menuitems.ecommerce.list.products',
                        link: '/ecommerce/products',
                        parentId: 36
                    },
                    {
                        id: 38,
                        label: 'menuitems.ecommerce.list.productdetail',
                        link: '/ecommerce/product-detail',
                        parentId: 36
                    },
                    {
                        id: 39,
                        label: 'menuitems.ecommerce.list.orders',
                        link: '/ecommerce/orders',
                        parentId: 36
                    },
                    {
                        id: 40,
                        label: 'menuitems.ecommerce.list.customers',
                        link: '/ecommerce/customers',
                        parentId: 36
                    },
                    {
                        id: 41,
                        label: 'menuitems.ecommerce.list.cart',
                        link: '/ecommerce/cart',
                        parentId:36
                    },
                    {
                        id: 42,
                        label: 'menuitems.ecommerce.list.checkout',
                        link: '/ecommerce/checkout',
                        parentId: 36
                    },
                    {
                        id: 43,
                        label: 'menuitems.ecommerce.list.shops',
                        link: '/ecommerce/shops',
                        parentId: 36
                    },
                    {
                        id: 44,
                        label: 'menuitems.ecommerce.list.addproduct',
                        link: '/ecommerce/add-product',
                        parentId: 36
                    },
                ]
            },
            {
                id: 45,
                label: 'menuitems.crypto.text',
                icon: 'bx-bitcoin',
                subItems: [
                    {
                        id: 46,
                        label: 'menuitems.crypto.list.wallet',
                        link: '/crypto/wallet',
                        parentId: 45
                    },
                    {
                        id: 47,
                        label: 'menuitems.crypto.list.buy/sell',
                        link: '/crypto/buy-sell',
                        parentId: 45
                    },
                    {
                        id: 48,
                        label: 'menuitems.crypto.list.exchange',
                        link: '/crypto/exchange',
                        parentId: 45
                    },
                    {
                        id: 49,
                        label: 'menuitems.crypto.list.lending',
                        link: '/crypto/lending',
                        parentId: 45
                    },
                    {
                        id: 50,
                        label: 'menuitems.crypto.list.orders',
                        link: '/crypto/orders',
                        parentId: 45
                    },
                    {
                        id: 51,
                        label: 'menuitems.crypto.list.kycapplication',
                        link: '/crypto/kyc-application',
                        parentId: 45
                    },
                    {
                        id: 52,
                        label: 'menuitems.crypto.list.icolanding',
                        link: '/crypto/ico-landing',
                        parentId: 45
                    }
                ]
            },
            {
                id: 53,
                label: 'menuitems.projects.text',
                subItems: [
                    {
                        id: 54,
                        label: 'menuitems.projects.list.grid',
                        link: '/projects/grid',
                        parentId: 53
                    },
                    {
                        id: 55,
                        label: 'menuitems.projects.list.projectlist',
                        link: '/projects/list',
                        parentId: 53
                    },
                    {
                        id: 56,
                        label: 'menuitems.projects.list.overview',
                        link: '/projects/overview',
                        parentId: 53
                    },
                    {
                        id: 57,
                        label: 'menuitems.projects.list.create',
                        link: '/projects/create',
                        parentId: 53
                    }
                ]
            },
            {
                id: 58,
                label: 'menuitems.tasks.text',
                subItems: [
                    {
                        id: 59,
                        label: 'menuitems.tasks.list.tasklist',
                        link: '/tasks/list',
                        parentId: 58
                    },
                    {
                        id: 60,
                        label: 'menuitems.tasks.list.kanban',
                        link: '/tasks/kanban',
                        parentId: 58
                    },
                    {
                        id: 61,
                        label: 'menuitems.tasks.list.createtask',
                        link: '/tasks/create',
                        parentId: 58
                    }
                ]
            },
            {
                id: 62,
                label: 'menuitems.contacts.text',
                icon: 'bxs-user-detail',
                subItems: [
                    {
                        id: 63,
                        label: 'menuitems.contacts.list.usergrid',
                        link: '/contacts/grid',
                        parentId: 62
                    },
                    {
                        id: 64,
                        label: 'menuitems.contacts.list.userlist',
                        link: '/contacts/list',
                        parentId: 61
                    },
                    {
                        id: 65,
                        label: 'menuitems.contacts.list.profile',
                        link: '/contacts/profile',
                        parentId: 61
                    }
                ]
            },
            {
                id: 66, 
                label: "menuitems.blog.text",
                icon: "bx-detail",
                subItems: [
                    {
                        id: 67,
                        label: 'menuitems.blog.list.bloglist',
                        link: '/blog/list',
                        parentId: 66
                    },
                    {
                        id: 68,
                        label: 'menuitems.blog.list.grid',
                        link: '/blog/grid',
                        parentId: 66
                    },
                    {
                        id: 69,
                        label: 'menuitems.blog.list.detail',
                        link: '/blog/detail',
                        parentId: 66
                    }
                ]
            },
        ]
    },
    {
        id: 70,
        icon: 'bx-collection',
        label: 'menuitems.components.text',
        subItems: [
            {
                id: 71,
                label: 'menuitems.forms.text',
                subItems: [
                    {
                        id: 72,
                        label: 'menuitems.forms.list.elements',
                        link: '/form/elements',
                        parentId: 71
                    },
                    {
                        id: 73,
                        label: 'menuitems.forms.list.layouts',
                        link: '/form/layouts',
                        parentId: 71
                    },
                    {
                        id: 74,
                        label: 'menuitems.forms.list.validation',
                        link: '/form/validation',
                        parentId: 71
                    },
                    {
                        id: 75,
                        label: 'menuitems.forms.list.advanced',
                        link: '/form/advanced',
                        parentId: 71
                    },
                    {
                        id: 76,
                        label: 'menuitems.forms.list.editor',
                        link: '/form/editor',
                        parentId: 71
                    },
                    {
                        id: 77,
                        label: 'menuitems.forms.list.fileupload',
                        link: '/form/uploads',
                        parentId: 71
                    },
                    {
                        id: 78,
                        label: 'menuitems.forms.list.repeater',
                        link: '/form/repeater',
                        parentId: 71
                    },
                    {
                        id: 79,
                        label: 'menuitems.forms.list.wizard',
                        link: '/form/wizard',
                        parentId: 71
                    },
                    {
                        id: 80,
                        label: 'menuitems.forms.list.mask',
                        link: '/form/mask',
                        parentId: 71
                    }
                ]
            },
            {
                id: 81,
                label: 'menuitems.tables.text',
                subItems: [
                    {
                        id: 82,
                        label: 'menuitems.tables.list.basic',
                        link: '/tables/basic',
                        parentId: 81
                    },
                    {
                        id: 83,
                        label: 'menuitems.tables.list.advanced',
                        link: '/tables/advanced',
                        parentId: 81
                    }
                ]
            },
            {
                id: 84,
                label: 'menuitems.charts.text',
                subItems: [
                    {
                        id: 85,
                        label: 'menuitems.charts.list.apex',
                        link: '/charts/apex',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'menuitems.charts.list.chartjs',
                        link: '/charts/chartjs',
                        parentId: 84
                    },
                    {
                        id: 87,
                        label: 'menuitems.charts.list.chartist',
                        link: '/charts/chartist',
                        parentId: 84
                    },
                    {
                        id: 88,
                        label: 'menuitems.charts.list.echart',
                        link: '/charts/echart',
                        parentId: 84
                    }
                ]
            },
            {
                id: 89,
                label: 'menuitems.icons.text',
                subItems: [
                    {
                        id: 90,
                        label: 'menuitems.icons.list.boxicons',
                        link: '/icons/boxicons',
                        parentId: 89
                    },
                    {
                        id: 91,
                        label: 'menuitems.icons.list.materialdesign',
                        link: '/icons/materialdesign',
                        parentId: 89
                    },
                    {
                        id: 92,
                        label: 'menuitems.icons.list.dripicons',
                        link: '/icons/dripicons',
                        parentId: 89
                    },
                    {
                        id: 93,
                        label: 'menuitems.icons.list.fontawesome',
                        link: '/icons/fontawesome',
                        parentId: 89
                    },
                ]
            },
            {
                id: 94,
                label: 'menuitems.maps.text',
                subItems: [
                    {
                        id: 95,
                        label: 'menuitems.maps.list.googlemap',
                        link: '/maps/google',
                        parentId: 94
                    },
                    {
                        id: 96,
                        label: "menuitems.maps.list.leafletmap",
                        link: "/maps/leaflet",
                        parentId: 94
                    },
                ]
            }
        ]
    },
    {
        id: 97,
        label: 'navbar.dropdown.megamenu.extrapages.title',
        icon: 'bx-file',
        subItems: [
            {
                id: 98,
                label: 'menuitems.invoices.text',
                subItems: [
                    {
                        id: 99,
                        label: 'menuitems.invoices.list.invoicelist',
                        link: '/invoices/list',
                        parentId: 98
                    },
                    {
                        id: 100,
                        label: 'menuitems.invoices.list.invoicedetail',
                        link: '/invoices/detail',
                        parentId: 98
                    },
                ]
            },
            {
                id: 101,
                label: 'menuitems.authentication.text',
                subItems: [
                    {
                        id: 102,
                        label: "menuitems.authentication.list.login",
                        link: "/auth/login-1",
                        parentId: 101
                    },
                    {
                        id: 103,
                        label: "menuitems.authentication.list.login-2",
                        link: "/auth/login-2",
                        parentId: 101
                    },
                    {
                        id: 104,
                        label: "menuitems.authentication.list.register",
                        link: "/auth/register-1",
                        parentId: 101
                    },
                    {
                        id: 105,
                        label: "menuitems.authentication.list.register-2",
                        link: "/auth/register-2",
                        parentId: 101
                    },
                    {
                        id: 106,
                        label: "menuitems.authentication.list.recoverpwd",
                        link: "/auth/recoverpwd",
                        parentId: 101
                    },
                    {
                        id: 107,
                        label: "menuitems.authentication.list.recoverpwd-2",
                        link: "/auth/recoverpwd-2",
                        parentId: 101
                    },
                    {
                        id: 108,
                        label: "menuitems.authentication.list.lockscreen",
                        link: "/auth/lock-screen",
                        parentId: 101
                    },
                    {
                        id:109,
                        label: "menuitems.authentication.list.lockscreen-2",
                        link: "/auth/lock-screen-2",
                        parentId: 101
                    },
                    {
                        id: 110,
                        label: "menuitems.authentication.list.confirm-mail",
                        link: "/auth/comfirm-mail",
                        parentId: 101
                    },
                    {
                        id: 111,
                        label: "menuitems.authentication.list.confirm-mail-2",
                        link: "/auth/comfirm-mail-2",
                        parentId: 101
                    },
                    {
                        id: 112,
                        label: "menuitems.authentication.list.verification",
                        link: "/auth/email-verification",
                        parentId: 101
                    },
                    {
                        id: 113,
                        label: "menuitems.authentication.list.verification-2",
                        link: "/auth/email-verification-2",
                        parentId: 101
                    },
                    {
                        id: 114,
                        label: "menuitems.authentication.list.verification-step",
                        link: "/auth/two-step-verification",
                        parentId: 101
                    },
                    {
                        id: 115,
                        label: "menuitems.authentication.list.verification-step-2",
                        link: "/auth/two-step-verification-2",
                        parentId: 101
                    }
                ]
            },
            {
                id: 116,
                label: 'menuitems.utility.text',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 117,
                        label: 'menuitems.utility.list.starter',
                        link: '/pages/starter',
                        parentId: 116
                    },
                    {
                        id: 118,
                        label: 'menuitems.utility.list.maintenance',
                        link: '/pages/maintenance',
                        parentId: 116
                    },
                    {
                        id: 118,
                        label: "menuitems.utility.list.comingsoon",
                        link: "/pages/coming-soon",
                        parentId: 116
                    },
                    {
                        id: 119,
                        label: 'menuitems.utility.list.timeline',
                        link: '/pages/timeline',
                        parentId: 116
                    },
                    {
                        id: 120,
                        label: 'menuitems.utility.list.faqs',
                        link: '/pages/faqs',
                        parentId: 116
                    },
                    {
                        id: 121,
                        label: 'menuitems.utility.list.pricing',
                        link: '/pages/pricing',
                        parentId: 116
                    },
                    {
                        id: 122,
                        label: 'menuitems.utility.list.error404',
                        link: '/pages/404',
                        parentId: 116
                    },
                    {
                        id: 123,
                        label: 'menuitems.utility.list.error500',
                        link: '/pages/500',
                        parentId: 116
                    },
                ]
            },
        ]
    }
];

