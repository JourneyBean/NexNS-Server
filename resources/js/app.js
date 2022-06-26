import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'NexNS';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
});
