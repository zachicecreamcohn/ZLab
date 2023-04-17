const path = require('path');

const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const isDev = require('electron-is-dev');

// menuTemplate is defined in another file.
const menuTemplate  = require('./menuTemplate');

// // set up menu
// const menuTemplate = [
//     {
//         label: 'ZLab',
//         submenu: [

//             {
//                 label: 'About ZLab',
//                 click: () => {
//                     console.log('About ZLab');
//                 }
//               },
//             {
//               label: "Check for Updates",
//               click: () => {
//                 console.log("Check for Updates");
//               }
//             },
//             {
//               "type": "separator"
//             },
//             {
//               label: "ZLab Preferences",
//               click: () => {
//                 console.log("ZLab Preferences");
//               }
//             },
//             {
//               "type": "separator"
//             },
//             {
//               label: "Quit ZLab",
//               click: () => {
//                 console.log("Quit ZLab");
//               }
//             }
//         ]
//     },
//     {
//       "label": "File",
//       "submenu": [
//         {
//           "label": "New Workspace",
//           "click": () => {
//             console.log("New Workspace");
//           },
//           accelerator: "CmdOrCtrl+N"
//         },
//         {
//           "label": "New From Template...",
//           "click": () => {
//             console.log("New From Template");
//           },
//           accelerator: "Shift+CmdOrCtrl+N"
//         },
//         {
//           "label": "Open Workspace...",
//           "click": () => {
//             console.log("Open Workspace");
//           },
//           accelerator: "CmdOrCtrl+O"
//         },
//         {
//           "label": "Open Recent",
//           "submenu": [
//             {
//               "label": "No Recent Workspaces",
//               "enabled": false
//             }
//           ]
//         },
//         {
//           "type": "separator"
//         },
//         {
//           "label": "Connect to Workspace...",
//           "click": () => {
//             console.log("Connect to Workspace");
//           },
//           accelerator: "Shift+CmdOrCtrl+K"
//         },
//       {
//         "type": "separator"
//       },
//       {
//         "label": "Close",
//         "click": () => {
//           console.log("Close");
//         },
//         accelerator: "CmdOrCtrl+W"
//       },
//       {
//         "label": "Save",
//         "click": () => {
//           console.log("Save");
//         },
//         accelerator: "CmdOrCtrl+S",
//         enabled: false
//       },
//       {
//         "label": "Save As...",
//         "click": () => {
//           console.log("Save As");
//         },
//         accelerator: "Shift+CmdOrCtrl+S",
//         enabled: false
//       },
//       {
//         "label": "Save As Template",
//         "click": () => {
//           console.log("Save As Template");
//         },
//         enabled: false
//       },
//       {
//         "type": "separator"
//       },
//       {
//         "label" : "Workspace FIles",
//         "submenu": [
//           {
//             "label": "No Workspace Files",
//             "enabled": false
//           }
//         ]
//       },
//       {
//         "label": "Workspace Settings",
//         submenu: [
//           {
//             "label": "No Workspace Settings",
//             "enabled": false
//           },
        
//         ],
//         enabled: false
//       },
//       {
//         "type": "separator"
//       },
//       {
//         "label": "Workspace Templates",
//         submenu: [
//           {
//             label : "Workspace Templates",
//             submenu: [
//               {
//                 "label": "New Workspace From Template",
//                 submenu: [
//                   {
//                     "label": "Built-in blank workspace (default)",
//                     "click": () => {
//                       console.log("Built-in blank workspace (default)");
//                     }
//                   }
//                 ]
                  
//               }
//             ]
            
//           },
//           {
//             "type": "separator"
//           },
//           {
//             "label": "Mange Templates...",
//             "click": () => {
//               console.log("Mange Templates");
//             }

