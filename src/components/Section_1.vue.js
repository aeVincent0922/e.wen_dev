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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
onMounted(function () {
    gsap.to(".e", {
        rotateX: 540,
        transformOrigin: "50% 60%",
        duration: 2,
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        ease: "power2.inOut",
    });
    gsap.to(".test-square", {
        scrollTrigger: {
            trigger: ".test-square",
            start: "top 50%",
            end: "top 20%",
            markers: true,
            scrub: true,
        },
        x: +300,
        rotate: 1080,
        duration: 2,
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "h-screen border-2 border-amber-800 bg-light-blue relative" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "text-7xl text-white font-black flex items-center" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "e block" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "bg-white rounded-lg w-10 h-10 absolute bottom-[20%] left-0 test-square" }));
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-amber-800']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-light-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-black']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['e']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-[20%]']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['test-square']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () { return ({}); },
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
