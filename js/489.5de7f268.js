"use strict";(self["webpackChunkmobile_shop"]=self["webpackChunkmobile_shop"]||[]).push([[489],{6083:function(s,t,e){e.d(t,{Z:function(){return u}});var r=function(){var s=this;s._self._c,s._self._setupProxy;return s._m(0)},a=[function(){var s=this,t=s._self._c;s._self._setupProxy;return t("div",{staticClass:"loading d-flex justify-content-center"},[t("div",{staticClass:"loading__item spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"visually-hidden"},[s._v("Loading...")])])])}],i=e(144),o=e(5904),l=function(s,t,e,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};let n=class extends i.ZP{};n=l([o.ZP],n);var c=n,d=c,p=e(1001),h=(0,p.Z)(d,r,a,!1,null,"667cf9c0",null),u=h.exports},8489:function(s,t,e){e.r(t),e.d(t,{default:function(){return w}});var r=function(){var s=this,t=s._self._c;s._self._setupProxy;return t("div",{staticClass:"panel row"},[s.loading?t("Loading"):s._e(),t("div",{staticClass:"col-md-6 col-md-offset-3"},[t("img",{staticClass:"image",attrs:{src:e(6949)},on:{click:s.goHome}}),t("div",{staticClass:"panel__login"},[t("div",{staticClass:"panel__heading"},[t("div",{staticClass:"row"},[s._m(0),t("div",{staticClass:"col",on:{click:s.handleRegister}},[t("a",[s._v("Register")])])])]),t("div",{staticClass:"panel__body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("form",[t("div",{staticClass:"form-group"},[s.errorEmail?t("div",{staticClass:"form-error text-danger"},[t("svg",{staticClass:"bi bi-exclamation-triangle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),s._v("  "+s._s(s.errorEmail)+" ")]):t("div",{staticClass:"form-error"}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Username"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}})]),t("div",{staticClass:"form-group"},[s.errorPassword?t("div",{staticClass:"form-error text-danger"},[t("svg",{staticClass:"bi bi-exclamation-triangle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),s._v("  "+s._s(s.errorPassword)+" ")]):t("div",{staticClass:"form-error"}),t("div",{staticClass:"form-input"},["checkbox"===(s.isVisible?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(s.password)?s._i(s.password,null)>-1:s.password},on:{change:function(t){var e=s.password,r=t.target,a=!!r.checked;if(Array.isArray(e)){var i=null,o=s._i(e,i);r.checked?o<0&&(s.password=e.concat([i])):o>-1&&(s.password=e.slice(0,o).concat(e.slice(o+1)))}else s.password=a}}}):"radio"===(s.isVisible?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"radio"},domProps:{checked:s._q(s.password,null)},on:{change:function(t){s.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Password",type:s.isVisible?"text":"password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),s.isVisible?t("svg",{staticClass:"bi bi-eye-slash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:s.handleToggle}},[t("path",{attrs:{d:"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"}}),t("path",{attrs:{d:"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"}}),t("path",{attrs:{d:"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"}})]):t("svg",{staticClass:"bi bi-eye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:s.handleToggle}},[t("path",{attrs:{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}}),t("path",{attrs:{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}})])])]),t("div",{staticClass:"form-group"},[s.error?t("div",{staticClass:"form-error text-danger"},[t("svg",{staticClass:"bi bi-exclamation-triangle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),s._v("  "+s._s(s.error)+" ")]):t("div",{staticClass:"form-error"}),t("input",{staticClass:"form-control btn btn-login",attrs:{type:"submit",value:"Log In"},on:{click:function(t){return t.preventDefault(),s.signIn.apply(null,arguments)}}})])])])])])])])],1)},a=[function(){var s=this,t=s._self._c;s._self._setupProxy;return t("div",{staticClass:"col"},[t("a",{staticClass:"active"},[s._v("Login")])])}],i=e(7327),o=(e(7658),e(5904)),l=e(144),n=e(1923),c=e.n(n),d=(e(6690),e(6083)),p=e(1946),h=function(s,t,e,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};let u=class extends l.ZP{constructor(...s){super(...s),(0,i.Z)(this,"email",""),(0,i.Z)(this,"password",""),(0,i.Z)(this,"error",""),(0,i.Z)(this,"errorEmail",""),(0,i.Z)(this,"errorPassword",""),(0,i.Z)(this,"isVisible",!1),(0,i.Z)(this,"loading",!1)}handleToggle(){this.isVisible=!this.isVisible}signIn(){(0,p.c)(this.email)?this.errorEmail="":this.errorEmail="Invalid email!!!",this.password.length<6?this.errorPassword="Password of at least 6 characters!!!":this.errorPassword="",(0,p.c)(this.email)&&this.password.length>=6&&(this.loading=!0,c().auth().signInWithEmailAndPassword(this.email,this.password).then((()=>{this.loading=!1,this.$router.push({name:"Home"})})).catch((s=>{this.loading=!1,this.error="Incorrect email or password!!!",console.log(s.message)})))}handleRegister(){this.$router.push({name:"Register"})}goHome(){this.$router.push({name:"Home"})}};u=h([(0,o.ZP)({components:{Loading:d.Z}})],u);var m=u,g=m,f=e(1001),v=(0,f.Z)(g,r,a,!1,null,"680da842",null),w=v.exports},1946:function(s,t,e){function r(s){return/\S+@\S+\.\S+/.test(s)}function a(s){return s.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" đ"}e.d(t,{c:function(){return r},l:function(){return a}})}}]);
//# sourceMappingURL=489.5de7f268.js.map