//           },
//           {
//             "label": "Show Templates in Finder",
//             "click": () => {
//               console.log("Show Templates in Finder");
//             }
//           }
//         ]
//       }
//       ]
//     },
//     {
//       "label": "Edit",
//       "submenu": [
//         {
//           "label": "Undo",
//           "click": () => {
//             console.log("Undo");
//           },
//           accelerator: "CmdOrCtrl+Z",
//           enabled: false
//         },
//         {
//           "label": "Redo",
//           "click": () => {
//             console.log("Redo");
//           },
//           accelerator: "CmdOrCtrl+Shift+Z",
//           enabled: false
//         },
//         {
//           "type": "separator"
//         },
//         {
//           "label": "Cut",
//           "click": () => {
//             console.log("Cut");
//           },
//           accelerator: "CmdOrCtrl+X",
//           enabled: false
//         },
//         {
//           "label": "Copy",
//           "click": () => {
//             console.log("Copy");
//           },
//           accelerator: "CmdOrCtrl+C",
//           enabled: false
//         },
//         {
//           "label": "Paste",
//           "click": () => {
//             console.log("Paste");
//           },
//           accelerator: "CmdOrCtrl+V",
//           enabled: false
//         },
//         {
//           "label": "Paste Cue Properties..",
//           "click": () => {
//             console.log("Paste Cue Properties");
//           },
//           accelerator: "CmdOrCtrl+Shift+V",
//           enabled: false
//         },
//         {
//           "label" : "Paste and Match Style",
//           "click": () => {
//             console.log("Paste and Match Style");
//           },
//           accelerator: "Option+Shift+CmdOrCtrl+V",
//           enabled: false
//         },
//         {
//           "label": "Delete",
//           "click": () => {
//             console.log("Delete");
//           },
//           accelerator: "CmdOrCtrl+Backspace",
//         },
//         {
//           "label": "Select All",
//           "click": () => {
//             console.log("Select All");
//           },
//           accelerator: "CmdOrCtrl+A",
//         },
        
//         {
//           "type": "separator"
//         },

//         {
//           "label": "Find",

//           submenu: [
//             {
//               "label": "Find",
//               "click": () => {
//                 console.log("Find");
//               },
//               accelerator: "CmdOrCtrl+F"
//             },
//             {
//               "label": "Find Next",
//               "click": () => {
//                 console.log("Find Next");
//               },
//               accelerator: "CmdOrCtrl+G"
//             },
//             {
//               "label": "Find Previous",
//               "click": () => {
//                 console.log("Find Previous");
//               },
//               accelerator: "Shift+CmdOrCtrl+G"
//             }
//           ]
//         },
//         {
//           "label" :"Format",
//           submenu: [
            
