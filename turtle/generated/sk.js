// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">vizuálne programovacie prostredie</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Prezrieť vygenerovaný javascriptový kód.</span><span id="linkTooltip">Uložiť a zdieľať odkaz na tento program.</span><span id="runTooltip">Spustiť program, zložený z dielcov na pracovnej ploche.</span><span id="runProgram">Spustiť program</span><span id="resetProgram">Odznova</span><span id="dialogOk">OK</span><span id="dialogCancel">Zrušiť</span><span id="catLogic">Logika</span><span id="catLoops">Cykly</span><span id="catMath">Matematické</span><span id="catText">Text</span><span id="catLists">Zoznamy</span><span id="catColour">Farby</span><span id="catVariables">Premenné</span><span id="catProcedures">Funkcie</span><span id="httpRequestError">Problém so spracovaním požiadavky.</span><span id="linkAlert">Zdieľať tento program skopírovaním odkazu\n\n%1</span><span id="hashError">Prepáč, \'%1\' nie je meno žiadnemu uloženému programu.</span><span id="xmlError">Nebolo možné načítať uložený súbor. Možno bol vytvorený v inej verzii Blocky.</span><span id="listVariable">zoznam</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Presunie korytnačku dopredu alebo dozadu o určitý počet krokov.</span><span id="Turtle_moveForward">posunúť dopredu o</span><span id="Turtle_moveBackward">posunúť vzad o</span><span id="Turtle_turnTooltip">Korytnačka sa otočí vľavo alebo vpravo o zadaný počet stupňov.</span><span id="Turtle_turnRight">otočiť vľavo o</span><span id="Turtle_turnLeft">otočiť vľavo o</span><span id="Turtle_widthTooltip">Zmeniť hrúbku pera.</span><span id="Turtle_setWidth">nastaviť šírku</span><span id="Turtle_colourTooltip">Zmeniť farbu pera.</span><span id="Turtle_setColour">nastaviť farbu</span><span id="Turtle_penTooltip">Pero hore alebo dole, skončí alebo začne kresliť.</span><span id="Turtle_penUp">pero hore</span><span id="Turtle_penDown">pero dole</span><span id="Turtle_turtleVisibilityTooltip">Urobí korytnačku(krúžok so šípkou) viditeľnú alebo neviditeľnú.</span><span id="Turtle_hideTurtle">skryť korytnačku</span><span id="Turtle_showTurtle">ukázať korytnačku</span><span id="Turtle_printHelpUrl">https://sk.wikipedia.org/wiki/Kn%C3%ADhtla%C4%8D</span><span id="Turtle_printTooltip">Vypíše text na pozícii korytnačky v smere jej natočenia.</span><span id="Turtle_print">tlačiť</span><span id="Turtle_fontHelpUrl">https://sk.wikipedia.org/wiki/Font_%28po%C4%8D%C3%ADta%C4%8De%29</span><span id="Turtle_fontTooltip">Nastaví písmo, ktoré používa tlačový dielec.</span><span id="Turtle_font">písmo</span><span id="Turtle_fontSize">veľkosť písma</span><span id="Turtle_fontNormal">normálne</span><span id="Turtle_fontBold">tučné</span><span id="Turtle_fontItalic">kurzíva</span><span id="Turtle_unloadWarning">Ak opustíš teraz túto stránku, stratíš všetku vykonanú prácu.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly</a> : Korytnačia grafika</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Korytnačka vykoná to, čo je napísané na dielci."><img src="../../media/1x1.gif" class="run icon21">Spustiť program</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> Odznova</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="Prezrieť vygenerovaný javascriptový kód."><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="Uložiť a zdieľať odkaz na tento program."><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="Uložiť kresbu."><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="kresba.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Korytnačka"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="Farby"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Logika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cykly"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matematické"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Zoznamy"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">zoznam</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">zoznam</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">zoznam</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">zoznam</field></block></value></block></category><category name="Premenné" custom="VARIABLE"></category><category name="Funkcie" custom="PROCEDURE"></category></xml>';
};
