//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.61;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.61] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Character Sprite Filename Tags
 * ============================================================================
 * 
 * For the files located inside of your project's /img/characters/ folder, if
 * the filenames themselves have specific "tags" in them, special properties
 * will be applied to them. These tags can be combined together with a few
 * exceptions.
 * 
 * Some of these are new to VisuStella MZ, while others are default to MZ.
 * 
 * ---
 * 
 *   !filename.png
 *   - Tag: !
 *   - Causes this character's sprite to align with the tile grid instead of
 *     being lifted a few pixels higher.
 *   - This is primarily used for things like doors, chests, and floor plates.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   $filename.png
 *   - Tag: $
 *   - Causes this character's sprite to use the "big character" format.
 *   - Primarily used for sprites like the big monsters and such which only
 *     have 3x4 cells as opposed to 12x8 cells that regular sprite sheets have.
 *   - Cannot be combined with the [VS8] tag.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   filename[Invisible].png
 *   - Tag: [Invisible] or [Inv]
 *   - This character's sprite will become invisible on the map screen in-game
 *     while almost everything else about it is visible.
 *   - This is used for those who wish to use sprite labels for things such as
 *     autorun and parallel events.
 * 
 * ---
 * 
 *   filename[VS8].png
 *   - Tag: [VS8]
 *   - Converts this sprite into a VisuStella-Style 8-Direction Sprite Sheet.
 *   - Refer to the section below.
 *   - Cannot be combined with the $ tag.
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Encounter Half Square: x>
 * <Encounter Half Circle: x>
 * <Encounter Half Delta: x>
 * <Encounter Half Row: x>
 * <Encounter Half Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be halved.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterHalf(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate halving effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Encounter None Square: x>
 * <Encounter None Circle: x>
 * <Encounter None Delta: x>
 * <Encounter None Row: x>
 * <Encounter None Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be suppressed completely.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterNone(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate suppression effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Erase if Encounter Half>
 * <Erase if Encounter None>
 * 
 * - Used for: Event Notetags ONLY
 * - Automatically erase this event if the player's party has an encounter half
 *   or encounter none effect, or if the event has spawned in an encounter half
 *   or encounter none area.
 * - This check only occurs in two situations: when the map is first loaded
 *   after being teleported into or when the player leaves a menu and returns
 *   back to the map.
 * - Events that have been erased due to this effect will NOT return even if
 *   the encounter half/none effect is removed while the player is still on the
 *   map. The event will return if the player exits the map and comes back.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 *
 * ---
 * 
 * <Label Range Type: Square>
 * <Label Range Type: Circle>
 * <Label Range Type: Diamond>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range type for the label to appear visible for.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Diamond: A diamond-shaped range with the event at the center.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 * 
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Location X: +x>
 * <Location X: -x>
 * 
 * <Location Y: +x>
 * <Location Y: -x>
 * 
 * <Location: +x, +y>
 * <Location: +x, -y>
 * <Location: -x, +y>
 * <Location: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the initial location of this event by +x and +y (or -x and -y).
 * - This allows you to stack events on top of each other or even move them to
 *   various places of the map.
 * - Replace 'x' with a number that represents the horizontal tiles to adjust
 *   the initial starting location by.
 * - Replace 'y' with a number that represents the vertical tiles to adjust
 *   the initial starting location by.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Type: Enemy>
 * <Picture Type: SV Enemy>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *   grab a picture graphic from.
 * - Other picture graphic sprite related notetags will apply as normal.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Tile Expand Up: x>
 * <Tile Expand Down: x>
 * <Tile Expand Left: x>
 * <Tile Expand Right: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for events with tile graphics. Expands the graphic up, down, left, or
 *   right from the spritesheet.
 *   - This does NOT expand the hitbox.
 * - The graphic will be anchored to the tile it's expanded from. This means
 *   even if you expanded downward, the actual event's position will still be
 *   the current event's X/Y coordinates. It's just grown more vertically and
 *   is still centered horizontally.
 * - This is primarily used to save on having to use too many events for tiles
 *   that expanded past 1x1 tile sizes.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change (Temporary)
 * - Change the icon that appears on an event.
 * - This change is temporary and resets upon new events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Change (Forced)
 * - Change the icon that appears on an event.
 * - This change is forced and needs to be restored.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 * - This will remain deleted and invisible for events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Event Icon: Restore
 * - Restores a deleted or forced icon that appears on an event.
 * 
 *   Map ID: 
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 * 
 *     Range Type:
 *     - What do you want the default label visible range type?
 *       - Square
 *       - Diamond
 *       - Circle
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 * 
 * Shadows do NOT appear for sprites using a "!" as their leading filename
 * marker. These sprites are environmental and are considered "object"
 * characters by the RPG Maker MZ core scripts. They do not utilize character
 * shadows due.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 * 
 *   Shadow Z Layer:
 *   - What is the sprite Z layer used for the shadow sprites?
 *     - In-game layers are as follows:
 *     - 0 : Lower tiles
 *     - 1 : Lower characters
 *     - 3 : Normal characters
 *     - 4 : Upper tiles
 *     - 5 : Upper characters
 *     - 6 : Airship shadow
 *     - 7 : Balloon
 *     - 8 : Animation
 *     - 9 : Destination
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.61: December 11, 2025
 * * Bug Fixes!
 * ** Fixed a bug where shadows would appear under lower-priority event sprites
 *    making usage of certain tiles awkward looking. This is corrected by the
 *    new Plugin Parameter. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Arisu:
 * *** Parameters > Movement Settings > Shadows > Shadow Z Layer
 * **** What is the sprite Z layer used for the shadow sprites?
 * **** By default, this layer will now be 0.5 instead of 0.
 * * Feature Update!
 * ** If a event is made whose priority is "Below characters" and is a tile
 *    object (ie taking a sprite from the map tileset or a character sprite
 *    with "!" in front of the name), it will be automatically regulated to
 *    a custom Z layer of 0.
 * 
 * Version 1.60: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where events with large hitboxes do not work with crash move.
 *    Fix made by Arisu.
 * ** Fixed a bug where single-mode save games by Save Core would freeze after
 *    executed event movements. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Event Labels will adjust their vertical position to the picture of any
 *    attached event picture if one is present. Update by Arisu.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Picture Type: Enemy>
 * *** <Picture Type: SV Enemy>
 * **** Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *      grab a picture graphic from.
 * **** Other picture graphic sprite related notetags will apply as normal.
 * *** <Label Range Type: Square>
 * *** <Label Range Type: Circle>
 * *** <Label Range Type: Diamond>
 * **** Sets a range type for the label to appear visible for.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Event Label Settings > Visible Range > Range Type:
 * **** What do you want the default label visible range type?
 * 
 * Version 1.59: June 13, 2024
 * * Bug Fixes!
 * ** Added a cache check for character sprite tag names to reduce frame drops.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Location X: +x>, <Location X: -x>
 * *** <Location Y: +y>, <Location Y: -y>
 * *** <Location: +x, +y>, <Location: +x, -y>
 * *** <Location: -x, +y>, <Location: -x, -y>
 * **** Adjusts the initial location of this event by +x and +y (or -x and -y).
 * **** This allows you to stack events on top of each other or even move them
 *      to various places of the map.
 * *** <Tile Expand Up: x>
 * *** <Tile Expand Down: x>
 * *** <Tile Expand Left: x>
 * *** <Tile Expand Right: x>
 * **** Used for events with tile graphics. Expands the graphic up, down, left,
 *      or right from the spritesheet.
 * **** This does NOT expand the hitbox.
 * **** The graphic will be anchored to the tile it's expanded from. This means
 *      even if you expanded downward, the actual event's position will still
 *      be the current event's X/Y coordinates. It's just grown more vertically
 *      and is still centered horizontally.
 * **** This is primarily used to save on having to use too many events for
 *      tiles that expanded past 1x1 tile sizes.
 * 
 * Version 1.58: May 16, 2024
 * * Documentation Update!
 * ** Added "Features: Character Sprite Filename Tags" section.
 * * New Features!
 * ** [Invisible] tag added to character sprite filenames.
 * *** If a character sprite's filename has [invisible] in it, it will become
 *     invisible on the map screen in-game while almost everything else about
 *     it is visible. This is used for those who wish to use sprite labels for
 *     things such as autorun and parallel events.
 * 
 * Version 1.57: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command: "Event Icon: Delete" will now keep an event icon cleared
 *    until the newly added Plugin Command: "Event Icon: Restore" is used.
 *    Update made by Arisu.
 * ** Plugin Command: "Event Icon: Change" is now renamed to have "(Temporary)"
 *    after its name in order to clarify the temporary changes made to it.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Event Icon: Event Icon: Change (Forced)
 * **** Change the icon that appears on an event.
 * **** This change is forced and needs to be restored.
 * *** Event Icon: Restore
 * **** Restores a deleted or forced icon that appears on an event.
 * 
 * Version 1.56: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added fail safes for activation proximity notetags when loaded from past
 *    save files without Events and Movement Core installed. Added by Arisu.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Encounter Half Square: x>
 * *** <Encounter Half Circle: x>
 * *** <Encounter Half Delta: x>
 * *** <Encounter Half Row: x>
 * *** <Encounter Half Column: x>
 * *** <Encounter None Square: x>
 * *** <Encounter None Circle: x>
 * *** <Encounter None Delta: x>
 * *** <Encounter None Row: x>
 * *** <Encounter None Column: x>
 * **** If the player is within the 'x' area effect of this event, the random
 *      encounter rate will be halved or suppressed completely depending on the
 *      notetag used.
 * **** These include script call checks.
 * *** <Erase if Encounter Half>
 * *** <Erase if Encounter None>
 * **** Automatically erase this event if the player's party has an encounter
 *      half or encounter none effect, or if the event has spawned in an
 *      encounter half or encounter none area.
 * **** This check only occurs in two situations: when the map is first loaded
 *      after being teleported into or when the player leaves a menu and
 *      returns back to the map.
 * **** Events that have been erased due to this effect will NOT return even if
 *      the encounter half/none effect is removed while the player is still on
 *      the map. The event will return if the player exits the map and comes
 *      back.
 * 
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change (Temporary)
 * @desc Change the icon that appears on an event.
 * This change is temporary and resets upon new events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChangeForced
 * @text Event Icon: Change (Forced)
 * @desc Change the icon that appears on an event.
 * This change is forced and needs to be restored.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 * This will remain deleted and invisible for events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconRestore
 * @text Event Icon: Restore
 * @desc Restores a deleted or forced icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 * @param RangeType:str
 * @text Range Type
 * @parent VisibleRange:num
 * @type select
 * @option square
 * @option circle
 * @option diamond
 * @desc What do you want the default label visible range type?
 * @default square
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param ShadowLayer:num
 * @text Shadow Z Layer
 * @parent Shadows
 * @desc What is the sprite Z layer used for the shadow sprites?
 * @default 0.5
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

const _0x2dfc49=_0x368a;(function(_0x578d7f,_0x504fef){const _0x3899f0=_0x368a,_0x171619=_0x578d7f();while(!![]){try{const _0x4ae6c8=-parseInt(_0x3899f0(0x2ee))/0x1+-parseInt(_0x3899f0(0x48e))/0x2*(parseInt(_0x3899f0(0x43f))/0x3)+parseInt(_0x3899f0(0x5d0))/0x4+parseInt(_0x3899f0(0x4cc))/0x5*(-parseInt(_0x3899f0(0x346))/0x6)+-parseInt(_0x3899f0(0x3bf))/0x7+parseInt(_0x3899f0(0x3ec))/0x8*(parseInt(_0x3899f0(0x21d))/0x9)+-parseInt(_0x3899f0(0x3f1))/0xa*(-parseInt(_0x3899f0(0x454))/0xb);if(_0x4ae6c8===_0x504fef)break;else _0x171619['push'](_0x171619['shift']());}catch(_0x2a25fe){_0x171619['push'](_0x171619['shift']());}}}(_0x41f0,0x6773e));var label=_0x2dfc49(0x426),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2dfc49(0x291)](function(_0x28c76f){const _0x29f808=_0x2dfc49;return _0x28c76f[_0x29f808(0x5f7)]&&_0x28c76f['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2dfc49(0x4c8)]=VisuMZ[label][_0x2dfc49(0x4c8)]||{},VisuMZ[_0x2dfc49(0x50f)]=function(_0x21581a,_0x1a0060){const _0x53cd39=_0x2dfc49;for(const _0x12ad29 in _0x1a0060){if(_0x12ad29[_0x53cd39(0x183)](/(.*):(.*)/i)){const _0x3d6ebc=String(RegExp['$1']),_0x30dca0=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x51fa50,_0x536995,_0x1cfbeb;switch(_0x30dca0){case _0x53cd39(0x39c):_0x51fa50=_0x1a0060[_0x12ad29]!==''?Number(_0x1a0060[_0x12ad29]):0x0;break;case _0x53cd39(0x1d2):_0x536995=_0x1a0060[_0x12ad29]!==''?JSON['parse'](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995['map'](_0x4356c2=>Number(_0x4356c2));break;case _0x53cd39(0x4fe):_0x51fa50=_0x1a0060[_0x12ad29]!==''?eval(_0x1a0060[_0x12ad29]):null;break;case _0x53cd39(0x4c4):_0x536995=_0x1a0060[_0x12ad29]!==''?JSON[_0x53cd39(0x25d)](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995[_0x53cd39(0x52e)](_0x4805c5=>eval(_0x4805c5));break;case _0x53cd39(0x433):_0x51fa50=_0x1a0060[_0x12ad29]!==''?JSON[_0x53cd39(0x25d)](_0x1a0060[_0x12ad29]):'';break;case _0x53cd39(0x2bd):_0x536995=_0x1a0060[_0x12ad29]!==''?JSON['parse'](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995['map'](_0x228038=>JSON[_0x53cd39(0x25d)](_0x228038));break;case'FUNC':_0x51fa50=_0x1a0060[_0x12ad29]!==''?new Function(JSON[_0x53cd39(0x25d)](_0x1a0060[_0x12ad29])):new Function('return\x200');break;case _0x53cd39(0x5ae):_0x536995=_0x1a0060[_0x12ad29]!==''?JSON['parse'](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995[_0x53cd39(0x52e)](_0x596c31=>new Function(JSON[_0x53cd39(0x25d)](_0x596c31)));break;case _0x53cd39(0x321):_0x51fa50=_0x1a0060[_0x12ad29]!==''?String(_0x1a0060[_0x12ad29]):'';break;case'ARRAYSTR':_0x536995=_0x1a0060[_0x12ad29]!==''?JSON['parse'](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995[_0x53cd39(0x52e)](_0x118179=>String(_0x118179));break;case _0x53cd39(0x1f5):_0x1cfbeb=_0x1a0060[_0x12ad29]!==''?JSON[_0x53cd39(0x25d)](_0x1a0060[_0x12ad29]):{},_0x21581a[_0x3d6ebc]={},VisuMZ[_0x53cd39(0x50f)](_0x21581a[_0x3d6ebc],_0x1cfbeb);continue;case _0x53cd39(0x507):_0x536995=_0x1a0060[_0x12ad29]!==''?JSON[_0x53cd39(0x25d)](_0x1a0060[_0x12ad29]):[],_0x51fa50=_0x536995[_0x53cd39(0x52e)](_0x9b7aa3=>VisuMZ[_0x53cd39(0x50f)]({},JSON[_0x53cd39(0x25d)](_0x9b7aa3)));break;default:continue;}_0x21581a[_0x3d6ebc]=_0x51fa50;}}return _0x21581a;},(_0x55ad1d=>{const _0x193ada=_0x2dfc49,_0x4bf078=_0x55ad1d[_0x193ada(0x38f)];for(const _0x1ed94c of dependencies){if(!Imported[_0x1ed94c]){alert(_0x193ada(0x4ff)[_0x193ada(0x286)](_0x4bf078,_0x1ed94c)),SceneManager[_0x193ada(0x58d)]();break;}}const _0x1af5e7=_0x55ad1d[_0x193ada(0x1d6)];if(_0x1af5e7[_0x193ada(0x183)](/\[Version[ ](.*?)\]/i)){const _0x2d9f13=Number(RegExp['$1']);_0x2d9f13!==VisuMZ[label][_0x193ada(0x2e1)]&&(alert(_0x193ada(0x490)[_0x193ada(0x286)](_0x4bf078,_0x2d9f13)),SceneManager['exit']());}if(_0x1af5e7[_0x193ada(0x183)](/\[Tier[ ](\d+)\]/i)){const _0x18bf63=Number(RegExp['$1']);_0x18bf63<tier?(alert(_0x193ada(0x4e2)[_0x193ada(0x286)](_0x4bf078,_0x18bf63,tier)),SceneManager[_0x193ada(0x58d)]()):tier=Math[_0x193ada(0x196)](_0x18bf63,tier);}VisuMZ[_0x193ada(0x50f)](VisuMZ[label][_0x193ada(0x4c8)],_0x55ad1d[_0x193ada(0x231)]);})(pluginData),VisuMZ[_0x2dfc49(0x1cb)]=function(_0x37cf71,_0x4e4a44,_0x321d24){switch(_0x321d24){case'=':return _0x4e4a44;break;case'+':return _0x37cf71+_0x4e4a44;break;case'-':return _0x37cf71-_0x4e4a44;break;case'*':return _0x37cf71*_0x4e4a44;break;case'/':return _0x37cf71/_0x4e4a44;break;case'%':return _0x37cf71%_0x4e4a44;break;}return _0x37cf71;},PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],'AutoMoveEvents',_0x1011c1=>{const _0x4ff488=_0x2dfc49;VisuMZ[_0x4ff488(0x50f)](_0x1011c1,_0x1011c1);switch(_0x1011c1[_0x4ff488(0x57a)]){case _0x4ff488(0x537):$gameSystem[_0x4ff488(0x3b0)](!![]);break;case'Stop':$gameSystem[_0x4ff488(0x3b0)](![]);break;case'Toggle':$gameSystem[_0x4ff488(0x3b0)](!$gameSystem[_0x4ff488(0x596)]());break;}}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x38c),_0x11b669=>{const _0xf059d9=_0x2dfc49;VisuMZ[_0xf059d9(0x50f)](_0x11b669,_0x11b669);const _0x4a878d=$gameTemp[_0xf059d9(0x616)](),_0xfd341a={'mapId':_0x11b669[_0xf059d9(0x3b4)],'eventId':_0x11b669[_0xf059d9(0x335)]||_0x4a878d[_0xf059d9(0x574)](),'pageId':_0x11b669[_0xf059d9(0x579)]};if(_0xfd341a[_0xf059d9(0x224)]<=0x0)_0xfd341a['mapId']=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0xf059d9(0x616)]()[_0xf059d9(0x3cb)](_0xfd341a);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x2e5),_0x52c3d3=>{const _0x23250c=_0x2dfc49;VisuMZ['ConvertParams'](_0x52c3d3,_0x52c3d3);switch(_0x52c3d3['Value']){case _0x23250c(0x5b7):$gameSystem[_0x23250c(0x17d)](!![]);break;case'Disable':$gameSystem[_0x23250c(0x17d)](![]);break;case _0x23250c(0x302):$gameSystem['setDashingEnabled'](!$gameSystem[_0x23250c(0x273)]());break;}}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x601),_0x4be541=>{const _0x575e02=_0x2dfc49;VisuMZ[_0x575e02(0x50f)](_0x4be541,_0x4be541);const _0x30bece=$gameTemp[_0x575e02(0x616)]();_0x4be541[_0x575e02(0x3b4)]=_0x4be541[_0x575e02(0x3b4)]||$gameMap[_0x575e02(0x224)](),$gameSystem['setEventIconDataKey'](_0x4be541[_0x575e02(0x3b4)],_0x4be541[_0x575e02(0x335)]||_0x30bece['eventId'](),_0x4be541[_0x575e02(0x13c)],_0x4be541[_0x575e02(0x447)],_0x4be541['IconBufferY'],_0x4be541[_0x575e02(0x48c)],![]);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x2f6),_0x4f3a3f=>{const _0x138624=_0x2dfc49;VisuMZ[_0x138624(0x50f)](_0x4f3a3f,_0x4f3a3f);const _0x2e741f=$gameTemp[_0x138624(0x616)]();_0x4f3a3f[_0x138624(0x3b4)]=_0x4f3a3f[_0x138624(0x3b4)]||$gameMap['mapId'](),$gameSystem[_0x138624(0x4f6)](_0x4f3a3f[_0x138624(0x3b4)],_0x4f3a3f[_0x138624(0x335)]||_0x2e741f['eventId'](),_0x4f3a3f['IconIndex'],_0x4f3a3f[_0x138624(0x447)],_0x4f3a3f['IconBufferY'],_0x4f3a3f['IconBlendMode'],!![]);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],'EventIconDelete',_0x488758=>{const _0x95402a=_0x2dfc49;VisuMZ[_0x95402a(0x50f)](_0x488758,_0x488758);const _0x4e4e7d=$gameTemp[_0x95402a(0x616)]();_0x488758[_0x95402a(0x3b4)]=_0x488758[_0x95402a(0x3b4)]||$gameMap[_0x95402a(0x224)](),$gameSystem[_0x95402a(0x1b9)](_0x488758['MapId'],_0x488758[_0x95402a(0x335)]||_0x4e4e7d[_0x95402a(0x574)]());}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],'EventIconRestore',_0x5e41e4=>{const _0xd5fcd7=_0x2dfc49;VisuMZ[_0xd5fcd7(0x50f)](_0x5e41e4,_0x5e41e4);const _0x3ceeb6=$gameTemp[_0xd5fcd7(0x616)]();_0x5e41e4[_0xd5fcd7(0x3b4)]=_0x5e41e4['MapId']||$gameMap[_0xd5fcd7(0x224)](),$gameSystem[_0xd5fcd7(0x1fd)](_0x5e41e4['MapId'],_0x5e41e4[_0xd5fcd7(0x335)]||_0x3ceeb6['eventId']());}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x27b),_0x3ae39e=>{const _0x33f4b6=_0x2dfc49;if($gameMap)for(const _0x2edf56 of $gameMap[_0x33f4b6(0x4fa)]()){_0x2edf56[_0x33f4b6(0x1f2)](),_0x2edf56[_0x33f4b6(0x43b)]();}if(SceneManager['isSceneMap']()){const _0x1efd7d=SceneManager[_0x33f4b6(0x35d)][_0x33f4b6(0x26b)];if(_0x1efd7d)_0x1efd7d[_0x33f4b6(0x540)]();}}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x1d9),_0x4b966f=>{const _0x501b60=_0x2dfc49;VisuMZ[_0x501b60(0x50f)](_0x4b966f,_0x4b966f);switch(_0x4b966f['Visibility']){case _0x501b60(0x434):$gameSystem[_0x501b60(0x252)](!![]);break;case _0x501b60(0x276):$gameSystem[_0x501b60(0x252)](![]);break;case _0x501b60(0x302):$gameSystem[_0x501b60(0x252)](!$gameSystem[_0x501b60(0x5d7)]());break;}}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x190),_0x32ef41=>{const _0x172365=_0x2dfc49;VisuMZ[_0x172365(0x50f)](_0x32ef41,_0x32ef41);const _0x35a6e9=$gameTemp['getLastPluginCommandInterpreter']();if(!$gameMap)return;const _0x46a6c2=$gameMap[_0x172365(0x2b5)](_0x32ef41['EventId']||_0x35a6e9['eventId']());if(_0x46a6c2)_0x46a6c2[_0x172365(0x29e)]();}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x473),_0x36d53d=>{const _0x3627f7=_0x2dfc49;VisuMZ[_0x3627f7(0x50f)](_0x36d53d,_0x36d53d);const _0x2d0873=$gameTemp[_0x3627f7(0x616)](),_0x453b2b=_0x36d53d[_0x3627f7(0x3b4)]||$gameMap['mapId'](),_0x51d012=_0x36d53d['EventId']||_0x2d0873[_0x3627f7(0x574)](),_0x294094=_0x36d53d['PosX']||0x0,_0x4a2f42=_0x36d53d[_0x3627f7(0x14e)]||0x0,_0x4d5f9d=_0x36d53d[_0x3627f7(0x4fb)]||0x2,_0xdbb2f4=((_0x36d53d[_0x3627f7(0x579)]||0x1)-0x1)['clamp'](0x0,0x13),_0x26e5cb=_0x36d53d['MoveRouteIndex']||0x0;$gameSystem[_0x3627f7(0x15a)](_0x453b2b,_0x51d012,_0x294094,_0x4a2f42,_0x4d5f9d,_0xdbb2f4,_0x26e5cb);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x399),_0x143137=>{const _0x24e2d2=_0x2dfc49;VisuMZ[_0x24e2d2(0x50f)](_0x143137,_0x143137);const _0x23c4c9=$gameTemp[_0x24e2d2(0x616)](),_0x7240b4=_0x143137[_0x24e2d2(0x3b4)]||$gameMap[_0x24e2d2(0x224)](),_0x4b886a=_0x143137[_0x24e2d2(0x335)]||_0x23c4c9[_0x24e2d2(0x574)]();$gameSystem[_0x24e2d2(0x25a)](_0x7240b4,_0x4b886a);}),VisuMZ['EventsMoveCore'][_0x2dfc49(0x16a)]=function(_0x3053ad,_0x133a90){const _0x44734e=_0x2dfc49;_0x133a90=_0x133a90||{},_0x3053ad['fadeDuration']={'fadeIn':_0x133a90[_0x44734e(0x1c1)]||0x0,'fadeOut':_0x133a90['fadeOutDuration']||0x0},_0x3053ad[_0x44734e(0x292)]={'x':_0x133a90[_0x44734e(0x3ca)]||0x0,'y':_0x133a90[_0x44734e(0x4e9)]||0x0},_0x3053ad[_0x44734e(0x2f7)]={'x':_0x133a90['endOffsetX']||0x0,'y':_0x133a90[_0x44734e(0x52c)]||0x0},_0x3053ad[_0x44734e(0x1e1)]={'x':_0x133a90['endScaleX']||0x0,'y':_0x133a90[_0x44734e(0x437)]||0x0},_0x3053ad[_0x44734e(0x577)]={'x':_0x133a90['startScaleX']||0x0,'y':_0x133a90['startScaleY']||0x0},_0x3053ad[_0x44734e(0x241)]={'start':_0x133a90[_0x44734e(0x25e)]||0x0,'end':_0x133a90[_0x44734e(0x13f)]||0x0},_0x3053ad['misc']={'arc':_0x133a90[_0x44734e(0x4df)]||0x0};},PluginManager[_0x2dfc49(0x204)](pluginData['name'],'MsgPopupPlayer',_0x5377e8=>{const _0x175b52=_0x2dfc49;if(!SceneManager[_0x175b52(0x468)]())return;if(!Imported[_0x175b52(0x305)]){$gameTemp[_0x175b52(0x15e)]()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+_0x175b52(0x32f));return;}VisuMZ[_0x175b52(0x50f)](_0x5377e8,_0x5377e8);const _0x828500={'text':_0x5377e8[_0x175b52(0x5b1)]||'','duration':Math[_0x175b52(0x196)](_0x5377e8['MsgDuration']||0x3c,0xc)},_0x25e4f0=_0x5377e8[_0x175b52(0x526)]||{};VisuMZ[_0x175b52(0x426)][_0x175b52(0x16a)](_0x828500,_0x25e4f0);const _0x2c1bdf=SceneManager['_scene']['_spriteset'];if(_0x2c1bdf){const _0xe026d3=$gamePlayer;_0x2c1bdf['createEventsMoveCoreMessagePopup'](_0xe026d3,_0x828500);}}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x216),_0x2fd364=>{const _0x3e8ed1=_0x2dfc49;if(!SceneManager[_0x3e8ed1(0x468)]())return;if(!Imported[_0x3e8ed1(0x305)]){$gameTemp[_0x3e8ed1(0x15e)]()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+_0x3e8ed1(0x32f));return;}VisuMZ[_0x3e8ed1(0x50f)](_0x2fd364,_0x2fd364);const _0x451aa2=_0x2fd364[_0x3e8ed1(0x5cb)]||0x0,_0x1e6d46={'text':_0x2fd364['MessageText']||'','duration':Math[_0x3e8ed1(0x196)](_0x2fd364['MsgDuration']||0x3c,0xc)},_0x55282d=_0x2fd364[_0x3e8ed1(0x526)]||{};VisuMZ[_0x3e8ed1(0x426)][_0x3e8ed1(0x16a)](_0x1e6d46,_0x55282d);const _0x19d448=SceneManager['_scene'][_0x3e8ed1(0x26b)];if(_0x19d448){const _0x56ccc6=$gamePlayer['followers']()[_0x3e8ed1(0x4b0)](_0x451aa2);_0x19d448[_0x3e8ed1(0x3f9)](_0x56ccc6,_0x1e6d46);}}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x1ea),_0xf85ced=>{const _0x267da3=_0x2dfc49;if(!SceneManager[_0x267da3(0x468)]())return;if(!Imported['VisuMZ_1_MessageCore']){$gameTemp[_0x267da3(0x15e)]()&&alert(_0x267da3(0x1b3)+_0x267da3(0x32f));return;}VisuMZ[_0x267da3(0x50f)](_0xf85ced,_0xf85ced);const _0xd39edb=$gameTemp[_0x267da3(0x616)](),_0x79c003=_0xf85ced[_0x267da3(0x335)]||(_0xd39edb?_0xd39edb[_0x267da3(0x574)]():0x1),_0x3a46b7={'text':_0xf85ced[_0x267da3(0x5b1)]||'','duration':Math[_0x267da3(0x196)](_0xf85ced[_0x267da3(0x59e)]||0x3c,0xc)},_0x239f49=_0xf85ced[_0x267da3(0x526)]||{};VisuMZ[_0x267da3(0x426)]['ApplyPopupExtraSettings'](_0x3a46b7,_0x239f49);const _0x31b66d=SceneManager[_0x267da3(0x35d)]['_spriteset'];if(_0x31b66d){const _0x281624=$gameMap[_0x267da3(0x2b5)](_0x79c003);_0x31b66d['createEventsMoveCoreMessagePopup'](_0x281624,_0x3a46b7);}}),PluginManager['registerCommand'](pluginData['name'],_0x2dfc49(0x289),_0x2a7298=>{const _0x579b30=_0x2dfc49;if(!SceneManager[_0x579b30(0x468)]())return;if(!Imported[_0x579b30(0x305)]){$gameTemp[_0x579b30(0x15e)]()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+'\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!');return;}VisuMZ[_0x579b30(0x50f)](_0x2a7298,_0x2a7298);const _0x32cde0={'text':_0x2a7298['MessageText']||'','duration':Math[_0x579b30(0x196)](_0x2a7298[_0x579b30(0x59e)]||0x3c,0xc),'tileCoordinates':{'x':Math[_0x579b30(0x256)](_0x2a7298[_0x579b30(0x13b)]||0x0),'y':Math[_0x579b30(0x256)](_0x2a7298[_0x579b30(0x2f0)]||0x0)}},_0x5e74ad=_0x2a7298[_0x579b30(0x526)]||{};VisuMZ[_0x579b30(0x426)][_0x579b30(0x16a)](_0x32cde0,_0x5e74ad);const _0x2b169c=SceneManager[_0x579b30(0x35d)]['_spriteset'];_0x2b169c&&_0x2b169c[_0x579b30(0x470)](_0x32cde0);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],'EventTimerExpireEvent',_0x36f931=>{const _0x5ea00c=_0x2dfc49;VisuMZ[_0x5ea00c(0x50f)](_0x36f931,_0x36f931);const _0x385622=_0x36f931[_0x5ea00c(0x4ab)];$gameTimer[_0x5ea00c(0x12d)](_0x385622);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x39e),_0x128efe=>{const _0x481bb6=_0x2dfc49;$gameTimer[_0x481bb6(0x12d)](0x0);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x44c),_0xf555d7=>{const _0x4f1498=_0x2dfc49;if(!$gameTimer[_0x4f1498(0x5b2)]())return;VisuMZ[_0x4f1498(0x50f)](_0xf555d7,_0xf555d7);let _0xa0016d=0x0;_0xa0016d+=_0xf555d7[_0x4f1498(0x2a0)],_0xa0016d+=_0xf555d7[_0x4f1498(0x4ba)]*0x3c,_0xa0016d+=_0xf555d7[_0x4f1498(0x501)]*0x3c*0x3c,_0xa0016d+=_0xf555d7[_0x4f1498(0x187)]*0x3c*0x3c*0x3c,$gameTimer[_0x4f1498(0x16f)](_0xa0016d);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],'EventTimerFramesSet',_0x2a6f94=>{const _0x114a2f=_0x2dfc49;if(!$gameTimer['isWorking']())return;VisuMZ[_0x114a2f(0x50f)](_0x2a6f94,_0x2a6f94);let _0x5800cb=0x0;_0x5800cb+=_0x2a6f94['Frames'],_0x5800cb+=_0x2a6f94[_0x114a2f(0x4ba)]*0x3c,_0x5800cb+=_0x2a6f94[_0x114a2f(0x501)]*0x3c*0x3c,_0x5800cb+=_0x2a6f94[_0x114a2f(0x187)]*0x3c*0x3c*0x3c,$gameTimer['setFrames'](_0x5800cb);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x5eb),_0x188b6c=>{if(!$gameTimer['isWorking']())return;$gameTimer['pause']();}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],'EventTimerResume',_0xbdbe10=>{const _0x255738=_0x2dfc49;if(!$gameTimer[_0x255738(0x5b2)]())return;$gameTimer['resume']();}),PluginManager['registerCommand'](pluginData['name'],_0x2dfc49(0x24d),_0x192f3a=>{const _0x48a734=_0x2dfc49;VisuMZ[_0x48a734(0x50f)](_0x192f3a,_0x192f3a);const _0x590662=_0x192f3a[_0x48a734(0x5a8)]||0x0;$gameTimer[_0x48a734(0x2ba)](_0x590662);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],'FollowerSetGlobalChase',_0x4f3d5e=>{const _0x58a4c1=_0x2dfc49;VisuMZ[_0x58a4c1(0x50f)](_0x4f3d5e,_0x4f3d5e);const _0x5341af=!_0x4f3d5e[_0x58a4c1(0x227)];$gameSystem[_0x58a4c1(0x299)](_0x5341af);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x44d),_0x198f52=>{const _0x53066a=_0x2dfc49;VisuMZ[_0x53066a(0x50f)](_0x198f52,_0x198f52);const _0x51115e=(_0x198f52['FollowerID']||0x0)-0x1,_0x477ac8=!_0x198f52['Chase'],_0x4c67d3=$gamePlayer['followers']()[_0x53066a(0x4b0)](_0x51115e);if(_0x4c67d3)_0x4c67d3['setChaseOff'](_0x477ac8);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x3d2),_0x42d935=>{const _0x30aa3a=_0x2dfc49;VisuMZ[_0x30aa3a(0x50f)](_0x42d935,_0x42d935);const _0x2f83f4=_0x42d935[_0x30aa3a(0x1af)];$gameSystem[_0x30aa3a(0x510)](_0x2f83f4);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x51b),_0x42ac09=>{const _0x1b1a2a=_0x2dfc49;VisuMZ[_0x1b1a2a(0x50f)](_0x42ac09,_0x42ac09),$gameSystem['setControlledFollowerID'](0x0),$gameSystem[_0x1b1a2a(0x299)](![]);for(const _0x1b3782 of $gamePlayer[_0x1b1a2a(0x548)]()[_0x1b1a2a(0x2b8)]){if(_0x1b3782)_0x1b3782[_0x1b1a2a(0x30a)](![]);}}),PluginManager['registerCommand'](pluginData['name'],'SwitchGetSelfSwitchABCD',_0x4de248=>{const _0x10674b=_0x2dfc49;VisuMZ['ConvertParams'](_0x4de248,_0x4de248);const _0x3b45b2=$gameTemp['getLastPluginCommandInterpreter']();_0x4de248['MapId']=_0x4de248[_0x10674b(0x3b4)]||$gameMap['mapId']();const _0x219530=[_0x4de248[_0x10674b(0x3b4)],_0x4de248[_0x10674b(0x335)]||_0x3b45b2['eventId'](),_0x4de248['Letter']],_0x16585f=_0x4de248[_0x10674b(0x5a9)],_0x508393=$gameSelfSwitches[_0x10674b(0x323)](_0x219530)||![];$gameSwitches[_0x10674b(0x220)](_0x16585f,_0x508393);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x3b2),_0x53988f=>{const _0x54662f=_0x2dfc49;VisuMZ['ConvertParams'](_0x53988f,_0x53988f);const _0x5efc18=$gameTemp[_0x54662f(0x616)]();_0x53988f[_0x54662f(0x3b4)]=_0x53988f[_0x54662f(0x3b4)]||$gameMap[_0x54662f(0x224)]();const _0x3324b4=[_0x53988f[_0x54662f(0x3b4)],_0x53988f[_0x54662f(0x335)]||_0x5efc18['eventId'](),'Self\x20Switch\x20%1'['format'](_0x53988f['SwitchId'])],_0x9af8cd=_0x53988f['TargetSwitchId'],_0x30a8b0=$gameSelfSwitches[_0x54662f(0x323)](_0x3324b4)||![];$gameSwitches[_0x54662f(0x220)](_0x9af8cd,_0x30a8b0);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x35e),_0x16ff6d=>{const _0x4bead8=_0x2dfc49;VisuMZ['ConvertParams'](_0x16ff6d,_0x16ff6d);const _0x3aa109=$gameTemp[_0x4bead8(0x616)]();_0x16ff6d[_0x4bead8(0x3b4)]=_0x16ff6d[_0x4bead8(0x3b4)]||$gameMap[_0x4bead8(0x224)]();const _0x513308=[_0x16ff6d[_0x4bead8(0x3b4)],_0x16ff6d[_0x4bead8(0x335)]||_0x3aa109[_0x4bead8(0x574)](),_0x4bead8(0x453)[_0x4bead8(0x286)](_0x16ff6d['VariableId'])],_0x4ebab1=_0x16ff6d['TargetVariableId'],_0x50976b=$gameSelfSwitches[_0x4bead8(0x323)](_0x513308)||![];$gameVariables[_0x4bead8(0x220)](_0x4ebab1,_0x50976b);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],'MorphEventTo',_0x5bf08f=>{const _0x5210e0=_0x2dfc49;VisuMZ[_0x5210e0(0x50f)](_0x5bf08f,_0x5bf08f);if(!$gameMap)return;const _0x5e4e62=$gameTemp[_0x5210e0(0x616)](),_0x99a1e0=_0x5bf08f[_0x5210e0(0x5dc)];_0x5bf08f[_0x5210e0(0x491)]=_0x5bf08f['Step1MapId']||$gameMap[_0x5210e0(0x224)](),_0x5bf08f[_0x5210e0(0x3e1)]=_0x5bf08f[_0x5210e0(0x3e1)]||$gameMap['mapId'](),_0x5bf08f[_0x5210e0(0x57c)]=_0x5bf08f[_0x5210e0(0x57c)][_0x5210e0(0x3dc)]()[_0x5210e0(0x415)]();if(!_0x99a1e0&&_0x5bf08f['Step1MapId']!==$gameMap['mapId']())return;if($gameMap[_0x5210e0(0x224)]()===_0x5bf08f['Step1MapId']){const _0x5693d8=$gameMap['event'](_0x5bf08f[_0x5210e0(0x269)]||_0x5e4e62[_0x5210e0(0x574)]());if(!_0x5693d8)return;_0x5bf08f[_0x5210e0(0x57c)]!==_0x5210e0(0x135)?_0x5693d8[_0x5210e0(0x255)](_0x5bf08f['TemplateName']):_0x5693d8[_0x5210e0(0x381)](_0x5bf08f[_0x5210e0(0x3e1)],_0x5bf08f[_0x5210e0(0x533)]||_0x5e4e62[_0x5210e0(0x574)]());}_0x99a1e0&&$gameSystem[_0x5210e0(0x45d)](_0x5bf08f[_0x5210e0(0x491)],_0x5bf08f['Step1EventId'],_0x5bf08f[_0x5210e0(0x57c)],_0x5bf08f['Step2MapId'],_0x5bf08f[_0x5210e0(0x533)]);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x3f4),_0x1088e2=>{const _0x3fc4b6=_0x2dfc49;VisuMZ[_0x3fc4b6(0x50f)](_0x1088e2,_0x1088e2);if(!$gameMap)return;const _0x20e243=$gameTemp[_0x3fc4b6(0x616)]();_0x1088e2['MapId']=_0x1088e2[_0x3fc4b6(0x3b4)]||$gameMap[_0x3fc4b6(0x224)]();if($gameMap[_0x3fc4b6(0x224)]()===_0x1088e2[_0x3fc4b6(0x3b4)]){const _0x533079=$gameMap[_0x3fc4b6(0x2b5)](_0x1088e2['EventId']||_0x20e243['eventId']());_0x533079[_0x3fc4b6(0x1bf)]();}_0x1088e2[_0x3fc4b6(0x46f)]&&$gameSystem[_0x3fc4b6(0x40e)](_0x1088e2['MapId'],_0x1088e2[_0x3fc4b6(0x335)]||_0x20e243[_0x3fc4b6(0x574)]());}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x5c4),_0x427875=>{const _0x3abbd8=_0x2dfc49;VisuMZ[_0x3abbd8(0x50f)](_0x427875,_0x427875),$gameSystem[_0x3abbd8(0x40d)]($gamePlayer,_0x427875['IconIndex'],_0x427875['IconBufferX'],_0x427875[_0x3abbd8(0x5d6)],_0x427875['IconBlendMode']);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x313),_0x162e65=>{const _0x247b15=_0x2dfc49;VisuMZ[_0x247b15(0x50f)](_0x162e65,_0x162e65),$gameSystem[_0x247b15(0x307)]($gamePlayer);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x1fc),_0xd6b295=>{const _0x106fa8=_0x2dfc49;VisuMZ[_0x106fa8(0x50f)](_0xd6b295,_0xd6b295),$gameSystem[_0x106fa8(0x3f6)](!_0xd6b295[_0x106fa8(0x5b7)]);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],'PlayerMovementDiagonal',_0x1c159c=>{const _0xdca2f8=_0x2dfc49;VisuMZ[_0xdca2f8(0x50f)](_0x1c159c,_0x1c159c),$gameSystem[_0xdca2f8(0x137)](_0x1c159c[_0xdca2f8(0x535)]);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x243),_0x20eac4=>{const _0x42899e=_0x2dfc49;VisuMZ['ConvertParams'](_0x20eac4,_0x20eac4);const _0x38af64=_0x20eac4[_0x42899e(0x3b4)]||$gameMap[_0x42899e(0x224)]();$gameSelfSwitches[_0x42899e(0x4ee)](_0x38af64);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x219),_0x365854=>{const _0x411f93=_0x2dfc49;VisuMZ['ConvertParams'](_0x365854,_0x365854);const _0x4af6b0=$gameTemp[_0x411f93(0x616)]();_0x365854[_0x411f93(0x3b4)]=_0x365854[_0x411f93(0x3b4)]||$gameMap[_0x411f93(0x224)]();const _0xeb0478=[_0x365854[_0x411f93(0x3b4)],_0x365854[_0x411f93(0x335)]||_0x4af6b0[_0x411f93(0x574)](),_0x365854[_0x411f93(0x5b9)]];switch(_0x365854[_0x411f93(0x57a)]){case'ON':$gameSelfSwitches[_0x411f93(0x220)](_0xeb0478,!![]);break;case _0x411f93(0x352):$gameSelfSwitches[_0x411f93(0x220)](_0xeb0478,![]);break;case _0x411f93(0x302):$gameSelfSwitches[_0x411f93(0x220)](_0xeb0478,!$gameSelfSwitches[_0x411f93(0x323)](_0xeb0478));break;}}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x59c),_0x143d28=>{const _0x290712=_0x2dfc49;VisuMZ[_0x290712(0x50f)](_0x143d28,_0x143d28);const _0x4f8635=$gameTemp['getLastPluginCommandInterpreter']();_0x143d28[_0x290712(0x3b4)]=_0x143d28['MapId']||$gameMap['mapId']();const _0x1d3d96=[_0x143d28['MapId'],_0x143d28[_0x290712(0x335)]||_0x4f8635[_0x290712(0x574)](),_0x290712(0x4cd)[_0x290712(0x286)](_0x143d28[_0x290712(0x1a4)])];switch(_0x143d28[_0x290712(0x57a)]){case'ON':$gameSelfSwitches[_0x290712(0x220)](_0x1d3d96,!![]);break;case'OFF':$gameSelfSwitches[_0x290712(0x220)](_0x1d3d96,![]);break;case _0x290712(0x302):$gameSelfSwitches[_0x290712(0x220)](_0x1d3d96,!$gameSelfSwitches[_0x290712(0x323)](_0x1d3d96));break;}}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x33b),_0x4375c0=>{const _0xaaf8d0=_0x2dfc49;VisuMZ[_0xaaf8d0(0x50f)](_0x4375c0,_0x4375c0);const _0x49291c=$gameTemp[_0xaaf8d0(0x616)]();_0x4375c0[_0xaaf8d0(0x3b4)]=_0x4375c0[_0xaaf8d0(0x3b4)]||$gameMap['mapId']();const _0x407cba=[_0x4375c0[_0xaaf8d0(0x3b4)],_0x4375c0[_0xaaf8d0(0x335)]||_0x49291c[_0xaaf8d0(0x574)](),'Self\x20Variable\x20%1'[_0xaaf8d0(0x286)](_0x4375c0['VariableId'])],_0xf2a26d=VisuMZ[_0xaaf8d0(0x1cb)]($gameSelfSwitches[_0xaaf8d0(0x323)](_0x407cba),_0x4375c0[_0xaaf8d0(0x57a)],_0x4375c0[_0xaaf8d0(0x5aa)]);$gameSelfSwitches[_0xaaf8d0(0x220)](_0x407cba,_0xf2a26d);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x455),_0x2e6033=>{const _0x553636=_0x2dfc49;VisuMZ[_0x553636(0x50f)](_0x2e6033,_0x2e6033);const _0x469e49=$gameTemp[_0x553636(0x616)](),_0x842c04={'template':_0x2e6033[_0x553636(0x57c)],'mapId':_0x2e6033[_0x553636(0x3b4)]||$gameMap[_0x553636(0x224)](),'eventId':_0x2e6033[_0x553636(0x335)]||_0x469e49[_0x553636(0x574)](),'x':_0x2e6033['PosX'],'y':_0x2e6033['PosY'],'spawnPreserved':_0x2e6033[_0x553636(0x45a)],'spawnEventId':$gameMap[_0x553636(0x47e)][_0x553636(0x4f1)]+0x3e8},_0x1843f5=_0x2e6033['SuccessSwitchId']||0x0;if(!VisuMZ['PreloadedMaps'][_0x842c04[_0x553636(0x224)]]&&_0x842c04['mapId']!==$gameMap[_0x553636(0x224)]()){let _0x5c47c2=_0x553636(0x2df)['format'](_0x842c04[_0x553636(0x224)]);_0x5c47c2+='of\x20Preloaded\x20Maps.\x0a\x0a',_0x5c47c2+=_0x553636(0x2af),_0x5c47c2+=_0x553636(0x148),_0x5c47c2+=_0x553636(0x300)['format'](_0x842c04[_0x553636(0x224)]),alert(_0x5c47c2);return;}const _0x461298=$gameMap[_0x553636(0x49f)](_0x842c04,_0x2e6033['Collision'],_0x2e6033[_0x553636(0x288)]);_0x1843f5&&$gameSwitches[_0x553636(0x220)](_0x1843f5,!!_0x461298);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x1e9),_0xeb0cca=>{const _0x21fa84=_0x2dfc49;VisuMZ[_0x21fa84(0x50f)](_0xeb0cca,_0xeb0cca);const _0x40ec8a=$gameTemp[_0x21fa84(0x616)](),_0x407207={'template':_0xeb0cca['TemplateName'],'mapId':_0xeb0cca['MapId']||$gameMap['mapId'](),'eventId':_0xeb0cca[_0x21fa84(0x335)]||_0x40ec8a[_0x21fa84(0x574)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0xeb0cca['Preserve'],'spawnEventId':$gameMap['_spawnedEvents']['length']+0x3e8},_0x5e4d6c=_0xeb0cca[_0x21fa84(0x374)]||0x0;if(!VisuMZ[_0x21fa84(0x5a5)][_0x407207[_0x21fa84(0x224)]]&&_0x407207['mapId']!==$gameMap[_0x21fa84(0x224)]()){let _0x3cc51='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'[_0x21fa84(0x286)](_0x407207[_0x21fa84(0x224)]);_0x3cc51+='of\x20Preloaded\x20Maps.\x0a\x0a',_0x3cc51+=_0x21fa84(0x2af),_0x3cc51+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x3cc51+=_0x21fa84(0x300)[_0x21fa84(0x286)](_0x407207[_0x21fa84(0x224)]),alert(_0x3cc51);return;}const _0x31e73b=$gameMap[_0x21fa84(0x5dd)](_0x407207,_0xeb0cca[_0x21fa84(0x22e)],_0xeb0cca['Collision'],_0xeb0cca['Passability']);_0x5e4d6c&&$gameSwitches[_0x21fa84(0x220)](_0x5e4d6c,!!_0x31e73b);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x545),_0x37d10d=>{const _0x283130=_0x2dfc49;VisuMZ[_0x283130(0x50f)](_0x37d10d,_0x37d10d);const _0x33a172=$gameTemp[_0x283130(0x616)](),_0x3af8de={'template':_0x37d10d[_0x283130(0x57c)],'mapId':_0x37d10d['MapId']||$gameMap[_0x283130(0x224)](),'eventId':_0x37d10d[_0x283130(0x335)]||_0x33a172[_0x283130(0x574)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x37d10d['Preserve'],'spawnEventId':$gameMap[_0x283130(0x47e)]['length']+0x3e8},_0x1b73ba=_0x37d10d[_0x283130(0x374)]||0x0;if(!VisuMZ[_0x283130(0x5a5)][_0x3af8de[_0x283130(0x224)]]&&_0x3af8de['mapId']!==$gameMap['mapId']()){let _0x243ed2=_0x283130(0x2df)[_0x283130(0x286)](_0x3af8de[_0x283130(0x224)]);_0x243ed2+=_0x283130(0x328),_0x243ed2+=_0x283130(0x2af),_0x243ed2+=_0x283130(0x148),_0x243ed2+=_0x283130(0x300)[_0x283130(0x286)](_0x3af8de[_0x283130(0x224)]),alert(_0x243ed2);return;}const _0x485b1f=$gameMap[_0x283130(0x5cf)](_0x3af8de,_0x37d10d[_0x283130(0x2b7)],_0x37d10d[_0x283130(0x407)],_0x37d10d[_0x283130(0x288)]);_0x1b73ba&&$gameSwitches[_0x283130(0x220)](_0x1b73ba,!!_0x485b1f);}),PluginManager['registerCommand'](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x462),_0x18b6ed=>{const _0x3e117b=_0x2dfc49;VisuMZ[_0x3e117b(0x50f)](_0x18b6ed,_0x18b6ed);const _0x484c9a=$gameTemp['getLastPluginCommandInterpreter']();$gameMap['despawnEventId'](_0x18b6ed[_0x3e117b(0x1e7)]||_0x484c9a[_0x3e117b(0x574)]());}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],_0x2dfc49(0x151),_0xb7b5b6=>{const _0x15cb3a=_0x2dfc49;VisuMZ['ConvertParams'](_0xb7b5b6,_0xb7b5b6);const _0x2e9240=_0xb7b5b6[_0x15cb3a(0x5f5)],_0x22d205=_0xb7b5b6[_0x15cb3a(0x14e)];$gameMap['despawnAtXY'](_0x2e9240,_0x22d205);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x49a),_0x2db7d2=>{const _0x1c5812=_0x2dfc49;VisuMZ[_0x1c5812(0x50f)](_0x2db7d2,_0x2db7d2),$gameMap[_0x1c5812(0x3b9)](_0x2db7d2['Region']);}),PluginManager[_0x2dfc49(0x204)](pluginData[_0x2dfc49(0x38f)],_0x2dfc49(0x4e8),_0x2ce45b=>{const _0x1da63d=_0x2dfc49;VisuMZ[_0x1da63d(0x50f)](_0x2ce45b,_0x2ce45b),$gameMap[_0x1da63d(0x3a1)](_0x2ce45b[_0x1da63d(0x2b7)]);}),PluginManager[_0x2dfc49(0x204)](pluginData['name'],'SpawnEventDespawnEverything',_0x4e7565=>{const _0x4cc139=_0x2dfc49;VisuMZ[_0x4cc139(0x50f)](_0x4e7565,_0x4e7565),$gameMap[_0x4cc139(0x5e0)]();}),VisuMZ['EventsMoveCore'][_0x2dfc49(0x304)]=Scene_Boot['prototype'][_0x2dfc49(0x203)],Scene_Boot[_0x2dfc49(0x380)][_0x2dfc49(0x203)]=function(){const _0x37d01a=_0x2dfc49;VisuMZ[_0x37d01a(0x426)][_0x37d01a(0x304)]['call'](this),this['process_VisuMZ_EventsMoveCore_LoadTemplateMaps'](),this[_0x37d01a(0x36b)]();if(VisuMZ[_0x37d01a(0x426)][_0x37d01a(0x55b)])VisuMZ['EventsMoveCore'][_0x37d01a(0x55b)]['initialize']();},VisuMZ[_0x2dfc49(0x5a5)]=[],VisuMZ['EventTemplates']={},Scene_Boot[_0x2dfc49(0x380)][_0x2dfc49(0x1bc)]=function(){const _0x2c8ecf=_0x2dfc49;if(DataManager[_0x2c8ecf(0x4e7)]()||DataManager[_0x2c8ecf(0x5af)]())return;const _0x4b57f8=VisuMZ[_0x2c8ecf(0x426)][_0x2c8ecf(0x4c8)][_0x2c8ecf(0x444)],_0x286953=_0x4b57f8[_0x2c8ecf(0x213)][_0x2c8ecf(0x1e6)](0x0);for(const _0x29443b of _0x4b57f8[_0x2c8ecf(0x51e)]){_0x29443b[_0x2c8ecf(0x61f)]=_0x29443b[_0x2c8ecf(0x61f)][_0x2c8ecf(0x3dc)]()[_0x2c8ecf(0x415)](),VisuMZ[_0x2c8ecf(0x214)][_0x29443b[_0x2c8ecf(0x61f)]]=_0x29443b;if(!_0x286953['includes'](_0x29443b['MapID']))_0x286953[_0x2c8ecf(0x546)](_0x29443b['MapID']);}for(const _0x1bfc57 of _0x286953){if(VisuMZ[_0x2c8ecf(0x5a5)][_0x1bfc57])continue;const _0x3c0221=_0x2c8ecf(0x4d9)[_0x2c8ecf(0x286)](_0x1bfc57[_0x2c8ecf(0x170)](0x3)),_0x803e8=_0x2c8ecf(0x143)[_0x2c8ecf(0x286)](_0x1bfc57);DataManager['loadDataFile'](_0x803e8,_0x3c0221),setTimeout(this[_0x2c8ecf(0x498)][_0x2c8ecf(0x1c9)](this,_0x1bfc57,_0x803e8),0x64);}},Scene_Boot[_0x2dfc49(0x380)][_0x2dfc49(0x498)]=function(_0xe56ea6,_0x153e9){const _0x124c59=_0x2dfc49;window[_0x153e9]?(VisuMZ[_0x124c59(0x5a5)][_0xe56ea6]=window[_0x153e9],window[_0x153e9]=undefined):setTimeout(this[_0x124c59(0x498)][_0x124c59(0x1c9)](this,_0xe56ea6,_0x153e9),0x64);},VisuMZ[_0x2dfc49(0x33a)]=[],VisuMZ[_0x2dfc49(0x30b)]=[],VisuMZ[_0x2dfc49(0x30f)]=[],VisuMZ[_0x2dfc49(0x134)]=[],VisuMZ['SelfVariables']=[],VisuMZ[_0x2dfc49(0x39b)]=[],Scene_Boot['prototype'][_0x2dfc49(0x36b)]=function(){const _0x2bc194=_0x2dfc49;for(let _0x170dce=0x1;_0x170dce<$dataSystem[_0x2bc194(0x558)]['length'];_0x170dce++){if($dataSystem['switches'][_0x170dce]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x2bc194(0x33a)][_0x2bc194(0x546)](_0x170dce);if($dataSystem[_0x2bc194(0x558)][_0x170dce][_0x2bc194(0x183)](/<SELF>/i))VisuMZ[_0x2bc194(0x30b)][_0x2bc194(0x546)](_0x170dce);if($dataSystem[_0x2bc194(0x558)][_0x170dce][_0x2bc194(0x183)](/<MAP>/i))VisuMZ[_0x2bc194(0x30f)][_0x2bc194(0x546)](_0x170dce);}for(let _0x1e4a37=0x1;_0x1e4a37<$dataSystem[_0x2bc194(0x3d4)]['length'];_0x1e4a37++){if($dataSystem[_0x2bc194(0x3d4)][_0x1e4a37][_0x2bc194(0x183)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x2bc194(0x134)][_0x2bc194(0x546)](_0x1e4a37);if($dataSystem[_0x2bc194(0x3d4)][_0x1e4a37][_0x2bc194(0x183)](/<SELF>/i))VisuMZ[_0x2bc194(0x248)][_0x2bc194(0x546)](_0x1e4a37);if($dataSystem[_0x2bc194(0x3d4)][_0x1e4a37][_0x2bc194(0x183)](/<MAP>/i))VisuMZ[_0x2bc194(0x39b)][_0x2bc194(0x546)](_0x1e4a37);}},VisuMZ['EventsMoveCore'][_0x2dfc49(0x55b)]={},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x55b)][_0x2dfc49(0x3fb)]=function(){const _0xcc692f=_0x2dfc49;this[_0xcc692f(0x2a2)]=new Game_CPCInterpreter(),this[_0xcc692f(0x274)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x55b)][_0x2dfc49(0x274)]=function(){const _0x1bd503=_0x2dfc49;this[_0x1bd503(0x466)]=[];for(const _0x4e2724 of $dataCommonEvents){if(!_0x4e2724)continue;VisuMZ['EventsMoveCore'][_0x1bd503(0x55b)]['loadCPC'](_0x4e2724);if(_0x4e2724['CPC'][_0x1bd503(0x4f1)]>0x0)this[_0x1bd503(0x466)][_0x1bd503(0x546)](_0x4e2724['id']);}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x55b)][_0x2dfc49(0x618)]=function(_0x5ead8b,_0x1020ca,_0x4aeaad){const _0x390898=_0x2dfc49;return this['_interpreter'][_0x390898(0x3c5)](_0x5ead8b,_0x1020ca),_0x4aeaad?this[_0x390898(0x2a2)]['executeCommonEvent'](_0x4aeaad):this[_0x390898(0x2a2)][_0x390898(0x344)](),this[_0x390898(0x2a2)]['_cpc'];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x55b)][_0x2dfc49(0x24b)]=function(_0x1b265c){const _0x1708df=_0x2dfc49;let _0x44e330=![];_0x1b265c[_0x1708df(0x4aa)]=[];for(const _0xb4337 of _0x1b265c[_0x1708df(0x377)]){if([0x6c,0x198][_0x1708df(0x480)](_0xb4337[_0x1708df(0x169)])){const _0x146852=_0xb4337[_0x1708df(0x231)][0x0];if(_0x146852['match'](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x44e330=!![];else _0x146852[_0x1708df(0x183)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x44e330=![]);}_0x44e330&&_0x1b265c[_0x1708df(0x4aa)][_0x1708df(0x546)](_0xb4337);}},getSelfSwitchValue=function(_0x3d6b47,_0x17e2ec,_0x1bcad9){const _0x35e022=_0x2dfc49;let _0x30b531=[_0x3d6b47,_0x17e2ec,'Self\x20Switch\x20%1'[_0x35e022(0x286)](_0x1bcad9)];return typeof _0x1bcad9==='string'&&(_0x30b531=[_0x3d6b47,_0x17e2ec,_0x1bcad9[_0x35e022(0x3dc)]()[_0x35e022(0x415)]()]),$gameSelfSwitches[_0x35e022(0x323)](_0x30b531);},getMapSwitchValue=function(_0x93752b,_0x38f4ec){const _0xdee8dd=_0x2dfc49;let _0x3e9229=[0x0,0x0,_0xdee8dd(0x503)['format'](_0x93752b,_0x38f4ec)];return $gameSelfSwitches['value'](_0x3e9229);},getMapVariableValue=function(_0x584e7b,_0x6559fb){const _0x20e8ef=_0x2dfc49;let _0x54638c=[0x0,0x0,_0x20e8ef(0x58f)[_0x20e8ef(0x286)](_0x584e7b,_0x6559fb)];return $gameSelfSwitches[_0x20e8ef(0x323)](_0x54638c);},getSelfVariableValue=function(_0x645af7,_0x3d4a85,_0x394b3b){const _0x1c1aa7=_0x2dfc49,_0x5b9a56=[_0x645af7,_0x3d4a85,_0x1c1aa7(0x453)[_0x1c1aa7(0x286)](_0x394b3b)];return $gameSelfSwitches['value'](_0x5b9a56);},setSelfSwitchValue=function(_0x4d6ffb,_0x1a3eeb,_0x2b5599,_0xc9b156){const _0x42d626=_0x2dfc49;let _0x29e29a=[_0x4d6ffb,_0x1a3eeb,_0x42d626(0x4cd)[_0x42d626(0x286)](_0x2b5599)];typeof _0x2b5599===_0x42d626(0x531)&&(_0x29e29a=[_0x4d6ffb,_0x1a3eeb,_0x2b5599['toUpperCase']()[_0x42d626(0x415)]()]),$gameSelfSwitches[_0x42d626(0x220)](_0x29e29a,_0xc9b156);},setSelfVariableValue=function(_0x51bdbf,_0x2016dd,_0x162742,_0x359121){const _0x35df81=_0x2dfc49,_0x23de86=[_0x51bdbf,_0x2016dd,_0x35df81(0x453)[_0x35df81(0x286)](_0x162742)];$gameSelfSwitches['setValue'](_0x23de86,_0x359121);},setMapSwitchValue=function(_0x57e0ee,_0x66690e,_0x19a954){const _0x44ee9f=_0x2dfc49;let _0x527d9f=[0x0,0x0,_0x44ee9f(0x503)[_0x44ee9f(0x286)](_0x57e0ee,_0x66690e)];$gameSelfSwitches[_0x44ee9f(0x220)](_0x527d9f,_0x19a954);},setMapVariableValue=function(_0x3c1911,_0x2a7127,_0x22ac7e){const _0x33f019=_0x2dfc49;let _0x59224e=[0x0,0x0,_0x33f019(0x58f)['format'](_0x3c1911,_0x2a7127)];$gameSelfSwitches[_0x33f019(0x220)](_0x59224e,_0x22ac7e);},DataManager[_0x2dfc49(0x1cc)]=function(_0x398fb7){const _0x20f0d3=_0x2dfc49;if(SceneManager[_0x20f0d3(0x35d)][_0x20f0d3(0x345)]===Scene_Debug)return![];return VisuMZ[_0x20f0d3(0x33a)][_0x20f0d3(0x480)](_0x398fb7);},DataManager[_0x2dfc49(0x366)]=function(_0x4a97cd){const _0x44adcf=_0x2dfc49;if(SceneManager[_0x44adcf(0x35d)][_0x44adcf(0x345)]===Scene_Debug)return![];return VisuMZ[_0x44adcf(0x134)]['includes'](_0x4a97cd);},DataManager[_0x2dfc49(0x5e8)]=function(_0x424f12){const _0xeed7dd=_0x2dfc49;if(SceneManager[_0xeed7dd(0x35d)][_0xeed7dd(0x345)]===Scene_Debug)return![];return VisuMZ['SelfSwitches']['includes'](_0x424f12);},DataManager[_0x2dfc49(0x48a)]=function(_0x47f527){const _0x14c5b8=_0x2dfc49;if(SceneManager[_0x14c5b8(0x35d)][_0x14c5b8(0x345)]===Scene_Debug)return![];return VisuMZ[_0x14c5b8(0x248)][_0x14c5b8(0x480)](_0x47f527);},DataManager[_0x2dfc49(0x5a4)]=function(_0x15bd7d){const _0x154128=_0x2dfc49;if(BattleManager[_0x154128(0x4e7)]())return![];return VisuMZ['MapSwitches'][_0x154128(0x480)](_0x15bd7d);},DataManager[_0x2dfc49(0x617)]=function(_0xf3ba0c){const _0x4185be=_0x2dfc49;if(BattleManager[_0x4185be(0x4e7)]())return![];return VisuMZ[_0x4185be(0x39b)][_0x4185be(0x480)](_0xf3ba0c);},ImageManager[_0x2dfc49(0x413)]=function(_0x1ab690){const _0x47bc57=_0x2dfc49;return _0x1ab690[_0x47bc57(0x183)](/\[INV(?:|ISIBLE)\]/i);},SceneManager[_0x2dfc49(0x41b)]=function(){const _0x14fd4b=_0x2dfc49;return this['_scene']&&this[_0x14fd4b(0x35d)][_0x14fd4b(0x345)]===Scene_Map;},SceneManager[_0x2dfc49(0x468)]=function(){const _0x348a3f=_0x2dfc49;return this[_0x348a3f(0x35d)]&&this['_scene']instanceof Scene_Map;},VisuMZ['EventsMoveCore'][_0x2dfc49(0x149)]=Game_Temp['prototype']['setDestination'],Game_Temp[_0x2dfc49(0x380)][_0x2dfc49(0x34a)]=function(_0xa05531,_0x24431a){const _0x3267e1=_0x2dfc49;if(this[_0x3267e1(0x285)](_0xa05531,_0x24431a))return;VisuMZ[_0x3267e1(0x426)][_0x3267e1(0x149)][_0x3267e1(0x3a5)](this,_0xa05531,_0x24431a);},Game_Temp[_0x2dfc49(0x380)]['isEventClickTriggered']=function(_0x165644,_0x3af16a){const _0x32b749=_0x2dfc49,_0x4097b0=$gameMap[_0x32b749(0x2d8)](_0x165644,_0x3af16a);for(const _0x143054 of _0x4097b0){if(_0x143054&&_0x143054[_0x32b749(0x494)]())return _0x143054[_0x32b749(0x37b)](),!![];}return TouchInput[_0x32b749(0x3ef)]()&&_0x4097b0[_0x32b749(0x4f1)]>0x0&&TouchInput['clear'](),![];},Game_Temp[_0x2dfc49(0x380)][_0x2dfc49(0x2b9)]=function(_0x1fd491){const _0x24a0e8=_0x2dfc49;this[_0x24a0e8(0x1da)]=_0x1fd491;},Game_Temp['prototype'][_0x2dfc49(0x616)]=function(){const _0x5c3421=_0x2dfc49;return this[_0x5c3421(0x1da)];},Game_Temp[_0x2dfc49(0x380)][_0x2dfc49(0x4b2)]=function(_0xcfca5e){const _0x542c0f=_0x2dfc49;this[_0x542c0f(0x1f1)]=_0xcfca5e;},Game_Temp[_0x2dfc49(0x380)]['clearSelfTarget']=function(){const _0x56ea68=_0x2dfc49;this[_0x56ea68(0x1f1)]=undefined;},Game_Temp[_0x2dfc49(0x380)][_0x2dfc49(0x391)]=function(){return this['_selfTarget'];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x177)]=Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)],Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)]=function(){const _0x20d156=_0x2dfc49;VisuMZ['EventsMoveCore']['Game_System_initialize'][_0x20d156(0x3a5)](this),this['initEventsMoveCore'](),this['initFollowerController']();},Game_System['prototype']['initEventsMoveCore']=function(){const _0x1fbfb0=_0x2dfc49;this[_0x1fbfb0(0x1b6)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this['_MapSpawnedEventData']=[],this['_PreservedEventMorphData']={},this[_0x1fbfb0(0x2cf)]={},this[_0x1fbfb0(0x4d5)]=![],this[_0x1fbfb0(0x4fc)]=_0x1fbfb0(0x211);},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x273)]=function(){const _0x1738f2=_0x2dfc49;if(this[_0x1738f2(0x1b6)]===undefined)this[_0x1738f2(0x39d)]();if(this[_0x1738f2(0x1b6)]['DashingEnable']===undefined)this[_0x1738f2(0x39d)]();return this[_0x1738f2(0x1b6)]['DashingEnable'];},Game_System['prototype'][_0x2dfc49(0x17d)]=function(_0x4be60e){const _0x2df375=_0x2dfc49;if(this[_0x2df375(0x1b6)]===undefined)this[_0x2df375(0x39d)]();if(this['_EventsMoveCoreSettings']['DashingEnable']===undefined)this[_0x2df375(0x39d)]();this['_EventsMoveCoreSettings'][_0x2df375(0x342)]=_0x4be60e;},Game_System['prototype'][_0x2dfc49(0x596)]=function(){const _0x270271=_0x2dfc49;if(this[_0x270271(0x1b6)]===undefined)this[_0x270271(0x39d)]();if(this[_0x270271(0x1b6)][_0x270271(0x525)]===undefined)this[_0x270271(0x39d)]();return this[_0x270271(0x1b6)]['EventAutoMovement'];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x3b0)]=function(_0x22cfd6){const _0x489dcb=_0x2dfc49;if(this['_EventsMoveCoreSettings']===undefined)this[_0x489dcb(0x39d)]();if(this[_0x489dcb(0x1b6)]['EventAutoMovement']===undefined)this[_0x489dcb(0x39d)]();this['_EventsMoveCoreSettings'][_0x489dcb(0x525)]=_0x22cfd6;},Game_System[_0x2dfc49(0x380)]['eventLabelsVisible']=function(){const _0x4a7ad8=_0x2dfc49;if(this[_0x4a7ad8(0x1b6)]===undefined)this[_0x4a7ad8(0x39d)]();if(this[_0x4a7ad8(0x1b6)]['VisibleEventLabels']===undefined)this['initEventsMoveCore']();return this[_0x4a7ad8(0x1b6)][_0x4a7ad8(0x1a5)];},Game_System['prototype'][_0x2dfc49(0x252)]=function(_0x73e778){const _0x335b1c=_0x2dfc49;if(this[_0x335b1c(0x1b6)]===undefined)this[_0x335b1c(0x39d)]();if(this[_0x335b1c(0x1b6)][_0x335b1c(0x1a5)]===undefined)this['initEventsMoveCore']();this[_0x335b1c(0x1b6)][_0x335b1c(0x1a5)]=_0x73e778;},Game_System['prototype']['isPlayerControlDisabled']=function(){const _0x2f467d=_0x2dfc49;return this['_DisablePlayerControl']===undefined&&(this[_0x2f467d(0x4d5)]=![]),this[_0x2f467d(0x4d5)];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x3f6)]=function(_0x52e1b3){const _0x476bc5=_0x2dfc49;this[_0x476bc5(0x4d5)]=_0x52e1b3;},Game_System['prototype'][_0x2dfc49(0x2e6)]=function(){const _0x1a2e5f=_0x2dfc49;return this[_0x1a2e5f(0x4fc)];},Game_System['prototype'][_0x2dfc49(0x137)]=function(_0xf42e31){const _0x4a70a0=_0x2dfc49;this[_0x4a70a0(0x4fc)]=String(_0xf42e31)[_0x4a70a0(0x4d8)]()[_0x4a70a0(0x415)]();},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x4db)]=function(_0x12aee5){const _0x4e1e7a=_0x2dfc49;if(this[_0x4e1e7a(0x4c3)]===undefined)this[_0x4e1e7a(0x39d)]();if(!_0x12aee5)return null;if(_0x12aee5===$gamePlayer)return this[_0x4e1e7a(0x4c3)][_0x4e1e7a(0x22c)];else{const _0x1e1e0a=VisuMZ[_0x4e1e7a(0x426)][_0x4e1e7a(0x4c8)],_0x550495=_0x4e1e7a(0x1d5)[_0x4e1e7a(0x286)](_0x12aee5['_mapId'],_0x12aee5['_eventId']);return this[_0x4e1e7a(0x4c3)][_0x550495]=this[_0x4e1e7a(0x4c3)][_0x550495]||{'iconIndex':0x0,'bufferX':_0x1e1e0a[_0x4e1e7a(0x56d)]['BufferX'],'bufferY':_0x1e1e0a[_0x4e1e7a(0x56d)][_0x4e1e7a(0x45c)],'blendMode':_0x1e1e0a[_0x4e1e7a(0x56d)][_0x4e1e7a(0x55d)]},this[_0x4e1e7a(0x4c3)][_0x550495];}},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x40d)]=function(_0x24d6c1,_0x440bb0,_0x630410,_0x5d6d5e,_0x135417){const _0x488e1e=_0x2dfc49;if(this['_EventIcons']===undefined)this[_0x488e1e(0x39d)]();const _0x5b6a10=_0x24d6c1===$gamePlayer?_0x488e1e(0x22c):'Map%1-Event%2'[_0x488e1e(0x286)](_0x24d6c1['_mapId'],_0x24d6c1['_eventId']);this['_EventIcons'][_0x5b6a10]={'iconIndex':_0x440bb0,'bufferX':_0x630410,'bufferY':_0x5d6d5e,'blendMode':_0x135417};},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x4f6)]=function(_0x115afe,_0x40eb10,_0x228406,_0x253dc6,_0xbd6935,_0x56635d,_0x14f03b){const _0x5838da=_0x2dfc49;if(this[_0x5838da(0x4c3)]===undefined)this[_0x5838da(0x39d)]();const _0x186630=_0x5838da(0x1d5)[_0x5838da(0x286)](_0x115afe,_0x40eb10);this['_EventIcons'][_0x186630]={'iconIndex':_0x228406,'forced':_0x14f03b,'bufferX':_0x253dc6,'bufferY':_0xbd6935,'blendMode':_0x56635d};},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x307)]=function(_0x5dfc73){const _0xc26424=_0x2dfc49;if(this[_0xc26424(0x4c3)]===undefined)this[_0xc26424(0x39d)]();if(!_0x5dfc73)return null;_0x5dfc73===$gamePlayer?delete this['_EventIcons']['Player']:this[_0xc26424(0x1b9)](_0x5dfc73[_0xc26424(0x3c6)],_0x5dfc73[_0xc26424(0x4d7)]);},Game_System[_0x2dfc49(0x380)]['deleteIconsOnEventsDataKey']=function(_0x27dad0,_0x1aaa7c){const _0x5479de=_0x2dfc49;if(this[_0x5479de(0x4c3)]===undefined)this[_0x5479de(0x39d)]();this[_0x5479de(0x4f6)](_0x27dad0,_0x1aaa7c,-0x1,0x0,0x0,0x0,![]);},Game_System['prototype'][_0x2dfc49(0x337)]=function(_0x648198){const _0x2e3dd1=_0x2dfc49;if(this[_0x2e3dd1(0x4c3)]===undefined)this[_0x2e3dd1(0x39d)]();if(!_0x648198)return null;_0x648198===$gamePlayer?delete this[_0x2e3dd1(0x4c3)][_0x2e3dd1(0x22c)]:this[_0x2e3dd1(0x27e)](_0x648198[_0x2e3dd1(0x3c6)],_0x648198[_0x2e3dd1(0x4d7)]);},Game_System['prototype']['resetIconsOnEventsDataKey']=function(_0x4bb62f,_0x293a04){const _0x330962=_0x2dfc49;if(this[_0x330962(0x4c3)]===undefined)this[_0x330962(0x39d)]();const _0x3dc240=_0x330962(0x1d5)[_0x330962(0x286)](_0x4bb62f,_0x293a04);if(this[_0x330962(0x4c3)][_0x3dc240]){if(this[_0x330962(0x4c3)][_0x3dc240][_0x330962(0x402)]<0x0)return;if(this[_0x330962(0x4c3)][_0x3dc240][_0x330962(0x5ad)])return;}delete this[_0x330962(0x4c3)][_0x3dc240];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x1fd)]=function(_0x110bd5,_0x27036f){const _0x28ffaf=_0x2dfc49;if(this['_EventIcons']===undefined)this[_0x28ffaf(0x39d)]();const _0x58fb55=_0x28ffaf(0x1d5)[_0x28ffaf(0x286)](_0x110bd5,_0x27036f);delete this[_0x28ffaf(0x4c3)][_0x58fb55];if(_0x110bd5!==$gameMap[_0x28ffaf(0x224)]())return;const _0x330eca=$gameMap['event'](_0x27036f);if(!_0x330eca)return;_0x330eca[_0x28ffaf(0x19a)]();},Game_System[_0x2dfc49(0x380)]['getSavedEventLocation']=function(_0x1c526e){const _0x31d615=_0x2dfc49;if(this[_0x31d615(0x2cf)]===undefined)this[_0x31d615(0x39d)]();if(!_0x1c526e)return null;const _0x1c3da4='Map%1-Event%2'[_0x31d615(0x286)](_0x1c526e[_0x31d615(0x3c6)],_0x1c526e[_0x31d615(0x4d7)]);return this[_0x31d615(0x2cf)][_0x1c3da4];},Game_System[_0x2dfc49(0x380)]['saveEventLocation']=function(_0x43e9dd){const _0x303c96=_0x2dfc49;if(this['_SavedEventLocations']===undefined)this[_0x303c96(0x39d)]();if(!_0x43e9dd)return;const _0x41e448=_0x303c96(0x1d5)[_0x303c96(0x286)](_0x43e9dd[_0x303c96(0x3c6)],_0x43e9dd[_0x303c96(0x4d7)]);this[_0x303c96(0x2cf)][_0x41e448]={'direction':_0x43e9dd[_0x303c96(0x163)](),'x':Math[_0x303c96(0x256)](_0x43e9dd['x']),'y':Math[_0x303c96(0x256)](_0x43e9dd['y']),'pageIndex':_0x43e9dd[_0x303c96(0x524)],'moveRouteIndex':_0x43e9dd['_moveRouteIndex']};},Game_System[_0x2dfc49(0x380)]['deleteSavedEventLocation']=function(_0x75147d){const _0x153b8a=_0x2dfc49;if(this[_0x153b8a(0x2cf)]===undefined)this[_0x153b8a(0x39d)]();if(!_0x75147d)return;this[_0x153b8a(0x25a)](_0x75147d['_mapId'],_0x75147d[_0x153b8a(0x4d7)]);},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x25a)]=function(_0x4f64ff,_0x2b0728){const _0x165574=_0x2dfc49;if(this[_0x165574(0x2cf)]===undefined)this[_0x165574(0x39d)]();const _0x5db9e8=_0x165574(0x1d5)[_0x165574(0x286)](_0x4f64ff,_0x2b0728);delete this['_SavedEventLocations'][_0x5db9e8];},Game_System['prototype'][_0x2dfc49(0x15a)]=function(_0x23ba46,_0x13e536,_0x30a696,_0x23af4f,_0x28f48b,_0xfd11f1,_0x1bfe4c){const _0x4e63b6=_0x2dfc49;if(this[_0x4e63b6(0x2cf)]===undefined)this['initEventsMoveCore']();const _0x209868=_0x4e63b6(0x1d5)[_0x4e63b6(0x286)](_0x23ba46,_0x13e536);this[_0x4e63b6(0x2cf)][_0x209868]={'direction':_0x28f48b,'x':Math[_0x4e63b6(0x256)](_0x30a696),'y':Math[_0x4e63b6(0x256)](_0x23af4f),'pageIndex':_0xfd11f1,'moveRouteIndex':_0x1bfe4c};},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x212)]=function(_0xe62d46){const _0x199506=_0x2dfc49;if(this[_0x199506(0x142)]===undefined)this['initEventsMoveCore']();if(!_0xe62d46)return;const _0x25d58e='Map%1-Event%2'[_0x199506(0x286)](_0xe62d46[_0x199506(0x3c6)],_0xe62d46[_0x199506(0x4d7)]);return this[_0x199506(0x142)][_0x25d58e];},Game_System['prototype']['savePreservedMorphEventDataKey']=function(_0x5d289d,_0xa0af95,_0x10030f,_0x47aca1,_0x4625b7){const _0x1de680=_0x2dfc49;if(this[_0x1de680(0x142)]===undefined)this['initEventsMoveCore']();const _0x528dbf=_0x1de680(0x1d5)[_0x1de680(0x286)](_0x5d289d,_0xa0af95);this[_0x1de680(0x142)][_0x528dbf]={'template':_0x10030f,'mapId':_0x47aca1,'eventId':_0x4625b7};},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x40e)]=function(_0x4fae8f,_0xbcdba7){const _0x466b92=_0x2dfc49;if(this[_0x466b92(0x142)]===undefined)this[_0x466b92(0x39d)]();const _0x380c9d=_0x466b92(0x1d5)['format'](_0x4fae8f,_0xbcdba7);delete this[_0x466b92(0x142)][_0x380c9d];},Game_System[_0x2dfc49(0x380)]['getMapSpawnedEventData']=function(_0x4b4fd1){const _0x53f61e=_0x2dfc49;if(this['_MapSpawnedEventData']===undefined)this[_0x53f61e(0x39d)]();return this[_0x53f61e(0x47c)][_0x4b4fd1]=this['_MapSpawnedEventData'][_0x4b4fd1]||[],this[_0x53f61e(0x47c)][_0x4b4fd1];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x4f8)]=function(_0x4e6ae6){const _0x16bee4=_0x2dfc49,_0x502ec1=this[_0x16bee4(0x567)](_0x4e6ae6);for(const _0x1a3a26 of _0x502ec1){if(!_0x1a3a26)continue;if(_0x1a3a26[_0x16bee4(0x1ec)])continue;const _0x11bd92=_0x502ec1[_0x16bee4(0x295)](_0x1a3a26);_0x502ec1[_0x11bd92]=null;}},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x3bc)]=function(){const _0x2d6f00=_0x2dfc49;this['_followerControlID']=0x0,this[_0x2d6f00(0x416)]=![];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x2fb)]=function(){const _0x195ed1=_0x2dfc49;if(this[_0x195ed1(0x268)]===undefined)this[_0x195ed1(0x3bc)]();return this[_0x195ed1(0x268)];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x510)]=function(_0x43ddba){const _0x3efd70=_0x2dfc49;if(this[_0x3efd70(0x268)]===undefined)this[_0x3efd70(0x3bc)]();this[_0x3efd70(0x268)]=_0x43ddba;;},VisuMZ[_0x2dfc49(0x426)]['Game_Interpreter_character']=Game_Interpreter[_0x2dfc49(0x380)][_0x2dfc49(0x448)],Game_Interpreter[_0x2dfc49(0x380)][_0x2dfc49(0x448)]=function(_0x475b4f){const _0x130707=_0x2dfc49;if(!$gameParty[_0x130707(0x1b5)]()&&_0x475b4f<0x0){let _0x5ca48f=$gameSystem[_0x130707(0x2fb)]();if(_0x5ca48f>0x0)return $gamePlayer[_0x130707(0x548)]()[_0x130707(0x4b0)](_0x5ca48f-0x1);}return VisuMZ['EventsMoveCore'][_0x130707(0x1f8)][_0x130707(0x3a5)](this,_0x475b4f);},Game_System[_0x2dfc49(0x380)]['isStopFollowerChasing']=function(){const _0x1c1a13=_0x2dfc49;if(this[_0x1c1a13(0x416)]===undefined)this[_0x1c1a13(0x3bc)]();return this[_0x1c1a13(0x416)];},Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x299)]=function(_0x2e89ec){const _0x554b3e=_0x2dfc49;if(this['_followerChaseOff']===undefined)this[_0x554b3e(0x3bc)]();this[_0x554b3e(0x416)]=_0x2e89ec;;},VisuMZ['EventsMoveCore'][_0x2dfc49(0x22b)]=Game_Followers['prototype'][_0x2dfc49(0x36e)],Game_Followers[_0x2dfc49(0x380)][_0x2dfc49(0x36e)]=function(){const _0x515a2f=_0x2dfc49;if($gameSystem['isStopFollowerChasing']())return;VisuMZ[_0x515a2f(0x426)][_0x515a2f(0x22b)][_0x515a2f(0x3a5)](this);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x543)]=Game_Timer[_0x2dfc49(0x380)]['initialize'],Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)]=function(){const _0x2f4d41=_0x2dfc49;VisuMZ[_0x2f4d41(0x426)][_0x2f4d41(0x543)][_0x2f4d41(0x3a5)](this),this[_0x2f4d41(0x39d)]();},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x39d)]=function(){const _0x227bcc=_0x2dfc49;this[_0x227bcc(0x456)]=![],this[_0x227bcc(0x472)]=-0x1,this['_expireCommonEvent']=0x0;},Game_Timer['prototype'][_0x2dfc49(0x322)]=function(_0x1006d2){const _0x5104b6=_0x2dfc49;if(!_0x1006d2)return;if(!this[_0x5104b6(0x181)])return;if(this[_0x5104b6(0x456)])return;if(this[_0x5104b6(0x4f9)]<=0x0)return;if(this[_0x5104b6(0x472)]===undefined)this[_0x5104b6(0x39d)]();this[_0x5104b6(0x4f9)]+=this[_0x5104b6(0x472)],this[_0x5104b6(0x4f9)]<=0x0&&this[_0x5104b6(0x37f)]();},VisuMZ['EventsMoveCore'][_0x2dfc49(0x32b)]=Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x296)],Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x296)]=function(_0x363e75){const _0x278699=_0x2dfc49;VisuMZ[_0x278699(0x426)][_0x278699(0x32b)][_0x278699(0x3a5)](this,_0x363e75);if(this['_paused']===undefined)this[_0x278699(0x39d)]();this['_paused']=![];},VisuMZ[_0x2dfc49(0x426)]['Game_Timer_stop']=Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x298)],Game_Timer[_0x2dfc49(0x380)]['stop']=function(){const _0x2d46f2=_0x2dfc49;VisuMZ[_0x2d46f2(0x426)][_0x2d46f2(0x23a)][_0x2d46f2(0x3a5)](this);if(this[_0x2d46f2(0x456)]===undefined)this['initEventsMoveCore']();this[_0x2d46f2(0x456)]=![];},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x3d7)]=function(){const _0x227c85=_0x2dfc49;if(this[_0x227c85(0x4f9)]<=0x0)return;this[_0x227c85(0x456)]=!![],this['_working']=!![];},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x222)]=function(){const _0x3bb3c2=_0x2dfc49;if(this[_0x3bb3c2(0x4f9)]<=0x0)return;this[_0x3bb3c2(0x456)]=![],this[_0x3bb3c2(0x181)]=!![];},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x16f)]=function(_0x2dbb2a){const _0x1264bf=_0x2dfc49;this[_0x1264bf(0x4f9)]=this[_0x1264bf(0x4f9)]||0x0,this[_0x1264bf(0x4f9)]+=_0x2dbb2a,this[_0x1264bf(0x181)]=!![],this[_0x1264bf(0x4f9)]=Math[_0x1264bf(0x196)](0x1,this[_0x1264bf(0x4f9)]);},Game_Timer[_0x2dfc49(0x380)]['setFrames']=function(_0x59022c){const _0x1ef9de=_0x2dfc49;this['_frames']=this[_0x1ef9de(0x4f9)]||0x0,this[_0x1ef9de(0x4f9)]=_0x59022c,this['_working']=!![],this[_0x1ef9de(0x4f9)]=Math[_0x1ef9de(0x196)](0x1,this[_0x1ef9de(0x4f9)]);},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x2ba)]=function(_0x4df6cb){const _0x3106e6=_0x2dfc49;this[_0x3106e6(0x472)]=_0x4df6cb,this[_0x3106e6(0x181)]=!![],_0x4df6cb>0x0&&(this[_0x3106e6(0x4f9)]=Math[_0x3106e6(0x196)](this[_0x3106e6(0x4f9)],0x1));},Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x12d)]=function(_0x44aaa7){const _0x327d67=_0x2dfc49;if(this['_expireCommonEvent']===undefined)this[_0x327d67(0x39d)]();this[_0x327d67(0x2cd)]=_0x44aaa7;},VisuMZ[_0x2dfc49(0x426)]['Game_Timer_onExpire']=Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x37f)],Game_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x37f)]=function(){const _0xb12f15=_0x2dfc49;if(this[_0xb12f15(0x2cd)]===undefined)this[_0xb12f15(0x39d)]();this['_expireCommonEvent']?$gameTemp[_0xb12f15(0x258)](this[_0xb12f15(0x2cd)]):VisuMZ[_0xb12f15(0x426)][_0xb12f15(0x5df)][_0xb12f15(0x3a5)](this);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x590)]=Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x47b)],Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x47b)]=function(_0xae1d9f){const _0x136125=_0x2dfc49;VisuMZ['EventsMoveCore']['Game_Message_add'][_0x136125(0x3a5)](this,_0xae1d9f),this['_selfEvent']=$gameTemp[_0x136125(0x391)]();},Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x3db)]=function(){const _0x154039=_0x2dfc49;$gameTemp[_0x154039(0x4b2)](this[_0x154039(0x2fd)]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2d6)]=Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x323)],Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x323)]=function(_0xd89b8c){const _0x214fbf=_0x2dfc49;if(DataManager[_0x214fbf(0x1cc)](_0xd89b8c))return!!this[_0x214fbf(0x383)](_0xd89b8c);else{if(DataManager[_0x214fbf(0x5e8)](_0xd89b8c))return!!this[_0x214fbf(0x528)](_0xd89b8c);else return DataManager[_0x214fbf(0x5a4)](_0xd89b8c)?!!this[_0x214fbf(0x5c2)](_0xd89b8c):VisuMZ[_0x214fbf(0x426)][_0x214fbf(0x2d6)][_0x214fbf(0x3a5)](this,_0xd89b8c);}},Game_Switches[_0x2dfc49(0x3e3)]={},Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x383)]=function(_0x5d430d){const _0x301f49=_0x2dfc49;if(!Game_Switches[_0x301f49(0x3e3)][_0x5d430d]){$dataSystem['switches'][_0x5d430d]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0xa06b05=_0x301f49(0x3d3)[_0x301f49(0x286)](String(RegExp['$1']));Game_Switches[_0x301f49(0x3e3)][_0x5d430d]=new Function(_0x301f49(0x3f2),_0xa06b05);}const _0x279787=$gameTemp[_0x301f49(0x391)]()||this;return Game_Switches['advancedFunc'][_0x5d430d][_0x301f49(0x3a5)](_0x279787,_0x5d430d);},Game_Switches['prototype'][_0x2dfc49(0x528)]=function(_0x49c9dd){const _0x570f33=_0x2dfc49,_0x3f3503=$gameTemp['getSelfTarget']()||this;if(_0x3f3503[_0x570f33(0x345)]!==Game_Event)return VisuMZ['EventsMoveCore'][_0x570f33(0x2d6)][_0x570f33(0x3a5)](this,_0x49c9dd);else{const _0x798afc=[_0x3f3503[_0x570f33(0x3c6)],_0x3f3503[_0x570f33(0x4d7)],_0x570f33(0x4cd)[_0x570f33(0x286)](_0x49c9dd)];return $gameSelfSwitches[_0x570f33(0x323)](_0x798afc);}},Game_Switches['prototype']['mapValue']=function(_0x59badd){const _0x56dd0c=_0x2dfc49,_0x5776c5=$gameMap?$gameMap[_0x56dd0c(0x224)]():0x0,_0x47a32a=[0x0,0x0,_0x56dd0c(0x503)[_0x56dd0c(0x286)](_0x5776c5,_0x59badd)];return $gameSelfSwitches[_0x56dd0c(0x323)](_0x47a32a);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x4c7)]=Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x220)],Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x220)]=function(_0x5248e3,_0x180fb2){const _0xc34d41=_0x2dfc49;if(DataManager[_0xc34d41(0x5e8)](_0x5248e3))this[_0xc34d41(0x58b)](_0x5248e3,_0x180fb2);else DataManager['isMapSwitch'](_0x5248e3)?this['setMapValue'](_0x5248e3,_0x180fb2):VisuMZ[_0xc34d41(0x426)][_0xc34d41(0x4c7)]['call'](this,_0x5248e3,_0x180fb2);},Game_Switches[_0x2dfc49(0x380)][_0x2dfc49(0x58b)]=function(_0x4fa1cd,_0x2dcf43){const _0x50792f=_0x2dfc49,_0x4c8e59=$gameTemp[_0x50792f(0x391)]()||this;if(_0x4c8e59[_0x50792f(0x345)]!==Game_Event)VisuMZ[_0x50792f(0x426)][_0x50792f(0x4c7)][_0x50792f(0x3a5)](this,_0x4fa1cd,_0x2dcf43);else{const _0x1d04bd=[_0x4c8e59['_mapId'],_0x4c8e59['_eventId'],'Self\x20Switch\x20%1'[_0x50792f(0x286)](_0x4fa1cd)];$gameSelfSwitches[_0x50792f(0x220)](_0x1d04bd,_0x2dcf43);}},Game_Switches['prototype'][_0x2dfc49(0x175)]=function(_0x2f1bbd,_0x53506b){const _0x2d5f40=_0x2dfc49,_0x199e27=$gameMap?$gameMap[_0x2d5f40(0x224)]():0x0,_0x5a876c=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x2d5f40(0x286)](_0x199e27,_0x2f1bbd)];return $gameSelfSwitches[_0x2d5f40(0x220)](_0x5a876c,_0x53506b);},VisuMZ[_0x2dfc49(0x426)]['Game_Variables_value']=Game_Variables[_0x2dfc49(0x380)]['value'],Game_Variables['prototype'][_0x2dfc49(0x323)]=function(_0x44fbd5){const _0x24e9c2=_0x2dfc49;if(DataManager['isAdvancedVariable'](_0x44fbd5))return this['advancedValue'](_0x44fbd5);else{if(DataManager[_0x24e9c2(0x48a)](_0x44fbd5))return this[_0x24e9c2(0x528)](_0x44fbd5);else return DataManager[_0x24e9c2(0x617)](_0x44fbd5)?this[_0x24e9c2(0x5c2)](_0x44fbd5):VisuMZ[_0x24e9c2(0x426)][_0x24e9c2(0x441)][_0x24e9c2(0x3a5)](this,_0x44fbd5);}},Game_Variables['advancedFunc']={},Game_Variables[_0x2dfc49(0x380)][_0x2dfc49(0x383)]=function(_0x2d9612){const _0x465df1=_0x2dfc49;if(!Game_Variables['advancedFunc'][_0x2d9612]){$dataSystem[_0x465df1(0x3d4)][_0x2d9612]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x12bbad='return\x20%1'['format'](String(RegExp['$1']));Game_Variables[_0x465df1(0x3e3)][_0x2d9612]=new Function(_0x465df1(0x45b),_0x12bbad);}const _0x31a690=$gameTemp[_0x465df1(0x391)]()||this;return Game_Variables['advancedFunc'][_0x2d9612]['call'](_0x31a690,_0x2d9612);},Game_Variables[_0x2dfc49(0x380)][_0x2dfc49(0x528)]=function(_0x2a3f9d){const _0x5cb2a9=_0x2dfc49,_0x40c4b4=$gameTemp['getSelfTarget']()||this;if(_0x40c4b4[_0x5cb2a9(0x345)]!==Game_Event)return VisuMZ['EventsMoveCore'][_0x5cb2a9(0x441)][_0x5cb2a9(0x3a5)](this,_0x2a3f9d);else{const _0x5f59e9=[_0x40c4b4[_0x5cb2a9(0x3c6)],_0x40c4b4['_eventId'],_0x5cb2a9(0x453)[_0x5cb2a9(0x286)](_0x2a3f9d)];return $gameSelfSwitches[_0x5cb2a9(0x323)](_0x5f59e9);}},Game_Variables[_0x2dfc49(0x380)]['mapValue']=function(_0x47ec92){const _0x1d477e=_0x2dfc49,_0x246bb7=$gameMap?$gameMap['mapId']():0x0,_0x22cf4c=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x246bb7,_0x47ec92)];return $gameSelfSwitches[_0x1d477e(0x323)](_0x22cf4c)||0x0;},VisuMZ[_0x2dfc49(0x426)]['Game_Variables_setValue']=Game_Variables[_0x2dfc49(0x380)][_0x2dfc49(0x220)],Game_Variables[_0x2dfc49(0x380)][_0x2dfc49(0x220)]=function(_0x4916f4,_0x9c5171){const _0x371882=_0x2dfc49;if(DataManager[_0x371882(0x48a)](_0x4916f4))this['setSelfValue'](_0x4916f4,_0x9c5171);else DataManager[_0x371882(0x617)](_0x4916f4)?this[_0x371882(0x175)](_0x4916f4,_0x9c5171):VisuMZ[_0x371882(0x426)][_0x371882(0x5fd)]['call'](this,_0x4916f4,_0x9c5171);},Game_Variables['prototype'][_0x2dfc49(0x58b)]=function(_0x115f23,_0x399e8d){const _0x4cffc6=_0x2dfc49,_0x49f961=$gameTemp[_0x4cffc6(0x391)]()||this;if(_0x49f961[_0x4cffc6(0x345)]!==Game_Event)VisuMZ[_0x4cffc6(0x426)][_0x4cffc6(0x5fd)][_0x4cffc6(0x3a5)](this,_0x115f23,_0x399e8d);else{const _0x1459e9=[_0x49f961[_0x4cffc6(0x3c6)],_0x49f961[_0x4cffc6(0x4d7)],_0x4cffc6(0x453)[_0x4cffc6(0x286)](_0x115f23)];$gameSelfSwitches['setValue'](_0x1459e9,_0x399e8d);}},Game_Variables['prototype']['setMapValue']=function(_0x373afd,_0x15cc3f){const _0x5c512d=_0x2dfc49,_0x1d6bcf=$gameMap?$gameMap[_0x5c512d(0x224)]():0x0,_0x448952=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x1d6bcf,_0x373afd)];$gameSelfSwitches[_0x5c512d(0x220)](_0x448952,_0x15cc3f);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x158)]=Game_SelfSwitches['prototype'][_0x2dfc49(0x323)],Game_SelfSwitches[_0x2dfc49(0x380)][_0x2dfc49(0x323)]=function(_0x4b6650){const _0x160295=_0x2dfc49;if(_0x4b6650[0x2][_0x160295(0x183)](/(?:SELF|MAP)/i))return this[_0x160295(0x528)](_0x4b6650);else{return VisuMZ[_0x160295(0x426)][_0x160295(0x158)]['call'](this,_0x4b6650);;}},Game_SelfSwitches[_0x2dfc49(0x380)][_0x2dfc49(0x528)]=function(_0xbdabe1){const _0x85e8ab=_0x2dfc49;return _0xbdabe1[0x2][_0x85e8ab(0x183)](/VAR/i)?this[_0x85e8ab(0x2b8)][_0xbdabe1]||0x0:!!this['_data'][_0xbdabe1];},VisuMZ['EventsMoveCore']['Game_SelfSwitches_setValue']=Game_SelfSwitches[_0x2dfc49(0x380)][_0x2dfc49(0x220)],Game_SelfSwitches[_0x2dfc49(0x380)]['setValue']=function(_0x14e117,_0x12a54c){const _0x51be8a=_0x2dfc49;_0x14e117[0x2][_0x51be8a(0x183)](/(?:SELF|MAP)/i)?this[_0x51be8a(0x58b)](_0x14e117,_0x12a54c):VisuMZ[_0x51be8a(0x426)][_0x51be8a(0x3b6)][_0x51be8a(0x3a5)](this,_0x14e117,_0x12a54c);},Game_SelfSwitches['prototype'][_0x2dfc49(0x58b)]=function(_0x2244f9,_0x59e4b5){const _0x338635=_0x2dfc49;this['_data'][_0x2244f9]=_0x2244f9[0x2][_0x338635(0x183)](/VAR/i)?_0x59e4b5:!!_0x59e4b5,this[_0x338635(0x145)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x238)]=Scene_Map['prototype'][_0x2dfc49(0x2d7)],Scene_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2d7)]=function(){const _0x5d348a=_0x2dfc49;$gameMap[_0x5d348a(0x2d3)](),VisuMZ[_0x5d348a(0x426)][_0x5d348a(0x238)][_0x5d348a(0x3a5)](this);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2d3)]=function(){const _0x520a7a=_0x2dfc49;if(this[_0x520a7a(0x1a2)]===this[_0x520a7a(0x224)]())return;this['_lastSesetExitSelfSwitchesMapId']=this['mapId'](),this['_eventCache']=undefined;const _0x547746=this[_0x520a7a(0x4fa)]();for(const _0x5d5596 of _0x547746){if(_0x5d5596)$gameSelfSwitches['resetSelfSwitchesForEvent'](_0x5d5596);}},Game_SelfSwitches[_0x2dfc49(0x380)]['resetSelfSwitchesForEvent']=function(_0x477bdf){const _0x525c16=_0x2dfc49;if(!_0x477bdf)return;if(!_0x477bdf[_0x525c16(0x2b5)]())return;const _0x1af544=_0x477bdf[_0x525c16(0x2b5)]()[_0x525c16(0x60c)]||'';if(_0x1af544['match'](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x24eade='%1,%2,'[_0x525c16(0x286)]($gameMap[_0x525c16(0x3c6)],_0x477bdf[_0x525c16(0x4d7)]),_0x3a77cd=Object[_0x525c16(0x1ab)](this[_0x525c16(0x2b8)])[_0x525c16(0x291)](_0x1ab354=>_0x1ab354[_0x525c16(0x435)](_0x24eade));while(_0x3a77cd[_0x525c16(0x4f1)]>0x0){const _0x5dc497=_0x3a77cd[_0x525c16(0x1d1)]();delete this['_data'][_0x5dc497];}}},Game_SelfSwitches[_0x2dfc49(0x380)][_0x2dfc49(0x4ee)]=function(_0x36b737){const _0x4b5123=_0x2dfc49,_0xc27c96=_0x4b5123(0x1dc)[_0x4b5123(0x286)]($gameMap[_0x4b5123(0x3c6)]),_0x5eac09=Object[_0x4b5123(0x1ab)](this[_0x4b5123(0x2b8)])['filter'](_0x4cab95=>_0x4cab95[_0x4b5123(0x435)](_0xc27c96));while(_0x5eac09[_0x4b5123(0x4f1)]>0x0){const _0xc9ba13=_0x5eac09[_0x4b5123(0x1d1)]();delete this[_0x4b5123(0x2b8)][_0xc9ba13];}_0x36b737===$gameMap[_0x4b5123(0x224)]()&&$gameMap[_0x4b5123(0x32c)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x392)]=Game_Enemy['prototype'][_0x2dfc49(0x1de)],Game_Enemy[_0x2dfc49(0x380)][_0x2dfc49(0x1de)]=function(_0x40a37b){const _0x30f6e3=_0x2dfc49;$gameTemp[_0x30f6e3(0x4b2)](this);const _0x19d2af=VisuMZ['EventsMoveCore'][_0x30f6e3(0x392)][_0x30f6e3(0x3a5)](this,_0x40a37b);return $gameTemp[_0x30f6e3(0x458)](),_0x19d2af;},VisuMZ[_0x2dfc49(0x426)]['Game_Party_hasEncounterHalf']=Game_Party[_0x2dfc49(0x380)][_0x2dfc49(0x51c)],Game_Party[_0x2dfc49(0x380)][_0x2dfc49(0x51c)]=function(){const _0x208160=_0x2dfc49;if(this[_0x208160(0x376)]())return!![];return VisuMZ[_0x208160(0x426)][_0x208160(0x247)][_0x208160(0x3a5)](this);},Game_Party['prototype'][_0x2dfc49(0x376)]=function(){const _0x2e2849=_0x2dfc49;if(this[_0x2e2849(0x197)])return![];return $isTileEncounterHalf($gamePlayer['x'],$gamePlayer['y']);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x3ee)]=Game_Party[_0x2dfc49(0x380)][_0x2dfc49(0x19b)],Game_Party[_0x2dfc49(0x380)]['hasEncounterNone']=function(){const _0x4275ca=_0x2dfc49;if(this[_0x4275ca(0x3a4)]())return!![];return VisuMZ[_0x4275ca(0x426)][_0x4275ca(0x3ee)][_0x4275ca(0x3a5)](this);},Game_Party[_0x2dfc49(0x380)]['isPlayerWithinEncounterNoneEvents']=function(){const _0x82ea6c=_0x2dfc49;if(this[_0x82ea6c(0x197)])return![];return $isTileEncounterNone($gamePlayer['x'],$gamePlayer['y']);};var $isTileEncounterHalf=function(_0x534c09,_0xbb62c8){const _0xa7dd38=_0x2dfc49;if(!$gameMap)return![];_0x534c09=Math[_0xa7dd38(0x256)](_0x534c09||0x0),_0xbb62c8=Math[_0xa7dd38(0x256)](_0xbb62c8||0x0);const _0x31a968=$gameMap['events']();for(const _0x500a4a of _0x31a968){if(!_0x500a4a)continue;if(_0x500a4a[_0xa7dd38(0x271)])continue;const _0x47e54c=_0x500a4a[_0xa7dd38(0x18b)](!![]),_0x27c874=_0x500a4a[_0xa7dd38(0x553)](!![]);if($gameMap[_0xa7dd38(0x35a)](_0x534c09,_0xbb62c8,_0x500a4a,_0x47e54c,_0x27c874))return!![];}return![];},$isTileEncounterNone=function(_0x568749,_0xbff510){const _0x2d84c3=_0x2dfc49;if(!$gameMap)return![];_0x568749=Math[_0x2d84c3(0x256)](_0x568749||0x0),_0xbff510=Math[_0x2d84c3(0x256)](_0xbff510||0x0);const _0x19148c=$gameMap[_0x2d84c3(0x4fa)]();for(const _0x8c4f5b of _0x19148c){if(!_0x8c4f5b)continue;if(_0x8c4f5b[_0x2d84c3(0x271)])continue;const _0x491d71=_0x8c4f5b[_0x2d84c3(0x18b)](![]),_0x543f4f=_0x8c4f5b[_0x2d84c3(0x553)](![]);if($gameMap[_0x2d84c3(0x35a)](_0x568749,_0xbff510,_0x8c4f5b,_0x491d71,_0x543f4f))return!![];}return![];};VisuMZ['EventsMoveCore'][_0x2dfc49(0x5c7)]=Game_Troop[_0x2dfc49(0x380)][_0x2dfc49(0x333)],Game_Troop[_0x2dfc49(0x380)]['meetsConditions']=function(_0x1a20fd){const _0x314e42=_0x2dfc49;$gameTemp['registerSelfTarget'](this);const _0x2d8b4f=VisuMZ[_0x314e42(0x426)][_0x314e42(0x5c7)][_0x314e42(0x3a5)](this,_0x1a20fd);return $gameTemp['clearSelfTarget'](),_0x2d8b4f;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x194)]=Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x3c5)],Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x3c5)]=function(_0x48f61a){const _0x135503=_0x2dfc49;this['removeTemporaryMapSpawnedEvents'](_0x48f61a),this[_0x135503(0x1c8)](),VisuMZ[_0x135503(0x426)]['Game_Map_setup'][_0x135503(0x3a5)](this,_0x48f61a),this[_0x135503(0x1c8)](),this['setupDiagonalSupport'](),this[_0x135503(0x171)](),this[_0x135503(0x4a6)](),this[_0x135503(0x388)](),this[_0x135503(0x4d2)](),this[_0x135503(0x24a)](),this[_0x135503(0x21b)](),this[_0x135503(0x2fe)](),this[_0x135503(0x1c8)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x290)]=Game_Map[_0x2dfc49(0x380)]['setupEvents'],Game_Map[_0x2dfc49(0x380)]['setupEvents']=function(){const _0x3c74f0=_0x2dfc49;VisuMZ[_0x3c74f0(0x426)][_0x3c74f0(0x290)][_0x3c74f0(0x3a5)](this),this['refreshIfNeeded']();},Game_Map[_0x2dfc49(0x594)]=0xc8,Game_Map['prototype'][_0x2dfc49(0x5f9)]=function(){const _0x2f989f=_0x2dfc49,_0x4108dd=Game_Map[_0x2f989f(0x594)];this[_0x2f989f(0x484)]=this['events']()[_0x2f989f(0x4f1)]>_0x4108dd;if(this[_0x2f989f(0x484)]&&$gameTemp[_0x2f989f(0x15e)]()){}},Game_Map['prototype'][_0x2dfc49(0x362)]=function(){const _0x4bdbcc=_0x2dfc49;return this[_0x4bdbcc(0x484)];},Game_Map[_0x2dfc49(0x380)]['clearEventCache']=function(){const _0x4527a5=_0x2dfc49;this[_0x4527a5(0x54c)]=undefined;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2f1)]=function(){const _0x4e1f36=_0x2dfc49;this['_diagonalSupport']=VisuMZ[_0x4e1f36(0x426)][_0x4e1f36(0x4c8)][_0x4e1f36(0x44a)]['EnableDir8'];const _0x1c3e38=$dataMap['note']||'';if(_0x1c3e38[_0x4e1f36(0x183)](/<DIAGONAL MOVEMENT: ON>/i))this['_diagonalSupport']=!![];else _0x1c3e38['match'](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x4e1f36(0x5ea)]=![]);},Game_Map['MOBILE_DIAGONAL_PATHFINDING']=VisuMZ[_0x2dfc49(0x426)]['Settings']['Movement'][_0x2dfc49(0x365)]??![],Game_Map[_0x2dfc49(0x380)]['isSupportDiagonalMovement']=function(){const _0x565f61=_0x2dfc49;if(Utils['isMobileDevice']()){if(!Game_Map[_0x565f61(0x364)])return![];}const _0x16b2a3=$gameSystem[_0x565f61(0x2e6)]();if(_0x16b2a3===_0x565f61(0x450))return!![];if(_0x16b2a3===_0x565f61(0x463))return![];if(this[_0x565f61(0x5ea)]===undefined)this[_0x565f61(0x2f1)]();return this[_0x565f61(0x5ea)];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2db)]=function(_0x3e86a6,_0x21bfa8){const _0x4fa8bd=_0x2dfc49;if([0x1,0x4,0x7]['includes'](_0x21bfa8))_0x3e86a6-=0x1;if([0x3,0x6,0x9][_0x4fa8bd(0x480)](_0x21bfa8))_0x3e86a6+=0x1;return this['roundX'](_0x3e86a6);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x37d)]=function(_0x5c2c65,_0x41569a){const _0x15c207=_0x2dfc49;if([0x1,0x2,0x3]['includes'](_0x41569a))_0x5c2c65+=0x1;if([0x7,0x8,0x9][_0x15c207(0x480)](_0x41569a))_0x5c2c65-=0x1;return this[_0x15c207(0x24c)](_0x5c2c65);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2ce)]=function(_0x4847d6,_0x514664,_0x52197e,_0x129a8e){const _0x1eb597=_0x2dfc49;return Math['max'](Math[_0x1eb597(0x571)](this[_0x1eb597(0x5ed)](_0x4847d6,_0x52197e)),Math[_0x1eb597(0x571)](this[_0x1eb597(0x141)](_0x514664,_0x129a8e)));},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x171)]=function(){const _0x1751be=_0x2dfc49,_0x460246=VisuMZ[_0x1751be(0x426)][_0x1751be(0x4c8)]['Region'],_0xe2be76={},_0x325d23=['Allow',_0x1751be(0x2e7),_0x1751be(0x272)],_0x3bd747=[_0x1751be(0x176),_0x1751be(0x25f),'Player','Event',_0x1751be(0x4ac),_0x1751be(0x3af),_0x1751be(0x389),_0x1751be(0x534)];for(const _0xa5313a of _0x325d23){for(const _0x4654d3 of _0x3bd747){const _0x3f7f9='%1%2'[_0x1751be(0x286)](_0x4654d3,_0xa5313a);_0x460246[_0x3f7f9]&&(_0xe2be76[_0x3f7f9]=_0x460246[_0x3f7f9][_0x1751be(0x1e6)](0x0));}}const _0x573bd3=$dataMap['note']||'',_0x4cf06e=_0x573bd3[_0x1751be(0x183)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x4cf06e)for(const _0x611f84 of _0x4cf06e){_0x611f84['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x4bc99b=String(RegExp['$1'])[_0x1751be(0x4d8)]()['trim'](),_0x462a03=String(RegExp['$2'])[_0x1751be(0x4d8)]()[_0x1751be(0x415)]();const _0x3bd4d0=JSON[_0x1751be(0x25d)]('['+RegExp['$3'][_0x1751be(0x183)](/\d+/g)+']');_0x4bc99b=_0x4bc99b['charAt'](0x0)[_0x1751be(0x3dc)]()+_0x4bc99b[_0x1751be(0x1e6)](0x1),_0x462a03=_0x462a03[_0x1751be(0x43d)](0x0)[_0x1751be(0x3dc)]()+_0x462a03[_0x1751be(0x1e6)](0x1);const _0x48f7c5=_0x1751be(0x184)[_0x1751be(0x286)](_0x4bc99b,_0x462a03);if(_0xe2be76[_0x48f7c5])_0xe2be76[_0x48f7c5]=_0xe2be76[_0x48f7c5][_0x1751be(0x354)](_0x3bd4d0);}this[_0x1751be(0x5fe)]=_0xe2be76;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x42f)]=function(_0x16d01a,_0x2929b7,_0x18fba,_0x1d38c2){const _0x39f4a8=_0x2dfc49,_0x111612=this['roundXWithDirection'](_0x16d01a,_0x18fba),_0x373fed=this[_0x39f4a8(0x37d)](_0x2929b7,_0x18fba),_0x4d3d45=this[_0x39f4a8(0x5b0)](_0x111612,_0x373fed),_0x372128=this[_0x39f4a8(0x5fe)];if(_0x372128[_0x39f4a8(0x1a9)][_0x39f4a8(0x480)](_0x4d3d45))return!![];else{if(_0x1d38c2===_0x39f4a8(0x4bc))return _0x372128['PlayerAllow'][_0x39f4a8(0x480)](_0x4d3d45)||_0x372128[_0x39f4a8(0x2c5)][_0x39f4a8(0x480)](_0x4d3d45);else{if(_0x1d38c2==='event')return _0x372128[_0x39f4a8(0x5f8)][_0x39f4a8(0x480)](_0x4d3d45)||_0x372128[_0x39f4a8(0x2c5)][_0x39f4a8(0x480)](_0x4d3d45);else{if(_0x372128['VehicleAllow'][_0x39f4a8(0x480)](_0x4d3d45))return!![];else{const _0x35d9f0='%1Allow'[_0x39f4a8(0x286)](_0x1d38c2[_0x39f4a8(0x43d)](0x0)['toUpperCase']()+_0x1d38c2[_0x39f4a8(0x1e6)](0x1));if(_0x372128[_0x35d9f0])return _0x372128[_0x35d9f0][_0x39f4a8(0x480)](_0x4d3d45);}}}}return![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x244)]=function(_0x2719e8,_0x72a054,_0x6dfa1b,_0x2f9417){const _0x3181a8=_0x2dfc49,_0x5e7cf6=this[_0x3181a8(0x2db)](_0x2719e8,_0x6dfa1b),_0x37b6b8=this['roundYWithDirection'](_0x72a054,_0x6dfa1b),_0x55f4cb=this[_0x3181a8(0x5b0)](_0x5e7cf6,_0x37b6b8),_0x3c6ee5=this['_regionRules'];if(_0x3c6ee5[_0x3181a8(0x47a)][_0x3181a8(0x480)](_0x55f4cb))return!![];else{if(_0x2f9417===_0x3181a8(0x4bc))return _0x3c6ee5[_0x3181a8(0x2b1)]['includes'](_0x55f4cb)||_0x3c6ee5['WalkForbid'][_0x3181a8(0x480)](_0x55f4cb);else{if(_0x2f9417===_0x3181a8(0x2b5))return _0x3c6ee5[_0x3181a8(0x56a)]['includes'](_0x55f4cb)||_0x3c6ee5[_0x3181a8(0x139)][_0x3181a8(0x480)](_0x55f4cb);else{if(_0x3c6ee5[_0x3181a8(0x5a6)][_0x3181a8(0x480)](_0x55f4cb))return!![];else{const _0x97ba83='%1Forbid'[_0x3181a8(0x286)](_0x2f9417[_0x3181a8(0x43d)](0x0)[_0x3181a8(0x3dc)]()+_0x2f9417['slice'](0x1));if(_0x3c6ee5[_0x97ba83])return _0x3c6ee5[_0x97ba83][_0x3181a8(0x480)](_0x55f4cb);}}}}return![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x1ca)]=function(_0xbd0353,_0x56447b,_0x1e5387,_0x11ec4d){const _0x5920c1=_0x2dfc49;_0x1e5387=_0x11ec4d===_0x5920c1(0x452)?0x5:_0x1e5387;const _0x47cdd6=this[_0x5920c1(0x2db)](_0xbd0353,_0x1e5387),_0x36b9a8=this['roundYWithDirection'](_0x56447b,_0x1e5387),_0x5662ac=this[_0x5920c1(0x5b0)](_0x47cdd6,_0x36b9a8),_0x3b6afb=this[_0x5920c1(0x5fe)];if(_0x3b6afb[_0x5920c1(0x41f)]['includes'](_0x5662ac))return!![];else{const _0x329b41=_0x5920c1(0x3f3)[_0x5920c1(0x286)](_0x11ec4d[_0x5920c1(0x43d)](0x0)[_0x5920c1(0x3dc)]()+_0x11ec4d[_0x5920c1(0x1e6)](0x1));if(_0x3b6afb[_0x329b41])return _0x3b6afb[_0x329b41][_0x5920c1(0x480)](_0x5662ac);}return![];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x471)]=Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x1f2)],Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x1f2)]=function(){const _0x334447=_0x2dfc49;VisuMZ[_0x334447(0x426)]['Game_Map_refresh']['call'](this),this['checkNeedForPeriodicRefresh']();},Game_Map['prototype'][_0x2dfc49(0x5c5)]=function(){const _0x5a7f02=_0x2dfc49;this[_0x5a7f02(0x36d)]=![];if(this[_0x5a7f02(0x4fa)]()[_0x5a7f02(0x443)](_0x26c222=>_0x26c222['hasAdvancedSwitchVariable']())){this[_0x5a7f02(0x36d)]=!![];return;}if(this['events']()[_0x5a7f02(0x443)](_0xb85793=>_0xb85793[_0x5a7f02(0x4c0)]())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x5a7f02(0x466)][_0x5a7f02(0x443)](_0x275f3f=>_0x275f3f['hasAdvancedSwitchVariable']())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x5a7f02(0x466)][_0x5a7f02(0x443)](_0x2131a9=>_0x2131a9[_0x5a7f02(0x4c0)]())){this[_0x5a7f02(0x36d)]=!![];return;}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x14c)]=Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x322)],Game_Map[_0x2dfc49(0x380)]['update']=function(_0x52f799){const _0x45d727=_0x2dfc49;this[_0x45d727(0x3ab)](),VisuMZ[_0x45d727(0x426)][_0x45d727(0x14c)][_0x45d727(0x3a5)](this,_0x52f799);},Game_Map['prototype'][_0x2dfc49(0x3ab)]=function(){const _0x4fb520=_0x2dfc49;if(!this['_needsPeriodicRefresh'])return;this['_periodicRefreshTimer']=this[_0x4fb520(0x403)]||0x3c,this[_0x4fb520(0x403)]--,this[_0x4fb520(0x403)]<=0x0&&(this[_0x4fb520(0x32c)](),this[_0x4fb520(0x403)]=0x3c);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x28a)]=Game_Map[_0x2dfc49(0x380)]['isDashDisabled'],Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2e4)]=function(){const _0x2e1fbc=_0x2dfc49;if(!$gameSystem[_0x2e1fbc(0x273)]())return!![];return VisuMZ['EventsMoveCore'][_0x2e1fbc(0x28a)][_0x2e1fbc(0x3a5)](this);},Game_Map[_0x2dfc49(0x380)]['setupSaveEventLocations']=function(){const _0x4d149e=_0x2dfc49;this['_saveEventLocations']=![];const _0x2d526e=$dataMap[_0x4d149e(0x60c)]||'';_0x2d526e[_0x4d149e(0x183)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x4d149e(0x29a)]=!![]);},Game_Map[_0x2dfc49(0x380)]['isSaveEventLocations']=function(){const _0x44f016=_0x2dfc49;if(this['_saveEventLocations']===undefined)this[_0x44f016(0x4a6)]();return this['_saveEventLocations'];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x4f8)]=function(_0xbeac7c){const _0x406037=_0x2dfc49;_0xbeac7c!==this[_0x406037(0x224)]()&&$gamePlayer&&$gameSystem['removeTemporaryMapSpawnedEvents'](this[_0x406037(0x224)]());},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x388)]=function(){const _0xb8426d=_0x2dfc49;this[_0xb8426d(0x47e)]=$gameSystem[_0xb8426d(0x567)](this['mapId']()),this[_0xb8426d(0x150)]=!![];},VisuMZ[_0x2dfc49(0x426)]['Game_Map_events']=Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x4fa)],Game_Map[_0x2dfc49(0x380)]['events']=function(){const _0x53059d=_0x2dfc49;if(this[_0x53059d(0x54c)])return this[_0x53059d(0x54c)];const _0x1423c3=VisuMZ['EventsMoveCore'][_0x53059d(0x4f4)][_0x53059d(0x3a5)](this),_0x39965d=_0x1423c3[_0x53059d(0x354)](this[_0x53059d(0x47e)]||[]);return this['_eventCache']=_0x39965d[_0x53059d(0x291)](_0x31d4f9=>!!_0x31d4f9),this[_0x53059d(0x54c)];},VisuMZ['EventsMoveCore'][_0x2dfc49(0x283)]=Game_Map[_0x2dfc49(0x380)]['event'],Game_Map['prototype'][_0x2dfc49(0x2b5)]=function(_0x599d8f){const _0x50994b=_0x2dfc49;return _0x599d8f>=0x3e8?(_0x599d8f-=0x3e8,this[_0x50994b(0x47e)][_0x599d8f]):VisuMZ[_0x50994b(0x426)][_0x50994b(0x283)][_0x50994b(0x3a5)](this,_0x599d8f);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x3fe)]=function(_0x4c52a0){const _0x395894=_0x2dfc49,_0x549982=this['event'](_0x4c52a0);if(_0x549982)_0x549982[_0x395894(0x2a1)]();},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x17b)]=function(){const _0x4cdf71=_0x2dfc49,_0xf59ed3={'template':'Button','mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this['_spawnedEvents'][_0x4cdf71(0x4f1)]+0x3e8};this[_0x4cdf71(0x30e)](_0xf59ed3);},Game_Map['prototype'][_0x2dfc49(0x56c)]=function(_0x3c30d7,_0x31592a){const _0x4ae0aa=_0x2dfc49;if(this[_0x4ae0aa(0x2d8)](_0x3c30d7,_0x31592a)[_0x4ae0aa(0x4f1)]>0x0)return!![];if($gamePlayer['x']===_0x3c30d7&&$gamePlayer['y']===_0x31592a)return!![];if(this['boat']()['posNt'](_0x3c30d7,_0x31592a))return!![];if(this[_0x4ae0aa(0x3fa)]()['posNt'](_0x3c30d7,_0x31592a))return!![];return![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x43e)]=function(_0x57bed8,_0x4c92d3,_0xb296dc){const _0x33fc2b=_0x2dfc49;$gameTemp[_0x33fc2b(0x27a)]=_0x57bed8;const _0x2f4c4c=new Game_Event(_0x57bed8['mapId'],_0x57bed8[_0x33fc2b(0x574)]);$gameTemp[_0x33fc2b(0x27a)]=undefined,_0x2f4c4c['refresh']();let _0x1396c5=_0x4c92d3-_0x2f4c4c['_addedHitbox'][_0x33fc2b(0x5c9)],_0xd40ab5=_0x4c92d3+_0x2f4c4c['_addedHitbox'][_0x33fc2b(0x5ee)],_0x198676=_0xb296dc-_0x2f4c4c[_0x33fc2b(0x53c)]['up'],_0x44508f=_0xb296dc+_0x2f4c4c[_0x33fc2b(0x53c)][_0x33fc2b(0x564)];for(let _0x8df095=_0x1396c5;_0x8df095<=_0xd40ab5;_0x8df095++){for(let _0x32ba44=_0x198676;_0x32ba44<=_0x44508f;_0x32ba44++){if(this[_0x33fc2b(0x56c)](_0x8df095,_0x32ba44))return![];}}return!![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x30e)]=function(_0x1cb349){const _0x37ec9e=_0x2dfc49;$gameTemp[_0x37ec9e(0x27a)]=_0x1cb349;const _0x33460c=new Game_Event(_0x1cb349[_0x37ec9e(0x224)],_0x1cb349['eventId']);$gameTemp[_0x37ec9e(0x27a)]=undefined,this[_0x37ec9e(0x47e)][_0x37ec9e(0x546)](_0x33460c),_0x33460c[_0x37ec9e(0x324)](_0x1cb349),this[_0x37ec9e(0x1c8)]();},Game_Map[_0x2dfc49(0x380)]['prepareSpawnedEventAtXY']=function(_0x4e5be3,_0x1f43f8,_0x123496){const _0x403122=_0x2dfc49,_0x480512=_0x4e5be3['template'][_0x403122(0x3dc)]()['trim']();if(_0x480512!==_0x403122(0x135)){const _0x3247b5=VisuMZ[_0x403122(0x214)][_0x480512];_0x3247b5&&(_0x4e5be3[_0x403122(0x224)]=_0x3247b5['MapID'],_0x4e5be3[_0x403122(0x574)]=_0x3247b5[_0x403122(0x1e7)]);}const _0x483a64=_0x4e5be3['x'],_0x464045=_0x4e5be3['y'];if(!this[_0x403122(0x162)](_0x483a64,_0x464045))return![];if(_0x1f43f8){if(this[_0x403122(0x56c)](_0x483a64,_0x464045))return![];if(!this[_0x403122(0x43e)](_0x4e5be3,_0x483a64,_0x464045))return![];}if(_0x123496){if(!this[_0x403122(0x38a)](_0x483a64,_0x464045))return![];}return this[_0x403122(0x30e)](_0x4e5be3),!![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x5dd)]=function(_0x48a650,_0x379cc4,_0x15cb6c,_0x192875){const _0x208515=_0x2dfc49,_0x4de08d=_0x48a650[_0x208515(0x3dd)][_0x208515(0x3dc)]()['trim']();if(_0x4de08d!==_0x208515(0x135)){const _0x521c69=VisuMZ[_0x208515(0x214)][_0x4de08d];_0x521c69&&(_0x48a650['mapId']=_0x521c69[_0x208515(0x61d)],_0x48a650[_0x208515(0x574)]=_0x521c69[_0x208515(0x1e7)]);}const _0x52f56c=[],_0x234bf5=this[_0x208515(0x40c)](),_0x196322=this[_0x208515(0x5d9)]();for(let _0xb679f9=0x0;_0xb679f9<_0x234bf5;_0xb679f9++){for(let _0x459ff3=0x0;_0x459ff3<_0x196322;_0x459ff3++){if(!_0x379cc4[_0x208515(0x480)](this['regionId'](_0xb679f9,_0x459ff3)))continue;if(!this['isValid'](_0xb679f9,_0x459ff3))continue;if(_0x15cb6c){if(this['checkExistingEntitiesAt'](_0xb679f9,_0x459ff3))continue;if(!this[_0x208515(0x43e)](_0x48a650,_0xb679f9,_0x459ff3))continue;}if(_0x192875){if(!this['isPassableByAnyDirection'](_0xb679f9,_0x459ff3))continue;}_0x52f56c[_0x208515(0x546)]([_0xb679f9,_0x459ff3]);}}if(_0x52f56c[_0x208515(0x4f1)]>0x0){const _0x541ad5=_0x52f56c[Math['randomInt'](_0x52f56c[_0x208515(0x4f1)])];return _0x48a650['x']=_0x541ad5[0x0],_0x48a650['y']=_0x541ad5[0x1],this[_0x208515(0x30e)](_0x48a650),!![];}return![];},Game_Map['prototype']['prepareSpawnedEventAtTerrainTag']=function(_0x2e4035,_0x642776,_0x47e88e,_0x33a753){const _0x389ab3=_0x2dfc49,_0x550b28=_0x2e4035['template'][_0x389ab3(0x3dc)]()[_0x389ab3(0x415)]();if(_0x550b28!==_0x389ab3(0x135)){const _0x190b42=VisuMZ[_0x389ab3(0x214)][_0x550b28];_0x190b42&&(_0x2e4035['mapId']=_0x190b42[_0x389ab3(0x61d)],_0x2e4035['eventId']=_0x190b42[_0x389ab3(0x1e7)]);}const _0x2ff9f9=[],_0x157edd=this[_0x389ab3(0x40c)](),_0x4f1408=this['height']();for(let _0x525f2c=0x0;_0x525f2c<_0x157edd;_0x525f2c++){for(let _0xed376=0x0;_0xed376<_0x4f1408;_0xed376++){if(!_0x642776[_0x389ab3(0x480)](this[_0x389ab3(0x330)](_0x525f2c,_0xed376)))continue;if(!this[_0x389ab3(0x162)](_0x525f2c,_0xed376))continue;if(_0x47e88e){if(this[_0x389ab3(0x56c)](_0x525f2c,_0xed376))continue;if(!this['isSpawnHitboxCollisionOk'](_0x2e4035,_0x525f2c,_0xed376))continue;}if(_0x33a753){if(!this[_0x389ab3(0x38a)](_0x525f2c,_0xed376))continue;}_0x2ff9f9[_0x389ab3(0x546)]([_0x525f2c,_0xed376]);}}if(_0x2ff9f9[_0x389ab3(0x4f1)]>0x0){const _0x16b8e9=_0x2ff9f9[Math[_0x389ab3(0x3b8)](_0x2ff9f9[_0x389ab3(0x4f1)])];return _0x2e4035['x']=_0x16b8e9[0x0],_0x2e4035['y']=_0x16b8e9[0x1],this[_0x389ab3(0x30e)](_0x2e4035),!![];}return![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x38a)]=function(_0x2a7ebf,_0x4dafff){const _0x3a15a7=_0x2dfc49;if(this['isPassable'](_0x2a7ebf,_0x4dafff,0x2))return!![];if(this['isPassable'](_0x2a7ebf,_0x4dafff,0x4))return!![];if(this[_0x3a15a7(0x24e)](_0x2a7ebf,_0x4dafff,0x6))return!![];if(this[_0x3a15a7(0x24e)](_0x2a7ebf,_0x4dafff,0x8))return!![];return![];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x59d)]=function(_0x518c42){const _0x631067=_0x2dfc49;if(_0x518c42<0x3e8)return;if(!this[_0x631067(0x47e)])return;const _0x37b398=this[_0x631067(0x2b5)](_0x518c42);_0x37b398[_0x631067(0x351)](-0x1,-0x1),_0x37b398[_0x631067(0x2a1)](),this['_spawnedEvents'][_0x518c42-0x3e8]=null,this[_0x631067(0x1c8)]();},Game_Map['prototype'][_0x2dfc49(0x200)]=function(){const _0x10cb58=_0x2dfc49;for(const _0x5097cc of this[_0x10cb58(0x47e)]){if(_0x5097cc)return _0x5097cc;}return null;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x5bd)]=function(){const _0x1c0ee8=_0x2dfc49,_0x47128d=this[_0x1c0ee8(0x200)]();return _0x47128d?_0x47128d[_0x1c0ee8(0x4d7)]:0x0;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x27c)]=function(){const _0x46a4f5=_0x2dfc49,_0x3e8b86=this[_0x46a4f5(0x47e)]['slice'](0x0)['reverse']();for(const _0x2418bc of _0x3e8b86){if(_0x2418bc)return _0x2418bc;}return null;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x48b)]=function(){const _0x302c52=_0x2dfc49,_0x549f46=this['lastSpawnedEvent']();return _0x549f46?_0x549f46[_0x302c52(0x4d7)]:0x0;},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x5a3)]=function(_0x251e32,_0x27ec60){const _0x2515c5=_0x2dfc49,_0x3b6c0a=this[_0x2515c5(0x2d8)](_0x251e32,_0x27ec60);for(const _0x4eb0a6 of _0x3b6c0a){if(!_0x4eb0a6)continue;if(_0x4eb0a6['isSpawnedEvent']())this[_0x2515c5(0x59d)](_0x4eb0a6[_0x2515c5(0x4d7)]);}},Game_Map['prototype']['despawnRegions']=function(_0x543da1){const _0x2af9de=_0x2dfc49;for(const _0x26a5cf of this[_0x2af9de(0x47e)]){if(!_0x26a5cf)continue;_0x543da1['includes'](_0x26a5cf[_0x2af9de(0x5b0)]())&&this['despawnEventId'](_0x26a5cf[_0x2af9de(0x4d7)]);}},Game_Map['prototype'][_0x2dfc49(0x3a1)]=function(_0x456f46){const _0x422edb=_0x2dfc49;for(const _0x571b60 of this[_0x422edb(0x47e)]){if(!_0x571b60)continue;_0x456f46[_0x422edb(0x480)](_0x571b60[_0x422edb(0x330)]())&&this['despawnEventId'](_0x571b60[_0x422edb(0x4d7)]);}},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x5e0)]=function(){const _0x34019d=_0x2dfc49;for(const _0x2e9e00 of this[_0x34019d(0x47e)]){if(!_0x2e9e00)continue;this[_0x34019d(0x59d)](_0x2e9e00['_eventId']);}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x348)]=Game_Map['prototype'][_0x2dfc49(0x34c)],Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x34c)]=function(_0x4e52e1){const _0x3b91f2=_0x2dfc49;VisuMZ[_0x3b91f2(0x426)][_0x3b91f2(0x348)][_0x3b91f2(0x3a5)](this,_0x4e52e1);if(_0x4e52e1>=0x3e8){const _0x5d03a8=this['event'](_0x4e52e1);if(_0x5d03a8)_0x5d03a8['unlock']();}},Game_Map['prototype'][_0x2dfc49(0x4d2)]=function(){const _0x35e53a=_0x2dfc49;this[_0x35e53a(0x332)]=![],this[_0x35e53a(0x50e)]=![];if(!$dataMap)return;const _0x4c2cbd=$dataMap[_0x35e53a(0x60c)]||'';if(_0x4c2cbd[_0x35e53a(0x183)](/<HIDE PLAYER>/i))this[_0x35e53a(0x332)]=![],this[_0x35e53a(0x50e)]=!![];else _0x4c2cbd[_0x35e53a(0x183)](/<SHOW PLAYER>/i)&&(this[_0x35e53a(0x332)]=!![],this[_0x35e53a(0x50e)]=![]);},Game_Map[_0x2dfc49(0x380)]['isPlayerForceShown']=function(){const _0x504020=_0x2dfc49;return this['_forceShowPlayer']===undefined&&this[_0x504020(0x4d2)](),this[_0x504020(0x332)];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x3a7)]=function(){const _0x48ef77=_0x2dfc49;return this[_0x48ef77(0x50e)]===undefined&&this[_0x48ef77(0x4d2)](),this[_0x48ef77(0x50e)];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x47f)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x1f6)],Game_CharacterBase['prototype'][_0x2dfc49(0x1f6)]=function(){const _0x1db561=_0x2dfc49;if(this===$gamePlayer){if($gameMap['isPlayerForceShown']())return![];if($gameMap[_0x1db561(0x3a7)]())return!![];}return VisuMZ[_0x1db561(0x426)][_0x1db561(0x47f)][_0x1db561(0x3a5)](this);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x24a)]=function(){const _0x7fd057=_0x2dfc49;this['_forceShowFollower']=![],this['_forceHideFollower']=![];if(!$dataMap)return;const _0x3990f0=$dataMap[_0x7fd057(0x60c)]||'';if(_0x3990f0[_0x7fd057(0x183)](/<HIDE FOLLOWERS>/i))this[_0x7fd057(0x17a)]=![],this[_0x7fd057(0x2f4)]=!![];else _0x3990f0[_0x7fd057(0x183)](/<SHOW FOLLOWERS>/i)&&(this[_0x7fd057(0x17a)]=!![],this[_0x7fd057(0x2f4)]=![]);},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x43c)]=function(){const _0x47e990=_0x2dfc49;return this['_forceShowFollower']===undefined&&this['setupFollowerVisibilityOverrides'](),this[_0x47e990(0x17a)];},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x350)]=function(){const _0x16b8a5=_0x2dfc49;return this[_0x16b8a5(0x2f4)]===undefined&&this['setupFollowerVisibilityOverrides'](),this[_0x16b8a5(0x2f4)];},VisuMZ[_0x2dfc49(0x426)]['Game_Followers_isVisible']=Game_Followers['prototype'][_0x2dfc49(0x555)],Game_Followers['prototype'][_0x2dfc49(0x555)]=function(){const _0x230935=_0x2dfc49;if($gameMap[_0x230935(0x43c)]())return!![];if($gameMap[_0x230935(0x350)]())return![];return VisuMZ[_0x230935(0x426)][_0x230935(0x5d1)]['call'](this);},Game_Map[_0x2dfc49(0x380)]['processEraseEncounterEvents']=function(){const _0x1649c5=_0x2dfc49,_0x3f8fcb=this['events'](),_0x5c9817=[];$gameParty[_0x1649c5(0x197)]=!![];for(const _0x3a17ff of _0x3f8fcb){if(!_0x3a17ff)continue;if(_0x3a17ff['_erased'])continue;_0x3a17ff[_0x1649c5(0x42d)]()&&_0x5c9817['push'](_0x3a17ff);}$gameParty[_0x1649c5(0x197)]=undefined;for(const _0x44192d of _0x5c9817){if(!_0x44192d)continue;if(_0x44192d[_0x1649c5(0x271)])continue;this[_0x1649c5(0x3fe)](_0x44192d[_0x1649c5(0x574)]());}},Game_Event['prototype'][_0x2dfc49(0x42d)]=function(){const _0x35631d=_0x2dfc49,_0x272b38=this[_0x35631d(0x2b5)]()[_0x35631d(0x60c)]||'';if(_0x272b38['match'](/<ERASE IF ENC(?:|OUNTER) HALF>/i)){if($gameParty['hasEncounterHalf']())return!![];if($isTileEncounterHalf(this['x'],this['y']))return!![];}if(_0x272b38[_0x35631d(0x183)](/<ERASE IF ENC(?:|OUNTER) NONE>/i)){if($gameParty['hasEncounterNone']())return!![];if($isTileEncounterNone(this['x'],this['y']))return!![];}return![];},VisuMZ[_0x2dfc49(0x426)]['Scene_Map_onMapLoadedEncErase']=Scene_Map[_0x2dfc49(0x380)][_0x2dfc49(0x130)],Scene_Map[_0x2dfc49(0x380)][_0x2dfc49(0x130)]=function(){const _0x4d533a=_0x2dfc49;VisuMZ['EventsMoveCore'][_0x4d533a(0x2c4)]['call'](this),$gameMap[_0x4d533a(0x21b)]();},Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2fe)]=function(){const _0x5c6e5a=_0x2dfc49;if(!$dataMap)return;if(!$dataMap[_0x5c6e5a(0x60c)])return;const _0x154c94=$dataMap['note'];if(_0x154c94[_0x5c6e5a(0x183)](/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)){const _0x2f3e5f=String(RegExp['$1'])[_0x5c6e5a(0x4f3)](',')[_0x5c6e5a(0x52e)](_0x39f893=>Number(_0x39f893));for(const _0x4441b4 of _0x2f3e5f){$gameTemp[_0x5c6e5a(0x258)](_0x4441b4);}}},Game_CommonEvent[_0x2dfc49(0x380)][_0x2dfc49(0x40a)]=function(){const _0x266f7b=_0x2dfc49,_0x3daffe=this['event']();return this[_0x266f7b(0x5a0)]()&&_0x3daffe[_0x266f7b(0x2fc)]>=0x1&&DataManager[_0x266f7b(0x1cc)](_0x3daffe[_0x266f7b(0x3f2)]);},Game_CommonEvent[_0x2dfc49(0x380)][_0x2dfc49(0x4c0)]=function(){const _0x1429b5=_0x2dfc49;return VisuMZ['EventsMoveCore'][_0x1429b5(0x55b)][_0x1429b5(0x466)][_0x1429b5(0x480)](this[_0x1429b5(0x182)]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x20b)]=Game_CommonEvent[_0x2dfc49(0x380)][_0x2dfc49(0x5a0)],Game_CommonEvent['prototype'][_0x2dfc49(0x5a0)]=function(){const _0x47d7b7=_0x2dfc49;if(VisuMZ[_0x47d7b7(0x426)]['Game_CommonEvent_isActive']['call'](this))return!![];else{const _0x31f6a2=this[_0x47d7b7(0x2b5)]();return VisuMZ['EventsMoveCore'][_0x47d7b7(0x55b)][_0x47d7b7(0x618)](this[_0x47d7b7(0x2b5)]()[_0x47d7b7(0x4aa)],this['_commonEventId'],_0x31f6a2);}},VisuMZ[_0x2dfc49(0x426)]['Game_Map_parallelCommonEvents']=Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2bc)],Game_Map[_0x2dfc49(0x380)][_0x2dfc49(0x2bc)]=function(){const _0x20104e=_0x2dfc49,_0x375ab7=VisuMZ[_0x20104e(0x426)][_0x20104e(0x22a)][_0x20104e(0x3a5)](this),_0x219d06=VisuMZ[_0x20104e(0x426)][_0x20104e(0x55b)][_0x20104e(0x466)][_0x20104e(0x52e)](_0x4455c4=>$dataCommonEvents[_0x4455c4]);return _0x375ab7['concat'](_0x219d06)[_0x20104e(0x291)]((_0x54a650,_0x4dfd7e,_0x59b512)=>_0x59b512[_0x20104e(0x295)](_0x54a650)===_0x4dfd7e);},Game_CharacterBase['ALLOW_LADDER_DASH']=VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x4c8)][_0x2dfc49(0x44a)][_0x2dfc49(0x23c)]??![],VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x32e)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x2f3)],Game_CharacterBase[_0x2dfc49(0x380)]['initMembers']=function(){const _0x58c0eb=_0x2dfc49;VisuMZ['EventsMoveCore'][_0x58c0eb(0x32e)][_0x58c0eb(0x3a5)](this),this['initEventsMoveCoreSettings']();},Game_CharacterBase['prototype'][_0x2dfc49(0x3f5)]=function(){const _0x5bd8e5=_0x2dfc49;this[_0x5bd8e5(0x1c6)]=0x1,this[_0x5bd8e5(0x132)]=0x1,this[_0x5bd8e5(0x401)]=![],this[_0x5bd8e5(0x1b0)](),this['clearDashing'](),this[_0x5bd8e5(0x229)](),this[_0x5bd8e5(0x4da)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x60e)]=Game_CharacterBase['prototype']['opacity'],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x186)]=function(){const _0x1eee22=_0x2dfc49;let _0x48f6e6=VisuMZ[_0x1eee22(0x426)][_0x1eee22(0x60e)]['call'](this);return _0x48f6e6=this[_0x1eee22(0x20a)](_0x48f6e6),_0x48f6e6;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x20a)]=function(_0x57c9a2){return _0x57c9a2;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x1c0)]=function(){const _0x5ac6d1=_0x2dfc49;if(this['constructor']===Game_Player&&this['isInVehicle']())return this[_0x5ac6d1(0x477)]()[_0x5ac6d1(0x3c1)]()['match'](/\[VS8\]/i);else return Imported[_0x5ac6d1(0x237)]&&this[_0x5ac6d1(0x242)]()?!![]:this[_0x5ac6d1(0x3c1)]()[_0x5ac6d1(0x183)](/\[VS8\]/i);},VisuMZ[_0x2dfc49(0x426)]['Game_CharacterBase_direction']=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x163)],Game_CharacterBase['prototype'][_0x2dfc49(0x163)]=function(){const _0xcf7687=_0x2dfc49;if(!$dataMap)return this[_0xcf7687(0x405)]||0x2;if(this[_0xcf7687(0x2e9)]()&&!this[_0xcf7687(0x1fe)]()&&this['isSpriteVS8dir']())return this[_0xcf7687(0x27d)]();else{if(this['isOnLadder']()&&!this['isJumping']())return 0x8;else return this['isPosing']()&&this[_0xcf7687(0x1c0)]()?this[_0xcf7687(0x60f)]():VisuMZ[_0xcf7687(0x426)][_0xcf7687(0x327)]['call'](this);}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2e3)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x5c6)],Game_CharacterBase['prototype']['setDirection']=function(_0x1911d8){const _0x1db579=_0x2dfc49;if(!this[_0x1db579(0x1c0)]())_0x1911d8=this[_0x1db579(0x339)](_0x1911d8);VisuMZ[_0x1db579(0x426)][_0x1db579(0x2e3)][_0x1db579(0x3a5)](this,_0x1911d8),this['updateMoveSynchDirection']();},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x339)]=function(_0xa43faf){const _0x444992=_0x2dfc49;if(_0xa43faf===0x1)return this[_0x444992(0x414)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0xa43faf===0x3)return this[_0x444992(0x414)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0xa43faf===0x7)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0xa43faf===0x9)return this['canPass'](this['_x'],this['_y'],0x6)?0x6:0x8;return _0xa43faf;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x51d)]=function(_0x1c0032){const _0x3bff5b=_0x2dfc49;return[0x1,0x3,0x5,0x7,0x9][_0x3bff5b(0x480)](_0x1c0032);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x16b)]=function(){const _0x5a5070=_0x2dfc49;return this[_0x5a5070(0x26d)]||0x0;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x172)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x4de)],Game_CharacterBase['prototype'][_0x2dfc49(0x4de)]=function(_0x356fba){const _0x4cce0d=_0x2dfc49;this[_0x4cce0d(0x26d)]=_0x356fba,VisuMZ[_0x4cce0d(0x426)][_0x4cce0d(0x172)][_0x4cce0d(0x3a5)](this,_0x356fba);},Game_CharacterBase['prototype'][_0x2dfc49(0x4c5)]=function(_0x24f290){const _0xd86865=_0x2dfc49;if(!this[_0xd86865(0x51d)](_0x24f290))return this[_0xd86865(0x4de)](_0x24f290);let _0x10e61c=0x0,_0x989b99=0x0;switch(_0x24f290){case 0x1:_0x10e61c=0x4,_0x989b99=0x2;break;case 0x3:_0x10e61c=0x6,_0x989b99=0x2;break;case 0x7:_0x10e61c=0x4,_0x989b99=0x8;break;case 0x9:_0x10e61c=0x6,_0x989b99=0x8;break;}if(VisuMZ['EventsMoveCore'][_0xd86865(0x4c8)][_0xd86865(0x44a)][_0xd86865(0x423)]){if(!this[_0xd86865(0x414)](this['_x'],this['_y'],_0x10e61c))return this[_0xd86865(0x4de)](_0x989b99);if(!this[_0xd86865(0x414)](this['_x'],this['_y'],_0x989b99))return this[_0xd86865(0x4de)](_0x10e61c);if(!this[_0xd86865(0x506)](this['_x'],this['_y'],_0x10e61c,_0x989b99)){let _0x3a8e4a=VisuMZ[_0xd86865(0x426)]['Settings'][_0xd86865(0x44a)]['FavorHorz']?_0x10e61c:_0x989b99;return this[_0xd86865(0x4de)](_0x3a8e4a);}}this[_0xd86865(0x26d)]=_0x24f290,this[_0xd86865(0x31a)](_0x10e61c,_0x989b99);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x556)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x583)],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x583)]=function(){const _0x482648=_0x2dfc49;let _0x1eadd6=this[_0x482648(0x4dd)];return this['isDashing']()&&(_0x1eadd6+=this[_0x482648(0x1b7)]()),this[_0x482648(0x4b4)](_0x1eadd6);},Game_CharacterBase[_0x2dfc49(0x380)]['dashSpeedModifier']=function(){const _0x38592b=_0x2dfc49,_0x168418=VisuMZ['EventsMoveCore']['Settings']['Movement'];return _0x168418['DashModifier']!==undefined?_0x168418[_0x38592b(0x46c)]:VisuMZ[_0x38592b(0x426)][_0x38592b(0x556)][_0x38592b(0x3a5)](this)-this[_0x38592b(0x4dd)];},Game_CharacterBase['prototype'][_0x2dfc49(0x4b4)]=function(_0x38d94e){const _0x2b9ea3=_0x2dfc49,_0x41b9f7=VisuMZ[_0x2b9ea3(0x426)][_0x2b9ea3(0x4c8)]['Movement'];if(!_0x41b9f7[_0x2b9ea3(0x228)])return _0x38d94e;return[0x1,0x3,0x7,0x9][_0x2b9ea3(0x480)](this[_0x2b9ea3(0x26d)])&&(_0x38d94e*=_0x41b9f7[_0x2b9ea3(0x38d)]||0.01),_0x38d94e;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x361)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x49b)],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x49b)]=function(){const _0x6a0c15=_0x2dfc49;if(!Game_CharacterBase[_0x6a0c15(0x202)]&&this[_0x6a0c15(0x2e9)]())return![];if(this[_0x6a0c15(0x20f)])return!![];return VisuMZ[_0x6a0c15(0x426)][_0x6a0c15(0x361)][_0x6a0c15(0x3a5)](this);},Game_CharacterBase['prototype'][_0x2dfc49(0x5fb)]=function(){const _0x505841=_0x2dfc49;return this[_0x505841(0x49b)]()&&this[_0x505841(0x517)]===0x0;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2d5)]=Game_CharacterBase[_0x2dfc49(0x380)]['pattern'],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x37a)]=function(){const _0x18f396=_0x2dfc49;return this[_0x18f396(0x4ef)]()?this[_0x18f396(0x609)]():VisuMZ[_0x18f396(0x426)]['Game_CharacterBase_pattern'][_0x18f396(0x3a5)](this);},VisuMZ[_0x2dfc49(0x426)]['Game_CharacterBase_increaseSteps']=Game_CharacterBase['prototype']['increaseSteps'],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x5d5)]=function(){const _0x27ddc3=_0x2dfc49;VisuMZ[_0x27ddc3(0x426)][_0x27ddc3(0x3c9)][_0x27ddc3(0x3a5)](this),this[_0x27ddc3(0x1b0)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2cc)]=Game_CharacterBase[_0x2dfc49(0x380)]['characterIndex'],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x3ba)]=function(){const _0x5dec78=_0x2dfc49;if(this[_0x5dec78(0x1c0)]())return this[_0x5dec78(0x191)]();return VisuMZ['EventsMoveCore'][_0x5dec78(0x2cc)]['call'](this);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x191)]=function(){const _0x2662fe=_0x2dfc49,_0x54a246=this[_0x2662fe(0x163)]();if(this[_0x2662fe(0x1fe)]()){if([0x2,0x4,0x6,0x8]['includes'](_0x54a246))return 0x4;if([0x1,0x3,0x7,0x9][_0x2662fe(0x480)](_0x54a246))return 0x5;}else{if(this[_0x2662fe(0x2e9)]())return 0x6;else{if(this['isPosing']())return this[_0x2662fe(0x284)]();else{if(this[_0x2662fe(0x559)]){if([0x2,0x4,0x6,0x8][_0x2662fe(0x480)](_0x54a246))return 0x4;if([0x1,0x3,0x7,0x9][_0x2662fe(0x480)](_0x54a246))return 0x5;}else{if(this[_0x2662fe(0x586)]()&&this[_0x2662fe(0x30c)]()){if([0x2,0x4,0x6,0x8][_0x2662fe(0x480)](_0x54a246))return 0x4;if([0x1,0x3,0x7,0x9][_0x2662fe(0x480)](_0x54a246))return 0x5;}else{if(this[_0x2662fe(0x5fb)]()){if([0x2,0x4,0x6,0x8][_0x2662fe(0x480)](_0x54a246))return 0x2;if([0x1,0x3,0x7,0x9][_0x2662fe(0x480)](_0x54a246))return 0x3;}else{if([0x2,0x4,0x6,0x8]['includes'](_0x54a246))return 0x0;if([0x1,0x3,0x7,0x9][_0x2662fe(0x480)](_0x54a246))return 0x1;}}}}}}},Game_CharacterBase['prototype'][_0x2dfc49(0x30c)]=function(){const _0xcdc4ea=_0x2dfc49;return VisuMZ[_0xcdc4ea(0x426)][_0xcdc4ea(0x4c8)]['VS8'][_0xcdc4ea(0x53b)];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x13d)]=function(){const _0x1f0c91=_0x2dfc49;return this[_0x1f0c91(0x2e9)]()&&this[_0x1f0c91(0x330)]()===VisuMZ[_0x1f0c91(0x426)][_0x1f0c91(0x4c8)][_0x1f0c91(0x431)][_0x1f0c91(0x341)];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x27d)]=function(){const _0x2c0304=_0x2dfc49;return this[_0x2c0304(0x13d)]()?0x4:0x2;},VisuMZ[_0x2dfc49(0x426)]['Game_CharacterBase_update']=Game_CharacterBase[_0x2dfc49(0x380)]['update'],Game_CharacterBase[_0x2dfc49(0x380)]['update']=function(){const _0x1d0cb9=_0x2dfc49;this['updateScaleBase'](),VisuMZ[_0x1d0cb9(0x426)][_0x1d0cb9(0x1f9)][_0x1d0cb9(0x3a5)](this),this[_0x1d0cb9(0x604)]();},Game_CharacterBase[_0x2dfc49(0x380)]['updateScaleBase']=function(){const _0x863f69=_0x2dfc49;this[_0x863f69(0x230)]=this[_0x863f69(0x1c6)]??0x1,this[_0x863f69(0x2b6)]=this[_0x863f69(0x132)]??0x1;},VisuMZ[_0x2dfc49(0x426)]['Game_CharacterBase_bushDepth']=Game_CharacterBase['prototype'][_0x2dfc49(0x164)],Game_CharacterBase['prototype'][_0x2dfc49(0x164)]=function(){const _0x8b7a68=_0x2dfc49;let _0xb6a4c3=VisuMZ[_0x8b7a68(0x426)][_0x8b7a68(0x319)][_0x8b7a68(0x3a5)](this);return this[_0x8b7a68(0x2b6)]!==undefined&&(_0xb6a4c3/=Math[_0x8b7a68(0x196)](this[_0x8b7a68(0x2b6)],0.00001)),Math[_0x8b7a68(0x5f0)](_0xb6a4c3);},Game_CharacterBase['prototype'][_0x2dfc49(0x604)]=function(){const _0x237736=_0x2dfc49;this[_0x237736(0x1d7)]=this[_0x237736(0x1d7)]||0x0;if(this['_poseDuration']>0x0){this[_0x237736(0x1d7)]--;if(this['_poseDuration']<=0x0&&this[_0x237736(0x395)]!==_0x237736(0x281))this[_0x237736(0x1b0)]();}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x492)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x31a)],Game_CharacterBase[_0x2dfc49(0x380)]['moveDiagonally']=function(_0x4d7e60,_0x2d8bde){const _0x33d62d=_0x2dfc49;VisuMZ[_0x33d62d(0x426)][_0x33d62d(0x492)][_0x33d62d(0x3a5)](this,_0x4d7e60,_0x2d8bde);if(this[_0x33d62d(0x1c0)]())this[_0x33d62d(0x54d)](_0x4d7e60,_0x2d8bde);},Game_CharacterBase['prototype']['setDiagonalDirection']=function(_0x30550d,_0x4519d0){const _0x208180=_0x2dfc49;if(_0x30550d===0x4&&_0x4519d0===0x2)this[_0x208180(0x5c6)](0x1);if(_0x30550d===0x6&&_0x4519d0===0x2)this[_0x208180(0x5c6)](0x3);if(_0x30550d===0x4&&_0x4519d0===0x8)this[_0x208180(0x5c6)](0x7);if(_0x30550d===0x6&&_0x4519d0===0x8)this[_0x208180(0x5c6)](0x9);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x17f)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x4f7)],Game_CharacterBase['prototype']['hasStepAnime']=function(){const _0x533577=_0x2dfc49;if(this['isPosing']()&&this[_0x533577(0x539)]()===_0x533577(0x281))return!![];return VisuMZ[_0x533577(0x426)][_0x533577(0x17f)][_0x533577(0x3a5)](this);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x23b)]=function(_0x5cf4e3,_0x254499){const _0xacba7f=_0x2dfc49;if(_0x5cf4e3['match'](/Z/i))_0x5cf4e3='ZZZ';if(_0x5cf4e3['match'](/SLEEP/i))_0x5cf4e3='ZZZ';this[_0xacba7f(0x1c0)]()&&(this['_pose']=_0x5cf4e3[_0xacba7f(0x3dc)]()[_0xacba7f(0x415)](),this[_0xacba7f(0x1d7)]=_0x254499||Infinity);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x539)]=function(){const _0x234907=_0x2dfc49;return this['isSpriteVS8dir']()?(this['_pose']||'')[_0x234907(0x3dc)]()[_0x234907(0x415)]():''['toUpperCase']()[_0x234907(0x415)]();},Game_CharacterBase[_0x2dfc49(0x380)]['setBalloonPose']=function(_0x14c00a,_0x4ce006){const _0x2200f6=_0x2dfc49;if(this[_0x2200f6(0x1c0)]()){const _0xaa0dd=['','EXCLAMATION','QUESTION',_0x2200f6(0x561),'HEART',_0x2200f6(0x2dd),'SWEAT',_0x2200f6(0x2a4),_0x2200f6(0x16e),_0x2200f6(0x315),_0x2200f6(0x281),'','','','',''][_0x14c00a];this['setPose'](_0xaa0dd,_0x4ce006);}},Game_CharacterBase[_0x2dfc49(0x380)]['clearPose']=function(){const _0x554958=_0x2dfc49;this[_0x554958(0x395)]='',this[_0x554958(0x1d7)]=0x0;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x4ef)]=function(){const _0x5f08a0=_0x2dfc49;return this[_0x5f08a0(0x1c0)]()&&!!this['_pose'];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x284)]=function(){const _0x151dc9=_0x2dfc49,_0x4a5437=this[_0x151dc9(0x395)][_0x151dc9(0x3dc)]();switch(this[_0x151dc9(0x395)][_0x151dc9(0x3dc)]()[_0x151dc9(0x415)]()){case _0x151dc9(0x239):case _0x151dc9(0x358):case _0x151dc9(0x386):case _0x151dc9(0x14a):case _0x151dc9(0x3bb):case'COLLAPSE':return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype']['getPosingCharacterDirection']=function(){const _0xe7a345=_0x2dfc49;switch(this[_0xe7a345(0x395)][_0xe7a345(0x3dc)]()){case _0xe7a345(0x4a7):case _0xe7a345(0x3da):case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0xe7a345(0x438):case _0xe7a345(0x2dd):case'SWEAT':return 0x4;break;case _0xe7a345(0x239):case'HMPH':case _0xe7a345(0x386):case _0xe7a345(0x2a4):case _0xe7a345(0x16e):case _0xe7a345(0x315):return 0x6;break;case _0xe7a345(0x14a):case _0xe7a345(0x3bb):case _0xe7a345(0x368):case'ZZZ':case _0xe7a345(0x418):return 0x8;break;default:return VisuMZ[_0xe7a345(0x426)]['Game_CharacterBase_setDirection']['call'](this);break;}},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x609)]=function(){const _0x43f4a4=_0x2dfc49;switch(this[_0x43f4a4(0x395)]['toUpperCase']()){case'ITEM':case _0x43f4a4(0x14a):case _0x43f4a4(0x4a7):case'!':case'HEART':case _0x43f4a4(0x2a4):return 0x0;break;case'HMPH':case'KNEEL':case _0x43f4a4(0x3da):case'?':case _0x43f4a4(0x2dd):case _0x43f4a4(0x16e):return 0x1;break;case _0x43f4a4(0x386):case _0x43f4a4(0x368):case _0x43f4a4(0x561):case _0x43f4a4(0x15c):case'LIGHT\x20BULB':return 0x2;break;default:return VisuMZ[_0x43f4a4(0x426)][_0x43f4a4(0x2d5)][_0x43f4a4(0x3a5)](this);break;}},Game_CharacterBase['prototype']['forceCarrying']=function(){const _0x5c145e=_0x2dfc49;this[_0x5c145e(0x559)]=!![];},Game_CharacterBase[_0x2dfc49(0x380)]['clearCarrying']=function(){const _0x5557ee=_0x2dfc49;this[_0x5557ee(0x559)]=![];},Game_CharacterBase['prototype'][_0x2dfc49(0x144)]=function(){const _0xa6f57d=_0x2dfc49;this[_0xa6f57d(0x20f)]=!![];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x235)]=function(){this['_forceDashing']=![];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x5de)]=function(){const _0x37bc1f=_0x2dfc49;if(this[_0x37bc1f(0x2f5)]())return![];if(this[_0x37bc1f(0x421)])return![];if(this[_0x37bc1f(0x1c2)]==='')return![];if(this[_0x37bc1f(0x345)]===Game_Vehicle)return![];if(this['isTransparent']())return![];return!![];},Game_CharacterBase[_0x2dfc49(0x380)]['isShadowShrink']=function(){const _0x2f34dd=_0x2dfc49;if(this['isOnLadder']())return!![];if(this[_0x2f34dd(0x345)]===Game_Player&&this['isInVehicle']())return!![];return![];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x54e)]=function(){const _0x37cb61=_0x2dfc49;return VisuMZ[_0x37cb61(0x426)][_0x37cb61(0x4c8)][_0x37cb61(0x44a)][_0x37cb61(0x3c8)];},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x3c3)]=function(){const _0x1f750d=_0x2dfc49;return this[_0x1f750d(0x275)]();},Game_CharacterBase['prototype']['shadowY']=function(){const _0x415769=_0x2dfc49,_0x47e45d=$gameMap[_0x415769(0x58c)]();return Math[_0x415769(0x5f0)](this[_0x415769(0x390)]()*_0x47e45d+_0x47e45d);},Game_CharacterBase[_0x2dfc49(0x19c)]=0x64,Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x4ca)]=function(_0xfc4cb1,_0x330e4e){const _0x467c42=_0x2dfc49;if(TouchInput[_0x467c42(0x613)]())return![];if(!$gameMap[_0x467c42(0x4cb)]())return![];if($gameMap[_0x467c42(0x508)](_0xfc4cb1,_0x330e4e)[_0x467c42(0x4f1)]>0x0)return![];if(!$gameMap[_0x467c42(0x38a)](_0xfc4cb1,_0x330e4e))return![];const _0x378d02=$gameMap[_0x467c42(0x4a3)][_0x467c42(0x4f1)];if(_0x378d02>=Game_CharacterBase[_0x467c42(0x19c)])return![];return!![];},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x18e)]=function(_0x2be844,_0x4b0f63){const _0x54215f=_0x2dfc49;let _0x4807d5=this[_0x54215f(0x5fa)](_0x2be844,_0x4b0f63);if(!this[_0x54215f(0x4ca)](_0x2be844,_0x4b0f63))return _0x4807d5;if(this[_0x54215f(0x59f)](_0x2be844,_0x4b0f63))return _0x4807d5;const _0x11c1db=_0x4807d5;if(_0x4807d5===0x2){if(_0x2be844>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0x4807d5=0x3;if(_0x2be844<this['x']&&this[_0x54215f(0x414)](this['x'],this['y'],0x4))_0x4807d5=0x1;}else{if(_0x4807d5===0x4){if(_0x4b0f63>this['y']&&this[_0x54215f(0x414)](this['x'],this['y'],0x4))_0x4807d5=0x1;if(_0x4b0f63<this['y']&&this[_0x54215f(0x414)](this['x'],this['y'],0x6))_0x4807d5=0x7;}else{if(_0x4807d5===0x6){if(_0x4b0f63>this['y']&&this[_0x54215f(0x414)](this['x'],this['y'],0x4))_0x4807d5=0x3;if(_0x4b0f63<this['y']&&this[_0x54215f(0x414)](this['x'],this['y'],0x6))_0x4807d5=0x9;}else{if(_0x4807d5===0x8){if(_0x2be844>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0x4807d5=0x9;if(_0x2be844<this['x']&&this[_0x54215f(0x414)](this['x'],this['y'],0x4))_0x4807d5=0x7;}}}}if(!this[_0x54215f(0x414)](this['x'],this['y'],_0x4807d5))return _0x11c1db;const _0x31609c=$gameMap['roundXWithDirection'](this['x'],_0x4807d5),_0x36c796=$gameMap[_0x54215f(0x37d)](this['y'],_0x4807d5);if(this[_0x54215f(0x59f)](_0x31609c,_0x36c796))_0x4807d5=_0x11c1db;return _0x4807d5;},VisuMZ['EventsMoveCore'][_0x2dfc49(0x188)]=Game_CharacterBase['prototype'][_0x2dfc49(0x414)],Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x414)]=function(_0x4cc60e,_0x28d6af,_0x2ad87f){const _0x34055f=_0x2dfc49;return this[_0x34055f(0x257)]===_0x34055f(0x452)?this['vehicle']()[_0x34055f(0x41e)](_0x4cc60e,_0x28d6af,_0x2ad87f):VisuMZ['EventsMoveCore'][_0x34055f(0x188)][_0x34055f(0x3a5)](this,_0x4cc60e,_0x28d6af,_0x2ad87f);},Game_CharacterBase[_0x2dfc49(0x380)]['clearSpriteOffsets']=function(){const _0x6e8996=_0x2dfc49;this[_0x6e8996(0x3f7)]=0x0,this[_0x6e8996(0x16d)]=0x0;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x13a)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x275)],Game_CharacterBase[_0x2dfc49(0x380)]['screenX']=function(){const _0xb0df1f=_0x2dfc49;return VisuMZ[_0xb0df1f(0x426)][_0xb0df1f(0x13a)][_0xb0df1f(0x3a5)](this)+(this[_0xb0df1f(0x3f7)]||0x0);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x193)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x153)],Game_CharacterBase['prototype'][_0x2dfc49(0x153)]=function(){const _0x21ad0c=_0x2dfc49;return VisuMZ['EventsMoveCore'][_0x21ad0c(0x193)]['call'](this)+(this[_0x21ad0c(0x16d)]||0x0);},Game_CharacterBase[_0x2dfc49(0x373)]=VisuMZ['EventsMoveCore'][_0x2dfc49(0x4c8)][_0x2dfc49(0x44a)][_0x2dfc49(0x4eb)]??-0x6,Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x2bb)]=function(){const _0x508981=_0x2dfc49;let _0x3abf96=this[_0x508981(0x278)]()?0x0:-Game_CharacterBase[_0x508981(0x373)];return this[_0x508981(0x2b6)]&&(_0x3abf96*=this[_0x508981(0x2b6)]),Math[_0x508981(0x256)](_0x3abf96);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x4da)]=function(){const _0x26f34d=_0x2dfc49;this[_0x26f34d(0x189)]='';},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x1f7)]=Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x217)],Game_CharacterBase['prototype'][_0x2dfc49(0x217)]=function(){const _0x5355ec=_0x2dfc49;if(this[_0x5355ec(0x401)])return;if(this[_0x5355ec(0x1d0)]())return;VisuMZ[_0x5355ec(0x426)][_0x5355ec(0x1f7)][_0x5355ec(0x3a5)](this);},Game_CharacterBase['prototype']['updatePatternEventsMoveCore']=function(){const _0x92d13b=_0x2dfc49;if(!this['hasStepAnime']()&&this[_0x92d13b(0x517)]>0x0)return![];switch(String(this['_stepPattern'])['toUpperCase']()['trim']()){case _0x92d13b(0x318):this[_0x92d13b(0x442)]+=0x1;if(this[_0x92d13b(0x442)]>0x2)this['setPattern'](0x0);break;case _0x92d13b(0x5f2):this[_0x92d13b(0x442)]-=0x1;if(this['_pattern']<0x0)this[_0x92d13b(0x4e1)](0x2);break;case _0x92d13b(0x396):case _0x92d13b(0x3f8):this['turnRight90']();break;case _0x92d13b(0x35f):case'SPIN\x20CCW':case _0x92d13b(0x33f):case'SPIN\x20ACW':this[_0x92d13b(0x3ad)]();break;default:return![];}return!![];},Game_CharacterBase['prototype'][_0x2dfc49(0x4db)]=function(){const _0x1d8edb=_0x2dfc49;return $gameSystem[_0x1d8edb(0x4db)](this);},Game_CharacterBase['prototype']['hasEventIcon']=function(){const _0x3e19ea=_0x2dfc49,_0x2a648c=this[_0x3e19ea(0x4db)]();if(!_0x2a648c)return![];return _0x2a648c[_0x3e19ea(0x402)]>0x0;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x14f)]=function(){const _0x2208d3=_0x2dfc49,_0x994e34=this['direction']();return $gameMap[_0x2208d3(0x2db)](this['x'],_0x994e34);},Game_CharacterBase['prototype'][_0x2dfc49(0x4e5)]=function(){const _0x111d36=_0x2dfc49,_0xb25d4=this[_0x111d36(0x163)]();return $gameMap[_0x111d36(0x37d)](this['y'],_0xb25d4);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x592)]=function(){const _0x4ed644=_0x2dfc49,_0x22e4e8=this[_0x4ed644(0x14b)](this[_0x4ed644(0x163)]());return $gameMap[_0x4ed644(0x2db)](this['x'],_0x22e4e8);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x340)]=function(){const _0x1c3761=_0x2dfc49,_0x573921=this[_0x1c3761(0x14b)](this[_0x1c3761(0x163)]());return $gameMap[_0x1c3761(0x37d)](this['y'],_0x573921);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x2c9)]=function(){const _0x53eead=_0x2dfc49,_0x2e95ba=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x53eead(0x163)]()];return $gameMap[_0x53eead(0x2db)](this['x'],_0x2e95ba);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x21f)]=function(){const _0x15ba9a=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this['direction']()];return $gameMap['roundYWithDirection'](this['y'],_0x15ba9a);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x3ac)]=function(){const _0x4a4104=_0x2dfc49,_0x41c803=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x4a4104(0x163)]()];return $gameMap['roundXWithDirection'](this['x'],_0x41c803);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x464)]=function(){const _0x16f83b=_0x2dfc49,_0x1ad615=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this['direction']()];return $gameMap[_0x16f83b(0x37d)](this['y'],_0x1ad615);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x516)]=Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5f6)],Game_Character[_0x2dfc49(0x380)]['setMoveRoute']=function(_0x47eb33){const _0x4e701d=_0x2dfc49;route=JsonEx[_0x4e701d(0x2a6)](_0x47eb33),VisuMZ['EventsMoveCore']['Game_Character_setMoveRoute'][_0x4e701d(0x3a5)](this,route);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x397)]=Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5ec)],Game_Character['prototype']['forceMoveRoute']=function(_0x4a6de7){const _0x11d99f=_0x2dfc49;route=JsonEx['makeDeepCopy'](_0x4a6de7),VisuMZ[_0x11d99f(0x426)][_0x11d99f(0x397)][_0x11d99f(0x3a5)](this,route);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x12c)]=Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x159)],Game_Character['prototype']['processMoveCommand']=function(_0x5acd47){const _0x1363e9=_0x2dfc49,_0x11ef16=Game_Character,_0x1e7efc=_0x5acd47[_0x1363e9(0x231)];if(_0x5acd47[_0x1363e9(0x169)]===_0x11ef16[_0x1363e9(0x523)]){let _0x300214=_0x5acd47[_0x1363e9(0x231)][0x0];_0x300214=this[_0x1363e9(0x2d9)](_0x300214),_0x300214=this[_0x1363e9(0x607)](_0x300214),this[_0x1363e9(0x42a)](_0x5acd47,_0x300214);}else VisuMZ[_0x1363e9(0x426)][_0x1363e9(0x12c)]['call'](this,_0x5acd47);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x2d9)]=function(_0x35292d){const _0x497859=_0x2dfc49,_0x57c59f=/\$gameVariables\.value\((\d+)\)/gi,_0x14c7b3=/\\V\[(\d+)\]/gi;while(_0x35292d[_0x497859(0x183)](_0x57c59f)){_0x35292d=_0x35292d[_0x497859(0x31c)](_0x57c59f,(_0x8cdf45,_0x2f4100)=>$gameVariables[_0x497859(0x323)](parseInt(_0x2f4100)));}while(_0x35292d['match'](_0x14c7b3)){_0x35292d=_0x35292d[_0x497859(0x31c)](_0x14c7b3,(_0x4a6abc,_0x205c77)=>$gameVariables[_0x497859(0x323)](parseInt(_0x205c77)));}return _0x35292d;},Game_Character[_0x2dfc49(0x380)]['convertSelfVariableValuesInScriptCall']=function(_0x5782c9){const _0x4c80c6=_0x2dfc49,_0x3ce1f6=/\\SELFVAR\[(\d+)\]/gi;while(_0x5782c9[_0x4c80c6(0x183)](_0x3ce1f6)){_0x5782c9=_0x5782c9[_0x4c80c6(0x31c)](_0x3ce1f6,(_0x4d0cec,_0x3d0f6b)=>getSelfVariableValue(this[_0x4c80c6(0x3c6)],this[_0x4c80c6(0x4d7)],parseInt(_0x3d0f6b)));}return _0x5782c9;},Game_Character['prototype'][_0x2dfc49(0x42a)]=function(_0x2b5be7,_0x262d73){const _0x318acf=_0x2dfc49;if(_0x262d73['match'](/ANIMATION:[ ](\d+)/i))return this['processMoveRouteAnimation'](Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/BALLOON:[ ](.*)/i))return this[_0x318acf(0x226)](String(RegExp['$1']));if(_0x262d73['match'](/FADE IN:[ ](\d+)/i))return this[_0x318acf(0x57f)](Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/FADE OUT:[ ](\d+)/i))return this[_0x318acf(0x4c1)](Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x318acf(0x195)]();if(_0x262d73[_0x318acf(0x183)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x318acf(0x482)]();if(_0x262d73['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x318acf(0x144)]();if(_0x262d73['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x318acf(0x235)]();if(_0x262d73['match'](/HUG:[ ]LEFT/i))return this['processMoveRouteHugWall'](_0x318acf(0x5c9));if(_0x262d73[_0x318acf(0x183)](/HUG:[ ]RIGHT/i))return this[_0x318acf(0x5ef)](_0x318acf(0x5ee));if(_0x262d73[_0x318acf(0x183)](/INDEX:[ ](\d+)/i))return this[_0x318acf(0x1bd)](Number(RegExp['$1']));if(_0x262d73['match'](/INDEX:[ ]([\+\-]\d+)/i)){const _0x404423=this[_0x318acf(0x606)]+Number(RegExp['$1']);return this[_0x318acf(0x1bd)](_0x404423);}if(_0x262d73[_0x318acf(0x183)](/JUMP FORWARD:[ ](\d+)/i))return this['processMoveRouteJumpForward'](Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x318acf(0x266)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x262d73[_0x318acf(0x183)](/JUMP TO EVENT:[ ](\d+)/i)){const _0x407777=$gameMap['event'](Number(RegExp['$1']));return this[_0x318acf(0x5f1)](_0x407777);}if(_0x262d73[_0x318acf(0x183)](/JUMP TO PLAYER/i))return this[_0x318acf(0x5f1)]($gamePlayer);if(_0x262d73[_0x318acf(0x183)](/JUMP TO HOME/i)&&this[_0x318acf(0x574)]){const _0x493b01=this['_randomHomeX'],_0x4e1098=this[_0x318acf(0x32d)];return this[_0x318acf(0x266)](_0x493b01,_0x4e1098);}if(_0x262d73[_0x318acf(0x183)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x49392e=String(RegExp['$1']),_0x218eef=this[_0x318acf(0x5e2)](_0x262d73);return this[_0x318acf(0x4e6)](_0x49392e,_0x218eef);}if(_0x262d73[_0x318acf(0x183)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x257904=Number(RegExp['$1']),_0x3f8eeb=Number(RegExp['$2']),_0x303d47=this[_0x318acf(0x5e2)](_0x262d73);return this[_0x318acf(0x1cd)](_0x257904,_0x3f8eeb,_0x303d47);}if(_0x262d73[_0x318acf(0x183)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x2e73cb=$gameMap['event'](Number(RegExp['$1'])),_0x5ccb45=this[_0x318acf(0x5e2)](_0x262d73);return this['processMoveRouteMoveToCharacter'](_0x2e73cb,_0x5ccb45);}if(_0x262d73['match'](/MOVE TO PLAYER/i)){const _0x5c527e=this['checkCollisionKeywords'](_0x262d73);return this[_0x318acf(0x178)]($gamePlayer,_0x5c527e);}if(_0x262d73[_0x318acf(0x183)](/MOVE TO HOME/i)&&this[_0x318acf(0x574)]){const _0x89c152=this['_randomHomeX'],_0x5ca4da=this[_0x318acf(0x32d)],_0x23c8a3=this['checkCollisionKeywords'](_0x262d73);return this[_0x318acf(0x1cd)](_0x89c152,_0x5ca4da,_0x23c8a3);}if(_0x262d73['match'](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x318acf(0x370)](0x1,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE DOWN:[ ](\d+)/i))return this[_0x318acf(0x370)](0x2,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x3,Number(RegExp['$1']));if(_0x262d73['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x318acf(0x370)](0x4,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE RIGHT:[ ](\d+)/i))return this[_0x318acf(0x370)](0x6,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x318acf(0x370)](0x7,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE UP:[ ](\d+)/i))return this[_0x318acf(0x370)](0x8,Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/MOVE UPPER RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x9,Number(RegExp['$1']));if(_0x262d73['match'](/OPACITY:[ ](\d+)([%％])/i)){const _0x1b625a=Math['round'](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x1b625a[_0x318acf(0x5ff)](0x0,0xff));}if(_0x262d73[_0x318acf(0x183)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0xade84f=this[_0x318acf(0x57b)]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0x318acf(0x394)](_0xade84f[_0x318acf(0x5ff)](0x0,0xff));}if(_0x262d73[_0x318acf(0x183)](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x52ef2e=this[_0x318acf(0x57b)]+Number(RegExp['$1']);return this['setOpacity'](_0x52ef2e[_0x318acf(0x5ff)](0x0,0xff));}if(_0x262d73['match'](/PATTERN LOCK:[ ](\d+)/i))return this[_0x318acf(0x22f)](Number(RegExp['$1']));if(_0x262d73[_0x318acf(0x183)](/PATTERN UNLOCK/i))return this[_0x318acf(0x401)]=![];if(_0x262d73[_0x318acf(0x183)](/POSE:[ ](.*)/i)){const _0x2ed040=String(RegExp['$1'])[_0x318acf(0x3dc)]()[_0x318acf(0x415)]();return this[_0x318acf(0x23b)](_0x2ed040);}if(_0x262d73['match'](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x4d52bc=Number(RegExp['$1']),_0x2a7c6c=Number(RegExp['$2']);return this[_0x318acf(0x133)](_0x4d52bc,_0x2a7c6c);}if(_0x262d73['match'](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x2bcb4b=$gameMap['event'](Number(RegExp['$1']));return this[_0x318acf(0x502)](_0x2bcb4b);}if(_0x262d73['match'](/STEP TOWARD PLAYER/i))return this[_0x318acf(0x502)]($gamePlayer);if(_0x262d73[_0x318acf(0x183)](/STEP TOWARD HOME/i)&&this[_0x318acf(0x574)]){const _0x405fe2=this[_0x318acf(0x1ee)],_0x271dfb=this[_0x318acf(0x32d)];return this[_0x318acf(0x133)](_0x405fe2,_0x271dfb);}if(_0x262d73[_0x318acf(0x183)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x318acf(0x51f)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x262d73[_0x318acf(0x183)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x46decf=$gameMap[_0x318acf(0x2b5)](Number(RegExp['$1']));return this[_0x318acf(0x49e)](_0x46decf);}if(_0x262d73[_0x318acf(0x183)](/STEP AWAY FROM PLAYER/i))return this['moveAwayFromCharacter']($gamePlayer);if(_0x262d73[_0x318acf(0x183)](/STEP AWAY FROM HOME/i)&&this[_0x318acf(0x574)]){const _0x8cd902=this[_0x318acf(0x1ee)],_0x55ed39=this[_0x318acf(0x32d)];return this['moveAwayFromPoint'](_0x8cd902,_0x55ed39);}if(_0x262d73['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['moveTowardPoint'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x262d73[_0x318acf(0x183)](/TURN TO EVENT:[ ](\d+)/i)){const _0x8f4b27=$gameMap[_0x318acf(0x2b5)](Number(RegExp['$1']));return this['turnTowardCharacter'](_0x8f4b27);}if(_0x262d73[_0x318acf(0x183)](/TURN TO PLAYER/i))return this[_0x318acf(0x3e9)]($gamePlayer);if(_0x262d73[_0x318acf(0x183)](/TURN TO HOME/i)&&this[_0x318acf(0x574)]){const _0x1815d5=this[_0x318acf(0x1ee)],_0x2c97a3=this['_randomHomeY'];return this['turnTowardPoint'](_0x1815d5,_0x2c97a3);}if(_0x262d73[_0x318acf(0x183)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x318acf(0x138)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x262d73[_0x318acf(0x183)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0xe252db=$gameMap[_0x318acf(0x2b5)](Number(RegExp['$1']));return this[_0x318acf(0x1d8)](_0xe252db);}if(_0x262d73[_0x318acf(0x183)](/TURN AWAY FROM PLAYER/i))return this['turnAwayFromCharacter']($gamePlayer);if(_0x262d73['match'](/TURN AWAY FROM HOME/i)&&this[_0x318acf(0x574)]){const _0x539134=this[_0x318acf(0x1ee)],_0x50b638=this[_0x318acf(0x32d)];return this['turnAwayFromPoint'](_0x539134,_0x50b638);}if(_0x262d73[_0x318acf(0x183)](/TURN LOWER LEFT/i))return this[_0x318acf(0x5c6)](0x1);if(_0x262d73[_0x318acf(0x183)](/TURN LOWER RIGHT/i))return this[_0x318acf(0x5c6)](0x3);if(_0x262d73[_0x318acf(0x183)](/TURN UPPER LEFT/i))return this[_0x318acf(0x5c6)](0x7);if(_0x262d73[_0x318acf(0x183)](/TURN UPPER RIGHT/i))return this['setDirection'](0x9);if(_0x262d73[_0x318acf(0x183)](/Self Switch[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfSwitch'](RegExp['$1'],RegExp['$2']);if(_0x262d73[_0x318acf(0x183)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x318acf(0x1eb)](RegExp['$1'],RegExp['$2']);if(_0x262d73[_0x318acf(0x183)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x318acf(0x1f0)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x262d73['match'](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x1fe47b=$gameMap[_0x318acf(0x2b5)](Number(RegExp['$1']));return this[_0x318acf(0x303)](_0x1fe47b);}if(_0x262d73[_0x318acf(0x183)](/TELEPORT TO PLAYER/i))return this['processMoveRouteTeleportToCharacter']($gamePlayer);if(_0x262d73[_0x318acf(0x183)](/TELEPORT TO HOME/i)&&this[_0x318acf(0x574)]){const _0xe29993=this['_randomHomeX'],_0x1c60fd=this[_0x318acf(0x32d)];return this['processMoveRouteTeleportTo'](_0xe29993,_0x1c60fd);}try{VisuMZ[_0x318acf(0x426)][_0x318acf(0x12c)]['call'](this,_0x2b5be7);}catch(_0x502684){if($gameTemp['isPlaytest']())console[_0x318acf(0x4dc)](_0x502684);}},Game_Character[_0x2dfc49(0x380)]['processMoveRouteAnimation']=function(_0xc834a8){const _0x48d40e=_0x2dfc49;$gameTemp[_0x48d40e(0x599)]([this],_0xc834a8);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x226)]=function(_0x3afccb){const _0x3cb3e8=_0x2dfc49;let _0x33327c=0x0;switch(_0x3afccb[_0x3cb3e8(0x3dc)]()['trim']()){case'!':case _0x3cb3e8(0x4a7):_0x33327c=0x1;break;case'?':case _0x3cb3e8(0x3da):_0x33327c=0x2;break;case'MUSIC':case'NOTE':case'MUSIC\x20NOTE':case _0x3cb3e8(0x5ac):case _0x3cb3e8(0x1a6):_0x33327c=0x3;break;case'HEART':case _0x3cb3e8(0x33c):_0x33327c=0x4;break;case'ANGER':_0x33327c=0x5;break;case _0x3cb3e8(0x15c):_0x33327c=0x6;break;case'COBWEB':case _0x3cb3e8(0x1f4):case _0x3cb3e8(0x478):_0x33327c=0x7;break;case _0x3cb3e8(0x16e):case _0x3cb3e8(0x4f2):_0x33327c=0x8;break;case _0x3cb3e8(0x38b):case _0x3cb3e8(0x54a):case _0x3cb3e8(0x315):case'LIGHT-BULB':case _0x3cb3e8(0x2f2):_0x33327c=0x9;break;case'Z':case'ZZ':case _0x3cb3e8(0x281):case _0x3cb3e8(0x418):_0x33327c=0xa;break;case'USER-DEFINED\x201':_0x33327c=0xb;break;case _0x3cb3e8(0x41d):_0x33327c=0xc;break;case _0x3cb3e8(0x4a5):_0x33327c=0xd;break;case'USER-DEFINED\x204':_0x33327c=0xe;break;case'USER-DEFINED\x205':_0x33327c=0xf;break;}$gameTemp['requestBalloon'](this,_0x33327c);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x57f)]=function(_0x5328ac){const _0x123c6e=_0x2dfc49;_0x5328ac+=this[_0x123c6e(0x57b)],this[_0x123c6e(0x394)](_0x5328ac[_0x123c6e(0x5ff)](0x0,0xff));if(this[_0x123c6e(0x57b)]<0xff)this[_0x123c6e(0x3fd)]--;},Game_Character['prototype']['processMoveRouteFadeOut']=function(_0x2230e3){const _0x5e4773=_0x2dfc49;_0x2230e3=this[_0x5e4773(0x57b)]-_0x2230e3,this[_0x5e4773(0x394)](_0x2230e3[_0x5e4773(0x5ff)](0x0,0xff));if(this[_0x5e4773(0x57b)]>0x0)this[_0x5e4773(0x3fd)]--;},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5ef)]=function(_0x110e50){const _0x8abb40=_0x2dfc49,_0x4beac6=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x455b10=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x7ccd3e=this[_0x8abb40(0x163)](),_0x239659=(_0x110e50===_0x8abb40(0x5c9)?_0x4beac6:_0x455b10)[_0x7ccd3e],_0x482193=(_0x110e50===_0x8abb40(0x5c9)?_0x455b10:_0x4beac6)[_0x7ccd3e];if(this['canPass'](this['x'],this['y'],_0x239659))_0x110e50===_0x8abb40(0x5c9)?this['turnLeft90']():this[_0x8abb40(0x25c)]();else!this[_0x8abb40(0x414)](this['x'],this['y'],this[_0x8abb40(0x163)]())&&(this[_0x8abb40(0x414)](this['x'],this['y'],_0x482193)?_0x110e50===_0x8abb40(0x5c9)?this[_0x8abb40(0x25c)]():this[_0x8abb40(0x3ad)]():this['turn180']());this[_0x8abb40(0x414)](this['x'],this['y'],this[_0x8abb40(0x163)]())&&this['moveForward']();},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x1bd)]=function(_0x15566e){const _0x4b5399=_0x2dfc49;if(ImageManager[_0x4b5399(0x155)](this[_0x4b5399(0x1c2)]))return;_0x15566e=_0x15566e[_0x4b5399(0x5ff)](0x0,0x7),this[_0x4b5399(0x4af)](this[_0x4b5399(0x1c2)],_0x15566e);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x3ae)]=function(_0x53405b){const _0xe7ea7c=_0x2dfc49;switch(this[_0xe7ea7c(0x163)]()){case 0x1:this[_0xe7ea7c(0x3b5)](-_0x53405b,_0x53405b);break;case 0x2:this[_0xe7ea7c(0x3b5)](0x0,_0x53405b);break;case 0x3:this['jump'](_0x53405b,_0x53405b);break;case 0x4:this[_0xe7ea7c(0x3b5)](-_0x53405b,0x0);break;case 0x6:this[_0xe7ea7c(0x3b5)](_0x53405b,0x0);break;case 0x7:this[_0xe7ea7c(0x3b5)](-_0x53405b,-_0x53405b);break;case 0x8:this[_0xe7ea7c(0x3b5)](0x0,-_0x53405b);break;case 0x9:this[_0xe7ea7c(0x3b5)](_0x53405b,-_0x53405b);break;}},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x266)]=function(_0x5bf366,_0x5b1a4b){const _0x286d0f=_0x2dfc49,_0x24f9fc=Math[_0x286d0f(0x256)](_0x5bf366-this['x']),_0x3a7f2a=Math[_0x286d0f(0x256)](_0x5b1a4b-this['y']);this['jump'](_0x24f9fc,_0x3a7f2a);},Game_Character[_0x2dfc49(0x380)]['processMoveRouteJumpToCharacter']=function(_0x8f2696){const _0x1ef882=_0x2dfc49;if(_0x8f2696)this[_0x1ef882(0x266)](_0x8f2696['x'],_0x8f2696['y']);},Game_Character[_0x2dfc49(0x380)]['processMoveRouteStepTo']=function(_0x2414ea,_0x2da666,_0x2bd4cd){const _0x4ce2ea=_0x2dfc49;let _0x556ac0=0x0;if(_0x2bd4cd)$gameTemp[_0x4ce2ea(0x5a7)]=!![];$gameMap[_0x4ce2ea(0x4cb)]()?_0x556ac0=this[_0x4ce2ea(0x18e)](_0x2414ea,_0x2da666):_0x556ac0=this[_0x4ce2ea(0x5fa)](_0x2414ea,_0x2da666);if(_0x2bd4cd)$gameTemp[_0x4ce2ea(0x5a7)]=![];this['executeMoveDir8'](_0x556ac0),this[_0x4ce2ea(0x532)](!![]);},Game_Character['prototype'][_0x2dfc49(0x502)]=function(_0x187c44){const _0x5cb496=_0x2dfc49;if(_0x187c44)this[_0x5cb496(0x133)](_0x187c44['x'],_0x187c44['y']);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x152)]=function(_0x5a753c,_0xe823a1){const _0x1867da=_0x2dfc49,_0x9fd238=this['deltaXFrom'](_0x5a753c),_0x39c680=this[_0x1867da(0x37c)](_0xe823a1);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5e2)]=function(_0x1115ce){const _0x2e15e0=_0x2dfc49;if(_0x1115ce[_0x2e15e0(0x183)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x1115ce[_0x2e15e0(0x183)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ['EventsMoveCore']['Game_Event_isCollidedWithPlayerCharacters']=Game_Event['prototype'][_0x2dfc49(0x4d3)],Game_Event[_0x2dfc49(0x380)]['isCollidedWithPlayerCharacters']=function(_0x559209,_0x372361){const _0x5cef95=_0x2dfc49;if($gameTemp[_0x5cef95(0x5a7)])return![];return VisuMZ['EventsMoveCore'][_0x5cef95(0x1b4)][_0x5cef95(0x3a5)](this,_0x559209,_0x372361);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x4e6)]=function(_0x4952e2,_0x1ab578){const _0x50bde3=_0x2dfc49,_0x5145d5=['',_0x50bde3(0x12e),'DOWN',_0x50bde3(0x5ca),'LEFT','','RIGHT','UPPER\x20LEFT','UP',_0x50bde3(0x595)],_0x31456d=_0x5145d5[_0x50bde3(0x295)](_0x4952e2[_0x50bde3(0x3dc)]()[_0x50bde3(0x415)]());if(_0x31456d<=0x0)return;_0x1ab578&&($gameTemp[_0x50bde3(0x5a7)]=!![]),this[_0x50bde3(0x414)](this['x'],this['y'],_0x31456d)&&(_0x1ab578&&($gameTemp[_0x50bde3(0x5a7)]=![]),this['executeMoveDir8'](_0x31456d),this['_moveRouteIndex']-=0x1),_0x1ab578&&($gameTemp[_0x50bde3(0x5a7)]=![]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x3d5)]=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x25b)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x25b)]=function(_0x8731cb,_0x1013d1){const _0x4aaccf=_0x2dfc49;if(VisuMZ['EventsMoveCore']['Game_Event_checkEventTriggerTouch'][_0x4aaccf(0x3a5)](this,_0x8731cb,_0x1013d1))return!![];if($gameMap[_0x4aaccf(0x432)]())return![];for(let _0x280360=-this[_0x4aaccf(0x53c)][_0x4aaccf(0x5c9)];_0x280360<=this[_0x4aaccf(0x53c)][_0x4aaccf(0x5ee)];_0x280360++){for(let _0x337406=-this[_0x4aaccf(0x53c)]['up'];_0x337406<=this['_addedHitbox'][_0x4aaccf(0x564)];_0x337406++){if(VisuMZ[_0x4aaccf(0x426)][_0x4aaccf(0x3d5)]['call'](this,_0x8731cb+_0x280360,_0x1013d1+_0x337406))return!![];}}return![];},Game_Character['prototype'][_0x2dfc49(0x1cd)]=function(_0x402efe,_0x16fbb4,_0x49c7e8){const _0x28559d=_0x2dfc49;this[_0x28559d(0x133)](_0x402efe,_0x16fbb4,_0x49c7e8);if(this['x']!==_0x402efe||this['y']!==_0x16fbb4)this[_0x28559d(0x3fd)]--;},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x178)]=function(_0x30b2ac,_0x3832e2){const _0x377508=_0x2dfc49;if(_0x30b2ac&&!_0x30b2ac['_erased']){this[_0x377508(0x1cd)](_0x30b2ac['x'],_0x30b2ac['y'],_0x3832e2);if(_0x30b2ac[_0x377508(0x3d8)]()&&this[_0x377508(0x3d8)]()){const _0x826ee7=$gameMap['distance'](this['x'],this['y'],_0x30b2ac['x'],_0x30b2ac['y']);if(_0x826ee7<=0x1)this[_0x377508(0x3fd)]++;}}},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x370)]=function(_0x98cb30,_0x3962b4){const _0x1fcd36=_0x2dfc49;_0x3962b4=_0x3962b4||0x0;const _0x6d2e56={'code':0x1,'indent':null,'parameters':[]};_0x6d2e56['code']=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x98cb30],this[_0x1fcd36(0x355)][_0x1fcd36(0x377)][this['_moveRouteIndex']][_0x1fcd36(0x231)][0x0]='';while(_0x3962b4--){this['_moveRoute']['list'][_0x1fcd36(0x13e)](this[_0x1fcd36(0x3fd)]+0x1,0x0,_0x6d2e56);}},Game_Character[_0x2dfc49(0x380)]['processMoveRoutePatternLock']=function(_0x351ad1){const _0x4c5401=_0x2dfc49;this[_0x4c5401(0x401)]=!![],this['setPattern'](_0x351ad1);},Game_Character['prototype'][_0x2dfc49(0x39f)]=function(_0x218614,_0x4997f8){const _0x4fc357=_0x2dfc49;if(this===$gamePlayer)return;const _0x44f6ef=[this[_0x4fc357(0x3c6)],this[_0x4fc357(0x4d7)],'A'];_0x218614['match'](/\b[ABCD]\b/i)?_0x44f6ef[0x2]=String(_0x218614)[_0x4fc357(0x43d)](0x0)[_0x4fc357(0x3dc)]()[_0x4fc357(0x415)]():_0x44f6ef[0x2]=_0x4fc357(0x4cd)['format'](_0x218614);switch(_0x4997f8[_0x4fc357(0x3dc)]()['trim']()){case'ON':case _0x4fc357(0x4f5):$gameSelfSwitches['setValue'](_0x44f6ef,!![]);break;case _0x4fc357(0x352):case _0x4fc357(0x40b):$gameSelfSwitches['setValue'](_0x44f6ef,![]);break;case _0x4fc357(0x60a):$gameSelfSwitches[_0x4fc357(0x220)](_0x44f6ef,!$gameSelfSwitches[_0x4fc357(0x323)](_0x44f6ef));break;}},Game_Character['prototype'][_0x2dfc49(0x1eb)]=function(_0x6503be,_0x3aea72){const _0x1ffb87=_0x2dfc49;if(this===$gamePlayer)return;const _0xccccc5=[this['_mapId'],this[_0x1ffb87(0x4d7)],'Self\x20Variable\x20%1'[_0x1ffb87(0x286)](_0x6503be)];$gameSelfSwitches['setValue'](_0xccccc5,Number(_0x3aea72));},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x1f0)]=function(_0x5864b0,_0x5beead){const _0x1d6661=_0x2dfc49;this[_0x1d6661(0x351)](_0x5864b0,_0x5beead);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x303)]=function(_0x73ee31){const _0x5deae3=_0x2dfc49;if(_0x73ee31)this[_0x5deae3(0x1f0)](_0x73ee31['x'],_0x73ee31['y']);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x25c)]=function(){const _0x139ca3=_0x2dfc49;switch(this[_0x139ca3(0x163)]()){case 0x1:this['setDirection'](0x7);break;case 0x2:this[_0x139ca3(0x5c6)](0x4);break;case 0x3:this[_0x139ca3(0x5c6)](0x1);break;case 0x4:this[_0x139ca3(0x5c6)](0x8);break;case 0x6:this[_0x139ca3(0x5c6)](0x2);break;case 0x7:this[_0x139ca3(0x5c6)](0x9);break;case 0x8:this['setDirection'](0x6);break;case 0x9:this[_0x139ca3(0x5c6)](0x3);break;}},Game_Character[_0x2dfc49(0x380)]['turnLeft90']=function(){const _0x4df853=_0x2dfc49;switch(this[_0x4df853(0x163)]()){case 0x1:this['setDirection'](0x3);break;case 0x2:this['setDirection'](0x6);break;case 0x3:this[_0x4df853(0x5c6)](0x9);break;case 0x4:this['setDirection'](0x2);break;case 0x6:this['setDirection'](0x8);break;case 0x7:this[_0x4df853(0x5c6)](0x1);break;case 0x8:this['setDirection'](0x4);break;case 0x9:this[_0x4df853(0x5c6)](0x7);break;}},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x1a1)]=function(_0x19209e,_0x1faba2,_0x5bbdff){const _0x7fed29=_0x2dfc49,_0x3b37dc=this['deltaXFrom'](_0x19209e),_0xcabbf4=this[_0x7fed29(0x37c)](_0x1faba2);if($gameMap[_0x7fed29(0x4cb)]()){if(_0x5bbdff||this[_0x7fed29(0x1c0)]()){if(_0x3b37dc>0x0&&_0xcabbf4<0x0)return 0x1;if(_0x3b37dc<0x0&&_0xcabbf4<0x0)return 0x3;if(_0x3b37dc>0x0&&_0xcabbf4>0x0)return 0x7;if(_0x3b37dc<0x0&&_0xcabbf4>0x0)return 0x9;}}if(Math['abs'](_0x3b37dc)>Math['abs'](_0xcabbf4))return _0x3b37dc>0x0?0x4:0x6;else{if(_0xcabbf4!==0x0)return _0xcabbf4>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x460)]=function(_0x2e1fa4,_0x2f50fe,_0xfe3668){const _0x2baece=_0x2dfc49,_0x1031b4=this[_0x2baece(0x600)](_0x2e1fa4),_0x477ab5=this['deltaYFrom'](_0x2f50fe);if($gameMap[_0x2baece(0x4cb)]()){if(_0xfe3668||this['isSpriteVS8dir']()){if(_0x1031b4>0x0&&_0x477ab5<0x0)return 0x9;if(_0x1031b4<0x0&&_0x477ab5<0x0)return 0x7;if(_0x1031b4>0x0&&_0x477ab5>0x0)return 0x3;if(_0x1031b4<0x0&&_0x477ab5>0x0)return 0x1;}}if(Math[_0x2baece(0x571)](_0x1031b4)>Math['abs'](_0x477ab5))return _0x1031b4>0x0?0x6:0x4;else{if(_0x477ab5!==0x0)return _0x477ab5>0x0?0x2:0x8;}return 0x0;},Game_Character['prototype'][_0x2dfc49(0x429)]=function(_0x476844,_0x2b0e6b){const _0x3ae790=_0x2dfc49,_0x2695dd=this[_0x3ae790(0x1a1)](_0x476844,_0x2b0e6b,!![]);if(_0x2695dd)this[_0x3ae790(0x4c5)](_0x2695dd);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x51f)]=function(_0x5e3602,_0x19223c){const _0x6bc6d5=_0x2dfc49,_0x1cf39d=this[_0x6bc6d5(0x460)](_0x5e3602,_0x19223c,!![]);if(_0x1cf39d)this['executeMoveDir8'](_0x1cf39d);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5e7)]=function(_0x4701ca,_0x315962){const _0x1746bd=_0x2dfc49,_0x2c3a94=this[_0x1746bd(0x1a1)](_0x4701ca,_0x315962,![]);if(_0x2c3a94)this[_0x1746bd(0x5c6)](_0x2c3a94);},Game_Character[_0x2dfc49(0x380)]['turnAwayFromPoint']=function(_0x1f16b7,_0x46ae54){const _0x13ca4a=_0x2dfc49,_0x587347=this['getDirectionFromPoint'](_0x1f16b7,_0x46ae54,![]);if(_0x587347)this[_0x13ca4a(0x5c6)](_0x587347);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x31d)]=function(_0x5729d6){const _0xb35904=_0x2dfc49;if(_0x5729d6)this[_0xb35904(0x429)](_0x5729d6['x'],_0x5729d6['y']);},Game_Character['prototype'][_0x2dfc49(0x49e)]=function(_0xb8d616){const _0x527424=_0x2dfc49;if(_0xb8d616)this[_0x527424(0x51f)](_0xb8d616['x'],_0xb8d616['y']);},Game_Character['prototype'][_0x2dfc49(0x3e9)]=function(_0x1e668d){const _0x427f56=_0x2dfc49;if(_0x1e668d)this[_0x427f56(0x5e7)](_0x1e668d['x'],_0x1e668d['y']);},Game_Character[_0x2dfc49(0x380)][_0x2dfc49(0x1d8)]=function(_0x69e33){const _0x26ee5e=_0x2dfc49;if(_0x69e33)this[_0x26ee5e(0x138)](_0x69e33['x'],_0x69e33['y']);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x1a3)]=Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x49b)],Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x49b)]=function(){const _0x2e1f65=_0x2dfc49;if(!Game_CharacterBase['ALLOW_LADDER_DASH']&&this[_0x2e1f65(0x2e9)]())return![];if(this[_0x2e1f65(0x20f)])return!![];return VisuMZ[_0x2e1f65(0x426)][_0x2e1f65(0x1a3)]['call'](this);},VisuMZ[_0x2dfc49(0x426)]['Game_Player_getInputDirection']=Game_Player[_0x2dfc49(0x380)]['getInputDirection'],Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x161)]=function(){const _0x5690d2=_0x2dfc49;return $gameMap['isSupportDiagonalMovement']()?this[_0x5690d2(0x46b)]():VisuMZ['EventsMoveCore'][_0x5690d2(0x3c0)][_0x5690d2(0x3a5)](this);},Game_Player['prototype'][_0x2dfc49(0x46b)]=function(){const _0x46e643=_0x2dfc49;return Input[_0x46e643(0x530)];},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x538)]=function(){const _0x9d4261=_0x2dfc49;if($gameSystem[_0x9d4261(0x1fa)]())return 0x0;if(!this[_0x9d4261(0x5ab)]()&&this['canMove']()){let _0x5a3071=this[_0x9d4261(0x161)]();if(_0x5a3071>0x0)$gameTemp[_0x9d4261(0x2de)]();else{if($gameTemp['isDestinationValid']()){const _0x34ccf6=$gameTemp[_0x9d4261(0x3eb)](),_0x5bf3d0=$gameTemp[_0x9d4261(0x55f)]();this[_0x9d4261(0x4ca)](_0x34ccf6,_0x5bf3d0)?_0x5a3071=this['findDiagonalDirectionTo'](_0x34ccf6,_0x5bf3d0):_0x5a3071=this[_0x9d4261(0x5fa)](_0x34ccf6,_0x5bf3d0);}}_0x5a3071>0x0?(this[_0x9d4261(0x4ec)]=this[_0x9d4261(0x4ec)]||0x0,this[_0x9d4261(0x5cc)]()?this[_0x9d4261(0x5c6)](_0x5a3071):this[_0x9d4261(0x3ed)](_0x5a3071),this[_0x9d4261(0x4ec)]++):this[_0x9d4261(0x4ec)]=0x0;}},Game_Player['prototype'][_0x2dfc49(0x5cc)]=function(){const _0x19ac26=_0x2dfc49,_0x5df8d4=VisuMZ[_0x19ac26(0x426)][_0x19ac26(0x4c8)][_0x19ac26(0x44a)];if(!_0x5df8d4[_0x19ac26(0x615)])return![];if($gameTemp[_0x19ac26(0x566)]())return![];if(this[_0x19ac26(0x49b)]()||this['isMoving']()||this[_0x19ac26(0x2e9)]())return![];return this['_inputTime']<_0x5df8d4[_0x19ac26(0x499)];},VisuMZ['EventsMoveCore'][_0x2dfc49(0x585)]=Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x3ed)],Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x3ed)]=function(_0x205e6d){const _0x3d3d8f=_0x2dfc49;$gameMap['isSupportDiagonalMovement']()?this[_0x3d3d8f(0x4c5)](_0x205e6d):VisuMZ[_0x3d3d8f(0x426)]['Game_Player_executeMove'][_0x3d3d8f(0x3a5)](this,_0x205e6d);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x398)]=Game_Player['prototype'][_0x2dfc49(0x2a3)],Game_Player['prototype'][_0x2dfc49(0x2a3)]=function(_0x214c05,_0x224a08,_0x46801a){const _0x255e6c=_0x2dfc49;if($gameMap[_0x255e6c(0x42f)](_0x214c05,_0x224a08,_0x46801a,_0x255e6c(0x4bc)))return this[_0x255e6c(0x409)]()&&this[_0x255e6c(0x477)]()?this[_0x255e6c(0x477)]()[_0x255e6c(0x2a3)](_0x214c05,_0x224a08,_0x46801a):!![];if($gameMap[_0x255e6c(0x244)](_0x214c05,_0x224a08,_0x46801a,_0x255e6c(0x4bc)))return![];return VisuMZ['EventsMoveCore'][_0x255e6c(0x398)][_0x255e6c(0x3a5)](this,_0x214c05,_0x224a08,_0x46801a);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x57e)]=Game_Player['prototype'][_0x2dfc49(0x367)],Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x367)]=function(_0x264325){const _0x3236e1=_0x2dfc49;VisuMZ['EventsMoveCore']['Game_Player_checkEventTriggerHere'][_0x3236e1(0x3a5)](this,_0x264325);if(this[_0x3236e1(0x331)]()){this[_0x3236e1(0x519)](_0x264325);if(_0x264325['includes'](0x0)&&this[_0x3236e1(0x404)]()===_0x3236e1(0x53a))this[_0x3236e1(0x206)](this['x'],this['y']);else(_0x264325[_0x3236e1(0x480)](0x1)||_0x264325['includes'](0x2))&&this['startMapCommonEventOnTouch']();}},VisuMZ[_0x2dfc49(0x426)]['Game_Player_checkEventTriggerThere']=Game_Player['prototype']['checkEventTriggerThere'],Game_Player['prototype'][_0x2dfc49(0x2be)]=function(_0x59088a){const _0x1444ee=_0x2dfc49;VisuMZ[_0x1444ee(0x426)][_0x1444ee(0x5ce)][_0x1444ee(0x3a5)](this,_0x59088a);if(this['canStartLocalEvents']()&&_0x59088a['includes'](0x0)&&this['startMapCommonEventOnOKTarget']()===_0x1444ee(0x179)){const _0x5eb47b=this[_0x1444ee(0x163)](),_0x2af8f9=$gameMap['roundXWithDirection'](this['x'],_0x5eb47b),_0x4a83f8=$gameMap[_0x1444ee(0x37d)](this['y'],_0x5eb47b);this[_0x1444ee(0x206)](_0x2af8f9,_0x4a83f8);}},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x519)]=function(_0x3b4f89){const _0x1be94b=_0x2dfc49;if($gameMap[_0x1be94b(0x432)]())return;if($gameMap[_0x1be94b(0x47d)]())return;const _0x4de5fb=$gameMap[_0x1be94b(0x4fa)]();for(const _0x2b23ef of _0x4de5fb){if(!_0x2b23ef)continue;if(!_0x2b23ef[_0x1be94b(0x325)](_0x3b4f89))continue;if(this['meetActivationRegionConditions'](_0x2b23ef))return _0x2b23ef[_0x1be94b(0x296)]();if(this['meetActivationProximityConditions'](_0x2b23ef))return _0x2b23ef[_0x1be94b(0x296)]();}},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x4b3)]=function(_0x337c1f){const _0x502fb3=_0x2dfc49;if($gameMap[_0x502fb3(0x432)]())return![];if($gameMap[_0x502fb3(0x47d)]())return![];return _0x337c1f[_0x502fb3(0x1f3)]()[_0x502fb3(0x480)](this['regionId']());},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x26c)]=function(_0x25d77a){const _0x351b2b=_0x2dfc49;if($gameMap[_0x351b2b(0x432)]())return![];if($gameMap['isAnyEventStarting']())return![];if([_0x351b2b(0x4c6),_0x351b2b(0x2c2)][_0x351b2b(0x480)](_0x25d77a[_0x351b2b(0x201)]()))return![];const _0x546f4d=_0x25d77a[_0x351b2b(0x201)](),_0x1f1941=_0x25d77a[_0x351b2b(0x26f)]();return this[_0x351b2b(0x35a)](_0x25d77a,_0x546f4d,_0x1f1941);},Game_Map['prototype']['checkEventProximity']=function(_0x51b8b5,_0x2ecd1b,_0xb47a6c,_0x269075,_0x2b8a29){const _0x40b35e=_0x2dfc49;switch(_0x269075){case _0x40b35e(0x329):return _0x2b8a29>=Math[_0x40b35e(0x571)](_0xb47a6c[_0x40b35e(0x600)](_0x51b8b5))&&_0x2b8a29>=Math['abs'](_0xb47a6c['deltaYFrom'](_0x2ecd1b));break;case _0x40b35e(0x343):const _0x458bb5=Math['pow'](_0xb47a6c['x']-_0x51b8b5,0x2),_0x3a2349=Math[_0x40b35e(0x3f0)](_0xb47a6c['y']-_0x2ecd1b,0x2);return _0x2b8a29>=Math[_0x40b35e(0x256)](Math['sqrt'](_0x458bb5+_0x3a2349));break;case _0x40b35e(0x544):case _0x40b35e(0x406):case _0x40b35e(0x483):const _0x297b85=$gameMap[_0x40b35e(0x3a3)](_0x51b8b5,_0x2ecd1b,_0xb47a6c['x'],_0xb47a6c['y']);return _0x2b8a29>=_0x297b85;break;case _0x40b35e(0x2fa):return _0x2b8a29>=Math['abs'](_0xb47a6c[_0x40b35e(0x37c)](_0x2ecd1b));break;case _0x40b35e(0x58a):return _0x2b8a29>=Math[_0x40b35e(0x571)](_0xb47a6c[_0x40b35e(0x600)](_0x51b8b5));break;}return![];},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x35a)]=function(_0x1b2978,_0x39e79e,_0x3794a1){const _0x5ad976=this['x'],_0x28b530=this['y'];return $gameMap['checkEventProximity'](_0x5ad976,_0x28b530,_0x1b2978,_0x39e79e,_0x3794a1);},Game_Player[_0x2dfc49(0x380)]['startMapCommonEventOnOK']=function(_0x44cc19,_0x38c262){const _0x55ab4d=_0x2dfc49;if($gameMap[_0x55ab4d(0x432)]())return;if($gameMap[_0x55ab4d(0x47d)]())return;let _0x145a89=VisuMZ['EventsMoveCore'][_0x55ab4d(0x4c8)][_0x55ab4d(0x157)],_0x23b08b=$gameMap[_0x55ab4d(0x5b0)](_0x44cc19,_0x38c262);const _0x57cd9b=_0x55ab4d(0x55c)[_0x55ab4d(0x286)](_0x23b08b);_0x145a89[_0x57cd9b]&&$gameTemp[_0x55ab4d(0x258)](_0x145a89[_0x57cd9b]);},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x404)]=function(){const _0x4cf723=_0x2dfc49;return VisuMZ[_0x4cf723(0x426)][_0x4cf723(0x4c8)]['RegionOkTarget'];},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x297)]=function(){const _0x8696c=_0x2dfc49;if($gameMap[_0x8696c(0x432)]())return;if($gameMap[_0x8696c(0x47d)]())return;let _0x528d72=VisuMZ['EventsMoveCore'][_0x8696c(0x4c8)][_0x8696c(0x2ad)];const _0xede443=_0x8696c(0x55c)[_0x8696c(0x286)](this[_0x8696c(0x5b0)]());_0x528d72[_0xede443]&&$gameTemp['reserveCommonEvent'](_0x528d72[_0xede443]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x28e)]=Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x5d5)],Game_Player[_0x2dfc49(0x380)]['increaseSteps']=function(){const _0x514efb=_0x2dfc49;VisuMZ['EventsMoveCore'][_0x514efb(0x28e)][_0x514efb(0x3a5)](this),VisuMZ[_0x514efb(0x4ad)](0x0);},Game_Player[_0x2dfc49(0x380)][_0x2dfc49(0x2d1)]=function(){VisuMZ['FaceSynchAllSynchTargets'](0x0);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x221)]=Game_Follower[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)],Game_Follower[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)]=function(_0x41c9f6){const _0x5497a9=_0x2dfc49;VisuMZ[_0x5497a9(0x426)][_0x5497a9(0x221)][_0x5497a9(0x3a5)](this,_0x41c9f6),this['_chaseOff']=![];},Game_Follower[_0x2dfc49(0x380)]['isDashing']=function(){const _0x12cc30=_0x2dfc49;if(this[_0x12cc30(0x527)])return Game_Character[_0x12cc30(0x380)][_0x12cc30(0x49b)][_0x12cc30(0x3a5)](this);return $gamePlayer[_0x12cc30(0x49b)]();},Game_Follower[_0x2dfc49(0x380)]['isDashingAndMoving']=function(){const _0x438734=_0x2dfc49;if(this[_0x438734(0x527)])return Game_Character[_0x438734(0x380)]['isDashingAndMoving'][_0x438734(0x3a5)](this);return $gamePlayer[_0x438734(0x5fb)]()&&this[_0x438734(0x1bb)];},Game_Follower[_0x2dfc49(0x380)][_0x2dfc49(0x583)]=function(){return $gamePlayer['realMoveSpeed']();},Game_Follower[_0x2dfc49(0x380)][_0x2dfc49(0x3a6)]=function(){const _0x33d3da=_0x2dfc49;Game_Character[_0x33d3da(0x380)][_0x33d3da(0x3a6)][_0x33d3da(0x3a5)](this),this[_0x33d3da(0x517)]>0x0&&(this[_0x33d3da(0x1bb)]=![]);},Game_Follower[_0x2dfc49(0x380)]['setChaseOff']=function(_0x3026f5){const _0xcdd01e=_0x2dfc49;this[_0xcdd01e(0x527)]=_0x3026f5;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x1a0)]=Game_Follower[_0x2dfc49(0x380)]['chaseCharacter'],Game_Follower['prototype'][_0x2dfc49(0x294)]=function(_0x2c4c80){const _0x4ad73e=_0x2dfc49;if(this['_chaseOff'])return;if($gameSystem[_0x4ad73e(0x15f)]())return;VisuMZ[_0x4ad73e(0x426)]['Game_Follower_chaseCharacter'][_0x4ad73e(0x3a5)](this,_0x2c4c80),this['_actuallyMoving']=!![];},VisuMZ['EventsMoveCore']['Game_Vehicle_isMapPassable']=Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x2a3)],Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x2a3)]=function(_0x51456c,_0x5c28a2,_0x188308){const _0x45adad=_0x2dfc49;if($gameMap['isRegionAllowPass'](_0x51456c,_0x5c28a2,_0x188308,this['_type']))return!![];if($gameMap[_0x45adad(0x244)](_0x51456c,_0x5c28a2,_0x188308,this['_type']))return![];return VisuMZ['EventsMoveCore'][_0x45adad(0x4d4)][_0x45adad(0x3a5)](this,_0x51456c,_0x5c28a2,_0x188308);},Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x41e)]=function(_0xc3be9b,_0x4e6d21,_0x46b45c){const _0x59dc6a=_0x2dfc49;if($gameMap['isRegionAllowPass'](_0xc3be9b,_0x4e6d21,_0x46b45c,this[_0x59dc6a(0x1e8)]))return!![];if($gameMap['isRegionForbidPass'](_0xc3be9b,_0x4e6d21,_0x46b45c,this['_type']))return![];return VisuMZ[_0x59dc6a(0x426)][_0x59dc6a(0x188)]['call']($gamePlayer,_0xc3be9b,_0x4e6d21,_0x46b45c);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x146)]=Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x582)],Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x582)]=function(_0x1dec61,_0x26220c,_0x5bdb9f){const _0x53d44d=_0x2dfc49;if($gameMap['isRegionDockable'](_0x1dec61,_0x26220c,_0x5bdb9f,this[_0x53d44d(0x1e8)]))return!![];const _0x45f2bd=this[_0x53d44d(0x1e8)][_0x53d44d(0x43d)](0x0)['toUpperCase']()+this['_type'][_0x53d44d(0x1e6)](0x1),_0x30737e='%1DockRegionOnly'[_0x53d44d(0x286)](_0x45f2bd);return VisuMZ['EventsMoveCore'][_0x53d44d(0x4c8)][_0x53d44d(0x22e)][_0x30737e]?![]:VisuMZ[_0x53d44d(0x426)]['Game_Vehicle_isLandOk'][_0x53d44d(0x3a5)](this,_0x1dec61,_0x26220c,_0x5bdb9f);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x5cd)]=Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x338)],Game_Vehicle[_0x2dfc49(0x380)][_0x2dfc49(0x338)]=function(){const _0x5020ef=_0x2dfc49;VisuMZ[_0x5020ef(0x426)][_0x5020ef(0x5cd)][_0x5020ef(0x3a5)](this);const _0x41e3b2=VisuMZ[_0x5020ef(0x426)][_0x5020ef(0x4c8)][_0x5020ef(0x44a)];if(this[_0x5020ef(0x160)]()){if(_0x41e3b2[_0x5020ef(0x140)])this[_0x5020ef(0x293)](_0x41e3b2[_0x5020ef(0x140)]);}else{if(this['isShip']()){if(_0x41e3b2[_0x5020ef(0x249)])this[_0x5020ef(0x293)](_0x41e3b2[_0x5020ef(0x249)]);}else{if(this['isAirship']()){if(_0x41e3b2[_0x5020ef(0x2c0)])this['setMoveSpeed'](_0x41e3b2[_0x5020ef(0x2c0)]);}}}},VisuMZ['EventsMoveCore']['Game_Event_initialize']=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)],Game_Event[_0x2dfc49(0x380)]['initialize']=function(_0x4ec1e2,_0x2ee63f){const _0x137f26=_0x2dfc49;this['_checkRelocateNotetag']=!![],VisuMZ[_0x137f26(0x426)][_0x137f26(0x428)][_0x137f26(0x3a5)](this,_0x4ec1e2,_0x2ee63f),this[_0x137f26(0x1ef)]=undefined,this['setupCopyEvent'](),this[_0x137f26(0x4a1)](),this[_0x137f26(0x353)]();},Game_Map['prototype'][_0x2dfc49(0x2ae)]=function(_0x43fa64,_0x6a9695){const _0x53cef8=_0x2dfc49;return _0x43fa64===$gameMap['mapId']()?$dataMap[_0x53cef8(0x4fa)][_0x6a9695]:VisuMZ[_0x53cef8(0x5a5)][_0x43fa64][_0x53cef8(0x4fa)][_0x6a9695];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x412)]=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x2b5)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x2b5)]=function(){const _0x3a3eec=_0x2dfc49;if(this[_0x3a3eec(0x279)]!==undefined){const _0x5a4c59=this[_0x3a3eec(0x279)][_0x3a3eec(0x224)],_0x5f4239=this[_0x3a3eec(0x279)][_0x3a3eec(0x574)];return $gameMap['referEvent'](_0x5a4c59,_0x5f4239);}if(this['_eventCopyData']!==undefined){const _0xb628fe=this[_0x3a3eec(0x320)]['mapId'],_0x487955=this[_0x3a3eec(0x320)]['eventId'];return $gameMap['referEvent'](_0xb628fe,_0x487955);}if(this[_0x3a3eec(0x18f)]!==undefined){const _0x37df84=this[_0x3a3eec(0x18f)]['mapId'],_0x3e57fe=this[_0x3a3eec(0x18f)][_0x3a3eec(0x574)];return $gameMap[_0x3a3eec(0x2ae)](_0x37df84,_0x3e57fe);}if($gameTemp[_0x3a3eec(0x27a)]!==undefined){const _0x3a1bdc=$gameTemp[_0x3a3eec(0x27a)][_0x3a3eec(0x224)],_0x42020f=$gameTemp[_0x3a3eec(0x27a)]['eventId'];return $gameMap[_0x3a3eec(0x2ae)](_0x3a1bdc,_0x42020f);}return VisuMZ[_0x3a3eec(0x426)][_0x3a3eec(0x412)][_0x3a3eec(0x3a5)](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x5ba)]=function(_0x25788c,_0x5933cf){const _0x444f80=_0x2dfc49;if(_0x25788c===0x0||_0x5933cf===0x0)return![];if(_0x25788c===$gameMap[_0x444f80(0x224)]())return!![];if(!VisuMZ[_0x444f80(0x5a5)][_0x25788c]&&_0x25788c!==$gameMap['mapId']())return $gameTemp['isPlaytest']()&&console['log'](_0x444f80(0x16c)[_0x444f80(0x286)](_0x25788c)),![];return!![];},VisuMZ['EventsMoveCore']['Game_Event_start']=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x296)],Game_Event['prototype'][_0x2dfc49(0x296)]=function(){const _0x48f258=_0x2dfc49;VisuMZ[_0x48f258(0x426)][_0x48f258(0x36f)][_0x48f258(0x3a5)](this),Imported['VisuMZ_1_MessageCore']&&Input[_0x48f258(0x613)](VisuMZ['MessageCore'][_0x48f258(0x4c8)][_0x48f258(0x1ac)][_0x48f258(0x5c8)])&&Input['clear']();},Game_Event['prototype'][_0x2dfc49(0x55e)]=function(){const _0x1896d2=_0x2dfc49,_0x5ec2d9=this[_0x1896d2(0x2b5)]()[_0x1896d2(0x60c)];if(_0x5ec2d9==='')return;if(DataManager['isBattleTest']()||DataManager[_0x1896d2(0x5af)]())return;const _0x3fd460=VisuMZ['EventsMoveCore'][_0x1896d2(0x4c8)][_0x1896d2(0x444)];let _0x22d444=null,_0x2ae164=0x0,_0xf0f23a=0x0;if(_0x5ec2d9[_0x1896d2(0x183)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x2ae164=Number(RegExp['$1']),_0xf0f23a=Number(RegExp['$2']);if(_0x2ae164===0x0)_0x2ae164=$gameMap[_0x1896d2(0x224)]();}else{if(_0x5ec2d9[_0x1896d2(0x183)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x2ae164=Number(RegExp['$1']),_0xf0f23a=Number(RegExp['$2']);if(_0x2ae164===0x0)_0x2ae164=$gameMap[_0x1896d2(0x224)]();}else{if(_0x5ec2d9[_0x1896d2(0x183)](/<COPY EVENT:[ ](.*?)>/i)){const _0x1e72ee=String(RegExp['$1'])[_0x1896d2(0x3dc)]()['trim']();_0x22d444=VisuMZ[_0x1896d2(0x214)][_0x1e72ee];if(!_0x22d444)return;_0x2ae164=_0x22d444['MapID'],_0xf0f23a=_0x22d444[_0x1896d2(0x1e7)];}}}if(!this[_0x1896d2(0x5ba)](_0x2ae164,_0xf0f23a))return;_0x3fd460[_0x1896d2(0x282)][_0x1896d2(0x3a5)](this,_0x2ae164,_0xf0f23a,this);if(_0x22d444)_0x22d444[_0x1896d2(0x282)]['call'](this,_0x2ae164,_0xf0f23a,this);this[_0x1896d2(0x320)]={'mapId':_0x2ae164,'eventId':_0xf0f23a},this[_0x1896d2(0x524)]=-0x2,this[_0x1896d2(0x1f2)](),_0x3fd460[_0x1896d2(0x4fd)]['call'](this,_0x2ae164,_0xf0f23a,this);if(_0x22d444)_0x22d444[_0x1896d2(0x4fd)][_0x1896d2(0x3a5)](this,_0x2ae164,_0xf0f23a,this);$gameMap[_0x1896d2(0x1c8)]();},Game_Event['prototype'][_0x2dfc49(0x4a1)]=function(){const _0x178355=_0x2dfc49,_0x5d32f7=$gameSystem['getPreservedMorphEventData'](this);if(!_0x5d32f7)return;const _0x516fed=_0x5d32f7[_0x178355(0x3dd)][_0x178355(0x3dc)]()[_0x178355(0x415)]();_0x516fed!==_0x178355(0x135)?this[_0x178355(0x255)](_0x516fed,!![]):this[_0x178355(0x381)](_0x5d32f7[_0x178355(0x224)],_0x5d32f7['eventId'],!![]);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x381)]=function(_0x35444e,_0x379206,_0x314f55){const _0x2c087e=_0x2dfc49;if(!this[_0x2c087e(0x5ba)](_0x35444e,_0x379206))return;const _0x346d5f=VisuMZ['EventsMoveCore']['Settings'][_0x2c087e(0x444)];if(!_0x314f55)_0x346d5f['PreMorphJS'][_0x2c087e(0x3a5)](this,_0x35444e,_0x379206,this);this[_0x2c087e(0x279)]={'mapId':_0x35444e,'eventId':_0x379206},this[_0x2c087e(0x524)]=-0x2,this[_0x2c087e(0x1f2)]();if(!_0x314f55)_0x346d5f[_0x2c087e(0x518)][_0x2c087e(0x3a5)](this,_0x35444e,_0x379206,this);$gameMap[_0x2c087e(0x1c8)]();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x255)]=function(_0x3428ae,_0x1a69e){const _0xeeac9b=_0x2dfc49;_0x3428ae=_0x3428ae['toUpperCase']()[_0xeeac9b(0x415)]();const _0x36a459=VisuMZ['EventTemplates'][_0x3428ae];if(!_0x36a459)return;const _0x4db6be=_0x36a459[_0xeeac9b(0x61d)],_0x372c98=_0x36a459['EventID'];if(!this[_0xeeac9b(0x5ba)](_0x4db6be,_0x372c98))return;if(!_0x1a69e)_0x36a459[_0xeeac9b(0x4b5)]['call'](this,_0x4db6be,_0x372c98,this);this[_0xeeac9b(0x381)](_0x4db6be,_0x372c98,_0x1a69e);if(!_0x1a69e)_0x36a459[_0xeeac9b(0x518)]['call'](this,_0x4db6be,_0x372c98,this);if($gameMap)$gameMap[_0xeeac9b(0x1c8)]();},Game_Event['prototype'][_0x2dfc49(0x1bf)]=function(){const _0x5ec9f2=_0x2dfc49;this[_0x5ec9f2(0x279)]=undefined,this[_0x5ec9f2(0x524)]=-0x2,this['refresh']();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x324)]=function(_0x47e4e2){const _0xa885d5=_0x2dfc49,_0x198a40=VisuMZ[_0xa885d5(0x426)]['Settings'][_0xa885d5(0x444)],_0x33b5c1=_0x47e4e2['template'][_0xa885d5(0x3dc)]()['trim'](),_0x3b6b1f=!['',_0xa885d5(0x135)]['includes'](_0x33b5c1);let _0x456c28=0x0,_0x2583a9=0x0;if(_0x3b6b1f){const _0x661ea1=VisuMZ[_0xa885d5(0x214)][_0x33b5c1];if(!_0x661ea1)return;_0x456c28=_0x661ea1[_0xa885d5(0x61d)],_0x2583a9=_0x661ea1[_0xa885d5(0x1e7)];}else _0x456c28=_0x47e4e2[_0xa885d5(0x224)],_0x2583a9=_0x47e4e2['eventId'];if(!this[_0xa885d5(0x5ba)](_0x456c28,_0x2583a9))return;if(_0x3b6b1f){const _0x5811fe=VisuMZ[_0xa885d5(0x214)][_0x33b5c1];_0x5811fe['PreSpawnJS'][_0xa885d5(0x3a5)](this,_0x456c28,_0x2583a9,this);}_0x198a40[_0xa885d5(0x336)][_0xa885d5(0x3a5)](this,_0x456c28,_0x2583a9,this),this[_0xa885d5(0x18f)]=_0x47e4e2,this['_pageIndex']=-0x2,this['_mapId']=$gameMap[_0xa885d5(0x224)](),this['_eventId']=_0x47e4e2[_0xa885d5(0x19e)],this[_0xa885d5(0x1ec)]=_0x47e4e2[_0xa885d5(0x5b8)],this[_0xa885d5(0x351)](_0x47e4e2['x'],_0x47e4e2['y']),this[_0xa885d5(0x5c6)](_0x47e4e2[_0xa885d5(0x163)]),this[_0xa885d5(0x1f2)]();if(_0x3b6b1f){const _0x291035=VisuMZ[_0xa885d5(0x214)][_0x33b5c1];if(!_0x291035)return;_0x291035[_0xa885d5(0x18a)][_0xa885d5(0x3a5)](this,_0x456c28,_0x2583a9,this);}_0x198a40[_0xa885d5(0x18a)]['call'](this,_0x456c28,_0x2583a9,this);const _0x5dd260=SceneManager[_0xa885d5(0x35d)];if(_0x5dd260&&_0x5dd260['_spriteset'])_0x5dd260['_spriteset'][_0xa885d5(0x445)](this);},Game_Event[_0x2dfc49(0x380)]['isSpawnedEvent']=function(){const _0x22b4cf=_0x2dfc49;return!!this[_0x22b4cf(0x18f)];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x296)]=function(){const _0x312486=_0x2dfc49;if(!this[_0x312486(0x377)]())return;const _0x2a2894=this[_0x312486(0x377)]()['filter'](_0x23509d=>_0x23509d['code']!==0x6c&&_0x23509d['code']!==0x198);_0x2a2894['length']>0x1&&(this[_0x312486(0x570)]=!![],this[_0x312486(0x325)]([0x0,0x1,0x2])&&this['lock']());},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2a5)]=Game_Event[_0x2dfc49(0x380)]['clearPageSettings'],Game_Event['prototype'][_0x2dfc49(0x180)]=function(){const _0x42ce0c=_0x2dfc49;VisuMZ[_0x42ce0c(0x426)][_0x42ce0c(0x2a5)]['call'](this),this[_0x42ce0c(0x53e)](),this[_0x42ce0c(0x46e)]();},VisuMZ[_0x2dfc49(0x426)]['Game_Event_setupPageSettings']=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x19a)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x19a)]=function(){const _0x534e99=_0x2dfc49;this['_activationProximityAutoTriggerBypass']=!![],VisuMZ['EventsMoveCore'][_0x534e99(0x363)][_0x534e99(0x3a5)](this),this['setupEventsMoveCoreEffects'](),this[_0x534e99(0x46e)](),this[_0x534e99(0x1c7)]=![];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x37e)]=function(){const _0x30e531=_0x2dfc49;if(!this[_0x30e531(0x2b5)]())return;this['initEventsMoveCoreEffects'](),this[_0x30e531(0x378)](),this['setupEventsMoveCoreCommentTags'](),this[_0x30e531(0x496)]();},Game_Event[_0x2dfc49(0x380)]['setupEventsMoveCoreNotetags']=function(){const _0x7b83a4=_0x2dfc49,_0x4dc778=this[_0x7b83a4(0x2b5)]()[_0x7b83a4(0x60c)];if(_0x4dc778==='')return;this[_0x7b83a4(0x608)](_0x4dc778);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x427)]=function(){const _0x225f63=_0x2dfc49;if(!this['page']())return;const _0x1fa631=this[_0x225f63(0x377)]();let _0xfd62e2='';for(const _0x40a78e of _0x1fa631){if([0x6c,0x198]['includes'](_0x40a78e[_0x225f63(0x169)])){if(_0xfd62e2!=='')_0xfd62e2+='\x0a';_0xfd62e2+=_0x40a78e['parameters'][0x0];}}this[_0x225f63(0x608)](_0xfd62e2);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x53e)]=function(){const _0x1aecca=_0x2dfc49,_0xfa9abc=VisuMZ['EventsMoveCore'][_0x1aecca(0x4c8)];this['_activationProximity']={'type':_0x1aecca(0x4c6),'distance':0x0,'regionList':[]},this[_0x1aecca(0x12f)]=![],this[_0x1aecca(0x474)](),this[_0x1aecca(0x14d)]=![],this[_0x1aecca(0x2dc)]=![],(this['isTile']()||this['isObjectCharacter']()&&this[_0x1aecca(0x251)]===0x0)&&(this[_0x1aecca(0x2dc)]=0x0),this[_0x1aecca(0x53c)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this['_encounterHalfProximity']={'type':_0x1aecca(0x4c6),'distance':0x0},this['_encounterNoneProximity']={'type':_0x1aecca(0x4c6),'distance':0x0},$gameSystem['resetIconsOnEventsData'](this),this[_0x1aecca(0x1e2)]=$gameSystem[_0x1aecca(0x4db)](this),this['_labelWindow']={'originalText':'','text':'','visibleRange':_0xfa9abc['Label'][_0x1aecca(0x2b3)],'rangeType':_0xfa9abc[_0x1aecca(0x4b1)][_0x1aecca(0x26e)],'offsetX':_0xfa9abc[_0x1aecca(0x4b1)][_0x1aecca(0x208)],'offsetY':_0xfa9abc[_0x1aecca(0x4b1)][_0x1aecca(0x2f8)],'hueShift':0x0},this[_0x1aecca(0x371)]=![],this[_0x1aecca(0x3aa)]=[],this['_moveSynch']={'target':-0x1,'type':_0x1aecca(0x210),'delay':0x1,'opacityDelta':0x0},this['_randomMoveWeight']=_0xfa9abc[_0x1aecca(0x44a)][_0x1aecca(0x32a)]??0x0,this['_saveEventLocation']=![],this[_0x1aecca(0x1c6)]=0x1,this[_0x1aecca(0x132)]=0x1,this['_screenActivation']=![],this[_0x1aecca(0x223)]=![],this['_screenParallelOnce']=![],this[_0x1aecca(0x61e)]={'visible':!![],'filename':_0xfa9abc['Movement']['DefaultShadow']},this['_tileExpand']={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x1aecca(0x229)](),this['clearStepPattern']();},Game_Event[_0x2dfc49(0x380)]['checkEventsMoveCoreStringTags']=function(_0x309794){const _0x3c80dc=_0x2dfc49;if(_0x309794[_0x3c80dc(0x183)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x3c80dc(0x1be)][_0x3c80dc(0x154)]=JSON[_0x3c80dc(0x25d)]('['+RegExp['$1'][_0x3c80dc(0x183)](/\d+/g)+']'),this[_0x3c80dc(0x1be)]['type']='region';else _0x309794[_0x3c80dc(0x183)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x3c80dc(0x4d8)]()['trim'](),this['_activationProximity']['type']=type,this[_0x3c80dc(0x1be)][_0x3c80dc(0x3a3)]=Number(RegExp['$2']));_0x309794['match'](/<(?:ATTACH |)PICTURE FILENAME:[ ](.*?)>/i)&&(this[_0x3c80dc(0x440)][_0x3c80dc(0x5bf)]=String(RegExp['$1']),this['_attachPicture'][_0x3c80dc(0x3e0)]=_0x3c80dc(0x3e5));if(_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) BLEND MODE:[ ](.*?)>/i)){const _0x35b24a=String(RegExp['$1'])[_0x3c80dc(0x3dc)]()[_0x3c80dc(0x415)](),_0xe5e68b=[_0x3c80dc(0x597),_0x3c80dc(0x5c3),_0x3c80dc(0x1e4),_0x3c80dc(0x2e0)];this[_0x3c80dc(0x440)][_0x3c80dc(0x1b8)]=_0xe5e68b[_0x3c80dc(0x295)](_0x35b24a)[_0x3c80dc(0x5ff)](0x0,0x3);}_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x3c80dc(0x440)][_0x3c80dc(0x4ea)]=Number(RegExp['$1']));_0x309794['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x440)][_0x3c80dc(0x4a4)]=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x440)]['offsetY']=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_attachPicture'][_0x3c80dc(0x4a4)]=Number(RegExp['$1']),this[_0x3c80dc(0x440)][_0x3c80dc(0x168)]=Number(RegExp['$2']));_0x309794['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) SCALE:[ ](\d+)([%％])>/i)&&(this[_0x3c80dc(0x440)][_0x3c80dc(0x5c0)]=Number(RegExp['$1'])*0.01);_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)PICTURE TYPE:[ ](.*?)>/i)&&(this['_attachPicture']['type']=String(RegExp['$1'])['toLowerCase']()[_0x3c80dc(0x415)]());_0x309794['match'](/<(?:ATTACH |)ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x3c80dc(0x440)][_0x3c80dc(0x5bf)]=String(RegExp['$1']),this['_attachPicture'][_0x3c80dc(0x3e0)]=_0x3c80dc(0x417));_0x309794[_0x3c80dc(0x183)](/<(?:ATTACH |)SV ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x3c80dc(0x440)]['filename']=String(RegExp['$1']),this[_0x3c80dc(0x440)][_0x3c80dc(0x3e0)]=_0x3c80dc(0x457));_0x309794[_0x3c80dc(0x183)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this['_alwaysUpdateMove']=!![]);_0x309794[_0x3c80dc(0x183)](/<CLICK TRIGGER>/i)&&(this[_0x3c80dc(0x14d)]=!![]);_0x309794[_0x3c80dc(0x183)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x3c80dc(0x2dc)]=Number(RegExp['$1'])||0x0);_0x309794[_0x3c80dc(0x183)](/<ENC(?:|OUNTER) HALF[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])['toLowerCase']()[_0x3c80dc(0x415)](),this[_0x3c80dc(0x3cd)]['type']=type,this[_0x3c80dc(0x3cd)][_0x3c80dc(0x3a3)]=Number(RegExp['$2']));_0x309794[_0x3c80dc(0x183)](/<ENC(?:|OUNTER) NONE[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])['toLowerCase']()[_0x3c80dc(0x415)](),this[_0x3c80dc(0x2a8)]['type']=type,this['_encounterNoneProximity']['distance']=Number(RegExp['$2']));const _0x15da34=_0x309794['match'](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x15da34)for(const _0x3d530c of _0x15da34){if(_0x3d530c[_0x3c80dc(0x183)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x259078=String(RegExp['$1'])[_0x3c80dc(0x4d8)]()[_0x3c80dc(0x415)](),_0x1ee135=Number(RegExp['$2']);this['_addedHitbox'][_0x259078]=_0x1ee135;}}if(this[_0x3c80dc(0x1e2)]['iconIndex']>=0x0&&!this[_0x3c80dc(0x1e2)][_0x3c80dc(0x5ad)]){_0x309794[_0x3c80dc(0x183)](/<ICON:[ ](\d+)>/i)&&(this[_0x3c80dc(0x1e2)]['iconIndex']=Number(RegExp['$1']));_0x309794['match'](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x3c80dc(0x425)]=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x1e2)]['bufferY']=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x3c80dc(0x425)]=Number(RegExp['$1']),this['_eventIcon']['bufferY']=Number(RegExp['$2']));if(_0x309794[_0x3c80dc(0x183)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x3b4b06=String(RegExp['$1'])[_0x3c80dc(0x3dc)]()[_0x3c80dc(0x415)](),_0x5ca165=[_0x3c80dc(0x597),_0x3c80dc(0x5c3),_0x3c80dc(0x1e4),_0x3c80dc(0x2e0)];this[_0x3c80dc(0x1e2)][_0x3c80dc(0x1b8)]=_0x5ca165[_0x3c80dc(0x295)](_0x3b4b06)[_0x3c80dc(0x5ff)](0x0,0x3);}$gameSystem[_0x3c80dc(0x40d)](this,this['_eventIcon']['iconIndex'],this['_eventIcon'][_0x3c80dc(0x425)],this[_0x3c80dc(0x1e2)][_0x3c80dc(0x497)],this[_0x3c80dc(0x1e2)][_0x3c80dc(0x1b8)]);}if(_0x309794[_0x3c80dc(0x183)](/<LABEL:[ ](.*?)>/i)){let _0x5a554a=String(RegExp['$1'])[_0x3c80dc(0x415)]();this[_0x3c80dc(0x61b)][_0x3c80dc(0x50b)]=_0x5a554a,this['_labelWindow']['originalText']=_0x5a554a;}if(_0x309794[_0x3c80dc(0x183)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x3dd2c6=String(RegExp['$1'])[_0x3c80dc(0x415)]();this['_labelWindow']['text']=_0x3dd2c6,this[_0x3c80dc(0x61b)]['originalText']=_0x3dd2c6;}_0x309794['match'](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x61b)]['offsetX']=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x61b)]['offsetY']=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x61b)][_0x3c80dc(0x4a4)]=Number(RegExp['$1']),this['_labelWindow'][_0x3c80dc(0x168)]=Number(RegExp['$2']));_0x309794[_0x3c80dc(0x183)](/<LABEL HUE SHIFT:[ ](.*?)>/i)&&(this['_labelWindow']['hueShift']=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0x3c80dc(0x61b)][_0x3c80dc(0x233)]=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<LABEL RANGE TYPE: SQUARE>/i)&&(this[_0x3c80dc(0x61b)][_0x3c80dc(0x2b4)]=_0x3c80dc(0x329));_0x309794[_0x3c80dc(0x183)](/<LABEL RANGE TYPE: (?:RADIUS|DELTA|DIAMOND)>/i)&&(this[_0x3c80dc(0x61b)][_0x3c80dc(0x2b4)]='delta');_0x309794[_0x3c80dc(0x183)](/<LABEL RANGE TYPE: CIRCLE>/i)&&(this[_0x3c80dc(0x61b)][_0x3c80dc(0x2b4)]=_0x3c80dc(0x343));this['updateEventLabelText']();_0x309794[_0x3c80dc(0x183)](/<MIRROR SPRITE>/i)&&(this['_mirrorSprite']=!![]);if(_0x309794['match'](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x433585=JSON[_0x3c80dc(0x25d)]('['+RegExp['$1'][_0x3c80dc(0x183)](/\d+/g)+']');this[_0x3c80dc(0x3aa)]=this[_0x3c80dc(0x3aa)][_0x3c80dc(0x354)](_0x433585),this['_moveOnlyRegions'][_0x3c80dc(0x2d2)](0x0);}if(_0x309794[_0x3c80dc(0x183)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x290d2e=String(RegExp['$1']);if(_0x290d2e[_0x3c80dc(0x183)](/PLAYER/i))this[_0x3c80dc(0x424)][_0x3c80dc(0x61a)]=0x0;else _0x290d2e[_0x3c80dc(0x183)](/EVENT[ ](\d+)/i)&&(this[_0x3c80dc(0x424)][_0x3c80dc(0x61a)]=Number(RegExp['$1']));}_0x309794[_0x3c80dc(0x183)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this['_moveSynch'][_0x3c80dc(0x3e0)]=String(RegExp['$1'])['toLowerCase']()[_0x3c80dc(0x415)]());_0x309794[_0x3c80dc(0x183)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this['_moveSynch'][_0x3c80dc(0x59a)]=Number(RegExp['$1']));_0x309794[_0x3c80dc(0x183)](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x3c80dc(0x424)]['opacityDelta']=Number(RegExp['$1']));if(_0x309794[_0x3c80dc(0x183)](/<TRUE RANDOM MOVE>/i))this[_0x3c80dc(0x287)]=0x0;else _0x309794[_0x3c80dc(0x183)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this['_randomMoveWeight']=Number(RegExp['$1'])||0x0);_0x309794[_0x3c80dc(0x183)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x3c80dc(0x35c)]=!![]);_0x309794[_0x3c80dc(0x183)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this[_0x3c80dc(0x1c6)]=Number(RegExp['$1'])*0.01);_0x309794[_0x3c80dc(0x183)](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this[_0x3c80dc(0x132)]=Number(RegExp['$1'])*0.01);if(_0x309794[_0x3c80dc(0x183)](/<SCALE:[ ](\d+)([%％])>/i)){const _0x131220=Number(RegExp['$1'])*0.01;this[_0x3c80dc(0x1c6)]=_0x131220,this['_scaleBaseY']=_0x131220;}_0x309794[_0x3c80dc(0x183)](/<SCREEN ACTIVATION>/i)&&(this[_0x3c80dc(0x26a)]=!![],this[_0x3c80dc(0x223)]=![],this[_0x3c80dc(0x1c4)]=![]);if(_0x309794['match'](/<SCREEN PARALLEL>/i))this['_screenActivation']=![],this[_0x3c80dc(0x223)]=!![],this[_0x3c80dc(0x1c4)]=![];else _0x309794[_0x3c80dc(0x183)](/<SCREEN PARALLEL ONCE>/i)&&(this['_screenActivation']=![],this[_0x3c80dc(0x223)]=!![],this[_0x3c80dc(0x1c4)]=!![]);_0x309794[_0x3c80dc(0x183)](/<HIDE SHADOW>/i)&&(this[_0x3c80dc(0x61e)][_0x3c80dc(0x347)]=![]),_0x309794[_0x3c80dc(0x183)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x3c80dc(0x61e)][_0x3c80dc(0x5bf)]=String(RegExp['$1'])),_0x309794[_0x3c80dc(0x183)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x3f7)]=Number(RegExp['$1'])),_0x309794[_0x3c80dc(0x183)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x16d)]=Number(RegExp['$1'])),_0x309794[_0x3c80dc(0x183)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x3c80dc(0x3f7)]=Number(RegExp['$1']),this[_0x3c80dc(0x16d)]=Number(RegExp['$2'])),_0x309794[_0x3c80dc(0x183)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x3c80dc(0x189)]=String(RegExp['$1'])[_0x3c80dc(0x3dc)]()[_0x3c80dc(0x415)]()),_0x309794[_0x3c80dc(0x183)](/<(?:TILE EXPAND|EXPAND TILE) UP:[ ](\d+)>/i)&&(this[_0x3c80dc(0x495)]=this[_0x3c80dc(0x495)]||{},this[_0x3c80dc(0x495)]['up']=Number(RegExp['$1'])),_0x309794[_0x3c80dc(0x183)](/<(?:TILE EXPAND|EXPAND TILE) DOWN:[ ](\d+)>/i)&&(this[_0x3c80dc(0x495)]=this[_0x3c80dc(0x495)]||{},this['_tileExpand']['down']=Number(RegExp['$1'])),_0x309794[_0x3c80dc(0x183)](/<(?:TILE EXPAND|EXPAND TILE) LEFT:[ ](\d+)>/i)&&(this[_0x3c80dc(0x495)]=this[_0x3c80dc(0x495)]||{},this[_0x3c80dc(0x495)][_0x3c80dc(0x5c9)]=Number(RegExp['$1'])),_0x309794['match'](/<(?:TILE EXPAND|EXPAND TILE) RIGHT:[ ](\d+)>/i)&&(this[_0x3c80dc(0x495)]=this[_0x3c80dc(0x495)]||{},this['_tileExpand'][_0x3c80dc(0x5ee)]=Number(RegExp['$1']));},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x43b)]=function(){const _0x2a175d=_0x2dfc49;$gameTemp['registerSelfTarget'](this),this['_labelWindow'][_0x2a175d(0x50b)]=this[_0x2a175d(0x61b)][_0x2a175d(0x3bd)];for(;;){if(this[_0x2a175d(0x61b)][_0x2a175d(0x50b)]['match'](/\\V\[(\d+)\]/gi))this[_0x2a175d(0x61b)][_0x2a175d(0x50b)]=this[_0x2a175d(0x61b)]['originalText']['replace'](/\\V\[(\d+)\]/gi,(_0x2c4453,_0x3db1bc)=>$gameVariables['value'](parseInt(_0x3db1bc)));else break;}$gameTemp['clearSelfTarget']();},Game_Event['prototype'][_0x2dfc49(0x496)]=function(){this['updateShadowChanges']();},Game_Event['prototype'][_0x2dfc49(0x20c)]=function(){const _0x1cfa94=_0x2dfc49;if(this[_0x1cfa94(0x12f)])return!![];return Game_Character['prototype'][_0x1cfa94(0x20c)]['call'](this);},VisuMZ[_0x2dfc49(0x426)]['Game_Event_updateSelfMovement']=Game_Event[_0x2dfc49(0x380)]['updateSelfMovement'],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x3c7)]=function(){const _0x3a400b=_0x2dfc49;if(this[_0x3a400b(0x131)]())return;VisuMZ[_0x3a400b(0x426)][_0x3a400b(0x60b)][_0x3a400b(0x3a5)](this),this[_0x3a400b(0x5ab)]()&&VisuMZ['MoveAllSynchTargets'](this[_0x3a400b(0x4d7)]);},Game_Event[_0x2dfc49(0x380)]['isPreventSelfMovement']=function(){const _0x3e59fb=_0x2dfc49,_0x16f713=VisuMZ[_0x3e59fb(0x426)][_0x3e59fb(0x4c8)]['Movement'];if($gameMap[_0x3e59fb(0x432)]()&&_0x16f713[_0x3e59fb(0x5da)])return!![];if($gameMessage[_0x3e59fb(0x174)]()&&_0x16f713[_0x3e59fb(0x500)])return!![];if(!$gameSystem[_0x3e59fb(0x596)]())return!![];if(this[_0x3e59fb(0x554)]()>=0x0)return!![];if(!SceneManager[_0x3e59fb(0x35d)][_0x3e59fb(0x488)])return!![];return![];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x569)]=function(){const _0x3665a=_0x2dfc49,_0x317e2e=SceneManager[_0x3665a(0x35d)][_0x3665a(0x26b)];if(_0x317e2e){const _0x53a843=_0x317e2e[_0x3665a(0x280)](this);_0x53a843&&_0x53a843[_0x3665a(0x173)]&&_0x53a843['_shadowSprite'][_0x3665a(0x587)]!==this[_0x3665a(0x54e)]()&&(_0x53a843[_0x3665a(0x173)]['_filename']=this[_0x3665a(0x54e)](),_0x53a843[_0x3665a(0x173)]['bitmap']=ImageManager[_0x3665a(0x446)](_0x53a843[_0x3665a(0x173)][_0x3665a(0x587)]));}},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x54e)]=function(){const _0x427942=_0x2dfc49;return this[_0x427942(0x61e)][_0x427942(0x5bf)];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x5de)]=function(){const _0x168e9a=_0x2dfc49;if(!this[_0x168e9a(0x61e)][_0x168e9a(0x347)])return![];return Game_CharacterBase['prototype'][_0x168e9a(0x5de)]['call'](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x15b)]=function(){const _0x169410=_0x2dfc49;return this[_0x169410(0x61b)][_0x169410(0x50b)];},Game_Event[_0x2dfc49(0x380)]['labelWindowRange']=function(){const _0x3840fa=_0x2dfc49;return this[_0x3840fa(0x61b)][_0x3840fa(0x233)]??VisuMZ[_0x3840fa(0x426)]['Settings'][_0x3840fa(0x4b1)]['VisibleRange'];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x147)]=function(){const _0x54436b=_0x2dfc49;return this[_0x54436b(0x61b)][_0x54436b(0x2b4)]??VisuMZ[_0x54436b(0x426)]['Settings'][_0x54436b(0x4b1)]['RangeType']??_0x54436b(0x329);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x603)]=function(_0x49c0ad){const _0x4f08a3=_0x2dfc49,_0x2cb9ae=_0x49c0ad[_0x4f08a3(0x147)](),_0x14a7bf=_0x49c0ad['labelWindowRange']();return $gameMap[_0x4f08a3(0x35a)]($gamePlayer['x'],$gamePlayer['y'],_0x49c0ad,_0x2cb9ae,_0x14a7bf);},Game_Event['prototype']['isMapPassable']=function(_0x555029,_0x430a8f,_0x223cce){const _0x2b1995=_0x2dfc49;if(this[_0x2b1995(0x2a7)]())return this['isMoveOnlyRegionPassable'](_0x555029,_0x430a8f,_0x223cce);if($gameMap[_0x2b1995(0x42f)](_0x555029,_0x430a8f,_0x223cce,_0x2b1995(0x2b5)))return!![];if($gameMap['isRegionForbidPass'](_0x555029,_0x430a8f,_0x223cce,_0x2b1995(0x2b5)))return![];return Game_Character[_0x2b1995(0x380)]['isMapPassable'][_0x2b1995(0x3a5)](this,_0x555029,_0x430a8f,_0x223cce);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x2a7)]=function(){const _0x47eaba=_0x2dfc49;if(this[_0x47eaba(0x3aa)]===undefined)this['initEventsMoveCoreEffects']();return this['_moveOnlyRegions'][_0x47eaba(0x4f1)]>0x0;},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x3be)]=function(_0x4f1922,_0x3011c7,_0x551b07){const _0x1dabe9=_0x2dfc49,_0x348c73=$gameMap[_0x1dabe9(0x2db)](_0x4f1922,_0x551b07),_0x15b41a=$gameMap['roundYWithDirection'](_0x3011c7,_0x551b07),_0x2d5d6e=$gameMap[_0x1dabe9(0x5b0)](_0x348c73,_0x15b41a);return this[_0x1dabe9(0x3aa)][_0x1dabe9(0x480)](_0x2d5d6e);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x1d3)]=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x4a0)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x4a0)]=function(){const _0x669c82=_0x2dfc49;if(this[_0x669c82(0x2b5)]()&&!$gameTemp[_0x669c82(0x15e)]()){if(this[_0x669c82(0x2b5)]()[_0x669c82(0x60c)][_0x669c82(0x183)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this['_advancedSwitchVariable']=![],this[_0x669c82(0x198)]=![],this['event']()?VisuMZ[_0x669c82(0x426)][_0x669c82(0x1d3)]['call'](this):-0x1;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x5fc)]=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x333)],Game_Event['prototype'][_0x2dfc49(0x333)]=function(_0x118945){const _0x2f2471=_0x2dfc49;this[_0x2f2471(0x1b1)](_0x118945),$gameTemp['registerSelfTarget'](this);const _0x11612e=VisuMZ[_0x2f2471(0x426)][_0x2f2471(0x5fc)][_0x2f2471(0x3a5)](this,_0x118945);return $gameTemp['clearSelfTarget'](),_0x11612e;},Game_Event[_0x2dfc49(0x380)]['hasAdvancedSwitchVariable']=function(){const _0x139a38=_0x2dfc49;return this[_0x139a38(0x375)];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x1b1)]=function(_0x4dcf84){const _0x4ced40=_0x2dfc49,_0x3cef81=_0x4dcf84[_0x4ced40(0x4a2)];if(_0x3cef81[_0x4ced40(0x3cc)]&&DataManager['isAdvancedSwitch'](_0x3cef81[_0x4ced40(0x53d)]))this['_advancedSwitchVariable']=!![];else{if(_0x3cef81[_0x4ced40(0x52f)]&&DataManager[_0x4ced40(0x1cc)](_0x3cef81[_0x4ced40(0x5d4)]))this['_advancedSwitchVariable']=!![];else _0x3cef81[_0x4ced40(0x36a)]&&DataManager[_0x4ced40(0x366)](_0x3cef81['variableId'])&&(this[_0x4ced40(0x375)]=!![]);}},Game_Event[_0x2dfc49(0x380)]['hasClickTrigger']=function(){const _0x1d0aa8=_0x2dfc49;if(this[_0x1d0aa8(0x271)])return![];return this[_0x1d0aa8(0x14d)];},Game_Event['prototype'][_0x2dfc49(0x37b)]=function(){const _0x27addd=_0x2dfc49;$gameTemp['clearDestination'](),this[_0x27addd(0x296)]();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x542)]=function(_0x45fc79,_0x45cbf9){const _0x4b0dcc=_0x2dfc49;return this['_addedHitbox']?this[_0x4b0dcc(0x61c)](_0x45fc79,_0x45cbf9):Game_Character[_0x4b0dcc(0x380)]['pos'][_0x4b0dcc(0x3a5)](this,_0x45fc79,_0x45cbf9);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x61c)]=function(_0x4f33d7,_0x3bc390){const _0x4603c5=_0x2dfc49;var _0x549bbf=this['x']-this['_addedHitbox']['left'],_0x556a57=this['x']+this[_0x4603c5(0x53c)][_0x4603c5(0x5ee)],_0x44c3a5=this['y']-this[_0x4603c5(0x53c)]['up'],_0xcc423c=this['y']+this[_0x4603c5(0x53c)]['down'];return _0x549bbf<=_0x4f33d7&&_0x4f33d7<=_0x556a57&&_0x44c3a5<=_0x3bc390&&_0x3bc390<=_0xcc423c;},VisuMZ[_0x2dfc49(0x426)]['Game_Event_canPass']=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x414)],Game_Event[_0x2dfc49(0x380)]['canPass']=function(_0x1f86db,_0x26f2a9,_0x2cc66e){const _0x66640e=_0x2dfc49;for(let _0x3d95ae=-this[_0x66640e(0x53c)][_0x66640e(0x5c9)];_0x3d95ae<=this[_0x66640e(0x53c)][_0x66640e(0x5ee)];_0x3d95ae++){for(let _0x18c7f2=-this[_0x66640e(0x53c)]['up'];_0x18c7f2<=this[_0x66640e(0x53c)][_0x66640e(0x564)];_0x18c7f2++){if(!Game_Character[_0x66640e(0x380)][_0x66640e(0x414)][_0x66640e(0x3a5)](this,_0x1f86db+_0x3d95ae,_0x26f2a9+_0x18c7f2,_0x2cc66e))return![];}}return!![];},Game_Event['prototype'][_0x2dfc49(0x59f)]=function(_0x2f750d,_0x5f1cfa){const _0x457175=_0x2dfc49;if(Imported[_0x457175(0x2ea)]&&this[_0x457175(0x54b)]())return this[_0x457175(0x4e0)](_0x2f750d,_0x5f1cfa);else{const _0x20515d=$gameMap[_0x457175(0x508)](_0x2f750d,_0x5f1cfa)[_0x457175(0x291)](_0xf7986a=>_0xf7986a!==this);return _0x20515d[_0x457175(0x4f1)]>0x0;}},Game_Event[_0x2dfc49(0x380)]['checkSmartEventCollision']=function(_0x4f8c7f,_0x27a2db){const _0x51c8db=_0x2dfc49;if(!this[_0x51c8db(0x3d8)]())return![];else{const _0x127986=$gameMap['eventsXyNt'](_0x4f8c7f,_0x27a2db)[_0x51c8db(0x291)](_0x227ebd=>_0x227ebd!==this&&_0x227ebd['isNormalPriority']());return _0x127986[_0x51c8db(0x4f1)]>0x0;}},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x201)]=function(){const _0x427703=_0x2dfc49;if(!this[_0x427703(0x1be)])return _0x427703(0x4c6);return this[_0x427703(0x1be)][_0x427703(0x3e0)]||_0x427703(0x4c6);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x26f)]=function(){const _0x53f50a=_0x2dfc49;if(!this[_0x53f50a(0x1be)])return 0x0;return this[_0x53f50a(0x1be)][_0x53f50a(0x3a3)]||0x0;},Game_Event['prototype']['activationRegionList']=function(){const _0x4561cf=_0x2dfc49;if(!this['_activationProximity'])return[];return this[_0x4561cf(0x1be)][_0x4561cf(0x154)]||[];},Game_Event['prototype'][_0x2dfc49(0x5d5)]=function(){const _0xa6ec6a=_0x2dfc49;Game_Character[_0xa6ec6a(0x380)][_0xa6ec6a(0x5d5)][_0xa6ec6a(0x3a5)](this);if(['none',_0xa6ec6a(0x2c2)]['includes'](this[_0xa6ec6a(0x201)]()))return;$gamePlayer[_0xa6ec6a(0x519)]([0x2]);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x481)]=function(){const _0x5aa6fd=_0x2dfc49,_0x64082e=Math[_0x5aa6fd(0x256)]($gameMap[_0x5aa6fd(0x265)]),_0x55841c=_0x64082e+Math[_0x5aa6fd(0x4b6)]($gameMap[_0x5aa6fd(0x612)]())-0x1,_0x2be769=Math['round']($gameMap[_0x5aa6fd(0x605)]),_0x18da34=_0x2be769+Math[_0x5aa6fd(0x4b6)]($gameMap[_0x5aa6fd(0x2ec)]())-0x1;return this['x']>=_0x64082e&&this['x']<=_0x55841c&&this['y']>=_0x2be769&&this['y']<=_0x18da34;},VisuMZ[_0x2dfc49(0x426)]['Game_Event_checkEventTriggerAuto']=Game_Event['prototype'][_0x2dfc49(0x232)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x232)]=function(){const _0x4eb4c7=_0x2dfc49;if(this[_0x4eb4c7(0x26a)]||this['_screenParallel']){if(this[_0x4eb4c7(0x481)]()){if(!this['_screenActivated']){this[_0x4eb4c7(0x311)]=!![];if(this['_screenActivation'])this['start']();else this['_screenParallel']&&(!this[_0x4eb4c7(0x2a2)]&&(this[_0x4eb4c7(0x2a2)]=new Game_Interpreter()),this[_0x4eb4c7(0x2a2)][_0x4eb4c7(0x3c5)](this[_0x4eb4c7(0x377)](),this[_0x4eb4c7(0x4d7)]));}return;}else{this[_0x4eb4c7(0x311)]=![];return;}}if(this[_0x4eb4c7(0x156)]!==0x3)return;if(this[_0x4eb4c7(0x1c7)])return;if(!this[_0x4eb4c7(0x185)](![]))return;if(!this[_0x4eb4c7(0x45f)](![]))return;VisuMZ[_0x4eb4c7(0x426)][_0x4eb4c7(0x60d)][_0x4eb4c7(0x3a5)](this);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x31e)]=Game_Event[_0x2dfc49(0x380)]['updateParallel'],Game_Event['prototype'][_0x2dfc49(0x44f)]=function(){const _0x18dd5e=_0x2dfc49;if(!this[_0x18dd5e(0x2a2)])return;if(!this[_0x18dd5e(0x185)](!![]))return;if(!this[_0x18dd5e(0x45f)](!![]))return;if(this[_0x18dd5e(0x2a2)]&&!this[_0x18dd5e(0x2a2)]['isRunning']()&&this[_0x18dd5e(0x223)]){!this[_0x18dd5e(0x1c4)]&&(this[_0x18dd5e(0x311)]=![]);return;}VisuMZ['EventsMoveCore'][_0x18dd5e(0x31e)][_0x18dd5e(0x3a5)](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x185)]=function(_0x1fa757){const _0x4c49b8=_0x2dfc49;if(!_0x1fa757&&$gameMap[_0x4c49b8(0x432)]())return![];if(!_0x1fa757&&$gameMap[_0x4c49b8(0x47d)]())return![];if(this[_0x4c49b8(0x1f3)]()<=0x0)return!![];return $gamePlayer['meetActivationRegionConditions'](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x45f)]=function(_0x1d7048){const _0x58970d=_0x2dfc49;if(!_0x1d7048&&$gameMap['isEventRunning']())return![];if(!_0x1d7048&&$gameMap[_0x58970d(0x47d)]())return![];if([_0x58970d(0x4c6),_0x58970d(0x2c2)]['includes'](this[_0x58970d(0x201)]()))return!![];return $gamePlayer['meetActivationProximityConditions'](this);},Game_Event['prototype'][_0x2dfc49(0x18b)]=function(_0x2bb61b){const _0x5aa60c=_0x2dfc49,_0x20de00=_0x2bb61b?this[_0x5aa60c(0x3cd)]:this[_0x5aa60c(0x2a8)];return _0x20de00?_0x20de00[_0x5aa60c(0x3e0)]:_0x5aa60c(0x4c6);},Game_Event['prototype'][_0x2dfc49(0x553)]=function(_0x2d8d78){const _0x32a52c=_0x2dfc49,_0x582d1e=_0x2d8d78?this[_0x32a52c(0x3cd)]:this[_0x32a52c(0x2a8)];return _0x582d1e?_0x582d1e[_0x32a52c(0x3a3)]:0x0;},VisuMZ[_0x2dfc49(0x4ad)]=function(_0x2e8a2c){const _0xe530fb=_0x2dfc49;for(const _0x2ec075 of $gameMap[_0xe530fb(0x4fa)]()){if(!_0x2ec075)continue;_0x2ec075[_0xe530fb(0x554)]()===_0x2e8a2c&&_0x2ec075[_0xe530fb(0x3de)]();}},VisuMZ[_0x2dfc49(0x591)]=function(_0x2d220b){if(_0x2d220b===0x0)return $gamePlayer;return $gameMap['event'](_0x2d220b);},Game_CharacterBase['prototype'][_0x2dfc49(0x2d1)]=function(){},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x2d1)]=function(){const _0x191fe0=_0x2dfc49;VisuMZ[_0x191fe0(0x43a)](this[_0x191fe0(0x4d7)]);},VisuMZ['FaceSynchAllSynchTargets']=function(_0xd6959e){const _0x3c0f6f=_0x2dfc49;for(const _0x427383 of $gameMap['events']()){if(!_0x427383)continue;_0x427383[_0x3c0f6f(0x554)]()===_0xd6959e&&_0x427383[_0x3c0f6f(0x33e)]();}},Game_Event[_0x2dfc49(0x380)]['moveSynchTarget']=function(){return this['_moveSynch']['target'];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x29b)]=function(){const _0x219027=_0x2dfc49;return this[_0x219027(0x424)][_0x219027(0x3e0)];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x583)]=function(){const _0x143dc5=_0x2dfc49;if(this[_0x143dc5(0x554)]()>=0x0){const _0x7cbdb4=VisuMZ[_0x143dc5(0x591)](this[_0x143dc5(0x554)]());if(_0x7cbdb4)return _0x7cbdb4[_0x143dc5(0x583)]();}return Game_Character[_0x143dc5(0x380)][_0x143dc5(0x583)][_0x143dc5(0x3a5)](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x3de)]=function(){const _0x1e940f=_0x2dfc49;this[_0x1e940f(0x424)]['timer']=this['_moveSynch'][_0x1e940f(0x568)]||0x0,this[_0x1e940f(0x424)][_0x1e940f(0x568)]--;if(this['_moveSynch'][_0x1e940f(0x568)]>0x0)return;this[_0x1e940f(0x424)][_0x1e940f(0x568)]=this['_moveSynch'][_0x1e940f(0x59a)],this['processMoveSynch']();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x20a)]=function(_0x55a170){const _0x49089f=_0x2dfc49;if(this['moveSynchTarget']()>=0x0){const _0x54e427=VisuMZ[_0x49089f(0x591)](this['moveSynchTarget']());if(_0x54e427){const _0x1f03cf=$gameMap[_0x49089f(0x3a3)](this[_0x49089f(0x512)],this['_realY'],_0x54e427[_0x49089f(0x512)],_0x54e427[_0x49089f(0x3e4)])-0x1,_0x5bb757=Math['min']($gameMap['tileWidth'](),$gameMap[_0x49089f(0x58c)]()),_0xf866f=this[_0x49089f(0x424)][_0x49089f(0x21e)]||0x0;_0x55a170-=Math[_0x49089f(0x196)](0x0,_0x1f03cf)*_0x5bb757*_0xf866f;}}return _0x55a170;},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x387)]=function(){const _0x6d3833=_0x2dfc49;switch(this[_0x6d3833(0x29b)]()){case _0x6d3833(0x210):this[_0x6d3833(0x1df)]();break;case _0x6d3833(0x50a):this[_0x6d3833(0x3e7)]();break;case _0x6d3833(0x563):this['processMoveSynchAway']();break;case _0x6d3833(0x400):this[_0x6d3833(0x136)]();break;case'mimic':case _0x6d3833(0x1ff):this[_0x6d3833(0x2ff)]();break;case _0x6d3833(0x562):case'reverse\x20copy':this[_0x6d3833(0x1e0)]();break;case'mirror\x20horizontal':case _0x6d3833(0x42e):case _0x6d3833(0x33d):case'horz\x20mirror':this[_0x6d3833(0x410)]();break;case _0x6d3833(0x1a8):case'vertical\x20mirror':case _0x6d3833(0x572):case _0x6d3833(0x2d4):this[_0x6d3833(0x372)]();break;default:this[_0x6d3833(0x1df)]();break;}this[_0x6d3833(0x322)]();},Game_Event[_0x2dfc49(0x380)]['processMoveSynchRandom']=function(){const _0x2b5d2b=_0x2dfc49,_0x5137d4=[0x2,0x4,0x6,0x8];$gameMap['isSupportDiagonalMovement']()&&_0x5137d4['push'](0x1,0x3,0x7,0x9);const _0xb3e4fd=[];for(const _0x253b82 of _0x5137d4){if(this['canPass'](this['x'],this['y'],_0x253b82))_0xb3e4fd[_0x2b5d2b(0x546)](_0x253b82);}if(_0xb3e4fd[_0x2b5d2b(0x4f1)]>0x0){const _0x1c9fdd=_0xb3e4fd[Math['randomInt'](_0xb3e4fd[_0x2b5d2b(0x4f1)])];this[_0x2b5d2b(0x4c5)](_0x1c9fdd);}},Game_Event['prototype'][_0x2dfc49(0x3e7)]=function(){const _0x38cbe8=_0x2dfc49,_0x16baf7=VisuMZ[_0x38cbe8(0x591)](this[_0x38cbe8(0x554)]());this[_0x38cbe8(0x31d)](_0x16baf7);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x550)]=function(){const _0x5104bc=_0x2dfc49,_0xfe7140=VisuMZ[_0x5104bc(0x591)](this[_0x5104bc(0x554)]());this[_0x5104bc(0x49e)](_0xfe7140);},Game_Event['prototype'][_0x2dfc49(0x136)]=function(){const _0x1375cb=_0x2dfc49;this[_0x1375cb(0x31f)]();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x2ff)]=function(){const _0xbe9cf9=_0x2dfc49,_0x5460f2=VisuMZ['GetMoveSynchTarget'](this[_0xbe9cf9(0x554)]());this[_0xbe9cf9(0x4c5)](_0x5460f2[_0xbe9cf9(0x16b)]());},Game_Event[_0x2dfc49(0x380)]['processMoveSynchReverseMimic']=function(){const _0xa7b42f=_0x2dfc49,_0x192a16=VisuMZ[_0xa7b42f(0x591)](this[_0xa7b42f(0x554)]());this['executeMoveDir8'](this[_0xa7b42f(0x14b)](_0x192a16[_0xa7b42f(0x16b)]()));},Game_Event['prototype']['processMoveSynchMirrorHorz']=function(){const _0x3ccc11=_0x2dfc49,_0x19177f=VisuMZ['GetMoveSynchTarget'](this[_0x3ccc11(0x554)]()),_0x5621ec=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x19177f[_0x3ccc11(0x16b)]()];this[_0x3ccc11(0x4c5)](_0x5621ec);},Game_Event['prototype'][_0x2dfc49(0x372)]=function(){const _0x537c5b=_0x2dfc49,_0x5c272c=VisuMZ[_0x537c5b(0x591)](this[_0x537c5b(0x554)]()),_0x441299=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x5c272c[_0x537c5b(0x16b)]()];this['executeMoveDir8'](_0x441299);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x33e)]=function(){const _0x22101f=_0x2dfc49,_0x2643f1=VisuMZ[_0x22101f(0x591)](this[_0x22101f(0x554)]()),_0x1db316=_0x2643f1[_0x22101f(0x163)]();switch(this[_0x22101f(0x29b)]()){case _0x22101f(0x23f):case'copy':this[_0x22101f(0x5c6)](_0x1db316);break;case _0x22101f(0x562):case _0x22101f(0x57d):this[_0x22101f(0x5c6)](this[_0x22101f(0x14b)](_0x1db316));break;case _0x22101f(0x34b):case _0x22101f(0x42e):case _0x22101f(0x33d):case _0x22101f(0x486):this['setDirection']([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x1db316]);break;case _0x22101f(0x1a8):case _0x22101f(0x2eb):case _0x22101f(0x572):case _0x22101f(0x2d4):this['setDirection']([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x1db316]);break;default:return;}this['update']();},Game_Event['prototype']['restoreSavedEventPosition']=function(){const _0x1cd5be=_0x2dfc49,_0x55c5d9=$gameSystem[_0x1cd5be(0x541)](this);if(!_0x55c5d9)return;this['setPosition'](_0x55c5d9['x'],_0x55c5d9['y']),this['refreshBushDepth'](),this[_0x1cd5be(0x5c6)](_0x55c5d9['direction']),this[_0x1cd5be(0x524)]===_0x55c5d9[_0x1cd5be(0x5f3)]&&(this[_0x1cd5be(0x3fd)]=_0x55c5d9[_0x1cd5be(0x3ff)]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x5d2)]=Game_Event['prototype']['update'],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x322)]=function(){const _0xe24c84=_0x2dfc49;VisuMZ[_0xe24c84(0x426)][_0xe24c84(0x5d2)][_0xe24c84(0x3a5)](this),!Utils[_0xe24c84(0x5b3)]()&&this[_0xe24c84(0x246)]();},Game_Event[_0x2dfc49(0x380)]['updateMove']=function(){const _0x29b602=_0x2dfc49;Game_Character['prototype']['updateMove'][_0x29b602(0x3a5)](this),this['autosaveEventLocation']();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x611)]=function(){const _0x4e042f=_0x2dfc49;if($gameMap['isSaveEventLocations']())return!![];return this[_0x4e042f(0x35c)];},Game_Event['prototype']['autosaveEventLocation']=function(){const _0x12d4c4=_0x2dfc49;if(!this[_0x12d4c4(0x611)]())return;this[_0x12d4c4(0x29e)]();},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x29e)]=function(){const _0x5cc760=_0x2dfc49;this[_0x5cc760(0x3a8)]=!![];},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x246)]=function(){const _0x1cc761=_0x2dfc49;this[_0x1cc761(0x3a8)]&&this['processSaveEventLocation']();},Game_Event['prototype'][_0x2dfc49(0x573)]=function(){const _0x1d8af2=_0x2dfc49;this['_requestSaveEventLocation']=![],$gameSystem[_0x1d8af2(0x29e)](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x408)]=function(){$gameSystem['deleteSavedEventLocation'](this);},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x4db)]=function(){const _0x3df82d=_0x2dfc49;return $gameSystem[_0x3df82d(0x4db)](this)?Game_Character['prototype'][_0x3df82d(0x4db)][_0x3df82d(0x3a5)](this):{'iconIndex':0x0,'bufferX':settings[_0x3df82d(0x56d)]['BufferX'],'bufferY':settings['Icon']['BufferY'],'blendMode':settings[_0x3df82d(0x56d)]['BlendMode']};},Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x4c0)]=function(){const _0x24c218=_0x2dfc49;return this[_0x24c218(0x198)];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x505)]=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x333)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x333)]=function(_0x9d7643){const _0x27254a=_0x2dfc49,_0x500640=VisuMZ['EventsMoveCore'][_0x27254a(0x505)][_0x27254a(0x3a5)](this,_0x9d7643);if(!_0x500640)return![];return this[_0x27254a(0x1ad)](_0x9d7643);},Game_Event[_0x2dfc49(0x380)]['meetsCPC']=function(_0x33bfe0){const _0x22b54a=_0x2dfc49;VisuMZ[_0x22b54a(0x426)][_0x22b54a(0x55b)][_0x22b54a(0x24b)](_0x33bfe0),this[_0x22b54a(0x198)]=_0x33bfe0[_0x22b54a(0x4aa)]['length']>0x0;_0x33bfe0[_0x22b54a(0x4aa)]===undefined&&VisuMZ['EventsMoveCore'][_0x22b54a(0x55b)][_0x22b54a(0x24b)](_0x33bfe0);if(_0x33bfe0[_0x22b54a(0x4aa)]['length']>0x0)return $gameMap[_0x22b54a(0x2b5)](this[_0x22b54a(0x4d7)])&&VisuMZ[_0x22b54a(0x426)]['CustomPageConditions'][_0x22b54a(0x618)](_0x33bfe0['CPC'],this[_0x22b54a(0x4d7)]);return!![];},VisuMZ[_0x2dfc49(0x426)]['Game_Troop_meetsConditionsCPC']=Game_Troop[_0x2dfc49(0x380)][_0x2dfc49(0x333)],Game_Troop['prototype']['meetsConditions']=function(_0x27eb6e){const _0x439796=_0x2dfc49;var _0x295cbb=VisuMZ[_0x439796(0x426)][_0x439796(0x536)]['call'](this,_0x27eb6e);return _0x295cbb&&this[_0x439796(0x4d0)](_0x27eb6e);},Game_Troop[_0x2dfc49(0x380)][_0x2dfc49(0x4d0)]=function(_0x1eaa3a){const _0x4e4014=_0x2dfc49;_0x1eaa3a[_0x4e4014(0x4aa)]===undefined&&VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x4e4014(0x24b)](_0x1eaa3a);if(_0x1eaa3a[_0x4e4014(0x4aa)][_0x4e4014(0x4f1)]>0x0)return VisuMZ[_0x4e4014(0x426)][_0x4e4014(0x55b)]['metCPC'](_0x1eaa3a[_0x4e4014(0x4aa)],0x0);return!![];},VisuMZ[_0x2dfc49(0x426)]['Game_Event_locate']=Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x351)],Game_Event[_0x2dfc49(0x380)][_0x2dfc49(0x351)]=function(_0x52673d,_0x203448){const _0x5f5a87=_0x2dfc49;if(this[_0x5f5a87(0x1ef)]){const _0x2411d1=this[_0x5f5a87(0x2b5)]()['note']||'';if(_0x2411d1[_0x5f5a87(0x183)](/<(?:LOCATION|START|START LOCATION):[ ](.*?)>/i)){const _0x4f50d9=String(RegExp['$1'])[_0x5f5a87(0x4f3)](',')['map'](_0x27da66=>Number(_0x27da66));_0x52673d+=Number(_0x4f50d9[0x0]||0x0)||0x0,_0x203448+=Number(_0x4f50d9[0x1]||0x0)||0x0;}_0x2411d1[_0x5f5a87(0x183)](/<(?:LOCATION|START|START LOCATION) X:[ ](.*?)>/i)&&(_0x52673d+=Number(RegExp['$1'])),_0x2411d1[_0x5f5a87(0x183)](/<(?:LOCATION|START|START LOCATION) Y:[ ](.*?)>/i)&&(_0x203448+=Number(RegExp['$1']));}VisuMZ[_0x5f5a87(0x426)][_0x5f5a87(0x360)][_0x5f5a87(0x3a5)](this,_0x52673d,_0x203448),this[_0x5f5a87(0x1ee)]=_0x52673d,this[_0x5f5a87(0x32d)]=_0x203448,this[_0x5f5a87(0x46e)]();},VisuMZ['EventsMoveCore'][_0x2dfc49(0x309)]=Game_Event[_0x2dfc49(0x380)]['moveTypeRandom'],Game_Event[_0x2dfc49(0x380)]['moveTypeRandom']=function(){const _0x59049f=_0x2dfc49,_0x200a29=$gameMap[_0x59049f(0x3a3)](this['x'],this['y'],this[_0x59049f(0x1ee)],this[_0x59049f(0x32d)]),_0x154224=_0x200a29*(this[_0x59049f(0x287)]||0x0);Math['random']()>=_0x154224?VisuMZ[_0x59049f(0x426)][_0x59049f(0x309)]['call'](this):this[_0x59049f(0x40f)]();},Game_Event['prototype']['moveBackToRandomHome']=function(){const _0x5298bd=_0x2dfc49,_0x201ffc=this[_0x5298bd(0x600)](this[_0x5298bd(0x1ee)]),_0x59a597=this[_0x5298bd(0x37c)](this[_0x5298bd(0x32d)]);if(Math[_0x5298bd(0x571)](_0x201ffc)>Math[_0x5298bd(0x571)](_0x59a597))this[_0x5298bd(0x4de)](_0x201ffc>0x0?0x4:0x6),!this[_0x5298bd(0x489)]()&&_0x59a597!==0x0&&this[_0x5298bd(0x4de)](_0x59a597>0x0?0x8:0x2);else _0x59a597!==0x0&&(this['moveStraight'](_0x59a597>0x0?0x8:0x2),!this[_0x5298bd(0x489)]()&&_0x201ffc!==0x0&&this[_0x5298bd(0x4de)](_0x201ffc>0x0?0x4:0x6));},Game_CharacterBase['prototype']['clearAttachPictureSettings']=function(){const _0x3a6391=_0x2dfc49;this[_0x3a6391(0x440)]={'filename':'','type':'picture','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x58e)]=function(){const _0x14bf57=_0x2dfc49;if(this[_0x14bf57(0x440)]===undefined)this['clearAttachPictureSettings']();return this[_0x14bf57(0x440)];},Game_CharacterBase[_0x2dfc49(0x380)]['attachPictureFilename']=function(){const _0x276491=_0x2dfc49;return this[_0x276491(0x58e)]()[_0x276491(0x5bf)]??'';},Game_CharacterBase[_0x2dfc49(0x380)]['attachPictureType']=function(){const _0x1ca46a=_0x2dfc49;return this[_0x1ca46a(0x58e)]()[_0x1ca46a(0x3e5)]??_0x1ca46a(0x3e5);},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x588)]=function(){const _0x558b3e=_0x2dfc49;return this[_0x558b3e(0x58e)]()[_0x558b3e(0x1b8)]??0x0;},Game_CharacterBase['prototype']['attachPictureMaxSize']=function(){const _0x2bf2f2=_0x2dfc49;return this[_0x2bf2f2(0x58e)]()[_0x2bf2f2(0x4ea)]??0x0;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x349)]=function(){const _0x1e225a=_0x2dfc49;return this[_0x1e225a(0x58e)]()[_0x1e225a(0x4a4)]??0x0;},Game_CharacterBase['prototype'][_0x2dfc49(0x382)]=function(){const _0x3fb913=_0x2dfc49;return this[_0x3fb913(0x58e)]()[_0x3fb913(0x168)]??0x0;},Game_CharacterBase[_0x2dfc49(0x380)][_0x2dfc49(0x29f)]=function(){return this['attachPictureSettings']()['scale']??0x1;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x270)]=Game_Interpreter[_0x2dfc49(0x380)]['updateWaitMode'],Game_Interpreter[_0x2dfc49(0x380)][_0x2dfc49(0x1aa)]=function(){const _0x41a793=_0x2dfc49;if(this[_0x41a793(0x21a)]===_0x41a793(0x38c)){if(window[this[_0x41a793(0x5d8)]])this[_0x41a793(0x21a)]='',this[_0x41a793(0x476)]();else return!![];}else return VisuMZ[_0x41a793(0x426)][_0x41a793(0x270)][_0x41a793(0x3a5)](this);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x28d)]=Game_Interpreter[_0x2dfc49(0x380)]['executeCommand'],Game_Interpreter['prototype'][_0x2dfc49(0x1ed)]=function(){const _0x484408=_0x2dfc49,_0x21ed68=$gameMap&&this[_0x484408(0x4d7)]?$gameMap[_0x484408(0x2b5)](this[_0x484408(0x4d7)]):null;$gameTemp[_0x484408(0x4b2)](_0x21ed68);const _0x408e06=VisuMZ['EventsMoveCore'][_0x484408(0x28d)][_0x484408(0x3a5)](this);return $gameTemp['clearSelfTarget'](),_0x408e06;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x521)]=Game_Interpreter['prototype'][_0x2dfc49(0x369)],Game_Interpreter[_0x2dfc49(0x380)][_0x2dfc49(0x369)]=function(_0x1be96b){const _0x4ccd0b=_0x2dfc49;return $gameTemp[_0x4ccd0b(0x2b9)](this),VisuMZ[_0x4ccd0b(0x426)][_0x4ccd0b(0x521)]['call'](this,_0x1be96b);},Game_Interpreter[_0x2dfc49(0x380)]['pluginCommandCallEvent']=function(_0x8ab5d9){const _0x1d9dda=_0x2dfc49;this[_0x1d9dda(0x55a)]=_0x8ab5d9;const _0x81f372=_0x1d9dda(0x4d9)['format'](_0x8ab5d9['mapId'][_0x1d9dda(0x170)](0x3));this['_callEventMap']=_0x1d9dda(0x42c)+Graphics[_0x1d9dda(0x3a0)]+'_'+this[_0x1d9dda(0x574)](),DataManager[_0x1d9dda(0x3b3)](this['_callEventMap'],_0x81f372),window[this[_0x1d9dda(0x5d8)]]?this[_0x1d9dda(0x476)]():this[_0x1d9dda(0x263)](_0x1d9dda(0x38c));},Game_Interpreter[_0x2dfc49(0x380)][_0x2dfc49(0x476)]=function(){const _0x309915=_0x2dfc49,_0x7f680=this[_0x309915(0x55a)],_0x37ae46=window[this[_0x309915(0x5d8)]],_0x1ecb9c=_0x37ae46[_0x309915(0x4fa)][_0x7f680[_0x309915(0x574)]];if(_0x1ecb9c&&_0x1ecb9c[_0x309915(0x393)][_0x7f680[_0x309915(0x326)]-0x1]){const _0x457473=_0x1ecb9c[_0x309915(0x393)][_0x7f680[_0x309915(0x326)]-0x1][_0x309915(0x377)];this[_0x309915(0x3b1)](_0x457473,this[_0x309915(0x574)]());}window[this[_0x309915(0x5d8)]]=undefined,this[_0x309915(0x5d8)]=undefined,this[_0x309915(0x55a)]=undefined;};function Game_CPCInterpreter(){const _0x1992ef=_0x2dfc49;this[_0x1992ef(0x3fb)][_0x1992ef(0x5e1)](this,arguments);};Game_CPCInterpreter[_0x2dfc49(0x380)]=Object[_0x2dfc49(0x3c4)](Game_Interpreter[_0x2dfc49(0x380)]),Game_CPCInterpreter['prototype']['constructor']=Game_CPCInterpreter,Game_CPCInterpreter['prototype'][_0x2dfc49(0x41a)]=function(){const _0x3d1603=_0x2dfc49;Game_Interpreter[_0x3d1603(0x380)][_0x3d1603(0x41a)]['call'](this),this['_cpc']=![];},Game_CPCInterpreter[_0x2dfc49(0x380)][_0x2dfc49(0x344)]=function(){const _0x1ff273=_0x2dfc49;while(this[_0x1ff273(0x30d)]()){this[_0x1ff273(0x1ed)]();}},Game_CPCInterpreter['prototype'][_0x2dfc49(0x619)]=function(_0x22ccf4){const _0x5e82ab=_0x2dfc49;while(this[_0x5e82ab(0x30d)]()){this[_0x5e82ab(0x4d6)](_0x22ccf4);}},Game_CPCInterpreter['prototype'][_0x2dfc49(0x4d6)]=function(_0x13f188){const _0xb7dad8=_0x2dfc49,_0x440d3c=_0x13f188;$gameTemp[_0xb7dad8(0x4b2)](_0x440d3c);const _0x593142=VisuMZ[_0xb7dad8(0x426)][_0xb7dad8(0x28d)][_0xb7dad8(0x3a5)](this);return $gameTemp['clearSelfTarget'](),_0x593142;},Game_CPCInterpreter[_0x2dfc49(0x380)][_0x2dfc49(0x5f4)]=function(_0x531e69){const _0x5a664e=_0x2dfc49;return Game_Interpreter[_0x5a664e(0x380)][_0x5a664e(0x5f4)][_0x5a664e(0x3a5)](this,_0x531e69),this[_0x5a664e(0x49c)]['some'](_0x2afe17=>_0x2afe17[_0x5a664e(0x183)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x5a664e(0x578)]=!![]),!![];},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x54f)]=Scene_Map['prototype']['startEncounterEffect'],Scene_Map[_0x2dfc49(0x380)][_0x2dfc49(0x479)]=function(){const _0x59ce1c=_0x2dfc49;VisuMZ['EventsMoveCore']['Scene_Map_startEncounterEffect']['call'](this),this[_0x59ce1c(0x26b)][_0x59ce1c(0x17e)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x422)]=Scene_Load[_0x2dfc49(0x380)][_0x2dfc49(0x46d)],Scene_Load[_0x2dfc49(0x380)][_0x2dfc49(0x46d)]=function(){const _0xd5f76=_0x2dfc49;if($gameMap)$gameMap['clearEventCache']();VisuMZ['EventsMoveCore']['Scene_Load_onLoadSuccess'][_0xd5f76(0x3a5)](this);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2d0)]=Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x236)],Game_System[_0x2dfc49(0x380)][_0x2dfc49(0x236)]=function(){const _0x49da37=_0x2dfc49;VisuMZ['EventsMoveCore']['Game_System_onAfterLoad'][_0x49da37(0x3a5)](this);if($gameMap)$gameMap['clearEventCache']();},VisuMZ[_0x2dfc49(0x426)]['Sprite_Character_initMembers']=Sprite_Character[_0x2dfc49(0x380)]['initMembers'],Sprite_Character['prototype'][_0x2dfc49(0x2f3)]=function(){const _0x31b507=_0x2dfc49;VisuMZ[_0x31b507(0x426)]['Sprite_Character_initMembers'][_0x31b507(0x3a5)](this),this['initMembersEventsMoveCore'](),this[_0x31b507(0x1cf)](),this['createIconSprite']();},Sprite_Character['prototype']['initMembersEventsMoveCore']=function(){const _0x3b9715=_0x2dfc49;this[_0x3b9715(0x4a9)]=0xff,this[_0x3b9715(0x610)]=![];},Sprite_Character[_0x2dfc49(0x380)]['isSpriteVS8dir']=function(){const _0x295f39=_0x2dfc49;return this[_0x295f39(0x1c2)]&&this[_0x295f39(0x1c2)][_0x295f39(0x183)](/\[VS8\]/i);},Sprite_Character[_0x2dfc49(0x380)]['isAutoBufferIcon']=function(){const _0x1479f5=_0x2dfc49;return this[_0x1479f5(0x1c0)]()&&VisuMZ[_0x1479f5(0x426)][_0x1479f5(0x4c8)][_0x1479f5(0x316)][_0x1479f5(0x18d)];},Sprite_Character[_0x2dfc49(0x380)]['createAttachPictureSprite']=function(){const _0x2d7b9b=_0x2dfc49;this[_0x2d7b9b(0x28f)]=new Sprite(),this[_0x2d7b9b(0x28f)][_0x2d7b9b(0x24f)]['x']=0.5,this[_0x2d7b9b(0x28f)][_0x2d7b9b(0x24f)]['y']=0x1,this[_0x2d7b9b(0x245)](this[_0x2d7b9b(0x28f)]),this[_0x2d7b9b(0x614)]();},Sprite_Character['prototype'][_0x2dfc49(0x4e3)]=function(){const _0x4f1e56=_0x2dfc49;this[_0x4f1e56(0x529)]=new Sprite(),this[_0x4f1e56(0x529)][_0x4f1e56(0x551)]=ImageManager[_0x4f1e56(0x446)](_0x4f1e56(0x356)),this[_0x4f1e56(0x529)][_0x4f1e56(0x551)]['smooth']=![],this[_0x4f1e56(0x529)][_0x4f1e56(0x50c)](0x0,0x0,0x0,0x0),this[_0x4f1e56(0x529)][_0x4f1e56(0x24f)]['x']=0.5,this[_0x4f1e56(0x529)][_0x4f1e56(0x24f)]['y']=0x1,this[_0x4f1e56(0x245)](this[_0x4f1e56(0x529)]);},VisuMZ['EventsMoveCore'][_0x2dfc49(0x27f)]=Sprite_Character['prototype'][_0x2dfc49(0x322)],Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x322)]=function(){const _0x50b463=_0x2dfc49;VisuMZ[_0x50b463(0x426)][_0x50b463(0x27f)]['call'](this),this[_0x50b463(0x3ea)]();},Sprite_Character[_0x2dfc49(0x380)]['updateVisibility']=function(){const _0x4d31f1=_0x2dfc49;Sprite[_0x4d31f1(0x380)][_0x4d31f1(0x192)][_0x4d31f1(0x3a5)](this),this[_0x4d31f1(0x493)]()&&(this['visible']=![]);},Sprite_Character['prototype'][_0x2dfc49(0x493)]=function(){const _0x1ae925=_0x2dfc49;if(this[_0x1ae925(0x5e6)]()>0x0)return![];if(this[_0x1ae925(0x1e3)]){if(this[_0x1ae925(0x1e3)][_0x1ae925(0x3e6)]()!=='')return![];}return this[_0x1ae925(0x515)]()||this[_0x1ae925(0x1e3)]&&this[_0x1ae925(0x1e3)][_0x1ae925(0x1f6)]();},Sprite_Character[_0x2dfc49(0x380)]['updateBitmapSmoothing']=function(){const _0x46f61f=_0x2dfc49;if(!this[_0x46f61f(0x551)])return;this[_0x46f61f(0x551)]['smooth']=!!VisuMZ[_0x46f61f(0x426)][_0x46f61f(0x4c8)]['Movement'][_0x46f61f(0x19f)];},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x3ea)]=function(){const _0x3e9a95=_0x2dfc49;this[_0x3e9a95(0x439)](),this[_0x3e9a95(0x2c1)](),this[_0x3e9a95(0x461)](),this['updateEventIconSprite'](),this['updateEventCustomZ'](),this['updateEventMirrorSprite'](),this[_0x3e9a95(0x614)]();},VisuMZ[_0x2dfc49(0x426)]['Sprite_Character_setTileBitmap']=Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x2ef)],Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x2ef)]=function(){const _0xb3aeff=_0x2dfc49;VisuMZ['EventsMoveCore'][_0xb3aeff(0x1a7)][_0xb3aeff(0x3a5)](this),this[_0xb3aeff(0x551)][_0xb3aeff(0x1db)](this[_0xb3aeff(0x277)][_0xb3aeff(0x1c9)](this));},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x436)]=function(){const _0x298d29=_0x2dfc49,_0x1855b2=this[_0x298d29(0x35b)],_0x486d29=this['patternWidth'](),_0x14d08d=this[_0x298d29(0x56b)](),_0xc8d5d0=(Math[_0x298d29(0x5f0)](_0x1855b2/0x80)%0x2*0x8+_0x1855b2%0x8)*_0x486d29,_0x13323e=Math[_0x298d29(0x5f0)](_0x1855b2%0x100/0x8)%0x10*_0x14d08d,_0x430949=this['getTileExpandData']();let _0x312795=_0xc8d5d0,_0x40d81b=_0x13323e,_0xcb4d50=_0x486d29,_0x3064f2=_0x14d08d;_0x430949['up']&&_0x430949['up']>0x0&&(_0x40d81b-=_0x14d08d*_0x430949['up'],_0x3064f2+=_0x14d08d*_0x430949['up']),_0x430949[_0x298d29(0x564)]&&_0x430949[_0x298d29(0x564)]>0x0&&(_0x3064f2+=_0x14d08d*_0x430949['down']),_0x430949[_0x298d29(0x5c9)]&&_0x430949[_0x298d29(0x5c9)]>0x0&&(_0x312795-=_0x486d29*_0x430949['left'],_0xcb4d50+=_0x486d29*_0x430949[_0x298d29(0x5c9)]),_0x430949['right']&&_0x430949[_0x298d29(0x5ee)]>0x0&&(_0xcb4d50+=_0x486d29*_0x430949[_0x298d29(0x5ee)]),this[_0x298d29(0x50c)](_0x312795,_0x40d81b,_0xcb4d50,_0x3064f2);},Sprite_Character[_0x2dfc49(0x380)]['getTileExpandData']=function(){const _0x528537=_0x2dfc49;return this[_0x528537(0x1e3)]?this[_0x528537(0x1e3)][_0x528537(0x495)]||{}:{};},VisuMZ['EventsMoveCore'][_0x2dfc49(0x3a9)]=Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x3c2)],Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x3c2)]=function(){const _0x3ed57c=_0x2dfc49;VisuMZ[_0x3ed57c(0x426)][_0x3ed57c(0x3a9)][_0x3ed57c(0x3a5)](this),this[_0x3ed57c(0x551)][_0x3ed57c(0x1db)](this['updateBitmapSmoothing'][_0x3ed57c(0x1c9)](this)),this['_isCharacterSpriteSheetInvisible']=ImageManager[_0x3ed57c(0x413)](this['_characterName']),this[_0x3ed57c(0x610)]&&this[_0x3ed57c(0x551)][_0x3ed57c(0x1db)](this[_0x3ed57c(0x3df)][_0x3ed57c(0x1c9)](this));},Sprite_Character['prototype']['setCharacterSpriteSheetInvisible']=function(){const _0x45c205=_0x2dfc49;this[_0x45c205(0x551)]=new Bitmap(this[_0x45c205(0x551)]['width'],this[_0x45c205(0x551)][_0x45c205(0x5d9)]);},VisuMZ['EventsMoveCore']['Sprite_Character_characterPatternY']=Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x53f)],Sprite_Character[_0x2dfc49(0x380)]['characterPatternY']=function(){const _0x403d30=_0x2dfc49;return this[_0x403d30(0x1c0)]()?this[_0x403d30(0x3a2)]():this['characterPatternYBasic']();},Sprite_Character['prototype'][_0x2dfc49(0x3a2)]=function(){const _0x8d3f1b=_0x2dfc49,_0x18ebf8=this['_character']['direction']();let _0x457437=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this['_character'][_0x8d3f1b(0x371)]&&(_0x457437=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x457437[_0x18ebf8]-0x2)/0x2;},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x5db)]=function(){const _0x14845c=_0x2dfc49;let _0x4a3fc8=this[_0x14845c(0x1e3)][_0x14845c(0x163)]();if(this[_0x14845c(0x1e3)]['_mirrorSprite']){if(_0x4a3fc8===0x4)_0x4a3fc8=0x6;else _0x4a3fc8===0x6&&(_0x4a3fc8=0x4);}return(_0x4a3fc8-0x2)/0x2;},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x439)]=function(){const _0x325927=_0x2dfc49;this['scale']['x']=this[_0x325927(0x1e3)][_0x325927(0x230)]??0x1,this[_0x325927(0x5c0)]['y']=this[_0x325927(0x1e3)][_0x325927(0x2b6)]??0x1;},Sprite_Character['prototype']['updateTilt']=function(){const _0x59f2a8=_0x2dfc49;if(!VisuMZ[_0x59f2a8(0x426)][_0x59f2a8(0x4c8)][_0x59f2a8(0x44a)]['EnableDashTilt'])return;this[_0x59f2a8(0x5bb)]=0x0;if(this[_0x59f2a8(0x1c5)]()){const _0x8ca9f4=VisuMZ['EventsMoveCore'][_0x59f2a8(0x4c8)]['Movement'],_0x42883d=this['_character'][_0x59f2a8(0x163)]();let _0x216868=0x0;if([0x1,0x4,0x7]['includes'](_0x42883d))_0x216868=_0x8ca9f4[_0x59f2a8(0x45e)];if([0x3,0x6,0x9][_0x59f2a8(0x480)](_0x42883d))_0x216868=_0x8ca9f4[_0x59f2a8(0x3fc)];[0x2,0x8][_0x59f2a8(0x480)](_0x42883d)&&(_0x216868=[-_0x8ca9f4[_0x59f2a8(0x209)],0x0,_0x8ca9f4[_0x59f2a8(0x209)]][this[_0x59f2a8(0x1e3)][_0x59f2a8(0x37a)]()]);if(this[_0x59f2a8(0x469)])_0x216868*=-0x1;this['rotation']=_0x216868;}},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x1c5)]=function(){const _0x53a0a4=_0x2dfc49;if(this['_dragonbones'])return![];return this[_0x53a0a4(0x1e3)][_0x53a0a4(0x5fb)]()&&!this[_0x53a0a4(0x1e3)][_0x53a0a4(0x2e9)]()&&!this[_0x53a0a4(0x1e3)][_0x53a0a4(0x4ef)]()&&this[_0x53a0a4(0x5e6)]()===0x0;},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x461)]=function(){const _0xe90db1=_0x2dfc49;if(!this[_0xe90db1(0x173)])return;this[_0xe90db1(0x173)]['x']=this[_0xe90db1(0x1e3)]['shadowX'](),this[_0xe90db1(0x173)]['y']=this[_0xe90db1(0x1e3)][_0xe90db1(0x4be)](),this[_0xe90db1(0x173)][_0xe90db1(0x186)]=this[_0xe90db1(0x186)],this['_shadowSprite'][_0xe90db1(0x347)]=this[_0xe90db1(0x1e3)][_0xe90db1(0x5de)](),this[_0xe90db1(0x173)][_0xe90db1(0x514)]=this['_hidden'];if(this[_0xe90db1(0x1e3)][_0xe90db1(0x1c3)]())this['_shadowSprite'][_0xe90db1(0x5c0)]['x']=Math['max'](0x0,this[_0xe90db1(0x173)]['scale']['x']-0.1),this[_0xe90db1(0x173)]['scale']['y']=Math[_0xe90db1(0x196)](0x0,this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']-0.1);else{if(this['_shadowSprite'][_0xe90db1(0x5c0)]['x']!==this[_0xe90db1(0x5c0)]['x']){if(this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['x']>this['scale']['x'])this['_shadowSprite']['scale']['x']=Math[_0xe90db1(0x2e2)](this[_0xe90db1(0x173)]['scale']['x']+0.1,this[_0xe90db1(0x5c0)]['x']);if(this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['x']<this[_0xe90db1(0x5c0)]['x'])this['_shadowSprite'][_0xe90db1(0x5c0)]['x']=Math['max'](this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['x']-0.1,this[_0xe90db1(0x5c0)]['x']);}if(this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']!==this[_0xe90db1(0x5c0)]['y']){if(this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']>this['scale']['y'])this[_0xe90db1(0x173)]['scale']['y']=Math[_0xe90db1(0x2e2)](this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']+0.1,this[_0xe90db1(0x5c0)]['y']);if(this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']<this[_0xe90db1(0x5c0)]['y'])this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']=Math['max'](this[_0xe90db1(0x173)][_0xe90db1(0x5c0)]['y']-0.1,this[_0xe90db1(0x5c0)]['y']);}}},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x59b)]=function(){const _0x24a393=_0x2dfc49;if(!this[_0x24a393(0x529)])return;const _0x4ffac8=this[_0x24a393(0x529)],_0x18766f=this[_0x24a393(0x5e6)]();if(_0x18766f<=0x0)return _0x4ffac8[_0x24a393(0x50c)](0x0,0x0,0x0,0x0);else{const _0x5e2ae0=ImageManager[_0x24a393(0x547)],_0x48e7d=ImageManager[_0x24a393(0x34d)],_0x1b1c42=_0x18766f%0x10*_0x5e2ae0,_0x104bad=Math['floor'](_0x18766f/0x10)*_0x48e7d;_0x4ffac8[_0x24a393(0x50c)](_0x1b1c42,_0x104bad,_0x5e2ae0,_0x48e7d),this[_0x24a393(0x347)]=!![];}const _0x12a643=this[_0x24a393(0x1e3)][_0x24a393(0x4db)]();this[_0x24a393(0x2c7)]()?this[_0x24a393(0x467)](_0x4ffac8):(_0x4ffac8['x']=_0x12a643?_0x12a643['bufferX']:0x0,_0x4ffac8['y']=_0x12a643?-this[_0x24a393(0x5d9)]+_0x12a643['bufferY']:0x0),_0x4ffac8[_0x24a393(0x1b8)]=_0x12a643?_0x12a643[_0x24a393(0x1b8)]:0x0,this[_0x24a393(0x312)](_0x4ffac8),this[_0x24a393(0x245)](_0x4ffac8),_0x4ffac8[_0x24a393(0x5bb)]=-this['rotation'];},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x467)]=function(_0x3584d3){const _0x5245e9=_0x2dfc49;_0x3584d3['x']=0x0,_0x3584d3['y']=-this[_0x5245e9(0x5d9)]+this[_0x5245e9(0x5d9)]*0x2/0x5,this[_0x5245e9(0x1e3)]['pattern']()!==0x1&&(_0x3584d3['y']+=0x1);},Sprite_Character['prototype']['getEventIconIndex']=function(){const _0x747e50=_0x2dfc49;if(!this[_0x747e50(0x1e3)])return 0x0;if(this[_0x747e50(0x1e3)][_0x747e50(0x271)])return 0x0;const _0x4f0498=this[_0x747e50(0x1e3)][_0x747e50(0x4db)]();return _0x4f0498?_0x4f0498[_0x747e50(0x402)]||0x0:0x0;},Sprite_Character[_0x2dfc49(0x380)]['updateEventCustomZ']=function(){const _0x5b1d07=_0x2dfc49;if(!this[_0x5b1d07(0x1e3)])return;if(this['_character'][_0x5b1d07(0x2dc)]===undefined)return;if(this['_character'][_0x5b1d07(0x2dc)]===![])return;this['z']=this[_0x5b1d07(0x1e3)][_0x5b1d07(0x2dc)],this['_shadowSprite']&&(this['z']<0x0?this[_0x5b1d07(0x173)]['z']=this['z']-0x1:this['_shadowSprite']['z']=0x0);},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x593)]=function(){const _0x501194=_0x2dfc49;if(!this['_character'])return;let _0x97bbd=!!this[_0x501194(0x1e3)][_0x501194(0x371)];this['scale']['x']=Math[_0x501194(0x571)](this[_0x501194(0x5c0)]['x'])*(_0x97bbd?-0x1:0x1);},Sprite_Character['prototype'][_0x2dfc49(0x614)]=function(){const _0x37e04c=_0x2dfc49;if(!this['_attachPictureSprite'])return;if(!this[_0x37e04c(0x1e3)])return;this[_0x37e04c(0x575)](),this[_0x37e04c(0x581)]();},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x575)]=function(){const _0x8ff70d=_0x2dfc49;if(!this['needsAttachPictureUpdate']())return;const _0xd4c379=this[_0x8ff70d(0x1e3)][_0x8ff70d(0x58e)]();this[_0x8ff70d(0x557)]=_0xd4c379[_0x8ff70d(0x5bf)],this[_0x8ff70d(0x3d9)]=_0xd4c379[_0x8ff70d(0x3e0)],this[_0x8ff70d(0x19d)]=_0xd4c379[_0x8ff70d(0x4ea)],this['_lastAttachPictureScale']=_0xd4c379[_0x8ff70d(0x5c0)];if(_0xd4c379['filename']!==''){if(_0xd4c379[_0x8ff70d(0x3e0)]===_0x8ff70d(0x417)){const _0x6f9bd=ImageManager['loadEnemy'](_0xd4c379[_0x8ff70d(0x5bf)]);_0x6f9bd['addLoadListener'](this[_0x8ff70d(0x451)][_0x8ff70d(0x1c9)](this,_0x6f9bd));}else{if(_0xd4c379[_0x8ff70d(0x3e0)]===_0x8ff70d(0x457)){const _0x5457bf=ImageManager['loadSvEnemy'](_0xd4c379[_0x8ff70d(0x5bf)]);_0x5457bf[_0x8ff70d(0x1db)](this[_0x8ff70d(0x451)][_0x8ff70d(0x1c9)](this,_0x5457bf));}else{const _0x160d43=ImageManager['loadPicture'](_0xd4c379[_0x8ff70d(0x5bf)]);_0x160d43[_0x8ff70d(0x1db)](this['onLoadAttachPicture'][_0x8ff70d(0x1c9)](this,_0x160d43));}}}else this[_0x8ff70d(0x28f)][_0x8ff70d(0x551)]=new Bitmap(0x1,0x1);},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x581)]=function(){const _0x270f7d=_0x2dfc49,_0x31ec8c=this[_0x270f7d(0x28f)];_0x31ec8c['x']=this[_0x270f7d(0x1e3)][_0x270f7d(0x349)](),_0x31ec8c['y']=this[_0x270f7d(0x1e3)][_0x270f7d(0x382)](),_0x31ec8c['blendMode']=this[_0x270f7d(0x1e3)]['attachPictureBlendMode']();},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x20e)]=function(){const _0x215527=_0x2dfc49,_0x1d0108=this[_0x215527(0x1e3)][_0x215527(0x58e)]();if(_0x1d0108){if(this['_lastAttachPictureFilename']!==_0x1d0108[_0x215527(0x5bf)])return!![];if(this['_lastAttachPictureType']!==_0x1d0108['type'])return!![];if(this['_lastAttachPictureMaxSize']!==_0x1d0108[_0x215527(0x4ea)])return!![];if(this[_0x215527(0x1ce)]!==_0x1d0108[_0x215527(0x5c0)])return!![];}return![];},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x451)]=function(_0x57fe31){const _0x1c648c=_0x2dfc49,_0x263b5c=this[_0x1c648c(0x28f)];_0x263b5c[_0x1c648c(0x551)]=_0x57fe31;const _0x1053d6=this['_character'][_0x1c648c(0x58e)](),_0x3c5fec=_0x1053d6[_0x1c648c(0x4ea)],_0x4519ce=_0x1053d6['scale'];let _0x1e6bf3=0x1;if(_0x3c5fec>0x0){let _0x3510ad=this[_0x1c648c(0x5b4)]()||0x1,_0x37e444=this[_0x1c648c(0x334)]()||0x1;const _0x1bb211=Math[_0x1c648c(0x196)](0x1,_0x3510ad,_0x37e444);_0x1e6bf3=_0x3c5fec/_0x1bb211;}_0x1e6bf3*=_0x4519ce,_0x1e6bf3!==0x1&&(this[_0x1c648c(0x28f)][_0x1c648c(0x551)][_0x1c648c(0x34f)]=!![]),_0x263b5c[_0x1c648c(0x5c0)]['x']=_0x1e6bf3,_0x263b5c[_0x1c648c(0x5c0)]['y']=_0x1e6bf3,this[_0x1c648c(0x347)]=!![],this[_0x1c648c(0x581)]();},Sprite_Character[_0x2dfc49(0x380)]['getAttachPictureBitmapWidth']=function(){const _0xe5dacf=_0x2dfc49,_0x2d38f2=this[_0xe5dacf(0x28f)];if(!_0x2d38f2)return 0x0;return _0x2d38f2[_0xe5dacf(0x551)][_0xe5dacf(0x40c)];},Sprite_Character[_0x2dfc49(0x380)][_0x2dfc49(0x334)]=function(){const _0x5bac22=_0x2dfc49,_0x4052cc=this[_0x5bac22(0x28f)];if(!_0x4052cc)return 0x0;return _0x4052cc[_0x5bac22(0x551)]['height'];},VisuMZ['EventsMoveCore'][_0x2dfc49(0x2c6)]=Sprite_Balloon[_0x2dfc49(0x380)][_0x2dfc49(0x3c5)],Sprite_Balloon[_0x2dfc49(0x380)][_0x2dfc49(0x3c5)]=function(_0x1e83d0,_0x29ad1d){const _0x1fba39=_0x2dfc49;VisuMZ[_0x1fba39(0x426)][_0x1fba39(0x2c6)]['call'](this,_0x1e83d0,_0x29ad1d),VisuMZ[_0x1fba39(0x426)][_0x1fba39(0x4c8)][_0x1fba39(0x316)][_0x1fba39(0x2cb)]&&this['_target'][_0x1fba39(0x1e3)][_0x1fba39(0x167)](_0x29ad1d,this[_0x1fba39(0x5be)]);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x2ac)]=Sprite_Balloon['prototype']['updatePosition'],Sprite_Balloon[_0x2dfc49(0x380)][_0x2dfc49(0x1e5)]=function(){const _0x4bbddf=_0x2dfc49;VisuMZ['EventsMoveCore'][_0x4bbddf(0x2ac)][_0x4bbddf(0x3a5)](this),this[_0x4bbddf(0x240)]();},Sprite_Balloon['prototype'][_0x2dfc49(0x240)]=function(){const _0x4fd27c=_0x2dfc49;this[_0x4fd27c(0x419)]['_character']['isSpriteVS8dir']()&&(this['x']+=VisuMZ[_0x4fd27c(0x426)][_0x4fd27c(0x4c8)]['VS8'][_0x4fd27c(0x384)],this['y']+=VisuMZ['EventsMoveCore'][_0x4fd27c(0x4c8)][_0x4fd27c(0x316)][_0x4fd27c(0x4bf)]);},Sprite_Timer[_0x2dfc49(0x380)]['createBitmap']=function(){const _0x320941=_0x2dfc49;this[_0x320941(0x551)]=new Bitmap(Math[_0x320941(0x256)](Graphics[_0x320941(0x504)]/0x2),0x30),this['bitmap'][_0x320941(0x4c9)]=this['fontFace'](),this['bitmap'][_0x320941(0x317)]=this['fontSize'](),this[_0x320941(0x551)]['outlineColor']=ColorManager[_0x320941(0x39a)]();},Sprite_Timer[_0x2dfc49(0x380)][_0x2dfc49(0x41c)]=function(){const _0x557fb6=_0x2dfc49,_0x4dac25=Math['floor'](this[_0x557fb6(0x4b8)]/0x3c/0x3c),_0x21311a=Math['floor'](this[_0x557fb6(0x4b8)]/0x3c)%0x3c,_0x4056d1=this[_0x557fb6(0x4b8)]%0x3c;let _0x4ecd8e=_0x21311a[_0x557fb6(0x170)](0x2)+':'+_0x4056d1[_0x557fb6(0x170)](0x2);if(_0x4dac25>0x0)_0x4ecd8e='%1:%2'[_0x557fb6(0x286)](_0x4dac25,_0x4ecd8e);return _0x4ecd8e;};function Sprite_EventLabel(){this['initialize'](...arguments);}Sprite_EventLabel[_0x2dfc49(0x380)]=Object['create'](Sprite[_0x2dfc49(0x380)]),Sprite_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x345)]=Sprite_EventLabel,Sprite_EventLabel['prototype'][_0x2dfc49(0x3fb)]=function(_0x2df38b){const _0x139d97=_0x2dfc49;this[_0x139d97(0x46a)]=_0x2df38b,Sprite[_0x139d97(0x380)][_0x139d97(0x3fb)][_0x139d97(0x3a5)](this),this[_0x139d97(0x2f3)](),this[_0x139d97(0x44e)]();},Sprite_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x2f3)]=function(){const _0x32ef26=_0x2dfc49;this[_0x32ef26(0x24f)]['x']=0.5,this[_0x32ef26(0x24f)]['y']=0x1;},Sprite_EventLabel['prototype']['createProxyWindow']=function(){const _0x434519=_0x2dfc49,_0x30301f=new Rectangle(0x0,0x0,0x1,0x1);this[_0x434519(0x3d6)]=new Window_Base(_0x30301f),this[_0x434519(0x3d6)][_0x434519(0x449)]=0x0,this['opacity']=this[_0x434519(0x560)]()?0xff:0x0;},Sprite_EventLabel['prototype'][_0x2dfc49(0x322)]=function(){const _0x18807a=_0x2dfc49;Sprite[_0x18807a(0x380)][_0x18807a(0x322)]['call'](this),this[_0x18807a(0x3d0)](),this[_0x18807a(0x4c2)](),this[_0x18807a(0x1e5)](),this[_0x18807a(0x1ba)](),this[_0x18807a(0x420)]();},Sprite_EventLabel[_0x2dfc49(0x380)]['updateText']=function(){const _0x2a4ea1=_0x2dfc49;this['_event'][_0x2a4ea1(0x15b)]()!==this[_0x2a4ea1(0x2b2)]&&(this['_text']=this[_0x2a4ea1(0x46a)][_0x2a4ea1(0x15b)](),this['refresh']());},Sprite_EventLabel['prototype'][_0x2dfc49(0x1f2)]=function(){const _0x94e127=_0x2dfc49;if(!this[_0x94e127(0x3d6)])return;this['resizeWindow'](),this[_0x94e127(0x260)]();},Sprite_EventLabel['prototype'][_0x2dfc49(0x584)]=function(){const _0x199fae=_0x2dfc49,_0x993df4=this[_0x199fae(0x3d6)]['textSizeEx'](this[_0x199fae(0x2b2)]),_0x3b9c75=this[_0x199fae(0x3d6)][_0x199fae(0x459)](),_0x116159=_0x993df4[_0x199fae(0x40c)]+_0x3b9c75*0x2,_0x4840de=_0x993df4['height'];this[_0x199fae(0x3d6)][_0x199fae(0x357)](0x0,0x0,_0x116159,_0x4840de),this[_0x199fae(0x3d6)][_0x199fae(0x3cf)](),this[_0x199fae(0x551)]=this[_0x199fae(0x3d6)][_0x199fae(0x589)];},Sprite_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x260)]=function(){const _0x40153e=_0x2dfc49,_0xb647c7=this[_0x40153e(0x3d6)]['itemPadding']();this[_0x40153e(0x3d6)][_0x40153e(0x4d1)](this[_0x40153e(0x2b2)],_0xb647c7,0x0);},Sprite_EventLabel['prototype'][_0x2dfc49(0x4c2)]=function(){const _0x268a41=_0x2dfc49,_0x2116bd=VisuMZ[_0x268a41(0x426)][_0x268a41(0x4c8)][_0x268a41(0x4b1)][_0x268a41(0x5a1)],_0x812b27=$gameSystem[_0x268a41(0x56f)]()||0x1;this[_0x268a41(0x5c0)]['x']=this[_0x268a41(0x5c0)]['y']=_0x2116bd/_0x812b27;},Sprite_EventLabel['prototype'][_0x2dfc49(0x1e5)]=function(){const _0x3d3ff6=_0x2dfc49;if(!SceneManager[_0x3d3ff6(0x35d)])return;if(!SceneManager[_0x3d3ff6(0x35d)]['_spriteset'])return;const _0x2d5f65=SceneManager[_0x3d3ff6(0x35d)]['_spriteset'][_0x3d3ff6(0x280)](this[_0x3d3ff6(0x46a)]);if(!_0x2d5f65)return;this['x']=this[_0x3d3ff6(0x46a)][_0x3d3ff6(0x275)](),this['x']+=this[_0x3d3ff6(0x46a)]['_labelWindow'][_0x3d3ff6(0x4a4)];if(_0x2d5f65[_0x3d3ff6(0x557)]){const _0x40c648=_0x2d5f65[_0x3d3ff6(0x28f)];this['y']=this[_0x3d3ff6(0x46a)]['screenY']()-_0x40c648[_0x3d3ff6(0x5d9)]*_0x40c648[_0x3d3ff6(0x5c0)]['y'];}else this['y']=this['_event'][_0x3d3ff6(0x153)]()-_0x2d5f65[_0x3d3ff6(0x5d9)]*_0x2d5f65[_0x3d3ff6(0x5c0)]['y'];this['y']+=$gameSystem[_0x3d3ff6(0x18c)]()*-0.5,this['y']+=this['_event'][_0x3d3ff6(0x61b)]['offsetY'];},Sprite_EventLabel[_0x2dfc49(0x380)]['updateOpacity']=function(){const _0x3d9270=_0x2dfc49;if(this[_0x3d9270(0x560)]())this[_0x3d9270(0x186)]+=this[_0x3d9270(0x1d4)]();else SceneManager[_0x3d9270(0x35d)][_0x3d9270(0x314)]>0x0?this[_0x3d9270(0x186)]=0x0:this[_0x3d9270(0x186)]-=this[_0x3d9270(0x1d4)]();},Sprite_EventLabel[_0x2dfc49(0x380)]['updateHueShift']=function(){const _0x407356=_0x2dfc49;if(this[_0x407356(0x560)]()&&this['_event']&&this[_0x407356(0x46a)]['_labelWindow'][_0x407356(0x28b)]){const _0x520177=this[_0x407356(0x5a2)]+(this[_0x407356(0x46a)][_0x407356(0x61b)]['hueShift']||0x0);this['setHue'](_0x520177);}},Sprite_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x560)]=function(){const _0xaed86a=_0x2dfc49;if(!$gameSystem[_0xaed86a(0x5d7)]())return![];if(this[_0xaed86a(0x46a)]?.[_0xaed86a(0x271)])return![];if(this[_0xaed86a(0x46a)]&&this[_0xaed86a(0x46a)][_0xaed86a(0x524)]<0x0)return![];if(SceneManager[_0xaed86a(0x35d)][_0xaed86a(0x314)]>0x0)return![];const _0x320e3a=$gamePlayer['x'],_0x4a89ca=$gamePlayer['y'],_0x37a295=this[_0xaed86a(0x46a)]['x'],_0x2125f5=this[_0xaed86a(0x46a)]['y'];if(this[_0xaed86a(0x4ed)]===_0x320e3a&&this[_0xaed86a(0x301)]===_0x4a89ca&&this[_0xaed86a(0x5e4)]===_0x37a295&&this[_0xaed86a(0x225)]===_0x2125f5)return this[_0xaed86a(0x549)];this[_0xaed86a(0x4ed)]=$gamePlayer['x'],this[_0xaed86a(0x301)]=$gamePlayer['y'],this[_0xaed86a(0x5e4)]=this[_0xaed86a(0x46a)]['x'],this[_0xaed86a(0x225)]=this['_event']['y'];if(!VisuMZ[_0xaed86a(0x426)][_0xaed86a(0x603)](this['_event']))return this[_0xaed86a(0x549)]=![],![];return this['_cacheVisibility']=!![],!![];},Sprite_EventLabel['prototype']['opacitySpeed']=function(){const _0x53ddcf=_0x2dfc49;return VisuMZ['EventsMoveCore'][_0x53ddcf(0x4c8)][_0x53ddcf(0x4b1)][_0x53ddcf(0x465)];};function Sprite_VisuMz_MessagePopup(){const _0x294c8e=_0x2dfc49;this[_0x294c8e(0x3fb)](...arguments);}function _0x368a(_0x43b02f,_0x35416a){const _0x41f0d4=_0x41f0();return _0x368a=function(_0x368af4,_0x2269fc){_0x368af4=_0x368af4-0x12c;let _0x104adf=_0x41f0d4[_0x368af4];return _0x104adf;},_0x368a(_0x43b02f,_0x35416a);}Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)]=Object[_0x2dfc49(0x3c4)](Sprite[_0x2dfc49(0x380)]),Sprite_VisuMz_MessagePopup['prototype'][_0x2dfc49(0x345)]=Sprite_VisuMz_MessagePopup,Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)]['initialize']=function(_0x353086){const _0x4924d3=_0x2dfc49;this[_0x4924d3(0x5bc)]=_0x353086,Sprite['prototype'][_0x4924d3(0x3fb)][_0x4924d3(0x3a5)](this),this[_0x4924d3(0x2f3)](),this['createDummyWindow'](),this[_0x4924d3(0x4bd)](),this[_0x4924d3(0x322)]();},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)]['initMembers']=function(){const _0x5ecf31=_0x2dfc49;this['_duration']=this['_settings'][_0x5ecf31(0x28c)],this[_0x5ecf31(0x2da)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x28c)],this['z']=0x6,this[_0x5ecf31(0x4f0)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x3e8)][_0x5ecf31(0x5e3)],this[_0x5ecf31(0x4f0)]>0x0&&this['_fadeInDuration']>=Math[_0x5ecf31(0x5f0)](this[_0x5ecf31(0x5be)]*0.48)&&(this['_fadeInDuration']=Math[_0x5ecf31(0x5f0)](this[_0x5ecf31(0x5be)]*0.48)),this[_0x5ecf31(0x186)]=this[_0x5ecf31(0x4f0)]>0x0?0x0:0xff,this[_0x5ecf31(0x253)]=this['_settings'][_0x5ecf31(0x3e8)][_0x5ecf31(0x207)],this[_0x5ecf31(0x253)]>0x0&&this[_0x5ecf31(0x253)]>=Math['floor'](this[_0x5ecf31(0x5be)]*0.48)&&(this[_0x5ecf31(0x253)]=Math['floor'](this['_duration']*0.48)),this[_0x5ecf31(0x509)]=this[_0x5ecf31(0x253)],this[_0x5ecf31(0x306)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x292)]['x'],this[_0x5ecf31(0x262)]=this[_0x5ecf31(0x5bc)]['startOffset']['y'],this[_0x5ecf31(0x4ce)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x2f7)]['x'],this['_targetY']=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x2f7)]['y'],this[_0x5ecf31(0x52b)]=this[_0x5ecf31(0x306)],this[_0x5ecf31(0x3d1)]=this[_0x5ecf31(0x262)],this[_0x5ecf31(0x199)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x577)]['x'],this[_0x5ecf31(0x2a9)]=this[_0x5ecf31(0x5bc)]['startScale']['y'],this[_0x5ecf31(0x29c)]=this[_0x5ecf31(0x5bc)][_0x5ecf31(0x1e1)]['x'],this[_0x5ecf31(0x411)]=this[_0x5ecf31(0x5bc)]['endScale']['y'],this[_0x5ecf31(0x3ce)]=-this[_0x5ecf31(0x5bc)][_0x5ecf31(0x241)][_0x5ecf31(0x296)],this[_0x5ecf31(0x359)]=-this['_settings'][_0x5ecf31(0x241)][_0x5ecf31(0x42b)],this['_arcPeak']=-this[_0x5ecf31(0x5bc)][_0x5ecf31(0x522)][_0x5ecf31(0x308)],this['_currentArc']=0x0;},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)]['createDummyWindow']=function(){const _0x4c7410=_0x2dfc49,_0x4c7069=this[_0x4c7410(0x5bc)],_0x5b78f5=new Rectangle(0x0,0x0,Graphics[_0x4c7410(0x40c)],Graphics[_0x4c7410(0x5d9)]);this[_0x4c7410(0x49d)]=new Window_Base(_0x5b78f5);const _0xe95a95=this['_dummyWindow'][_0x4c7410(0x4cf)](_0x4c7069[_0x4c7410(0x50b)]),_0x461d55=_0xe95a95[_0x4c7410(0x40c)],_0x43bd87=_0xe95a95[_0x4c7410(0x5d9)],_0x3ac9c6=_0x461d55+$gameSystem[_0x4c7410(0x18c)]()*0x2,_0x5b8308=_0x43bd87+$gameSystem[_0x4c7410(0x18c)]()*0x2;this['_dummyWindow']['move'](0x0,0x0,_0x3ac9c6,_0x5b8308),this['_dummyWindow']['createContents'](),this[_0x4c7410(0x49d)][_0x4c7410(0x4d1)](_0x4c7069['text'],0x0,0x0);},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x4bd)]=function(){const _0x57c545=_0x2dfc49;this[_0x57c545(0x487)]=new Sprite(),this[_0x57c545(0x487)][_0x57c545(0x551)]=this[_0x57c545(0x49d)][_0x57c545(0x589)],this[_0x57c545(0x487)]['anchor']['x']=0.5,this['_textSprite']['anchor']['y']=0.5,this['_textSprite']['x']=this[_0x57c545(0x306)],this[_0x57c545(0x487)]['y']=this[_0x57c545(0x262)],this[_0x57c545(0x487)][_0x57c545(0x5c0)]['x']=this[_0x57c545(0x199)],this['_textSprite'][_0x57c545(0x5c0)]['y']=this[_0x57c545(0x2a9)],this['_textSprite'][_0x57c545(0x241)]=this[_0x57c545(0x3ce)],this[_0x57c545(0x245)](this[_0x57c545(0x487)]);},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x322)]=function(){const _0x274e14=_0x2dfc49;Sprite[_0x274e14(0x380)][_0x274e14(0x322)][_0x274e14(0x3a5)](this);if(!this[_0x274e14(0x3e2)]())return;this[_0x274e14(0x2e8)](),this['updateTextPosition'](),this['updateTextScale'](),this[_0x274e14(0x1b2)](),this[_0x274e14(0x1ba)](),this[_0x274e14(0x15d)]();},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x3e2)]=function(){const _0x3b7990=_0x2dfc49;return!!this[_0x3b7990(0x487)];},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)]['updateSpritePosition']=function(){const _0x150cb9=_0x2dfc49,_0x1c41d4=this[_0x150cb9(0x5bc)];{const _0x4722c1=$gameMap[_0x150cb9(0x385)](),_0x102126=_0x1c41d4[_0x150cb9(0x56e)]['x'],_0x433847=$gameMap[_0x150cb9(0x2c3)](_0x102126);this['x']=Math['floor'](_0x433847*_0x4722c1+_0x4722c1/0x2);}{const _0x292cbd=$gameMap[_0x150cb9(0x58c)](),_0x5902a2=_0x1c41d4['tileCoordinates']['y'],_0x3c8f4e=$gameMap[_0x150cb9(0x44b)](_0x5902a2);this['y']=Math[_0x150cb9(0x5f0)](_0x3c8f4e*_0x292cbd+_0x292cbd);}},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x520)]=function(){const _0x4a186e=_0x2dfc49;if(this[_0x4a186e(0x5be)]<=0x0)return;const _0x2f9015=this[_0x4a186e(0x5be)],_0x385ce7=this[_0x4a186e(0x2da)];{this[_0x4a186e(0x52b)]=(this[_0x4a186e(0x52b)]*(_0x2f9015-0x1)+this[_0x4a186e(0x4ce)])/_0x2f9015,this[_0x4a186e(0x3d1)]=(this[_0x4a186e(0x3d1)]*(_0x2f9015-0x1)+this[_0x4a186e(0x22d)])/_0x2f9015;}{const _0xa9c1b=_0x385ce7-_0x2f9015,_0x47c469=_0x385ce7/0x2,_0x50e904=this[_0x4a186e(0x1ae)],_0x1a67c2=-_0x50e904/Math[_0x4a186e(0x3f0)](_0x47c469,0x2);this[_0x4a186e(0x4a8)]=_0x1a67c2*Math['pow'](_0xa9c1b-_0x47c469,0x2)+_0x50e904;}this[_0x4a186e(0x487)]['x']=this[_0x4a186e(0x52b)],this['_textSprite']['y']=this[_0x4a186e(0x3d1)]+this[_0x4a186e(0x4a8)];},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x215)]=function(){const _0xc4d3c5=_0x2dfc49;if(this['_duration']<=0x0)return;const _0xc4bea9=this['_duration'];this[_0xc4d3c5(0x487)]['scale']['x']=(this['_textSprite'][_0xc4d3c5(0x5c0)]['x']*(_0xc4bea9-0x1)+this[_0xc4d3c5(0x29c)])/_0xc4bea9,this[_0xc4d3c5(0x487)][_0xc4d3c5(0x5c0)]['y']=(this['_textSprite']['scale']['y']*(_0xc4bea9-0x1)+this[_0xc4d3c5(0x411)])/_0xc4bea9;},Sprite_VisuMz_MessagePopup['prototype'][_0x2dfc49(0x1b2)]=function(){const _0xc64065=_0x2dfc49;if(this[_0xc64065(0x5be)]<=0x0)return;const _0x1276b4=this['_duration'];this[_0xc64065(0x487)][_0xc64065(0x241)]=(this[_0xc64065(0x487)][_0xc64065(0x241)]*(_0x1276b4-0x1)+this[_0xc64065(0x359)])/_0x1276b4;},Sprite_VisuMz_MessagePopup['prototype'][_0x2dfc49(0x1ba)]=function(){const _0x41c3e6=_0x2dfc49;this[_0x41c3e6(0x205)](),this[_0x41c3e6(0x2ca)]();},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x205)]=function(){const _0x43a8d4=_0x2dfc49;if(this[_0x43a8d4(0x4f0)]<=0x0)return;const _0x5a7c93=this[_0x43a8d4(0x4f0)];this[_0x43a8d4(0x186)]=(this[_0x43a8d4(0x186)]*(_0x5a7c93-0x1)+0xff)/_0x5a7c93,this[_0x43a8d4(0x4f0)]--,this[_0x43a8d4(0x4f0)]<=0x0&&(this[_0x43a8d4(0x186)]=0xff);},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x2ca)]=function(){const _0x2b9d34=_0x2dfc49;if(this[_0x2b9d34(0x253)]<=0x0)return;if(this[_0x2b9d34(0x5be)]>this[_0x2b9d34(0x509)])return;const _0x156c52=this[_0x2b9d34(0x253)];this[_0x2b9d34(0x186)]=(this['opacity']*(_0x156c52-0x1)+0x0)/_0x156c52,this[_0x2b9d34(0x253)]--,this['_fadeOutDuration']<=0x0&&(this[_0x2b9d34(0x186)]=0x0);},Sprite_VisuMz_MessagePopup[_0x2dfc49(0x380)][_0x2dfc49(0x15d)]=function(){const _0x579f9c=_0x2dfc49;if(this[_0x579f9c(0x5be)]<=0x0)return;this[_0x579f9c(0x5be)]--;if(this['_duration']<=0x0){if(this[_0x579f9c(0x5d3)])this[_0x579f9c(0x5d3)]['removeChild'](this);this[_0x579f9c(0x487)]['bitmap']&&this[_0x579f9c(0x487)][_0x579f9c(0x551)][_0x579f9c(0x250)]();}},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x50d)]=Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x580)],Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x580)]=function(){const _0x4a8b9d=_0x2dfc49;VisuMZ[_0x4a8b9d(0x426)][_0x4a8b9d(0x50d)][_0x4a8b9d(0x3a5)](this),this[_0x4a8b9d(0x4bb)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x234)]=Spriteset_Map['prototype'][_0x2dfc49(0x2ed)],Spriteset_Map[_0x2dfc49(0x380)]['createShadow']=function(){const _0x5bfd94=_0x2dfc49;VisuMZ[_0x5bfd94(0x426)][_0x5bfd94(0x234)][_0x5bfd94(0x3a5)](this),this[_0x5bfd94(0x598)]();},Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x598)]=function(){const _0x9b6e39=_0x2dfc49;if(!VisuMZ['EventsMoveCore'][_0x9b6e39(0x4c8)][_0x9b6e39(0x44a)][_0x9b6e39(0x602)])return;for(const _0x332905 of this[_0x9b6e39(0x23d)]){this[_0x9b6e39(0x29d)](_0x332905);}},Spriteset_Map[_0x2dfc49(0x380)]['createCharacterShadow']=function(_0x571228){const _0x258948=_0x2dfc49;_0x571228['_shadowSprite']=new Sprite(),_0x571228[_0x258948(0x173)][_0x258948(0x587)]=_0x571228['_character']['shadowFilename'](),_0x571228[_0x258948(0x173)]['bitmap']=ImageManager['loadSystem'](_0x571228[_0x258948(0x173)][_0x258948(0x587)]),_0x571228[_0x258948(0x173)]['anchor']['x']=0.5,_0x571228[_0x258948(0x173)]['anchor']['y']=0x1;const _0x1c0fb3=VisuMZ[_0x258948(0x426)][_0x258948(0x4c8)][_0x258948(0x44a)][_0x258948(0x5b5)]??0.5;_0x571228[_0x258948(0x173)]['z']=_0x1c0fb3,this['_tilemap'][_0x258948(0x245)](_0x571228['_shadowSprite']);},Spriteset_Map[_0x2dfc49(0x380)]['hideShadows']=function(){const _0x12c272=_0x2dfc49;if(!VisuMZ['EventsMoveCore'][_0x12c272(0x4c8)][_0x12c272(0x44a)]['ShowShadows'])return;for(const _0xdce8dc of this['_characterSprites']){this[_0x12c272(0x20d)]['removeChild'](_0xdce8dc[_0x12c272(0x173)]);}},Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x4bb)]=function(){const _0x2f583c=_0x2dfc49;this[_0x2f583c(0x261)]=[];for(const _0x4b3367 of $gameMap[_0x2f583c(0x4fa)]()){this[_0x2f583c(0x620)](_0x4b3367);}},Spriteset_Map[_0x2dfc49(0x2f9)]=VisuMZ['EventsMoveCore']['Settings'][_0x2dfc49(0x4b1)][_0x2dfc49(0x165)]??!![],Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x620)]=function(_0x5b8007){const _0x13acd6=_0x2dfc49;if(!this[_0x13acd6(0x513)](_0x5b8007))return;if(Utils['isMobileDevice']()){if(!Spriteset_Map['MOBILE_EVENT_LABELS'])return;}let _0x3877af;const _0x3e73cf=VisuMZ[_0x13acd6(0x426)][_0x13acd6(0x4c8)][_0x13acd6(0x4b1)][_0x13acd6(0x511)]??!![];_0x3877af=_0x3e73cf?new Sprite_EventLabel(_0x5b8007):new Window_EventLabel(_0x5b8007),_0x3877af['z']=0x8,_0x3877af[_0x13acd6(0x4ae)]=Sprite[_0x13acd6(0x4b7)]++,this[_0x13acd6(0x20d)]['addChild'](_0x3877af),this[_0x13acd6(0x261)][_0x13acd6(0x546)](_0x3877af);},Spriteset_Map['prototype'][_0x2dfc49(0x513)]=function(_0x3991db){const _0x1e1daa=_0x2dfc49,_0x54a4b5=_0x3991db[_0x1e1daa(0x2b5)]();if(_0x54a4b5[_0x1e1daa(0x60c)][_0x1e1daa(0x183)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x54a4b5[_0x1e1daa(0x60c)][_0x1e1daa(0x183)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x1c0299 of _0x54a4b5[_0x1e1daa(0x393)]){let _0xc62196='';for(const _0x511d0f of _0x1c0299[_0x1e1daa(0x377)]){[0x6c,0x198]['includes'](_0x511d0f[_0x1e1daa(0x169)])&&(_0xc62196+=_0x511d0f['parameters'][0x0]);}if(_0xc62196['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0xc62196[_0x1e1daa(0x183)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x445)]=function(_0x4ad1a5){const _0x5e102f=_0x2dfc49;this[_0x5e102f(0x23d)]=this[_0x5e102f(0x23d)]||[];const _0x3b9d8c=new Sprite_Character(_0x4ad1a5);this[_0x5e102f(0x23d)][_0x5e102f(0x546)](_0x3b9d8c),this['_tilemap'][_0x5e102f(0x245)](_0x3b9d8c),this[_0x5e102f(0x29d)](_0x3b9d8c),this[_0x5e102f(0x620)](_0x4ad1a5),_0x3b9d8c[_0x5e102f(0x322)](),_0x4ad1a5[_0x5e102f(0x254)](),_0x3b9d8c[_0x5e102f(0x34e)]();},Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x540)]=function(){const _0x3fe0c8=_0x2dfc49;if(!this[_0x3fe0c8(0x261)])return;for(const _0x22210a of this[_0x3fe0c8(0x261)]){_0x22210a&&(_0x22210a[_0x3fe0c8(0x4ed)]=undefined,_0x22210a['refresh']());}},Spriteset_Map[_0x2dfc49(0x380)]['createEventsMoveCoreMessagePopup']=function(_0x6d0a92,_0x2c65fd){const _0x3a12ac=_0x2dfc49;if(!_0x6d0a92)return;_0x2c65fd[_0x3a12ac(0x56e)]={'x':_0x6d0a92['x'],'y':_0x6d0a92['y']},this['createEventsMoveCoreTileMessagePopup'](_0x2c65fd);},Spriteset_Map[_0x2dfc49(0x380)][_0x2dfc49(0x470)]=function(_0x2abc82){const _0x1f4729=_0x2dfc49;if(!this['_tilemap'])return;const _0x5c1084=new Sprite_VisuMz_MessagePopup(_0x2abc82);this[_0x1f4729(0x20d)]['addChild'](_0x5c1084);},VisuMZ[_0x2dfc49(0x426)]['Game_Message_setNumberInput']=Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x17c)],Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x17c)]=function(_0x556dc9,_0x373039){const _0x405cc3=_0x2dfc49;this[_0x405cc3(0x52d)]=$gameTemp['getSelfTarget'](),VisuMZ['EventsMoveCore'][_0x405cc3(0x2b0)]['call'](this,_0x556dc9,_0x373039);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x31b)]=Window_NumberInput[_0x2dfc49(0x380)][_0x2dfc49(0x296)],Window_NumberInput[_0x2dfc49(0x380)][_0x2dfc49(0x296)]=function(){const _0x31bc7f=_0x2dfc49;$gameTemp[_0x31bc7f(0x4b2)]($gameMessage['_selfTargetNumberInput']),VisuMZ[_0x31bc7f(0x426)][_0x31bc7f(0x31b)][_0x31bc7f(0x3a5)](this),$gameTemp['clearSelfTarget']();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x565)]=Window_NumberInput[_0x2dfc49(0x380)][_0x2dfc49(0x2c8)],Window_NumberInput[_0x2dfc49(0x380)][_0x2dfc49(0x2c8)]=function(){const _0x425a7e=_0x2dfc49;$gameTemp[_0x425a7e(0x4b2)]($gameMessage[_0x425a7e(0x52d)]),VisuMZ[_0x425a7e(0x426)][_0x425a7e(0x565)][_0x425a7e(0x3a5)](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x425a7e(0x52d)]=undefined;},VisuMZ['EventsMoveCore'][_0x2dfc49(0x1fb)]=Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x4e4)],Game_Message[_0x2dfc49(0x380)][_0x2dfc49(0x4e4)]=function(_0x41f071,_0x1ed015){const _0x2b2d77=_0x2dfc49;this[_0x2b2d77(0x3b7)]=$gameTemp[_0x2b2d77(0x391)](),VisuMZ[_0x2b2d77(0x426)]['Game_Message_setItemChoice']['call'](this,_0x41f071,_0x1ed015);},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x267)]=Window_EventItem['prototype'][_0x2dfc49(0x36c)],Window_EventItem[_0x2dfc49(0x380)]['onOk']=function(){const _0x4b2a97=_0x2dfc49;$gameTemp[_0x4b2a97(0x4b2)]($gameMessage[_0x4b2a97(0x3b7)]),VisuMZ[_0x4b2a97(0x426)]['Window_EventItem_onOk']['call'](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x4b2a97(0x3b7)]=undefined;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x51a)]=Window_EventItem['prototype']['onCancel'],Window_EventItem[_0x2dfc49(0x380)][_0x2dfc49(0x5e9)]=function(){const _0x267aab=_0x2dfc49;$gameTemp[_0x267aab(0x4b2)]($gameMessage['_selfTargetItemChoice']),VisuMZ[_0x267aab(0x426)][_0x267aab(0x51a)][_0x267aab(0x3a5)](this),$gameTemp[_0x267aab(0x458)](),$gameMessage[_0x267aab(0x3b7)]=undefined;},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x310)]=Window_Message['prototype'][_0x2dfc49(0x5e5)],Window_Message[_0x2dfc49(0x380)][_0x2dfc49(0x5e5)]=function(){const _0x29ad6c=_0x2dfc49;$gameMessage[_0x29ad6c(0x3db)](),VisuMZ[_0x29ad6c(0x426)][_0x29ad6c(0x310)][_0x29ad6c(0x3a5)](this),$gameTemp[_0x29ad6c(0x458)]();},VisuMZ[_0x2dfc49(0x426)][_0x2dfc49(0x23e)]=Window_ScrollText[_0x2dfc49(0x380)][_0x2dfc49(0x5e5)],Window_ScrollText[_0x2dfc49(0x380)]['startMessage']=function(){const _0x2f32a3=_0x2dfc49;$gameMessage[_0x2f32a3(0x3db)](),VisuMZ[_0x2f32a3(0x426)][_0x2f32a3(0x23e)][_0x2f32a3(0x3a5)](this),$gameTemp[_0x2f32a3(0x458)]();};function Window_EventLabel(){const _0x1a1305=_0x2dfc49;this[_0x1a1305(0x3fb)](...arguments);}function _0x41f0(){const _0xeb084=['Self\x20Switch\x20%1','_targetX','textSizeEx','CPCsMet','drawTextEx','setupPlayerVisibilityOverrides','isCollidedWithPlayerCharacters','Game_Vehicle_isMapPassable','_DisablePlayerControl','executeCommandCommonEvent','_eventId','toLowerCase','Map%1.json','clearStepPattern','getEventIconData','log','_moveSpeed','moveStraight','Arc','checkSmartEventCollision','setPattern','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','createIconSprite','setItemChoice','frontY','processMoveRouteMoveUntilStop','isBattleTest','SpawnEventDespawnTerrainTags','startOffsetY','maxSize','ShiftY','_inputTime','_visiblePlayerX','resetSelfSwitchesForMap','isPosing','_fadeInDuration','length','...','split','Game_Map_events','TRUE','setEventIconDataKey','hasStepAnime','removeTemporaryMapSpawnedEvents','_frames','events','Direction','_PlayerDiagonalSetting','PostCopyJS','EVAL','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','StopAutoMoveMessages','Minutes','processMoveRouteStepToCharacter','Map\x20%1\x20Switch\x20%2','boxWidth','Game_Event_meetsConditionsCPC','canPassDiagonally','ARRAYSTRUCT','eventsXyNt','_fadeOutStart','approach','text','setFrame','Spriteset_Map_createLowerLayer','_forceHidePlayer','ConvertParams','setControlledFollowerID','SpriteBased','_realX','isTargetEventValidForLabelWindow','_hidden','isEmptyCharacter','Game_Character_setMoveRoute','_stopCount','PostMorphJS','checkEventTriggerEventsMoveCore','Window_EventItem_onCancel','FollowerReset','hasEncounterHalf','isDiagonalDirection','List','moveAwayFromPoint','updateTextPosition','Game_Interpreter_PluginCommand','misc','ROUTE_SCRIPT','_pageIndex','EventAutoMovement','PopupExtra','_chaseOff','selfValue','_eventIconSprite','defaultFontSize','_offsetX','endOffsetY','_selfTargetNumberInput','map','switch2Valid','dir8','string','setMovementSuccess','Step2EventId','Airship','Setting','Game_Troop_meetsConditionsCPC','Allow','moveByInput','getPose','standing','CarryPose','_addedHitbox','switch1Id','initEventsMoveCoreEffects','characterPatternY','refreshEventLabels','getSavedEventLocation','pos','Game_Timer_initialize','radius','SpawnEventAtTerrainTag','push','iconWidth','followers','_cacheVisibility','BULB','isSmartEventCollisionOn','_eventCache','setDiagonalDirection','shadowFilename','Scene_Map_startEncounterEffect','processMoveSynchAway','bitmap','IconSize','encounterProximityDistance','moveSynchTarget','isVisible','Game_CharacterBase_realMoveSpeed','_lastAttachPictureFilename','switches','_forceCarrying','_callEventData','CustomPageConditions','Region%1','BlendMode','setupCopyEvent','destinationY','isLabelVisible','MUSIC\x20NOTE','reverse\x20mimic','away','down','Window_NumberInput_processOk','isDestinationValid','getMapSpawnedEventData','timer','updateShadowChanges','EventForbid','patternHeight','checkExistingEntitiesAt','Icon','tileCoordinates','mainFontSize','_starting','abs','mirror\x20vert','processSaveEventLocation','eventId','setupAttachPictureBitmap','needsUpdate','startScale','_cpc','PageId','Value','_opacity','TemplateName','reverse\x20copy','Game_Player_checkEventTriggerHere','processMoveRouteFadeIn','createLowerLayer','updateAttachPictureBitmap','isLandOk','realMoveSpeed','resizeWindow','Game_Player_executeMove','hasEventIcon','_filename','attachPictureBlendMode','contents','column','setSelfValue','tileHeight','exit','attachPictureSettings','Map\x20%1\x20Variable\x20%2','Game_Message_add','GetMoveSynchTarget','backX','updateEventMirrorSprite','_eventOverloadThreshold','UPPER\x20RIGHT','isAllowEventAutoMovement','NORMAL','createShadows','requestAnimation','delay','updateEventIconSprite','SelfSwitchID','despawnEventId','MsgDuration','isCollidedWithEvents','isActive','FontSize','_hue','despawnAtXY','isMapSwitch','PreloadedMaps','VehicleForbid','_moveAllowPlayerCollision','Speed','TargetSwitchId','Operation','isMoving','MUSIC-NOTE','forced','ARRAYFUNC','isEventTest','regionId','MessageText','isWorking','isMobileDevice','getAttachPictureBitmapWidth','ShadowLayer','contentsOpacity','Enable','spawnPreserved','Letter','checkValidEventerMap','rotation','_settings','firstSpawnedEventID','_duration','filename','scale','_eventScreenX','mapValue','ADDITIVE','PlayerIconChange','checkNeedForPeriodicRefresh','setDirection','Game_Troop_meetsConditions','FastForwardKey','left','LOWER\x20RIGHT','FollowerIndex','isTurnInPlace','Game_Vehicle_initMoveSpeed','Game_Player_checkEventTriggerThere','prepareSpawnedEventAtTerrainTag','2353640lghzMw','Game_Followers_isVisible','Game_Event_update','parent','switch2Id','increaseSteps','IconBufferY','eventLabelsVisible','_callEventMap','height','StopAutoMoveEvents','characterPatternYBasic','Step2Preserve','prepareSpawnedEventAtRegion','isShadowVisible','Game_Timer_onExpire','despawnEverything','apply','checkCollisionKeywords','fadeIn','_visibleEventX','startMessage','getEventIconIndex','turnTowardPoint','isSelfSwitch','onCancel','_diagonalSupport','EventTimerPause','forceMoveRoute','deltaX','right','processMoveRouteHugWall','floor','processMoveRouteJumpToCharacter','RIGHT\x20TO\x20LEFT','pageIndex','command108','PosX','setMoveRoute','status','EventAllow','determineEventOverload','findDirectionTo','isDashingAndMoving','Game_Event_meetsConditions','Game_Variables_setValue','_regionRules','clamp','deltaXFrom','EventIconChange','ShowShadows','isInsideLabelRange','updatePose','_displayY','_characterIndex','convertSelfVariableValuesInScriptCall','checkEventsMoveCoreStringTags','getPosingCharacterPattern','TOGGLE','Game_Event_updateSelfMovement','note','Game_Event_checkEventTriggerAuto','Game_CharacterBase_opacity','getPosingCharacterDirection','_isCharacterSpriteSheetInvisible','isSaveEventLocation','screenTileX','isPressed','updateAttachPictureSprite','EnableTurnInPlace','getLastPluginCommandInterpreter','isMapVariable','metCPC','executeCommonEvent','target','_labelWindow','posEventsMoveCore','MapID','_shadowGraphic','Name','createLabelWindowForTarget','Game_Character_processMoveCommand','setCommonEvent','LOWER\x20LEFT','_alwaysUpdateMove','onMapLoaded','isPreventSelfMovement','_scaleBaseY','processMoveRouteStepTo','AdvancedVariables','UNTITLED','processMoveSynchCustom','setPlayerDiagonalSetting','turnAwayFromPoint','WalkForbid','Game_CharacterBase_screenX','TileX','IconIndex','isOnRope','splice','endAngle','BoatSpeed','deltaY','_PreservedEventMorphData','$preloadedMap_%1','forceDashing','onChange','Game_Vehicle_isLandOk','labelWindowRangeType','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','Game_Temp_setDestination','HURT','reverseDir','Game_Map_update','_clickTrigger','PosY','frontX','_needsRefresh','SpawnEventDespawnAtXY','processMoveRouteStepFrom','screenY','regionList','isBigCharacter','_trigger','RegionOk','Game_SelfSwitches_value','processMoveCommand','createSaveEventLocationData','labelWindowText','SWEAT','updateDuration','isPlaytest','isStopFollowerChasing','isBoat','getInputDirection','isValid','direction','bushDepth','MobileEnabled','innerWidth','setBalloonPose','offsetY','code','ApplyPopupExtraSettings','lastMovedDirection','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','_spriteOffsetY','SILENCE','gainFrames','padZero','setupRegionRestrictions','Game_CharacterBase_moveStraight','_shadowSprite','isBusy','setMapValue','All','Game_System_initialize','processMoveRouteMoveToCharacter','front','_forceShowFollower','setupSpawnTest','setNumberInput','setDashingEnabled','hideShadows','Game_CharacterBase_hasStepAnime','clearPageSettings','_working','_commonEventId','match','%1%2','checkRegionEventTrigger','opacity','Hours','Game_CharacterBase_canPass','_stepPattern','PostSpawnJS','encounterProximityType','windowPadding','AutoBuffer','findDiagonalDirectionTo','_eventSpawnData','EventLocationSave','characterIndexVS8','updateVisibility','Game_CharacterBase_screenY','Game_Map_setup','forceCarrying','max','_checkEncounterRaw','_CPCs','_startScaleX','setupPageSettings','hasEncounterNone','DIAGONAL_PATHFINDING_EVENT_LIMIT','_lastAttachPictureMaxSize','spawnEventId','BitmapSmoothing','Game_Follower_chaseCharacter','getDirectionToPoint','_lastSesetExitSelfSwitchesMapId','Game_Player_isDashing','SwitchId','VisibleEventLabels','MUSICNOTE','Sprite_Character_setTileBitmap','mirror\x20vertical','AllAllow','updateWaitMode','keys','General','meetsCPC','_arcPeak','FollowerID','clearPose','checkAdvancedSwitchVariablePresent','updateTextAngle','VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20','Game_Event_isCollidedWithPlayerCharacters','inBattle','_EventsMoveCoreSettings','dashSpeedModifier','blendMode','deleteIconsOnEventsDataKey','updateOpacity','_actuallyMoving','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','processMoveRouteSetIndex','_activationProximity','removeMorph','isSpriteVS8dir','fadeInDuration','_characterName','isShadowShrink','_screenParallelOnce','isAllowCharacterTilt','_scaleBaseX','_activationProximityAutoTriggerBypass','clearEventCache','bind','isRegionDockable','OperateValues','isAdvancedSwitch','processMoveRouteMoveTo','_lastAttachPictureScale','createAttachPictureSprite','updatePatternEventsMoveCore','shift','ARRAYNUM','Game_Event_findProperPageIndex','opacitySpeed','Map%1-Event%2','description','_poseDuration','turnAwayFromCharacter','EventLabelVisible','_lastPluginCommandInterpreter','addLoadListener','%1,','drawIcon','meetsSwitchCondition','processMoveSynchRandom','processMoveSynchReverseMimic','endScale','_eventIcon','_character','MULTIPLY','updatePosition','slice','EventID','_type','SpawnEventAtRegion','MsgPopupEvent','processMoveRouteSelfVariable','_spawnPreserved','executeCommand','_randomHomeX','_checkRelocateNotetag','processMoveRouteTeleportTo','_selfTarget','refresh','activationRegionList','ANNOYED','STRUCT','isTransparent','Game_CharacterBase_updatePattern','Game_Interpreter_character','Game_CharacterBase_update','isPlayerControlDisabled','Game_Message_setItemChoice','PlayerMovementChange','restoreIconsOnEventsDataKey','isJumping','copy','firstSpawnedEvent','activationProximityType','ALLOW_LADDER_DASH','onDatabaseLoaded','registerCommand','updateFadeIn','startMapCommonEventOnOK','fadeOut','OffsetX','TiltVert','adjustMoveSynchOpacityDelta','Game_CommonEvent_isActive','isNearTheScreen','_tilemap','needsAttachPictureUpdate','_forceDashing','random','default','getPreservedMorphEventData','PreloadMaps','EventTemplates','updateTextScale','MsgPopupFollower','updatePattern','_eventLabelOffsetX','SelfSwitchABCD','_waitMode','processEraseEncounterEvents','setBackgroundType','475785KdxaVc','opacityDelta','ccwY','setValue','Game_Follower_initialize','resume','_screenParallel','mapId','_visibleEventY','processMoveRouteBalloon','Chase','SlowerSpeed','clearSpriteOffsets','Game_Map_parallelCommonEvents','Game_Followers_jumpAll','Player','_targetY','Region','processMoveRoutePatternLock','_scaleX','parameters','checkEventTriggerAuto','visibleRange','Spriteset_Map_createShadow','clearDashing','onAfterLoad','VisuMZ_2_DragonbonesUnion','Scene_Map_createDisplayObjects','ITEM','Game_Timer_stop','setPose','DashOnLadder','_characterSprites','Window_ScrollText_startMessage','mimic','updateVS8BalloonOffsets','angle','hasDragonbones','SelfDataResetAll','isRegionForbidPass','addChild','updateSaveEventLocation','Game_Party_hasEncounterHalf','SelfVariables','ShipSpeed','setupFollowerVisibilityOverrides','loadCPC','roundY','EventTimerSpeed','isPassable','anchor','destroy','_priorityType','setEventLabelsVisible','_fadeOutDuration','resetPattern','morphIntoTemplate','round','_vehicleType','reserveCommonEvent','_eventLabelOffsetY','deleteSavedEventLocationKey','checkEventTriggerTouch','turnRight90','parse','startAngle','Walk','drawText','_labelWindows','_startY','setWaitMode','_screenZoomScale','_displayX','processMoveRouteJumpTo','Window_EventItem_onOk','_followerControlID','Step1EventId','_screenActivation','_spriteset','meetActivationProximityConditions','_lastMovedDirection','RangeType','activationProximityDistance','Game_Interpreter_updateWaitMode','_erased','Dock','isDashingEnabled','determineCommonEventsWithCPC','screenX','Hidden','updateBitmapSmoothing','isObjectCharacter','_eventMorphData','_spawnData','EventLabelRefresh','lastSpawnedEvent','directionOnLadderSpriteVS8dir','resetIconsOnEventsDataKey','Sprite_Character_update','findTargetSprite','ZZZ','PreCopyJS','Game_Map_event','getPosingCharacterIndex','isEventClickTriggered','format','_randomMoveWeight','Passability','MsgPopupTargetTile','Game_Map_isDashDisabled','hueShift','duration','Game_Interpreter_executeCommand','Game_Player_increaseSteps','_attachPictureSprite','Game_Map_setupEvents','filter','startOffset','setMoveSpeed','chaseCharacter','indexOf','start','startMapCommonEventOnTouch','stop','setStopFollowerChasing','_saveEventLocations','moveSynchType','_targetScaleX','createCharacterShadow','saveEventLocation','attachPictureScale','Frames','erase','_interpreter','isMapPassable','COBWEB','Game_Event_clearPageSettings','makeDeepCopy','hasMoveOnlyRegions','_encounterNoneProximity','_startScaleY','_cacheSystemVisible','_eventPageIndex','Sprite_Balloon_updatePosition','RegionTouch','referEvent','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','Game_Message_setNumberInput','PlayerForbid','_text','VisibleRange','rangeType','event','_scaleY','TerrainTags','_data','setLastPluginCommandInterpreter','changeSpeed','shiftY','parallelCommonEvents','ARRAYJSON','checkEventTriggerThere','resetFontSettings','AirshipSpeed','updateTilt','region','adjustX','Scene_Map_onMapLoadedEncErase','WalkAllow','Sprite_Balloon_setup','isAutoBufferIcon','processOk','ccwX','updateFadeOut','AutoBalloon','Game_CharacterBase_characterIndex','_expireCommonEvent','absDistance','_SavedEventLocations','Game_System_onAfterLoad','updateMoveSynchDirection','remove','resetExitSelfSwitches','vert\x20mirror','Game_CharacterBase_pattern','Game_Switches_value','createDisplayObjects','eventsXy','convertVariableValuesInScriptCall','_wholeDuration','roundXWithDirection','_customZ','ANGER','clearDestination','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','SCREEN','version','min','Game_CharacterBase_setDirection','isDashDisabled','DashEnableToggle','getPlayerDiagonalSetting','Forbid','updateSpritePosition','isOnLadder','VisuMZ_0_CoreEngine','vertical\x20mirror','screenTileY','createShadow','549118JlhBfo','setTileBitmap','TileY','setupDiagonalSupport','LIGHTBULB','initMembers','_forceHideFollower','isTile','EventIconChangeForced','endOffset','OffsetY','MOBILE_EVENT_LABELS','row','getControlledFollowerID','trigger','_selfEvent','requestMapLoadCommonEvents','processMoveSynchMimic','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','_visiblePlayerY','Toggle','processMoveRouteTeleportToCharacter','Scene_Boot_onDatabaseLoaded','VisuMZ_1_MessageCore','_startX','deleteIconsOnEventsData','arc','Game_Event_moveTypeRandom','setChaseOff','SelfSwitches','useCarryPoseForIcons','isRunning','createSpawnedEventWithData','MapSwitches','Window_Message_startMessage','_screenActivated','removeChild','PlayerIconDelete','_encounterEffectDuration','LIGHT\x20BULB','VS8','fontSize','LEFT\x20TO\x20RIGHT','Game_CharacterBase_bushDepth','moveDiagonally','Window_NumberInput_start','replace','moveTowardCharacter','Game_Event_updateParallel','updateRoutineMove','_eventCopyData','STR','update','value','setupSpawn','isTriggerIn','pageId','Game_CharacterBase_direction','of\x20Preloaded\x20Maps.\x0a\x0a','square','RandomMoveWeight','Game_Timer_start','requestRefresh','_randomHomeY','Game_CharacterBase_initMembers','\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!','terrainTag','canStartLocalEvents','_forceShowPlayer','meetsConditions','getAttachPictureBitmapHeight','EventId','PreSpawnJS','resetIconsOnEventsData','initMoveSpeed','correctFacingDirection','AdvancedSwitches','SelfVariableID','LOVE','mirror\x20horz','processMoveSynchDirection','SPIN\x20ANTICLOCKWISE','backY','Rope','DashingEnable','circle','execute','constructor','22482YzAqxe','visible','Game_Map_unlockEvent','attachPictureOffsetX','setDestination','mirror\x20horizontal','unlockEvent','iconHeight','updateFrame','smooth','areFollowersForceHidden','locate','OFF','restoreSavedEventPosition','concat','_moveRoute','IconSet','move','HMPH','_targetAngle','checkEventProximity','_tileId','_saveEventLocation','_scene','VariableGetSelfVariableID','SPIN\x20COUNTERCLOCKWISE','Game_Event_locate','Game_CharacterBase_isDashing','isEventOverloaded','Game_Event_setupPageSettings','MOBILE_DIAGONAL_PATHFINDING','PathfindMobileEnabled','isAdvancedVariable','checkEventTriggerHere','COLLAPSE','command357','variableValid','process_VisuMZ_EventsMoveCore_Switches_Variables','onOk','_needsPeriodicRefresh','jumpAll','Game_Event_start','processMoveRouteMoveRepeat','_mirrorSprite','processMoveSynchMirrorVert','DEFAULT_SHIFT_Y','SuccessSwitchId','_advancedSwitchVariable','isPlayerWithinEncounterHalfEvents','list','setupEventsMoveCoreNotetags','zoomScale','pattern','onClickTrigger','deltaYFrom','roundYWithDirection','setupEventsMoveCoreEffects','onExpire','prototype','morphInto','attachPictureOffsetY','advancedValue','BalloonOffsetX','tileWidth','VICTORY','processMoveSynch','setupSpawnedEvents','Ship','isPassableByAnyDirection','LIGHT','CallEvent','DiagonalSpeedMultiplier','lineHeight','name','scrolledY','getSelfTarget','Game_Enemy_meetsSwitchCondition','pages','setOpacity','_pose','SPIN\x20CLOCKWISE','Game_Character_forceMoveRoute','Game_Player_isMapPassable','EventLocationDelete','outlineColor','MapVariables','NUM','initEventsMoveCore','EventTimerExpireClear','processMoveRouteSelfSwitch','frameCount','despawnTerrainTags','characterPatternYVS8','distance','isPlayerWithinEncounterNoneEvents','call','updateStop','isPlayerForceHidden','_requestSaveEventLocation','Sprite_Character_setCharacterBitmap','_moveOnlyRegions','updatePeriodicRefresh','cwX','turnLeft90','processMoveRouteJumpForward','Boat','setAllowEventAutoMovement','setupChild','SwitchGetSelfSwitchID','loadDataFile','MapId','jump','Game_SelfSwitches_setValue','_selfTargetItemChoice','randomInt','despawnRegions','characterIndex','KNEEL','initFollowerController','originalText','isMoveOnlyRegionPassable','1997429meavAH','Game_Player_getInputDirection','characterName','setCharacterBitmap','shadowX','create','setup','_mapId','updateSelfMovement','DefaultShadow','Game_CharacterBase_increaseSteps','startOffsetX','pluginCommandCallEvent','switch1Valid','_encounterHalfProximity','_startAngle','createContents','updateText','_offsetY','FollowerSetControl','return\x20%1','variables','Game_Event_checkEventTriggerTouch','_proxyWindow','pause','isNormalPriority','_lastAttachPictureType','QUESTION','registerSelfEvent','toUpperCase','template','updateMoveSynch','setCharacterSpriteSheetInvisible','type','Step2MapId','canUpdate','advancedFunc','_realY','picture','attachPictureFilename','processMoveSynchApproach','fadeDuration','turnTowardCharacter','updateEventsAndMovementCore','destinationX','80PtcMWb','executeMove','Game_Party_hasEncounterNone','isLongPressed','pow','210JzulQz','switchId','%1Dock','MorphEventRemove','initEventsMoveCoreSettings','setPlayerControlDisable','_spriteOffsetX','SPIN\x20CW','createEventsMoveCoreMessagePopup','ship','initialize','TiltRight','_moveRouteIndex','eraseEvent','moveRouteIndex','custom','_patternLocked','iconIndex','_periodicRefreshTimer','startMapCommonEventOnOKTarget','_direction','delta','Collision','deleteEventLocation','isInVehicle','hasAdvancedSwitchVariable','FALSE','width','setEventIconData','deletePreservedMorphEventDataKey','moveBackToRandomHome','processMoveSynchMirrorHorz','_targetScaleY','Game_Event_event','isInvisibleCharacter','canPass','trim','_followerChaseOff','enemy','SLEEP','_target','clear','isSceneMap','timerText','USER-DEFINED\x202','isAirshipPassable','VehicleDock','updateHueShift','_isObjectCharacter','Scene_Load_onLoadSuccess','StrictCollision','_moveSynch','bufferX','EventsMoveCore','setupEventsMoveCoreCommentTags','Game_Event_initialize','moveTowardPoint','processMoveCommandEventsMoveCore','end','$callEventMap','processEraseEncounterSpawn','horizontal\x20mirror','isRegionAllowPass','_eventScreenY','TerrainTag','isEventRunning','JSON','Visible','startsWith','updateTileFrame','endScaleY','HEART','updateScaleBase','FaceSynchAllSynchTargets','updateEventLabelText','areFollowersForceShown','charAt','isSpawnHitboxCollisionOk','178938jEQzSq','_attachPicture','Game_Variables_value','_pattern','some','Template','createSpawnedEvent','loadSystem','IconBufferX','character','padding','Movement','adjustY','EventTimerFramesGain','FollowerSetTargetChase','createProxyWindow','updateParallel','enable','onLoadAttachPicture','airship','Self\x20Variable\x20%1','618607pzGheQ','SpawnEventAtXY','_paused','sv\x20enemy','clearSelfTarget','itemPadding','Preserve','variableId','BufferY','savePreservedMorphEventDataKey','TiltLeft','checkActivationProximity','getDirectionFromPoint','updateShadow','SpawnEventDespawnEventID','disable','cwY','OpacitySpeed','_commonEvents','autoEventIconBuffer','isInstanceOfSceneMap','_reflection','_event','getInputDir8','DashModifier','onLoadSuccess','autosaveEventLocation','RemovePreserve','createEventsMoveCoreTileMessagePopup','Game_Map_refresh','_speed','EventLocationCreate','clearAttachPictureSettings','_eventErased','startCallEvent','vehicle','FRUSTRATION','startEncounterEffect','AllForbid','add','_MapSpawnedEventData','isAnyEventStarting','_spawnedEvents','Game_CharacterBase_isTransparent','includes','isOnScreen','clearCarrying','diamond','_eventOverload','iconSize','horz\x20mirror','_textSprite','_active','isMovementSucceeded','isSelfVariable','lastSpawnedEventID','IconBlendMode','drawing','12bbIcQd','processDrawIcon','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Step1MapId','Game_CharacterBase_moveDiagonally','isEventsMoveCoreInvisible','hasClickTrigger','_tileExpand','updateEventsMoveCoreTagChanges','bufferY','VisuMZ_Setup_Preload_Map','TurnInPlaceDelay','SpawnEventDespawnRegions','isDashing','_comments','_dummyWindow','moveAwayFromCharacter','prepareSpawnedEventAtXY','findProperPageIndex','setupMorphEvent','conditions','_events','offsetX','USER-DEFINED\x203','setupSaveEventLocations','EXCLAMATION','_currentArc','_shadowOpacity','CPC','CommonEventID','Vehicle','MoveAllSynchTargets','spriteId','setImage','follower','Label','registerSelfTarget','meetActivationRegionConditions','adjustDir8MovementSpeed','PreMorphJS','ceil','_counter','_seconds','LineHeight','Seconds','createLabelWindows','player','createTextSprite','shadowY','BalloonOffsetY','hasCPCs','processMoveRouteFadeOut','updateScale','_EventIcons','ARRAYEVAL','executeMoveDir8','none','Game_Switches_setValue','Settings','fontFace','getDiagonalDestination','isSupportDiagonalMovement','910bdsoMr'];_0x41f0=function(){return _0xeb084;};return _0x41f0();}Window_EventLabel[_0x2dfc49(0x380)]=Object[_0x2dfc49(0x3c4)](Window_Base['prototype']),Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x345)]=Window_EventLabel,Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x3fb)]=function(_0x42ac47){const _0x361e5b=_0x2dfc49;this[_0x361e5b(0x46a)]=_0x42ac47;const _0x3c108a=new Rectangle(0x0,0x0,Graphics[_0x361e5b(0x504)]/0x4,this['fittingHeight'](0x1));this[_0x361e5b(0x2f3)](),Window_Base[_0x361e5b(0x380)][_0x361e5b(0x3fb)][_0x361e5b(0x3a5)](this,_0x3c108a),this['contentsOpacity']=0x0,this[_0x361e5b(0x21c)](0x2),this[_0x361e5b(0x2b2)]='';},Window_EventLabel['prototype'][_0x2dfc49(0x2f3)]=function(){const _0x1be31a=_0x2dfc49;this[_0x1be31a(0x475)]=![],this[_0x1be31a(0x264)]=$gameScreen[_0x1be31a(0x379)](),this['_eventScreenX']=this['_event'][_0x1be31a(0x275)](),this[_0x1be31a(0x430)]=this[_0x1be31a(0x46a)]['screenY'](),this[_0x1be31a(0x218)]=this[_0x1be31a(0x46a)]['_labelWindow'][_0x1be31a(0x4a4)],this[_0x1be31a(0x259)]=this[_0x1be31a(0x46a)][_0x1be31a(0x61b)][_0x1be31a(0x168)],this[_0x1be31a(0x2ab)]=this[_0x1be31a(0x46a)][_0x1be31a(0x524)],this[_0x1be31a(0x549)]=this[_0x1be31a(0x560)](),this['_cacheSystemVisible']=$gameSystem[_0x1be31a(0x5d7)](),this[_0x1be31a(0x4ed)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x1be31a(0x5e4)]=this[_0x1be31a(0x46a)]['x'],this[_0x1be31a(0x225)]=this['_event']['y'];},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x322)]=function(){const _0x550167=_0x2dfc49;Window_Base[_0x550167(0x380)][_0x550167(0x322)][_0x550167(0x3a5)](this);if(!this[_0x550167(0x576)]())return;this[_0x550167(0x3d0)](),this[_0x550167(0x4c2)](),this[_0x550167(0x1e5)](),this[_0x550167(0x1ba)]();},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x576)]=function(){const _0x2601cc=_0x2dfc49;if(!this[_0x2601cc(0x46a)])return![];if(!this['_event']['_labelWindow'])return![];if(this['_eventPageIndex']!==this[_0x2601cc(0x46a)][_0x2601cc(0x524)])return!![];if(this['_event']['_erased']&&!this[_0x2601cc(0x475)])return!![];if(this[_0x2601cc(0x46a)][_0x2601cc(0x61b)]['text']==='')return![];if(this[_0x2601cc(0x264)]!==$gameScreen[_0x2601cc(0x379)]())return!![];if(this['_eventScreenX']!==this['_event']['screenX']())return!![];if(this[_0x2601cc(0x430)]!==this[_0x2601cc(0x46a)][_0x2601cc(0x153)]())return!![];if(this[_0x2601cc(0x218)]!==this[_0x2601cc(0x46a)][_0x2601cc(0x61b)][_0x2601cc(0x4a4)])return!![];if(this['_eventLabelOffsetY']!==this[_0x2601cc(0x46a)][_0x2601cc(0x61b)][_0x2601cc(0x168)])return!![];if(this['_visiblePlayerX']!==$gamePlayer['x'])return!![];if(this[_0x2601cc(0x301)]!==$gamePlayer['y'])return!![];if(this[_0x2601cc(0x5e4)]!==this[_0x2601cc(0x46a)]['x'])return!![];if(this[_0x2601cc(0x225)]!==this[_0x2601cc(0x46a)]['y'])return!![];if(this[_0x2601cc(0x2aa)]!==$gameSystem['eventLabelsVisible']())return!![];if(this[_0x2601cc(0x549)]&&this['contentsOpacity']<0xff)return!![];if(!this['_cacheVisibility']&&this[_0x2601cc(0x5b6)]>0x0)return!![];if(SceneManager['_scene'][_0x2601cc(0x314)]>0x0)return!![];return![];},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x3d0)]=function(){const _0x14b489=_0x2dfc49;this[_0x14b489(0x46a)][_0x14b489(0x15b)]()!==this[_0x14b489(0x2b2)]&&(this[_0x14b489(0x2b2)]=this[_0x14b489(0x46a)][_0x14b489(0x15b)](),this['refresh']());},Window_EventLabel['prototype'][_0x2dfc49(0x4c2)]=function(){const _0x10b07e=_0x2dfc49;this[_0x10b07e(0x5c0)]['x']=0x1/$gameScreen[_0x10b07e(0x379)](),this[_0x10b07e(0x5c0)]['y']=0x1/$gameScreen[_0x10b07e(0x379)](),this[_0x10b07e(0x264)]=$gameScreen['zoomScale']();},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x1e5)]=function(){const _0x369072=_0x2dfc49;if(!SceneManager[_0x369072(0x35d)])return;if(!SceneManager[_0x369072(0x35d)]['_spriteset'])return;const _0x1fd41b=SceneManager[_0x369072(0x35d)][_0x369072(0x26b)][_0x369072(0x280)](this[_0x369072(0x46a)]);if(!_0x1fd41b)return;this['x']=Math[_0x369072(0x256)](this['_event'][_0x369072(0x275)]()-Math[_0x369072(0x5f0)](this[_0x369072(0x40c)]*this[_0x369072(0x5c0)]['x']/0x2)),this['x']+=this[_0x369072(0x46a)][_0x369072(0x61b)][_0x369072(0x4a4)],this['y']=this[_0x369072(0x46a)][_0x369072(0x153)]()-_0x1fd41b[_0x369072(0x5d9)],this['y']+=Math[_0x369072(0x256)]($gameSystem['windowPadding']()*0.5),this['y']-=Math[_0x369072(0x256)](this['height']*this[_0x369072(0x5c0)]['y']),this['y']+=this[_0x369072(0x46a)][_0x369072(0x61b)][_0x369072(0x168)],this[_0x369072(0x475)]=this[_0x369072(0x46a)]['_erased'],this[_0x369072(0x5c1)]=this[_0x369072(0x46a)]['screenX'](),this[_0x369072(0x430)]=this[_0x369072(0x46a)][_0x369072(0x153)](),this[_0x369072(0x218)]=this[_0x369072(0x46a)][_0x369072(0x61b)][_0x369072(0x4a4)],this[_0x369072(0x259)]=this['_event']['_labelWindow'][_0x369072(0x168)],this[_0x369072(0x2ab)]=this[_0x369072(0x46a)][_0x369072(0x524)],this[_0x369072(0x475)]&&(this[_0x369072(0x5b6)]=0x0);},Window_EventLabel['prototype'][_0x2dfc49(0x1ba)]=function(){const _0x55bb07=_0x2dfc49;if(this['isLabelVisible']())this['contentsOpacity']+=this[_0x55bb07(0x1d4)]();else SceneManager[_0x55bb07(0x35d)][_0x55bb07(0x314)]>0x0?this[_0x55bb07(0x5b6)]=0x0:this[_0x55bb07(0x5b6)]-=this[_0x55bb07(0x1d4)]();},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x560)]=function(){const _0x283ad0=_0x2dfc49;if(!$gameSystem[_0x283ad0(0x5d7)]())return![];if(this[_0x283ad0(0x46a)]?.[_0x283ad0(0x271)])return![];if(SceneManager[_0x283ad0(0x35d)][_0x283ad0(0x314)]>0x0)return![];const _0x45d80e=$gamePlayer['x'],_0xb49e76=$gamePlayer['y'],_0x1aff99=this[_0x283ad0(0x46a)]['x'],_0x2f8a83=this[_0x283ad0(0x46a)]['y'];if(this[_0x283ad0(0x4ed)]===_0x45d80e&&this[_0x283ad0(0x301)]===_0xb49e76&&this[_0x283ad0(0x5e4)]===_0x1aff99&&this[_0x283ad0(0x225)]===_0x2f8a83)return this['_cacheVisibility'];this[_0x283ad0(0x4ed)]=$gamePlayer['x'],this[_0x283ad0(0x301)]=$gamePlayer['y'],this[_0x283ad0(0x5e4)]=this[_0x283ad0(0x46a)]['x'],this[_0x283ad0(0x225)]=this[_0x283ad0(0x46a)]['y'];if(!VisuMZ[_0x283ad0(0x426)]['isInsideLabelRange'](this[_0x283ad0(0x46a)]))return this[_0x283ad0(0x549)]=![],![];return this[_0x283ad0(0x549)]=!![],!![];},Window_EventLabel[_0x2dfc49(0x380)]['opacitySpeed']=function(){const _0x2e1432=_0x2dfc49;return VisuMZ['EventsMoveCore']['Settings'][_0x2e1432(0x4b1)][_0x2e1432(0x465)];},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x584)]=function(){const _0xffa250=_0x2dfc49,_0x1baefc=this[_0xffa250(0x4cf)](this[_0xffa250(0x2b2)]);this[_0xffa250(0x40c)]=_0x1baefc[_0xffa250(0x40c)]+($gameSystem[_0xffa250(0x18c)]()+this['itemPadding']())*0x2,this[_0xffa250(0x5d9)]=Math[_0xffa250(0x196)](this['lineHeight'](),_0x1baefc[_0xffa250(0x5d9)])+$gameSystem[_0xffa250(0x18c)]()*0x2,this['createContents']();},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x38e)]=function(){const _0x505ccf=_0x2dfc49;return VisuMZ[_0x505ccf(0x426)]['Settings'][_0x505ccf(0x4b1)][_0x505ccf(0x4b9)];},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x2bf)]=function(){const _0x1a3615=_0x2dfc49;Window_Base[_0x1a3615(0x380)][_0x1a3615(0x2bf)][_0x1a3615(0x3a5)](this),this[_0x1a3615(0x589)][_0x1a3615(0x317)]=this[_0x1a3615(0x52a)]();},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x52a)]=function(){const _0x23329f=_0x2dfc49;return VisuMZ[_0x23329f(0x426)][_0x23329f(0x4c8)][_0x23329f(0x4b1)]['FontSize'];},Window_EventLabel[_0x2dfc49(0x380)]['refresh']=function(){const _0x40cea4=_0x2dfc49;this[_0x40cea4(0x584)](),this['contents']['clear']();const _0x5b439e=this[_0x40cea4(0x2b2)][_0x40cea4(0x4f3)](/[\r\n]+/);let _0x581e6c=0x0;for(const _0x3323c9 of _0x5b439e){const _0xfeb40d=this[_0x40cea4(0x4cf)](_0x3323c9),_0x550663=Math['floor']((this[_0x40cea4(0x166)]-_0xfeb40d[_0x40cea4(0x40c)])/0x2);this[_0x40cea4(0x4d1)](_0x3323c9,_0x550663,_0x581e6c),_0x581e6c+=_0xfeb40d[_0x40cea4(0x5d9)];}},Window_EventLabel[_0x2dfc49(0x380)][_0x2dfc49(0x48f)]=function(_0x2eeff7,_0x30b32c){const _0x26784b=_0x2dfc49;_0x30b32c[_0x26784b(0x48d)]&&this[_0x26784b(0x1dd)](_0x2eeff7,_0x30b32c['x']+0x2,_0x30b32c['y']),_0x30b32c['x']+=Math[_0x26784b(0x2e2)](this[_0x26784b(0x485)](),ImageManager[_0x26784b(0x547)])+0x4;},Window_EventLabel['prototype'][_0x2dfc49(0x1dd)]=function(_0x1fb7fe,_0x5c4835,_0x59cb28){const _0x420d39=_0x2dfc49,_0x299d6f=ImageManager[_0x420d39(0x446)](_0x420d39(0x356)),_0x513e59=ImageManager[_0x420d39(0x547)],_0x3e960f=ImageManager[_0x420d39(0x34d)],_0x5dccd2=_0x1fb7fe%0x10*_0x513e59,_0x9b63ff=Math[_0x420d39(0x5f0)](_0x1fb7fe/0x10)*_0x3e960f,_0x23f879=Math[_0x420d39(0x2e2)](this[_0x420d39(0x485)]()),_0x55ad38=Math['min'](this[_0x420d39(0x485)]());this[_0x420d39(0x589)]['blt'](_0x299d6f,_0x5dccd2,_0x9b63ff,_0x513e59,_0x3e960f,_0x5c4835,_0x59cb28,_0x23f879,_0x55ad38);},Window_EventLabel[_0x2dfc49(0x380)]['iconSize']=function(){const _0x39e5fe=_0x2dfc49;return VisuMZ['EventsMoveCore'][_0x39e5fe(0x4c8)][_0x39e5fe(0x4b1)][_0x39e5fe(0x552)];};