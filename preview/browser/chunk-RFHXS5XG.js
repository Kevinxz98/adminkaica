import{a as E}from"./chunk-NAPTRZ5S.js";import{a as L}from"./chunk-LCA5ED7I.js";import{c as w}from"./chunk-2D66LXFZ.js";import{Ca as I,W as h,Y as b,Z as v,_ as S,qa as y,ra as f,sa as x,ta as q}from"./chunk-42GC3H2R.js";import{Cb as a,Db as e,Eb as i,Fb as p,Wa as s,ec as n,ib as g,jc as t,yc as d}from"./chunk-DT3HLPPQ.js";import"./chunk-2EBTC7QX.js";import{f as D}from"./chunk-VB56BUGO.js";var c={};D(c,{scrollspy1:()=>N,scrollspy2:()=>A,scrollspy3:()=>M,scrollspy4:()=>C});var N=`<div class="bd-example">
<div class="row">
    <div class="col-md-2 col-12">
        <div id="list-example" class="list-group">
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="[spy, 'items-1']">Item 1</a>
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items-2">Item
                2</a>
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items-3">Item
                3</a>
            <a  class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items">Item
                4</a>
        </div>
    </div>
    <div class="col-md-10 col-12">
        <div ngbScrollSpy #spy="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#list-example"
            data-bs-smooth-scroll="true" class="scrollspy-example-3"
            tabindex="0">
            <h6 ngbScrollSpyFragment="items-1" class="fw-medium" id="list-item-01">Item 1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-2" class="fw-medium" id="list-item-02">Item 2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-3" class="fw-medium" id="list-item-03">Item 3</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-4" class="fw-medium" id="list-item-04">Item 4</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
        </div>
    </div>
</div>
</div>`,A=` <div class="row">
<div class="col-md-3 col-sm-4">
    <nav  [ngbScrollSpyMenu]="spy1" id="navbar-example3"
        class="navbar bg-light flex-column align-items-stretch p-3">
        <nav class="nav nav-pills flex-column">
            <a class="nav-link" ngbScrollSpyItem="nested-1">Item 1</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-1-1" parent="nested-1">Item 1-1</a>
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-1-2" parent="nested-1">Item 1-2</a>
            </nav>
            <a class="nav-link"  ngbScrollSpyItem="nested-2">Item 2</a>
            <a class="nav-link" ngbScrollSpyItem="nested-3">Item 3</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-3-1" parent="nested-3">Item 3-1</a>
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-3-2" parent="nested-3">Item 3-2</a>
            </nav>
        </nav>
    </nav>
</div>
<div class="col-md-9 col-sm-8">
    <div ngbScrollSpy #spy1="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#navbar-example3"
        data-bs-smooth-scroll="true" tabindex="0" class="scrollspy-example-2">
        <div id="item-1">
            <h6 ngbScrollSpyFragment="nested-1" class="fw-medium">Item 1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores
                explicabo in delectus nostrum aut ab quasi placeat facilis?
                Laborum
                corporis eaque ipsum laboriosam animi possimus.</p>
        </div>
        <div id="item-1-1">
            <h6 ngbScrollSpyFragment="nested-1-1" class="fw-medium">Item 1-1</h6>
            <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat
                minus
                distinctio itaque odit magnam voluptate quos ipsam ab
                provident!
                Facere
                minus aperiam non architecto sequi, temporibus aspernatur
                harum
                consequatur, laboriosam nam ratione adipisci? Doloremque sed
                ducimus
                aliquid dicta beatae! Quasi voluptas aliquam aliquid error
                reiciendis
                enim! Iure obcaecati consequatur harum suscipit delectus.
            </p>
        </div>
        <div id="item-1-2">
            <h6 ngbScrollSpyFragment="nested-1-2" class="fw-medium">Item 1-2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore
                eius
                consectetur quae modi iste voluptatibus a quidem amet ea
                corporis neque
                non quasi nesciunt sunt numquam minima maiores eveniet
                ratione
                soluta
                temporibus, quam harum nostrum. Laudantium repellat, dolores
                blanditiis
                iusto tempora corrupti. Distinctio, nesciunt. Tenetur
                sapiente
                cumque,
                totam veniam repellat alias quasi, beatae eveniet quas eos,
                ea
                aperiam!
            </p>
        </div>
        <div id="item-2">
            <h6 ngbScrollSpyFragment="nested-2" class="fw-medium">Item 2</h6>
            <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eius,
                itaque
                debitis. Numquam facere sunt adipisci dolores ratione quo
                magni.
                Non,
                officiis minima deserunt consequatur, repellendus nihil
                laudantium
                aperiam laborum eaque animi maxime porro saepe nisi quos.
                Corporis hic
                tempore illo reiciendis autem, necessitatibus debitis sed
                molestias.</p>
        </div>
        <div id="item-3">
            <h6 ngbScrollSpyFragment="nested-3" class="fw-medium">Item 3</h6>
            <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fuga
                voluptate
                sequi exercitationem voluptatem, commodi dicta nostrum
                atque,
                praesentium consequatur eos at vero animi neque deleniti
                ipsa.
                Aliquid
                facere saepe pariatur porro nihil blanditiis recusandae
                dolor
                fuga?
                Iusto et omnis neque doloremque, cum modi officia facilis
                placeat
                repellendus obcaecati mollitia! Id aperiam officiis vitae.
                Fugit
                quo id
                veritatis commodi maiores numquam nostrum necessitatibus
                eaque,
                quia
                exercitationem distinctio ipsa eum, nihil atque perferendis
                dicta,
                mollitia sed dignissimos incidunt voluptas ab tempore
                laborum?
                Fugiat,
                deserunt. Harum, repellat praesentium! Fuga!</p>
        </div>
        <div id="item-3-1">
            <h6 ngbScrollSpyFragment="nested-3-1" class="fw-medium">Item 3-1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam
                non
                deleniti saepe voluptate, est praesentium ducimus sapiente
                aut
                dignissimos voluptas blanditiis reiciendis earum accusantium
                id
                ex!</p>
        </div>
        <div id="item-3-2">
            <h6 ngbScrollSpyFragment="nested-3-2" class="fw-medium">Item 3-2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                est.
                Blanditiis cupiditate voluptate obcaecati eligendi iusto
                amet.
                Cupiditate laborum, itaque laboriosam culpa sunt eligendi.
            </p>
        </div>
    </div>
</div>
</div>`,M=`<nav id="navbar-example2" class="navbar navbar-light bg-light px-3 mb-3">
<ul [ngbScrollSpyMenu]="s" class="nav nav-pills d-sm-flex d-block">
    <li class="nav-item">
        <a class="nav-link" ngbScrollSpyItem="basic-1">First</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" ngbScrollSpyItem="basic-2">Second</a>
    </li>
    <li ngbDropdown class="nav-item dropdown">
        <button ngbDropdownToggle class="nav-link dropdown-toggle" ngbScrollSpyItem="basic-p1" data-bs-toggle="dropdown" href="javascript:void(0);"
        role="button" aria-expanded="false">Dropdown</button>
        <ul ngbDropdownMenu >
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-3" parent="basic-p1">Third</button></li>
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-4" parent="basic-p1">Fourth</button></li>
            <li><hr class="dropdown-divider" /></li>
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-5" parent="basic-p1">Fifth</button></li>
        </ul>
    </li>
</ul>
</nav>
<div ngbScrollSpy #s="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
class="scrollspy-example bg-light p-3 rounded-2"
data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
<h6 ngbScrollSpyFragment="basic-1" class="fw-medium" id="scrollspyHeading1">First heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa
    alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
</p>
<h6 ngbScrollSpyFragment="basic-2" class="fw-medium" id="scrollspyHeading2">Second heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam
    ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni
</p>
<h6 ngbScrollSpyFragment="basic-3" class="fw-medium" id="scrollspyHeading3">Third heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis
    et
    quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi
    aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo?
</p>
<h6 ngbScrollSpyFragment="basic-4" class="fw-medium" id="scrollspyHeading4">Fourth heading</h6>
<p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
    pariatur modi corporis aspernatur eveniet?</p>
<h6 ngbScrollSpyFragment="basic-5" class="fw-medium" id="scrollspyHeading5">Fifth heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates
    consequuntur ipsum eos, magni vitae tempore suscipit excepturi
    blanditiis!
</p>
</div>`,C=`<div class="bd-example">
<div class="row">
    <div class="col-md-2 col-12">
        <div id="simple-list-example"
            class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-1">Item 1</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-2">Item 2</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-3">Item 3</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-4">Item 4</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-5">Item 5</a>
        </div>
    </div>
    <div class="col-md-10 col-12">
        <div ngbScrollSpy #spy2="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#simple-list-example"
            data-bs-offset="0" data-bs-smooth-scroll="true"
            class="scrollspy-example-4" tabindex="0">
            <h6 ngbScrollSpyFragment="items-1" class="fw-medium" id="simple-list-item-1">Item 1</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-2" class="fw-medium" id="simple-list-item-2">Item 2</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-3" class="fw-medium" id="simple-list-item-3">Item 3</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-4" class="fw-medium" id="simple-list-item-4">Item 4</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-5" class="fw-medium" id="simple-list-item-5">Item 5</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
        </div>
    </div>
</div>
</div>`;var H=m=>[m,"items-1"],z=m=>[m,"items-4"],F=class m{prismCode=c;static \u0275fac=function(o){return new(o||m)};static \u0275cmp=g({type:m,selectors:[["app-scrollspy"]],decls:183,vars:24,consts:[["spy2","ngbScrollSpy"],["spy","ngbScrollSpy"],["spy1","ngbScrollSpy"],["s","ngbScrollSpy"],["title","Advanced UI","active_item","Scrollspy",3,"subtitle"],[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[1,"bd-example"],[1,"col-md-2","col-12"],["id","simple-list-example",1,"d-flex","flex-column","gap-2","simple-list-example-scrollspy","text-center"],["fragment","items-1",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-2",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-3",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-4",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-5",1,"p-2","rounded",3,"ngbScrollSpyItem"],[1,"col-md-10","col-12"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#simple-list-example","data-bs-offset","0","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-4"],["ngbScrollSpyFragment","items-1","id","simple-list-item-1",1,"fw-medium"],[1,"text-muted"],["ngbScrollSpyFragment","items-2","id","simple-list-item-2",1,"fw-medium"],["ngbScrollSpyFragment","items-3","id","simple-list-item-3",1,"fw-medium"],["ngbScrollSpyFragment","items-4","id","simple-list-item-4",1,"fw-medium"],["ngbScrollSpyFragment","items-5","id","simple-list-item-5",1,"fw-medium"],["id","list-example",1,"list-group"],[1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["fragment","items-2",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["fragment","items-3",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["fragment","items",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#list-example","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-3"],["ngbScrollSpyFragment","items-1","id","list-item-01",1,"fw-medium"],["ngbScrollSpyFragment","items-2","id","list-item-02",1,"fw-medium"],["ngbScrollSpyFragment","items-3","id","list-item-03",1,"fw-medium"],["ngbScrollSpyFragment","items-4","id","list-item-04",1,"fw-medium"],[1,"col-md-3","col-sm-4"],["id","navbar-example3",1,"navbar","bg-light","flex-column","align-items-stretch","p-3",3,"ngbScrollSpyMenu"],[1,"nav","nav-pills","flex-column"],["ngbScrollSpyItem","nested-1",1,"nav-link"],["ngbScrollSpyItem","nested-1-1","parent","nested-1",1,"nav-link","ms-3","my-1"],["ngbScrollSpyItem","nested-1-2","parent","nested-1",1,"nav-link","ms-3","my-1"],["ngbScrollSpyItem","nested-2",1,"nav-link"],["ngbScrollSpyItem","nested-3",1,"nav-link"],["ngbScrollSpyItem","nested-3-1","parent","nested-3",1,"nav-link","ms-3","my-1"],["ngbScrollSpyItem","nested-3-2","parent","nested-3",1,"nav-link","ms-3","my-1"],[1,"col-md-9","col-sm-8"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#navbar-example3","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-2"],["id","item-1"],["ngbScrollSpyFragment","nested-1",1,"fw-medium"],["id","item-1-1"],["ngbScrollSpyFragment","nested-1-1",1,"fw-medium"],["id","item-1-2"],["ngbScrollSpyFragment","nested-1-2",1,"fw-medium"],["id","item-2"],["ngbScrollSpyFragment","nested-2",1,"fw-medium"],["id","item-3"],["ngbScrollSpyFragment","nested-3",1,"fw-medium"],["id","item-3-1"],["ngbScrollSpyFragment","nested-3-1",1,"fw-medium"],["id","item-3-2"],["ngbScrollSpyFragment","nested-3-2",1,"fw-medium"],["id","navbar-example2",1,"navbar","navbar-light","bg-light","px-3","mb-3","nav-scrollspy"],[1,"nav","nav-pills","d-sm-flex","d-block",3,"ngbScrollSpyMenu"],[1,"nav-item","mb-sm-0","mb-1"],["ngbScrollSpyItem","basic-1",1,"nav-link"],["ngbScrollSpyItem","basic-2",1,"nav-link"],["ngbDropdown","",1,"nav-item","dropdown"],["ngbDropdownToggle","","ngbScrollSpyItem","basic-p1","data-bs-toggle","dropdown","role","button","aria-expanded","false",1,"nav-link","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu"],["ngbDropdownItem","","ngbScrollSpyItem","basic-3","parent","basic-p1",1,"dropdown-item"],["ngbDropdownItem","","ngbScrollSpyItem","basic-4","parent","basic-p1",1,"dropdown-item"],[1,"dropdown-divider"],["ngbDropdownItem","","ngbScrollSpyItem","basic-5","parent","basic-p1",1,"dropdown-item"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#navbar-example2","data-bs-offset","0","data-bs-root-margin","0px 0px -40%","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example","bg-light","p-3","rounded-2"],["ngbScrollSpyFragment","basic-1","id","scrollspyHeading1",1,"fw-medium"],["ngbScrollSpyFragment","basic-2","id","scrollspyHeading2",1,"fw-medium"],["ngbScrollSpyFragment","basic-3","id","scrollspyHeading3",1,"fw-medium"],["ngbScrollSpyFragment","basic-4","id","scrollspyHeading4",1,"fw-medium"],["ngbScrollSpyFragment","basic-5","id","scrollspyHeading5",1,"fw-medium"]],template:function(o,r){if(o&1&&(p(0,"app-breadcrumb",4),e(1,"div",5)(2,"div",6)(3,"app-showcode-card",7)(4,"div",8)(5,"div",5)(6,"div",9)(7,"div",10)(8,"a",11),t(9,"Item 1"),i(),e(10,"a",12),t(11,"Item 2"),i(),e(12,"a",13),t(13,"Item 3"),i(),e(14,"a",14),t(15,"Item 4"),i(),e(16,"a",15),t(17,"Item 5"),i()()(),e(18,"div",16)(19,"div",17,0)(21,"h6",18),t(22,"Item 1"),i(),e(23,"p",19),t(24,"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."),i(),e(25,"h6",20),t(26,"Item 2"),i(),e(27,"p",19),t(28,"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."),i(),e(29,"h6",21),t(30,"Item 3"),i(),e(31,"p",19),t(32,"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."),i(),e(33,"h6",22),t(34,"Item 4"),i(),e(35,"p",19),t(36,"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."),i(),e(37,"h6",23),t(38,"Item 5"),i(),e(39,"p",19),t(40,"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting."),i()()()()()()()(),e(41,"div",6)(42,"app-showcode-card",7)(43,"div",8)(44,"div",5)(45,"div",9)(46,"div",24)(47,"a",25),t(48,"Item 1"),i(),e(49,"a",26),t(50,"Item 2"),i(),e(51,"a",27),t(52,"Item 3"),i(),e(53,"a",28),t(54,"Item 4"),i()()(),e(55,"div",16)(56,"div",29,1)(58,"h6",30),t(59,"Item 1"),i(),e(60,"p",19),t(61,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas."),i(),e(62,"h6",31),t(63,"Item 2"),i(),e(64,"p",19),t(65,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas."),i(),e(66,"h6",32),t(67,"Item 3"),i(),e(68,"p",19),t(69,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas."),i(),e(70,"h6",33),t(71,"Item 4"),i(),e(72,"p",19),t(73,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas."),i()()()()()()(),e(74,"div",5)(75,"div",6)(76,"app-showcode-card",7)(77,"div",5)(78,"div",34)(79,"nav",35)(80,"nav",36)(81,"a",37),t(82,"Item 1"),i(),e(83,"nav",36)(84,"a",38),t(85,"Item 1-1"),i(),e(86,"a",39),t(87,"Item 1-2"),i()(),e(88,"a",40),t(89,"Item 2"),i(),e(90,"a",41),t(91,"Item 3"),i(),e(92,"nav",36)(93,"a",42),t(94,"Item 3-1"),i(),e(95,"a",43),t(96,"Item 3-2"),i()()()()(),e(97,"div",44)(98,"div",45,2)(100,"div",46)(101,"h6",47),t(102,"Item 1"),i(),e(103,"p",19),t(104,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo in delectus nostrum aut ab quasi placeat facilis? Laborum corporis eaque ipsum laboriosam animi possimus."),i()(),e(105,"div",48)(106,"h6",49),t(107,"Item 1-1"),i(),e(108,"p",19),t(109,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat minus distinctio itaque odit magnam voluptate quos ipsam ab provident! Facere minus aperiam non architecto sequi, temporibus aspernatur harum consequatur, laboriosam nam ratione adipisci? Doloremque sed ducimus aliquid dicta beatae! Quasi voluptas aliquam aliquid error reiciendis enim! Iure obcaecati consequatur harum suscipit delectus. "),i()(),e(110,"div",50)(111,"h6",51),t(112,"Item 1-2"),i(),e(113,"p",19),t(114,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius consectetur quae modi iste voluptatibus a quidem amet ea corporis neque non quasi nesciunt sunt numquam minima maiores eveniet ratione soluta temporibus, quam harum nostrum. Laudantium repellat, dolores blanditiis iusto tempora corrupti. Distinctio, nesciunt. Tenetur sapiente cumque, totam veniam repellat alias quasi, beatae eveniet quas eos, ea aperiam! "),i()(),e(115,"div",52)(116,"h6",53),t(117,"Item 2"),i(),e(118,"p",19),t(119,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, itaque debitis. Numquam facere sunt adipisci dolores ratione quo magni. Non, officiis minima deserunt consequatur, repellendus nihil laudantium aperiam laborum eaque animi maxime porro saepe nisi quos. Corporis hic tempore illo reiciendis autem, necessitatibus debitis sed molestias."),i()(),e(120,"div",54)(121,"h6",55),t(122,"Item 3"),i(),e(123,"p",19),t(124,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga!"),i()(),e(125,"div",56)(126,"h6",57),t(127,"Item 3-1"),i(),e(128,"p",19),t(129,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam non deleniti saepe voluptate, est praesentium ducimus sapiente aut dignissimos voluptas blanditiis reiciendis earum accusantium id ex!"),i()(),e(130,"div",58)(131,"h6",59),t(132,"Item 3-2"),i(),e(133,"p",19),t(134,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est. Blanditiis cupiditate voluptate obcaecati eligendi iusto amet. Cupiditate laborum, itaque laboriosam culpa sunt eligendi. "),i()()()()()()()(),e(135,"div",5)(136,"div",6)(137,"app-showcode-card",7)(138,"nav",60)(139,"ul",61)(140,"li",62)(141,"a",63),t(142,"First"),i()(),e(143,"li",62)(144,"a",64),t(145,"Second"),i()(),e(146,"li",65)(147,"a",66),t(148,"Dropdown"),i(),e(149,"ul",67)(150,"li")(151,"a",68),t(152,"Third"),i()(),e(153,"li")(154,"a",69),t(155,"Fourth"),i()(),e(156,"li"),p(157,"hr",70),i(),e(158,"li")(159,"a",71),t(160,"Fifth"),i()()()()()(),e(161,"div",72,3)(163,"h6",73),t(164,"First heading"),i(),e(165,"p",19),t(166,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, "),i(),e(167,"h6",74),t(168,"Second heading"),i(),e(169,"p",19),t(170,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni "),i(),e(171,"h6",75),t(172,"Third heading"),i(),e(173,"p",19),t(174,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis et quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo? "),i(),e(175,"h6",76),t(176,"Fourth heading"),i(),e(177,"p",19),t(178,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora pariatur modi corporis aspernatur eveniet?"),i(),e(179,"h6",77),t(180,"Fifth heading"),i(),e(181,"p",19),t(182,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates consequuntur ipsum eos, magni vitae tempore suscipit excepturi blanditiis! "),i()()()()()),o&2){let l=n(20),u=n(57),T=n(99),k=n(162);a("subtitle",!1),s(3),a("title","Simple anchors")("prism",r.prismCode.scrollspy4),s(5),a("ngbScrollSpyItem",l),s(2),a("ngbScrollSpyItem",l),s(2),a("ngbScrollSpyItem",l),s(2),a("ngbScrollSpyItem",l),s(2),a("ngbScrollSpyItem",l),s(26),a("title","List group")("prism",r.prismCode.scrollspy1),s(5),a("ngbScrollSpyItem",d(20,H,u)),s(2),a("ngbScrollSpyItem",u),s(2),a("ngbScrollSpyItem",u),s(2),a("ngbScrollSpyItem",d(22,z,u)),s(23),a("title","Nested nav")("prism",r.prismCode.scrollspy2),s(3),a("ngbScrollSpyMenu",T),s(58),a("title","Example in navbar")("prism",r.prismCode.scrollspy3),s(2),a("ngbScrollSpyMenu",k)}},dependencies:[w,L,I,S,v,b,h,x,y,q,f,E],encapsulation:2})};export{F as Scrollspy};
