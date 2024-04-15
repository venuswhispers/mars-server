"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{10946:function(e,i,t){t.d(i,{BaseMover:function(){return a}});var n=t(27837);class a{init(e){let i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,n.Gu)(i.acceleration),inverse:i.inverse},function(e){let i=e.container,t=e.options.move.spin;if(!t.enable)return;let a=t.position??{x:50,y:50},o={x:.01*a.x*i.canvas.size.width,y:.01*a.y*i.canvas.size.height},s=e.getPosition(),l=(0,n.Sp)(s,o),c=(0,n.Gu)(t.acceleration);e.retina.spinAcceleration=c*i.retina.pixelRatio,e.spin={center:o,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:l,acceleration:e.retina.spinAcceleration}}(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,i){let t=e.options,a=t.move;if(!a.enable)return;let o=e.container,s=o.retina.pixelRatio;e.retina.moveSpeed??=(0,n.Gu)(a.speed)*s,e.retina.moveDrift??=(0,n.Gu)(e.options.move.drift)*s;let l=e.slow.inRange?e.slow.factor:1,c=e.retina.moveSpeed*o.retina.reduceFactor,r=e.retina.moveDrift,p=(0,n.KI)(t.size.value)*s,y=c*(a.size?e.getRadius()/p:1)*l*(i.factor||1)/2,v=e.retina.maxSpeed??o.retina.maxSpeed;a.spin.enable?function(e,i){let t=e.container;if(!e.spin)return;let n={x:"clockwise"===e.spin.direction?Math.cos:Math.sin,y:"clockwise"===e.spin.direction?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*n.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*n.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;let a=Math.max(t.canvas.size.width,t.canvas.size.height),o=.5*a;e.spin.radius>o?(e.spin.radius=o,e.spin.acceleration*=-1):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-1),e.spin.angle+=.01*i*(1-e.spin.radius/a)}(e,y):function(e,i,t,a,o,s){(function(e,i){let t=e.options.move.path;if(!t.enable)return;if(e.lastPathTime<=e.pathDelay){e.lastPathTime+=i.value;return}let a=e.pathGenerator?.generate(e,i);a&&e.velocity.addTo(a),t.clamp&&(e.velocity.x=(0,n.uZ)(e.velocity.x,-1,1),e.velocity.y=(0,n.uZ)(e.velocity.y,-1,1)),e.lastPathTime-=e.pathDelay})(e,s);let l=e.gravity,c=l?.enable&&l.inverse?-1:1;o&&t&&(e.velocity.x+=o*s.factor/(60*t)),l?.enable&&t&&(e.velocity.y+=l.acceleration*s.factor*c/(60*t));let r=e.moveDecay;e.velocity.multTo(r);let p=e.velocity.mult(t);l?.enable&&a>0&&(!l.inverse&&p.y>=0&&p.y>=a||l.inverse&&p.y<=0&&p.y<=-a)&&(p.y=c*a,t&&(e.velocity.y=p.y/t));let y=e.options.zIndex,v=(1-e.zIndexFactor)**y.velocityRate;p.multTo(v);let{position:u}=e;u.addTo(p),i.vibrate&&(u.x+=Math.sin(u.x*Math.cos(u.y)),u.y+=Math.cos(u.y*Math.sin(u.x)))}(e,a,y,v,r,i),function(e){let i=e.initialPosition,{dx:t,dy:a}=(0,n.oW)(i,e.position),o=Math.abs(t),s=Math.abs(a),{maxDistance:l}=e.retina,c=l.horizontal,r=l.vertical;if(c||r){if((c&&o>=c||r&&s>=r)&&!e.misplaced)e.misplaced=!!c&&o>c||!!r&&s>r,c&&(e.velocity.x=.5*e.velocity.y-e.velocity.x),r&&(e.velocity.y=.5*e.velocity.x-e.velocity.y);else if((!c||o<c)&&(!r||s<r)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){let t=e.position,a=e.velocity;c&&(t.x<i.x&&a.x<0||t.x>i.x&&a.x>0)&&(a.x*=-(0,n.sZ)()),r&&(t.y<i.y&&a.y<0||t.y>i.y&&a.y>0)&&(a.y*=-(0,n.sZ)())}}}(e)}}}}]);