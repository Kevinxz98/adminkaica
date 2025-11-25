import{a as ie}from"./chunk-NAPTRZ5S.js";import{a as te}from"./chunk-LCA5ED7I.js";import{c as ee}from"./chunk-2D66LXFZ.js";import{Ca as Z,H as K,O as V,P as X,a as J}from"./chunk-42GC3H2R.js";import{$b as I,Ab as C,Bb as A,Cb as c,Db as e,Dd as Y,Eb as s,Fb as d,J as $,Nb as S,Qa as B,Ra as j,Rc as z,Tb as p,Wa as r,Wb as g,Xb as N,Ya as G,Yb as q,_b as R,ac as H,ba as F,d as W,eb as P,fd as Q,ib as L,ic as E,jc as n,kc as O,lc as v,nc as x,oc as _,pc as k,ra as u,sa as h,sd as U,ta as w,ua as b,ub as f,uc as D,zb as y}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as le}from"./chunk-VB56BUGO.js";var T={};le(T,{alertData:()=>we,alertData1:()=>de,alertData2:()=>ne,alertData3:()=>me,alertData4:()=>ce,alertData5:()=>pe,alertData6:()=>ge,alertData7:()=>ue,alertData8:()=>he,alertTS:()=>re,alertTS1:()=>oe,alertTS10:()=>ke,alertTS11:()=>Se,alertTS12:()=>Te,alertTS13:()=>ze,alertTS14:()=>Ee,alertTS15:()=>De,alertTS16:()=>Le,alertTS17:()=>Ve,alertTS2:()=>ve,alertTS3:()=>be,alertTS4:()=>fe,alertTS5:()=>ye,alertTS6:()=>Ce,alertTS7:()=>Ae,alertTS8:()=>xe,alertTS9:()=>_e,alertreuse:()=>ae});var ae=`  <ngb-alert  [type]="variant" [dismissible]="isDismissible"  >
  <ng-content >
  </ng-content>
  </ngb-alert>`,re=`<ngb-alert
type="warning"
class="alert alert-warning alert-dismissible fade show"
role="alert"
>
<strong>Holy guacamole!</strong> You should check in on some of those
fields below.
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</ngb-alert>`,oe=`  @for (livealert of livealerts; track livealert; let i = $index) {
    <div id="liveAlertPlaceholder">
      <div
        id="row"
        class="alert mb-2 alert-success alert-dismissible"
        role="alert"
      >
        <div>{{ livealert.message }}</div>
        <button
          type="button"
          class="btn-close"
          (click)="closeAlerts('row')"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    }
    <button
      type="button"
      (click)="showAlert()"
      class="btn btn-primary"
      id="liveAlertBtn"
    >
      Show live alert
    </button>`,ne=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    livealerts: { message: string; show: boolean }[] = [];

    showAlert() {
      // Add a new alert to the array
      this.livealerts.push({
        message: 'Nice, you triggered this alert message!',
        show: true,
      });
    }
    closeAlerts(rowId: string) {
      const rowElement = document.getElementById(rowId);
      if (rowElement) {
        rowElement.remove();
      }
    }
    `,de=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface SolidAlert {
      type: string;
      message: string;
      bg:string;
    }
    solidAlerts: SolidAlert[] = solidALERTS;
    const solidALERTS: SolidAlert[] = [
      {
        type: 'solid-primary',
        message: ' A simple solid primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-info',
        message: 'A simple solid info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-warning',
        message: 'A simple solid warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-success',
        message: 'A simple solid success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-danger',
        message: 'A simple solid danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-light',
        message: 'A simple solid light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'solid-dark',
        message: 'A simple solid dark alert\u2014check it out!',
        bg:'text-white'
      },
    ];
    `,me=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
   solidroundedAlerts: Alert[] = solidRoundedALERTS;
        const solidRoundedALERTS: Alert[] = [
        {
          type: 'solid-primary',
          message: '  A simple solid rounded primary alert\u2014check it out!',
        },
        {
          type: 'solid-secondary',
          message: 'A simple solid rounded secondary alert\u2014check it out!',
        },
        {
          type: 'solid-warning',
          message: '  A simple solid rounded warning alert\u2014check it out!',
        },
        {
          type: 'solid-danger',
          message: 'A simple solid rounded danger alert\u2014check it out!',
        },
      ];
      solidroundedClose(index: number) {
        // Remove the alert from the array based on the index
        this.solidroundedAlerts.splice(index, 1);
      }`,ce=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
    const roundedOutlineALERTS: Alert[] = [
      {
        type: 'outline-primary',
        message: ' A simple outline primary alert\u2014check it out!',
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
      },
    ];
    roundedoutlineClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundedoutlineAlerts.splice(index, 1);
    }`,pe=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    solidShadowsAlerts: Alert[] = solidShadowsALERTS;
    const solidShadowsALERTS: Alert[] = [
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: ' A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
    ];
    solidShadowsAlertsClose(index: number) {
      // Remove the alert from the array based on the index
      this.solidShadowsAlerts.splice(index, 1);
    }`,ge=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
    const roundeDefaultALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    roundeDefaultClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundeDefaultAlerts.splice(index, 1);
    }`,ue=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    const CustomeButtonALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    CustomeButtonClose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomeButtonAlerts.splice(index, 1);
    }`,he=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
    const CustomizedButtonALERTS: Alert1[] = [
      {
        type: 'outline-primary',
        icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
        message: ' A customized primary alert with an icon ',
        
      },
      {
        type: 'outline-secondary',
        message: 'A customized secondary alert with an icon ',
        icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
      },
      {
        type: 'outline-info',
        message: ' A customized warning alert with an icon ',
        icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
      },
      {
        type: 'outline-warning',
        message: ' A customized danger alert with an icon ',
        icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
      },
    ];
    customizedAlertclose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomizedButtonAlerts.splice(index, 1);
    }`,ve=`  

@for (alert of outlineAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="OutlineClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    }`,we=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface OutlineAlert {
      type: string;
      message: string;
      bg:string;
    }
    outlineAlerts: OutlineAlert[] = outlineALERTS;

    const outlineALERTS: OutlineAlert[] = [
      {
        type: 'outline-primary',
        message: 'A simple outline primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-success',
        message: 'A simple outline success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-danger',
        message: 'A simple outline danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-light',
        message: 'A simple outline light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'outline-dark',
        message: 'A simple outline dark alert\u2014check it out!',
        bg:'text-dark'
      },
    ];
