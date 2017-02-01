jQuery("#simulation")
  .on("click", ".s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "A"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "B"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "C"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Home"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Work"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca9d7ae2-5a4d-447f-8621-b6697671f533"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "A"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "B"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "C"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Home"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Work"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca9d7ae2-5a4d-447f-8621-b6697671f533"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "A"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "B"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "MapType",
                    "value": "C"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Home"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "LocationLabel",
                    "value": "Work"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6db7455e-7022-4acd-955d-2635296ba6e0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca9d7ae2-5a4d-447f-8621-b6697671f533"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70e45534-9b94-4397-810b-a427e3b8e4fd"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Side-Menu",
                      "top": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 300
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_5",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"A" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"B" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"C" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"A" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"B" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"C" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"A" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"B" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button1_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "MapType") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "MapType"
                },"C" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#4A86E8",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#4A86E8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "MapType"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2 span": {
                      "attributes": {
                        "color": "#0000FF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  },{
                    "#s-8166f3b2-4ccf-4db6-aa66-216e0d1ca9df #s-Button1_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });