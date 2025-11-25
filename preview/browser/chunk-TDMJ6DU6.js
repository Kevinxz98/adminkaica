import{a as q}from"./chunk-NAPTRZ5S.js";import{a as I}from"./chunk-LCA5ED7I.js";import{c as N}from"./chunk-2D66LXFZ.js";import{Ca as L,ba as V,ma as T,xa as R}from"./chunk-42GC3H2R.js";import{$b as M,Cb as h,Db as t,Eb as e,Fb as v,Ic as u,Nb as p,Tb as d,Wa as f,Wb as w,_b as S,ac as x,db as y,eb as C,ec as _,ib as E,jc as i,ob as g,ra as s,sa as r}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as $}from"./chunk-VB56BUGO.js";var k={};$(k,{model1:()=>U,model10:()=>te,model11:()=>le,model12:()=>oe,model13:()=>se,model14:()=>re,model15:()=>de,model2:()=>F,model3:()=>D,model4:()=>X,model5:()=>j,model6:()=>G,model7:()=>A,model8:()=>Y,model9:()=>Z,modelts1:()=>P,modelts10:()=>ie,modelts11:()=>ae,modelts12:()=>ne,modelts2:()=>W,modelts3:()=>O,modelts4:()=>z,modelts5:()=>H,modelts6:()=>Q,modelts7:()=>J,modelts8:()=>K,modelts9:()=>ee});var U=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content)"
data-bs-target="#exampleModal">
Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel1">Modal title</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,P=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openBasic(basicModal: any) {
    this.modalService.open(basicModal);
  }
}`,F=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content1)"
data-bs-target="#staticBackdrop">
Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content1 let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>I will not close if you click outside me. Don't even try to
                    press
                    escape key.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,W=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  StaticBackdrop(staticbackdropModal: any) {
    this.modalService.open(staticbackdropModal);
  }

}`,D=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openScrollableContent(longContent)" data-bs-target="#exampleModalScrollable">
Scrolling long content
</button>
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollable"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #longContent let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel1">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,O=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  scrollableContent(ScrollingcontentModal: any) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }


}`,X=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openVerticallyCentered(Content2)" data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</button>
<div class="modal fade" id="exampleModalScrollable2" tabindex="-1" aria-labelledby="exampleModalScrollable2"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content2 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel2">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,z=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenter(VerticalCenterModal: any) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }

}`,j=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="VerticallyScrol(Content3)"
data-bs-target="#exampleModalScrollable3">
Vertically centered scrollable modal
</button>
<div class="modal fade" id="exampleModalScrollable3" tabindex="-1" aria-labelledby="exampleModalScrollable3"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content3 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel3">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,H=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenterScroll(VerticalCenterScrollModal: any) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }

}`,G=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="Tooltippopover(Content4)"
data-bs-target="#exampleModalScrollable4">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable4" tabindex="-1" aria-labelledby="exampleModalScrollable4"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content4 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel4">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="javascript:void(0);" role="button" class="btn btn-secondary"
                        data-bs-toggle="popover" popoverTitle="Popover title"
                        ngbPopover="Popover body content is set in this attribute.">button</a>
                    triggers a popover on click.</p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip"
                        ngbTooltip="Tooltip">This
                        link</a> and <a href="javascript:void(0);" class="text-primary"
                        data-bs-toggle="tooltip" ngbTooltip="Tooltip">that link</a> have tooltips on
                    hover.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Q=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  TooltipPopovers(TooltipPopoversModal: any) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }
}`,A=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="UsingGrid(Content5)"
data-bs-target="#exampleModalScrollable5">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable5" tabindex="-1" aria-labelledby="exampleModalScrollable5"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content5 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel5">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 bg-light border">.col-md-4</div>
                        <div class="col-md-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                        <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6 bg-light border">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6 bg-light border">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,J=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  Gridmodal(GridCenterModal: any) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
}`,Y=`<a class="btn btn-primary" data-bs-toggle="modal" (click)=" ToggleModals(Content6)" role="button">Open
first modal
</a>
<div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content6 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel">Modal 1
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                    (click)=" ToggleModals2(Content8)" data-bs-toggle="modal">Open second
                    modal</button>
            </div>
        </ng-template>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content8 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel2">Modal 2
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                    (click)=" ToggleModals(Content6)" data-bs-toggle="modal">Back to first</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,K=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  private firstModalRef: any;
  private secondModalRef: any;

   openFirstModal(content1: any) {
  // Close the second modal if it's open
  if (this.secondModalRef) {
    this.secondModalRef.close();
  }

  // Open the first modal
  const modalRef = this.modalService.open(content1, this.modalOptions);
  this.firstModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}

