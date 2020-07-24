(this.webpackJsonpwowohnen=this.webpackJsonpwowohnen||[]).push([[0],{42:function(e,t,n){e.exports=n(54)},47:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=(n(47),n(31)),l=n(22),c=n(23),u=n(28),p=n(27),h=n(78),d=n(83),m=n(11),g=n(81),f=n(82),v=n(32),b=(n(51),n(29)),w=n.n(b);w.a.accessToken="pk.eyJ1IjoidXN0cm9ldHoiLCJhIjoiQmp3RjlaZyJ9.7JCU4lzvAzfijEV129QFiQ";var M=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={map:null},a}return Object(c.a)(n,[{key:"getFilter",value:function(){var e=this.props.populationMax>5e5?["in"]:["<=","population",this.props.populationMax];return["all",[">=","population",this.props.populationMin],e,[">=","sunshine_hours",this.props.sunshineHoursMin],["<=","sunshine_hours",this.props.sunshineHoursMax]]}},{key:"componentDidMount",value:function(){var e=this,t=new w.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/outdoors-v9",center:[10.1299,51.3401],zoom:5.1});t.on("load",(function(){t.addSource("cities_processed-59mru6",{type:"vector",url:"mapbox://ustroetz.9fzl7st5"});var n=["interpolate",["cubic-bezier",0,.2,.4,.9],["get","population"],0,0,5e6,50];t.addLayer({id:"cities_base",type:"circle",source:"cities_processed-59mru6","source-layer":"cities_processed-59mru6",paint:{"circle-radius":n,"circle-opacity":.2,"circle-color":"grey"}}),t.addLayer({id:"cities_highlighted",type:"circle",source:"cities_processed-59mru6","source-layer":"cities_processed-59mru6",paint:{"circle-radius":n,"circle-opacity":0,"circle-stroke-width":3,"circle-stroke-color":"teal"}}),t.setFilter("cities_highlighted",e.getFilter())})),t.on("click","cities_highlighted",(function(e){var n=e.features[0].geometry.coordinates.slice(),a=e.features[0].properties.name,o=e.features[0].properties.population,i=e.features[0].properties.sunshine_hours;(new w.a.Popup).setLngLat(n).setHTML("<h3>"+a+"</h3>\ud83e\uddd1 "+o.toLocaleString()+"<br/> \u2600\ufe0f "+i.toLocaleString()).addTo(t)})),this.setState({map:t})}},{key:"componentDidUpdate",value:function(e){this.props.populationMin===e.populationMin&&this.props.populationMax===e.populationMax&&this.props.sunshineHoursMin===e.sunshineHoursMin&&this.props.sunshineHoursMax===e.sunshineHoursMax||this.state.map.setFilter("cities_highlighted",this.getFilter())}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{width:"100%",height:"100%"},ref:function(t){return e.mapContainer=t}})}}]),n}(o.a.Component),y=function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"teal"},drawerPaper:{position:"relative",width:320},content:{flexGrow:1,backgroundColor:e.palette.background.default,minWidth:0},range:{margin:20,top:100,position:"relative"},label:{display:"flex",justifyContent:"space-between"}}},x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onSliderChange=function(e,t){var n;a.setState((n={},Object(s.a)(n,"".concat(e,"Min"),t[0]),Object(s.a)(n,"".concat(e,"Max"),t[1]),n))},a.state={populationMin:5e4,populationMax:25e4,sunshineHoursMin:1600,sunshineHoursMax:2e3},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.populationMin.toLocaleString(),a=this.state.populationMax>5e5?5e5.toLocaleString()+" +":this.state.populationMax.toLocaleString();return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"absolute",className:t.appBar},o.a.createElement(g.a,null,o.a.createElement(f.a,{variant:"h6",color:"inherit",noWrap:!0},"WoWohnen"))),o.a.createElement(d.a,{variant:"permanent",classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.range},o.a.createElement(f.a,{variant:"body1",color:"inherit",className:t.label},o.a.createElement("span",{role:"img","aria-label":"rural"},"\ud83d\udc69\u200d\ud83c\udf3e")," ",n," - ",a," ",o.a.createElement("span",{role:"img","aria-label":"urban"},"\ud83d\udc69\u200d\u2695\ufe0f\ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83c\udfa8\ud83e\udd35\ud83d\udc69\u200d\ud83d\ude80")),o.a.createElement(v.a,{defaultValue:[this.state.populationMin,this.state.populationMax],min:0,max:501e3,step:1e3,onChange:function(t){return e.onSliderChange("population",t)},trackStyle:[{backgroundColor:"teal"}],handleStyle:[{borderColor:"teal"},{borderColor:"teal"}]})),o.a.createElement("div",{className:t.range},o.a.createElement(f.a,{variant:"body1",color:"inherit",className:t.label},o.a.createElement("span",{role:"img","aria-label":"cloudy"},"\ud83c\udf25")," ",this.state.sunshineHoursMin.toLocaleString()," -"," ",this.state.sunshineHoursMax.toLocaleString()," ",o.a.createElement("span",{role:"img","aria-label":"sunny"},"\u2600\ufe0f")),o.a.createElement(v.a,{defaultValue:[this.state.sunshineHoursMin,this.state.sunshineHoursMax],min:0,max:2e3,step:100,onChange:function(t){return e.onSliderChange("sunshineHours",t)},trackStyle:[{backgroundColor:"teal"}],handleStyle:[{borderColor:"teal"},{borderColor:"teal"}]}))),o.a.createElement("main",{className:t.content},o.a.createElement(M,{populationMin:this.state.populationMin,populationMax:this.state.populationMax,sunshineHoursMin:this.state.sunshineHoursMin,sunshineHoursMax:this.state.sunshineHoursMax})))}}]),n}(a.Component),k=Object(m.a)(y)(x),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/wowohnen",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/wowohnen","/service-worker.js");E?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):C(e)}))}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.a14014bd.chunk.js.map