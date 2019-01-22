WvSitemapManager.loadBundle("9ba53ozm",["exports"],function(e){var a=window.WvSitemapManager.h,t=function(){function e(){this.area=null,this.submitResponse={message:"",errors:[]},this.modalArea=null}return e.prototype.componentWillLoad=function(){var e="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(e)){var a=document.createElement("div");a.className="modal-backdrop show",a.id=e,document.body.appendChild(a),this.modalArea=Object.assign({},this.area),delete this.modalArea.nodes}},e.prototype.componentDidUnload=function(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()},e.prototype.closeModal=function(){this.wvSitemapManagerAreaModalCloseEvent.emit()},e.prototype.handleSubmit=function(e){e.preventDefault(),this.wvSitemapManagerAreaSubmittedEvent.emit(this.modalArea)},e.prototype.handleChange=function(e){var a=e.target.getAttribute("name");this.modalArea[a]=e.target.value},e.prototype.handleCheckboxChange=function(e){var a=e.target.getAttribute("name");this.modalArea[a]=e.target.checked},e.prototype.render=function(){var e=this,t="Manage area";return this.area||(t="Create area"),a("div",{class:"modal d-block"},a("div",{class:"modal-dialog modal-lg"},a("div",{class:"modal-content"},a("form",{onSubmit:function(a){return e.handleSubmit(a)}},a("div",{class:"modal-header"},a("h5",{class:"modal-title"},t)),a("div",{class:"modal-body"},a("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Name"),a("input",{class:"form-control",name:"name",value:this.modalArea.name,onInput:function(a){return e.handleChange(a)}}))),a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Label"),a("input",{class:"form-control",name:"label",value:this.modalArea.label,onInput:function(a){return e.handleChange(a)}})))),a("div",{class:"row"},a("div",{class:"col col-sm-12"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Description"),a("textarea",{class:"form-control",style:{height:"60px"},name:"description",onInput:function(a){return e.handleChange(a)}},this.modalArea.description)))),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Weight"),a("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalArea.weight,onInput:function(a){return e.handleChange(a)}}))),a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Group names"),a("div",{class:"form-control-plaintext"},a("div",{class:"form-check"},a("label",{class:"form-check-label"},a("input",{class:"form-check-input",type:"checkbox",name:"show_group_names",value:"true",checked:this.modalArea.show_group_names,onChange:function(a){return e.handleCheckboxChange(a)}})," group names are visible")))))),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Color"),a("input",{class:"form-control",name:"color",value:this.modalArea.color,onInput:function(a){return e.handleChange(a)}}))),a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Icon Class"),a("input",{class:"form-control",name:"icon_class",value:this.modalArea.icon_class,onInput:function(a){return e.handleChange(a)}})))),a("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),a("div",{class:"modal-footer"},a("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.area?"":"d-none")},a("span",{class:"ti-plus"})," Create area"),a("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.area?"":"d-none")},a("span",{class:"ti-save"})," Save area"),a("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:function(){return e.closeModal()}},"Close"))))))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-area-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{area:{type:"Any",attr:"area"},modalArea:{state:!0},submitResponse:{type:"Any",attr:"submit-response"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerAreaModalCloseEvent",method:"wvSitemapManagerAreaModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaSubmittedEvent",method:"wvSitemapManagerAreaSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),n=function(){function e(){this.sitemapObj=null,this.nodePageDict=null,this.isAreaModalVisible=!1,this.managedArea=null,this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0},this.nodeAuxData=null}return e.prototype.componentWillLoad=function(){if(this.initData){var e=JSON.parse(this.initData);this.sitemapObj=e.sitemap,this.nodePageDict=e.node_page_dict}},e.prototype.createArea=function(){this.isAreaModalVisible=!0,this.managedArea=null},e.prototype.areaManageEventHandler=function(e){this.isAreaModalVisible=!0,this.managedArea=Object.assign({},e.detail)},e.prototype.areaModalClose=function(){this.isAreaModalVisible=!1,this.managedArea=null,this.apiResponse={message:"",errors:[],success:!0}},e.prototype.areaSubmittedEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var a=e.detail,t=this.apiRoot+"sitemap/area";null!=a&&a.id&&(t+="/"+a.id),t+="?appId="+this.appId;var n=this;fetch(t,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}),body:JSON.stringify(a)}).then(function(e){e.json().then(function(t){var o=t;if(200!==e.status||null==o||!o.success)return n.apiResponse=Object.assign({},o),void(n.managedArea=Object.assign({},a));n.sitemapObj=Object.assign({},o.object.sitemap),n.nodePageDict=Object.assign({},o.object.node_page_dict),n.areaModalClose()})}).catch(function(e){n.apiResponse=Object.assign({},{success:!1,message:e}),n.managedArea=Object.assign({},a)})},e.prototype.areaDeleteEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var a=this;fetch(this.apiRoot+"sitemap/area/"+e.detail+"/delete?appId="+this.appId,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(e){e.json().then(function(t){var n=t;200===e.status&&null!=n&&n.success?(a.sitemapObj=Object.assign({},n.object.sitemap),a.nodePageDict=Object.assign({},n.object.node_page_dict),a.areaModalClose()):alert(n.message)})}).catch(function(e){alert(e.message)})},e.prototype.nodeManageEventHandler=function(e){this.isNodeModalVisible=!0,this.managedNodeObj=Object.assign({},e.detail)},e.prototype.nodeModalCloseEventHandler=function(){this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0}},e.prototype.nodeSubmittedEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var a=e.detail.node,t=this.apiRoot+"sitemap/node";null!=a&&null!=a.id&&(t+="/"+a.id),t+="?appId="+this.appId+"&areaId="+e.detail.areaId;var n=this;fetch(t,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}),body:JSON.stringify(a)}).then(function(a){a.json().then(function(t){var o=t;if(200!==a.status||null==o||!o.success)return n.apiResponse=Object.assign({},o),void(n.managedNodeObj=Object.assign({},e.detail));n.sitemapObj=Object.assign({},o.object.sitemap),n.nodePageDict=Object.assign({},o.object.node_page_dict),n.nodeModalCloseEventHandler(),n.nodeAuxDataUpdateEventHandler(null)})}).catch(function(a){n.apiResponse=Object.assign({},{success:!1,message:a}),n.managedNodeObj=Object.assign({},e.detail)})},e.prototype.nodeDeleteEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var a=this;fetch(this.apiRoot+"sitemap/node/"+e.detail+"/delete?appId="+this.appId,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(e){e.json().then(function(t){var n=t;200===e.status&&null!=n&&n.success?(a.sitemapObj=Object.assign({},n.object.sitemap),a.nodePageDict=Object.assign({},n.object.node_page_dict),a.nodeModalCloseEventHandler()):alert(n.message)})}).catch(function(e){alert(e.message)})},e.prototype.nodeAuxDataUpdateEventHandler=function(e){null!=e?(this.nodeAuxData=Object.assign({},{allEntities:e.detail.allEntities,nodeTypes:e.detail.nodeTypes,allPages:e.detail.allPages,nodePageDict:e.detail.nodePageDict}),this.managedNodeObj=Object.assign({},e.detail.selectedNodeObj)):(this.nodeAuxData=null,this.managedNodeObj=null)},e.prototype.render=function(){var e=this;return a("div",{id:"sitemap-manager"},a("div",{class:"btn-group btn-group-sm mb-2"},a("button",{type:"button",class:"btn btn-white",onClick:function(){return e.createArea()}},a("span",{class:"fa fa-plus go-green"})," add area")),this.sitemapObj.areas.map(function(e){return a("wv-sitemap-manager-area",{area:e})}),this.isAreaModalVisible?a("wv-sitemap-area-modal",{submitResponse:this.apiResponse,area:this.managedArea}):null,this.isNodeModalVisible?a("wv-sitemap-node-modal",{nodePageDict:this.nodePageDict,nodeAuxData:this.nodeAuxData,appId:this.appId,submitResponse:this.apiResponse,nodeObj:this.managedNodeObj,apiRoot:this.apiRoot}):null)},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-manager"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apiResponse:{state:!0},apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},initData:{type:String,attr:"init-data"},isAreaModalVisible:{state:!0},isNodeModalVisible:{state:!0},managedArea:{state:!0},managedNodeObj:{state:!0},nodeAuxData:{state:!0},nodePageDict:{state:!0},sitemapObj:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"wvSitemapManagerAreaManageEvent",method:"areaManageEventHandler"},{name:"wvSitemapManagerAreaModalCloseEvent",method:"areaModalClose"},{name:"wvSitemapManagerAreaSubmittedEvent",method:"areaSubmittedEventHandler"},{name:"wvSitemapManagerAreaDeleteEvent",method:"areaDeleteEventHandler"},{name:"wvSitemapManagerNodeManageEvent",method:"nodeManageEventHandler"},{name:"wvSitemapManagerNodeModalCloseEvent",method:"nodeModalCloseEventHandler"},{name:"wvSitemapManagerNodeSubmittedEvent",method:"nodeSubmittedEventHandler"},{name:"wvSitemapManagerNodeDeleteEvent",method:"nodeDeleteEventHandler"},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"nodeAuxDataUpdateEventHandler"}]},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return e.prototype.manageArea=function(){this.wvSitemapManagerAreaManageEvent.emit(this.area)},e.prototype.deleteArea=function(e){confirm("Are you sure?")?this.wvSitemapManagerAreaDeleteEvent.emit(this.area.id):e.preventDefault()},e.prototype.createNode=function(){this.wvSitemapManagerNodeManageEvent.emit({node:null,areaId:this.area.id})},e.prototype.manageNode=function(e){this.wvSitemapManagerNodeManageEvent.emit({node:e,areaId:this.area.id})},e.prototype.deleteNode=function(e,a){confirm("Are you sure?")?this.wvSitemapManagerNodeDeleteEvent.emit(a.id):e.preventDefault()},e.prototype.render=function(){var e=this,t=this,n="#999";this.area.color&&(n=this.area.color);var o="ti-help";return this.area.icon_class&&(o=this.area.icon_class),a("div",{class:"sitemap-area mb-3"},a("div",{class:"area-header"},a("span",{class:"icon "+o,style:{backgroundColor:n}}),a("div",{class:"label"},"(",this.area.weight,") ",this.area.label),a("div",{class:"btn-group btn-group-sm action"},a("button",{type:"button",class:"btn btn-link",onClick:function(a){return e.deleteArea(a)}},a("span",{class:"ti-trash go-red"})," delete"),a("button",{type:"button",class:"btn btn-link",onClick:function(){return e.manageArea()}},a("span",{class:"ti-settings"})," config"))),a("div",{class:"area-body "+(this.area.nodes.length>0?"":"d-none")},a("button",{type:"button",class:"btn btn-white btn-sm",onClick:function(){return e.createNode()}},a("span",{class:"fa fa-plus"})," add area node"),a("table",{class:"table table-bordered table-sm mb-0 sitemap-nodes mt-3"},a("thead",null,a("tr",null,a("th",{style:{width:"40px"}},"w."),a("th",{style:{width:"40px"}},"icon"),a("th",{style:{width:"200px"}},"name"),a("th",{style:{width:"auto"}},"label"),a("th",{style:{width:"200px"}},"group"),a("th",{style:{width:"100px"}},"type"),a("th",{style:{width:"160px"}},"action"))),a("tbody",null,this.area.nodes.map(function(e){var n="";switch(e.type){case 1:n="entity list";break;case 2:n="application";break;case 3:n="url";break;case 4:n="site"}return a("tr",null,a("td",null,e.weight),a("td",null,a("span",{class:"icon "+e.icon_class})),a("td",null,e.name),a("td",null,e.label),a("td",null,e.group_name),a("td",null,n),a("td",null,a("div",{class:"btn-group btn-group-sm action"},a("button",{type:"button",class:"btn btn-link",onClick:function(a){return t.deleteNode(a,e)}},a("span",{class:"ti-trash go-red"})," delete"),a("button",{type:"button",class:"btn btn-link",onClick:function(){return t.manageNode(e)}},a("span",{class:"ti-settings"})," config"))))})))),a("div",{class:"area-body "+(this.area.nodes.length>0?"d-none":"")},a("button",{type:"button",class:"btn btn-white btn-sm",onClick:function(){return e.createNode()}},a("span",{class:"fa fa-plus"})," add area node"),a("div",{class:"alert alert-info mt-3"},"No nodes in this area.")))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-manager-area"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{area:{type:"Any",attr:"area"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerAreaManageEvent",method:"wvSitemapManagerAreaManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaDeleteEvent",method:"wvSitemapManagerAreaDeleteEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeManageEvent",method:"wvSitemapManagerNodeManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeDeleteEvent",method:"wvSitemapManagerNodeDeleteEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.nodeObj={areaId:null,node:null},this.nodePageDict=null,this.submitResponse={message:"",errors:[],success:!0},this.modalNodeObj={areaId:null,node:{},node_pages:[]}}return e.prototype.componentWillLoad=function(){var e=this,a="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(a)){var t=document.createElement("div");t.className="modal-backdrop show",t.id=a,document.body.appendChild(t)}null==this.nodeAuxData&&this.LoadData(),this.nodeObj.node?(this.modalNodeObj.node=Object.assign({},this.nodeObj.node),this.modalNodeObj.node.pages||(this.modalNodeObj.node.pages=[])):this.modalNodeObj.node={pages:[]},this.modalNodeObj.areaId=this.nodeObj.areaId,this.nodeObj.node&&this.nodePageDict&&this.nodePageDict[this.nodeObj.node.id]&&(this.modalNodeObj.node_pages=this.nodePageDict[this.nodeObj.node.id],this.modalNodeObj.node_pages.forEach(function(a){e.modalNodeObj.node.pages.push(a.value)}))},e.prototype.componentDidUnload=function(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()},e.prototype.LoadData=function(){var e=this;fetch(this.apiRoot+"sitemap/node/get-aux-info?appId="+this.appId,{method:"GET",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(a){a.json().then(function(t){var n=t;if(200===a.status&&null!=n&&n.success){var o={};o.allEntities=n.object.all_entities,o.nodeTypes=n.object.node_types,o.allPages=n.object.all_pages,o.nodePageDict=n.object.node_page_dict,o.selectedNodeObj=e.nodeObj,e.wvSitemapManagerNodeAuxDataUpdateEvent.emit(o)}else null!=n?alert(n.message):alert("Error: "+a.status+" - "+a.statusText)})}).catch(function(e){alert(e.message)})},e.prototype.closeModal=function(){this.wvSitemapManagerNodeModalCloseEvent.emit()},e.prototype.handleSubmit=function(e){e.preventDefault(),this.wvSitemapManagerNodeSubmittedEvent.emit(this.modalNodeObj)},e.prototype.handleChange=function(e){var a=e.target.getAttribute("name");this.modalNodeObj.node[a]=e.target.value},e.prototype.handleCheckboxChange=function(e){var a=e.target.getAttribute("name");this.modalNodeObj.node[a]=e.target.checked},e.prototype.handleSelectChange=function(e){var a=e.target.getAttribute("name"),t=Object.assign({},this.modalNodeObj);t.node[a]=[];for(var n=0;n<e.target.options.length;n++){var o=e.target.options[n];o.selected&&t.node[a].push(String(o.value))}t.node[a]&&0!==t.node[a].length?1==t.node[a].length&&"pages"!=a&&(t.node[a]=t.node[a][0]):t.node[a]=null,this.modalNodeObj=t},e.prototype.render=function(){var e=this,t="Manage node";if(this.nodeObj.node||(t="Create node"),null==this.nodeAuxData)return a("div",{class:"modal d-block"},a("div",{class:"modal-dialog modal-lg"},a("div",{class:"modal-content"},a("div",{class:"modal-header"},a("h5",{class:"modal-title"},t)),a("div",{class:"modal-body",style:{minHeight:"300px"}},a("i",{class:"fas fa-spinner fa-spin go-blue"})," Loading data ..."))));this.modalNodeObj.node.type||(this.modalNodeObj.node.type=String(this.nodeAuxData.nodeTypes[0].value)),this.modalNodeObj.node.entity_id||(this.modalNodeObj.node.entity_id=String(this.nodeAuxData.allEntities[0].value));var n=[],o=[];return this.modalNodeObj.node_pages.forEach(function(e){n.push(e),o.push(e.value)}),this.nodeAuxData.allPages.forEach(function(a){(0==o.length||o.length>0&&-1===o.indexOf(a.page_id))&&(a.node_id&&a.node_id!==e.modalNodeObj.node.id||n.push({value:a.page_id,label:a.page_name}))}),a("div",{class:"modal d-block"},a("div",{class:"modal-dialog modal-lg"},a("div",{class:"modal-content"},a("form",{onSubmit:function(a){return e.handleSubmit(a)}},a("div",{class:"modal-header"},a("h5",{class:"modal-title"},t)),a("div",{class:"modal-body"},a("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Name"),a("input",{class:"form-control",name:"name",value:this.modalNodeObj.node.name,onInput:function(a){return e.handleChange(a)}}))),a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Label"),a("input",{class:"form-control",name:"label",value:this.modalNodeObj.node.label,onInput:function(a){return e.handleChange(a)}})))),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Icon Class"),a("input",{class:"form-control",name:"icon_class",value:this.modalNodeObj.node.icon_class,onInput:function(a){return e.handleChange(a)}}))),a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Weight"),a("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalNodeObj.node.weight,onInput:function(a){return e.handleChange(a)}})))),a("div",{class:"row"},a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Type"),a("select",{class:"form-control",name:"type",onChange:function(a){return e.handleSelectChange(a)}},this.nodeAuxData.nodeTypes.map(function(e){return a("option",{value:e.value,selected:e.value===String(this.modalNodeObj.node.type)},e.label)}.bind(this))))),"1"===String(this.modalNodeObj.node.type)?a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Entity"),a("select",{class:"form-control",name:"entity_id",onChange:function(a){return e.handleSelectChange(a)}},this.nodeAuxData.allEntities.map(function(e){return a("option",{value:e.value,selected:e.value===String(this.modalNodeObj.node.entity_id)},e.label)}.bind(this))))):null,"2"===String(this.modalNodeObj.node.type)?a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"App Pages without nodes"),a("select",{class:"form-control",multiple:!0,name:"pages",onChange:function(a){return e.handleSelectChange(a)}},n.map(function(e){var t=!1;return this.modalNodeObj.node.pages&&this.modalNodeObj.node.pages.length>0&&this.modalNodeObj.node.pages.indexOf(e.value)>-1&&(t=!0),a("option",{value:e.value,selected:t},e.label)}.bind(this))))):null,"3"===String(this.modalNodeObj.node.type)?a("div",{class:"col col-sm-6"},a("div",{class:"form-group erp-field"},a("label",{class:"control-label"},"Url"),a("input",{class:"form-control",name:"url",value:this.modalNodeObj.node.url,onInput:function(a){return e.handleChange(a)}}))):null),a("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),null==this.nodeAuxData?null:a("div",{class:"modal-footer"},a("div",null,a("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.modalNodeObj.node?"":"d-none")},a("span",{class:"ti-plus"})," Create node"),a("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.modalNodeObj.node?"":"d-none")},a("span",{class:"ti-save"})," Save node"),a("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:function(){return e.closeModal()}},"Close")))))))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-node-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},modalNodeObj:{state:!0},nodeAuxData:{type:"Any",attr:"node-aux-data"},nodeObj:{type:"Any",attr:"node-obj"},nodePageDict:{type:"Any",attr:"node-page-dict"},submitResponse:{type:"Any",attr:"submit-response"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerNodeModalCloseEvent",method:"wvSitemapManagerNodeModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeSubmittedEvent",method:"wvSitemapManagerNodeSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"wvSitemapManagerNodeAuxDataUpdateEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();e.WvSitemapAreaModal=t,e.WvSitemapManager=n,e.WvSitemapManagerArea=o,e.WvSitemapNodeModal=s,Object.defineProperty(e,"__esModule",{value:!0})});