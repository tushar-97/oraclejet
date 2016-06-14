/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojcollapsible"],function(a,f){(function(){a.ya("oj.ojAccordion",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{multiple:!1,expanded:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-accordion oj-component").attr("role","group");this.options.expanded=this.xV(this.options.expanded);this.Qd()},uf:function(a,d,c){this.wf(d,c,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},
_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role");this.element.children().removeClass("oj-accordion-collapsible");this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")},_setOption:function(a,d,c){if("multiple"===a)!1==d&&!0==this.options.multiple&&this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse",!1);else if("expanded"===a){this.jla(d);return}this._super(a,
d,c)},refresh:function(){this._super();this.Qd()},Qd:function(){this.iia();this._setOption("disabled",this.options.disabled);this.pY=!0;this._setOption("expanded",this.options.expanded);this.pY=!1;this.Fj()},iia:function(){this.element.children(":oj-collapsible").each(function(){f(this).ojCollapsible("option","expandArea","header")});this.Tk=this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")},
Fj:function(){var a={keydown:this.Gq,ojbeforeexpand:this.saa,ojexpand:this.gda,ojbeforecollapse:this.qaa,ojcollapse:this.jba};this._off(this.Tk);this._on(this.Tk,a)},Gq:function(a){if(!a.altKey&&!a.ctrlKey&&(f(a.target).hasClass("oj-collapsible-header")||f(a.target).hasClass("oj-collapsible-header-icon"))){var d=f.ui.keyCode,c=this.Tk.not(".oj-disabled"),e=c.length,g=f(a.target).closest(".oj-collapsible"),h=c.index(g),k=!1;if(0<=h)switch(a.keyCode){case d.RIGHT:case d.DOWN:k=c[(h+1)%e];break;case d.LEFT:case d.UP:k=
c[(h-1+e)%e];break;case d.HOME:k=c[0];break;case d.END:k=c[e-1]}k&&(g&&f(g).trigger("ojfocusout"),f(k).trigger("ojfocus"),a.preventDefault())}},JV:function(a){return!this.options.multiple&&(a=f(a.target).closest(".oj-collapsible"),a.parent().is(":oj-ojAccordion"))?a.siblings(".oj-collapsible.oj-expanded").map(function(){return f(this).data("oj-ojCollapsible")}):f()},saa:function(a){if(!this.AC(a))return!0;var d,c=this,e;this.JV(a).each(function(){var g=this.element;e=c.Ft(g,f(a.target));g={header:g.find(".oj-collapsible-header"),
content:g.find(".oj-collapsible-content")};return d=this._trigger("beforeCollapse",a,g)});e||(e=c.Ft(null,f(a.target)));this.options.multiple||this._trigger("beforeExpand",a,e);return d},gda:function(a,d){if(this.AC(a)&&!this.xI){var c,e=this;this.JV(a).each(function(){this.collapse(!1,a,d);c=e.Ft(this.element,f(a.target))});c||(c=e.Ft(null,f(a.target)));this.options.multiple||this._trigger("expand",a,c);this.PM()}},qaa:function(a,d){return this.AC(a)&&!this.options.multiple?this._trigger("beforeCollapse",
a,this.ZX(a,d)):!0},jba:function(a,d){if(!this.xI&&this.AC(a)){var c=this.ZX(a,d);this.options.multiple||this._trigger("collapse",a,c);this.PM()}},Ft:function(a,d){return{fromCollapsible:a,toCollapsible:d}},ZX:function(a,d){var c;if(d.toCollapsible)c=d;else{if(a.originalEvent&&a.originalEvent.target){var e=f(a.originalEvent.target);e.hasClass("oj-collapsible")&&(c=this.Ft(f(a.target),e))}c||(c=this.Ft(f(a.target),null))}return c},AC:function(a){return f(a.target).is(this.Tk)},PM:function(){var b,
d=[];this.Tk.each(function(a){f(this).ojCollapsible("option","expanded")&&(b=f(this).attr("id"),d.push(b?b:a))});a.b.oU(this.options.expanded,d)||this.option("expanded",d,{_context:{Wa:!0,Hc:!0}})},xV:function(a){if(Array.isArray(a)){var d,c=[];this.element.children().each(function(e){(d=f(this).attr("id"))?-1!=a.indexOf(d)?c.push(d):-1!=a.indexOf(e)&&c.push(d):-1!=a.indexOf(e)&&c.push(e)});!this.options.multiple&&1<c.length&&(c=[c[c.length-1]]);return c}return null},jla:function(b){this.pY||(b=this.xV(b));
if(b){var d=this,c,e,g,h=0;this.Tk.each(function(k){c=f(this);e=c.attr("id");g=!1;e?e==b[h]&&(g=!0):k==b[h]&&(g=!0);g&&h++;c.ojCollapsible("option","expanded")!==g&&(a.q.warn("JET Accordion: override collapsible "+k+" expanded setting"),d.xI=!0,c.ojCollapsible("option","expanded",g),d.xI=!1)})}this.PM()},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var d=a.subId;a=a.index;if("number"!==typeof a||0>a||a>=this.Tk.length)return null;a=this.Tk[a];switch(d){case "oj-accordion-content":d=
"oj-collapsible-content";break;case "oj-accordion-header":d="oj-collapsible-header";break;case "oj-accordion-disclosure":case "oj-accordion-header-icon":d="oj-collapsible-disclosure";break;case "oj-accordion-collapsible":return a;default:return null}return f(a).ojCollapsible("getNodeBySubId",{subId:d})},getSubIdByNode:function(a){for(var d=-1,c=a;c;){d=Array.prototype.indexOf.call(this.Tk,c);if(-1!=d)break;c=c.parentElement}c=null;if(-1!=d)switch(a=(a=f(this.Tk[d]).ojCollapsible("getSubIdByNode",
a))?a:{},a.subId){case "oj-collapsible-content":c="oj-accordion-content";break;case "oj-collapsible-header":c="oj-accordion-header";break;case "oj-collapsible-disclosure":case "oj-collapsible-header-icon":c="oj-accordion-disclosure";break;default:c="oj-accordion-collapsible"}return c?{subId:c,index:d}:null}})})()});