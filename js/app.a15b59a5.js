(function(e){function t(t){for(var a,i,r=t[0],l=t[1],o=t[2],u=0,b=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,o||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],a=!0,r=1;r<c.length;r++){var l=c[r];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=c[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=a,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(c,a,function(t){return e[t]}.bind(null,a));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=l;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0145":function(e,t,c){},"01f1":function(e,t,c){},"087b":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-3efb0b93");Object(a["i"])("data-v-3efb0b93");var s={class:"stage-div"},i=Object(a["e"])("h1",null,"STAGE",-1);Object(a["h"])();var r=n((function(e,t,c,n,r,l){return Object(a["g"])(),Object(a["c"])("div",s,[i,Object(a["e"])("button",{onClick:t[1]||(t[1]=function(e){return l.changeState(1)})},"NEXT")])})),l=c("5530"),o=c("5502"),d=c("fbd9"),u={name:"Stage",data:function(){return{id:d["STAGES"].STAGE}},computed:Object(l["a"])({},Object(o["b"])(["stage"])),methods:{changeState:function(e){this.$store.commit("changeState",{index:this.id,destination:e})}}};c("972a");u.render=r,u.__scopeId="data-v-3efb0b93";t["default"]=u},"0919":function(e,t,c){},"0eec":function(e,t,c){"use strict";c("01f1")},3463:function(e,t,c){e.exports=c.p+"img/pig.291f6ff8.png"},"3d6d":function(e,t,c){e.exports=c.p+"img/4.58f462b3.png"},"3dfd":function(e,t,c){"use strict";c.r(t);var a=c("7a23");function n(e,t,c,n,s,i){var r=Object(a["l"])("Game");return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["e"])(r)])}var s=c("7d36"),i={name:"App",components:{Game:s["default"]}};c("3faf");i.render=n;t["default"]=i},"3e70":function(e,t,c){},"3ebf":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-7b8e56b1");Object(a["i"])("data-v-7b8e56b1");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r={class:"introstage-div"},l=Object(a["e"])("h1",null,"Intro Stage",-1);Object(a["h"])();var o=n((function(e,t,c,n,o,d){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,Object(a["e"])("div",r,[l,Object(a["e"])("button",{class:"play-button",onClick:t[1]||(t[1]=function(e){return d.changeState(o.destination)})},"PLAY")])],64)})),d=c("5530"),u=c("5502"),b=c("fbd9"),h={name:"IntroStage",data:function(){return{destination:b["STAGES"].TUTORIAL_STAGE,id:b["STAGES"].INTRO_STAGE}},computed:Object(d["a"])({},Object(u["b"])(["stage"])),methods:{changeState:function(e){this.$store.commit("changeState",{index:this.id,destination:e})}}};c("6ea2");h.render=o,h.__scopeId="data-v-7b8e56b1";t["default"]=h},"3faf":function(e,t,c){"use strict";c("44ab")},4360:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("5502"),n=c("fbd9");t["default"]=Object(a["a"])({state:{stage:[{name:"Stage",id:n["STAGES"].STAGE,change:!1,change_to:0},{name:"IntroStage",id:n["STAGES"].INTRO_STAGE,change:!1,change_to:0},{name:"TutorialStage",id:n["STAGES"].TUTORIAL_STAGE,change:!1,change_to:0},{name:"PlayStage",id:n["STAGES"].PLAY_STAGE,change:!1,change_to:0},{name:"FinalStage",id:n["STAGES"].FINAL_STAGE,change:!1,change_to:0}],current_stage:{name:"IntroStage",id:1}},mutations:{changeState:function(e,t){e.stage[t.index].change=!0,e.stage[t.index].change_to=t.destination,e.current_stage.id=t.destination,e.current_stage.name=e.stage[t.destination].name}},actions:{},modules:{},getters:{}})},"44ab":function(e,t,c){},4944:function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a");var a=c("7a23"),n=Object(a["o"])("data-v-a90b361e");Object(a["i"])("data-v-a90b361e");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r={class:"selection-div"},l=Object(a["e"])("h1",{class:"title"},"Choose a level",-1),o={class:"container"},d={class:"slideshow-container"},u={key:0,class:"level-container"},b={key:0,class:"card-right fade"},h={class:"numbertext numbertext-right"},f={class:"text text-right"},O={key:1,class:"card-left fade"},g={class:"numbertext numbertext-left"},v={class:"text text-left"},j={class:"card fade"},p={class:"numbertext"},m={class:"text"},S=Object(a["e"])("br",null,null,-1),I={class:"dots"},A={key:0},C={key:1};Object(a["h"])();var y=n((function(e,t,n,y,E,D){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,Object(a["e"])("div",r,[l,Object(a["e"])("div",o,[Object(a["e"])("div",d,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(E.levels,(function(e,t){return Object(a["g"])(),Object(a["c"])("div",{key:t},[e.isActive?(Object(a["g"])(),Object(a["c"])("div",u,[t>=0&&t+1<E.levels.length?(Object(a["g"])(),Object(a["c"])("div",b,[Object(a["e"])("div",h,Object(a["m"])(E.levels[t+1].id+1)+" / "+Object(a["m"])(E.levels.length),1),Object(a["e"])("img",{class:"image-right",src:c("a8ec")("./".concat(E.levels[t+1].adress))},null,8,["src"]),Object(a["e"])("div",f,Object(a["m"])(E.levels[t+1].description),1)])):Object(a["d"])("",!0),t<E.levels.length&&t-1>=0?(Object(a["g"])(),Object(a["c"])("div",O,[Object(a["e"])("div",g,Object(a["m"])(E.levels[t-1].id+1)+" / "+Object(a["m"])(E.levels.length),1),Object(a["e"])("img",{class:"image-left",src:c("a8ec")("./".concat(E.levels[t-1].adress))},null,8,["src"]),Object(a["e"])("div",v,Object(a["m"])(E.levels[t-1].description),1)])):Object(a["d"])("",!0),Object(a["e"])("div",j,[Object(a["e"])("div",p,Object(a["m"])(e.id+1)+" / "+Object(a["m"])(E.levels.length),1),Object(a["e"])("img",{class:"image",src:c("a8ec")("./".concat(e.adress))},null,8,["src"]),Object(a["e"])("div",m,Object(a["m"])(e.description),1)]),t>0?(Object(a["g"])(),Object(a["c"])("a",{key:2,class:"btn-prev",onClick:function(e){return D.showNextLevel(-1,t)}},"❮",8,["onClick"])):Object(a["d"])("",!0),t<E.levels.length-1?(Object(a["g"])(),Object(a["c"])("a",{key:3,class:"btn-next",onClick:function(e){return D.showNextLevel(1,t)}},"❯",8,["onClick"])):Object(a["d"])("",!0)])):Object(a["d"])("",!0)])})),128))]),S,Object(a["e"])("div",I,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(E.levels,(function(e,t){return Object(a["g"])(),Object(a["c"])("span",{key:t,style:{"text-align":"center"}},[e.isActive?(Object(a["g"])(),Object(a["c"])("span",A,[Object(a["e"])("span",{class:"dot dot-active",onClick:function(e){return D.showLevel(t)}},null,8,["onClick"])])):(Object(a["g"])(),Object(a["c"])("span",C,[Object(a["e"])("span",{class:"dot",onClick:function(e){return D.showLevel(t)}},null,8,["onClick"])]))])})),128))])]),Object(a["e"])("button",{class:"btn-choose",onClick:t[1]||(t[1]=function(e){return D.levelIsSelected(E.current_level)})},"Choose Character")])],64)})),E=c("5530"),D=c("5502"),k=c("fbd9"),T={name:"LevelSelection",components:{},emits:["levelIsSelected"],data:function(){return{levelID:"",slideIndex:0,current_level:0,levels:k["LEVELS"]}},computed:Object(E["a"])({},Object(D["b"])(["stage"])),methods:{setLevelID:function(e){this.levelID=e},levelIsSelected:function(e){this.$emit("levelIsSelected",e)},showNextLevel:function(e,t){var c=this.current_level+e;c>=0&&c<this.levels.length&&(this.current_level=c,this.levels[t].isActive=!1,this.levels[this.current_level].isActive=!0)},showLevel:function(e){this.current_level=e;for(var t=0;t<this.levels.length;t++)this.levels[t].isActive=!1;this.levels[this.current_level].isActive=!0}},created:function(){this.current_level=0}};c("0eec");T.render=y,T.__scopeId="data-v-a90b361e";t["default"]=T},"4ad4":function(e,t,c){"use strict";c("867f")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),n=c("3dfd"),s=c("4360");Object(a["b"])(n["default"]).use(s["default"]).mount("#app")},"586e":function(e,t,c){},5934:function(e,t,c){e.exports=c.p+"img/2.517c6ed5.png"},"5e9d":function(e,t){e.exports="data:image/png;base64,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"},"685c":function(e,t,c){e.exports=c.p+"img/1.f5218ebf.png"},"6ea2":function(e,t,c){"use strict";c("586e")},"7b7c":function(e,t,c){"use strict";c("3e70")},"7d36":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),n=Object(a["o"])("data-v-433315f3");Object(a["i"])("data-v-433315f3");var s={class:"game-div"},i={key:0},r={key:1},l={key:2},o={key:3},d={key:4};Object(a["h"])();var u=n((function(e,t,c,n,u,b){var h=Object(a["l"])("Stage"),f=Object(a["l"])("IntroStage"),O=Object(a["l"])("TutorialStage"),g=Object(a["l"])("PlayStage"),v=Object(a["l"])("FinalStage");return Object(a["g"])(),Object(a["c"])("div",s,[e.current_stage.id==u.my_stages.STAGE?(Object(a["g"])(),Object(a["c"])("div",i,[Object(a["e"])(h)])):Object(a["d"])("",!0),e.current_stage.id==u.my_stages.INTRO_STAGE?(Object(a["g"])(),Object(a["c"])("div",r,[Object(a["e"])(f)])):Object(a["d"])("",!0),e.current_stage.id==u.my_stages.TUTORIAL_STAGE?(Object(a["g"])(),Object(a["c"])("div",l,[Object(a["e"])(O)])):Object(a["d"])("",!0),e.current_stage.id==u.my_stages.PLAY_STAGE?(Object(a["g"])(),Object(a["c"])("div",o,[Object(a["e"])(g)])):Object(a["d"])("",!0),e.current_stage.id==u.my_stages.FINAL_STAGE?(Object(a["g"])(),Object(a["c"])("div",d,[Object(a["e"])(v)])):Object(a["d"])("",!0),Object(a["e"])("h1",null," ID: "+Object(a["m"])(e.current_stage.id)+" Name: "+Object(a["m"])(e.current_stage.name),1),Object(a["e"])("button",{onClick:t[1]||(t[1]=function(e){return b.changeState(!0)})},"Next Stage"),Object(a["e"])("button",{onClick:t[2]||(t[2]=function(e){return b.changeState(!1)})},"Previous Stage")])})),b=c("5530"),h=c("087b"),f=c("3ebf"),O=c("aef2"),g=c("8af8"),v=c("8a2a"),j=c("5502"),p=c("fbd9"),m={name:"Game",components:{Stage:h["default"],IntroStage:f["default"],TutorialStage:O["default"],PlayStage:g["default"],FinalStage:v["default"]},data:function(){return{change_state:!1,my_stages:p["STAGES"]}},computed:Object(b["a"])({},Object(j["b"])(["stage","current_stage"])),methods:{changeState:function(e){var t=0,c=!1;e?(t=this.current_stage.id+1,t<=this.my_stages.FINAL_STAGE&&(c=!0)):(t=this.current_stage.id-1,t>=this.my_stages.STAGE&&(c=!0)),c&&this.$store.commit("changeState",{index:this.current_stage.id,destination:t})},getID:function(e){for(var t=0;t<this.stage.length;t++)if(this.stage[t].name==e)return this.stage[t].id;return-1},getName:function(e){for(var t=0;t<this.stage.length;t++)if(this.stage[t].id==e)return this.stage[t].name;return"NotFound"}}};c("4ad4");m.render=u,m.__scopeId="data-v-433315f3";t["default"]=m},"867f":function(e,t,c){},"8a2a":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-6dd2f0ed");Object(a["i"])("data-v-6dd2f0ed");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r=Object(a["e"])("div",{class:"finalstage-div"},[Object(a["e"])("h1",null,"Final Stage"),Object(a["e"])("button",null,"NEXT")],-1);Object(a["h"])();var l=n((function(e,t,c,n,l,o){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,r],64)})),o={name:"FinalStage",methods:{}};c("d31a");o.render=l,o.__scopeId="data-v-6dd2f0ed";t["default"]=o},"8af8":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-4a3c07c6");Object(a["i"])("data-v-4a3c07c6");var s={class:"playstage-div"};Object(a["h"])();var i=n((function(e,t,c,n,i,r){var l=Object(a["l"])("LevelSelection"),o=Object(a["l"])("CharacterSelection"),d=Object(a["l"])("MainGame");return Object(a["g"])(),Object(a["c"])("div",s,[Object(a["e"])("button",{class:"btn-next",onClick:t[1]||(t[1]=function(e){return r.changeState(i.destination)})},"END"),i.levelIsNotSelected?(Object(a["g"])(),Object(a["c"])(l,{key:0,onLevelIsSelected:r.levelIsSelected},null,8,["onLevelIsSelected"])):Object(a["d"])("",!0),r.isThereACharacter()?(Object(a["g"])(),Object(a["c"])(o,{key:1,onCharacterIsSelected:r.characterIsSelected},null,8,["onCharacterIsSelected"])):Object(a["d"])("",!0),r.canStartTheGame()?(Object(a["g"])(),Object(a["c"])(d,{key:2,characterID:i.characterID,levelID:i.levelID,onGameIsOver:r.gameIsOver},null,8,["characterID","levelID","onGameIsOver"])):Object(a["d"])("",!0)])})),r=c("5530"),l=c("5502"),o=c("fbd9"),d=c("f574"),u=c("4944"),b=c("d4db"),h={name:"PlayStage",components:{CharacterSelection:d["default"],LevelSelection:u["default"],MainGame:b["default"]},data:function(){return{destination:o["STAGES"].FINAL_STAGE,id:o["STAGES"].PLAY_STAGE,characterIsNotSelected:!0,levelIsNotSelected:!0,levelID:0,characterID:0}},computed:Object(r["a"])({},Object(l["b"])(["stage"])),methods:{changeState:function(e){this.$store.commit("changeState",{index:this.id,destination:e})},characterIsSelected:function(e){this.characterIsNotSelected=!1,this.characterID=e},levelIsSelected:function(e){this.levelIsNotSelected=!1,this.levelID=e},isThereACharacter:function(){return 1==this.characterIsNotSelected&&0==this.levelIsNotSelected},gameIsOver:function(){this.changeState(this.destination)},canStartTheGame:function(){return 0==this.characterIsNotSelected&&0==this.levelIsNotSelected}},created:function(){this.characterIsNotSelected=!0,this.levelIsNotSelected=!0}};c("d6c9");h.render=i,h.__scopeId="data-v-4a3c07c6";t["default"]=h},"8b25":function(e,t,c){"use strict";c("da18")},"972a":function(e,t,c){"use strict";c("b479")},"9ef1":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),n=Object(a["o"])("data-v-189b96ca");Object(a["i"])("data-v-189b96ca");var s={class:"detail"},i={key:0,class:"detail-view"},r={key:0,class:"image"},l={key:1,class:"data"},o={class:"property"},d=Object(a["e"])("div",{class:"left"},"Base Experiecne",-1),u={class:"right"},b={class:"property"},h=Object(a["e"])("div",{class:"left"},"Base Experiecne",-1),f={class:"right"},O={class:"property"},g=Object(a["e"])("div",{class:"left"},"Base Experiecne",-1),v={class:"right"},j=Object(a["e"])("h3",null,"Types",-1),p={class:"types"},m={class:"type"},S={class:"type"},I={class:"type"},A={class:"buttons"};Object(a["h"])();var C=n((function(e,t,n,C,y,E){return Object(a["g"])(),Object(a["c"])("div",s,[y.show?(Object(a["g"])(),Object(a["c"])("div",i,[y.character?(Object(a["g"])(),Object(a["c"])("div",r,[Object(a["e"])("img",{src:c("a8ec")("./".concat(y.character.icon)),width:"96",height:"96",alt:"Image Not Found"},null,8,["src"])])):Object(a["d"])("",!0),y.character?(Object(a["g"])(),Object(a["c"])("div",l,[Object(a["e"])("h2",null,Object(a["m"])(y.character.name),1),Object(a["e"])("div",o,[d,Object(a["e"])("div",u,Object(a["m"])(y.character.data),1)]),Object(a["e"])("div",b,[h,Object(a["e"])("div",f,Object(a["m"])(y.character.data),1)]),Object(a["e"])("div",O,[g,Object(a["e"])("div",v,Object(a["m"])(y.character.data),1)]),j,Object(a["e"])("div",p,[Object(a["e"])("div",m,Object(a["m"])(y.character.ability),1),Object(a["e"])("div",S,Object(a["m"])(y.character.ability),1),Object(a["e"])("div",I,Object(a["m"])(y.character.ability),1)])])):Object(a["d"])("",!0),Object(a["e"])("div",A,[Object(a["e"])("button",{class:"btn btn-close",onClick:t[1]||(t[1]=function(){return E.closeDetail&&E.closeDetail.apply(E,arguments)})},"X"),Object(a["e"])("button",{class:"btn btn-accept",onClick:t[2]||(t[2]=function(){return E.characterIsSelected&&E.characterIsSelected.apply(E,arguments)})},"YES")])])):Object(a["d"])("",!0)])})),y=c("fbd9"),E={name:"CharacterDetail",props:["imageUrl","characterID"],emits:["closeDetail","characterIsSelected"],data:function(){return{show:!1,character:null}},methods:{pickCharacter:function(e){this.show=!0,this.character=y["CHARACTERS"][e]},closeDetail:function(){this.show=!1,this.$emit("closeDetail")},characterIsSelected:function(){this.show=!1,this.$emit("characterIsSelected")}},created:function(){this.pickCharacter(this.$props.characterID)}};c("7b7c");E.render=C,E.__scopeId="data-v-189b96ca";t["default"]=E},a8ec:function(e,t,c){var a={"./App":"3dfd","./App.vue":"3dfd","./assets/characters/pig.png":"3463","./assets/characters/spritesheet.png":"5e9d","./assets/characters/tiger.png":"fa3e","./assets/levels/1.png":"685c","./assets/levels/2.png":"5934","./assets/levels/3.png":"aaf8","./assets/levels/4.png":"3d6d","./assets/logo.png":"cf05","./components/CharacterDetail":"9ef1","./components/CharacterDetail.vue":"9ef1","./components/CharacterList":"cfe7","./components/CharacterList.vue":"cfe7","./components/CharacterSelection":"f574","./components/CharacterSelection.vue":"f574","./components/LevelSelection":"4944","./components/LevelSelection.vue":"4944","./components/MainGame":"d4db","./components/MainGame.vue":"d4db","./consts":"fbd9","./consts.js":"fbd9","./main":"56d7","./main.js":"56d7","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./views/FinalStage":"8a2a","./views/FinalStage.vue":"8a2a","./views/Game":"7d36","./views/Game.vue":"7d36","./views/IntroStage":"3ebf","./views/IntroStage.vue":"3ebf","./views/PlayStage":"8af8","./views/PlayStage.vue":"8af8","./views/Stage":"087b","./views/Stage.vue":"087b","./views/TutorialStage":"aef2","./views/TutorialStage.vue":"aef2"};function n(e){var t=s(e);return c(t)}function s(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="a8ec"},aaf8:function(e,t,c){e.exports=c.p+"img/3.79eb6f00.png"},aef2:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-7f6e1d14");Object(a["i"])("data-v-7f6e1d14");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r={class:"turorial-div"},l=Object(a["e"])("h1",null,"Tutorial Stage",-1);Object(a["h"])();var o=n((function(e,t,c,n,o,d){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,Object(a["e"])("div",r,[l,Object(a["e"])("button",{class:"btn-skip",onClick:t[1]||(t[1]=function(e){return d.changeState(o.destination)})},"SKIP"),Object(a["e"])("button",{class:"btn-next",onClick:t[2]||(t[2]=function(e){return d.changeState(o.destination)})},"NEXT")])],64)})),d=c("5530"),u=c("5502"),b=c("fbd9"),h={name:"TutorialStage",data:function(){return{destination:b["STAGES"].PLAY_STAGE,id:b["STAGES"].TUTORIAL_STAGE}},computed:Object(d["a"])({},Object(u["b"])(["stage"])),methods:{changeState:function(e){this.$store.commit("changeState",{index:this.id,destination:e})}}};c("fd73");h.render=o,h.__scopeId="data-v-7f6e1d14";t["default"]=h},b479:function(e,t,c){},cf05:function(e,t,c){e.exports=c.p+"img/logo.82b9c7a5.png"},cfe7:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),n=Object(a["o"])("data-v-45afe56c");Object(a["i"])("data-v-45afe56c");var s=Object(a["e"])("h1",{class:"title"},"Choose a character",-1),i={class:"list"};Object(a["h"])();var r=n((function(e,t,n,r,l,o){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,Object(a["e"])("div",i,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(l.characters,(function(e,t){return Object(a["g"])(),Object(a["c"])("article",{key:t,onClick:function(t){return o.setCharacterID(e.id)}},[Object(a["e"])("img",{src:c("a8ec")("./".concat(e.icon)),width:"96",height:"96",alt:"Character Icon Not Found"},null,8,["src"]),Object(a["e"])("h3",null,Object(a["m"])(e.name),1)],8,["onClick"])})),128))])],64)})),l=c("fbd9"),o={name:"CharacterList",props:["imageUrl"],emits:["setCharacterID"],data:function(){return{characters:l["CHARACTERS"]}},methods:{setCharacterID:function(e){this.$emit("setCharacterID",e)}}};c("e3a1");o.render=r,o.__scopeId="data-v-45afe56c";t["default"]=o},d31a:function(e,t,c){"use strict";c("d830")},d4db:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-7c55f0d7");Object(a["i"])("data-v-7c55f0d7");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r={class:"selection-div"},l=Object(a["e"])("h1",null,"Main Game HERE",-1);Object(a["h"])();var o=n((function(e,t,n,o,d,u){return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,Object(a["e"])("div",r,[l,Object(a["e"])("span",{class:"sprite",style:{"background-image":"url("+c("5e9d")+")"}},null,4)])],64)})),d=c("5530"),u=c("5502"),b=c("fbd9"),h={name:"MainGame",components:{},props:["levelID","characterID"],emits:["gameIsOver"],data:function(){return{points:0,level:b["LEVELS"][this.$props["levelID"]],character:b["CHARACTERS"][this.$props["characterID"]]}},computed:Object(d["a"])({},Object(u["b"])(["stage"])),methods:{gameOver:function(){this.$emit("gameIsOver")}}};c("dd94");h.render=o,h.__scopeId="data-v-7c55f0d7";t["default"]=h},d60a:function(e,t,c){},d6c9:function(e,t,c){"use strict";c("d60a")},d830:function(e,t,c){},da18:function(e,t,c){},dd94:function(e,t,c){"use strict";c("0919")},e2aa:function(e,t,c){},e3a1:function(e,t,c){"use strict";c("0145")},f574:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=Object(a["o"])("data-v-c67f7c98");Object(a["i"])("data-v-c67f7c98");var s=Object(a["e"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),i=Object(a["e"])("link",{href:"https://fonts.googleapis.com/css2?family=Carter+One&display=swap",rel:"stylesheet"},null,-1),r={class:"selection-div"};Object(a["h"])();var l=n((function(e,t,c,n,l,o){var d=Object(a["l"])("CharacterList"),u=Object(a["l"])("CharacterDetail");return Object(a["g"])(),Object(a["c"])(a["a"],null,[s,i,Object(a["e"])("div",r,[Object(a["e"])(d,{imageUrl:l.imageUrl,onSetCharacterID:o.setCharacterID},null,8,["imageUrl","onSetCharacterID"]),l.showDetail?(Object(a["g"])(),Object(a["c"])(u,{key:0,imageUrl:l.imageUrl,characterID:l.characterID,onCloseDetail:o.closeDetail,onCharacterIsSelected:o.characterIsSelected},null,8,["imageUrl","characterID","onCloseDetail","onCharacterIsSelected"])):Object(a["d"])("",!0)])],64)})),o=c("5530"),d=c("5502"),u=(c("fbd9"),c("cfe7")),b=c("9ef1"),h={name:"CharacterSelection",components:{CharacterList:u["default"],CharacterDetail:b["default"]},emits:["characterIsSelected"],data:function(){return{imageUrl:"something",characterID:"",showDetail:!1}},computed:Object(o["a"])({},Object(d["b"])(["stage"])),methods:{setCharacterID:function(e){this.characterID=e,this.showDetail=!0},closeDetail:function(){this.characterID="",this.showDetail=!1},characterIsSelected:function(){this.$emit("characterIsSelected",this.characterID)}}};c("8b25");h.render=l,h.__scopeId="data-v-c67f7c98";t["default"]=h},fa3e:function(e,t,c){e.exports=c.p+"img/tiger.3823c522.png"},fbd9:function(e,t,c){"use strict";c.r(t),c.d(t,"STAGES",(function(){return a})),c.d(t,"CHARACTERS",(function(){return n})),c.d(t,"LEVELS",(function(){return s}));var a={STAGE:0,INTRO_STAGE:1,TUTORIAL_STAGE:2,PLAY_STAGE:3,FINAL_STAGE:4},n=[{name:"Basic boy",id:0,icon:"assets/characters/pig.png",data:"Something",ability:"Run"},{name:"Basic Girl",id:1,icon:"assets/characters/tiger.png",data:"Something",ability:"Run"},{name:"Character 3",id:2,icon:"assets/characters/pig.png",data:"Something",ability:"Run"},{name:"Character 4",id:3,icon:"assets/characters/tiger.png",data:"Something",ability:"Run"},{name:"Character 5",id:4,icon:"assets/characters/pig.png",data:"Something",ability:"Run"},{name:"Character 6",id:5,icon:"assets/characters/tiger.png",data:"Something",ability:"Run"},{name:"Character 7",id:6,icon:"assets/characters/pig.png",data:"Something",ability:"Run"},{name:"Character 8",id:7,icon:"assets/characters/tiger.png",data:"Something",ability:"Run"}],s=[{id:0,text:"Add text HERE",description:"Description of level 1",isActive:!0,adress:"assets/levels/1.png"},{id:1,text:"Add text HERE",description:"Description of level 2",isActive:!1,adress:"assets/levels/2.png"},{id:2,text:"Add text HERE",description:"Description of level 3",isActive:!1,adress:"assets/levels/3.png"}]},fd73:function(e,t,c){"use strict";c("e2aa")}});
//# sourceMappingURL=app.a15b59a5.js.map