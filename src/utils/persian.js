import {CalendarIcon, ChartBarIcon, FolderIcon, InboxIcon, UsersIcon} from "@heroicons/vue/24/solid";

export const copyRight = "تمامی حقوق محفوظ است"
export const navigation = [

    {
        name: 'کاربران',
        icon: UsersIcon,
        subMenu: [{name: "مشتریان", href: '/customers', current: false}, {
            name: "کاربران ادمین",
            href: '/admins',
            current: false
        }]
    },
    {name: 'مدیریت درخواست‌ها', icon: FolderIcon, href: '/requests', current: false},
    {name: 'معاملات انجام شده', icon: CalendarIcon, href: '/trades', current: false},
    {name: 'قوانین و محدودیت‌ها', icon: InboxIcon, href: '/rules', current: false},
    {
        name: 'دسترسی‌ها',
        icon: ChartBarIcon,
        href: '/access',
        count: 12,
        current: false,
        subMenu: [{name: "دسترسی کاربران", href: '/customers', current: false}, {
            name: "دسترسی ادمین",
            href: '/customers',
            current: false
        }]
    }
]
export const loginLabels = {
    username: "نام کاربری",
    password: "رمز عبور"
}
export const buttons = {
    login: "ورود",
    toggleShowFilter: "نمایش فیلترها"
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
    usersView: "نمای کاربران",
    customers: "اطلاعات مشتریان"

}

export const units = {
    toman: "تومان"
}

export const tableTitles = {
    fullName: "نام و نام خانوادگی",
    tade: "حجم معامله",
    wage: "کارمزد تولید شده",
    nationalID: "کد ملی",
    stockID: "کد بورسی",
    username: "نام کاربری",
    accessDate: "تاریخ اهدای دسترسی",
    phoneNumber: "شماره همراه",
    status: "وضعیت"

}

export const status = {
    active: "فعال",
    inactive: "غیرفعال"
}
