function trimTrailingSlash(string){if(string!=null){return string.replace(/\/+$/,'');}else{return string;}}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
ctrHref=trimTrailingSlash('https://www.easybooking.eu/produkte/julia-hotelsoftware'.trim());ctrHref2=trimTrailingSlash('https://www.easybooking.eu/produkte/julia-hotelsoftware'.trim());eInDoc=function(e){while(e=e.parentNode){if(e==document){return true;}}
return false;};lCheck=function(l){if(null!=l&&null!=l.getAttribute('href')&&(ctrHref===''||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref||trimTrailingSlash(l.href.trim())==ctrHref||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref2||trimTrailingSlash(l.href.trim())==ctrHref2)){return true;}
else{return false;}};linkfound=false;window.onload=function(){els=document.getElementsByTagName('a');l=els.length;for(i=0;i<l;i++){el=els[i];if(trimTrailingSlash(el.href)===ctrHref||trimTrailingSlash(el.getAttribute('href'))===ctrHref||trimTrailingSlash(el.href)===ctrHref2||trimTrailingSlash(el.getAttribute('href'))===ctrHref2){linkfound=true;if(el.getAttribute('rel')=='nofollow'||!eInDoc(el)||!lCheck(el)){linkfound=false;}
linktext=el.innerHTML;if(linktext==undefined){linkfound=false;}
else if(linktext.trim()==''){linkfound=false;}
if(el.offsetHeight!=undefined&&el.offsetHeight<8){linkfound=false;}
break;}}
if(linkfound){linkToHide=el;linkToHide.innerHTML='';}
if(linkfound==false){var div=document.createElement('div');div.id='error_f83d2a46aef1ea0a42311ce3b9b863f19d55f131';div.innerHTML='<a href="http://besucherzaehler.co/?id=f83d2a46aef1ea0a42311ce3b9b863f19d55f131">BesucherzÃ¤hler Fehler: Code nicht Ã¤ndern. Hier klicken, um den neue Code zu generieren!</a>';if(document.getElementById('besucherzaehler2')!=null){document.getElementById('besucherzaehler2').parentNode.insertBefore(div,document.getElementById('besucherzaehler2').nextSibling);}else{document.body.appendChild(div);}
widget=document.getElementById('besucherzaehler2');if(widget){widget.style.visibility='hidden';}}}