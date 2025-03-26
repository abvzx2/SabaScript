(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6054], {
        99833: function(e, t, r) {
            "use strict";
            var n = r(67294),
                a = r(87379),
                i = r(50285),
                o = r(97620),
                s = r(9671),
                c = r(64575),
                p = r(85893),
                l = a.ZP.div.withConfig({
                    displayName: "Accordion__AccordionSection",
                    componentId: "vxvumr-0"
                })(["display:flex;flex-direction:column;border-bottom:1px solid #393939;.accordion-wrapper{display:flex;flex-direction:row;justify-content:space-between;align-items:center;&.apply{.title-wrapper{.type{color:", ";}}}", ";", ";", ";", ";.title-wrapper{display:flex;flex-direction:column;.type{color:white;", ";", ";", "}.title{color:#aaaaaa;font-weight:bold;line-height:1.43;", ";", ";}}.icon-arrow{", ";", ";", ";transition:0.3s ease;}&.is-active{background-color:#252525;.icon-arrow{", ";}}}.desc-wrapper{height:0;opacity:0;overflow:hidden;transition:opacity 0.6s ease;color:#aaaaaa;font-weight:500;line-height:1.5;position:relative;", ";", ";", ';&:after{display:block;position:absolute;content:"";top:0;', " ", " height:1px;border-top:1px dashed #393939;}&.is-active{height:auto;opacity:1;background-color:#252525;", ";", ";}.date{color:#575757;display:block;", ";", ";}.reply-wrapper{display:flex;flex-direction:row;border-top:1px dashed #393939;", ";", ";.icon-reply{", ";", ";", ";", ";}.reply{display:flex;flex-direction:column;height:auto;.desc{color:#aaaaaa;font-weight:500;line-height:1.5;", ";", ";}.date{color:#575757;", ";}}}}", "{.accordion-wrapper{padding-left:0;.title-wrapper{flex:1;display:flex;flex-direction:row;.type{width:140px;text-align:center;color:", ';}.title{width:auto;}}&.is-active{background-color:transparent;}}.desc-wrapper{display:flex;padding-left:0;padding-right:0;& > div{flex:1;}&:before{display:block;content:"";width:140px;}&:after{left:0;right:0;}&.is-active{background-color:transparent;}}}'], c.r.color.primary, (0, s.vw)("padding-top", 20), (0, s.vw)("padding-bottom", 20), (0, s.vw)("padding-left", 20), (0, s.vw)("padding-right", 20), (0, s.vw)("font-size", 12, 15), (0, s.vw)("margin-bottom", 5), (function(e) {
                    return 1 == e.activeType && (0, a.iv)(["color:#ee4135;"])
                }), (0, s.vw)("font-size", 14), (0, s.vw)("width", 300), (0, s.vw)("width", 16), (0, s.vw)("height", 7), (0, s.Rp)("/images/icon_arrow_down.png"), (0, s.Rp)("/images/icon_arrow_up.png"), (0, s.vw)("padding-left", 20), (0, s.vw)("padding-right", 20), (0, s.vw)("font-size", 12, 15), (0, s.vw)("left", 20), (0, s.vw)("right", 20), (0, s.vw)("padding-top", 30), (0, s.vw)("padding-bottom", 30), (0, s.vw)("margin-top", 20), (0, s.vw)("font-size", 12), (0, s.vw)("margin-top", 20), (0, s.vw)("padding-top", 30), (0, s.vw)("width", 18), (0, s.vw)("height", 18), (0, s.vw)("margin-right", 15), (0, s.Rp)("/images/icon_re_reply.png"), (0, s.vw)("font-size", 12, 15), (0, s.vw)("margin-bottom", 20), (0, s.vw)("font-size", 12), (0, s.mI)(), c.r.color.default);
            t.Z = function(e) {
                var t = e.row,
                    r = e.activeType,
                    a = void 0 !== r && r,
                    s = e.type,
                    c = (0, n.useState)(""),
                    d = c[0],
                    u = c[1];
                return (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)(l, {
                        activeType: a,
                        children: [(0, p.jsxs)("div", {
                            className: "accordion-wrapper ".concat(d, " ").concat("QNA" === s && (null === t.answered_at ? "apply" : "answer")),
                            onClick: function() {
                                u("" == d ? "is-active" : "")
                            },
                            children: [(0, p.jsxs)("div", {
                                className: "title-wrapper",
                                children: [(0, p.jsxs)("span", {
                                    className: "type",
                                    children: ["QNA" === s && (null === t.answered_at ? "\uc811\uc218\uc644\ub8cc" : "\ub2f5\ubcc0\uc644\ub8cc"), "FAQ" === s && t.subtype && i.a.SUBTYPE.get(t.subtype)]
                                }), (0, p.jsxs)("span", {
                                    className: "title",
                                    children: ["QNA" === s && t.subtype && "[".concat(i.a.SUBTYPE.get(t.subtype), "]"), " ", t.title]
                                })]
                            }), (0, p.jsx)("span", {
                                className: "icon-arrow"
                            })]
                        }), (0, p.jsx)("div", {
                            className: "desc-wrapper ".concat(d),
                            children: (0, p.jsxs)("div", {
                                children: [(0, p.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: (0, o.Mi)(t.content)
                                    }
                                }), (0, p.jsx)("span", {
                                    className: "date",
                                    children: t.created_at
                                }), t.answer && (0, p.jsxs)("div", {
                                    className: "reply-wrapper",
                                    children: [(0, p.jsx)("span", {
                                        className: "icon-reply"
                                    }), (0, p.jsxs)("div", {
                                        className: "reply",
                                        children: [(0, p.jsx)("div", {
                                            className: "desc",
                                            dangerouslySetInnerHTML: {
                                                __html: t.answer
                                            }
                                        }), (0, p.jsx)("span", {
                                            className: "date",
                                            children: t.answered_at
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        29276: function(e, t, r) {
            "use strict";
            r(67294);
            var n = r(87379),
                a = r(9671),
                i = r(64575),
                o = r(3795),
                s = r(85893),
                c = n.ZP.div.withConfig({
                    displayName: "PageTItleBar__SPageTitleBar",
                    componentId: "sc-17qw67l-0"
                })(["", ";", ";", ";display:flex;justify-content:center;flex-direction:column;", ";h1{color:", ";font-weight:bold;", ";line-height:1.2;}.desc{color:#aaaaaa;font-weight:500;", ";", ";}"], (0, a.vw)("height", 68, 150), (0, a.vw)("padding-left", 20, 0), (0, a.vw)("padding-right", 20, 0), (function(e) {
                    return !e.transparent && (0, n.iv)(["background-color:", ";"], i.r.color.background)
                }), i.r.color.main, (0, a.vw)("font-size", 22, 32), (0, a.vw)("margin-top", 5), (0, a.vw)("font-size", 12));
            t.Z = function(e) {
                var t = e.title,
                    r = e.description,
                    n = e.transparent,
                    a = void 0 !== n && n;
                return (0, s.jsx)(c, {
                    transparent: a,
                    children: (0, s.jsxs)(o.W2, {
                        children: [(0, s.jsx)("h1", {
                            children: t
                        }), r && (0, s.jsx)("p", {
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
                    return y
                }
            });
            var n = r(67294),
                a = r(87379),
                i = r(60473),
                o = r(29276),
                s = r(9671),
                c = r(41664),
                p = r(66828),
                l = r(64575),
                d = r(85893),
                u = [{
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
                f = a.ZP.div.withConfig({
                    displayName: "CsSubTap__TapSection",
                    componentId: "sc-1e1xxh5-0"
                })(["display:flex;flex-direction:row;justify-content:space-around;align-items:center;", ";border-bottom:1px solid ", ";", "{background-color:", ";border-bottom:0;border-radius:5px;& > div{&:first-child{.tap-wrapper{border-radius:5px 0 0 5px;}}&:last-child{.tap-wrapper{border-radius:0 5px 5px 0;}}}}"], (0, s.vw)("height", 40, 56), l.r.color.borderDark, (0, s.mI)(), l.r.color.background),
                h = a.ZP.div.withConfig({
                    displayName: "CsSubTap__SubTap",
                    componentId: "sc-1e1xxh5-1"
                })(["display:flex;align-items:center;", "{flex:1;}.tap-wrapper{flex:1;", ";", ";", ";display:flex;align-items:center;justify-content:center;flex-direction:column;.tap-name{display:flex;align-items:center;flex:1;font-weight:bold;color:#575757;", ";}", "}"], (0, s.mI)(), (0, s.vw)("padding-right", 6), (0, s.vw)("padding-left", 6), (0, s.vw)("height", 40, 56), (0, s.vw)("font-size", 12, 17), (function(e) {
                    return e.type && e.currentType && e.type == e.currentType && (0, a.iv)(["border-bottom:4px solid #ee4135;.tap-name{padding-top:4px;color:white;}", "{background-color:", ";}"], (0, s.mI)(), l.r.color.primary)
                })),
                w = function(e) {
                    var t = e.currentType,
                        r = void 0 === t ? "" : t,
                        a = (0, p.Z)().userStore,
                        i = (0, n.useState)([]),
                        o = i[0],
                        s = i[1];
                    return (0, n.useEffect)((function() {
                        !1 === a.isUseMeLoading && !1 === a.logged ? s(u.filter((function(e) {
                            return !e.auth
                        }))) : s(u)
                    }), [a.isUseMeLoading, a.logged]), (0, d.jsx)(f, {
                        currentType: r,
                        children: o.map((function(e) {
                            return (0, d.jsx)(h, {
                                currentType: r,
                                type: e.type,
                                children: (0, d.jsx)(c.default, {
                                    href: e.router,
                                    children: (0, d.jsx)("a", {
                                        className: "tap-wrapper",
                                        children: (0, d.jsx)("span", {
                                            className: "tap-name",
                                            children: e.tapName
                                        })
                                    })
                                })
                            }, e.type)
                        }))
                    })
                },
                g = r(3795),
                m = (0, a.ZP)(g.W2).withConfig({
                    displayName: "Cs__CsWrapper",
                    componentId: "mfnvpl-0"
                })(["", ";"], (0, s.vw)("padding-top", 0, 50)),
                y = function(e) {
                    var t = e.children,
                        r = e.titleName,
                        n = e.titleDesc,
                        a = e.headerTitle,
                        s = e.headerChildren,
                        c = e.currentType,
                        p = void 0 === c ? "901" : c;
                    return (0, d.jsxs)(i.Z, {
                        title: "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544",
                        pageTitle: r,
                        pageDesc: n,
                        isHeaderBorder: !0,
                        headerTitle: a,
                        headerChildren: s,
                        isContainerFull: !0,
                        children: [(0, d.jsx)(o.Z, {
                            title: "\uace0\uac1d\uc13c\ud130"
                        }), (0, d.jsxs)(m, {
                            children: [(0, d.jsx)(w, {
                                currentType: p
                            }), t]
                        })]
                    })
                }
        },
        82868: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(16835),
                a = r(27812),
                i = r(59499),
                o = r(87379),
                s = r(9671),
                c = r(99833),
                p = r(67294),
                l = r(64575),
                d = r(18063),
                u = r(91557),
                f = r(50285),
                h = r(11163),
                w = r(412),
                g = r(56596),
                m = r(2893),
                y = r(11226),
                v = r(8241),
                x = r(9261),
                b = r(97620),
                j = r(62820),
                P = r(85893);

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var N = new Map([
                ["all", "\uc804\uccb4"]
            ]);
            f.a.SUBTYPE.forEach((function(e, t) {
                t.includes("faq") && N.set(t, e)
            }));
            var q = {
                    type: "a-faq",
                    page: 1,
                    num: 5
                },
                O = function(e) {
                    var t = (0, h.useRouter)(),
                        r = (0, p.useState)(),
                        n = r[0],
                        a = r[1],
                        i = (0, p.useState)(q),
                        o = i[0],
                        s = i[1],
                        c = (0, p.useState)(0),
                        l = c[0],
                        f = c[1],
                        w = u.P.usePosts("PL", {
                            type: "a-faq",
                            is_pinned: 1,
                            num: 2
                        }).rows;
                    (0, p.useEffect)((function() {
                        Object.keys(e.query).length > 0 && s(k(k({}, o), e.query)), a(e.query.subtype ? e.query.subtype : "all")
                    }), [e.query]), (0, p.useEffect)((function() {
                        0 === Object.keys(t.query).length && (s(q), f(Math.random()))
                    }), [t.query]);
                    var g = function(e) {
                        e && (s(k(k({}, q), {}, {
                            keyword: e
                        })), f(Math.random()), t.push("/post/faq?keyword=" + e))
                    };
                    return (0, P.jsxs)(d.Z, {
                        children: [(0, P.jsxs)(E, {
                            children: [(0, P.jsx)("h1", {
                                children: "\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"
                            }), (0, P.jsx)("div", {
                                className: "search-bar",
                                children: (0, P.jsxs)(C, {
                                    onSubmit: function(e) {
                                        e.preventDefault();
                                        var t = e.target.elements.keyword.value;
                                        "" !== t ? g(t) : alert("\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")
                                    },
                                    children: [(0, P.jsxs)("div", {
                                        className: "inputbar",
                                        children: [(0, P.jsx)("span", {
                                            className: "icon-search"
                                        }), (0, P.jsx)("input", {
                                            type: "search",
                                            name: "keyword",
                                            placeholder: "\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",
                                            defaultValue: o.keyword
                                        })]
                                    }), (0, P.jsx)(y.zx, {
                                        size: "large",
                                        type: "submit",
                                        radius: 30,
                                        color: "primary",
                                        className: "submit",
                                        children: "\uac80\uc0c9"
                                    })]
                                })
                            }), (0, P.jsxs)("div", {
                                className: "top-faq-wrapper",
                                children: [(0, P.jsx)("span", {
                                    className: "title",
                                    children: "\uc790\uc8fc\ud558\ub294 \uc9c8\ubb38"
                                }), (0, P.jsx)("div", {
                                    className: "top-faq",
                                    children: w && w.map((function(e) {
                                        return (0, P.jsx)("a", {
                                            className: "faq first",
                                            onClick: function() {
                                                return g(e.title)
                                            },
                                            children: e.title
                                        }, e.id)
                                    }))
                                })]
                            })]
                        }), n && (0, P.jsx)(T, {
                            listParams: o
                        }, l)]
                    })
                },
                T = function(e) {
                    var t, r = e.listParams,
                        i = (0, h.useRouter)(),
                        o = (0, p.useContext)(x.GlobalContext).isMobile,
                        s = (0, p.useState)(o ? "NEXT" : "PAGE"),
                        l = s[0],
                        d = s[1],
                        f = (0, p.useState)(r),
                        w = f[0],
                        y = f[1],
                        v = (0, p.useState)([]),
                        _ = v[0],
                        q = v[1],
                        O = u.P.usePosts("PD", w),
                        T = O.rows,
                        E = O.total,
                        C = O.isLoading;
                    (0, p.useEffect)((function() {
                        T && w.page && ("NEXT" === l && w.page > 1 ? q([].concat((0, a.Z)(_), (0, a.Z)(T))) : q(T))
                    }), [T]);
                    var I = function(e) {
                        y(k(k({}, w), {}, {
                            subtype: "all" === e ? void 0 : e,
                            page: 1
                        })), "all" === e ? i.replace("/post/faq") : i.replace({
                            query: {
                                subtype: e
                            }
                        })
                    };
                    return (0, P.jsxs)(S, {
                        children: [o ? (0, P.jsx)(g.A, {
                            onChange: I,
                            list: N,
                            current: w.subtype ? w.subtype : "all"
                        }) : (0, P.jsx)(Z, {
                            children: (0, P.jsx)("ul", {
                                children: (null !== (t = Array.from(N)) && void 0 !== t ? t : []).map((function(e) {
                                    var t = (0, n.Z)(e, 2),
                                        r = t[0],
                                        a = t[1];
                                    return (0, P.jsx)("li", {
                                        className: "all" === r && !w.subtype || w.subtype === r ? "active" : "",
                                        children: (0, P.jsx)("a", {
                                            onClick: function() {
                                                return I(r)
                                            },
                                            children: a
                                        })
                                    }, r)
                                }))
                            })
                        }), _.map((function(e) {
                            return (0, P.jsx)(c.Z, {
                                row: e,
                                type: "FAQ"
                            }, e.id)
                        })), C && (0, P.jsx)(j.g, {
                            fixed: "PAGE" === l
                        }), w.page && w.num && (0, P.jsx)(m.Z, {
                            total: E,
                            current: parseInt(w.page.toString()),
                            num: parseInt(w.num.toString()),
                            onChange: function(e, t) {
                                d(t), y(k(k({}, w), {}, {
                                    page: e
                                })), "PAGE" === t && i.push((0, b.hp)(k(k({}, w), {}, {
                                    page: e
                                })))
                            }
                        })]
                    })
                };
            O.getInitialProps = w.getDefaultInitialPropsContext;
            var E = o.ZP.div.withConfig({
                    displayName: "faq__SearchWrapper",
                    componentId: "fyskxu-0"
                })(["width:100%;display:flex;flex-direction:column;background-color:#252525;", ";h1{display:none;font-size:26px;color:", ";font-weight:bold;margin-bottom:30px;}.search-bar{", ";}.top-faq-wrapper{display:flex;flex-direction:row;width:100%;max-width:500px;margin:0 auto;.title{color:white;", ";", ";}.top-faq{display:flex;flex-direction:column;width:100%;overflow:hidden;.faq{color:#aaaaaa;text-decoration:underline;", ";", ";display:block;width:100%;&.first{", ";}}}}", "{margin-top:40px;text-align:center;padding:50px;h1{display:block;}.top-faq-wrapper{text-align:left;.title{color:", ";margin-right:0;}}}"], (0, s.vw)("padding", 20), l.r.color.main, (0, s.vw)("margin-bottom", 15, 30), (0, s.vw)("min-width", 85, 120), (0, s.vw)("font-size", 12, 18), (0, s.vw)("font-size", 12, 15), (0, s.LH)(1), (0, s.vw)("margin-bottom", 8), (0, s.mI)(), l.r.color.default),
                S = o.ZP.div.withConfig({
                    displayName: "faq__ListWrapper",
                    componentId: "fyskxu-1"
                })(["background-color:#1b1b1b;", ";"], (0, s.vw)("margin-top", 0, 25)),
                C = o.ZP.form.withConfig({
                    displayName: "faq__SearchBar",
                    componentId: "fyskxu-2"
                })(["width:100%;max-width:500px;margin:0 auto;display:flex;.inputbar{flex:1;display:flex;flex-direction:row;align-items:center;background-color:#313131;", ";", ";", ";", ";}.icon-search{", ";", ";", ";}input{border:0;background-color:transparent;flex:1 0 auto;", ";border:0;outline:0;", ";}.submit{display:none;height:50px;width:100px;margin-left:15px;}", "{.icon-search{display:none;}.submit{display:block;}}"], (0, s.vw)("height", 42, 50), (0, s.vw)("padding-left", 15), (0, s.vw)("padding-right", 15), (0, s.vw)("border-radius", 24, 4), (0, s.vw)("width", 16), (0, s.vw)("height", 16), (0, s.Rp)("/images/icon_search.png"), (0, s.vw)("margin-left", 10, 0), (0, s.vw)("font-size", 14, 15), (0, s.mI)()),
                Z = o.ZP.div.withConfig({
                    displayName: "faq__SubTypes",
                    componentId: "fyskxu-3"
                })(["border-bottom:1px solid ", ";ul{display:flex;margin-left:-15px;li{position:relative;a{font-size:18px;padding:20px 15px;display:block;}&:after{display:block;width:1px;background-color:", ';content:"";position:absolute;right:0;top:50%;height:16px;transform:translateY(-50%);}&:last-child{&:after{display:none;}}&.active{a{color:', ";font-weight:bold;}}}}"], l.r.color.borderDark, l.r.color.backgroundLight, l.r.color.main);
            t.default = (0, v.Hi)(O, "faq-page")
        },
        50285: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return n
                }
            });
            var n = {
                SEARCH_FIELD: new Map([
                    ["title", "\ud0c0\uc774\ud2c0"]
                ]),
                ORDER_BY: new Map([
                    ["id-desc", "\ucd5c\uc2e0\uc21c"]
                ]),
                TYPE: new Map([
                    ["a-notice", {
                        title: "\uacf5\uc9c0\uc0ac\ud56d",
                        description: "dorama korea \uc758 \uacf5\uc9c0\uc0ac\ud56d\uc744 \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4.",
                        swap: "notice"
                    }],
                    ["a-faq", {
                        title: "FAQ",
                        description: null,
                        swap: "faq"
                    }],
                    ["a-event", {
                        title: "\uc774\ubca4\ud2b8",
                        description: "dorama korea \uc758 \uc774\ubca4\ud2b8\ub97c \ub193\uce58\uc9c0 \ub9c8\uc138\uc694!",
                        swap: "event"
                    }],
                    ["p-board", {
                        title: "\uc790\uc720\uac8c\uc2dc\ud310",
                        description: "\uac8c\uc2dc\ud310 \uc774\uc6a9 \uc2dc \ubd88\ucf8c\uac10\uc744 \uc870\uc131\ud558\ub294 \ub313\uae00\uc744 \uc790\uc81c \ubd80\ud0c1\ub4dc\ub9ac\uba70 \uc11c\ub85c \uac04\uc758 \ubc30\ub824\uc788\ub294 \ub313\uae00 \uc18c\ud1b5\uc744 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
                        swap: "board"
                    }],
                    ["p-partnership", {
                        title: "\uad11\uace0/\uc81c\ud734\ubb38\uc758",
                        description: null,
                        swap: "partnership"
                    }],
                    ["p-qna", {
                        title: "1:1\ubb38\uc758/\uc800\uc791\uad8c\uc2e0\uace0",
                        description: null,
                        swap: "qna"
                    }],
                    ["a-agreement", {
                        title: "\uc774\uc6a9\uc57d\uad00",
                        description: null,
                        swap: "agreement"
                    }]
                ]),
                SUBTYPE: new Map([
                    ["faq-user", "\ud68c\uc6d0"],
                    ["faq-service", "\uc11c\ube44\uc2a4"],
                    ["faq-play", "\uc7ac\uc0dd"],
                    ["board-chat", "\uc7a1\ub2f4"],
                    ["board-question", "\uc9c8\ubb38"],
                    ["board-etc", "\uae30\ud0c0"],
                    ["board-episode", "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00"],
                    ["qna-purchase", "\uad6c\ub9e4/\uacb0\uc81c"],
                    ["qna-user", "\ub85c\uadf8\uc778/\ud68c\uc6d0"],
                    ["qna-service", "\uc11c\ube44\uc2a4/\ucf58\ud150\uce20"],
                    ["qna-play", "\uc7ac\uc0dd"],
                    ["agreement-service", "\uc11c\ube44\uc2a4\uc774\uc6a9\uc57d\uad00"],
                    ["agreement-privacy", "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"],
                    ["agreement-privacy-mandatory", "\uac1c\uc778\uc815\ubcf4\uc218\uc9d1-\ud544\uc218\uace0\uc9c0"]
                ]),
                STATUS: new Map([
                    [-10, "\ube44\uacf5\uac1c"],
                    [10, "\uacf5\uac1c"]
                ]),
                ANSWER_FILTER: new Map([
                    ["not-answered", "\ub2f5\ubcc0\ub300\uae30"],
                    ["answered", "\ub2f5\ubcc0\uc644\ub8cc"]
                ]),
                USER_FILTER: new Map([
                    ["mine", "\uc791\uc131\uae00(\uc804\uccb4)"],
                    ["mine-only-episode", "\uc791\uc131\uae00(\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00only)"],
                    ["mine-not-episode", "\uc791\uc131\uae00(not\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00)"]
                ]),
                REPLY_POLICY: new Map([
                    ["public", "\uacf5\uac1c"],
                    ["secret", "\ube44\ubc00\uae00"]
                ]),
                CONTENT_TYPE: new Map([
                    ["text", "\uc77c\ubc18\ud14d\uc2a4\ud2b8"],
                    ["html", "\ub9ac\uce58\ud14d\uc2a4\ud2b8"]
                ]),
                CUSTOM_FILTER: new Map([
                    ["event-active", "\uc774\ubca4\ud2b8 \ud65c\uc131\ud654"]
                ])
            }
        },
        91557: function(e, t, r) {
            "use strict";
            r.d(t, {
                P: function() {
                    return n
                }
            });
            var n, a = r(50029),
                i = r(59499),
                o = r(87794),
                s = r.n(o),
                c = r(9669),
                p = r.n(c),
                l = r(80129),
                d = r.n(l),
                u = r(45522),
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

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }! function(e) {
                function t() {
                    return (t = (0, a.Z)(s().mark((function e(t, r) {
                        var n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().get("/api/posts/show?" + d().stringify({
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
                    return (r = (0, a.Z)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().post("/api/posts/save", t);
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
                    return (n = (0, a.Z)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().get("/api/posts/delete?" + d().stringify(t));
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

                function i() {
                    return (i = (0, a.Z)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().get("/api/posts/hit?" + d().stringify({
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
                    var r = (0, u.ZP)(["/api/posts", d().stringify(w(w({}, t), {}, {
                            subset: e
                        }))]),
                        n = r.data,
                        a = r.error,
                        i = r.mutate;
                    return w(w({}, n), {}, {
                        isLoading: !a && !n,
                        error: a,
                        mutate: i
                    })
                }, e.show = function(e, r) {
                    return t.apply(this, arguments)
                }, e.save = function(e) {
                    return r.apply(this, arguments)
                }, e.del = function(e) {
                    return n.apply(this, arguments)
                }, e.hit = function(e) {
                    return i.apply(this, arguments)
                }
            }(n || (n = {}))
        },
        37976: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/post/faq", function() {
                return r(82868)
            }])
        }
    },
    function(e) {
        e.O(0, [8197, 8447, 473, 2912, 5501, 412, 9774, 2888, 179], (function() {
            return t = 37976, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);