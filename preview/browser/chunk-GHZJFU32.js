import{a as j}from"./chunk-NAPTRZ5S.js";import{a as N}from"./chunk-LCA5ED7I.js";import{c as $}from"./chunk-2D66LXFZ.js";import{ua as D,va as A,wa as P}from"./chunk-42GC3H2R.js";import{$b as Y,Ab as m,Bb as b,Cb as n,Db as a,Eb as i,Fb as u,Nb as f,Ra as H,Rc as _,Tb as d,Wa as l,Wb as p,Xb as R,Ya as x,Yb as S,_b as F,ac as V,fd as U,ib as k,ic as I,jc as c,lc as B,ob as M,ra as g,sa as T,sd as L,uc as E,wb as y,xb as w,zb as h}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as K}from"./chunk-VB56BUGO.js";var v={};K(v,{toasts1:()=>q,toasts10:()=>at,toasts2:()=>G,toasts3:()=>W,toasts4:()=>X,toasts5:()=>Z,toasts6:()=>tt,toasts7:()=>et,toasts8:()=>st,toasts9:()=>ot,toastsReuse:()=>O});var O=`@if(content1){
  <ngb-toast [class]="buttonClass" [autohide]="autohide" role="alert" aria-live="assertive"
  aria-atomic="true">
  <div class="d-flex">
      {{content1}}
    <button class="btn-close {{btnClass}} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
      (click)="show9 = true"></button>
  </div>
  <ng-content></ng-content>
</ngb-toast>
}
@else {

  <ngb-toast
 [delay]="5000"
 [autohide]="autohide"
 [header]="header"
 [ngClass]="buttonClass"
 (hide)="show = false"
 >
     <ng-content>
         <ng-template ngbToastHeader (hide)="show = true;">
             <img
               class="bd-placeholder-img rounded me-2"
               src="./assets/images/brand-logos/favicon.ico"
               alt="Your Image"
               />
               <strong class="me-auto">vyzor</strong>
               <small>11 mins ago</small>
         </ng-template>
         {{content}}
     </ng-content>
     <!-- <button aria-label="Close" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
     >
     <span aria-hidden="true"></span>
   </button> -->
 </ngb-toast>
}
`,q=`<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" (click)="showToast()" >Show live
toast</button>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toasts; track toasts) {
<ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToast(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header text-default">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,G=`@if (show6){
    <ngb-toast  class="toast align-items-center text-bg-primary  border-0 fade show  mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
              Hello, world! This is the Primary toast message
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show6 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show7){
    <ngb-toast  class="toast align-items-center text-bg-secondary border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the Secondary toast.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show7 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show8){
    <ngb-toast  class="toast align-items-center text-bg-warning border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the  warning toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show8 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show9){
    <ngb-toast  class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the info toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show9 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }`,W=`@if (show) {
    <ngb-toast [autohide]="false" (hidden)="show = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,X=`<div class="toast-container position-static">
@if (show1) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>just now</small>
        </ng-template>
        See? Just like this.
    </ngb-toast>
}
@if (show2) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>2 seconds ago</small>
        </ng-template>
        Heads up, toasts will stack automatically
    </ngb-toast>
}

