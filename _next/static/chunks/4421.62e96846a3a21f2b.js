"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4421],{4421:function(t,e,i){i.d(e,{Container:function(){return M}});var s=i(99471),n=i(64864),a=i(60640),r=i(88128);function o(t,e,i=!1){if(!e||!t)return;let s=t.style;if(s)for(let t in e){let n=e[t];n&&s.setProperty(t,n,i?"important":"")}}class h{constructor(t){this.container=t,this._applyPostDrawUpdaters=t=>{for(let e of this._postDrawUpdaters)e.afterDraw?.(t)},this._applyPreDrawUpdaters=(t,e,i,s,n,a)=>{for(let r of this._preDrawUpdaters){if(r.getColorStyles){let{fill:a,stroke:o}=r.getColorStyles(e,t,i,s);a&&(n.fill=a),o&&(n.stroke=o)}if(r.getTransformValues){let t=r.getTransformValues(e);for(let e in t)!function(t,e,i){let s=e[i];void 0!==s&&(t[i]=(t[i]??1)*s)}(a,t,e)}r.beforeDraw?.(e)}},this._applyResizePlugins=()=>{for(let t of this._resizePlugins)t.resize?.()},this._getPluginParticleColors=t=>{let e,i;for(let s of this._colorPlugins)if(!e&&s.particleFillColor&&(e=(0,r.lN)(s.particleFillColor(t))),!i&&s.particleStrokeColor&&(i=(0,r.lN)(s.particleStrokeColor(t))),e&&i)break;return[e,i]},this._initCover=async()=>{let t=this.container.actualOptions.backgroundMask.cover,e=t.color;if(e){let i=(0,r.tX)(e);if(i){let e={...i,a:t.opacity};this._coverColorStyle=(0,r.iz)(e,e.a)}}else await new Promise((e,i)=>{if(!t.image)return;let s=document.createElement("img");s.addEventListener("load",()=>{this._coverImage={image:s,opacity:t.opacity},e()}),s.addEventListener("error",t=>{i(t.error)}),s.src=t.image})},this._initStyle=()=>{let t=this.element,e=this.container.actualOptions;if(t)for(let i in this._fullScreen?(this._originalStyle=(0,n.ZB)({},t.style),this._setFullScreenStyle()):this._resetOriginalStyle(),e.style){if(!i||!e.style)continue;let s=e.style[i];s&&t.style.setProperty(i,s,"important")}},this._initTrail=async()=>{let t=this.container.actualOptions.particles.move.trail,e=t.fill;if(!t.enable)return;let i=1/t.length;if(e.color){let t=(0,r.tX)(e.color);if(!t)return;this._trailFill={color:{...t},opacity:i}}else await new Promise((t,s)=>{if(!e.image)return;let n=document.createElement("img");n.addEventListener("load",()=>{this._trailFill={image:n,opacity:i},t()}),n.addEventListener("error",t=>{s(t.error)}),n.src=e.image})},this._paintBase=t=>{this.draw(e=>(0,a.TQ)(e,this.size,t))},this._paintImage=(t,e)=>{this.draw(i=>(0,a.C3)(i,this.size,t,e))},this._repairStyle=()=>{let t=this.element;t&&(this._safeMutationObserver(t=>t.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(e=>e.observe(t,{attributes:!0})))},this._resetOriginalStyle=()=>{let t=this.element,e=this._originalStyle;t&&e&&o(t,e)},this._safeMutationObserver=t=>{this._mutationObserver&&t(this._mutationObserver)},this._setFullScreenStyle=()=>{let t=this.element;t&&o(t,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){let t=this.container.actualOptions,e=t.particles.move.trail,i=this._trailFill;t.backgroundMask.enable?this.paint():e.enable&&e.length>0&&i?i.color?this._paintBase((0,r.iz)(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):t.clear&&this.draw(t=>{(0,a.ZH)(t,this.size)})}destroy(){if(this.stop(),this._generated){let t=this.element;t?.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){let e=this._context;if(e)return t(e)}drawAsync(t){let e=this._context;if(e)return t(e)}drawParticle(t,e){if(t.spawning||t.destroyed)return;let i=t.getRadius();if(i<=0)return;let s=t.getFillColor(),n=t.getStrokeColor()??s,[o,h]=this._getPluginParticleColors(t);o||(o=s),h||(h=n),(o||h)&&this.draw(s=>{let n=this.container,l=n.actualOptions,c=t.options.zIndex,d=1-t.zIndexFactor,u=d**c.opacityRate,p=t.bubble.opacity??t.opacity?.value??1,f=t.strokeOpacity??p,_=p*u,g={},m={fill:o?(0,r.vz)(o,_):void 0};m.stroke=h?(0,r.vz)(h,f*u):m.fill,this._applyPreDrawUpdaters(s,t,i,_,m,g),(0,a.zv)({container:n,context:s,particle:t,delta:e,colorStyles:m,backgroundMask:l.backgroundMask.enable,composite:l.backgroundMask.composite,radius:i*d**c.sizeRate,opacity:_,shadow:t.options.shadow,transform:g}),this._applyPostDrawUpdaters(t)})}drawParticlePlugin(t,e,i){this.draw(s=>(0,a.$F)(s,t,e,i))}drawPlugin(t,e){this.draw(i=>(0,a.Zw)(i,t,e))}async init(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=(0,n.yf)(t=>{for(let e of t)"attributes"===e.type&&"style"===e.attributeName&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){(0,n.jl)().error(t)}this.initBackground(),this._safeMutationObserver(t=>{this.element&&t.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){let t=this.container.actualOptions.background,e=this.element;if(!e)return;let i=e.style;if(i){if(t.color){let e=(0,r.tX)(t.color);i.backgroundColor=e?(0,r.iz)(e,t.opacity):""}else i.backgroundColor="";i.backgroundImage=t.image||"",i.backgroundPosition=t.position||"",i.backgroundRepeat=t.repeat||"",i.backgroundSize=t.size||""}}initPlugins(){for(let[,t]of(this._resizePlugins=[],this.container.plugins))t.resize&&this._resizePlugins.push(t),(t.particleFillColor??t.particleStrokeColor)&&this._colorPlugins.push(t)}initUpdaters(){for(let t of(this._preDrawUpdaters=[],this._postDrawUpdaters=[],this.container.particles.updaters))t.afterDraw&&this._postDrawUpdaters.push(t),(t.getColorStyles??t.getTransformValues??t.beforeDraw)&&this._preDrawUpdaters.push(t)}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&s.YU in t.dataset?"true"===t.dataset[s.YU]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=(0,n.ZB)({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(t=>{this.element&&t.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){let t=this.container.actualOptions;this.draw(e=>{t.backgroundMask.enable&&t.backgroundMask.cover?((0,a.ZH)(e,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;let t=this.container,e=t.retina.pixelRatio,i=t.canvas.size,s={width:this.element.offsetWidth*e,height:this.element.offsetHeight*e};if(s.height===i.height&&s.width===i.width&&s.height===this.element.height&&s.width===this.element.width)return!1;let n={...i};return this.element.width=i.width=this.element.offsetWidth*e,this.element.height=i.height=this.element.offsetHeight*e,this.container.started&&t.particles.setResizeFactor({width:i.width/n.width,height:i.height/n.height}),!0}stop(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=void 0,this.draw(t=>(0,a.ZH)(t,this.size))}async windowResize(){if(!this.element||!this.resize())return;let t=this.container,e=t.updateActualOptions();t.particles.setDensity(),this._applyResizePlugins(),e&&await t.refresh()}}var l=i(42455);function c(t,e,i,s,n){if(s){let s={passive:!0};(0,l.jn)(n)?s.capture=n:void 0!==n&&(s=n),t.addEventListener(e,i,s)}else t.removeEventListener(e,i,n)}class d{constructor(t){this.container=t,this._doMouseTouchClick=t=>{let e=this.container,i=e.actualOptions;if(this._canPush){let t=e.interactivity.mouse,s=t.position;if(!s)return;t.clickPosition={...s},t.clickTime=new Date().getTime();let a=i.interactivity.events.onClick;(0,n.KH)(a.mode,t=>this.container.handleClickMode(t))}"touchend"===t.type&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=t=>{let e=this.container,i=e.options,s=i.defaultThemes,n=t.matches?s.dark:s.light,a=i.themes.find(t=>t.name===n);a&&a.default.auto&&e.loadTheme(n)},this._handleVisibilityChange=()=>{let t=this.container,e=t.actualOptions;this._mouseTouchFinish(),e.pauseOnBlur&&(document&&document.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);let t=async()=>{let t=this.container.canvas;await t?.windowResize()};this._resizeTimeout=setTimeout(()=>void t(),this.container.actualOptions.interactivity.events.resize.delay*s.X5)},this._manageInteractivityListeners=(t,e)=>{let i=this._handlers,n=this.container,a=n.actualOptions,r=n.interactivity.element;if(!r)return;let o=n.canvas.element;o&&(o.style.pointerEvents=r===o?"initial":"none"),(a.interactivity.events.onHover.enable||a.interactivity.events.onClick.enable)&&(c(r,s.Wt,i.mouseMove,e),c(r,s.Re,i.touchStart,e),c(r,s.zX,i.touchMove,e),a.interactivity.events.onClick.enable?(c(r,s.$o,i.touchEndClick,e),c(r,s.zw,i.mouseUp,e),c(r,s.ZL,i.mouseDown,e)):c(r,s.$o,i.touchEnd,e),c(r,t,i.mouseLeave,e),c(r,s.VH,i.touchCancel,e))},this._manageListeners=t=>{let e=this._handlers,i=this.container,n=i.actualOptions.interactivity.detectsOn,a=i.canvas.element,r=s.aM;"window"===n?(i.interactivity.element=window,r=s.G1):"parent"===n&&a?i.interactivity.element=a.parentElement??a.parentNode:i.interactivity.element=a,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(r,t),document&&c(document,s.QL,e.visibilityChange,t,!1)},this._manageMediaMatch=t=>{let e=this._handlers,i=(0,n.HY)("(prefers-color-scheme: dark)");if(i){if(void 0!==i.addEventListener){c(i,"change",e.themeChange,t);return}void 0!==i.addListener&&(t?i.addListener(e.oldThemeChange):i.removeListener(e.oldThemeChange))}},this._manageResize=t=>{let e=this._handlers,i=this.container;if(!i.actualOptions.interactivity.events.resize)return;if("undefined"==typeof ResizeObserver){c(window,s.rR,e.resize,t);return}let n=i.canvas.element;this._resizeObserver&&!t?(n&&this._resizeObserver.unobserve(n),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&n&&(this._resizeObserver=new ResizeObserver(t=>{t.find(t=>t.target===n)&&this._handleWindowResize()}),this._resizeObserver.observe(n))},this._mouseDown=()=>{let{interactivity:t}=this.container;if(!t)return;let{mouse:e}=t;e.clicking=!0,e.downPosition=e.position},this._mouseTouchClick=t=>{let e=this.container,i=e.actualOptions,{mouse:s}=e.interactivity;s.inside=!0;let n=!1,a=s.position;if(a&&i.interactivity.events.onClick.enable){for(let[,t]of e.plugins)if(t.clickPositionValid&&(n=t.clickPositionValid(a)))break;n||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{let t=this.container.interactivity;if(!t)return;let e=t.mouse;delete e.position,delete e.clickPosition,delete e.downPosition,t.status=s.aM,e.inside=!1,e.clicking=!1},this._mouseTouchMove=t=>{let e;let i=this.container,n=i.actualOptions,a=i.interactivity,r=i.canvas.element;if(!a?.element)return;if(a.mouse.inside=!0,t.type.startsWith("pointer")){if(this._canPush=!0,a.element===window){if(r){let i=r.getBoundingClientRect();e={x:t.clientX-i.left,y:t.clientY-i.top}}}else if("parent"===n.interactivity.detectsOn){let i=t.target,s=t.currentTarget;if(i&&s&&r){let n=i.getBoundingClientRect(),a=s.getBoundingClientRect(),o=r.getBoundingClientRect();e={x:t.offsetX+2*n.left-(a.left+o.left),y:t.offsetY+2*n.top-(a.top+o.top)}}else e={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY}}else t.target===r&&(e={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY})}else if(this._canPush="touchmove"!==t.type,r){let i=t.touches[t.touches.length-1],s=r.getBoundingClientRect();e={x:i.clientX-(s.left??0),y:i.clientY-(s.top??0)}}let o=i.retina.pixelRatio;e&&(e.x*=o,e.y*=o),a.mouse.position=e,a.status=s.Wt},this._touchEnd=t=>{for(let e of Array.from(t.changedTouches))this._touches.delete(e.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{for(let e of Array.from(t.changedTouches))this._touches.delete(e.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{for(let e of Array.from(t.changedTouches))this._touches.set(e.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var u=i(8830);class p{constructor(t,e){this.container=e,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(let e of this._externalInteractors)e.isEnabled()&&e.interact(t)}handleClickMode(t){for(let e of this._externalInteractors)e.handleClickMode?.(t)}async init(){for(let t of(this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[],this._interactors)){switch(t.type){case"external":this._externalInteractors.push(t);break;case"particles":this._particleInteractors.push(t)}t.init()}}particlesInteract(t,e){for(let i of this._externalInteractors)i.clear(t,e);for(let i of this._particleInteractors)i.isEnabled(t)&&i.interact(t,e)}reset(t){for(let e of this._externalInteractors)e.isEnabled()&&e.reset(t);for(let e of this._particleInteractors)e.isEnabled(t)&&e.reset(t)}}var f=i(69890),_=i(63180),g=i(17802),m=i(79687);let v=0;function y(t){if(!(0,n.dB)(t.outMode,t.checkModes))return;let e=2*t.radius;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)}class w{constructor(t,e){this.container=e,this._calcPosition=(t,e,i,s=v)=>{for(let[,s]of t.plugins){let t=void 0!==s.particlePosition?s.particlePosition(e,this):void 0;if(t)return f.U.create(t.x,t.y,i)}let n=t.canvas.size,a=(0,_.mC)({size:n,position:e}),r=f.U.create(a.x,a.y,i),o=this.getRadius(),h=this.options.move.outModes,l=e=>{y({outMode:e,checkModes:["bounce"],coord:r.x,maxCoord:t.canvas.size.width,setCb:t=>r.x+=t,radius:o})},c=e=>{y({outMode:e,checkModes:["bounce"],coord:r.y,maxCoord:t.canvas.size.height,setCb:t=>r.y+=t,radius:o})};return(l(h.left??h.default),l(h.right??h.default),c(h.top??h.default),c(h.bottom??h.default),this._checkOverlap(r,s))?this._calcPosition(t,void 0,i,s+1):r},this._calculateVelocity=()=>{let t=(0,_.lQ)(this.direction).copy(),e=this.options.move;if("inside"===e.direction||"outside"===e.direction)return t;let i=(0,_.Id)((0,_.Gu)(e.angle.value)),s=(0,_.Id)((0,_.Gu)(e.angle.offset)),n={left:s-.5*i,right:s+.5*i};return e.straight||(t.angle+=(0,_.vd)((0,_.Cs)(n.left,n.right))),e.random&&"number"==typeof e.speed&&(t.length*=(0,_.sZ)()),t},this._checkOverlap=(t,e=v)=>{let i=this.options.collisions,n=this.getRadius();if(!i.enable)return!1;let a=i.overlap;if(a.enable)return!1;let r=a.retries;if(r>=0&&e>r)throw Error(`${s.gK} particle is overlapping and can't be placed`);return!!this.container.particles.find(e=>(0,_.Sp)(t,e.position)<n+e.getRadius())},this._getRollColor=t=>{if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;let e=this.roll.horizontal&&this.roll.vertical?2:1,i=this.roll.horizontal?.5*Math.PI:0;return Math.floor(((this.roll.angle??0)+i)/(Math.PI/e))%2?this.backColor?this.backColor:this.roll.alter?(0,a.PL)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{let e=this.container,i=(0,_.Gu)(this.options.zIndex.value);this.position=this._calcPosition(e,t,(0,_.uZ)(i,0,e.zLayers)),this.initialPosition=this.position.copy();let s=e.canvas.size;switch(this.moveCenter={...(0,n.bt)(this.options.move.center,s),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=(0,_.Gk)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=f.O.origin},this._engine=t}destroy(t){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;let e=this.container,i=this.pathGenerator,s=e.shapeDrawers.get(this.shape);for(let[,i]of(s?.particleDestroy?.(this),e.plugins))i.particleDestroyed?.(this,t);for(let i of e.particles.updaters)i.particleDestroyed?.(this,t);i?.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}draw(t){let e=this.container,i=e.canvas;for(let[,s]of e.plugins)i.drawParticlePlugin(s,this,t);i.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.color))}getMass(){return this.getRadius()**2*Math.PI*.5}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.strokeColor))}init(t,e,i,a){let o=this.container,h=this._engine;this.id=t,this.group=a,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;let l=o.retina.pixelRatio,c=o.actualOptions,d=(0,m.x)(this._engine,o,c.particles),u=d.effect.type,p=d.shape.type,{reduceDuplicates:f}=d;this.effect=(0,n.wA)(u,this.id,f),this.shape=(0,n.wA)(p,this.id,f);let v=d.effect,y=d.shape;if(i){if(i.effect?.type){let t=i.effect.type,e=(0,n.wA)(t,this.id,f);e&&(this.effect=e,v.load(i.effect))}if(i.shape?.type){let t=i.shape.type,e=(0,n.wA)(t,this.id,f);e&&(this.shape=e,y.load(i.shape))}}this.effectData=function(t,e,i,s){let a=e.options[t];if(a)return(0,n.ZB)({close:e.close,fill:e.fill},(0,n.wA)(a,i,s))}(this.effect,v,this.id,f),this.shapeData=function(t,e,i,s){let a=e.options[t];if(a)return(0,n.ZB)({close:e.close,fill:e.fill},(0,n.wA)(a,i,s))}(this.shape,y,this.id,f),d.load(i);let w=this.effectData;w&&d.load(w.particles);let b=this.shapeData;b&&d.load(b.particles);let z=new g.o(h,o);z.load(o.actualOptions.interactivity),z.load(d.interactivity),this.interactivity=z,this.effectFill=w?.fill??d.effect.fill,this.effectClose=w?.close??d.effect.close,this.shapeFill=b?.fill??d.shape.fill,this.shapeClose=b?.close??d.shape.close,this.options=d;let C=this.options.move.path;this.pathDelay=(0,_.Gu)(C.delay.value)*s.X5,C.generator&&(this.pathGenerator=this._engine.getPathGenerator(C.generator),this.pathGenerator&&o.addPath(C.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=(0,n.V0)(this.options.size,l),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(e),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-(0,_.Gu)(this.options.move.decay);let k=o.particles;k.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let P=o.effectDrawers.get(this.effect);!P&&(P=this._engine.getEffectDrawer(this.effect))&&o.effectDrawers.set(this.effect,P),P?.loadEffect&&P.loadEffect(this);let x=o.shapeDrawers.get(this.shape);!x&&(x=this._engine.getShapeDrawer(this.shape))&&o.shapeDrawers.set(this.shape,x),x?.loadShape&&x.loadShape(this);let O=x?.getSidesCount;for(let t of(O&&(this.sides=O(this)),this.spawning=!1,this.shadowColor=(0,r.tX)(this.options.shadow.color),k.updaters))t.init(this);for(let t of k.movers)t.init?.(this);for(let[,t]of(P?.particleInit?.(o,this),x?.particleInit?.(o,this),o.plugins))t.particleCreated?.(this)}isInsideCanvas(){let t=this.getRadius(),e=this.container.canvas.size,i=this.position;return i.x>=-t&&i.y>=-t&&i.y<=e.height+t&&i.x<=e.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(let t of this.container.particles.updaters)t.reset?.(this)}}class b{constructor(t,e){this.position=t,this.particle=e}}var z=i(283);class C{constructor(t,e){this.rectangle=t,this.capacity=e,this._subdivide=()=>{let{x:t,y:e}=this.rectangle.position,{width:i,height:s}=this.rectangle.size,{capacity:n}=this;for(let a=0;a<4;a++){let r=a%2;this._subs.push(new C(new z.Ae(t+.5*i*r,e+.5*s*(Math.round(.5*a)-r),.5*i,.5*s),n))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some(e=>e.insert(t))))}query(t,e){let i=[];if(!t.intersects(this.rectangle))return[];for(let s of this._points)!t.contains(s.position)&&(0,_.Sp)(t.position,s.position)>s.particle.getRadius()&&(!e||e(s.particle))||i.push(s.particle);if(this._divided)for(let s of this._subs)i.push(...s.query(t,e));return i}queryCircle(t,e,i){return this.query(new z.Cd(t.x,t.y,e),i)}queryRectangle(t,e,i){return this.query(new z.Ae(t.x,t.y,e.width,e.height),i)}}let k=t=>{let{height:e,width:i}=t;return new z.Ae(-.25*i,-.25*e,1.5*i,1.5*e)};class P{constructor(t,e){this._addToPool=(...t)=>{for(let e of t)this._pool.push(e)},this._applyDensity=(t,e,i)=>{let s=t.number;if(!t.number.density?.enable){void 0===i?this._limit=s.limit.value:s.limit&&this._groupLimits.set(i,s.limit.value);return}let n=this._initDensityFactor(s.density),a=s.value,r=s.limit.value>0?s.limit.value:a,o=Math.min(a,r)*n+e,h=Math.min(this.count,this.filter(t=>t.group===i).length);void 0===i?this._limit=s.limit.value*n:this._groupLimits.set(i,s.limit.value*n),h<o?this.push(Math.abs(o-h),void 0,t,i):h>o&&this.removeQuantity(h-o,i)},this._initDensityFactor=t=>{let e=this._container;if(!e.canvas.element||!t.enable)return 1;let i=e.canvas.element,s=e.retina.pixelRatio;return i.width*i.height/(t.height*t.width*s**2)},this._pushParticle=(t,e,i,a)=>{try{let s=this._pool.pop();s||(s=new w(this._engine,this._container)),s.init(this._nextId,t,e,i);let n=!0;if(a&&(n=a(s)),!n)return;return this._array.push(s),this._zArray.push(s),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:s}}),s}catch(t){(0,n.jl)().warning(`${s.gK} adding particle: ${t}`)}},this._removeParticle=(t,e,i)=>{let s=this._array[t];if(!s||s.group!==e)return!1;let n=this._zArray.indexOf(s);return this._array.splice(t,1),this._zArray.splice(n,1),s.destroy(i),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:s}}),this._addToPool(s),!0},this._engine=t,this._container=e,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new p(t,e),this._pluginsInitialized=!1;let i=e.canvas.size;this.quadTree=new C(k(i),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){let t=this._container;for(let e of t.actualOptions.manualParticles)this.addParticle(e.position?(0,n.bt)(e.position,t.canvas.size):void 0,e.options)}addParticle(t,e,i,s){let n=this._container.actualOptions.particles.number.limit,a=void 0===i?this._limit:this._groupLimits.get(i)??this._limit,r=this.count;if(a>0){if("delete"===n.mode){let t=r+1-a;t>0&&this.removeQuantity(t)}else if("wait"===n.mode&&r>=a)return}return this._pushParticle(t,e,i,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){let e=this._container,i=e.canvas;for(let[,s]of(i.clear(),this.update(t),e.plugins))i.drawPlugin(s,t);for(let e of this._zArray)e.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){let t=this._container,e=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(let[,e]of t.plugins)if(void 0!==e.particlesInitialization&&(i=e.particlesInitialization()),i)break;if(this.addManualParticles(),!i){let t=e.particles,i=t.groups;for(let e in i){let s=i[e];for(let i=this.count,n=0;n<s.number?.value&&i<t.number.value;i++,n++)this.addParticle(void 0,s,e)}for(let e=this.count;e<t.number.value;e++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;let t=this._container;for(let[,e]of(this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init(),t.pathGenerators))e.init(t)}push(t,e,i,s){for(let n=0;n<t;n++)this.addParticle(e?.position,i,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(t,e,i){this.removeAt(this._array.indexOf(t),void 0,e,i)}removeAt(t,e=1,i,s){if(t<0||t>this.count)return;let n=0;for(let a=t;n<e&&a<this.count;a++)this._removeParticle(a--,i,s)&&n++}removeQuantity(t,e){this.removeAt(0,t,e)}setDensity(){let t=this._container.actualOptions,e=t.particles.groups;for(let t in e)this._applyDensity(e[t],0,t);this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){let e=this._container,i=new Set;for(let[,t]of(this.quadTree=new C(k(e.canvas.size),4),e.pathGenerators))t.update();for(let[,i]of e.plugins)i.update?.(t);let s=this._resizeFactor;for(let e of this._array){for(let[,i]of(s&&!e.ignoresResizeRatio&&(e.position.x*=s.width,e.position.y*=s.height,e.initialPosition.x*=s.width,e.initialPosition.y*=s.height),e.ignoresResizeRatio=!1,this._interactionManager.reset(e),this._container.plugins)){if(e.destroyed)break;i.particleUpdate?.(e,t)}for(let i of this.movers)i.isEnabled(e)&&i.move(e,t);if(e.destroyed){i.add(e);continue}this.quadTree.insert(new b(e.getPosition(),e))}if(i.size){let t=t=>!i.has(t);for(let e of(this._array=this.filter(t),this._zArray=this._zArray.filter(t),i))this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:e}});this._addToPool(...i)}for(let e of(this._interactionManager.externalInteract(t),this._array)){for(let i of this.updaters)i.update(e,t);e.destroyed||e.spawning||this._interactionManager.particlesInteract(e,t)}if(delete this._resizeFactor,this._needsSort){let t=this._zArray;t.sort((t,e)=>e.position.z-t.position.z||t.id-e.id),this._lastZIndex=t[t.length-1].position.z,this._needsSort=!1}}}class x{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){let t=this.container,e=t.actualOptions;this.pixelRatio=!e.detectRetina||(0,n.Kr)()?1:window.devicePixelRatio,this.reduceFactor=1;let i=this.pixelRatio,s=t.canvas;if(s.element){let t=s.element;s.size.width=t.offsetWidth*i,s.size.height=t.offsetHeight*i}let a=e.particles,r=a.move;this.maxSpeed=(0,_.Gu)(r.gravity.maxSpeed)*i,this.sizeAnimationSpeed=(0,_.Gu)(a.size.animation.speed)*i}initParticle(t){let e=t.options,i=this.pixelRatio,s=e.move,n=s.distance,a=t.retina;a.moveDrift=(0,_.Gu)(s.drift)*i,a.moveSpeed=(0,_.Gu)(s.speed)*i,a.sizeAnimationSpeed=(0,_.Gu)(e.size.animation.speed)*i;let r=a.maxDistance;r.horizontal=void 0!==n.horizontal?n.horizontal*i:void 0,r.vertical=void 0!==n.vertical?n.vertical*i:void 0,a.maxSpeed=(0,_.Gu)(s.gravity.maxSpeed)*i}}function O(t){return t&&!t.destroyed}function T(t,e,...i){let s=new u.E(t,e);return(0,m.h)(s,...i),s}class M{constructor(t,e,i){this._intersectionManager=t=>{if(O(this)&&this.actualOptions.pauseOnOutsideViewport)for(let e of t)e.target===this.interactivity.element&&(e.isIntersecting?this.play():this.pause())},this._nextFrame=t=>{try{if(!this._smooth&&void 0!==this._lastFrameTime&&t<this._lastFrameTime+s.X5/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=t;let e=function(t,e=60,i=!1){return{value:t,factor:i?60/e:60*t/s.X5}}(t-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(e.value),this._lastFrameTime=t,e.value>s.X5){this.draw(!1);return}if(this.particles.draw(e),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(t){(0,n.jl)().error(`${s.gK} in animation loop`,t)}},this._engine=t,this.id=Symbol(e),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new x(this),this.canvas=new h(this),this.particles=new P(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=T(this._engine,this),this.actualOptions=T(this._engine,this),this._eventListeners=new d(this),this._intersectionObserver=(0,n.NM)(t=>this._intersectionManager(t)),this._engine.dispatchEvent("containerBuilt",{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&O(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!O(this))return;let e=this.interactivity.element;if(!e)return;let i=(e,i,s)=>{if(!O(this))return;let n=this.retina.pixelRatio,a={x:i.x*n,y:i.y*n};t(e,this.particles.quadTree.queryCircle(a,s*n))},s=!1,n=!1;e.addEventListener("click",t=>{if(!O(this))return;let e={x:t.offsetX||t.clientX,y:t.offsetY||t.clientY};i(t,e,1)}),e.addEventListener("touchstart",()=>{O(this)&&(s=!0,n=!1)}),e.addEventListener("touchmove",()=>{O(this)&&(n=!0)}),e.addEventListener("touchend",t=>{if(O(this)){if(s&&!n){let e=t.touches[t.touches.length-1];if(!e&&!(e=t.changedTouches[t.changedTouches.length-1]))return;let s=this.canvas.element,n=s?s.getBoundingClientRect():void 0;i(t,{x:e.clientX-(n?n.left:0),y:e.clientY-(n?n.top:0)},Math.max(e.radiusX,e.radiusY))}s=!1,n=!1}}),e.addEventListener("touchcancel",()=>{O(this)&&(s=!1,n=!1)})}addLifeTime(t){this._lifeTime+=t}addPath(t,e,i=!1){return!(!O(this)||!i&&this.pathGenerators.has(t))&&(this.pathGenerators.set(t,e),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!O(this))return;for(let[,t]of(this.stop(),this.particles.destroy(),this.canvas.destroy(),this.effectDrawers))t.destroy?.(this);for(let[,t]of this.shapeDrawers)t.destroy?.(this);for(let t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(let t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);this._engine.clearPlugins(this),this.destroyed=!0;let t=this._engine.dom(),e=t.findIndex(t=>t===this);e>=0&&t.splice(e,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(t){if(!O(this))return;let e=t,i=t=>{e&&(this._lastFrameTime=void 0,e=!1),this._nextFrame(t)};this._drawAnimationFrame=requestAnimationFrame(t=>i(t))}async export(t,e={}){for(let[,i]of this.plugins){if(!i.export)continue;let s=await i.export(t,e);if(s.supported)return s.blob}(0,n.jl)().error(`${s.gK} - Export plugin with type ${t} not found`)}handleClickMode(t){if(O(this))for(let[,e]of(this.particles.handleClickMode(t),this.plugins))e.handleClickMode?.(t)}async init(){if(O(this)){for(let t of this._engine.getSupportedEffects()){let e=this._engine.getEffectDrawer(t);e&&this.effectDrawers.set(t,e)}for(let t of this._engine.getSupportedShapes()){let e=this._engine.getShapeDrawer(t);e&&this.shapeDrawers.set(t,e)}for(let[t,e]of(await this.particles.initPlugins(),this._options=T(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=T(this._engine,this,this._options),await this._engine.getAvailablePlugins(this)))this.plugins.set(t,e);for(let[,t]of(this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=(0,_.Gu)(this.actualOptions.duration)*s.X5,this._delay=(0,_.Gu)(this.actualOptions.delay)*s.X5,this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this._smooth=this.actualOptions.smooth,this.effectDrawers))await t.init?.(this);for(let[,t]of this.shapeDrawers)await t.init?.(this);for(let[,t]of this.plugins)await t.init?.();for(let[,t]of(this._engine.dispatchEvent("containerInit",{container:this}),await this.particles.init(),this.particles.setDensity(),this.plugins))t.particlesSetup?.();this._engine.dispatchEvent("particlesSetup",{container:this})}}async loadTheme(t){O(this)&&(this._currentTheme=t,await this.refresh())}pause(){if(O(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(let[,t]of this.plugins)t.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(t){if(!O(this))return;let e=this._paused||t;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),e)for(let[,t]of this.plugins)t.play&&t.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(e??!1)}async refresh(){if(O(this))return this.stop(),this.start()}async reset(){if(O(this))return this._initialSourceOptions=void 0,this._options=T(this._engine,this),this.actualOptions=T(this._engine,this,this._options),this.refresh()}async start(){O(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise(t=>{let e=async()=>{for(let[,t]of(this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element),this.plugins))await t.start?.();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),t()};this._delayTimeout=setTimeout(()=>void e(),this._delay)}))}stop(){if(O(this)&&this.started){for(let[,t]of(this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element),this.plugins))t.stop?.();for(let t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];let t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}}}]);