`,be=`    
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} shadow-sm alert-dismissible fade show my-2"
  >
    A simple solid primary alert with small shadow\u2014check it out!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      (click)="solidShadowsAlertsClose(i)"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }`,fe=`   <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow">A simple primary alert with normal shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow\u2014check it out!</div>
    <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow\u2014check it out!
    </div>`,ye=` <div class="alert alert-primary" role="alert">
    A simple primary alert\u2014check it out!
</div>
<div class="alert alert-secondary" role="alert">
    A simple secondary alert\u2014check it out!
</div>
<div class="alert alert-success" role="alert">
    A simple success alert\u2014check it out!
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert\u2014check it out!
</div>
<div class="alert alert-warning" role="alert">
    A simple warning alert\u2014check it out!
</div>
<div class="alert alert-info" role="alert">
    A simple info alert\u2014check it out!
</div>
<div class="alert alert-light" role="alert">
    A simple light alert\u2014check it out!
</div>
<div class="alert alert-dark" role="alert">
    A simple dark alert\u2014check it out!
</div>`,Ce=` <div class="alert alert-primary" role="alert">
A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>`,Ae=`      @for (alert of solidAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2 {{
        alert.bg
      }}"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="solidClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    } `,xe=`  
@for (alert of roundedoutlineAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="roundedoutlineClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }
      `,_e=`   @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="roundeDefaultClose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  } `,ke=`  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      (click)="CustomeButtonClose(i)"
      class="btn-close custom-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,Se=`      @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
    role="alert"
  >
    <span [innerHTML]="getSanitizedSVG(alert.icon)"></span>

    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="customizedAlertclose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,Te=`   <div
 class="alert alert-primary d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-primary"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path
     d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
   />
 </svg>
 <div>An example alert with an icon</div>
</div>
<div
 class="alert alert-success d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-success"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
   <path
     d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
   />
 </svg>
 <div>An example success alert with an icon</div>
</div>
<div
 class="alert alert-warning d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-warning"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
         />
         <polygon points="13,16 11,16 11,18 13,18" />
         <polygon points="13,10 11,10 11,15 13,15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example warning alert with an icon</div>
</div>
<div
 class="alert alert-danger d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-danger"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
         />
         <rect height="6" width="2" x="11" y="7" />
         <rect height="2" width="2" x="11" y="15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example danger alert with an icon</div>
</div> `,ze=`      <div
id="rowA"
class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowA')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowB"
class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowB')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowC"
class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowC')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowD"
class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowD')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowE"
class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowE')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowF"
class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/10.jpg" alt="img" />
</div>
<div>A simple light alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowF')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowG"
class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/15.jpg" alt="img" />
</div>
<div>A simple dark alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowG')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>`,Ee=`          <div
id="row1"
class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xs me-3">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row1')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row2"
class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row2')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row3"
class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar me-3">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row3')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row4"
class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-md me-3">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row4')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row5"
class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-lg me-3">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row5')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row6"
class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xl me-3">
  <img src="./assets/images/faces/14.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row6')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>   `,De=` @for (alert11 of contentsalerts; track alert11.type) {
    <div class="col-xl-6">
            <ngb-alert [type]="alert11.type" (closed)="close11(alert11)">
                
                    <div [class]="alert11.class">
                    <h6 class="aletr-heading mb-0 text-fixed-white"> {{ alert11.message}}</h6>
                   
                </div>  <hr class="my-0">
                <div class="p-3">
                    <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-medium text-decoration-underline">Visit for support for queries ?</a></p>
                </div>  </ngb-alert>
          </div>
       
        }   `,Le=` 
