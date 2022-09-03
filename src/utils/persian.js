import {CalendarIcon, ChartBarIcon, FolderIcon, InboxIcon, UsersIcon} from "@heroicons/vue/24/solid";

export const copyRight = "تمامی حقوق محفوظ است"
export const navigation = [

    {name: 'کاربران', icon: UsersIcon, href: '#', count: 3, current: false, subMenu: ["مشتریان", "کاربران ادمین"]},
    {name: 'مدیریت درخواست‌ها', icon: FolderIcon, href: '#', count: 4, current: false},
    {name: 'معاملات انجام شده', icon: CalendarIcon, href: '#', current: false},
    {name: 'قوانین و محدودیت‌ها', icon: InboxIcon, href: '#', current: false},
    {name: 'دسترسی‌ها', icon: ChartBarIcon, href: '#', count: 12, current: false}
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