</div>`,Z=`@if (show3) {
    <ngb-toast [autohide]="false" (hidden)="show3 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,tt=` @if (show10){
    <ngb-toast  class="toast align-items-center  mb-2 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-black">
                Hello, world! This is a toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close  me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show10 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
<div>
    <span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    </span>
</div>
@if (show11){
<ngb-toast
[autohide]="false"
class="toast fade show mt-2"
role="alert"
aria-live="assertive"
aria-atomic="true"
>
<div class="toast-body">
  Hello, world! This is a toast message.
  <div class="mt-2 pt-2 me-2 border-top">
    <button type="button" class="btn btn-primary btn-sm btn-wave">
      Take action
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm btn-wave"
      data-bs-dismiss="toast"
      (click)="show11 = false"
    >
      Close
    </button>
  </div>
</div>
</ngb-toast>
}`,et=`<div class="btn-list">
<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn" data-bs-dismiss="toast"
                            aria-label="Close"  (click)="showToastprimary()" >Primary</button>
<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn" (click)="showToastseconday()"
>secondary</button>
<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn"  (click)="showToastwarning()"
>warning</button>
<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn"  (click)="showToastinfo()"
>info</button>
<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn"  (click)="showToastsuccess()"
>success</button>
<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn"  (click)="showToastdanger()"
>danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toasts1) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary-transparent]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts2; track toasts2) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary-transparent]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts3; track toasts3) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning-transparent]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts4; track toasts4) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info-transparent]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts5; track toasts5) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success-transparent]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts6; track toasts6) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger-transparent]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
</div>`,st=`<div class="btn-list">
<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn"  (click)="SolidToastprimary()">Primary</button>
<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn"  (click)="SolidToastsecondary()">secondary</button>
<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn"  (click)="SolidToastwarning()">warning</button>
<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn"  (click)="SolidToastinfo()">info</button>
<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn"  (click)="SolidToastsuccess()">success</button>
<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn"  (click)="SolidToastdanger()">danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toastsA; track toastsA) {
    <ngb-toast id="solid-primaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-primary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsB; track toastsB) {
    <ngb-toast id="solid-secondaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-secondary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}


