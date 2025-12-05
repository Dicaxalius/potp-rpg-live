/*:
 * @target MZ
 * @plugindesc Visual Dialogue Branches v1.1.2
 * @author BitQuest Studio
 *
 * @help VisualDialogueBranches.js
 *
 * ============================================================================
 * Visual Dialogue Branches - Create Interactive Conversations Visually
 * ============================================================================
 *
 * OVERVIEW:
 * This plugin allows you to create complex dialogue trees and branching 
 * conversations using a visual editor interface. Design conversations by 
 * placing dialogue nodes, connecting them with lines, and managing player 
 * choices and NPC responses.
 *
 * ============================================================================
 * FEATURES:
 * ============================================================================
 *
 * VISUAL EDITOR:
 * • Drag and drop dialogue nodes to create conversations
 * • Two node types: NPC Dialogue and Player Choice
 * • Visual connections showing conversation flow (orange for conditional)
 * • Grid-based workspace with snap-to-grid option
 * • Zoom in/out and pan around large conversations
 * • Auto-save functionality to prevent data loss
 * • Visual badges showing node features (switches, variables, items, etc.)
 * • Color-code nodes by category for easy organization
 *
 * DIALOGUE MANAGEMENT:
 * • Create multiple conversations with unique IDs
 * • Switch between conversations in the editor
 * • Set start nodes to define conversation entry points
 * • Edit dialogue text and NPC assignments inline
 * • Delete nodes and automatically clean up connections
 *
 * NPC SYSTEM:
 * • Configure NPC list with names, face images, and bust images
 * • Assign dialogue to specific NPCs
 * • Face images or full bust/portrait images during conversations
 * • Support for 8 face image positions per NPC
 * • Change face expression per dialogue node
 * • Configurable global bust image positioning (X/Y offsets)
 * • Optional multiple busts per node with per-bust X/Y offsets (player + NPC, etc.)
 *
 * CONDITIONAL BRANCHING:
 * • Add conditions to dialogue connections
 * • Switch conditions (check if ON or OFF)
 * • Variable conditions (==, !=, >, <, >=, <=)
 * • Item conditions (check player inventory)
 * • Gold conditions (check party gold amount)
 * • Party member conditions (check if actor in party)
 * • Actor conditions (level, HP, class, state effects)
 * • Choices only appear when conditions are met
 *
 * GAME STATE CONTROL:
 * • Set switches (ON/OFF) when dialogue is displayed
 * • Modify variables (set, add, subtract) during conversations
 * • Execute common events from dialogue nodes
 * • Give or take items during conversations
 * • Give or take gold from the party
 * • Create silent logic nodes that only modify game state
 * • Track player choices and quest progress automatically
 *
 * TEXT DISPLAY FEATURES:
 * • Show variable values in dialogue (\V[n])
 * • Display actor names (\N[n])
 * • Display party member names (\P[n])
 * • Display currency unit (\G)
 * • Automatic word wrapping at word boundaries
 *
 * RUNTIME INTEGRATION:
 * • Start conversations from events using plugin commands
 * • Seamless integration with RPG Maker's message system
 * • Player choices appear as selectable options
 * • NPC dialogue displays with character names and faces/busts
 * • Automatic saving to VisualDialogue.json file
 *
 * ============================================================================
 * HOW TO USE:
 * ============================================================================
 *
 * SETUP:
 * 1. Add this plugin to your project and enable it
 * 2. Configure NPC List parameter with character IDs, names, faces, and busts
 * 3. Set your preferred editor settings (hotkey, node size, bust mode, etc.)
 *
 * CREATING CONVERSATIONS:
 * 1. During playtest, press Tab (or your configured hotkey) to open the editor
 * 2. Click "Add NPC" to create NPC dialogue nodes
 * 3. Click "Add Player" to create player choice nodes
 * 4. Drag nodes to position them on the canvas
 * 5. Click "Connect" then click the first node, then the second to link them
 * 6. Double-click a node to edit its text and NPC assignment
 * 7. Click "Set Start" to mark which node begins the conversation
 *
 * EDITING NODES:
 * • Select a node by clicking on it (yellow border indicates selection)
 * • Double-click to modify text and NPC ID
 * • Click "Delete" to remove a node and its connections
 * • Click "Set Start" to make a node the conversation entry point
 * • Leave text blank to create silent nodes that only modify game state
 * • Visual badges show what features are active on each node
 *
 * NODE ACTIONS:
 * • Click "Set Switch" then click a node to configure switch actions
 *   Format: "ID=ON/OFF" (Example: 1=ON, 5=OFF)
 * • Click "Set Variable" then click a node to configure variable actions
 *   Format: "ID=OP:VALUE" where OP is =, +, or - (Example: 1=+5, 10=100)
 * • Select a node then click "Common Event" to execute common events
 *   Format: "1, 5, 10" (comma-separated IDs)
 * • Select a node then click "Items" to give/take items
 *   Format: "ID:amount" (Example: 1:5, 3:-2 for taking 2 of item 3)
 * • Select a node then click "Gold" to give/take gold
 *   Format: "100" or "-50" (negative to take)
 * • Select a node then click "Set Category" to color-code it
 * • Select a node then click "Busts" to add multiple bust images with offsets
 *   Format: "npcId:offsetX:offsetY" (Example: hero:-320:-260, npc_01:160:-260)
 *   Options: red, blue, green, yellow, purple, orange, or #hexcolor
 *
 * FACE EXPRESSIONS:
 * • Click "Change Face" then click an NPC node to set face index (0-7)
 * • Leave blank to use the NPC's default face index
 * • Only works when "Use Bust Images" is disabled
 *
 * CONDITIONAL BRANCHING:
 * • Click "Add Condition" then click a connection line (not a node)
 * • Choose condition type: Switch, Variable, Item, Gold, Party, or Actor
 * • Configure the condition parameters when prompted
 * • Conditional connections appear in orange
 * • Choices only appear to players when conditions are met
 * • Click condition again and choose "0" to remove it
 *
 * TEXT FEATURES:
 * Use these codes in your dialogue text:
 * • \V[n] - Display value of variable n
 * • \N[n] - Display name of actor n
 * • \P[n] - Display name of party member n (1-4)
 * • \G - Display currency unit name
 *
 * MANAGING CONVERSATIONS:
 * • Click "Switch Conv" to change to a different conversation
 * • All changes auto-save to data/VisualDialogue.json
 * • Include VisualDialogue.json when deploying your game
 *
 * USING IN GAME:
 * 1. Create an event and add a Plugin Command
 * 2. Choose "StartConversation" and enter the conversation ID
 * 3. The conversation will play using your visual design
 *
 * ============================================================================
 * PLUGIN COMMANDS:
 * ============================================================================
 *
 * OpenEditor <id> - Opens the visual dialogue editor for a conversation
 * StartConversation <id> - Begins a conversation with the specified ID
 *
 * ============================================================================
 * PARAMETERS:
 * ============================================================================
 *
 * Editor Hotkey: Key to open the editor (default: Tab)
 * Default Conversation ID: Starting conversation for new projects
 * Node Width/Height: Size of dialogue nodes in the editor
 * Word Wrap Characters: Maximum characters per line before wrapping
 * Grid Snap: Snap nodes to grid for neat organization
 * Zoom Min/Max: Limits for zooming in/out
 * Canvas Width/Height: Size of the editor workspace
 * Auto Save Interval: How often to save changes (seconds)
 * NPC List: Configure NPCs with names and face images
 *
 * ============================================================================
 * TIPS:
 * ============================================================================
 *
 * • Set clear start nodes to ensure conversations begin properly
 * • Use descriptive conversation IDs for easy management
 * • Test conversations in playtest to ensure they flow correctly
 * • Use silent nodes (no text) to modify switches/variables between dialogue
 * • Switch and variable changes execute immediately when node is reached
 * • Player choice nodes can also have switch/variable actions
 * • Use variables to track relationship values or quest progress
 * • Use conditional branching to create dynamic dialogue based on game state
 * • Color-code nodes by category to organize complex conversations
 * • Use bust images for a more cinematic presentation
 * • Badge indicators help you quickly see which nodes have special actions
 * • Combine items, gold, and common events for rich interactive dialogues
 * • Use \V[n] codes to show dynamic information in dialogue text
 *
 * ============================================================================
 * VERSION: 1.1.2
 * AUTHOR: BitQuest Studio
 * ============================================================================
 *
 * @param EditorHotkeyEnabled
 * @text Enable Editor Hotkey
 * @type boolean
 * @default true
 *
 * @param EditorHotkeyKeyCode
 * @text Editor Hotkey KeyCode
 * @type number
 * @min 1
 * @default 9
 * @desc 9 = Tab. Key code used to open visual editor from map during playtest.
 *
 * @param EditorOpensOnMap
 * @text Allow Editor on Map
 * @type boolean
 * @default true
 *
 * @param DefaultConversationId
 * @text Default Conversation ID
 * @type string
 * @default default
 *
 * @param NodeWidth
 * @text Dialogue Box Width (Editor)
 * @type number
 * @min 80
 * @default 260
 *
 * @param NodeHeight
 * @text Dialogue Box Height (Editor)
 * @type number
 * @min 60
 * @default 120
 *
 * @param GridSnap
 * @text Grid Snap (px)
 * @type number
 * @min 1
 * @default 16
 *
 * @param ZoomMin
 * @text Zoom Min
 * @type number
 * @decimals 2
 * @default 0.5
 *
 * @param ZoomMax
 * @text Zoom Max
 * @type number
 * @decimals 2
 * @default 2.0
 *
 * @param ZoomStep
 * @text Zoom Step
 * @type number
 * @decimals 2
 * @default 0.10
 *
 * @param CanvasWidth
 * @text Canvas Width (Editor)
 * @type number
 * @min 1024
 * @default 4096
 *
 * @param CanvasHeight
 * @text Canvas Height (Editor)
 * @type number
 * @min 1024
 * @default 4096
 *
 * @param AutoSaveIntervalSec
 * @text Auto-Save Interval (sec)
 * @type number
 * @min 0
 * @default 10
 *
 * @param MessageWindowWidth
 * @text Message Window Width
 * @type number
 * @min 200
 * @max 2000
 * @default 816
 * @desc Width of the in-game message window during conversations (default: 816).
 *
 * @param MessageWordWrapChars
 * @text Message Word Wrap Characters
 * @type number
 * @min 0
 * @default 50
 * @desc Max characters per line. 0 = no wrapping. Text wraps at word boundaries.
 *
 * @param UseBustImages
 * @text Use Bust Images
 * @type boolean
 * @default false
 * @desc Use bust images instead of face images for NPCs during conversations.
 *
 * @param BustOffsetX
 * @text Bust X Offset
 * @type number
 * @min -9999
 * @max 9999
 * @default 0
 * @desc Horizontal offset for bust image positioning (positive = right, negative = left).
 *
 * @param BustOffsetY
 * @text Bust Y Offset
 * @type number
 * @min -9999
 * @max 9999
 * @default 0
 * @desc Vertical offset for bust image positioning (positive = down, negative = up).
 *
 * @param NPCList
 * @text NPC List
 * @type struct<VisualDialogueNPC>[]
 * @default []
 * @desc Define NPC IDs and their display names for dialogue nodes.
 *
 * @command OpenEditor
 * @text Open Visual Editor
 * @desc Open the visual editor for the given conversation.
 * @arg conversationId
 * @type string
 * @default default
 *
 * @command StartConversation
 * @text Start Conversation
 * @desc Start a conversation by its ID.
 * @arg conversationId
 * @type string
 * @default default
 */

