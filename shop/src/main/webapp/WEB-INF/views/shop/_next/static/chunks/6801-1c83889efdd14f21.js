(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6801], {
        81506: function(t) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        69100: function(t, e, r) {
            var n = r(99489),
                i = r(4043);

            function o(e, r, a) {
                return i() ? t.exports = o = Reflect.construct : t.exports = o = function(t, e, r) {
                    var i = [null];
                    i.push.apply(i, e);
                    var o = new(Function.bind.apply(t, i));
                    return r && n(o, r.prototype), o
                }, o.apply(null, arguments)
            }
            t.exports = o
        },
        67154: function(t) {
            function e() {
                return t.exports = e = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, e.apply(this, arguments)
            }
            t.exports = e
        },
        29754: function(t) {
            function e(r) {
                return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, e(r)
            }
            t.exports = e
        },
        2205: function(t, e, r) {
            var n = r(99489);
            t.exports = function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && n(t, e)
            }
        },
        85354: function(t) {
            t.exports = function(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
        },
        4043: function(t) {
            t.exports = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
        },
        78585: function(t, e, r) {
            var n = r(50008),
                i = r(81506);
            t.exports = function(t, e) {
                return !e || "object" !== n(e) && "function" !== typeof e ? i(t) : e
            }
        },
        99489: function(t) {
            function e(r, n) {
                return t.exports = e = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, e(r, n)
            }
            t.exports = e
        },
        50008: function(t) {
            function e(r) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? t.exports = e = function(t) {
                    return typeof t
                } : t.exports = e = function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, e(r)
            }
            t.exports = e
        },
        40185: function(t, e) {
            "use strict";
            var r = function(t) {
                return t instanceof Uint8Array ? t : new Uint8Array(t && t.buffer || t, t && t.byteOffset || 0, t && t.byteLength || 0)
            };
            e.lx = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = e.reduce((function(t, e) {
                        return t += e && (e.byteLength || e.length) || 0
                    }), 0),
                    o = new Uint8Array(i),
                    a = 0;
                return e.forEach((function(t) {
                    t = r(t), o.set(t, a), a += t.byteLength
                })), o
            }, e.qX = function(t, e) {
                void 0 === e && (e = !1);
                return "string" !== typeof t && t && "function" === typeof t.toString && (t = t.toString()), "string" !== typeof t ? [] : (e || (t = unescape(encodeURIComponent(t))), t.split("").map((function(t) {
                    return 255 & t.charCodeAt(0)
                })))
            }, e.Ki = r
        },
        78044: function(t, e, r) {
            "use strict";
            var n, i = (n = r(58908)) && "object" === typeof n && "default" in n ? n.default : n,
                o = {
                    mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
                    webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
                    ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
                    video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
                    audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3)/,
                    text: /^(stpp.ttml.im1t)/,
                    muxerVideo: /^(avc0?1)/,
                    muxerAudio: /^(mp4a)/,
                    muxerText: /a^/
                },
                a = ["video", "audio", "text"],
                s = ["Video", "Audio", "Text"],
                u = function(t) {
                    return t ? t.replace(/avc1\.(\d+)\.(\d+)/i, (function(t, e, r) {
                        return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(r).toString(16)).slice(-2)
                    })) : t
                },
                c = function(t) {
                    return t.map(u)
                },
                f = function(t) {
                    void 0 === t && (t = "");
                    var e = t.split(","),
                        r = {},
                        n = [];
                    return e.forEach((function(t) {
                        var e;
                        t = t.trim(), a.forEach((function(n) {
                            var i = o[n].exec(t.toLowerCase());
                            if (i && !(i.length <= 1)) {
                                e = n;
                                var a = t.substring(0, i[1].length),
                                    s = t.replace(a, "");
                                r[n] = {
                                    type: a,
                                    details: s
                                }
                            }
                        })), e || n.push(t)
                    })), n.length && (r.unknown = n), r
                },
                l = function(t) {
                    return void 0 === t && (t = ""), o.audio.test(t.trim().toLowerCase())
                },
                p = function(t) {
                    return void 0 === t && (t = ""), o.text.test(t.trim().toLowerCase())
                },
                h = function(t) {
                    if (t && "string" === typeof t) {
                        var e = t.toLowerCase().split(",").map((function(t) {
                                return u(t.trim())
                            })),
                            r = "video";
                        1 === e.length && l(e[0]) ? r = "audio" : 1 === e.length && p(e[0]) && (r = "application");
                        var n = "mp4";
                        return e.every((function(t) {
                            return o.mp4.test(t)
                        })) ? n = "mp4" : e.every((function(t) {
                            return o.webm.test(t)
                        })) ? n = "webm" : e.every((function(t) {
                            return o.ogg.test(t)
                        })) && (n = "ogg"), r + "/" + n + ';codecs="' + t + '"'
                    }
                };
            e.lA = "mp4a.40.2", e.xz = "avc1.4d400d", e.p7 = function(t) {
                return void 0 === t && (t = ""), i.MediaSource && i.MediaSource.isTypeSupported && i.MediaSource.isTypeSupported(h(t)) || !1
            }, e.Jg = function(t, e) {
                if (!t.mediaGroups.AUDIO || !e) return null;
                var r = t.mediaGroups.AUDIO[e];
                if (!r) return null;
                for (var n in r) {
                    var i = r[n];
                    if (i.default && i.playlists) return f(i.playlists[0].attributes.CODECS)
                }
                return null
            }, e._5 = h, e.KL = l, e.tf = function(t) {
                return void 0 === t && (t = ""), o.video.test(t.trim().toLowerCase())
            }, e.Hi = function(t) {
                return void 0 === t && (t = ""), t.toLowerCase().split(",").every((function(t) {
                    t = t.trim();
                    for (var e = 0; e < s.length; e++) {
                        if (o["muxer" + s[e]].test(t)) return !0
                    }
                    return !1
                }))
            }, e.kS = f, e.ws = u
        },
        49352: function(t, e) {
            "use strict";
            var r = function(t) {
                    return t instanceof Uint8Array ? t : new Uint8Array(t && t.buffer || t, t && t.byteOffset || 0, t && t.byteLength || 0)
                },
                n = function(t) {
                    if (!t) return "";
                    t = Array.prototype.slice.call(t);
                    var e = String.fromCharCode.apply(null, r(t));
                    try {
                        return decodeURIComponent(escape(e))
                    } catch (n) {}
                    return e
                },
                i = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = (t = r(t))[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                    return (16 & t[e + 5]) >> 4 ? n + 20 : n + 10
                },
                o = function t(e, o) {
                    return void 0 === o && (o = 0), (e = r(e)).length - o < 10 || "ID3" !== n(e.subarray(o, o + 3)) ? o : t(e, o += i(e, o))
                },
                a = {
                    aac: function(t) {
                        var e = o(t);
                        return t.length >= e + 2 && 255 === (255 & t[e]) && 224 === (224 & t[e + 1]) && 16 === (22 & t[e + 1])
                    },
                    mp3: function(t) {
                        var e = o(t);
                        return t.length >= e + 2 && 255 === (255 & t[e]) && 224 === (224 & t[e + 1]) && 2 === (6 & t[e + 1])
                    },
                    webm: function(t) {
                        return t.length >= 4 && 26 === (255 & t[0]) && 69 === (255 & t[1]) && 223 === (255 & t[2]) && 163 === (255 & t[3])
                    },
                    mp4: function(t) {
                        return t.length >= 8 && /^(f|s)typ$/.test(n(t.subarray(4, 8))) && !/^ftyp3g$/.test(n(t.subarray(4, 10)))
                    },
                    "3gp": function(t) {
                        return t.length >= 10 && /^ftyp3g$/.test(n(t.subarray(4, 10)))
                    },
                    ts: function(t) {
                        if (t.length < 189 && t.length >= 1) return 71 === t[0];
                        for (var e = 0; e + 188 < t.length && e < 188;) {
                            if (71 === t[e] && 71 === t[e + 188]) return !0;
                            e += 1
                        }
                        return !1
                    },
                    flac: function(t) {
                        return t.length >= 4 && /^fLaC$/.test(n(t.subarray(0, 4)))
                    },
                    ogg: function(t) {
                        return t.length >= 4 && /^OggS$/.test(n(t.subarray(0, 4)))
                    }
                },
                s = Object.keys(a).filter((function(t) {
                    return "ts" !== t
                })).concat("ts");
            s.forEach((function(t) {
                var e = a[t];
                a[t] = function(t) {
                    return e(r(t))
                }
            }));
            e.Xm = function(t) {
                t = r(t);
                for (var e = 0; e < s.length; e++) {
                    var n = s[e];
                    if (a[n](t)) return n
                }
                return ""
            }, e.cc = o, e.cz = function(t) {
                t = r(t);
                for (var e = 0; e < t.length;) {
                    var i = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
                    if ("moof" === n(t.subarray(e + 4, e + 8))) return !0;
                    0 === i || i + e > t.length ? e = t.length : e += i
                }
                return !1
            }
        },
        47927: function(t, e, r) {
            "use strict";
            var n = r(21876).Buffer;
            var i, o = (i = r(58908)) && "object" === typeof i && "default" in i ? i.default : i;
            t.exports = function(t) {
                for (var e, r = (e = t, o.atob ? o.atob(e) : n.from(e, "base64").toString("binary")), i = new Uint8Array(r.length), a = 0; a < r.length; a++) i[a] = r.charCodeAt(a);
                return i
            }
        },
        74810: function(t, e) {
            "use strict";
            var r = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,
                n = /^application\/dash\+xml/i;
            e.t = function(t) {
                return r.test(t) ? "hls" : n.test(t) ? "dash" : "application/vnd.videojs.vhs+json" === t ? "vhs-json" : null
            }
        },
        49972: function(t, e, r) {
            "use strict";

            function n(t) {
                return t && "object" === typeof t && "default" in t ? t.default : t
            }
            var i = n(r(49945)),
                o = n(r(58908));
            t.exports = function(t, e) {
                return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = i.buildAbsoluteURL(o.location && o.location.href || "", t)), i.buildAbsoluteURL(t, e))
            }
        },
        17388: function(t) {
            "use strict";
            var e = function() {
                function t() {
                    this.listeners = {}
                }
                var e = t.prototype;
                return e.on = function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                }, e.off = function(t, e) {
                    if (!this.listeners[t]) return !1;
                    var r = this.listeners[t].indexOf(e);
                    return this.listeners[t] = this.listeners[t].slice(0), this.listeners[t].splice(r, 1), r > -1
                }, e.trigger = function(t) {
                    var e = this.listeners[t];
                    if (e)
                        if (2 === arguments.length)
                            for (var r = e.length, n = 0; n < r; ++n) e[n].call(this, arguments[1]);
                        else
                            for (var i = Array.prototype.slice.call(arguments, 1), o = e.length, a = 0; a < o; ++a) e[a].apply(this, i)
                }, e.dispose = function() {
                    this.listeners = {}
                }, e.pipe = function(t) {
                    this.on("data", (function(e) {
                        t.push(e)
                    }))
                }, t
            }();
            t.exports = e
        },
        23316: function(t, e, r) {
            "use strict";
            var n = r(58908),
                i = r(67154),
                o = r(27376);

            function a(t, e, r) {
                var n = t;
                return o(e) ? (r = e, "string" === typeof t && (n = {
                    uri: t
                })) : n = i({}, e, {
                    uri: t
                }), n.callback = r, n
            }

            function s(t, e, r) {
                return u(e = a(t, e, r))
            }

            function u(t) {
                if ("undefined" === typeof t.callback) throw new Error("callback argument missing");
                var e = !1,
                    r = function(r, n, i) {
                        e || (e = !0, t.callback(r, n, i))
                    };

                function n() {
                    var t = void 0;
                    if (t = c.response ? c.response : c.responseText || function(t) {
                            try {
                                if ("document" === t.responseType) return t.responseXML;
                                var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                                if ("" === t.responseType && !e) return t.responseXML
                            } catch (r) {}
                            return null
                        }(c), m) try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    return t
                }

                function i(t) {
                    return clearTimeout(f), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, r(t, y)
                }

                function o() {
                    if (!u) {
                        var e;
                        clearTimeout(f), e = t.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
                        var i = y,
                            o = null;
                        return 0 !== e ? (i = {
                            body: n(),
                            statusCode: e,
                            method: p,
                            headers: {},
                            url: l,
                            rawRequest: c
                        }, c.getAllResponseHeaders && (i.headers = function(t) {
                            var e = {};
                            return t ? (t.trim().split("\n").forEach((function(t) {
                                var r = t.indexOf(":"),
                                    n = t.slice(0, r).trim().toLowerCase(),
                                    i = t.slice(r + 1).trim();
                                "undefined" === typeof e[n] ? e[n] = i : Array.isArray(e[n]) ? e[n].push(i) : e[n] = [e[n], i]
                            })), e) : e
                        }(c.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), r(o, i, i.body)
                    }
                }
                var a, u, c = t.xhr || null;
                c || (c = t.cors || t.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
                var f, l = c.url = t.uri || t.url,
                    p = c.method = t.method || "GET",
                    h = t.body || t.data,
                    d = c.headers = t.headers || {},
                    g = !!t.sync,
                    m = !1,
                    y = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: p,
                        url: l,
                        rawRequest: c
                    };
                if ("json" in t && !1 !== t.json && (m = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== p && "HEAD" !== p && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), h = JSON.stringify(!0 === t.json ? h : t.json))), c.onreadystatechange = function() {
                        4 === c.readyState && setTimeout(o, 0)
                    }, c.onload = o, c.onerror = i, c.onprogress = function() {}, c.onabort = function() {
                        u = !0
                    }, c.ontimeout = i, c.open(p, l, !g, t.username, t.password), g || (c.withCredentials = !!t.withCredentials), !g && t.timeout > 0 && (f = setTimeout((function() {
                        if (!u) {
                            u = !0, c.abort("timeout");
                            var t = new Error("XMLHttpRequest timeout");
                            t.code = "ETIMEDOUT", i(t)
                        }
                    }), t.timeout)), c.setRequestHeader)
                    for (a in d) d.hasOwnProperty(a) && c.setRequestHeader(a, d[a]);
                else if (t.headers && ! function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) return !1;
                        return !0
                    }(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (c.responseType = t.responseType), "beforeSend" in t && "function" === typeof t.beforeSend && t.beforeSend(c), c.send(h || null), c
            }
            t.exports = s, t.exports.default = s, s.XMLHttpRequest = n.XMLHttpRequest || function() {}, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : n.XDomainRequest,
                function(t, e) {
                    for (var r = 0; r < t.length; r++) e(t[r])
                }(["get", "put", "post", "patch", "head", "delete"], (function(t) {
                    s["delete" === t ? "del" : t] = function(e, r, n) {
                        return (r = a(e, r, n)).method = t.toUpperCase(), u(r)
                    }
                }))
        },
        89144: function(t, e, r) {
            var n, i = "undefined" !== typeof r.g ? r.g : "undefined" !== typeof window ? window : {},
                o = r(25893);
            "undefined" !== typeof document ? n = document : (n = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = n
        },
        58908: function(t, e, r) {
            var n;
            n = "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : {}, t.exports = n
        },
        27376: function(t) {
            t.exports = function(t) {
                if (!t) return !1;
                var r = e.call(t);
                return "[object Function]" === r || "function" === typeof t && "[object RegExp]" !== r || "undefined" !== typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            };
            var e = Object.prototype.toString
        },
        27537: function(t, e) {
            function r(t) {
                if (t && "object" === typeof t) {
                    var e = t.which || t.keyCode || t.charCode;
                    e && (t = e)
                }
                if ("number" === typeof t) return a[t];
                var r, o = String(t);
                return (r = n[o.toLowerCase()]) ? r : (r = i[o.toLowerCase()]) || (1 === o.length ? o.charCodeAt(0) : void 0)
            }
            r.isEventKey = function(t, e) {
                if (t && "object" === typeof t) {
                    var r = t.which || t.keyCode || t.charCode;
                    if (null === r || void 0 === r) return !1;
                    if ("string" === typeof e) {
                        var o;
                        if (o = n[e.toLowerCase()]) return o === r;
                        if (o = i[e.toLowerCase()]) return o === r
                    } else if ("number" === typeof e) return e === r;
                    return !1
                }
            };
            var n = (e = t.exports = r).code = e.codes = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    "pause/break": 19,
                    "caps lock": 20,
                    esc: 27,
                    space: 32,
                    "page up": 33,
                    "page down": 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    insert: 45,
                    delete: 46,
                    command: 91,
                    "left command": 91,
                    "right command": 93,
                    "numpad *": 106,
                    "numpad +": 107,
                    "numpad -": 109,
                    "numpad .": 110,
                    "numpad /": 111,
                    "num lock": 144,
                    "scroll lock": 145,
                    "my computer": 182,
                    "my calculator": 183,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                },
                i = e.aliases = {
                    windows: 91,
                    "\u21e7": 16,
                    "\u2325": 18,
                    "\u2303": 17,
                    "\u2318": 91,
                    ctl: 17,
                    control: 17,
                    option: 18,
                    pause: 19,
                    break: 19,
                    caps: 20,
                    return: 13,
                    escape: 27,
                    spc: 32,
                    spacebar: 32,
                    pgup: 33,
                    pgdn: 34,
                    ins: 45,
                    del: 46,
                    cmd: 91
                };
            for (o = 97; o < 123; o++) n[String.fromCharCode(o)] = o - 32;
            for (var o = 48; o < 58; o++) n[o - 48] = o;
            for (o = 1; o < 13; o++) n["f" + o] = o + 111;
            for (o = 0; o < 10; o++) n["numpad " + o] = o + 96;
            var a = e.names = e.title = {};
            for (o in n) a[n[o]] = o;
            for (var s in i) n[s] = i[s]
        },
        54758: function(t, e, r) {
            "use strict";
            r.d(e, {
                _b: function() {
                    return m
                }
            });
            var n = r(85354),
                i = r.n(n),
                o = r(17388),
                a = r.n(o),
                s = r(67154),
                u = r.n(s),
                c = r(81506),
                f = r.n(c),
                l = r(47927),
                p = r.n(l),
                h = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).buffer = "", e
                    }
                    return i()(e, t), e.prototype.push = function(t) {
                        var e;
                        for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
                    }, e
                }(a()),
                d = function(t) {
                    for (var e, r = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {}, i = r.length; i--;) "" !== r[i] && ((e = /([^=]*)=(.*)/.exec(r[i]).slice(1))[0] = e[0].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^['"](.*)['"]$/g, "$1"), n[e[0]] = e[1]);
                    return n
                },
                g = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).customParsers = [], e.tagMappers = [], e
                    }
                    i()(e, t);
                    var r = e.prototype;
                    return r.push = function(t) {
                        var e, r, n = this;
                        0 !== (t = t.trim()).length && ("#" === t[0] ? this.tagMappers.reduce((function(e, r) {
                            var n = r(t);
                            return n === t ? e : e.concat([n])
                        }), [t]).forEach((function(t) {
                            for (var i = 0; i < n.customParsers.length; i++)
                                if (n.customParsers[i].call(n, t)) return;
                            if (0 === t.indexOf("#EXT"))
                                if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) n.trigger("data", {
                                    type: "tag",
                                    tagType: "m3u"
                                });
                                else {
                                    if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "inf"
                                    }, e[1] && (r.duration = parseFloat(e[1])), e[2] && (r.title = e[2]), void n.trigger("data", r);
                                    if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "targetduration"
                                    }, e[1] && (r.duration = parseInt(e[1], 10)), void n.trigger("data", r);
                                    if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "totalduration"
                                    }, e[1] && (r.duration = parseInt(e[1], 10)), void n.trigger("data", r);
                                    if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "version"
                                    }, e[1] && (r.version = parseInt(e[1], 10)), void n.trigger("data", r);
                                    if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "media-sequence"
                                    }, e[1] && (r.number = parseInt(e[1], 10)), void n.trigger("data", r);
                                    if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "discontinuity-sequence"
                                    }, e[1] && (r.number = parseInt(e[1], 10)), void n.trigger("data", r);
                                    if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "playlist-type"
                                    }, e[1] && (r.playlistType = e[1]), void n.trigger("data", r);
                                    if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "byterange"
                                    }, e[1] && (r.length = parseInt(e[1], 10)), e[2] && (r.offset = parseInt(e[2], 10)), void n.trigger("data", r);
                                    if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return r = {
                                        type: "tag",
                                        tagType: "allow-cache"
                                    }, e[1] && (r.allowed = !/NO/.test(e[1])), void n.trigger("data", r);
                                    if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                                        if (r = {
                                                type: "tag",
                                                tagType: "map"
                                            }, e[1]) {
                                            var o = d(e[1]);
                                            if (o.URI && (r.uri = o.URI), o.BYTERANGE) {
                                                var a = o.BYTERANGE.split("@"),
                                                    s = a[0],
                                                    u = a[1];
                                                r.byterange = {}, s && (r.byterange.length = parseInt(s, 10)), u && (r.byterange.offset = parseInt(u, 10))
                                            }
                                        }
                                        n.trigger("data", r)
                                    } else if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                                        if (r = {
                                                type: "tag",
                                                tagType: "stream-inf"
                                            }, e[1]) {
                                            if (r.attributes = d(e[1]), r.attributes.RESOLUTION) {
                                                var c = r.attributes.RESOLUTION.split("x"),
                                                    f = {};
                                                c[0] && (f.width = parseInt(c[0], 10)), c[1] && (f.height = parseInt(c[1], 10)), r.attributes.RESOLUTION = f
                                            }
                                            r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = parseInt(r.attributes.BANDWIDTH, 10)), r.attributes["PROGRAM-ID"] && (r.attributes["PROGRAM-ID"] = parseInt(r.attributes["PROGRAM-ID"], 10))
                                        }
                                        n.trigger("data", r)
                                    } else {
                                        if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return r = {
                                            type: "tag",
                                            tagType: "media"
                                        }, e[1] && (r.attributes = d(e[1])), void n.trigger("data", r);
                                        if (e = /^#EXT-X-ENDLIST/.exec(t)) n.trigger("data", {
                                            type: "tag",
                                            tagType: "endlist"
                                        });
                                        else if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) n.trigger("data", {
                                            type: "tag",
                                            tagType: "discontinuity"
                                        });
                                        else {
                                            if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "program-date-time"
                                            }, e[1] && (r.dateTimeString = e[1], r.dateTimeObject = new Date(e[1])), void n.trigger("data", r);
                                            if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "key"
                                            }, e[1] && (r.attributes = d(e[1]), r.attributes.IV && ("0x" === r.attributes.IV.substring(0, 2).toLowerCase() && (r.attributes.IV = r.attributes.IV.substring(2)), r.attributes.IV = r.attributes.IV.match(/.{8}/g), r.attributes.IV[0] = parseInt(r.attributes.IV[0], 16), r.attributes.IV[1] = parseInt(r.attributes.IV[1], 16), r.attributes.IV[2] = parseInt(r.attributes.IV[2], 16), r.attributes.IV[3] = parseInt(r.attributes.IV[3], 16), r.attributes.IV = new Uint32Array(r.attributes.IV))), void n.trigger("data", r);
                                            if (e = /^#EXT-X-START:?(.*)$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "start"
                                            }, e[1] && (r.attributes = d(e[1]), r.attributes["TIME-OFFSET"] = parseFloat(r.attributes["TIME-OFFSET"]), r.attributes.PRECISE = /YES/.test(r.attributes.PRECISE)), void n.trigger("data", r);
                                            if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "cue-out-cont"
                                            }, e[1] ? r.data = e[1] : r.data = "", void n.trigger("data", r);
                                            if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "cue-out"
                                            }, e[1] ? r.data = e[1] : r.data = "", void n.trigger("data", r);
                                            if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return r = {
                                                type: "tag",
                                                tagType: "cue-in"
                                            }, e[1] ? r.data = e[1] : r.data = "", void n.trigger("data", r);
                                            n.trigger("data", {
                                                type: "tag",
                                                data: t.slice(4)
                                            })
                                        }
                                    }
                                }
                            else n.trigger("data", {
                                type: "comment",
                                text: t.slice(1)
                            })
                        })) : this.trigger("data", {
                            type: "uri",
                            uri: t
                        }))
                    }, r.addParser = function(t) {
                        var e = this,
                            r = t.expression,
                            n = t.customType,
                            i = t.dataParser,
                            o = t.segment;
                        "function" !== typeof i && (i = function(t) {
                            return t
                        }), this.customParsers.push((function(t) {
                            if (r.exec(t)) return e.trigger("data", {
                                type: "custom",
                                data: i(t),
                                customType: n,
                                segment: o
                            }), !0
                        }))
                    }, r.addTagMapper = function(t) {
                        var e = t.expression,
                            r = t.map;
                        this.tagMappers.push((function(t) {
                            return e.test(t) ? r(t) : t
                        }))
                    }, e
                }(a()),
                m = function(t) {
                    function e() {
                        var e;
                        (e = t.call(this) || this).lineStream = new h, e.parseStream = new g, e.lineStream.pipe(e.parseStream);
                        var r, n, i = f()(e),
                            o = [],
                            a = {},
                            s = function() {},
                            c = {
                                AUDIO: {},
                                VIDEO: {},
                                "CLOSED-CAPTIONS": {},
                                SUBTITLES: {}
                            },
                            l = 0;
                        e.manifest = {
                            allowCache: !0,
                            discontinuityStarts: [],
                            segments: []
                        };
                        var d = 0;
                        return e.parseStream.on("data", (function(t) {
                            var e, f;
                            ({
                                tag: function() {
                                    ({
                                        "allow-cache": function() {
                                            this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
                                                message: "defaulting allowCache to YES"
                                            }), this.manifest.allowCache = !0)
                                        },
                                        byterange: function() {
                                            var e = {};
                                            "length" in t && (a.byterange = e, e.length = t.length, "offset" in t || (t.offset = d)), "offset" in t && (a.byterange = e, e.offset = t.offset), d = e.offset + e.length
                                        },
                                        endlist: function() {
                                            this.manifest.endList = !0
                                        },
                                        inf: function() {
                                            "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                                message: "defaulting media sequence to zero"
                                            })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                                message: "defaulting discontinuity sequence to zero"
                                            })), t.duration > 0 && (a.duration = t.duration), 0 === t.duration && (a.duration = .01, this.trigger("info", {
                                                message: "updating zero segment duration to a small value"
                                            })), this.manifest.segments = o
                                        },
                                        key: function() {
                                            if (t.attributes)
                                                if ("NONE" !== t.attributes.METHOD)
                                                    if (t.attributes.URI) {
                                                        if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t.attributes.KEYFORMAT) {
                                                            return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD) ? void this.trigger("warn", {
                                                                message: "invalid key method provided for Widevine"
                                                            }) : ("SAMPLE-AES-CENC" === t.attributes.METHOD && this.trigger("warn", {
                                                                message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                                            }), "data:text/plain;base64," !== t.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                                                                message: "invalid key URI provided for Widevine"
                                                            }) : t.attributes.KEYID && "0x" === t.attributes.KEYID.substring(0, 2) ? void(this.manifest.contentProtection = {
                                                                "com.widevine.alpha": {
                                                                    attributes: {
                                                                        schemeIdUri: t.attributes.KEYFORMAT,
                                                                        keyId: t.attributes.KEYID.substring(2)
                                                                    },
                                                                    pssh: p()(t.attributes.URI.split(",")[1])
                                                                }
                                                            }) : void this.trigger("warn", {
                                                                message: "invalid key ID provided for Widevine"
                                                            }))
                                                        }
                                                        t.attributes.METHOD || this.trigger("warn", {
                                                            message: "defaulting key method to AES-128"
                                                        }), n = {
                                                            method: t.attributes.METHOD || "AES-128",
                                                            uri: t.attributes.URI
                                                        }, "undefined" !== typeof t.attributes.IV && (n.iv = t.attributes.IV)
                                                    } else this.trigger("warn", {
                                                        message: "ignoring key declaration without URI"
                                                    });
                                            else n = null;
                                            else this.trigger("warn", {
                                                message: "ignoring key declaration without attribute list"
                                            })
                                        },
                                        "media-sequence": function() {
                                            isFinite(t.number) ? this.manifest.mediaSequence = t.number : this.trigger("warn", {
                                                message: "ignoring invalid media sequence: " + t.number
                                            })
                                        },
                                        "discontinuity-sequence": function() {
                                            isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, l = t.number) : this.trigger("warn", {
                                                message: "ignoring invalid discontinuity sequence: " + t.number
                                            })
                                        },
                                        "playlist-type": function() {
                                            /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", {
                                                message: "ignoring unknown playlist type: " + t.playlist
                                            })
                                        },
                                        map: function() {
                                            r = {}, t.uri && (r.uri = t.uri), t.byterange && (r.byterange = t.byterange)
                                        },
                                        "stream-inf": function() {
                                            this.manifest.playlists = o, this.manifest.mediaGroups = this.manifest.mediaGroups || c, t.attributes ? (a.attributes || (a.attributes = {}), u()(a.attributes, t.attributes)) : this.trigger("warn", {
                                                message: "ignoring empty stream-inf attributes"
                                            })
                                        },
                                        media: function() {
                                            if (this.manifest.mediaGroups = this.manifest.mediaGroups || c, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                                var r = this.manifest.mediaGroups[t.attributes.TYPE];
                                                r[t.attributes["GROUP-ID"]] = r[t.attributes["GROUP-ID"]] || {}, e = r[t.attributes["GROUP-ID"]], (f = {
                                                    default: /yes/i.test(t.attributes.DEFAULT)
                                                }).default ? f.autoselect = !0 : f.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (f.language = t.attributes.LANGUAGE), t.attributes.URI && (f.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (f.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (f.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (f.forced = /yes/i.test(t.attributes.FORCED)), e[t.attributes.NAME] = f
                                            } else this.trigger("warn", {
                                                message: "ignoring incomplete or missing media group"
                                            })
                                        },
                                        discontinuity: function() {
                                            l += 1, a.discontinuity = !0, this.manifest.discontinuityStarts.push(o.length)
                                        },
                                        "program-date-time": function() {
                                            "undefined" === typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), a.dateTimeString = t.dateTimeString, a.dateTimeObject = t.dateTimeObject
                                        },
                                        targetduration: function() {
                                            !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                                message: "ignoring invalid target duration: " + t.duration
                                            }) : this.manifest.targetDuration = t.duration
                                        },
                                        totalduration: function() {
                                            !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                                message: "ignoring invalid total duration: " + t.duration
                                            }) : this.manifest.totalDuration = t.duration
                                        },
                                        start: function() {
                                            t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                                timeOffset: t.attributes["TIME-OFFSET"],
                                                precise: t.attributes.PRECISE
                                            } : this.trigger("warn", {
                                                message: "ignoring start declaration without appropriate attribute list"
                                            })
                                        },
                                        "cue-out": function() {
                                            a.cueOut = t.data
                                        },
                                        "cue-out-cont": function() {
                                            a.cueOutCont = t.data
                                        },
                                        "cue-in": function() {
                                            a.cueIn = t.data
                                        }
                                    }[t.tagType] || s).call(i)
                                },
                                uri: function() {
                                    a.uri = t.uri, o.push(a), this.manifest.targetDuration && !("duration" in a) && (this.trigger("warn", {
                                        message: "defaulting segment duration to the target duration"
                                    }), a.duration = this.manifest.targetDuration), n && (a.key = n), a.timeline = l, r && (a.map = r), a = {}
                                },
                                comment: function() {},
                                custom: function() {
                                    t.segment ? (a.custom = a.custom || {}, a.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
                                }
                            })[t.type].call(i)
                        })), e
                    }
                    i()(e, t);
                    var r = e.prototype;
                    return r.push = function(t) {
                        this.lineStream.push(t)
                    }, r.end = function() {
                        this.lineStream.push("\n")
                    }, r.addParser = function(t) {
                        this.parseStream.addParser(t)
                    }, r.addTagMapper = function(t) {
                        this.parseStream.addTagMapper(t)
                    }, e
                }(a())
        },
        40973: function(t, e, r) {
            "use strict";
            r.d(e, {
                Qc: function() {
                    return K
                },
                LG: function() {
                    return Z
                }
            });
            var n = r(49972),
                i = r.n(n),
                o = r(58908),
                a = r.n(o),
                s = r(47927),
                u = r.n(s),
                c = r(86150),
                f = function(t) {
                    return !!t && "object" === typeof t
                },
                l = function t() {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return r.reduce((function(e, r) {
                        return Object.keys(r).forEach((function(n) {
                            Array.isArray(e[n]) && Array.isArray(r[n]) ? e[n] = e[n].concat(r[n]) : f(e[n]) && f(r[n]) ? e[n] = t(e[n], r[n]) : e[n] = r[n]
                        })), e
                    }), {})
                },
                p = function(t) {
                    return t.reduce((function(t, e) {
                        return t.concat(e)
                    }), [])
                },
                h = function(t) {
                    if (!t.length) return [];
                    for (var e = [], r = 0; r < t.length; r++) e.push(t[r]);
                    return e
                },
                d = "INVALID_NUMBER_OF_PERIOD",
                g = "DASH_EMPTY_MANIFEST",
                m = "DASH_INVALID_XML",
                y = "NO_BASE_URL",
                v = "SEGMENT_TIME_UNSPECIFIED",
                b = "UNSUPPORTED_UTC_TIMING_SCHEME",
                w = function(t) {
                    var e = t.baseUrl,
                        r = void 0 === e ? "" : e,
                        n = t.source,
                        o = void 0 === n ? "" : n,
                        a = t.range,
                        s = void 0 === a ? "" : a,
                        u = t.indexRange,
                        c = void 0 === u ? "" : u,
                        f = {
                            uri: o,
                            resolvedUri: i()(r || "", o)
                        };
                    if (s || c) {
                        var l = (s || c).split("-"),
                            p = parseInt(l[0], 10),
                            h = parseInt(l[1], 10);
                        f.byterange = {
                            length: h - p + 1,
                            offset: p
                        }
                    }
                    return f
                },
                T = function(t) {
                    var e = t.offset + t.length - 1;
                    return t.offset + "-" + e
                },
                E = {
                    static: function(t) {
                        var e = t.duration,
                            r = t.timescale,
                            n = void 0 === r ? 1 : r,
                            i = t.sourceDuration;
                        return {
                            start: 0,
                            end: Math.ceil(i / (e / n))
                        }
                    },
                    dynamic: function(t) {
                        var e = t.NOW,
                            r = t.clientOffset,
                            n = t.availabilityStartTime,
                            i = t.timescale,
                            o = void 0 === i ? 1 : i,
                            a = t.duration,
                            s = t.start,
                            u = void 0 === s ? 0 : s,
                            c = t.minimumUpdatePeriod,
                            f = void 0 === c ? 0 : c,
                            l = t.timeShiftBufferDepth,
                            p = void 0 === l ? 1 / 0 : l,
                            h = (e + r) / 1e3,
                            d = n + u,
                            g = h + f - d,
                            m = Math.ceil(g * o / a),
                            y = Math.floor((h - d - p) * o / a),
                            v = Math.floor((h - d) * o / a);
                        return {
                            start: Math.max(0, y),
                            end: Math.min(m, v)
                        }
                    }
                },
                S = function(t) {
                    var e = t.type,
                        r = void 0 === e ? "static" : e,
                        n = t.duration,
                        i = t.timescale,
                        o = void 0 === i ? 1 : i,
                        a = t.sourceDuration,
                        s = E[r](t),
                        u = function(t, e) {
                            for (var r = [], n = t; n < e; n++) r.push(n);
                            return r
                        }(s.start, s.end).map(function(t) {
                            return function(e, r) {
                                var n = t.duration,
                                    i = t.timescale,
                                    o = void 0 === i ? 1 : i,
                                    a = t.periodIndex,
                                    s = t.startNumber;
                                return {
                                    number: (void 0 === s ? 1 : s) + e,
                                    duration: n / o,
                                    timeline: a,
                                    time: r * n
                                }
                            }
                        }(t));
                    if ("static" === r) {
                        var c = u.length - 1;
                        u[c].duration = a - n / o * c
                    }
                    return u
                },
                A = function(t) {
                    var e = t.baseUrl,
                        r = t.initialization,
                        n = void 0 === r ? {} : r,
                        i = t.sourceDuration,
                        o = t.indexRange,
                        a = void 0 === o ? "" : o,
                        s = t.duration;
                    if (!e) throw new Error(y);
                    var u = w({
                            baseUrl: e,
                            source: n.sourceURL,
                            range: n.range
                        }),
                        c = w({
                            baseUrl: e,
                            source: e,
                            indexRange: a
                        });
                    if (c.map = u, s) {
                        var f = S(t);
                        f.length && (c.duration = f[0].duration, c.timeline = f[0].timeline)
                    } else i && (c.duration = i, c.timeline = 0);
                    return c.number = 0, [c]
                },
                x = function(t, e, r) {
                    for (var n = t.sidx.map ? t.sidx.map : null, i = t.sidx.duration, o = t.timeline || 0, a = t.sidx.byterange, s = a.offset + a.length, u = e.timescale, c = e.references.filter((function(t) {
                            return 1 !== t.referenceType
                        })), f = [], l = s + e.firstOffset, p = 0; p < c.length; p++) {
                        var h = e.references[p],
                            d = h.referencedSize,
                            g = h.subsegmentDuration,
                            m = A({
                                baseUrl: r,
                                timescale: u,
                                timeline: o,
                                periodIndex: o,
                                duration: g,
                                sourceDuration: i,
                                indexRange: l + "-" + (l + d - 1)
                            })[0];
                        n && (m.map = n), f.push(m), l += d
                    }
                    return t.segments = f, t
                },
                N = function(t) {
                    var e;
                    return (e = t.reduce((function(t, e) {
                        var r, n = e.attributes.id + (e.attributes.lang || "");
                        return t[n] ? (e.segments[0] && (e.segments[0].discontinuity = !0), (r = t[n].segments).push.apply(r, e.segments), e.attributes.contentProtection && (t[n].attributes.contentProtection = e.attributes.contentProtection)) : t[n] = e, t
                    }), {}), Object.keys(e).map((function(t) {
                        return e[t]
                    }))).map((function(t) {
                        var e, r;
                        return t.discontinuityStarts = (e = t.segments, r = "discontinuity", e.reduce((function(t, e, n) {
                            return e[r] && t.push(n), t
                        }), [])), t
                    }))
                },
                I = function(t, e) {
                    if (void 0 === e && (e = {}), !Object.keys(e).length) return t;
                    for (var r in t) {
                        var n = t[r];
                        if (n.sidx) {
                            var i = n.sidx.uri + "-" + T(n.sidx.byterange),
                                o = e[i] && e[i].sidx;
                            n.sidx && o && x(n, o, n.sidx.resolvedUri)
                        }
                    }
                    return t
                },
                C = function(t) {
                    var e, r = t.attributes,
                        n = t.segments,
                        i = t.sidx,
                        o = {
                            attributes: (e = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth,
                                CODECS: r.codecs
                            }, e["PROGRAM-ID"] = 1, e),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: "",
                            targetDuration: r.duration,
                            segments: n,
                            mediaSequence: n.length ? n[0].number : 1
                        };
                    return r.contentProtection && (o.contentProtection = r.contentProtection), i && (o.sidx = i), o
                },
                D = function(t) {
                    var e, r = t.attributes,
                        n = t.segments;
                    "undefined" === typeof n && (n = [{
                        uri: r.baseUrl,
                        timeline: r.periodIndex,
                        resolvedUri: r.baseUrl || "",
                        duration: r.sourceDuration,
                        number: 0
                    }], r.duration = r.sourceDuration);
                    var i = ((e = {
                        NAME: r.id,
                        BANDWIDTH: r.bandwidth
                    })["PROGRAM-ID"] = 1, e);
                    return r.codecs && (i.CODECS = r.codecs), {
                        attributes: i,
                        uri: "",
                        endList: "static" === (r.type || "static"),
                        timeline: r.periodIndex,
                        resolvedUri: r.baseUrl || "",
                        targetDuration: r.duration,
                        segments: n,
                        mediaSequence: n.length ? n[0].number : 1
                    }
                },
                O = function(t) {
                    var e, r = t.attributes,
                        n = t.segments,
                        i = t.sidx,
                        o = {
                            attributes: (e = {
                                NAME: r.id,
                                AUDIO: "audio",
                                SUBTITLES: "subs",
                                RESOLUTION: {
                                    width: r.width,
                                    height: r.height
                                },
                                CODECS: r.codecs,
                                BANDWIDTH: r.bandwidth
                            }, e["PROGRAM-ID"] = 1, e),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: "",
                            targetDuration: r.duration,
                            segments: n,
                            mediaSequence: n.length ? n[0].number : 1
                        };
                    return r.contentProtection && (o.contentProtection = r.contentProtection), i && (o.sidx = i), o
                },
                R = function(t, e, r) {
                    var n;
                    if (void 0 === r && (r = {}), !t.length) return {};
                    var i = t[0].attributes,
                        o = i.sourceDuration,
                        a = i.type,
                        s = void 0 === a ? "static" : a,
                        u = i.suggestedPresentationDelay,
                        c = i.minimumUpdatePeriod,
                        f = N(t.filter((function(t) {
                            var e = t.attributes;
                            return "video/mp4" === e.mimeType || "video" === e.contentType
                        }))).map(O),
                        l = N(t.filter((function(t) {
                            var e = t.attributes;
                            return "audio/mp4" === e.mimeType || "audio" === e.contentType
                        }))),
                        p = t.filter((function(t) {
                            var e = t.attributes;
                            return "text/vtt" === e.mimeType || "text" === e.contentType
                        })),
                        h = {
                            allowCache: !0,
                            discontinuityStarts: [],
                            segments: [],
                            endList: !0,
                            mediaGroups: (n = {
                                AUDIO: {},
                                VIDEO: {}
                            }, n["CLOSED-CAPTIONS"] = {}, n.SUBTITLES = {}, n),
                            uri: "",
                            duration: o,
                            playlists: I(f, r)
                        };
                    return c >= 0 && (h.minimumUpdatePeriod = 1e3 * c), e && (h.locations = e), "dynamic" === s && (h.suggestedPresentationDelay = u), l.length && (h.mediaGroups.AUDIO.audio = function(t, e) {
                        var r;
                        void 0 === e && (e = {});
                        var n = t.reduce((function(t, n) {
                            var i = n.attributes.role && n.attributes.role.value || "",
                                o = n.attributes.lang || "",
                                a = "main";
                            if (o) {
                                var s = i ? " (" + i + ")" : "";
                                a = "" + n.attributes.lang + s
                            }
                            return t[a] && t[a].playlists[0].attributes.BANDWIDTH > n.attributes.bandwidth || (t[a] = {
                                language: o,
                                autoselect: !0,
                                default: "main" === i,
                                playlists: I([C(n)], e),
                                uri: ""
                            }, "undefined" === typeof r && "main" === i && ((r = n).default = !0)), t
                        }), {});
                        return r || (n[Object.keys(n)[0]].default = !0), n
                    }(l, r)), p.length && (h.mediaGroups.SUBTITLES.subs = function(t, e) {
                        return void 0 === e && (e = {}), t.reduce((function(t, r) {
                            var n = r.attributes.lang || "text";
                            return t[n] || (t[n] = {
                                language: n,
                                default: !1,
                                autoselect: !1,
                                playlists: I([D(r)], e),
                                uri: ""
                            }), t
                        }), {})
                    }(p, r)), h
                },
                U = function(t, e, r) {
                    var n = t.NOW,
                        i = t.clientOffset,
                        o = t.availabilityStartTime,
                        a = t.timescale,
                        s = void 0 === a ? 1 : a,
                        u = t.start,
                        c = void 0 === u ? 0 : u,
                        f = t.minimumUpdatePeriod,
                        l = (n + i) / 1e3 + (void 0 === f ? 0 : f) - (o + c);
                    return Math.ceil((l * s - e) / r)
                },
                L = function(t, e) {
                    for (var r = t.type, n = void 0 === r ? "static" : r, i = t.minimumUpdatePeriod, o = void 0 === i ? 0 : i, a = t.media, s = void 0 === a ? "" : a, u = t.sourceDuration, c = t.timescale, f = void 0 === c ? 1 : c, l = t.startNumber, p = void 0 === l ? 1 : l, h = t.periodIndex, d = [], g = -1, m = 0; m < e.length; m++) {
                        var y = e[m],
                            v = y.d,
                            b = y.r || 0,
                            w = y.t || 0;
                        g < 0 && (g = w), w && w > g && (g = w);
                        var T = void 0;
                        if (b < 0) {
                            var E = m + 1;
                            T = E === e.length ? "dynamic" === n && o > 0 && s.indexOf("$Number$") > 0 ? U(t, g, v) : (u * f - g) / v : (e[E].t - g) / v
                        } else T = b + 1;
                        for (var S = p + d.length + T, A = p + d.length; A < S;) d.push({
                            number: A,
                            duration: v / f,
                            time: g,
                            timeline: h
                        }), g += v, A++
                    }
                    return d
                },
                _ = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
                M = function(t, e) {
                    return t.replace(_, function(t) {
                        return function(e, r, n, i) {
                            if ("$$" === e) return "$";
                            if ("undefined" === typeof t[r]) return e;
                            var o = "" + t[r];
                            return "RepresentationID" === r ? o : (i = n ? parseInt(i, 10) : 1, o.length >= i ? o : "" + new Array(i - o.length + 1).join("0") + o)
                        }
                    }(e))
                },
                P = function(t, e) {
                    var r = {
                            RepresentationID: t.id,
                            Bandwidth: t.bandwidth || 0
                        },
                        n = t.initialization,
                        o = void 0 === n ? {
                            sourceURL: "",
                            range: ""
                        } : n,
                        a = w({
                            baseUrl: t.baseUrl,
                            source: M(o.sourceURL, r),
                            range: o.range
                        });
                    return function(t, e) {
                        return t.duration || e ? t.duration ? S(t) : L(t, e) : [{
                            number: t.startNumber || 1,
                            duration: t.sourceDuration,
                            time: 0,
                            timeline: t.periodIndex
                        }]
                    }(t, e).map((function(e) {
                        r.Number = e.number, r.Time = e.time;
                        var n = M(t.media || "", r);
                        return {
                            uri: n,
                            timeline: e.timeline,
                            duration: e.duration,
                            resolvedUri: i()(t.baseUrl || "", n),
                            map: a,
                            number: e.number
                        }
                    }))
                },
                k = function(t, e) {
                    var r = t.duration,
                        n = t.segmentUrls,
                        i = void 0 === n ? [] : n;
                    if (!r && !e || r && e) throw new Error(v);
                    var o, a = i.map((function(e) {
                        return function(t, e) {
                            var r = t.baseUrl,
                                n = t.initialization,
                                i = void 0 === n ? {} : n,
                                o = w({
                                    baseUrl: r,
                                    source: i.sourceURL,
                                    range: i.range
                                }),
                                a = w({
                                    baseUrl: r,
                                    source: e.media,
                                    range: e.mediaRange
                                });
                            return a.map = o, a
                        }(t, e)
                    }));
                    return r && (o = S(t)), e && (o = L(t, e)), o.map((function(t, e) {
                        if (a[e]) {
                            var r = a[e];
                            return r.timeline = t.timeline, r.duration = t.duration, r.number = t.number, r
                        }
                    })).filter((function(t) {
                        return t
                    }))
                },
                B = function(t) {
                    var e, r, n = t.attributes,
                        i = t.segmentInfo;
                    i.template ? (r = P, e = l(n, i.template)) : i.base ? (r = A, e = l(n, i.base)) : i.list && (r = k, e = l(n, i.list));
                    var o = {
                        attributes: n
                    };
                    if (!r) return o;
                    var a = r(e, i.timeline);
                    if (e.duration) {
                        var s = e,
                            u = s.duration,
                            c = s.timescale,
                            f = void 0 === c ? 1 : c;
                        e.duration = u / f
                    } else a.length ? e.duration = a.reduce((function(t, e) {
                        return Math.max(t, Math.ceil(e.duration))
                    }), 0) : e.duration = 0;
                    return o.attributes = e, o.segments = a, i.base && e.indexRange && (o.sidx = a[0], o.segments = []), o
                },
                F = function(t, e) {
                    return h(t.childNodes).filter((function(t) {
                        return t.tagName === e
                    }))
                },
                j = function(t) {
                    return t.textContent.trim()
                },
                X = function(t) {
                    var e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
                    if (!e) return 0;
                    var r = e.slice(1),
                        n = r[0],
                        i = r[1],
                        o = r[2],
                        a = r[3],
                        s = r[4],
                        u = r[5];
                    return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(i || 0) + 86400 * parseFloat(o || 0) + 3600 * parseFloat(a || 0) + 60 * parseFloat(s || 0) + parseFloat(u || 0)
                },
                V = {
                    mediaPresentationDuration: function(t) {
                        return X(t)
                    },
                    availabilityStartTime: function(t) {
                        return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = t) && (e += "Z"), Date.parse(e) / 1e3;
                        var e
                    },
                    minimumUpdatePeriod: function(t) {
                        return X(t)
                    },
                    suggestedPresentationDelay: function(t) {
                        return X(t)
                    },
                    type: function(t) {
                        return t
                    },
                    timeShiftBufferDepth: function(t) {
                        return X(t)
                    },
                    start: function(t) {
                        return X(t)
                    },
                    width: function(t) {
                        return parseInt(t, 10)
                    },
                    height: function(t) {
                        return parseInt(t, 10)
                    },
                    bandwidth: function(t) {
                        return parseInt(t, 10)
                    },
                    startNumber: function(t) {
                        return parseInt(t, 10)
                    },
                    timescale: function(t) {
                        return parseInt(t, 10)
                    },
                    duration: function(t) {
                        var e = parseInt(t, 10);
                        return isNaN(e) ? X(t) : e
                    },
                    d: function(t) {
                        return parseInt(t, 10)
                    },
                    t: function(t) {
                        return parseInt(t, 10)
                    },
                    r: function(t) {
                        return parseInt(t, 10)
                    },
                    DEFAULT: function(t) {
                        return t
                    }
                },
                z = function(t) {
                    return t && t.attributes ? h(t.attributes).reduce((function(t, e) {
                        var r = V[e.name] || V.DEFAULT;
                        return t[e.name] = r(e.value), t
                    }), {}) : {}
                },
                H = {
                    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                },
                $ = function(t, e) {
                    return e.length ? p(t.map((function(t) {
                        return e.map((function(e) {
                            return i()(t, j(e))
                        }))
                    }))) : t
                },
                q = function(t) {
                    var e = F(t, "SegmentTemplate")[0],
                        r = F(t, "SegmentList")[0],
                        n = r && F(r, "SegmentURL").map((function(t) {
                            return l({
                                tag: "SegmentURL"
                            }, z(t))
                        })),
                        i = F(t, "SegmentBase")[0],
                        o = r || e,
                        a = o && F(o, "SegmentTimeline")[0],
                        s = r || i || e,
                        u = s && F(s, "Initialization")[0],
                        c = e && z(e);
                    c && u ? c.initialization = u && z(u) : c && c.initialization && (c.initialization = {
                        sourceURL: c.initialization
                    });
                    var f = {
                        template: c,
                        timeline: a && F(a, "S").map((function(t) {
                            return z(t)
                        })),
                        list: r && l(z(r), {
                            segmentUrls: n,
                            initialization: z(u)
                        }),
                        base: i && l(z(i), {
                            initialization: z(u)
                        })
                    };
                    return Object.keys(f).forEach((function(t) {
                        f[t] || delete f[t]
                    })), f
                },
                Y = function(t, e, r) {
                    return function(n) {
                        var i = z(n),
                            o = $(e, F(n, "BaseURL")),
                            a = F(n, "Role")[0],
                            s = {
                                role: z(a)
                            },
                            c = l(t, i, s),
                            f = F(n, "ContentProtection").reduce((function(t, e) {
                                var r = z(e),
                                    n = H[r.schemeIdUri];
                                if (n) {
                                    t[n] = {
                                        attributes: r
                                    };
                                    var i = F(e, "cenc:pssh")[0];
                                    if (i) {
                                        var o = j(i),
                                            a = o && u()(o);
                                        t[n].pssh = a
                                    }
                                }
                                return t
                            }), {});
                        Object.keys(f).length && (c = l(c, {
                            contentProtection: f
                        }));
                        var h = q(n),
                            d = F(n, "Representation"),
                            g = l(r, h);
                        return p(d.map(function(t, e, r) {
                            return function(n) {
                                var i = F(n, "BaseURL"),
                                    o = $(e, i),
                                    a = l(t, z(n)),
                                    s = q(n);
                                return o.map((function(t) {
                                    return {
                                        segmentInfo: l(r, s),
                                        attributes: l(a, {
                                            baseUrl: t
                                        })
                                    }
                                }))
                            }
                        }(c, o, g)))
                    }
                },
                G = function(t, e) {
                    return function(r, n) {
                        var i = $(e, F(r, "BaseURL")),
                            o = z(r),
                            s = parseInt(o.id, 10),
                            u = a().isNaN(s) ? n : s,
                            c = l(t, {
                                periodIndex: u
                            }),
                            f = F(r, "AdaptationSet"),
                            h = q(r);
                        return p(f.map(Y(c, i, h)))
                    }
                },
                W = function(t) {
                    if ("" === t) throw new Error(g);
                    var e = (new c.a).parseFromString(t, "application/xml"),
                        r = e && "MPD" === e.documentElement.tagName ? e.documentElement : null;
                    if (!r || r && r.getElementsByTagName("parsererror").length > 0) throw new Error(m);
                    return r
                },
                K = function(t, e) {
                    void 0 === e && (e = {});
                    var r = function(t, e) {
                            void 0 === e && (e = {});
                            var r = e,
                                n = r.manifestUri,
                                i = void 0 === n ? "" : n,
                                o = r.NOW,
                                a = void 0 === o ? Date.now() : o,
                                s = r.clientOffset,
                                u = void 0 === s ? 0 : s,
                                c = F(t, "Period");
                            if (!c.length) throw new Error(d);
                            var f = F(t, "Location"),
                                l = z(t),
                                h = $([i], F(t, "BaseURL"));
                            return l.sourceDuration = l.mediaPresentationDuration || 0, l.NOW = a, l.clientOffset = u, f.length && (l.locations = f.map(j)), {
                                locations: l.locations,
                                representationInfo: p(c.map(G(l, h)))
                            }
                        }(W(t), e),
                        n = r.representationInfo.map(B);
                    return R(n, r.locations, e.sidxMapping)
                },
                Z = function(t) {
                    return function(t) {
                        var e = F(t, "UTCTiming")[0];
                        if (!e) return null;
                        var r = z(e);
                        switch (r.schemeIdUri) {
                            case "urn:mpeg:dash:utc:http-head:2014":
                            case "urn:mpeg:dash:utc:http-head:2012":
                                r.method = "HEAD";
                                break;
                            case "urn:mpeg:dash:utc:http-xsdate:2014":
                            case "urn:mpeg:dash:utc:http-iso:2014":
                            case "urn:mpeg:dash:utc:http-xsdate:2012":
                            case "urn:mpeg:dash:utc:http-iso:2012":
                                r.method = "GET";
                                break;
                            case "urn:mpeg:dash:utc:direct:2014":
                            case "urn:mpeg:dash:utc:direct:2012":
                                r.method = "DIRECT", r.value = Date.parse(r.value);
                                break;
                            case "urn:mpeg:dash:utc:http-ntp:2014":
                            case "urn:mpeg:dash:utc:ntp:2014":
                            case "urn:mpeg:dash:utc:sntp:2014":
                            default:
                                throw new Error(b)
                        }
                        return r
                    }(W(t))
                }
        },
        85220: function(t) {
            "use strict";
            var e = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
                r = function(t, e) {
                    var r = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                    return r = r >= 0 ? r : 0, (16 & t[e + 5]) >> 4 ? r + 20 : r + 10
                },
                n = function(t, e) {
                    return t.length - e < 10 || t[e] !== "I".charCodeAt(0) || t[e + 1] !== "D".charCodeAt(0) || t[e + 2] !== "3".charCodeAt(0) ? e : (e += r(t, e), n(t, e))
                },
                i = function(t) {
                    return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
                };
            t.exports = {
                isLikelyAacData: function(t) {
                    var e = n(t, 0);
                    return t.length >= e + 2 && 255 === (255 & t[e]) && 240 === (240 & t[e + 1]) && 16 === (22 & t[e + 1])
                },
                parseId3TagSize: r,
                parseAdtsSize: function(t, e) {
                    var r = (224 & t[e + 5]) >> 5,
                        n = t[e + 4] << 3;
                    return 6144 & t[e + 3] | n | r
                },
                parseType: function(t, e) {
                    return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 === (240 & t[e + 1]) ? "audio" : null
                },
                parseSampleRate: function(t) {
                    for (var r = 0; r + 5 < t.length;) {
                        if (255 === t[r] && 240 === (246 & t[r + 1])) return e[(60 & t[r + 2]) >>> 2];
                        r++
                    }
                    return null
                },
                parseAacTimestamp: function(t) {
                    var e, r, n;
                    e = 10, 64 & t[5] && (e += 4, e += i(t.subarray(10, 14)));
                    do {
                        if ((r = i(t.subarray(e + 4, e + 8))) < 1) return null;
                        if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
                            n = t.subarray(e + 10, e + r + 10);
                            for (var o = 0; o < n.byteLength; o++)
                                if (0 === n[o]) {
                                    if ("com.apple.streaming.transportStreamTimestamp" === unescape(function(t, e, r) {
                                            var n, i = "";
                                            for (n = e; n < r; n++) i += "%" + ("00" + t[n].toString(16)).slice(-2);
                                            return i
                                        }(n, 0, o))) {
                                        var a = n.subarray(o + 1),
                                            s = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                                        return s *= 4, s += 3 & a[7]
                                    }
                                    break
                                }
                        }
                        e += 10, e += r
                    } while (e < t.byteLength);
                    return null
                }
            }
        },
        34149: function(t, e, r) {
            "use strict";
            var n = r(25215),
                i = function(t) {
                    var e = 31 & t[1];
                    return e <<= 8, e |= t[2]
                },
                o = function(t) {
                    return !!(64 & t[1])
                },
                a = function(t) {
                    var e = 0;
                    return (48 & t[3]) >>> 4 > 1 && (e += t[4] + 1), e
                },
                s = function(t) {
                    switch (t) {
                        case 5:
                            return "slice_layer_without_partitioning_rbsp_idr";
                        case 6:
                            return "sei_rbsp";
                        case 7:
                            return "seq_parameter_set_rbsp";
                        case 8:
                            return "pic_parameter_set_rbsp";
                        case 9:
                            return "access_unit_delimiter_rbsp";
                        default:
                            return null
                    }
                };
            t.exports = {
                parseType: function(t, e) {
                    var r = i(t);
                    return 0 === r ? "pat" : r === e ? "pmt" : e ? "pes" : null
                },
                parsePat: function(t) {
                    var e = o(t),
                        r = 4 + a(t);
                    return e && (r += t[r] + 1), (31 & t[r + 10]) << 8 | t[r + 11]
                },
                parsePmt: function(t) {
                    var e = {},
                        r = o(t),
                        n = 4 + a(t);
                    if (r && (n += t[n] + 1), 1 & t[n + 5]) {
                        var i;
                        i = 3 + ((15 & t[n + 1]) << 8 | t[n + 2]) - 4;
                        for (var s = 12 + ((15 & t[n + 10]) << 8 | t[n + 11]); s < i;) {
                            var u = n + s;
                            e[(31 & t[u + 1]) << 8 | t[u + 2]] = t[u], s += 5 + ((15 & t[u + 3]) << 8 | t[u + 4])
                        }
                        return e
                    }
                },
                parsePayloadUnitStartIndicator: o,
                parsePesType: function(t, e) {
                    switch (e[i(t)]) {
                        case n.H264_STREAM_TYPE:
                            return "video";
                        case n.ADTS_STREAM_TYPE:
                            return "audio";
                        case n.METADATA_STREAM_TYPE:
                            return "timed-metadata";
                        default:
                            return null
                    }
                },
                parsePesTime: function(t) {
                    if (!o(t)) return null;
                    var e = 4 + a(t);
                    if (e >= t.byteLength) return null;
                    var r, n = null;
                    return 192 & (r = t[e + 7]) && ((n = {}).pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, n.pts *= 4, n.pts += (6 & t[e + 13]) >>> 1, n.dts = n.pts, 64 & r && (n.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, n.dts *= 4, n.dts += (6 & t[e + 18]) >>> 1)), n
                },
                videoPacketContainsKeyFrame: function(t) {
                    for (var e = 4 + a(t), r = t.subarray(e), n = 0, i = 0, o = !1; i < r.byteLength - 3; i++)
                        if (1 === r[i + 2]) {
                            n = i + 5;
                            break
                        }
                    for (; n < r.byteLength;) switch (r[n]) {
                        case 0:
                            if (0 !== r[n - 1]) {
                                n += 2;
                                break
                            }
                            if (0 !== r[n - 2]) {
                                n++;
                                break
                            }
                            i + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === s(31 & r[i + 3]) && (o = !0);
                            do {
                                n++
                            } while (1 !== r[n] && n < r.length);
                            i = n - 2, n += 3;
                            break;
                        case 1:
                            if (0 !== r[n - 1] || 0 !== r[n - 2]) {
                                n += 3;
                                break
                            }
                            "slice_layer_without_partitioning_rbsp_idr" === s(31 & r[i + 3]) && (o = !0), i = n - 2, n += 3;
                            break;
                        default:
                            n += 3
                    }
                    return r = r.subarray(i), n -= i, i = 0, r && r.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === s(31 & r[i + 3]) && (o = !0), o
                }
            }
        },
        25215: function(t) {
            "use strict";
            t.exports = {
                H264_STREAM_TYPE: 27,
                ADTS_STREAM_TYPE: 15,
                METADATA_STREAM_TYPE: 21
            }
        },
        10817: function(t, e, r) {
            "use strict";
            var n = r(71961),
                i = "shared",
                o = function(t, e) {
                    var r = 1;
                    for (t > e && (r = -1); Math.abs(e - t) > 4294967296;) t += 8589934592 * r;
                    return t
                },
                a = function(t) {
                    var e, r;
                    a.prototype.init.call(this), this.type_ = t || i, this.push = function(t) {
                        this.type_ !== i && t.type !== this.type_ || (void 0 === r && (r = t.dts), t.dts = o(t.dts, r), t.pts = o(t.pts, r), e = t.dts, this.trigger("data", t))
                    }, this.flush = function() {
                        r = e, this.trigger("done")
                    }, this.endTimeline = function() {
                        this.flush(), this.trigger("endedtimeline")
                    }, this.discontinuity = function() {
                        r = void 0, e = void 0
                    }, this.reset = function() {
                        this.discontinuity(), this.trigger("reset")
                    }
                };
            a.prototype = new n, t.exports = {
                TimestampRolloverStream: a,
                handleRollover: o
            }
        },
        37088: function(t, e, r) {
            var n = r(71976).toUnsigned,
                i = r(90002),
                o = function(t, e) {
                    var r, a, s, u, c, f = [];
                    if (!e.length) return null;
                    for (r = 0; r < t.byteLength;) a = n(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]), s = i(t.subarray(r + 4, r + 8)), u = a > 1 ? r + a : t.byteLength, s === e[0] && (1 === e.length ? f.push(t.subarray(r + 8, u)) : (c = o(t.subarray(r + 8, u), e.slice(1))).length && (f = f.concat(c))), r = u;
                    return f
                };
            t.exports = o
        },
        90002: function(t) {
            t.exports = function(t) {
                var e = "";
                return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
            }
        },
        47661: function(t, e, r) {
            "use strict";
            var n, i, o, a, s, u, c = r(71976).toUnsigned,
                f = r(71976).toHexString,
                l = r(37088),
                p = r(90002),
                h = r(65654),
                d = r(62459),
                g = r(83389);
            n = function(t) {
                return l(t, ["moov", "trak"]).reduce((function(t, e) {
                    var r, n, i, o, a;
                    return (r = l(e, ["tkhd"])[0]) ? (n = r[0], o = c(r[i = 0 === n ? 12 : 20] << 24 | r[i + 1] << 16 | r[i + 2] << 8 | r[i + 3]), (a = l(e, ["mdia", "mdhd"])[0]) ? (i = 0 === (n = a[0]) ? 12 : 20, t[o] = c(a[i] << 24 | a[i + 1] << 16 | a[i + 2] << 8 | a[i + 3]), t) : null) : null
                }), {})
            }, i = function(t, e) {
                var r, n, i;
                return r = l(e, ["moof", "traf"]), n = [].concat.apply([], r.map((function(e) {
                    return l(e, ["tfhd"]).map((function(r) {
                        var n, i;
                        return n = c(r[4] << 24 | r[5] << 16 | r[6] << 8 | r[7]), i = t[n] || 9e4, (l(e, ["tfdt"]).map((function(t) {
                            var e, r;
                            return e = t[0], r = c(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), 1 === e && (r *= Math.pow(2, 32), r += c(t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11])), r
                        }))[0] || 1 / 0) / i
                    }))
                }))), i = Math.min.apply(null, n), isFinite(i) ? i : 0
            }, o = function(t, e) {
                var r, n = l(e, ["moof", "traf"]),
                    i = 0,
                    o = 0;
                if (n && n.length) {
                    var a = l(n[0], ["tfhd"])[0],
                        s = l(n[0], ["trun"])[0],
                        u = l(n[0], ["tfdt"])[0];
                    if (a) r = h(a).trackId;
                    if (u) i = g(u).baseMediaDecodeTime;
                    if (s) {
                        var c = d(s);
                        c.samples && c.samples.length && (o = c.samples[0].compositionTimeOffset || 0)
                    }
                }
                return (i + o) / (t[r] || 9e4)
            }, a = function(t) {
                var e = l(t, ["moov", "trak"]),
                    r = [];
                return e.forEach((function(t) {
                    var e = l(t, ["mdia", "hdlr"]),
                        n = l(t, ["tkhd"]);
                    e.forEach((function(t, e) {
                        var i, o, a = p(t.subarray(8, 12)),
                            s = n[e];
                        "vide" === a && (o = 0 === (i = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), r.push(o))
                    }))
                })), r
            }, u = function(t) {
                var e = 0 === t[0] ? 12 : 20;
                return c(t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3])
            }, s = function(t) {
                var e = l(t, ["moov", "trak"]),
                    r = [];
                return e.forEach((function(t) {
                    var e, n, i = {},
                        o = l(t, ["tkhd"])[0];
                    o && (n = (e = new DataView(o.buffer, o.byteOffset, o.byteLength)).getUint8(0), i.id = 0 === n ? e.getUint32(12) : e.getUint32(20));
                    var a = l(t, ["mdia", "hdlr"])[0];
                    if (a) {
                        var s = p(a.subarray(8, 12));
                        i.type = "vide" === s ? "video" : "soun" === s ? "audio" : s
                    }
                    var c = l(t, ["mdia", "minf", "stbl", "stsd"])[0];
                    if (c) {
                        var h = c.subarray(8);
                        i.codec = p(h.subarray(4, 8));
                        var d, g = l(h, [i.codec])[0];
                        g && (/^[a-z]vc[1-9]$/i.test(i.codec) ? (d = g.subarray(78), "avcC" === p(d.subarray(4, 8)) && d.length > 11 ? (i.codec += ".", i.codec += f(d[9]), i.codec += f(d[10]), i.codec += f(d[11])) : i.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(i.codec) && (d = g.subarray(28), "esds" === p(d.subarray(4, 8)) && d.length > 20 && 0 !== d[19] ? (i.codec += "." + f(d[19]), i.codec += "." + f(d[20] >>> 2 & 63).replace(/^0/, "")) : i.codec = "mp4a.40.2"))
                    }
                    var m = l(t, ["mdia", "mdhd"])[0];
                    m && (i.timescale = u(m)), r.push(i)
                })), r
            }, t.exports = {
                findBox: l,
                parseType: p,
                timescale: n,
                startTime: i,
                compositionStartTime: o,
                videoTrackIds: a,
                tracks: s,
                getTimescaleFromMediaHeader: u
            }
        },
        64633: function(t) {
            t.exports = function(t) {
                return {
                    isLeading: (12 & t[0]) >>> 2,
                    dependsOn: 3 & t[0],
                    isDependedOn: (192 & t[1]) >>> 6,
                    hasRedundancy: (48 & t[1]) >>> 4,
                    paddingValue: (14 & t[1]) >>> 1,
                    isNonSyncSample: 1 & t[1],
                    degradationPriority: t[2] << 8 | t[3]
                }
            }
        },
        84221: function(t) {
            t.exports = function(t) {
                var e, r = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        references: [],
                        referenceId: r.getUint32(4),
                        timescale: r.getUint32(8),
                        earliestPresentationTime: r.getUint32(12),
                        firstOffset: r.getUint32(16)
                    },
                    i = r.getUint16(22);
                for (e = 24; i; e += 12, i--) n.references.push({
                    referenceType: (128 & t[e]) >>> 7,
                    referencedSize: 2147483647 & r.getUint32(e),
                    subsegmentDuration: r.getUint32(e + 4),
                    startsWithSap: !!(128 & t[e + 8]),
                    sapType: (112 & t[e + 8]) >>> 4,
                    sapDeltaTime: 268435455 & r.getUint32(e + 8)
                });
                return n
            }
        },
        83389: function(t, e, r) {
            var n = r(71976).toUnsigned;
            t.exports = function(t) {
                var e = {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    baseMediaDecodeTime: n(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7])
                };
                return 1 === e.version && (e.baseMediaDecodeTime *= Math.pow(2, 32), e.baseMediaDecodeTime += n(t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11])), e
            }
        },
        65654: function(t) {
            t.exports = function(t) {
                var e, r = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        trackId: r.getUint32(4)
                    },
                    i = 1 & n.flags[2],
                    o = 2 & n.flags[2],
                    a = 8 & n.flags[2],
                    s = 16 & n.flags[2],
                    u = 32 & n.flags[2],
                    c = 65536 & n.flags[0],
                    f = 131072 & n.flags[0];
                return e = 8, i && (e += 4, n.baseDataOffset = r.getUint32(12), e += 4), o && (n.sampleDescriptionIndex = r.getUint32(e), e += 4), a && (n.defaultSampleDuration = r.getUint32(e), e += 4), s && (n.defaultSampleSize = r.getUint32(e), e += 4), u && (n.defaultSampleFlags = r.getUint32(e)), c && (n.durationIsEmpty = !0), !i && f && (n.baseDataOffsetIsMoof = !0), n
            }
        },
        62459: function(t, e, r) {
            var n = r(64633);
            t.exports = function(t) {
                var e, r = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        samples: []
                    },
                    i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    o = 1 & r.flags[2],
                    a = 4 & r.flags[2],
                    s = 1 & r.flags[1],
                    u = 2 & r.flags[1],
                    c = 4 & r.flags[1],
                    f = 8 & r.flags[1],
                    l = i.getUint32(4),
                    p = 8;
                for (o && (r.dataOffset = i.getInt32(p), p += 4), a && l && (e = {
                        flags: n(t.subarray(p, p + 4))
                    }, p += 4, s && (e.duration = i.getUint32(p), p += 4), u && (e.size = i.getUint32(p), p += 4), f && (1 === r.version ? e.compositionTimeOffset = i.getInt32(p) : e.compositionTimeOffset = i.getUint32(p), p += 4), r.samples.push(e), l--); l--;) e = {}, s && (e.duration = i.getUint32(p), p += 4), u && (e.size = i.getUint32(p), p += 4), c && (e.flags = n(t.subarray(p, p + 4)), p += 4), f && (1 === r.version ? e.compositionTimeOffset = i.getInt32(p) : e.compositionTimeOffset = i.getUint32(p), p += 4), r.samples.push(e);
                return r
            }
        },
        65547: function(t, e, r) {
            "use strict";
            var n = r(25215),
                i = r(10817).handleRollover,
                o = {};
            o.ts = r(34149), o.aac = r(85220);
            var a = r(51489).ONE_SECOND_IN_TS,
                s = 188,
                u = 71,
                c = function(t, e, r) {
                    for (var n, i, a, c, f = 0, l = s, p = !1; l <= t.byteLength;)
                        if (t[f] !== u || t[l] !== u && l !== t.byteLength) f++, l++;
                        else {
                            switch (n = t.subarray(f, l), o.ts.parseType(n, e.pid)) {
                                case "pes":
                                    i = o.ts.parsePesType(n, e.table), a = o.ts.parsePayloadUnitStartIndicator(n), "audio" === i && a && (c = o.ts.parsePesTime(n)) && (c.type = "audio", r.audio.push(c), p = !0)
                            }
                            if (p) break;
                            f += s, l += s
                        }
                    for (f = (l = t.byteLength) - s, p = !1; f >= 0;)
                        if (t[f] !== u || t[l] !== u && l !== t.byteLength) f--, l--;
                        else {
                            switch (n = t.subarray(f, l), o.ts.parseType(n, e.pid)) {
                                case "pes":
                                    i = o.ts.parsePesType(n, e.table), a = o.ts.parsePayloadUnitStartIndicator(n), "audio" === i && a && (c = o.ts.parsePesTime(n)) && (c.type = "audio", r.audio.push(c), p = !0)
                            }
                            if (p) break;
                            f -= s, l -= s
                        }
                },
                f = function(t, e, r) {
                    for (var n, i, a, c, f, l, p, h = 0, d = s, g = !1, m = {
                            data: [],
                            size: 0
                        }; d < t.byteLength;)
                        if (t[h] !== u || t[d] !== u) h++, d++;
                        else {
                            switch (n = t.subarray(h, d), o.ts.parseType(n, e.pid)) {
                                case "pes":
                                    if (i = o.ts.parsePesType(n, e.table), a = o.ts.parsePayloadUnitStartIndicator(n), "video" === i && (a && !g && (c = o.ts.parsePesTime(n)) && (c.type = "video", r.video.push(c), g = !0), !r.firstKeyFrame)) {
                                        if (a && 0 !== m.size) {
                                            for (f = new Uint8Array(m.size), l = 0; m.data.length;) p = m.data.shift(), f.set(p, l), l += p.byteLength;
                                            if (o.ts.videoPacketContainsKeyFrame(f)) {
                                                var y = o.ts.parsePesTime(f);
                                                y ? (r.firstKeyFrame = y, r.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")
                                            }
                                            m.size = 0
                                        }
                                        m.data.push(n), m.size += n.byteLength
                                    }
                            }
                            if (g && r.firstKeyFrame) break;
                            h += s, d += s
                        }
                    for (h = (d = t.byteLength) - s, g = !1; h >= 0;)
                        if (t[h] !== u || t[d] !== u) h--, d--;
                        else {
                            switch (n = t.subarray(h, d), o.ts.parseType(n, e.pid)) {
                                case "pes":
                                    i = o.ts.parsePesType(n, e.table), a = o.ts.parsePayloadUnitStartIndicator(n), "video" === i && a && (c = o.ts.parsePesTime(n)) && (c.type = "video", r.video.push(c), g = !0)
                            }
                            if (g) break;
                            h -= s, d -= s
                        }
                },
                l = function(t) {
                    var e = {
                            pid: null,
                            table: null
                        },
                        r = {};
                    for (var i in function(t, e) {
                            for (var r, n = 0, i = s; i < t.byteLength;)
                                if (t[n] !== u || t[i] !== u) n++, i++;
                                else {
                                    switch (r = t.subarray(n, i), o.ts.parseType(r, e.pid)) {
                                        case "pat":
                                            e.pid || (e.pid = o.ts.parsePat(r));
                                            break;
                                        case "pmt":
                                            e.table || (e.table = o.ts.parsePmt(r))
                                    }
                                    if (e.pid && e.table) return;
                                    n += s, i += s
                                }
                        }(t, e), e.table) {
                        if (e.table.hasOwnProperty(i)) switch (e.table[i]) {
                            case n.H264_STREAM_TYPE:
                                r.video = [], f(t, e, r), 0 === r.video.length && delete r.video;
                                break;
                            case n.ADTS_STREAM_TYPE:
                                r.audio = [], c(t, e, r), 0 === r.audio.length && delete r.audio
                        }
                    }
                    return r
                };
            t.exports = {
                inspect: function(t, e) {
                    var r;
                    return (r = o.aac.isLikelyAacData(t) ? function(t) {
                        for (var e, r = !1, n = 0, i = null, s = null, u = 0, c = 0; t.length - c >= 3;) {
                            switch (o.aac.parseType(t, c)) {
                                case "timed-metadata":
                                    if (t.length - c < 10) {
                                        r = !0;
                                        break
                                    }
                                    if ((u = o.aac.parseId3TagSize(t, c)) > t.length) {
                                        r = !0;
                                        break
                                    }
                                    null === s && (e = t.subarray(c, c + u), s = o.aac.parseAacTimestamp(e)), c += u;
                                    break;
                                case "audio":
                                    if (t.length - c < 7) {
                                        r = !0;
                                        break
                                    }
                                    if ((u = o.aac.parseAdtsSize(t, c)) > t.length) {
                                        r = !0;
                                        break
                                    }
                                    null === i && (e = t.subarray(c, c + u), i = o.aac.parseSampleRate(e)), n++, c += u;
                                    break;
                                default:
                                    c++
                            }
                            if (r) return null
                        }
                        if (null === i || null === s) return null;
                        var f = a / i;
                        return {
                            audio: [{
                                type: "audio",
                                dts: s,
                                pts: s
                            }, {
                                type: "audio",
                                dts: s + 1024 * n * f,
                                pts: s + 1024 * n * f
                            }]
                        }
                    }(t) : l(t)) && (r.audio || r.video) ? (function(t, e) {
                        if (t.audio && t.audio.length) {
                            var r = e;
                            "undefined" === typeof r && (r = t.audio[0].dts), t.audio.forEach((function(t) {
                                t.dts = i(t.dts, r), t.pts = i(t.pts, r), t.dtsTime = t.dts / a, t.ptsTime = t.pts / a
                            }))
                        }
                        if (t.video && t.video.length) {
                            var n = e;
                            if ("undefined" === typeof n && (n = t.video[0].dts), t.video.forEach((function(t) {
                                    t.dts = i(t.dts, n), t.pts = i(t.pts, n), t.dtsTime = t.dts / a, t.ptsTime = t.pts / a
                                })), t.firstKeyFrame) {
                                var o = t.firstKeyFrame;
                                o.dts = i(o.dts, n), o.pts = i(o.pts, n), o.dtsTime = o.dts / a, o.ptsTime = o.dts / a
                            }
                        }
                    }(r, e), r) : null
                },
                parseAudioPes_: c
            }
        },
        71976: function(t) {
            t.exports = {
                toUnsigned: function(t) {
                    return t >>> 0
                },
                toHexString: function(t) {
                    return ("00" + t.toString(16)).slice(-2)
                }
            }
        },
        51489: function(t) {
            var e, r, n, i, o, a, s, u = 9e4;
            e = function(t) {
                return t * u
            }, r = function(t, e) {
                return t * e
            }, n = function(t) {
                return t / u
            }, i = function(t, e) {
                return t / e
            }, o = function(t, r) {
                return e(i(t, r))
            }, a = function(t, e) {
                return r(n(t), e)
            }, s = function(t, e, r) {
                return n(r ? t : t - e)
            }, t.exports = {
                ONE_SECOND_IN_TS: u,
                secondsToVideoTs: e,
                secondsToAudioTs: r,
                videoTsToSeconds: n,
                audioTsToSeconds: i,
                audioTsToVideoTs: o,
                videoTsToAudioTs: a,
                metadataTsToSeconds: s
            }
        },
        71961: function(t) {
            "use strict";
            var e = function() {
                this.init = function() {
                    var t = {};
                    this.on = function(e, r) {
                        t[e] || (t[e] = []), t[e] = t[e].concat(r)
                    }, this.off = function(e, r) {
                        var n;
                        return !!t[e] && (n = t[e].indexOf(r), t[e] = t[e].slice(), t[e].splice(n, 1), n > -1)
                    }, this.trigger = function(e) {
                        var r, n, i, o;
                        if (r = t[e])
                            if (2 === arguments.length)
                                for (i = r.length, n = 0; n < i; ++n) r[n].call(this, arguments[1]);
                            else {
                                for (o = [], n = arguments.length, n = 1; n < arguments.length; ++n) o.push(arguments[n]);
                                for (i = r.length, n = 0; n < i; ++n) r[n].apply(this, o)
                            }
                    }, this.dispose = function() {
                        t = {}
                    }
                }
            };
            e.prototype.pipe = function(t) {
                return this.on("data", (function(e) {
                    t.push(e)
                })), this.on("done", (function(e) {
                    t.flush(e)
                })), this.on("partialdone", (function(e) {
                    t.partialFlush(e)
                })), this.on("endedtimeline", (function(e) {
                    t.endTimeline(e)
                })), this.on("reset", (function(e) {
                    t.reset(e)
                })), t
            }, e.prototype.push = function(t) {
                this.trigger("data", t)
            }, e.prototype.flush = function(t) {
                this.trigger("done", t)
            }, e.prototype.partialFlush = function(t) {
                this.trigger("partialdone", t)
            }, e.prototype.endTimeline = function(t) {
                this.trigger("endedtimeline", t)
            }, e.prototype.reset = function(t) {
                this.trigger("reset", t)
            }, t.exports = e
        },
        21876: function(t) {
            ! function() {
                var e = {
                        991: function(t, e) {
                            "use strict";
                            e.byteLength = function(t) {
                                var e = u(t),
                                    r = e[0],
                                    n = e[1];
                                return 3 * (r + n) / 4 - n
                            }, e.toByteArray = function(t) {
                                var e, r, o = u(t),
                                    a = o[0],
                                    s = o[1],
                                    c = new i(function(t, e, r) {
                                        return 3 * (e + r) / 4 - r
                                    }(0, a, s)),
                                    f = 0,
                                    l = s > 0 ? a - 4 : a;
                                for (r = 0; r < l; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], c[f++] = e >> 16 & 255, c[f++] = e >> 8 & 255, c[f++] = 255 & e;
                                2 === s && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, c[f++] = 255 & e);
                                1 === s && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, c[f++] = e >> 8 & 255, c[f++] = 255 & e);
                                return c
                            }, e.fromByteArray = function(t) {
                                for (var e, n = t.length, i = n % 3, o = [], a = 16383, s = 0, u = n - i; s < u; s += a) o.push(f(t, s, s + a > u ? u : s + a));
                                1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
                                return o.join("")
                            };
                            for (var r = [], n = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], n[o.charCodeAt(a)] = a;

                            function u(t) {
                                var e = t.length;
                                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                                var r = t.indexOf("=");
                                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
                            }

                            function c(t) {
                                return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
                            }

                            function f(t, e, r) {
                                for (var n, i = [], o = e; o < r; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), i.push(c(n));
                                return i.join("")
                            }
                            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
                        },
                        293: function(t, e, r) {
                            "use strict";
                            var n = r(991),
                                i = r(759),
                                o = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                            e.Buffer = u, e.SlowBuffer = function(t) {
                                +t != t && (t = 0);
                                return u.alloc(+t)
                            }, e.INSPECT_MAX_BYTES = 50;
                            var a = 2147483647;

                            function s(t) {
                                if (t > a) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                                var e = new Uint8Array(t);
                                return Object.setPrototypeOf(e, u.prototype), e
                            }

                            function u(t, e, r) {
                                if ("number" === typeof t) {
                                    if ("string" === typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                                    return l(t)
                                }
                                return c(t, e, r)
                            }

                            function c(t, e, r) {
                                if ("string" === typeof t) return function(t, e) {
                                    "string" === typeof e && "" !== e || (e = "utf8");
                                    if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                                    var r = 0 | g(t, e),
                                        n = s(r),
                                        i = n.write(t, e);
                                    i !== r && (n = n.slice(0, i));
                                    return n
                                }(t, e);
                                if (ArrayBuffer.isView(t)) return p(t);
                                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                if (V(t, ArrayBuffer) || t && V(t.buffer, ArrayBuffer)) return h(t, e, r);
                                if ("undefined" !== typeof SharedArrayBuffer && (V(t, SharedArrayBuffer) || t && V(t.buffer, SharedArrayBuffer))) return h(t, e, r);
                                if ("number" === typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                var n = t.valueOf && t.valueOf();
                                if (null != n && n !== t) return u.from(n, e, r);
                                var i = function(t) {
                                    if (u.isBuffer(t)) {
                                        var e = 0 | d(t.length),
                                            r = s(e);
                                        return 0 === r.length || t.copy(r, 0, 0, e), r
                                    }
                                    if (void 0 !== t.length) return "number" !== typeof t.length || z(t.length) ? s(0) : p(t);
                                    if ("Buffer" === t.type && Array.isArray(t.data)) return p(t.data)
                                }(t);
                                if (i) return i;
                                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                            }

                            function f(t) {
                                if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
                                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                            }

                            function l(t) {
                                return f(t), s(t < 0 ? 0 : 0 | d(t))
                            }

                            function p(t) {
                                for (var e = t.length < 0 ? 0 : 0 | d(t.length), r = s(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                                return r
                            }

                            function h(t, e, r) {
                                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                                var n;
                                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
                            }

                            function d(t) {
                                if (t >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
                                return 0 | t
                            }

                            function g(t, e) {
                                if (u.isBuffer(t)) return t.length;
                                if (ArrayBuffer.isView(t) || V(t, ArrayBuffer)) return t.byteLength;
                                if ("string" !== typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                                var r = t.length,
                                    n = arguments.length > 2 && !0 === arguments[2];
                                if (!n && 0 === r) return 0;
                                for (var i = !1;;) switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return r;
                                    case "utf8":
                                    case "utf-8":
                                        return F(t).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * r;
                                    case "hex":
                                        return r >>> 1;
                                    case "base64":
                                        return j(t).length;
                                    default:
                                        if (i) return n ? -1 : F(t).length;
                                        e = ("" + e).toLowerCase(), i = !0
                                }
                            }

                            function m(t, e, r) {
                                var n = !1;
                                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                                if ((r >>>= 0) <= (e >>>= 0)) return "";
                                for (t || (t = "utf8");;) switch (t) {
                                    case "hex":
                                        return R(this, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return I(this, e, r);
                                    case "ascii":
                                        return D(this, e, r);
                                    case "latin1":
                                    case "binary":
                                        return O(this, e, r);
                                    case "base64":
                                        return N(this, e, r);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return U(this, e, r);
                                    default:
                                        if (n) throw new TypeError("Unknown encoding: " + t);
                                        t = (t + "").toLowerCase(), n = !0
                                }
                            }

                            function y(t, e, r) {
                                var n = t[e];
                                t[e] = t[r], t[r] = n
                            }

                            function v(t, e, r, n, i) {
                                if (0 === t.length) return -1;
                                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), z(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                                    if (i) return -1;
                                    r = t.length - 1
                                } else if (r < 0) {
                                    if (!i) return -1;
                                    r = 0
                                }
                                if ("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
                                if ("number" === typeof e) return e &= 255, "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, i);
                                throw new TypeError("val must be string, number or Buffer")
                            }

                            function b(t, e, r, n, i) {
                                var o, a = 1,
                                    s = t.length,
                                    u = e.length;
                                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    a = 2, s /= 2, u /= 2, r /= 2
                                }

                                function c(t, e) {
                                    return 1 === a ? t[e] : t.readUInt16BE(e * a)
                                }
                                if (i) {
                                    var f = -1;
                                    for (o = r; o < s; o++)
                                        if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                                            if (-1 === f && (f = o), o - f + 1 === u) return f * a
                                        } else -1 !== f && (o -= o - f), f = -1
                                } else
                                    for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                                        for (var l = !0, p = 0; p < u; p++)
                                            if (c(t, o + p) !== c(e, p)) {
                                                l = !1;
                                                break
                                            }
                                        if (l) return o
                                    }
                                return -1
                            }

                            function w(t, e, r, n) {
                                r = Number(r) || 0;
                                var i = t.length - r;
                                n ? (n = Number(n)) > i && (n = i) : n = i;
                                var o = e.length;
                                n > o / 2 && (n = o / 2);
                                for (var a = 0; a < n; ++a) {
                                    var s = parseInt(e.substr(2 * a, 2), 16);
                                    if (z(s)) return a;
                                    t[r + a] = s
                                }
                                return a
                            }

                            function T(t, e, r, n) {
                                return X(F(e, t.length - r), t, r, n)
                            }

                            function E(t, e, r, n) {
                                return X(function(t) {
                                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                    return e
                                }(e), t, r, n)
                            }

                            function S(t, e, r, n) {
                                return E(t, e, r, n)
                            }

                            function A(t, e, r, n) {
                                return X(j(e), t, r, n)
                            }

                            function x(t, e, r, n) {
                                return X(function(t, e) {
                                    for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = (r = t.charCodeAt(a)) >> 8, i = r % 256, o.push(i), o.push(n);
                                    return o
                                }(e, t.length - r), t, r, n)
                            }

                            function N(t, e, r) {
                                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
                            }

                            function I(t, e, r) {
                                r = Math.min(t.length, r);
                                for (var n = [], i = e; i < r;) {
                                    var o, a, s, u, c = t[i],
                                        f = null,
                                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                    if (i + l <= r) switch (l) {
                                        case 1:
                                            c < 128 && (f = c);
                                            break;
                                        case 2:
                                            128 === (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
                                            break;
                                        case 3:
                                            o = t[i + 1], a = t[i + 2], 128 === (192 & o) && 128 === (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                            break;
                                        case 4:
                                            o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u)
                                    }
                                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += l
                                }
                                return C(n)
                            }
                            e.kMaxLength = a, u.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var t = new Uint8Array(1),
                                        e = {
                                            foo: function() {
                                                return 42
                                            }
                                        };
                                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                                } catch (t) {
                                    return !1
                                }
                            }(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                                enumerable: !0,
                                get: function() {
                                    if (u.isBuffer(this)) return this.buffer
                                }
                            }), Object.defineProperty(u.prototype, "offset", {
                                enumerable: !0,
                                get: function() {
                                    if (u.isBuffer(this)) return this.byteOffset
                                }
                            }), u.poolSize = 8192, u.from = function(t, e, r) {
                                return c(t, e, r)
                            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
                                return function(t, e, r) {
                                    return f(t), t <= 0 ? s(t) : void 0 !== e ? "string" === typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
                                }(t, e, r)
                            }, u.allocUnsafe = function(t) {
                                return l(t)
                            }, u.allocUnsafeSlow = function(t) {
                                return l(t)
                            }, u.isBuffer = function(t) {
                                return null != t && !0 === t._isBuffer && t !== u.prototype
                            }, u.compare = function(t, e) {
                                if (V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (t === e) return 0;
                                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                                    if (t[i] !== e[i]) {
                                        r = t[i], n = e[i];
                                        break
                                    }
                                return r < n ? -1 : n < r ? 1 : 0
                            }, u.isEncoding = function(t) {
                                switch (String(t).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, u.concat = function(t, e) {
                                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === t.length) return u.alloc(0);
                                var r;
                                if (void 0 === e)
                                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                                var n = u.allocUnsafe(e),
                                    i = 0;
                                for (r = 0; r < t.length; ++r) {
                                    var o = t[r];
                                    if (V(o, Uint8Array) && (o = u.from(o)), !u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    o.copy(n, i), i += o.length
                                }
                                return n
                            }, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                                var t = this.length;
                                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                                return this
                            }, u.prototype.swap32 = function() {
                                var t = this.length;
                                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                                return this
                            }, u.prototype.swap64 = function() {
                                var t = this.length;
                                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                                return this
                            }, u.prototype.toString = function() {
                                var t = this.length;
                                return 0 === t ? "" : 0 === arguments.length ? I(this, 0, t) : m.apply(this, arguments)
                            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                                return this === t || 0 === u.compare(this, t)
                            }, u.prototype.inspect = function() {
                                var t = "",
                                    r = e.INSPECT_MAX_BYTES;
                                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                            }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, i) {
                                if (V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                                if (n >= i && e >= r) return 0;
                                if (n >= i) return -1;
                                if (e >= r) return 1;
                                if (this === t) return 0;
                                for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(o, a), c = this.slice(n, i), f = t.slice(e, r), l = 0; l < s; ++l)
                                    if (c[l] !== f[l]) {
                                        o = c[l], a = f[l];
                                        break
                                    }
                                return o < a ? -1 : a < o ? 1 : 0
                            }, u.prototype.includes = function(t, e, r) {
                                return -1 !== this.indexOf(t, e, r)
                            }, u.prototype.indexOf = function(t, e, r) {
                                return v(this, t, e, r, !0)
                            }, u.prototype.lastIndexOf = function(t, e, r) {
                                return v(this, t, e, r, !1)
                            }, u.prototype.write = function(t, e, r, n) {
                                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                                else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
                                else {
                                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                                }
                                var i = this.length - e;
                                if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                n || (n = "utf8");
                                for (var o = !1;;) switch (n) {
                                    case "hex":
                                        return w(this, t, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return T(this, t, e, r);
                                    case "ascii":
                                        return E(this, t, e, r);
                                    case "latin1":
                                    case "binary":
                                        return S(this, t, e, r);
                                    case "base64":
                                        return A(this, t, e, r);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return x(this, t, e, r);
                                    default:
                                        if (o) throw new TypeError("Unknown encoding: " + n);
                                        n = ("" + n).toLowerCase(), o = !0
                                }
                            }, u.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            };

                            function C(t) {
                                var e = t.length;
                                if (e <= 4096) return String.fromCharCode.apply(String, t);
                                for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                                return r
                            }

                            function D(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                return n
                            }

                            function O(t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                return n
                            }

                            function R(t, e, r) {
                                var n = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                for (var i = "", o = e; o < r; ++o) i += H[t[o]];
                                return i
                            }

                            function U(t, e, r) {
                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }

                            function L(t, e, r) {
                                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
                            }

                            function _(t, e, r, n, i, o) {
                                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                                if (r + n > t.length) throw new RangeError("Index out of range")
                            }

                            function M(t, e, r, n, i, o) {
                                if (r + n > t.length) throw new RangeError("Index out of range");
                                if (r < 0) throw new RangeError("Index out of range")
                            }

                            function P(t, e, r, n, o) {
                                return e = +e, r >>>= 0, o || M(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
                            }

                            function k(t, e, r, n, o) {
                                return e = +e, r >>>= 0, o || M(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
                            }
                            u.prototype.slice = function(t, e) {
                                var r = this.length;
                                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                                var n = this.subarray(t, e);
                                return Object.setPrototypeOf(n, u.prototype), n
                            }, u.prototype.readUIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || L(t, e, this.length);
                                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                                return n
                            }, u.prototype.readUIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || L(t, e, this.length);
                                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                                return n
                            }, u.prototype.readUInt8 = function(t, e) {
                                return t >>>= 0, e || L(t, 1, this.length), this[t]
                            }, u.prototype.readUInt16LE = function(t, e) {
                                return t >>>= 0, e || L(t, 2, this.length), this[t] | this[t + 1] << 8
                            }, u.prototype.readUInt16BE = function(t, e) {
                                return t >>>= 0, e || L(t, 2, this.length), this[t] << 8 | this[t + 1]
                            }, u.prototype.readUInt32LE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                            }, u.prototype.readUInt32BE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                            }, u.prototype.readIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || L(t, e, this.length);
                                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                            }, u.prototype.readIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || L(t, e, this.length);
                                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                            }, u.prototype.readInt8 = function(t, e) {
                                return t >>>= 0, e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                            }, u.prototype.readInt16LE = function(t, e) {
                                t >>>= 0, e || L(t, 2, this.length);
                                var r = this[t] | this[t + 1] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, u.prototype.readInt16BE = function(t, e) {
                                t >>>= 0, e || L(t, 2, this.length);
                                var r = this[t + 1] | this[t] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, u.prototype.readInt32LE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                            }, u.prototype.readInt32BE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                            }, u.prototype.readFloatLE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !0, 23, 4)
                            }, u.prototype.readFloatBE = function(t, e) {
                                return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !1, 23, 4)
                            }, u.prototype.readDoubleLE = function(t, e) {
                                return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !0, 52, 8)
                            }, u.prototype.readDoubleBE = function(t, e) {
                                return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !1, 52, 8)
                            }, u.prototype.writeUIntLE = function(t, e, r, n) {
                                (t = +t, e >>>= 0, r >>>= 0, n) || _(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                                var i = 1,
                                    o = 0;
                                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                                return e + r
                            }, u.prototype.writeUIntBE = function(t, e, r, n) {
                                (t = +t, e >>>= 0, r >>>= 0, n) || _(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                                var i = r - 1,
                                    o = 1;
                                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                                return e + r
                            }, u.prototype.writeUInt8 = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                            }, u.prototype.writeUInt16LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, u.prototype.writeUInt16BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, u.prototype.writeUInt32LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                            }, u.prototype.writeUInt32BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, u.prototype.writeIntLE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r - 1);
                                    _(this, t, e, r, i - 1, -i)
                                }
                                var o = 0,
                                    a = 1,
                                    s = 0;
                                for (this[e] = 255 & t; ++o < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
                                return e + r
                            }, u.prototype.writeIntBE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r - 1);
                                    _(this, t, e, r, i - 1, -i)
                                }
                                var o = r - 1,
                                    a = 1,
                                    s = 0;
                                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
                                return e + r
                            }, u.prototype.writeInt8 = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                            }, u.prototype.writeInt16LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, u.prototype.writeInt16BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, u.prototype.writeInt32LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                            }, u.prototype.writeInt32BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || _(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, u.prototype.writeFloatLE = function(t, e, r) {
                                return P(this, t, e, !0, r)
                            }, u.prototype.writeFloatBE = function(t, e, r) {
                                return P(this, t, e, !1, r)
                            }, u.prototype.writeDoubleLE = function(t, e, r) {
                                return k(this, t, e, !0, r)
                            }, u.prototype.writeDoubleBE = function(t, e, r) {
                                return k(this, t, e, !1, r)
                            }, u.prototype.copy = function(t, e, r, n) {
                                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                                if (0 === t.length || 0 === this.length) return 0;
                                if (e < 0) throw new RangeError("targetStart out of bounds");
                                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                                var i = n - r;
                                if (this === t && "function" === typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                                else if (this === t && r < e && e < n)
                                    for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                                else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                                return i
                            }, u.prototype.fill = function(t, e, r, n) {
                                if ("string" === typeof t) {
                                    if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                                    if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                                    if (1 === t.length) {
                                        var i = t.charCodeAt(0);
                                        ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                                    }
                                } else "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
                                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                                if (r <= e) return this;
                                var o;
                                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                                    for (o = e; o < r; ++o) this[o] = t;
                                else {
                                    var a = u.isBuffer(t) ? t : u.from(t, n),
                                        s = a.length;
                                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                                    for (o = 0; o < r - e; ++o) this[o + e] = a[o % s]
                                }
                                return this
                            };
                            var B = /[^+/0-9A-Za-z-_]/g;

                            function F(t, e) {
                                var r;
                                e = e || 1 / 0;
                                for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                                    if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                                        if (!i) {
                                            if (r > 56319) {
                                                (e -= 3) > -1 && o.push(239, 191, 189);
                                                continue
                                            }
                                            if (a + 1 === n) {
                                                (e -= 3) > -1 && o.push(239, 191, 189);
                                                continue
                                            }
                                            i = r;
                                            continue
                                        }
                                        if (r < 56320) {
                                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                                            continue
                                        }
                                        r = 65536 + (i - 55296 << 10 | r - 56320)
                                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                                    if (i = null, r < 128) {
                                        if ((e -= 1) < 0) break;
                                        o.push(r)
                                    } else if (r < 2048) {
                                        if ((e -= 2) < 0) break;
                                        o.push(r >> 6 | 192, 63 & r | 128)
                                    } else if (r < 65536) {
                                        if ((e -= 3) < 0) break;
                                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else {
                                        if (!(r < 1114112)) throw new Error("Invalid code point");
                                        if ((e -= 4) < 0) break;
                                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                    }
                                }
                                return o
                            }

                            function j(t) {
                                return n.toByteArray(function(t) {
                                    if ((t = (t = t.split("=")[0]).trim().replace(B, "")).length < 2) return "";
                                    for (; t.length % 4 !== 0;) t += "=";
                                    return t
                                }(t))
                            }

                            function X(t, e, r, n) {
                                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                                return i
                            }

                            function V(t, e) {
                                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                            }

                            function z(t) {
                                return t !== t
                            }
                            var H = function() {
                                for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r)
                                    for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                                return e
                            }()
                        },
                        759: function(t, e) {
                            e.read = function(t, e, r, n, i) {
                                var o, a, s = 8 * i - n - 1,
                                    u = (1 << s) - 1,
                                    c = u >> 1,
                                    f = -7,
                                    l = r ? i - 1 : 0,
                                    p = r ? -1 : 1,
                                    h = t[e + l];
                                for (l += p, o = h & (1 << -f) - 1, h >>= -f, f += s; f > 0; o = 256 * o + t[e + l], l += p, f -= 8);
                                for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + t[e + l], l += p, f -= 8);
                                if (0 === o) o = 1 - c;
                                else {
                                    if (o === u) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                                    a += Math.pow(2, n), o -= c
                                }
                                return (h ? -1 : 1) * a * Math.pow(2, o - n)
                            }, e.write = function(t, e, r, n, i, o) {
                                var a, s, u, c = 8 * o - i - 1,
                                    f = (1 << c) - 1,
                                    l = f >> 1,
                                    p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                    h = n ? 0 : o - 1,
                                    d = n ? 1 : -1,
                                    g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (a++, u /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + h] = 255 & s, h += d, s /= 256, i -= 8);
                                for (a = a << i | s, c += i; c > 0; t[r + h] = 255 & a, h += d, a /= 256, c -= 8);
                                t[r + h - d] |= 128 * g
                            }
                        }
                    },
                    r = {};

                function n(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var o = r[t] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        e[t](o, o.exports, n), a = !1
                    } finally {
                        a && delete r[t]
                    }
                    return o.exports
                }
                n.ab = "//";
                var i = n(293);
                t.exports = i
            }()
        },
        75974: function(t) {
            t.exports = function(t, e) {
                var r, n = null;
                try {
                    r = JSON.parse(t, e)
                } catch (i) {
                    n = i
                }
                return [n, r]
            }
        },
        49945: function(t) {
            ! function(e) {
                var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                    n = /^([^\/?#]*)(.*)$/,
                    i = /(?:\/|^)\.(?=\/)/g,
                    o = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                    a = {
                        buildAbsoluteURL: function(t, e, r) {
                            if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                                if (!r.alwaysNormalize) return t;
                                var i = a.parseURL(t);
                                if (!i) throw new Error("Error trying to parse base URL.");
                                return i.path = a.normalizePath(i.path), a.buildURLFromParts(i)
                            }
                            var o = a.parseURL(e);
                            if (!o) throw new Error("Error trying to parse relative URL.");
                            if (o.scheme) return r.alwaysNormalize ? (o.path = a.normalizePath(o.path), a.buildURLFromParts(o)) : e;
                            var s = a.parseURL(t);
                            if (!s) throw new Error("Error trying to parse base URL.");
                            if (!s.netLoc && s.path && "/" !== s.path[0]) {
                                var u = n.exec(s.path);
                                s.netLoc = u[1], s.path = u[2]
                            }
                            s.netLoc && !s.path && (s.path = "/");
                            var c = {
                                scheme: s.scheme,
                                netLoc: o.netLoc,
                                path: null,
                                params: o.params,
                                query: o.query,
                                fragment: o.fragment
                            };
                            if (!o.netLoc && (c.netLoc = s.netLoc, "/" !== o.path[0]))
                                if (o.path) {
                                    var f = s.path,
                                        l = f.substring(0, f.lastIndexOf("/") + 1) + o.path;
                                    c.path = a.normalizePath(l)
                                } else c.path = s.path, o.params || (c.params = s.params, o.query || (c.query = s.query));
                            return null === c.path && (c.path = r.alwaysNormalize ? a.normalizePath(o.path) : o.path), a.buildURLFromParts(c)
                        },
                        parseURL: function(t) {
                            var e = r.exec(t);
                            return e ? {
                                scheme: e[1] || "",
                                netLoc: e[2] || "",
                                path: e[3] || "",
                                params: e[4] || "",
                                query: e[5] || "",
                                fragment: e[6] || ""
                            } : null
                        },
                        normalizePath: function(t) {
                            for (t = t.split("").reverse().join("").replace(i, ""); t.length !== (t = t.replace(o, "")).length;);
                            return t.split("").reverse().join("")
                        },
                        buildURLFromParts: function(t) {
                            return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                        }
                    };
                t.exports = a
            }()
        },
        39561: function(t, e, r) {
            var n, i = "undefined" !== typeof r.g ? r.g : "undefined" !== typeof window ? window : {},
                o = r(65586);
            "undefined" !== typeof document ? n = document : (n = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = n
        },
        92661: function(t, e, r) {
            var n;
            n = "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : {}, t.exports = n
        },
        13407: function(t, e, r) {
            var n = r(58908),
                i = t.exports = {
                    WebVTT: r(63706),
                    VTTCue: r(22230),
                    VTTRegion: r(13710)
                };
            n.vttjs = i, n.WebVTT = i.WebVTT;
            var o = i.VTTCue,
                a = i.VTTRegion,
                s = n.VTTCue,
                u = n.VTTRegion;
            i.shim = function() {
                n.VTTCue = o, n.VTTRegion = a
            }, i.restore = function() {
                n.VTTCue = s, n.VTTRegion = u
            }, n.VTTCue || i.shim()
        },
        63706: function(t, e, r) {
            var n = r(89144),
                i = Object.create || function() {
                    function t() {}
                    return function(e) {
                        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                        return t.prototype = e, new t
                    }
                }();

            function o(t, e) {
                this.name = "ParsingError", this.code = t.code, this.message = e || t.message
            }

            function a(t) {
                function e(t, e, r, n) {
                    return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | n) / 1e3
                }
                var r = t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
                return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
            }

            function s() {
                this.values = i(null)
            }

            function u(t, e, r, n) {
                var i = n ? t.split(n) : [t];
                for (var o in i)
                    if ("string" === typeof i[o]) {
                        var a = i[o].split(r);
                        if (2 === a.length) e(a[0], a[1])
                    }
            }

            function c(t, e, r) {
                var n = t;

                function i() {
                    var e = a(t);
                    if (null === e) throw new o(o.Errors.BadTimeStamp, "Malformed timestamp: " + n);
                    return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                }

                function c() {
                    t = t.replace(/^\s+/, "")
                }
                if (c(), e.startTime = i(), c(), "--\x3e" !== t.substr(0, 3)) throw new o(o.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
                t = t.substr(3), c(), e.endTime = i(), c(),
                    function(t, e) {
                        var n = new s;
                        u(t, (function(t, e) {
                            switch (t) {
                                case "region":
                                    for (var i = r.length - 1; i >= 0; i--)
                                        if (r[i].id === e) {
                                            n.set(t, r[i].region);
                                            break
                                        }
                                    break;
                                case "vertical":
                                    n.alt(t, e, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var o = e.split(","),
                                        a = o[0];
                                    n.integer(t, a), n.percent(t, a) && n.set("snapToLines", !1), n.alt(t, a, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "center", "end"]);
                                    break;
                                case "position":
                                    o = e.split(","), n.percent(t, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "center", "end"]);
                                    break;
                                case "size":
                                    n.percent(t, e);
                                    break;
                                case "align":
                                    n.alt(t, e, ["start", "center", "end", "left", "right"])
                            }
                        }), /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", "");
                        try {
                            e.line = n.get("line", "auto")
                        } catch (i) {}
                        e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100);
                        try {
                            e.align = n.get("align", "center")
                        } catch (i) {
                            e.align = n.get("align", "middle")
                        }
                        try {
                            e.position = n.get("position", "auto")
                        } catch (i) {
                            e.position = n.get("position", {
                                start: 0,
                                left: 0,
                                center: 50,
                                middle: 50,
                                end: 100,
                                right: 100
                            }, e.align)
                        }
                        e.positionAlign = n.get("positionAlign", {
                            start: "start",
                            left: "start",
                            center: "center",
                            middle: "center",
                            end: "end",
                            right: "end"
                        }, e.align)
                    }(t, e)
            }
            o.prototype = i(Error.prototype), o.prototype.constructor = o, o.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            }, s.prototype = {
                set: function(t, e) {
                    this.get(t) || "" === e || (this.values[t] = e)
                },
                get: function(t, e, r) {
                    return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
                },
                has: function(t) {
                    return t in this.values
                },
                alt: function(t, e, r) {
                    for (var n = 0; n < r.length; ++n)
                        if (e === r[n]) {
                            this.set(t, e);
                            break
                        }
                },
                integer: function(t, e) {
                    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                },
                percent: function(t, e) {
                    return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
                }
            };
            var f = n.createElement("textarea"),
                l = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                p = {
                    white: "rgba(255,255,255,1)",
                    lime: "rgba(0,255,0,1)",
                    cyan: "rgba(0,255,255,1)",
                    red: "rgba(255,0,0,1)",
                    yellow: "rgba(255,255,0,1)",
                    magenta: "rgba(255,0,255,1)",
                    blue: "rgba(0,0,255,1)",
                    black: "rgba(0,0,0,1)"
                },
                h = {
                    v: "title",
                    lang: "lang"
                },
                d = {
                    rt: "ruby"
                };

            function g(t, e) {
                function r() {
                    if (!e) return null;
                    var t, r = e.match(/^([^<]*)(<[^>]*>?)?/);
                    return t = r[1] ? r[1] : r[2], e = e.substr(t.length), t
                }

                function n(t, e) {
                    return !d[e.localName] || d[e.localName] === t.localName
                }

                function i(e, r) {
                    var n = l[e];
                    if (!n) return null;
                    var i = t.document.createElement(n),
                        o = h[e];
                    return o && r && (i[o] = r.trim()), i
                }
                for (var o, s, u = t.document.createElement("div"), c = u, g = []; null !== (o = r());)
                    if ("<" !== o[0]) c.appendChild(t.document.createTextNode((s = o, f.innerHTML = s, s = f.textContent, f.textContent = "", s)));
                    else {
                        if ("/" === o[1]) {
                            g.length && g[g.length - 1] === o.substr(2).replace(">", "") && (g.pop(), c = c.parentNode);
                            continue
                        }
                        var m, y = a(o.substr(1, o.length - 2));
                        if (y) {
                            m = t.document.createProcessingInstruction("timestamp", y), c.appendChild(m);
                            continue
                        }
                        var v = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!v) continue;
                        if (!(m = i(v[1], v[3]))) continue;
                        if (!n(c, m)) continue;
                        if (v[2]) {
                            var b = v[2].split(".");
                            b.forEach((function(t) {
                                var e = /^bg_/.test(t),
                                    r = e ? t.slice(3) : t;
                                if (p.hasOwnProperty(r)) {
                                    var n = e ? "background-color" : "color",
                                        i = p[r];
                                    m.style[n] = i
                                }
                            })), m.className = b.join(" ")
                        }
                        g.push(v[1]), c.appendChild(m), c = m
                    }
                return u
            }
            var m = [
                [1470, 1470],
                [1472, 1472],
                [1475, 1475],
                [1478, 1478],
                [1488, 1514],
                [1520, 1524],
                [1544, 1544],
                [1547, 1547],
                [1549, 1549],
                [1563, 1563],
                [1566, 1610],
                [1645, 1647],
                [1649, 1749],
                [1765, 1766],
                [1774, 1775],
                [1786, 1805],
                [1807, 1808],
                [1810, 1839],
                [1869, 1957],
                [1969, 1969],
                [1984, 2026],
                [2036, 2037],
                [2042, 2042],
                [2048, 2069],
                [2074, 2074],
                [2084, 2084],
                [2088, 2088],
                [2096, 2110],
                [2112, 2136],
                [2142, 2142],
                [2208, 2208],
                [2210, 2220],
                [8207, 8207],
                [64285, 64285],
                [64287, 64296],
                [64298, 64310],
                [64312, 64316],
                [64318, 64318],
                [64320, 64321],
                [64323, 64324],
                [64326, 64449],
                [64467, 64829],
                [64848, 64911],
                [64914, 64967],
                [65008, 65020],
                [65136, 65140],
                [65142, 65276],
                [67584, 67589],
                [67592, 67592],
                [67594, 67637],
                [67639, 67640],
                [67644, 67644],
                [67647, 67669],
                [67671, 67679],
                [67840, 67867],
                [67872, 67897],
                [67903, 67903],
                [67968, 68023],
                [68030, 68031],
                [68096, 68096],
                [68112, 68115],
                [68117, 68119],
                [68121, 68147],
                [68160, 68167],
                [68176, 68184],
                [68192, 68223],
                [68352, 68405],
                [68416, 68437],
                [68440, 68466],
                [68472, 68479],
                [68608, 68680],
                [126464, 126467],
                [126469, 126495],
                [126497, 126498],
                [126500, 126500],
                [126503, 126503],
                [126505, 126514],
                [126516, 126519],
                [126521, 126521],
                [126523, 126523],
                [126530, 126530],
                [126535, 126535],
                [126537, 126537],
                [126539, 126539],
                [126541, 126543],
                [126545, 126546],
                [126548, 126548],
                [126551, 126551],
                [126553, 126553],
                [126555, 126555],
                [126557, 126557],
                [126559, 126559],
                [126561, 126562],
                [126564, 126564],
                [126567, 126570],
                [126572, 126578],
                [126580, 126583],
                [126585, 126588],
                [126590, 126590],
                [126592, 126601],
                [126603, 126619],
                [126625, 126627],
                [126629, 126633],
                [126635, 126651],
                [1114109, 1114109]
            ];

            function y(t) {
                for (var e = 0; e < m.length; e++) {
                    var r = m[e];
                    if (t >= r[0] && t <= r[1]) return !0
                }
                return !1
            }

            function v(t) {
                var e = [],
                    r = "";
                if (!t || !t.childNodes) return "ltr";

                function n(t, e) {
                    for (var r = e.childNodes.length - 1; r >= 0; r--) t.push(e.childNodes[r])
                }

                function i(t) {
                    if (!t || !t.length) return null;
                    var e = t.pop(),
                        r = e.textContent || e.innerText;
                    if (r) {
                        var o = r.match(/^.*(\n|\r)/);
                        return o ? (t.length = 0, o[0]) : r
                    }
                    return "ruby" === e.tagName ? i(t) : e.childNodes ? (n(t, e), i(t)) : void 0
                }
                for (n(e, t); r = i(e);)
                    for (var o = 0; o < r.length; o++)
                        if (y(r.charCodeAt(o))) return "rtl";
                return "ltr"
            }

            function b() {}

            function w(t, e, r) {
                b.call(this), this.cue = e, this.cueDiv = g(t, e.text);
                var n = {
                    color: "rgba(255, 255, 255, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    position: "relative",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline",
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext"
                };
                this.applyStyles(n, this.cueDiv), this.div = t.document.createElement("div"), n = {
                    direction: v(this.cueDiv),
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext",
                    textAlign: "middle" === e.align ? "center" : e.align,
                    font: r.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                }, this.applyStyles(n), this.div.appendChild(this.cueDiv);
                var i = 0;
                switch (e.positionAlign) {
                    case "start":
                        i = e.position;
                        break;
                    case "center":
                        i = e.position - e.size / 2;
                        break;
                    case "end":
                        i = e.position - e.size
                }
                "" === e.vertical ? this.applyStyles({
                    left: this.formatStyle(i, "%"),
                    width: this.formatStyle(e.size, "%")
                }) : this.applyStyles({
                    top: this.formatStyle(i, "%"),
                    height: this.formatStyle(e.size, "%")
                }), this.move = function(t) {
                    this.applyStyles({
                        top: this.formatStyle(t.top, "px"),
                        bottom: this.formatStyle(t.bottom, "px"),
                        left: this.formatStyle(t.left, "px"),
                        right: this.formatStyle(t.right, "px"),
                        height: this.formatStyle(t.height, "px"),
                        width: this.formatStyle(t.width, "px")
                    })
                }
            }

            function T(t) {
                var e, r, n, i;
                if (t.div) {
                    r = t.div.offsetHeight, n = t.div.offsetWidth, i = t.div.offsetTop;
                    var o = (o = t.div.childNodes) && (o = o[0]) && o.getClientRects && o.getClientRects();
                    t = t.div.getBoundingClientRect(), e = o ? Math.max(o[0] && o[0].height || 0, t.height / o.length) : 0
                }
                this.left = t.left, this.right = t.right, this.top = t.top || i, this.height = t.height || r, this.bottom = t.bottom || i + (t.height || r), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight
            }

            function E(t, e, r, n) {
                var i = new T(e),
                    o = e.cue,
                    a = function(t) {
                        if ("number" === typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                        for (var e = t.track, r = e.textTrackList, n = 0, i = 0; i < r.length && r[i] !== e; i++) "showing" === r[i].mode && n++;
                        return -1 * ++n
                    }(o),
                    s = [];
                if (o.snapToLines) {
                    var u;
                    switch (o.vertical) {
                        case "":
                            s = ["+y", "-y"], u = "height";
                            break;
                        case "rl":
                            s = ["+x", "-x"], u = "width";
                            break;
                        case "lr":
                            s = ["-x", "+x"], u = "width"
                    }
                    var c = i.lineHeight,
                        f = c * Math.round(a),
                        l = r[u] + c,
                        p = s[0];
                    Math.abs(f) > l && (f = f < 0 ? -1 : 1, f *= Math.ceil(l / c) * c), a < 0 && (f += "" === o.vertical ? r.height : r.width, s = s.reverse()), i.move(p, f)
                } else {
                    var h = i.lineHeight / r.height * 100;
                    switch (o.lineAlign) {
                        case "center":
                            a -= h / 2;
                            break;
                        case "end":
                            a -= h
                    }
                    switch (o.vertical) {
                        case "":
                            e.applyStyles({
                                top: e.formatStyle(a, "%")
                            });
                            break;
                        case "rl":
                            e.applyStyles({
                                left: e.formatStyle(a, "%")
                            });
                            break;
                        case "lr":
                            e.applyStyles({
                                right: e.formatStyle(a, "%")
                            })
                    }
                    s = ["+y", "-x", "+x", "-y"], i = new T(e)
                }
                var d = function(t, e) {
                    for (var i, o = new T(t), a = 1, s = 0; s < e.length; s++) {
                        for (; t.overlapsOppositeAxis(r, e[s]) || t.within(r) && t.overlapsAny(n);) t.move(e[s]);
                        if (t.within(r)) return t;
                        var u = t.intersectPercentage(r);
                        a > u && (i = new T(t), a = u), t = new T(o)
                    }
                    return i || o
                }(i, s);
                e.move(d.toCSSCompatValues(r))
            }

            function S() {}
            b.prototype.applyStyles = function(t, e) {
                for (var r in e = e || this.div, t) t.hasOwnProperty(r) && (e.style[r] = t[r])
            }, b.prototype.formatStyle = function(t, e) {
                return 0 === t ? 0 : t + e
            }, w.prototype = i(b.prototype), w.prototype.constructor = w, T.prototype.move = function(t, e) {
                switch (e = void 0 !== e ? e : this.lineHeight, t) {
                    case "+x":
                        this.left += e, this.right += e;
                        break;
                    case "-x":
                        this.left -= e, this.right -= e;
                        break;
                    case "+y":
                        this.top += e, this.bottom += e;
                        break;
                    case "-y":
                        this.top -= e, this.bottom -= e
                }
            }, T.prototype.overlaps = function(t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, T.prototype.overlapsAny = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (this.overlaps(t[e])) return !0;
                return !1
            }, T.prototype.within = function(t) {
                return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
            }, T.prototype.overlapsOppositeAxis = function(t, e) {
                switch (e) {
                    case "+x":
                        return this.left < t.left;
                    case "-x":
                        return this.right > t.right;
                    case "+y":
                        return this.top < t.top;
                    case "-y":
                        return this.bottom > t.bottom
                }
            }, T.prototype.intersectPercentage = function(t) {
                return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
            }, T.prototype.toCSSCompatValues = function(t) {
                return {
                    top: this.top - t.top,
                    bottom: t.bottom - this.bottom,
                    left: this.left - t.left,
                    right: t.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, T.getSimpleBoxPosition = function(t) {
                var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                    r = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                    n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
                return {
                    left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
                    right: t.right,
                    top: t.top || n,
                    height: t.height || e,
                    bottom: t.bottom || n + (t.height || e),
                    width: t.width || r
                }
            }, S.StringDecoder = function() {
                return {
                    decode: function(t) {
                        if (!t) return "";
                        if ("string" !== typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            }, S.convertCueToDOMTree = function(t, e) {
                return t && e ? g(t, e) : null
            };
            S.processCues = function(t, e, r) {
                if (!t || !e || !r) return null;
                for (; r.firstChild;) r.removeChild(r.firstChild);
                var n = t.document.createElement("div");
                if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", r.appendChild(n), function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].hasBeenReset || !t[e].displayState) return !0;
                        return !1
                    }(e)) {
                    var i = [],
                        o = T.getSimpleBoxPosition(n),
                        a = {
                            font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
                        };
                    ! function() {
                        for (var r, s, u = 0; u < e.length; u++) s = e[u], r = new w(t, s, a), n.appendChild(r.div), E(0, r, o, i), s.displayState = r.div, i.push(T.getSimpleBoxPosition(r))
                    }()
                } else
                    for (var s = 0; s < e.length; s++) n.appendChild(e[s].displayState)
            }, S.Parser = function(t, e, r) {
                r || (r = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = r || new TextDecoder("utf8"), this.regionList = []
            }, S.Parser.prototype = {
                reportOrThrowError: function(t) {
                    if (!(t instanceof o)) throw t;
                    this.onparsingerror && this.onparsingerror(t)
                },
                parse: function(t) {
                    var e = this;

                    function r() {
                        for (var t = e.buffer, r = 0; r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                        var n = t.substr(0, r);
                        return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.substr(r), n
                    }

                    function n(t) {
                        t.match(/X-TIMESTAMP-MAP/) ? u(t, (function(t, r) {
                            switch (t) {
                                case "X-TIMESTAMP-MAP":
                                    ! function(t) {
                                        var r = new s;
                                        u(t, (function(t, e) {
                                            switch (t) {
                                                case "MPEGT":
                                                    r.integer(t + "S", e);
                                                    break;
                                                case "LOCA":
                                                    r.set(t + "L", a(e))
                                            }
                                        }), /[^\d]:/, /,/), e.ontimestampmap && e.ontimestampmap({
                                            MPEGTS: r.get("MPEGTS"),
                                            LOCAL: r.get("LOCAL")
                                        })
                                    }(r)
                            }
                        }), /=/) : u(t, (function(t, r) {
                            switch (t) {
                                case "Region":
                                    ! function(t) {
                                        var r = new s;
                                        if (u(t, (function(t, e) {
                                                switch (t) {
                                                    case "id":
                                                        r.set(t, e);
                                                        break;
                                                    case "width":
                                                        r.percent(t, e);
                                                        break;
                                                    case "lines":
                                                        r.integer(t, e);
                                                        break;
                                                    case "regionanchor":
                                                    case "viewportanchor":
                                                        var n = e.split(",");
                                                        if (2 !== n.length) break;
                                                        var i = new s;
                                                        if (i.percent("x", n[0]), i.percent("y", n[1]), !i.has("x") || !i.has("y")) break;
                                                        r.set(t + "X", i.get("x")), r.set(t + "Y", i.get("y"));
                                                        break;
                                                    case "scroll":
                                                        r.alt(t, e, ["up"])
                                                }
                                            }), /=/, /\s/), r.has("id")) {
                                            var n = new(e.vttjs.VTTRegion || e.window.VTTRegion);
                                            n.width = r.get("width", 100), n.lines = r.get("lines", 3), n.regionAnchorX = r.get("regionanchorX", 0), n.regionAnchorY = r.get("regionanchorY", 100), n.viewportAnchorX = r.get("viewportanchorX", 0), n.viewportAnchorY = r.get("viewportanchorY", 100), n.scroll = r.get("scroll", ""), e.onregion && e.onregion(n), e.regionList.push({
                                                id: r.get("id"),
                                                region: n
                                            })
                                        }
                                    }(r)
                            }
                        }), /:/)
                    }
                    t && (e.buffer += e.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        var i;
                        if ("INITIAL" === e.state) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            var f = (i = r()).match(/^WEBVTT([ \t].*)?$/);
                            if (!f || !f[0]) throw new o(o.Errors.BadSignature);
                            e.state = "HEADER"
                        }
                        for (var l = !1; e.buffer;) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            switch (l ? l = !1 : i = r(), e.state) {
                                case "HEADER":
                                    /:/.test(i) ? n(i) : i || (e.state = "ID");
                                    continue;
                                case "NOTE":
                                    i || (e.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(i)) {
                                        e.state = "NOTE";
                                        break
                                    }
                                    if (!i) continue;
                                    e.cue = new(e.vttjs.VTTCue || e.window.VTTCue)(0, 0, "");
                                    try {
                                        e.cue.align = "center"
                                    } catch (h) {
                                        e.cue.align = "middle"
                                    }
                                    if (e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                        e.cue.id = i;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        c(i, e.cue, e.regionList)
                                    } catch (h) {
                                        e.reportOrThrowError(h), e.cue = null, e.state = "BADCUE";
                                        continue
                                    }
                                    e.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var p = -1 !== i.indexOf("--\x3e");
                                    if (!i || p && (l = !0)) {
                                        e.oncue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                        continue
                                    }
                                    e.cue.text && (e.cue.text += "\n"), e.cue.text += i.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                                    continue;
                                case "BADCUE":
                                    i || (e.state = "ID");
                                    continue
                            }
                        }
                    } catch (h) {
                        e.reportOrThrowError(h), "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    var t = this;
                    try {
                        if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new o(o.Errors.BadSignature)
                    } catch (e) {
                        t.reportOrThrowError(e)
                    }
                    return t.onflush && t.onflush(), this
                }
            }, t.exports = S
        },
        22230: function(t) {
            var e = {
                    "": 1,
                    lr: 1,
                    rl: 1
                },
                r = {
                    start: 1,
                    center: 1,
                    end: 1,
                    left: 1,
                    right: 1,
                    auto: 1,
                    "line-left": 1,
                    "line-right": 1
                };

            function n(t) {
                return "string" === typeof t && (!!r[t.toLowerCase()] && t.toLowerCase())
            }

            function i(t, r, i) {
                this.hasBeenReset = !1;
                var o = "",
                    a = !1,
                    s = t,
                    u = r,
                    c = i,
                    f = null,
                    l = "",
                    p = !0,
                    h = "auto",
                    d = "start",
                    g = "auto",
                    m = "auto",
                    y = 100,
                    v = "center";
                Object.defineProperties(this, {
                    id: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            o = "" + t
                        }
                    },
                    pauseOnExit: {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            a = !!t
                        }
                    },
                    startTime: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            if ("number" !== typeof t) throw new TypeError("Start time must be set to a number.");
                            s = t, this.hasBeenReset = !0
                        }
                    },
                    endTime: {
                        enumerable: !0,
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            if ("number" !== typeof t) throw new TypeError("End time must be set to a number.");
                            u = t, this.hasBeenReset = !0
                        }
                    },
                    text: {
                        enumerable: !0,
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            c = "" + t, this.hasBeenReset = !0
                        }
                    },
                    region: {
                        enumerable: !0,
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = t, this.hasBeenReset = !0
                        }
                    },
                    vertical: {
                        enumerable: !0,
                        get: function() {
                            return l
                        },
                        set: function(t) {
                            var r = function(t) {
                                return "string" === typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
                            }(t);
                            if (!1 === r) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                            l = r, this.hasBeenReset = !0
                        }
                    },
                    snapToLines: {
                        enumerable: !0,
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            p = !!t, this.hasBeenReset = !0
                        }
                    },
                    line: {
                        enumerable: !0,
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            if ("number" !== typeof t && "auto" !== t) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                            h = t, this.hasBeenReset = !0
                        }
                    },
                    lineAlign: {
                        enumerable: !0,
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            var e = n(t);
                            e ? (d = e, this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.")
                        }
                    },
                    position: {
                        enumerable: !0,
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            g = t, this.hasBeenReset = !0
                        }
                    },
                    positionAlign: {
                        enumerable: !0,
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            var e = n(t);
                            e ? (m = e, this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.")
                        }
                    },
                    size: {
                        enumerable: !0,
                        get: function() {
                            return y
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            y = t, this.hasBeenReset = !0
                        }
                    },
                    align: {
                        enumerable: !0,
                        get: function() {
                            return v
                        },
                        set: function(t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                            v = e, this.hasBeenReset = !0
                        }
                    }
                }), this.displayState = void 0
            }
            i.prototype.getCueAsHTML = function() {
                return WebVTT.convertCueToDOMTree(window, this.text)
            }, t.exports = i
        },
        13710: function(t) {
            var e = {
                "": !0,
                up: !0
            };

            function r(t) {
                return "number" === typeof t && t >= 0 && t <= 100
            }
            t.exports = function() {
                var t = 100,
                    n = 3,
                    i = 0,
                    o = 100,
                    a = 0,
                    s = 100,
                    u = "";
                Object.defineProperties(this, {
                    width: {
                        enumerable: !0,
                        get: function() {
                            return t
                        },
                        set: function(e) {
                            if (!r(e)) throw new Error("Width must be between 0 and 100.");
                            t = e
                        }
                    },
                    lines: {
                        enumerable: !0,
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            if ("number" !== typeof t) throw new TypeError("Lines must be set to a number.");
                            n = t
                        }
                    },
                    regionAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            if (!r(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                            o = t
                        }
                    },
                    regionAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return i
                        },
                        set: function(t) {
                            if (!r(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                            i = t
                        }
                    },
                    viewportAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            if (!r(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                            s = t
                        }
                    },
                    viewportAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            if (!r(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                            a = t
                        }
                    },
                    scroll: {
                        enumerable: !0,
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            var r = function(t) {
                                return "string" === typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
                            }(t);
                            !1 === r ? console.warn("Scroll: an invalid or illegal string was specified.") : u = r
                        }
                    }
                })
            }
        },
        86150: function(t, e, r) {
            function n(t) {
                this.options = t || {
                    locator: {}
                }
            }

            function i() {
                this.cdata = !1
            }

            function o(t, e) {
                e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber
            }

            function a(t) {
                if (t) return "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]"
            }

            function s(t, e, r) {
                return "string" == typeof t ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t
            }

            function u(t, e) {
                t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e)
            }
            n.prototype.parseFromString = function(t, e) {
                var r = this.options,
                    n = new c,
                    o = r.domBuilder || new i,
                    s = r.errorHandler,
                    u = r.locator,
                    f = r.xmlns || {},
                    l = {
                        lt: "<",
                        gt: ">",
                        amp: "&",
                        quot: '"',
                        apos: "'"
                    };
                return u && o.setDocumentLocator(u), n.errorHandler = function(t, e, r) {
                    if (!t) {
                        if (e instanceof i) return e;
                        t = e
                    }
                    var n = {},
                        o = t instanceof Function;

                    function s(e) {
                        var i = t[e];
                        !i && o && (i = 2 == t.length ? function(r) {
                            t(e, r)
                        } : t), n[e] = i && function(t) {
                            i("[xmldom " + e + "]\t" + t + a(r))
                        } || function() {}
                    }
                    return r = r || {}, s("warning"), s("error"), s("fatalError"), n
                }(s, o, u), n.domBuilder = r.domBuilder || o, /\/x?html?$/.test(e) && (l.nbsp = "\xa0", l.copy = "\xa9", f[""] = "http://www.w3.org/1999/xhtml"), f.xml = f.xml || "http://www.w3.org/XML/1998/namespace", t ? n.parse(t, f, l) : n.errorHandler.error("invalid doc source"), o.doc
            }, i.prototype = {
                startDocument: function() {
                    this.doc = (new f).createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
                },
                startElement: function(t, e, r, n) {
                    var i = this.doc,
                        a = i.createElementNS(t, r || e),
                        s = n.length;
                    u(this, a), this.currentElement = a, this.locator && o(this.locator, a);
                    for (var c = 0; c < s; c++) {
                        t = n.getURI(c);
                        var f = n.getValue(c),
                            l = (r = n.getQName(c), i.createAttributeNS(t, r));
                        this.locator && o(n.getLocator(c), l), l.value = l.nodeValue = f, a.setAttributeNode(l)
                    }
                },
                endElement: function(t, e, r) {
                    var n = this.currentElement;
                    n.tagName;
                    this.currentElement = n.parentNode
                },
                startPrefixMapping: function(t, e) {},
                endPrefixMapping: function(t) {},
                processingInstruction: function(t, e) {
                    var r = this.doc.createProcessingInstruction(t, e);
                    this.locator && o(this.locator, r), u(this, r)
                },
                ignorableWhitespace: function(t, e, r) {},
                characters: function(t, e, r) {
                    if (t = s.apply(this, arguments)) {
                        if (this.cdata) var n = this.doc.createCDATASection(t);
                        else n = this.doc.createTextNode(t);
                        this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(t) && this.doc.appendChild(n), this.locator && o(this.locator, n)
                    }
                },
                skippedEntity: function(t) {},
                endDocument: function() {
                    this.doc.normalize()
                },
                setDocumentLocator: function(t) {
                    (this.locator = t) && (t.lineNumber = 0)
                },
                comment: function(t, e, r) {
                    t = s.apply(this, arguments);
                    var n = this.doc.createComment(t);
                    this.locator && o(this.locator, n), u(this, n)
                },
                startCDATA: function() {
                    this.cdata = !0
                },
                endCDATA: function() {
                    this.cdata = !1
                },
                startDTD: function(t, e, r) {
                    var n = this.doc.implementation;
                    if (n && n.createDocumentType) {
                        var i = n.createDocumentType(t, e, r);
                        this.locator && o(this.locator, i), u(this, i)
                    }
                },
                warning: function(t) {
                    console.warn("[xmldom warning]\t" + t, a(this.locator))
                },
                error: function(t) {
                    console.error("[xmldom error]\t" + t, a(this.locator))
                },
                fatalError: function(t) {
                    throw console.error("[xmldom fatalError]\t" + t, a(this.locator)), t
                }
            }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (function(t) {
                i.prototype[t] = function() {
                    return null
                }
            }));
            var c = r(36147).G,
                f = r(29541).DOMImplementation;
            r(29541), e.a = n
        },
        29541: function(t, e) {
            function r(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function n(t, e) {
                var n = t.prototype;
                if (Object.create) {
                    var i = Object.create(e.prototype);
                    n.__proto__ = i
                }
                if (!(n instanceof e)) {
                    function o() {}
                    o.prototype = e.prototype, r(n, o = new o), t.prototype = n = o
                }
                n.constructor != t && ("function" != typeof t && console.error("unknow Class:" + t), n.constructor = t)
            }
            var i = {},
                o = i.ELEMENT_NODE = 1,
                a = i.ATTRIBUTE_NODE = 2,
                s = i.TEXT_NODE = 3,
                u = i.CDATA_SECTION_NODE = 4,
                c = i.ENTITY_REFERENCE_NODE = 5,
                f = i.ENTITY_NODE = 6,
                l = i.PROCESSING_INSTRUCTION_NODE = 7,
                p = i.COMMENT_NODE = 8,
                h = i.DOCUMENT_NODE = 9,
                d = i.DOCUMENT_TYPE_NODE = 10,
                g = i.DOCUMENT_FRAGMENT_NODE = 11,
                m = i.NOTATION_NODE = 12,
                y = {},
                v = {},
                b = (y.INDEX_SIZE_ERR = (v[1] = "Index size error", 1), y.DOMSTRING_SIZE_ERR = (v[2] = "DOMString size error", 2), y.HIERARCHY_REQUEST_ERR = (v[3] = "Hierarchy request error", 3)),
                w = (y.WRONG_DOCUMENT_ERR = (v[4] = "Wrong document", 4), y.INVALID_CHARACTER_ERR = (v[5] = "Invalid character", 5), y.NO_DATA_ALLOWED_ERR = (v[6] = "No data allowed", 6), y.NO_MODIFICATION_ALLOWED_ERR = (v[7] = "No modification allowed", 7), y.NOT_FOUND_ERR = (v[8] = "Not found", 8)),
                T = (y.NOT_SUPPORTED_ERR = (v[9] = "Not supported", 9), y.INUSE_ATTRIBUTE_ERR = (v[10] = "Attribute in use", 10));
            y.INVALID_STATE_ERR = (v[11] = "Invalid state", 11), y.SYNTAX_ERR = (v[12] = "Syntax error", 12), y.INVALID_MODIFICATION_ERR = (v[13] = "Invalid modification", 13), y.NAMESPACE_ERR = (v[14] = "Invalid namespace", 14), y.INVALID_ACCESS_ERR = (v[15] = "Invalid access", 15);

            function E(t, e) {
                if (e instanceof Error) var r = e;
                else r = this, Error.call(this, v[t]), this.message = v[t], Error.captureStackTrace && Error.captureStackTrace(this, E);
                return r.code = t, e && (this.message = this.message + ": " + e), r
            }

            function S() {}

            function A(t, e) {
                this._node = t, this._refresh = e, x(this)
            }

            function x(t) {
                var e = t._node._inc || t._node.ownerDocument._inc;
                if (t._inc != e) {
                    var n = t._refresh(t._node);
                    nt(t, "length", n.length), r(n, t), t._inc = e
                }
            }

            function N() {}

            function I(t, e) {
                for (var r = t.length; r--;)
                    if (t[r] === e) return r
            }

            function C(t, e, r, n) {
                if (n ? e[I(e, n)] = r : e[e.length++] = r, t) {
                    r.ownerElement = t;
                    var i = t.ownerDocument;
                    i && (n && M(i, t, n), function(t, e, r) {
                        t && t._inc++, "http://www.w3.org/2000/xmlns/" == r.namespaceURI && (e._nsMap[r.prefix ? r.localName : ""] = r.value)
                    }(i, t, r))
                }
            }

            function D(t, e, r) {
                var n = I(e, r);
                if (!(n >= 0)) throw E(w, new Error(t.tagName + "@" + r));
                for (var i = e.length - 1; n < i;) e[n] = e[++n];
                if (e.length = i, t) {
                    var o = t.ownerDocument;
                    o && (M(o, t, r), r.ownerElement = null)
                }
            }

            function O(t) {
                if (this._features = {}, t)
                    for (var e in t) this._features = t[e]
            }

            function R() {}

            function U(t) {
                return ("<" == t ? "&lt;" : ">" == t && "&gt;") || "&" == t && "&amp;" || '"' == t && "&quot;" || "&#" + t.charCodeAt() + ";"
            }

            function L(t, e) {
                if (e(t)) return !0;
                if (t = t.firstChild)
                    do {
                        if (L(t, e)) return !0
                    } while (t = t.nextSibling)
            }

            function _() {}

            function M(t, e, r, n) {
                t && t._inc++, "http://www.w3.org/2000/xmlns/" == r.namespaceURI && delete e._nsMap[r.prefix ? r.localName : ""]
            }

            function P(t, e, r) {
                if (t && t._inc) {
                    t._inc++;
                    var n = e.childNodes;
                    if (r) n[n.length++] = r;
                    else {
                        for (var i = e.firstChild, o = 0; i;) n[o++] = i, i = i.nextSibling;
                        n.length = o
                    }
                }
            }

            function k(t, e) {
                var r = e.previousSibling,
                    n = e.nextSibling;
                return r ? r.nextSibling = n : t.firstChild = n, n ? n.previousSibling = r : t.lastChild = r, P(t.ownerDocument, t), e
            }

            function B(t, e, r) {
                var n = e.parentNode;
                if (n && n.removeChild(e), e.nodeType === g) {
                    var i = e.firstChild;
                    if (null == i) return e;
                    var o = e.lastChild
                } else i = o = e;
                var a = r ? r.previousSibling : t.lastChild;
                i.previousSibling = a, o.nextSibling = r, a ? a.nextSibling = i : t.firstChild = i, null == r ? t.lastChild = o : r.previousSibling = o;
                do {
                    i.parentNode = t
                } while (i !== o && (i = i.nextSibling));
                return P(t.ownerDocument || t, t), e.nodeType == g && (e.firstChild = e.lastChild = null), e
            }

            function F() {
                this._nsMap = {}
            }

            function j() {}

            function X() {}

            function V() {}

            function z() {}

            function H() {}

            function $() {}

            function q() {}

            function Y() {}

            function G() {}

            function W() {}

            function K() {}

            function Z() {}

            function Q(t, e) {
                var r = [],
                    n = 9 == this.nodeType ? this.documentElement : this,
                    i = n.prefix,
                    o = n.namespaceURI;
                if (o && null == i && null == (i = n.lookupPrefix(o))) var a = [{
                    namespace: o,
                    prefix: null
                }];
                return tt(this, r, t, e, a), r.join("")
            }

            function J(t, e, r) {
                var n = t.prefix || "",
                    i = t.namespaceURI;
                if (!n && !i) return !1;
                if ("xml" === n && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
                for (var o = r.length; o--;) {
                    var a = r[o];
                    if (a.prefix == n) return a.namespace != i
                }
                return !0
            }

            function tt(t, e, r, n, i) {
                if (n) {
                    if (!(t = n(t))) return;
                    if ("string" == typeof t) return void e.push(t)
                }
                switch (t.nodeType) {
                    case o:
                        i || (i = []);
                        i.length;
                        var f = t.attributes,
                            m = f.length,
                            y = t.firstChild,
                            v = t.tagName;
                        r = "http://www.w3.org/1999/xhtml" === t.namespaceURI || r, e.push("<", v);
                        for (var b = 0; b < m; b++) {
                            "xmlns" == (w = f.item(b)).prefix ? i.push({
                                prefix: w.localName,
                                namespace: w.value
                            }) : "xmlns" == w.nodeName && i.push({
                                prefix: "",
                                namespace: w.value
                            })
                        }
                        for (b = 0; b < m; b++) {
                            var w;
                            if (J(w = f.item(b), 0, i)) {
                                var T = w.prefix || "",
                                    E = w.namespaceURI,
                                    S = T ? " xmlns:" + T : " xmlns";
                                e.push(S, '="', E, '"'), i.push({
                                    prefix: T,
                                    namespace: E
                                })
                            }
                            tt(w, e, r, n, i)
                        }
                        if (J(t, 0, i)) {
                            T = t.prefix || "", E = t.namespaceURI, S = T ? " xmlns:" + T : " xmlns";
                            e.push(S, '="', E, '"'), i.push({
                                prefix: T,
                                namespace: E
                            })
                        }
                        if (y || r && !/^(?:meta|link|img|br|hr|input)$/i.test(v)) {
                            if (e.push(">"), r && /^script$/i.test(v))
                                for (; y;) y.data ? e.push(y.data) : tt(y, e, r, n, i), y = y.nextSibling;
                            else
                                for (; y;) tt(y, e, r, n, i), y = y.nextSibling;
                            e.push("</", v, ">")
                        } else e.push("/>");
                        return;
                    case h:
                    case g:
                        for (y = t.firstChild; y;) tt(y, e, r, n, i), y = y.nextSibling;
                        return;
                    case a:
                        return e.push(" ", t.name, '="', t.value.replace(/[<&"]/g, U), '"');
                    case s:
                        return e.push(t.data.replace(/[<&]/g, U));
                    case u:
                        return e.push("<![CDATA[", t.data, "]]>");
                    case p:
                        return e.push("\x3c!--", t.data, "--\x3e");
                    case d:
                        var A = t.publicId,
                            x = t.systemId;
                        if (e.push("<!DOCTYPE ", t.name), A) e.push(' PUBLIC "', A), x && "." != x && e.push('" "', x), e.push('">');
                        else if (x && "." != x) e.push(' SYSTEM "', x, '">');
                        else {
                            var N = t.internalSubset;
                            N && e.push(" [", N, "]"), e.push(">")
                        }
                        return;
                    case l:
                        return e.push("<?", t.target, " ", t.data, "?>");
                    case c:
                        return e.push("&", t.nodeName, ";");
                    default:
                        e.push("??", t.nodeName)
                }
            }

            function et(t, e, r) {
                var n;
                switch (e.nodeType) {
                    case o:
                        (n = e.cloneNode(!1)).ownerDocument = t;
                    case g:
                        break;
                    case a:
                        r = !0
                }
                if (n || (n = e.cloneNode(!1)), n.ownerDocument = t, n.parentNode = null, r)
                    for (var i = e.firstChild; i;) n.appendChild(et(t, i, r)), i = i.nextSibling;
                return n
            }

            function rt(t, e, r) {
                var n = new e.constructor;
                for (var i in e) {
                    var s = e[i];
                    "object" != typeof s && s != n[i] && (n[i] = s)
                }
                switch (e.childNodes && (n.childNodes = new S), n.ownerDocument = t, n.nodeType) {
                    case o:
                        var u = e.attributes,
                            c = n.attributes = new N,
                            f = u.length;
                        c._ownerElement = n;
                        for (var l = 0; l < f; l++) n.setAttributeNode(rt(t, u.item(l), !0));
                        break;
                    case a:
                        r = !0
                }
                if (r)
                    for (var p = e.firstChild; p;) n.appendChild(rt(t, p, r)), p = p.nextSibling;
                return n
            }

            function nt(t, e, r) {
                t[e] = r
            }
            E.prototype = Error.prototype, r(y, E), S.prototype = {
                length: 0,
                item: function(t) {
                    return this[t] || null
                },
                toString: function(t, e) {
                    for (var r = [], n = 0; n < this.length; n++) tt(this[n], r, t, e);
                    return r.join("")
                }
            }, A.prototype.item = function(t) {
                return x(this), this[t]
            }, n(A, S), N.prototype = {
                length: 0,
                item: S.prototype.item,
                getNamedItem: function(t) {
                    for (var e = this.length; e--;) {
                        var r = this[e];
                        if (r.nodeName == t) return r
                    }
                },
                setNamedItem: function(t) {
                    var e = t.ownerElement;
                    if (e && e != this._ownerElement) throw new E(T);
                    var r = this.getNamedItem(t.nodeName);
                    return C(this._ownerElement, this, t, r), r
                },
                setNamedItemNS: function(t) {
                    var e, r = t.ownerElement;
                    if (r && r != this._ownerElement) throw new E(T);
                    return e = this.getNamedItemNS(t.namespaceURI, t.localName), C(this._ownerElement, this, t, e), e
                },
                removeNamedItem: function(t) {
                    var e = this.getNamedItem(t);
                    return D(this._ownerElement, this, e), e
                },
                removeNamedItemNS: function(t, e) {
                    var r = this.getNamedItemNS(t, e);
                    return D(this._ownerElement, this, r), r
                },
                getNamedItemNS: function(t, e) {
                    for (var r = this.length; r--;) {
                        var n = this[r];
                        if (n.localName == e && n.namespaceURI == t) return n
                    }
                    return null
                }
            }, O.prototype = {
                hasFeature: function(t, e) {
                    var r = this._features[t.toLowerCase()];
                    return !(!r || e && !(e in r))
                },
                createDocument: function(t, e, r) {
                    var n = new _;
                    if (n.implementation = this, n.childNodes = new S, n.doctype = r, r && n.appendChild(r), e) {
                        var i = n.createElementNS(t, e);
                        n.appendChild(i)
                    }
                    return n
                },
                createDocumentType: function(t, e, r) {
                    var n = new $;
                    return n.name = t, n.nodeName = t, n.publicId = e, n.systemId = r, n
                }
            }, R.prototype = {
                firstChild: null,
                lastChild: null,
                previousSibling: null,
                nextSibling: null,
                attributes: null,
                parentNode: null,
                childNodes: null,
                ownerDocument: null,
                nodeValue: null,
                namespaceURI: null,
                prefix: null,
                localName: null,
                insertBefore: function(t, e) {
                    return B(this, t, e)
                },
                replaceChild: function(t, e) {
                    this.insertBefore(t, e), e && this.removeChild(e)
                },
                removeChild: function(t) {
                    return k(this, t)
                },
                appendChild: function(t) {
                    return this.insertBefore(t, null)
                },
                hasChildNodes: function() {
                    return null != this.firstChild
                },
                cloneNode: function(t) {
                    return rt(this.ownerDocument || this, this, t)
                },
                normalize: function() {
                    for (var t = this.firstChild; t;) {
                        var e = t.nextSibling;
                        e && e.nodeType == s && t.nodeType == s ? (this.removeChild(e), t.appendData(e.data)) : (t.normalize(), t = e)
                    }
                },
                isSupported: function(t, e) {
                    return this.ownerDocument.implementation.hasFeature(t, e)
                },
                hasAttributes: function() {
                    return this.attributes.length > 0
                },
                lookupPrefix: function(t) {
                    for (var e = this; e;) {
                        var r = e._nsMap;
                        if (r)
                            for (var n in r)
                                if (r[n] == t) return n;
                        e = e.nodeType == a ? e.ownerDocument : e.parentNode
                    }
                    return null
                },
                lookupNamespaceURI: function(t) {
                    for (var e = this; e;) {
                        var r = e._nsMap;
                        if (r && t in r) return r[t];
                        e = e.nodeType == a ? e.ownerDocument : e.parentNode
                    }
                    return null
                },
                isDefaultNamespace: function(t) {
                    return null == this.lookupPrefix(t)
                }
            }, r(i, R), r(i, R.prototype), _.prototype = {
                nodeName: "#document",
                nodeType: h,
                doctype: null,
                documentElement: null,
                _inc: 1,
                insertBefore: function(t, e) {
                    if (t.nodeType == g) {
                        for (var r = t.firstChild; r;) {
                            var n = r.nextSibling;
                            this.insertBefore(r, e), r = n
                        }
                        return t
                    }
                    return null == this.documentElement && t.nodeType == o && (this.documentElement = t), B(this, t, e), t.ownerDocument = this, t
                },
                removeChild: function(t) {
                    return this.documentElement == t && (this.documentElement = null), k(this, t)
                },
                importNode: function(t, e) {
                    return et(this, t, e)
                },
                getElementById: function(t) {
                    var e = null;
                    return L(this.documentElement, (function(r) {
                        if (r.nodeType == o && r.getAttribute("id") == t) return e = r, !0
                    })), e
                },
                createElement: function(t) {
                    var e = new F;
                    return e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.childNodes = new S, (e.attributes = new N)._ownerElement = e, e
                },
                createDocumentFragment: function() {
                    var t = new W;
                    return t.ownerDocument = this, t.childNodes = new S, t
                },
                createTextNode: function(t) {
                    var e = new V;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createComment: function(t) {
                    var e = new z;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createCDATASection: function(t) {
                    var e = new H;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createProcessingInstruction: function(t, e) {
                    var r = new K;
                    return r.ownerDocument = this, r.tagName = r.target = t, r.nodeValue = r.data = e, r
                },
                createAttribute: function(t) {
                    var e = new j;
                    return e.ownerDocument = this, e.name = t, e.nodeName = t, e.localName = t, e.specified = !0, e
                },
                createEntityReference: function(t) {
                    var e = new G;
                    return e.ownerDocument = this, e.nodeName = t, e
                },
                createElementNS: function(t, e) {
                    var r = new F,
                        n = e.split(":"),
                        i = r.attributes = new N;
                    return r.childNodes = new S, r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = t, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, i._ownerElement = r, r
                },
                createAttributeNS: function(t, e) {
                    var r = new j,
                        n = e.split(":");
                    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = t, r.specified = !0, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, r
                }
            }, n(_, R), F.prototype = {
                nodeType: o,
                hasAttribute: function(t) {
                    return null != this.getAttributeNode(t)
                },
                getAttribute: function(t) {
                    var e = this.getAttributeNode(t);
                    return e && e.value || ""
                },
                getAttributeNode: function(t) {
                    return this.attributes.getNamedItem(t)
                },
                setAttribute: function(t, e) {
                    var r = this.ownerDocument.createAttribute(t);
                    r.value = r.nodeValue = "" + e, this.setAttributeNode(r)
                },
                removeAttribute: function(t) {
                    var e = this.getAttributeNode(t);
                    e && this.removeAttributeNode(e)
                },
                appendChild: function(t) {
                    return t.nodeType === g ? this.insertBefore(t, null) : function(t, e) {
                        var r = e.parentNode;
                        if (r) {
                            var n = t.lastChild;
                            r.removeChild(e), n = t.lastChild
                        }
                        return n = t.lastChild, e.parentNode = t, e.previousSibling = n, e.nextSibling = null, n ? n.nextSibling = e : t.firstChild = e, t.lastChild = e, P(t.ownerDocument, t, e), e
                    }(this, t)
                },
                setAttributeNode: function(t) {
                    return this.attributes.setNamedItem(t)
                },
                setAttributeNodeNS: function(t) {
                    return this.attributes.setNamedItemNS(t)
                },
                removeAttributeNode: function(t) {
                    return this.attributes.removeNamedItem(t.nodeName)
                },
                removeAttributeNS: function(t, e) {
                    var r = this.getAttributeNodeNS(t, e);
                    r && this.removeAttributeNode(r)
                },
                hasAttributeNS: function(t, e) {
                    return null != this.getAttributeNodeNS(t, e)
                },
                getAttributeNS: function(t, e) {
                    var r = this.getAttributeNodeNS(t, e);
                    return r && r.value || ""
                },
                setAttributeNS: function(t, e, r) {
                    var n = this.ownerDocument.createAttributeNS(t, e);
                    n.value = n.nodeValue = "" + r, this.setAttributeNode(n)
                },
                getAttributeNodeNS: function(t, e) {
                    return this.attributes.getNamedItemNS(t, e)
                },
                getElementsByTagName: function(t) {
                    return new A(this, (function(e) {
                        var r = [];
                        return L(e, (function(n) {
                            n === e || n.nodeType != o || "*" !== t && n.tagName != t || r.push(n)
                        })), r
                    }))
                },
                getElementsByTagNameNS: function(t, e) {
                    return new A(this, (function(r) {
                        var n = [];
                        return L(r, (function(i) {
                            i === r || i.nodeType !== o || "*" !== t && i.namespaceURI !== t || "*" !== e && i.localName != e || n.push(i)
                        })), n
                    }))
                }
            }, _.prototype.getElementsByTagName = F.prototype.getElementsByTagName, _.prototype.getElementsByTagNameNS = F.prototype.getElementsByTagNameNS, n(F, R), j.prototype.nodeType = a, n(j, R), X.prototype = {
                data: "",
                substringData: function(t, e) {
                    return this.data.substring(t, t + e)
                },
                appendData: function(t) {
                    t = this.data + t, this.nodeValue = this.data = t, this.length = t.length
                },
                insertData: function(t, e) {
                    this.replaceData(t, 0, e)
                },
                appendChild: function(t) {
                    throw new Error(v[b])
                },
                deleteData: function(t, e) {
                    this.replaceData(t, e, "")
                },
                replaceData: function(t, e, r) {
                    r = this.data.substring(0, t) + r + this.data.substring(t + e), this.nodeValue = this.data = r, this.length = r.length
                }
            }, n(X, R), V.prototype = {
                nodeName: "#text",
                nodeType: s,
                splitText: function(t) {
                    var e = this.data,
                        r = e.substring(t);
                    e = e.substring(0, t), this.data = this.nodeValue = e, this.length = e.length;
                    var n = this.ownerDocument.createTextNode(r);
                    return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n
                }
            }, n(V, X), z.prototype = {
                nodeName: "#comment",
                nodeType: p
            }, n(z, X), H.prototype = {
                nodeName: "#cdata-section",
                nodeType: u
            }, n(H, X), $.prototype.nodeType = d, n($, R), q.prototype.nodeType = m, n(q, R), Y.prototype.nodeType = f, n(Y, R), G.prototype.nodeType = c, n(G, R), W.prototype.nodeName = "#document-fragment", W.prototype.nodeType = g, n(W, R), K.prototype.nodeType = l, n(K, R), Z.prototype.serializeToString = function(t, e, r) {
                return Q.call(t, e, r)
            }, R.prototype.toString = Q;
            try {
                if (Object.defineProperty) {
                    function it(t) {
                        switch (t.nodeType) {
                            case o:
                            case g:
                                var e = [];
                                for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && e.push(it(t)), t = t.nextSibling;
                                return e.join("");
                            default:
                                return t.nodeValue
                        }
                    }
                    Object.defineProperty(A.prototype, "length", {
                        get: function() {
                            return x(this), this.$$length
                        }
                    }), Object.defineProperty(R.prototype, "textContent", {
                        get: function() {
                            return it(this)
                        },
                        set: function(t) {
                            switch (this.nodeType) {
                                case o:
                                case g:
                                    for (; this.firstChild;) this.removeChild(this.firstChild);
                                    (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                                    break;
                                default:
                                    this.data = t, this.value = t, this.nodeValue = t
                            }
                        }
                    }), nt = function(t, e, r) {
                        t["$$" + e] = r
                    }
                }
            } catch (ot) {}
            e.DOMImplementation = O
        },
        36147: function(t, e) {
            var r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                n = new RegExp("[\\-\\.0-9" + r.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
                i = new RegExp("^" + r.source + n.source + "*(?::" + r.source + n.source + "*)?$");

            function o() {}

            function a(t, e) {
                return e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber, e
            }

            function s(t, e, r, n, i, o) {
                for (var a, s = ++e, u = 0;;) {
                    var c = t.charAt(s);
                    switch (c) {
                        case "=":
                            if (1 === u) a = t.slice(e, s), u = 3;
                            else {
                                if (2 !== u) throw new Error("attribute equal must after attrName");
                                u = 3
                            }
                            break;
                        case "'":
                        case '"':
                            if (3 === u || 1 === u) {
                                if (1 === u && (o.warning('attribute value must after "="'), a = t.slice(e, s)), e = s + 1, !((s = t.indexOf(c, e)) > 0)) throw new Error("attribute value no end '" + c + "' match");
                                f = t.slice(e, s).replace(/&#?\w+;/g, i), r.add(a, f, e - 1), u = 5
                            } else {
                                if (4 != u) throw new Error('attribute value must after "="');
                                f = t.slice(e, s).replace(/&#?\w+;/g, i), r.add(a, f, e), o.warning('attribute "' + a + '" missed start quot(' + c + ")!!"), e = s + 1, u = 5
                            }
                            break;
                        case "/":
                            switch (u) {
                                case 0:
                                    r.setTagName(t.slice(e, s));
                                case 5:
                                case 6:
                                case 7:
                                    u = 7, r.closed = !0;
                                case 4:
                                case 1:
                                case 2:
                                    break;
                                default:
                                    throw new Error("attribute invalid close char('/')")
                            }
                            break;
                        case "":
                            return o.error("unexpected end of input"), 0 == u && r.setTagName(t.slice(e, s)), s;
                        case ">":
                            switch (u) {
                                case 0:
                                    r.setTagName(t.slice(e, s));
                                case 5:
                                case 6:
                                case 7:
                                    break;
                                case 4:
                                case 1:
                                    "/" === (f = t.slice(e, s)).slice(-1) && (r.closed = !0, f = f.slice(0, -1));
                                case 2:
                                    2 === u && (f = a), 4 == u ? (o.warning('attribute "' + f + '" missed quot(")!!'), r.add(a, f.replace(/&#?\w+;/g, i), e)) : ("http://www.w3.org/1999/xhtml" === n[""] && f.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + f + '" missed value!! "' + f + '" instead!!'), r.add(f, f, e));
                                    break;
                                case 3:
                                    throw new Error("attribute value missed!!")
                            }
                            return s;
                        case "\x80":
                            c = " ";
                        default:
                            if (c <= " ") switch (u) {
                                case 0:
                                    r.setTagName(t.slice(e, s)), u = 6;
                                    break;
                                case 1:
                                    a = t.slice(e, s), u = 2;
                                    break;
                                case 4:
                                    var f = t.slice(e, s).replace(/&#?\w+;/g, i);
                                    o.warning('attribute "' + f + '" missed quot(")!!'), r.add(a, f, e);
                                case 5:
                                    u = 6
                            } else switch (u) {
                                case 2:
                                    r.tagName;
                                    "http://www.w3.org/1999/xhtml" === n[""] && a.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), r.add(a, a, e), e = s, u = 1;
                                    break;
                                case 5:
                                    o.warning('attribute space is required"' + a + '"!!');
                                case 6:
                                    u = 1, e = s;
                                    break;
                                case 3:
                                    u = 4, e = s;
                                    break;
                                case 7:
                                    throw new Error("elements closed character '/' and '>' must be connected to")
                            }
                    }
                    s++
                }
            }

            function u(t, e, r) {
                for (var n = t.tagName, i = null, o = t.length; o--;) {
                    var a = t[o],
                        s = a.qName,
                        u = a.value;
                    if ((h = s.indexOf(":")) > 0) var c = a.prefix = s.slice(0, h),
                        f = s.slice(h + 1),
                        p = "xmlns" === c && f;
                    else f = s, c = null, p = "xmlns" === s && "";
                    a.localName = f, !1 !== p && (null == i && (i = {}, l(r, r = {})), r[p] = i[p] = u, a.uri = "http://www.w3.org/2000/xmlns/", e.startPrefixMapping(p, u))
                }
                for (o = t.length; o--;) {
                    (c = (a = t[o]).prefix) && ("xml" === c && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== c && (a.uri = r[c || ""]))
                }
                var h;
                (h = n.indexOf(":")) > 0 ? (c = t.prefix = n.slice(0, h), f = t.localName = n.slice(h + 1)) : (c = null, f = t.localName = n);
                var d = t.uri = r[c || ""];
                if (e.startElement(d, f, n, t), !t.closed) return t.currentNSMap = r, t.localNSMap = i, !0;
                if (e.endElement(d, f, n), i)
                    for (c in i) e.endPrefixMapping(c)
            }

            function c(t, e, r, n, i) {
                if (/^(?:script|textarea)$/i.test(r)) {
                    var o = t.indexOf("</" + r + ">", e),
                        a = t.substring(e + 1, o);
                    if (/[&<]/.test(a)) return /^script$/i.test(r) ? (i.characters(a, 0, a.length), o) : (a = a.replace(/&#?\w+;/g, n), i.characters(a, 0, a.length), o)
                }
                return e + 1
            }

            function f(t, e, r, n) {
                var i = n[r];
                return null == i && ((i = t.lastIndexOf("</" + r + ">")) < e && (i = t.lastIndexOf("</" + r)), n[r] = i), i < e
            }

            function l(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function p(t, e, r, n) {
                switch (t.charAt(e + 2)) {
                    case "-":
                        return "-" === t.charAt(e + 3) ? (i = t.indexOf("--\x3e", e + 4)) > e ? (r.comment(t, e + 4, i - e - 4), i + 3) : (n.error("Unclosed comment"), -1) : -1;
                    default:
                        if ("CDATA[" == t.substr(e + 3, 6)) {
                            var i = t.indexOf("]]>", e + 9);
                            return r.startCDATA(), r.characters(t, e + 9, i - e - 9), r.endCDATA(), i + 3
                        }
                        var o = function(t, e) {
                                var r, n = [],
                                    i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                i.lastIndex = e, i.exec(t);
                                for (; r = i.exec(t);)
                                    if (n.push(r), r[1]) return n
                            }(t, e),
                            a = o.length;
                        if (a > 1 && /!doctype/i.test(o[0][0])) {
                            var s = o[1][0],
                                u = a > 3 && /^public$/i.test(o[2][0]) && o[3][0],
                                c = a > 4 && o[4][0],
                                f = o[a - 1];
                            return r.startDTD(s, u && u.replace(/^(['"])(.*?)\1$/, "$2"), c && c.replace(/^(['"])(.*?)\1$/, "$2")), r.endDTD(), f.index + f[0].length
                        }
                }
                return -1
            }

            function h(t, e, r) {
                var n = t.indexOf("?>", e);
                if (n) {
                    var i = t.substring(e, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                    if (i) {
                        i[0].length;
                        return r.processingInstruction(i[1], i[2]), n + 2
                    }
                    return -1
                }
                return -1
            }

            function d(t) {}

            function g(t, e) {
                return t.__proto__ = e, t
            }
            o.prototype = {
                parse: function(t, e, r) {
                    var n = this.domBuilder;
                    n.startDocument(), l(e, e = {}),
                        function(t, e, r, n, i) {
                            function o(t) {
                                if (t > 65535) {
                                    var e = 55296 + ((t -= 65536) >> 10),
                                        r = 56320 + (1023 & t);
                                    return String.fromCharCode(e, r)
                                }
                                return String.fromCharCode(t)
                            }

                            function l(t) {
                                var e = t.slice(1, -1);
                                return e in r ? r[e] : "#" === e.charAt(0) ? o(parseInt(e.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + t), t)
                            }

                            function g(e) {
                                if (e > S) {
                                    var r = t.substring(S, e).replace(/&#?\w+;/g, l);
                                    w && m(S), n.characters(r, 0, e - S), S = e
                                }
                            }

                            function m(e, r) {
                                for (; e >= v && (r = b.exec(t));) y = r.index, v = y + r[0].length, w.lineNumber++;
                                w.columnNumber = e - y + 1
                            }
                            var y = 0,
                                v = 0,
                                b = /.*(?:\r\n?|\n)|.*$/g,
                                w = n.locator,
                                T = [{
                                    currentNSMap: e
                                }],
                                E = {},
                                S = 0;
                            for (;;) {
                                try {
                                    var A = t.indexOf("<", S);
                                    if (A < 0) {
                                        if (!t.substr(S).match(/^\s*$/)) {
                                            var x = n.doc,
                                                N = x.createTextNode(t.substr(S));
                                            x.appendChild(N), n.currentElement = N
                                        }
                                        return
                                    }
                                    switch (A > S && g(A), t.charAt(A + 1)) {
                                        case "/":
                                            var I = t.indexOf(">", A + 3),
                                                C = t.substring(A + 2, I),
                                                D = T.pop();
                                            I < 0 ? (C = t.substring(A + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + C + " is not complete:" + D.tagName), I = A + 1 + C.length) : C.match(/\s</) && (C = C.replace(/[\s<].*/, ""), i.error("end tag name: " + C + " maybe not complete"), I = A + 1 + C.length);
                                            var O = D.localNSMap,
                                                R = D.tagName == C;
                                            if (R || D.tagName && D.tagName.toLowerCase() == C.toLowerCase()) {
                                                if (n.endElement(D.uri, D.localName, C), O)
                                                    for (var U in O) n.endPrefixMapping(U);
                                                R || i.fatalError("end tag name: " + C + " is not match the current start tagName:" + D.tagName)
                                            } else T.push(D);
                                            I++;
                                            break;
                                        case "?":
                                            w && m(A), I = h(t, A, n);
                                            break;
                                        case "!":
                                            w && m(A), I = p(t, A, n, i);
                                            break;
                                        default:
                                            w && m(A);
                                            var L = new d,
                                                _ = T[T.length - 1].currentNSMap,
                                                M = (I = s(t, A, L, _, l, i), L.length);
                                            if (!L.closed && f(t, I, L.tagName, E) && (L.closed = !0, r.nbsp || i.warning("unclosed xml attribute")), w && M) {
                                                for (var P = a(w, {}), k = 0; k < M; k++) {
                                                    var B = L[k];
                                                    m(B.offset), B.locator = a(w, {})
                                                }
                                                n.locator = P, u(L, n, _) && T.push(L), n.locator = w
                                            } else u(L, n, _) && T.push(L);
                                            "http://www.w3.org/1999/xhtml" !== L.uri || L.closed ? I++ : I = c(t, I, L.tagName, l, n)
                                    }
                                } catch (F) {
                                    i.error("element parse error: " + F), I = -1
                                }
                                I > S ? S = I : g(Math.max(A, S) + 1)
                            }
                        }(t, e, r, n, this.errorHandler), n.endDocument()
                }
            }, d.prototype = {
                setTagName: function(t) {
                    if (!i.test(t)) throw new Error("invalid tagName:" + t);
                    this.tagName = t
                },
                add: function(t, e, r) {
                    if (!i.test(t)) throw new Error("invalid attribute:" + t);
                    this[this.length++] = {
                        qName: t,
                        value: e,
                        offset: r
                    }
                },
                length: 0,
                getLocalName: function(t) {
                    return this[t].localName
                },
                getLocator: function(t) {
                    return this[t].locator
                },
                getQName: function(t) {
                    return this[t].qName
                },
                getURI: function(t) {
                    return this[t].uri
                },
                getValue: function(t) {
                    return this[t].value
                }
            }, g({}, g.prototype) instanceof g || (g = function(t, e) {
                function r() {}
                for (e in r.prototype = e, r = new r, t) r[e] = t[e];
                return r
            }), e.G = o
        },
        10748: function(t, e, r) {
            "use strict";

            function n(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        92777: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        82262: function(t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        },
        37247: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        45959: function(t, e, r) {
            "use strict";

            function n(t, e) {
                return (n = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function i(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && n(t, e)
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        },
        63553: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = r(14027),
                i = r(10748);

            function o(t, e) {
                if (e && ("object" === n(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, i.Z)(t)
            }
        }
    }
]);