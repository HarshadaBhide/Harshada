jQuery("#simulation")
  .on("click", ".s-0a701c92-ecb1-4e07-b518-c4e0b65728eb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8166f3b2-4ccf-4db6-aa66-216e0d1ca9df"
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "DestImage",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "DestImage"
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
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "DestImage",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "DestImage"
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
  .on("variablechange.jim", ".s-0a701c92-ecb1-4e07-b518-c4e0b65728eb .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "DestImage") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "DestImage"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Image_3",
                    "value": "./images/0a399cac-d69b-4805-ba82-2232967266a4.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "DestImage") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "DestImage"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Image_3",
                    "value": "./images/a9d41106-8d1e-4b9e-a585-acf080797351.jpg"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "DestImage"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Image_3",
                    "value": "./images/ede70041-e542-4717-a919-90aa3e13a5f3.png"
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "DestImage") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "DestImage"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_13"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "DestImage"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_13"
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
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "DestImage") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "DestImage"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_14"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "DestImage"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_14"
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