@for (alert of solidroundedAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show mb-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="solidroundedClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }   `,Ve=` <div class="row gy-3">
  <div class="col-xl-6">
    <div
      class="alert alert-primary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedA"
    >
      <div
        class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('A')"
          [attr.aria-expanded]="!isClosedA"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-secondary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedB"
    >
      <div
        class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('B')"
          [attr.aria-expanded]="!isClosedB"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-success overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedC"
    >
      <div
        class="p-3 bg-success text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('C')"
          [attr.aria-expanded]="!isClosedC"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-warning overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedD"
    >
      <div
        class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('D')"
          [attr.aria-expanded]="!isClosedD"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
</div> `;var Re=["*"],M=class m{isDismissible=z(!1);variant=z("");close=new G;title=z("");linkText=z("");buttonClass=z("");onClose(){this.close.emit()}static \u0275fac=function(i){return new(i||m)};static \u0275cmp=L({type:m,selectors:[["spk-alerts"]],inputs:{isDismissible:[1,"isDismissible"],variant:[1,"variant"],title:[1,"title"],linkText:[1,"linkText"],buttonClass:[1,"buttonClass"]},outputs:{close:"close"},ngContentSelectors:Re,decls:2,vars:2,consts:[[3,"closed","type","dismissible"]],template:function(i,t){i&1&&(N(),e(0,"ngb-alert",0),p("closed",function(){return t.onClose()}),q(1),s()),i&2&&c("type",t.variant()+" mb-3")("dismissible",t.isDismissible())},dependencies:[X,V],encapsulation:2})};var Ie=["staticAlert"],He=["selfClosingAlert"];function We(m,l){if(m&1){let i=S();e(0,"div",9),n(1),e(2,"button",105),p("click",function(){let o=u(i).$index,a=g();return h(a.removeAlert(o))}),d(3,"i",6),s()()}if(m&2){let i=l.$implicit;r(),v(" ",i," ")}}function $e(m,l){if(m&1&&(e(0,"div",12)(1,"spk-alerts",106),n(2),s()()),m&2){let i=l.$implicit;r(),c("variant",i.color)("title",i.title),r(),v(" ",i.title," ")}}function Fe(m,l){if(m&1){let i=S();e(0,"div",14)(1,"spk-alerts",107),p("close",function(){let o=u(i).$index,a=g();return h(a.handleClose(o))}),n(2),e(3,"a",108),n(4,"an example link"),s(),n(5,". Give it a click if you like. "),s()()}if(m&2){let i=l.$implicit;r(),c("variant",i.variant)("title",i.title)("isDismissible",!1),r(),v(" ",i.title," ")}}function Ge(m,l){if(m&1){let i=S();e(0,"spk-alerts",109),p("close",function(){let o=u(i).$index,a=g();return h(a.solidClose(o))}),n(1),e(2,"button",110),p("close",function(){let o=u(i).$index,a=g();return h(a.solidClose(o))}),d(3,"i",6),s()()}if(m&2){let i=l.$implicit;c("variant",i.type)("title",i.message)("isDismissible",!0),r(),v(" ",i.message," "),r(),E(D("btn-close ",i.closecolor))}}function Pe(m,l){if(m&1){let i=S();e(0,"div",12)(1,"spk-alerts",109),p("close",function(){let o=u(i).$index,a=g();return h(a.OutlineClose(o))}),n(2),e(3,"button",110),p("close",function(){let o=u(i).$index,a=g();return h(a.OutlineClose(o))}),d(4,"i",6),s()()()}if(m&2){let i=l.$implicit;r(),c("variant",i.color)("title",i.title)("isDismissible",!0),r(),v(" ",i.title," "),r(),E(D("btn-close ",i.closecolor))}}function Ne(m,l){if(m&1){let i=S();e(0,"div",18)(1,"spk-alerts",109),p("close",function(){let o=u(i).$index,a=g();return h(a.solidroundedClose(o))}),n(2),e(3,"button",111),p("close",function(){let o=u(i).$index,a=g();return h(a.solidroundedClose(o))}),d(4,"i",6),s()()()}if(m&2){let i=l.$implicit,t=g();r(),c("variant",t.getVariant(i))("title",i.title)("isDismissible",!0),r(),v(" ",i.title," ")}}function qe(m,l){if(m&1){let i=S();e(0,"div",14)(1,"spk-alerts",109),p("close",function(){let o=u(i).$index,a=g();return h(a.RoundedOutlineClose(o))}),n(2),e(3,"button",111),p("close",function(){let o=u(i).$index,a=g();return h(a.RoundedOutlineClose(o))}),d(4,"i",6),s()()()}if(m&2){let i=l.$implicit;r(),c("variant",i.color)("title",i.title)("isDismissible",!0),r(),v(" ",i.title," ")}}function Oe(m,l){if(m&1&&(e(0,"spk-alerts",19),d(1,"span",112),n(2),s()),m&2){let i=l.$implicit,t=g();c("variant",i.type),r(),c("innerHTML",t.getSanitizedSVG(i.icon),B),r(),v(" ",i.message," ")}}function Qe(m,l){if(m&1){let i=S();e(0,"spk-alerts",113),p("close",function(){let o=u(i).$index,a=g();return h(a.customizedAlertclose(o))}),d(1,"span",112),n(2),e(3,"button",111),p("close",function(){let o=u(i).$index,a=g();return h(a.customizedAlertclose(o))}),d(4,"i",6),s()()}if(m&2){let i=l.$implicit,t=g();c("variant",i.type)("isDismissible",!0),r(),c("innerHTML",t.getSanitizedSVG(i.icon),B),r(),v(" ",i.message," ")}}function Ue(m,l){if(m&1){let i=S();e(0,"spk-alerts",113),p("close",function(){let o=u(i).$index,a=g();return h(a.imageAlertsClose(o))}),e(1,"div",114),d(2,"img",115),s(),n(3),e(4,"button",111),p("close",function(){let o=u(i).$index,a=g();return h(a.imageAlertsClose(o))}),d(5,"i",116),s()()}if(m&2){let i=l.$implicit;c("variant",i.type)("isDismissible",!0),r(2),c("src",i.image,j),r(),v(" ",i.message," "),r(2),c("ngClass",i.type==="dark alert-img  rounded-pill flex-wrap"?"text-muted":"")}}function Ye(m,l){if(m&1){let i=S();e(0,"spk-alerts",113),p("close",function(){let o=u(i).$index,a=g();return h(a.ImageSizeAlertclose(o))}),e(1,"div"),d(2,"img",115),s(),n(3),e(4,"button",111),p("close",function(){let o=u(i).$index,a=g();return h(a.ImageSizeAlertclose(o))}),d(5,"i",116),s()()}if(m&2){let i=l.$implicit;c("variant",i.type)("isDismissible",!0),r(),E(D("avatar ",i.avatarClass," me-3")),r(),c("src",i.image,j),r(),v(" ",i.message," "),r(2),c("ngClass",i.type==="dark alert-img   flex-wrap"?"text-muted":"")}}function Je(m,l){if(m&1){let i=S();e(0,"div",104)(1,"spk-alerts",109),p("close",function(){let o=u(i).$index,a=g();return h(a.additionalInfoClose(o))}),e(2,"div")(3,"h6",117),n(4),s()(),d(5,"hr",118),e(6,"div",119)(7,"p",120),n(8),e(9,"a",121),n(10),s()()(),e(11,"button",122),p("close",function(){let o=u(i).$index,a=g();return h(a.additionalInfoClose(o))}),d(12,"i",6),s()()()}if(m&2){let i=l.$implicit;r(),c("variant",i.variant)("title",i.title)("isDismissible",!0),r(),E(D("p-3 pe-4 bg-",i.variant," text-fixed-white d-flex justify-content-between")),r(2),O(i.title),r(4),v("",i.message," "),r(2),v(" ",i.linkTitle)}}var Ke=[{type:"success",message:"This is an success alert"},{type:"info",message:"This is an info alert"},{type:"warning",message:"This is a warning alert"},{type:"danger",message:"This is a danger alert"},{type:"primary",message:"This is a primary alert"},{type:"secondary",message:"This is a secondary alert"},{type:"light",message:"This is a light alert"},{type:"dark",message:"This is a dark alert"}],Xe=[{type:"primary svg-primary  shadow-sm ",icon:' <svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',message:" A customized primary alert with an icon "},{type:"success svg-success  shadow-sm",message:"A customized success alert with an icon ",icon:' <svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'},{type:"warning svg-warning  shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'},{type:"danger svg-danger  shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'}],Ze=[{type:"primary rounded-pill",message:" A simple rounded primary alert\u2014check it out!"},{type:"secondary rounded-pill",message:"A simple rounded secondary alert\u2014check it out!"},{type:"warning rounded-pill",message:"A simple rounded warning alert\u2014check it out!"},{type:"danger rounded-pill",message:"A simple rounded danger alert\u2014check it out!"}],et=[{type:"primary svg-primary custom-alert-icon shadow-sm ",icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',message:" A customized primary alert with an icon "},{type:"secondary svg-secondary custom-alert-icon shadow-sm",message:"A customized secondary alert with an icon ",icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'},{type:"warning svg-warning custom-alert-icon shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'},{type:"danger svg-danger custom-alert-icon shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'}],tt=[{type:"solid-primary ",message:" A simple solid primary alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-secondary ",message:"A simple solid secondary alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-info ",message:"A simple solid info alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-warning ",message:"A simple solid warning alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-success ",message:"A simple solid success alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-danger ",message:"A simple solid danger alert\u2014check it out!",bg:"",closecolor:""},{type:"solid-light ",message:"A simple solid light alert\u2014check it out!",bg:"text-dark",closecolor:"text-default"},{type:"solid-dark text-white ",message:"A simple solid dark alert\u2014check it out!",bg:"text-dark",closecolor:"text-white"}],se=class m{constructor(l){this.sanitizer=l;this.reset(),this._message$.pipe(J(),F(i=>this.successMessage=i),$(5e3)).subscribe(()=>this.selfClosingAlert?.close())}prsimCodeData=T;tsCodeData=T;reusableCode=T;i;toggleClass="line";alerts;alertData=[{color:"primary",title:"A simple primary alert\u2014check it out!"},{color:"secondary",title:"A simple secondary alert\u2014check it out!"},{color:"success",title:"A simple success alert\u2014check it out!"},{color:"danger",title:"A simple danger alert\u2014check it out!"},{color:"warning",title:"A simple warning alert\u2014check it out!"},{color:"info",title:"A simple info alert\u2014check it out!"},{color:"light",title:"A simple light alert\u2014check it out!"},{color:"dark",title:"A simple dark alert\u2014check it out!"}];outlineAlerts=[{color:"outline-primary",closecolor:"",title:"A simple outline primary alert\u2014check it out!"},{color:"outline-secondary",closecolor:"",title:"A simple outline secondary alert\u2014check it out!"},{color:"outline-info",closecolor:"",title:"A simple outline info alert\u2014check it out!"},{color:"outline-warning",closecolor:"",title:"A simple outline warning alert\u2014check it out!"},{color:"outline-success",closecolor:"",title:"A simple outline success alert\u2014check it out!"},{color:"outline-danger",closecolor:"",title:"A simple outline danger alert\u2014check it out!"},{color:"outline-light",closecolor:"text-default",title:"A simple outline light alert\u2014check it out!"},{color:"outline-dark",closecolor:"",title:"A simple outline dark alert\u2014check it out!"}];OutlineClose(l){this.outlineAlerts.splice(l,1)}solidAlerts=tt;solidClose(l){this.solidAlerts.splice(l,1)}shadowAlert=[{color:"primary shadow-sm",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow-lg",title:"A simple solid primary alert\u2014check it out!"},{color:"secondary shadow-sm",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary ",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary",title:"A simple solid secondary alert\u2014check it out!"}];shodowClose(l){this.shadowAlert.splice(l,1)}getVariant(l){return l.outline?`alert-outline-${l.color}`:`solid-${l.color}`}DiffshadowAlert=[{title:"A simple primary alert with small shadow\u2014check it out!",color:"primary shadow-sm"},{title:"A simple primary alert with normal shadow\u2014check it out!",color:"primary shadow"},{title:"A simple primary alert with large shadow\u2014check it out!",color:"primary shadow-lg"},{title:"A simple secondary alert with small shadow\u2014check it out!",color:"secondary shadow-sm"},{title:"A simple secondary alert with normal shadow\u2014check it out!",color:"secondary shadow"},{title:"A simple secondary alert with large shadow\u2014check it out!",color:"secondary shadow-lg"}];differentShadowsAlertsClose(l){this.DiffshadowAlert.splice(l,1)}LinkAlerts=[{variant:"primary",title:"A simple primary alert with"},{variant:"secondary",title:"A simple secondary alert with"},{variant:"success",title:"A simple success alert with"},{variant:"danger",title:"A simple danger alert with"},{variant:"warning",title:"A simple warning alert with"},{variant:"info",title:"A simple info alert with"},{variant:"light",title:"A simple light alert with"},{variant:"dark",title:"A simple dark alert with"}];handleClose(l){this.LinkAlerts.splice(l,1)}solidroundedAlerts=[{color:"primary rounded-pill",title:"A simple solid Rounded primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple solid Rounded secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple solid Rounded warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple solid Rounded danger alert\u2014check it out!"}];roundedclose(l){this.solidroundedAlerts.splice(l,1)}roundedoutlineAlerts=[{color:"outline-primary rounded-pill",title:"A simple Rounded  outline primary alert\u2014check it out!"},{color:"outline-secondary rounded-pill",title:"A simple Rounded outline secondary alert\u2014check it out!"},{color:"outline-warning rounded-pill",title:"A simple Rounded outline warning alert\u2014check it out!"},{color:"outline-danger rounded-pill",title:"A simple Rounded outline danger alert\u2014check it out!"}];RoundedOutlineClose(l){this.roundedoutlineAlerts.splice(l,1)}roundedDefaultAlert=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];roundeDefaultClose(l){this.roundeDefaultAlerts.splice(l,1)}CustomeButtonAlerts=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];CustomeButtonClose(l){this.CustomeButtonAlerts.splice(l,1)}imageAlerts=[{type:"primary alert-img  rounded-pill flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg"},{type:"secondary alert-img  rounded-pill flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg"},{type:"warning alert-img  rounded-pill flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg"},{type:"danger alert-img  rounded-pill flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg"},{type:"info alert-img  rounded-pill flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg"},{type:"light alert-img  rounded-pill flex-wrap",message:"A simple light alert with image\u2014check it out!",image:"./assets/images/faces/10.jpg"},{type:"dark alert-img  rounded-pill flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/15.jpg"}];imageAlertsClose(l){this.imageAlerts.splice(l,1)}imageSizeAlertsClose(l){this.imageSizeAlerts.splice(l,1)}additionalInfoClose(l){this.additionalInfoAlert.splice(l,1)}additionalInfoAlert=[{variant:"primary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"secondary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"success p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"warning p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"}];livealerts=[];removeAlert(l){this.livealerts.splice(l,1)}showAlert(){this.livealerts.push("Nice, you triggered this alert message!")}close(l){this.alerts.splice(this.alerts.indexOf(l),1)}closeAlerts(l){let i=document.getElementById(l);i&&i.remove()}CustomizedIconAlerts=Xe;roundeDefaultAlerts=Ze;CustomizedButtonAlerts=et;solidroundedClose(l){this.solidroundedAlerts.splice(l,1)}customizedIconAlertclose(l){this.CustomizedIconAlerts.splice(l,1)}roundedoutlineClose(l){this.roundedoutlineAlerts.splice(l,1)}customizedAlertclose(l){this.CustomizedButtonAlerts.splice(l,1)}customizedImageSizeAlertclose(l){this.imageSizeAlerts.splice(l,1)}imageSizeAlerts=[{type:"primary alert-img   flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"secondary alert-img   flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg",avatarClass:"avatar-sm"},{type:"warning alert-img   flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg",avatarClass:""},{type:"danger alert-img   flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg",avatarClass:"avatar-md"},{type:"info alert-img   flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg",avatarClass:"avatar-lg"},{type:"dark alert-img   flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/14.jpg",avatarClass:"avatar-xl"}];ImageSizeAlertclose(l){this.imageSizeAlerts.splice(l,1)}removeRow(l){let i=document.getElementById(l);i&&i.remove()}isClosed=!1;isClosed1=!1;isClosed2=!1;isClosed3=!1;isClosed4=!1;isClosed5=!1;isClosed6=!1;isClosed7=!1;isClosed8=!1;isClosed9=!1;isClosed10=!1;isClosed11=!1;isClosed12=!1;isClosed13=!1;isClosedA=!1;isClosedB=!1;isClosedC=!1;isClosedD=!1;Closetoggle(l){l=="zero"&&(this.isClosed=!0),l=="one"&&(this.isClosed1=!0),l=="two"&&(this.isClosed2=!0),l=="three"&&(this.isClosed3=!0),l=="four"&&(this.isClosed4=!0),l=="five"&&(this.isClosed5=!0),l=="six"&&(this.isClosed6=!0),l=="seven"&&(this.isClosed7=!0),l=="eight"&&(this.isClosed8=!0),l=="nine"&&(this.isClosed9=!0),l=="ten"&&(this.isClosed10=!0),l=="eleven"&&(this.isClosed11=!0),l=="twelve"&&(this.isClosed12=!0),l=="A"&&(this.isClosedA=!0),l=="B"&&(this.isClosedB=!0),l=="C"&&(this.isClosedC=!0),l=="D"&&(this.isClosedD=!0)}reset(){this.alerts=Array.from(Ke)}_message$=new W;staticAlertClosed=!1;successMessage="";staticAlert;selfClosingAlert;getSanitizedSVG(l){return this.sanitizer.bypassSecurityTrustHtml(l)}changeSuccessMessage(){this._message$.next(`${new Date} - Message successfully changed.`)}static \u0275fac=function(i){return new(i||m)(P(Y))};static \u0275cmp=L({type:m,selectors:[["app-alerts"]],viewQuery:function(i,t){if(i&1&&(R(Ie,5),R(He,5)),i&2){let o;I(o=H())&&(t.staticAlert=o.first),I(o=H())&&(t.selfClosingAlert=o.first)}},decls:318,vars:66,consts:[["title","Ui Elements","active_item","Alerts",3,"subtitle"],[1,"row"],[1,"col-xl-12"],[3,"classbody","title","prism"],["type","warning","role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],[1,"bi","bi-x"],[3,"title","prism","tsCode"],["id","liveAlertPlaceholder"],["role","alert","aria-live","polite",1,"alert","alert-success","alert-dismissible","mb-2"],["type","button","id","liveAlertBtn",1,"btn","btn-primary",3,"click"],[1,"card-title",3,"title","prism"],[1,"mb-2"],[3,"title","reuseCode","prism"],[1,""],[3,"title","reuseCode","prism","tsCode"],[3,"variant","title","isDismissible"],[1,"",3,"title","prism","tsCode"],[1,"mb-3"],[3,"variant"],[3,"title","reuseCode","prism","tsCode","classbody"],[3,"variant","isDismissible"],[3,"title","reuseCode","prism","classbody"],[1,"col-xxl-3","col-xl-12","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"card",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","custom-alert1","alert-primary"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","ms-auto",3,"click"],[1,"text-center","px-5","pb-0","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-primary"],["d","M0 0h24v24H0z","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"],[1,"btn","btn-sm","btn-outline-danger","m-1"],[1,"btn","btn-sm","btn-primary","m-1"],[1,"alert","custom-alert1","alert-secondary"],[1,"text-center","px-5","pb-0","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-secondary"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"],[1,"btn","btn-sm","btn-secondary","m-1"],[1,"alert","custom-alert1","alert-warning"],[1,"text-center","px-5","pb-0","svg-warning"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-warning"],["d","M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"],[1,"btn","btn-sm","btn-outline-secondary","m-1"],[1,"btn","btn-sm","btn-warning","m-1"],[1,"alert","custom-alert1","alert-danger"],[1,"text-center","px-5","pb-0","svg-danger"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-danger"],["d","M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"],[1,"btn","btn-sm","btn-danger","m-1"],[1,"col-xl-3"],[1,"card","border-0",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","alert-primary","border","border-primary","mb-0","p-2"],[1,"d-flex","align-items-start"],[1,"me-2","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-primary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],[1,"text-primary","w-100"],[1,"fw-semibold","d-flex","justify-content-between"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","p-0",3,"click"],[1,"fs-12","op-8","mb-1"],[1,"fs-12"],["href","javascript:void(0);",1,"text-secondary","fw-semibold","me-1","d-inline-block"],["href","javascript:void(0);",1,"text-primary","fw-semibold","me-1"],[1,"alert","alert-secondary","border","border-secondary","mb-0","p-2"],[1,"me-2","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-secondary"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],[1,"text-secondary","w-100"],["href","javascript:void(0);",1,"text-danger","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-secondary","fw-semibold"],[1,"alert","alert-warning","border","border-warning","mb-0","p-2"],[1,"me-2","svg-warning"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-warning"],["fill","none","height","24","width","24"],["d","M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"],["points","13,16 11,16 11,18 13,18"],["points","13,10 11,10 11,15 13,15"],[1,"text-warning","w-100"],["href","javascript:void(0);",1,"text-dark","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-warning","fw-semibold"],[1,"alert","alert-danger","border","border-danger","mb-0","p-2"],[1,"me-2","svg-danger"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-danger"],["d","M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"],["height","6","width","2","x","11","y","7"],["height","2","width","2","x","11","y","15"],[1,"text-danger","w-100"],["href","javascript:void(0);",1,"text-info","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-danger","fw-semibold"],[1,"alert","alert-solid-primary","border","border-primary","mb-0","p-2"],[1,"me-2","svg-white"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"text-fixed-white","w-100"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-1","op-7"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-1"],[1,"alert","alert-solid-secondary","border","border-secondary","mb-0","p-2"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2"],[1,"alert","alert-solid-warning","border","border-warning","mb-0","p-2"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"alert","alert-solid-danger","border","border-danger","mb-0","p-2"],[3,"title","prism"],[1,"row","gy-3","additional-style"],[1,"col-xl-6"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"variant","title"],["linkText","an example link","linkHref","javascript:void(0)",3,"close","variant","title","isDismissible"],["href","javascript:void(0);",1,"alert-link"],[3,"close","variant","title","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",3,"close"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"close"],[3,"innerHTML"],[3,"close","variant","isDismissible"],[1,"avatar","avatar-sm","me-3","avatar-rounded"],["alt","img",3,"src"],[1,"bi","bi-x",3,"ngClass"],[1,"aletr-heading","mb-0","text-fixed-white"],[1,"my-0"],[1,"p-3"],[1,"mb-0"],["href","javascript:void(0);",1,"fw-medium","text-decoration-underline"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","text-fixed-white",3,"close"]],template:function(i,t){i&1&&(d(0,"app-breadcrumb",0),e(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"ngb-alert",4)(5,"strong"),n(6,"Holy guacamole!"),s(),n(7," You should check in on some of those fields below. "),e(8,"button",5),d(9,"i",6),s()()()(),e(10,"div",2)(11,"app-showcode-card",7)(12,"div",8),C(13,We,4,1,"div",9,y),s(),e(15,"button",10),p("click",function(){return t.showAlert()}),n(16," Show live alert "),s()()(),e(17,"div",2)(18,"app-showcode-card",11),C(19,$e,3,3,"div",12,y),s()(),e(21,"div",2)(22,"app-showcode-card",13),C(23,Fe,6,4,"div",14,y),s()(),e(25,"div",2)(26,"app-showcode-card",15),C(27,Ge,4,7,"spk-alerts",16,y),s()(),e(29,"div",2)(30,"app-showcode-card",17),C(31,Pe,5,7,"div",12,y),s()(),e(33,"div",2)(34,"app-showcode-card",17),C(35,Ne,5,4,"div",18,y),s()(),e(37,"div",2)(38,"app-showcode-card",17),C(39,qe,5,4,"div",14,y),s()(),e(41,"div",2)(42,"app-showcode-card",13),C(43,Oe,3,3,"spk-alerts",19,y),s()(),e(45,"div",2)(46,"app-showcode-card",20),C(47,Qe,5,4,"spk-alerts",21,y),s()(),e(49,"div",2)(50,"app-showcode-card",22),C(51,Ue,6,5,"spk-alerts",21,y),s()(),e(53,"div",2)(54,"app-showcode-card",13),C(55,Ye,6,8,"spk-alerts",21,y),s()(),e(57,"div",2)(58,"div",1)(59,"div",23)(60,"div",24),k("ngbCollapseChange",function(a){return _(t.isClosed1,a)||(t.isClosed1=a),a}),e(61,"div",25)(62,"button",26),p("click",function(){return t.Closetoggle("one")}),d(63,"i",6),s(),e(64,"div",27),w(),e(65,"svg",28),d(66,"path",29)(67,"path",30),s(),b(),e(68,"h5"),n(69,"Information?"),s(),e(70,"p",14),n(71," This alert is created to just show the related information. "),s(),e(72,"div",14)(73,"button",31),n(74," Decline "),s(),e(75,"button",32),n(76,"Accept"),s()()()()()(),e(77,"div",23)(78,"div",24),k("ngbCollapseChange",function(a){return _(t.isClosed2,a)||(t.isClosed2=a),a}),e(79,"div",33)(80,"button",26),p("click",function(){return t.Closetoggle("two")}),d(81,"i",6),s(),e(82,"div",34),w(),e(83,"svg",35),d(84,"path",29)(85,"path",36),s(),b(),e(86,"h5"),n(87,"Confirmed"),s(),e(88,"p",14),n(89," This alert is created to just show the confirmation message. "),s(),e(90,"div",14)(91,"button",37),n(92,"Close"),s()()()()()(),e(93,"div",23)(94,"div",24),k("ngbCollapseChange",function(a){return _(t.isClosed3,a)||(t.isClosed3=a),a}),e(95,"div",38)(96,"button",26),p("click",function(){return t.Closetoggle("three")}),d(97,"i",6),s(),e(98,"div",39),w(),e(99,"svg",40),d(100,"path",29)(101,"path",41),s(),b(),e(102,"h5"),n(103,"Warning"),s(),e(104,"p",14),n(105," This alert is created to just show the warning message. "),s(),e(106,"div",14)(107,"button",42),n(108," Back "),s(),e(109,"button",43),n(110,"Continue"),s()()()()()(),e(111,"div",23)(112,"div",24),k("ngbCollapseChange",function(a){return _(t.isClosed4,a)||(t.isClosed4=a),a}),e(113,"div",44)(114,"button",26),p("click",function(){return t.Closetoggle("four")}),d(115,"i",6),s(),e(116,"div",45),w(),e(117,"svg",46),d(118,"path",29)(119,"path",47),s(),b(),e(120,"h5"),n(121,"danger"),s(),e(122,"p",14),n(123," This alert is created to just show the danger message. "),s(),e(124,"div",14)(125,"button",48),n(126,"Delete"),s()()()()()()()(),e(127,"div",2)(128,"div",1)(129,"div",49)(130,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed5,a)||(t.isClosed5=a),a}),e(131,"div",51)(132,"div",52)(133,"div",53),w(),e(134,"svg",54),d(135,"path",55)(136,"path",56),s()(),b(),e(137,"div",57)(138,"div",58),n(139," Information Alert"),e(140,"button",59),p("click",function(){return t.Closetoggle("five")}),d(141,"i",6),s()(),e(142,"div",60),n(143," Information alert to show to information "),s(),e(144,"div",61)(145,"a",62),n(146,"cancel"),s(),e(147,"a",63),n(148,"open"),s()()()()()()(),e(149,"div",49)(150,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed6,a)||(t.isClosed6=a),a}),e(151,"div",64)(152,"div",52)(153,"div",65),w(),e(154,"svg",66),d(155,"path",67)(156,"path",68),s()(),b(),e(157,"div",69)(158,"div",58),n(159," Success Alert"),e(160,"button",59),p("click",function(){return t.Closetoggle("six")}),d(161,"i",6),s()(),e(162,"div",60),n(163," Success alert to show to success message "),s(),e(164,"div",61)(165,"a",70),n(166,"cancel"),s(),e(167,"a",71),n(168,"open"),s()()()()()()(),e(169,"div",49)(170,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed7,a)||(t.isClosed7=a),a}),e(171,"div",72)(172,"div",52)(173,"div",73),w(),e(174,"svg",74)(175,"g"),d(176,"rect",75),s(),e(177,"g")(178,"g")(179,"g"),d(180,"path",76)(181,"polygon",77)(182,"polygon",78),s()()()()(),b(),e(183,"div",79)(184,"div",58),n(185," Warning Alert"),e(186,"button",59),p("click",function(){return t.Closetoggle("seven")}),d(187,"i",6),s()(),e(188,"div",60),n(189," Warning alert to show warning message "),s(),e(190,"div",61)(191,"a",80),n(192,"cancel"),s(),e(193,"a",81),n(194,"open"),s()()()()()()(),e(195,"div",49)(196,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed8,a)||(t.isClosed8=a),a}),e(197,"div",82)(198,"div",52)(199,"div",83),w(),e(200,"svg",84)(201,"g"),d(202,"rect",75),s(),e(203,"g")(204,"g")(205,"g"),d(206,"path",85)(207,"rect",86)(208,"rect",87),s()()()()(),b(),e(209,"div",88)(210,"div",58),n(211," Danger Alert"),e(212,"button",59),p("click",function(){return t.Closetoggle("eight")}),d(213,"i",6),s()(),e(214,"div",60),n(215," Danger alert to show the danger message "),s(),e(216,"div",61)(217,"a",89),n(218,"cancel"),s(),e(219,"a",90),n(220,"open"),s()()()()()()()()(),e(221,"div",2)(222,"div",1)(223,"div",49)(224,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed9,a)||(t.isClosed9=a),a}),e(225,"div",91)(226,"div",52)(227,"div",92),w(),e(228,"svg",93),d(229,"path",55)(230,"path",56),s()(),b(),e(231,"div",94)(232,"div",58),n(233," Information Alert"),e(234,"button",59),p("click",function(){return t.Closetoggle("nine")}),d(235,"i",6),s()(),e(236,"div",60),n(237," Information alert to show to information "),s(),e(238,"div",61)(239,"a",95),n(240,"cancel"),s(),e(241,"a",96),n(242,"open"),s()()()()()()(),e(243,"div",49)(244,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed10,a)||(t.isClosed10=a),a}),e(245,"div",97)(246,"div",52)(247,"div",92),w(),e(248,"svg",93),d(249,"path",67)(250,"path",68),s()(),b(),e(251,"div",94)(252,"div",58),n(253," Success Alert"),e(254,"button",59),p("click",function(){return t.Closetoggle("ten")}),d(255,"i",6),s()(),e(256,"div",60),n(257," Success alert to show to success message "),s(),e(258,"div",61)(259,"a",98),n(260,"close"),s()()()()()()(),e(261,"div",49)(262,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed11,a)||(t.isClosed11=a),a}),e(263,"div",99)(264,"div",52)(265,"div",92),w(),e(266,"svg",100)(267,"g"),d(268,"rect",75),s(),e(269,"g")(270,"g")(271,"g"),d(272,"path",76)(273,"polygon",77)(274,"polygon",78),s()()()()(),b(),e(275,"div",94)(276,"div",58),n(277," Warning Alert"),e(278,"button",59),p("click",function(){return t.Closetoggle("eleven")}),d(279,"i",6),s()(),e(280,"div",60),n(281," Warning alert to show to warning message "),s(),e(282,"div",61)(283,"a",95),n(284,"skip"),s(),e(285,"a",96),n(286,"open"),s()()()()()()(),e(287,"div",49)(288,"div",50),k("ngbCollapseChange",function(a){return _(t.isClosed12,a)||(t.isClosed12=a),a}),e(289,"div",101)(290,"div",52)(291,"div",92),w(),e(292,"svg",100)(293,"g"),d(294,"rect",75),s(),e(295,"g")(296,"g")(297,"g"),d(298,"path",85)(299,"rect",86)(300,"rect",87),s()()()()(),b(),e(301,"div",94)(302,"div",58),n(303," Danger Alert"),e(304,"button",59),p("click",function(){return t.Closetoggle("twelve")}),d(305,"i",6),s()(),e(306,"div",60),n(307," Danger alert to show to danger message "),s(),e(308,"div",61)(309,"a",95),n(310,"close"),s(),e(311,"a",96),n(312,"continue"),s()()()()()()()()(),e(313,"div",2)(314,"app-showcode-card",102)(315,"div",103),C(316,Je,13,9,"div",104,y),s()()()()),i&2&&(c("subtitle",!1),r(3),c("classbody","pb-3")("title","Basic Alert")("prism",t.prsimCodeData.alertTS),r(8),c("title","Live example")("prism",t.prsimCodeData.alertTS1)("tsCode",t.tsCodeData.alertData2),r(2),A(t.livealerts),r(5),c("title","Default alerts")("prism",t.prsimCodeData.alertTS5),r(),A(t.alertData),r(3),c("title","Links in alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS6),r(),A(t.LinkAlerts),r(3),c("title"," Solid Colored Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS7)("tsCode",t.tsCodeData.alertData1),r(),A(t.solidAlerts),r(3),c("title","Outline Alerts")("prism",t.prsimCodeData.alertTS2)("tsCode",t.tsCodeData.alertData),r(),A(t.outlineAlerts),r(3),c("title","Rounded Solid Alerts")("prism",t.prsimCodeData.alertTS16)("tsCode",t.tsCodeData.alertData3),r(),A(t.solidroundedAlerts),r(3),c("title","Rounded Outline Alerts")("prism",t.prsimCodeData.alertTS8)("tsCode",t.tsCodeData.alertData4),r(),A(t.roundedoutlineAlerts),r(3),c("title","Alerts with icons")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS12),r(),A(t.CustomizedIconAlerts),r(3),c("title","  Customized Alerts With SVGs")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS11)("tsCode",t.tsCodeData.alertData8)("classbody",""),r(),A(t.CustomizedButtonAlerts),r(3),c("title","  Alerts With Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS13)("classbody","my-2"),r(),A(t.imageAlerts),r(3),c("title","   Alerts With Different size Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS14),r(),A(t.imageSizeAlerts),r(5),x("ngbCollapse",t.isClosed1),r(2),f("aria-expanded",!t.isClosed1),r(16),x("ngbCollapse",t.isClosed2),r(2),f("aria-expanded",!t.isClosed2),r(14),x("ngbCollapse",t.isClosed3),r(2),f("aria-expanded",!t.isClosed3),r(16),x("ngbCollapse",t.isClosed4),r(2),f("aria-expanded",!t.isClosed4),r(16),x("ngbCollapse",t.isClosed5),r(10),f("aria-expanded",!t.isClosed5),r(10),x("ngbCollapse",t.isClosed6),r(10),f("aria-expanded",!t.isClosed6),r(10),x("ngbCollapse",t.isClosed7),r(16),f("aria-expanded",!t.isClosed7),r(10),x("ngbCollapse",t.isClosed8),r(16),f("aria-expanded",!t.isClosed8),r(12),x("ngbCollapse",t.isClosed9),r(10),f("aria-expanded",!t.isClosed9),r(10),x("ngbCollapse",t.isClosed10),r(10),f("aria-expanded",!t.isClosed10),r(8),x("ngbCollapse",t.isClosed11),r(16),f("aria-expanded",!t.isClosed11),r(10),x("ngbCollapse",t.isClosed12),r(16),f("aria-expanded",!t.isClosed12),r(10),c("title","Additional content")("prism",t.prsimCodeData.alertTS17),r(2),A(t.additionalInfoAlert))},dependencies:[ee,Q,te,Z,V,K,ie,M,U],encapsulation:2})};export{se as Alerts};
