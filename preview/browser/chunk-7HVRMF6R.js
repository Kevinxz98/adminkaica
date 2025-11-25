import{a as q}from"./chunk-KO455Y2F.js";import{a as W}from"./chunk-NAPTRZ5S.js";import{c as N,d as F,f as S,g as I,i as R}from"./chunk-4AUZCU3R.js";import{a as G}from"./chunk-LCA5ED7I.js";import{c as D}from"./chunk-2D66LXFZ.js";import{Ca as C,F as V,H as f}from"./chunk-42GC3H2R.js";import{Ab as E,Bb as O,Cb as a,Db as t,Eb as i,Fb as s,Jb as B,Kb as H,Nb as w,Rc as z,Tb as u,Wa as o,ec as L,fc as M,ib as v,ic as P,jc as d,lc as A,nc as k,oc as j,pc as _,ra as l,sa as h,ub as p,uc as Y,yb as x}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as $}from"./chunk-VB56BUGO.js";var g={};$(g,{accordion1:()=>K,accordion10:()=>se,accordion11:()=>de,accordion12:()=>re,accordion13:()=>ce,accordion14:()=>le,accordion15:()=>he,accordion16:()=>pe,accordion2:()=>X,accordion3:()=>Z,accordion4:()=>ee,accordion5:()=>oe,accordion6:()=>ae,accordion7:()=>te,accordion8:()=>ie,accordion9:()=>ne,accordionReuse:()=>J,accordionTs:()=>Q});var J=`<div ngbAccordion [closeOthers]="closeOthers" [class]="accodionClass" [id]="accordionId">
@for(item of accordionItems;track $index){
    <ng-container>
      <div ngbAccordionItem [class]="item.accodionItemClass" [collapsed]="item.collapsed">
        <h2 ngbAccordionHeader [id]="item.headingId">
          <button ngbAccordionButton type="button" data-bs-toggle="collapse" [attr.data-bs-target]="item.collapseId" [attr.aria-expanded]="!item.collapsed" [attr.aria-controls]="item.collapseId">
            {{ item.title }}
          </button>
        </h2>
        <div [id]="item.collapseId" ngbAccordionCollapse [attr.aria-labelledby]="item.headingId">
          <div ngbAccordionBody [innerHTML]="item.body">
            {{ item.body }}
          </div>
        </div>
      </div>
    </ng-container>
}
</div>`,K=`<div ngbAccordion id="accordionExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" ngbAccordionCollapse
        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseTwo" ngbAccordionCollapse aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseThree" ngbAccordionCollapse aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
</div>`,Q=`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/advancedUi/accordion';
import * as tsCode from '../../../shared/prismData/alert';
@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {
  panels = ['Accordion Item #1', 'Accordion Item #2', 'Accordion Item #3'];
}`,X=`<div ngbAccordion id="accordionPanelsStayOpenExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="panelsStayOpen-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingOne">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingTwo">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingThree">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,Z=`<div ngbAccordion id="accordionFlushExample">
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="flush-collapseOne" ngbAccordionCollapse aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            first item's accordion body.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="flush-collapseTwo" ngbAccordionCollapse aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            second item's accordion body. Let's imagine this being filled
            with
            some
            actual content.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="flush-collapseThree" ngbAccordionCollapse aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            third item's accordion body. Nothing more exciting happening
            here in
            terms
            of content, but just filling up the space to make it look, at
            least
            at
            first
            glance, a bit more representative of how this would look in a
            real-world
            application.</div>
    </div>
