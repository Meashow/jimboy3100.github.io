//v1.0
var Languagetimesused;
var Languagetimesused1=0;
var Externalletter0a;
var Externalletter0b;
var Externalletter1;
var Externalletter2;
var Externalletter3;
var Externalletter4;
var Externalletter5;

if(Externalletter0a==null){Externalletter0a = "LANGUAGES";}
if(Externalletter0b==null){Externalletter0b = "Choose a language";}
if(Externalletter1==null){Externalletter1 = "INFORMATION";}
if(Externalletter2==null){Externalletter2 = "TEMPLATES";}
if(Externalletter3==null){Externalletter3 = "MANUAL TEMPLATES";}
if(Externalletter4==null){Externalletter4 = "MANUAL TEMPLATES";}
if(Externalletter5==null){Externalletter5 = "Or choose an expansion";}

$("#main-menu").hide();
$("#skins-panel").hide();
$("#quick-menu").hide();
$("#exp-bar").hide();
$("#menu-footer").after('<div id="legendhelper" style="background-image: url('+legbgpic+'); background-color: '+legbgcolor+'; border: 1px solid black; position:absolute;  height: 560px; width: 940px; margin-top: 0px;margin-left: -240px; ">'+
	'<div id="Userscriptshud2" style="display:block; margin-left: 10px; margin-right: 10px;">'+ //margin-left: 10px"
	'<br><div id="Userscriptshud3"><iframe id="customskinsIframe2" src="https://jimboy3100.github.io/extras/helper.html" width="920" height="490" >'+
    '<p>Your browser does not support iframes.</p>'+
	'</iframe>'	+
											'</div></div>'+
											    '<button id= "Backtomenu" onclick="closecustomskinsIframe(); return false" style="margin-left: 10px;" class="btn btn-danger"  data-original-title="" title="">' + Premadeletter113 + '</button>'+
												'<button id= "Infobtn11" onclick="Infobtn11(); return false" style="margin-left: 10px;" class="btn btn-success"  data-original-title="" title="">' + Externalletter1 + '</button>'+
												'<button id= "TemplatesBtn" onclick="templatesIframe(); return false" style="margin-left: 10px;" class="btn btn-success"  data-original-title="" title="">' + Externalletter2 + '</button>'+
												'<button id= "ManualyTemplatesBtn" onclick="manualytemplatesIframe(); return false" style="margin-left: 10px;" class="btn btn-success"  data-original-title="" title="">' + Externalletter3 + '</button>'+
												'<button id= "LanguagesTempBtn" onclick="LanguagesTempIframe(); return false" style="margin-left: 10px;" class="btn btn-success"  data-original-title="" title="">' + Externalletter0a + '</button></div>');

									
