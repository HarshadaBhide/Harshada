jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "bulb2"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "bulb3"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "bulb1"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/1578a67a-a98a-44e8-8abc-9d1b03fc1a30.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "all",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/a36b0428-ec23-4a73-8274-66ab913f7b37.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "all",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "bulb5"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "bulb4"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/ed250109-0d19-442c-be01-074f746a969f.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "on"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_4",
                        "property": "jimGetValue"
                      },"1" ]
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_4",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Text_4",
                        "property": "jimGetValue"
                      },"1" ]
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
  .on("variablechange.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"off" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb2",
                    "value": "off"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"off" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb3",
                    "value": "off"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"off" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb1",
                    "value": "off"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "bulb1"
                        },"on" ]
                      },{
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "bulb2"
                        },"on" ]
                      } ]
                    },{
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "bulb3"
                      },"on" ]
                    } ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "bulb4"
                    },"on" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "bulb5"
                  },"on" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/4eb30a76-6028-4b18-a655-5a74c8a8bbf1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "all",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "bulb1"
                        },"off" ]
                      },{
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "bulb2"
                        },"off" ]
                      } ]
                    },{
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "bulb3"
                      },"off" ]
                    } ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "bulb4"
                    },"off" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "bulb5"
                  },"off" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/03623a9c-1714-4056-b2a2-0054b163e265.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "all",
                    "value": "off"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "all",
                    "value": "half"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/dc552a39-3fa6-448e-9bd3-a20c3a9db065.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"off" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb5",
                    "value": "off"
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"on" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/cde2c6f8-d20b-4b34-ae76-b824fa220df6.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "on"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "all") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "all"
                },"off" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-image#moz": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), -o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg'), linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "url('./images/39f0a795-ecc3-4af4-b216-6dab55a87aa1.jpg') no-repeat top left scroll, linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "bulb4",
                    "value": "off"
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
  });