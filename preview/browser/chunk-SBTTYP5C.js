import{a as A}from"./chunk-NAPTRZ5S.js";import{a as z}from"./chunk-6YTXCPIZ.js";import"./chunk-MUVY2KRP.js";import{a as M}from"./chunk-LCA5ED7I.js";import{c as w}from"./chunk-2D66LXFZ.js";import{A as N,B as U,C as D,E as O,F as G,G as L,f as g,h as x,j as n,m as q,n as E,p as F,t as _,x as T,y as P,z as V}from"./chunk-42GC3H2R.js";import{Cb as s,Db as t,Eb as e,Fb as r,Tb as f,Wa as o,eb as C,fd as h,ib as k,jc as a,sd as y,wb as m,xb as c,yc as v}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as Z}from"./chunk-VB56BUGO.js";var b={};Z(b,{validationTS:()=>R,validationTS1:()=>I,validationTS2:()=>Y,validationTS3:()=>j,validationTS4:()=>H});var R=` 
<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark"
        required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto"
        required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">&#64;</span>
        <input type="text" class="form-control" id="validationCustomUsername"
            aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
            Please choose a username.
        </div>
    </div>
</div>
<div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div class="invalid-feedback">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value=""
            id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`,I=` 
<form class="row g-3">
<div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01"
        value="Mark" required>
</div>
<div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02"
        value="Otto" required>
</div>
<div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">&#64;</span>
        <input type="text" class="form-control" id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2" required>
    </div>
</div>
<div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
</div>
<div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
</div>
<div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value=""
            id="invalidCheck2" required>
        <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
        </label>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`,Y=` 
<form class="row g-3">
<div class="col-md-4">
    <label for="validationServer01" class="form-label">First
        name</label>
    <input type="text" class="form-control is-valid"
        id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationServer02" class="form-label">Last
        name</label>
    <input type="text" class="form-control is-valid"
        id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationServerUsername"
        class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend3"></span>
        <input type="text" class="form-control is-invalid"
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required>
        <div id="validationServerUsernameFeedback"
            class="invalid-feedback">
            Please choose a username.
        </div>
    </div>
</div>
<div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid"
        id="validationServer03"
        aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04"
        aria-describedby="validationServer04Feedback" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid"
        id="validationServer05"
        aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox"
            value="" id="invalidCheck3"
            aria-describedby="invalidCheck3Feedback" required>
        <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
        </label>
        <div id="invalidCheck3Feedback" class="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form> `,j=` 
<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First
        name</label>
    <input type="text" class="form-control" id="validationTooltip01"
        value="Mark" required>
    <div class="valid-tooltip">
        Looks good!
    </div>
</div>
<div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last
        name</label>
    <input type="text" class="form-control" id="validationTooltip02"
        value="Otto" required>
    <div class="valid-tooltip">
        Looks good!
    </div>
</div>
<div class="col-md-4 position-relative">
    <label for="validationTooltipUsername"
        class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text"
            id="validationTooltipUsernamePrepend"></span>
        <input type="text" class="form-control"
            id="validationTooltipUsername"
            aria-describedby="validationTooltipUsernamePrepend"
            required>
        <div class="invalid-tooltip">
            Please choose a unique and valid username.
        </div>
    </div>
</div>
<div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03"
        required>
    <div class="invalid-tooltip">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div class="invalid-tooltip">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05"
        required>
    <div class="invalid-tooltip">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form> `,H=`
<form class="was-validated">
                            <div class="mb-3">
                                <label for="validationTextarea" class="form-label">Textarea</label>
                                <textarea class="form-control is-invalid" id="validationTextarea"
                                    placeholder="Required example textarea" required=""></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>

                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="validationFormCheck1"
                                    required="">
                                <label class="form-check-label" for="validationFormCheck1">Check this
                                    checkbox</label>
                                <div class="invalid-feedback">Example invalid feedback text</div>
                            </div>

                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="validationFormCheck2"
                                    name="radio-stacked" required="">
                                <label class="form-check-label" for="validationFormCheck2">Toggle this
                                    radio</label>
                            </div>
                            <div class="form-check mb-3">
                                <input type="radio" class="form-check-input" id="validationFormCheck3"
                                    name="radio-stacked" required="">
                                <label class="form-check-label" for="validationFormCheck3">Or toggle
                                    this
                                    other radio</label>
                                <div class="invalid-feedback">More example invalid feedback text</div>
                            </div>

                            <div class="mb-3">
                                <select class="form-select" required="" aria-label="select example">
                                    <option value="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div class="invalid-feedback">Example invalid select feedback</div>
                            </div>

                            <div class="mb-3">
                                <input type="file" class="form-control" aria-label="file example"
                                    required="">
                                <div class="invalid-feedback">Example invalid form file feedback</div>
                            </div>

                            <div class="mb-3">
                                <button class="btn btn-primary" type="submit" disabled="">Submit
                                    form</button>
                            </div>
                        </form>
`;var u=l=>({"is-invalid":l});function J(l,d){l&1&&(t(0,"div",8)(1,"div"),a(2,"Looks good!"),e()())}function K(l,d){l&1&&(t(0,"div",9),a(1,"Firstname is required "),e())}function Q(l,d){l&1&&(t(0,"div",9),a(1,"lastname is required "),e())}function W(l,d){l&1&&(t(0,"div",9),a(1,"username is required "),e())}function X(l,d){l&1&&(t(0,"div",9),a(1," Please provide a valid city."),e())}function $(l,d){l&1&&(t(0,"div",9),a(1,"Please select a valid state...."),e())}function ee(l,d){l&1&&(t(0,"div",9),a(1,"zip is required"),e())}function ie(l,d){l&1&&(t(0,"div",9),a(1," Accept Terms is required "),e())}function te(l,d){l&1&&(t(0,"div",32),a(1," First Name is required. "),e())}function ae(l,d){l&1&&(t(0,"div",32),a(1," Last Name is required. "),e())}function le(l,d){l&1&&(t(0,"div",32),a(1," User Name is required. "),e())}function oe(l,d){l&1&&(t(0,"div",32),a(1," City Name is required. "),e())}function re(l,d){l&1&&(t(0,"div",32),a(1," State Name is required. "),e())}function ne(l,d){l&1&&(t(0,"div",32),a(1," Zip is required. "),e())}function de(l,d){l&1&&(t(0,"div",32),a(1," Accept Terms is required "),e())}function se(l,d){l&1&&(t(0,"div",72),a(1,"Firstname is required "),e())}function me(l,d){l&1&&(t(0,"div",73),a(1," Looks good! "),e())}function ce(l,d){l&1&&(t(0,"div",72),a(1,"Last name is required "),e())}function ve(l,d){l&1&&(t(0,"div",72),a(1,"Username is required "),e())}function ue(l,d){l&1&&(t(0,"div",72),a(1,"Please Provide a valid city "),e())}function pe(l,d){l&1&&(t(0,"div",72),a(1,"Please Provide a valid State "),e())}function fe(l,d){l&1&&(t(0,"div",72),a(1,"Please Provide a valid Zip "),e())}var B=class l{constructor(d){this.formBuilder=d}prismCode=b;form;submitted=!1;submitted1=!0;submitted3=!1;stateOptions=[{value:1,label:"Choose..."},{value:2,label:"..."}];ngOnInit(){this.form=this.formBuilder.group({fullname:["",n.required],lastname:["",[n.required,n.minLength(6),n.maxLength(20)]],city:["",n.required],state:["",n.required],username:["",n.required],zip:["",n.required],acceptTerms:[!1,n.requiredTrue]}),this.form4=this.formBuilder.group({textarea:["",n.required],checkbox:["",n.required],radiostacked:["",n.required],select:["",n.required],feedback:["",n.required]}),this.form3=this.formBuilder.group({name:["",n.required],lname:["",[n.required,n.minLength(6),n.maxLength(20)]],cit:["",n.required],stat:["",n.required],username:["",n.required],zip:["",n.required]}),this.form2=this.formBuilder.group({firstname:["",n.required],lastname:["",n.required],username:["",n.required],city:["",n.required],zip:["",n.required],checkbox:[!1,n.requiredTrue],state:["",n.required]})}get f(){return this.form.controls}OnSubmit(){this.submitted=!0,this.form.invalid}form4;get f1(){return this.form4.controls}Submit(){this.submitted=!0,this.form4.invalid}form3;get f3(){return this.form3.controls}Submit3(){this.submitted3=!0,console.log("one"),this.form3.invalid}form2;Submit1(){this.form2.valid?console.log("Form submitted successfully!"):console.log("Form is invalid!")}static \u0275fac=function(p){return new(p||l)(C(O))};static \u0275cmp=k({type:l,selectors:[["app-form-validation"]],decls:236,vars:83,consts:[["title","Forms","active_item","Form Validation",3,"subtitle"],[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-4"],["for","validationCustom01",1,"form-label"],["type","text","formControlName","fullname","id","validationCustom01","required","","placeholder","Mark",1,"form-control","is-invalid",3,"ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],["for","validationCustom02",1,"form-label"],["type","text","id","last","formControlName","lastname","id","validationCustom02","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationCustomUsername",1,"form-label"],[1,"input-group"],["id","inputGroupPrepend",1,"input-group-text"],["type","text","formControlName","username","id","validationCustomUsername","aria-describedby","inputGroupPrepend","required","",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","validationCustom03",1,"form-label"],["type","text","formControlName","city","id","validationCustom03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3"],["for","validationCustom04",1,"form-label"],["id","validationCustom04","required","",1,"",3,"placeholder","options","ngClass"],["for","validationCustom05",1,"form-label"],["type","text","formControlName","zip","id","validationCustom05","required","",1,"form-control",3,"ngClass"],[1,"col-12"],[1,"form-check"],["type","checkbox","value","","id","invalidCheck","formControlName","acceptTerms","required","",1,"form-check-input",3,"ngClass"],["for","invalidCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],["novalidate","",1,"row","g-3",3,"ngSubmit","formGroup"],["for","validationDefault01",1,"form-label"],["type","text","formControlName","firstname","placeholder","Mark","id","validationDefault01",1,"my-auto","ti-form-input","form-control"],[1,"text-danger"],["for","validationDefault02",1,"form-label"],["type","text","formControlName","lastname","id","validationDefault02","placeholder","Otto","value","Otto","required","",1,"form-control"],["for","validationDefaultUsername",1,"form-label"],["id","inputGroupPrepend2",1,"input-group-text"],["type","text","formControlName","username","id","validationDefaultUsername","aria-describedby","inputGroupPrepend2","required","",1,"form-control"],["for","validationDefault03",1,"form-label"],["type","text","formControlName","city","id","validationDefault03","required","",1,"form-control"],["for","validationDefault04",1,"form-label"],["for","validationDefault05",1,"form-label"],["type","text","formControlName","zip","id","validationDefault05","required","",1,"form-control"],["type","checkbox","value","","formControlName","checkbox","id","invalidCheck2","required","",1,"form-check-input"],["for","invalidCheck2",1,"form-check-label"],[1,"row","g-3"],["for","validationServer01",1,"form-label"],["type","text","id","validationServer01","value","Mark","required","",1,"form-control","is-valid"],["for","validationServer02",1,"form-label"],["type","text","id","validationServer02","value","Otto","required","",1,"form-control","is-valid"],[1,"col-md-4","custom-server"],["for","validationServerUsername",1,"form-label"],[1,"input-group","has-validation"],["id","inputGroupPrepend3",1,"input-group-text","input-group-text-first"],["type","text","id","validationServerUsername","aria-describedby","inputGroupPrepend3 validationServerUsernameFeedback","required","",1,"form-control","is-invalid"],["id","validationServerUsernameFeedback",1,"invalid-feedback"],["for","validationServer03",1,"form-label"],["type","text","id","validationServer03","aria-describedby","validationServer03Feedback","required","",1,"form-control","is-invalid"],["id","validationServer03Feedback",1,"invalid-feedback"],["for","validationServer04",1,"form-label"],["id","validationServer04","aria-describedby","validationServer04Feedback","required","",1,"form-select","is-invalid"],["selected","","disabled","","value",""],["id","validationServer04Feedback",1,"invalid-feedback"],["for","validationServer05",1,"form-label"],["type","text","id","validationServer05","aria-describedby","validationServer05Feedback","required","",1,"form-control","is-invalid"],["id","validationServer05Feedback",1,"invalid-feedback"],["type","checkbox","value","","id","invalidCheck3","aria-describedby","invalidCheck3Feedback","required","",1,"form-check-input","is-invalid"],["for","invalidCheck3",1,"form-check-label"],["id","invalidCheck3Feedback",1,"invalid-feedback"],[1,"col-md-4","position-relative"],["for","validationTooltip01",1,"form-label"],["type","text","formControlName","name","id","validationTooltip01","placeholder","Mark","value","Mark","required","",1,"form-control",3,"ngClass"],[1,"invalid-tooltip"],[1,"valid-tooltip"],["for","validationTooltip02",1,"form-label"],["type","text","formControlName","lname","id","validationTooltip02","value","Otto","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationTooltipUsername",1,"form-label"],["id","validationTooltipUsernamePrepend",1,"input-group-text"],["type","text","formControlName","username","id","validationTooltipUsername","aria-describedby","validationTooltipUsernamePrepend","required","",1,"form-control",3,"ngClass"],[1,"col-md-6","position-relative"],["for","validationTooltip03",1,"form-label"],["type","text","formControlName","cit","id","validationTooltip03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3","position-relative"],["for","validationTooltip04",1,"form-label"],["for","validationTooltip05",1,"form-label"],["type","text","formControlName","zip","id","validationTooltip05","required","",1,"form-control",3,"ngClass"],[1,"was-validated"],[1,"mb-3"],["for","validationTextarea",1,"form-label"],["id","validationTextarea","placeholder","Required example textarea","required","",1,"form-control","is-invalid"],[1,"form-check","mb-3"],["type","checkbox","id","validationFormCheck1","required","",1,"form-check-input"],["for","validationFormCheck1",1,"form-check-label"],["type","radio","id","validationFormCheck2","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck2",1,"form-check-label"],["type","radio","id","validationFormCheck3","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck3",1,"form-check-label"],["required","","aria-label","select example",1,"form-select"],["value",""],["value","1"],["value","2"],["value","3"],["type","file","aria-label","file example","required","",1,"form-control"]],template:function(p,i){p&1&&(r(0,"app-breadcrumb",0),t(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"form",4),f("ngSubmit",function(){return i.OnSubmit()}),t(5,"div",5)(6,"label",6),a(7,"First name"),e(),r(8,"input",7),m(9,J,3,0,"div",8),m(10,K,2,0,"div",9),e(),t(11,"div",5)(12,"label",10),a(13,"Last name"),e(),r(14,"input",11),m(15,Q,2,0,"div",9),e(),t(16,"div",5)(17,"label",12),a(18,"Username"),e(),t(19,"div",13)(20,"span",14),a(21,"@"),e(),r(22,"input",15),m(23,W,2,0,"div",9),e()(),t(24,"div",16)(25,"label",17),a(26,"City"),e(),r(27,"input",18),m(28,X,2,0,"div",9),e(),t(29,"div",19)(30,"label",20),a(31,"State"),e(),r(32,"spk-ng-select",21),m(33,$,2,0,"div",9),e(),t(34,"div",19)(35,"label",22),a(36,"Zip"),e(),r(37,"input",23),m(38,ee,2,0,"div",9),e(),t(39,"div",24)(40,"div",25),r(41,"input",26),t(42,"label",27),a(43," Agree to terms and conditions "),e(),m(44,ie,2,0,"div",9),e()(),t(45,"div",24)(46,"button",28),a(47,"Submit form"),e()()()()(),t(48,"div",2)(49,"app-showcode-card",3)(50,"form",29),f("ngSubmit",function(){return i.Submit1()}),t(51,"div",5)(52,"label",30),a(53,"First name"),e(),r(54,"input",31),m(55,te,2,0,"div",32),e(),t(56,"div",5)(57,"label",33),a(58,"Last name"),e(),r(59,"input",34),m(60,ae,2,0,"div",32),e(),t(61,"div",5)(62,"label",35),a(63,"Username"),e(),t(64,"div",13)(65,"span",36),a(66,"@"),e(),r(67,"input",37),e(),m(68,le,2,0,"div",32),e(),t(69,"div",16)(70,"label",38),a(71,"City"),e(),r(72,"input",39),m(73,oe,2,0,"div",32),e(),t(74,"div",19)(75,"label",40),a(76,"State"),e(),r(77,"spk-ng-select",21),m(78,re,2,0,"div",32),e(),t(79,"div",19)(80,"label",41),a(81,"Zip"),e(),r(82,"input",42),m(83,ne,2,0,"div",32),e(),t(84,"div",24)(85,"div",25),r(86,"input",43),t(87,"label",44),a(88," Agree to terms and conditions "),e(),m(89,de,2,0,"div",32),e()(),t(90,"div",24)(91,"button",28),a(92,"Submit form"),e()()()()()(),t(93,"div",1)(94,"div",2)(95,"div",1)(96,"div",2)(97,"app-showcode-card",3)(98,"form",45)(99,"div",5)(100,"label",46),a(101,"First name"),e(),r(102,"input",47),t(103,"div",8),a(104," Looks good! "),e()(),t(105,"div",5)(106,"label",48),a(107,"Last name"),e(),r(108,"input",49),t(109,"div",8),a(110," Looks good! "),e()(),t(111,"div",50)(112,"label",51),a(113,"Username"),e(),t(114,"div",52)(115,"span",53),a(116,"@"),e(),r(117,"input",54),e(),t(118,"div",55),a(119," Please choose a username. "),e()(),t(120,"div",16)(121,"label",56),a(122,"City"),e(),r(123,"input",57),t(124,"div",58),a(125," Please provide a valid city. "),e()(),t(126,"div",19)(127,"label",59),a(128,"State"),e(),t(129,"select",60)(130,"option",61),a(131,"Choose..."),e(),t(132,"option"),a(133,"..."),e()(),t(134,"div",62),a(135," Please select a valid state. "),e()(),t(136,"div",19)(137,"label",63),a(138,"Zip"),e(),r(139,"input",64),t(140,"div",65),a(141," Please provide a valid zip. "),e()(),t(142,"div",24)(143,"div",25),r(144,"input",66),t(145,"label",67),a(146," Agree to terms and conditions "),e(),t(147,"div",68),a(148," You must agree before submitting. "),e()()(),t(149,"div",24)(150,"button",28),a(151,"Submit form"),e()()()()(),t(152,"div",2)(153,"app-showcode-card",3)(154,"form",4),f("ngSubmit",function(){return i.Submit3()}),t(155,"div",69)(156,"label",70),a(157,"First name"),e(),r(158,"input",71),m(159,se,2,0,"div",72)(160,me,2,0,"div",73),e(),t(161,"div",69)(162,"label",74),a(163,"Last name"),e(),r(164,"input",75),m(165,ce,2,0,"div",72),e(),t(166,"div",69)(167,"label",76),a(168,"Username"),e(),t(169,"div",13)(170,"span",77),a(171,"@"),e(),r(172,"input",78),m(173,ve,2,0,"div",72),e()(),t(174,"div",79)(175,"label",80),a(176,"City"),e(),r(177,"input",81),m(178,ue,2,0,"div",72),e(),t(179,"div",82)(180,"label",83),a(181,"State"),e(),r(182,"spk-ng-select",21),m(183,pe,2,0,"div",72),e(),t(184,"div",82)(185,"label",84),a(186,"Zip"),e(),r(187,"input",85),m(188,fe,2,0,"div",72),e(),t(189,"div",24)(190,"button",28),a(191,"Submit form"),e()()()()()()(),t(192,"div",2)(193,"app-showcode-card",3)(194,"form",86)(195,"div",87)(196,"label",88),a(197,"Textarea"),e(),r(198,"textarea",89),t(199,"div",9),a(200," Please enter a message in the textarea. "),e()(),t(201,"div",90),r(202,"input",91),t(203,"label",92),a(204,"Check this checkbox"),e(),t(205,"div",9),a(206,"Example invalid feedback text"),e()(),t(207,"div",25),r(208,"input",93),t(209,"label",94),a(210,"Toggle this radio"),e()(),t(211,"div",90),r(212,"input",95),t(213,"label",96),a(214,"Or toggle this other radio"),e(),t(215,"div",9),a(216,"More example invalid feedback text"),e()(),t(217,"div",87)(218,"select",97)(219,"option",98),a(220,"Open this select menu"),e(),t(221,"option",99),a(222,"One"),e(),t(223,"option",100),a(224,"Two"),e(),t(225,"option",101),a(226,"Three"),e()(),t(227,"div",9),a(228,"Example invalid select feedback"),e()(),t(229,"div",87),r(230,"input",102),t(231,"div",9),a(232,"Example invalid form file feedback"),e()(),t(233,"div",87)(234,"button",28),a(235,"Submit form"),e()()()()()()),p&2&&(s("subtitle",!1),o(3),s("title","Custom Validation")("prism",i.prismCode.validationTS),o(),s("formGroup",i.form),o(4),s("ngClass",v(55,u,i.submitted&&i.f.fullname.errors)),o(),c(!i.submitted&&i.f.fullname.valid?9:-1),o(),c(i.submitted&&i.f.fullname.errors?10:-1),o(4),s("ngClass",v(57,u,i.submitted&&i.f.lastname.errors)),o(),c(i.submitted&&i.f.lastname.errors?15:-1),o(7),s("ngClass",v(59,u,i.submitted&&i.f.username.errors)),o(),c(i.submitted&&i.f.username.errors?23:-1),o(4),s("ngClass",v(61,u,i.submitted&&i.f.city.errors)),o(),c(i.submitted&&i.f.city.errors?28:-1),o(4),s("placeholder","Choose...")("options",i.stateOptions)("ngClass",v(63,u,i.submitted&&i.f.state.errors)),o(),c(i.submitted&&i.f.state.errors?33:-1),o(4),s("ngClass",v(65,u,i.submitted&&i.f.zip.errors)),o(),c(i.submitted&&i.f.zip.errors?38:-1),o(3),s("ngClass",v(67,u,i.submitted&&i.f.acceptTerms.errors)),o(3),c(i.submitted&&i.f.acceptTerms.errors?44:-1),o(5),s("title"," Browser Default Validation")("prism",i.prismCode.validationTS1),o(),s("formGroup",i.form2),o(5),c(i.form2.controls.firstname.invalid&&(i.form2.controls.firstname.dirty||i.form2.controls.firstname.touched)?55:-1),o(5),c(i.form2.controls.lastname.invalid&&(i.form2.controls.lastname.dirty||i.form2.controls.lastname.touched)?60:-1),o(8),c(i.form2.controls.username.invalid&&(i.form2.controls.username.dirty||i.form2.controls.username.touched)?68:-1),o(5),c(i.form2.controls.city.invalid&&(i.form2.controls.city.dirty||i.form2.controls.city.touched)?73:-1),o(4),s("placeholder","Choose...")("options",i.stateOptions)("ngClass",v(69,u,i.submitted1&&i.f.state.errors)),o(),c(i.form2.controls.state.invalid&&(i.form2.controls.state.dirty||i.form2.controls.state.touched)?78:-1),o(5),c(i.form2.controls.zip.invalid&&(i.form2.controls.zip.dirty||i.form2.controls.zip.touched)?83:-1),o(6),c(i.form2.controls.checkbox.invalid&&(i.form2.controls.checkbox.dirty||i.form2.controls.checkbox.touched)?89:-1),o(8),s("title","Server side Validation")("prism",i.prismCode.validationTS2),o(56),s("title"," Tooltips")("prism",i.prismCode.validationTS3),o(),s("formGroup",i.form3),o(4),s("ngClass",v(71,u,i.submitted3&&i.f3.name.errors)),o(),c(i.submitted3&&i.f3.name.errors?159:160),o(5),s("ngClass",v(73,u,i.submitted3&&i.f3.lname.errors)),o(),c(i.submitted3&&i.f3.lname.errors?165:-1),o(7),s("ngClass",v(75,u,i.submitted3&&i.f3.username.errors)),o(),c(i.submitted3&&i.f3.username.errors?173:-1),o(4),s("ngClass",v(77,u,i.submitted3&&i.f3.cit.errors)),o(),c(i.submitted3&&i.f3.cit.errors?178:-1),o(4),s("placeholder","Choose...")("options",i.stateOptions)("ngClass",v(79,u,i.submitted3&&i.f.state.errors)),o(),c(i.submitted3&&i.f3.stat.errors?183:-1),o(4),s("ngClass",v(81,u,i.submitted3&&i.f3.zip.errors)),o(),c(i.submitted3&&i.f3.zip.errors?188:-1),o(5),s("title"," Supported elements")("prism",i.prismCode.validationTS4))},dependencies:[w,h,M,y,G,_,V,N,x,g,q,E,U,D,F,L,T,P,A,z],styles:[".has-success[_ngcontent-%COMP%]{border:1px solid #19b159}.has-error[_ngcontent-%COMP%]{border:1px solid #f16d75}  .ng-dropdown-panel{z-index:3!important}"]})};export{B as FormValidation};
