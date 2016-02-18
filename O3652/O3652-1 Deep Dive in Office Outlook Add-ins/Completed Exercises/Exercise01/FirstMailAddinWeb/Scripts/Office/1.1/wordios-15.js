/* Word iOS specific JavaScript API library */
/* Version: 15.0.4420.1017 Build Time: 02/27/2014 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

OSF.OUtil.augmentList(Microsoft.Office.WebExtension.CoercionType,{Html:"html",Ooxml:"ooxml"});OSF.OUtil.augmentList(Microsoft.Office.WebExtension.EventType,{DataNodeDeleted:"nodeDeleted",DataNodeInserted:"nodeInserted",DataNodeReplaced:"nodeReplaced"});var OSF=OSF||{},OSFWebkit;(function(b){var a=function(){var a=false;function b(a){this.data=a;this.safeArrayFlag=this.isSafeArray(a)}b.prototype.dimensions=function(){var a=0;if(this.safeArrayFlag)a=this.data[0][0];else if(this.isArray())a=2;return a};b.prototype.getItem=function(){var b=[],a=null;if(this.safeArrayFlag)b=this.toArray();else b=this.data;a=b;for(var c=0;c<arguments.length;c++)a=a[arguments[c]];return a};b.prototype.lbound=function(){return 0};b.prototype.ubound=function(b){var a=this,c=0;if(a.safeArrayFlag)c=a.data[0][b];else if(a.isArray())if(b==1)return a.data.length;else if(b==2)if(OSF.OUtil.isArray(a.data[0]))return a.data[0].length;else if(a.data[0]!=null)return 1;return c};b.prototype.toArray=function(){var c=this;if(c.isArray()==a)return c.data;for(var e=[],g=c.safeArrayFlag?1:0,f=g;f<c.data.length;f++){var d=c.data[f];if(c.isSafeArray(d))e.push(new b(d));else e.push(d)}return e};b.prototype.isArray=function(){return OSF.OUtil.isArray(this.data)};b.prototype.isSafeArray=function(d){var f=a;if(OSF.OUtil.isArray(d)&&OSF.OUtil.isArray(d[0])){var c=d[0],h=c[0];if(c.length!=h+1)return a;for(var b=1,e=1;e<c.length;e++){var g=c[e];if(isFinite(g)==a)return a;b=b*g}b++;f=b==d.length}return f};return b}();b.WebkitSafeArray=a})(OSFWebkit||(OSFWebkit={}));var OSFWebkit;(function(a){(function(b){var a=null;function g(b,c){a.agaveHostCallback(b,c)}b.agaveHostCallback=g;function d(b,c){a.agaveHostEventCallback(b,c)}b.agaveHostEventCallback=d;function f(){if(a==null)a=new c("OSF.ScriptMessaging.agaveHostCallback","OSF.ScriptMessaging.agaveHostEventCallback");return a}b.GetScriptMessenger=f;var e=function(){function a(c,a,b){this.id=c;this.targetId=a;this.handler=b}return a}(),c=function(){function a(c,d){var b=this;b.callingIndex=0;b.callbackList={};b.eventHandlerList={};b.asyncMethodCallbackFunctionName=c;b.eventCallbackFunctionName=d;b.conversationId=a.getCurrentTimeMS().toString()}a.prototype.invokeMethod=function(b,d,e,c){var a={};this.postWebkitMessage(a,b,d,e,c)};a.prototype.registerEvent=function(f,i,b,a,j,g){var d={eventCallbackFunction:this.eventCallbackFunctionName},h={id:b,targetId:a},c=this.postWebkitMessage(d,f,i,h,g);this.eventHandlerList[c]=new e(b,a,j)};a.prototype.unregisterEvent=function(f,i,e,d,g){var a=this,h={id:e,targetId:d};for(var b in a.eventHandlerList)if(a.eventHandlerList.hasOwnProperty(b)){var c=a.eventHandlerList[b];if(c.id==e&&c.targetId==d)delete a.eventHandlerList[b]}a.invokeMethod(f,i,h,g)};a.prototype.agaveHostCallback=function(b,c){var a=this.callbackList[b];if(a){a(c);delete this.callbackList[b]}};a.prototype.agaveHostEventCallback=function(b,c){var a=this.eventHandlerList[b];a&&a.handler(c)};a.prototype.postWebkitMessage=function(c,g,i,j,h){var b=this,e=b.generateCorrelationId();b.callbackList[e]=h;c.methodId=i;c.params=j;c.callbackId=e;c.callbackFunction=b.asyncMethodCallbackFunctionName;var f=function(){window.webkit.messageHandlers[g].postMessage(JSON.stringify(c))},d=a.getCurrentTimeMS();if(b.lastMessageTimestamp==null||d-b.lastMessageTimestamp>=a.MESSAGE_TIME_DELTA){f();b.lastMessageTimestamp=d}else{b.lastMessageTimestamp+=a.MESSAGE_TIME_DELTA;setTimeout(function(){f()},b.lastMessageTimestamp-d)}return e};a.prototype.generateCorrelationId=function(){++this.callingIndex;return this.conversationId+this.callingIndex};a.getCurrentTimeMS=function(){return (new Date).getTime()};a.MESSAGE_TIME_DELTA=10;return a}();b.WebkitScriptMessaging=c})(a.ScriptMessaging||(a.ScriptMessaging={}));var b=a.ScriptMessaging})(OSFWebkit||(OSFWebkit={}));OSF.ScriptMessaging=OSFWebkit.ScriptMessaging;var OSFWebkit;(function(a){a.MessageHandlerName="Agave";(function(a){var h="APISetVersion",g="SolutionToken",f="ControlIntegrationLevel",e="ActivationMode",d="DocumentUrl",c="BindingCount",b="AppDataLocale",p="APPUILocale",o="AppCapabilities",n="APIVersionSequence",m="RevisionVersion",l="MinorVersion",k="MajorVersion",j="SolutionReferenceId",i="Settings";a[a[i]=0]=i;a[a[j]=1]=j;a[a["AppType"]=2]="AppType";a[a[k]=3]=k;a[a[l]=4]=l;a[a[m]=5]=m;a[a[n]=6]=n;a[a[o]=7]=o;a[a[p]=8]=p;a[a[b]=9]=b;a[a[c]=10]=c;a[a[d]=11]=d;a[a[e]=12]=e;a[a[f]=13]=f;a[a[g]=14]=g;a[a[h]=15]=h})(a.AppContextProperties||(a.AppContextProperties={}));var c=a.AppContextProperties;(function(a){var e="GetContext",d="WriteSettings",c="UnregisterEvent",b="RegisterEvent";a[a["Execute"]=1]="Execute";a[a[b]=2]=b;a[a[c]=3]=c;a[a[d]=4]=d;a[a[e]=5]=e})(a.MethodId||(a.MethodId={}));var d=a.MethodId,b=function(){function b(a){this.hostScriptProxy=a}b.prototype.execute=function(g,f,c){var b=f;if(b==null)b=[];var e={id:g,apiArgs:b},d=function(b){var d=b;if(OSF.OUtil.isArray(b)&&b.length>=2){var e=b[0];d=b[1]}c&&c(new a.WebkitSafeArray(d))};this.hostScriptProxy.invokeMethod(OSF.Webkit.MessageHandlerName,OSF.Webkit.MethodId.Execute,e,d)};b.prototype.registerEvent=function(g,f,c,b){var d=function(b){var d=b,e=0;if(OSF.OUtil.isArray(b)&&b.length>=2){d=b[0];e=b[1]}c&&c(e,new a.WebkitSafeArray(d))},e=function(c){b&&b(new a.WebkitSafeArray(c))};this.hostScriptProxy.registerEvent(OSF.Webkit.MessageHandlerName,OSF.Webkit.MethodId.RegisterEvent,g,f,d,e)};b.prototype.unregisterEvent=function(e,d,c){var b=function(b){c(new a.WebkitSafeArray(b))};this.hostScriptProxy.unregisterEvent(OSF.Webkit.MessageHandlerName,OSF.Webkit.MethodId.UnregisterEvent,e,d,b)};return b}();a.WebkitHostController=b})(OSFWebkit||(OSFWebkit={}));OSF.Webkit=OSFWebkit;OSF.ClientHostController=new OSFWebkit.WebkitHostController(OSF.ScriptMessaging.GetScriptMessenger());OSF.ClientMode={ReadWrite:0,ReadOnly:1};OSF.DDA.RichInitializationReason={1:Microsoft.Office.WebExtension.InitializationReason.Inserted,2:Microsoft.Office.WebExtension.InitializationReason.DocumentOpened};Microsoft.Office.WebExtension.FileType={Text:"text",Compressed:"compressed"};OSF.DDA.File=function(e,c,b){OSF.OUtil.defineEnumerableProperties(this,{size:{value:c},sliceCount:{value:Math.ceil(c/b)}});var a={};a[OSF.DDA.FileProperties.Handle]=e;a[OSF.DDA.FileProperties.SliceSize]=b;var d=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[d.GetDocumentCopyChunkAsync,d.ReleaseDocumentCopyAsync],a)};OSF.DDA.FileSliceOffset="fileSliceoffset";OSF.DDA.CustomXmlParts=function(){this._eventDispatches=[];var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartAsync,a.GetDataPartByIdAsync,a.GetDataPartsByNameSpaceAsync])};OSF.DDA.CustomXmlPart=function(f,b,g){OSF.OUtil.defineEnumerableProperties(this,{builtIn:{value:g},id:{value:b},namespaceManager:{value:new OSF.DDA.CustomXmlPrefixMappings(b)}});var c=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[c.DeleteDataPartAsync,c.GetPartNodesAsync,c.GetPartXmlAsync]);var e=f._eventDispatches,a=e[b];if(!a){var d=Microsoft.Office.WebExtension.EventType;a=new OSF.EventDispatch([d.DataNodeDeleted,d.DataNodeInserted,d.DataNodeReplaced]);e[b]=a}OSF.DDA.DispIdHost.addEventSupport(this,a)};OSF.DDA.CustomXmlPrefixMappings=function(b){var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartNamespaceAsync,a.GetDataPartNamespaceAsync,a.GetDataPartPrefixAsync],b)};OSF.DDA.CustomXmlNode=function(d,c,e,b){OSF.OUtil.defineEnumerableProperties(this,{baseName:{value:b},namespaceUri:{value:e},nodeType:{value:c}});var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.GetRelativeNodesAsync,a.GetNodeValueAsync,a.GetNodeXmlAsync,a.SetNodeValueAsync,a.SetNodeXmlAsync],d)};OSF.DDA.NodeInsertedEventArgs=function(b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeInserted},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeReplacedEventArgs=function(c,b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeReplaced},oldNode:{value:c},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeDeletedEventArgs=function(c,a,b){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeDeleted},oldNode:{value:c},oldNextSibling:{value:a},inUndoRedo:{value:b}})};OSF.DDA.RichClientSettingsManager=function(){return {read:function(b,a){var f=[],e=[];b&&b();var d=OSF._OfficeAppFactory.getInitializationHelper(),c=function(b){a&&a(OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess,b.get_settings())};OSF._OfficeAppFactory.getWebkitAppContext(null,c)},write:function(b,i,d,c){var a={},f=[],e=[];for(var g in b){f.push(g);e.push(b[g])}a["keys"]=f;a["values"]=e;d&&d();var h=function(a){c&&c(a[0],null)};OSF.ScriptMessaging.GetScriptMessenger().invokeMethod(OSF.Webkit.MessageHandlerName,OSF.Webkit.MethodId.WriteSettings,a,h)}}}();OSF._OfficeAppFactory.getWebkitAppContext=function(c,b){var a=function(c){var f,a=OSF.Webkit.AppContextProperties,g=c[a.AppType],i=false;for(var o in OSF.AppName)if(OSF.AppName[o]==g){i=true;break}if(!i)throw"Unsupported client type "+g;for(var j=c[a.Settings],h={},k=j[0],t=j[1],e=0;e<k.length;e++)h[k[e]]=t[e];var u=c[a.SolutionReferenceId],q=c[a.MajorVersion],m=c[a.AppCapabilities],p=c[a.APPUILocale],n=c[a.AppDataLocale],r=c[a.DocumentUrl],s=c[a.ActivationMode],l=c[a.ControlIntegrationLevel],d=c[a.SolutionToken];d=d?d.toString():"";f=new OSF.OfficeAppContext(u,g,q,p,n,r,m,h,s,l,d);OSF.AppTelemetry&&OSF.AppTelemetry.initialize(f);b(f)};OSF.ScriptMessaging.GetScriptMessenger().invokeMethod(OSF.Webkit.MessageHandlerName,OSF.Webkit.MethodId.GetContext,[],a)};OSF.DDA.DispIdHost.getRichClientDelegateMethods=function(e){var a={};a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=OSF.DDA.SafeArray.Delegate.executeAsync;a[OSF.DDA.DispIdHost.Delegates.RegisterEventAsync]=OSF.DDA.SafeArray.Delegate.registerEventAsync;a[OSF.DDA.DispIdHost.Delegates.UnregisterEventAsync]=OSF.DDA.SafeArray.Delegate.unregisterEventAsync;function b(a){return function(b){var e,d,c=function(c,a){b.onReceiving&&b.onReceiving();b.onComplete&&b.onComplete(c,a)};try{a(b.hostCallArgs,b.onCalling,c)}catch(f){e=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError;d={name:Strings.OfficeOM.L_InternalError,message:f};c(e,d)}}}function d(c,b,a){return OSF.DDA.RichClientSettingsManager.read(b,a)}function c(a,c,b){return OSF.DDA.RichClientSettingsManager.write(a[OSF.DDA.SettingsManager.SerializedSettings],a[Microsoft.Office.WebExtension.Parameters.OverwriteIfStale],c,b)}switch(e){case OSF.DDA.AsyncMethodNames.RefreshAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(d);break;case OSF.DDA.AsyncMethodNames.SaveAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(c)}return a};OSF.OUtil.setNamespace("SafeArray",OSF.DDA);OSF.DDA.SafeArray.Response={Status:0,Payload:1};OSF.DDA.SafeArray.UniqueArguments={Offset:"offset",Run:"run",BindingSpecificData:"bindingSpecificData",MergedCellGuid:"{66e7831f-81b2-42e2-823c-89e872d541b3}"};OSF.OUtil.setNamespace("Delegate",OSF.DDA.SafeArray);OSF.DDA.SafeArray.Delegate.SpecialProcessor=function(){function b(a){var b;try{var h=a.ubound(1),d=a.ubound(2);a=a.toArray();if(h==1&&d==1)b=[a];else{b=[];for(var f=0;f<h;f++){for(var c=[],e=0;e<d;e++){var g=a[f*d+e];g!=OSF.DDA.SafeArray.UniqueArguments.MergedCellGuid&&c.push(g)}c.length>0&&b.push(c)}}}catch(i){}return b}var c=[OSF.DDA.PropertyDescriptors.FileProperties,OSF.DDA.PropertyDescriptors.FileSliceProperties,OSF.DDA.PropertyDescriptors.BindingProperties,OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,OSF.DDA.SafeArray.UniqueArguments.Offset,OSF.DDA.SafeArray.UniqueArguments.Run,OSF.DDA.PropertyDescriptors.Subset,OSF.DDA.PropertyDescriptors.DataPartProperties,OSF.DDA.PropertyDescriptors.DataNodeProperties,OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,OSF.DDA.EventDescriptors.DataNodeInsertedEvent,OSF.DDA.EventDescriptors.DataNodeReplacedEvent,OSF.DDA.EventDescriptors.DataNodeDeletedEvent,OSF.DDA.DataNodeEventProperties.OldNode,OSF.DDA.DataNodeEventProperties.NewNode,OSF.DDA.DataNodeEventProperties.NextSiblingNode],a={};a[Microsoft.Office.WebExtension.Parameters.Data]=function(){var c=0,a=1;return {toHost:function(b){if(typeof b!="string"&&b[OSF.DDA.TableDataProperties.TableRows]!==undefined){var d=[];d[c]=b[OSF.DDA.TableDataProperties.TableRows];d[a]=b[OSF.DDA.TableDataProperties.TableHeaders];b=d}return b},fromHost:function(f){var e;if(f.toArray){var g=f.dimensions();if(g===2)e=b(f);else{var d=f.toArray();if(d.length===2&&(d[0]!=null&&d[0].toArray||d[1]!=null&&d[1].toArray)){e={};e[OSF.DDA.TableDataProperties.TableRows]=b(d[c]);e[OSF.DDA.TableDataProperties.TableHeaders]=b(d[a])}else e=d}}else e=f;return e}}}();OSF.DDA.SafeArray.Delegate.SpecialProcessor.uber.constructor.call(this,c,a);this.pack=function(c,d){var b;if(this.isDynamicType(c))b=a[c].toHost(d);else b=d;return b};this.unpack=function(c,d){var b;if(this.isComplexType(c)||OSF.DDA.ListType.isListType(c))try{b=d.toArray()}catch(e){b=d||{}}else if(this.isDynamicType(c))b=a[c].fromHost(d);else b=d;return b}};OSF.OUtil.extend(OSF.DDA.SafeArray.Delegate.SpecialProcessor,OSF.DDA.SpecialProcessor);OSF.DDA.SafeArray.Delegate.ParameterMap=function(){var e=true,f=new OSF.DDA.HostParameterMap(new OSF.DDA.SafeArray.Delegate.SpecialProcessor),a,d=f.self;function g(a){var c=null;if(a){c={};for(var d=a.length,b=0;b<d;b++)c[a[b].name]=a[b].value}return c}function b(b){var a={},c=g(b.toHost);if(b.invertible)a.map=c;else if(b.canonical)a.toHost=a.fromHost=c;else{a.toHost=c;a.fromHost=g(b.fromHost)}f.setMapping(b.type,a)}a=OSF.DDA.FileProperties;b({type:OSF.DDA.PropertyDescriptors.FileProperties,fromHost:[{name:a.Handle,value:0},{name:a.FileSize,value:1}]});b({type:OSF.DDA.PropertyDescriptors.FileSliceProperties,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.Data,value:0},{name:a.SliceSize,value:1}]});a=OSF.DDA.BindingProperties;b({type:OSF.DDA.PropertyDescriptors.BindingProperties,fromHost:[{name:a.Id,value:0},{name:a.Type,value:1},{name:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,value:2}]});b({type:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,fromHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1},{name:a.HasHeaders,value:2}]});a=OSF.DDA.SafeArray.UniqueArguments;b({type:OSF.DDA.PropertyDescriptors.Subset,toHost:[{name:a.Offset,value:0},{name:a.Run,value:1}],canonical:e});a=Microsoft.Office.WebExtension.Parameters;b({type:OSF.DDA.SafeArray.UniqueArguments.Offset,toHost:[{name:a.StartRow,value:0},{name:a.StartColumn,value:1}],canonical:e});b({type:OSF.DDA.SafeArray.UniqueArguments.Run,toHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1}],canonical:e});a=OSF.DDA.DataPartProperties;b({type:OSF.DDA.PropertyDescriptors.DataPartProperties,fromHost:[{name:a.Id,value:0},{name:a.BuiltIn,value:1}]});a=OSF.DDA.DataNodeProperties;b({type:OSF.DDA.PropertyDescriptors.DataNodeProperties,fromHost:[{name:a.Handle,value:0},{name:a.BaseName,value:1},{name:a.NamespaceUri,value:2},{name:a.NodeType,value:3}]});b({type:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:0},{name:OSF.DDA.PropertyDescriptors.Subset,value:1}]});a=OSF.DDA.DataNodeEventProperties;b({type:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.NewNode,value:1}]});b({type:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NewNode,value:2}]});b({type:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NextSiblingNode,value:2}]});b({type:a.OldNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NewNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NextSiblingNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});a=Microsoft.Office.WebExtension.AsyncResultStatus;b({type:OSF.DDA.PropertyDescriptors.AsyncResultStatus,fromHost:[{name:a.Succeeded,value:0},{name:a.Failed,value:1}]});a=Microsoft.Office.WebExtension.CoercionType;b({type:Microsoft.Office.WebExtension.Parameters.CoercionType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2},{name:a.Html,value:3},{name:a.Ooxml,value:4}]});a=Microsoft.Office.WebExtension.FileType;a&&b({type:Microsoft.Office.WebExtension.Parameters.FileType,toHost:[{name:a.Text,value:0},{name:a.Compressed,value:5}]});a=Microsoft.Office.WebExtension.BindingType;a&&b({type:Microsoft.Office.WebExtension.Parameters.BindingType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2}],invertible:e});a=Microsoft.Office.WebExtension.ValueFormat;b({type:Microsoft.Office.WebExtension.Parameters.ValueFormat,toHost:[{name:a.Unformatted,value:0},{name:a.Formatted,value:1}]});a=Microsoft.Office.WebExtension.FilterType;b({type:Microsoft.Office.WebExtension.Parameters.FilterType,toHost:[{name:a.All,value:0},{name:a.OnlyVisible,value:1}]});a=Microsoft.Office.WebExtension.Parameters;var c=OSF.DDA.MethodDispId;b({type:c.dispidGetSelectedDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.CoercionType,value:0},{name:a.ValueFormat,value:1},{name:a.FilterType,value:2}]});b({type:c.dispidSetSelectedDataMethod,toHost:[{name:a.CoercionType,value:0},{name:a.Data,value:1}]});b({type:c.dispidGetDocumentCopyMethod,toHost:[{name:a.FileType,value:0}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileProperties,value:d}]});b({type:c.dispidGetDocumentCopyChunkMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0},{name:OSF.DDA.FileSliceOffset,value:1},{name:OSF.DDA.FileProperties.SliceSize,value:2}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileSliceProperties,value:d}]});b({type:c.dispidReleaseDocumentCopyMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0}]});b({type:c.dispidAddBindingFromSelectionMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1}]});b({type:c.dispidAddBindingFromPromptMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1},{name:a.PromptText,value:2}]});b({type:c.dispidAddBindingFromNamedItemMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.ItemName,value:0},{name:a.Id,value:1},{name:a.BindingType,value:2},{name:a.FailOnCollision,value:3}]});b({type:c.dispidReleaseBindingMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetBindingMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetAllBindingsMethod,fromHost:[{name:OSF.DDA.ListDescriptors.BindingList,value:d}]});b({type:c.dispidGetBindingDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.ValueFormat,value:2},{name:a.FilterType,value:3},{name:OSF.DDA.PropertyDescriptors.Subset,value:4}]});b({type:c.dispidSetBindingDataMethod,toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.Data,value:2},{name:OSF.DDA.SafeArray.UniqueArguments.Offset,value:3}]});b({type:c.dispidAddRowsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidAddColumnsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidClearAllRowsMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidLoadSettingsMethod,fromHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:d}]});b({type:c.dispidSaveSettingsMethod,toHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:OSF.DDA.SettingsManager.SerializedSettings},{name:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale,value:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale}]});b({type:c.dispidAddDataPartMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Xml,value:0}]});b({type:c.dispidGetDataPartByIdMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartsByNamespaceMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataPartList,value:d}],toHost:[{name:a.Namespace,value:0}]});b({type:c.dispidGetDataPartXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:a.Id,value:0},{name:a.XPath,value:1}]});b({type:c.dispidDeleteDataPartMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataNodeValueMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodeXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.XPath,value:1}]});b({type:c.dispidSetDataNodeValueMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Data,value:1}]});b({type:c.dispidSetDataNodeXmlMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Xml,value:1}]});b({type:c.dispidAddDataNamespaceMethod,toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1},{name:a.Namespace,value:2}]});b({type:c.dispidGetDataUriByPrefixMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1}]});b({type:c.dispidGetDataPrefixByUriMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Namespace,value:1}]});b({type:c.dispidGetSelectedTaskMethod,fromHost:[{name:a.TaskId,value:d}]});b({type:c.dispidGetTaskMethod,fromHost:[{name:"taskName",value:0},{name:"wssTaskId",value:1},{name:"resourceNames",value:2}],toHost:[{name:a.TaskId,value:0}]});b({type:c.dispidGetTaskFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.TaskId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetWSSUrlMethod,fromHost:[{name:a.ServerUrl,value:0},{name:a.ListName,value:1}]});b({type:c.dispidGetSelectedResourceMethod,fromHost:[{name:a.ResourceId,value:d}]});b({type:c.dispidGetResourceFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.ResourceId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetProjectFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.FieldId,value:0},{name:a.GetRawValue,value:1}]});b({type:c.dispidGetSelectedViewMethod,fromHost:[{name:a.ViewType,value:0},{name:a.ViewName,value:1}]});c=OSF.DDA.EventDispId;b({type:c.dispidDocumentSelectionChangedEvent});b({type:c.dispidBindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,value:d}]});b({type:c.dispidBindingDataChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}]});b({type:c.dispidSettingsChangedEvent});b({type:c.dispidDataNodeAddedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,value:d}]});b({type:c.dispidDataNodeReplacedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,value:d}]});b({type:c.dispidDataNodeDeletedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,value:d}]});b({type:c.dispidTaskSelectionChangedEvent});b({type:c.dispidResourceSelectionChangedEvent});b({type:c.dispidViewSelectionChangedEvent});return f}();OSF.DDA.SafeArray.Delegate._onException=function(d,c){var a,b=d.number;if(b)switch(b){case -2146828218:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;case -2146827850:default:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}c.onComplete&&c.onComplete(a||OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError)};OSF.DDA.SafeArray.Delegate.executeAsync=function(a){try{a.onCalling&&a.onCalling();function b(a){var c=a;if(OSF.OUtil.isArray(a))for(var f=c.length,d=0;d<f;d++)c[d]=b(c[d]);else if(OSF.OUtil.isDate(a))c=a.getVarDate();else if(typeof a==="object"&&!OSF.OUtil.isArray(a)){c=[];for(var e in a)if(!OSF.OUtil.isFunction(a[e]))c[e]=b(a[e])}return c}var d=(new Date).getTime();OSF.ClientHostController.execute(a.dispId,b(a.hostCallArgs),function(g){a.onReceiving&&a.onReceiving();var b=g.toArray(),f=b[OSF.DDA.SafeArray.Response.Status];if(a.onComplete){var c;if(f==OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess)if(b.length>2){c=[];for(var e=1;e<b.length;e++)c[e-1]=b[e]}else c=b[OSF.DDA.SafeArray.Response.Payload];else c=b[OSF.DDA.SafeArray.Response.Payload];a.onComplete(f,c)}OSF.AppTelemetry&&OSF.AppTelemetry.onMethodDone(a.dispId,a.hostCallArgs,Math.abs((new Date).getTime()-d),f)})}catch(c){OSF.DDA.SafeArray.Delegate._onException(c,a)}};OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent=function(c,a){var b=(new Date).getTime();return function(d){a.onReceiving&&a.onReceiving();var e=d.toArray?d.toArray()[OSF.DDA.SafeArray.Response.Status]:d;a.onComplete&&a.onComplete(e);OSF.AppTelemetry&&OSF.AppTelemetry.onRegisterDone(c,a.dispId,Math.abs((new Date).getTime()-b),e)}};OSF.DDA.SafeArray.Delegate.registerEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(true,a);try{OSF.ClientHostController.registerEvent(a.dispId,a.targetId,function(c,b){a.onEvent&&a.onEvent(b);OSF.AppTelemetry&&OSF.AppTelemetry.onEventDone(a.dispId)},c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};OSF.DDA.SafeArray.Delegate.unregisterEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(false,a);try{OSF.ClientHostController.unregisterEvent(a.dispId,a.targetId,c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};OSF.DDA.WordDocument=function(b,c){var a=this;OSF.DDA.WordDocument.uber.constructor.call(a,b,new OSF.DDA.BindingFacade(a),c);OSF.DDA.DispIdHost.addAsyncMethods(a,[OSF.DDA.AsyncMethodNames.GetDocumentCopyAsync]);OSF.OUtil.defineEnumerableProperty(a,"customXmlParts",{value:new OSF.DDA.CustomXmlParts});OSF.OUtil.finalizeProperties(a)};OSF.OUtil.extend(OSF.DDA.WordDocument,OSF.DDA.JsomDocument)