(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8552], {
        20640: function(t, e, n) {
            "use strict";
            var r = n(11742),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            t.exports = function(t, e) {
                var n, i, a, c, l, u, s = !1;
                e || (e = {}), n = e.debug || !1;
                try {
                    if (a = r(), c = document.createRange(), l = document.getSelection(), (u = document.createElement("span")).textContent = t, u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(r) {
                            if (r.stopPropagation(), e.format)
                                if (r.preventDefault(), "undefined" === typeof r.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = o[e.format] || o.default;
                                    window.clipboardData.setData(i, t)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(e.format, t);
                            e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData))
                        })), document.body.appendChild(u), c.selectNodeContents(u), l.addRange(c), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    s = !0
                } catch (f) {
                    n && console.error("unable to copy using execCommand: ", f), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), s = !0
                    } catch (f) {
                        n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), i = function(t) {
                            var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return t.replace(/#{\s*key\s*}/g, e)
                        }("message" in e ? e.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, t)
                    }
                } finally {
                    l && ("function" == typeof l.removeRange ? l.removeRange(c) : l.removeAllRanges()), u && document.body.removeChild(u), a()
                }
                return s
            }
        },
        74300: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CopyToClipboard = void 0;
            var r = i(n(67294)),
                o = i(n(20640));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function a(t) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e) {
                return !e || "object" !== a(e) && "function" !== typeof e ? d(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var w = function(t) {
                function e() {
                    var t, n;
                    u(this, e);
                    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c];
                    return h(d(n = f(this, (t = p(e)).call.apply(t, [this].concat(a)))), "onClick", (function(t) {
                        var e = n.props,
                            i = e.text,
                            a = e.onCopy,
                            c = e.children,
                            l = e.options,
                            u = r.default.Children.only(c),
                            s = (0, o.default)(i, l);
                        a && a(i, s), u && u.props && "function" === typeof u.props.onClick && u.props.onClick(t)
                    })), n
                }
                var n, i, a;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && y(t, e)
                }(e, t), n = e, (i = [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = (t.text, t.onCopy, t.options, t.children),
                            n = l(t, ["text", "onCopy", "options", "children"]),
                            o = r.default.Children.only(e);
                        return r.default.cloneElement(o, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(n, !0).forEach((function(e) {
                                    h(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({}, n, {
                            onClick: this.onClick
                        }))
                    }
                }]) && s(n.prototype, i), a && s(n, a), e
            }(r.default.PureComponent);
            e.CopyToClipboard = w, h(w, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        74855: function(t, e, n) {
            "use strict";
            var r = n(74300).CopyToClipboard;
            r.CopyToClipboard = r, t.exports = r
        },
        16573: function(t, e, n) {
            "use strict";
            var r = n(25456),
                o = n(86459);
            var i = (0, n(79075).Z)("facebook", (function(t, e) {
                var n = e.quote,
                    i = e.hashtag;
                return (0, r.Z)(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + (0, o.Z)({
                    u: t,
                    quote: n,
                    hashtag: i
                })
            }), (function(t) {
                return {
                    quote: t.quote,
                    hashtag: t.hashtag
                }
            }), {
                windowWidth: 550,
                windowHeight: 400
            });
            e.Z = i
        },
        46616: function(t, e, n) {
            "use strict";
            var r = n(25456),
                o = n(86459);
            var i = (0, n(79075).Z)("twitter", (function(t, e) {
                var n = e.title,
                    i = e.via,
                    a = e.hashtags,
                    c = void 0 === a ? [] : a,
                    l = e.related,
                    u = void 0 === l ? [] : l;
                return (0, r.Z)(t, "twitter.url"), (0, r.Z)(Array.isArray(c), "twitter.hashtags is not an array"), (0, r.Z)(Array.isArray(u), "twitter.related is not an array"), "https://twitter.com/share" + (0, o.Z)({
                    url: t,
                    text: n,
                    via: i,
                    hashtags: c.length > 0 ? c.join(",") : void 0,
                    related: u.length > 0 ? u.join(",") : void 0
                })
            }), (function(t) {
                return {
                    hashtags: t.hashtags,
                    title: t.title,
                    via: t.via,
                    related: t.related
                }
            }), {
                windowWidth: 550,
                windowHeight: 400
            });
            e.Z = i
        },
        79075: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return b
                }
            });
            var r = n(67294),
                o = n(94184),
                i = n.n(o),
                a = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                c = function() {
                    return (c = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                l = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                l(r.next(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(t) {
                            try {
                                l(r.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(a, c)
                        }
                        l((r = r.apply(t, e || [])).next())
                    }))
                },
                u = function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (c) {
                                    i = [6, c], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, c])
                        }
                    }
                },
                s = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                    }
                    return n
                },
                f = function(t) {
                    return !!t && ("object" === typeof t || "function" === typeof t) && "function" === typeof t.then
                },
                p = function(t, e) {
                    return {
                        left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - t / 2,
                        top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - e / 2
                    }
                },
                d = function(t, e) {
                    return {
                        top: (window.screen.height - e) / 2,
                        left: (window.screen.width - t) / 2
                    }
                };

            function y(t, e, n) {
                var r = e.height,
                    o = e.width,
                    i = s(e, ["height", "width"]),
                    a = c({
                        height: r,
                        width: o,
                        location: "no",
                        toolbar: "no",
                        status: "no",
                        directories: "no",
                        menubar: "no",
                        scrollbars: "yes",
                        resizable: "no",
                        centerscreen: "yes",
                        chrome: "yes"
                    }, i),
                    l = window.open(t, "", Object.keys(a).map((function(t) {
                        return t + "=" + a[t]
                    })).join(", "));
                if (n) var u = window.setInterval((function() {
                    try {
                        (null === l || l.closed) && (window.clearInterval(u), n(l))
                    } catch (t) {
                        console.error(t)
                    }
                }), 1e3);
                return l
            }
            var h = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.openShareDialog = function(t) {
                            var n = e.props,
                                r = n.onShareWindowClose,
                                o = n.windowHeight,
                                i = void 0 === o ? 400 : o,
                                a = n.windowPosition,
                                l = void 0 === a ? "windowCenter" : a,
                                u = n.windowWidth,
                                s = void 0 === u ? 550 : u;
                            y(t, c({
                                height: i,
                                width: s
                            }, "windowCenter" === l ? p(s, i) : d(s, i)), r)
                        }, e.handleClick = function(t) {
                            return l(e, void 0, void 0, (function() {
                                var e, n, r, o, i, a, c, l, s, p;
                                return u(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return e = this.props, n = e.beforeOnClick, r = e.disabled, o = e.networkLink, i = e.onClick, a = e.url, c = e.openShareDialogOnClick, l = e.opts, s = o(a, l), r ? [2] : (t.preventDefault(), n ? (p = n(), f(p) ? [4, p] : [3, 2]) : [3, 2]);
                                        case 1:
                                            u.sent(), u.label = 2;
                                        case 2:
                                            return c && this.openShareDialog(s), i && i(t, s), [2]
                                    }
                                }))
                            }))
                        }, e
                    }
                    return a(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = (t.beforeOnClick, t.children),
                            n = t.className,
                            o = t.disabled,
                            a = t.disabledStyle,
                            l = t.forwardedRef,
                            u = (t.networkLink, t.networkName),
                            f = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle),
                            p = t.style,
                            d = (t.url, t.windowHeight, t.windowPosition, t.windowWidth, s(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])),
                            y = i()("react-share__ShareButton", {
                                "react-share__ShareButton--disabled": !!o,
                                disabled: !!o
                            }, n),
                            h = c(c(f ? {
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer"
                            } : {}, p), o && a);
                        return r.createElement("button", c({}, d, {
                            "aria-label": d["aria-label"] || u,
                            className: y,
                            onClick: this.handleClick,
                            ref: l,
                            style: h
                        }), e)
                    }, e.defaultProps = {
                        disabledStyle: {
                            opacity: .6
                        },
                        openShareDialogOnClick: !0,
                        resetButtonStyle: !0
                    }, e
                }(r.Component),
                w = function() {
                    return (w = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                };
            var b = function(t, e, n, o) {
                function i(i, a) {
                    var c = n(i),
                        l = w({}, i);
                    return Object.keys(c).forEach((function(t) {
                        delete l[t]
                    })), r.createElement(h, w({}, o, l, {
                        forwardedRef: a,
                        networkName: t,
                        networkLink: e,
                        opts: n(i)
                    }))
                }
                return i.displayName = "ShareButton-" + t, (0, r.forwardRef)(i)
            }
        },
        25456: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                o = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.name = "AssertionError", n
                    }
                    return r(e, t), e
                }(Error);

            function i(t, e) {
                if (!t) throw new o(e)
            }
        },
        86459: function(t, e, n) {
            "use strict";

            function r(t) {
                var e = Object.entries(t).filter((function(t) {
                    var e = t[1];
                    return void 0 !== e && null !== e
                })).map((function(t) {
                    var e = t[0],
                        n = t[1];
                    return encodeURIComponent(e) + "=" + encodeURIComponent(String(n))
                }));
                return e.length > 0 ? "?" + e.join("&") : ""
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        11742: function(t) {
            t.exports = function() {
                var t = document.getSelection();
                if (!t.rangeCount) return function() {};
                for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++) n.push(t.getRangeAt(r));
                switch (e.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        e.blur();
                        break;
                    default:
                        e = null
                }
                return t.removeAllRanges(),
                    function() {
                        "Caret" === t.type && t.removeAllRanges(), t.rangeCount || n.forEach((function(e) {
                            t.addRange(e)
                        })), e && e.focus()
                    }
            }
        }
    }
]);