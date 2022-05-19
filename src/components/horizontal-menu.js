export const menuItems = [{
        id: 1,
        label: 'menuitems.dashboard.text',
        icon: 'uil-home-alt',
        link: '/'
    },
    {
        id: 2,
        label: 'Manage Parking',
        icon: 'uil-apps',
        subItems: [{
                id: 1,
                label: 'Parking Grounds',
                link: '/parking-slots'
            },
            {
                id: 2,
                label: 'Parking Slots',
                link: '/parking-ground'
            },
            {
                id: 3,
                label: 'Reserve Parking',
                link: '/reserve'
            },
        ]
    },
    {
        id: 2,
        label: 'Revenue',
        icon: 'uil-apps',
        subItems: [{
                id: 1,
                label: 'Income',
                link: '/income'
            },
            {
                id: 2,
                label: 'Expenses',
                link: '/expenses'
            },
        ]
    },
    {
        id: 2,
        label: 'Front CMS',
        icon: 'uil-apps',
        subItems: [{
                id: 1,
                label: 'Comments',
                link: '/comments'
            },
            {
                id: 2,
                label: 'Complaints',
                link: '/complaints'
            },
            {
                id: 3,
                label: 'Suggestions',
                link: '/suggestions'
            },
        ]
    },


]