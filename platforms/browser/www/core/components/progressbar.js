(function framework7ComponentLoader(r,s){void 0===s&&(s=!0);document,window;var e=r.$,t=(r.Template7,r.utils),n=(r.device,r.support,r.Class,r.Modal,r.ConstructorMethods,r.ModalMethods,{set:function(){for(var r,s=[],t=arguments.length;t--;)s[t]=arguments[t];var n=s[0],o=s[1],a=s[2];if("number"==typeof s[0]&&(o=(r=s)[0],a=r[1],n=this.root),null==o)return n;o||(o=0);var i=e(n||this.root);if(0===i.length)return n;var p,h=Math.min(Math.max(o,0),100);if(0===(p=i.hasClass("progressbar")?i.eq(0):i.children(".progressbar")).length||p.hasClass("progressbar-infinite"))return p;var g=p.children("span");return 0===g.length&&(g=e("<span></span>"),p.append(g)),g.transition(void 0!==a?a:"").transform("translate3d("+(-100+h)+"%,0,0)"),p[0]},show:function(){for(var r,s,t=[],n=arguments.length;n--;)t[n]=arguments[n];var o=t[0],a=t[1],i=t[2],p="determined";2===t.length?"string"!=typeof t[0]&&"object"!=typeof t[0]||"string"!=typeof t[1]?"number"==typeof t[0]&&"string"==typeof t[1]&&(a=(s=t)[0],i=s[1],o=this.root):(o=(r=t)[0],i=r[1],a=r[2],p="infinite"):1===t.length?"number"==typeof t[0]?(o=this.root,a=t[0]):"string"==typeof t[0]&&(p="infinite",o=this.root,i=t[0]):0===t.length&&(p="infinite",o=this.root);var h,g=e(o);if(0!==g.length)return g.hasClass("progressbar")||g.hasClass("progressbar-infinite")?h=g:0===(h=g.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)")).length&&(h=e('\n          <span class="progressbar'+("infinite"===p?"-infinite":"")+(i?" color-"+i:"")+' progressbar-in">\n            '+("infinite"===p?"":"<span></span>")+"\n          </span>"),g.append(h)),void 0!==a&&this.progressbar.set(h,a),h[0]},hide:function(r,s){void 0===s&&(s=!0);var t,n=e(r||this.root);if(0!==n.length)return 0===(t=n.hasClass("progressbar")||n.hasClass("progressbar-infinite")?n:n.children(".progressbar, .progressbar-infinite")).length||!t.hasClass("progressbar-in")||t.hasClass("progressbar-out")?t:(t.removeClass("progressbar-in").addClass("progressbar-out").animationEnd(function(){s&&t.remove()}),t)}}),o={name:"progressbar",create:function(){t.extend(this,{progressbar:{set:n.set.bind(this),show:n.show.bind(this),hide:n.hide.bind(this)}})},on:{pageInit:function(r){var s=this;r.$el.find(".progressbar").each(function(r,t){var n=e(t);s.progressbar.set(n,n.attr("data-progress"))})}},vnode:{progressbar:{insert:function(r){var s=r.elm;this.progressbar.set(s,s.getAttribute("data-progress"))},update:function(r){var s=r.elm;this.progressbar.set(s,s.getAttribute("data-progress"))}}}};if(s){if(r.prototype.modules&&r.prototype.modules[o.name])return;r.use(o),r.instance&&(r.instance.useModuleParams(o,r.instance.params),r.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