openSecondModal(content1: any, content2: any) {
  // Close the first modal if it's open
  if (this.firstModalRef) {
    this.firstModalRef.close();
  }

  const modalRef = this.modalService.open(content2, this.modalOptions);
  this.secondModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}
}`,Z=`      <a
(click)="openXl(XlContentModal)"
type="button"
class="btn btn-primary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalXl"
>
Extra large modal
</a>
<a
(click)="openLg(LargeModal)"
type="button"
class="btn btn-secondary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalLg"
>
Large modal
</a>
<a
(click)="openSm(SmallModal)"
type="button"
class="btn btn-warning m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalSm"
>
Small modal
</a>
<ng-template #XlContentModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalXlLabel">
    Extra large modal
  </h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #LargeModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalLgLabel">Large modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #SmallModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalSmLabel">Small modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>`,ee=`mport { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openSm(SmallModal: any) {
    this.modalService.open(SmallModal, { size: 'sm' });
  }
  openXl(XlContentModal: any) {
    this.modalService.open(XlContentModal, { size: 'xl' });
  }
  openLg(LargeModal: any) {
    this.modalService.open(LargeModal, { size: 'lg' });
  }
}`,te=`  <div class="bd-example">
<a type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreen"  (click)="openFullscreen(FullscreenModal)">Full screen</a>
<a type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenSm" (click)="BelowSm(BelowSmModal)">Full screen below
    sm</a>
<a type="button" class="btn btn-warning mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenMd"  (click)="BelowMd(BelowMdModal)">Full screen below
    md</a>
<a type="button" class="btn btn-info mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenLg"  (click)="BelowLg(BelowLgModal)">Full screen below
    lg</a>
<a type="button" class="btn btn-success mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXl" (click)="BelowXl(BelowXlModal)">Full screen below
    xl</a>
<a type="button" class="btn btn-danger mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXxl" (click)="BelowXxl(BelowXxlModal)">Full screen below
    xxl</a>
</div>
<ng-template #FullscreenModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLabel">
  Full screen modal
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  (click)="modal.dismiss('Cross click')"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowSmModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenSmLabel">
  Full screen below sm
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
  (click)="modal.dismiss('Cross click')"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowMdModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenMdLabel">
  Full screen below md
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowLgModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLgLabel">
  Full screen below lg
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXlLabel">
  Full screen below xl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXxlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXxlLabel">
  Full screen below xxl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>`,ie=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openFullscreen(FullscreenModal: any) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal: any) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal: any) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal: any) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal: any) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal: any) {
    this.modalService.open(BelowXxlModal);
  }
}`,le=`<button type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal" (click)="openMdo(Content17)"
data-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for
mdo</button>
<button type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
(click)="openFat(Content18)" data-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for
fat</button>
<button type="button" class="btn btn-light mb-1 me-1" data-bs-toggle="modal"
(click)="opengetbootstrap(Content19)" data-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open
modal for
getbootstrap</button>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content17 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to mdo</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@mdo">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content18 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;fat</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@fat">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content19 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;getbootstrap</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"
                            value="@getbootstrap">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>`,ae=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  Openmdo(OpenmdoModal: any) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal: any) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal: any) {
    this.modalService.open(OpengetbootstrapModal);
  }

 
}`,oe=`<div class="row ">
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale"
        data-bs-toggle="modal" (click)="openScale(scale)">Scale</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right"
        data-bs-toggle="modal" (click)="openSlideRight(right)">Slide In Right</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom"
        data-bs-toggle="modal" (click)="openSlideBottom(bottom)">Slide In Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper"
        data-bs-toggle="modal" (click)="openNewspaper(newspaper)">News paper</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall"
        data-bs-toggle="modal" (click)="openFall(fall)">Fall</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal"
        data-bs-toggle="modal" (click)="openFlipHorizontal(flip)">Flip Horizontal</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical"
        data-bs-toggle="modal" (click)="openFlipVertical(flipV)">Flip Vertical</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled"
        data-bs-toggle="modal" (click)="openSuperScaled(super)">Super Scaled</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign"
        data-bs-toggle="modal" (click)="openSign(sign)">Sign</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom"
        data-bs-toggle="modal" (click)="openRotateBottom(bottom)">Rotate Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left"
        data-bs-toggle="modal" (click)="openRotateLeft(left)">Rotate Left</a>
</div>
</div>
<div class="modal fade" id="modaldemo8">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
    <div class="modal-content modal-content-demo">
        <ng-template #scale let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #right let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #bottom let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #newspaper let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #fall let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flip let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flipV let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #super let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #sign let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #left let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
</div>

