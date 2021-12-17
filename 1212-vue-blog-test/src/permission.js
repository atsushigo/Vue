import router from "./router"

router.beforeEach((to, from, next) => {
    //如果此路由需要權限的話
    if (to.matched.some(record => record.meta.requireAuth)) {
        const token = localStorage.getItem("token")
        console.log("token", token)

        //若有登入資料的話
        if (token) {
            if (to.path === "/login") {

            } else {
                next()
            }
        }
        //沒有登入資料的話
        else {
            next({ path: "/login" })
        }
    } else {
        next()
    }
})