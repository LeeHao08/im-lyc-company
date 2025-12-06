import { provide, ref } from "vue";
import { RouterView } from "vue-router";
// 菜单折叠状态
const isMenuCollapsed = ref(false);
// 需要缓存的路由页面
const cachedViews = ref(["home"]);
const contentWrapper = ref(null);
// 添加透明度响应式变量
const headerOpacity = ref(1);
// 新增缩放比例响应式变量
const bannerScale = ref(1);
const lastScroll = ref(0);
const handleScroll = (e) => {
    const scrollContainer = e.target;
    const scrollTop = scrollContainer.scrollTop;
    // 优化缩放计算逻辑
    const scale = Math.max(1 - scrollTop * 0.001, 0.8); // 每100px缩小20%
    bannerScale.value = Math.min(Math.max(scale, 0.8), 1);
    // 计算透明度（示例：200px滚动距离完成渐变）
    const opacity = 1 - Math.min(scrollTop / 200, 1);
    headerOpacity.value = Math.max(opacity, 0.4);
    // console.log(headerOpacity);
};
// 向子组件提供数据
provide("headerOpacity", headerOpacity);
provide("bannerScale", bannerScale);
// 修改滚动处理函数
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "layout-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ onScroll: (__VLS_ctx.handleScroll) },
    ...{ class: "content-wrapper" },
    ref: "contentWrapper",
});
/** @type {typeof __VLS_ctx.contentWrapper} */ ;
const __VLS_0 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
{
    const { default: __VLS_thisSlot } = __VLS_3.slots;
    const [{ Component }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_4 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        name: "fade",
        mode: "out-in",
    }));
    const __VLS_6 = __VLS_5({
        name: "fade",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    const __VLS_8 = {}.KeepAlive;
    /** @type {[typeof __VLS_components.KeepAlive, typeof __VLS_components.KeepAlive, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        include: (__VLS_ctx.cachedViews),
    }));
    const __VLS_10 = __VLS_9({
        include: (__VLS_ctx.cachedViews),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_11.slots.default;
    const __VLS_12 = ((Component));
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    var __VLS_11;
    var __VLS_7;
    __VLS_3.slots['' /* empty slot name completion */];
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['layout-container']} */ ;
/** @type {__VLS_StyleScopedClasses['content-wrapper']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterView: RouterView,
            cachedViews: cachedViews,
            contentWrapper: contentWrapper,
            handleScroll: handleScroll,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
