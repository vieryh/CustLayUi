/**
 * EasyUI for jQuery 1.5.4
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
var _1=0;
function _2(a,o){
return $.easyui.indexOfArray(a,o);
};
function _3(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _4(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _5(_6,aa){
return $.data(_6,"treegrid")?aa.slice(1):aa;
};
function _7(_8){
var _9=$.data(_8,"datagrid");
var _a=_9.options;
var _b=_9.panel;
var dc=_9.dc;
var ss=null;
if(_a.sharedStyleSheet){
ss=typeof _a.sharedStyleSheet=="boolean"?"head":_a.sharedStyleSheet;
}else{
ss=_b.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _c=$.data(cc[0],"ss");
if(!_c){
_c=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_d){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_d.length;i++){
_c.cache[_d[i][0]]={width:_d[i][1]};
}
var _e=0;
for(var s in _c.cache){
var _f=_c.cache[s];
_f.index=_e++;
ss.push(s+"{width:"+_f.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_10){
var _11=cc.children("style[easyui]:last")[0];
var _12=_11.styleSheet?_11.styleSheet:(_11.sheet||document.styleSheets[document.styleSheets.length-1]);
var _13=_12.cssRules||_12.rules;
return _13[_10];
},set:function(_14,_15){
var _16=_c.cache[_14];
if(_16){
_16.width=_15;
var _17=this.getRule(_16.index);
if(_17){
_17.style["width"]=_15;
}
}
},remove:function(_18){
var tmp=[];
for(var s in _c.cache){
if(s.indexOf(_18)==-1){
tmp.push([s,_c.cache[s].width]);
}
}
_c.cache={};
this.add(tmp);
},dirty:function(_19){
if(_19){
_c.dirty.push(_19);
}
},clean:function(){
for(var i=0;i<_c.dirty.length;i++){
this.remove(_c.dirty[i]);
}
_c.dirty=[];
}};
};
function _1a(_1b,_1c){
var _1d=$.data(_1b,"datagrid");
var _1e=_1d.options;
var _1f=_1d.panel;
if(_1c){
$.extend(_1e,_1c);
}
if(_1e.fit==true){
var p=_1f.panel("panel").parent();
_1e.width=p.width();
_1e.height=p.height();
}
_1f.panel("resize",_1e);
};
function _20(_21){
var _22=$.data(_21,"datagrid");
var _23=_22.options;
var dc=_22.dc;
var _24=_22.panel;
var _25=_24.width();
var _26=_24.height();
var _27=dc.view;
var _28=dc.view1;
var _29=dc.view2;
var _2a=_28.children("div.datagrid-header");
var _2b=_29.children("div.datagrid-header");
var _2c=_2a.find("table");
var _2d=_2b.find("table");
_27.width(_25);
var _2e=_2a.children("div.datagrid-header-inner").show();
_28.width(_2e.find("table").width());
if(!_23.showHeader){
_2e.hide();
}
_29.width(_25-_28._outerWidth());
_28.children()._outerWidth(_28.width());
_29.children()._outerWidth(_29.width());
var all=_2a.add(_2b).add(_2c).add(_2d);
all.css("height","");
var hh=Math.max(_2c.height(),_2d.height());
all._outerHeight(hh);
_27.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _2f=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _30=_2f+_2b._outerHeight()+_29.children(".datagrid-footer")._outerHeight();
_24.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_30+=$(this)._outerHeight();
});
var _31=_24.outerHeight()-_24.height();
var _32=_24._size("minHeight")||"";
var _33=_24._size("maxHeight")||"";
_28.add(_29).children("div.datagrid-body").css({marginTop:_2f,height:(isNaN(parseInt(_23.height))?"":(_26-_30)),minHeight:(_32?_32-_31-_30:""),maxHeight:(_33?_33-_31-_30:"")});
_27.height(_29.height());
};
function _34(_35,_36,_37){
var _38=$.data(_35,"datagrid").data.rows;
var _39=$.data(_35,"datagrid").options;
var dc=$.data(_35,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!_39.nowrap||_39.autoRowHeight||_37)){
if(_36!=undefined){
var tr1=_39.finder.getTr(_35,_36,"body",1);
var tr2=_39.finder.getTr(_35,_36,"body",2);
_3a(tr1,tr2);
}else{
var tr1=_39.finder.getTr(_35,0,"allbody",1);
var tr2=_39.finder.getTr(_35,0,"allbody",2);
_3a(tr1,tr2);
if(_39.showFooter){
var tr1=_39.finder.getTr(_35,0,"allfooter",1);
var tr2=_39.finder.getTr(_35,0,"allfooter",2);
_3a(tr1,tr2);
}
}
}
_20(_35);
if(_39.height=="auto"){
var _3b=dc.body1.parent();
var _3c=dc.body2;
var _3d=_3e(_3c);
var _3f=_3d.height;
if(_3d.width>_3c.width()){
_3f+=18;
}
_3f-=parseInt(_3c.css("marginTop"))||0;
_3b.height(_3f);
_3c.height(_3f);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _3a(_40,_41){
for(var i=0;i<_41.length;i++){
var tr1=$(_40[i]);
var tr2=$(_41[i]);
tr1.css("height","");
tr2.css("height","");
var _42=Math.max(tr1.height(),tr2.height());
tr1.css("height",_42);
tr2.css("height",_42);
}
};
function _3e(cc){
var _43=0;
var _44=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_44+=c._outerHeight();
if(_43<c._outerWidth()){
_43=c._outerWidth();
}
}
});
return {width:_43,height:_44};
};
};
function _45(_46,_47){
var _48=$.data(_46,"datagrid");
var _49=_48.options;
var dc=_48.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_4a(true);
_4a(false);
_20(_46);
function _4a(_4b){
var _4c=_4b?1:2;
var tr=_49.finder.getTr(_46,_47,"body",_4c);
(_4b?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _4d(_4e,_4f){
function _50(){
var _51=[];
var _52=[];
$(_4e).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var _53=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
_53.push(col);
});
opt.frozen?_51.push(_53):_52.push(_53);
});
});
return [_51,_52];
};
var _54=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_4e);
_54.panel({doSize:false,cls:"datagrid"});
$(_4e).addClass("datagrid-f").hide().appendTo(_54.children("div.datagrid-view"));
var cc=_50();
var _55=_54.children("div.datagrid-view");
var _56=_55.children("div.datagrid-view1");
var _57=_55.children("div.datagrid-view2");
return {panel:_54,frozenColumns:cc[0],columns:cc[1],dc:{view:_55,view1:_56,view2:_57,header1:_56.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_57.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_56.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_57.children("div.datagrid-body"),footer1:_56.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_57.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _58(_59){
var _5a=$.data(_59,"datagrid");
var _5b=_5a.options;
var dc=_5a.dc;
var _5c=_5a.panel;
_5a.ss=$(_59).datagrid("createStyleSheet");
_5c.panel($.extend({},_5b,{id:null,doSize:false,onResize:function(_5d,_5e){
if($.data(_59,"datagrid")){
_20(_59);
$(_59).datagrid("fitColumns");
clearTimeout(_5b.fitTimer);
_5b.fitTimer=setTimeout(function(){
$(_59).datagrid("fitColumns");
_5b.fitTimer=null;
},0);
_5b.onResize.call(_5c,_5d,_5e);
}
},onExpand:function(){
if($.data(_59,"datagrid")){
$(_59).datagrid("fixRowHeight").datagrid("fitColumns");
_5b.onExpand.call(_5c);
}
}}));
_5a.rowIdPrefix="datagrid-row-r"+(++_1);
_5a.cellClassPrefix="datagrid-cell-c"+_1;
_5f(dc.header1,_5b.frozenColumns,true);
_5f(dc.header2,_5b.columns,false);
_60();
dc.header1.add(dc.header2).css("display",_5b.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",_5b.showFooter?"block":"none");
if(_5b.toolbar){
if($.isArray(_5b.toolbar)){
$("div.datagrid-toolbar",_5c).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_5c);
var tr=tb.find("tr");
for(var i=0;i<_5b.toolbar.length;i++){
var btn=_5b.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var _61=$("<a href=\"javascript:;\"></a>").appendTo(td);
_61[0].onclick=eval(btn.handler||function(){
});
_61.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(_5b.toolbar).addClass("datagrid-toolbar").prependTo(_5c);
$(_5b.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_5c).remove();
}
$("div.datagrid-pager",_5c).remove();
if(_5b.pagination){
var _62=$("<div class=\"datagrid-pager\"></div>");
if(_5b.pagePosition=="bottom"){
_62.appendTo(_5c);
}else{
if(_5b.pagePosition=="top"){
_62.addClass("datagrid-pager-top").prependTo(_5c);
}else{
var _63=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_5c);
_62.appendTo(_5c);
_62=_62.add(_63);
}
}
_62.pagination({total:0,pageNumber:_5b.pageNumber,pageSize:_5b.pageSize,pageList:_5b.pageList,onSelectPage:function(_64,_65){
_5b.pageNumber=_64||1;
_5b.pageSize=_65;
_62.pagination("refresh",{pageNumber:_64,pageSize:_65});
_bf(_59);
}});
_5b.pageSize=_62.pagination("options").pageSize;
}
function _5f(_66,_67,_68){
if(!_67){
return;
}
$(_66).show();
$(_66).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _69=100-parseInt(tmp[0].style.width);
tmp.remove();
var _6a=[];
var _6b=[];
var _6c=[];
if(_5b.sortName){
_6a=_5b.sortName.split(",");
_6b=_5b.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_66);
for(var i=0;i<_67.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var _6d=_67[i];
for(var j=0;j<_6d.length;j++){
var col=_6d[j];
var _6e="";
if(col.rowspan){
_6e+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
_6e+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_1,i,j].join("-");
}
}
if(col.id){
_6e+="id=\""+col.id+"\"";
}
var td=$("<td "+_6e+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var _6f=td.find("div.datagrid-cell");
var pos=_2(_6a,col.field);
if(pos>=0){
_6f.addClass("datagrid-sort-"+_6b[pos]);
}
if(col.sortable){
_6f.addClass("datagrid-sort");
}
if(col.resizable==false){
_6f.attr("resizable","false");
}
if(col.width){
var _70=$.parser.parseValue("width",col.width,dc.view,_5b.scrollbarSize+(_5b.rownumbers?_5b.rownumberWidth:0));
col.deltaWidth=_69;
col.boxWidth=_70-_69;
}else{
col.auto=true;
}
_6f.css("text-align",(col.halign||col.align||""));
col.cellClass=_5a.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
_6f.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_6c.push(col.field);
}
}
}
if(_68&&_5b.rownumbers){
var td=$("<td rowspan=\""+_5b.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_6c.length;i++){
_c1(_59,_6c[i],-1);
}
};
function _60(){
var _71=[[".datagrid-header-rownumber",(_5b.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(_5b.rownumberWidth-1)+"px"]];
var _72=_73(_59,true).concat(_73(_59));
for(var i=0;i<_72.length;i++){
var col=_74(_59,_72[i]);
if(col&&!col.checkbox){
_71.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_5a.ss.add(_71);
_5a.ss.dirty(_5a.cellSelectorPrefix);
_5a.cellSelectorPrefix="."+_5a.cellClassPrefix;
};
};
function _75(_76){
var _77=$.data(_76,"datagrid");
var _78=_77.panel;
var _79=_77.options;
var dc=_77.dc;
var _7a=dc.header1.add(dc.header2);
_7a.unbind(".datagrid");
for(var _7b in _79.headerEvents){
_7a.bind(_7b+".datagrid",_79.headerEvents[_7b]);
}
var _7c=_7a.find("div.datagrid-cell");
var _7d=_79.resizeHandle=="right"?"e":(_79.resizeHandle=="left"?"w":"e,w");
_7c.each(function(){
$(this).resizable({handles:_7d,edge:_79.resizeEdge,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_77.resizing=true;
_7a.css("cursor",$("body").css("cursor"));
if(!_77.proxy){
_77.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
if(e.data.dir=="e"){
e.data.deltaEdge=$(this)._outerWidth()-(e.pageX-$(this).offset().left);
}else{
e.data.deltaEdge=$(this).offset().left-e.pageX-1;
}
_77.proxy.css({left:e.pageX-$(_78).offset().left-1+e.data.deltaEdge,display:"none"});
setTimeout(function(){
if(_77.proxy){
_77.proxy.show();
}
},500);
},onResize:function(e){
_77.proxy.css({left:e.pageX-$(_78).offset().left-1+e.data.deltaEdge,display:"block"});
return false;
},onStopResize:function(e){
_7a.css("cursor","");
$(this).css("height","");
var _7e=$(this).parent().attr("field");
var col=_74(_76,_7e);
col.width=$(this)._outerWidth()+1;
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_76).datagrid("fixColumnSize",_7e);
_77.proxy.remove();
_77.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_20(_76);
}
$(_76).datagrid("fitColumns");
_79.onResizeColumn.call(_76,_7e,col.width);
setTimeout(function(){
_77.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _7b in _79.rowEvents){
bb.bind(_7b,_79.rowEvents[_7b]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _7f=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_7f=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_7f);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var _80=c1.offset().top;
var _81=c2.offset().top;
if(_80!=_81){
b1.scrollTop(b1.scrollTop()+_80-_81);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _82(_83){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _84=_85(td);
if(!$(_84).data("datagrid").resizing&&_83){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _86(e){
var _87=_85(e.target);
var _88=$(_87).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(_88.singleSelect&&_88.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_89(_87);
}else{
_8a(_87);
}
e.stopPropagation();
}else{
var _8b=$(e.target).closest(".datagrid-cell");
if(_8b.length��"��uok��2�/��%���MۡC���na*�_
�)�I�Xc�WeR9M��ΐ�J�a�Ϡx�9q�Y���6�[����'ehT�?:}��j	�3�S�8��X���.�h����W�t�Bp�9t�lT�R�B�؁Wy�bϯg]��VB��II�TTr;*�]Ôs���Z�ZD�M��Qb<�����Q��e�ϖ�C���s��am�y/Ι�0���i{��r������3�Rs���8T��\��.+|�h�������Um����%��t7���%�-�O7�ì�a2�d^�[�z���@P������L�3gNbC�eGSߧ6��gp�KS�gߖѢ�ܔ����0�  �V�<���\Kʇ �:��Ag�������>����C������45K��)�1��5a��~�����������1�4��E���&KP�^�8D��9�k�G�T���w�D���Z��bo>��-��&��GS���gL6�I�����l�S��7�������(�l�i\�j{����s��$��_6Ea�c�hpӺS��`�ށ,��xX��r�R�U�����荥J/x���l��������I��$��<��ڊ{
���1�T�q:��^&���lO�e3�u��C��57YI�$��`�3⸂� �*�ݑ�6���!�K�l�dȱ��c[~	~��?n�B%�����N:�[j'h���� Oԙ��0���hW��Ue��f�3�"4F�K`2��c�"��c�a�e�[m	t���^��{�_��ښ�7=ӧr0���q�S ����e=��9�o�!q}�GY������#���{v��n���6���K���0<�-� ,xOس%+��":�z�d��c|}��1f0D��i;v?Wkd�/*�����b���(ط�j\h�-�$z����[�qϜ����f/"0��"��V��ʲ��3�*����鶂�"��M8����5V'(�g(n��+� OG2���y�q޳���˫)m��w^�"
�4	W^��ޏ��9��c :���F�v�*Lǉ�) ��P4
�,���+c�����}�
L�ϤV��K�A�'���Em�(���>ކ-�s
!�/5��N[��W�K�#��P��oA��%�d�6��K�	]7�O��g��B�
��
�w��k!��3�
B���t�(�|�<�B0���5��:R8{ݮ�~�xo`.�E�����3��6�*���K�f��B�����yI���BmV\���(N�~g6dU�Ai�9Z]��+
�n33?�0@.T�b��7Vv+5�*�N���D�����1X:g޻�q]���J�y}�8ԋ��ih��_��10�w�j��Ӣ���vШ��Ѓ;��E�|����;����3\�B��x��\i<�5@����u�cm=��Q:�(�?�«�W���1��JN!����貊JQ!�e��(o���a=̛��BF	��
��� S�1�3)ݦ9��[̙�Q#����WzGI�S�gx(��<�A�	^�c�܃n��v3��w���(��<Z��!�O��+<�X��z��'�;��g�;�����>T�^U���(b�qX�_*
����Ź�r6��u�_(�t�>��M]/�Q5���/W>}�j�y��[��A���Q�x�fm���t�~Ĝ2&��ź5~Cv�:^-�&IS��cf
����)>����5�LԲ��tx\V��wDǤm�x f]CK%UYh�@�yE��f(��P6�w�Eo�=H�"ڥ��!bz
(�7]�"q>R���A6ч�Y��u��J��%����O�U5�8�Y ��xlI��V_�ϊ�$aM5�?���_Gm$Sd}e�1�@��g��?����7%�o[�Gd�1��2D�*���H��؀�T��L�� ��2�RL�ה?O���CP�f!���\��ȌH�n�(l�+m��%�XY�w5&|��`��M�<T���v{���5��k[��k�ņ�Q����>nX��+!k�>mz	�|��w�xU�p�YZAW�1iօ�hg��&�O~�oۊ#Ch#Q~�fsq: ���� M�hb�&��t��A��\YsDi�)4�Lڪs��Т��a[
�i�^�M V�`�[8N�RG Ƶ�L|�2'bKQ�#�&#xX��T�H:4��������{17��y��M�ںߒ��;�[��X��3�%0ѝK=9���4��-����T�j�s��j���qC����A��>-���%���`
^��!����]/����	�/p��&�U����{�(���`l`����Y�;��0]w\]<�m*g�|�\���魺LB��i���H�qL��'��0���&�xB��\���l�>	�؆q�T�����CYK�yLTk�99���a��Kh�ҁ��'a ��E[a�0Ӑ]��Ba�D ,>���s�K�V?pP�T�����h�`-����43+o=,a�߸w���"t�N������O��5{�������C{�Z�CԈ����W�\���<��hKm������s+���"Xx���5�L����(�^�]���LVc��#��	�������3����WqexRjLƷĊ((w×�"i��haU��U���wH@
:sz3��j2:��77f(��Ϋ}�nI�.�@�w�=�2r��rK���~E*��Ge�ԩ��7�W@��H�@tq���ۥf��~E{'-��s!����\|A�tХ�D>J�"�� �?A&� �m��~����;�̲�r��@4W2�wQ&Bf/aô򊰦;0f)Z�9��n�bWa�zh�}m�hL�/���o� �'���y��Gj������ƺU[^�hPcEC�ACjbp�p���~"�q���>KދH¡A���b�r^�=�h�P���@tos�Ɋ��M"�u��<(� i@1�BnA��Z�Сa���&O��T��1Ħ��K+��hI�7x��nc��g8ri��Z������9>+"O�L�/���2�ʄ������eV�ĬH}`�L�_�K^obt�7�Y��:k�6�yv�������5�G��,��A�iKp�����kZ�L�u�e2�l���4��G#�6}e�����]�f5���H/��x
�)X��Y��}�2�'ɫ*/'� \��n˰��[�� �Ԁ�L-9F���|�A[��U�B���xO�U��	�������ѫՁ���%π��9�З��mb0��<�����:�̓
��<QN{��h��5�z�)�Qu� ������Jcf�\���9��|��ǭ��Wș'�-�K
̝/y�|F�GW��r�I�9����M��E�����9'O��0
�b%M �+kt�ɶwA��}%��8߈E�)��y����<Ֆ�#壓{jm�-��DSy*���o�H�rv�^��H��:����R��UN��/�c���"�����yX*7B�ձ�._���1=X���Ж�gx�@��'��u¥�_��˱�V��ϗ��F���4��v������v%3j��Ӌ!MW0[�:��Ci���@�x�xϊ�Z8����O��F��psyב�T����k�sG�'Φ����iX�x�S��me�3h��3�������q��諼�Hl��� M�zQu_:����B��El0[�0�����Ԯ��Ď����Zt%XO��9�ojUn�����C�%�-Hy��Ck-�<�k�:/#R�����a�x�݆r�a,~e����:rd_ڮ���w]T�0�)܆�_�W_š!77�o�X�c~-�araK�Ud�uu���,��)ǀ������>��t8� �[��~��j�y^���\	�p����1����x[�b��x����Z��O����i��S�=�G�?MiT�M�(�Ď�"sc%+�>�n?�h6���J�'К�m��@R�[��O@�U�~���,��A8� ��A��:�,x���o_1c��,�*��{V.�S껟�2�}FX�7p&�͘���Yxט� �7��G��8�ɭe���r`K#�3+V�u�5�s2.��w��5Q�%.;�Þ @�w@����2]�i.����5=�~�z���j�ˮ���蠰H���-\�^�+������չ8�Xt��]>���B�9e�~�չ�>]�~�׺X��D.�M�U{h�VG�����Ƴ_qp���mm�Z	�N��6e���m���¢�k�4��u�ω���^�V�7	�F�e'�F/�Yl����0�A󸌉��G������8���������Ҏ�s�Z�&}��o�4r,x�����Nt�"�(�`���ш���T�N�%6���:t����;�Ec��y�]N"��U��>�Q�����]��d��J��-q ,$�Ѹ�
Kk�ȗ�����z��v�������5k,5��˥�d���ʍ�.��E�p�\_���:��zQ��q)o}�av�ֵ�
:"��ߑ���.�o�D����)������QV|c����N�7��Ğ����G���+�#��6�rD�&Е��A^�9>-e�2�e�U�FV��b�$k��Wm����g���L�v
�'���qlq
VDX6�.j]Q�+�8�W-f�#}�m݁LN�i@Y�~�O�;�����#�T��,zo]�!Y\!
�_����ʻ`U�(T�H����j�0���)�rѳ.�N��N�L�qe��K��\!"<
�����eea�Q+��r�ۦ.2m�j���0�EP�\�H�
FVI���+���i��sd��KN�|�
�i�[s�X�-�K~D�KW��q����:��F�T��9�
.k�J�z�\�.�6�&��Ρ��L����/���%�#%�B�=�}1r�������a����efDs��՞,�c�M��'�Jv=��RCW��Z
`�-�p�Ӄm��[��0�-���f
��.�,�YG��� �O��3|n���@���*��U��o�B��K�u�k�#����������ٱ���{�.���9Zj[tdg��T�m���KR?��$\�}��&P���:�]����P#��Bھ3B�
`MZI^6Q'E�Bx�o�I���N8w�h )�ϴ����K�h8�Y9��
C��SY=#2}� �
�LW`����E"�H����>f�6k�sW���/"̚.<��������Ǖ��8Ծ���{���م��A5?�����fc�u�ZfV�.q_X��[��~!�����#q;� ���*a��LeZ���7���3�]����l�ƽ\���kڛ���)0�y��I6g,a���^:QL'u8�T? ,�Z�2�bk_΋tD�����'�� A���6�ӋӠnwW
��d�P��wy:Qe5�.O���+O��F��� .s�Y	K��^9��A)�����)���J�n�K�`/�����ͮ�u�O�8��n~�
ۖ���=��[Dg��n�vA�=%����5ڸ�qڎ���u�;Cl��+�l�F*#���K��mZNHT�ZHO�d-�"�~r,O�m��?��"s�����;��� �
�4�>	3Չ�F��r,��'�eL�,>S�i�A���^��SݕȜ�f�	�.��2�ɥ��<�ܫ�����޺�5�
�?�f�%�1+�P�"y��Z7y�A�YM�Z�P�P
��Iv����X�Å��"���&���\~U��0�JM�N6��=�����o� n�L���o�?�NS[a����Y�����Z3I����$��cɿ�c��[��?f����id:��T�%ֱ~a�,��L��F��K�|d�p���k)�i�����L� r���baY�]�7/wS+�{
�3y7J����"*�OtG-�~]�~-��e�X�sܾI.����Mh�u����']�V��'3?hu2ɮ�f�I%�n���N��a_%칎V�/�a�r���O>�~>"F���W�U�3�JU�L/l�V 2���?�SF��8�g���?�`+���ɇ;*2�G��1w�>��R\
��ä��h�.!)V&2rc�l8�CQ=c���L4*5}���Y��$<�o��a]��^���<ys��c�~І�rjn���ֻ���*IN������nN
�\Q�o�xS�)�&�U��W�w�O[:8�t!�ǖ�7 ���}.ҧ>����=J��L3�͕�y�����������	ڮ��|J MZ_ Θ�u�j���۽�G��7�
�9Y����-����G�u�⧊�e�ē��1�����휝�xe�,��X��u�������he��\_ �_I���zC��Ҭ�WԈ_)�G�$ �(K�/��;@j�J���*���Q���~��)R`���k= j'["�'�3�쳩)T�5��:���ʟ{J���
mE[�jS�8��ĝ�7tkY�U1ڠ�h���o�a��*�{�.�z��u��*�;���V���f3Fp�U4u���]���
�<��J��B���QZ��H�n�5��L�:N>��ac�w��cר|�ɷ*f�m�'xi@0�O@�=�p�K܊.ڏ8�o4��;#�S�q�=}fa�1%��3�9�Y��T䥔k"�e���3��	"�"_��<D�J~�v��u�4{G��L�d�s���#��`�8�p2�/[;ox�����?u��;w�Q��"��K�u��"VZf�럖A���8���µhh7���;��m�z�J��	߅\����@�_���3zSS!�<R�i�(���#����;9C��e�	1�����@�Ce��!�nW�υ��I��+ɍ��E�i�����������q|H1�P��X��f#v����T���9�<�e�i�;H�7��Љ.1�/'g�-ᅮ���S��.�[����n��Q��ms��%��	��܍�x���Y+��n��������(��f�,2(M+��8��$�����yN�ѡC�Z�c��\X;
H�����~A�l�PX�:ϝvdJa�7x�n�Wj��*M��aQVy�KE(�^3�}��FC����g����GLI[�6�c��b�N
�L�<i,ު<wdqgDWU
���&��
��,��eL]��Z�8b�w�ν�g��_\g���̭NL��X6)����w5g�;4��%��J%��ec�&?Y�9� CUv���D����B˗'�ǧ����e�}���L���F`��d.�#P�Zv�r�(3����P�n�!
[%)��.�}���
qK!5C�Uا����Zg����a�WB�f=����98N������#��R� B
�D��t��i
0p�Ï���i\�����Cʚ�r���p�Y~����ݍ�b�����L̮���ߚ��E�٪\CD�ǋXӦ`���:p>�|m$�!R�Z�>U+aZ�|s�̪]l	��ƚ���H�h+`���5D*/":�*��y�+��$��P{?/IbK�p�)�ry�Q���\�fa�� 5��Nʔ��@󬾈��	��-� �ޘ\sQ���MY�����v�����EjN�:�O�NQ���mr�Hl?���$��Qɋj��9�$v��b�%�/��N�ج#��k�|PZ��I���L�;��� �oz��d���b���g}̎�t�6��ا����oΝ=i�J-��t���@R��&��DJ4�m�{��$#r��D���Svea��t�jԠ?�μ�x[�\�$6K$kFb���Wf{���Y�C�ٍ���#�]�n�kS�7�H�] ��a�ÐI�Ӡ/SE,�;��k�耧��U샇+�ERS�����a�Sy�/>k��Z�}� NV�k�v&b�-kwH.���C�F5���9r��	����#�H���w�ː3�wz�n�ȭ�d=i��5��\�S���7,SN��|�<������#.���<��eԿ4@�΄�P��w����o\�I��άc��<s��[4FD��ck\Ծ+N��I�@�ɐO�9�j&���wq@x���˵	�ti�gpM}B�O��t{W�5�.�V����
��7�"*�s8�|�8B�r�0Q�|<#W�j��q�.�2�OQ��m\I�]��NA31� <�L��ƞ=b��|� 
%:�c6-�����������h����xȲ�|�|�0��(����_��n��卂��x��֕L��O�`����*�	��	��P|�3�Mp!�MO��q}�F2B�1�Q,���tˆ����`����BY��5��Ȭ"{�qk���ƘtfKD��;�<��	�����@���z� ��N��7��� �I":N1���1Ǽ��^S�u��[��	6u�$z���-ס�����S�{�O=��N���X\!�@�����^�
��pIv��
Y5C*�Vr����˦/�Kg��5�,�fY�:����oe��e������Z���d�j`�Fl�2Q|ǌ �.���F��x"k��6j]}���x��R�;�g����;��9׿+'F���uվ���[9ҥ�&��`7��oJю��ػ�.�_�����w�N���E��L���T��pTUB���F0�!��`� �n1��*�����C�{:����F��Q�����=I�]B6�����+���XY.�� �}�o�H�]�>B����`¥ ��<-�nLu�ߐ������^O�ާ'�=�������p'#3�4���<�~!�|G��ٝa���'@
>_�����=����+�Q�����vA��s����!IO��|D��m�N�g�N�OL�β��p7*�XGi[�O�"��{��KE����p������c��w7�Կ�E�؜���,�(g�\���^����|��cz���M��y��P}�����+)���Z��e/\ �Y5n+]�wh�Ҏ�J� T��S������z�ѡ-<�>�ý���]h�{}�K� ���<V6=��O��Ӓ����K����;����Q^�����I��b�{��{.W�@�Tq;/*7�����dɺ�a�H�,*��S���?�˜��,�k�;���+[|�
;t���� �.l�C6�v[;��
�P
(VQ�/���qVIZ�zt3�(�õ��y:Im��ruo����`ޱ���wǧ�퓰���X��W�����=�c����ț�����6U�)�������܂�/�����y8<=�K/�S���]��O�Z����2�Ϯ�R�90[:��� z��	:Ͻ�G��7�Q�je��1b��I��w��\�Q���߼rI���9mė0*I��Պ�ls�O�G�&Ř�[�\BO[9f�Α�W��K�y�F.p�_����?��i(�~̋>G���0�Sᬸ2��F�c��a~d���>���{^�z(���Gض=��X<���X�A���&bZW��_eCS)����t�[>��*��i+�H�j���ʨШn�5��{�����9��|bg���,�`��S@��M���K�7�o�[M�_����^��^`s`&��ɑ��W�M��$���>��,�5��3�(\(1�(���`!�dW��=*z�s`=�:?��'�)1m9����%�F���4���Q�r���|$���V
��l[�R��E�y��u=L��[�(��U���������ϓ�&�^4�S����kxԬ���(���	�IZ�x<�|8�X�Y�,o�C�aY�L�Sb�V�@Q��;9ME�s�=?�޾���1��:�O��2OUǽ���Lg���C����
ܙ�
�����X��^R�ttl��DV��Ҟ�Tھ�XS�6)�a���V�K�����3����hˈU��B� 57jt����{	4�b�7vb8�Y[�u��0#v���)�KA~)~�}s3�e���E�����`�&ør�s�=wXEO���yo���IGW���ZI��Z�����#�٤��ZD�݇o�;�h�~�??�?31j.�Čߗ���r&Mɱ*��v��;�鬾9v=+NT������B)�
�QnX\y欤�&�|b8=+F�
�&MJ.;^.P�$sy2N�X��f=���+-jw�_�M ;�)`���c7���!0I[��r���H,��gr�Y6��H���3������)YQ���$��b$�[m;�Y%t�p)�|������"�7��p�9
3_���
�P��q�x�}�ۢYa�N'����ڢr*�!�K��dZ`(��`�kP��*�r�%�5��E�0�biz����o`�)fyjB�zH�tW��z
�8ua����DN=�Z #�$Yn��<Lq�s
!�F�qn|;}�'���$�2~��>�	֞�џ��������1��(33)���aD֍���B�#���2
<|��>#���I��n�Lx��ol<���iژ�QB�X<sy�v���jJo�\p��G�A"�^�LQ[�t���bR���N�"]
���10Dȵ�ԥȄ�k��)�/.��e�%�Ο�kYk$�r@����lx���z
�1�lL ��~$N�b�n@w�{���n�H���
L����V-�7g�l�N�^���[����ۃ�׉5d��ބ(UE}��:�ֽ�;��W�]��.GOw:��qΗF����]Q�8_�>$蔈��T�P��q}dW�y�j��Pϑg6�F����=p&��c�E�#���
(��={舉�p{��;�}�x�a��8�R�'��+ ZOn9c�s���-S�M�$6W9��k���!V�����?��jQq��Cٗα��������C�!N�[�-��1��R1�8�V��|��M��͕�o Ϙʵ˸��+P��'k����#QL]�hL�]��t��(�
M���l�t�k��)/o3�y�EOPF"hy<�t ^j??��.�
n���l71a���֠G���c��b|e�J��Q���Q+���p�J;��%�q���rb?��.�2�l@����#�Ԑ��*�u	š�c�Ü�]10��T_yuu�o���r�CF���3#P�?������S�ꦞ?e*��R�0*���y���Ǯ��s�eKOش$�ׄ��9��I޲�>|!��Lv�r�ϑD�`�"&p[�^�R0�I*����A�ZB�i\�v���d����贝�������L�(�C�:��A�����]��r�v
� �;����H�Q��n"vI]|�Y�8�)� hoM�
��*��DY|�6j��w]��-_�g%����u2�����Ye�x+//��w�GH�y/�noR��ǐ
��y�5��f(ur���"))
Pw}�u\hY�K�¤�Q�11a���~4s���hoV���}�L��ש �����G�@g�Y�N�'-�Ƽ�$�9�h���=>B��V������q���Y�1R�E�+�r�]�+8��h�X"��؏���^J�С��F8�j���'�mO�8X<g��^�Q����9�r~#T��K크CE��̜����u���@�^k9I�hF�}�.0P�iK�"d��Ȓu�n�v�k^�|m�yy�F�?�8����7>y_۔�е�
�_^k�e��EZ]~=��͝ʼ���/c��ℏ��r�,v;�
���l��
%t���w�@��!��Op��b\�}�
1v��>��7>|�g��˙ʲM�Mص�U��7���J@��a��5���������g������>~�9d�1�%O��i	P$�>(t�?�Żmj,��~�V'�6q�[Bg�gd!n%	7���ӻC{w�_ce�����?������pH���4����z�I�\W֑R#;�4Z��*	��X�qv��_�U«���w�r��>h�&?6�n�4Ϲ���sM��G�̙I�D�$�U�8}�o��ٜi㧷��}�ի̉o�,��9�:���F�}�������Z+��-�Ú�P=�Z�~��D��bc� ,n�#/����RB�<6��J��FzĤ��S*xG�wh��j�P�H��ga�q�v#�R�.T�U
O�_z��ntK;
	8Y�����R������叧{���akoih7��dj�y��gV(��s���
ս��C91$���V]헽�A:9 ������A6��[��{��:�[-�[��ʴ��:�g~�!��_
����J�.��v���|o�⦲��x
�A5y$_��9�s=7������cK/+(�͎�
�`���I�[/�X U��O_9hb��m�}(�%h/�f���z���a{#�T����$�>E>��e���nt�y4���i���4x˺�O�MI����	��/8�h�;rk���wS-��"D	�Q��i��j:���	��n���Θ3�ӹȫE�xܵ$!Q�
ܩU�����,�oB��lӵ�D@j$�k�Q�#_���7��#M���J7��|I��Q��_'w�����^�+H~?�\����T(��+uGBlضASh�Ǜ�r�2n�����l�
�S��Q��l��3�����bnt���#��Y[� ub�9�W�n}��T��
O0�=�r��4�4u�BG���?D2�S2Y��SP��Kw��pI�Yϧ��7��x�������:S]Wcx(<+E&_Q���#���t�ش�H�w�GyE��L˘StM����*g�CͫI
��x�]�1R�WB-�	���������Np�#���ܚ�@�x_wg�����K�Z�I
	���Ҁ�֦�Ӥ�.(�P�zj���
����a�?7P�[�=9X�Ժ6��@�Ð������,8+L#I��L7�9K��dd �@�I$-_8�@+�L1z�=��ҟ*Tq�D!_L���^W�v�'J�'��~ ��{�4aY��Θ�l���q@��x����أ��������^\ӅE�'�ˠ{���k���΀������P���(�LJY,|�Je +��eL J+�{�A��8d=
-�^���y)�uԆ@��!^t� ���oW����N=������lW�AC���b02)*�%�;����?�h,қ14����l@v_��r��z(d�"
f*�w�{��t�7G�ۂ�be�0����;�fH������
�{"�y����UpP`H �ͨ�Y�_�"�\j���jv)��8^lN�Yg�_�[L�3^�D���C��j�S����t�"����%.�M���5ԇ=k{���Jj%��,�sGJ�dI5Q-�q�t�����w�}t��h���7
��XZx�ù��t�#ej���L�����8]g��aU�����5*Ma�q�ט>�%���_}��ϫ�����|���h���X@%����r�A�$���yh�M�
v�_z�K�b���c��}<s?�ޮ�z���t�����}��KU��1��dʱ1��}VM~��ϥѷ��U����Dfː���p��Q��y7ǈs
�c��/&��>�MΡ�mv=b%,\^�EHT���Ӆ�2���
���f��ab%��w����?u;
cF;�/R��9[o�,��2��
x���
����Z�9�[�ii���rs��Q���"�2�*ػhn��ڔ���k���GCdZs�pd�������,�w�A����u<$K*�-��wm��x�_��#���q��X���:ffB|��w�e���m�2���Ⱦ>�4�9*�6�_p�=�D�,{i���lU���oE$�G�¢����Q%����+}����%�_���]�cj��VIh��1�Q��XV�����r�4�>bf�KF�}yj~n�u �^ �8%M�y�4���5��*˽Z�1���!	]����=�wG�nwt�7�[���a�U��JR�$����,���Kɯ�&dxub����K��P����Q�`Q'4A�)�i�uVMG���\��z@N[$�f�va��l����G��}OӦ������7��N���y��p�;!q,^�1�B�����'YL��*ծԺ��:D�Ĕ�%r 8g��LCm�[��#�e��Ʀ�:��#��݀jU����XZ�w�F
�����ρ�>dpJ�;�=�͝w����"})B��1Y�:搀�����m4S�n\��x�F�Ꮶ�S�YR�f1��,٩,w�ޝ���%��h���ᬊ���<tB��<k�^%{�9C���� &TL5*P�i�i$U�Ar�WI����#��O��m�1��C�v���)1�c\�"�� k4a0��Z���T�"��ؔ�E��ۙ�
xR��,,H�%��.��*2�=�{ܧ3sۥ�VK{�c7!��8�[}�خ
��Sm��/o�k%�̓�I�,v�`-<�(lnO
����Y̛�!� ]�[?o�ևS@B��,;"��w���6��S�0׃[�7�z�����
����%:���b;���h���-�_7׊��6���z~��d�g�7�I�G;��� (`j��m�M׻����S�;~
�ᅟ��4��eE^��x�A��1��o��o�Yk���~�5��şf���ۥ
��T�nD:5��[��R�j�T��j��'u���k���c����AUm1pZ�!+a�g��;�S6�A_	� M��h
w5~���چΚ��k�b���bi~��yN��������S�Х9���[�ҡ}Y���r������n�Y*u��lXi���+)'Dӂ�Y4����aj�s����:�@h����V�_�i���8���׌ĝJ	�'��[����oko*����
�_(���v>_#�f�@DA��\��Y�� !d	ñ�v�֝����h7�1LO׆���(��&?󙡊7QU���^���9�()L�Pg �K���G�?�8oJ(�A��!�����]l����D��a��7�EL��opo���Q�/'�1dbnS�Zx�کQNg'�ղ�q_�q�?Q���m��Ģ{��OB���-�>>�U��s���)�oG��w�Wk~~$�߄.���׍�(�3�����ĵ
h�{OoW��^�z��nz�gd
T<D�M�4��檟=*�����v8Lj�l�^!хI�ڗ'8ز�Lkg~�(�U4�.���2�V����CR�sum���zM�G�(8O�����`9])/���bm�|9��tf�*��^��T��e��AGFEJW����~W�?�ؚ*<�$
U�fXWv袱�댙�v�,LT����K0%��&�+�A���N��6I�g$u�F�Ođi���c�e$�,QR}� �g����M�h[<k���8u�{�w-�*X�aA���ܾ�`�aVQ���lt ax�)�<;��e�n�?�MՓ�����qӣ��� zhF�&!�����A-��\�]S�E���C�~�+��4~��{ˢ�R��!}�F��J>��ui�;�9;�#�k���+*��_��m�%�^;'6S��іӼ0��.�wP�
���^a;њ�[����ѓ�<��~\�,c��?KO�#J�ͣ�dԠMv`��$L>V�Y���z�9��>�_\�k��_ǹ�+U��*�t�aqqz������u�<�-�X�<gv@��I�2P��G|���Z�Zik�[�=0}�I��Hլ�_f�IJ��E��{�N���������zq�80���|�a���m��j
J/z����s/ay�1��qg�+����8�5�s���=�-�����Q����
f=	��k����X��m�S�gk�Yu�iAv��"������g�[�A�{��[F �6n�RFy��?�x'����V�c��"��0��3�v��d��n,��B!�ܵ�5e�[W㥧=h�rVT�,2eVqک��pCD�����]����H��2��lB��vb��3cZ�ӿ�����§XU����\�2��ŌDrνu�uƫ1+�3�Z�[U^�~	k�"�o��_��V���{c���-��{���ly�.>#A=�o*G�xm�q^18�ѥ>�/l{�q�۶����@h ��g'�>����W	�}�p檅!�\�՝Jߣ����i��R1�{ �i����*���J�lI�:Q�.FPZ������l����~�
r�x�cR+��_���0�ys�&44�u#�w�@���e̡���ڱ��k�o_�uo@�+4&�Z��]ty�(��s���z�
q����4�S�l�q����@���T�����G�HK3"����������*©�8Ug�,f��K��+,�~ۀ���즮*+�}��_RJC�o�yO��T�<Nt6
Q�K��TL���*��yxӷC���e�L�j����6Z|z��i��𕰖'���6�0k�(d��J�_95�FF+��
�����l2w���4p',���h����
��Jǂջw�Q#�
;�����TQ|�X�3�Fl;�NS��XW��)������u�zm�����ĐW�Ӣ�q�߁��Ю˩]��������!�`ܠ��bs��48o��v�vـ5~�\�q��`�a���H@N�#q1�L,{���O��l��ˁ n��p6"y]���|h�P��+R�=ێ�|D�uL<��z��8S��j^V���L? |�3�^��_�)K�ϕ~V� a����e?14�hs�N��r��v��g�
��B_�c9��-���k^�vnR���Œ1xC��́9X�=�5�IM��}gʐ(�v2�1��R��f9�pk�ꢭ����֡6�XO������˭2�h��u�U�5���dx"�﷝��{J�?c
�O%�Z$Xf��n�(���"d+��H��&E�]�%�ۺ����tC�	�Y
ޏ�OUUL�#ʘ\QJ��.��ēD|���rbJ���Jj�����j[u���O��R�������y~t�/�x��_� ����!��p�U.��52�P�����|8f��޷��~�%���5{���C�x͇ʴ��Ày��gK�s�z�P�����W|��1�=��Uk�F�U����8K�c�>�k[��o���'�%_��F�է�kq�Ǌ�#��^�,�jcK7�V۟;����3���ك%�F_�ߙ�L��|�bG��Ak��ٱ�k8%�N���x�������0�u��<��'2b�U�'�ع�����ɼ���A�������/���X��n����m�°�2�_oUXM����6��>r���M~�ۈ��p�K�
i��
�M#�!X�;��xN-��os��3;���;I�6L��p�F���4-��4R�f��3U���b�&�^��C@�*�I�?���&o�"��ܰ��MF�rJ�7� �e|#�:�l�6�Bf~��aa��&���r��X�8�t������;l|��Y4u�Z$vl�@��G�v�x�t�������:q�f�6�GI�n�&���n�z��E�O����)۽��N�.���:jK����7��I`^��ZT�*@��C�'�� �smi��Mö��h�t�'ੵ.@{%q'�~��U�3�C(3G�#}�溤U^Wr<<�����K���vc5� Y���m%�(�@g�`E�#{��Z8����
���o��D8������`�ˮ��bd�|���Cc��:���Ҳ�Bc�y��(0��v~��P6?�_ZW�����R+���Q���?{�W�v�R������}���b�&�����Z>�V�.
�z���
p��=<k�S�t�o��6�y0$����ZYV�`7@�+��k*.ؙ�x�\��T�gyE)4�Of[���e6�:}��@/��Yo������-�n@
a�~�{� ��	��ޗ�����d�a0��.�=I��d��2��9D˰���hv�����n��%.W�!=$�r�.R�ˆ�ͳ����`ԏ<�⣍������M�ukU��l79�j|;�䡼r�f����?x�
�p�)����S��7ܙR�}�97[k>�+E���N��
R����'�n��v�@z�;��}�:/e�ݛ<�2���A�������H�Oa;�����c�k>6G����;��M�l۵�X>���bHd��Vn5�7���ӈ�M	f:t��{tcF�Q�Ya��~��IMH�0u�ݞ�/�-����o�K��$�
VVm�{t%���:[�+�E\:$�]�w;�r����
�_�^Q������f��|��	�'n�tY���,rJ���_��K�_c�(#�
3�&׽�O ��Z8����и>$���+��5��.�?�9��x���1���9�	� �1/$U�����n�iH�
�y���89����_���4I���M������GwU�l�y$+�!�oէ����
��nNn�����g剩���^b��؁U끵)�3�g��3�p����hK�/���
�qc`�^�ef�?��w�c����%O,�;����u��7�X�&�V:X�)10�8��]m]���pG5���Qp������-
�l����r⺰��q
2Y�U'�~���?��H<׿/؄{���q����2�>͛�ݸ�Ԩ��^�{��-K�Sfr��d��D`f�V�S��Q2
e����
Yi��	���s�ם7��*��2�#ƹK����zWA���_�u��B�
NS�����TzJ�^�F�/N h�
���'�ETĮO/n;���l�ϙ{�R��k�F��_�z�2�7a����"�w;we�rX��s%v�~����켙��d0�����*9����啦bס�o�lk�s��c��

qv�Ӕ�EQ�=�1,\�+M�#�X��<vpL�h�����XŘ�P��R������B�K�bF���	� �^�Կ6�ji�SRa�^��6���/Ae�+w�p��Fv�o�Lg�l���o��ؿ���p��̿�KW�%�w��� [w��M�x2Rm3iQ�i��L���947���
����X�����������H���{���mU�;��I�����䃪,&� ^c���T�8<�U����g���pH�E�/�h����g��0C�(��g�n�q�zس�d�K8@�n�|d(�����wD.��Kx�)�3�\a��K�����v��W��i��	���(��^������y>FwL���*�q�-��׮�h��
�P����'�9ho��f�B����7��;A~�$�����4�?1_����i��]w��?�l!��O�Y閗��d�-��x��{?Nw��l�1Q�]V���	������.;�ZكiqӞ�����Z�b�d�g1[wQn��W���Q0�ϥC�&���a��.���ޏ_n4F6laU�ye��b���j�͊�I��,+3�i�J�c���h�2�R�Mt�<��}C?�? f̙m�����4}
���'�Ҟ����Q�/���;3.p��Hꯒ+�2�j�^�>�`ٮ|�����7�_4B���ٮ"�l�l\3��."�K7K��h��}*W����Yk�DyK���ѺDG��-�`MM�>+�����[�K�Q8�ቱ@���"u1�%�E:j"N7�	��&����C�i�wK� �r�ߓd��5s����J������R��peYj6��%3�
���{
8p}����	5.�$d%?�1jT��ҜkF�#�>C��[`���l�m#�g�@0�@��)"��	y��o�PZ���'6�X�`�|��d"[;�� ݉T�d��YO���G W�h��׿�.���ǘQq��� ��S�M�YW�k���\_��N��)���\��1.����#eAAD�0��9�-X
\�kP����i��\�d��w�~��j�K�]L�GW!D	���C�1�O����+�~����-o��
�d)�a����k�_�W�Z�sé�R$F*���**�\��	8j�"7E�0!�D��� ��D{8��g.(Oj)�jK�R̵n�F�ޥ�5�J�*����څ�@��1����6����n��� pϺm*��F�5S�^[����7r}IO�<sG��\�L=f�l��O��"z�G��1q��3�>�{R��Sw���x}mĬHs\.�8�#՜Y�.LQh��4�4����f�U��V�w-�N�J�n��Y�Q�߬HQT@T��/e�C者R�JB�&`ا9KTf��|e�ʴȶ-2b<t������ic���	������-H��Ww��n
����y�g{�7�$�CI�¦+
yՂ���������X�&�x�)a��f����M4$�t3^
�aɔ�����Vh��G�fW(����ꑪg�����on�_����a��znh��`��[ݲz��گY��Ӵ�wE�ξ����"ߝ;�E}y��Q�>�Ͱz�Ð��F�E��h@r�w,�LO�S���Ύ4.q��$�T���s/�_a��RkΞ�xU��:�m�{Pmu��PÓ9�OH㙏�g�@(X���}�a���9���K%�6��t20�v&�����->������S�rյ�)������s2�w
#̋Y�.~�6}����&�,�u�s�$#+
�[8���	�
_=C��P1�[�A�*�k�f��;��z�I&�F��x��n;U�D1��m���~��˱�������E�=�P��t��KOT��5�=��m��Iؗ��v �BnؗC}����j4'j'��(����fG���΂�k�~c2��)�����n�K����s��c���%�N��H�o��J�W��E^�X���b�&�\�z�v����;�}5�-�~n��"J*��������L(ݎ�ڏlF;�qEϑ����3�_o@}���0�@�Cg�~�<կ���bJj�����ۜ�ؖM��
��!��z
��9	x\[����#A��FD-�tyz^8���ƙ#:��!@t7>ňl6Ȟ9h|Y�9�3�i��Ik�-��T���GZ,�1Pɔ�eŲ�����.'H�Q��ܲ��n��7=4�v�i�[{o��I�iG��`,���*�-l��z��^����vOS�}#��?��Nc��D�������G�Jí1���-q�u�8���B�^�C탗�
M�S�ݢ��R�ǜ�#l?M���;d%�b]�9���e��$^6o�^çz_��E����u%���M1���_z(�����yp��_(�֭�a�t����"1M4��&�D	#
��#�A���»��:;��㒋+F��HC4�	��?_���Q���_�E"pH1r�+�C/�m�w���B	�����ƨ��f�j*�j9'�;
�ƦH�˨H
q/�g�����Y4>�sR���w�L;��:��֥K�$�0_��χ<�|�2TGZ�1O�̋�A���
�ǡI�;��*f����z-0��7kb����ąRX�1�� D�<�����MAnR���X�".��\Aa E4�\��q�6c�@L	�Hct� l��������~}��ƛA���Wxރ&r���59�k�C@�4>D�o
�㗻z05�I�:�z�"E���W�'g���!c���*[&�������S��h�˭�a��5����Q�H�ߜ���i�u,���o;�o��W��/
�!����x�&����v��3�&퍠��t��\.�-iU���޺pͭ�ׂe��>�#I��
%�3~۠º}��E/ _Ǝ�-U���)v�o�~^����C&�
%q��w Ӵ"�}��	�F�H�l�a�O|�]�0mX��806l�Ûa���pS΍�<�xǘ&�����5	H(��a"_�����&_�s�Y��� �.q�
xNv�3c�@gM�/|���9!��g��';��.��s�����v}S&wr�p
�Ͳd�"`���� 5��ý�ı�wD��ZZcD�bz�o����hJ�J �y)z���� ��:����>�ta��,����Gs5�)*W��y*���+Ëqˇ���m}��9�؆�o��sB71c
G2ϥY�3��h�3�r��o��	�5���IpN�Ə�K��kcHG�=Y��\���Th	߿��p�:>�D�`���!��1wo8
��B�ߕζ:�>���͛ͮ��M߃94W\���GH�>QU,wqG�e�J��[])1\�\%�i�:�
��*�+2��FDl�SbB��QS���y�(]�y���~���U�73��lo�������q_
c��&�9Ϙu1�KѨ�c�#<��Y���	�] �'�����4M����m�#���d��R��{�q�+��F@�a��.�U>��� �'��$��*���j�����҅K��WE��������}�H�dC��U]�	q�v��WXU瘐I!��eIMDWᯁO�0�ju(�$4�c�	X�{�m;�Oת<�nb7~�RP."�'D�R;���K��}���
��g��d�}~�� ��o:o-?�,q&��m[�b/zFp���3�����AJ�uH
���2	�F�+�ԚQ����4�&���6=��*^�U΁~.��P� ��=��+*O�.5l�n�8=,�l	�-qz׈5���"��[���F\�k�z�Zv/ݺ>
(���T/,w���Ɓ�ڡ7<aX�=������I���نY8����W}I6ʚ��n���v��I�OY�v���S+n@!�f$ː���#^�3l�>�"��"aG���7�B��M����l�"�t)��h*�i����lf���$�B��,�?�e㤭T �z�wG����]�6H��k��z-�OZl �z�O6U�2��q �9J�Ǧ������}�"�4�t�I*��bF���!7{孀(���bn�p�!��i��UA�v��r��ɹ�v��F���3ص�#�/3p��R�~�'����$xYE'ʖ]��Ƽ��F9]V��E�3�nE������w��r��*E�cgT�j�K�NR���Յ�4f�(s������>�!�H� ��$�`�ϪUx?�L���-�x2�n������:�p��"m<CՀ���o~��j=��N�=[%��~�7Z�;���yا��ڠ?�@���B9���#��T�t�u���c�����*��LǮ�sp��X�(�%I/0�A^����d�{�cT���y�"���y����7�ܛ����3q�'"��#�!?���@&��ƏS�uP
'�o(d��;[���m���i`�
n��.3�)hQ=���IrWn��3�e��7�4
gm�e��-!��^yE��Ar��3��Gv:"��g�	�Z~$��]*!����Ç��Y�x���N�B��fԏ���3�߻�	 <<Ÿ�b�Q�,�w����ې����/�e�M�� ���M)#ߙ���w�S��S��qKoCW�9�
�=�#u����ȕ;.�� �h�z}I�����pg��]B�ꊺ�-lڮ��|no�U����¬�Pt�_�0��rň�F��w��	�-����н$����㮺z�����k�5�'�e���/�ͺ{"����y�z=��U1Z�=��� �t�֞<?��vT���؟�8��[Ϭ߽�"���H�e�ox�՜B~&���ݹ'�Qq�U驪�V?Fb.�S��4FJ2������E���
�6�9"�V$(�9,Ho��[����6��K���Tl���ޤ��Pw�1��"y��-ƭ�o�^�9|�V���ffR1�l� N~�(8v�ZV�~��S������R�*�v�p�q<�#cը�\�;��c��9�&� h|��2�Z`J�||�α[��O�y����"f�ׯ��z[0��wP����~07���l+���][�B��c�C]���{��V!YݶϠ�ӽ
�h��4��	Z>$���M��76��H���?�p�^c��>��շ����a��L-��zZZ�&Ƭc[���m����J\�3*�S���}̔���Jnb�+�(�j�D:xFq��I^0�YtjN��tޯB��ԋ*�����	�<5e��j�k��P������K�D�����Q�������C��Q��a�:zҽ5�5J���Կ3� �#a���pt�Ĳ<dZ�9�9!�'�3~"�����V+��m�%LE�"��ҝ��!Ǘ(��MLu�ѱ�&̪D�v��Q}:�]�姎�f܅}�g�~���[��y�Oop�ˊ��珑CAG�W˙qQF�#[!k��q�]��Ӧѹ��L̵��vP 8`>�Ң���r�}@%m��Q����bO�O@��j�|����n��f���}�����d҅gc�qf��aW��]�z;�~��7���l�O��ȐE����{�5��C���rS&;]~���L��̘�'����GsGvw����w׈��2s��;\Zҡ7<�Mbo��������~=��.o7�ѣ�����DmT�e?���%�Hu)��.�� ��R�ɢ3̝ܿZ�8S"��x7�g�e��>埡�v��y֟{}R�Fɣ���(6��^����h�>�A(�/�����p��{�OJi-�:~��+�Y������#?:����t:�#��YQ?�+��:uRLȀ� �yٷ�x��6L��bnD�v���^��pA�=8�A�ɞ�{��
�v%�a[�Hj�z����� �)h]����ûb�w��&x�]��	����l��g��2�0�hr�����p�m
|T�ŊþV���<�G[O|�s
U�e+8#�I��x��&"�'����GA��]��6#,��}�g \���/�nyC"��y�D����ZJoJB�y���zoԺ I
���l��:���rKRu�7��YF�Nǅ�p]�0���}�JU�褡D㻖�""|)�����.$ьA��Х��#c�;%׊���wt�Z<c��;�Bm��X���y�A�LT�1C8	��t���������3C���6O9
��ῴ��!��8�J3 ❨L���,Ã�����!�*|b��0 @����+�a��_�Bx�XUO�yz	L;�#\��$�)Ԓt����<�_�/J��y���u ��Q7B׍u�
���������b��������n�BZ�l5�Ҙ�y�@_�5��r�}�G�3�x�i��荭ךc����im�;�ˣ����S��ӡ�_*e����J��aa(-m����v2%�`	����K�bE�HTH�׹�7×���S����*/�d&���7��t�{����~Fs��鷳�������jl5(>�0�3.�n(�K�
u��]�����xJ��Ԇ'�����R����֞-}K�y��J�����n�I�(���HhJ~Xw��$o�0����[���T�s
(<h@5T���#�nPP��]�o�/��Ԇq��bӝ�|���'|LC6�� �R����5�tj�;�a��?E��`�ά�{�[��G��qM���d?����g�Vq��}���v�mH�ω�Ǟ��.��W�!���j�fr��~��~�i�G�.�89�%A"��Rĺ?�0֊��o0Y�j��eS�je��ЅW��]#�f��U���c���K����o��HU�I��w<2f5R�:S*0|>Ϲ��"�t���ZM����w9����CY7�'�Π���j��,4��r�!���\_ő����z��n�n���w��l?FY�҉ͻ��.��0 �:H�!~D|�^x���#ьڵ
Cl.�����>�q����UO~�@��)���� K>������/����:����|tx\�ײ�<r֐���@K���m����i(E艭N톱�"R�3�Gja� ��s_3w���JK�5��QJ��,���(єc�l�g���n��
}�� �72׻��Ѥ����3e2�����L4���;��  �h��.�G�+�~�������Rgm}�
�����Y��=�<���̧k�4a_jW�+	;)��mJj��'^8]jd�;�ڠ���6�'�3mn�ۑ�*E㈝N
Ok���1Q��#��PصKƌ�n����q�~��%=�7{����� �m����|<jҝ<�h��j���.�����a�r�]�!oE}Q��,���4&m�t:Fe��>���%@�� ��N{��i; ��k�O���,/-�\�:�p�J�C7�.D��b��|��/��9��rd����.�E��F�}��_@B���µ�\���)���ںm��1�z��7����� �пj+�X��(3Zj�!�
���|[8����t)3%�f�!?U��U���4,�y��y��֬��	퇊<4b�!�DNzKg�֧�$~��7�E��M������x�O�}z_� -��Dl3IB�Y��Y��3�fm��z�g�K��L�	�v�Pf�j��^�?�_����~r󪅒�-"l���wn����!�q 9�B�8� �\�UH���Ak����B�#��fB8W�`!#�9�[��zq���<�-?%3˸_�;�N�_R ]�AL9�^qM�<u6�),�Hn�(�R��WS�F��ԃ:�H����3��&�2`�n�*s�8-�[^["�а�k�p�|h=_�ݥ/��������q���6S��Z��ߝp��G�*U���8=��G���gvq���K�[�T�"�8g�A
f�7�?�F7&��n��.�6;��z׵��?΀*���s�|j�5��ʯB����F�7Næ��������-k�\L�V%q8g��L�<����n֏�XeM2�?�ή��]�N�S�_'n԰C�'=%F�%�,~l�C���Rsn;��oc����Cρ�D�T�`Y���x�qPrw�{�ݳ�Ul2�ϒo4[�ƨ������w|��Ak�b*m�7l�(�[�&n�D�L�;�>�c�M�Mz���U�\��`��o�����~�����S�}{��v�{ctD*^�X�uu�T�TS�D#��v����բ�k������z#��
v�����[�q���N