function closecustomskinsIframe(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#legendhelper").remove();
}
function templatesIframe(){

$("#Userscriptshud3").html('<div id="tutorial9" style="display:block;" width="820" height="490">'+
	'<p style="color:white; font-size:24px"; align="middle"><b>' + Externalletter4 + '</b></p>'+	
	'<div id="settingbanners"><img src="https://jimboy3100.github.io/banners/iconagario.png" alt="Search Servers" id= "searchicon" onclick="agariowhitesettings(); return false" class="img-rounded" alt="Cinque Terre" width=20% height="50">' +
	'<u style="color:white; font-size:22px"; align="left" onclick="agariowhitesettings(); return false">Agario Default(White)</u><br>'+	
	'<img src="https://jimboy3100.github.io/banners/iconnosoup.png" alt="NoSoupsSettings" id = "legendclanbanner" class="img-rounded"  width=20% height="50" onclick="nosoups(); return false" > '+
	'<u style="color:white; font-size:22px"; align="right" onclick="nosoups(); return false">No Soups Settings (Black)</u><br>'+
	'<img src="https://jimboy3100.github.io/banners/vanillapic.jpg" alt="Vanilla Like Settings" id = "vanillaset" onclick="vanillabetter(); return false" class="img-rounded" width=20% height="50" >' +
	'<u style="color:white; font-size:22px"; align="right" onclick="vanillabetter(); return false">Vanilla better (Grey)</u><br>'+	
	'<img src="https://jimboy3100.github.io/banners/galaxybanner.jpg" alt=" Vanilla Like Settings" id = "galaxyset" onclick="galaxysettings(); return false" class="img-rounded"  return false" width=20%" height="50"  >' +
	'<u style="color:white; font-size:22px"; align="left" onclick="galaxysettings(); return false">Galaxy (Black)</u><br>'+	
	'<img src="https://jimboy3100.github.io/banners/iconmod.png" alt="Vanilla Like Settings" id = "legendclanbanner" class="img-rounded" width=20% height="50" onclick="legenddefaultsettings(); return false" > '+
	'<u style="color:white; font-size:22px"; align="right" onclick="legenddefaultsettings(); return false">Legend Default (Dark Blue)</u><br>'+
	'<img src="https://jimboy3100.github.io/banners/iconvanilla.jpg" alt="Vanilla Like Settings" id = "legendclanbanner" class="img-rounded" width=20% height="50" onclick="vanillalike(); return false" > '+
	'<u style="color:white; font-size:22px"; align="right" onclick="vanillalike(); return false">Vanilla like (Grey)</u><br>'+
	'<p style="color:white; font-size:24px"; align="middle"><b>' + Externalletter5 + '</b></p></div>'+
	'<div id="LEGENDAds2"><a id="legendAdAnchor2" onclick="opendyinglight(); return false"><img id="legendAdImg" height="70px" src="https://jimboy3100.github.io/banners/dyinglightbanner2.jpg" style="width: 40%"></a><u style="color:white; font-size:22px"; align="right" onclick="opendyinglight(); return false">Dying Light</u></div>'+	   
	'<br><br></div></div>');
//$('#TemplatesBtn').hide();	
}

function LanguagesTempIframe(){
$("#Userscriptshud3").html('<div id="tutorial10" style="display:block;" width="820" height="490">'+
	'<p id="chooselangtext1" style="color:white; font-size:24px"; align="middle"><b>' + Externalletter0b + '</b></p>'+
	'<br><br><select id="legendlanguages2" class="form-control" onchange="changeModLanguage2();" required="" data-original-title="" title="" style="display:inline; width: 50%"><option selected="selected" value="1" data-itr="">English</option><option value="6" data-itr="">Arabic - عربى</option><option value="4" data-itr="">Bulgarian - български</option><option value="5" data-itr="">French - Français</option><option value="9" data-itr="">German - Deutsch</option><option value="2" data-itr="">Greek - Ελληνικά</option><option value="11" data-itr="">Polish - Polskie</option><option value="8" data-itr="">Russian - Русские</option><option value="3" data-itr="">Spanish - Español</option><option value="7" data-itr="">Trad. Chinese - 繁體中文</option><option value="10" data-itr="">Turkish - Türk</option></select>'+ 
	'<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><br><br>');
	$('#legendlanguages2').val(languagemod);
}

function Infobtn11(){

$("#Userscriptshud3").html('<iframe id="customskinsIframe2" src="https://jimboy3100.github.io/extras/helper.html" width="920" height="490" >'+
    '<p>Your browser does not support iframes.</p>'+
	'</iframe>');
//$('#TemplatesBtn').hide();	
}
function manualytemplatesIframe(){
window.open('https://jimboy3100.github.io/themes/','_blank');
}