//                 {
//                   "label": "Fonts",
//                   submenu: [
//                     {
//                       "label": "Show Fonts",
//                       "click": () => {
//                         console.log("Show Fonts");
//                       },
//                       accelerator: "Option+Shift+CmdOrCtrl+T"
//                     },
//                     {
//                       "label": "Bold",
//                       "click": () => {
//                         console.log("Bold");
//                       },
//                       enabled: false
//                     },
//                     {
//                       "label": "Italic",
//                       "click": () => {
//                         console.log("Italic");
//                       }
//                     },
//                     {
//                       "label": "Underline",
//                       "click": () => {
//                         console.log("Underline");
//                       }
//                     },
//                     {
//                       "type": "separator"
//                     },
//                     {
//                       "label": "Bigger",
//                       "click": () => {
//                         console.log("Bigger");
//                       },
//                       accelerator: "CmdOrCtrl+Plus",
//                       enabled: false
//                     },
//                     {
//                       "label": "Smaller",
//                       "click": () => {
//                         console.log("Smaller");
//                       },
//                       accelerator: "CmdOrCtrl+-",
//                       enabled: false
//                     },
//                     {
//                       "type": "separator"
//                     },
//                     {
//                       "label" : "Kern",
//                       submenu: [
//                         {
//                           "label": "Use Default",
//                           "click": () => {
//                             console.log("Use Default");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Use None",
//                           "click": () => {
//                             console.log("Use None");
//                           }
//                         },
//                         {
//                           "label": "Tighten",
//                           "click": () => {
//                             console.log("Tighten");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Loosen",
//                           "click": () => {
//                             console.log("Loosen");
//                           },
//                           enabled: false
//                         }
//                       ]
//                     },
//                     {
//                       "label": "Ligatures",
//                       submenu: [
//                         {
//                           "label": "Use Default",
//                           "click": () => {
//                             console.log("Use Default");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Use All",
//                           "click": () => {
//                             console.log("Use All");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Use None",
//                           "click": () => {
//                             console.log("Use None");
//                           },
//                           enabled: false
//                         }
//                       ]
//                     },
//                     {
//                       "label": "Baseline",
//                       submenu: [
//                         {
//                           "label": "Use Default",
//                           "click": () => {
//                             console.log("Use Default");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label" : "Superscript",
//                           "click": () => {
//                             console.log("Superscript");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Subscript",
//                           "click": () => {
//                             console.log("Subscript");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Raise",
//                           "click": () => {
//                             console.log("Raise");
//                           },
//                           enabled: false
//                         },
//                         {
//                           "label": "Lower",
//                           "click": () => {
//                             console.log("Lower");
//                           },
//                           enabled: false
//                         }
//                       ]
//                     },
//                     {
//                       "type": "separator"
//                     },
//                     {
//                       "label" : "Show Colors",
//                       "click": () => {
//                         console.log("Show Colors");
//                       },
//                       accelerator: "Option+Shift+CmdOrCtrl+C"
//                     },
//                     {
//                       "label" :"Copy Style",
//                       "click": () => {
//                         console.log("Copy Style");
//                       },
//                       accelerator: "Option+CmdOrCtrl+C",
//                       enabled: false
//                     },
//                     {
//                       "label": "Paste Style",
//                       "click": () => {
//                         console.log("Paste Style");
//                       },
//                       accelerator: "Option+CmdOrCtrl+V",
//                       enabled: false
//                     }
//                   ]
//                 },
//                 {
//                   "label" : "Text",
//                   submenu: [
//                     {
//                       "label": "Align Left",
//                       "click": () => {
//                         console.log("Align Left");
//                       },
//                       enabled: false
//                     },
//                     {
//                       "label": "Center",
//                       "click": () => {
//                         console.log("Center");
//                       },
//                       enabled: false
//                     },
//                     {
//                       "label": "Align Right",
//                       "click": () => {
//                         console.log("Align Right");
//                       },
//                       enabled: false
//                     }
//                   ]
//                 }
                
//               ]
            
          
//         },
//         {
//           label: "Spelling and Grammar",
//           submenu: [

//           {
//             label: "Show Spelling and Grammar",
//             click: () => {
//               console.log("Show Spelling and Grammar");
//             },
//             accelerator: "CmdOrCtrl+Shift+:",
//           },
//           {
//             label: "Check Document Now",
//             click: () => {
//               console.log("Check Document Now");
//             },
//             accelerator: "CmdOrCtrl+Shift+;",
//             enabled: false
//           },
//           {
//             "type": "separator"
//           },
//           {
//             label: "Check Spelling While Typing",
//             click: () => {
//               console.log("Check Spelling While Typing");
//             },
//             enabled: false
//           },
//           {
//             label: "Check Grammar With Spelling",
//             click: () => {
//               console.log("Check Grammar With Spelling");
//             },
//             enabled: false
//           },
//           {
//             label: "Correct Spelling Automatically",
//             click: () => {
//               console.log("Correct Spelling Automatically");
//             },
//             enabled: false
//           }
//         ]
//         },
//         {
//           label: "Speech",
//           submenu: [
//             {
//               label: "Start Speaking",
//               click: () => {
//                 console.log("Start Speaking");
//               },
//               enabled: false
//             },
//             {
//               label: "Stop Speaking",
//               click: () => {
//                 console.log("Stop Speaking");
//               },
//               enabled: false
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "label": "Cues",
//       submenu: [
//         {
//           label: "Group",
//           click: () => {
//             console.log("Group");
//           },
//           accelerator: "CmdOrCtrl+0"
//         },
//         {
//           label: "Audio",
//           click: () => {
//             console.log("Audio");
//           },
//           accelerator: "CmdOrCtrl+1"
//         },
//         {
//           label: "Mic",
//           click: () => {
//             console.log("Mic");
//           },
//           accelerator: "CmdOrCtrl+2"
//         },
//         {
//           label: "Video",
//           click: () => {
//             console.log("Video");
//           },
//           accelerator: "CmdOrCtrl+3"
//         },
//         {
//           label: "Camera",
//           click: () => {
//             console.log("Camera");
//           },
//           accelerator: "CmdOrCtrl+4"
//         },
//         {
//           label: "Text",
//           click: () => {
//             console.log("Text");
//           },
//           accelerator: "CmdOrCtrl+5"
//         },
//         {
//           label: "Light",
//           click: () => {
//             console.log("Light");
//           },
//           accelerator: "CmdOrCtrl+6"
//         },
//         {
//           label: "Fade",
//           click: () => {
//             console.log("Fade");
//           },
//           accelerator: "CmdOrCtrl+7"
//         },
//         {
//           label: "Network",
//           click: () => {
//             console.log("Network");
//           },
//           accelerator: "CmdOrCtrl+8"
//         },
//         {
//           label: "MIDI",
//           click: () => {
//             console.log("MIDI");
//           },
//           accelerator: "CmdOrCtrl+9"
//         },
//         {
//           label: "MIDI File",
//           click: () => {
//             console.log("MIDI File");
//           }
//         },
//         {
//           label: "Timecode",
//           click: () => {
//             console.log("Timecode");
//           }
//         },
//         {
//           label: "Start",
//           click: () => {
//             console.log("Start");
//           }
//         },
//         {
//           label: "Stop",
//           click: () => {
//             console.log("Stop");
//           }
//         },
//         {
//           label: "Pause",
//           click: () => {
//             console.log("Pause");
//           }
//         },
//         {
//           label: "Load",
//           click: () => {
//             console.log("Load");
//           }
//         },
//         {
//           label: "Reset",
//           click: () => {
//             console.log("Reset");
//           }
//         },
//         {
//           label: "Devamp",
//           click: () => {
//             console.log("Devamp");
//           }
//         },
//         {
//           label: "GoTo",
//           click: () => {
//             console.log("GoTo");
//           }
//         },
//         {
//           label: "Target",
//           click: () => {
//             console.log("Target");
//           }
//         },
//         {
//           label: "Arm",
//           click: () => {
//             console.log("Arm");
//           }
//         },
//         {
//           label: "Disarm",
//           click: () => {
//             console.log("Disarm");
//           }
//         },
//         {
//           label: "Wait",
//           click: () => {
//             console.log("Wait");
//           }
//         },
//         {
//           label: "Memo",
//           click: () => {
//             console.log("Memo");
//           }
//         },
//         {
//           label: "Script",
//           click: () => {
//             console.log("Script");
//           }
//         }
//       ]
//     },
//     {
//       label: "Tools",
//       submenu: [
//         {
//           label: "Load to time...",
//           click: () => {
//             console.log("Load to time...");
//           },
//           accelerator: "CmdOrCtrl+T",
//           enabled: false
//         },
//         {
//           label: "Renumber related cues...",
//           click: () => {
//             console.log("Renumber related cues...");
//           },
//           accelerator: "CmdOrCtrl+R",
//           enabled: false
//         },
//         {
//           label: "Delete numbers of selected cues",
//           click: () => {
//             console.log("Delete numbers of selected cues");
//           },
//           accelerator: "CmdOrCtrl+D",
//           enabled: false
//         },
//         {
//           label: "Jump to selected cues' targets",
//           click: () => {
//             console.log("Jump to selected cues' targets");
//           },
//           accelerator: "Option+CmdOrCtrl+J",
//           enabled: false

