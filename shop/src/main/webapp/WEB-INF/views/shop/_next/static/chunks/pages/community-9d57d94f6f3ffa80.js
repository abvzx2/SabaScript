(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [44], {
        39330: function(t, e, n) {
            "use strict";
            n.d(e, {
                C: function() {
                    return w
                },
                P: function() {
                    return b
                }
            });
            var r = n(59499),
                i = n(27812),
                a = n(67294),
                s = n(59359),
                o = n(19231),
                c = n(87379),
                u = n(69447),
                l = n(24002),
                p = n(9261),
                d = n(31728),
                f = n(52422),
                h = n(9671),
                g = n(85893);

            function m(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var w = function(t) {
                    var e = t.position,
                        n = void 0 === e ? "home-middle" : e,
                        r = t.wrapperStyle,
                        c = (0, a.useRef)(null),
                        h = (0, a.useState)(),
                        m = h[0],
                        w = h[1],
                        b = (0, f.Z)().width,
                        O = (0, a.useContext)(p.GlobalContext).appconfs,
                        P = (0, a.useState)(),
                        _ = P[0],
                        k = P[1],
                        S = (0, a.useState)("banner_image_d"),
                        C = S[0],
                        E = S[1],
                        Z = (0, a.useState)(3e3),
                        N = Z[0],
                        z = Z[1],
                        D = (0, a.useState)(!1),
                        M = D[0],
                        I = D[1],
                        L = (0, a.useState)(1),
                        R = L[0],
                        A = L[1],
                        G = (0, a.useState)(),
                        T = G[0],
                        V = G[1],
                        H = (0, a.useState)(!0),
                        X = H[0],
                        B = H[1],
                        F = (0, o.NM)(c, {}, {
                            disconnectOnLeave: !1
                        }, {
                            inViewport: !0,
                            enterCount: 0,
                            leaveCount: 0
                        }),
                        W = F.inViewport,
                        q = F.enterCount;
                    (0, a.useEffect)((function() {
                        if (W && !(q > 1)) return I(!0),
                            function() {}
                    }), [W, q]), (0, a.useEffect)((function() {
                        return d.M.getBanners(n).then((function(t) {
                                w(t)
                            })).catch((function(t) {
                                console.log(t.message)
                            })),
                            function() {
                                return w(void 0)
                            }
                    }), []), (0, a.useEffect)((function() {
                        return O["banner-duration-" + n] && z(O["banner-duration-" + n].value),
                            function() {
                                return z(3e3)
                            }
                    }), [O]), (0, a.useEffect)((function() {
                        return m && m.banners && (k(m.banners), E(s.tq || b < 768 ? "banner_image_m" : "community-top" === n ? "banner_image_t" : "banner_image_d")),
                            function() {
                                return k(void 0)
                            }
                    }), [b, s.tq, m]);
                    var Y = [];
                    return m && m.banners && _ ? (0, g.jsx)(g.Fragment, {
                        children: (0, g.jsxs)(j, {
                            className: "adcampaign-wrapper ".concat(n),
                            style: v({}, r),
                            children: [(0, g.jsx)("div", {
                                ref: c,
                                style: {
                                    marginLeft: 20,
                                    marginRight: 20
                                }
                            }), M && (0, g.jsxs)(g.Fragment, {
                                children: [_.length > 1 && (0, g.jsxs)(y, {
                                    children: [(0, g.jsx)("span", {
                                        children: R
                                    }), "/", _.length, (0, g.jsx)(x, {
                                        isPlay: X,
                                        onClick: function() {
                                            B(!X), X ? null === T || void 0 === T || T.autoplay.stop() : null === T || void 0 === T || T.autoplay.start()
                                        }
                                    })]
                                }), (0, g.jsx)(u.t, {
                                    onSwiper: V,
                                    pagination: {
                                        clickable: !0
                                    },
                                    autoplay: {
                                        delay: N,
                                        disableOnInteraction: !1
                                    },
                                    loop: !0,
                                    speed: 1500,
                                    direction: "horizontal",
                                    effect: "slide",
                                    onSlideChange: function(t) {
                                        var e = t.slides[t.activeIndex].dataset.id;
                                        if (A(t.realIndex + 1), Y.includes(e)) return null;
                                        d.M.trackManually("start", e).then((function() {})).catch((function(t) {
                                            console.log(t.message)
                                        })).finally((function() {
                                            Y = [].concat((0, i.Z)(Y), [e])
                                        }))
                                    },
                                    children: _.map((function(t) {
                                        var e = t[C];
                                        return e ? (0, g.jsx)(l.o, {
                                            "data-id": t.id,
                                            children: (0, g.jsx)("a", {
                                                onClick: function() {
                                                    return function(t) {
                                                        if (!m || !m.banners || !t) return null;
                                                        d.M.trackManually("click", t)
                                                    }(t.id)
                                                },
                                                href: null === t.link ? void 0 : t.link,
                                                target: "_blank",
                                                children: (0, g.jsx)("img", {
                                                    src: e,
                                                    title: t.title,
                                                    style: {
                                                        maxWidth: "100%"
                                                    }
                                                })
                                            })
                                        }, t.id) : null
                                    }))
                                })]
                            })]
                        })
                    }) : null
                },
                y = c.ZP.div.withConfig({
                    displayName: "Adcampaigns__PageCount",
                    componentId: "sc-1fzrtxd-0"
                })(["position:absolute;", " ", " z-index:9;display:flex;justify-content:center;align-items:center;", ";", " background-color:rgb(57,57,57,0.4);color:#aaa;", ";span{color:#fff;font-weight:bold;}"], (0, h.vw)("right", 10, 20), (0, h.vw)("bottom", 10, 20), (0, h.uM)([0, 0, 0, 13]), (0, h.vw)("border-radius", 26), (0, h.vw)("font-size", 12, 15)),
                x = c.ZP.button.withConfig({
                    displayName: "Adcampaigns__SwiperControlButton",
                    componentId: "sc-1fzrtxd-1"
                })(["", ";", ";", ";", ";"], (function(t) {
                    return t.isPlay ? (0, h.Rp)("/images/banner_pause.png") : (0, h.Rp)("/images/banner_play.png")
                }), (0, h.vw)("width", 28), (0, h.vw)("height", 28), (0, h.t7)([0, 0, 0, 6])),
                b = function(t) {
                    var e = t.id,
                        n = t.title,
                        r = (0, a.useRef)(null),
                        i = (0, o.NM)(r, {}, {
                            disconnectOnLeave: !1
                        }, {
                            inViewport: !0,
                            enterCount: 0,
                            leaveCount: 0
                        }),
                        s = i.inViewport,
                        c = i.enterCount;
                    return (0, a.useEffect)((function() {
                        if (e && s && !(c > 1)) return d.M.trackManually("start", e).then((function(t) {
                                console.log("start", n, e, t)
                            })).catch((function(t) {
                                console.log(t)
                            })),
                            function() {}
                    }), [s, c]), (0, g.jsx)("div", {
                        ref: r,
                        style: {
                            marginLeft: 20,
                            marginRight: 20
                        }
                    })
                },
                j = c.ZP.div.withConfig({
                    displayName: "Adcampaigns__Wrapper",
                    componentId: "sc-1fzrtxd-2"
                })(["position:relative;text-align:center;a{display:block;}"])
        },
        85181: function(t, e, n) {
            "use strict";
            var r = n(87379),
                i = n(9671),
                a = n(85893),
                s = r.ZP.div.withConfig({
                    displayName: "StarScore__StyledStarScore",
                    componentId: "zrrn68-0"
                })(["position:relative;display:inline-block;input{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;}.off,.on{display:flex;span{display:block;&:last-child{margin-right:0;}", " ", "}}.off{right:0;span{", "}}.on{position:absolute;left:0;top:0;bottom:0;width:100%;height:100%;width:", "%;overflow:hidden;.wrap{", " display:flex;}span{", "}}"], (function(t) {
                    return t.width && (0, r.iv)(["", " ", ";"], (0, i.vw)("width", t.width[0], t.width[1]), (0, i.vw)("margin-right", t.width[0] / 5, t.width[1] / 5))
                }), (function(t) {
                    return t.height && (0, r.iv)(["", ""], (0, i.vw)("height", t.height[0], t.height[1]))
                }), (0, i.Rp)("/images/icon_star_off.png"), (function(t) {
                    return t.score && 10 * t.score
                }), (function(t) {
                    return t.width && (0, r.iv)(["", ""], (0, i.vw)("width", 5 * t.width[0] + t.width[0] / 5 * 5, 5 * t.width[1] + t.width[1] / 5 * 5))
                }), (0, i.Rp)("/images/icon_star_on.png"));
            e.Z = function(t) {
                var e = t.score,
                    n = void 0 === e ? 50 : e,
                    r = t.width,
                    i = void 0 === r ? [14, 14] : r,
                    o = t.height,
                    c = void 0 === o ? [14, 14] : o,
                    u = t.onChange,
                    l = void 0 === u ? void 0 : u;
                return (0, a.jsxs)(s, {
                    score: n,
                    width: i,
                    height: c,
                    className: "star-score",
                    children: [(0, a.jsxs)("div", {
                        className: "off",
                        children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                    }), (0, a.jsx)("div", {
                        className: "on",
                        children: (0, a.jsxs)("div", {
                            className: "wrap",
                            children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                        })
                    }), l && (0, a.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "10",
                        step: "1",
                        onChange: function(t) {
                            void 0 !== l && l(t)
                        }
                    })]
                })
            }
        },
        70805: function(t, e, n) {
            "use strict";
            var r = n(27812),
                i = n(59499),
                a = n(41664),
                s = n(67294),
                o = n(57754),
                c = n(2893),
                u = n(62820),
                l = n(70348),
                p = n(11163),
                d = n(97620),
                f = n(9261),
                h = n(85181),
                g = n(9671),
                m = n(85893);

            function v(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            e.Z = function(t) {
                var e = t.listParams,
                    n = t.isPaging,
                    i = void 0 === n || n,
                    v = (0, p.useRouter)(),
                    y = (0, s.useContext)(f.GlobalContext).isMobile,
                    x = (0, s.useState)([]),
                    b = x[0],
                    j = x[1],
                    O = (0, s.useState)(w({
                        page: 1,
                        num: 10
                    }, e)),
                    P = O[0],
                    _ = O[1],
                    k = (0, s.useState)(y ? "NEXT" : "PAGE"),
                    S = k[0],
                    C = k[1],
                    E = o.Y.useReviews("PD", P),
                    Z = E.rows,
                    N = E.total,
                    z = E.isLoading;
                (0, s.useEffect)((function() {
                    void 0 !== Z && P.page && P.num && N && (P.page > 1 && "NEXT" === S ? j([].concat((0, r.Z)(b), (0, r.Z)(Z))) : j(Z))
                }), [Z]);
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)("div", {
                        children: b.map((function(t) {
                            var e;
                            return (0, m.jsx)(l.dd, {
                                children: (0, m.jsx)(a.default, {
                                    href: "/contents/".concat(t.drama.id),
                                    children: (0, m.jsxs)(l.rf, {
                                        children: [(0, m.jsx)("img", {
                                            src: null !== (e = (0, g.L5)(t.drama.poster_image, 300)) && void 0 !== e ? e : void 0,
                                            className: "thumb"
                                        }), (0, m.jsxs)("div", {
                                            className: "review-info",
                                            children: [(0, m.jsxs)("div", {
                                                children: [(0, m.jsx)("span", {
                                                    className: "title",
                                                    children: t.drama.title
                                                }), (0, m.jsx)("span", {
                                                    className: "desc",
                                                    children: t.content
                                                })]
                                            }), (0, m.jsxs)("div", {
                                                className: "user-info",
                                                children: [(0, m.jsx)(h.Z, {
                                                    width: [10, 10],
                                                    height: [10, 10],
                                                    score: t.rating
                                                }), (0, m.jsx)("span", {
                                                    className: "user-name",
                                                    children: t.author.nickname
                                                }), (0, m.jsx)("span", {
                                                    className: "bar",
                                                    children: "|"
                                                }), (0, m.jsx)("span", {
                                                    className: "date",
                                                    children: t.created_at.split(" ")[0]
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }, t.id)
                        }))
                    }), z && (0, m.jsx)(u.g, {
                        fixed: "PAGE" === S
                    }), i && (0, m.jsx)(c.Z, {
                        total: N,
                        current: P.page,
                        num: P.num,
                        onChange: function(t, e) {
                            _(w(w({}, P), {}, {
                                page: t
                            })), C(e), "PAGE" === e && v.push((0, d.hp)({
                                page: t
                            }))
                        }
                    })]
                })
            }
        },
        16720: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n(87379),
                i = n(9671),
                a = (n(67294), n(68340)),
                s = n(64575),
                o = n(78014),
                c = n(11429),
                u = n(70805),
                l = n(39330),
                p = n(66828),
                d = n(85893);

            function f() {
                var t = (0, p.Z)().userStore;
                return (0, d.jsxs)(a.Z, {
                    headerChildren: ["logo", "search", "menu"],
                    headerTitle: "\ucee4\ubba4\ub2c8\ud2f0",
                    contentsClassName: "community",
                    children: [!t.user.activeNoAdCouponcode && (0, d.jsx)(l.C, {
                        position: "community-top"
                    }), (0, d.jsxs)(h, {
                        children: [(0, d.jsxs)("div", {
                            children: [(0, d.jsxs)(g, {
                                children: [(0, d.jsx)(o.m, {
                                    title: "\uacf5\uc9c0\uc0ac\ud56d",
                                    more: "/post/notice",
                                    bg: "transparent"
                                }), (0, d.jsx)(c.Z, {
                                    isPaging: !1,
                                    listParams: {
                                        type: "a-notice",
                                        num: 5
                                    }
                                })]
                            }), (0, d.jsxs)(g, {
                                children: [(0, d.jsx)(o.m, {
                                    title: "\uc774\ubca4\ud2b8",
                                    more: "/post/event",
                                    bg: "transparent"
                                }), (0, d.jsx)(c.Z, {
                                    isPaging: !1,
                                    listParams: {
                                        type: "a-event",
                                        num: 5
                                    }
                                })]
                            }), (0, d.jsxs)(g, {
                                children: [(0, d.jsx)(o.m, {
                                    title: "\uc790\uc720 \uac8c\uc2dc\ud310",
                                    more: "/post/board",
                                    bg: "transparent"
                                }), (0, d.jsx)(c.Z, {
                                    isPaging: !1,
                                    listParams: {
                                        type: "p-board",
                                        num: 5
                                    },
                                    columnList: ["\ubd84\ub958", "\uc81c\ubaa9", "\uc791\uc131\uc790", "\ub4f1\ub85d\uc77c"]
                                })]
                            })]
                        }), (0, d.jsx)("div", {
                            children: (0, d.jsxs)(g, {
                                children: [(0, d.jsx)(o.m, {
                                    title: "\uc2dc\uccad\uc790 \ud3c9\uc810",
                                    more: "/post/review",
                                    bg: "transparent"
                                }), (0, d.jsx)(u.Z, {
                                    listParams: {
                                        page: 1,
                                        num: 6
                                    },
                                    isPaging: !1
                                })]
                            })
                        })]
                    })]
                })
            }
            var h = r.ZP.div.withConfig({
                    displayName: "community__SectionGroup",
                    componentId: "agsvk7-0"
                })(["", "{display:flex;& > div{width:50%;&:last-child{border-left:1px solid #393939;border-right:1px solid #393939;}}}"], (0, i.mI)()),
                g = r.ZP.div.withConfig({
                    displayName: "community__Section",
                    componentId: "agsvk7-1"
                })(["display:flex;flex-direction:column;", ";position:relative;", ' &:after{position:absolute;left:0;bottom:0;right:0;display:block;content:"";', ";background-color:", ';}[class*="poststyled__PostHeaderStyled"]{', ";.search-group{display:none;}}", '{padding:30px;&:after{display:none;}[class*="poststyled__PostListHeaderStyled"]{display:none;}[class*="poststyled__PostItemStyled"]{background-color:transparent;div.item{flex-direction:column;}}[class*="poststyled__PostItemTdStyled"]{width:auto;text-align:left;.title{max-width:350px;}&.type{color:', ';font-size:12px;margin-bottom:5px;}&.date{position:absolute;right:0;top:16px;font-size:12px;}&.author{display:none;}}[class*="poststyled__PostHeaderStyled"]{display:flex;padding-top:0;padding-bottom:0;margin-bottom:15px;.titlebar{.title{font-size:15px;}}.more{span{font-size:12px;color:', ";margin-right:5px;&.icon-arrow{width:5px;height:11px;}}}}}"], (0, i.vw)("padding-bottom", 10), (function(t) {
                    return t.padding && (0, i.uM)(t.padding)
                }), (0, i.vw)("height", 10), s.r.color.borderDark, (0, i.vw)("padding-top", s.r.size.whiteSpace), (0, i.mI)(), s.r.color.main, s.r.color.main)
        },
        31728: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return r
                }
            });
            var r, i = n(50029),
                a = n(87794),
                s = n.n(a),
                o = n(9669),
                c = n.n(o),
                u = n(80129),
                l = n.n(u),
                p = n(25139);
            ! function(t) {
                function e() {
                    return (e = (0, i.Z)(s().mark((function t(e, n) {
                        var r, i;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = "/api/adcampaigns/vast?" + l().stringify({
                                        position: 0,
                                        user_id: e,
                                        episode_id: n
                                    }), t.prev = 1, t.next = 4, c().get(r);
                                case 4:
                                    return i = t.sent, t.abrupt("return", i.data);
                                case 8:
                                    throw t.prev = 8, t.t0 = t.catch(1), (0, p.E)(t.t0);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 8]
                        ])
                    })))).apply(this, arguments)
                }

                function n() {
                    return (n = (0, i.Z)(s().mark((function t(e) {
                        var n, r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = "/api/adcampaigns/banners?" + l().stringify({
                                        position: e
                                    }), t.prev = 1, t.next = 4, c().get(n);
                                case 4:
                                    return r = t.sent, t.abrupt("return", r.data);
                                case 8:
                                    throw t.prev = 8, t.t0 = t.catch(1), (0, p.E)(t.t0);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 8]
                        ])
                    })))).apply(this, arguments)
                }

                function r() {
                    return (r = (0, i.Z)(s().mark((function t(e, n) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/adcampaigns/track_manually?" + l().stringify({
                                        type: e,
                                        adcreative_id: n
                                    }));
                                case 3:
                                    return r = t.sent, t.abrupt("return", r.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, p.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                t.getVast = function(t, n) {
                    return e.apply(this, arguments)
                }, t.getBanners = function(t) {
                    return n.apply(this, arguments)
                }, t.trackManually = function(t, e) {
                    return r.apply(this, arguments)
                }
            }(r || (r = {}))
        },
        57754: function(t, e, n) {
            "use strict";
            n.d(e, {
                Y: function() {
                    return r
                }
            });
            var r, i = n(50029),
                a = n(59499),
                s = n(87794),
                o = n.n(s),
                c = n(9669),
                u = n.n(c),
                l = n(80129),
                p = n.n(l),
                d = n(45522),
                f = n(25139);

            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) {
                        (0, a.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }! function(t) {
                function e() {
                    return (e = (0, i.Z)(o().mark((function t(e, n) {
                        var r;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, u().get("/api/reviews/show?" + p().stringify({
                                        subset: e,
                                        id: n
                                    }));
                                case 3:
                                    return r = t.sent, t.abrupt("return", r.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, f.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function n() {
                    return (n = (0, i.Z)(o().mark((function t(e) {
                        var n;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, u().post("/api/reviews/save", e);
                                case 3:
                                    return n = t.sent, t.abrupt("return", n.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, f.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function r() {
                    return (r = (0, i.Z)(o().mark((function t(e) {
                        var n;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, u().get("/api/reviews/delete?" + p().stringify(e));
                                case 3:
                                    return n = t.sent, t.abrupt("return", n.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, f.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                t.useReviews = function(t, e) {
                    var n = (0, d.ZP)(["/api/reviews", p().stringify(g(g({}, e), {}, {
                            subset: t
                        }))]),
                        r = n.data,
                        i = n.error,
                        a = n.mutate;
                    return g(g({}, r), {}, {
                        isLoading: !i && !r,
                        error: i,
                        mutate: a
                    })
                }, t.show = function(t, n) {
                    return e.apply(this, arguments)
                }, t.save = function(t) {
                    return n.apply(this, arguments)
                }, t.del = function(t) {
                    return r.apply(this, arguments)
                }
            }(r || (r = {}))
        },
        52422: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(67294);

            function i() {
                var t = (0, r.useState)({
                        width: 0,
                        height: 0
                    }),
                    e = t[0],
                    n = t[1];
                return (0, r.useEffect)((function() {
                    function t() {
                        n({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    return window.addEventListener("resize", t), t(),
                        function() {
                            return window.removeEventListener("resize", t)
                        }
                }), []), e
            }
        },
        75531: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/community", function() {
                return n(16720)
            }])
        }
    },
    function(t) {
        t.O(0, [8197, 8447, 3084, 473, 3422, 9774, 2888, 179], (function() {
            return e = 75531, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);