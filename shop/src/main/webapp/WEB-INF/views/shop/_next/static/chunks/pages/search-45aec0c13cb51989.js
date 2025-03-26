(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9603], {
        18500: function(e, r, t) {
            "use strict";
            t.d(r, {
                Bg: function() {
                    return o
                }
            });
            var n = t(87379),
                i = t(9671),
                o = n.ZP.div.withConfig({
                    displayName: "Bg",
                    componentId: "tvq3c8-0"
                })(["display:block;background-repeat:no-repeat;background-position:", ";background-size:", ";", " ", " ", " ", " border-radius:", ";"], (function(e) {
                    return e.position ? e.position : "center center"
                }), (function(e) {
                    return e.size ? e.size : "cover"
                }), (function(e) {
                    return e.w && e.w
                }), (function(e) {
                    return e.h && e.h
                }), (function(e) {
                    return e.path && (0, n.iv)(["background-image:url(", ");"], e.path)
                }), (function(e) {
                    return e.ratio3x && e.path && (0, n.iv)(["", ";"], (0, i.Rp)(e.path))
                }), (function(e) {
                    return e.radius && e.radius
                }))
        },
        30887: function(e, r, t) {
            "use strict";
            t(67294);
            var n = t(87379),
                i = t(9671),
                o = t(64575),
                a = t(18500),
                c = t(85893);
            var s = n.ZP.div.withConfig({
                displayName: "EmptyData__Empty",
                componentId: "hjdby-0"
            })(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:50vh;.icon{", ";}.message{", ";line-height:1.5;color:", ";}"], (0, i.vw)("margin-bottom", 10), (0, i.vw)("font-size", 14), o.r.color.dark);
            r.Z = function(e) {
                var r = e.children;
                return (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)(s, {
                        className: "empty",
                        children: [(0, c.jsx)(a.Bg, {
                            w: (0, i.vw)("width", 49),
                            h: (0, i.vw)("height", 49),
                            path: "/images/icon_information_warning.png",
                            ratio3x: !0,
                            className: "icon"
                        }), (0, c.jsx)("div", {
                            className: "message",
                            children: r
                        })]
                    })
                })
            }
        },
        35952: function(e, r, t) {
            "use strict";
            t.d(r, {
                H: function() {
                    return l
                }
            });
            var n = t(67294),
                i = t(87379),
                o = t(9671),
                a = t(64575),
                c = t(85893),
                s = i.ZP.div.withConfig({
                    displayName: "TextBox__Textbox",
                    componentId: "sc-9zsjb2-0"
                })(["line-height:1.5;white-space:pre-line;& > div{", " &.hide{", "}}.more{text-align:right;button{font-weight:bold;color:", ";}}"], (function(e) {
                    return ("main" === e.color || "primary" === e.color || "secondary" === e.color) && (0, i.iv)(["color:", ";font-weight:bold;"], a.r.color[e.color])
                }), (function(e) {
                    return e.ellipsis > 0 && (0, o.LH)(e.ellipsis)
                }), a.r.color.main),
                l = i.ZP.p.withConfig({
                    displayName: "TextBox__Txt",
                    componentId: "sc-9zsjb2-1"
                })(["", " ", " ", " ", " ", " ", ""], (function(e) {
                    return e.size && ("xsmall" === e.size || "small" === e.size || "normal" === e.size || "large" === e.size || "xlarge" === e.size) && (0, i.iv)(["", ""], (0, o.vw)("font-size", a.r.size.font[e.size]))
                }), (function(e) {
                    return e.weight && (0, i.iv)(["font-weight:", ";"], e.weight)
                }), (function(e) {
                    return e.align && ("left" === e.align || "right" === e.align || "center" === e.align) && (0, i.iv)(["text-align:", ";"], e.align)
                }), (function(e) {
                    return e.ellipsis && (0, o.LH)(e.ellipsis)
                }), (function(e) {
                    return e.color && ("default" === e.color || "main" === e.color || "sub" === e.color || "primary" === e.color || "secondary" === e.color || "warning" === e.color) && (0, i.iv)(["color:", ";"], a.r.color[e.color])
                }), (function(e) {
                    return e.margin && (0, i.iv)(["", ";"], (0, o.t7)(e.margin))
                }));
            r.Z = function(e) {
                var r = e.children,
                    t = e.ellipsis,
                    i = void 0 === t ? 0 : t,
                    o = e.more,
                    a = e.color,
                    l = void 0 === a ? "" : a,
                    u = e.className,
                    d = void 0 === u ? "text" : u,
                    h = (0, n.useState)(!1),
                    p = h[0],
                    g = h[1];
                return (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)(s, {
                        ellipsis: i,
                        color: l,
                        className: d,
                        children: [(0, c.jsx)("div", {
                            className: p ? "show" : "hide",
                            children: r
                        }), o && (0, c.jsx)("div", {
                            className: "more",
                            children: (0, c.jsx)("button", {
                                onClick: function() {
                                    g(!p)
                                },
                                children: p ? "\uc811\uae30" : "\ub354\ubcf4\uae30"
                            })
                        })]
                    })
                })
            }
        },
        85629: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return A
                }
            });
            var n, i, o = t(60473),
                a = t(87379),
                c = t(67294),
                s = t(11163),
                l = t(30887),
                u = t(64575),
                d = t(9671),
                h = t(41664),
                p = t(37763),
                g = t.n(p),
                f = t(50029),
                m = t(59499),
                b = t(87794),
                x = t.n(b),
                w = t(9669),
                v = t.n(w),
                y = t(80129),
                j = t.n(y),
                k = t(45522),
                O = t(25139);

            function N(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function P(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? N(Object(t), !0).forEach((function(r) {
                        (0, m.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function _(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function E(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? _(Object(t), !0).forEach((function(r) {
                        (0, m.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }! function(e) {
                function r() {
                    return (r = (0, f.Z)(x().mark((function e(r) {
                        var t;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, v().get("/api/skeywords/save?" + j().stringify({
                                        keyword: r
                                    }));
                                case 3:
                                    return t = e.sent, e.abrupt("return", t.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, O.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function t() {
                    return (t = (0, f.Z)(x().mark((function e(r) {
                        var t;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, v().get("/api/skeywords/delete?" + j().stringify({
                                        id: r
                                    }));
                                case 3:
                                    return t = e.sent, e.abrupt("return", t.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, O.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function n() {
                    return (n = (0, f.Z)(x().mark((function e() {
                        var r;
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, v().get("/api/skeywords/clean");
                                case 3:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, O.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                e.useMine = function(e, r) {
                    var t = (0, k.ZP)(["/api/skeywords/mine", j().stringify(P(P({}, r), {}, {
                            subset: e
                        }))]),
                        n = t.data,
                        i = t.error,
                        o = t.mutate;
                    return P(P({}, n), {}, {
                        isLoading: !i && !n,
                        error: i,
                        mutate: o
                    })
                }, e.save = function(e) {
                    return r.apply(this, arguments)
                }, e.del = function(e) {
                    return t.apply(this, arguments)
                }, e.clean = function() {
                    return n.apply(this, arguments)
                }
            }(n || (n = {})), (i || (i = {})).useSearch = function(e) {
                var r = (0, k.ZP)(["/api/sindices/search", j().stringify({
                        keyword: e
                    })]),
                    t = r.data,
                    n = r.error,
                    i = r.mutate;
                return E(E({}, t), {}, {
                    isLoading: !n && !t,
                    error: n,
                    mutate: i
                })
            };
            var Z = t(25501),
                C = t(66828),
                S = t(85893),
                D = function(e) {
                    var r = e.view,
                        t = e.keyword,
                        n = i.useSearch(t),
                        o = n.actors,
                        a = n.dramas,
                        c = n.producers,
                        s = n.total;
                    return (0, S.jsxs)(S.Fragment, {
                        children: ["RESULT" === r && (0, S.jsx)(S.Fragment, {
                            children: s && s > 0 ? (0, S.jsxs)(I, {
                                children: [(0, S.jsxs)("div", {
                                    className: "result",
                                    children: [(0, S.jsxs)("span", {
                                        children: ["`", t, "`"]
                                    }), "\uc5d0 \ub300\ud55c \uac80\uc0c9\uacb0\uacfc\uac00 \xa0", (0, S.jsxs)("span", {
                                        children: [s, "\uac74"]
                                    }), " \uc788\uc2b5\ub2c8\ub2e4"]
                                }), a && a.length > 0 && (0, S.jsxs)(T, {
                                    children: [(0, S.jsx)("h2", {
                                        children: "\ucf58\ud150\uce20"
                                    }), (0, S.jsx)("div", {
                                        className: "video-list-wrapper",
                                        children: (0, S.jsx)(Z.Z, {
                                            rows: a
                                        })
                                    })]
                                }), o && o.length > 0 && (0, S.jsxs)(T, {
                                    children: [(0, S.jsx)("h2", {
                                        children: "\ubc30\uc6b0"
                                    }), (0, S.jsx)("ul", {
                                        className: "list",
                                        children: o.map((function(e) {
                                            return (0, S.jsx)("li", {
                                                children: (0, S.jsx)(h.default, {
                                                    href: "/search?word=\ubc30\uc6b0:".concat(e.name),
                                                    replace: !0,
                                                    children: (0, S.jsx)("a", {
                                                        children: e.name
                                                    })
                                                })
                                            }, e.id)
                                        }))
                                    })]
                                }), c && c.length > 0 && (0, S.jsxs)(T, {
                                    children: [(0, S.jsx)("h2", {
                                        children: "\uac10\ub3c5"
                                    }), (0, S.jsx)("ul", {
                                        className: "list",
                                        children: c.map((function(e) {
                                            return (0, S.jsx)("li", {
                                                children: (0, S.jsx)(h.default, {
                                                    href: "/search?word=\uac10\ub3c5:".concat(e.name),
                                                    replace: !0,
                                                    children: (0, S.jsx)("a", {
                                                        children: e.name
                                                    })
                                                })
                                            }, e.id)
                                        }))
                                    })]
                                })]
                            }) : (0, S.jsx)(S.Fragment, {
                                children: (0, S.jsxs)(l.Z, {
                                    children: [(0, S.jsxs)("strong", {
                                        className: "primary",
                                        children: ["'", t, "'"]
                                    }), "\uc5d0 \ub300\ud55c \uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc5b4\uc694.", (0, S.jsx)("br", {})]
                                })
                            })
                        }), "SEARCHING" === r && (0, S.jsx)(F, {
                            children: (0, S.jsx)(T, {
                                children: (0, S.jsxs)("ul", {
                                    children: [a && a.map((function(e) {
                                        return (0, S.jsx)("li", {
                                            children: (0, S.jsx)(h.default, {
                                                href: "/search?word=".concat(e.title),
                                                replace: !0,
                                                children: (0, S.jsxs)("a", {
                                                    children: [(0, S.jsx)("span", {
                                                        className: "category",
                                                        children: "[\ucf58\ud150\uce20]"
                                                    }), (0, S.jsx)(g(), {
                                                        highlightClassName: "highlight",
                                                        searchWords: [t],
                                                        autoEscape: !0,
                                                        textToHighlight: e.title
                                                    })]
                                                })
                                            })
                                        }, e.id)
                                    })), o && o.map((function(e) {
                                        return (0, S.jsx)("li", {
                                            children: (0, S.jsx)(h.default, {
                                                href: "/search?word=\ubc30\uc6b0:".concat(e.name),
                                                replace: !0,
                                                children: (0, S.jsxs)("a", {
                                                    children: [(0, S.jsx)("span", {
                                                        className: "category",
                                                        children: "[\ubc30\uc6b0]"
                                                    }), (0, S.jsx)(g(), {
                                                        highlightClassName: "highlight",
                                                        searchWords: [t],
                                                        autoEscape: !0,
                                                        textToHighlight: e.name
                                                    })]
                                                })
                                            })
                                        }, e.id)
                                    })), c && c.map((function(e) {
                                        return (0, S.jsx)("li", {
                                            children: (0, S.jsx)(h.default, {
                                                href: "/search?word=\uac10\ub3c5:".concat(e.name),
                                                replace: !0,
                                                children: (0, S.jsxs)("a", {
                                                    children: [(0, S.jsx)("span", {
                                                        className: "category",
                                                        children: "[\uac10\ub3c5]"
                                                    }), (0, S.jsx)(g(), {
                                                        highlightClassName: "highlight",
                                                        searchWords: [t],
                                                        autoEscape: !0,
                                                        textToHighlight: e.name
                                                    })]
                                                })
                                            })
                                        }, e.id)
                                    }))]
                                })
                            })
                        })]
                    })
                },
                z = function() {
                    var e = n.useMine("PL", {}),
                        r = e.rows,
                        t = e.mutate;
                    return (0, S.jsx)(F, {
                        children: r && r.length > 0 ? (0, S.jsx)(S.Fragment, {
                            children: (0, S.jsxs)(T, {
                                children: [(0, S.jsx)("h2", {
                                    children: "\ucd5c\uadfc \uac80\uc0c9\uc5b4"
                                }), (0, S.jsx)("ul", {
                                    children: r.map((function(e) {
                                        return (0, S.jsxs)("li", {
                                            children: [(0, S.jsx)(h.default, {
                                                href: "/search?word=".concat(e.keyword),
                                                replace: !0,
                                                children: (0, S.jsx)("a", {
                                                    children: e.keyword
                                                })
                                            }), (0, S.jsx)("button", {
                                                type: "button",
                                                className: "remove",
                                                onClick: function() {
                                                    return r = e.id, void n.del(r).then((function() {
                                                        t()
                                                    })).catch((function(e) {
                                                        alert(e.message)
                                                    }));
                                                    var r
                                                },
                                                children: "\uc0ad\uc81c"
                                            })]
                                        }, e.id)
                                    }))
                                }), (0, S.jsx)("div", {
                                    className: "remove-list",
                                    children: (0, S.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            n.clean().then((function() {
                                                t()
                                            })).catch((function(e) {
                                                alert(e.message)
                                            }))
                                        },
                                        children: "\uc804\uccb4 \ub0b4\uc5ed \uc0ad\uc81c"
                                    })
                                })]
                            })
                        }) : (0, S.jsx)(l.Z, {
                            children: "\ucd5c\uadfc \uac80\uc0c9\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"
                        })
                    })
                },
                R = a.ZP.div.withConfig({
                    displayName: "search__SearchWrapper",
                    componentId: "df4i5y-0"
                })(["min-height:100vh;.empty{text-align:center;.primary{font-weight:bold;color:", ";}}", "{position:relative;min-height:60vh;&.search{background-color:#0b0b0b;}&.SEARCHING,&.READY{background-color:#0b0b0b;}}"], u.r.color.primary, (0, d.mI)()),
                I = a.ZP.div.withConfig({
                    displayName: "search__SearchResultWrapper",
                    componentId: "df4i5y-1"
                })(["max-width:", "px;margin:0 auto;.result{font-weight:bold;line-height:1.5;", ";", ";", ";", ";", ";span{color:", ";}}", "{.result{text-align:center;br{display:none;}}}"], u.r.size.container, (0, d.vw)("font-size", 18, 26), (0, d.vw)("padding-left", 20), (0, d.vw)("padding-right", 20), (0, d.vw)("padding-top", 25, 80), (0, d.vw)("padding-bottom", 45, 80), u.r.color.primary, (0, d.mI)()),
                T = a.ZP.div.withConfig({
                    displayName: "search__KeywordList",
                    componentId: "df4i5y-2"
                })([".video-list-wrapper{", ";}h2{", ";", ";", ";", ";background-color:", ";color:", ";}ul{li{position:relative;", ";", ";button,a{width:100%;text-align:left;display:block;border-bottom:1px solid ", ";", ";", " ", ";", ";", " .highlight{color:", ";font-weight:bold;background-color:transparent;}}.category{color:", ";", ";}.remove{position:absolute;top:50%;", ";", ";", ';transform:translateY(-50%);text-indent:-5000px;display:flex;align-items:center;justify-content:center;&:after{display:block;content:"";', ";", ";", ";}}}&.list{li{a{border-bottom:0;padding:0;}}}}.remove-list{", " display:flex;align-items:center;justify-content:center;button{display:flex;color:#575757;", ';align-items:center;&:before{display:block;content:"";', ";", ";", ";", ";}}}", "{position:relative;h2{background-color:transparent;color:#fff;font-size:24px;font-weight:bold;padding:0;margin-bottom:20px;}ul{margin-top:8px;max-height:260px;overflow-y:auto;li{align-items:center;display:flex;padding-top:6px;padding-bottom:6px;a,button{border-bottom:0;width:auto;height:auto;line-height:1.5;padding:0;}.remove{height:auto;position:static;transform:translateY(0);}}&.list{display:flex;margin-left:-10px;margin-right:-10px;li{padding:10px;a{background-color:", ";padding:12px 20px;border-radius:26px;font-size:18px;font-weight:bold;min-width:200px;text-align:center;}}}}.remove-list{position:absolute;right:0;top:12px;padding:0;button{}}}"], (0, d.vw)("padding", 20, 0), (0, d.vw)("padding-left", 20), (0, d.vw)("padding-right", 20), (0, d.vw)("padding-top", 11), (0, d.vw)("padding-bottom", 11), u.r.color.background, u.r.color.dark, (0, d.vw)("padding-left", 20, 0), (0, d.vw)("padding-right", 20, 0), u.r.color.borderDark, (0, d.vw)("height", 56), (0, d.vw)("line-height", 56), (0, d.vw)("padding-left", 10), (0, d.vw)("padding-right", 10), (0, d.LH)(1), u.r.color.primary, u.r.color.dark, (0, d.vw)("margin-right", 4), (0, d.vw)("right", 20), (0, d.vw)("height", 56), (0, d.vw)("width", 56, 40), (0, d.vw)("width", 10), (0, d.vw)("height", 10), (0, d.Rp)("/images/icon_close_small_dark.png"), (0, d.vw)("padding", 30), (0, d.vw)("font-size", 12, 14), (0, d.vw)("width", 10), (0, d.vw)("height", 11), (0, d.Rp)("/images/icon_waste.png"), (0, d.vw)("margin-right", 4), (0, d.mI)(), u.r.color.background),
                F = a.ZP.div.withConfig({
                    displayName: "search__KeywordListWrapper",
                    componentId: "df4i5y-3"
                })([".close{display:none;position:absolute;top:10px;left:100%;margin-left:10px;}", "{position:absolute;left:50%;top:120px;right:0;width:724px;transform:translateX(-50%);background-color:", ";border-radius:10px;padding:50px;h2{font-size:17px;color:", ";}.close{display:block;}.empty{min-height:20vh;}}"], (0, d.mI)(), u.r.color.background, u.r.color.default),
                H = a.ZP.div.withConfig({
                    displayName: "search__SearchFormContainer",
                    componentId: "df4i5y-4"
                })(["max-width:724px;margin:0 auto;display:flex;align-items:center;", " padding-right:0;", "{height:147px;}"], (0, d.vw)("padding", 20), (0, d.mI)()),
                L = a.ZP.div.withConfig({
                    displayName: "search__SearchForm",
                    componentId: "df4i5y-5"
                })([".inputbox{flex:1;background-color:", ";position:relative;display:flex;flex-direction:row;", ";align-items:center;", ";", ";span{display:block;", " ", " ", ";", ";}input{", ";background-color:transparent;border:0;flex:1;outline:none;", ";color:", ";}input::-ms-clear,input::-ms-reveal{display:none;width:0;height:0;}input::-webkit-search-decoration,input::-webkit-search-cancel-button,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}.clear{display:block;", ";", ";", ";", ";}}button{", ";}", "{background-color:#0b0b0b;.inputbox{background-color:transparent;input{&:focus{border-bottom:1px solid #fff;}}.clear{height:20px;width:20px;}}button{display:none;}}"], u.r.color.background, (0, d.vw)("border-radius", 24), (0, d.vw)("padding-left", 14, 0), (0, d.vw)("padding-right", 14, 0), (0, d.vw)("width", 20, 31), (0, d.vw)("height", 20, 31), (0, d.Rp)("/images/icon_search.png"), (0, d.vw)("margin-right", 14), (0, d.vw)("height", 48), (0, d.vw)("font-size", 14, 32), u.r.color.main, (0, d.vw)("width", 10), (0, d.vw)("height", 10), (0, d.Rp)("/images/icon_close.png"), (0, d.vw)("margin-left", 10), (0, d.vw)("width", 60), (0, d.mI)()),
                A = function() {
                    var e = (0, c.useRef)(null),
                        r = (0, s.useRouter)(),
                        t = (0, C.Z)().userStore,
                        i = (0, c.useState)(""),
                        a = i[0],
                        u = i[1],
                        d = (0, c.useState)("READY"),
                        h = d[0],
                        p = d[1];
                    (0, c.useEffect)((function() {
                        "string" === typeof r.query.word && (u(r.query.word), p("RESULT"))
                    }), [r]), (0, c.useEffect)((function() {
                        e.current && e.current.focus()
                    }), []);
                    return (0, S.jsx)(o.Z, {
                        isHeader: !1,
                        title: "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544",
                        isContainerFull: !0,
                        children: (0, S.jsxs)(R, {
                            className: h,
                            children: [(0, S.jsx)(L, {
                                children: (0, S.jsxs)(H, {
                                    children: [(0, S.jsxs)("div", {
                                        className: "inputbox",
                                        children: [(0, S.jsx)("span", {}), (0, S.jsx)("input", {
                                            type: "search",
                                            value: a,
                                            onKeyUp: function(e) {
                                                return function(e) {
                                                    var i = e.currentTarget.value;
                                                    u(i), p(i ? "SEARCHING" : "READY"), "Enter" === e.key && "" !== i && (t.logged && !0 === t.logged && n.save(i).then((function() {})).catch((function(e) {
                                                        alert(e.message)
                                                    })), e.currentTarget.blur(), r.replace({
                                                        pathname: "/search",
                                                        query: {
                                                            word: i
                                                        }
                                                    }), u(i), p("RESULT"))
                                                }(e)
                                            },
                                            placeholder: "\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",
                                            onChange: function(e) {
                                                u(e.target.value)
                                            },
                                            ref: e
                                        }), (0, S.jsx)("button", {
                                            type: "button",
                                            className: "clear",
                                            onClick: function() {
                                                u("")
                                            }
                                        })]
                                    }), (0, S.jsx)("button", {
                                        onClick: function() {
                                            s.default.back()
                                        },
                                        children: "\ucde8\uc18c"
                                    })]
                                })
                            }), "READY" === h ? (0, S.jsx)(S.Fragment, {
                                children: t.logged ? (0, S.jsx)(z, {}) : (0, S.jsx)(F, {
                                    children: (0, S.jsx)(l.Z, {
                                        children: "\ucd5c\uadfc \uac80\uc0c9 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."
                                    })
                                })
                            }) : (0, S.jsx)(S.Fragment, {
                                children: a && (0, S.jsx)(D, {
                                    view: h,
                                    keyword: a
                                })
                            })]
                        })
                    })
                }
        },
        97620: function(e, r, t) {
            "use strict";
            t.d(r, {
                Kj: function() {
                    return f
                },
                bE: function() {
                    return b
                },
                Tq: function() {
                    return w
                },
                Gb: function() {
                    return v
                },
                MU: function() {
                    return y
                },
                $y: function() {
                    return j
                },
                SR: function() {
                    return k
                },
                Mi: function() {
                    return O
                },
                hp: function() {
                    return N
                },
                Y7: function() {
                    return P
                },
                DY: function() {
                    return _
                },
                nD: function() {
                    return E
                }
            });
            var n = t(59499),
                i = t(16835),
                o = t(80129),
                a = t.n(o),
                c = t(11987),
                s = t.n(c),
                l = t(22188),
                u = t(30381),
                d = t.n(u),
                h = t(54561);

            function p(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function g(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? p(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var f = function(e) {
                    var r = Array.from(h.B.QUARTER).find((function(r) {
                        return (0, i.Z)(r, 1)[0] === e
                    }));
                    return r ? r[1] : e
                },
                m = {
                    kakao: "\uce74\uce74\uc624\ud1a1",
                    facebook: "\ud398\uc774\uc2a4\ubd81",
                    naver: "\ub124\uc774\ubc84",
                    apple: "\uc560\ud50c"
                },
                b = function(e) {
                    return !!e && m[e]
                },
                x = {
                    genres: "\uc7a5\ub974",
                    tags: "\ud0dc\uadf8",
                    quarter: "\uc5f0\ub3c4",
                    active: "\ubc29\uc601",
                    broadcasters: "\uc81c\uc791\uc0ac"
                },
                w = function(e) {
                    return x[e]
                },
                v = function(e, r) {
                    return r ? d()(r).format(e) : "0000-00-00"
                },
                y = function(e) {
                    var r = d().duration(e, "seconds"),
                        t = Math.floor(r.asHours()),
                        n = r.minutes(),
                        i = r.seconds();
                    return "".concat(t > 0 ? t + ":" : "").concat(n, ":").concat(i < 10 ? "0" + i : i)
                },
                j = function(e) {
                    return null === e || d()(e) > d()()
                },
                k = function(e, r) {
                    return e.length > r ? e.substr(0, r - 2) + "..." : e
                },
                O = function(e) {
                    return e.replace(new RegExp("\n", "g"), "<br/>")
                },
                N = function(e) {
                    var r, t = s().parse(location.href),
                        i = location.href.replace(null !== (r = t.search) && void 0 !== r ? r : "", ""),
                        o = {};
                    Object.keys(e).forEach((function(r) {
                        var t = e[r];
                        o = g(g({}, o), {}, (0, n.Z)({}, r, (0, l.ZN)(t)))
                    }));
                    var c = "".concat(a().stringify(o, {
                        encode: !1,
                        arrayFormat: "brackets"
                    }));
                    return "".concat(i, "?").concat(c)
                },
                P = function(e, r) {
                    return e.slice(0, r)
                },
                _ = function(e, r) {
                    if (e && r) {
                        var t = d()(),
                            n = d()(e),
                            i = d()(r);
                        return n < t && i > t ? "\uc9c4\ud589\uc911" : i < t ? "\ub9c8\uac10" : "\uc608\uc815"
                    }
                    return null
                },
                E = function(e) {
                    console.log(e);
                    var r = new Date,
                        t = r.getFullYear(),
                        n = r.getMonth() + 1 < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1,
                        i = r.getDate() < 10 ? "0" + r.getDate() : r.getDate(),
                        o = String(n) + String(i),
                        a = Number(e.substr(0, 4)),
                        c = Number(e.substr(4, 4));
                    return Number(o) < c ? t - a - 1 : t - a
                }
        },
        60881: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/search", function() {
                return t(85629)
            }])
        }
    },
    function(e) {
        e.O(0, [8197, 7763, 473, 5501, 9774, 2888, 179], (function() {
            return r = 60881, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);