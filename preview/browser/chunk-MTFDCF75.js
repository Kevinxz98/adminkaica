import{a as G}from"./chunk-NAPTRZ5S.js";import"./chunk-4AUZCU3R.js";import{a as Z}from"./chunk-LCA5ED7I.js";import{c as D}from"./chunk-2D66LXFZ.js";import{Q as C,R as q,S as Q,T as w}from"./chunk-42GC3H2R.js";import{Ab as N,Bb as k,Cb as a,D as P,Db as n,Eb as o,Fb as l,La as f,Ra as v,Rc as c,Wa as s,Wb as S,Wc as B,d as E,eb as x,ia as u,ib as g,ic as U,jb as F,jc as O,ka as j,kc as A,la as M,ma as h,ob as _,sd as V,td as b,uc as W,wb as T,wc as $,xb as I,y as R,ya as L,yb as H}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as te}from"./chunk-VB56BUGO.js";var ie=(()=>{class t{errorHandler;constructor(i){this.errorHandler=i}log(i,...e){B()&&console.log(i,...e)}error(i){this.errorHandler.handleError(i)}warn(i,...e){console.warn(i,...e)}static \u0275fac=function(e){return new(e||t)(h(L))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();var X=new M("WindowToken"),m=class{get nativeWindow(){throw new Error("Not implemented.")}},se=(()=>{class t extends m{constructor(){super()}get nativeWindow(){return window}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();function ae(t,r){return b(r)?t.nativeWindow:{setTimeout:(e,z)=>{},clearTimeout:e=>{}}}var re={provide:m,useClass:se},ne={provide:X,useFactory:ae,deps:[m,f]},oe=[re,ne],Y=new M("DocumentToken"),p=class{get nativeDocument(){throw new Error("Not implemented.")}},le=(()=>{class t extends p{constructor(){super()}get nativeDocument(){return document}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();function ce(t,r){return b(r)?t.nativeDocument:{hidden:!1,visibilityState:"visible"}}var de={provide:p,useClass:le},ue={provide:Y,useFactory:ce,deps:[p,f]},he=[de,ue];var ge=(()=>{class t{resizeObservable$;docRef;get onResize$(){return this.resizeObservable$.pipe(P(()=>!this.docRef?.fullscreenElement))}constructor(i,e,z){this.docRef=e,this.resizeObservable$=b(z)?R(i,"resize"):new E().asObservable()}static \u0275fac=function(e){return new(e||t)(h(X),h(Y),h(f))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();var J=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=F({type:t});static \u0275inj=j({providers:[oe,ge,he,ie],imports:[V]})}return t})();var d={};te(d,{carousel1:()=>pe,carousel2:()=>ve,carousel3:()=>Se,carousel4:()=>Ce,carousel5:()=>De,carousel6:()=>Me,carousel7:()=>xe,carousel8:()=>Ie,carouselReuse:()=>me,carouselts:()=>fe,carouselts2:()=>_e,carouselts3:()=>be,carouselts4:()=>we,carouselts5:()=>ye,carouselts7:()=>Te});var me=`
<div [id]="carouselId" class="carousel slide {{carouselClass}}" data-bs-ride="carousel">
    <ngb-carousel class="carousel-inner" [interval]="interval" [showNavigationArrows]="showNavigationArrows"
        [showNavigationIndicators]="showNavigationIndicators">
        @for(image of images; track $index){
        @if(image.title){
        <ng-template ngbSlide>
            <img [src]="image.src" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">{{image.title}}</h5>
                <p>{{image.description}}</p>
            </div>
        </ng-template>
        }
        @else {
        <ng-template ngbSlide>

            <div class="carousel-item" class="carousel-item active">
                <img [src]="image" class="d-block w-100" alt="...">
            </div>
        </ng-template>
        }
        }
    </ngb-carousel>
</div>`,pe=`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
@if(images5){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="false"
    [showNavigationIndicators]="false">

    @for (image of images5; track images5) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,fe=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,ve=`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

@if(images6){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images6; track images6) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,_e=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagescontrol = [
    './assets/images/media/media-28.jpg',
    './assets/images/media/media-31.jpg',
    './assets/images/media/media-29.jpg',
  ];
}`,Se=`@if (images2) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-25.jpg" class="d-block w-100" alt="..." />
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-29.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-30.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
    </ngb-carousel>
    }`,be=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagesIndicators = [
    './assets/images/media/media-25.jpg',
    './assets/images/media/media-29.jpg',
    './assets/images/media/media-30.jpg',
  ];
}`,Ce=`@if (images4) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-59.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-60.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-61.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </ng-template>
    </ngb-carousel>
    }`,we=`import { Component } from '@angular/core';
    import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
    import { SharedModule } from '../../../shared/sharedmodule';
    import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
    import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
    import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';
    
    
    @Component({
      selector: 'app-carousels',
      standalone: true,
      imports: [NgbModule,SharedModule,ShowcodeCardComponent],
      templateUrl: './carousels.component.html',
      styleUrl: './carousels.component.scss'
    })
    export class CarouselsComponent {
      prismCode = prismCodeData;
      tsCodedata=tsCodedata
      constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
      }
    
    
      images = [
        './assets/images/media/media-26.jpg',
        './assets/images/media/media-27.jpg',
        './assets/images/media/media-33.jpg',
      ];
    }`,De=`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

@if (images7) {
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images7; track images7) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,ye=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,Me=` <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-40.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-41.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-42.jpg" class="d-block w-100" alt="..." />
    </ng-template>
</ngb-carousel>

</div>`,xe=`<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
data-bs-interval="false">

@if (images8) {
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images8; track images8) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,Te=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  images1 = [
    './assets/images/media/media-13.jpg',
    './assets/images/media/media-14.jpg',
    './assets/images/media/media-18.jpg',
  ];
}`,Ie=`<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [showNavigationArrows]="true"
    [showNavigationIndicators]="true">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-63.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">First slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the first slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-64.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Second slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the second slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-62.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Third slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the third slide.
            </p>
        </div>
    </ng-template>
</ngb-carousel>
</div>`;function Oe(t,r){if(t&1&&(l(0,"img",3),n(1,"div",4)(2,"h5",5),O(3),o(),n(4,"p"),O(5),o()()),t&2){let i=S(2).$implicit;a("src",i.src,v),s(3),A(i.title),s(2),A(i.description)}}function Ae(t,r){t&1&&_(0,Oe,6,3,"ng-template",2)}function $e(t,r){if(t&1&&(n(0,"div",6),l(1,"img",3),o()),t&2){let i=S(2).$implicit;s(),a("src",i,v)}}function ze(t,r){t&1&&_(0,$e,2,1,"ng-template",2)}function Ee(t,r){if(t&1&&T(0,Ae,1,0,null,2)(1,ze,1,0,null,2),t&2){let i=r.$implicit;I(i.title?0:1)}}var y=class t{images=c([]);interval=c(3e3);showNavigationArrows=c(!1);showNavigationIndicators=c(!1);carouselId=c("carouselExample");carouselClass=c("carouselExample");title=c("");static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["spk-ngb-carousel"]],inputs:{images:[1,"images"],interval:[1,"interval"],showNavigationArrows:[1,"showNavigationArrows"],showNavigationIndicators:[1,"showNavigationIndicators"],carouselId:[1,"carouselId"],carouselClass:[1,"carouselClass"],title:[1,"title"]},decls:4,vars:7,consts:[["data-bs-ride","carousel",3,"id"],[1,"",3,"interval","showNavigationArrows","showNavigationIndicators"],["ngbSlide",""],["alt","...",1,"d-block","w-100",3,"src"],[1,"carousel-caption","d-none","d-md-block"],[1,"text-fixed-white"],[1,"carousel-item","active"]],template:function(i,e){i&1&&(n(0,"div",0)(1,"ngb-carousel",1),N(2,Ee,2,1,null,null,H),o()()),i&2&&(U(W("carousel slide ",e.carouselClass())),a("id",e.carouselId()),s(),a("interval",e.interval())("showNavigationArrows",e.showNavigationArrows())("showNavigationIndicators",e.showNavigationIndicators()),s(),k(e.images()))},dependencies:[D,w,Q,q],encapsulation:2})};var ee=class t{prismCode=d;reusableCode=d;tsCodedata=d;constructor(r){r.showNavigationArrows=!0,r.showNavigationIndicators=!0}images=["./assets/images/media/media-26.jpg","./assets/images/media/media-27.jpg","./assets/images/media/media-33.jpg"];imagescontrol=["./assets/images/media/media-28.jpg","./assets/images/media/media-31.jpg","./assets/images/media/media-29.jpg"];imagesIndicators=["./assets/images/media/media-25.jpg","./assets/images/media/media-29.jpg","./assets/images/media/media-30.jpg"];carouselImages=[{src:"./assets/images/media/media-59.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-60.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-61.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];imagescross=["./assets/images/media/media-43.jpg","./assets/images/media/media-44.jpg","./assets/images/media/media-45.jpg"];images1=["./assets/images/media/media-63.jpg","./assets/images/media/media-62.jpg","./assets/images/media/media-64.jpg"];imagesindividual=["./assets/images/media/media-40.jpg","./assets/images/media/media-41.jpg","./assets/images/media/media-42.jpg"];darkVariantlImages=[{src:"./assets/images/media/media-13.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-14.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-18.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];static \u0275fac=function(i){return new(i||t)(x(C))};static \u0275cmp=g({type:t,selectors:[["app-carousel"]],features:[$([C])],decls:27,vars:69,consts:[["title","Advanced UI","active_item","Carousel",3,"subtitle"],[1,"row"],[1,"col-xl-4","col-md-6"],[3,"title","reuseCode","prism","tsCode"],[3,"images","interval","showNavigationArrows","showNavigationIndicators"],[3,"title","prism","reuseCode","tsCode"],[3,"images","id","interval","showNavigationArrows","showNavigationIndicators"],[3,"images","id","carouselClass","interval","showNavigationArrows","showNavigationIndicators"],[3,"title","reuseCode","prism"],[3,"images","interval","showNavigationArrows","id","showNavigationIndicators"]],template:function(i,e){i&1&&(l(0,"app-breadcrumb",0),n(1,"div",1)(2,"div",2)(3,"app-showcode-card",3),l(4,"spk-ngb-carousel",4),o()(),n(5,"div",2)(6,"app-showcode-card",5),l(7,"spk-ngb-carousel",6),o()(),n(8,"div",2)(9,"app-showcode-card",5),l(10,"spk-ngb-carousel",4),o()(),n(11,"div",2)(12,"app-showcode-card",5),l(13,"spk-ngb-carousel",4),o()(),n(14,"div",2)(15,"app-showcode-card",5),l(16,"spk-ngb-carousel",7),o()(),n(17,"div",2)(18,"app-showcode-card",8),l(19,"spk-ngb-carousel",6),o()()(),n(20,"div",1)(21,"div",2)(22,"app-showcode-card",3),l(23,"spk-ngb-carousel",6),o()(),n(24,"div",2)(25,"app-showcode-card",8),l(26,"spk-ngb-carousel",9),o()()()),i&2&&(a("subtitle",!1),s(3),a("title","Slides Only")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel1)("tsCode",e.tsCodedata.carouselts),s(),a("images",e.images)("interval",1e3)("showNavigationArrows",!1)("showNavigationIndicators",!1),s(2),a("title","With controls")("prism",e.prismCode.carousel2)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts2),s(),a("images",e.imagescontrol)("id","carouselExampleControls")("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!1),s(2),a("title","With indicators")("prism",e.prismCode.carousel3)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts3),s(),a("images",e.imagesIndicators)("interval",3e3)("showNavigationArrows",!1)("showNavigationIndicators",!0),s(2),a("title","With captions")("prism",e.prismCode.carousel4)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts4),s(),a("images",e.carouselImages)("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!0),s(2),a("title","Crossfade")("prism",e.prismCode.carousel5)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts5),s(),a("images",e.imagescross)("id","carouselExampleFade")("carouselClass","carousel-fade")("interval",3200)("showNavigationArrows",!0)("showNavigationIndicators",!1),s(2),a("title","Individual .carousel-item interval")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel6),s(),a("images",e.imagesindividual)("id","carouselExampleInterval")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1),s(3),a("title","Disable touch swiping")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel7)("tsCode",e.tsCodedata.carouselts7),s(),a("images",e.images1)("id","carouselExampleControlsNoTouching")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1),s(2),a("title","Dark variant")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel8),s(),a("images",e.darkVariantlImages)("interval",3e3)("showNavigationArrows",!0)("id","carouselExampleDark")("showNavigationIndicators",!0))},dependencies:[D,Z,w,J,G,y],styles:[".carousel.slide{outline:0}  .owl-theme .owl-nav [class*=owl-]{display:inline-table}  .owl-theme:before,   .owl-theme:after{content:none}  .owl-theme .owl-nav [class*=owl-]{color:#252542;font-size:14px;margin:5px;padding:8px 16px;background:#fff;cursor:pointer;border-radius:50%;border:1px solid #d6d6d6}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1000 ms;animation-duration:1000 ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}#basicSlider[_ngcontent-%COMP%]   .MS-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100px}"]})};export{ee as Carousel};
