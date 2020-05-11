!function(e,t){for(var s in t)e[s]=t[s]}(window,webpackJsonp([32],{"./lms/static/js/student_account/components/PasswordResetConfirmation.jsx":function(e,t,s){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"PasswordResetConfirmation",function(){return f});var n=s("./node_modules/whatwg-fetch/fetch.js"),i=(s.n(n),s("./node_modules/prop-types/index.js")),d=s.n(i),c=s("./node_modules/react/index.js"),l=s.n(c),p=s("./node_modules/@edx/paragon/static/index.js"),u=(s.n(p),s("./lms/static/js/student_account/components/PasswordResetInput.jsx")),m=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),f=function(e){function t(e){a(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.state={password:"",passwordConfirmation:"",showMatchError:!1,isValid:!0,validationMessage:""},s.onBlurPassword1=s.onBlurPassword1.bind(s),s.onBlurPassword2=s.onBlurPassword2.bind(s),s}return r(t,e),m(t,[{key:"onBlurPassword1",value:function(e){this.updatePasswordState(e,this.state.passwordConfirmation),this.validatePassword(e)}},{key:"onBlurPassword2",value:function(e){this.updatePasswordState(this.state.password,e)}},{key:"updatePasswordState",value:function(e,t){this.setState({password:e,passwordConfirmation:t,showMatchError:!!e&&!!t&&e!==t})}},{key:"validatePassword",value:function(e){var t=this;fetch("/api/user/v1/validation/registration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})}).then(function(e){return e.json()}).then(function(e){var s="";e.validation_decisions&&e.validation_decisions.password&&(s=e.validation_decisions.password),t.setState({isValid:!s,validationMessage:s})})}},{key:"render",value:function(){return l.a.createElement("section",{id:"password-reset-confirm-anchor",className:"form-type"},l.a.createElement("div",{id:"password-reset-confirm-form",className:"form-wrapper","aria-live":"polite"},l.a.createElement(p.StatusAlert,{alertType:"danger",dismissible:!1,open:!!this.props.errorMessage,dialog:this.props.errorMessage}),l.a.createElement("form",{id:"passwordreset-form",method:"post",action:""},l.a.createElement("h2",{className:"section-title lines"},l.a.createElement("span",{className:"text"},this.props.formTitle)),l.a.createElement("p",{className:"action-label",id:"new_password_help_text"},gettext("Enter and confirm your new password.")),l.a.createElement(u.a,{name:"new_password1",describedBy:"new_password_help_text",label:gettext("New Password"),onBlur:this.onBlurPassword1,isValid:this.state.isValid,validationMessage:this.state.validationMessage}),l.a.createElement(u.a,{name:"new_password2",describedBy:"new_password_help_text",label:gettext("Confirm Password"),onBlur:this.onBlurPassword2,isValid:!this.state.showMatchError,validationMessage:gettext("Passwords do not match.")}),l.a.createElement("input",{type:"hidden",id:"csrf_token",name:"csrfmiddlewaretoken",value:this.props.csrfToken}),l.a.createElement(p.Button,{type:"submit",className:["action","action-primary","action-update","js-reset"],label:this.props.primaryActionButtonLabel}))))}}]),t}(l.a.Component);f.propTypes={csrfToken:d.a.string.isRequired,errorMessage:d.a.string,primaryActionButtonLabel:d.a.string,formTitle:d.a.string},f.defaultProps={errorMessage:"",primaryActionButtonLabel:gettext("Reset My Password"),formTitle:gettext("Reset Your Password")}},"./lms/static/js/student_account/components/PasswordResetInput.jsx":function(e,t,s){"use strict";function a(e){return i.a.createElement("div",{className:"form-field"},i.a.createElement(d.InputText,c({id:e.name,type:"password",themes:["danger"],dangerIconDescription:gettext("Error: "),required:!0},e)))}var o=s("./node_modules/prop-types/index.js"),r=s.n(o),n=s("./node_modules/react/index.js"),i=s.n(n),d=s("./node_modules/@edx/paragon/static/index.js"),c=(s.n(d),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e});a.propTypes={name:r.a.string.isRequired},t.a=a}},["./lms/static/js/student_account/components/PasswordResetConfirmation.jsx"]));