function agariowhitesettings(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = 
'{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"agario-light","darkTheme":false,"mainColor":"#ffffff","bgColor":"#f2fbff","gridColor":"#ced6d9","bordersColor":"#858a8c","foodColor":"#2de52d","virusColor":"#33ff33","virusStrokeColor":"#2de52d","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#ffffff","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#ffffff","top5MassColor":"#ffffff","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#ffffff","commandsColor":"rgba(255,255,255,0.9)","commandsTextColor":"#000000","commandsTimeColor":"#ffffff","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#ffffff","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#ffffff","miniMapTeammatesColor":"#ffffff","miniMapDeathLocationColor":"#ffffff","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.25,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}	


function legenddefaultsettings(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = 
'{"ogarioCommands":{"comm1":"Feed me!","comm2":"Split into me!","comm3":"Need backup at %currentSector%!","comm4":"Enemy spotted at %currentSector%!","comm5":"Need a teammate!","comm6":"Tank the virus!","comm7":"Eat the virus!","comm8":"Lets bait!","comm9":"Fake tricksplit!","comm0":"Fuck!","comm10":"Tricksplit!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"Profile #1","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #2","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #3","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #4","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #5","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #6","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #7","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #8","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #9","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #10","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":true,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":true,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":false,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":false,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":false,"oppRings":false,"virColors":false,"splitRange":false,"virusesRange":false,"textStroke":false,"namesStroke":false,"massStroke":false,"cursorTracking":true,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":false,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":false,"showStatsN16":false,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#000a11","gridColor":"#00243e","bordersColor":"#01d9cc","foodColor":"#5000ff","virusColor":"#002f52","virusStrokeColor":"#00b9e8","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#01d9cc","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#01d9cc","top5MassColor":"#bf00aa","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#01d9cc","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Ubuntu","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.1,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}		



function vanillalike(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = 
'{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/legend.github.io/banners/grey-08.jpg","menuOpacity":0.97,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_20.cur"}}'
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}

function nosoups(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = 
'{"ogarioCommands":{"comm1":"Feed me!","comm2":"Split into me!","comm3":"Check if you are close to me. I in trouble. HELP!!!","comm4":"Enemy spotted at %currentSector%!","comm5":"I am alone, need a teammate, who wants to team with me?","comm6":"Shoot a virus!","comm7":"Eat the virus!","comm8":"Lets bait!","comm9":"Fake tricksplit!","comm0":"Fuck!","comm10":"Tricksplit!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"},{"nick":"","clanTag":"","skinURL":"","color":"#ff7800"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":true,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":false,"virMassShots":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":true,"showMiniMapGuides":false,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":false,"oppRings":false,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":true,"massStroke":true,"cursorTracking":false,"teammatesInd":true,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":false,"showChatVideos":false,"showTop5":true,"showTargeting":false,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":false,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"agario-dark","darkTheme":false,"mainColor":"#ffffff","bgColor":"#111111","gridColor":"#333333","bordersColor":"#999999","foodColor":"#2de52d","virusColor":"#33ff33","virusStrokeColor":"#2de52d","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":20,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#01d9cc","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#01d9cc","top5MassColor":"#bf00aa","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#111111","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#01d9cc","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Ubuntu","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.1,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}

function vanillabetter(){
        $("#import-settings-btn").attr('class', 'btn btn-success');
        document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/TC7VFYr.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/zMHwfGu.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideCellsInfo":false,"autoHideFood":false,"hideMyName":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}';
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}


function galaxysettings(){
$("#import-settings-btn").attr('class', 'btn btn-success');document.getElementById("import-settings").value = 
'{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/EucIfYY.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideNames":true,"autoHideMass":false,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"https://jimboy3100.github.io/banners/darkrift.jpg","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}'
	window.history.pushState(null, null, window.location.pathname);
	$('#import-settings-btn').click();
}

function openbleedmod() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/BleedingMod.js";
    $("body").append(s);
}

function openrotatingmod() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/rotating500images.js";
    $("body").append(s);
}

function changeModLanguage2() {
	
    if ($("#legendlanguages2").val() == 1) {
        localStorage.setItem("languagemod", 1);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackEnglish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 2) {
        localStorage.setItem("languagemod", 2);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackGreek.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 3) {
        localStorage.setItem("languagemod", 3);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackSpanish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 4) {
        localStorage.setItem("languagemod", 4);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackBulgarian.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 5) {
        localStorage.setItem("languagemod", 5);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackFrench.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 6) {
        localStorage.setItem("languagemod", 6);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackArabic.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 7) {
        localStorage.setItem("languagemod", 7);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackTraditionalChinese.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages2").val() == 8) {
        localStorage.setItem("languagemod", 8);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackRussian.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }	
    if ($("#legendlanguages2").val() == 9) {
        localStorage.setItem("languagemod", 9);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackGerman.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }	
    if ($("#legendlanguages2").val() == 10) {
        localStorage.setItem("languagemod", 10);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackTurkish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }	
    if ($("#legendlanguages2").val() == 11) {
        localStorage.setItem("languagemod", 11);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackPolish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }		
		return Languagetimesused="1";
}