</div>
</div>`,ee=`<div ngbAccordion class="accordion-primary" id="accordionPrimaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryOne" aria-expanded="true"
            aria-controls="collapsePrimaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimaryOne" ngbAccordionCollapse aria-labelledby="headingPrimaryOne"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryTwo" aria-expanded="false"
            aria-controls="collapsePrimaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimaryTwo" ngbAccordionCollapse aria-labelledby="headingPrimaryTwo"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryThree" aria-expanded="false"
            aria-controls="collapsePrimaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimaryThree" ngbAccordionCollapse aria-labelledby="headingPrimaryThree"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,oe=`<div ngbAccordion class="accordion-secondary" id="accordionSecondaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryOne" aria-expanded="true"
            aria-controls="collapseSecondaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondaryOne" ngbAccordionCollapse aria-labelledby="headingSecondaryOne"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryTwo" aria-expanded="false"
            aria-controls="collapseSecondaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondaryTwo" ngbAccordionCollapse aria-labelledby="headingSecondaryTwo"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryThree" aria-expanded="false"
            aria-controls="collapseSecondaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondaryThree" ngbAccordionCollapse aria-labelledby="headingSecondaryThree"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ae=`<div ngbAccordion class="accordion-solid-primary" id="accordionPrimarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidOne" aria-expanded="true"
            aria-controls="collapsePrimarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimarySolidOne" ngbAccordionCollapse aria-labelledby="headingPrimarySolidOne"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false"
            aria-controls="collapsePrimarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimarySolidTwo" ngbAccordionCollapse aria-labelledby="headingPrimarySolidTwo"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidThree" aria-expanded="false"
            aria-controls="collapsePrimarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimarySolidThree" ngbAccordionCollapse aria-labelledby="headingPrimarySolidThree"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,te=`<div ngbAccordion class=" accordion-solid-secondary" id="accordionSecondarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidOne" aria-expanded="true"
            aria-controls="collapseSecondarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondarySolidOne" ngbAccordionCollapse aria-labelledby="headingSecondarySolidOne"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false"
            aria-controls="collapseSecondarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondarySolidTwo" ngbAccordionCollapse aria-labelledby="headingSecondarySolidTwo"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidThree" aria-expanded="false"
            aria-controls="collapseSecondarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondarySolidThree" ngbAccordionCollapse
        aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ie=`<div ngbAccordion class=" accordion-border-primary accordions-items-seperate"
id="accordionprimaryborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingborderprimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="primaryBorderOne" ngbAccordionCollapse aria-labelledby="headingborderprimaryOne"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="primaryBorderTwo" ngbAccordionCollapse aria-labelledby="headingborderprimaryTwo"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderThree" aria-expanded="false"
            aria-controls="primaryBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="primaryBorderThree" ngbAccordionCollapse aria-labelledby="headingborderprimaryThree"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ne=`<div ngbAccordion class=" accordion-border-success accordions-items-seperate"
id="accordionsuccessborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingbordersuccessOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="successBorderOne" ngbAccordionCollapse aria-labelledby="headingbordersuccessOne"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="successBorderTwo" ngbAccordionCollapse aria-labelledby="headingbordersuccessTwo"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderThree" aria-expanded="false"
            aria-controls="successBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="successBorderThree" ngbAccordionCollapse aria-labelledby="headingbordersuccessThree"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,se=`<p class="mb-0">
