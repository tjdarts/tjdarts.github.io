(this.webpackJsonptjdarts=this.webpackJsonptjdarts||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),s=n.n(a),o=n(11),c=n.n(o),i=n(140),u=n(141),l=n(76),d=n(23),h=[{displayName:"301",credit:1,name:"zero-one",rounds:15,score:301},{displayName:"501",credit:2,name:"zero-one",rounds:20,score:501},{displayName:"701",credit:3,name:"zero-one",rounds:20,score:701},{displayName:"Count-up",credit:2,name:"count-up",rounds:8},{displayName:"3 darts 1 prize",credit:1,name:"3-darts-1-prize",rounds:1}],f="topGames",b={mode:"home",dartboard:"granboard",defaultGameCategory:f,defaultGames:{topGames:[h[0],h[1],h[2],h[3]]}.topGames,maxPlayers:4,players:Object(d.a)(Array(4).keys()).map((function(e){return{name:"Player ".concat(e+1)}})),soundTheme:"default",styleTheme:"default",users:["itoyxd@gmail.com"]},m=n(62),p=n(67),g=n(38);m.a.use(p.a).use(g.e).init({resources:{en:{translations:{"01 game":"01 game",301:"301",501:"501",701:"701",Back:"Back","Connect dartboard":"Connect dartboard","Count-up":"Count-up","Game on":"Game on","1 player":"1 player","2 players":"2 players","3 players":"3 players","4 players":"4 players","One bull":"One bull","Player 1":"Player 1","Player 2":"Player 2","Player 3":"Player 3","Player 4":"Player 4","Press \ud83d\udd34 to change player":"Press \ud83d\udd34 to change player","Press \ud83d\udd34 to next round":"Press \ud83d\udd34 to next round",Rounds:"Rounds","\ud83d\ude31 Bust \ud83d\udc94":"\ud83d\ude31 Bust \ud83d\udc94",bullseyeAward:"\ud83d\udd25 {{bull}} \ud83c\udfaf",winnersAward:"\ud83c\udfc6 {{name}} wins! \u270c\ufe0f"}},zh:{translations:{"01 game":"01 \u904a\u6232",301:"\u53c3\u96f6\u58f9",501:"\u4f0d\u96f6\u58f9",701:"\u67d2\u96f6\u58f9",Back:"\u4e0a\u4e00\u9801","Connect dartboard":"\u9023\u63a5\u98db\u93e2\u9776","Count-up":"\u5206\u6578\u8dd1\u8d77\u4f86","Game on":"\u958b\u59cb\u904a\u6232","1 player":"\u4e00\u540d\u73a9\u5bb6","2 players":"\u5169\u540d\u73a9\u5bb6","3 players":"\u4e09\u540d\u73a9\u5bb6","4 players":"\u56db\u540d\u73a9\u5bb6","One bull":"\u4e00\u96bb\u7a7f\u96f2\u7d05\u5fc3\u7bad \ud83d\ude1c","Player 1":"\u53f0\u5ba2","Player 2":"\u7063\u7063","Player 3":"\u91d1\u8001","Player 4":"\u93e2\u54e5","Press \ud83d\udd34 to change player":"\u6309 \ud83d\udd34 \u63db\u4e0b\u4e00\u500b\u73a9\u5bb6","Press \ud83d\udd34 to next round":"\u6309 \ud83d\udd34 \u5230\u4e0b\u4e00\u500b\u56de\u5408",Rounds:"\u56de\u5408","\ud83d\ude31 Bust \ud83d\udc94":"\ud83d\ude31 Bust \u6b98\u5ff5 \ud83d\udc94",bullseyeAward:"\ud83d\udd25 {{bull}} \ud83c\udfaf",winnersAward:"\ud83c\udfc6 {{name}} \u7372\u52dd\uff01 \u270c\ufe0f"}}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:">",nsSeparator:"|",interpolation:{escapeValue:!1}});var j=m.a,O={colors:{blue:"#01befe",yellow:"#ffdd00",orange:"#ff7d00",red:"#ff006d",green:"#adff02",purple:"#8f00ff",black:"#000000"},contrastText:"#ffffff"},y=Object(l.a)({palette:{default:O,happy:O},players:[O.colors.blue,O.colors.red,O.colors.yellow,O.colors.purple],gameScore:{zIndex:1600},gameAward:{zIndex:1601},typography:{fontFamily:['"Russo One"','"Noto Serif TC"',"-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiListItem:{root:{textTransform:"uppercase"}}}}),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},S=s.a.createContext(),x=n(14),I=n(4),C=n(6),T=n(72);var P=new(n.n(T).a),D=[{name:"Brandenburger Tor",url:"https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"Hallstatt",url:"/resources/images/background/hallstatt.jpg"},{name:"Taipei 101",url:"https://images.pexels.com/photos/260566/pexels-photo-260566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],w=function(){function e(t){var n=this;Object(I.a)(this,e),this.start=function(){n.setBackgroundImage(n.randomImage),P.on("GAME_MESSAGE",n.handleGameOn)},this.stop=function(){return P.off("GAME_MESSAGE",n.handleGameOn)},this.handleGameOn=function(e){return"gameOn"===e&&n.setBackgroundImage(n.randomImage)},this.setBackgroundImage=t,this.imageIndex=this.randomIndex}return Object(C.a)(e,[{key:"randomIndex",get:function(){return Math.floor(Math.random()*Math.floor(D.length))}},{key:"randomImage",get:function(){var e;do{e=this.randomIndex}while(e===this.imageIndex);return this.imageIndex=e,D[e]}}]),e}(),k=n(21),E=n(30),A=n(48),N=n(31),G=n(16),L={steelTip:"steel-tip",softTip:"soft-tip"},R={builtIn:"built-in",usb:"usb",bluetooth:"bluetooth"},B=function e(){var t=this;Object(I.a)(this,e),this.type=L.softTip,this.connection=R.builtIn,this.isSteelTipType=function(){return t.type===L.steelTip},this.isSoftTipType=function(){return t.type===L.softTip},this.isBuiltInConnection=function(){return t.connection===R.builtIn},this.isUsbConnection=function(){return t.connection===R.usb},this.isBluetoothConnection=function(){return t.connection===R.bluetooth}};B.types=L,B.connections=R;var M={841888576:"S1I",841889088:"S1O",841889344:"D1",841888832:"T1",959328576:"S2I",959328832:"S2O",942551616:"D2",959328320:"T2",925774144:"S3I",925774400:"S3O",942552128:"D3",925773888:"T3",808333632:"S4I",808334656:"S4O",808334912:"D4",808334144:"T4",892219712:"S5I",892220480:"S5O",875443776:"D5",892219968:"T5",825110592:"S6I",825111360:"S6O",875443264:"D6",825110848:"T6",211278508352:"S7I",211278509120:"S7O",942552640:"D7",211278508608:"T7",908997184:"S8I",908997952:"S8O",908998208:"D8",908997696:"T8",959329088:"S9I",959329600:"S9O",959329856:"D9",959329344:"T9",841887808:"S10I",841888320:"S10O",875443008:"D10",841888064:"T10",925774656:"S11I",925775168:"S11O",925775424:"D11",925774912:"T11",892219456:"S12I",892220736:"S12O",892220992:"D12",892220224:"T12",808333376:"S13I",808334400:"S13O",875443520:"D13",808333888:"T13",211261731648:"S14I",211261732160:"S14O",211261732416:"D14",211261731904:"T14",858665024:"S15I",858665536:"S15O",875442752:"D15",858665280:"T15",211278508096:"S16I",211278509376:"S16O",211278509632:"D16",211278508864:"T16",211261731136:"S17I",211261731392:"S17O",942551872:"D17",211261730880:"T17",825111104:"S18I",825111872:"S18O",825112128:"D18",825111616:"T18",908996928:"S19I",908997440:"S19O",942552384:"D19",908996672:"T19",858665792:"S20I",858666304:"S20O",858666560:"D20",858666048:"T20",942551104:"SBULL",875442240:"DBULL",1112821312:"CHANGE"},U=function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(I.a)(this,n),(e=t.call(this,"GRANBOARD","442f1570-8a00-9a28-cbe1-e1d4212d53eb","442f1571-8a00-9a28-cbe1-e1d4212d53eb")).map=M,e}return n}(function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(e,r,a){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(I.a)(this,n),(s=t.call(this)).connection=B.connections.bluetooth,s.valid=!0,s.map=null,s.device=null,s.characteristic=null,s.connect=function(){var e=Object(G.a)(s),t=e.device,n=e.deviceName,r=e.serviceUuid,a=e.characteristicUuid,o=e.options;if(!t||!t.gatt.connected)return navigator.bluetooth.requestDevice({filters:[{name:n},{services:[r]}]}).then((function(e){return s.device=e,o.autoReconnect&&e.addEventListener("gattserverdisconnected",s.handleDeviceAutoReconnect),e.gatt.connect()})).then((function(e){return e.getPrimaryService(r)})).then((function(e){return e.getCharacteristic(a)})).then((function(e){return s.characteristic=e,e.startNotifications()})).then((function(){return s.characteristic.addEventListener("characteristicvaluechanged",s.handleDartboardHit),Promise.resolve()}))},s.disconnect=function(){var e=Object(G.a)(s),t=e.characteristic,n=e.device,r=e.options;return t?t.stopNotifications().then((function(){return t.removeEventListener("characteristicvaluechanged",s.handleDartboardHit)})).then((function(){return n&&n.gatt.connected&&(r.autoReconnect&&n.removeEventListener("gattserverdisconnected",s.handleDeviceAutoReconnect),n.gatt.disconnect()),Promise.resolve()})):Promise.resolve()},s.handleDartboardHit=function(e){for(var t=e.target.value,n=[],r=0;r<t.byteLength;r++)n.push(("00"+t.getUint8(r).toString(16)).slice(-2));var a=s.map[parseInt("0x".concat(n.join("")))];a&&("CHANGE"!==a?P.emit("DARTBOARD_HIT",a):P.emit("CHANGE_BUTTON_CLICK"))},s.handleDeviceAutoReconnect=function(){s.device.gatt.connect()},navigator.bluetooth?(s.deviceName=e,s.serviceUuid=r,s.characteristicUuid=a,s.options=Object(A.a)({autoReconnect:!0},o),s.map={},s):(console.warn("Web Bluetooth is not supported."),Object(N.a)(s,{valid:!1}))}return Object(C.a)(n,[{key:"connected",get:function(){return this.device&&this.device.gatt.connected}}]),n}(B)),_={32:"S1I",33:"S1O",34:"D1",35:"T1",36:"S2I",37:"S2O",38:"D2",39:"T2",40:"S3I",41:"S3O",42:"D3",43:"T3",44:"S4I",45:"S4O",46:"D4",47:"T4",48:"S5I",49:"S5O",50:"D5",51:"T5",52:"S6I",53:"S6O",54:"D6",55:"T6",56:"S7I",57:"S7O",58:"D7",59:"T7",60:"S8I",61:"S8O",62:"D8",63:"T8",64:"S9I",65:"S9O",66:"D9",67:"T9",68:"S10I",69:"S10O",70:"D10",71:"T10",72:"S11I",73:"S11O",74:"D11",75:"T11",76:"S12I",77:"S12O",78:"D12",79:"T12",80:"S13I",81:"S13O",82:"D13",83:"T13",84:"S14I",85:"S14O",86:"D14",87:"T14",88:"S15I",89:"S15O",90:"D15",91:"T15",92:"S16I",93:"S16O",94:"D16",95:"T16",96:"S17I",97:"S17O",98:"D17",99:"T17",100:"S18I",101:"S18O",102:"D18",103:"T18",104:"S19I",105:"S19O",106:"D19",107:"T19",108:"S20I",109:"S20O",110:"D20",111:"T20",112:"SBULL",113:"DBULL",114:"OUT",115:"CHANGE"},H=function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(I.a)(this,n),(e=t.call(this)).connection=B.connections.builtIn,e.connected=!1,e.map=null,e.connect=function(){return document.addEventListener("keypress",e.handleDartboardHit),e.connected=!0,Promise.resolve()},e.disconnect=function(){return document.removeEventListener("keypress",e.handleDartboardHit),e.connected=!1,Promise.resolve()},e.handleDartboardHit=function(t){var n=Object(G.a)(e).map;t.keyCode>=32&&t.keyCode<=114?P.emit("DARTBOARD_HIT",n[t.keyCode]):"CHANGE"===n[t.keyCode]&&P.emit("CHANGE_BUTTON_CLICK")},e.map=_,e}return n}(B),F=function(){function e(){Object(I.a)(this,e)}return Object(C.a)(e,null,[{key:"create",value:function(e){switch(e){case"granboard":return new U;case"keyboard":default:return new H}}}]),e}(),z=j.getFixedT(),K={back:{id:"back",type:"sound",block:!1,soundEffect:"back"},bust:{id:"bust",type:"dialog",text:z("\ud83d\ude31 Bust \ud83d\udc94"),block:!0,soundEffect:"bust"},dart:{id:"dart",type:"sound",block:!1,soundEffect:"dart"},dbull:function(e){return{id:"dbull",type:"snackbar",text:z("bullseyeAward",{bull:e}),autoHideDuration:1500,block:!1,soundEffect:"dbull"}},gameOn:{id:"gameOn",type:null,block:!1},hatTrick:{id:"hatTrick",type:"animationDialog",autoHideDuration:1500,block:!1},highTon:{id:"highTon",type:"animationDialog",autoHideDuration:1500,block:!1},lowTon:{id:"lowTon",type:"animationDialog",autoHideDuration:1500,block:!1},next:{id:"next",type:"sound",block:!1,soundEffect:"next"},nextPlayer:{id:"nextPlayer",type:"dialog",text:z("Press \ud83d\udd34 to change player"),block:!0},nextRound:{id:"nextRound",type:"dialog",text:z("Press \ud83d\udd34 to next round"),block:!0},oneBull:{id:"oneBull",type:"animationDialog",autoHideDuration:1500,block:!1},sbull:function(e){return{id:"sbull",type:"snackbar",text:z("bullseyeAward",{bull:e}),autoHideDuration:1500,block:!1,soundEffect:"sbull"}},win:function(e){return{id:"win",type:"dialog",text:z("winnersAward",{name:e}),block:!0,soundEffect:"win"}}},V=function(){function e(){Object(I.a)(this,e)}return Object(C.a)(e,null,[{key:"create",value:function(e,t){var n=null;return K[e]&&(n="function"===typeof K[e]?K[e](t):K[e]),n}}]),e}(),q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"OUT",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{type:"SOFT_TIP"};if(Object(I.a)(this,e),this.valid=!0,!e.isValid(t))return{valid:!1};this.symbol=t,this.index=n,this.options=r,this.displaySymbol=this.toDisplaySymbol(),this.value=this.toValue()}return Object(C.a)(e,[{key:"toValue",value:function(){var e,t=this.symbol,n=this.toDisplaySymbol(),r=n.slice(1,t.length);switch(n.charAt(0)){case"S":e="BULL"===r?50:parseInt(r,10);break;case"D":e="BULL"===r?50:2*parseInt(r,10);break;case"T":e=3*parseInt(r,10);break;case"O":case"B":default:e=0}return e}},{key:"toDisplaySymbol",value:function(){var e=this.symbol;return"I"===e.slice(-1)||"O"===e.slice(-1)?e.slice(0,e.length-1):e}}],[{key:"isValid",value:function(e){var t=!1;if(/^S\d{1,2}I$/.test(e)||/^S\d{1,2}O$/.test(e)){var n=parseInt(e.slice(1,e.length-1),10);t=n>=1&&n<=20}else if(/^[DT]\d{1,2}$/.test(e)){var r=parseInt(e.slice(1,e.length),10);t=r>=1&&r<=20}else(/^[SD]BULL$/.test(e)||"OUT"===e||"BUST"===e)&&(t=!0);return t}}]),e}(),J=function e(t,n){var r=this;Object(I.a)(this,e),this.scores=[],this.addScore=function(e){try{if(r.isNewScoreAddable()){var t=new q(e,r.scores.length,r.options);if(!t.valid)throw new Error("The `scoreSymbol` is invalid!");return r.scores.push(t),t}throw new Error("The `scores` array cannot contain more than 3 Score objects!")}catch(n){return console.error(n),null}},this.getCurrentScore=function(){return r.scores[r.scores.length-1]},this.isNewScoreAddable=function(){return r.scores.length<3&&!r.scores.some((function(e){return"BUST"===e.symbol}))},this.index=t,this.options=n},Z=function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(I.a)(this,e),this.rounds=[],this.addScore=function(e){var t=n.getCurrentRound();return t&&t.isNewScoreAddable()||(t=n.addRound()),t.addScore(e)},this.addRound=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new J(n.rounds.length,n.options);try{if(!(n.rounds.length<n.roundsLength))throw new Error("The `rounds` array cannot contain more than ".concat(n.roundsLength," Round objects!"));return n.rounds.push(e),e}catch(t){return console.error(t),null}},this.getCurrentRound=function(){return n.rounds[n.rounds.length-1]},this.removeCurrentRound=function(){return n.rounds.pop()},this.isLastRoundFinished=function(){var e=n.getCurrentRound();return n.rounds.length===n.roundsLength&&e&&!e.isNewScoreAddable()},this.roundsLength=t,this.options=r},$=function(){function e(){Object(I.a)(this,e)}return Object(C.a)(e,null,[{key:"isBullseye",value:function(e){return"SBULL"===e.symbol||"DBULL"===e.symbol}},{key:"getMessage",value:function(t){var n=null;if(t instanceof q)if(e.isBullseye(t)){var r=t.symbol.toLowerCase();n=V.create(r,r)}else n=V.create("dart");else if(t instanceof J){var a=t.scores,s=X(a),o=W(a);s<100&&1===o?n=V.create("oneBull"):s>=100&&s<150?n=V.create("lowTon"):3===o?n=V.create("hatTrick"):s>=151&&(n=V.create("highTon"))}return n}}]),e}(),W=function(e){var t=0;return e.forEach((function(e){return("SBULL"===e.symbol||"DBULL"===e.symbol)&&t++})),t},X=function(e){var t=0;return e.forEach((function(e){return t+=e.toValue()})),t},Y=n(73),Q=n(10),ee=function(){function e(t,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(I.a)(this,e),this.currentPlayerIndex=-1,this.currentPlayerDartScores=[],this.gameScores=[],this.messages=[],this.players=[],this.scoreboards=[],this.isLastRoundFinished=function(){return r.scoreboards[r.players.length-1].isLastRoundFinished()},this.addScoreForCurrentPlayer=function(e){var t=r.scoreboards[r.currentPlayerIndex].addScore(e);return r.currentPlayerDartScores.length<3?r.currentPlayerDartScores=r.currentPlayerDartScores.concat(t):r.currentPlayerDartScores=[t],t},this.addRoundForCurrentPlayer=function(e){var t=r.scoreboards[r.currentPlayerIndex].addRound(e);return t&&(r.currentPlayerDartScores=t.scores),t},this.deleteCurrentRoundForCurrentPlayer=function(){var e=r.scoreboards[r.currentPlayerIndex].removeCurrentRound(),t=r.scoreboards[r.currentPlayerIndex].getCurrentRound();return r.currentPlayerDartScores=t?t.scores:[],e},this.addMessage=function(e){return e&&(r.messages=r.messages.concat(e))},this.deleteMessage=function(e){var t=r.messages.findIndex((function(t){return t.id=e}));-1!==t&&r.messages.splice(t,1)},this.clearMessages=function(){return r.messages=[]},this.setCurrentPlayerIndex=function(e){return r.currentPlayerIndex=e},this.setCurrentPlayerGameScore=function(e){return r.gameScores[r.currentPlayerIndex]=e},this.increaseCurrentPlayerGameScore=function(e){return r.setCurrentPlayerGameScore(r.currentPlayerGameScore+e)},this.decreaseCurrentPlayerGameScore=function(e){return r.setCurrentPlayerGameScore(r.currentPlayerGameScore-e)},Object(Q.e)(this,{currentPlayerIndex:Q.f,currentPlayerDartScores:Q.f,gameScores:Q.f,messages:Q.f,players:Q.f,scoreboards:Q.f,currentPlayer:Q.c,currentPlayerGameScore:Q.c,currentPlayerScoreboard:Q.c,addRoundForCurrentPlayer:Q.b,deleteCurrentRoundForCurrentPlayer:Q.b,addMessage:Q.b,deleteMessage:Q.b,clearMessages:Q.b,setCurrentPlayerIndex:Q.b,setCurrentPlayerGameScore:Q.b,increaseCurrentPlayerGameScore:Q.b,decreaseCurrentPlayerGameScore:Q.b}),this.players=t,t.forEach((function(e,t){r.scoreboards[t]=new Z(n),r.scoreboards[t].addRound(),r.gameScores[t]=a})),this.currentPlayerIndex=0}return Object(C.a)(e,[{key:"currentPlayer",get:function(){return this.players[this.currentPlayerIndex]}},{key:"currentPlayerGameScore",get:function(){return this.gameScores[this.currentPlayerIndex]}},{key:"currentPlayerScoreboard",get:function(){return this.scoreboards[this.currentPlayerIndex]}},{key:"lastPlayer",get:function(){return this.players[this.players.length-1]}},{key:"lastPlayerScoreboard",get:function(){return this.scoreboards[this.players.length-1]}}]),e}(),te=function(){function e(){Object(I.a)(this,e)}return Object(C.a)(e,null,[{key:"has",value:function(e){return b.users.includes(e)}}]),e}(),ne={isLogined:!0},re={isLogined:!1},ae=function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"91304192363-7fr8mvjp3ph628joqchr32d1iu2lr38l.apps.googleusercontent.com",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://tjdarts.github.io";Object(I.a)(this,e),this.auth=function(){return n.isLogined().then((function(e){if(!e.isLogined){var t,r={},a=new URLSearchParams(window.location.hash.substring(1)),s=Object(Y.a)(a);try{for(s.s();!(t=s.n()).done;){var o=Object(x.a)(t.value,2),c=o[0],i=o[1];r[c]=i}}catch(u){s.e(u)}finally{s.f()}if(Object.keys(r).length>0){if(localStorage.setItem(n.storageItemName,JSON.stringify(r)),r.state&&"try_sample_request"===r.state)return n.isLogined()}else n.openSignInForm()}return Promise.resolve(e)}))},this.isLogined=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(n.storageItemName));if(t&&t.access_token){var r=new XMLHttpRequest;r.open("GET","https://people.googleapis.com/v1/people/me?personFields=emailAddresses&access_token=".concat(t.access_token)),r.onreadystatechange=function(){try{if(4===r.readyState)if(200===r.status){var t=JSON.parse(r.response).emailAddresses[0].value;te.has(t)?e(ne):e(re)}else e(re)}catch(n){console.error(n),e(re)}},r.send(null)}else e(re)}))},this.openSignInForm=function(){var e=document.createElement("form");e.setAttribute("method","GET"),e.setAttribute("action","https://accounts.google.com/o/oauth2/v2/auth");var t={client_id:n.clientId,redirect_uri:n.redirectUri,scope:"profile https://www.googleapis.com/auth/user.emails.read",state:"try_sample_request",response_type:"token"};for(var r in t){var a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name",r),a.setAttribute("value",t[r]),e.appendChild(a)}document.body.appendChild(e),e.submit()},this.storageItemName=t,this.clientId=r,this.redirectUri=a},se=j.getFixedT(),oe=function(){function e(t){Object(I.a)(this,e),this._players=t}return Object(C.a)(e,[{key:"players",get:function(){return this._players.map((function(e,t){return{name:se(e.name),index:t}}))}}]),e}(),ce=n(59),ie=["default"],ue=["hover","press","back","game_on","next","dart","sbull","dbull","bust","win"],le=new function e(){var t=this;Object(I.a)(this,e),this.theme="default",this.soundEffects={},this.play=function(e){return new Promise((function(n){t.soundEffects[e].on("end",n),t.soundEffects[e].play()}))},this.setTheme=function(e){ie.includes(e)&&(t.theme=e),t.loadSoundEffects()},this.loadSoundEffects=function(){ue.forEach((function(e){t.soundEffects[e]=new ce.Howl({src:["/resources/sound-effects/".concat(t.theme,"/").concat(e,".webm")]}),t.soundEffects[e].on("loaderror",(function(){t.soundEffects[e]=new ce.Howl({src:["/resources/sound-effects/default/".concat(e,".webm")]})}))}))},this.setTheme(b.soundTheme)};function de(e){var t=Object(a.useState)({isLogined:!1}),n=Object(x.a)(t,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){var e=new ae("oauth2-tjdart-params");window.oauth=e,e.auth().then((function(e){return o(e)}))}),[o]),Object(r.jsx)(S.Provider,{value:s,children:e.children})}var he=n(75),fe=n(32),be=n(13),me=n(130),pe=n(146),ge=n(132),je=n(36),Oe=function(e){return{score:{color:function(t){return"".concat(e.players[t.index],"e0")},fontSize:"27rem",textShadow:"-10px 0 white, 0 10px white, 10px 0 white, 0 -10px white"}}},ye=Object(me.a)(Oe);function ve(e){var t=e.score,n=e.index,a=ye({index:n});return Object(r.jsx)(je.a,{className:a.score,variant:"h1",align:"center",children:t})}var Se=n(9),xe=function(e){var t;return{gameName:{margin:"24px",textTransform:"uppercase",textShadow:"-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white"},gameScore:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:e.gameScore.zIndex,top:0,left:0,width:"100%",height:"100%"},scoreboard:{float:"left",marginLeft:"24px"},scores:{float:"right",width:"220px"},playerCards:(t={},Object(Se.a)(t,e.breakpoints.between("sm","xl"),{position:"fixed"}),Object(Se.a)(t,"bottom",0),Object(Se.a)(t,"left",0),t)}},Ie=Object(me.a)(xe);function Ce(e){var t=e.name,n=e.player,a=e.players,s=e.dartScores,o=e.scoreboard,c=e.gameScore,i=e.gameScores,u=Object(pe.a)().t,l=Ie();return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:l.gameScore,children:Object(r.jsx)(ve,{index:n.index,name:n.name,score:c})}),Object(r.jsx)(It,{className:l.gameName,variant:"h4",align:"center",children:u(t)}),Object(r.jsx)(jt,{className:l.scoreboard,rounds:o.rounds,totalRounds:o.roundsLength}),Object(r.jsx)(vt,{className:l.scores,scores:s}),Object(r.jsx)(ge.a,{container:!0,className:l.playerCards,spacing:3,children:a.map((function(e,t){return Object(r.jsx)(ge.a,{item:!0,xs:3,children:Object(r.jsx)(ht,{index:t,name:e.name,score:i[t],active:t===n.index})},t)}))})]})}var Te=n(133),Pe=n(134);function De(e){var t=e.appState,n=b.defaultGames,s=Object(be.g)(),o=Object(a.useState)(0),c=Object(x.a)(o,2),i=c[0],u=c[1],l=Object(pe.a)().t;return Object(r.jsx)(Te.a,{children:Object(r.jsx)(rt,{selectedIndex:i,setSelectedIndex:u,children:n.map((function(e,n){return Object(r.jsx)(Pe.a,{selected:n===i,onMouseOver:function(){return le.play("hover")},onClick:function(){return function(e){le.play("press"),t.game=e,s.push("/game-menu/players")}({name:e.name,rounds:e.rounds,score:e.score})},children:Object(r.jsx)(It,{variant:"h2",children:l(e.displayName)})},n)}))})})}var we=new oe(b.players);function ke(e){var t=e.appState,n=Object(be.g)(),s=we.players,o=Object(a.useState)(0),c=Object(x.a)(o,2),i=c[0],u=c[1],l=Object(pe.a)().t;return Object(r.jsx)(Te.a,{children:Object(r.jsxs)(rt,{selectedIndex:i,setSelectedIndex:u,children:[Object(d.a)(Array(s.length).keys()).map((function(e){return Object(r.jsx)(Pe.a,{selected:e===i,onMouseOver:function(){return le.play("hover")},onClick:function(){return function(e){le.play("game_on"),t.players=e,P.emit("GAME_MESSAGE","gameOn"),n.push("/game")}(s.slice(0,e+1))},children:Object(r.jsx)(It,{variant:"h2",children:l("".concat(e+1," player").concat(e>0?"s":""))})},e)})),Object(r.jsx)(Pe.a,{selected:s.length===i,onMouseOver:function(){return le.play("hover")},onClick:function(){le.play("back"),n.push("/game-menu/games")},children:Object(r.jsx)(It,{variant:"h3",children:l("Back")})})]})})}var Ee=function(e){return{root:{margin:"24px"}}},Ae=Object(me.a)(Ee);function Ne(e){var t=e.appState,n=Ae(),a=Object(be.h)().step,s=function(e){switch(e.step){case"games":return Object(r.jsx)(De,{appState:t});case"players":return Object(r.jsx)(ke,{appState:t});default:return null}};return Object(r.jsx)("div",{className:n.root,children:Object(r.jsx)(s,{step:a})})}var Ge=n(142),Le={UNINITIALIZED:0,INITIALIZED:1,STARTED:2,RESUMED:3,PAUSED:4,STOPPED:5},Re=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{rounds:8,score:0};Object(I.a)(this,e),this.state=null,this.status=Le.UNINITIALIZED,this.start=function(){(n.isInitialized()||n.isStopped())&&(n.addListeners(),P.on("CHANGE_BUTTON_CLICK",n.handleChangeButtonClick),n.status=Le.STARTED,n.resume())},this.resume=function(){(n.isStarted()||n.isPaused())&&(P.on("DARTBOARD_HIT",n.handleDartboardHit),n.status=Le.RESUMED)},this.pause=function(){n.isResumed()&&(P.off("DARTBOARD_HIT",n.handleDartboardHit),n.status=Le.PAUSED)},this.stop=function(){(n.isStarted()||n.isResumed()||n.isPaused())&&(P.off("DARTBOARD_HIT",n.handleDartboardHit),P.off("CHANGE_BUTTON_CLICK",n.handleChangeButtonClick),n.removeListeners(),n.status=Le.STOPPED)},this.addListeners=function(){P.on("GAME_START",n.start),P.on("GAME_RESUME",n.resume),P.on("GAME_PAUSE",n.pause),P.on("GAME_STOP",n.stop)},this.removeListeners=function(){P.off("GAME_START",n.start),P.off("GAME_RESUME",n.resume),P.off("GAME_PAUSE",n.pause),P.off("GAME_STOP",n.stop)},this.isInitialized=function(){return n.status===Le.INITIALIZED},this.isStarted=function(){return n.status===Le.STARTED},this.isResumed=function(){return n.status===Le.RESUMED},this.isPaused=function(){return n.status===Le.PAUSED},this.isStopped=function(){return n.status===Le.STOPPED},this.onDartboardHit=function(e){},this.onChangeButtonClick=function(){},this.onGameOver=function(){},this.handleDartboardHit=function(e){var t=n.state,r=t.addScoreForCurrentPlayer,a=t.currentPlayerScoreboard,s=r(e);s&&(n.state.addMessage($.getMessage(s)),2===s.index&&n.state.addMessage($.getMessage(a.getCurrentRound())),n.onDartboardHit(s))},this.handleChangeButtonClick=function(){n.isLastRound()?n.handleGameOver():(n.onChangeButtonClick(),n.switchToNextPlayer())},this.switchToNextPlayer=function(){var e=(n.state.currentPlayerIndex+1)%n.players.length;n.state.setCurrentPlayerIndex(e),n.resume()},this.handleGameOver=function(){n.addGameMessage("win",n.winners[0].name),P.off("CHANGE_BUTTON_CLICK",n.handleChangeButtonClick),n.onGameOver()},this.isLastRound=function(){return n.state.currentPlayer===n.state.lastPlayer&&n.state.lastPlayerScoreboard.rounds.length===n.options.rounds},this.addGameMessage=function(e,t){var r=V.create(e,t);r&&(r.block&&n.pause(),n.state.addMessage(r))},this.players=t,this.options=r,this.state=new ee(t,r.rounds,r.score),this.status=Le.INITIALIZED}return Object(C.a)(e,[{key:"winners",get:function(){return[]}}]),e}();Re.statuses=Le;var Be=function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onDartboardHit=function(t){var n=e.state,r=n.currentPlayerScoreboard,a=n.increaseCurrentPlayerGameScore,s=n.isLastRoundFinished;a(t.value);var o=r.getCurrentRound();s()?e.handleGameOver():o&&2===o.getCurrentScore().index&&e.addGameMessage("nextPlayer")},e.onChangeButtonClick=function(){var t=e.state,n=t.addRoundForCurrentPlayer,r=t.clearMessages;n(),r(),e.addGameMessage("next")},e.handleGameMessageOnClose=function(t){t.block&&e.resume(),e.state.deleteMessage(t.id)},e}return Object(C.a)(n,[{key:"winners",get:function(){var e=this,t=this.state.players.map((function(t,n){return{name:t.name,score:e.state.gameScores[n]}})).sort((function(e,t){return t.score-e.score}));return t.filter((function(e){return e.score===t[0].score}))}}]),n}(Re);function Me(e){var t=e.players,n=e.rounds,o=Object(be.g)();0===t.length&&o.push("/game-menu");var c=Object(a.useMemo)((function(){return new Be(t,{rounds:n})}),[t,n]);Object(a.useEffect)((function(){return c.start(),c.onGameOver=function(){P.once("CHANGE_BUTTON_CLICK",(function(){c.addGameMessage("back"),o.push("/game-menu")}))},function(){c.stop()}}),[c,o]);var i=Object(Ge.a)((function(e){var t=e.game.state,n=t.currentPlayer,a=t.currentPlayerGameScore,s=t.currentPlayerDartScores,o=t.currentPlayerScoreboard,c=t.players,i=t.gameScores;return Object(r.jsx)(Ce,{name:"Count-up",player:n,gameScore:a,dartScores:s,scoreboard:o,players:c,gameScores:i})})),u=Object(Ge.a)((function(e){var t=e.game,n=t.state.messages;return Object(r.jsx)(nt,{messages:n,onClose:t.handleGameMessageOnClose})}));return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(i,{game:c}),Object(r.jsx)(u,{game:c})]})}var Ue=function(e){Object(k.a)(n,e);var t=Object(E.a)(n);function n(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{score:301,rounds:15};return Object(I.a)(this,n),(r=t.call(this,e,a)).onDartboardHit=function(e){var t=r.state,n=t.isLastRoundFinished,a=t.currentPlayerScoreboard;(0,t.decreaseCurrentPlayerGameScore)(e.value);var s=a.getCurrentRound(),o=r.state.currentPlayerGameScore;0===o||n()?r.handleGameOver():o>0&&s&&2===s.getCurrentScore().index?r.addGameMessage("nextPlayer"):o<0&&r.addGameMessage("bust")},r.onChangeButtonClick=function(){var e=r.state,t=e.addRoundForCurrentPlayer,n=e.clearMessages,a=e.currentPlayerGameScore,s=e.deleteCurrentRoundForCurrentPlayer,o=e.increaseCurrentPlayerGameScore;if(n(),a<0){var c=s();o(c.scores.map((function(e){return e.value})).reduce((function(e,t){return e+t}))),(c=new J(c.index)).addScore("BUST"),t(c)}t(),r.addGameMessage("next")},r.handleGameMessageOnClose=function(e){e.block&&r.resume(),r.state.deleteMessage(e.id)},r}return Object(C.a)(n,[{key:"winners",get:function(){var e=this,t=this.state.players.map((function(t,n){return{name:t.name,score:e.state.gameScores[n]}})).sort((function(e,t){return e.score-t.score}));return t.filter((function(e){return e.score===t[0].score}))}}]),n}(Re);function _e(e){var t=e.players,n=e.rounds,o=e.score,c=Object(be.g)();0===t.length&&c.push("/game-menu");var i=Object(a.useMemo)((function(){return new Ue(t,{score:o,rounds:n})}),[t,o,n]);Object(a.useEffect)((function(){return i.start(),i.onGameOver=function(){P.once("CHANGE_BUTTON_CLICK",(function(){i.addGameMessage("back"),c.push("/game-menu")}))},function(){i.stop()}}),[i,c]);var u=Object(Ge.a)((function(e){var t=e.game.state,n=t.currentPlayer,a=t.currentPlayerGameScore,s=t.currentPlayerDartScores,o=t.currentPlayerScoreboard,c=t.players,i=t.gameScores;return Object(r.jsx)(Ce,{name:"01 game",player:n,gameScore:a,dartScores:s,scoreboard:o,players:c,gameScores:i})})),l=Object(Ge.a)((function(e){var t=e.game,n=t.state.messages;return Object(r.jsx)(nt,{messages:n,onClose:t.handleGameMessageOnClose})}));return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(u,{game:i}),Object(r.jsx)(l,{game:i})]})}function He(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{game:{},players:[]},t=e.game,n=e.players,a=Object(be.g)();switch(t.name){case"zero-one":return Object(r.jsx)(_e,{players:n,score:t.score,rounds:t.rounds});case"count-up":return Object(r.jsx)(Me,{players:n,rounds:t.rounds});default:return a.push("/"),null}}var Fe=n(144),ze=function(e){return{text:{textTransform:"uppercase"},snackbar:{width:"100%"},snackbarContent:{color:"#000",backgroundColor:"#fff"}}},Ke=Object(me.a)(ze);function Ve(e){var t=e.message,n=e.onClose,s=Ke(),o=Object(a.useState)(!0),c=Object(x.a)(o,2),i=c[0],u=c[1];return Object(a.useEffect)((function(){u(!0),t.soundEffect&&le.play(t.soundEffect)}),[t]),Object(r.jsx)(Fe.a,{anchorOrigin:{vertical:"top",horizontal:"center"},className:s.snackbar,open:i,autoHideDuration:t.autoHideDuration,onClose:function(){u(!1),n&&n(t)},message:Object(r.jsx)(je.a,{className:s.text,variant:"h1",children:t.text}),ContentProps:{className:s.snackbarContent}})}var qe=n(143),Je=n(135),Ze=function(e){return{text:{textTransform:"uppercase"},dialogScrollPaper:{alignItems:"flex-end"}}},$e=Object(me.a)(Ze);function We(e){var t=e.message,n=$e();return Object(a.useEffect)((function(){t.soundEffect&&le.play(t.soundEffect)}),[t]),Object(r.jsx)(qe.a,{open:!0,maxWidth:!1,classes:{scrollPaper:n.dialogScrollPaper},children:Object(r.jsx)(Je.a,{children:Object(r.jsx)(je.a,{className:n.text,variant:"h1",children:t.text})})})}var Xe=function(e){return{root:{position:"fixed",zIndex:e.gameAward.zIndex,top:0,left:0,width:"100%",height:"100%",color:"white",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"},text:{textTransform:"capitalize"}}},Ye=Object(me.a)(Xe);function Qe(e){var t=e.message,n=e.onClose,s=Object(a.useState)(!0),o=Object(x.a)(s,2),c=o[0],i=o[1],u=Object(pe.a)().t,l=Ye();return Object(a.useEffect)((function(){var e=setTimeout((function(){i(!1),n&&n(t)}),t.autoHideDuration);return function(){return clearTimeout(e)}}),[t,n,i]),c?Object(r.jsx)("div",{className:l.root,children:Object(r.jsx)(It,{className:l.text,variant:"h1",children:u("One bull")})}):null}function et(e){var t=e.message,n=e.onClose;switch(t.id){case"oneBull":return Object(r.jsx)(Qe,{message:t,onClose:n});case"lowTon":case"hatTrick":default:return null}}function tt(e){var t=e.message,n=e.onClose;switch(t.type){case"snackbar":return Object(r.jsx)(Ve,{message:t,onClose:n});case"dialog":return Object(r.jsx)(We,{message:t,onClose:n});case"animationDialog":return Object(r.jsx)(et,{message:t,onClose:n});case"sound":default:return t.soundEffect&&le.play(t.soundEffect),n&&n(t),null}}function nt(e){var t=e.messages,n=e.onClose;return Object(r.jsx)(s.a.Fragment,{children:t.map((function(e,t){return Object(r.jsx)(tt,{message:e,onClose:n},t)}))})}function rt(e){var t=e.children,n=e.selectedIndex,r=e.setSelectedIndex;return Object(a.useEffect)((function(){var e=[],a=[],s=function t(n){var r=0;return n.type===Pe.a?(r++,e.push(n.props.onMouseOver),a.push(n.props.onClick)):Array.isArray(n)&&n.forEach((function(n){n.type===Pe.a?(r++,e.push(n.props.onMouseOver),a.push(n.props.onClick)):Array.isArray(n)&&(r+=t(n))})),r}(t),o=function(){r((n+1)%s),"function"===typeof e[n]&&e[n]()},c=function(){return"function"===typeof a[n]&&a[n]()};return P.on("CHANGE_BUTTON_CLICK",o),P.on("DARTBOARD_HIT",c),function(){P.off("CHANGE_BUTTON_CLICK",o),P.off("DARTBOARD_HIT",c)}}),[t,n,r]),t}var at=F.create(b.dartboard);function st(){var e=Object(pe.a)().t,t=Object(be.g)();return Object(r.jsx)(Te.a,{children:Object(r.jsx)(Pe.a,{onClick:function(){at.connect().then((function(){return at.connected&&t.push("/game-menu")}))},children:Object(r.jsx)(je.a,{variant:"h2",children:e("Connect dartboard")})})})}var ot=n(136),ct=n(137),it=n(145),ut=n(138),lt=function(e){return{root:{color:function(e){return e.active?"#ffffff":"#aaaaaa"},backgroundColor:function(e){return e.active?"#000000dd":"#00000066"}},avatar:{backgroundColor:function(t){return"".concat(e.players[t.index])}},score:{textAlign:"center"}}},dt=Object(me.a)(lt);function ht(e){var t=e.name,n=e.score,a=e.index,s=e.active,o=dt({index:a,active:s});return Object(r.jsxs)(ot.a,{className:o.root,children:[Object(r.jsx)(ct.a,{avatar:Object(r.jsx)(it.a,{className:o.avatar,children:t.charAt(0).toUpperCase()}),title:Object(r.jsx)(je.a,{variant:"h4",children:t})}),Object(r.jsx)(ut.a,{className:o.score,children:Object(r.jsx)(je.a,{variant:"h4",children:n})})]})}var ft=n(103),bt=n(106),mt=n(139),pt=function(e){return{text:{textShadow:"-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white"},round:{paddingLeft:0}}},gt=Object(me.a)(pt);function jt(e){var t=e.rounds,n=e.totalRounds,a=e.className,s=Object(pe.a)().t,o=gt(),c=t.slice(-8);return Object(r.jsx)("div",{className:a,children:Object(r.jsxs)(ft.a,{children:[Object(r.jsx)(bt.a,{className:o.round,children:Object(r.jsx)(mt.a,{primary:Object(r.jsx)(je.a,{className:o.text,variant:"h4",children:"".concat(t.length," / ").concat(n," ").concat(s("Rounds"))})})}),Object(d.a)(Array(c.length).keys()).map((function(e){return Object(r.jsx)(bt.a,{className:o.round,children:Object(r.jsxs)(ge.a,{container:!0,children:[Object(r.jsx)(ge.a,{item:!0,xs:2,children:Object(r.jsx)(mt.a,{primary:Object(r.jsx)(je.a,{className:o.text,variant:"h6",children:"".concat(c[e]&&c[e].index+1||e+1,". ")})})}),c[e]&&c[e].scores.map((function(t,n){return Object(r.jsx)(ge.a,{item:!0,xs:3,children:Object(r.jsx)(mt.a,{primary:Object(r.jsx)(je.a,{className:o.text,variant:"h6",children:t.displaySymbol})})},"round".concat(e,"-score").concat(n))}))]})},"round".concat(e))})).reverse()]})})}var Ot=function(e){return{text:{marginLeft:"1rem",textShadow:"-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white"}}},yt=Object(me.a)(Ot);function vt(e){var t=e.className,n=e.scores,a=yt();return Object(r.jsx)(ft.a,{className:t,children:n.map((function(e,t){return Object(r.jsx)(bt.a,{children:Object(r.jsx)(mt.a,{primary:Object(r.jsx)(je.a,{className:a.text,variant:"h4",children:"".concat(t+1,". ").concat(e.displaySymbol)})})},t)}))})}var St=n(8),xt={root:{color:"black",textShadow:"-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white"}};function It(e){var t=Object(St.a)(xt)(je.a);return Object(r.jsx)(t,Object(A.a)({},e))}var Ct=function(e){return{root:function(t){var n;return n={height:"100vh",overflowX:"hidden"},Object(Se.a)(n,e.breakpoints.between("sm","xl"),{overflowY:"hidden"}),Object(Se.a)(n,"backgroundImage","url(".concat(t.backgroundImageUrl,")")),Object(Se.a)(n,"backgroundPosition","center"),Object(Se.a)(n,"backgroundRepeat","no-repeat"),Object(Se.a)(n,"backgroundSize","cover"),n}}},Tt={game:{},players:[]},Pt=F.create(b.dartboard),Dt=Object(he.a)(),wt=Object(me.a)(Ct);function kt(){var e=Object(a.useContext)(S),t=Object(a.useState)({}),n=Object(x.a)(t,2),s=n[0],o=n[1],c=wt({backgroundImageUrl:s.url});return Object(a.useEffect)((function(){var e=new w(o);return e.start(),function(){e.stop(),Pt.disconnect()}}),[]),Object(r.jsx)("div",{className:c.root,children:e.isLogined&&Object(r.jsx)(fe.a,{children:Object(r.jsxs)(be.d,{children:[Object(r.jsx)(be.b,{path:"/game-menu/:step",render:function(){return Object(r.jsx)(Ne,{appState:Tt})}}),Object(r.jsx)(be.b,{path:"/game",render:function(){return Object(r.jsx)(He,{game:Tt.game,players:Tt.players})}}),Object(r.jsx)(be.b,{path:"/options",render:function(){return Object(r.jsx)(st,{})}}),Object(r.jsx)(be.b,{render:function(){return Object(r.jsx)(be.a,{to:"/game-menu/games"})}})]})})})}Pt.isBluetoothConnection()?Dt.push("/options"):Pt.connect();n(101);j.changeLanguage(b.language||window.navigator.userLanguage||window.navigator.language),c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(i.a,{i18n:j,children:Object(r.jsx)(u.a,{theme:Object(l.a)(y),children:Object(r.jsx)(de,{children:Object(r.jsx)(kt,{})})})})}),document.getElementById("root")),v()}},[[102,1,2]]]);
//# sourceMappingURL=main.9f30423d.chunk.js.map