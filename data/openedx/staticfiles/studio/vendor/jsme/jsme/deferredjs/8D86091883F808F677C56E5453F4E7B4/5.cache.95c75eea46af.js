var q0="400px",r0="Accept",s0="Cancel",t0="Paste",u0="Paste the text to import into the text area below.",v0="dragend",w0="dragenter",x0="dragover",y0="drop",z0="gwt-HTML",A0="gwt-TextArea",B0="textarea";r(202,190,{});function C0(){C0=s;D0=new Mx(v0,new E0)}function F0(a){a.a.cancelBubble=!0;qw(a.a)}function E0(){}r(203,202,{},E0);_.Pc=function(){F0(this)};_.Sc=function(){return D0};var D0;function G0(){G0=s;H0=new Mx(w0,new I0)}function I0(){}r(204,202,{},I0);_.Pc=function(){F0(this)};_.Sc=function(){return H0};
var H0;function J0(){J0=s;K0=new Mx(x0,new L0)}function L0(){}r(205,202,{},L0);_.Pc=function(){F0(this)};_.Sc=function(){return K0};var K0;function M0(){M0=s;N0=new Mx(y0,new O0)}function O0(){}r(206,202,{},O0);
_.Pc=function(a){var b,c,d,e;this.a.cancelBubble=!0;qw(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;P0(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(Hp),a.a.b.a.a.e.ob[iq]=null!=b?b:l)};_.Sc=function(){return N0};var N0;function Q0(a,b,c){lz(!a.lb?a.lb=new Az(a):a.lb,c,b)}
function R0(a){var b=H(dk);wS(rp,vS(b));this.ob=b;this.b=new dU(this.ob);this.ob[zj]=z0;cU(this.b,a,!0);lU(this)}r(326,327,{13:1,15:1,17:1,18:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,30:1,31:1,32:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,47:1,49:1,53:1,58:1,68:1,69:1,70:1,73:1,77:1,80:1,81:1,83:1},R0);function S0(){sE();var a=H(B0);!KA&&(KA=new JA);!IA&&(IA=new HA);this.ob=a;this.ob[zj]=A0}r(366,367,Cr,S0);
function T0(a,b){var c,d;c=H(Up);d=H(Gp);d[Ji]=a.a.a;d.style[jq]=a.b.a;var e=(MA(),NA(d));c.appendChild(e);LA(a.d,c);jC(a,b,d)}function U0(){dD.call(this);this.a=(gD(),nD);this.b=(oD(),rD);this.e[sj]=$b;this.e[rj]=$b}r(375,320,yr,U0);_.Hd=function(a){var b;b=pw(a.ob);(a=nC(this,a))&&this.d.removeChild(pw(b));return a};
function V0(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[kq]=gl,DD(a.ob,!1),a._=!1,a.Ud());b=a.ob;b.style[Pl]=0+(gx(),go);b.style[Op]=ac;WV(a,qs(Fw($doc)+(Ew()-lw(a.ob,en)>>1),0),qs(Gw($doc)+(Dw()-lw(a.ob,dn)>>1),0));d||((a._=c)?(a.ob.style[Fj]=Do,a.ob.style[kq]=lq,DD(a.ob,!0),Sr(a.fb,200)):(a.ob.style[kq]=lq,DD(a.ob,!0)))}finally{a.v=!0}}function W0(a){a.f=(new iV(a.i)).mc.Je();UB(a.f,new X0(a),(Sx(),Sx(),Tx));a.d=F(Y0,m,60,[a.f])}
function Z0(){qW();var a,b,c,d,e,f;NW.call(this,(eX(),fX),null,!0);this.Bg();this.cb=!0;a=new R0(this.j);this.e=new S0;this.e.ob.style[rq]=dc;IB(this.e,dc);this.zg();hW(this,q0);f=new U0;f.ob.style[fl]=dc;f.e[sj]=10;c=(gD(),hD);f.a=c;T0(f,a);T0(f,this.e);e=new vD;e.e[sj]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],sD(e,a);T0(f,e);vW(this,f);rV(this,!1);this.Ag()}r(617,618,oP,Z0);_.zg=function(){W0(this)};_.Ag=function(){var a=this.e;a.ob.readOnly=!0;var b=LB(a.ob)+"-readonly";HB(a.ud(),b,!0)};
_.Bg=function(){qV(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function X0(a){this.a=a}r(620,1,{},X0);_.Uc=function(){xW(this.a,!1)};_.a=null;function $0(a){this.a=a}r(621,1,{},$0);
_.Cc=function(){QB(this.a.e.ob,!0);FD(this.a.e.ob);var a=this.a.e,b;b=mw(a.ob,iq).length;if(0<b&&a.jb){if(0>b)throw new aM("Length must be a positive integer. Length: "+b);if(b>mw(a.ob,iq).length)throw new aM("From Index: 0  To Index: "+b+"  Text Length: "+mw(a.ob,iq).length);var a=a.ob,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\r\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\r\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",
b);d.select()}catch(g){}}};_.a=null;function a1(a){a.i=s0;a.j=u0;a.b=r0;qV(a.H.b,t0)}function b1(a){qW();Z0.call(this);this.c=a}r(623,617,oP,b1);_.zg=function(){W0(this);this.a=(new iV(this.b)).mc.Je();UB(this.a,new c1(this),(Sx(),Sx(),Tx));this.d=F(Y0,m,60,[this.a,this.f])};_.Ag=function(){IB(this.e,"150px")};_.Bg=function(){a1(this)};_.Ud=function(){MW(this);$v((Xv(),Yv),new d1(this))};_.a=null;_.b=null;_.c=null;function e1(a){qW();b1.call(this,a)}r(622,623,oP,e1);
_.Ag=function(){IB(this.e,"150px");var a=new f1(this),b=this.e;Q0(b,new g1,(G0(),G0(),H0));Q0(b,new h1,(C0(),C0(),D0));Q0(b,new i1,(J0(),J0(),K0));Q0(b,new j1(a),(M0(),M0(),N0))};_.Bg=function(){a1(this);this.j+=" Or drag and drop a file on it."};r(626,1,{});r(625,626,{});_.b=null;_.c=1;_.d=-1;function f1(a){this.a=a;this.b=new k1(this);this.c=this.d=1}r(624,625,{},f1);_.a=null;function k1(a){this.a=a}r(627,1,{},k1);_.Cg=function(a){this.a.a.e.ob[iq]=null!=a?a:l};_.a=null;
function c1(a){this.a=a}r(631,1,{},c1);_.Uc=function(){if(this.a.c){var a=this.a.c,b;b=new rH(a.a,0,mw(this.a.e.ob,iq));QM(a.a.a,b.a)}xW(this.a,!1)};_.a=null;function d1(a){this.a=a}r(632,1,{},d1);_.Cc=function(){QB(this.a.e.ob,!0);FD(this.a.e.ob)};_.a=null;r(633,1,Zq);_.Kc=qE;_.Lc=function(){var a,b;a=new l1(this.a);void 0!=$wnd.FileReader?b=new e1(a):b=new b1(a);jW(b);V0(b)};_.a=null;function l1(a){this.a=a}r(634,1,{},l1);_.a=null;r(635,1,Zq);_.Kc=qE;
_.Lc=function(){var a;a=new Z0;var b=this.a,c;rE(a.e,b);b=(c=fM(b,"\r\n|\r|\n|\n\r"),c.length);IB(a.e,20*(10>b?b:10)+go);$v((Xv(),Yv),new $0(a));jW(a);V0(a)};_.a=null;function P0(a,b){a.onloadend=function(a){b.Cg(a.target.result)}}function j1(a){this.a=a}r(640,1,{},j1);_.a=null;function g1(){}r(641,1,{},g1);function h1(){}r(642,1,{},h1);function i1(){}r(643,1,{},i1);Y(626);Y(625);Y(640);Y(641);Y(642);Y(643);Y(202);Y(204);Y(203);Y(205);Y(206);Y(617);var Y0=OL(781,wZ);Y(623);Y(622);Y(633);Y(634);Y(635);
Y(620);Y(621);Y(631);Y(632);Y(624);Y(627);Y(326);Y(375);Y(366);y(hP)(5);function qE(){};