//         },
//         {
//           label: "Record cue sequence...",
//           click: () => {
//             console.log("Record cue sequence...");
//           },
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "Turn on always audition",
//           click: () => {
//             console.log("Turn on always audition");
//           },
//           accelerator: "Shift+CmdOrCtrl+A",
//         },
//         {
//           label: "Turn on live fade preview",
//           click: () => {
//             console.log("Turn on live fade preview");
//           },
//           accelerator: "Shift+CmdOrCtrl+P",
//         },
//         {
//           label: "Turn on highlight for related cues",
//           click: () => {
//             console.log("Turn on highlight for related cues");
//           },
//         },
//       {
//         "type": "separator"
//       },
//       {
//         label: "Black out desktop backgrounds",
//         click: () => {
//           console.log("Black out desktop backgrounds");
//         }
//       },
//       {
//         label: "Restore saved desktop backgrounds",
//         click: () => {
//           console.log("Restore saved desktop backgrounds");
//         }
//       }
//       ]
//     },
//     {
//       label: "View",
//       submenu: [
//         {
//           label: "Enter Full Screen",
//           click: () => {
//             console.log("Enter Full Screen");
//           },
//           accelerator: "Shift+CmdOrCtrl+F",
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label:"Inspector",
//           click: () => {
//             console.log("Inspector");
//           },
//           accelerator: "CmdOrCtrl+I",
//         },
//         {
//           label: "Inspector for selected cue",
//           click: () => {
//             console.log("Inspector for selected cue");
//           },
//           accelerator: "Shift+CmdOrCtrl+I",
//           enabled: false
//         },
//         {
//           label: "GO Button / Standby Display / Toolbar",
//           click: () => {
//             console.log("GO Button / Standby Display / Toolbar");
//           },
//         },
//         {
//           label: "Toolbox",
//           click: () => {
//             console.log("Toolbox");
//           },
//           accelerator: "CmdOrCtrl+K",
//         },
//         {
//           label: "Lists / Carts & Active Cues",
//           click: () => {
//             console.log("Lists / Carts & Active Cues");
//           },
//           accelerator: "CmdOrCtrl+L",
//         },
//         {
//           label: "Toggle between Lists / Carts & Active Cues",
//           click: () => {
//             console.log("Toggle between Lists / Carts & Active Cues");
//           },
//           accelerator: "Shift+CmdOrCtrl+L",
//         },
//         {
//           label: "Warnings",
//           click: () => {
//             console.log("Warnings");
//           },
//           accelerator: "CmdOrCtrl+B",
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "Select cue...",
//           click: () => {
//             console.log("Select cue...");
//           },
//           accelerator: "CmdOrCtrl+J",
//         },
//         {
//           label: "Select next",
//           click: () => {
//             console.log("Select next");
//           },
//           accelerator: "CmdOrCtrl+Down",
//         },
//         {
//           label: "Select previous",
//           click: () => {
//             console.log("Select previous");
//           },
//           accelerator: "CmdOrCtrl+Up",
//         },
//         {
//           label: "Select next tab",
//           click: () => {
//             console.log("Select next tab");
//           },
//           accelerator: "CmdOrCtrl+Right",
//         },
//         {
//           label: "Select previous tab",
//           click: () => {
//             console.log("Select previous tab");
//           },
//           accelerator: "CmdOrCtrl+Left",
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "Move playhead to cue...",
//           click: () => {
//             console.log("Move playhead to cue...");
//           },
//           accelerator: "Shift+CmdOrCtrl+J",
//         },
//         {
//           label: "Move playhead to next cue",
//           click: () => {
//             console.log("Move playhead to next cue");
//           },
//           accelerator: "Shift+CmdOrCtrl+Down",
//         },
//         {
//           label: "Move playhead to previous cue",
//           click: () => {
//             console.log("Move playhead to previous cue");
//           },
//           accelerator: "Shift+CmdOrCtrl+Up",
//         },
//         {
//           label: "Move playhead to next sequence",
//           click: () => {
//             console.log("Move playhead to next sequence");
//           },
//           accelerator: "=",
//         },
//         {
//           label: "Move playhead to previous sequence",
//           click: () => {
//             console.log("Move playhead to previous sequence");
//           },
//           accelerator: "-",
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "Enter Edit Mode",
//           click: () => {
//             console.log("Enter Edit Mode");
//           },
//           accelerator: "Shift+CmdOrCtrl+[",
//           enabled: false
//         },
//         {
//           label: "Enter Show Mode",
//           click: () => {
//             console.log("Enter Show Mode");
//           },
//           accelerator: "Shift+CmdOrCtrl+]",
//         }
//       ]
//     },
//     {
//       label: "Window",
//       submenu: [
//         {
//           label: "Minimize",
//           click: () => {
//             console.log("Minimize");
//           },
//           accelerator: "CmdOrCtrl+M",
//         },
//         {
//           label: "Zoom",
//           click: () => {
//             console.log("Zoom");
//           },
//         },
//         {
//           label: "Tile Window to Left of Screen",
//           click: () => {
//             console.log("Tile Window to Left of Screen");
//           },
//         },
//         {
//           label: "Tile Window to Right of Screen",
//           click: () => {
//             console.log("Tile Window to Right of Screen");
//           },
//         },
//         {
//           label: "Replace Tiled Window",
//           click: () => {
//             console.log("Replace Tiled Window");
//           },
//           enabled: false
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "Remove Window from Set",
//           click: () => {
//             console.log("Remove Window from Set");
//           },
//           enabled: false

