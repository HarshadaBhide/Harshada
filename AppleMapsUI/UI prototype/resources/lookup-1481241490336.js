(function(window, undefined) {
  var dictionary = {
    "8166f3b2-4ccf-4db6-aa66-216e0d1ca9df": "MenuHome",
    "70e45534-9b94-4397-810b-a427e3b8e4fd": "SourceDestinationScreen",
    "0a701c92-ecb1-4e07-b518-c4e0b65728eb": "EndRouteScreen",
    "ca9d7ae2-5a4d-447f-8621-b6697671f533": "FavouritesScreen",
    "1a6cfcd5-890f-4f9a-8f5a-439ae12b5dc7": "RouteScreen",
    "6db7455e-7022-4acd-955d-2635296ba6e0": "SetLocationScreen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);