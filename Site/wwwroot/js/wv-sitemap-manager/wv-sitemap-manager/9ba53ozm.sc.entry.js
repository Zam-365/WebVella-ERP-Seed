const e=window.WvSitemapManager.h;class a{constructor(){this.area=null,this.submitResponse={message:"",errors:[]},this.modalArea=null}componentWillLoad(){var e="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(e)){var a=document.createElement("div");a.className="modal-backdrop show",a.id=e,document.body.appendChild(a),this.modalArea=Object.assign({},this.area),delete this.modalArea.nodes}}componentDidUnload(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()}closeModal(){this.wvSitemapManagerAreaModalCloseEvent.emit()}handleSubmit(e){e.preventDefault(),this.wvSitemapManagerAreaSubmittedEvent.emit(this.modalArea)}handleChange(e){let a=e.target.getAttribute("name");this.modalArea[a]=e.target.value}handleCheckboxChange(e){let a=e.target.getAttribute("name");this.modalArea[a]=e.target.checked}render(){let a="Manage area";return this.area||(a="Create area"),e("div",{class:"modal d-block"},e("div",{class:"modal-dialog modal-lg"},e("div",{class:"modal-content"},e("form",{onSubmit:e=>this.handleSubmit(e)},e("div",{class:"modal-header"},e("h5",{class:"modal-title"},a)),e("div",{class:"modal-body"},e("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Name"),e("input",{class:"form-control",name:"name",value:this.modalArea.name,onInput:e=>this.handleChange(e)}))),e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Label"),e("input",{class:"form-control",name:"label",value:this.modalArea.label,onInput:e=>this.handleChange(e)})))),e("div",{class:"row"},e("div",{class:"col col-sm-12"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Description"),e("textarea",{class:"form-control",style:{height:"60px"},name:"description",onInput:e=>this.handleChange(e)},this.modalArea.description)))),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Weight"),e("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalArea.weight,onInput:e=>this.handleChange(e)}))),e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Group names"),e("div",{class:"form-control-plaintext"},e("div",{class:"form-check"},e("label",{class:"form-check-label"},e("input",{class:"form-check-input",type:"checkbox",name:"show_group_names",value:"true",checked:this.modalArea.show_group_names,onChange:e=>this.handleCheckboxChange(e)})," group names are visible")))))),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Color"),e("input",{class:"form-control",name:"color",value:this.modalArea.color,onInput:e=>this.handleChange(e)}))),e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Icon Class"),e("input",{class:"form-control",name:"icon_class",value:this.modalArea.icon_class,onInput:e=>this.handleChange(e)})))),e("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),e("div",{class:"modal-footer"},e("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.area?"":"d-none")},e("span",{class:"ti-plus"})," Create area"),e("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.area?"":"d-none")},e("span",{class:"ti-save"})," Save area"),e("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:()=>this.closeModal()},"Close"))))))}static get is(){return"wv-sitemap-area-modal"}static get properties(){return{area:{type:"Any",attr:"area"},modalArea:{state:!0},submitResponse:{type:"Any",attr:"submit-response"}}}static get events(){return[{name:"wvSitemapManagerAreaModalCloseEvent",method:"wvSitemapManagerAreaModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaSubmittedEvent",method:"wvSitemapManagerAreaSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0}]}}class t{constructor(){this.sitemapObj=null,this.nodePageDict=null,this.isAreaModalVisible=!1,this.managedArea=null,this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0},this.nodeAuxData=null}componentWillLoad(){if(this.initData){var e=JSON.parse(this.initData);this.sitemapObj=e.sitemap,this.nodePageDict=e.node_page_dict}}createArea(){this.isAreaModalVisible=!0,this.managedArea=null}areaManageEventHandler(e){this.isAreaModalVisible=!0,this.managedArea=Object.assign({},e.detail)}areaModalClose(){this.isAreaModalVisible=!1,this.managedArea=null,this.apiResponse={message:"",errors:[],success:!0}}areaSubmittedEventHandler(e){this.apiResponse={message:"",errors:[],success:!0};let a=e.detail,t=this.apiRoot+"sitemap/area";null!=a&&a.id&&(t+="/"+a.id),t+="?appId="+this.appId;let s=this;fetch(t,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}),body:JSON.stringify(a)}).then(function(e){e.json().then(function(t){let n=t;if(200!==e.status||null==n||!n.success)return s.apiResponse=Object.assign({},n),void(s.managedArea=Object.assign({},a));s.sitemapObj=Object.assign({},n.object.sitemap),s.nodePageDict=Object.assign({},n.object.node_page_dict),s.areaModalClose()})}).catch(function(e){s.apiResponse=Object.assign({},{success:!1,message:e}),s.managedArea=Object.assign({},a)})}areaDeleteEventHandler(e){this.apiResponse={message:"",errors:[],success:!0};let a=this;fetch(this.apiRoot+"sitemap/area/"+e.detail+"/delete?appId="+this.appId,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(e){e.json().then(function(t){let s=t;200===e.status&&null!=s&&s.success?(a.sitemapObj=Object.assign({},s.object.sitemap),a.nodePageDict=Object.assign({},s.object.node_page_dict),a.areaModalClose()):alert(s.message)})}).catch(function(e){alert(e.message)})}nodeManageEventHandler(e){this.isNodeModalVisible=!0,this.managedNodeObj=Object.assign({},e.detail)}nodeModalCloseEventHandler(){this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0}}nodeSubmittedEventHandler(e){this.apiResponse={message:"",errors:[],success:!0};let a=e.detail.node,t=this.apiRoot+"sitemap/node";null!=a&&null!=a.id&&(t+="/"+a.id),t+="?appId="+this.appId+"&areaId="+e.detail.areaId;let s=this;fetch(t,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}),body:JSON.stringify(a)}).then(function(a){a.json().then(function(t){let n=t;if(200!==a.status||null==n||!n.success)return s.apiResponse=Object.assign({},n),void(s.managedNodeObj=Object.assign({},e.detail));s.sitemapObj=Object.assign({},n.object.sitemap),s.nodePageDict=Object.assign({},n.object.node_page_dict),s.nodeModalCloseEventHandler(),s.nodeAuxDataUpdateEventHandler(null)})}).catch(function(a){s.apiResponse=Object.assign({},{success:!1,message:a}),s.managedNodeObj=Object.assign({},e.detail)})}nodeDeleteEventHandler(e){this.apiResponse={message:"",errors:[],success:!0};let a=this;fetch(this.apiRoot+"sitemap/node/"+e.detail+"/delete?appId="+this.appId,{method:"POST",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(e){e.json().then(function(t){let s=t;200===e.status&&null!=s&&s.success?(a.sitemapObj=Object.assign({},s.object.sitemap),a.nodePageDict=Object.assign({},s.object.node_page_dict),a.nodeModalCloseEventHandler()):alert(s.message)})}).catch(function(e){alert(e.message)})}nodeAuxDataUpdateEventHandler(e){null!=e?(this.nodeAuxData=Object.assign({},{allEntities:e.detail.allEntities,nodeTypes:e.detail.nodeTypes,allPages:e.detail.allPages,nodePageDict:e.detail.nodePageDict}),this.managedNodeObj=Object.assign({},e.detail.selectedNodeObj)):(this.nodeAuxData=null,this.managedNodeObj=null)}render(){return e("div",{id:"sitemap-manager"},e("div",{class:"btn-group btn-group-sm mb-2"},e("button",{type:"button",class:"btn btn-white",onClick:()=>this.createArea()},e("span",{class:"fa fa-plus go-green"})," add area")),this.sitemapObj.areas.map(a=>e("wv-sitemap-manager-area",{area:a})),this.isAreaModalVisible?e("wv-sitemap-area-modal",{submitResponse:this.apiResponse,area:this.managedArea}):null,this.isNodeModalVisible?e("wv-sitemap-node-modal",{nodePageDict:this.nodePageDict,nodeAuxData:this.nodeAuxData,appId:this.appId,submitResponse:this.apiResponse,nodeObj:this.managedNodeObj,apiRoot:this.apiRoot}):null)}static get is(){return"wv-sitemap-manager"}static get properties(){return{apiResponse:{state:!0},apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},initData:{type:String,attr:"init-data"},isAreaModalVisible:{state:!0},isNodeModalVisible:{state:!0},managedArea:{state:!0},managedNodeObj:{state:!0},nodeAuxData:{state:!0},nodePageDict:{state:!0},sitemapObj:{state:!0}}}static get listeners(){return[{name:"wvSitemapManagerAreaManageEvent",method:"areaManageEventHandler"},{name:"wvSitemapManagerAreaModalCloseEvent",method:"areaModalClose"},{name:"wvSitemapManagerAreaSubmittedEvent",method:"areaSubmittedEventHandler"},{name:"wvSitemapManagerAreaDeleteEvent",method:"areaDeleteEventHandler"},{name:"wvSitemapManagerNodeManageEvent",method:"nodeManageEventHandler"},{name:"wvSitemapManagerNodeModalCloseEvent",method:"nodeModalCloseEventHandler"},{name:"wvSitemapManagerNodeSubmittedEvent",method:"nodeSubmittedEventHandler"},{name:"wvSitemapManagerNodeDeleteEvent",method:"nodeDeleteEventHandler"},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"nodeAuxDataUpdateEventHandler"}]}}class s{manageArea(){this.wvSitemapManagerAreaManageEvent.emit(this.area)}deleteArea(e){confirm("Are you sure?")?this.wvSitemapManagerAreaDeleteEvent.emit(this.area.id):e.preventDefault()}createNode(){this.wvSitemapManagerNodeManageEvent.emit({node:null,areaId:this.area.id})}manageNode(e){this.wvSitemapManagerNodeManageEvent.emit({node:e,areaId:this.area.id})}deleteNode(e,a){confirm("Are you sure?")?this.wvSitemapManagerNodeDeleteEvent.emit(a.id):e.preventDefault()}render(){var a=this,t="#999";this.area.color&&(t=this.area.color);var s="ti-help";return this.area.icon_class&&(s=this.area.icon_class),e("div",{class:"sitemap-area mb-3"},e("div",{class:"area-header"},e("span",{class:"icon "+s,style:{backgroundColor:t}}),e("div",{class:"label"},"(",this.area.weight,") ",this.area.label),e("div",{class:"btn-group btn-group-sm action"},e("button",{type:"button",class:"btn btn-link",onClick:e=>this.deleteArea(e)},e("span",{class:"ti-trash go-red"})," delete"),e("button",{type:"button",class:"btn btn-link",onClick:()=>this.manageArea()},e("span",{class:"ti-settings"})," config"))),e("div",{class:"area-body "+(this.area.nodes.length>0?"":"d-none")},e("button",{type:"button",class:"btn btn-white btn-sm",onClick:()=>this.createNode()},e("span",{class:"fa fa-plus"})," add area node"),e("table",{class:"table table-bordered table-sm mb-0 sitemap-nodes mt-3"},e("thead",null,e("tr",null,e("th",{style:{width:"40px"}},"w."),e("th",{style:{width:"40px"}},"icon"),e("th",{style:{width:"200px"}},"name"),e("th",{style:{width:"auto"}},"label"),e("th",{style:{width:"200px"}},"group"),e("th",{style:{width:"100px"}},"type"),e("th",{style:{width:"160px"}},"action"))),e("tbody",null,this.area.nodes.map(function(t){var s="";switch(t.type){case 1:s="entity list";break;case 2:s="application";break;case 3:s="url";break;case 4:s="site"}return e("tr",null,e("td",null,t.weight),e("td",null,e("span",{class:"icon "+t.icon_class})),e("td",null,t.name),e("td",null,t.label),e("td",null,t.group_name),e("td",null,s),e("td",null,e("div",{class:"btn-group btn-group-sm action"},e("button",{type:"button",class:"btn btn-link",onClick:e=>a.deleteNode(e,t)},e("span",{class:"ti-trash go-red"})," delete"),e("button",{type:"button",class:"btn btn-link",onClick:()=>a.manageNode(t)},e("span",{class:"ti-settings"})," config"))))})))),e("div",{class:"area-body "+(this.area.nodes.length>0?"d-none":"")},e("button",{type:"button",class:"btn btn-white btn-sm",onClick:()=>this.createNode()},e("span",{class:"fa fa-plus"})," add area node"),e("div",{class:"alert alert-info mt-3"},"No nodes in this area.")))}static get is(){return"wv-sitemap-manager-area"}static get properties(){return{area:{type:"Any",attr:"area"}}}static get events(){return[{name:"wvSitemapManagerAreaManageEvent",method:"wvSitemapManagerAreaManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaDeleteEvent",method:"wvSitemapManagerAreaDeleteEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeManageEvent",method:"wvSitemapManagerNodeManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeDeleteEvent",method:"wvSitemapManagerNodeDeleteEvent",bubbles:!0,cancelable:!0,composed:!0}]}}class n{constructor(){this.nodeObj={areaId:null,node:null},this.nodePageDict=null,this.submitResponse={message:"",errors:[],success:!0},this.modalNodeObj={areaId:null,node:{},node_pages:[]}}componentWillLoad(){var e="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(e)){var a=document.createElement("div");a.className="modal-backdrop show",a.id=e,document.body.appendChild(a)}null==this.nodeAuxData&&this.LoadData(),this.nodeObj.node?(this.modalNodeObj.node=Object.assign({},this.nodeObj.node),this.modalNodeObj.node.pages||(this.modalNodeObj.node.pages=[])):this.modalNodeObj.node={pages:[]},this.modalNodeObj.areaId=this.nodeObj.areaId,this.nodeObj.node&&this.nodePageDict&&this.nodePageDict[this.nodeObj.node.id]&&(this.modalNodeObj.node_pages=this.nodePageDict[this.nodeObj.node.id],this.modalNodeObj.node_pages.forEach(e=>{this.modalNodeObj.node.pages.push(e.value)}))}componentDidUnload(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()}LoadData(){let e=this;fetch(this.apiRoot+"sitemap/node/get-aux-info?appId="+this.appId,{method:"GET",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(a){a.json().then(function(t){let s=t;if(200===a.status&&null!=s&&s.success){var n={};n.allEntities=s.object.all_entities,n.nodeTypes=s.object.node_types,n.allPages=s.object.all_pages,n.nodePageDict=s.object.node_page_dict,n.selectedNodeObj=e.nodeObj,e.wvSitemapManagerNodeAuxDataUpdateEvent.emit(n)}else null!=s?alert(s.message):alert("Error: "+a.status+" - "+a.statusText)})}).catch(function(e){alert(e.message)})}closeModal(){this.wvSitemapManagerNodeModalCloseEvent.emit()}handleSubmit(e){e.preventDefault(),this.wvSitemapManagerNodeSubmittedEvent.emit(this.modalNodeObj)}handleChange(e){let a=e.target.getAttribute("name");this.modalNodeObj.node[a]=e.target.value}handleCheckboxChange(e){let a=e.target.getAttribute("name");this.modalNodeObj.node[a]=e.target.checked}handleSelectChange(e){let a=e.target.getAttribute("name"),t=Object.assign({},this.modalNodeObj);t.node[a]=[];for(var s=0;s<e.target.options.length;s++){var n=e.target.options[s];n.selected&&t.node[a].push(String(n.value))}t.node[a]&&0!==t.node[a].length?1==t.node[a].length&&"pages"!=a&&(t.node[a]=t.node[a][0]):t.node[a]=null,this.modalNodeObj=t}render(){let a="Manage node";if(this.nodeObj.node||(a="Create node"),null==this.nodeAuxData)return e("div",{class:"modal d-block"},e("div",{class:"modal-dialog modal-lg"},e("div",{class:"modal-content"},e("div",{class:"modal-header"},e("h5",{class:"modal-title"},a)),e("div",{class:"modal-body",style:{minHeight:"300px"}},e("i",{class:"fas fa-spinner fa-spin go-blue"})," Loading data ..."))));this.modalNodeObj.node.type||(this.modalNodeObj.node.type=String(this.nodeAuxData.nodeTypes[0].value)),this.modalNodeObj.node.entity_id||(this.modalNodeObj.node.entity_id=String(this.nodeAuxData.allEntities[0].value));var t=[],s=[];return this.modalNodeObj.node_pages.forEach(e=>{t.push(e),s.push(e.value)}),this.nodeAuxData.allPages.forEach(e=>{(0==s.length||s.length>0&&-1===s.indexOf(e.page_id))&&(e.node_id&&e.node_id!==this.modalNodeObj.node.id||t.push({value:e.page_id,label:e.page_name}))}),e("div",{class:"modal d-block"},e("div",{class:"modal-dialog modal-lg"},e("div",{class:"modal-content"},e("form",{onSubmit:e=>this.handleSubmit(e)},e("div",{class:"modal-header"},e("h5",{class:"modal-title"},a)),e("div",{class:"modal-body"},e("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Name"),e("input",{class:"form-control",name:"name",value:this.modalNodeObj.node.name,onInput:e=>this.handleChange(e)}))),e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Label"),e("input",{class:"form-control",name:"label",value:this.modalNodeObj.node.label,onInput:e=>this.handleChange(e)})))),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Icon Class"),e("input",{class:"form-control",name:"icon_class",value:this.modalNodeObj.node.icon_class,onInput:e=>this.handleChange(e)}))),e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Weight"),e("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalNodeObj.node.weight,onInput:e=>this.handleChange(e)})))),e("div",{class:"row"},e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Type"),e("select",{class:"form-control",name:"type",onChange:e=>this.handleSelectChange(e)},this.nodeAuxData.nodeTypes.map(function(a){return e("option",{value:a.value,selected:a.value===String(this.modalNodeObj.node.type)},a.label)}.bind(this))))),"1"===String(this.modalNodeObj.node.type)?e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Entity"),e("select",{class:"form-control",name:"entity_id",onChange:e=>this.handleSelectChange(e)},this.nodeAuxData.allEntities.map(function(a){return e("option",{value:a.value,selected:a.value===String(this.modalNodeObj.node.entity_id)},a.label)}.bind(this))))):null,"2"===String(this.modalNodeObj.node.type)?e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"App Pages without nodes"),e("select",{class:"form-control",multiple:!0,name:"pages",onChange:e=>this.handleSelectChange(e)},t.map(function(a){let t=!1;return this.modalNodeObj.node.pages&&this.modalNodeObj.node.pages.length>0&&this.modalNodeObj.node.pages.indexOf(a.value)>-1&&(t=!0),e("option",{value:a.value,selected:t},a.label)}.bind(this))))):null,"3"===String(this.modalNodeObj.node.type)?e("div",{class:"col col-sm-6"},e("div",{class:"form-group erp-field"},e("label",{class:"control-label"},"Url"),e("input",{class:"form-control",name:"url",value:this.modalNodeObj.node.url,onInput:e=>this.handleChange(e)}))):null),e("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),null==this.nodeAuxData?null:e("div",{class:"modal-footer"},e("div",null,e("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.modalNodeObj.node?"":"d-none")},e("span",{class:"ti-plus"})," Create node"),e("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.modalNodeObj.node?"":"d-none")},e("span",{class:"ti-save"})," Save node"),e("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:()=>this.closeModal()},"Close")))))))}static get is(){return"wv-sitemap-node-modal"}static get properties(){return{apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},modalNodeObj:{state:!0},nodeAuxData:{type:"Any",attr:"node-aux-data"},nodeObj:{type:"Any",attr:"node-obj"},nodePageDict:{type:"Any",attr:"node-page-dict"},submitResponse:{type:"Any",attr:"submit-response"}}}static get events(){return[{name:"wvSitemapManagerNodeModalCloseEvent",method:"wvSitemapManagerNodeModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeSubmittedEvent",method:"wvSitemapManagerNodeSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"wvSitemapManagerNodeAuxDataUpdateEvent",bubbles:!0,cancelable:!0,composed:!0}]}}export{a as WvSitemapAreaModal,t as WvSitemapManager,s as WvSitemapManagerArea,n as WvSitemapNodeModal};