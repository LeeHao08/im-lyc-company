import { View } from "@element-plus/icons-vue";
import { ref, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCounterStore } from "@/stores/counter";
import { useHead } from "@vueuse/head";
import { useRoute } from 'vue-router';
// 懒加载页脚组件
const AsyncFooter = defineAsyncComponent(() => import('@/components/my-footer/index.vue'));
const counterStore = useCounterStore();
const { t, locale } = useI18n();
const loading = ref(true);
const isCollapse = ref(true);
const currentLang = ref(locale.value);
const activeIndex = ref("home");
const componentsMap = {
    home: defineAsyncComponent(() => import("@/components/home/index.vue")),
    location: defineAsyncComponent(() => import("@/components/location/index.vue")),
    landscaping: defineAsyncComponent(() => import("@/components/landscaping/index.vue")),
    architecture: defineAsyncComponent(() => import("@/components/architecture/index.vue")),
    quality: defineAsyncComponent(() => import("@/components/quality/index.vue")),
};
const handleSelect = (key, keyPath) => {
    console.log("菜单激活", key, keyPath);
    activeIndex.value = key;
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 4000);
};
const isLoading = computed(() => loading.value && activeIndex.value === "location");
const toggleLanguage = () => {
    currentLang.value = currentLang.value === "en" ? "zh" : "en";
    locale.value = currentLang.value;
    localStorage.setItem("lang", currentLang.value);
};
const currentComponent = computed(() => componentsMap[activeIndex.value]);
counterStore.fetch();
const formattedCount = computed(() => counterStore.count === -1 ? "N/A" : counterStore.count.toLocaleString());
// SEO结构化数据
const route = useRoute();
const canonicalUrl = computed(() => 'https://your-domain.com' + route.path);
const pageTitle = computed(() => locale.value === "zh" ? "首页 - Verrit Haven 公司" : "Home - Verrit Haven Company");
useHead({
    // 1. Canonical 标签
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
    // 2. Google Analytics
    script: [
        {
            type: "application/ld+json",
            innerHTML: computed(() => JSON.stringify([
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Verrit Haven Company",
                    url: "https://ecological-paradise.vercel.app",
                    logo: "https://ecological-paradise.vercel.app/src/assets/logo.webp",
                },
            ])),
        },
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-01F5TTHY3H',
            async: true
        },
        {
            innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-01F5TTHY3H');
      `
        }
    ],
    // 3. Google Search Console 验证
    meta: [
    // {
    //   name: 'google-site-verification',
    //   content: 'xxxxx-yyyyy-zzzzz' // ⚠️ 改成您的
    // }
    ]
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "common-layout" },
});
const __VLS_0 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.ElHeader;
/** @type {[typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "logo-banner" },
    role: "banner",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    loading: "lazy",
    src: "/src/assets/logo.webp",
    alt: "Verrit Haven Company Logo",
    width: "60",
    height: "60",
    sizes: "4vw",
    srcset: "/src/assets/logo-232w.webp 300w, /src/assets/logo-464w.webp 500w, /src/assets/logo-696w.webp 700w, /src/assets/logo-928w.webp 1080w",
    ...{ class: "logo-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "company-name" },
    'aria-hidden': "true",
});
const __VLS_8 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onSelect': {} },
    role: "menubar",
    defaultActive: (__VLS_ctx.activeIndex),
    ...{ class: "el-menu-demo" },
    mode: "horizontal",
    ellipsis: (false),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onSelect': {} },
    role: "menubar",
    defaultActive: (__VLS_ctx.activeIndex),
    ...{ class: "el-menu-demo" },
    mode: "horizontal",
    ellipsis: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onSelect: (__VLS_ctx.handleSelect)
};
__VLS_11.slots.default;
const __VLS_16 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    index: "home",
    role: "menuitem",
}));
const __VLS_18 = __VLS_17({
    index: "home",
    role: "menuitem",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
(__VLS_ctx.t("home.menu.home"));
var __VLS_19;
const __VLS_20 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    index: "location",
    role: "menuitem",
}));
const __VLS_22 = __VLS_21({
    index: "location",
    role: "menuitem",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
(__VLS_ctx.t("home.menu.location"));
var __VLS_23;
const __VLS_24 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    index: "landscaping",
    role: "menuitem",
}));
const __VLS_26 = __VLS_25({
    index: "landscaping",
    role: "menuitem",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
(__VLS_ctx.t("home.menu.landscaping"));
var __VLS_27;
const __VLS_28 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    index: "architecture",
    role: "menuitem",
}));
const __VLS_30 = __VLS_29({
    index: "architecture",
    role: "menuitem",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
(__VLS_ctx.t("home.menu.architecture"));
var __VLS_31;
const __VLS_32 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    index: "quality",
    role: "menuitem",
}));
const __VLS_34 = __VLS_33({
    index: "quality",
    role: "menuitem",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
(__VLS_ctx.t("home.menu.quality"));
var __VLS_35;
const __VLS_36 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ 'onClick': {} },
    ...{ class: "langchange" },
    type: "primary",
    round: true,
    'aria-label': (__VLS_ctx.currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'),
    title: (__VLS_ctx.currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'),
}));
const __VLS_38 = __VLS_37({
    ...{ 'onClick': {} },
    ...{ class: "langchange" },
    type: "primary",
    round: true,
    'aria-label': (__VLS_ctx.currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'),
    title: (__VLS_ctx.currentLang === 'zh' ? '切换为英文' : 'Switch to Chinese'),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_40;
let __VLS_41;
let __VLS_42;
const __VLS_43 = {
    onClick: (__VLS_ctx.toggleLanguage)
};
__VLS_39.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flag" },
    'aria-hidden': "true",
});
(__VLS_ctx.currentLang === "zh" ? "🇨🇳" : "🇺🇸");
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "lang-text" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.isCollapse) }, null, null);
(__VLS_ctx.currentLang.toUpperCase());
var __VLS_39;
var __VLS_11;
var __VLS_7;
const __VLS_44 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.Suspense;
/** @type {[typeof __VLS_components.Suspense, typeof __VLS_components.Suspense, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = ((__VLS_ctx.currentComponent));
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    key: (__VLS_ctx.activeIndex),
    ...{ class: "content-section" },
}));
const __VLS_54 = __VLS_53({
    key: (__VLS_ctx.activeIndex),
    ...{ class: "content-section" },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
{
    const { fallback: __VLS_thisSlot } = __VLS_51.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading-container" },
    });
    const __VLS_56 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        ...{ class: "is-loading" },
    }));
    const __VLS_58 = __VLS_57({
        ...{ class: "is-loading" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_59.slots.default;
    const __VLS_60 = {}.Loading;
    /** @type {[typeof __VLS_components.Loading, ]} */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    var __VLS_59;
}
var __VLS_51;
var __VLS_47;
const __VLS_64 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    ...{ style: ({
            visibility: __VLS_ctx.activeIndex != 'location' ? 'hidden' : 'visible',
            display: __VLS_ctx.activeIndex != 'location' ? 'none' : 'flex',
        }) },
}));
const __VLS_66 = __VLS_65({
    ...{ style: ({
            visibility: __VLS_ctx.activeIndex != 'location' ? 'hidden' : 'visible',
            display: __VLS_ctx.activeIndex != 'location' ? 'none' : 'flex',
        }) },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isLoading) }, null, null);
__VLS_67.slots.default;
const __VLS_68 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
    src: "https://opensource.icegl.cn/#/plugins/digitalCity/city2",
    frameborder: "0",
    loading: "lazy",
    title: "3D Digital City Map",
    ...{ style: ({ width: '95vw', height: '100vh' }) },
});
var __VLS_71;
var __VLS_67;
const __VLS_72 = {}.Suspense;
/** @type {[typeof __VLS_components.Suspense, typeof __VLS_components.Suspense, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
const __VLS_76 = {}.AsyncFooter;
/** @type {[typeof __VLS_components.AsyncFooter, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
{
    const { fallback: __VLS_thisSlot } = __VLS_75.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: {} },
    });
}
var __VLS_75;
var __VLS_3;
const __VLS_80 = {}.ElBadge;
/** @type {[typeof __VLS_components.ElBadge, typeof __VLS_components.elBadge, typeof __VLS_components.ElBadge, typeof __VLS_components.elBadge, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    value: (__VLS_ctx.formattedCount),
    ...{ class: "item" },
    color: "green",
}));
const __VLS_82 = __VLS_81({
    value: (__VLS_ctx.formattedCount),
    ...{ class: "item" },
    color: "green",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
const __VLS_84 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    type: "primary",
    icon: (__VLS_ctx.View),
    circle: true,
    'aria-label': "访问量统计",
    title: "访问量统计",
}));
const __VLS_86 = __VLS_85({
    type: "primary",
    icon: (__VLS_ctx.View),
    circle: true,
    'aria-label': "访问量统计",
    title: "访问量统计",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
var __VLS_83;
/** @type {__VLS_StyleScopedClasses['common-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-banner']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-image']} */ ;
/** @type {__VLS_StyleScopedClasses['company-name']} */ ;
/** @type {__VLS_StyleScopedClasses['el-menu-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['langchange']} */ ;
/** @type {__VLS_StyleScopedClasses['flag']} */ ;
/** @type {__VLS_StyleScopedClasses['lang-text']} */ ;
/** @type {__VLS_StyleScopedClasses['content-section']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-container']} */ ;
/** @type {__VLS_StyleScopedClasses['is-loading']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            View: View,
            AsyncFooter: AsyncFooter,
            t: t,
            isCollapse: isCollapse,
            currentLang: currentLang,
            activeIndex: activeIndex,
            handleSelect: handleSelect,
            isLoading: isLoading,
            toggleLanguage: toggleLanguage,
            currentComponent: currentComponent,
            formattedCount: formattedCount,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
