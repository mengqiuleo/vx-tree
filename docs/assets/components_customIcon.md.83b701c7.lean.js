import{d as i,b as r,H as c,o as n,D as L,E as C,c as t,C as s,a as p,t as A,K as d,J as E}from"./chunks/framework.e1c69d6b.js";const g={style:{"margin-right":"8px"},viewBox:"0 0 16 16",width:"16",height:"16"},m=["d"],B={key:0,class:"devui-tree-node__indent"},v=["onClick"],h=s("path",{d:"M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z",fill:"#8a8e99"},null,-1),_=[h],f=i({__name:"customIcon",setup(D){const e=r([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}]);return(l,o)=>{const u=c("vxe-tree");return n(),L(u,{data:e.value},{content:C(({nodeData:a})=>[(n(),t("svg",g,[s("path",{d:`${a.isLeaf?"M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z":a.expanded?"M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z":"M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"}`,"stroke-width":"1",fill:"#8a8e99"},null,8,m)])),p(" "+A(a.label),1)]),icon:C(({nodeData:a,toggleNode:F})=>[a.isLeaf?(n(),t("span",B)):(n(),t("span",{key:1,onClick:k=>{k.stopPropagation(),F(a)}},[(n(),t("svg",{style:d({transform:a.expanded?"rotate(90deg)":"",marginLeft:"-2.5px",marginRight:"14.5px",cursor:"pointer"}),viewBox:"0 0 1024 1024",width:"12",height:"12"},_,4))],8,v))]),_:1},8,["data"])}}}),x=s("h1",{id:"自定义图标",tabindex:"-1"},[p("自定义图标 "),s("a",{class:"header-anchor",href:"#自定义图标","aria-label":'Permalink to "自定义图标"'},"​")],-1),M=s("p",null,[p("通过 "),s("code",null,"content"),p(" 插槽可以自定义节点内容，比如在节点内容前面增加一个图标；通过icon插槽可以自定义展开/收起的图标。")],-1),b=JSON.parse('{"title":"自定义图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/customIcon.md","filePath":"components/customIcon.md","lastUpdated":1686049976000}'),Z={name:"components/customIcon.md"},q=Object.assign(Z,{setup(D){return(e,l)=>{const o=c("vxe-code");return n(),t("div",null,[x,M,E(o,{source:"%3Cpre%20v-pre%20style%3D%22margin%3A%200%3B%22%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Evxe-tree%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23content%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20nodeData%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Esvg%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-right%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%208px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EviewBox%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%200%2016%2016%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Epath%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ad%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%60%24%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20nodeData.isLeaf%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'M13%2C6%20L9%2C6%20L9%2C5%20L9%2C2%20L3%2C2%20L3%2C14%20L13%2C14%20L13%2C6%20Z%20M12.5857864%2C5%20L10%2C2.41421356%20L10%2C5%20L12.5857864%2C5%20Z%20M2%2C1%20L10%2C1%20L14%2C5%20L14%2C15%20L2%2C15%20L2%2C1%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20nodeData.expanded%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'M16%2C6%20L14%2C14%20L2%2C14%20L0%2C6%20L16%2C6%20Z%20M14.7192236%2C7%20L1.28077641%2C7%20L2.78077641%2C13%20L13.2192236%2C13%20L14.7192236%2C7%20Z%20M6%2C1%20L8%2C3%20L15%2C3%20L15%2C5%20L14%2C5%20L14%2C4%20L7.58578644%2C4%20L5.58578644%2C2%20L2%2C2%20L2%2C5%20L1%2C5%20L1%2C1%20L6%2C1%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20'M14%2C6%20L14%2C5%20L7.58578644%2C5%20L5.58578644%2C3%20L2%2C3%20L2%2C6%20L14%2C6%20Z%20M14%2C7%20L2%2C7%20L2%2C13%20L14%2C13%20L14%2C7%20Z%20M1%2C2%20L6%2C2%20L8%2C4%20L15%2C4%20L15%2C14%20L1%2C14%20L1%2C2%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%60%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-width%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Efill%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%238a8e99%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Epath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Esvg%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%7B%7B%20nodeData.label%20%7D%7D%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23icon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20nodeData%2C%20toggleNode%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-if%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EnodeData.isLeaf%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edevui-tree-node__indent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-else%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20(event)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20event.stopPropagation()%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20toggleNode(nodeData)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Esvg%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20transform%3A%20nodeData.expanded%20%3F%20'rotate(90deg)'%20%3A%20''%2C%20marginLeft%3A%20'-2.5px'%2C%20marginRight%3A%20'14.5px'%2C%20cursor%3A%20'pointer'%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EviewBox%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%200%201024%201024%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E12%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E12%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Epath%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ed%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EM204.58705%20951.162088%20204.58705%2072.836889%20819.41295%20511.998977Z%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Efill%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%238a8e99%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Epath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Esvg%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Evxe-tree%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201-1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-1-1'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-2'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%202'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cvxe-tree%20%3Adata%3D%22data%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23content%3D%22%7B%20nodeData%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Csvg%20style%3D%22margin-right%3A%208px%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20height%3D%2216%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cpath%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ad%3D%22%60%24%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20nodeData.isLeaf%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'M13%2C6%20L9%2C6%20L9%2C5%20L9%2C2%20L3%2C2%20L3%2C14%20L13%2C14%20L13%2C6%20Z%20M12.5857864%2C5%20L10%2C2.41421356%20L10%2C5%20L12.5857864%2C5%20Z%20M2%2C1%20L10%2C1%20L14%2C5%20L14%2C15%20L2%2C15%20L2%2C1%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20nodeData.expanded%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'M16%2C6%20L14%2C14%20L2%2C14%20L0%2C6%20L16%2C6%20Z%20M14.7192236%2C7%20L1.28077641%2C7%20L2.78077641%2C13%20L13.2192236%2C13%20L14.7192236%2C7%20Z%20M6%2C1%20L8%2C3%20L15%2C3%20L15%2C5%20L14%2C5%20L14%2C4%20L7.58578644%2C4%20L5.58578644%2C2%20L2%2C2%20L2%2C5%20L1%2C5%20L1%2C1%20L6%2C1%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20'M14%2C6%20L14%2C5%20L7.58578644%2C5%20L5.58578644%2C3%20L2%2C3%20L2%2C6%20L14%2C6%20Z%20M14%2C7%20L2%2C7%20L2%2C13%20L14%2C13%20L14%2C7%20Z%20M1%2C2%20L6%2C2%20L8%2C4%20L15%2C4%20L15%2C14%20L1%2C14%20L1%2C2%20Z'%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%60%22%0D%0A%20%20%20%20%20%20%20%20%20%20stroke-width%3D%221%22%0D%0A%20%20%20%20%20%20%20%20%20%20fill%3D%22%238a8e99%22%0D%0A%20%20%20%20%20%20%20%20%3E%3C%2Fpath%3E%0D%0A%20%20%20%20%20%20%3C%2Fsvg%3E%0D%0A%20%20%20%20%20%20%7B%7B%20nodeData.label%20%7D%7D%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3D%22%7B%20nodeData%2C%20toggleNode%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%20v-if%3D%22nodeData.isLeaf%22%20class%3D%22devui-tree-node__indent%22%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%0D%0A%20%20%20%20%20%20%20%20v-else%0D%0A%20%20%20%20%20%20%20%20%40click%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20(event)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20event.stopPropagation()%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20toggleNode(nodeData)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%3Csvg%0D%0A%20%20%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%20transform%3A%20nodeData.expanded%20%3F%20'rotate(90deg)'%20%3A%20''%2C%20marginLeft%3A%20'-2.5px'%2C%20marginRight%3A%20'14.5px'%2C%20cursor%3A%20'pointer'%20%7D%22%0D%0A%20%20%20%20%20%20%20%20%20%20viewBox%3D%220%200%201024%201024%22%0D%0A%20%20%20%20%20%20%20%20%20%20width%3D%2212%22%0D%0A%20%20%20%20%20%20%20%20%20%20height%3D%2212%22%0D%0A%20%20%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M204.58705%20951.162088%20204.58705%2072.836889%20819.41295%20511.998977Z%22%20fill%3D%22%238a8e99%22%3E%3C%2Fpath%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E%0D%0A%20%20%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fvxe-tree%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0D%0A%0D%0Aconst%20data%20%3D%20ref(%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20label%3A%20'Parent%20node%201'%2C%0D%0A%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20'Parent%20node%201-1'%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%7B%20label%3A%20'Leaf%20node%201-1-1'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%20label%3A%20'Leaf%20node%201-2'%20%7D%2C%0D%0A%20%20%20%20%5D%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'Leaf%20node%202'%20%7D%2C%0D%0A%5D)%3B%0D%0A%3C%2Fscript%3E","page-name":"tree/customIcon"},{default:C(()=>[E(f)]),_:1})])}}});export{b as __pageData,q as default};
