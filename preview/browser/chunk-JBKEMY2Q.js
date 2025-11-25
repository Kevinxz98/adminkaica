import{a as x}from"./chunk-NAPTRZ5S.js";import{a as j}from"./chunk-GFSCOUJL.js";import{a as C}from"./chunk-LCA5ED7I.js";import{c as A}from"./chunk-2D66LXFZ.js";import{$ as I,V as f,W as y,X as S}from"./chunk-42GC3H2R.js";import{Ab as c,Bb as m,Cb as r,Db as o,Eb as e,Fb as w,Wa as i,eb as u,ib as v,ic as s,jc as t,kc as b,wb as h,xb as D,yb as p}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as T}from"./chunk-VB56BUGO.js";var g={};T(g,{dropdownsReuse:()=>E,dropdownsTS:()=>k,dropdownsTS1:()=>_,dropdownsTS10:()=>N,dropdownsTS11:()=>U,dropdownsTS12:()=>z,dropdownsTS13:()=>H,dropdownsTS14:()=>W,dropdownsTS15:()=>Y,dropdownsTS16:()=>q,dropdownsTS17:()=>J,dropdownsTS18:()=>K,dropdownsTS19:()=>Q,dropdownsTS2:()=>R,dropdownsTS20:()=>V,dropdownsTS21:()=>X,dropdownsTS22:()=>Z,dropdownsTS23:()=>ee,dropdownsTS24:()=>oe,dropdownsTS25:()=>te,dropdownsTS26:()=>ne,dropdownsTS27:()=>de,dropdownsTS28:()=>ie,dropdownsTS3:()=>B,dropdownsTS4:()=>F,dropdownsTS5:()=>$,dropdownsTS6:()=>P,dropdownsTS7:()=>O,dropdownsTS8:()=>L,dropdownsTS9:()=>G});var k=` <div class="btn-list d-flex align-items-center flex-wrap">
<div class="dropdown" ngbDropdown >
    <button class="btn btn-primary dropdown-toggle" ngbDropdownToggle type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu  aria-labelledby="dropdownMenuButton1">
        <li><a  ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    </ul>
</div>
<div class="dropdown" ngbDropdown>
    <a class="btn btn-secondary dropdown-toggle"ngbDropdownToggle  href="javascript:void(0);" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </a>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuLink">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    </ul>
</div>
</div>`,E=`
<div [class]="Customclass"    ngbDropdown>
      @if(splitbutton){
        <button type="button" class="{{splitbuttonClass}}">{{splitTitle}}</button>
      }
        <button ngbDropdownToggle class="btn {{class}}" [id]="Id" > {{title}}  
          @if(iconPosition === 'before'){
              <ng-container>
               @if(Imagetag){
                   <img  [src]="Imagesrc" [alt]="Imagename" [class]="Imageclass">
               }
               @if(Icon){
                   <i  [class]="IconClass"></i>
               }
                 {{ Toggletext }}
               </ng-container>
          } 
          @if(iconPosition !== 'before'){
  
              <ng-container>
                {{ Toggletext }}
                @if(Imagetag){
                   <img  [src]="Imagesrc" [alt]="Imagename" [class]="Imageclass">
               }
               @if(Icon){
                   <i  [class]="IconClass"></i>
               }
              </ng-container>
          }
          @if(Arrowicon){
  
              <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
          }
          @if(Svg){ 
              <svg  xmlns="http://www.w3.org/2000/svg" [class]="SvgClass" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="Svgicon"/>
              </svg>
          }
          @if(Badgetag){
  
              <span class="badge" >{{ Badgetext }}</span>
          }
          @if(splitbuttonEnd){
            <button type="button" class="{{splitbuttonClass}}">{{splitTitle}}</button>
          }
        </button>   
      <ul [class]="Menuclass" ngbDropdownMenu [attr.aria-labelledby]="Menulabel">
        <ng-content></ng-content>
      </ul>
  </div>
  

  
`,_=`  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu"ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu"ngbDropdownMenu >
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle" ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`,R=`  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle  rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success dropdown-toggle rounded-pill" 
     ngbDropdownToggle  data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle rounded-pill" 
     ngbDropdownToggle  data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`,B=` <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-primary dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-success dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-info dropdown-toggle"  ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group"ngbDropdown >
    <button type="button" class="btn btn-outline-warning dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-danger dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`,F=`  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill" ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`,$=`<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-primary">Action</button>
<button type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-secondary">Action</button>
<button type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-info">Action</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-success">Action</button>
<button type="button"
    class="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-warning">Action</button>
<button type="button"
    class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-danger">Action</button>
<button type="button"
    class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`,P=` <div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-primary btn-lg dropdown-toggle" type="button"
ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    Large button
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a  ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-light btn-lg" type="button">
    Large split button
</button>
<button type="button"
    class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-primary btn-sm dropdown-toggle" type="button"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Small button
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button class="btn btn-light btn-sm" type="button">
    Small split button
</button>
<button type="button"
    class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`,O=`  <div ngbDropdown placement="top-end" class="btn-group dropup my-1">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group dropup my-1" ngbDropdown placement="top-end">
<button type="button" class="btn btn-info">
    Split dropup
</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu"  ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr  class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`,L=`  <div class="btn-group dropend my-1" ngbDropdown placement="right-top">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group dropend my-1" ngbDropdown placement="right-top">
<button type="button" class="btn btn-info">
    Split dropend
</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropright</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`,G=`  <div ngbDropdown>  
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
    <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
            link</a>
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another link</a></li>
</ul>
</div>`,N=`<div class="btn-group dropstart my-1"  ngbDropdown placement="left-top">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropleft
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group">
<div class="btn-group dropstart my-1" ngbDropdown placement="left-top" role="group">
    <button type="button"
        class="btn btn-info dropdown-toggle dropdown-toggle-split"
        ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<button type="button" class="btn btn-info my-1">
    Split dropleft
</button>
</div>`,U=`  <div ngbDropdown>  
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
    <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
            link</a>
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another link</a></li>
</ul>
</div>`,z=` <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle" type="button"
        id="defaultDropdown" data-bs-toggle="dropdown" ngbDropdownToggle data-bs-auto-close="true"
        aria-expanded="false">
        Default dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="defaultDropdown">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-secondary dropdown-toggle" type="button"
        id="dropdownMenuClickableOutside" ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="inside" aria-expanded="false">
        Clickable outside
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickableOutside">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-info dropdown-toggle" type="button"
        id="dropdownMenuClickableInside" ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="outside" aria-expanded="false">
        Clickable inside
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickableInside">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-warning dropdown-toggle" type="button"
        id="dropdownMenuClickable"  ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="false" aria-expanded="false">
        Manual close
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickable">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
</div>`,H=` <div ngbDropdown>
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <div class="dropdown-menu" ngbDropdownMenu>
        <form class="px-4 py-3">
            <div class="mb-3">
                <label for="exampleDropdownFormEmail1" class="form-label">Email
                    address</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                    placeholder="email@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormPassword1"
                    class="form-label">Password</label>
                <input type="password" class="form-control"
                    id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <button class="btn btn-primary">Sign in</button>
        </form>
        <div class="dropdown-divider"></div>
        <a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">New around here? Sign up</a>
        <a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Forgot password?</a>
    </div>
</div>`,W=`<p class="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
</p>
<div ngbDropdown class="dropdown-center">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Centered dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownCenterBtn">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action two</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action three</a></li>
    </ul>
</div>`,Y=`<p class="card-title mb-3">Use <code>.dropup-center</code>
on the parent element.
</p>
<div class="dropup-center dropup" ngbDropdown placement="top-end">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</button>
<ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropupCenterBtn">
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action two</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action three</a></li>
</ul>
</div>`,q=`<p class="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<div ngbDropdown class="dropdown">
<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</button>
<ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenu1">
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`,J=`<p class="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
the location of the dropdown.</p>
<div class="d-flex align-items-center">
<div class="dropdown me-1" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset"
        data-bs-toggle="dropdown" aria-expanded="false" ngbDropdownToggle data-bs-offset="10,20">
        Offset
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuOffset">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info">Reference</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
        id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" ngbDropdownToggle
        data-bs-reference="parent">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuReference">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`,K=`<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton"
        ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuButton">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu
    </button>
    <ul class="dropdown-menu  dropdown-menu-end" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Left-aligned, right-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" ngbDropdownMenu placement="left-aligned">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Right-aligned, left-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropstart" ngbDropdown placement="left-top">
    <button type="button" class="btn btn-success dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropstart
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropend" ngbDropdown placement="right-top">
    <button type="button" class="btn btn-danger dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropend
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropup" ngbDropdown placement="top-end" aria-placeholder="">
    <button type="button" class="btn btn-teal dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
</div>`,Q=`<div class="dropdown" ngbDropdown>
<button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
</button>
<ul class="dropdown-menu dropdown-menu-dark" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
</ul>
</div>`,V=`<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-primary dropdown-toggle" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
</button>
<ul class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`,X=`<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-secondary dropdown-toggle text-wrap" ngbDropdownToggle
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
</button>
<ul class="dropdown-menu dropdown-menu-lg-end" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`,Z=`<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-info dropdown-toggle text-wrap" ngbDropdownToggle
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
</button>
<ul class="dropdown-menu dropdown-menu-lg-start" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button></li>
</ul>
</div>`,ee=`<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Primary
    </button>
    <ul class="dropdown-menu dropdown-menu-primary" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-secondary dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        secondary
    </button>
    <ul class="dropdown-menu dropdown-menu-secondary" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-warning dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        warning
    </button>
    <ul class="dropdown-menu dropmenu-item-warning" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-info dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        info
    </button>
    <ul class="dropdown-menu dropmenu-item-info" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-success-light dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        success
    </button>
    <ul class="dropdown-menu dropmenu-light-success" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-danger-light dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        danger
    </button>
    <ul class="dropdown-menu dropmenu-light-danger" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
</div>`,oe=`<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Primary
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Secondary
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Success
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Info
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Warning
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Danger
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
</div>`,te=`<p class="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown
items.</p>
<div class="bd-example">
<ul class="dropdown-menu">
    <li><span class="dropdown-item-text">Dropdown item text</span>
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
    </li>
</ul>
</div>`,ne=`<p class="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any
dropdown menu.</p>
<div class="bd-example">
<ul class="dropdown-menu">
    <li>
        <h6 class="dropdown-header">Dropdown header</h6>
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
</ul>
</div>`,de=`<div class="bd-example">
<ul class="dropdown-menu">
    <li><a class="dropdown-header" href="javascript:void(0);">Heading</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`,ie=`<div class="bd-example">
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
    <p>
        Some example text that's free-flowing within the dropdown menu.
    </p>
    <p class="mb-0">
        And this is more example text.
    </p>
</div>
</div>`;function ae(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n.item)}}function re(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n.item)}}function le(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n)}}function se(a,l){if(a&1&&(o(0,"spk-dropdowns",48),c(1,le,3,1,"li",null,p),e()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("title",n.label)("Menuclass","dropdown-menu"),i(),m(n.items)}}function pe(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n)}}function ce(a,l){if(a&1&&(o(0,"spk-dropdowns",48),c(1,pe,3,1,"li",null,p),e()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("title",n.label)("Menuclass","dropdown-menu"),i(),m(n.items)}}function me(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n)}}function we(a,l){if(a&1&&(o(0,"spk-dropdowns",5),c(1,me,3,1,"li",null,p),e()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("Id","dropdownMenuLink")("title",n.label)("Menuclass","dropdown-menu"),i(),m(n.items)}}function be(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n)}}function ge(a,l){if(a&1&&(o(0,"spk-dropdowns",48),c(1,be,3,1,"li",null,p),e()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("title",n.label)("Menuclass","dropdown-menu"),i(),m(n.items)}}function ue(a,l){if(a&1&&(o(0,"spk-dropdowns",49)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group my-1")("splitbutton",!0)("splitTitle","Action")("splitbuttonClass",n.splitbuttonClass)("Menuclass","dropdown-menu")}}function ve(a,l){if(a&1&&(o(0,"spk-dropdowns",50)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group my-1 me-2")("splitbutton",n.splitbutton)("splitTitle",n.splitTitle)("splitbuttonClass",n.splitbuttonClass)("Menuclass","dropdown-menu")("title",n.label)}}function he(a,l){if(a&1&&(o(0,"spk-dropdowns",51)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass",n.Customclass)("title",n.label)("Menuclass","dropdown-menu")("splitbutton",n.splitbutton)("splitTitle",n.splitTitle)("splitbuttonClass",n.splitbuttonClass)}}function De(a,l){if(a&1&&(o(0,"spk-dropdowns",51)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass",n.Customclass)("title",n.label)("Menuclass","dropdown-menu")("splitbutton",n.splitbutton)("splitTitle",n.splitTitle)("splitbuttonClass",n.splitbuttonClass)}}function fe(a,l){if(a&1&&(o(0,"spk-dropdowns",52)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass",n.Customclass)("title",n.label)("Menuclass","dropdown-menu")("splitbuttonEnd",n.splitbuttonEnd)("splitTitle",n.splitTitle)("Buttontag",n.buttonTag)("splitbuttonClass",n.splitbuttonClass)}}function ye(a,l){if(a&1&&(o(0,"spk-dropdowns",53)(1,"li")(2,"a",17),t(3,"Menu item"),e()(),o(4,"li")(5,"a",17),t(6,"Menu item"),e()(),o(7,"li")(8,"a",17),t(9,"Menu item"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("autoClose",n.closeAuto)("title",n.label)("Menuclass","dropdown-menu")}}function Se(a,l){if(a&1&&(o(0,"spk-dropdowns",54)(1,"li")(2,"a",17),t(3,"Menu item"),e()(),o(4,"li")(5,"a",17),t(6,"Menu item"),e()(),o(7,"li")(8,"a",17),t(9,"Menu item"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass",n.Customclass)("title",n.label)("Menuclass",n.menuClass)("placement",n.placement)}}function Ie(a,l){a&1&&(o(0,"li")(1,"a",55),t(2,"Active"),e()())}function Ae(a,l){if(a&1&&(o(0,"li")(1,"a",17),t(2),e()()),a&2){let n=l.$implicit;i(2),b(n)}}function je(a,l){if(a&1&&(o(0,"spk-dropdowns",48),h(1,Ie,3,0,"li"),c(2,Ae,3,1,"li",null,p),e()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("title",n.label)("Menuclass",n.menuClass),i(),D(n.activeTitle?1:-1),i(),m(n.items)}}function Ce(a,l){if(a&1&&(o(0,"spk-dropdowns",48)(1,"li")(2,"a",17),t(3,"Action"),e()(),o(4,"li")(5,"a",17),t(6,"Another action"),e()(),o(7,"li")(8,"a",17),t(9,"Something else here"),e()(),o(10,"li"),w(11,"hr",33),e(),o(12,"li")(13,"a",17),t(14,"Separated link"),e()()()),a&2){let n=l.$implicit;s(n.style),r("Customclass","btn-group")("title",n.label)("Menuclass","dropdown-menu")}}var M=class a{constructor(l){l.autoClose=!0}prsimCodeData=g;reusableCode=g;dropdownItems=[{item:"Action 1"},{item:"Another action"},{item:"Something else here"}];buttonGroups=[{label:"Action",style:"btn-outline-primary dropdown-toggle ",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-secondary dropdown-toggle ",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-success",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-info",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-warning",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-danger",items:["Action","Another action","Something else here"]}];singledropdownGroups=[{label:"Action",style:"btn-primary dropdown-toggle ",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-secondary dropdown-toggle ",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-success",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-info",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-warning",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-danger",items:["Action","Another action","Something else here"]}];roundedGroups=[{label:"Action",style:"btn-primary dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-secondary dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-success dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-info dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-warning dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-danger dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]}];roundedOutlineGroups=[{label:"Action",style:"btn-outline-primary dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-secondary dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-success dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-info dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-warning dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]},{label:"Action",style:"btn-outline-danger dropdown-toggle  rounded-pill",items:["Action","Another action","Something else here"]}];splitButtons=[{style:"btn-primary dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-primary"},{style:"btn-secondary dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-secondary"},{style:"btn-info dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-info"},{style:"btn-success dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-success"},{style:"btn-warning dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-warning"},{style:"btn-danger dropdown-toggle  dropdown-toggle -split me-2",splitbuttonClass:"btn btn-danger"}];dropdownsizing=[{style:"btn-primary btn-lg dropdown-toggle ",splitbuttonClass:"btn btn-primary",splitbutton:!1,label:"Large button"},{style:" btn-lg btn-light dropdown-toggle  dropdown-toggle -split",splitbuttonClass:"btn btn-light btn-lg",splitbutton:!0,splitTitle:"Large Split button"},{style:"btn-primary btn-sm dropdown-toggle  ",splitbuttonClass:"btn btn-info",splitbutton:!1,label:"Small button"},{style:"btn-sm btn-light dropdown-toggle  dropdown-toggle -split ",splitbuttonClass:"btn btn-light btn-sm",splitbutton:!0,splitTitle:"Small Split button"}];autoCloseGroups=[{style:"btn-primary btn-border-endropdown-toggle ",label:"Default dropdown",closeAuto:!0},{style:"btn-secondary btn-border-endropdown-toggle ",label:"Clickable outside",closeAuto:!1},{style:"btn-info btn-border-endropdown-toggle ",label:"Clickable inside",closeAuto:!0},{style:"btn-warning btn-border-endropdown-toggle ",label:"Manual Close",closeAuto:!0}];droups=[{Customclass:"btn-group  my-1 me-2  dropup",style:"btn-primary dropdown-toggle ",label:"Dropup",splitbutton:!1},{Customclass:"btn-group dropup my-1 me-2",style:"btn-info dropdown-toggle  dropdown-toggle -split",splitTitle:"Split dropup",splitbutton:!0,splitbuttonClass:"btn btn-info"}];dropright=[{Customclass:"btn-group dropend my-1 me-2",style:"btn-primary dropdown-toggle ",label:"Dropright",splitbutton:!1},{Customclass:"btn-group my-1",style:"btn-info dropdown-toggle  dropdown-toggle -split",splitTitle:"Split dropend",splitbutton:!0,splitbuttonClass:"btn btn-info"}];dropleft=[{Customclass:"btn-group dropstart my-1 me-2",style:"btn-primary dropdown-toggle ",label:"Dropleft",splitbutton:!1},{Customclass:"btn-group dropstart my-1",style:"btn btn-info dropdown-toggle  dropdown-toggle -split ",buttonTag:!0,splitbuttonEnd:!0,splitbuttonClass:"btn btn-info p-0",splitTitle:"Split dropleft"}];alignmentOptions=[{Customclass:"btn-group",style:"btn-primary  dropdown-toggle ",label:"Dropdown",menuClass:"dropdown-menu"},{Customclass:"btn-group",style:"btn-secondary dropdown-toggle ",label:"Right-aligned menu",menuClass:"dropdown-menu"},{Customclass:"btn-group",style:"btn-info    dropdown-toggle ",label:"Left, right-aligned lg",menuClass:"dropdown-menu dropdown-menu-lg-end"},{Customclass:"btn-group",style:"btn-warning dropdown-toggle ",label:"Right, left-aligned lg",menuClass:"dropdown-menu-end dropdown-menu-lg-start"},{Customclass:"btn-group dropend",style:"btn-danger dropdown-toggle ",label:"Dropend",menuClass:"dropdown-menu"},{Customclass:"btn-group dropup custom-dropup  my-1 me-2",style:"btn-teal dropdown-toggle ",label:"Dropup",menuClass:"dropdown-menu",placement:"top-start"}];customDropdowns=[{label:"Primary",style:"btn-primary dropdown-toggle ",menuClass:"dropdown-menu dropdown-menu-primary",activeTitle:!1,items:["Action","Another action","Something else here"]},{label:"secondary",menuClass:"dropdown-menu dropdown-menu-secondary",style:"btn-secondary dropdown-toggle ",activeTitle:!1,items:["Action","Another action","Something else here"]},{label:"warning",style:"btn-warning dropdown-toggle ",menuClass:"dropdown-menu dropmenu-item-warning",activeTitle:!0,items:["Action","Another action","Something else here"]},{label:"info",style:"btn-info dropdown-toggle ",menuClass:"dropdown-menu dropmenu-item-info",activeTitle:!0,items:["Action","Another action","Something else here"]},{label:"success",style:"btn-success dropdown-toggle ",menuClass:"dropdown-menu dropmenu-light-success",activeTitle:!0,items:["Action","Another action","Something else here"]},{label:"danger",style:"btn-danger",menuClass:"dropdown-menu dropmenu-light-danger",activeTitle:!0,items:["Action","Another action","Something else here"]}];ghostDropdowns=[{label:"Primary",style:'btn-primary-ghost dropdown-toggle "'},{label:"secondary",style:"btn-secondary-ghost dropdown-toggle "},{label:"success",style:"btn-success-ghost dropdown-toggle "},{label:"info",style:"btn-info-ghost dropdown-toggle "},{label:"Warning",style:"btn-warning-ghost dropdown-toggle "},{label:"Danger",style:"btn-danger-ghost dropdown-toggle "}];static \u0275fac=function(n){return new(n||a)(u(f))};static \u0275cmp=v({type:a,selectors:[["app-dropdowns"]],decls:333,vars:165,consts:[["title","Ui Elements","active_item","Dropdowns",3,"subtitle"],[1,"row"],[1,"col-xl-12"],[3,"title","reuseCode","prism"],[1,"btn-list","d-flex","align-items-center","flex-wrap"],[3,"Customclass","Id","title","Menuclass"],[1,"col-xl-6"],[1,"btn-list"],[3,"Customclass","class","title","Menuclass"],[3,"Customclass","Id","class","title","Menuclass"],[3,"Customclass","splitbutton","splitTitle","splitbuttonClass","class","Menuclass"],[3,"Customclass","splitbutton","splitTitle","splitbuttonClass","class","Menuclass","title"],[1,"col-xl-3"],[1,"custom-dropup",3,"title","reuseCode","prism"],[3,"Customclass","class","title","Menuclass","splitbutton","splitTitle","splitbuttonClass"],["Buttontext","",3,"Customclass","class","title","Menuclass","splitbuttonEnd","splitTitle","Buttontag","splitbuttonClass"],[3,"Customclass","title","Menuclass","Id"],["ngbDropdownItem","","href","javascript:void(0);",1,"dropdown-item"],["ngbDropdownItem","","href","javascript:void(0);","aria-current","true",1,"dropdown-item","active"],[3,"Menuclass","title"],["ngbDropdownItem","","href","javascript:void(0);","aria-current","true",1,"dropdown-item","disabled"],[3,"Customclass","autoClose","class","title","Menuclass"],[3,"Id","Menuclass","title"],[1,"px-4","py-3"],[1,"mb-3"],["for","exampleDropdownFormEmail1",1,"form-label"],["type","email","id","exampleDropdownFormEmail1","placeholder","email@example.com",1,"form-control"],["for","exampleDropdownFormPassword1",1,"form-label"],["type","password","id","exampleDropdownFormPassword1","placeholder","Password",1,"form-control"],[1,"form-check"],["type","checkbox","id","dropdownCheck",1,"form-check-input"],["for","dropdownCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[1,"dropdown-divider"],["ngbDropdownItem","","type","button",1,"dropdown-item"],[1,"d-flex","align-items-center","gap-2","flex-wrap"],[3,"Customclass","splitbutton","splitTitle","splitbuttonClass","Menuclass","Id"],[3,"Customclass","class","title","Menuclass","placement"],[3,"title","Menuclass"],[1,"bd-example"],[1,"dropdown-menu"],[1,"dropdown-item-text"],["href","javascript:void(0);",1,"dropdown-item"],[1,"card-titlte","mb-3"],[1,"dropdown-header"],["href","javascript:void(0);",1,"dropdown-header"],[1,"dropdown-menu","p-4","text-muted",2,"max-width","200px"],[1,"mb-0"],[3,"Customclass","title","Menuclass"],[3,"Customclass","splitbutton","splitTitle","splitbuttonClass","Menuclass"],[3,"Customclass","splitbutton","splitTitle","splitbuttonClass","Menuclass","title"],[3,"Customclass","title","Menuclass","splitbutton","splitTitle","splitbuttonClass"],["Buttontext","",3,"Customclass","title","Menuclass","splitbuttonEnd","splitTitle","Buttontag","splitbuttonClass"],[3,"Customclass","autoClose","title","Menuclass"],[3,"Customclass","title","Menuclass","placement"],["ngbDropdownItem","","href","javascript:void(0);",1,"dropdown-item","active"]],template:function(n,d){n&1&&(w(0,"app-breadcrumb",0),o(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"div",4)(5,"spk-dropdowns",5),c(6,ae,3,1,"li",null,p),e(),o(8,"spk-dropdowns",5),c(9,re,3,1,"li",null,p),e()()()()(),o(11,"div",1)(12,"div",6)(13,"app-showcode-card",3)(14,"div",7),c(15,se,3,5,"spk-dropdowns",8,p),e()()(),o(17,"div",6)(18,"app-showcode-card",3)(19,"div",7),c(20,ce,3,5,"spk-dropdowns",8,p),e()()()(),o(22,"div",1)(23,"div",6)(24,"app-showcode-card",3)(25,"div",7),c(26,we,3,6,"spk-dropdowns",9,p),e()()(),o(28,"div",6)(29,"app-showcode-card",3)(30,"div",7),c(31,ge,3,5,"spk-dropdowns",8,p),e()()()(),o(33,"div",1)(34,"div",6)(35,"app-showcode-card",3),c(36,ue,15,7,"spk-dropdowns",10,p),e()(),o(38,"div",6)(39,"app-showcode-card",3),c(40,ve,15,8,"spk-dropdowns",11,p),e()()(),o(42,"div",1)(43,"div",12)(44,"app-showcode-card",13),c(45,he,15,8,"spk-dropdowns",14,p),e()(),o(47,"div",12)(48,"app-showcode-card",3),c(49,De,15,8,"spk-dropdowns",14,p),e()(),o(51,"div",12)(52,"app-showcode-card",3),c(53,fe,15,9,"spk-dropdowns",15,p),e()(),o(55,"div",12)(56,"app-showcode-card",3)(57,"spk-dropdowns",16)(58,"li")(59,"a",17),t(60,"Regular link"),e()(),o(61,"li")(62,"a",18),t(63,"Active link"),e()(),o(64,"li")(65,"a",17),t(66,"Another link"),e()()()()()(),o(67,"div",1)(68,"div",12)(69,"app-showcode-card",3)(70,"spk-dropdowns",19)(71,"li")(72,"a",17),t(73,"Regular link"),e()(),o(74,"li")(75,"a",20),t(76,"Active link"),e()(),o(77,"li")(78,"a",17),t(79,"Another link"),e()()()()(),o(80,"div",6)(81,"app-showcode-card",3)(82,"div",7),c(83,ye,10,6,"spk-dropdowns",21,p),e()()(),o(85,"div",12)(86,"app-showcode-card",3)(87,"spk-dropdowns",22)(88,"form",23)(89,"div",24)(90,"label",25),t(91,"Email address"),e(),w(92,"input",26),e(),o(93,"div",24)(94,"label",27),t(95,"Password"),e(),w(96,"input",28),e(),o(97,"div",24)(98,"div",29),w(99,"input",30),o(100,"label",31),t(101," Remember me "),e()()(),o(102,"button",32),t(103,"Sign in"),e()(),w(104,"div",33),o(105,"a",17),t(106,"New around here? Sign up"),e(),o(107,"a",17),t(108,"Forgot password?"),e()()()()(),o(109,"div",1)(110,"div",6)(111,"app-showcode-card",3)(112,"p",24),t(113,"Use "),o(114,"code"),t(115,".dropdown-center"),e(),t(116," on the parent element. "),e(),o(117,"spk-dropdowns",16)(118,"li")(119,"a",17),t(120,"Action"),e()(),o(121,"li")(122,"a",17),t(123,"Action two"),e()(),o(124,"li")(125,"a",17),t(126,"Action three"),e()()()()(),o(127,"div",6)(128,"app-showcode-card",13)(129,"p",24),t(130,"Use "),o(131,"code"),t(132,".dropup-center"),e(),t(133," on the parent element. "),e(),o(134,"spk-dropdowns",16)(135,"li")(136,"a",17),t(137,"Action"),e()(),o(138,"li")(139,"a",17),t(140,"Action two"),e()(),o(141,"li")(142,"a",17),t(143,"Action three"),e()()()()(),o(144,"div",6)(145,"app-showcode-card",3)(146,"p",24),t(147,"You can use "),o(148,"code"),t(149,"<a>"),e(),t(150," or "),o(151,"code"),t(152,"<button>"),e(),t(153," asdropdown items."),e(),o(154,"spk-dropdowns",16)(155,"li")(156,"button",34),t(157,"Action"),e()(),o(158,"li")(159,"button",34),t(160,"Another action"),e()(),o(161,"li")(162,"button",34),t(163,"Something else here"),e()()()()(),o(164,"div",6)(165,"app-showcode-card",3)(166,"p",24),t(167,"Use "),o(168,"code"),t(169,"data-bs-offset"),e(),t(170," or "),o(171,"code"),t(172,"data-bs-reference"),e(),t(173," to change the location of the dropdown."),e(),o(174,"div",35)(175,"spk-dropdowns",16)(176,"li")(177,"a",17),t(178,"Action"),e()(),o(179,"li")(180,"a",17),t(181,"Another action"),e()(),o(182,"li")(183,"a",17),t(184,"Something else here"),e()()(),o(185,"spk-dropdowns",36)(186,"li")(187,"a",17),t(188,"Action"),e()(),o(189,"li")(190,"a",17),t(191,"Another action"),e()(),o(192,"li")(193,"a",17),t(194,"Something else here"),e()()()()()()(),o(195,"div",1)(196,"div",2)(197,"app-showcode-card",3)(198,"div",7),c(199,Se,10,6,"spk-dropdowns",37,p),e()()()(),o(201,"div",1)(202,"div",6)(203,"app-showcode-card",3)(204,"spk-dropdowns",16)(205,"li")(206,"a",17),t(207,"Action"),e()(),o(208,"li")(209,"a",17),t(210,"Another action"),e()(),o(211,"li")(212,"a",17),t(213,"Something else here"),e()()()()(),o(214,"div",6)(215,"app-showcode-card",3)(216,"spk-dropdowns",38)(217,"li")(218,"button",34),t(219,"Action"),e()(),o(220,"li")(221,"button",34),t(222,"Another action"),e()(),o(223,"li")(224,"button",34),t(225,"Something else here"),e()()()()(),o(226,"div",6)(227,"app-showcode-card",3)(228,"spk-dropdowns",38)(229,"li")(230,"button",34),t(231,"Action"),e()(),o(232,"li")(233,"button",34),t(234,"Another action"),e()(),o(235,"li")(236,"button",34),t(237,"Something else here"),e()()()()(),o(238,"div",6)(239,"app-showcode-card",3)(240,"spk-dropdowns",38)(241,"li")(242,"button",34),t(243,"Action"),e()(),o(244,"li")(245,"button",34),t(246,"Another action"),e()(),o(247,"li")(248,"button",34),t(249,"Something else here"),e()()()()()(),o(250,"div",1)(251,"div",2)(252,"app-showcode-card",3)(253,"div",7),c(254,je,4,6,"spk-dropdowns",8,p),e()()(),o(256,"div",2)(257,"app-showcode-card",3)(258,"div",7),c(259,Ce,15,5,"spk-dropdowns",8,p),e()()()(),o(261,"div",1)(262,"div",6)(263,"app-showcode-card",3)(264,"p",24),t(265,"Use "),o(266,"code"),t(267,".dropdown-item-text."),e(),t(268," to create non-interactive dropdown items. "),e(),o(269,"div",39)(270,"ul",40)(271,"li")(272,"span",41),t(273,"Dropdown item text"),e()(),o(274,"li")(275,"a",42),t(276,"Action"),e()(),o(277,"li")(278,"a",42),t(279,"Another action"),e()(),o(280,"li")(281,"a",42),t(282,"Something else here"),e()()()()()(),o(283,"div",6)(284,"app-showcode-card",3)(285,"p",43),t(286,"Add a "),o(287,"code"),t(288,".dropdown-header"),e(),t(289," to label sections of actions in any dropdown menu."),e(),o(290,"div",39)(291,"ul",40)(292,"li")(293,"h6",44),t(294,"Dropdown header"),e()(),o(295,"li")(296,"a",42),t(297,"Action"),e()(),o(298,"li")(299,"a",42),t(300,"Another action"),e()(),o(301,"li")(302,"a",42),t(303,"Something else here"),e()()()()()(),o(304,"div",6)(305,"app-showcode-card",3)(306,"div",39)(307,"ul",40)(308,"li")(309,"a",45),t(310,"Heading"),e()(),o(311,"li")(312,"a",42),t(313,"Action"),e()(),o(314,"li")(315,"a",42),t(316,"Another action"),e()(),o(317,"li")(318,"a",42),t(319,"Something else here"),e()(),o(320,"li"),w(321,"hr",33),e(),o(322,"li")(323,"a",42),t(324,"Separated link"),e()()()()()(),o(325,"div",6)(326,"app-showcode-card",3)(327,"div",39)(328,"div",46)(329,"p"),t(330," Some example text that's free-flowing within the dropdown menu. "),e(),o(331,"p",47),t(332," And this is more example text. "),e()()()()()()),n&2&&(r("subtitle",!1),i(3),r("title","Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS),i(2),s("btn btn-primary dropdown-toggle "),r("Customclass","dropdown")("Id","dropdownMenuButton1")("title","Dropdown button")("Menuclass","dropdown-menu"),i(),m(d.dropdownItems),i(2),s(" btn-secondary dropdown-toggle "),r("Customclass","dropdown")("Id","dropdownMenuLink")("title","Dropdown link")("Menuclass","dropdown-menu"),i(),m(d.dropdownItems),i(4),r("title"," Single dropdown buttons")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS1),i(2),m(d.singledropdownGroups),i(3),r("title"," Rounded Button Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS2),i(2),m(d.roundedGroups),i(4),r("title","Outline Button Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS3),i(2),m(d.buttonGroups),i(3),r("title"," Rounded Outline Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS4),i(2),m(d.roundedOutlineGroups),i(4),r("title"," Split Buttons")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS5),i(),m(d.splitButtons),i(3),r("title"," Dropdown Sizing")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS6),i(),m(d.dropdownsizing),i(4),r("title","Dropup")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS7),i(),m(d.droups),i(3),r("title"," Dropup right")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS8),i(),m(d.dropright),i(3),r("title","Dropup left")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS10),i(),m(d.dropleft),i(3),r("title","Active")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS9),i(),s("btn-primary dropdown-toggle "),r("Customclass","")("title","Dropstart")("Menuclass","dropdown-menu")("Id","dropdownMenuOffset"),i(12),r("title","Disabled")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS11),i(),s("btn-primary dropdown-toggle "),r("Menuclass","dropdown-menu")("title","Dropstart"),i(11),r("title"," Auto close behavior")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS12),i(2),m(d.autoCloseGroups),i(3),r("title"," dropdowns with Forms")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS13),i(),s("btn-secondary dropdown-toggle "),r("Id","dropdownMenu2")("Menuclass","dropdown-menu")("title","Dropdown"),i(24),r("title"," Dropdown menu centered")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS14),i(6),s("btn-primary dropdown-toggle "),r("Customclass","dropdown-center")("title","Centered dropdown")("Menuclass","dropdown-menu")("Id","dropdownCenterBtn"),i(11),r("title","Dropup centered")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS15),i(6),s("btn-secondary dropdown-toggle "),r("Customclass","dropdown-center dropup")("title","Centered dropup")("Menuclass","dropdown-menu")("Id","dropdownCenterBtn"),i(11),r("title"," Menu items")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS16),i(9),s("btn-info dropdown-toggle "),r("Customclass","dropdown")("title","Dropdown")("Menuclass","dropdown-menu")("Id","dropdownMenu1"),i(11),r("title"," Dropdowns options")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS17),i(10),s("btn-primary dropdown-toggle "),r("Customclass","dropdown me-1")("title","Offset")("Menuclass","dropdown-menu")("Id","dropdownMenuOffset"),i(10),s("btn-info dropdown-toggle  dropdown-toggle -split"),r("Customclass","btn-group")("splitbutton",!0)("splitTitle","Reference")("splitbuttonClass","btn btn-info")("Menuclass","dropdown-menu")("Id","dropdownMenuOffset"),i(12),r("title","Alignment options")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS18),i(2),m(d.alignmentOptions),i(4),r("title"," Dark Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS19),i(),s("btn-dark dropdown-toggle "),r("Customclass","dropdown")("title","Dropdown button")("Menuclass","dropdown-menu dropdown-menu-dark")("Id","dropdownMenuButton3"),i(11),r("title","Menu alignment")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS20),i(),s("btn-primary dropdown-toggle "),r("title","Right-aligned Example")("Menuclass","dropdown-menu dropdown-menu-end"),i(11),r("title","Responsive alignment end")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS21),i(),s("btn-secondary dropdown-toggle  text-wrap"),r("title","Left-aligned but right aligned when large screen")("Menuclass","dropdown-menu dropdown-menu-lg-end"),i(11),r("title","Responsive alignment left")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS22),i(),s("btn-info dropdown-toggle  text-wrap"),r("title","Left-aligned but right aligned when large screen")("Menuclass","dropdown-menu dropdown-menu-lg-start"),i(12),r("title","Custom Dropdown Menu's")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS23),i(2),m(d.customDropdowns),i(3),r("title","Ghost Button Dropdowns")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS24),i(2),m(d.ghostDropdowns),i(4),r("title","non-interactive dropdown items")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS25),i(21),r("title","Dropdown Headers")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS26),i(21),r("title","Dropdown Dividers")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS27),i(21),r("title","Dropdown Menu Text")("reuseCode",d.reusableCode.dropdownsReuse)("prism",d.prsimCodeData.dropdownsTS28))},dependencies:[A,C,I,y,S,x,j],encapsulation:2})};export{M as Dropdowns};
