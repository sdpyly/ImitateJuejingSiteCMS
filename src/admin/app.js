const config = {
    locales: [
        'zh-Hans',
    ],
    translations: {
        'zh-Hans': {
            "Auth.form.welcome.subtitle": "登录您的CMS管理员账户",
            "app.components.LeftMenu.navbrand.title": "CMS仪表盘",
            "admin.pages.MarketPlacePage.subtitle": "从插件市场中获得更多",
            "app.components.HomePage.welcomeBlock.content": "恭喜! 您已登录为第一个管理员。为了探索掘金CMS提供的强大功能，我们建议你创建你的第一个内容类型"
        }
    }
};

const bootstrap = (app) => {
    console.log(app);
};

export default {
    config,
    bootstrap,
};
