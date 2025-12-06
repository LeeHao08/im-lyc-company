import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const activeIndex = ref(0);
const lists = ref([
    { src: "/src/assets/lbt1.jpg", alt: "home.page.home.lbt.text1" },
    { src: "/src/assets/lbt2.jpg", alt: "home.page.home.lbt.text1" },
    { src: "/src/assets/lbt3.jpg", alt: "home.page.home.lbt.text1" },
]);
const productlists = ref([
    { src: "/src/assets/pro1.jpeg", alt: "home.page.home.product.item1" },
    { src: "/src/assets/pro2.jpeg", alt: "home.page.home.product.item2" },
    { src: "/src/assets/pro3.jpeg", alt: "home.page.home.product.item3" },
    { src: "/src/assets/pro4.jpeg", alt: "home.page.home.product.item4" },
    { src: "/src/assets/pro5.jpeg", alt: "home.page.home.product.item5" },
]);
// 轮播切换处理
const handleChange = (current) => {
    activeIndex.value = current;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['animated-title']} */ ;
/** @type {__VLS_StyleScopedClasses['el-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['el-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['el-carousel__item']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ElCarousel;
/** @type {[typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onChange': {} },
    interval: (4000),
    type: "card",
    height: "20vw",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onChange': {} },
    interval: (4000),
    type: "card",
    height: "20vw",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onChange: (__VLS_ctx.handleChange)
};
__VLS_3.slots.default;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.lists))) {
    const __VLS_8 = {}.ElCarouselItem;
    /** @type {[typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        key: (index),
        ...{ class: ({ 'active-item': __VLS_ctx.activeIndex === index }) },
    }));
    const __VLS_10 = __VLS_9({
        key: (index),
        ...{ class: ({ 'active-item': __VLS_ctx.activeIndex === index }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.src),
        alt: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: "animated-title" },
    });
    (__VLS_ctx.$t(item.alt));
    var __VLS_11;
}
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "cardbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "textbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.t("home.page.home.introduct.title"));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.t("home.page.home.introduct.title2"));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.t("home.page.home.introduct.text"));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "imgbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/company.jpg",
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "productbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "titlebox" },
});
const __VLS_12 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
(__VLS_ctx.t("home.page.home.product.title"));
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "picbox" },
});
for (const [i, k] of __VLS_getVForSourceType((__VLS_ctx.productlists))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "item" },
        key: (k),
    });
    const __VLS_16 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        src: (i.src),
        zoomRate: (1.2),
        maxScale: (7),
        minScale: (0.2),
        fit: "fill",
        previewSrcList: ([i.src]),
        showProgress: true,
    }));
    const __VLS_18 = __VLS_17({
        src: (i.src),
        zoomRate: (1.2),
        maxScale: (7),
        minScale: (0.2),
        fit: "fill",
        previewSrcList: ([i.src]),
        showProgress: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.$t(i.alt));
}
/** @type {__VLS_StyleScopedClasses['active-item']} */ ;
/** @type {__VLS_StyleScopedClasses['animated-title']} */ ;
/** @type {__VLS_StyleScopedClasses['cardbox']} */ ;
/** @type {__VLS_StyleScopedClasses['textbox']} */ ;
/** @type {__VLS_StyleScopedClasses['imgbox']} */ ;
/** @type {__VLS_StyleScopedClasses['productbox']} */ ;
/** @type {__VLS_StyleScopedClasses['titlebox']} */ ;
/** @type {__VLS_StyleScopedClasses['picbox']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            t: t,
            activeIndex: activeIndex,
            lists: lists,
            productlists: productlists,
            handleChange: handleChange,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
