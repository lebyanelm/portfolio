(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1258],{1258:(n,t,e)=>{"use strict";e.r(t),e.d(t,{HomePageModule:()=>P});var o=e(1116),i=e(6611),a=e(1462),s=e(8619),r=e(3559);let l=(()=>{class n{constructor(){this.on_scroll=new r.xQ}to(n){this.on_scroll.next(n)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const c=["IonContent"],g=function(n){return["assets/images/",n]};function p(n,t){if(1&n&&(s.TgZ(0,"div",20),s.TgZ(1,"div"),s._UZ(2,"img",21),s.qZA(),s.TgZ(3,"span",22),s._uU(4),s.qZA(),s.qZA()),2&n){const n=t.$implicit;s.xp6(1),s.Tol("HTML5"===n.name||"CSS3"===n.name?"image-container push-up":"image-container"),s.xp6(1),s.Tol(n.name.toLocaleLowerCase()),s.Q6J("src",s.VKq(6,g,n.image).join(""),s.LSH),s.xp6(2),s.Oqu(n.name)}}function d(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"div",23),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().openProject(t)}),s.TgZ(1,"div",24),s._UZ(2,"span"),s._UZ(3,"span"),s._UZ(4,"span"),s.qZA(),s.TgZ(5,"div",25),s._UZ(6,"div",26),s.qZA(),s.TgZ(7,"div",27),s.TgZ(8,"div",28),s._uU(9),s.qZA(),s.TgZ(10,"div",29),s._uU(11),s.qZA(),s.TgZ(12,"div",30),s._uU(13),s.qZA(),s.TgZ(14,"a",31),s.TgZ(15,"span"),s._uU(16),s.qZA(),s._UZ(17,"ion-icon",32),s.qZA(),s.qZA(),s.qZA()}if(2&n){const n=t.$implicit;s.xp6(6),s.Udp("background-image","url(assets/images/"+n.image+")"),s.xp6(3),s.Oqu(null==n?null:n.name),s.xp6(2),s.Oqu(null==n?null:n.languages.join(", ")),s.xp6(2),s.Oqu(null==n?null:n.description),s.xp6(1),s.Q6J("href",n.href?n.href:"",s.LSH),s.xp6(2),s.Oqu(n.href?"View Project":"Private Project")}}function m(n,t){1&n&&(s.TgZ(0,"button",33),s.TgZ(1,"span"),s._uU(2,"Show More Projects"),s.qZA(),s._UZ(3,"ion-icon",34),s.qZA())}let u=(()=>{class n{constructor(n){this.scroll=n,this.projects=[{name:"Wirecard Enterprise Payment Wrapper",description:"The original API uses XML and SOAP for communication, making it hard to implement with JavaScript since in JavaScript we are mostly familiar with JSON, this package does the heavy lifting so you can focus more on your project.",image:"wirecard-enterprise.png",languages:["Node.JS","Git","Rest API"],href:"https://github.com/lebyanelm/wirecard-enterprise"},{name:"MF_Code - Morse code image encoder",description:"A Morse-Code message generator. The message will then be written on an input image. This can then be decoded (manually, digital decoding is under development).",image:"mf_code.png",languages:["Python","OpenCV","Image Manipulation"],href:"https://github.com/lebyanelm/mf_code"},{name:"A* Pathfinding Algorithm Visualizer",description:"This scripts visualizes in real-time an algorithm finding a spot in a maze using the A* Algorithm.",image:"path_finder_2.gif",languages:["Python","A* Algorithm","Pygame"],href:"https://github.com/lebyanelm/astar-pathfinder"}],this.experimentsLoaded=this.projects.length?4:0,this.skills=[{name:"HTML5",image:"html5.svg"},{name:"CSS3",image:"css3.svg"},{name:"JavaScript",image:"javascript.svg"},{name:"Node.JS",image:"nodejs.svg"},{name:"Express.JS",image:"expressjs.svg"},{name:"Angular",image:"angular.svg"},{name:"TypeScript",image:"typescript.svg"},{name:"Python",image:"python.svg"},{name:"Flask",image:"flask.svg"},{name:"GIT",image:"git.svg"},{name:"Ionic",image:"ionic.svg"},{name:"Bash",image:"bash.svg"},{name:"Mongo_DB",image:"mongodb.png"},{name:"Adobe_XD",image:"adobexd.svg"},{name:"Figma",image:"figma.svg"}]}ngAfterViewInit(){this.scroll.on_scroll.subscribe(n=>{const t=document.getElementById(n);if(t){let n=t.offsetTop;100===n?n=0:n-=100,this.ionContent.scrollToPoint(0,n,300)}})}getGreeting(){const n=(new Date).getHours();return n<12?"Good morning":n>=12&&n<18?"Good afternoon":n>=18&&n<=23?"Good evening":void 0}openProject(n){}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(l))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(n,t){if(1&n&&s.Gf(c,5),2&n){let n;s.iGM(n=s.CRH())&&(t.ionContent=n.first)}},decls:65,vars:16,consts:[[3,"fullscreen"],["IonContent",""],[1,"page-content"],["id","introduction",1,"section"],[1,"person-avatar"],[1,"header-title"],[1,"paragraph"],["target","_blank","href","https://lebyanelm.github.io/portfolio/assets/documents/libbylebyane.pdf",1,"clickable","call-to-action"],["name","arrow-down-circle"],["id","philosophy",1,"section"],[1,"header-title","secondary"],[1,"sub-header-title"],["id","skills",1,"section"],[1,"skills"],["class","skill",4,"ngFor","ngForOf"],["id","projects",1,"section"],[1,"projects"],["class","project",3,"click",4,"ngFor","ngForOf"],["class","load-more no-border",4,"ngIf"],["id","contact",3,"page"],[1,"skill"],[3,"src"],[1,"skill-name"],[1,"project",3,"click"],[1,"project-header"],[1,"project-image-container"],[1,"image"],[1,"project-details"],[1,"project-name"],[1,"project-langaues"],[1,"project-description"],["target","_blank",1,"clickable","project-button",3,"href"],["name","arrow-forward-circle"],[1,"load-more","no-border"],["name","ellipsis-horizontal-circle-sharp"]],template:function(n,t){1&n&&(s.TgZ(0,"ion-content",0,1),s.TgZ(2,"div",2),s._UZ(3,"app-animated-background"),s._UZ(4,"app-header"),s.TgZ(5,"div",3),s._UZ(6,"div",4),s.TgZ(7,"div",5),s.TgZ(8,"b"),s._uU(9,"where"),s.qZA(),s._uU(10,"?.design"),s._UZ(11,"br"),s._uU(12,".meets."),s.TgZ(13,"b"),s._uU(14,"coding"),s.qZA(),s._UZ(15,"br"),s._uU(16,"(passion)"),s.qZA(),s.TgZ(17,"div",6),s._uU(18),s.qZA(),s.TgZ(19,"a",7),s._UZ(20,"ion-icon",8),s.TgZ(21,"span"),s._uU(22,"Libby Lebyane's Resume"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(23,"div",9),s.TgZ(24,"div",10),s.TgZ(25,"b"),s._uU(26,"self."),s.qZA(),s._uU(27,"minimal."),s._UZ(28,"br"),s.TgZ(29,"b"),s._uU(30,"philosophy()"),s.qZA(),s.qZA(),s.TgZ(31,"div",11),s._uU(32,"Simplicity is the ultimate sophostication."),s.qZA(),s.TgZ(33,"div",6),s._uU(34,"It takes a whole lot of work to make something simple, to truly understand the underlying challanges and come up with elegant solutions. It\u2019s not just minimalism or the absense of clutter. It involves digging through the depth of complexity. Understand the product to get rid of the parts that are not essential. "),s._UZ(35,"br"),s._UZ(36,"br"),s.TgZ(37,"b"),s._uU(38,"\u2014 Steve Jobs"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(39,"div",12),s.TgZ(40,"div",10),s.TgZ(41,"b"),s._uU(42,"self?."),s.qZA(),s._uU(43,"core."),s._UZ(44,"br"),s.TgZ(45,"b"),s._uU(46,"skills()"),s.qZA(),s.qZA(),s.TgZ(47,"div",6),s._uU(48,"As a self\u2014taught UI/UX and Software Engineer."),s.qZA(),s.TgZ(49,"div",13),s.YNc(50,p,5,8,"div",14),s.qZA(),s.qZA(),s.TgZ(51,"div",15),s.TgZ(52,"div",10),s.TgZ(53,"b"),s._uU(54,"self?."),s.qZA(),s._uU(55,"projects."),s._UZ(56,"br"),s.TgZ(57,"b"),s._uU(58,"recent()"),s.qZA(),s.qZA(),s.TgZ(59,"div",6),s._uU(60,"Being passionate about what I do is more important because it is reflected on the products I create, the end user has to feel the love I gave to a product when they use it through out."),s.qZA(),s.TgZ(61,"div",16),s.YNc(62,d,18,7,"div",17),s.qZA(),s.YNc(63,m,4,0,"button",18),s.qZA(),s._UZ(64,"app-footer",19),s.qZA(),s.qZA()),2&n&&(s.Q6J("fullscreen",!0),s.xp6(18),s.hij("",t.getGreeting(),"! I\u2019m a self\u2014taught UI/UX designer and fullstack software engineer based in South Africa."),s.xp6(5),s.Udp("margin-top","250px"),s.xp6(16),s.Udp("margin-top","250px"),s.xp6(8),s.Udp("transform","translateY(-30px)"),s.xp6(3),s.Q6J("ngForOf",t.skills),s.xp6(1),s.Udp("margin-top","250px"),s.xp6(8),s.Udp("transform","translateY(-30px)"),s.xp6(3),s.Q6J("ngForOf",t.projects),s.xp6(1),s.Q6J("ngIf",t.experimentsLoaded<t.projects.length),s.xp6(1),s.Q6J("page",t))},styles:[".call-to-action[_ngcontent-%COMP%]{border-bottom:3px solid #fff!important}.skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:20px;gap:20px}.skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{display:grid;place-items:center;height:70px;width:70px;border-radius:100px;border:1px solid #fff;position:relative;margin-bottom:10px!important}.skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;z-index:-1}.skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .image-container.push-up[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:translateY(-5px)}.skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img.adobe[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img.javascript[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img.typescript[_ngcontent-%COMP%]{height:40px}.skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:small;font-weight:bolder;font-family:Roboto Mono,sans-serif;text-transform:uppercase;color:#fff}@media only screen and (max-width:784px){.skills[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}"]}),n})();var h=e(4989);const f=[{path:"",component:u}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[h.Bz.forChild(f)],h.Bz]}),n})();var _=e(7120);const b=["CanvasElement"];let v=(()=>{class n{constructor(){this.balls=[],this.noBalls=50,this.mouse={x:0,y:0}}ngAfterViewInit(){document.documentElement.onmousemove=n=>this.updateMousePoint(n.x,n.y);const n=this.setupCanvasContext();this.getRandomBallPositions(),this.draw(n),this.animate(n)}setupCanvasContext(){return this.canvasElement.nativeElement.height=window.innerHeight,this.canvasElement.nativeElement.width=window.innerWidth,this.canvasElement.nativeElement.getContext("2d")}getRandomBallPositions(){for(let n=0;n<=this.noBalls;n++){const n=window.innerWidth,t=window.innerHeight;this.balls.push({x:Math.random()*n,y:Math.random()*t,dy:2*(Math.random()-.5),dx:2*(Math.random()-.5),radius:5*Math.random()})}}draw(n){for(const t of this.balls)n.beginPath(),n.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),n.fillStyle="#FFF",n.strokeStyle="#FFF",n.stroke(),n.fill();n.beginPath();for(const t of this.balls){n.moveTo(t.x,t.y);for(const e of this.balls)this.getDistance(t,e)<=150&&n.lineTo(e.x,e.y);this.getDistance(t,this.mouse)<=150&&(n.moveTo(t.x,t.y),n.lineTo(this.mouse.x,this.mouse.y))}n.stroke()}getDistance(n,t){let e=t.x-n.x,o=t.y-n.y;return e*=e,o*=o,Math.sqrt(e+o)}update(n){for(const t of this.balls)(t.x<0||t.y>window.innerWidth)&&(t.dx=-1*t.dx),(t.y<0||t.y>window.innerHeight)&&(t.dy=-1*t.dy),t.x+=t.dx,t.y+=t.dy;this.draw(n)}animate(n){requestAnimationFrame(()=>this.animate(n)),n.clearRect(0,0,window.innerWidth,window.innerHeight),this.update(n)}updateMousePoint(n,t){this.mouse.x=n,this.mouse.y=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-animated-background"]],viewQuery:function(n,t){if(1&n&&s.Gf(b,5),2&n){let n;s.iGM(n=s.CRH())&&(t.canvasElement=n.first)}},decls:2,vars:0,consts:[["CanvasElement",""]],template:function(n,t){1&n&&s._UZ(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{opacity:.2}"]}),n})(),M=(()=>{class n{constructor(n){this.scroll=n,this.isMobileMenuOpen=!1}ngOnInit(){this.scroll.on_scroll.subscribe(()=>this.isMobileMenuOpen=!1)}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(l))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-header"]],decls:34,vars:3,consts:[[1,"header-container","desktop"],[1,"sitename-logo"],[1,"sitename"],[1,"name"],[1,"tagline"],[1,"navigation-links"],[1,"clickable",3,"click"],[1,"mobile-menu-backdrop",3,"click"],[1,"mobile-menu-container"],[1,"mobile-menu-item",3,"click"],[1,"navigation-toggle-button",3,"click"]],template:function(n,t){1&n&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"span",3),s._uU(4,"Libby"),s._UZ(5,"br"),s._uU(6,"Lebyane"),s.qZA(),s._UZ(7,"br"),s.TgZ(8,"span",4),s._uU(9,"Coding is poetry."),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"div",5),s.TgZ(11,"a",6),s.NdJ("click",function(){return t.scroll.to("introduction")}),s._uU(12,"Home"),s.qZA(),s.TgZ(13,"a",6),s.NdJ("click",function(){return t.scroll.to("philosophy")}),s._uU(14,"Developer Philosophy"),s.qZA(),s.TgZ(15,"a",6),s.NdJ("click",function(){return t.scroll.to("skills")}),s._uU(16,"Skills"),s.qZA(),s.TgZ(17,"a",6),s.NdJ("click",function(){return t.scroll.to("projects")}),s._uU(18,"Projects"),s.qZA(),s.TgZ(19,"a",6),s.NdJ("click",function(){return t.scroll.to("contact")}),s._uU(20,"Contact"),s.qZA(),s.qZA(),s.TgZ(21,"div",7),s.NdJ("click",function(){return t.toggleMobileMenu()}),s.qZA(),s.TgZ(22,"div",8),s.TgZ(23,"a",9),s.NdJ("click",function(){return t.scroll.to("introduction")}),s._uU(24,"Home"),s.qZA(),s.TgZ(25,"a",9),s.NdJ("click",function(){return t.scroll.to("philosophy")}),s._uU(26,"Developer Philosophy"),s.qZA(),s.TgZ(27,"a",9),s.NdJ("click",function(){return t.scroll.to("skills")}),s._uU(28,"Skills"),s.qZA(),s.TgZ(29,"a",9),s.NdJ("click",function(){return t.scroll.to("projects")}),s._uU(30,"Projects"),s.qZA(),s.TgZ(31,"a",9),s.NdJ("click",function(){return t.scroll.to("contact")}),s._uU(32,"Contact"),s.qZA(),s.qZA(),s.TgZ(33,"div",10),s.NdJ("click",function(){return t.toggleMobileMenu()}),s.qZA(),s.qZA()),2&n&&(s.xp6(21),s.uIk("isVisible",t.isMobileMenuOpen),s.xp6(1),s.uIk("isVisible",t.isMobileMenuOpen),s.xp6(11),s.uIk("isOpen",t.isMobileMenuOpen))},styles:['.header-container[_ngcontent-%COMP%]{justify-content:space-between;padding:20px}.header-container[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   .sitename-logo[_ngcontent-%COMP%]{display:flex;align-items:center}.header-container[_ngcontent-%COMP%]   .sitename-logo[_ngcontent-%COMP%]   .sitename[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%]{font-family:ProFont,Roboto Mono,sans-serif!important;font-weight:900;letter-spacing:1.5px}.header-container[_ngcontent-%COMP%]   .sitename-logo[_ngcontent-%COMP%]   .sitename[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{font-size:small!important;opacity:.5}.header-container[_ngcontent-%COMP%]   .navigation-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   .sitename-logo[_ngcontent-%COMP%]   .sitename[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase}.header-container[_ngcontent-%COMP%]   .navigation-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Roboto Mono,sans-serif!important;padding:20px;font-size:small;color:#fff!important}.navigation-toggle-button[_ngcontent-%COMP%]{width:30px}.navigation-toggle-button[_ngcontent-%COMP%], .navigation-toggle-button[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transition:transform .2s ease-in-out}.navigation-toggle-button[_ngcontent-%COMP%]:after, .navigation-toggle-button[_ngcontent-%COMP%]:before{content:"";display:block;height:3px;width:100%;background:#fff}.navigation-toggle-button[_ngcontent-%COMP%]:after{margin-top:8px}.navigation-toggle-button[isOpen=true][_ngcontent-%COMP%]:before{transform:translateY(100%)}.navigation-toggle-button[isOpen=true][_ngcontent-%COMP%]:after{transform:translateY(-100%)}.navigation-toggle-button[isOpen=true][_ngcontent-%COMP%]{transform:rotate(90deg)}.mobile-menu-backdrop[_ngcontent-%COMP%], .mobile-menu-container[_ngcontent-%COMP%]{display:block;height:100vh;position:absolute;top:0;left:0;transition:opacity .3s ease-in-out,transform .3s ease-in-out}.mobile-menu-backdrop[_ngcontent-%COMP%]{pointer-events:none;opacity:0}.mobile-menu-backdrop[isVisible=true][_ngcontent-%COMP%]{pointer-events:all;opacity:.7}.mobile-menu-backdrop[_ngcontent-%COMP%]{width:100vw;background:#000}.mobile-menu-container[_ngcontent-%COMP%]{width:80vw;padding:100px 20px;text-align:left;background:#000;transform:translateX(-100%)}.mobile-menu-container[isVisible=true][_ngcontent-%COMP%]{transform:translateX(0)}.mobile-menu-container[_ngcontent-%COMP%]   .mobile-menu-item[_ngcontent-%COMP%]{display:block;width:100%;padding:20px 0;text-transform:uppercase;color:#fff!important;font-size:small;font-weight:bolder;border-bottom:2px solid #ffffff80}@media only screen and (max-width:925px){.header-container[_ngcontent-%COMP%]{padding:20px 0}}@media only screen and (max-width:728px){.navigation-links[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:728px){.navigation-toggle-button[_ngcontent-%COMP%]{display:none}}']}),n})(),C=(()=>{class n{constructor(){this.scrollToTop=()=>{}}ngAfterViewInit(){console.log(this.page),this.page&&this.page.ionContent&&(console.log("Setting scroll up function..."),this.scrollToTop=()=>{this.page.ionContent.scrollToTop(400)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-footer"]],inputs:{page:"page"},decls:51,vars:0,consts:[[1,"footer-container"],[1,"footer-contact-details"],[1,"footer-call-address-line"],[1,"item"],[1,"item-name"],["href","callto://+27747521395",1,"item-value"],[1,"item-value"],[1,"footer-email-contact"],["href","mailto://lebyane.lm@gmail.com",1,"item-value"],[1,"footer-scroll-up-button",3,"click"],[1,"social-media-handles"],["href","https://github.com/lebyanelm","target","_blank",1,"social-handle"],["href","https://instagram.com/lebyanelm","target","_blank",1,"social-handle"],["href","https://www.codewars.com/users/lebyanelm","target","_blank",1,"social-handle"],["href","https://cssbattle.dev/player/lebyanelm","target","_blank",1,"social-handle"],["href","https://stackoverflow.com/users/8664756/libby-lebyane","target","_blank",1,"social-handle"],["href","mailto://lebyane.lm@gmail.com","target","_blank",1,"social-handle"],[1,"legal"]],template:function(n,t){1&n&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._uU(5,"Call"),s.qZA(),s.TgZ(6,"a",5),s._uU(7,"+27 74 752 1395"),s.qZA(),s.qZA(),s.TgZ(8,"div",3),s.TgZ(9,"div",4),s._uU(10,"Address Line"),s.qZA(),s.TgZ(11,"div",6),s._uU(12," 4006 Pencil Fish Cr"),s._UZ(13,"br"),s._uU(14," Kaalfontein Ext. 10"),s._UZ(15,"br"),s._uU(16," Midrand"),s._UZ(17,"br"),s._uU(18," 1685"),s._UZ(19,"br"),s._uU(20," South Africa"),s._UZ(21,"br"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(22,"div",7),s.TgZ(23,"div",3),s.TgZ(24,"div",4),s._uU(25,"Email"),s.qZA(),s.TgZ(26,"a",8),s._uU(27,"lebyane.lm@gmail.com"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(28,"div",9),s.NdJ("click",function(){return t.scrollToTop()}),s._uU(29,"Scroll back up"),s.qZA(),s.qZA(),s.TgZ(30,"div",10),s.TgZ(31,"div"),s.TgZ(32,"a",11),s._uU(33,"GitHub"),s.qZA(),s.qZA(),s.TgZ(34,"div"),s.TgZ(35,"a",12),s._uU(36,"Instagram"),s.qZA(),s.qZA(),s.TgZ(37,"div"),s.TgZ(38,"a",13),s._uU(39,"Codewars"),s.qZA(),s.qZA(),s.TgZ(40,"div"),s.TgZ(41,"a",14),s._uU(42,"CSS_Battle"),s.qZA(),s.qZA(),s.TgZ(43,"div"),s.TgZ(44,"a",15),s._uU(45,"Stackoverflow"),s.qZA(),s.qZA(),s.TgZ(46,"div"),s.TgZ(47,"a",16),s._uU(48,"Gmail"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(49,"div",17),s._uU(50,"\xa9 Copyright 2021 \u2014 Libby Lebyane \u2014 CODING IS POETRY."),s.qZA(),s.qZA())},styles:[".footer-container[_ngcontent-%COMP%]{padding:100px 100px 50px;background:#090909;width:calc(100% - 150px);transform:translateX(150px);text-align:left}.footer-container[_ngcontent-%COMP%]   .footer-contact-details[_ngcontent-%COMP%]{display:flex}.footer-container[_ngcontent-%COMP%]   .footer-contact-details[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.footer-container[_ngcontent-%COMP%]   .footer-scroll-up-button[_ngcontent-%COMP%]{text-transform:uppercase;font-size:small;font-weight:bolder;position:absolute;right:20px;top:50%;transform:rotate(-90deg);cursor:pointer!important}.footer-container[_ngcontent-%COMP%]   .social-media-handles[_ngcontent-%COMP%]{align-items:center;justify-content:center;font-size:14px;margin-top:50px;text-align:center}.footer-container[_ngcontent-%COMP%]   .legal[_ngcontent-%COMP%]{font-size:small;opacity:.5;margin-top:20px;text-align:center;text-transform:uppercase}.footer-container[_ngcontent-%COMP%]   .social-media-handles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase;margin:0 5px}@media only screen and (max-width:884px){.footer-container[_ngcontent-%COMP%]{padding:100px 50px 50px;transform:translateX(0);width:100%}}@media only screen and (max-width:660px){.footer-container[_ngcontent-%COMP%]   .social-media-handles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:block}}"]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,a.u5,i.Pc,Z,_.K]]}),n})();s.B6R(u,[i.W2,v,M,i.gu,o.sg,o.O5,C],[])}}]);