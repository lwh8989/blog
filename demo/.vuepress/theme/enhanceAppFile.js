import ApiLayout from './layouts/ApiLayout.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // register api route
    const apiPath = siteData.themeConfig.apiPath
    if (apiPath) {
        const extraRoutes = [
            {
                path: apiPath,
                component: ApiLayout
            }
        ]
        router.addRoutes(extraRoutes)
    }

    // setup element UI
    Vue.use(ElementUI);
};