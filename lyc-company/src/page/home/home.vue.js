import { View } from "@element-plus/icons-vue";
import { ref, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useCounterStore } from "@/stores/counter"; // 引入计数器存储
const counterStore = useCounterStore(); // 使用计数器存储
const { t, locale } = useI18n();
const loading = ref(true);
const isCollapse = ref(true);
const currentLang = ref(locale.value);
const activeIndex = ref("home"); //菜单默认home
//所有的组件的一个映射
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
    loading.value = true; // 在切换选项卡时设置 loading 为 true
    // 模拟加载过程
    setTimeout(() => {
        loading.value = false; // 2秒后将 loading 设置为 false
    }, 4000);
};
// 使用computed来根据activeTab的值动态计算loading状态
const isLoading = computed(() => loading.value && activeIndex.value == "location");
const toggleLanguage = () => {
    currentLang.value = currentLang.value === "en" ? "zh" : "en";
    locale.value = currentLang.value;
    localStorage.setItem("lang", currentLang.value);
};
// 使用handleSelect选择的key来找到映射中的组件
const currentComponent = computed(() => componentsMap[activeIndex.value]);
// 自动获取访问人数
counterStore.fetch();
// 格式化访问人数
const formattedCount = computed(() => counterStore.count === -1 ? "N/A" : counterStore.count.toLocaleString());
import { useHead } from '@vueuse/head'; // 引入 useHead
// ...您原来的代码...
// 添加首页结构化数据
const pageTitle = computed(() => locale.value === 'zh' ? '首页 - Verrit Haven 公司' : 'Home - Verrit Haven Company');
useHead({
    title: pageTitle.value,
    script: [
        {
            type: 'application/ld+json',
            innerHTML: computed(() => JSON.stringify([
                {
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    'name': pageTitle.value,
                    'description': t('home.page.home.introduct.text'),
                    'url': 'https://ecological-paradise.vercel.app/', // ⚠️ 改成您的域名
                    'inLanguage': locale.value === 'zh' ? 'zh-CN' : 'en-US',
                    'isPartOf': {
                        '@type': 'WebSite',
                        'name': 'Verrit Haven Company',
                        'url': 'https://ecological-paradise.vercel.app/' // ⚠️ 改成您的域名
                    }
                },
                // 为每个轮播图片添加 ImageObject 标记
                {
                    '@context': 'https://schema.org',
                    '@type': 'ImageObject',
                    'url': 'https://ecological-paradise.vercel.app/src/assets/lbt1.jpg',
                    'name': t('home.page.home.lbt.text1'),
                    'description': t('home.page.home.lbt.text1'),
                    'uploadDate': '2025-12-11' // ⚠️ 改成您实际上传日期
                },
                // 为每个产品图片添加 ImageObject 标记（示例）
                {
                    '@context': 'https://schema.org',
                    '@type': 'ImageObject',
                    'url': 'https://ecological-paradise.vercel.app/src/assets/pro1.jpeg',
                    'name': t('home.page.home.product.item1'),
                    'description': t('home.page.home.product.item1'),
                    'uploadDate': '2025-12-11'
                }
            ]))
        }
    ]
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['el-menu-item']} */ ;
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
const __VLS_8 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onSelect': {} },
    defaultActive: (__VLS_ctx.activeIndex),
    ...{ class: "el-menu-demo" },
    mode: "horizontal",
    ellipsis: (false),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onSelect': {} },
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "logo-container" },
});
const __VLS_16 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    loading: "lazy",
    ...{ style: {} },
    src: "/src/assets/logo.png",
    alt: "Element logo",
});
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "company-name" },
});
const __VLS_20 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    index: "home",
}));
const __VLS_22 = __VLS_21({
    index: "home",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
(__VLS_ctx.t("home.menu.home"));
var __VLS_23;
const __VLS_24 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    index: "location",
}));
const __VLS_26 = __VLS_25({
    index: "location",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
(__VLS_ctx.t("home.menu.location"));
var __VLS_27;
const __VLS_28 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    index: "landscaping",
}));
const __VLS_30 = __VLS_29({
    index: "landscaping",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
(__VLS_ctx.t("home.menu.landscaping"));
var __VLS_31;
const __VLS_32 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    index: "architecture",
}));
const __VLS_34 = __VLS_33({
    index: "architecture",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
(__VLS_ctx.t("home.menu.architecture"));
var __VLS_35;
const __VLS_36 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    index: "quality",
}));
const __VLS_38 = __VLS_37({
    index: "quality",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
(__VLS_ctx.t("home.menu.quality"));
var __VLS_39;
const __VLS_40 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    ...{ 'onClick': {} },
    ...{ class: "langchange" },
    type: "primary",
    round: true,
}));
const __VLS_42 = __VLS_41({
    ...{ 'onClick': {} },
    ...{ class: "langchange" },
    type: "primary",
    round: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onClick: (__VLS_ctx.toggleLanguage)
};
__VLS_43.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flag" },
});
(__VLS_ctx.currentLang === "zh" ? "🇨🇳" : "🇺🇸");
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.isCollapse) }, null, null);
(__VLS_ctx.currentLang.toUpperCase());
var __VLS_43;
var __VLS_11;
var __VLS_7;
const __VLS_48 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = {}.Suspense;
/** @type {[typeof __VLS_components.Suspense, typeof __VLS_components.Suspense, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
const __VLS_56 = ((__VLS_ctx.currentComponent));
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    key: (__VLS_ctx.activeIndex),
    ...{ class: "content-section" },
}));
const __VLS_58 = __VLS_57({
    key: (__VLS_ctx.activeIndex),
    ...{ class: "content-section" },
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
{
    const { fallback: __VLS_thisSlot } = __VLS_55.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading-container" },
    });
    const __VLS_60 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        ...{ class: "is-loading" },
    }));
    const __VLS_62 = __VLS_61({
        ...{ class: "is-loading" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_63.slots.default;
    const __VLS_64 = {}.Loading;
    /** @type {[typeof __VLS_components.Loading, ]} */ ;
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
    const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
    var __VLS_63;
}
var __VLS_55;
var __VLS_51;
const __VLS_68 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    ...{ style: ({
            visibility: __VLS_ctx.activeIndex != 'location' ? 'hidden' : 'visible',
            display: __VLS_ctx.activeIndex != 'location' ? 'none' : 'flex',
        }) },
}));
const __VLS_70 = __VLS_69({
    ...{ style: ({
            visibility: __VLS_ctx.activeIndex != 'location' ? 'hidden' : 'visible',
            display: __VLS_ctx.activeIndex != 'location' ? 'none' : 'flex',
        }) },
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isLoading) }, null, null);
__VLS_71.slots.default;
const __VLS_72 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
    src: "https://opensource.icegl.cn/#/plugins/digitalCity/city2",
    frameborder: "0",
    loading: "lazy",
    ...{ style: ({ width: '95vw', height: '100vh' }) },
});
var __VLS_75;
var __VLS_71;
const __VLS_76 = {}.MyFooter;
/** @type {[typeof __VLS_components.MyFooter, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
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
}));
const __VLS_86 = __VLS_85({
    type: "primary",
    icon: (__VLS_ctx.View),
    circle: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
var __VLS_83;
/** @type {__VLS_StyleScopedClasses['common-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['el-menu-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['company-name']} */ ;
/** @type {__VLS_StyleScopedClasses['langchange']} */ ;
/** @type {__VLS_StyleScopedClasses['flag']} */ ;
/** @type {__VLS_StyleScopedClasses['content-section']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-container']} */ ;
/** @type {__VLS_StyleScopedClasses['is-loading']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            View: View,
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