/*~struct~VisualDialogueNPC:
 * @param id
 * @text NPC ID
 * @type string
 * @default npc_01
 * @desc Unique identifier for this NPC (used in dialogue nodes).
 *
 * @param name
 * @text NPC Name
 * @type string
 * @default Shopkeeper
 * @desc Display name shown in dialogue boxes.
 *
 * @param faceImage
 * @text Face Image
 * @type file
 * @dir img/faces/
 * @desc Face image file for this NPC (from img/faces folder).
 *
 * @param faceIndex
 * @text Default Face Index
 * @type number
 * @min 0
 * @max 7
 * @default 0
 * @desc Default face index for this NPC (0-7). Can be overridden per dialogue node.
 *
 * @param bustImage
 * @text Bust Image
 * @type file
 * @dir img/pictures/
 * @desc Bust image for this NPC (from img/pictures folder). Used when Bust Mode is enabled.
 */

/* globals Scene_Base, SceneManager, Window_Command, Graphics, Input, TouchInput, Window_Base, StorageManager, DataManager, Utils, $gameMessage, $gameSystem, $gameTemp, Scene_Map, $gameSwitches, $gameVariables, Sprite, Bitmap, Rectangle, PIXI */

(() => {
  'use strict';

  const pluginName = 'VisualDialogueBranches';

  const params = PluginManager.parameters(pluginName);

  function parseBool(value, def) {
    if (value === undefined || value === null || value === '') return !!def;
    return String(value) === 'true';
  }

  function parseNum(value, def) {
    const n = Number(value);
    return isNaN(n) ? def : n;
  }

  function parseStructArray(value) {
    if (!value) return [];
    try {
      const raw = JSON.parse(value);
      if (!Array.isArray(raw)) return [];
      return raw.map(s => {
        try { return JSON.parse(s); } catch (e) { return null; }
      }).filter(x => !!x);
    } catch (e) {
      return [];
    }
  }

  const VDB = {
    editorHotkeyEnabled: parseBool(params.EditorHotkeyEnabled, true),
    editorHotkeyKeyCode: parseNum(params.EditorHotkeyKeyCode, 9),
    editorOpensOnMap: parseBool(params.EditorOpensOnMap, true),
    defaultConversationId: String(params.DefaultConversationId || 'default'),
    nodeWidth: parseNum(params.NodeWidth, 260),
    nodeHeight: parseNum(params.NodeHeight, 120),
    gridSnap: parseNum(params.GridSnap, 16),
    zoomMin: parseNum(params.ZoomMin, 0.5),
    zoomMax: parseNum(params.ZoomMax, 2.0),
    zoomStep: parseNum(params.ZoomStep, 0.10),
    canvasWidth: parseNum(params.CanvasWidth, 4096),
    canvasHeight: parseNum(params.CanvasHeight, 4096),
    autoSaveIntervalSec: parseNum(params.AutoSaveIntervalSec, 10),
    messageWindowWidth: parseNum(params.MessageWindowWidth, 816),
    messageWordWrapChars: parseNum(params.MessageWordWrapChars, 50),
    useBustImages: parseBool(params.UseBustImages, false),
    bustOffsetX: parseNum(params.BustOffsetX, 0),
    bustOffsetY: parseNum(params.BustOffsetY, 0),
    npcList: parseStructArray(params.NPCList)
  };

  const NODE_NPC = 'NPC';
  const NODE_PLAYER = 'PLAYER';

  const npcData = (() => {
    const map = {};
    for (const e of VDB.npcList) {
      const id = String(e.id || '').trim();
      if (id) {
        map[id] = {
          name: String(e.name || '').trim(),
          faceImage: String(e.faceImage || '').trim(),
          faceIndex: Number(e.faceIndex) || 0,
          bustImage: String(e.bustImage || '').trim()
        };
      }
    }
    return map;
  })();

  function npcNameFor(id) {
    if (!id) return '';
    const data = npcData[id];
    return data ? data.name : id;
  }

  function npcFaceFor(id) {
    if (!id) return { image: '', index: 0 };
    const data = npcData[id];
    return data ? { image: data.faceImage, index: data.faceIndex } : { image: '', index: 0 };
  }

  function npcBustFor(id) {
    if (!id) return '';
    const data = npcData[id];
    return data ? data.bustImage : '';
  }

  // Data loading: $vdbData loaded like standard database file for runtime compatibility
  // Saving performed via fs in playtest (NW.js) only
  let $vdbData = null;

  const _DataManager_loadDatabase = DataManager.loadDatabase;
  DataManager.loadDatabase = function() {
    _DataManager_loadDatabase.call(this);
    if (Utils.isNwjs()) {
      try {
        const fs = window.require('fs');
        const path = window.require('path');
        const base = path.dirname(process.mainModule.filename);
        const dir = path.join(base, 'data');
        const file = path.join(dir, 'VisualDialogue.json');
        if (!fs.existsSync(file)) {
          const content = JSON.stringify({ conversations: {} }, null, 2);
          fs.writeFileSync(file, content, { encoding: 'utf8' });
          $vdbData = { conversations: {} };
        } else {
          const data = fs.readFileSync(file, { encoding: 'utf8' });
          $vdbData = JSON.parse(data);
          if (!$vdbData.conversations) $vdbData.conversations = {};
        }
      } catch (e) {
        console.error('VDB: Error loading VisualDialogue.json', e);
        $vdbData = { conversations: {} };
      }
    } else {
      if (!$vdbData) $vdbData = { conversations: {} };
      try {
        fetch('data/VisualDialogue.json', { cache: 'no-store' })
          .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
          })
          .then(json => {
            if (json && typeof json === 'object') {
              $vdbData = json;
              if (!$vdbData.conversations) $vdbData.conversations = {};
            }
          })
          .catch(() => {
            if (!$vdbData) $vdbData = { conversations: {} };
          });
      } catch (e) {
        if (!$vdbData) $vdbData = { conversations: {} };
      }
    }
  };

  const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function() {
    if (!_DataManager_isDatabaseLoaded.call(this)) return false;
    if (!$vdbData) {
      if (Utils.isNwjs()) {
        return false;
      } else {
        $vdbData = { conversations: {} };
      }
    }
    if (!$vdbData.conversations) $vdbData.conversations = {};
    return true;
  };

  function ensureConversation(id) {
    if (!$vdbData.conversations[id]) {
      $vdbData.conversations[id] = { id: id, startId: 0, nodes: {} };
    }
    return $vdbData.conversations[id];
  }

  function nextNodeIdFor(conversation) {
    const keys = Object.keys(conversation.nodes);
    if (keys.length === 0) return 1;
    const maxId = Math.max.apply(null, keys.map(k => Number(k)));
    return maxId + 1;
  }

  function saveJsonToFile() {
    if (!Utils.isNwjs()) return false;
    try {
      const fs = window.require('fs');
      const path = window.require('path');
      const base = path.dirname(process.mainModule.filename);
      const dir = path.join(base, 'data');
      const file = path.join(dir, 'VisualDialogue.json');
      const content = JSON.stringify($vdbData, null, 2);
      fs.writeFileSync(file, content, { encoding: 'utf8' });
      return true;
    } catch (e) {
      console.error('VDB: Error saving:', e);
      return false;
    }
  }


  // Plugin commands
  PluginManager.registerCommand(pluginName, 'OpenEditor', args => {
    const conversationId = String(args.conversationId || VDB.defaultConversationId);
    SceneManager.push(Scene_VDB);
    SceneManager.prepareNextScene(conversationId);
  });

  PluginManager.registerCommand(pluginName, 'StartConversation', args => {
    const conversationId = String(args.conversationId || VDB.defaultConversationId);
    if (!$vdbData || !$vdbData.conversations) {
      console.warn(`VDB: Data not loaded yet. Conversation "${conversationId}" cannot start.`);
      return;
    }
    const conv = $vdbData.conversations[conversationId];
    if (!conv || Object.keys(conv.nodes || {}).length === 0) {
      console.warn(`VDB: Conversation "${conversationId}" not found or has no nodes.`);
      return;
    }
    if ($gameSystem) {
      $gameSystem.startVdbConversation(conversationId);
    }
  });

  // Hotkey mapping
  if (VDB.editorHotkeyEnabled && VDB.editorOpensOnMap && VDB.editorHotkeyKeyCode > 0) {
    Input.keyMapper[VDB.editorHotkeyKeyCode] = 'vdb_open';
  }


  // Scene_Map hooks: hotkey + runner update
  const _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function() {
    _Scene_Map_update.call(this);
    if (VDB.editorHotkeyEnabled && VDB.editorOpensOnMap) {
      if (Input.isTriggered('vdb_open')) {
        SceneManager.push(Scene_VDB);
        SceneManager.prepareNextScene(VDB.defaultConversationId);
      }
    }
    VDBRunner.updateOnMap();
  };

  // Runtime runner
  const VDBRunner = {
    _active: false,
    _conversationId: '',
    _currentId: 0,
    _waiting: false,
    _pendingStart: null,
    _clearAfterEnd: false,
    _showingChoices: false,
    _bustSprite: null,
    _bustSpritesMulti: [],
    _lastBustImage: '',
    start(conversationId) {
      this._pendingStart = conversationId;
      this._clearAfterEnd = false;
      if (this._bustSprite && !this._bustSprite.parent) {
        this._bustSprite = null;
      }
    },
    updateOnMap() {
      if (this._pendingStart && !$gameMessage.isBusy()) {
        const convId = this._pendingStart; this._pendingStart = null;
        const conv = ensureConversation(convId);
        if (!conv || Object.keys(conv.nodes).length === 0) return;
        this._active = true;
        this._conversationId = convId;
        this._currentId = conv.startId || Number(Object.keys(conv.nodes)[0]) || 0;
        this._waiting = false;
      }
      if (!this._active) {
        if (this._clearAfterEnd && !$gameMessage.isBusy()) {
          if ($gameMessage) {
            $gameMessage.setFaceImage('', 0);
            $gameMessage.setSpeakerName('');
          }
          this._lastBustImage = '';
          this.hideBust();
          this._clearAfterEnd = false;
        }
        return;
      }
      if (VDB.useBustImages) {
        this.updateBustPosition();
        this.updateMultiBustPositions();
      }
      if ($gameMessage.isBusy()) { this._waiting = true; return; }
      if (this._waiting) { this._waiting = false; }
      this.advance();
    },
    advance() {
      const conv = ensureConversation(this._conversationId);
      const node = conv.nodes[String(this._currentId)];
      if (!node) { this.endConversation(); return; }
      this.executeNodeActions(node);
      if (node.type === NODE_NPC) {
        const hasText = node.text && node.text.trim();
        if (!hasText) {
          const next = this.getNextValidConnection(node);
          this._currentId = next || 0;
          if (!this._currentId) { this.endConversation(); }
          return;
        }
        const playerChoices = this.getValidPlayerChoices(node);
        const npcName = npcNameFor(node.npcId);
        if (VDB.useBustImages) {
          if (node.busts && Array.isArray(node.busts) && node.busts.length > 0) {
            this.showNodeBusts(node);
          } else {
            const bustImage = npcBustFor(node.npcId);
            const imageToShow = bustImage || this._lastBustImage;
            this.showBust(imageToShow);
          }
          $gameMessage.setFaceImage('', 0);
        } else {
          const face = npcFaceFor(node.npcId);
          const faceIndex = node.faceIndex !== undefined && node.faceIndex !== null ? node.faceIndex : face.index;
          if (face.image) {
            $gameMessage.setFaceImage(face.image, faceIndex);
          }
          this.hideBust();
        }
        if (npcName) {
          $gameMessage.setSpeakerName(npcName);
        }
        if (playerChoices.length > 0) {
          const texts = playerChoices.map(item => item.node.text || `Choice ${item.node.id}`);
          const defaultIndex = 0;
          const cancelType = -1;
          this._showingChoices = true;
          this._currentChoices = playerChoices;
          $gameMessage.setChoices(texts, defaultIndex, cancelType);
          $gameMessage.setChoiceCallback(index => {
            this._showingChoices = false;
            const chosen = playerChoices[index];
            if (!chosen) { 
              this.endConversation();
              return;
            }
            this.executeNodeActions(chosen.node);
            const next = this.getNextValidConnection(chosen.node);
            if (next) { this._currentId = next; this._waiting = false; }
            else { this.endConversation(); }
          });
          $gameMessage.add(this.wrapText(node.text));
          return;
        } else {
          $gameMessage.add(this.wrapText(node.text));
          const next = this.getNextValidConnection(node);
          this._currentId = next || 0;
          if (!this._currentId) { this.endConversation(); }
          return;
        }
      } else {
        const next = this.getNextValidConnection(node);
        this._currentId = next || 0;
        if (!this._currentId) { this.endConversation(); }
        return;
      }
    },
    getNextValidConnection(node) {
      if (!node.nextIds || node.nextIds.length === 0) return 0;
      for (const item of node.nextIds) {
        const targetId = typeof item === 'object' ? item.targetId : item;
        const condition = typeof item === 'object' ? item.condition : null;
        if (this.evaluateCondition(condition)) {
          return targetId;
        }
      }
      return 0;
    },
    getValidPlayerChoices(npcNode) {
      const conv = ensureConversation(this._conversationId);
      const result = [];
      for (const item of npcNode.nextIds || []) {
        const targetId = typeof item === 'object' ? item.targetId : item;
        const condition = typeof item === 'object' ? item.condition : null;
        const choiceNode = conv.nodes[String(targetId)];
        if (choiceNode && choiceNode.type === NODE_PLAYER) {
          const conditionMet = this.evaluateCondition(condition);
          if (condition && !conditionMet) {
            continue;
          }
          result.push({
            node: choiceNode
          });
        }
      }
      return result;
    },
    evaluateCondition(condition) {
      if (!condition) return true;
      if (condition.type === 'switch') {
        const switchValue = $gameSwitches.value(condition.id);
        return switchValue === condition.value;
      } else if (condition.type === 'variable') {
        const varValue = $gameVariables.value(condition.id);
        const targetValue = condition.value;
        switch (condition.op) {
          case '==': return varValue === targetValue;
          case '!=': return varValue !== targetValue;
          case '>': return varValue > targetValue;
          case '<': return varValue < targetValue;
          case '>=': return varValue >= targetValue;
          case '<=': return varValue <= targetValue;
          default: return true;
        }
      } else if (condition.type === 'item') {
        const itemData = $dataItems[condition.id];
        if (!itemData) return false;
        const hasAmount = $gameParty.numItems(itemData);
        const targetAmount = condition.amount || 1;
        switch (condition.op || '>=') {
          case '==': return hasAmount === targetAmount;
          case '!=': return hasAmount !== targetAmount;
          case '>': return hasAmount > targetAmount;
          case '<': return hasAmount < targetAmount;
          case '>=': return hasAmount >= targetAmount;
          case '<=': return hasAmount <= targetAmount;
          default: return hasAmount >= targetAmount;
        }
      } else if (condition.type === 'gold') {
        const goldAmount = $gameParty.gold();
        const targetAmount = condition.amount || 0;
        switch (condition.op || '>=') {
          case '==': return goldAmount === targetAmount;
          case '!=': return goldAmount !== targetAmount;
          case '>': return goldAmount > targetAmount;
          case '<': return goldAmount < targetAmount;
          case '>=': return goldAmount >= targetAmount;
          case '<=': return goldAmount <= targetAmount;
          default: return goldAmount >= targetAmount;
        }
      } else if (condition.type === 'party') {
        const actorId = condition.actorId;
        const inParty = $gameParty.members().some(actor => actor.actorId() === actorId);
        return condition.inParty ? inParty : !inParty;
      } else if (condition.type === 'actor') {
        const actor = $gameActors.actor(condition.actorId);
        if (!actor) return false;
        const checkType = condition.checkType;
        const targetValue = condition.value;
        if (checkType === 'level') {
          const level = actor.level;
          switch (condition.op || '>=') {
            case '==': return level === targetValue;
            case '!=': return level !== targetValue;
            case '>': return level > targetValue;
            case '<': return level < targetValue;
            case '>=': return level >= targetValue;
            case '<=': return level <= targetValue;
            default: return level >= targetValue;
          }
        } else if (checkType === 'hp') {
          const hpRate = actor.hpRate();
          const targetRate = targetValue / 100;
          switch (condition.op || '>=') {
            case '==': return Math.abs(hpRate - targetRate) < 0.01;
            case '!=': return Math.abs(hpRate - targetRate) >= 0.01;
            case '>': return hpRate > targetRate;
            case '<': return hpRate < targetRate;
            case '>=': return hpRate >= targetRate;
            case '<=': return hpRate <= targetRate;
            default: return hpRate >= targetRate;
          }
        } else if (checkType === 'class') {
          return actor.currentClass().id === targetValue;
        } else if (checkType === 'state') {
          return actor.isStateAffected(targetValue);
        }
      }
      return true;
    },
    endConversation() {
      this._active = false;
      this._clearAfterEnd = true;
      this._showingChoices = false;
    },
    showBust(imageName) {
      if (!imageName) {
        this.hideBust();
        this._lastBustImage = '';
        return;
      }
      if (this._lastBustImage === imageName && this._bustSprite && this._bustSprite.visible && this._bustSprite.parent) {
        return;
      }
      this._lastBustImage = imageName;
      if (!this._bustSprite || !this._bustSprite.parent) {
        const scene = SceneManager._scene;
        if (!scene) return;
        this._bustSprite = new Sprite();
        const windowLayer = scene._windowLayer;
        if (windowLayer && scene.children && Array.isArray(scene.children)) {
          const index = scene.children.indexOf(windowLayer);
          if (index >= 0) {
            scene.addChildAt(this._bustSprite, index);
          } else {
            scene.addChild(this._bustSprite);
          }
        } else {
          scene.addChild(this._bustSprite);
        }
      }
      if (this._bustSprite.bitmap && this._bustSprite.bitmap.url === ImageManager.loadPicture(imageName).url) {
        this._bustSprite.visible = true;
        this.updateBustPosition();
        return;
      }
      this._bustSprite.bitmap = ImageManager.loadPicture(imageName);
      this._bustSprite.bitmap.addLoadListener(() => {
        this.updateBustPosition();
      });
      this._bustSprite.visible = true;
    },
    hideBust() {
      if (this._bustSprite) {
        this._bustSprite.visible = false;
      }
      if (this._bustSpritesMulti && this._bustSpritesMulti.length > 0) {
        for (const sprite of this._bustSpritesMulti) {
          if (sprite) sprite.visible = false;
        }
      }
    },
    updateBustPosition() {
      if (!this._bustSprite || !this._bustSprite.visible) return;
      const bitmap = this._bustSprite.bitmap;
      if (!bitmap) return;
      try {
        if (bitmap.width === 0 || bitmap.height === 0) return;
        const messageWindow = SceneManager._scene._messageWindow;
        if (!messageWindow) return;
        const bustWidth = bitmap.width;
        const bustHeight = bitmap.height;
        const msgX = messageWindow.x;
        const msgY = messageWindow.y;
        const msgWidth = messageWindow.width;
        this._bustSprite.x = msgX + msgWidth - bustWidth + VDB.bustOffsetX;
        this._bustSprite.y = msgY - bustHeight + VDB.bustOffsetY;
      } catch (e) {
      }
    },
    updateMultiBustPositions() {
      if (!this._bustSpritesMulti || this._bustSpritesMulti.length === 0) return;
      const scene = SceneManager._scene;
      if (!scene) return;
      const messageWindow = scene._messageWindow;
      if (!messageWindow) return;
      const msgX = messageWindow.x;
      const msgY = messageWindow.y;
      for (const sprite of this._bustSpritesMulti) {
        if (!sprite || !sprite.visible) continue;
        const bitmap = sprite.bitmap;
        if (!bitmap || bitmap.width === 0 || bitmap.height === 0) continue;
        const ox = sprite._vdbOffsetX || 0;
        const oy = sprite._vdbOffsetY || 0;
        sprite.x = msgX + ox;
        sprite.y = msgY + oy;
      }
    },
    showNodeBusts(node) {
      const bustDefs = Array.isArray(node.busts) ? node.busts : [];
      if (!bustDefs.length) {
        this.hideBust();
        return;
      }
      const scene = SceneManager._scene;
      if (!scene) return;
      const windowLayer = scene._windowLayer;
      const children = scene.children || [];
      const insertIndex = windowLayer ? children.indexOf(windowLayer) : -1;
      if (!this._bustSpritesMulti) this._bustSpritesMulti = [];
      for (const sp of this._bustSpritesMulti) {
        if (sp) sp.visible = false;
      }
      if (this._bustSprite) {
        this._bustSprite.visible = false;
      }
      let used = 0;
      for (const cfg of bustDefs) {
        if (!cfg || !cfg.npcId) continue;
        const imageName = npcBustFor(cfg.npcId);
        if (!imageName) continue;
        let sprite = this._bustSpritesMulti[used];
        if (!sprite) {
          sprite = new Sprite();
          this._bustSpritesMulti[used] = sprite;
        }
        if (!sprite.parent) {
          if (insertIndex >= 0) {
            scene.addChildAt(sprite, insertIndex);
          } else {
            scene.addChild(sprite);
          }
        }
        sprite.bitmap = ImageManager.loadPicture(imageName);
        sprite._vdbOffsetX = Number(cfg.offsetX) || 0;
        sprite._vdbOffsetY = Number(cfg.offsetY) || 0;
        sprite.visible = true;
        sprite.bitmap.addLoadListener(() => {
          this.updateMultiBustPositions();
        });
        used++;
      }
      for (let i = used; i < this._bustSpritesMulti.length; i++) {
        const sp = this._bustSpritesMulti[i];
        if (sp) sp.visible = false;
      }
      this.updateMultiBustPositions();
    },
    executeNodeActions(node) {
      if (node.switches && Array.isArray(node.switches)) {
        for (const s of node.switches) {
          if (s.value === 'ON') {
            $gameSwitches.setValue(s.id, true);
          } else if (s.value === 'OFF') {
            $gameSwitches.setValue(s.id, false);
          }
        }
      }
      if (node.variables && Array.isArray(node.variables)) {
        for (const v of node.variables) {
          const current = $gameVariables.value(v.id);
          if (v.op === '=') {
            $gameVariables.setValue(v.id, v.value);
          } else if (v.op === '+') {
            $gameVariables.setValue(v.id, current + v.value);
          } else if (v.op === '-') {
            $gameVariables.setValue(v.id, current - v.value);
          }
        }
      }
      if (node.commonEvents && Array.isArray(node.commonEvents)) {
        for (const ceId of node.commonEvents) {
          $gameTemp.reserveCommonEvent(ceId);
        }
      }
      if (node.items && Array.isArray(node.items)) {
        for (const item of node.items) {
          const itemData = $dataItems[item.id];
          if (itemData) {
            $gameParty.gainItem(itemData, item.amount);
          }
        }
      }
      if (node.gold !== undefined && node.gold !== null) {
        $gameParty.gainGold(node.gold);
      }
    },
    wrapText(text) {
      if (!text || VDB.messageWordWrapChars === 0) {
        return text;
      }
      text = this.convertVariables(text);
      const maxCharsPerLine = VDB.messageWordWrapChars;
      const words = String(text).split(' ');
      const lines = [];
      let currentLine = '';
      const stripCodes = s => String(s)
        .replace(/\\[A-Z]+\[[^\]]*\]/gi, '')
        .replace(/\\[\.\!><\^\{\}\$G]/g, '')
        .replace(/\\[A-Z]+/gi, '');
      for (const word of words) {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const visibleLength = stripCodes(testLine).length;
        if (visibleLength > maxCharsPerLine && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);
      return lines.join('\n');
    },
    convertVariables(text) {
      if (!text) return '';
      text = String(text);
      text = text.replace(/\\V\[(\d+)\]/gi, (_, p1) => $gameVariables.value(parseInt(p1)));
      text = text.replace(/\\N\[(\d+)\]/gi, (_, p1) => {
        const actor = $gameActors.actor(parseInt(p1));
        return actor ? actor.name() : '';
      });
      text = text.replace(/\\P\[(\d+)\]/gi, (_, p1) => {
        const actor = $gameParty.members()[parseInt(p1) - 1];
        return actor ? actor.name() : '';
      });
      text = text.replace(/\\G/gi, TextManager.currencyUnit);
      return text;
    }
  };

  Game_System.prototype.startVdbConversation = function(conversationId) {
    VDBRunner.start(conversationId);
  };

  const _Scene_Message_messageWindowRect = Scene_Message.prototype.messageWindowRect;
  Scene_Message.prototype.messageWindowRect = function() {
    const rect = _Scene_Message_messageWindowRect.call(this);
    if (VDB.messageWindowWidth !== 816) {
      rect.width = VDB.messageWindowWidth;
      rect.x = (Graphics.boxWidth - rect.width) / 2;
    }
    return rect;
  };

  const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
  Window_Message.prototype.updatePlacement = function() {
    _Window_Message_updatePlacement.call(this);
    if (VDB.messageWindowWidth !== 816) {
      this.width = VDB.messageWindowWidth;
      this.x = (Graphics.boxWidth - this.width) / 2;
    }
  };

  const _Window_Message_newPage = Window_Message.prototype.newPage;
  Window_Message.prototype.newPage = function(textState) {
    if (VDB.messageWindowWidth !== 816) {
      this.width = VDB.messageWindowWidth;
      this.x = (Graphics.boxWidth - this.width) / 2;
      this.createContents();
    }
    _Window_Message_newPage.call(this, textState);
  };

  const _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
  Window_ChoiceList.prototype.updatePlacement = function() {
    if (VDBRunner._showingChoices) {
      this.width = this.windowWidth();
      this.height = this.windowHeight();
      this.x = (Graphics.boxWidth - this.width) / 2;
      this.y = (Graphics.boxHeight - this.height) / 2;
    } else {
      _Window_ChoiceList_updatePlacement.call(this);
    }
  };

  // Scene: Visual Editor
  function Scene_VDB() {
    this.initialize(...arguments);
  }

  Scene_VDB.prototype = Object.create(Scene_Base.prototype);
  Scene_VDB.prototype.constructor = Scene_VDB;

  Scene_VDB.prototype.prepare = function(conversationId) {
    this._conversationId = String(conversationId || VDB.defaultConversationId);
  };

  Scene_VDB.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._conversationId = this._conversationId || VDB.defaultConversationId;
    this._zoom = 1.0;
    this._panX = 0;
    this._panY = 0;
    this._nodeSprites = {};
    this._selectedId = 0;
    this._connectMode = false;
    this._connectSourceId = 0;
    this._switchMode = false;
    this._variableMode = false;
    this._faceMode = false;
    this._conditionMode = false;
    this._draggingSprite = null;
    this._spawnIndex = 0;
    this._linkPaths = [];
  };

  Scene_VDB.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this._toolbarHeight = (Window_Base.prototype.fittingHeight ? Window_Base.prototype.fittingHeight.call(Window_Base.prototype, 2) : 108);
    this.createCanvas();
    this.createWindowLayer();
    this.createToolbar();
    this.refreshAll();
    this._lastAutoSave = performance.now();
    this._wheelHandler = (ev) => {
      if (!this.isActive()) return;
      const delta = ev.deltaY < 0 ? VDB.zoomStep : -VDB.zoomStep;
      this.adjustZoom(delta);
      ev.preventDefault();
    };
    window.addEventListener('wheel', this._wheelHandler, { passive: false });
    this._prevKeyMapper_VDB = { 81: Input.keyMapper[81], 69: Input.keyMapper[69] };
    Input.keyMapper[81] = 'vdb_zoom_out';
    Input.keyMapper[69] = 'vdb_zoom_in';
  };

  Scene_VDB.prototype.createBackground = function() {
    this._bgSprite = new Sprite();
    this._bgSprite.bitmap = new Bitmap(Graphics.width, Graphics.height);
    this._bgSprite.bitmap.fillAll('#1b1f24');
    this.addChild(this._bgSprite);
  };

  Scene_VDB.prototype.createToolbar = function() {
    const h = this._toolbarHeight;
    this._toolbarBg = new Sprite(new Bitmap(Graphics.width, h));
    this._toolbarBg.bitmap.fillAll('#1a1a2e');
    this.addChild(this._toolbarBg);
    
    const row1Buttons = [
      { label: 'Add NPC', handler: this.onAddNpc.bind(this) },
      { label: 'Add Player', handler: this.onAddPlayer.bind(this) },
      { label: 'Connect', handler: this.onToggleConnect.bind(this) },
      { label: 'Delete', handler: this.onDeleteNode.bind(this) },
      { label: 'Edit', handler: this.onEditNode.bind(this) },
      { label: 'Set Start', handler: this.onSetStart.bind(this) },
      { label: 'Switch Conv', handler: this.onSwitchConversation.bind(this) },
      { label: 'Busts', handler: this.onBusts.bind(this) }
    ];
    
    const row2Buttons = [
      { label: 'Set Switch', handler: this.onSetSwitch.bind(this) },
      { label: 'Set Variable', handler: this.onSetVariable.bind(this) },
      { label: 'Common Event', handler: this.onCommonEvent.bind(this) },
      { label: 'Items', handler: this.onItems.bind(this) }
    ];
    
    const row3Buttons = [
      { label: 'Change Face', handler: this.onChangeFace.bind(this) },
      { label: 'Add Condition', handler: this.onAddCondition.bind(this) },
      { label: 'Gold', handler: this.onGold.bind(this) },
      { label: 'Set Category', handler: this.onSetCategory.bind(this) }
    ];
    
    this._buttons = [];
    
    const btnWidth = 110;
    const btnHeight = 36;
    const gap = 8;
    const startX = 10;
    const rowHeight = 44;
    
    for (let i = 0; i < row1Buttons.length; i++) {
      const btn = row1Buttons[i];
      btn.x = startX + i * (btnWidth + gap);
      btn.y = 8;
      btn.width = btnWidth;
      btn.height = btnHeight;
      
      const sprite = new Sprite(new Bitmap(btnWidth, btnHeight));
      sprite.bitmap.fillRect(0, 0, btnWidth, btnHeight, '#3a3f47');
      sprite.bitmap.fillRect(1, 1, btnWidth - 2, btnHeight - 2, '#2a2f35');
      sprite.bitmap.fontSize = 16;
      sprite.bitmap.textColor = '#ffffff';
      sprite.bitmap.drawText(btn.label, 0, 0, btnWidth, btnHeight, 'center');
      sprite.x = btn.x;
      sprite.y = btn.y;
      btn.sprite = sprite;
      this._buttons.push(btn);
      this.addChild(sprite);
    }
    
    for (let i = 0; i < row2Buttons.length; i++) {
      const btn = row2Buttons[i];
      btn.x = startX + i * (btnWidth + gap);
      btn.y = 8 + rowHeight;
      btn.width = btnWidth;
      btn.height = btnHeight;
      
      const sprite = new Sprite(new Bitmap(btnWidth, btnHeight));
      sprite.bitmap.fillRect(0, 0, btnWidth, btnHeight, '#3a3f47');
      sprite.bitmap.fillRect(1, 1, btnWidth - 2, btnHeight - 2, '#2a2f35');
      sprite.bitmap.fontSize = 16;
      sprite.bitmap.textColor = '#ffffff';
      sprite.bitmap.drawText(btn.label, 0, 0, btnWidth, btnHeight, 'center');
      sprite.x = btn.x;
      sprite.y = btn.y;
      btn.sprite = sprite;
      this._buttons.push(btn);
      this.addChild(sprite);
    }
    
    for (let i = 0; i < row3Buttons.length; i++) {
      const btn = row3Buttons[i];
      btn.x = startX + (i + 4) * (btnWidth + gap);
      btn.y = 8 + rowHeight;
      btn.width = btnWidth;
      btn.height = btnHeight;
      
      const sprite = new Sprite(new Bitmap(btnWidth, btnHeight));
      sprite.bitmap.fillRect(0, 0, btnWidth, btnHeight, '#3a3f47');
      sprite.bitmap.fillRect(1, 1, btnWidth - 2, btnHeight - 2, '#2a2f35');
      sprite.bitmap.fontSize = 16;
      sprite.bitmap.textColor = '#ffffff';
      sprite.bitmap.drawText(btn.label, 0, 0, btnWidth, btnHeight, 'center');
      sprite.x = btn.x;
      sprite.y = btn.y;
      btn.sprite = sprite;
      this._buttons.push(btn);
      this.addChild(sprite);
    }
  };

  Scene_VDB.prototype.canvasRect = function() {
    const y = this._toolbarHeight || 108;
    return new Rectangle(0, y, Graphics.width, Graphics.height - y);
  };

  Scene_VDB.prototype.createCanvas = function() {
    const rect = this.canvasRect();
    this._canvasContainer = new Sprite();
    this._canvasContainer.x = rect.x;
    this._canvasContainer.y = rect.y;
    this.addChild(this._canvasContainer);

    this._world = new PIXI.Container();
    this._world.scale.set(this._zoom);
    this._canvasContainer.addChild(this._world);

    this._grid = new PIXI.Graphics();
    this._world.addChild(this._grid);

    this._links = new PIXI.Graphics();
    this._world.addChild(this._links);

    this._nodesLayer = new PIXI.Container();
    this._world.addChild(this._nodesLayer);

    this.drawGrid();
  };

  Scene_VDB.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    if (this._wheelHandler) {
      window.removeEventListener('wheel', this._wheelHandler);
      this._wheelHandler = null;
    }
    if (this._prevKeyMapper_VDB) {
      if (this._prevKeyMapper_VDB[81] === undefined) delete Input.keyMapper[81]; else Input.keyMapper[81] = this._prevKeyMapper_VDB[81];
      if (this._prevKeyMapper_VDB[69] === undefined) delete Input.keyMapper[69]; else Input.keyMapper[69] = this._prevKeyMapper_VDB[69];
      this._prevKeyMapper_VDB = null;
    }
  };

  Scene_VDB.prototype.adjustZoom = function(dz) {
    const prev = this._zoom;
    this._zoom = Math.max(VDB.zoomMin, Math.min(VDB.zoomMax, this._zoom + dz));
    if (this._zoom !== prev) {
      this._world.scale.set(this._zoom);
    }
  };

  Scene_VDB.prototype.drawGrid = function() {
    const g = this._grid;
    g.clear();
    g.lineStyle(1, 0x2a2f35, 1.0);
    for (let x = 0; x <= VDB.canvasWidth; x += VDB.gridSnap) {
      g.moveTo(x, 0); g.lineTo(x, VDB.canvasHeight);
    }
    for (let y = 0; y <= VDB.canvasHeight; y += VDB.gridSnap) {
      g.moveTo(0, y); g.lineTo(VDB.canvasWidth, y);
    }
  };

  Scene_VDB.prototype.refreshAll = function() {
    this.refreshNodes();
    this.refreshLinks();
  };

  Scene_VDB.prototype.refreshNodes = function() {
    const conv = ensureConversation(this._conversationId);
    const existing = new Set(Object.keys(this._nodeSprites));
    for (const key of Object.keys(conv.nodes)) {
      const node = conv.nodes[key];
      if (!this._nodeSprites[key]) {
        const sprite = this.createNodeSprite(node);
        this._nodeSprites[key] = sprite;
        this._nodesLayer.addChild(sprite);
      } else {
        this.redrawNodeSprite(this._nodeSprites[key], node);
      }
      existing.delete(key);
    }
    for (const dead of existing) {
      const sp = this._nodeSprites[dead];
      if (sp && sp.parent) sp.parent.removeChild(sp);
      delete this._nodeSprites[dead];
    }
  };

  Scene_VDB.prototype.refreshLinks = function() {
    const conv = ensureConversation(this._conversationId);
    const g = this._links;
    g.clear();
    this._linkPaths = [];
    for (const key of Object.keys(conv.nodes)) {
      const node = conv.nodes[key];
      if (!node.nextIds || node.nextIds.length === 0) continue;
      const from = this._nodeSprites[key];
      if (!from) continue;
      const fx = from.x + VDB.nodeWidth / 2;
      const fy = from.y + VDB.nodeHeight / 2;
      for (const nextItem of node.nextIds || []) {
        const targetId = typeof nextItem === 'object' ? nextItem.targetId : nextItem;
        const condition = typeof nextItem === 'object' ? nextItem.condition : null;
        const to = this._nodeSprites[String(targetId)];
        if (!to) continue;
        const tx = to.x + VDB.nodeWidth / 2;
        const ty = to.y + VDB.nodeHeight / 2;
        const hasCondition = condition && condition.type;
        const color = hasCondition ? 0xffaa00 : 0x59a6ff;
        g.lineStyle(3, color, 0.9);
        drawLinkCurve(g, fx, fy, tx, ty);
        this._linkPaths.push({
          fromId: node.id,
          toId: targetId,
          fx: fx, fy: fy, tx: tx, ty: ty,
          condition: condition
        });
      }
    }
  };

  function drawLinkCurve(g, x1, y1, x2, y2) {
    const dx = (x2 - x1) * 0.5;
    const c1x = x1 + dx, c1y = y1;
    const c2x = x2 - dx, c2y = y2;
    g.moveTo(x1, y1);
    g.bezierCurveTo(c1x, c1y, c2x, c2y, x2, y2);
  }

  Scene_VDB.prototype.createNodeSprite = function(node) {
    const sp = new Sprite(new Bitmap(VDB.nodeWidth, VDB.nodeHeight));
    sp.x = Math.max(0, Math.min(VDB.canvasWidth - VDB.nodeWidth, node.x || 0));
    sp.y = Math.max(0, Math.min(VDB.canvasHeight - VDB.nodeHeight, node.y || 0));
    sp._nodeId = node.id;
    this.redrawNodeSprite(sp, node);
    return sp;
  };

  Scene_VDB.prototype.redrawNodeSprite = function(sp, node) {
    const b = sp.bitmap; b.clear();
    const isSelected = this._selectedId === node.id;
    let categoryColor = null;
    if (node.category) {
      const cat = node.category.toLowerCase();
      if (cat === 'red') categoryColor = '#8b0000';
      else if (cat === 'blue') categoryColor = '#00008b';
      else if (cat === 'green') categoryColor = '#006400';
      else if (cat === 'yellow') categoryColor = '#8b8b00';
      else if (cat === 'purple') categoryColor = '#4b0082';
      else if (cat === 'orange') categoryColor = '#ff8c00';
      else if (cat.startsWith('#')) categoryColor = cat;
    }
    const colorBg = categoryColor || (node.type === NODE_NPC ? '#20324a' : '#274a20');
    const colorHd = categoryColor || (node.type === NODE_NPC ? '#2f69a7' : '#3aa13a');
    const colorBorder = isSelected ? '#e0c04a' : '#3a3f45';
    drawPanel(b, colorBg, colorHd, colorBorder);
    b.fontSize = 18;
    b.textColor = '#ffffff';
    const idText = `#${node.id}`;
    b.drawText(idText, 8, 4, 80, 24);
    const header = node.type === NODE_NPC ? npcNameFor(node.npcId) : 'Player';
    b.drawText(header, 8 + 72, 4, VDB.nodeWidth - 16 - 72, 24);
    const text = String(node.text || '');
    const lines = wrapText(text, 40);
    b.fontSize = 16;
    for (let i = 0; i < Math.min(lines.length, 5); i++) {
      b.drawText(lines[i], 8, 30 + i*18, VDB.nodeWidth - 16, 18);
    }
    if (ensureConversation(this._conversationId).startId === node.id) {
      b.paintOpacity = 255; b.textColor = '#ffd966';
      b.drawText('Start', VDB.nodeWidth - 70, 4, 60, 24, 'right');
      b.textColor = '#ffffff';
    }
    const hasSwitch = node.switches && Array.isArray(node.switches) && node.switches.length > 0;
    const hasVariable = node.variables && Array.isArray(node.variables) && node.variables.length > 0;
    const hasCustomFace = node.type === NODE_NPC && node.faceIndex !== undefined && node.faceIndex !== null;
    const defaultFaceIndex = node.npcId && npcData[node.npcId] ? npcData[node.npcId].faceIndex : 0;
    const usesNonDefaultFace = hasCustomFace && node.faceIndex !== defaultFaceIndex;
    
    let badgeCount = 0;
    if (hasSwitch) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#ff6b6b');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('S', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    if (hasVariable) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#4ecdc4');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('V', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    if (usesNonDefaultFace) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#f39c12');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('F', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    const hasCommonEvent = node.commonEvents && Array.isArray(node.commonEvents) && node.commonEvents.length > 0;
    if (hasCommonEvent) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#ff88ff');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('C', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    const hasItems = node.items && Array.isArray(node.items) && node.items.length > 0;
    if (hasItems) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#88ffff');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('I', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    const hasBusts = node.busts && Array.isArray(node.busts) && node.busts.length > 0;
    if (hasBusts) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#ffaa88');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('B', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
    const hasGold = node.gold !== undefined && node.gold !== null && node.gold !== 0;
    if (hasGold) {
      const offsetX = badgeCount * 26;
      b.fillRect(VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, '#ffdd44');
      b.fontSize = 14;
      b.textColor = '#ffffff';
      b.drawText('G', VDB.nodeWidth - 24 - offsetX, VDB.nodeHeight - 24, 20, 20, 'center');
      badgeCount++;
    }
  };

  function drawPanel(bitmap, bg, header, border) {
    bitmap.clear();
    bitmap.fillRect(0, 0, VDB.nodeWidth, VDB.nodeHeight, bg);
    bitmap.fillRect(0, 0, VDB.nodeWidth, 26, header);
    // border
    bitmap.fillRect(0, 0, VDB.nodeWidth, 1, border);
    bitmap.fillRect(0, VDB.nodeHeight - 1, VDB.nodeWidth, 1, border);
    bitmap.fillRect(0, 0, 1, VDB.nodeHeight, border);
    bitmap.fillRect(VDB.nodeWidth - 1, 0, 1, VDB.nodeHeight, border);
  }

  function wrapText(text, cols) {
    const words = String(text || '').split(/\s+/);
    const lines = [];
    let line = '';
    for (const w of words) {
      if ((line + ' ' + w).trim().length > cols) {
        if (line) lines.push(line.trim());
        line = w;
      } else {
        line += ' ' + w;
      }
    }
    if (line.trim()) lines.push(line.trim());
    return lines;
  }

  Scene_VDB.prototype.handleCanvasMouseDown = function(x, y) {
    const localX = (x - this._canvasContainer.x) / this._zoom - this._world.x / this._zoom;
    const localY = (y - this._canvasContainer.y) / this._zoom - this._world.y / this._zoom;
    
    if (this._conditionMode) {
      const clickedLink = this.findLinkAtPosition(localX, localY);
      if (clickedLink) {
        this.editLinkCondition(clickedLink.fromId, clickedLink.toId);
        this._conditionMode = false;
        this.refreshAll();
        return;
      }
    }
    
    let clickedNode = null;
    for (const key of Object.keys(this._nodeSprites)) {
      const sp = this._nodeSprites[key];
      if (localX >= sp.x && localX <= sp.x + VDB.nodeWidth && localY >= sp.y && localY <= sp.y + VDB.nodeHeight) {
        clickedNode = sp;
        break;
      }
    }
    if (clickedNode) {
      if (this._connectMode) {
        if (!this._connectSourceId) {
          this._connectSourceId = clickedNode._nodeId;
          this._selectedId = clickedNode._nodeId;
          this.refreshNodes();
        } else {
          this.tryConnect(this._connectSourceId, clickedNode._nodeId);
          this._connectMode = false;
          this._connectSourceId = 0;
          this._selectedId = clickedNode._nodeId;
          this.refreshAll();
        }
        return;
      }
      if (this._switchMode) {
        this.editNodeSwitch(clickedNode._nodeId);
        this._switchMode = false;
        this._selectedId = clickedNode._nodeId;
        this.refreshAll();
        return;
      }
      if (this._variableMode) {
        this.editNodeVariable(clickedNode._nodeId);
        this._variableMode = false;
        this._selectedId = clickedNode._nodeId;
        this.refreshAll();
        return;
      }
      if (this._faceMode) {
        this.editNodeFace(clickedNode._nodeId);
        this._faceMode = false;
        this._selectedId = clickedNode._nodeId;
        this.refreshAll();
        return;
      }
      this._selectedId = clickedNode._nodeId;
      this.refreshNodes();
      this._draggingNode = clickedNode;
      this._dragStartLocalX = localX;
      this._dragStartLocalY = localY;
      this._dragNodeStartX = clickedNode.x;
      this._dragNodeStartY = clickedNode.y;
    } else {
      this._panningCanvas = true;
      this._panStartScreenX = x;
      this._panStartScreenY = y;
      this._panWorldStartX = this._world.x;
      this._panWorldStartY = this._world.y;
    }
  };

  Scene_VDB.prototype.handleCanvasMouseMove = function(x, y) {
    if (this._draggingNode) {
      const localX = (x - this._canvasContainer.x) / this._zoom - this._world.x / this._zoom;
      const localY = (y - this._canvasContainer.y) / this._zoom - this._world.y / this._zoom;
      const dx = localX - this._dragStartLocalX;
      const dy = localY - this._dragStartLocalY;
      const nx = this._dragNodeStartX + dx;
      const ny = this._dragNodeStartY + dy;
      this._draggingNode.x = Math.max(0, Math.min(VDB.canvasWidth - VDB.nodeWidth, nx));
      this._draggingNode.y = Math.max(0, Math.min(VDB.canvasHeight - VDB.nodeHeight, ny));
      const node = this.nodeFromSprite(this._draggingNode);
      if (node) { node.x = this._draggingNode.x; node.y = this._draggingNode.y; }
      this.refreshLinks();
    } else if (this._panningCanvas) {
      const dx = x - this._panStartScreenX;
      const dy = y - this._panStartScreenY;
      this._world.x = this._panWorldStartX + dx;
      this._world.y = this._panWorldStartY + dy;
    }
  };

  Scene_VDB.prototype.handleCanvasMouseUp = function(x, y) {
    if (this._draggingNode) {
      if (VDB.gridSnap > 1) {
        this._draggingNode.x = Math.round(this._draggingNode.x / VDB.gridSnap) * VDB.gridSnap;
        this._draggingNode.y = Math.round(this._draggingNode.y / VDB.gridSnap) * VDB.gridSnap;
        const node = this.nodeFromSprite(this._draggingNode);
        if (node) { node.x = this._draggingNode.x; node.y = this._draggingNode.y; }
        this.refreshLinks();
      }
      saveJsonToFile();
      this._draggingNode = null;
    }
    this._panningCanvas = false;
  };

  Scene_VDB.prototype.nodeFromSprite = function(sp) {
    const conv = ensureConversation(this._conversationId);
    return conv.nodes[String(sp._nodeId)];
  };

  Scene_VDB.prototype.tryConnect = function(fromId, toId) {
    if (fromId === toId) return;
    const conv = ensureConversation(this._conversationId);
    const from = conv.nodes[String(fromId)];
    const to = conv.nodes[String(toId)];
    if (!from || !to) return;
    if (!Array.isArray(from.nextIds)) from.nextIds = [];
    
    const alreadyConnected = from.nextIds.some(item => {
      const itemId = typeof item === 'object' ? item.targetId : item;
      return itemId === to.id;
    });
    
    if (from.type === NODE_PLAYER) {
      from.nextIds = [to.id];
    } else {
      if (!alreadyConnected) from.nextIds.push(to.id);
    }
    
    const nextIdsStr = from.nextIds.map(item => typeof item === 'object' ? item.targetId : item).join(', ');
    console.log(`VDB: Connected node ${fromId} (${from.type}) -> ${toId} (${to.type}). NextIds: [${nextIdsStr}]`);
    saveJsonToFile();
  };

  Scene_VDB.prototype.onAddNpc = function() {
    const conv = ensureConversation(this._conversationId);
    const id = nextNodeIdFor(conv);
    const col = this._spawnIndex % 6; const row = Math.floor(this._spawnIndex / 6);
    const firstNpcId = Object.keys(npcData)[0] || '';
    const node = { id, type: NODE_NPC, npcId: firstNpcId, text: '', nextIds: [], x: 64 + col * (VDB.nodeWidth + 24), y: 64 + row * (VDB.nodeHeight + 24), switches: [], variables: [] };
    conv.nodes[String(id)] = node;
    if (!conv.startId) conv.startId = id;
    saveJsonToFile();
    this.refreshAll();
    this._spawnIndex++;
  };

  Scene_VDB.prototype.onAddPlayer = function() {
    const conv = ensureConversation(this._conversationId);
    const id = nextNodeIdFor(conv);
    const col = this._spawnIndex % 6; const row = Math.floor(this._spawnIndex / 6);
    const node = { id, type: NODE_PLAYER, text: '', nextIds: [], x: 64 + col * (VDB.nodeWidth + 24), y: 64 + row * (VDB.nodeHeight + 24), switches: [], variables: [] };
    conv.nodes[String(id)] = node;
    saveJsonToFile();
    this.refreshAll();
    this._spawnIndex++;
  };

  Scene_VDB.prototype.onToggleConnect = function() {
    if (this._connectMode) {
      this._connectMode = false;
      this._connectSourceId = 0;
    } else {
      this._connectMode = true;
      this._connectSourceId = 0;
    }
    this.refreshNodes();
  };

  Scene_VDB.prototype.onDeleteNode = function() {
    const id = this._selectedId;
    if (!id) return;
    const conv = ensureConversation(this._conversationId);
    delete conv.nodes[String(id)];
    for (const k of Object.keys(conv.nodes)) {
      const list = conv.nodes[k].nextIds || [];
      conv.nodes[k].nextIds = list.filter(n => n !== id);
    }
    if (conv.startId === id) conv.startId = Number(Object.keys(conv.nodes)[0] || 0) || 0;
    this._selectedId = 0;
    saveJsonToFile();
    this.refreshAll();
  };

  Scene_VDB.prototype.onEditNode = function() {
    if (!Utils.isNwjs()) return;
    const id = this._selectedId; if (!id) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(id)]; if (!n) return;
    
    if (n.type === NODE_NPC) {
      const newNpcId = window.prompt('Enter NPC ID:', n.npcId || '');
      if (newNpcId !== null) {
        n.npcId = newNpcId.trim();
      }
    }
    
    const newText = window.prompt('Enter dialogue text:\n(Use \\n for line breaks)', n.text || '');
    if (newText !== null) {
      n.text = newText.replace(/\\n/g, '\n');
    }
    
    saveJsonToFile();
    this.refreshAll();
  };

  Scene_VDB.prototype.onSetSwitch = function() {
    if (this._switchMode) {
      this._switchMode = false;
    } else {
      this._switchMode = true;
      this._connectMode = false;
      this._variableMode = false;
      this._faceMode = false;
      this._conditionMode = false;
    }
  };

  Scene_VDB.prototype.onSetVariable = function() {
    if (this._variableMode) {
      this._variableMode = false;
    } else {
      this._variableMode = true;
      this._connectMode = false;
      this._switchMode = false;
      this._faceMode = false;
      this._conditionMode = false;
    }
  };

  Scene_VDB.prototype.onChangeFace = function() {
    if (this._faceMode) {
      this._faceMode = false;
    } else {
      this._faceMode = true;
      this._connectMode = false;
      this._switchMode = false;
      this._variableMode = false;
      this._conditionMode = false;
    }
  };

  Scene_VDB.prototype.onAddCondition = function() {
    if (this._conditionMode) {
      this._conditionMode = false;
    } else {
      this._conditionMode = true;
      this._connectMode = false;
      this._switchMode = false;
      this._variableMode = false;
      this._faceMode = false;
    }
  };

  Scene_VDB.prototype.editNodeSwitch = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (!n.switches) n.switches = [];
    
    const switchStr = n.switches.map(s => `${s.id}=${s.value}`).join(', ');
    const newSwitches = window.prompt('Switches to set (format: ID=ON/OFF, comma separated):\nExample: 1=ON, 5=OFF\nLeave blank to clear all switches.', switchStr);
    if (newSwitches !== null) {
      n.switches = [];
      if (newSwitches.trim()) {
        const parts = newSwitches.split(',');
        for (const part of parts) {
          const match = part.trim().match(/^(\d+)\s*=\s*(ON|OFF)$/i);
          if (match) {
            n.switches.push({ id: parseInt(match[1]), value: match[2].toUpperCase() });
          }
        }
      }
    }
    
    saveJsonToFile();
  };

  Scene_VDB.prototype.editNodeVariable = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (!n.variables) n.variables = [];
    
    const varStr = n.variables.map(v => `${v.id}=${v.op}${v.value}`).join(', ');
    const newVars = window.prompt('Variables to set (format: ID=OPVALUE or ID=OP:VALUE, comma separated)\nOP: = (set), + (add), - (subtract)\nExamples: 1=+5, 2=-3, 10=100, 10=:100\nLeave blank to clear all variables.', varStr);
    if (newVars !== null) {
      n.variables = [];
      if (newVars.trim()) {
        const parts = newVars.split(',');
        for (const part of parts) {
          const match = part.trim().match(/^(\d+)\s*=\s*([+\-=]?)\s*:?\s*(\d+)$/);
          if (match) {
            let op = match[2] || '=';
            if (op === '') op = '=';
            n.variables.push({ id: parseInt(match[1]), op: op, value: parseInt(match[3]) });
          }
        }
      }
    }
    
    saveJsonToFile();
  };

  Scene_VDB.prototype.findLinkAtPosition = function(x, y) {
    const threshold = 10 / this._zoom;
    for (const link of this._linkPaths) {
      if (this.isPointNearBezier(x, y, link.fx, link.fy, link.tx, link.ty, threshold)) {
        return link;
      }
    }
    return null;
  };

  Scene_VDB.prototype.isPointNearBezier = function(px, py, x1, y1, x2, y2, threshold) {
    const dx = (x2 - x1) * 0.5;
    const c1x = x1 + dx, c1y = y1;
    const c2x = x2 - dx, c2y = y2;
    let minDist = Infinity;
    for (let t = 0; t <= 1; t += 0.05) {
      const mt = 1 - t;
      const bx = mt * mt * mt * x1 + 3 * mt * mt * t * c1x + 3 * mt * t * t * c2x + t * t * t * x2;
      const by = mt * mt * mt * y1 + 3 * mt * mt * t * c1y + 3 * mt * t * t * c2y + t * t * t * y2;
      const dist = Math.sqrt((px - bx) * (px - bx) + (py - by) * (py - by));
      if (dist < minDist) minDist = dist;
    }
    return minDist < threshold;
  };

  Scene_VDB.prototype.editLinkCondition = function(fromId, toId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const fromNode = conv.nodes[String(fromId)];
    if (!fromNode) return;
    
    let nextItem = null;
    let itemIndex = -1;
    for (let i = 0; i < fromNode.nextIds.length; i++) {
      const item = fromNode.nextIds[i];
      const itemId = typeof item === 'object' ? item.targetId : item;
      if (itemId === toId) {
        nextItem = item;
        itemIndex = i;
        break;
      }
    }
    
    if (itemIndex === -1) return;
    
    const toNode = conv.nodes[String(toId)];
    const isPlayerChoice = toNode && toNode.type === NODE_PLAYER;
    
    let condition = (typeof nextItem === 'object' && nextItem.condition) ? nextItem.condition : null;
    
    let defaultChoice = '';
    if (condition) {
      switch(condition.type) {
        case 'switch': defaultChoice = '1'; break;
        case 'variable': defaultChoice = '2'; break;
        case 'item': defaultChoice = '3'; break;
        case 'gold': defaultChoice = '4'; break;
        case 'party': defaultChoice = '5'; break;
        case 'actor': defaultChoice = '6'; break;
      }
    }
    const condType = window.prompt('Condition Type:\n1 = Switch\n2 = Variable\n3 = Item\n4 = Gold\n5 = Party Member\n6 = Actor\n0 = Remove\n\nEnter choice:', defaultChoice);
    if (condType === null) return;
    
    if (condType === '0' || condType.trim() === '') {
      if (typeof nextItem === 'object') {
        fromNode.nextIds[itemIndex] = nextItem.targetId;
      }
      saveJsonToFile();
      return;
    }
    
    if (condType === '1') {
      const swId = window.prompt('Switch ID:', condition && condition.type === 'switch' ? condition.id : '1');
      if (swId === null) return;
      const currentVal = condition && condition.type === 'switch' ? (condition.value ? 'ON' : 'OFF') : 'ON';
      const swVal = window.prompt('Switch Value (ON/OFF):', currentVal);
      if (swVal === null) return;
      
      fromNode.nextIds[itemIndex] = {
        targetId: toId,
        condition: {
          type: 'switch',
          id: parseInt(swId) || 1,
          value: swVal.toUpperCase() === 'ON'
        }
      };
    } else if (condType === '2') {
      const varId = window.prompt('Variable ID:', condition && condition.type === 'variable' ? condition.id : '1');
      if (varId === null) return;
      const varOp = window.prompt('Operator (==, !=, >, <, >=, <=):', condition && condition.type === 'variable' ? condition.op : '>=');
      if (varOp === null) return;
      const varVal = window.prompt('Value:', condition && condition.type === 'variable' ? condition.value : '1');
      if (varVal === null) return;
      
      fromNode.nextIds[itemIndex] = {
        targetId: toId,
        condition: {
          type: 'variable',
          id: parseInt(varId) || 1,
          op: varOp || '>=',
          value: parseInt(varVal) || 0
        }
      };
    } else if (condType === '3') {
      const itemId = window.prompt('Item ID:', condition && condition.type === 'item' ? condition.id : '1');
      if (itemId === null) return;
      const itemOp = window.prompt('Operator (==, !=, >, <, >=, <=):', condition && condition.type === 'item' ? condition.op : '>=');
      if (itemOp === null) return;
      const itemAmt = window.prompt('Amount:', condition && condition.type === 'item' ? condition.amount : '1');
      if (itemAmt === null) return;
      
      fromNode.nextIds[itemIndex] = {
        targetId: toId,
        condition: {
          type: 'item',
          id: parseInt(itemId) || 1,
          op: itemOp || '>=',
          amount: parseInt(itemAmt) || 1
        }
      };
    } else if (condType === '4') {
      const goldOp = window.prompt('Operator (==, !=, >, <, >=, <=):', condition && condition.type === 'gold' ? condition.op : '>=');
      if (goldOp === null) return;
      const goldAmt = window.prompt('Gold Amount:', condition && condition.type === 'gold' ? condition.amount : '100');
      if (goldAmt === null) return;
      
      fromNode.nextIds[itemIndex] = {
        targetId: toId,
        condition: {
          type: 'gold',
          op: goldOp || '>=',
          amount: parseInt(goldAmt) || 0
        }
      };
    } else if (condType === '5') {
      const actorId = window.prompt('Actor ID:', condition && condition.type === 'party' ? condition.actorId : '1');
      if (actorId === null) return;
      const inPartyStr = window.prompt('Must be in party? (YES/NO):', condition && condition.type === 'party' ? (condition.inParty ? 'YES' : 'NO') : 'YES');
      if (inPartyStr === null) return;
      
      fromNode.nextIds[itemIndex] = {
        targetId: toId,
        condition: {
          type: 'party',
          actorId: parseInt(actorId) || 1,
          inParty: inPartyStr.toUpperCase() === 'YES'
        }
      };
    } else if (condType === '6') {
      const actorId = window.prompt('Actor ID:', condition && condition.type === 'actor' ? condition.actorId : '1');
      if (actorId === null) return;
      const checkType = window.prompt('Check Type:\nlevel, hp, class, state', condition && condition.type === 'actor' ? condition.checkType : 'level');
      if (checkType === null) return;
      
      if (checkType === 'level' || checkType === 'hp') {
        const actorOp = window.prompt('Operator (==, !=, >, <, >=, <=):', condition && condition.type === 'actor' ? condition.op : '>=');
        if (actorOp === null) return;
        const actorVal = window.prompt(checkType === 'hp' ? 'HP Percent (0-100):' : 'Level:', condition && condition.type === 'actor' ? condition.value : (checkType === 'hp' ? '50' : '10'));
        if (actorVal === null) return;
        
        fromNode.nextIds[itemIndex] = {
          targetId: toId,
          condition: {
            type: 'actor',
            actorId: parseInt(actorId) || 1,
            checkType: checkType,
            op: actorOp || '>=',
            value: parseInt(actorVal) || 0
          }
        };
      } else {
        const actorVal = window.prompt(checkType === 'class' ? 'Class ID:' : 'State ID:', condition && condition.type === 'actor' ? condition.value : '1');
        if (actorVal === null) return;
        
        fromNode.nextIds[itemIndex] = {
          targetId: toId,
          condition: {
            type: 'actor',
            actorId: parseInt(actorId) || 1,
            checkType: checkType,
            value: parseInt(actorVal) || 1
          }
        };
      }
    }
    
    saveJsonToFile();
  };

  Scene_VDB.prototype.editNodeFace = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (n.type !== NODE_NPC) {
      window.alert('Only NPC dialogue nodes can have face expressions changed.');
      return;
    }
    
    if (VDB.useBustImages) {
      window.alert('Face expressions are disabled when "Use Bust Images" is enabled.\n\nBust images will be used instead of face images during conversations.');
      return;
    }
    
    const defaultFaceIndex = n.npcId && npcData[n.npcId] ? npcData[n.npcId].faceIndex : 0;
    const currentFaceIndex = n.faceIndex !== undefined && n.faceIndex !== null ? n.faceIndex : defaultFaceIndex;
    
    const newFaceIndex = window.prompt(`Enter face index (0-7):\nDefault for this NPC: ${defaultFaceIndex}\nCurrent: ${currentFaceIndex}\n\nLeave blank to use default.`, currentFaceIndex);
    if (newFaceIndex !== null) {
      if (newFaceIndex.trim() === '') {
        delete n.faceIndex;
      } else {
        const faceNum = parseInt(newFaceIndex);
        if (!isNaN(faceNum) && faceNum >= 0 && faceNum <= 7) {
          n.faceIndex = faceNum;
        }
      }
    }
    
    saveJsonToFile();
  };

  Scene_VDB.prototype.onCommonEvent = function() {
    if (this._selectedId) {
      this.editNodeCommonEvent(this._selectedId);
    }
  };
  
  Scene_VDB.prototype.onItems = function() {
    if (this._selectedId) {
      this.editNodeItems(this._selectedId);
    }
  };
  
  Scene_VDB.prototype.onGold = function() {
    if (this._selectedId) {
      this.editNodeGold(this._selectedId);
    }
  };
  
  Scene_VDB.prototype.onSetCategory = function() {
    if (this._selectedId) {
      this.editNodeCategory(this._selectedId);
    }
  };
  
  Scene_VDB.prototype.onBusts = function() {
    if (this._selectedId) {
      this.editNodeBusts(this._selectedId);
    }
  };
  
  Scene_VDB.prototype.editNodeCommonEvent = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (!n.commonEvents) n.commonEvents = [];
    
    const ceStr = n.commonEvents.join(', ');
    const newCEs = window.prompt('Common Event IDs (comma separated):\nExample: 5, 10, 15\nLeave blank to clear.', ceStr);
    if (newCEs !== null) {
      n.commonEvents = [];
      if (newCEs.trim()) {
        const parts = newCEs.split(',');
        for (const part of parts) {
          const id = parseInt(part.trim());
          if (!isNaN(id) && id > 0) {
            n.commonEvents.push(id);
          }
        }
      }
    }
    
    saveJsonToFile();
    this.refreshAll();
  };
  
  Scene_VDB.prototype.editNodeItems = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (!n.items) n.items = [];
    
    const itemStr = n.items.map(item => `${item.id}:${item.amount > 0 ? '+' : ''}${item.amount}`).join(', ');
    const newItems = window.prompt('Items (format: ID:AMOUNT, comma separated)\nPositive = give, Negative = take\nExamples: 5:+1, 10:-3, 12:+5\nLeave blank to clear.', itemStr);
    if (newItems !== null) {
      n.items = [];
      if (newItems.trim()) {
        const parts = newItems.split(',');
        for (const part of parts) {
          const match = part.trim().match(/^(\d+)\s*:\s*([+\-]?\d+)$/);
          if (match) {
            n.items.push({ id: parseInt(match[1]), amount: parseInt(match[2]) });
          }
        }
      }
    }
    
    saveJsonToFile();
    this.refreshAll();
  };
  
  Scene_VDB.prototype.editNodeGold = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    const currentGold = n.gold || 0;
    const newGold = window.prompt('Gold Amount (positive = give, negative = take):', currentGold);
    if (newGold !== null) {
      const parsed = parseInt(newGold);
      if (!isNaN(parsed)) {
        n.gold = parsed;
      }
    }
    
    saveJsonToFile();
    this.refreshAll();
  };
  
  Scene_VDB.prototype.editNodeBusts = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    if (!n.busts) n.busts = [];
    
    const bustStr = n.busts.map(b => {
      const ox = typeof b.offsetX === 'number' ? b.offsetX : 0;
      const oy = typeof b.offsetY === 'number' ? b.offsetY : 0;
      return `${b.npcId}:${ox}:${oy}`;
    }).join(', ');
    
    const newBusts = window.prompt(
      'Busts (format: npcId:offsetX:offsetY, comma separated)\n' +
      'Offsets are relative to the message window top-left.\n' +
      'Example: hero:-320:-260, npc_01:160:-260\n' +
      'Leave blank to clear.',
      bustStr
    );
    if (newBusts !== null) {
      n.busts = [];
      if (newBusts.trim()) {
        const parts = newBusts.split(',');
        for (const part of parts) {
          const match = part.trim().match(/^([^:]+)(?::(-?\d+))?(?::(-?\d+))?$/);
          if (match) {
            const npcId = match[1].trim();
            if (!npcId) continue;
            const ox = match[2] !== undefined ? parseInt(match[2]) : 0;
            const oy = match[3] !== undefined ? parseInt(match[3]) : 0;
            n.busts.push({
              npcId: npcId,
              offsetX: isNaN(ox) ? 0 : ox,
              offsetY: isNaN(oy) ? 0 : oy
            });
          }
        }
      }
    }
    
    saveJsonToFile();
    this.refreshAll();
  };
  
  Scene_VDB.prototype.editNodeCategory = function(nodeId) {
    if (!Utils.isNwjs()) return;
    const conv = ensureConversation(this._conversationId);
    const n = conv.nodes[String(nodeId)]; if (!n) return;
    
    const currentCat = n.category || '';
    const newCat = window.prompt('Node Category/Color:\nred, blue, green, yellow, purple, orange\nOr hex color: #ff0000\nLeave blank to clear.', currentCat);
    if (newCat !== null) {
      n.category = newCat.trim();
    }
    
    saveJsonToFile();
    this.refreshAll();
  };

  Scene_VDB.prototype.onSetStart = function() {
    const id = this._selectedId; if (!id) return;
    const conv = ensureConversation(this._conversationId);
    conv.startId = id;
    saveJsonToFile();
    this.refreshAll();
  };

  Scene_VDB.prototype.onSwitchConversation = function() {
    if (!Utils.isNwjs()) return;
    const newId = window.prompt('Enter conversation ID:', this._conversationId) || this._conversationId;
    if (newId && newId !== this._conversationId) {
      this._conversationId = newId;
      this._selectedId = 0;
      this._connectSourceId = 0;
      this._spawnIndex = 0;
      ensureConversation(this._conversationId);
      saveJsonToFile();
      this.refreshAll();
    }
  };


  Scene_VDB.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    
    if (TouchInput.isTriggered()) {
      const x = TouchInput.x;
      const y = TouchInput.y;
      let buttonClicked = false;
      for (const btn of this._buttons) {
        if (x >= btn.x && x < btn.x + btn.width && y >= btn.y && y < btn.y + btn.height) {
          btn.handler();
          buttonClicked = true;
          break;
        }
      }
      if (!buttonClicked) {
        const rect = this.canvasRect();
        if (x >= rect.x && x < rect.x + rect.width && y >= rect.y && y < rect.y + rect.height) {
          this.handleCanvasMouseDown(x, y);
        }
      }
    }
    if (TouchInput.isMoved()) {
      if (this._draggingNode || this._panningCanvas) {
        this.handleCanvasMouseMove(TouchInput.x, TouchInput.y);
      }
    }
    if (TouchInput.isReleased()) {
      if (this._draggingNode || this._panningCanvas) {
        this.handleCanvasMouseUp(TouchInput.x, TouchInput.y);
      }
    }
    if (Input.isTriggered('cancel')) {
      SceneManager.pop();
    }
    if (Input.isRepeated('vdb_zoom_in')) this.adjustZoom(VDB.zoomStep);
    if (Input.isRepeated('vdb_zoom_out')) this.adjustZoom(-VDB.zoomStep);
    const now = performance.now();
    if (VDB.autoSaveIntervalSec > 0 && now - this._lastAutoSave > VDB.autoSaveIntervalSec * 1000) {
      saveJsonToFile();
      this._lastAutoSave = now;
    }
  };

  // Keep SceneManager default prepareNextScene intact; we rely on SceneManager.push + prepareNextScene above.

})();