</div>`,ne=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openScale(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }

  openSlideRight(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInRight',
    });
  }

  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
  openFall(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'effect-fall',
    });
  }
  openFlipHorizontal(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInY',
    });
  }
  openFlipVertical(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openSuperScaled(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
  openSign(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openRotateBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }

  openJustMe(justme: any) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  openright(right: any) {
    this.modalService.open(right, { centered: true });
  }

 
}`,se=' <button type="button" class="btn-close" aria-label="Close"></button>',re='<button type="button" class="btn-close" disabled aria-label="Close"></button>',de=` <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>

//card-body class = "bg-black"`;var me=["modal1"],ce=["modal2"];function pe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",94),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).dismiss;return r(l("Cross click"))}),e()(),t(4,"div",96),i(5," ... "),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).close;return r(l("Closelick"))}),i(8,"Close"),e(),t(9,"button",99),i(10,"Save changes"),e()()}}function ue(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",100),i(2,"Modal title "),e(),t(3,"button",95),d("click",function(){let l=s(a).dismiss;return r(l("Cross click"))}),e()(),t(4,"div",96)(5,"p"),i(6,"I will not close if you click outside me. Don't even try to press escape key."),e()(),t(7,"div",97)(8,"button",98),d("click",function(){let l=s(a).close;return r(l("Closelick"))}),i(9,"Close"),e(),t(10,"button",99),i(11,"Understood"),e()()}}function be(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",100),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"p"),i(6," I will not close if you click outside me. Don't even try to press escape key. "),e()(),t(7,"div",97)(8,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(9," Close "),e(),t(10,"button",99),i(11," Understood "),e()()}}function _e(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",101),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))})("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"p"),i(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e(),t(7,"p"),i(8," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),v(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br")(18,"br")(19,"br")(20,"br")(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br")(28,"br")(29,"br")(30,"br")(31,"br")(32,"br")(33,"br")(34,"br"),t(35,"p"),i(36,"Lorem ipsum dolor sit amet."),e()(),t(37,"div",97)(38,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(39," Close "),e(),t(40,"button",99),i(41," Save Changes "),e()()}}function ge(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",102),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h5"),i(6,"Popover in a modal"),e(),t(7,"p"),i(8," This "),t(9,"a",103),i(10,"button"),e(),i(11," triggers a popover on click. "),e(),v(12,"hr"),t(13,"h5"),i(14,"Tooltips in a modal"),e(),t(15,"p")(16,"a",104),i(17,"This link"),e(),i(18," and "),t(19,"a",104),i(20,"that link"),e(),i(21," have tooltips on hover. "),e()(),t(22,"div",97)(23,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(24," Close "),e(),t(25,"button",99),i(26," Save Changes "),e()()}}function he(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",105),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))})("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"p"),i(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e()(),t(7,"div",97)(8,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(9," Close "),e(),t(10,"button",99),i(11," Save Changes "),e()()}}function fe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",108),i(2,"Modal 2 "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5," Hide this modal and show the first with the button below. "),e(),t(6,"div",97)(7,"button",109),d("click",function(){s(a);let l=w(2),b=_(45);return r(l.openFirstModal(b))}),i(8,"Back to first"),e()()}}function ve(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",106),i(2,"Modal 1 "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5," Show a second modal and hide this one with the button below. "),e(),t(6,"div",97)(7,"button",107),d("click",function(){s(a);let l=_(10),b=w();return r(b.openSecondModal(l))}),i(8,"Open second modal"),e(),g(9,fe,9,0,"ng-template",null,40,u),e()}}function ke(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Modal 2"),e(),t(3,"button",111),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5," Hide this modal and show the first with the button below. "),e(),t(6,"div",97)(7,"button",112),d("click",function(){s(a);let l=w(),b=_(19);return r(l.openFirstModal(b))}),i(8," Back to first "),e()()}}function we(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",113),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))})("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"p"),i(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),v(7,"br")(8,"br")(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br"),t(18,"p"),i(19,"Lorem ipsum dolor sit amet."),e()(),t(20,"div",97)(21,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(22," Close "),e(),t(23,"button",99),i(24," Save Changes "),e()()}}function Ce(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",114),i(2,"Modal title"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))})("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"div",115)(6,"div",42)(7,"div",116),i(8,".col-md-4"),e(),t(9,"div",117),i(10," .col-md-4 .ms-auto "),e()(),t(11,"div",118)(12,"div",119),i(13," .col-md-3 .ms-auto "),e(),t(14,"div",120),i(15," .col-md-2 .ms-auto "),e()(),t(16,"div",118)(17,"div",121),i(18," .col-md-6 .ms-auto "),e()(),t(19,"div",118)(20,"div",122),i(21," Level 1: .col-sm-9 "),t(22,"div",42)(23,"div",123),i(24," Level 2: .col-8 .col-sm-6 "),e(),t(25,"div",124),i(26," Level 2: .col-4 .col-sm-6 "),e()()()()()(),t(27,"div",97)(28,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(29," Close "),e(),t(30,"button",99),i(31," Save Changes "),e()()}}function Se(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",125),i(2," Extra large modal "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e()}}function Me(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",126),i(2,"Large modal"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e()}}function xe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",127),i(2,"Small modal"),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e()}}function ye(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",128),i(2," Full screen modal "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Ee(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",129),i(2," Full screen below sm "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Ve(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",130),i(2," Full screen below md "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Te(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",131),i(2," Full screen below lg "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Re(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",132),i(2," Full screen below xl "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Le(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",133),i(2," Full screen below xxl "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96),i(5,"..."),e(),t(6,"div",97)(7,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(8," Close "),e()()}}function Ne(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",134),i(2," New Message to @mdo "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"form")(6,"div",86)(7,"label",135),i(8,"Recipient:"),e(),v(9,"input",136),e(),t(10,"div",86)(11,"label",137),i(12,"Message:"),e(),v(13,"textarea",138),e()()(),t(14,"div",97)(15,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(16," Close "),e(),t(17,"button",99),i(18," Send message "),e()()}}function Ie(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",134),i(2," New Message to @fat "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"form")(6,"div",86)(7,"label",135),i(8,"Recipient:"),e(),v(9,"input",139),e(),t(10,"div",86)(11,"label",137),i(12,"Message:"),e(),v(13,"textarea",138),e()()(),t(14,"div",97)(15,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(16," Close "),e(),t(17,"button",99),i(18," Send message "),e()()}}function qe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",134),i(2," New Message to @getbootstrap "),e(),t(3,"button",95),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"form")(6,"div",86)(7,"label",135),i(8,"Recipient:"),e(),v(9,"input",140),e(),t(10,"div",86)(11,"label",137),i(12,"Message:"),e(),v(13,"textarea",138),e()()(),t(14,"div",97)(15,"button",98),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(16," Close "),e(),t(17,"button",99),i(18," Send message "),e()()}}function Be(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function $e(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function Ue(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function Pe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function Fe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function We(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function De(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function Oe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function Xe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function ze(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",141),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",142)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",143),i(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",97)(10,"button",144),i(11,"Save changes"),e(),t(12,"button",145),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(13,"Close"),e()()}}function je(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function He(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Ge(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Qe(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Ae(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Je(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Ye(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Ke(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function Ze(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function et(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function tt(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",149),i(2,"Message Preview"),e(),t(3,"button",146),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),e()(),t(4,"div",96)(5,"h6"),i(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function it(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Small Modal"),e(),t(3,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(4,"span",151),i(5,"\xD7"),e()()(),t(6,"div",96)(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",152)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function lt(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Large Modal"),e(),t(3,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(4,"span",151),i(5,"\xD7"),e()()(),t(6,"div",96)(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",97)(10,"button",147),i(11,"Save changes"),e(),t(12,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(13," Close "),e()()}}function at(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Grid Modal"),e(),t(3,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(4,"span",151),i(5,"\xD7"),e()()(),t(6,"div",96)(7,"div",42)(8,"div",153)(9,"p"),i(10," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "),e()(),t(11,"div",153)(12,"p"),i(13," But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the who loves toil and pain can procureor sit aspernatur system. "),e()()(),t(14,"div",42)(15,"div",153)(16,"p"),i(17," expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure desires to obtain pain. "),e()(),t(18,"div",153)(19,"p"),i(20," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat aut odit voluptatem. "),e()()()(),t(21,"div",97)(22,"button",147),i(23,"Save changes"),e(),t(24,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(25," Close "),e()()}}function ot(m,n){if(m&1){let a=p();t(0,"div",154)(1,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(2,"span",151),i(3,"\xD7"),e()(),v(4,"i",155),t(5,"h4",156),i(6,"Congratulations!"),e(),t(7,"p",157),i(8," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. "),e(),t(9,"button",158),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(10," Continue "),e()()}}function nt(m,n){if(m&1){let a=p();t(0,"div",154)(1,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(2,"span",151),i(3,"\xD7"),e()(),v(4,"i",159),t(5,"h4",160),i(6,"Error: Cannot process your entry!"),e(),t(7,"p",157),i(8," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. "),e(),t(9,"button",161),d("click",function(){let l=s(a).$implicit;return r(l.close("Close click"))}),i(10," Continue "),e()()}}function st(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Select2 Modal"),e(),t(3,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(4,"span",151),i(5,"\xD7"),e()()(),t(6,"div",96)(7,"h6"),i(8,"Why We Use Electoral College, Not Popular Vote"),e(),t(9,"p",162),i(10," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(11,"div",97)(12,"button",147),i(13,"Save changes"),e(),t(14,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(15," Close "),e()()}}function rt(m,n){if(m&1){let a=p();t(0,"div",93)(1,"h6",110),i(2,"Scroll Modal"),e(),t(3,"button",150),d("click",function(){let l=s(a).$implicit;return r(l.dismiss("Cross click"))}),t(4,"span",151),i(5,"\xD7"),e()()(),t(6,"div",96)(7,"p"),i(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e(),t(9,"p"),i(10," But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. "),e(),t(11,"p"),i(12," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. "),e(),t(13,"p"),i(14," On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "),e(),t(15,"p"),i(16," These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "),e()(),t(17,"div",97)(18,"button",147),i(19,"Save changes"),e(),t(20,"button",148),d("click",function(){let l=s(a).$implicit;return r(l.close("Save click"))}),i(21," Close "),e()()}}var B=class m{constructor(n,a){this.modalService=n;this.renderer=a}prismCode=k;tsCodedata=k;modal1;modal2;openBasic(n){this.modalService.open(n)}ngOnInit(){}openScale(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSlideRight(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__slideInRight"})}openSlideBottom(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__backInUp"})}openNewspaper(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__rotateIn"})}openFall(n){this.modalService.open(n,{centered:!0,windowClass:"effect-fall"})}openFlipHorizontal(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__flipInY"})}openFlipVertical(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openSuperScaled(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSign(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openRotateBottom(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__slideInUp"})}openRotateLeft(n){this.modalService.open(n,{centered:!0,windowClass:"animate__animated animate__slideInLeft"})}openJustMe(n){this.modalService.open(n,{centered:!0,windowClass:"dark-modal"})}openright(n){this.modalService.open(n,{centered:!0})}StaticBackdrop(n){this.modalService.open(n,{backdrop:"static",keyboard:!1})}VerticalCenter(n){this.modalService.open(n,{centered:!0})}GridOpen(n){this.modalService.open(n,{size:"lg"})}SuccessOpen(n){this.modalService.open(n,{centered:!0})}WarningOpen(n){this.modalService.open(n,{centered:!0})}Select2Open(n){this.modalService.open(n,{size:"sm"})}openScrollable(n){this.modalService.open(n,{scrollable:!0})}scrollableContent(n){this.modalService.open(n,{scrollable:!0})}VerticalCenterScroll(n){this.modalService.open(n,{scrollable:!0})}TooltipPopovers(n){this.modalService.open(n,{centered:!0})}Gridmodal(n){this.modalService.open(n,{centered:!0})}togglemodal(n){this.modalService.open(n,{centered:!0})}togglemodal2(n){this.modalService.open(n,{centered:!0})}openSm(n){this.modalService.open(n,{size:"sm"})}openXl(n){this.modalService.open(n,{size:"xl"})}openLg(n){this.modalService.open(n,{size:"lg"})}openFullscreen(n){this.modalService.open(n,{fullscreen:!0})}BelowSm(n){this.modalService.open(n)}BelowMd(n){this.modalService.open(n)}BelowLg(n){this.modalService.open(n)}BelowXl(n){this.modalService.open(n)}BelowXxl(n){this.modalService.open(n)}Openmdo(n){this.modalService.open(n)}Openfat(n){this.modalService.open(n)}Opengetbootstrap(n){this.modalService.open(n)}modalOptions={centered:!0};ToggleModals2(n){this.firstModalRef&&this.firstModalRef.dismiss(),this.secondModalRef=this.modalService.open(n,{centered:!0})}firstModalRef;secondModalRef;openFirstModal(n){this.secondModalRef&&this.secondModalRef.close();let a=this.modalService.open(n,this.modalOptions);this.firstModalRef=a,a.result.then(o=>{}).catch(o=>{})}openSecondModal(n){this.firstModalRef&&this.firstModalRef.close();let a=this.modalService.open(n,this.modalOptions);this.secondModalRef=a,a.result.then(o=>{}).catch(o=>{})}static \u0275fac=function(a){return new(a||m)(C(V),C(y))};static \u0275cmp=E({type:m,selectors:[["app-modals"]],viewQuery:function(a,o){if(a&1&&(S(me,5),S(ce,5)),a&2){let l;M(l=x())&&(o.modal1=l.first),M(l=x())&&(o.modal2=l.first)}},decls:235,vars:43,consts:[["content",""],["content1",""],["staticbackdropModal",""],["ScrollingcontentModal",""],["TooltipPopoversModal",""],["VerticalCenterModal",""],["content6",""],["content2",""],["VerticalCenterScrollModal",""],["GridCenterModal",""],["XlContentModal",""],["LargeModal",""],["SmallModal",""],["FullscreenModal",""],["BelowSmModal",""],["BelowMdModal",""],["BelowLgModal",""],["BelowXlModal",""],["BelowXxlModal",""],["OpenmdoModal",""],["OpenfatModal",""],["OpengetbootstrapModal",""],["scale",""],["right",""],["bottom",""],["newspaper",""],["fall",""],["flip",""],["flipV",""],["super",""],["sign",""],["left",""],["justme",""],["smallModal",""],["largeModal",""],["gridModal",""],["successModal",""],["warningModal",""],["select2Modal",""],["scrollModal",""],["Content8",""],["title","Advanced UI","active_item","Modals & Closes",3,"subtitle"],[1,"row"],[1,"col-xl-4"],[3,"title","prism","tsCode"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary",3,"click"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-primary",3,"click"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable4",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable2",1,"btn","btn-primary",3,"click"],["data-bs-toggle","modal","role","button",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable3",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable5",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalXl",1,"btn","btn-primary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalLg",1,"btn","btn-secondary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalSm",1,"btn","btn-warning","m-1",3,"click"],[1,"col-xl-12"],[1,"bd-example"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreen",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenSm",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenMd",1,"btn","btn-warning","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenLg",1,"btn","btn-info","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXl",1,"btn","btn-success","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXxl",1,"btn","btn-danger","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@mdo",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@fat",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@getbootstrap",1,"btn","btn-light","mb-1","me-1",3,"click"],[1,"col-sm-6","col-md-4","col-xl-3"],["data-bs-effect","effect-scale","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-right","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-newspaper","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-fall","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-horizontal","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-vertical","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-super-scaled","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-sign","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-left","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["id","modaldemo8",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","text-center"],[1,"modal-content","modal-content-demo"],[1,"mb-3"],[3,"title","prism"],["type","button","aria-label","Close",1,"btn-close"],["type","button","disabled","","aria-label","Close",1,"btn-close"],["classbody","bg-black white-varient-styles",3,"title","prism"],["type","button","aria-label","Close",1,"btn-close","btn-close-white"],["type","button","disabled","","aria-label","Close",1,"btn-close","btn-close-white"],[1,"modal-header"],["id","exampleModalLabel1",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary"],["id","staticBackdropLabel",1,"modal-title"],["id","staticBackdropLabel1",1,"modal-title"],["id","staticBackdropLabel4",1,"modal-title"],["role","button","placement","top","popoverTitle","Popover title","ngbPopover","Popover body content is set in this attribute",1,"btn","btn-secondary"],["ngbTooltip","tooltip","title","Tooltip",1,"text-primary"],["id","staticBackdropLabel2",1,"modal-title"],["id","exampleModalToggleLabel",1,"modal-title"],["data-bs-target","#exampleModalToggle2","data-bs-toggle","modal",1,"btn","btn-primary",3,"click"],["id","exampleModalToggleLabel2",1,"modal-title"],["data-bs-target","#exampleModalToggle","data-bs-toggle","modal",1,"btn","btn-primary",3,"click"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"btn","btn-primary",3,"click"],["id","staticBackdropLabel3",1,"modal-title"],["id","staticBackdropLabel5",1,"modal-title"],[1,"container-fluid"],[1,"col-md-4","bg-light","border"],[1,"col-md-4","ms-auto","bg-light","border"],[1,"row","mt-3"],[1,"col-md-3","ms-auto","bg-light","border"],[1,"col-md-2","ms-auto","bg-light","border"],[1,"col-md-6","ms-auto","bg-light","border"],[1,"col-sm-9","bg-light","border"],[1,"col-8","col-sm-6","bg-light","border"],[1,"col-4","col-sm-6","bg-light","border"],["id","exampleModalXlLabel",1,"modal-title"],["id","exampleModalLgLabel",1,"modal-title"],["id","exampleModalSmLabel",1,"modal-title"],["id","exampleModalFullscreenLabel",1,"modal-title"],["id","exampleModalFullscreenSmLabel",1,"modal-title"],["id","exampleModalFullscreenMdLabel",1,"modal-title"],["id","exampleModalFullscreenLgLabel",1,"modal-title"],["id","exampleModalFullscreenXlLabel",1,"modal-title"],["id","exampleModalFullscreenXxlLabel",1,"modal-title"],["id","exampleModalLabel",1,"modal-title"],["for","recipient-name",1,"col-form-label"],["value","@mdo","type","text","id","recipient-name",1,"form-control"],["for","message-text",1,"col-form-label"],["id","message-text",1,"form-control"],["value","@fat","type","text","id","recipient-name",1,"form-control"],["value","@getbootstrap","type","text","id","recipient-name",1,"form-control"],["aria-label","Close","data-bs-dismiss","modal",1,"btn-close",3,"click"],[1,"modal-body","text-start"],[1,"text-muted","mb-0"],[1,"btn","btn-primary"],["data-bs-dismiss","modal",1,"btn","btn-light",3,"click"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["type","button",1,"btn","ripple","btn-primary"],["type","button",1,"btn","ripple","btn-secondary",3,"click"],[1,"fs-6"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-footer","justify-content-center"],[1,"col-md-6"],[1,"modal-body","tx-center"],[1,"icon","ion-ios-checkmark-circle-outline","tx-100","tx-success","lh-1","mg-t-20","d-inline-block"],[1,"tx-success","tx-semibold","mg-b-20"],[1,"mg-b-20","mg-x-20"],["type","button",1,"btn","ripple","btn-success",3,"click"],[1,"icon","icon","ion-ios-close-circle-outline","tx-100","tx-danger","lh-1","mg-t-20","d-inline-block"],[1,"tx-danger","mg-b-20"],["type","button",1,"btn","ripple","btn-danger",3,"click"],[1,"mt-3"]],template:function(a,o){if(a&1){let l=p();v(0,"app-breadcrumb",41),t(1,"div",42)(2,"div",43)(3,"app-showcode-card",44)(4,"a",45),d("click",function(){s(l);let c=_(10);return r(o.openBasic(c))}),i(5," Launch demo modal "),e(),t(6,"div",46)(7,"div",47)(8,"div",48),g(9,pe,11,0,"ng-template",null,0,u),e()()()()(),t(11,"div",43)(12,"app-showcode-card",44)(13,"a",49),d("click",function(){s(l);let c=_(21);return r(o.StaticBackdrop(c))}),i(14," Launch static backdrop modal "),e(),t(15,"div",50)(16,"div",47)(17,"div",48),g(18,ue,12,0,"ng-template",null,1,u),e()()()(),g(20,be,12,0,"ng-template",null,2,u),e(),t(22,"div",43)(23,"app-showcode-card",44)(24,"a",51),d("click",function(){s(l);let c=_(27);return r(o.scrollableContent(c))}),i(25," Scrolling long content "),e(),g(26,_e,42,0,"ng-template",null,3,u),e()(),t(28,"div",43)(29,"app-showcode-card",44)(30,"a",52),d("click",function(){s(l);let c=_(33);return r(o.TooltipPopovers(c))}),i(31," Launch demo modal "),e(),g(32,ge,27,0,"ng-template",null,4,u),e()(),t(34,"div",43)(35,"app-showcode-card",44)(36,"a",53),d("click",function(){s(l);let c=_(39);return r(o.VerticalCenter(c))}),i(37," Vertically centered modal "),e(),g(38,he,12,0,"ng-template",null,5,u),e()(),t(40,"div",43)(41,"app-showcode-card",44)(42,"a",54),d("click",function(){s(l);let c=_(45);return r(o.openFirstModal(c))}),i(43,"Open first modal "),e(),g(44,ve,11,0,"ng-template",null,6,u)(46,ke,9,0,"ng-template",null,7,u),e()(),t(48,"div",43)(49,"app-showcode-card",44)(50,"a",55),d("click",function(){s(l);let c=_(53);return r(o.VerticalCenterScroll(c))}),i(51," Vertically centered scrollable modal "),e(),g(52,we,25,0,"ng-template",null,8,u),e()(),t(54,"div",43)(55,"app-showcode-card",44)(56,"a",56),d("click",function(){s(l);let c=_(59);return r(o.Gridmodal(c))}),i(57," Launch demo modal "),e(),g(58,Ce,32,0,"ng-template",null,9,u),e()(),t(60,"div",43)(61,"app-showcode-card",44)(62,"a",57),d("click",function(){s(l);let c=_(69);return r(o.openXl(c))}),i(63," Extra large modal "),e(),t(64,"a",58),d("click",function(){s(l);let c=_(71);return r(o.openLg(c))}),i(65," Large modal "),e(),t(66,"a",59),d("click",function(){s(l);let c=_(73);return r(o.openSm(c))}),i(67," Small modal "),e(),g(68,Se,6,0,"ng-template",null,10,u)(70,Me,6,0,"ng-template",null,11,u)(72,xe,6,0,"ng-template",null,12,u),e()()(),t(74,"div",42)(75,"div",60)(76,"app-showcode-card",44)(77,"div",61)(78,"a",62),d("click",function(){s(l);let c=_(91);return r(o.openFullscreen(c))}),i(79,"Full screen"),e(),t(80,"a",63),d("click",function(){s(l);let c=_(93);return r(o.BelowSm(c))}),i(81,"Full screen below sm"),e(),t(82,"a",64),d("click",function(){s(l);let c=_(95);return r(o.BelowMd(c))}),i(83,"Full screen below md"),e(),t(84,"a",65),d("click",function(){s(l);let c=_(97);return r(o.BelowLg(c))}),i(85,"Full screen below lg"),e(),t(86,"a",66),d("click",function(){s(l);let c=_(99);return r(o.BelowXl(c))}),i(87,"Full screen below xl"),e(),t(88,"a",67),d("click",function(){s(l);let c=_(101);return r(o.BelowXxl(c))}),i(89,"Full screen below xxl"),e()(),g(90,ye,9,0,"ng-template",null,13,u)(92,Ee,9,0,"ng-template",null,14,u)(94,Ve,9,0,"ng-template",null,15,u)(96,Te,9,0,"ng-template",null,16,u)(98,Re,9,0,"ng-template",null,17,u)(100,Le,9,0,"ng-template",null,18,u),e()()(),t(102,"div",42)(103,"div",60)(104,"app-showcode-card",44)(105,"button",68),d("click",function(){s(l);let c=_(112);return r(o.Openmdo(c))}),i(106," Open modal for @mdo "),e(),t(107,"button",69),d("click",function(){s(l);let c=_(114);return r(o.Openfat(c))}),i(108," Open modal for @fat "),e(),t(109,"button",70),d("click",function(){s(l);let c=_(116);return r(o.Opengetbootstrap(c))}),i(110," Open modal for @getbootstrap "),e(),g(111,Ne,19,0,"ng-template",null,19,u)(113,Ie,19,0,"ng-template",null,20,u)(115,qe,19,0,"ng-template",null,21,u),e()()(),t(117,"div",42)(118,"div",60)(119,"app-showcode-card",44)(120,"div",42)(121,"div",71)(122,"a",72),d("click",function(){s(l);let c=_(158);return r(o.openScale(c))}),i(123,"Scale"),e()(),t(124,"div",71)(125,"a",73),d("click",function(){s(l);let c=_(161);return r(o.openSlideRight(c))}),i(126,"Slide In Right"),e()(),t(127,"div",71)(128,"a",74),d("click",function(){s(l);let c=_(164);return r(o.openSlideBottom(c))}),i(129,"Slide In Bottom"),e()(),t(130,"div",71)(131,"a",75),d("click",function(){s(l);let c=_(167);return r(o.openNewspaper(c))}),i(132,"News paper"),e()(),t(133,"div",71)(134,"a",76),d("click",function(){s(l);let c=_(170);return r(o.openFall(c))}),i(135,"Fall"),e()(),t(136,"div",71)(137,"a",77),d("click",function(){s(l);let c=_(173);return r(o.openFlipHorizontal(c))}),i(138,"Flip Horizontal"),e()(),t(139,"div",71)(140,"a",78),d("click",function(){s(l);let c=_(176);return r(o.openFlipVertical(c))}),i(141,"Flip Vertical"),e()(),t(142,"div",71)(143,"a",79),d("click",function(){s(l);let c=_(179);return r(o.openSuperScaled(c))}),i(144,"Super Scaled"),e()(),t(145,"div",71)(146,"a",80),d("click",function(){s(l);let c=_(182);return r(o.openSign(c))}),i(147,"Sign"),e()(),t(148,"div",71)(149,"a",81),d("click",function(){s(l);let c=_(164);return r(o.openRotateBottom(c))}),i(150,"Rotate Bottom"),e()(),t(151,"div",71)(152,"a",82),d("click",function(){s(l);let c=_(185);return r(o.openRotateLeft(c))}),i(153,"Rotate Left"),e()()(),t(154,"div",83)(155,"div",84)(156,"div",85),g(157,Be,14,0,"ng-template",null,22,u),e(),t(159,"div",85),g(160,$e,14,0,"ng-template",null,23,u),e(),t(162,"div",85),g(163,Ue,14,0,"ng-template",null,24,u),e(),t(165,"div",85),g(166,Pe,14,0,"ng-template",null,25,u),e(),t(168,"div",85),g(169,Fe,14,0,"ng-template",null,26,u),e(),t(171,"div",85),g(172,We,14,0,"ng-template",null,27,u),e(),t(174,"div",85),g(175,De,14,0,"ng-template",null,28,u),e(),t(177,"div",85),g(178,Oe,14,0,"ng-template",null,29,u),e(),t(180,"div",85),g(181,Xe,14,0,"ng-template",null,30,u),e(),t(183,"div",85),g(184,ze,14,0,"ng-template",null,31,u),e()()()()()(),t(186,"h6",86),i(187,"Close Buttons:"),e(),t(188,"div",42)(189,"div",43)(190,"app-showcode-card",87),v(191,"button",88),e()(),t(192,"div",43)(193,"app-showcode-card",87),v(194,"button",89),e()(),t(195,"div",43)(196,"app-showcode-card",90),v(197,"button",91)(198,"button",92),e()()(),g(199,je,14,0,"ng-template",null,22,u)(201,He,14,0,"ng-template",null,23,u)(203,Ge,14,0,"ng-template",null,24,u)(205,Qe,14,0,"ng-template",null,25,u)(207,Ae,14,0,"ng-template",null,26,u)(209,Je,14,0,"ng-template",null,27,u)(211,Ye,14,0,"ng-template",null,28,u)(213,Ke,14,0,"ng-template",null,29,u)(215,Ze,14,0,"ng-template",null,30,u)(217,et,14,0,"ng-template",null,31,u)(219,tt,14,0,"ng-template",null,32,u)(221,it,14,0,"ng-template",null,33,u)(223,lt,14,0,"ng-template",null,34,u)(225,at,26,0,"ng-template",null,35,u)(227,ot,11,0,"ng-template",null,36,u)(229,nt,11,0,"ng-template",null,37,u)(231,st,16,0,"ng-template",null,38,u)(233,rt,22,0,"ng-template",null,39,u)}a&2&&(h("subtitle",!1),f(3),h("title","Basic Modal")("prism",o.prismCode.model1)("tsCode",o.tsCodedata.modelts1),f(9),h("title","Static backdrop")("prism",o.prismCode.model2)("tsCode",o.tsCodedata.modelts2),f(11),h("title","Scrolling long content")("prism",o.prismCode.model3)("tsCode",o.tsCodedata.modelts3),f(6),h("title","Tooltips and popovers")("prism",o.prismCode.model6)("tsCode",o.tsCodedata.modelts6),f(6),h("title","Vertically centered modal")("prism",o.prismCode.model4)("tsCode",o.tsCodedata.modelts4),f(6),h("title","Toggle between modals")("prism",o.prismCode.model8)("tsCode",o.tsCodedata.modelts8),f(8),h("title","Vertical Centered Scrollable")("prism",o.prismCode.model5)("tsCode",o.tsCodedata.modelts5),f(6),h("title","Using the grid")("prism",o.prismCode.model7)("tsCode",o.tsCodedata.modelts7),f(6),h("title","Optional sizes")("prism",o.prismCode.model9)("tsCode",o.tsCodedata.modelts9),f(15),h("title","Fullscreen modal")("prism",o.prismCode.model10)("tsCode",o.tsCodedata.modelts10),f(28),h("title","Varying modal content")("prism",o.prismCode.model11)("tsCode",o.tsCodedata.modelts11),f(15),h("title","Modal Animation Effects")("prism",o.prismCode.model12)("tsCode",o.tsCodedata.modelts12),f(71),h("title","Basic Close")("prism",o.prismCode.model13),f(3),h("title","Disabel state")("prism",o.prismCode.model14),f(3),h("title","White variant")("prism",o.prismCode.model15))},dependencies:[N,I,q,L,T,R],styles:["dp-date-picker,   dp-date-picker.dp-material .dp-picker-input{width:100%!important;height:38px!important}  dp-date-picker.dp-material .dp-picker-input{font-weight:400;line-height:1.5;color:#a8afc7;background-color:#fff;background-clip:padding-box;border:1px solid #e8e8f7;border-radius:5px}  dp-day-calendar.dp-material .dp-current-day{border:1px solid #6259ca!important;background:#6259ca!important;color:#fff}  dp-calendar-nav.dp-material .dp-calendar-nav-container{border:1px solid #e8e8f7!important;height:40px!important}  dp-calendar-nav.dp-material .dp-nav-header-btn{font-weight:700;color:#3b4863}  dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e8e8f7!important;padding:10px}  dp-day-calendar.dp-material .dp-calendar-weekday{color:#3b4863!important;width:33px!important}  dp-day-calendar .dp-calendar-day{width:33px!important}  dp-calendar-nav .dp-nav-btns-container{padding:15px}  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right{padding:5px}.btn-warning[_ngcontent-%COMP%]{color:#fff!important}.btn-warning[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#fff}"]})};export{B as Modals};
