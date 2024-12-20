!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).getSVGColors = r());
})(this, function () {
  "use strict";
  var r = /<!--([\s\S]*?)-->/g,
    t = "http://www.w3.org/2000/svg",
    n =
      /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/i,
    l = [
      "black",
      "silver",
      "gray",
      "white",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "green",
      "greenyellow",
      "grey",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen",
    ];
  function i(e, r, t) {
    return t.indexOf(e) === r;
  }
  function o(e) {
    for (var r = -1, t = e ? e.length : 0, n = 0, l = []; ++r < t; ) {
      var i = e[r];
      i && (l[n++] = i);
    }
    return l;
  }
  function a(e) {
    return e.toLowerCase();
  }
  function u(e) {
    return (
      !!e && "none" !== e && (-1 !== l.indexOf(e.toLowerCase()) || e.match(n))
    );
  }
  function s(e) {
    var r = new DOMParser();
    return (
      -1 === e.indexOf("xmlns") &&
        -1 !== e.indexOf("<svg") &&
        e.replace("<svg", '<svg xmlns="' + t + '"'),
      r.parseFromString(e, "image/svg+xml")
    );
  }
  function d(e, r) {
    return (t = r.querySelectorAll(e)), Array.prototype.slice.call(t);
    var t;
  }
  function g(e) {
    return e instanceof SVGElement
      ? Promise.resolve(e)
      : /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i.test(
          e.replace(r, "")
        )
      ? Promise.resolve(s(e))
      : "string" == typeof e
      ? fetch(e)
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return s(e);
          })
      : void 0;
  }
  function c(e, r) {
    return e
      .replace(/(\s|\n|\R|\r)/g, "")
      .split(/(\{|\}|\;)/)
      .map(function (e) {
        return e.trim();
      })
      .map(a)
      .filter(function (e) {
        return e && e.length;
      })
      .filter(function (e) {
        return 0 === e.indexOf(r);
      })
      .map(function (e) {
        return e
          .split(":")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== r;
          });
      })
      .reduce(function (e, r) {
        return e.concat(r);
      }, [])
      .filter(function (e) {
        return -1 !== l.indexOf(e) || n.test(e);
      });
  }
  return function (e, r) {
    return g(e).then(function (e) {
      var t = d("[fill]", e).map(function (e) {
          return e.getAttribute("fill");
        }),
        n = d("[stroke]", e).map(function (e) {
          return e.getAttribute("stroke");
        }),
        l = d("[stop-color]", e).map(function (e) {
          return e.getAttribute("stop-color");
        });
      return (
        d("[style]", e).forEach(function (e) {
          t.push(e.style.fill),
            n.push(e.style.stroke),
            l.push(e.style.stopColor);
        }),
        d("style", e).forEach(function (e) {
          var r = e.textContent;
          c(r, "fill").forEach(function (e) {
            return t.push(e);
          }),
            c(r, "stroke").forEach(function (e) {
              return n.push(e);
            }),
            c(r, "stop-color").forEach(function (e) {
              return l.push(e);
            });
        }),
        r && r.flat
          ? o(t.concat(n).concat(l).filter(u).map(a).filter(i))
          : {
              fills: o(t.filter(u).map(a).filter(i)),
              strokes: o(n.filter(u).map(a).filter(i)),
              stops: o(l.filter(u).map(a).filter(i)),
            }
      );
    });
  };
});
