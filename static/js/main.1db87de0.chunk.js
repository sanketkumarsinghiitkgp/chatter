(this.webpackJsonpchatter=this.webpackJsonpchatter||[]).push([[0],{112:function(e,t,a){e.exports=a(178)},117:function(e,t,a){},118:function(e,t,a){},139:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(102),c=a.n(s);a(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(41),i=a(31),l=a(8),u=a(9),m=a(11),h=a(10),d=a(12),p=a(15),f=a(7),b=a(13),g=(a(118),a(32)),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.submitSignup=function(t){t.preventDefault(),g.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/dashboard")})).catch((function(t){e.setState({error:"Incorrect Login credentials"})}))},e.state={email:null,password:null,error:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panel"},r.a.createElement(b.a,{className:"justify-content-md-center"},r.a.createElement("h1",null,"Log in")),r.a.createElement(b.a,{className:"justify-content-md-center"},r.a.createElement(f.a,{onSubmit:function(t){e.submitSignup(t)}},r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Label,null,"Email address"),r.a.createElement(f.a.Control,{type:"email",placeholder:"Enter email",onChange:function(t){e.userTyping("email",t)}})),r.a.createElement(f.a.Group,{controlId:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:function(t){e.userTyping("password",t)}})),r.a.createElement("div",{style:{color:"red"}},this.state.error),r.a.createElement(p.a,{variant:"secondary",type:"submit"},"Login"),r.a.createElement("div",null,"Don't have an account?"),r.a.createElement(o.b,{to:"/signup"},"Sign Up!"))))}}]),t}(n.Component),v=(a(139),a(32)),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e.submitSignup=function(t){t.preventDefault(),e.state.password!==e.state.passwordConfirmation?e.setState({error:"'Confirm Password' and 'Password' do not match."}):(e.setState({error:""}),v.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email};v.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")})).catch((function(t){e.setState({error:"User could not be added"})}))})).catch((function(t){e.setState({error:"User could not be added"})})))},e.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.setState({email:null,password:null,passwordConfirmation:null,error:""}),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panel"},r.a.createElement(b.a,{className:"justify-content-md-center"},r.a.createElement("h1",null,"Sign up")),r.a.createElement(b.a,{className:"justify-content-md-center"},r.a.createElement(f.a,{onSubmit:function(t){e.submitSignup(t)}},r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Label,null,"Email address"),r.a.createElement(f.a.Control,{type:"email",placeholder:"Enter email",onChange:function(t){e.userTyping("email",t)}})),r.a.createElement(f.a.Group,{controlId:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:function(t){e.userTyping("password",t)}})),r.a.createElement(f.a.Group,{controlId:"passwordConfirmation"},r.a.createElement(f.a.Label,null,"Confirm Password"),r.a.createElement(f.a.Control,{type:"password",placeholder:"Re-enter password",onChange:function(t){e.userTyping("passwordConfirmation",t)}})),r.a.createElement("div",{style:{color:"red"}},this.state.error),r.a.createElement(p.a,{variant:"secondary",type:"submit"},"Submit"),r.a.createElement("div",null,"Already have an account?"),r.a.createElement(o.b,{to:"/login"},"Log in!"))))}}]),t}(n.Component),w=a(19),C=a.n(w),j=a(37),O=a(111),k=a(76),S=(a(82),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{onClick:this.props.onClick,className:this.props.highlighted?"grey":"white"},r.a.createElement(O.a,{name:this.props.userEmail}),r.a.createElement(k.a.Body,null,r.a.createElement("h5",null,this.props.userEmail),r.a.createElement("p",null,this.props.children)))}}]),t}(n.Component)),x=a(32),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a.newChat=function(){a.props.newChatButtonFunction()},a.signOut=function(){x.auth().signOut()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"pad justify-content-center"},r.a.createElement("div",null,r.a.createElement(b.a,{className:"pad justify-content-center"},r.a.createElement(p.a,{className:"pad newchat",variant:"secondary",style:{"border-radius":"0"},onClick:this.newChat},"New Chat")),r.a.createElement(b.a,{className:"pad justify-content-center"},this.props.chats?r.a.createElement("div",null,this.props.chats.map((function(t,a){return r.a.createElement(S,{id:a,userEmail:t.users.filter((function(t){return t!==e.props.userEmail}))[0],onClick:function(){e.props.selectChatFunction(a)},highlighted:a===e.props.selectedChatIndex},t.messages[t.messages.length-1].message.substring(0,20)+"...")}))):null),r.a.createElement(b.a,{className:"pad justify-content-center"},r.a.createElement(p.a,{className:"signout",onClick:this.signOut,variant:"secondary",style:{"border-radius":"0"}},"Sign Out"))))}}]),t}(n.Component),N=a(55),T=a(77),D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).userTyping=function(t){13===t.keyCode?e.sendHandler():e.setState({message:t.target.value})},e.validateMsg=function(e){return e.length>0&&e.trim().length>0},e.sendHandler=function(){e.validateMsg(e.state.message)&&(e.props.submitMsg(e.state.message),document.getElementById("chat-text-box").value="")},e.state={message:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(T.a,{className:"mb-3",onSubmit:this.sendHandler},r.a.createElement(N.a,{onKeyUp:function(t){return e.userTyping(t)},placeholder:"Enter Message","aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"chat-text-box"}),r.a.createElement(T.a.Append,null,r.a.createElement(p.a,{variant:"outline-secondary",onClick:this.sendHandler},"Send")))}}]),t}(n.Component),F=(a(173),a(32)),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).componentDidUpdate=function(){var e=document.getElementById("chat-view-container");e&&e.scrollTo(0,e.scrollHeight)},a.submitMsg=function(e){var t=a.props,n=t.chat,r=t.user,s=n.users.filter((function(e){return e!==r}))[0],c=a.getDocId(s);F.firestore().collection("chats").doc(c).update({messages:F.firestore.FieldValue.arrayUnion({sender:r,message:e,timestamp:Date.now()})})},a.getDocId=function(e){return[a.props.user,e].sort().join(":")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.chat,n=t.user;return a?r.a.createElement("div",{id:"chat-view-container"},r.a.createElement("div",{className:"urconv"},r.a.createElement("h3",null,"Your conversation with"," ",a.users.filter((function(e){return e!==n}))[0])),a.messages.map((function(e,t){return r.a.createElement("div",{key:t,className:"message"},r.a.createElement("font",{color:e.sender!==n?"red":"blue"},r.a.createElement("b",null,e.sender)),r.a.createElement("font",{color:"white"},": "+e.message))})),r.a.createElement(D,{submitMsg:function(t){return e.submitMsg(t)}})):r.a.createElement("div",{id:"chat-view-container"},"Select a conversation")}}]),t}(n.Component),B=(a(174),a(32)),M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).userTyping=function(t,a){switch(t){case"username":e.setState({username:a.target.value});break;case"message":e.setState({message:a.target.value})}},e.buildDocId=function(){return[B.auth().currentUser.email,e.state.username].sort().join(":")},e.createChat=function(){e.props.createChatFunction(e.state.username,e.state.message)},e.goToChat=function(){e.props.goToChatFunction(e.buildDocId(),e.state.message)},e.submitChat=function(){var t=Object(j.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.userExists();case 3:if(!t.sent){t.next=9;break}return t.next=7,e.chatExists();case 7:t.sent?e.goToChat():e.createChat();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.chatExists=Object(j.a)(C.a.mark((function t(){var a,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.buildDocId(),t.next=3,B.firestore().collection("chats").doc(a).get();case 3:return n=t.sent,t.abrupt("return",n.exists);case 5:case"end":return t.stop()}}),t)}))),e.userExists=Object(j.a)(C.a.mark((function t(){var a,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.firestore().collection("users").get();case 2:return a=t.sent,n=a.docs.map((function(e){return e.data().email})).includes(e.state.username),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),e.state={username:null,message:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"panelnc"},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(f.a,{className:"formnc",onSubmit:function(t){return e.submitChat(t)}},r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Label,null,"Email email address"),r.a.createElement(f.a.Control,{type:"email",placeholder:"Enter email of recipient",onChange:function(t){return e.userTyping("username",t)}})),r.a.createElement(f.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(f.a.Label,null,"Message"),r.a.createElement(f.a.Control,{as:"textarea",rows:"3",onChange:function(t){return e.userTyping("message",t)}})),r.a.createElement(p.a,{variant:"secondary",type:"submit"},"Submit"))))}}]),t}(n.Component),A=a(27),U=(a(175),a(32)),P=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e.goToChat=function(){var t=Object(j.a)(C.a.mark((function t(a,n){var r,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.split(":"),s=e.state.chats.find((function(e){return r.every((function(t){return e.users.includes(t)}))})),e.setState({newChatFormVisible:!1}),t.next=5,e.selectChat(e.state.chats.indexOf(s));case 5:e.submitMessage(n);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.buildDocId=function(t){return[e.state.email,t].sort().join(":")},e.submitMessage=function(t){var a=e.buildDocId(e.state.chats[e.state.selectedChat].users.filter((function(t){return t!==e.state.email}))[0]);U.firestore().collection("chats").doc(a).update({messages:U.firestore.FieldValue.arrayUnion({sender:e.state.email,message:t,timestamp:Date.now()}),receiverHasRead:!1})},e.newChatSubmit=function(){var t=Object(j.a)(C.a.mark((function t(a,n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.buildDocId(a),t.next=3,U.firestore().collection("chats").doc(r).set({messages:[{message:n,sender:e.state.email}],users:[e.state.email,a],receiverHasRead:!1});case 3:e.setState({newChatFormVisible:!1}),e.selectChat(e.state.chats.length-1);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.selectChat=function(t){e.setState({selectedChat:t,newChatFormVisible:!1})},e.newChatButtonClicked=function(){e.setState({selectedChat:null,newChatFormVisible:!0})},e.componentDidMount=function(){U.auth().onAuthStateChanged((function(t){t?U.firestore().collection("chats").where("users","array-contains",t.email).onSnapshot((function(a){var n=a.docs.map((function(e){return e.data()}));e.setState({email:t.email,chats:n},(function(){console.log("")}))})):e.props.history.push("/login")}))},e.setState({selectedChat:null,newChatFormVisible:!1,email:null,chats:[]}),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null," ",r.a.createElement(A.a,{className:"left-side",xs:12,md:5},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement("div",null,r.a.createElement(I,{history:this.props.history,newChatButtonFunction:this.newChatButtonClicked,selectChatFunction:this.selectChat,chats:this.state.chats,userEmail:this.state.email,selectedChatIndex:this.state.selectedChat})))),r.a.createElement(A.a,{className:"right-side",xs:12,md:7},this.state.newChatFormVisible?r.a.createElement(M,{goToChatFunction:this.goToChat,createChatFunction:this.newChatSubmit}):r.a.createElement(L,{user:this.state.email,chat:null!==this.state.selectedChat&&this.state.chats?this.state.chats[this.state.selectedChat]:null}))))}}]),t}(n.Component),V=a(110),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a.signup=function(){a.props.history.push("/signup")},a.login=function(){a.props.history.push("/login")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,null,r.a.createElement("h1",null,"Welcome to Chatter"),r.a.createElement("p",null,"This is a demo chat application made by me.",r.a.createElement("br",null),"This application uses firebase as the back-end, and React.js, HTML and CSS for the front-end."),r.a.createElement("p",null,r.a.createElement(p.a,{variant:"secondary"},"Source Code")),r.a.createElement("p",null,"You can create an account with your email address and password. ",r.a.createElement("br",null),"You can also use the dummy accounts:-",r.a.createElement("br",null)," ",r.a.createElement("b",null,"Alice:")," (email: alice@chatter.com, password: mynameisalice) ",r.a.createElement("br",null),r.a.createElement("b",null,"Bob:")," (email: bob@chatter.com, password: mynameisbob)"),r.a.createElement(b.a,null,r.a.createElement(A.a,null,r.a.createElement(p.a,{variant:"secondary",onClick:this.signup},"Sign Up ")),r.a.createElement(A.a,null,r.a.createElement(p.a,{variant:"secondary",onClick:this.login},"Log In ")),r.a.createElement(A.a,{md:9},r.a.createElement("div",null))),r.a.createElement("p",null,"My webpage: ",r.a.createElement("a",{href:"http://sanketkumarsinghiitkgp.github.io"},"http://sanketkumarsinghiitkgp.github.io"),r.a.createElement("br",null),"Check out my other works at ",r.a.createElement("a",{href:"https://github.com/sanketkumarsinghiitkgp"},"https://github.com/sanketkumarsinghiitkgp"),".")))}}]),t}(n.Component),H=(a(176),a(32));a(177),H.initializeApp({apiKey:"AIzaSyC7p4JkwdgXsegLf6E2kSxkneQdfd8QxTI",authDomain:"chatter-4228b.firebaseapp.com",databaseURL:"https://chatter-4228b.firebaseio.com",projectId:"chatter-4228b",storageBucket:"chatter-4228b.appspot.com",messagingSenderId:"135428777546",appId:"1:135428777546:web:cba2da25b8e262682ea8b3",measurementId:"G-VNJL240M7Q"});var R=r.a.createElement(o.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(i.a,{path:"/home",component:G}),r.a.createElement(i.a,{path:"/login",component:E}),r.a.createElement(i.a,{path:"/signup",component:y}),r.a.createElement(i.a,{path:"/dashboard",component:P})));c.a.render(r.a.createElement("div",null,R),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.1db87de0.chunk.js.map