<a class="btn btn-primary collapsed mb-2 me-1" (click)="collapse.toggle()" data-bs-toggle="collapse"
    role="button" [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Link with href
</a>
<button class="btn btn-secondary collapsed mb-2" (click)="isCollapsed = !isCollapsed" type="button"
    data-bs-toggle="collapse" data-bs-target="#collapseExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseExample">
    Button with data-bs-target
</button>
</p>
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" id="collapseExample">
<div class="card card-body mb-0">
    Some placeholder content for the collapse component. This panel
    is
    hidden by default but revealed when the user activates the
    relevant
    trigger.
</div>
</div>`,de=`<p class="mb-0">
<a class="btn btn-primary mb-2 me-1" (click)="isCollapsed1 = !isCollapsed1" role="button"
    [attr.aria-expanded]="!isCollapsed1" [attr.aria-controls]="'multiCollapseExample1'">Toggle
    first element</a>
<button class="btn btn-success mb-2 me-1" (click)="isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed2" [attr.aria-controls]="'multiCollapseExample2'">Toggle
    second element</button>
<button class="btn btn-danger mb-2 me-1"
    (click)="isCollapsed1 = !isCollapsed1; isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed1 && !isCollapsed2"
    [attr.aria-controls]="'multiCollapseExample1 multiCollapseExample2'">Toggle both
    elements</button>
</p>
<div class="row">
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample1" [ngbCollapse]="isCollapsed1">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the first collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample2" [ngbCollapse]="isCollapsed2">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the second collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
</div>`,re=`<div ngbAccordion class=" accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingcustomicon1One">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1One" aria-expanded="true"
            aria-controls="collapsecustomicon1One">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsecustomicon1One" ngbAccordionCollapse aria-labelledby="headingcustomicon1One"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Two">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
            aria-controls="collapsecustomicon1Two">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsecustomicon1Two" ngbAccordionCollapse aria-labelledby="headingcustomicon1Two"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Three">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
            aria-controls="collapsecustomicon1Three">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsecustomicon1Three" ngbAccordionCollapse aria-labelledby="headingcustomicon1Three"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,ce=`<div ngbAccordion class=" customized-accordion accordions-items-seperate" id="customizedAccordion">
<div ngbAccordionItem [collapsed]="false" class="custom-accordion-primary">
    <h2 ngbAccordionHeader id="customizedAccordionOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionOne" aria-expanded="true"
            aria-controls="customized-AccordionOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="customized-AccordionOne" ngbAccordionCollapse aria-labelledby="customizedAccordionOne"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-secondary">
    <h2 ngbAccordionHeader id="customizedAccordionTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionTwo" aria-expanded="false"
            aria-controls="customized-AccordionTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="customized-AccordionTwo" ngbAccordionCollapse aria-labelledby="customizedAccordionTwo"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-danger">
    <h2 ngbAccordionHeader id="customizedAccordionThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionThree" aria-expanded="false"
            aria-controls="customized-AccordionThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="customized-AccordionThree" ngbAccordionCollapse aria-labelledby="customizedAccordionThree"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,le=`<div ngbAccordion class=" accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingleftOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseleftOne" aria-expanded="true" aria-controls="collapseleftOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseleftOne" ngbAccordionCollapse aria-labelledby="headingleftOne"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftTwo" aria-expanded="false" aria-controls="collapseLeftTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseLeftTwo" ngbAccordionCollapse aria-labelledby="headingleftTwo"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftThree" aria-expanded="false" aria-controls="collapseLeftThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseLeftThree" ngbAccordionCollapse aria-labelledby="headingleftThree"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,he=`<div ngbAccordion class=" accordionicon-none accordions-items-seperate" id="accordioniconnoIconExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingnoIconOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconOne" aria-expanded="true" aria-controls="collapsenoIconOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsenoIconOne" ngbAccordionCollapse aria-labelledby="headingnoIconOne"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconTwo" aria-expanded="false" aria-controls="collapsenoIconTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsenoIconTwo" ngbAccordionCollapse aria-labelledby="headingnoIconTwo"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconThree" aria-expanded="false"
            aria-controls="collapsenoIconThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsenoIconThree" ngbAccordionCollapse aria-labelledby="headingnoIconThree"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,pe=`<p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" (click)="collapse.toggle()"
    data-bs-target="#collapseWidthExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseWidthExample">
    Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" [horizontal]="true" style="max-width: 300px"
    id="collapseWidthExample">
    <div class="card card-body" style="width: 230px;">
        This is some placeholder content for a horizontal collapse. It's
        hidden
        by default and shown when triggered.
    </div>
</div>
</div>`;function me(b,r){if(b&1){let n=w();B(0),t(1,"p",1)(2,"button",2),u("click",function(){let c=l(n).$implicit;return h(c.isCollapsed=!c.isCollapsed)}),d(3),i()(),t(4,"div",3)(5,"div",4),d(6),i()(),H()}if(b&2){let n=r.$implicit;o(2),P(Y("btn btn-",n.collapseClass," collapsed mb-2 me-1")),p("aria-expanded",!n.isCollapsed)("aria-controls",n.targetId),o(),A(" ",n.triggerText," "),o(),a("ngbCollapse",n.isCollapsed)("horizontal",n.horizontal),p("id",n.targetId),o(),M("width",n.width),o(),A(" ",n.bodyText," ")}}var T=class b{items=z([]);static \u0275fac=function(n){return new(n||b)};static \u0275cmp=v({type:b,selectors:[["app-ngb-collapse"]],inputs:{items:[1,"items"]},decls:3,vars:0,consts:[[1,"collapse-container"],[1,"mb-0"],["role","button",3,"click"],[3,"ngbCollapse","horizontal"],[1,"card","card-body","mb-0"]],template:function(n,e){n&1&&(t(0,"div",0),E(1,me,7,12,"ng-container",null,x),i()),n&2&&(o(),O(e.items()))},dependencies:[C,f,V],encapsulation:2})};var U=class b{panels=["Accordion Item #1","Accordion Item #2","Accordion Item #3"];isCollapsed=!0;isCollapsed1=!0;isCollapsed2=!0;isCollapsed3=!0;isCollapsed4=!0;isHorizontalCollapsed=!0;constructor(){}prismCode=g;reusableCode=g;tsCodeData=g;toggleCollapse(r){this.isCollapsed[r]===void 0?this.isCollapsed[r]=!0:this.isCollapsed[r]=!this.isCollapsed[r]}toggleHorizontalCollapse(){this.isHorizontalCollapsed=!this.isHorizontalCollapsed}ngOnInit(){}isFirstGradient=!1;isSecondGradient=!1;FirstGradient(){this.isFirstGradient=!this.isFirstGradient,this.isFirstGradient==!0?document.querySelector(".firstgradient")?.classList.remove("collapsed"):document.querySelector(".firstgradient")?.classList.add("collapsed")}SecondGradient(){this.isSecondGradient=!this.isSecondGradient,this.isSecondGradient==!0?document.querySelector(".secondgradient")?.classList.remove("collapsed"):document.querySelector(".secondgradient")?.classList.add("collapsed")}basicAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingOne",collapseId:"collapseOne",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];openAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingOne",collapseId:"collapseOne",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that weuse to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code> though the transition does limit overflow..",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];flushAccordions=[{title:"Accordion Item #1",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingOne",collapseId:"collapseOne",collapsed:!0},{title:"Accordion Item #2",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingTwo",collapseId:"collapseTwo",collapsed:!0},{title:"Accordion Item #3",body:"Placeholder content for this accordion,which is intended to demonstrate the <code>.accordion-flush</code> class.This isthefirst items accordion body.",headingId:"headingThree",collapseId:"collapseThree",collapsed:!0}];customAccordions=[{title:"Accordion Item #1",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingOne",collapseId:"collapseOne",accodionItemClass:"custom-accordion-primary",collapsed:!1},{title:"Accordion Item #2",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingTwo",collapseId:"collapseTwo",accodionItemClass:"custom-accordion-secondary",collapsed:!0},{title:"Accordion Item #3",body:"<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",headingId:"headingThree",collapseId:"collapseThree",accodionItemClass:"custom-accordion-danger",collapsed:!0}];collapseItems1=[{triggerText:"Toggle width collapse",bodyText:"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.",isCollapsed:!0,targetId:"collapseWidthExample",width:"230px",horizontal:!0,collapseClass:"primary"}];collapseItems2=[{triggerText:"Link with href",bodyText:"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"collapseExample",collapseClass:"primary"},{triggerText:"Button with data-bs-target",bodyText:"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"collapseExample",collapseClass:"secondary"}];collapseItems3=[{triggerText:"Toggle first element",bodyText:"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"multiCollapseExample1"},{triggerText:"Toggle second element",bodyText:"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.",isCollapsed:!0,targetId:"multiCollapseExample2"}];static \u0275fac=function(n){return new(n||b)};static \u0275cmp=v({type:b,selectors:[["app-accordion"]],decls:87,vars:108,consts:[["collapse","ngbCollapse"],["title","Advanced UI","active_item","Accordions",3,"subtitle"],[1,"row"],[1,"col-xl-12"],[3,"title","reuseCode","prism"],[3,"accordionId","closeOthers","accordionItems"],["title","Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code> to make accordion items stay  open when another item is opened. </p>",3,"reuseCode","prism"],["title",`Flush Accordion <p class='subtitle text-muted fs-12 fw-normal'>Add <code>.accordion-flush</code> to remove the default
      <code>background-color </code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
      </p>`,"cardClassCustom","shadow-none border-bottom-0","classbody","p-0",1,"Flush-Accordion",3,"reuseCode","prism"],[1,"mb-3"],[3,"reuseCode","title","prism"],[3,"accordionId","accodionClass","closeOthers","accordionItems"],[3,"items"],[1,"mb-0"],["data-bs-toggle","collapse","role","button","aria-controls","collapseExample",1,"btn","btn-primary","collapsed","mb-2","me-1",3,"click"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-controls","collapseExample",1,"btn","btn-secondary","collapsed","mb-2",3,"click"],["id","collapseExample",3,"ngbCollapseChange","ngbCollapse"],[1,"card","card-body","mb-0"],["classbody","collapsebody",3,"reuseCode","title","prism"],["role","button",1,"btn","btn-primary","mb-2","me-1",3,"click"],[1,"btn","btn-success","mb-2","me-1",3,"click"],[1,"btn","btn-danger","mb-2","me-1",3,"click"],[1,"col","m-1"],["id","multiCollapseExample1",1,"collapse","multi-collapse",3,"ngbCollapse"],[1,"card","card-body","mb-0","shadow-none"],["id","multiCollapseExample2",1,"collapse","multi-collapse",3,"ngbCollapse"]],template:function(n,e){if(n&1){let c=w();s(0,"app-breadcrumb",1),t(1,"div",2)(2,"div",3)(3,"app-showcode-card",4),s(4,"spk-ngb-accordion",5),i()(),t(5,"div",3)(6,"app-showcode-card",6),s(7,"spk-ngb-accordion",5),i()()(),t(8,"div",2)(9,"div",3)(10,"app-showcode-card",7),s(11,"spk-ngb-accordion",5),i()()(),t(12,"h6",8),d(13,"Light Colors:"),i(),t(14,"div",2)(15,"div",3)(16,"app-showcode-card",9),s(17,"spk-ngb-accordion",10),i()(),t(18,"div",3)(19,"app-showcode-card",9),s(20,"spk-ngb-accordion",10),i()()(),t(21,"h6",8),d(22,"Solid Colors:"),i(),t(23,"div",2)(24,"div",3)(25,"app-showcode-card",9),s(26,"spk-ngb-accordion",10),i()(),t(27,"div",3)(28,"app-showcode-card",9),s(29,"spk-ngb-accordion",10),i()()(),t(30,"div",2)(31,"div",3)(32,"app-showcode-card",9),s(33,"spk-ngb-accordion",10),i()(),t(34,"div",3)(35,"app-showcode-card",9),s(36,"spk-ngb-accordion",10),i()()(),t(37,"h6",8),d(38,"Colored Borders:"),i(),t(39,"div",2)(40,"div",3)(41,"app-showcode-card",9),s(42,"spk-ngb-accordion",10),i()(),t(43,"div",3)(44,"app-showcode-card",9),s(45,"spk-ngb-accordion",10),i()()(),t(46,"div",2)(47,"div",3)(48,"app-showcode-card",9),s(49,"spk-ngb-accordion",10),i()(),t(50,"div",3)(51,"app-showcode-card",9),s(52,"spk-ngb-accordion",10),i()()(),t(53,"div",2)(54,"div",3)(55,"app-showcode-card",9),s(56,"app-ngb-collapse",11),i()()(),t(57,"div",2)(58,"div",3)(59,"app-showcode-card",9)(60,"p",12)(61,"a",13),u("click",function(){l(c);let y=L(66);return h(y.toggle())}),d(62," Link with href "),i(),t(63,"button",14),u("click",function(){return l(c),h(e.isCollapsed=!e.isCollapsed)}),d(64," Button with data-bs-target "),i()(),t(65,"div",15,0),_("ngbCollapseChange",function(y){return l(c),j(e.isCollapsed,y)||(e.isCollapsed=y),h(y)}),t(67,"div",16),d(68," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()()(),t(69,"div",3)(70,"app-showcode-card",17)(71,"p",12)(72,"a",18),u("click",function(){return l(c),h(e.isCollapsed1=!e.isCollapsed1)}),d(73,"Toggle first element"),i(),t(74,"button",19),u("click",function(){return l(c),h(e.isCollapsed2=!e.isCollapsed2)}),d(75,"Toggle second element"),i(),t(76,"button",20),u("click",function(){return l(c),e.isCollapsed1=!e.isCollapsed1,h(e.isCollapsed2=!e.isCollapsed2)}),d(77,"Toggle both elements"),i()(),t(78,"div",2)(79,"div",21)(80,"div",22)(81,"div",23),d(82," Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()(),t(83,"div",21)(84,"div",24)(85,"div",23),d(86," Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. "),i()()()()()()()}n&2&&(a("subtitle",!1),o(3),a("title","Basic Accordion")("reuseCode",e.reusableCode.accordionReuse)("prism",e.prismCode.accordion1),o(),a("accordionId","accordionExample")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("prism",e.prismCode.accordion2),o(),a("accordionId","accordionExample")("closeOthers",!1)("accordionItems",e.openAccordions),o(3),a("reuseCode",e.reusableCode.accordionReuse)("prism",e.prismCode.accordion3),o(),a("accordionId","accordionFlushExample")("closeOthers",!0)("accordionItems",e.flushAccordions),o(5),a("reuseCode",e.reusableCode.accordionReuse)("title","Primary")("prism",e.prismCode.accordion4),o(),a("accordionId","accordionPrimaryExample")("accodionClass","accordion-primary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("title","Secondary")("prism",e.prismCode.accordion5),o(),a("accordionId","accordionSecondaryExample")("accodionClass","accordion-secondary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(5),a("reuseCode",e.reusableCode.accordionReuse)("title","Primary")("prism",e.prismCode.accordion6),o(),a("accordionId","accordionPrimarySolidExample")("accodionClass","accordion-solid-primary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("title","Secondary")("prism",e.prismCode.accordion7),o(),a("accordionId","accordionSecondarySolidExample")("accodionClass","accordion-solid-secondary")("closeOthers",!0)("accordionItems",e.basicAccordions),o(3),a("reuseCode",e.reusableCode.accordionReuse)("title","Custom Accordion")("prism",e.prismCode.accordion13),o(),a("accordionId","customizedAccordion")("accodionClass","customized-accordion accordions-items-seperate")("closeOthers",!0)("accordionItems",e.customAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("title","Custom Icon Accordion")("prism",e.prismCode.accordion12),o(),a("accordionId","accordioncustomicon1Example")("accodionClass","accordion-customicon1 accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(5),a("reuseCode",e.reusableCode.accordionReuse)("title","Primary")("prism",e.prismCode.accordion8),o(),a("accordionId","accordionprimaryborderExample")("accodionClass","accordion-border-primary accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("title","Success")("prism",e.prismCode.accordion9),o(),a("accordionId","accordionsuccessborderExample")("accodionClass","accordion-border-success accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(3),a("reuseCode",e.reusableCode.accordionReuse)("title","Without Icon")("prism",e.prismCode.accordion15),o(),a("accordionId","accordioniconnoIconExample")("accodionClass","accordionicon-none accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(2),a("reuseCode",e.reusableCode.accordionReuse)("title","Left Aligned Icons")("prism",e.prismCode.accordion14),o(),a("accordionId","accordioniconLeftExample")("accodionClass","accordionicon-left accordions-items-seperate")("closeOthers",!0)("accordionItems",e.basicAccordions),o(3),a("reuseCode",e.reusableCode.accordionReuse)("title","Horizontal Collapse")("prism",e.prismCode.accordion16),o(),a("items",e.collapseItems1),o(3),a("reuseCode",e.reusableCode.accordionReuse)("title","Example")("prism",e.prismCode.accordion10),o(2),p("aria-expanded",!e.isCollapsed),o(2),p("aria-expanded",!e.isCollapsed),o(2),k("ngbCollapse",e.isCollapsed),o(5),a("reuseCode",e.reusableCode.accordionReuse)("title","Targets Collapse")("prism",e.prismCode.accordion11),o(2),p("aria-expanded",!e.isCollapsed1)("aria-controls","multiCollapseExample1"),o(2),p("aria-expanded",!e.isCollapsed2)("aria-controls","multiCollapseExample2"),o(2),p("aria-expanded",!e.isCollapsed1&&!e.isCollapsed2)("aria-controls","multiCollapseExample1 multiCollapseExample2"),o(4),a("ngbCollapse",e.isCollapsed1),o(4),a("ngbCollapse",e.isCollapsed2))},dependencies:[D,G,C,f,W,T,q],encapsulation:2,data:{animation:[N("horizontalCollapse",[I("true",S({width:"0"})),I("false",S({width:"230px"})),R("true <=> false",F("300ms ease-in-out"))])]}})};export{U as Accordion};