@for (toast of toastsC; track toastsC) {
    <ngb-toast id="solid-warningToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-warning text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsD; track toastsD) {
    <ngb-toast id="solid-infoToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-info text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsE; track toastsE) {
    <ngb-toast id="solid-successToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-success text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsF; track toastsF) {
    <ngb-toast id="solid-dangerToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-danger text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
</div>`,ot=`<div class="btn-list">
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn" (click)="TopLeft()">Top Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" (click)="TopCenter()">Top Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" (click)="TopRight()">Top Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" (click)="MiddleLeft()">Middle Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" (click)="MiddleCenter()">Middle Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" (click)="MiddleRight()">Middle Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" (click)="BottomLeft()">Bottom Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" (click)="BottomCenter()">Bottom Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" (click)="BottomRight()">Bottom Right</button>
</div>
<div class="toast-container position-fixed top-0 start-0 p-3">
@for (toast of toasts7; track toasts7) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="toplefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="toplefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 start-50  translate-middle-x p-3">
@for (toast of toasts8; track toasts8) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts9; track toasts9) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
@for (toast of toasts10; track toasts10) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-50 translate-middle">
@for (toast of toasts11; track toasts11) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
@for (toast of toasts12; track toasts12) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-0 p-3">
@for (toast of toasts13; track toasts13) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
@for (toast of toasts14; track toasts14) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomCenterthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomCenterthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
@for (toast of toasts15; track toasts15) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,at=`<div class="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
    class="d-flex justify-content-center align-items-center w-100">

        @if (show5) {
            <ngb-toast class="shadow-lg fade" [autohide]="false" (hidden)="show5 = false">
                <ng-template ngbToastHeader>
                    <div class="me-auto">
                        <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                        <strong class="mx-1 ">Udon</strong>
                    </div>
                    <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
            </ngb-toast>
        }
</div>
</div>`;var J=["*","*"];function lt(e,t){if(e&1){let o=f();a(0,"ngb-toast",2)(1,"div",3),c(2),a(3,"button",4),d("click",function(){g(o);let r=p();return T(r.onClose())}),i()(),S(4),i()}if(e&2){let o=p();I(o.buttonClass()),n("autohide",o.autohide()),l(2),B(" ",o.content1," "),l(),I(E("btn-close ",o.btnClass()," me-2 m-auto"))}}function rt(e,t){if(e&1&&(u(0,"img",7),a(1,"strong",8),c(2,"Vyzor"),i(),a(3,"small"),c(4,"11 mins ago"),i()),e&2){let o=p(3);n("src",E("./assets/images/brand-logos/",o.toastImage(),".png"),H)}}function dt(e,t){if(e&1){let o=f();M(0,rt,5,2,"ng-template",6),d("hide",function(){g(o);let r=p(2);return T(r.show=!0)}),c(1)}if(e&2){let o=p(2);l(),B(" ",o.content()," ")}}function ct(e,t){if(e&1){let o=f();a(0,"ngb-toast",5),d("hide",function(){g(o);let r=p();return T(r.show=!1)}),S(1,1,null,dt,2,1),i()}if(e&2){let o=p();n("delay",5e3)("autohide",o.autohide())("header",o.header())("ngClass",o.buttonClass())}}var C=class e{show=!1;title=_("");content=_("");header=_("");toastImage=_("");buttonClass=_("");btnClass=_("");content1="";autohide=_(!1);hide=new x;closeToast=new x;onClose(){this.closeToast.emit()}onHide(){this.show=!1,this.hide.emit()}show9=!0;hidden=()=>{this.show9=!1};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=k({type:e,selectors:[["spk-toast"]],inputs:{show:"show",title:[1,"title"],content:[1,"content"],header:[1,"header"],toastImage:[1,"toastImage"],buttonClass:[1,"buttonClass"],btnClass:[1,"btnClass"],content1:"content1",autohide:[1,"autohide"]},outputs:{hide:"hide",closeToast:"closeToast"},ngContentSelectors:J,decls:2,vars:1,consts:[["role","alert","aria-live","assertive","aria-atomic","true",3,"class","autohide"],[1,"mb-2",3,"delay","autohide","header","ngClass"],["role","alert","aria-live","assertive","aria-atomic","true",3,"autohide"],[1,"d-flex"],["data-bs-dismiss","toast","aria-label","Close",3,"click"],[1,"mb-2",3,"hide","delay","autohide","header","ngClass"],["ngbToastHeader","",3,"hide"],["alt","Your Image",1,"bd-placeholder-img","rounded","me-2",3,"src"],[1,"me-auto"]],template:function(o,s){o&1&&(R(J),y(0,lt,5,7,"ngb-toast",0)(1,ct,3,4,"ngb-toast",1)),o&2&&w(s.content1?0:1)},dependencies:[P,A,D,L,U],encapsulation:2})};var ut=["toastContainer"];function mt(e,t){return this.toasts8}function bt(e,t){return this.toasts9}function ht(e,t){return this.toasts10}function pt(e,t){return this.toasts11}function gt(e,t){return this.toasts12}function Tt(e,t){return this.toasts13}function ft(e,t){return this.toasts14}function yt(e,t){return this.toasts15}function wt(e,t){e&1&&u(0,"spk-toast",6),e&2&&n("toastImage","toggle-logo")("autohide",!0)}function _t(e,t){if(e&1){let o=f();a(0,"spk-toast",57),d("closeToast",function(){g(o);let r=p();return T(r.handleToastClose1())})("contentClick",function(r){g(o);let z=p();return T(z.preventClose(r))}),i()}e&2&&n("buttonClass","toast align-items-center text-bg-primary border-0 mb-4")("autohide",!1)}function vt(e,t){if(e&1){let o=f();a(0,"spk-toast",58),d("closeToast",function(){g(o);let r=p();return T(r.handleToastClose2())}),i()}e&2&&n("buttonClass","toast align-items-center text-bg-secondary border-0 mb-4")("autohide",!1)}function kt(e,t){if(e&1){let o=f();a(0,"spk-toast",59),d("closeToast",function(){g(o);let r=p();return T(r.handleToastClose3())}),i()}e&2&&n("buttonClass","toast align-items-center text-bg-success border-0 mb-4")("autohide",!1)}function Ct(e,t){if(e&1){let o=f();a(0,"spk-toast",60),d("closeToast",function(){g(o);let r=p();return T(r.handleToastClose4())}),i()}e&2&&n("buttonClass","toast align-items-center text-bg-info border-0")("autohide",!1)}function xt(e,t){e&1&&u(0,"spk-toast",6),e&2&&n("toastImage","toggle-logo")("autohide",!1)}function St(e,t){if(e&1){let o=f();a(0,"spk-toast",61),d("closeToast",function(){g(o);let r=p();return T(r.handleToastClose())}),i()}e&2&&n("toastImage","toggle-logo")("buttonClass","toast align-items-center fade show mb-3")("content1","Hello, world! This is a toast message.")("autohide",!1)}function It(e,t){if(e&1){let o=f();a(0,"spk-toast",19),c(1," Hello, world! This is a toast message. "),a(2,"div",62)(3,"button",63),c(4," Take action "),i(),a(5,"button",64),d("click",function(){g(o);let r=p();return T(r.show10=!1)}),c(6," Close "),i()()()}e&2&&n("buttonClass","toast fade show mt-2")("autohide",!1)}function Bt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Et(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-success-transparent")("autohide",!0)}function Ht(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-info-transparent")("autohide",!0)}function Mt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-secondary-transparent")("autohide",!0)}function Rt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-secondary-transparent")("autohide",!0)}function Ft(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-warning-transparent")("autohide",!0)}function Yt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-info-transparent")("autohide",!0)}function Vt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-success-transparent")("autohide",!0)}function Ut(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-danger-transparent")("autohide",!0)}function Lt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary text-fixed-white")("autohide",!0)}function Dt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-secondary text-fixed-white")("autohide",!0)}function At(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-warning text-fixed-white")("autohide",!0)}function Pt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-info text-fixed-white")("autohide",!0)}function $t(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-success text-fixed-white")("autohide",!0)}function Nt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-danger text-fixed-white")("autohide",!0)}function jt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Jt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Qt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function zt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Kt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Ot(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function qt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Gt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Wt(e,t){e&1&&u(0,"spk-toast",29),e&2&&n("toastImage","toggle-dark")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}var Q=class e{prismCode=v;reusableCode=v;show=!0;show1=!0;showContent=!0;show2=!0;show3=!0;show4=!0;show5=!0;show6=!0;show7=!0;show8=!0;show9=!0;show10=!0;show11=!0;show12=!0;show13=!0;show14=!0;show15=!0;show16=!0;isclose=!0;isCollapsed=!0;isCollapsed2=!0;isCollapsed3=!0;isCollapsed4=!0;isCollapsed5=!0;isCollapsed6=!0;isCollapsed7=!0;preventClose(t){t.stopPropagation()}toastContainer;show0=!1;autohide=!0;constructor(){}ngOnInit(){}toasts=[];toasts1=[];toasts2=[];toasts3=[];toasts4=[];toasts5=[];toasts6=[];toastsA=[];toastsB=[];toastsC=[];toastsD=[];toastsE=[];toastsF=[];toastsG=[];toastsH=[];toastsI=[];toastsJ=[];toastsK=[];toasts7=[];toasts8=[];toasts9=[];toasts10=[];toasts11=[];toasts12=[];toasts13=[];toasts14=[];toasts15=[];toasts16=[];toasts17=[];toasts18=[];showToast(){let t={autohide:!0};this.toasts.push(t)}showToastprimary(){let t={autohide:!0};this.toasts1.push(t)}showToastprimary1(){let t={autohide:!0};this.toasts16.push(t)}showToastprimary2(){let t={autohide:!0};this.toasts17.push(t)}showToastsecondary(){let t={autohide:!0};this.toasts18.push(t)}showToastseconday(){let t={autohide:!0};this.toasts2.push(t)}showToastwarning(){let t={autohide:!0};this.toasts3.push(t)}showToastinfo(){let t={autohide:!0};this.toasts4.push(t)}showToastsuccess(){let t={autohide:!0};this.toasts5.push(t)}showToastdanger(){let t={autohide:!0};this.toasts6.push(t)}hideToastprimary(t){this.toasts1=this.toasts1.filter(o=>o!==t)}hideToastprimary1(t){this.toasts16=this.toasts16.filter(o=>o!==t)}hideToastprimary2(t){this.toasts17=this.toasts17.filter(o=>o!==t)}hideToastwarning(t){this.toasts3=this.toasts3.filter(o=>o!==t)}hideToastinfo(t){this.toasts4=this.toasts4.filter(o=>o!==t)}hideToastsuccess(t){this.toasts5=this.toasts5.filter(o=>o!==t)}hideToastdanger(t){this.toasts6=this.toasts6.filter(o=>o!==t)}hidehedaer=[{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-primary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-secondary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-warning mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-info"}];SolidToastprimary(){let t={autohide:!0};this.toastsA.push(t)}SolidToastprimary1(){let t={autohide:!0};this.toastsH.push(t)}SolidToastjs(){let t={autohide:!0};this.toastsK.push(t)}SolidToastprimary2(){let t={autohide:!0};this.toastsI.push(t)}SolidToastsecondary(){let t={autohide:!0};this.toastsJ.push(t)}SolidToastwarning(){let t={autohide:!0};this.toastsC.push(t)}SolidToastinfo(){let t={autohide:!0};this.toastsD.push(t)}SolidToastsuccess(){let t={autohide:!0};this.toastsE.push(t)}SolidToastdanger(){let t={autohide:!0};this.toastsF.push(t)}hideToast(t){this.toasts=this.toasts.filter(o=>o!==t)}hideSolidToastprimary(t){this.toastsA=this.toastsA.filter(o=>o!==t)}hideSolidToastprimary1(t){this.toastsH=this.toastsH.filter(o=>o!==t)}hideSolidToastprimary2(t){this.toastsI=this.toastsI.filter(o=>o!==t)}hideSolidToastwarning(t){this.toastsC=this.toastsC.filter(o=>o!==t)}hideSolidToastinfo(t){this.toastsD=this.toastsD.filter(o=>o!==t)}hideSolidToastsuccess(t){this.toastsE=this.toastsE.filter(o=>o!==t)}hideSolidToastdanger(t){this.toastsF=this.toastsF.filter(o=>o!==t)}hidden=()=>{this.show9=!1};handleToastClose(){this.showContent=!1}handleToastClose1(){this.show11=!1}handleToastClose2(){this.show12=!1}handleToastClose3(){this.show13=!1}handleToastClose4(){this.show14=!1}contentClose(){this.show10=!1}close(){this.isclose=!1,setTimeout(()=>this.isclose=!0,3e3)}TopLeft(){let t={autohide:!0};this.toasts7.push(t)}TopCenter(){let t={autohide:!0};this.toasts8.push(t)}TopCenterhideToast(t){this.toasts8=this.toastsA.filter(o=>o!==t)}TopRight(){let t={autohide:!0};this.toasts9.push(t)}TopRighthideToast(t){this.toasts9=this.toastsA.filter(o=>o!==t)}MiddleLeft(){let t={autohide:!0};this.toasts10.push(t)}MiddleLefthideToast(t){this.toasts10=this.toastsA.filter(o=>o!==t)}MiddleCenter(){let t={autohide:!0};this.toasts11.push(t)}MiddleCenterhideToast(t){this.toasts11=this.toastsA.filter(o=>o!==t)}MiddleRight(){let t={autohide:!0};this.toasts12.push(t)}MiddleRighthideToast(t){this.toasts12=this.toastsA.filter(o=>o!==t)}BottomLeft(){let t={autohide:!0};this.toasts13.push(t)}BottomLefthideToast(t){this.toasts13=this.toastsA.filter(o=>o!==t)}BottomCenter(){let t={autohide:!0};this.toasts14.push(t)}BottomCenterthideToast(t){this.toasts14=this.toastsA.filter(o=>o!==t)}BottomRight(){let t={autohide:!0};this.toasts15.push(t)}BottomRighthideToast(t){this.toasts15=this.toastsA.filter(o=>o!==t)}showToastBasic=!1;showToastStack1=!1;showToastStack2=!1;showBasicToast(){this.showToastBasic=!0}showStackToasts(){this.showToastStack1=!0,setTimeout(()=>this.showToastStack2=!0,1e3)}solidtoasts=[{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-secondary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=k({type:e,selectors:[["app-toasts"]],viewQuery:function(o,s){if(o&1&&F(ut,5),o&2){let r;Y(r=V())&&(s.toastContainer=r.first)}},decls:151,vars:46,consts:[["title","Ui Elements","active_item","Toasts",3,"subtitle"],[1,"row"],[1,"col-xl-4"],[3,"reuseCode","title","prism"],["type","button","id","liveToastBtn",1,"btn","btn-primary","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3","mt-3"],["content"," Hello, world! This is a toast message",3,"toastImage","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Primary toast message.",3,"buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Secondary toast message.",3,"buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Success toast message.",3,"buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Info toast message.",3,"buttonClass","autohide"],["classbody","basitoastbody",3,"title","prism","reuseCode"],["content"," Hello, world! This is a toast message",3,"hide","toastImage","autohide"],["classbody","stackingbody",3,"title","prism","reuseCode"],[1,"toast-container","position-static"],["buttonClass","mb-3","content","See? Just like this.",3,"hide","toastImage","autohide"],["buttonClass","","content","Heads up, toasts will stack automatically",3,"hide","toastImage","autohide"],[3,"toastImage","buttonClass","content1","autohide"],[1,"my-4","text-muted"],["content","Your,toast message here.",3,"buttonClass","autohide"],[1,"col-xl-6"],[1,"btn-list"],["type","button","id","primaryToastBtn",1,"btn","btn-primary-light","me-2","btn-wave",3,"click"],["type","button","id","successToastBtn",1,"btn","btn-success-light","me-2","btn-wave",3,"click"],["type","button","id","infoToastBtn",1,"btn","btn-info-light","me-2","btn-wave",3,"click"],["type","button","id","secondaryToastBtn",1,"btn","btn-secondary-light","me-2","btn-wave",3,"click"],["type","button","id","warningToastBtn",1,"btn","btn-warning-light","me-2","btn-wave",3,"click"],["type","button","id","dangerToastBtn",1,"btn","btn-danger-light","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3"],["content","Your,toast message here.",3,"toastImage","buttonClass","autohide"],["classbody","bgtoastbody",3,"reuseCode","title","prism"],["type","button","id","solidprimaryToastBtn",1,"btn","btn-primary","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-secondary","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-warning","me-2","btn-wave",3,"click"],["type","button","id","solidinfoToastBtn",1,"btn","btn-info","me-2","btn-wave",3,"click"],["type","button","id","solidsuccessToastBtn",1,"btn","btn-success","me-2","btn-wave",3,"click"],["type","button","id","soliddangerToastBtn",1,"btn","btn-danger","me-2","btn-wave",3,"click"],[1,"col-xl-12"],["type","button","id","topleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","topcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","toprightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middleleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlecenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlerightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomrightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","start-0","p-3"],[1,"toast-container","position-fixed","top-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","top-50","start-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","top-50","start-50","translate-middle"],[1,"toast-container","position-fixed","top-50","end-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","bottom-0","start-0","p-3"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","bottom-0","end-0","p-3"],[1,"bd-example","bg-light","bd-example-toasts","aligning-toasts","d-flex","justify-content-center","align-items-center","px-2"],["buttonClass","shadow-lg","content"," Hello, world! This is a toast message",3,"hide","toastImage","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Primary toast message.",3,"closeToast","contentClick","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Secondary toast message.",3,"closeToast","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Success toast message.",3,"closeToast","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a Info toast message.",3,"closeToast","buttonClass","autohide"],[3,"closeToast","toastImage","buttonClass","content1","autohide"],[1,"mt-3","pt-2","border-top"],["type","button",1,"btn","btn-primary","btn-sm","btn-wave","me-2"],["type","button","data-bs-dismiss","toast",1,"btn","btn-secondary","btn-sm","btn-wave",3,"click"]],template:function(o,s){o&1&&(u(0,"app-breadcrumb",0),a(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"button",4),d("click",function(){return s.showToast()}),c(5," Show live toast "),i(),a(6,"div",5),m(7,wt,1,2,"spk-toast",6,h),i()(),a(9,"app-showcode-card",3),y(10,_t,1,2,"spk-toast",7),y(11,vt,1,2,"spk-toast",8),y(12,kt,1,2,"spk-toast",9),y(13,Ct,1,2,"spk-toast",10),i()(),a(14,"div",2)(15,"app-showcode-card",11)(16,"spk-toast",12),d("hide",function(){return s.show=!1}),i()(),a(17,"app-showcode-card",13)(18,"div",14)(19,"spk-toast",15),d("hide",function(){return s.show=!1}),i(),a(20,"spk-toast",16),d("hide",function(){return s.show=!1}),i()()()(),a(21,"div",2)(22,"app-showcode-card",3),y(23,xt,1,2,"spk-toast",6),i(),a(24,"app-showcode-card",3),y(25,St,1,4,"spk-toast",17),a(26,"div")(27,"span",18),c(28," Alternatively, you can also add additional controls and components to toasts. "),i()(),y(29,It,7,2,"spk-toast",19),i()()(),a(30,"div",1)(31,"div",20)(32,"app-showcode-card",3)(33,"div",21)(34,"button",22),d("click",function(){return s.showToastprimary()}),c(35," Primary "),i(),a(36,"button",23),d("click",function(){return s.showToastsuccess()}),c(37,"success"),i(),a(38,"button",24),d("click",function(){return s.showToastinfo()}),c(39,"info"),i(),a(40,"button",25),d("click",function(){return s.showToastseconday()}),c(41," secondary "),i(),a(42,"button",26),d("click",function(){return s.showToastwarning()}),c(43," warning "),i(),a(44,"button",24),d("click",function(){return s.showToastinfo()}),c(45," info "),i(),a(46,"button",23),d("click",function(){return s.showToastsuccess()}),c(47," success "),i(),a(48,"button",27),d("click",function(){return s.showToastdanger()}),c(49," danger "),i()(),a(50,"div",28),m(51,Bt,1,3,"spk-toast",29,h),m(53,Et,1,3,"spk-toast",29,h),m(55,Ht,1,3,"spk-toast",29,h),m(57,Mt,1,3,"spk-toast",29,h),m(59,Rt,1,3,"spk-toast",29,h),m(61,Ft,1,3,"spk-toast",29,h),m(63,Yt,1,3,"spk-toast",29,h),m(65,Vt,1,3,"spk-toast",29,h),m(67,Ut,1,3,"spk-toast",29,h),i()()(),a(69,"div",20)(70,"app-showcode-card",30)(71,"div",21)(72,"button",31),d("click",function(){return s.SolidToastprimary()}),c(73," Primary "),i(),a(74,"button",32),d("click",function(){return s.SolidToastsecondary()}),c(75," secondary "),i(),a(76,"button",33),d("click",function(){return s.SolidToastwarning()}),c(77," Warning "),i(),a(78,"button",34),d("click",function(){return s.SolidToastinfo()}),c(79," info "),i(),a(80,"button",35),d("click",function(){return s.SolidToastsuccess()}),c(81," success "),i(),a(82,"button",36),d("click",function(){return s.SolidToastdanger()}),c(83," danger "),i()(),a(84,"div",28),m(85,Lt,1,3,"spk-toast",29,h),m(87,Dt,1,3,"spk-toast",29,h),m(89,At,1,3,"spk-toast",29,h),m(91,Pt,1,3,"spk-toast",29,h),m(93,$t,1,3,"spk-toast",29,h),m(95,Nt,1,3,"spk-toast",29,h),i()()()(),a(97,"div",1)(98,"div",37)(99,"app-showcode-card",3)(100,"div",21)(101,"button",38),d("click",function(){return s.TopLeft()}),c(102,"Top Left"),i(),a(103,"button",39),d("click",function(){return s.TopCenter()}),c(104,"Top Center"),i(),a(105,"button",40),d("click",function(){return s.TopRight()}),c(106,"Top Right"),i(),a(107,"button",41),d("click",function(){return s.MiddleLeft()}),c(108,"Middle Left"),i(),a(109,"button",42),d("click",function(){return s.MiddleCenter()}),c(110,"Middle Center"),i(),a(111,"button",43),d("click",function(){return s.MiddleRight()}),c(112,"Middle Right"),i(),a(113,"button",44),d("click",function(){return s.BottomLeft()}),c(114,"Bottom Left"),i(),a(115,"button",45),d("click",function(){return s.BottomCenter()}),c(116,"Bottom Center"),i(),a(117,"button",46),d("click",function(){return s.BottomRight()}),c(118,"Bottom Right"),i()(),a(119,"div",47),m(120,jt,1,3,"spk-toast",29,h),i(),a(122,"div",48),m(123,Jt,1,3,"spk-toast",29,mt,!0),i(),a(125,"div",28),m(126,Qt,1,3,"spk-toast",29,bt,!0),i(),a(128,"div",49),m(129,zt,1,3,"spk-toast",29,ht,!0),i(),a(131,"div",50),m(132,Kt,1,3,"spk-toast",29,pt,!0),i(),a(134,"div",51),m(135,Ot,1,3,"spk-toast",29,gt,!0),i(),a(137,"div",52),m(138,qt,1,3,"spk-toast",29,Tt,!0),i(),a(140,"div",53),m(141,Gt,1,3,"spk-toast",29,ft,!0),i(),a(143,"div",54),m(144,Wt,1,3,"spk-toast",29,yt,!0),i()()()(),a(146,"div",1)(147,"div",37)(148,"app-showcode-card",3)(149,"div",55)(150,"spk-toast",56),d("hide",function(){return s.show=!1}),i()()()()()),o&2&&(n("subtitle",!1),l(3),n("reuseCode",s.reusableCode.toastsReuse)("title","Live example")("prism",s.prismCode.toasts1),l(4),b(s.toasts),l(2),n("reuseCode",s.reusableCode.toastsReuse)("title","Color schemes")("prism",s.prismCode.toasts2),l(),w(s.show11?10:-1),l(),w(s.show12?11:-1),l(),w(s.show13?12:-1),l(),w(s.show14?13:-1),l(2),n("title","Basic example")("prism",s.prismCode.toasts3)("reuseCode",s.reusableCode.toastsReuse),l(),n("toastImage","toggle-logo")("autohide",!1),l(),n("title","Stacking")("prism",s.prismCode.toasts4)("reuseCode",s.reusableCode.toastsReuse),l(2),n("toastImage","toggle-logo")("autohide",!1),l(),n("toastImage","toggle-logo")("autohide",!1),l(2),n("reuseCode",s.reusableCode.toastsReuse)("title","Translucent")("prism",s.prismCode.toasts5),l(),w(s.show1?23:-1),l(),n("reuseCode",s.reusableCode.toastsReuse)("title","Custom content")("prism",s.prismCode.toasts6),l(),w(s.showContent?25:-1),l(4),w(s.show10?29:-1),l(3),n("reuseCode",s.reusableCode.toastsReuse)("title","Color Variants Live")("prism",s.prismCode.toasts7),l(19),b(s.toasts1),l(2),b(s.toasts16),l(2),b(s.toasts17),l(2),b(s.toasts18),l(2),b(s.toasts2),l(2),b(s.toasts3),l(2),b(s.toasts4),l(2),b(s.toasts5),l(2),b(s.toasts6),l(3),n("reuseCode",s.reusableCode.toastsReuse)("title","Solid Background Toasts")("prism",s.prismCode.toasts8),l(15),b(s.toastsA),l(2),b(s.toastsB),l(2),b(s.toastsC),l(2),b(s.toastsD),l(2),b(s.toastsE),l(2),b(s.toastsF),l(4),n("reuseCode",s.reusableCode.toastsReuse)("title","Toast Placements")("prism",s.prismCode.toasts9),l(21),b(s.toasts7),l(3),b(s.toasts8),l(3),b(s.toasts9),l(3),b(s.toasts10),l(3),b(s.toasts11),l(3),b(s.toasts12),l(3),b(s.toasts13),l(3),b(s.toasts14),l(3),b(s.toasts15),l(4),n("reuseCode",s.reusableCode.toastsReuse)("title","Aligning Toast Using Flexbox")("prism",s.prismCode.toasts10),l(2),n("toastImage","toggle-logo")("autohide",!1))},dependencies:[$,N,j,C],encapsulation:2})};export{Q as Toasts};
