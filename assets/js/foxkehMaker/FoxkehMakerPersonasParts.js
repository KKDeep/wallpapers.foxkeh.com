
function FoxkehMakerPersonasParts(){var that=this;}
FoxkehMakerPersonasParts.prototype=new FoxkehMakerParts();FoxkehMakerPersonasParts.prototype.superInit=FoxkehMakerParts.prototype.init;FoxkehMakerPersonasParts.prototype.init=function(type,profile,parentElement){this.superInit(type,profile,parentElement);}
FoxkehMakerPersonasParts.prototype.superInitParts=FoxkehMakerParts.prototype.initParts;FoxkehMakerPersonasParts.prototype.initParts=function(preset){this.accentcolor=preset.accentcolor;this.textcolor=preset.textcolor;this.superInitParts(preset);}
FoxkehMakerPersonasParts.prototype.__defineSetter__("accentcolor",function(accentcolor){this._accentcolor=accentcolor;var rects=this.svg.getElementsByTagName("rect");for(var i=0,l=rects.length;i<l;i++){if(rects[i].getAttribute("id")=="titleBar"){rects[i].setAttribute("style","fill: "+this._accentcolor);}}});FoxkehMakerPersonasParts.prototype.__defineGetter__("accentcolor",function(){return this._accentcolor;});FoxkehMakerPersonasParts.prototype.__defineSetter__("textcolor",function(textcolor){this._textcolor=textcolor;var paths=this.svg.getElementsByTagName("path");for(var i=0,l=paths.length;i<l;i++){if(paths[i].getAttribute("id")=="titleText"){paths[i].setAttribute("style","fill: "+this._textcolor);}}});FoxkehMakerPersonasParts.prototype.__defineGetter__("textcolor",function(){return this._textcolor;});