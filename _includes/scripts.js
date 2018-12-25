 document.addEventListener("DOMContentLoaded", function (t) {
    /* BEGIN SCRIPTS */

    var s, e = "https://storage.googleapis.com/gpes-static/plasticos/plasticos-360.svg",
        o = "https://storage.googleapis.com/gpes-static/plasticos/plasticos-510.svg",
        a = "https://storage.googleapis.com/gpes-static/plasticos/plasticos-730.svg",
        i = "https://storage.googleapis.com/gpes-static/plasticos/plasticos-1024.svg",
        g = document.getElementById("infoContainer"),
        p = g.offsetWidth ? g.offsetWidth : 280,
        c = p;
    p < 435 ? s = e : p >= 435 && p < 620 ? s = o : p >= 620 && p < 878 ? s = a : p >= 878 && (s = i);
    var l = document.createElement("object");
    l.setAttribute("type", "image/svg+xml"), l.setAttribute("width", c), l.setAttribute("height", "auto"), l.setAttribute("data", s), g.appendChild(l)

    /* END SCRIPTS */
});
