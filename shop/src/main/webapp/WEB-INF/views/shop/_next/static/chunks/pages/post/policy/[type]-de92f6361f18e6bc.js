(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2097], {
        56596: function(e, t, r) {
            "use strict";
            r.d(t, {
                A: function() {
                    return u
                }
            });
            var n = r(16835),
                i = r(67294),
                o = r(87379),
                a = r(9671),
                c = r(64575),
                s = r(85893),
                u = function(e) {
                    var t, r = e.list,
                        o = e.current,
                        a = e.onChange,
                        c = e.className,
                        u = (0, i.useState)(),
                        l = u[0],
                        d = u[1];
                    return (0, i.useEffect)((function() {
                        d(o ? r.get(o) : "\uc120\ud0dd")
                    }), [o]), (0, s.jsxs)(p, {
                        className: "select-wrapper ".concat(c),
                        children: [(0, s.jsx)("span", {
                            className: "icon-list"
                        }), (0, s.jsxs)("div", {
                            className: "select",
                            children: [(0, s.jsx)("span", {
                                className: "subtype-name",
                                children: "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00" === l ? "\ub313\uae00" : l
                            }), (0, s.jsx)("span", {
                                className: "icon-arrow-down"
                            })]
                        }), (0, s.jsx)("select", {
                            onChange: function(e) {
                                d(r.get(e.target.value)), a && a(e.target.value)
                            },
                            value: o,
                            children: (null !== (t = Array.from(r)) && void 0 !== t ? t : []).map((function(e) {
                                var t = (0, n.Z)(e, 2),
                                    r = t[0],
                                    i = t[1];
                                return (0, s.jsx)("option", {
                                    value: r,
                                    children: "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00" === i ? "\ub313\uae00" : i
                                }, r)
                            }))
                        })]
                    })
                },
                p = o.ZP.div.withConfig({
                    displayName: "CustomForms__CustomSelectStyled",
                    componentId: "sc-1gqkd20-0"
                })(["display:flex;flex-direction:row;align-items:center;position:relative;select{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;opacity:0;}&:not(.board-sort){border-bottom:1px solid #393939;", ";", ";", ";.icon-list{", ";", ";", ";", ";display:block;}.select{display:flex;flex-direction:row;align-items:center;.subtype-name{color:white;", ";", ";}.icon-arrow-down{", ";", ";", ";}}}&.drama-sort{border:0;", ";padding-left:0;padding-right:0;.icon-list{display:none;}.select{.subtype-name{color:", ";}}}&.board-sort{position:relative;background-color:", ";", " ", ";", ";", ";.icon-list{display:block;", ";", ";", ";", ";}.select{.subtype-name{display:block;", ";}.icon-arrow-down{display:none;}}}"], (0, a.vw)("height", 51), (0, a.vw)("padding-left", 20), (0, a.vw)("padding-right", 20), (0, a.vw)("width", 13), (0, a.vw)("height", 11), (0, a.vw)("margin-right", 15), (0, a.Rp)("/images/icon_list_more.png"), (0, a.vw)("margin-right", 15), (0, a.vw)("font-size", 12), (0, a.vw)("width", 11), (0, a.vw)("height", 5), (0, a.Rp)("/images/icon_arrow_down.png"), (0, a.vw)("height", 22), c.r.color.default, c.r.color.backgroundLight, (0, a.vw)("border-radius", 2), (0, a.vw)("height", 28), (0, a.vw)("padding-left", 10), (0, a.vw)("padding-right", 10), (0, a.vw)("width", 11), (0, a.vw)("height", 11), (0, a.vw)("margin-right", 5), (0, a.Rp)("/images/icon_sort.png"), (0, a.vw)("font-size", 11))
        },
        29276: function(e, t, r) {
            "use strict";
            r(67294);
            var n = r(87379),
                i = r(9671),
                o = r(64575),
                a = r(3795),
                c = r(85893),
                s = n.ZP.div.withConfig({
                    displayName: "PageTItleBar__SPageTitleBar",
                    componentId: "sc-17qw67l-0"
                })(["", ";", ";", ";display:flex;justify-content:center;flex-direction:column;", ";h1{color:", ";font-weight:bold;", ";line-height:1.2;}.desc{color:#aaaaaa;font-weight:500;", ";", ";}"], (0, i.vw)("height", 68, 150), (0, i.vw)("padding-left", 20, 0), (0, i.vw)("padding-right", 20, 0), (function(e) {
                    return !e.transparent && (0, n.iv)(["background-color:", ";"], o.r.color.background)
                }), o.r.color.main, (0, i.vw)("font-size", 22, 32), (0, i.vw)("margin-top", 5), (0, i.vw)("font-size", 12));
            t.Z = function(e) {
                var t = e.title,
                    r = e.description,
                    n = e.transparent,
                    i = void 0 !== n && n;
                return (0, c.jsx)(s, {
                    transparent: i,
                    children: (0, c.jsxs)(a.W2, {
                        children: [(0, c.jsx)("h1", {
                            children: t
                        }), r && (0, c.jsx)("p", {
                            children: r
                        })]
                    })
                })
            }
        },
        18063: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return w
                }
            });
            var n = r(67294),
                i = r(87379),
                o = r(60473),
                a = r(29276),
                c = r(9671),
                s = r(41664),
                u = r(66828),
                p = r(64575),
                l = r(85893),
                d = [{
                    type: "901",
                    tapName: "FAQ",
                    router: "/post/faq",
                    auth: !1
                }, {
                    type: "902",
                    tapName: "1:1 \ubb38\uc758/\uc800\uc791\uad8c \uc2e0\uace0",
                    router: "/post/qna/form",
                    auth: !1
                }, {
                    type: "903",
                    tapName: "1:1 \ubb38\uc758 \ub0b4\uc5ed",
                    router: "/post/qna",
                    auth: !0
                }, {
                    type: "904",
                    tapName: "\uc774\uc6a9\uc57d\uad00",
                    router: "/post/policy/service",
                    auth: !1
                }],
                f = i.ZP.div.withConfig({
                    displayName: "CsSubTap__TapSection",
                    componentId: "sc-1e1xxh5-0"
                })(["display:flex;flex-direction:row;justify-content:space-around;align-items:center;", ";border-bottom:1px solid ", ";", "{background-color:", ";border-bottom:0;border-radius:5px;& > div{&:first-child{.tap-wrapper{border-radius:5px 0 0 5px;}}&:last-child{.tap-wrapper{border-radius:0 5px 5px 0;}}}}"], (0, c.vw)("height", 40, 56), p.r.color.borderDark, (0, c.mI)(), p.r.color.background),
                h = i.ZP.div.withConfig({
                    displayName: "CsSubTap__SubTap",
                    componentId: "sc-1e1xxh5-1"
                })(["display:flex;align-items:center;", "{flex:1;}.tap-wrapper{flex:1;", ";", ";", ";display:flex;align-items:center;justify-content:center;flex-direction:column;.tap-name{display:flex;align-items:center;flex:1;font-weight:bold;color:#575757;", ";}", "}"], (0, c.mI)(), (0, c.vw)("padding-right", 6), (0, c.vw)("padding-left", 6), (0, c.vw)("height", 40, 56), (0, c.vw)("font-size", 12, 17), (function(e) {
                    return e.type && e.currentType && e.type == e.currentType && (0, i.iv)(["border-bottom:4px solid #ee4135;.tap-name{padding-top:4px;color:white;}", "{background-color:", ";}"], (0, c.mI)(), p.r.color.primary)
                })),
                g = function(e) {
                    var t = e.currentType,
                        r = void 0 === t ? "" : t,
                        i = (0, u.Z)().userStore,
                        o = (0, n.useState)([]),
                        a = o[0],
                        c = o[1];
                    return (0, n.useEffect)((function() {
                        !1 === i.isUseMeLoading && !1 === i.logged ? c(d.filter((function(e) {
                            return !e.auth
                        }))) : c(d)
                    }), [i.isUseMeLoading, i.logged]), (0, l.jsx)(f, {
                        currentType: r,
                        children: a.map((function(e) {
                            return (0, l.jsx)(h, {
                                currentType: r,
                                type: e.type,
                                children: (0, l.jsx)(s.default, {
                                    href: e.router,
                                    children: (0, l.jsx)("a", {
                                        className: "tap-wrapper",
                                        children: (0, l.jsx)("span", {
                                            className: "tap-name",
                                            children: e.tapName
                                        })
                                    })
                                })
                            }, e.type)
                        }))
                    })
                },
                v = r(3795),
                y = (0, i.ZP)(v.W2).withConfig({
                    displayName: "Cs__CsWrapper",
                    componentId: "mfnvpl-0"
                })(["", ";"], (0, c.vw)("padding-top", 0, 50)),
                w = function(e) {
                    var t = e.children,
                        r = e.titleName,
                        n = e.titleDesc,
                        i = e.headerTitle,
                        c = e.headerChildren,
                        s = e.currentType,
                        u = void 0 === s ? "901" : s;
                    return (0, l.jsxs)(o.Z, {
                        title: "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544",
                        pageTitle: r,
                        pageDesc: n,
                        isHeaderBorder: !0,
                        headerTitle: i,
                        headerChildren: c,
                        isContainerFull: !0,
                        children: [(0, l.jsx)(a.Z, {
                            title: "\uace0\uac1d\uc13c\ud130"
                        }), (0, l.jsxs)(y, {
                            children: [(0, l.jsx)(g, {
                                currentType: u
                            }), t]
                        })]
                    })
                }
        },
        98479: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(50029),
                i = r(16835),
                o = r(87794),
                a = r.n(o),
                c = r(87379),
                s = r(9671),
                u = r(67294),
                p = r(64575),
                l = r(18063),
                d = r(11163),
                f = r(56596),
                h = r(9261),
                g = r(91557),
                v = r(97620),
                y = r(41664),
                w = r(85893),
                m = new Map([
                    ["service", "\uc11c\ube44\uc2a4 \uc774\uc6a9\uc57d\uad00"],
                    ["privacy", "\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"]
                ]),
                b = c.ZP.div.withConfig({
                    displayName: "type__ListWrapper",
                    componentId: "sc-1dafy2o-0"
                })(["", "{margin-top:20px;}"], (0, s.mI)()),
                x = c.ZP.div.withConfig({
                    displayName: "type__PolicyWrapper",
                    componentId: "sc-1dafy2o-1"
                })(["", ";", "{padding-top:50px;padding-bottom:50px;}"], (0, s.vw)("padding", p.r.size.whiteSpace, 0), (0, s.mI)()),
                j = c.ZP.div.withConfig({
                    displayName: "type__PolicyTitle",
                    componentId: "sc-1dafy2o-2"
                })(["display:flex;align-items:flex-end;", ";h1{", ";font-weight:bold;line-height:1.1;}p{", ";color:", ";", ";}"], (0, s.vw)("margin-bottom", p.r.size.whiteSpace), (0, s.vw)("font-size", 22, 28), (0, s.vw)("font-size", 12, 16), p.r.color.dark, (0, s.vw)("margin-left", 10)),
                _ = c.ZP.div.withConfig({
                    displayName: "type__PolicyContent",
                    componentId: "sc-1dafy2o-3"
                })(["border-radius:5px;background-color:", ";", " ", ";line-height:1.6;h2{", ";", ";", ";&:first-child{margin-top:0;}}ul{& > li{", ";", ";", ";& > ul{", ";& > li{}}}}"], p.r.color.background, (0, s.uM)([2 * p.r.size.whiteSpace, p.r.size.whiteSpace, 2 * p.r.size.whiteSpace, p.r.size.whiteSpace], [40, 30, 40, 30]), (0, s.vw)("font-size", 13, 15), (0, s.vw)("margin-top", 20), (0, s.vw)("margin-bottom", 5), (0, s.vw)("font-size", 14, 16), (0, s.vw)("text-indent", -13), (0, s.vw)("padding-left", 13), (0, s.vw)("margin-bottom", 5), (0, s.vw)("margin-top", 6)),
                P = function(e) {
                    var t, r = e.id,
                        n = (0, d.useRouter)(),
                        o = (0, u.useContext)(h.GlobalContext).isMobile,
                        a = g.P.usePosts("PD", {
                            type: "a-agreement",
                            subtype: "agreement-".concat(n.query.type),
                            num: 1e3,
                            page: 1,
                            orderBy: "id-desc"
                        }).rows,
                        c = function() {
                            if (a) {
                                if (r) {
                                    var e = a.find((function(e) {
                                        return e.id === r
                                    }));
                                    if (e) return e
                                }
                                return a[0]
                            }
                            return null
                        }(),
                        s = function(e) {
                            n.push("/post/policy/".concat(e))
                        };
                    return (0, w.jsx)(l.Z, {
                        currentType: "904",
                        children: (0, w.jsxs)(b, {
                            children: [o ? (0, w.jsx)(f.A, {
                                onChange: s,
                                list: m,
                                current: "string" === typeof n.query.type ? n.query.type : void 0
                            }) : (0, w.jsx)(k, {
                                children: (0, w.jsx)("ul", {
                                    children: (null !== (t = Array.from(m)) && void 0 !== t ? t : []).map((function(e) {
                                        var t = (0, i.Z)(e, 2),
                                            r = t[0],
                                            o = t[1];
                                        return (0, w.jsx)("li", {
                                            className: n.query.type === r ? "active" : "",
                                            children: (0, w.jsx)("a", {
                                                onClick: function() {
                                                    return s(r)
                                                },
                                                children: o
                                            })
                                        }, r)
                                    }))
                                })
                            }), c && (0, w.jsxs)(x, {
                                children: [(0, w.jsxs)(j, {
                                    children: [(0, w.jsx)("h1", {
                                        children: c.title
                                    }), (0, w.jsxs)("p", {
                                        children: ["\uc2dc\ud589\uc77c\uc790 : ", (0, v.Gb)("YYYY-MM-DD", c.created_at)]
                                    }), a && a.length > 0 && (0, w.jsx)("select", {
                                        style: {
                                            marginLeft: 30,
                                            backgroundColor: "transparent",
                                            padding: 4
                                        },
                                        defaultValue: c.id,
                                        onChange: function(e) {
                                            n.replace("/post/policy/privacy?id=".concat(e.target.value))
                                        },
                                        children: a.map((function(e) {
                                            return (0, w.jsxs)("option", {
                                                value: e.id,
                                                children: [e.title, " - ", (0, v.Gb)("YYYY-MM-DD", e.created_at)]
                                            }, e.id)
                                        }))
                                    })]
                                }), (0, w.jsxs)(_, {
                                    children: [(0, w.jsx)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0, v.Mi)(c.content)
                                        }
                                    }), "privacy-simple" === n.query.type && (0, w.jsx)("div", {
                                        style: {
                                            marginTop: 20,
                                            color: "white"
                                        },
                                        children: (0, w.jsx)(y.default, {
                                            href: "/post/policy/privacy",
                                            children: "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \uc804\ubb38\ubcf4\uae30"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                };
            P.getInitialProps = function() {
                var e = (0, n.Z)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((r = t.query).id) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", {});
                            case 3:
                                return e.abrupt("return", {
                                    id: Number(r.id)
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), t.default = P;
            var k = c.ZP.div.withConfig({
                displayName: "type__SubTypes",
                componentId: "sc-1dafy2o-4"
            })(["border-bottom:1px solid ", ";ul{display:flex;margin-left:-15px;li{position:relative;a{font-size:18px;padding:20px 15px;display:block;}&:after{display:block;width:1px;background-color:", ';content:"";position:absolute;right:0;top:50%;height:16px;transform:translateY(-50%);}&:last-child{&:after{display:none;}}&.active{a{color:', ";font-weight:bold;}}}}"], p.r.color.borderDark, p.r.color.backgroundLight, p.r.color.main)
        },
        91557: function(e, t, r) {
            "use strict";
            r.d(t, {
                P: function() {
                    return n
                }
            });
            var n, i = r(50029),
                o = r(59499),
                a = r(87794),
                c = r.n(a),
                s = r(9669),
                u = r.n(s),
                p = r(80129),
                l = r.n(p),
                d = r(45522),
                f = r(25139);

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }! function(e) {
                function t() {
                    return (t = (0, i.Z)(c().mark((function e(t, r) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u().get("/api/posts/show?" + l().stringify({
                                        subset: t,
                                        id: r
                                    }));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, f.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function r() {
                    return (r = (0, i.Z)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u().post("/api/posts/save", t);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, f.E)(e.t0);
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
                    return (n = (0, i.Z)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u().get("/api/posts/delete?" + l().stringify(t));
                                case 3:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, f.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function o() {
                    return (o = (0, i.Z)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, u().get("/api/posts/hit?" + l().stringify({
                                        id: t
                                    }));
                                case 3:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, f.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                e.usePosts = function(e, t) {
                    var r = (0, d.ZP)(["/api/posts", l().stringify(g(g({}, t), {}, {
                            subset: e
                        }))]),
                        n = r.data,
                        i = r.error,
                        o = r.mutate;
                    return g(g({}, n), {}, {
                        isLoading: !i && !n,
                        error: i,
                        mutate: o
                    })
                }, e.show = function(e, r) {
                    return t.apply(this, arguments)
                }, e.save = function(e) {
                    return r.apply(this, arguments)
                }, e.del = function(e) {
                    return n.apply(this, arguments)
                }, e.hit = function(e) {
                    return o.apply(this, arguments)
                }
            }(n || (n = {}))
        },
        97620: function(e, t, r) {
            "use strict";
            r.d(t, {
                Kj: function() {
                    return g
                },
                bE: function() {
                    return y
                },
                Tq: function() {
                    return m
                },
                Gb: function() {
                    return b
                },
                MU: function() {
                    return x
                },
                $y: function() {
                    return j
                },
                SR: function() {
                    return _
                },
                Mi: function() {
                    return P
                },
                hp: function() {
                    return k
                },
                Y7: function() {
                    return O
                },
                DY: function() {
                    return N
                },
                nD: function() {
                    return C
                }
            });
            var n = r(59499),
                i = r(16835),
                o = r(80129),
                a = r.n(o),
                c = r(11987),
                s = r.n(c),
                u = r(22188),
                p = r(30381),
                l = r.n(p),
                d = r(54561);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                    var t = Array.from(d.B.QUARTER).find((function(t) {
                        return (0, i.Z)(t, 1)[0] === e
                    }));
                    return t ? t[1] : e
                },
                v = {
                    kakao: "\uce74\uce74\uc624\ud1a1",
                    facebook: "\ud398\uc774\uc2a4\ubd81",
                    naver: "\ub124\uc774\ubc84",
                    apple: "\uc560\ud50c"
                },
                y = function(e) {
                    return !!e && v[e]
                },
                w = {
                    genres: "\uc7a5\ub974",
                    tags: "\ud0dc\uadf8",
                    quarter: "\uc5f0\ub3c4",
                    active: "\ubc29\uc601",
                    broadcasters: "\uc81c\uc791\uc0ac"
                },
                m = function(e) {
                    return w[e]
                },
                b = function(e, t) {
                    return t ? l()(t).format(e) : "0000-00-00"
                },
                x = function(e) {
                    var t = l().duration(e, "seconds"),
                        r = Math.floor(t.asHours()),
                        n = t.minutes(),
                        i = t.seconds();
                    return "".concat(r > 0 ? r + ":" : "").concat(n, ":").concat(i < 10 ? "0" + i : i)
                },
                j = function(e) {
                    return null === e || l()(e) > l()()
                },
                _ = function(e, t) {
                    return e.length > t ? e.substr(0, t - 2) + "..." : e
                },
                P = function(e) {
                    return e.replace(new RegExp("\n", "g"), "<br/>")
                },
                k = function(e) {
                    var t, r = s().parse(location.href),
                        i = location.href.replace(null !== (t = r.search) && void 0 !== t ? t : "", ""),
                        o = {};
                    Object.keys(e).forEach((function(t) {
                        var r = e[t];
                        o = h(h({}, o), {}, (0, n.Z)({}, t, (0, u.ZN)(r)))
                    }));
                    var c = "".concat(a().stringify(o, {
                        encode: !1,
                        arrayFormat: "brackets"
                    }));
                    return "".concat(i, "?").concat(c)
                },
                O = function(e, t) {
                    return e.slice(0, t)
                },
                N = function(e, t) {
                    if (e && t) {
                        var r = l()(),
                            n = l()(e),
                            i = l()(t);
                        return n < r && i > r ? "\uc9c4\ud589\uc911" : i < r ? "\ub9c8\uac10" : "\uc608\uc815"
                    }
                    return null
                },
                C = function(e) {
                    console.log(e);
                    var t = new Date,
                        r = t.getFullYear(),
                        n = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                        i = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                        o = String(n) + String(i),
                        a = Number(e.substr(0, 4)),
                        c = Number(e.substr(4, 4));
                    return Number(o) < c ? r - a - 1 : r - a
                }
        },
        68843: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/post/policy/[type]", function() {
                return r(98479)
            }])
        }
    },
    function(e) {
        e.O(0, [8197, 473, 9774, 2888, 179], (function() {
            return t = 68843, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);