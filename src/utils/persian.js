import {CalendarIcon, ChartBarIcon, FolderIcon, InboxIcon, UsersIcon} from "@heroicons/vue/24/solid";

export const copyRight = "تمامی حقوق محفوظ است"
export const navigation = [
    {
        title: "داشبورد", items: [
            {name: 'تیم', icon: UsersIcon, href: '#', count: 3, current: false, subMenu: ["تیم", "تاریخ", "داکس"]},
            {name: 'پروژه‌ها', icon: FolderIcon, href: '#', count: 4, current: false},
            {name: 'تاریخ', icon: CalendarIcon, href: '#', current: false},
            {name: 'داکس', icon: InboxIcon, href: '#', current: false},
            {name: 'گزارش‌ها', icon: ChartBarIcon, href: '#', count: 12, current: false},
        ]
    },

    {
        title: "تیم", items: [
            {name: 'پروژه‌ها', icon: FolderIcon, href: '#', count: 4, current: false},
            {name: 'تاریخ', icon: CalendarIcon, href: '#', current: false, subMenu: ["تیم", "تاریخ", "داکس"]},
            {name: 'داکس', icon: InboxIcon, href: '#', current: false},
            {name: 'گزارش‌ها', icon: ChartBarIcon, href: '#', count: 12, current: false},
        ]
    },
]
