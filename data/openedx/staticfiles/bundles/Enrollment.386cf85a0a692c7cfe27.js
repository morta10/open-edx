!function(e,n){for(var r in n)e[r]=n[r]}(window,webpackJsonp([38],{"./openedx/features/course_experience/static/course_experience/js/Enrollment.js":function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,"CourseEnrollment",function(){return c});var t=function(){function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,r,o){return r&&e(n.prototype,r),o&&e(n,o),n}}(),c=function(){function n(r,t){o(this,n),e(r).click(n.createEnrollment(t))}return t(n,null,[{key:"redirect",value:function(e){window.location.href=e}},{key:"refresh",value:function(){window.location.reload(!1)}},{key:"createEnrollment",value:function(r){var o=JSON.stringify({course_details:{course_id:r}});return function(){return e.ajax({type:"POST",url:"/api/enrollment/v1/enrollment",data:o,contentType:"application/json"}).done(function(){window.analytics.track("edx.bi.user.course-home.enrollment"),n.refresh()}).fail(function(){n.redirect("/course_modes/choose/"+r)})}}}]),n}()}.call(n,r(0))}},["./openedx/features/course_experience/static/course_experience/js/Enrollment.js"]));