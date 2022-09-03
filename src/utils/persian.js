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
export const loginLabels = {
    username: "نام کاربری",
    password: "رمز عبور"
}
export const buttons = {
    login: "ورود"
}

export const titles = {
    login: "ورود به پنل ادمین",
    loginSub: "اطلاعات خود را وارد کنید",
    trade: "جمع ارزش معاملات کاربران",
    wage: "جمع ارزش کارمزد کاربران",
    onlineUsers: "تعداد کاربران آنلاین",
    lastWeek: "این هفته",
    yesterday: "روز قبل",
    maxTrade: "بیشترین خرید و فروش ها در نمادها",
    maxWage: "کاربران با تولید بیشترین کارمزد",
    servicesUsers: "تعداد افراد استفاده کننده از سرویس ها",
    usersView: "نمای کاربران"

}

export const units = {
    toman: "تومان"
}

export const tableTitles = {
    fullName: "نام و نام خانوادگی",
    tade: "حجم معامله",
    wage: "کارمزد تولید شده"
}
