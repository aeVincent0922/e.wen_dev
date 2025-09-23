var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Section_1 from "./components/Section_1.vue";
import Section_2 from "./components/Section_2.vue";
// ScrollSmoother需要與ScrollTrigger 一起註冊才能使用
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
onMounted(function () {
    // 初始化ScrollSmoother
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
        smoothTouch: 1,
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ id: "smooth-wrapper" }, { class: "h-full" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "smooth-content",
});
/** @type {[typeof Section_1, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Section_1, new Section_1({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof Section_2, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(Section_2, new Section_2({}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () { return ({
        Section_1: Section_1,
        Section_2: Section_2,
    }); },
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