//         },
//         {
//           type: "separator"
//         },
//         {
//           label: "Launcher Window",
//           click: () => {
//             console.log("Launcher Window");
//           },
//         },
//         { type: "separator" },
//         {
//           label: "Workspace Status",
//           click: () => {
//             console.log("Workspace Status");
//           },
//           accelerator: "Shift+CmdOrCtrl+W",
//         },
//         { type: "separator" },
//         {
//           label: "Override Controls",
//           click: () => {
//             console.log("Override Controls");
//           },
//           accelerator: "Shift+CmdOrCtrl+O",
//         },
//         {
//           label: "Open All Audiiton Windows",
//           click: () => {
//             console.log("Open All Audiiton Windows");
//           },
//         },
//         { type: "separator" },
//         {
//           label: "Light Dashboard",
//           click: () => {
//             console.log("Light Dashboard");
//           },
//           accelerator: "Shift+CmdOrCtrl+D",
//         },
//         {
//           label: "Light Patch",
//           click: () => {
//             console.log("Light Patch");
//           },
//         },
//         {
//           label: "Light Library",
//           click: () => {
//             console.log("Light Library");
//           },
//         },
//         {
//           label: "DMX Status",
//           click: () => {
//             console.log("DMX Status");
//           },
//         },
//         {
//           type: "separator"
//         },
//         {
//           label: "Timecode Status",
//           click: () => {
//             console.log("Timecode Status");
//           },
//           accelerator: "Shift+CmdOrCtrl+E",
//         },
//         {
//           type: "separator"

//         },
//         {
//           label: "Bring All to Front",
//           click: () => {
//             console.log("Bring All to Front");
//           },
//         },
//         {
//           "type": "separator"
//         },
//         {
//           label: "No Workspace Selected",
//           enabled: false
//         }
//       ]
//     },
//     {
//       label: "Help",
//       role: "search",
//       submenu: [
//         {
//           label: "ZLab Documentation",
//           click: () => {
//             console.log("ZLab Documentation");
//           }
//         },
//         {
//           label: "Contact Support...",
//           click: () => {
//             console.log("Contact Support...");
//           }
//         },
//         {
//           label: "Check for Updates...",
//           click: () => {
//             console.log("Check for Updates...");
//           }
//         }
//       ]
//     }





//   ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);






        


function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});