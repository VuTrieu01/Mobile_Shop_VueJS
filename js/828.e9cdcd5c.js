"use strict";(self["webpackChunkmobile_shop"]=self["webpackChunkmobile_shop"]||[]).push([[828],{7828:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("ToDoDetail")],1)},n=[],r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"todo__input",attrs:{type:"text",placeholder:"What needs to be done"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._l(e.todosFiltered,(function(o,i){return t("todo-item",{key:o.id,attrs:{todo:o,index:i},on:{removedTodo:e.removeTodo,finishedEdit:e.doneEdit}})})),t("div",{staticClass:"extra__container"},[t("div",[t("label",[t("input",{attrs:{type:"checkbox"},domProps:{checked:!e.anyRemaining},on:{change:e.checkAllTodos}}),e._v(" Check All")])]),t("div",[e._v(e._s(e.remaining)+" item left")])]),t("div",{staticClass:"extra__container"},[t("div",[t("button",{class:{active:"all"==e.$store.state.filter},on:{click:function(t){e.$store.state.filter="all"}}},[e._v(" All ")]),t("button",{class:{active:"active"==e.$store.state.filter},on:{click:function(t){e.$store.state.filter="active"}}},[e._v(" Active ")]),t("button",{class:{active:"completed"==e.$store.state.filter},on:{click:function(t){e.$store.state.filter="completed"}}},[e._v(" Completed ")])]),t("div",[t("transition",{attrs:{name:"fade"}},[e.showClearCompleteButton?t("button",{on:{click:e.clearCompleted}},[e._v(" Clear Completed ")]):e._e()])],1)])],2)},d=[],l=o(7327),s=o(144),c=o(5904),a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"todo-item"},[t("div",{staticClass:"todo-item--left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.todo.completed)?e._i(e.todo.completed,null)>-1:e.todo.completed},on:{change:function(t){var o=e.todo.completed,i=t.target,n=!!i.checked;if(Array.isArray(o)){var r=null,d=e._i(o,r);i.checked?d<0&&e.$set(e.todo,"completed",o.concat([r])):d>-1&&e.$set(e.todo,"completed",o.slice(0,d).concat(o.slice(d+1)))}else e.$set(e.todo,"completed",n)}}}),e.todo.editing?t("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.title,expression:"todo.title"}],staticClass:"todo-item--left--edit",attrs:{type:"text"},domProps:{value:e.todo.title},on:{blur:function(t){return e.doneEdit(e.todo)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit(e.todo)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit.apply(null,arguments)}],input:function(t){t.target.composing||e.$set(e.todo,"title",t.target.value)}}}):t("div",{staticClass:"todo-item--left--label",class:{completed:e.todo.completed},on:{dblclick:e.editTodo}},[e._v(" "+e._s(e.todo.title)+" ")])]),t("div",{staticClass:"remove-item",on:{click:function(t){return e.removeTodo(e.index)}}},[e._v("×")])])},u=[],p=function(e,t,o,i){var n,r=arguments.length,d=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(d=(r<3?n(d):r>3?n(t,o,d):n(t,o))||d);return r>3&&d&&Object.defineProperty(t,o,d),d};let f=class extends s.ZP{constructor(...e){super(...e),(0,l.Z)(this,"todo",void 0),(0,l.Z)(this,"index",void 0),(0,l.Z)(this,"beforeEditCache","")}removeTodo(e){this.$emit("removedTodo",e)}editTodo(){this.beforeEditCache=this.todo.title,this.todo.editing=!0}doneEdit(e){this.$emit("finishedEdit",e)}cancelEdit(){this.todo.title=this.beforeEditCache,this.todo.editing=!1}};f=p([(0,c.ZP)({props:{todo:{type:Object,required:!0},index:{type:Number,required:!0}}})],f);var h=f,m=h,v=o(1001),y=(0,v.Z)(m,a,u,!1,null,"390ea606",null),g=y.exports,_=function(e,t,o,i){var n,r=arguments.length,d=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(d=(r<3?n(d):r>3?n(t,o,d):n(t,o))||d);return r>3&&d&&Object.defineProperty(t,o,d),d};let k=class extends s.ZP{constructor(...e){super(...e),(0,l.Z)(this,"newTodo",""),(0,l.Z)(this,"idForTodo",3),(0,l.Z)(this,"beforeEditCache","")}addTodo(){0!=this.newTodo.length&&" "!=this.newTodo&&(this.$store.dispatch("addTodo",{id:this.idForTodo,title:this.newTodo}),this.newTodo="",this.idForTodo++)}doneEdit(e){0==e.title.length&&(e.title=this.beforeEditCache),e.editing=!1}removeTodo(e){this.$store.dispatch("removeTodo",{index:e})}checkAllTodos(e){this.$store.dispatch("checkAllTodos",{event:e})}clearCompleted(){this.$store.dispatch("clearCompleted")}get remaining(){return this.$store.getters.remaining}get anyRemaining(){return this.$store.getters.anyRemaining}get todosFiltered(){return this.$store.getters.todosFiltered}get showClearCompleteButton(){return this.$store.getters.showClearCompleteButton}};k=_([(0,c.ZP)({components:{TodoItem:g}})],k);var C=k,b=C,T=(0,v.Z)(b,r,d,!1,null,"2c8000cc",null),x=T.exports,w=function(e,t,o,i){var n,r=arguments.length,d=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(d=(r<3?n(d):r>3?n(t,o,d):n(t,o))||d);return r>3&&d&&Object.defineProperty(t,o,d),d};let $=class extends s.ZP{};$=w([(0,c.ZP)({components:{ToDoDetail:x}})],$);var P=$,E=P,Z=(0,v.Z)(E,i,n,!1,null,null,null),O=Z.exports}}]);
//# sourceMappingURL=828.e9cdcd5c.js.map