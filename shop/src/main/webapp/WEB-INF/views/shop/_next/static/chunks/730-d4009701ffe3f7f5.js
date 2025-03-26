"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [730], {
        73130: function(t, e, i) {
            var n = i(11163),
                r = i(67294),
                o = i(95179),
                a = i(11226),
                s = i(85893);
            e.Z = function(t) {
                var e = t.dramaId,
                    i = t.is_liked,
                    d = void 0 !== i && i,
                    c = t.logged,
                    l = (0, n.useRouter)(),
                    p = (0, r.useState)(d),
                    u = p[0],
                    h = p[1];
                return (0, s.jsx)(a.oL, {
                    isLike: u,
                    onClick: function() {
                        c ? e && (u ? o.S.unlike({
                            id: e
                        }).then((function(t) {
                            "ok" === t.ok && h(!1)
                        })) : o.S.like({
                            id: e
                        }).then((function(t) {
                            "ok" === t.ok && h(!0)
                        }))) : confirm("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && l.push("/login?next=".concat(encodeURIComponent(l.asPath)))
                    },
                    className: "button-like"
                })
            }
        },
        46042: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return o
                },
                J: function() {
                    return a
                }
            });
            var n = i(87379),
                r = i(9671),
                o = n.ZP.div.withConfig({
                    displayName: "Grid__Row",
                    componentId: "sc-16fypi6-0"
                })(["display:flex;", " ", " ", ""], (function(t) {
                    return t.flex && (0, n.iv)(["flex:", ";"], t.flex)
                }), (function(t) {
                    return t.justify && (0, n.iv)(["justify-content:", ";"], t.justify)
                }), (function(t) {
                    return t.align && (0, n.iv)(["align-items:", ";"], t.align)
                })),
                a = n.ZP.div.withConfig({
                    displayName: "Grid__Col",
                    componentId: "sc-16fypi6-1"
                })(["display:block;", ";", " ", " ", " ", ";"], (function(t) {
                    return t.flex && (0, n.iv)(["flex:", ";"], t.flex)
                }), (function(t) {
                    return t.display && (0, n.iv)(["display:", ";"], t.display)
                }), (function(t) {
                    return t.justify && (0, n.iv)(["justify-content:", ";"], t.justify)
                }), (function(t) {
                    return t.align && (0, n.iv)(["align-items:", ";"], t.align)
                }), (function(t) {
                    return t.padding && (0, r.uM)(t.padding)
                }))
        },
        85181: function(t, e, i) {
            var n = i(87379),
                r = i(9671),
                o = i(85893),
                a = n.ZP.div.withConfig({
                    displayName: "StarScore__StyledStarScore",
                    componentId: "zrrn68-0"
                })(["position:relative;display:inline-block;input{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;}.off,.on{display:flex;span{display:block;&:last-child{margin-right:0;}", " ", "}}.off{right:0;span{", "}}.on{position:absolute;left:0;top:0;bottom:0;width:100%;height:100%;width:", "%;overflow:hidden;.wrap{", " display:flex;}span{", "}}"], (function(t) {
                    return t.width && (0, n.iv)(["", " ", ";"], (0, r.vw)("width", t.width[0], t.width[1]), (0, r.vw)("margin-right", t.width[0] / 5, t.width[1] / 5))
                }), (function(t) {
                    return t.height && (0, n.iv)(["", ""], (0, r.vw)("height", t.height[0], t.height[1]))
                }), (0, r.Rp)("/images/icon_star_off.png"), (function(t) {
                    return t.score && 10 * t.score
                }), (function(t) {
                    return t.width && (0, n.iv)(["", ""], (0, r.vw)("width", 5 * t.width[0] + t.width[0] / 5 * 5, 5 * t.width[1] + t.width[1] / 5 * 5))
                }), (0, r.Rp)("/images/icon_star_on.png"));
            e.Z = function(t) {
                var e = t.score,
                    i = void 0 === e ? 50 : e,
                    n = t.width,
                    r = void 0 === n ? [14, 14] : n,
                    s = t.height,
                    d = void 0 === s ? [14, 14] : s,
                    c = t.onChange,
                    l = void 0 === c ? void 0 : c;
                return (0, o.jsxs)(a, {
                    score: i,
                    width: r,
                    height: d,
                    className: "star-score",
                    children: [(0, o.jsxs)("div", {
                        className: "off",
                        children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {})]
                    }), (0, o.jsx)("div", {
                        className: "on",
                        children: (0, o.jsxs)("div", {
                            className: "wrap",
                            children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {})]
                        })
                    }), l && (0, o.jsx)("input", {
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
        76169: function(t, e, i) {
            var n = i(41664),
                r = i(67294),
                o = i(87379),
                a = i(9671),
                s = i(64575),
                d = i(11226),
                c = i(39393),
                l = i(35952),
                p = i(86891),
                u = i(85893),
                h = function(t) {
                    var e = t.data;
                    return (0, u.jsxs)(m, {
                        className: "info",
                        children: [e.status && e.round && (0, u.jsxs)("div", {
                            className: "meta",
                            children: [(0, u.jsx)("span", {
                                className: "status",
                                children: "end" === e.status ? "\uc644\uacb0\uc791" : "\ud604\uc9c0\ubc29\uc601\uc911"
                            }), (0, u.jsxs)("span", {
                                className: "round",
                                children: [e.round, "\ud68c"]
                            })]
                        }), e.title && (0, u.jsx)(l.H, {
                            className: "subject",
                            ellipsis: 1,
                            children: e.title
                        }), e.broadcaster && e.broadcaster.name && (0, u.jsx)(l.Z, {
                            className: "channel",
                            children: e.broadcaster.name
                        })]
                    })
                },
                m = o.ZP.div.withConfig({
                    displayName: "VideoItem__SVideoInfo",
                    componentId: "sc-5lwtzl-0"
                })([""]),
                f = o.ZP.div.withConfig({
                    displayName: "VideoItem__Item",
                    componentId: "sc-5lwtzl-1"
                })(["display:flex;align-items:center;", "{flex-direction:column;}a{display:block;position:relative;overflow:hidden;", " ", " ", " ", " ", " ", " .info{flex:1;", ";}.status{", ";}.round{", ';position:relative;padding-left:6px;margin-left:5px;&:before{display:block;content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background-color:', ";opacity:0.5;}}.subject{", ";", ";font-weight:bold;overflow:hidden;display:block;}}"], (0, a.mI)(), (function(t) {
                    return t.width && !t.horizontal && (0, o.iv)(["", ";width:100%;"], (0, a.vw)("max-width", t.width, t.pcWidth))
                }), (function(t) {
                    return t.width && t.horizontal && (0, o.iv)(["", "{", ";width:100%;}"], (0, a.mI)(), (0, a.vw)("max-width", t.width, t.pcWidth))
                }), (function(t) {
                    return t.width >= 9999 && (0, o.iv)(["max-width:100%;width:100%;", "{width:100%;max-width:100%;}"], (0, a.mI)())
                }), (function(t) {
                    return t.bg && (0, o.iv)(["background-color:", ";.info{margin-top:0;", ";", ";", ";", ";}"], s.r.color.background, (0, a.vw)("padding-top", 10), (0, a.vw)("padding-bottom", 10), (0, a.vw)("padding-left", 10), (0, a.vw)("padding-right", 10))
                }), (function(t) {
                    return t.overlay && (0, o.iv)([".info{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;margin-top:0;color:", ";", ";display:flex;align-items:flex-end;background:rgb(2,0,36);background:linear-gradient( 0deg,rgba(2,0,36,0.6) 0%,rgba(0,0,0,0) 50% );}"], s.r.color.main, (0, a.vw)("padding", 10))
                }), (function(t) {
                    return t.horizontal && (0, o.iv)(["display:flex;", ";", ";align-items:center;.info{", ";flex:1;margin-top:0;overflow:hidden;.subject{font-weight:bold;color:", ";}.channel{", ";", ";}}", "{display:block;}"], (0, a.vw)("padding-top", 12.5), (0, a.vw)("padding-bottom", 12.5), (0, a.vw)("margin-left", 10), s.r.color.main, (0, a.vw)("font-size", 11), (0, a.vw)("margin-top", 4), (0, a.mI)())
                }), (0, a.vw)("margin-top", 10, 12), (0, a.vw)("font-size", 10, 12), (0, a.vw)("font-size", 10, 12), s.r.color.default, (0, a.vw)("font-size", 12, 14), (0, a.vw)("margin-top", 2, 4));
            e.Z = function(t) {
                var e = t.data,
                    i = void 0 === e ? {} : e,
                    o = t.link,
                    s = t.width,
                    l = void 0 === s ? 108 : s,
                    m = t.height,
                    g = void 0 === m ? 156 : m,
                    v = t.backgroundLight,
                    w = void 0 !== v && v,
                    x = t.overlay,
                    b = void 0 !== x && x,
                    y = t.circle,
                    j = void 0 !== y && y,
                    _ = t.progress,
                    k = void 0 === _ ? 0 : _,
                    N = t.horizontal,
                    P = void 0 !== N && N,
                    I = t.children,
                    Z = t.isEdit,
                    C = void 0 !== Z && Z,
                    S = t.onChecked,
                    z = t.thumRadius,
                    O = void 0 === z ? 0 : z,
                    L = t.pcWidth,
                    E = void 0 === L ? l : L,
                    W = t.pcHeight,
                    R = void 0 === W ? g : W,
                    D = t.onLiked,
                    T = t.itemWidth,
                    H = (0, r.useRef)(null),
                    U = (0, r.useState)(),
                    B = U[0],
                    M = U[1];
                (0, r.useEffect)((function() {
                    M(i.like), H.current && T && T(H.current.offsetWidth)
                }), []);
                return (0, u.jsxs)(f, {
                    className: "item",
                    width: l,
                    bg: w,
                    overlay: b,
                    circle: j,
                    horizontal: P,
                    pcWidth: E,
                    pcHeight: R,
                    ref: H,
                    children: [S && C && (0, u.jsx)(c.X, {
                        type: "checkbox",
                        value: i.id,
                        label: "",
                        onChange: function(t) {
                            return function(t) {
                                S && S(t)
                            }(t)
                        },
                        bullet: "dot"
                    }), (0, u.jsx)(n.default, {
                        href: o,
                        children: (0, u.jsxs)("a", {
                            children: [(0, u.jsx)(p.Z, {
                                path: i.poster_image ? (0, a.L5)(i.poster_image, 130) : "https://doramakr.s3.ap-northeast-2.amazonaws.com/contents/poster/3d4a872789a318b34762ad5f4372bf9c.jpg",
                                width: l,
                                height: g,
                                progress: k,
                                circle: j,
                                radius: O,
                                pcWidth: E,
                                pcHeight: R
                            }), I || (0, u.jsx)(h, {
                                data: i
                            })]
                        })
                    }), D && (0, u.jsx)(d.oL, {
                        className: "like",
                        isLike: B,
                        onClick: function() {
                            M(!B)
                        }
                    })]
                })
            }
        },
        21541: function(t, e, i) {
            var n = i(87379),
                r = i(9671),
                o = i(64575),
                a = i(85893),
                s = n.ZP.div.withConfig({
                    displayName: "VideoList__ListWrapper",
                    componentId: "sc-15f4w8l-0"
                })(["", " ", " ", "{padding-left:0;padding-right:0;padding-bottom:0;}"], (function(t) {
                    return t.whiteSpace && (0, n.iv)(["", ";"], (0, r.uM)(t.whiteSpace))
                }), (function(t) {
                    return t.isHorizontal && (0, n.iv)(["overflow-x:auto;padding-bottom:15px;"])
                }), (0, r.mI)()),
                d = n.ZP.div.withConfig({
                    displayName: "VideoList__List",
                    componentId: "sc-15f4w8l-1"
                })(["", ";", " ", " ", " ", ";", ";", "{display:flex;justify-content:space-between;flex-wrap:wrap;}"], r.i0, (function(t) {
                    return t.max && (0, n.iv)(["", "{.item:nth-child(n + ", "){display:none;}}"], (0, r.mI)(), t.max + 1)
                }), (function(t) {
                    return "row" === t.align && (0, n.iv)([".item{border-top:solid 1px ", ";a{flex:1;}&:first-child{border-top:0;}}", "{.item{border-top:0;}}"], o.r.color.border, (0, r.mI)())
                }), (function(t) {
                    return "col" === t.align && t.isHorizontal && (0, n.iv)(["width:5000px;", " .item{float:left;&:first-child{a{margin-left:0;}}a{", ";}}", "{width:auto;&:after{display:none;}.item{a{margin-right:0;padding-bottom:40px;}&:empty{width:125px;}}}"], (0, r.i0)(), (0, r.vw)("margin-right", 2 * t.itemSpaceBetween), (0, r.mI)())
                }), (function(t) {
                    return t.wrapperWidth && (0, n.iv)(["width:", "px;"], t.wrapperWidth)
                }), (function(t) {
                    return "col" === t.align && !t.isHorizontal && (0, n.iv)(["display:flex;flex-wrap:wrap;justify-content:space-between;.item{a{", "}}"], (0, r.vw)("margin-bottom", 40))
                }), (0, r.mI)());
            e.ZP = function(t) {
                var e = t.children,
                    i = t.horizontal,
                    n = void 0 !== i && i,
                    r = t.align,
                    o = void 0 === r ? "col" : r,
                    c = t.whiteSpace,
                    l = void 0 === c ? [0, 0, 0, 0] : c,
                    p = t.itemSpaceBetween,
                    u = void 0 === p ? 3 : p,
                    h = t.max,
                    m = t.wrapperWidth;
                return (0, a.jsx)(s, {
                    isHorizontal: n,
                    whiteSpace: l,
                    className: "video-list-wrapper",
                    children: (0, a.jsx)(d, {
                        isHorizontal: n,
                        align: o,
                        itemSpaceBetween: u,
                        className: "video-list",
                        max: h,
                        wrapperWidth: m,
                        children: e
                    })
                })
            };
            (0, r.vw)("margin-bottom", 50, 80), (0, r.uM)([20, 20, 20, 20], [20, 0, 20, 0]), (0, r.vw)("font-size", 17, 28), o.r.color.main, o.r.color.primary, o.r.color.primary, (0, r.vw)("font-size", 12, 13), (0, r.vw)("height", 20, 28), (0, r.vw)("line-height", 20, 28), (0, r.vw)("padding-left", 5), (0, r.vw)("padding-right", 5), (0, r.vw)("margin-right", 8, 10), (0, r.vw)("padding-right", 14), (0, r.vw)("font-size", 14, 16), (0, r.Rp)("/images/arrow_more.png", "7px 13px", "100% 50%")
        },
        91323: function(t, e, i) {
            var n = i(30381),
                r = i.n(n),
                o = i(67294),
                a = i(97620),
                s = i(62820),
                d = i(2893),
                c = i(35952),
                l = i(18289),
                p = i(9671),
                u = i(11163),
                h = i(66828),
                m = i(85893);
            e.Z = function(t) {
                var e = t.rows,
                    i = t.isLoading,
                    n = t.paginate,
                    f = t.itemWidth,
                    g = t.direction,
                    v = void 0 === g ? "ROW" : g,
                    w = t.move,
                    x = (0, u.useRouter)(),
                    b = (0, h.Z)().userStore,
                    y = (0, o.useRef)(null);
                (0, o.useEffect)((function() {
                    y.current && f && f(y.current.offsetWidth)
                }), [e]);
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsxs)(l.ip, {
                        className: "list",
                        direction: v,
                        style: {
                            transform: "translate3d(".concat(w, "px, 0px, 0px)")
                        },
                        children: [e && e.map((function(t, e) {
                            return (0, m.jsx)(l.dH, {
                                className: "item",
                                ref: y,
                                live: null !== t.original_air_until && r()() < r()(t.original_air_until) || b.isLiveTester,
                                children: (0, m.jsxs)("a", {
                                    onClick: function() {
                                        return e = t.id, i = t.public, void(e && (!1 !== b.logged || "private" !== i ? x.push("/watch/".concat(e)) : confirm("\ud574\ub2f9 \uc5d0\ud53c\uc18c\ub4dc\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc2dc\uccad \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && x.push("/login?next=".concat(encodeURIComponent(x.asPath)))));
                                        var e, i
                                    },
                                    children: [(0, m.jsxs)("div", {
                                        className: "thumb",
                                        children: [t.image && (0, m.jsx)("img", {
                                            src: (0, p.ex)(t.image, 204),
                                            alt: t.drama.title,
                                            loading: "lazy"
                                        }), void 0 != t.age_limit && t.age_limit >= 19 && (0, m.jsx)(l.WS, {
                                            className: "agelimit"
                                        }), null !== t.user_position && t.duration && (0, m.jsx)(l.bW, {
                                            duration: t.duration,
                                            position: t.user_position
                                        })]
                                    }), (0, m.jsxs)("div", {
                                        className: "info",
                                        children: ["COLUMN" === v && (0, m.jsxs)("div", {
                                            className: "meta",
                                            children: [t.drama.broadcaster.name, " |", " ", (0, a.Gb)("YYYY-MM-DD", t.broadcasted_at)]
                                        }), (0, m.jsx)(c.H, {
                                            className: "subject",
                                            ellipsis: 1,
                                            children: t.drama.title
                                        }), (0, m.jsx)(c.H, {
                                            className: "subject",
                                            children: t.seq
                                        }), "ROW" === v && t.broadcasted_at && (0, m.jsx)("span", {
                                            className: "date",
                                            children: (0, a.Gb)("YYYY.MM.DD", t.broadcasted_at)
                                        })]
                                    })]
                                })
                            }, "".concat(t.id, "-").concat(e))
                        })), "COLUMN" === v && (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsx)("div", {
                                className: "item"
                            }), (0, m.jsx)("div", {
                                className: "item"
                            }), (0, m.jsx)("div", {
                                className: "item"
                            }), (0, m.jsx)("div", {
                                className: "item"
                            })]
                        })]
                    }), i && (0, m.jsx)(s.g, {}), n && (0, m.jsx)(d.Z, {
                        current: n.current,
                        total: n.total,
                        num: n.num,
                        onChange: n.onChange
                    })]
                })
            }
        },
        18289: function(t, e, i) {
            i.d(e, {
                AO: function() {
                    return c
                },
                ip: function() {
                    return l
                },
                TP: function() {
                    return p
                },
                U: function() {
                    return h
                },
                dH: function() {
                    return m
                },
                f2: function() {
                    return f
                },
                kl: function() {
                    return g
                },
                bW: function() {
                    return v
                },
                cY: function() {
                    return w
                },
                zH: function() {
                    return x
                },
                qA: function() {
                    return b
                },
                T6: function() {
                    return y
                },
                WS: function() {
                    return j
                }
            });
            var n = i(87379),
                r = i(9671),
                o = i(64575),
                a = [108, 170],
                s = [156, 244],
                d = n.ZP.div.withConfig({
                    displayName: "liststyled__List",
                    componentId: "sc-196ajge-0"
                })([".item{overflow:hidden;&:empty{height:0;", ";}}", ";", ";", ";", ";"], (0, r.vw)("width", 108, 170), (function(t) {
                    return "COLUMN" === t.direction && (0, n.iv)(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;"])
                }), (function(t) {
                    return "ROW" === t.direction && (0, n.iv)(["display:block;.item{}", "{display:block;}"], (0, r.mI)())
                }), (function(t) {
                    return "HORIZONTAL" === t.scroll && (0, n.iv)(["display:block;min-width:3000px;width:", "px;", " .item{float:left;a{", ";}}"], t.scrollWidth, (0, r.i0)(), (0, r.vw)("margin-left", 6))
                }), (function(t) {
                    return t.scrollWidth && (0, n.iv)(["min-width:", "px;width:", "px;.item{a{", ";}}"], t.scrollWidth, t.scrollWidth, (0, r.vw)("margin-left", 6))
                })),
                c = (0, n.ZP)(d).withConfig({
                    displayName: "liststyled__PosterListStyled",
                    componentId: "sc-196ajge-1"
                })(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;", ";&.main{", "{.item{a{width:204px;}.thumb{height:294px;img{height:294px;}}.meta{font-size:14px;}.subject{font-size:18px;margin-top:8px;}}}}"], (function(t) {
                    return t.bg && (0, n.iv)([".item{a{background-color:", ";.info{", ";}}}", "{.item{a{.info{padding:14px;}}}}"], t.bg, (0, r.vw)("padding", 10), (0, r.mI)())
                }), (0, r.mI)()),
                l = (0, n.ZP)(d).withConfig({
                    displayName: "liststyled__EpisodeListStyled",
                    componentId: "sc-196ajge-2"
                })(["& > div{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}}.item{a{", " width:100%;display:flex;align-items:center;}}", ";"], o.r.color.borderDark, (0, r.uM)([15, 0, 15, 0]), (function(t) {
                    return "COLUMN" === t.direction && (0, n.iv)([".item{border-bottom:0;a{display:block;padding:0;", ";overflow:hidden;", ";.thumb{width:100%;", ";img{", ";}}.info{", " flex:none;overflow:hidden;width:100%;.meta{", ";", ";}.subject{line-height:1.4;", ";color:", ";margin-top:0;}}}}"], (0, r.vw)("width", 150, 204), (0, r.vw)("padding-bottom", 40), (0, r.vw)("height", 84, 114), (0, r.vw)("height", 84, 114), (0, r.uM)([6, 0, 0, 0], [14, 0, 0, 0]), (0, r.vw)("font-size", 11, 14), (0, r.vw)("margin-bottom", 2, 5), (0, r.vw)("font-size", 12, 18), o.r.color.default)
                })),
                p = n.ZP.div.withConfig({
                    displayName: "liststyled__ListSorting",
                    componentId: "sc-196ajge-3"
                })(["display:flex;align-items:center;justify-content:space-between;", ";", ";p{color:", ";font-weight:bold;", ";line-height:1.1;display:flex;align-items:center;span{color:", ";", ";}}.sort-m{}.sort-pc{display:none;}", "{p{font-weight:normal;}.sort-m{display:none;}.sort-pc{display:block;}}"], (0, r.vw)("padding-top", 15), (0, r.vw)("padding-bottom", 15, 30), o.r.color.main, (0, r.vw)("font-size", 12, 14), o.r.color.primary, (0, r.vw)("font-size", 12, 20), (0, r.mI)()),
                u = n.ZP.div.withConfig({
                    displayName: "liststyled__Item",
                    componentId: "sc-196ajge-4"
                })(["&.default-image{.thumb{", ';background-color:rgba(255,255,255,0.5);}}a{display:block;position:relative;overflow:hidden;}.thumb{position:relative;background-image:url("/images/logo@3x.png");background-size:20% auto;background-repeat:no-repeat;background-position:center center;}.info{flex:1;', ";}.meta{", ";& + .subject{", ";}}.status{&.active{color:", ";}}.round{", ';position:relative;padding-left:6px;margin-left:5px;&:before{display:block;content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background-color:', ";opacity:0.5;}}.subject{", ";font-weight:bold;overflow:hidden;display:block;& + .date{", ";}}.date{", ';display:block;}&.skeleton{a{&:after{display:block;content:"";position:absolute;left:0;top:0;width:100%;height:100%;transform:translateX(-100%);background:linear-gradient( 90deg,transparent,rgba(255,255,255,0.1),transparent );animation:loading 1s infinite;}.thumb{background-color:rgba(255,255,255,0.1);}.info{&:before{background-color:rgba(255,255,255,0.1);content:"";display:block;', ';border-radius:3px;}&:after{background-color:rgba(255,255,255,0.1);content:"";display:block;', ";", ";border-radius:3px;}}}}&.poster{a{", ";}.thumb{", ";img{height:inherit;}}}&.card{a{", ";}.thumb{", ";img{height:inherit;}}.subject{color:", ";margin-bottom:5px;margin-top:0;}}&.grid-large,&.grid{.info{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;margin-top:0;color:", ";", ";display:flex;align-items:flex-end;background:rgb(2,0,36);background:linear-gradient( 0deg,rgba(2,0,36,0.6) 0%,rgba(0,0,0,0) 50% );}}&.grid{a{", ";}.thumb{", ";img{height:inherit;}}}"], (0, r.Rp)("/images/logo.png", "50% auto"), (0, r.vw)("padding-top", 10, 12), (0, r.vw)("font-size", 10, 12), (0, r.vw)("margin-top", 1, 4), o.r.color.primary, (0, r.vw)("font-size", 10, 12), o.r.color.default, (0, r.vw)("font-size", 12, 14), (0, r.vw)("margin-top", 2), (0, r.vw)("font-size", 12), (0, r.vw)("height", 11), (0, r.vw)("height", 14), (0, r.vw)("margin-top", 10), (0, r.vw)("width", a[0], 204), (0, r.vw)("height", s[0], 294), (0, r.vw)("width", 300, 360), (0, r.vw)("height", 169, 230), o.r.color.main, o.r.color.main, (0, r.vw)("padding", 10), (0, r.vw)("width", 140, 166), (0, r.vw)("height", 140, 166)),
                h = (0, n.ZP)(u).withConfig({
                    displayName: "liststyled__PosterListItemStyled",
                    componentId: "sc-196ajge-5"
                })(["display:flex;align-items:center;", ";a{", ";}.thumb{", ";img{height:inherit;}}@keyframes loading{100%{transform:translateX(100%);}}"], (0, r.vw)("padding-bottom", 40), (0, r.vw)("width", a[0], a[1]), (0, r.vw)("height", s[0], s[1])),
                m = (0, n.ZP)(u).withConfig({
                    displayName: "liststyled__EpisodeListItemStyled",
                    componentId: "sc-196ajge-6"
                })(["a{}.thumb{", ";", ";img{height:inherit;width:inherit;}}.info{", ";flex:1;overflow:hidden;}.subject{", ";color:", ";width:100%;}.status{", ";}", ";"], (0, r.vw)("width", 130, 150), (0, r.vw)("height", 73, 84), (0, r.uM)([0, 0, 0, 15]), (0, r.vw)("font-size", 13, 15), o.r.color.main, (0, r.vw)("font-size", 12), (function(t) {
                    return t.live && (0, n.iv)([".subject{color:#ff0093;}.thumb{&:after{position:absolute;", " ", ' display:block;content:"";', " ", " ", "}}"], (0, r.vw)("left", 9), (0, r.vw)("top", 9), (0, r.vw)("width", 38), (0, r.vw)("height", 21), (0, r.Rp)("/images/badge_live_small.png"))
                })),
                f = (0, n.ZP)(d).withConfig({
                    displayName: "liststyled__UserPlayListStyled",
                    componentId: "sc-196ajge-7"
                })(["", " .item{float:left;a{}}", "{.item{a{}}}"], (0, r.i0)(), (0, r.mI)()),
                g = (0, n.ZP)(u).withConfig({
                    displayName: "liststyled__UserPlayListItemStyled",
                    componentId: "sc-196ajge-8"
                })(["text-align:center;a{", ";}.thumb{", ";background-color:transparent;img{height:inherit;border-radius:50%;}.circle{position:absolute;left:0;top:0;}}", "{.subject{font-weight:normal;.seq{display:block;margin-top:5px;}}}"], (0, r.vw)("width", 84, 170), (0, r.vw)("height", 84, 170), (0, r.mI)()),
                v = n.ZP.div.withConfig({
                    displayName: "liststyled__ProgressbarStyled",
                    componentId: "sc-196ajge-9"
                })(["position:absolute;left:0;bottom:0;", " ", " background-color:", ";"], (0, r.vw)("height", 5), (function(t) {
                    return t.position && (0, n.iv)(["width:", "%;"], t.position / (t.duration / 1e3) * 100)
                }), o.r.color.primary),
                w = n.ZP.div.withConfig({
                    displayName: "liststyled__ScrollWrapperStyled",
                    componentId: "sc-196ajge-10"
                })(["", ";", ";", ";", ";&.user-play-list-scroll{", "{margin-left:40px;margin-right:40px;.list{.item{a{margin-right:42px;}}}}}", "{overflow-x:hidden;.list{transition-duration:300ms;}}"], (function(t) {
                    return "HORIZONTAL" === t.scroll && (0, n.iv)(["overflow-x:auto;scroll-behavior:smooth;padding-bottom:10px;.list{display:block;display:flex;flex-wrap:nowrap;.item{flex:0 0 auto;padding-bottom:0;a{", ';padding-bottom:0;}&:first-child{a{margin-left:0;}}}[class*="liststyled__Item"]{&:last-child{a{', ";}}}}"], (0, r.vw)("margin-right", 6, 20), (0, r.vw)("margin-right", 20, 20))
                }), (function(t) {
                    return t.itemGap && (0, n.iv)([".list{.item{a{", ";}}}"], (0, r.vw)("margin-left", t.itemGap))
                }), (function(t) {
                    return t.wrapperWidth && (0, n.iv)([".list{width:", "px;min-width:", "px;}"], t.wrapperWidth, t.wrapperWidth)
                }), (function(t) {
                    return t.padding && (0, r.uM)(t.padding, [0, 0, 30, 0])
                }), (0, r.mI)(1110), (0, r.mI)(1110)),
                x = n.ZP.div.withConfig({
                    displayName: "liststyled__ScrollWrapperContainerStyled",
                    componentId: "sc-196ajge-11"
                })(["position:relative;.prev2,.next2,.prev,.next{position:absolute;top:50%;transform:translateY(-50%);margin-top:-30px;z-index:10;display:none;&.card{margin-top:-50px;}&.episode{margin-top:-55px;}}.prev2,.next2{margin-top:-42.5px;background-color:transparent;}.prev2{left:0;}.next2{right:0;}.prev{left:-50px;transition:left 0.3s;}.next{right:-50px;transition:right 0.3s;}&:hover{.prev{left:0;}.next{right:0;}}", "{.prev2,.next2,.prev,.next{display:block;}}"], (0, r.mI)(1100)),
                b = n.ZP.div.withConfig({
                    displayName: "liststyled__ListTitleBarStyled",
                    componentId: "sc-196ajge-12"
                })(["display:flex;", " justify-content:space-between;align-items:center;", " h2{font-weight:bold;", ";", " line-height:1;color:", ";", " display:flex;align-items:center;text-overflow:ellipsis;overflow:hidden;.label{display:block;border:1px solid ", ";color:", ";", ";", ";", ";", ";", ";", ";}}.more{display:block;text-align:right;", ";", ";", ";min-width:60px;}"], (0, r.uM)([20, 20, 20, 20], [20, 0, 30, 0]), (function(t) {
                    return t.groupTitle && (0, n.iv)(["padding-bottom:0;padding-top:0;"])
                }), (0, r.vw)("font-size", 17, 24), (function(t) {
                    return t.small && (0, n.iv)(["", ";"], (0, r.vw)("font-size", 15, 24))
                }), o.r.color.main, (0, r.LH)(1), o.r.color.primary, o.r.color.primary, (0, r.vw)("font-size", 12, 13), (0, r.vw)("height", 20, 28), (0, r.vw)("line-height", 20, 28), (0, r.vw)("padding-left", 5), (0, r.vw)("padding-right", 5), (0, r.vw)("margin-right", 8, 10), (0, r.vw)("padding-right", 14), (0, r.vw)("font-size", 14, 16), (0, r.Rp)("/images/arrow_more.png", "7px 13px", "100% 50%")),
                y = n.ZP.div.withConfig({
                    displayName: "liststyled__CurationsWrapper",
                    componentId: "sc-196ajge-13"
                })(['div[class*="liststyled__ListTitleBarStyled"]{', ';}& > div[class*="liststyled__ListTitleBarStyled"]{', ";}.list-group{", ";&:first-child{margin-top:0;}}", "{.list{.item{.subject{font-size:18px;}}}}.grid-wrapper{& > .item{", ";", ";", ";a{width:100%;}.thumb{", ";img{height:inherit;}}.subject{", ";}}.list{.item{&.grid{&:first-child{display:none;}}}}", "{display:flex;& > div{flex:1;margin-right:9px;&:last-child{padding-bottom:0;margin-left:9px;margin-right:0;}.list{flex-wrap:wrap;justify-items:space-between;.item{padding-bottom:0;a{margin-right:0;}&:nth-child(n + 8){display:none;}&:nth-child(n + 5){margin-top:18px;}}}}}}"], (0, r.vw)("padding-bottom", 15, 28), (0, r.vw)("padding-bottom", 0, 20), (0, r.vw)("margin-top", 45, 75), (0, r.mI)(), (0, r.vw)("padding-left", o.r.size.whiteSpace, 0), (0, r.vw)("padding-right", o.r.size.whiteSpace, 0), (0, r.vw)("padding-bottom", 10, 0), (0, r.vw)("height", 200, 350), (0, r.vw)("font-size", 13, 18), (0, r.mI)()),
                j = n.ZP.div.withConfig({
                    displayName: "liststyled__AgeLimitAdultIcon",
                    componentId: "sc-196ajge-14"
                })(["position:absolute;right:6px;top:6px;", ";width:28px;height:28px;"], (0, r.Rp)("/images/age_limit_19_2.png"))
        },
        10730: function(t, e, i) {
            i.r(e), i.d(e, {
                Episode: function() {
                    return ut
                },
                default: function() {
                    return Zt
                }
            });
            var n = i(50029),
                r = i(59499),
                o = i(87794),
                a = i.n(o),
                s = i(67294),
                d = i(87379),
                c = i(60473),
                l = i(9671),
                p = i(64575),
                u = i(11226),
                h = i(35952),
                m = i(41664),
                f = i(86891),
                g = i(21541),
                v = i(11163),
                w = i(57754),
                x = i(66828),
                b = i(85893),
                y = d.ZP.div.withConfig({
                    displayName: "ReviewWriteForm__StyledReviewWriteForm",
                    componentId: "sc-1t9ogyv-0"
                })(["", ";", " ", ";background-color:", ";", ";textarea{border:0;width:100%;background-color:transparent;", " outline:none;resize:vertical;line-height:1.5;color:", ";", "}& > div{", ";display:flex;justify-content:space-between;button{", ";", ";", ";&:last-child{", ";}}.byte{", ";}.submit{", ";font-weight:bold;color:", ";background-color:transparent;border:0;}& > div{display:flex;}}"], (0, l.vw)("margin-top", 15, 22), (0, l.vw)("border-radius", 5, 8), (0, l.vw)("padding", 15, 20), p.r.color.inputBg, (function(t) {
                    return "ready" === t.edit && (0, d.iv)(["background-color:transparent;border:1px solid #393939;"])
                }), (0, l.vw)("min-height", 100, 50), p.r.color.main, (0, l.vw)("font-size", 12, 14), (0, l.vw)("margin-top", 3, 10), (0, l.vw)("font-size", 12), (0, l.vw)("padding-left", 8), (0, l.vw)("padding-right", 8), (0, l.vw)("margin-right", -8), (0, l.vw)("font-size", 12, 14), (0, l.vw)("font-size", 12, 14), p.r.color.primary),
                j = function(t) {
                    var e = t.id,
                        i = void 0 === e ? 0 : e,
                        n = t.edit,
                        r = void 0 === n ? "new" : n,
                        o = t.content,
                        a = t.maxLength,
                        d = void 0 === a ? 300 : a,
                        c = t.dramaId,
                        l = void 0 === c ? 0 : c,
                        p = t.rating,
                        u = t.onSaved,
                        h = (0, x.Z)().userStore,
                        m = (0, v.useRouter)(),
                        f = (0, s.useState)(r),
                        g = f[0],
                        j = f[1],
                        _ = (0, s.useState)(""),
                        k = _[0],
                        N = _[1];
                    (0, s.useEffect)((function() {
                        o && N(o), j(i > 0 ? "ready" : "new")
                    }), [o, i]);
                    var P = function(t) {
                        !1 !== h.logged ? "" !== k ? l > 0 && w.Y.save({
                            id: t,
                            rating: p,
                            content: k,
                            drama_id: l
                        }).then((function() {
                            j("new"), N(""), u()
                        })).catch((function(t) {
                            alert(t.message)
                        })) : alert("\ub9ac\ubdf0\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694") : alert("\ub9ac\ubdf0 \uc791\uc131\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4")
                    };
                    return (0, b.jsx)(b.Fragment, {
                        children: (0, b.jsxs)(y, {
                            edit: g,
                            children: ["editor" === r && (0, b.jsx)(b.Fragment, {}), (0, b.jsx)("textarea", {
                                placeholder: "\uc194\uc9c1\ud55c \ud3c9\uac00 \ub610\ub294 \uc791\ud488\uc758 \ub9e4\ub825\uc744 \uc54c\ub824\uc8fc\uc138\uc694 (\uc2a4\ud1a0\ub9ac, \uc778\ubb3c, OST \ub4f1)",
                                onChange: function(t) {
                                    return function(t) {
                                        !1 !== h.logged ? N(t.target.value) : confirm("\ub9ac\ubdf0 \uc791\uc131\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && m.push("/login?next=".concat(encodeURIComponent(m.asPath)))
                                    }(t)
                                },
                                value: k,
                                maxLength: d,
                                readOnly: "ready" === g
                            }), (0, b.jsxs)("div", {
                                children: [(0, b.jsxs)("span", {
                                    className: "byte",
                                    children: [k.length, "/", d]
                                }), (0, b.jsxs)("div", {
                                    children: ["ready" === g && (0, b.jsx)("button", {
                                        onClick: function() {
                                            return function(t) {
                                                t > 0 && "ready" === g && w.Y.del({
                                                    ids: [t]
                                                }).then((function() {
                                                    N(""), j("new"), u()
                                                }))
                                            }(i)
                                        },
                                        children: "\uc0ad\uc81c"
                                    }), ("ready" === g || "edit" === g) && (0, b.jsx)("button", {
                                        onClick: function() {
                                            return function(t) {
                                                "ready" === g ? j("edit") : P(t)
                                            }(i)
                                        },
                                        children: "\uc218\uc815"
                                    }), "new" === g && (0, b.jsx)("input", {
                                        className: "submit",
                                        type: "submit",
                                        value: "\uc791\uc131",
                                        onClick: function() {
                                            return P()
                                        }
                                    })]
                                })]
                            })]
                        })
                    })
                },
                _ = i(85181),
                k = i(62820),
                N = i(2893),
                P = i(73410);

            function I(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(i), !0).forEach((function(e) {
                        (0, r.Z)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var C = d.ZP.div.withConfig({
                    displayName: "Review__StyledReview",
                    componentId: "m77x7q-0"
                })([""]),
                S = d.ZP.div.withConfig({
                    displayName: "Review__ReviewWrite",
                    componentId: "m77x7q-1"
                })(["", ";h1{font-weight:bold;color:", ";", ";line-height:1.1;", ";}"], (0, l.vw)("padding-top", 30), p.r.color.main, (0, l.vw)("font-size", 15, 18), (0, l.vw)("margin-bottom", 10, 20)),
                z = d.ZP.div.withConfig({
                    displayName: "Review__ReviewList",
                    componentId: "m77x7q-2"
                })([".item{&:first-child{border-top:0;}}.more-arrow{text-align:center;", ";", ";button{", ";", ";", ";text-indent:-5000px;overflow:hidden;}}"], (0, l.vw)("padding-top", 25), (0, l.vw)("padding-bottom", 25), (0, l.vw)("width", 54), (0, l.vw)("height", 54), (0, l.Rp)("/images/icon_arrow_down_circle.png")),
                O = d.ZP.div.withConfig({
                    displayName: "Review__ReviewItem",
                    componentId: "m77x7q-3"
                })(["display:flex;border-top:1px dashed #393939;", ";", ";.thum{border-radius:50%;}.content{flex:1;", ";.header{", ";display:flex;align-items:center;.name{", ";", ";font-weight:500;}}.body{line-height:1.6;", ";.name{color:", ";margin-right:5px;}}.footer{", ";display:flex;align-items:center;.date{", ";color:#606060;}.more-wrapper{position:relative;.manage{position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:4px;background-color:", ";box-shadow:0 2px 5px rgba(0,0,0,0.5);display:flex;border-radius:5px;height:0;overflow:hidden;opacity:0;transition:opacity 0.4s;button{", ";color:rgba(255,255,255,0.8);", ";", ";position:relative;&:last-child{&:after{display:none;}}&:after{", ";position:absolute;right:0;top:50%;width:1px;background-color:", ';transform:translateY(-50%);opacity:0.5;content:"";display:block;}}}&.active{.manage{height:auto;opacity:1;}}}.more{', ";color:#606060;display:flex;align-items:center;padding:0 6px;}.btn-reply{", ";color:#606060;padding:0 6px;}.owner{", ";color:", ";font-weight:bold;", ";}}}", "{padding-left:20px;}"], (0, l.vw)("padding-top", 25), (0, l.vw)("padding-bottom", 25), (0, l.vw)("margin-left", 15, 20), (0, l.vw)("height", 30), (0, l.vw)("font-size", 12, 14), (0, l.vw)("margin-right", 10), (0, l.vw)("font-size", 12, 14), p.r.color.main, (0, l.vw)("margin-top", 25), (0, l.vw)("font-size", 12), p.r.color.backgroundLight, (0, l.vw)("font-size", 11), (0, l.vw)("width", 40), (0, l.vw)("height", 24), (0, l.vw)("height", 10), p.r.color.dark, (0, l.vw)("font-size", 12), (0, l.vw)("font-size", 12), (0, l.vw)("font-size", 12), p.r.color.primary, (0, l.vw)("margin-left", 15), (0, l.mI)()),
                L = function(t) {
                    var e = t.title,
                        i = void 0 === e ? "\ub313\uae00" : e,
                        n = t.isScore,
                        r = void 0 !== n && n,
                        o = t.onTotal,
                        a = (0, v.useRouter)(),
                        d = (0, x.Z)(),
                        c = d.contentsStore,
                        l = d.userStore,
                        p = (0, s.useState)(10),
                        u = p[0],
                        h = p[1],
                        m = (0, s.useState)(0),
                        g = m[0],
                        y = m[1],
                        I = (0, s.useState)(0),
                        L = I[0],
                        E = I[1],
                        W = (0, s.useState)({
                            page: 1,
                            num: 10,
                            drama_id: c.dramaId
                        }),
                        R = W[0],
                        D = W[1],
                        T = (0, s.useState)({
                            id: 0,
                            rating: 0,
                            content: ""
                        }),
                        H = T[0],
                        U = T[1],
                        B = w.Y.useReviews("PL", R),
                        M = B.rows,
                        Y = B.total,
                        q = B.isLoading,
                        F = B.mutate;
                    return (0, s.useEffect)((function() {
                        o && void 0 !== Y && o(Y)
                    }), [Y]), (0, s.useEffect)((function() {
                        return document.body.addEventListener("click", (function(t) {
                                "more" !== t.target.className && E(0)
                            })),
                            function() {
                                document.body.removeEventListener("click", (function(t) {
                                    "more" !== t.target.className && E(0)
                                }))
                            }
                    }), []), (0, b.jsxs)(C, {
                        children: [(0, b.jsxs)(S, {
                            children: [(0, b.jsx)("h1", {
                                children: i
                            }), r && (0, b.jsx)(_.Z, {
                                width: [25, 30],
                                height: [25, 30],
                                score: u,
                                onChange: function(t) {
                                    h(t.target.value)
                                }
                            }), (0, b.jsx)(j, {
                                id: H.id,
                                rating: u,
                                content: H.content,
                                dramaId: c.dramaId,
                                onSaved: function() {
                                    F()
                                }
                            })]
                        }), q ? (0, b.jsx)(k.g, {}) : (0, b.jsx)(z, {
                            children: M.map((function(t) {
                                return (0, b.jsxs)(O, {
                                    className: "item",
                                    children: [(0, b.jsx)(f.Z, {
                                        path: t.author.profile_image ? t.author.profile_image : "/images/profile_default.png",
                                        width: 30,
                                        height: 30,
                                        pcWidth: 32,
                                        pcHeight: 32,
                                        bgColor: "#aaaaaa"
                                    }), (0, b.jsxs)("div", {
                                        className: "content",
                                        id: t.id.toString(),
                                        children: [(0, b.jsxs)("div", {
                                            className: "header",
                                            children: [(0, b.jsx)("span", {
                                                className: "name",
                                                children: t.author.nickname
                                            }), r && (0, b.jsx)(_.Z, {
                                                width: [10, 14],
                                                height: [10, 14],
                                                score: t.rating
                                            })]
                                        }), (0, b.jsx)("p", {
                                            className: "body",
                                            children: t.content.split("\n").map((function(t, e) {
                                                return (0, b.jsxs)("span", {
                                                    children: [t, (0, b.jsx)("br", {})]
                                                }, e)
                                            }))
                                        }), (0, b.jsxs)("div", {
                                            className: "footer",
                                            children: [(0, b.jsx)("span", {
                                                className: "date",
                                                children: t.created_at
                                            }), l.user && l.user.id === t.author.id && (0, b.jsx)("button", {
                                                className: "owner",
                                                onClick: function() {
                                                    return function(t) {
                                                        var e = M.find((function(e) {
                                                            return e.id === t
                                                        }));
                                                        e && (h(e.rating), U({
                                                            id: e.id,
                                                            content: e.content,
                                                            rating: e.rating
                                                        }))
                                                    }(t.id)
                                                },
                                                children: "\ub0b4\uac00 \uc4f4 \ub9ac\ubdf0"
                                            }), l.user.id !== t.author.id && (0, b.jsxs)("div", {
                                                className: "".concat(L === t.id ? "active" : "", " more-wrapper"),
                                                children: [(0, b.jsx)("button", {
                                                    className: "more",
                                                    onClick: function() {
                                                        return E(L === t.id ? 0 : t.id)
                                                    },
                                                    children: "\xb7\xb7\xb7"
                                                }), (0, b.jsx)("div", {
                                                    className: "manage",
                                                    children: (0, b.jsx)("button", {
                                                        type: "button",
                                                        onClick: function() {
                                                            return e = t.id, void(!1 !== l.logged ? y(e) : confirm("\uc2e0\uace0 \uae30\ub2a5\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && a.push("/login?next=".concat(encodeURIComponent(a.asPath))));
                                                            var e
                                                        },
                                                        children: "\uc2e0\uace0"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }, t.id)
                            }))
                        }), (0, b.jsx)(N.Z, {
                            current: R.page,
                            num: R.num,
                            total: Y,
                            onChange: function(t) {
                                D(Z(Z({}, R), {}, {
                                    page: t
                                }))
                            },
                            margin: [20, 0, 0, 0]
                        }), (0, b.jsx)(P.Z, {
                            onCancel: function() {
                                return y(0)
                            },
                            reportId: g,
                            replyService: "REVIEW"
                        })]
                    })
                },
                E = i(54039),
                W = i(76169),
                R = i(46042),
                D = i(9261),
                T = i(95179),
                H = i(97620),
                U = i(77206),
                B = i(73130),
                M = i(45989),
                Y = i(68665),
                q = i(27812),
                F = i(44888),
                X = i(91323),
                A = i(30381),
                V = i.n(A),
                G = function(t) {
                    var e = t.listParams,
                        i = t.sort,
                        n = void 0 !== i && i,
                        r = t.changeParams,
                        o = t.isPaging,
                        a = void 0 !== o && o,
                        d = t.recentEpisode,
                        c = t.episodes,
                        l = (0, s.useState)([]),
                        p = l[0],
                        u = l[1],
                        h = (0, s.useState)("NEXT"),
                        m = h[0],
                        f = h[1],
                        g = F.c.useEpisodes("PL", e),
                        v = g.rows,
                        w = g.total,
                        x = g.isLoading;
                    (0, s.useEffect)((function() {
                        if (void 0 !== v && e.page) {
                            if (v.length > 0 && e.page > 1 && "NEXT" === m ? u([].concat((0, q.Z)(p), (0, q.Z)(v))) : u(v), d) {
                                var t = v.filter((function(t) {
                                    return null !== t.user_position && t.duration && Math.floor(t.duration / 1e3) > t.user_position
                                }));
                                if (0 === t.length) d(v[0]);
                                else if (1 === t.length) d(t[0]);
                                else {
                                    var i = t.reduce((function(t, e) {
                                        return V()(t.user_last_hit_at) > V()(e.user_last_hit_at) ? t : e
                                    }), t[0]);
                                    d(i)
                                }
                            }
                            c && c(v)
                        }
                        return function() {
                            u([])
                        }
                    }), [v]);
                    var y = {
                        current: e.page,
                        total: w,
                        num: e.num,
                        onChange: function(t, i) {
                            f(i), e.page = t
                        }
                    };
                    return (0, b.jsxs)(b.Fragment, {
                        children: [n && (0, b.jsxs)("div", {
                            className: "sortingbar",
                            children: [(0, b.jsxs)("span", {
                                className: "result",
                                children: ["\ucd1d ", w, "\uac1c\uc758 \uc5d0\ud53c\uc18c\ub4dc"]
                            }), r && (0, b.jsxs)("div", {
                                className: "sort",
                                children: [(0, b.jsx)("button", {
                                    type: "button",
                                    className: "broadcasted_at-asc" === e.orderBy ? "active" : "",
                                    onClick: function() {
                                        return r("orderBy", "broadcasted_at-asc")
                                    },
                                    children: "\uccab\ud68c\ubd80\ud130"
                                }), (0, b.jsx)("button", {
                                    type: "button",
                                    className: "broadcasted_at-desc" === e.orderBy ? "active" : "",
                                    onClick: function() {
                                        return r("orderBy", "broadcasted_at-desc")
                                    },
                                    children: "\ucd5c\uc2e0\ud68c\ubd80\ud130"
                                })]
                            })]
                        }), (0, b.jsx)(X.Z, {
                            rows: p,
                            isLoading: x,
                            paginate: a ? y : void 0
                        })]
                    })
                },
                J = i(9008),
                K = i(94435),
                $ = i(18289),
                Q = i(43199),
                tt = i(64203),
                et = i(9669),
                it = i.n(et),
                nt = i(34155);

            function rt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function ot(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rt(Object(i), !0).forEach((function(e) {
                        (0, r.Z)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : rt(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var at = (0, U.Pi)((function() {
                    var t = (0, x.Z)().contentsStore,
                        e = (0, s.useState)(!1),
                        i = e[0],
                        n = e[1],
                        r = (0, s.useState)(85),
                        o = r[0],
                        a = r[1];
                    return (0, b.jsxs)(wt, {
                        children: [(0, b.jsx)("h2", {
                            children: "\uc904\uac70\ub9ac"
                        }), t.drama && (0, b.jsxs)(h.Z, {
                            children: [(0, H.SR)(t.drama.long_desc, o), " ", t.drama.long_desc.length > 85 && (0, b.jsx)("span", {
                                className: "more",
                                children: (0, b.jsx)("button", {
                                    type: "button",
                                    onClick: function() {
                                        n(!i), a(i ? 85 : 2e3)
                                    },
                                    children: i ? "\uc811\uae30" : "\ub354\ubcf4\uae30"
                                })
                            })]
                        })]
                    })
                })),
                st = (0, U.Pi)((function() {
                    var t = (0, x.Z)().contentsStore,
                        e = (0, s.useState)(0),
                        i = e[0],
                        n = e[1],
                        r = T.S.useDramas("PL", {
                            series_id: t.drama.series && t.drama.series.id ? t.drama.series.id : void 0,
                            orderBy: "broadcast_began_at-asc",
                            exclude_id: t.drama.id
                        }).rows;
                    return r && 0 === r.length ? null : (0, b.jsxs)(wt, {
                        children: [(0, b.jsx)("h2", {
                            children: "\uc2dc\ub9ac\uc988 \uc791\ud488"
                        }), r && (0, b.jsxs)(g.ZP, {
                            horizontal: !0,
                            wrapperWidth: i * r.length,
                            children: [r.map((function(t) {
                                return (0, b.jsx)(W.Z, {
                                    data: t,
                                    link: "/contents/" + t.id,
                                    pcWidth: 125,
                                    pcHeight: 179,
                                    itemWidth: function(t) {
                                        return n(t)
                                    },
                                    children: (0, b.jsx)("div", {
                                        className: "info",
                                        children: (0, b.jsx)(h.H, {
                                            className: "subject",
                                            ellipsis: 1,
                                            children: t.title
                                        })
                                    })
                                }, t.id)
                            })), (0, b.jsx)("div", {
                                className: "item"
                            }), (0, b.jsx)("div", {
                                className: "item"
                            }), (0, b.jsx)("div", {
                                className: "item"
                            }), (0, b.jsx)("div", {
                                className: "item"
                            })]
                        })]
                    })
                })),
                dt = (0, U.Pi)((function() {
                    var t, e, i = (0, x.Z)().contentsStore;
                    return (0, b.jsxs)(wt, {
                        children: [(0, b.jsx)("h2", {
                            children: "\uc81c\uc791 \uc815\ubcf4"
                        }), i.drama && (0, b.jsxs)(h.Z, {
                            children: ["- \uc81c\uc791 :", " ", (null !== (t = i.drama.producers) && void 0 !== t ? t : []).map((function(t, e) {
                                return (0, b.jsxs)("span", {
                                    children: [e > 0 && ",", " ", t.name]
                                }, t.id)
                            })), (0, b.jsx)("br", {}), "- \ubc29\uc1a1\uc0ac : ", i.drama.broadcaster.name, (0, b.jsx)("br", {}), "- \ucd9c\uc2dc : ", (0, H.Kj)(i.drama.quarter), (0, b.jsx)("br", {}), "- \ucd9c\uc5f0\uc9c4 :", (null !== (e = i.drama.actors) && void 0 !== e ? e : []).map((function(t, e) {
                                return (0, b.jsxs)("span", {
                                    children: [e > 0 && ",", " ", t.name]
                                }, e)
                            }))]
                        })]
                    })
                })),
                ct = function(t) {
                    var e = t.tags,
                        i = (0, x.Z)().filtersStore,
                        n = (0, v.useRouter)();
                    return (0, b.jsxs)(wt, {
                        children: [(0, b.jsx)("h2", {
                            children: "\ud0dc\uadf8"
                        }), e.length > 0 && (0, b.jsx)(lt, {
                            color: "primary",
                            children: e.map((function(t) {
                                return (0, b.jsx)(u.zx, {
                                    onClick: function() {
                                        return e = t.id, i.setParamsTagId(e), void n.push("/explore?tag_id=".concat(e));
                                        var e
                                    },
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    children: (0, b.jsxs)(pt, {
                                        children: ["#", t.name, " "]
                                    })
                                }, t.name)
                            }))
                        })]
                    })
                },
                lt = d.ZP.div.withConfig({
                    displayName: "id__TagWrap",
                    componentId: "cpafkd-0"
                })(["display:flex;flex-direction:row;"]),
                pt = d.ZP.span.withConfig({
                    displayName: "id__TagName",
                    componentId: "cpafkd-1"
                })(["cursor:pointer;color:", ";"], p.r.color.primary),
                ut = (0, U.Pi)((function(t) {
                    var e = t.dramaId,
                        i = t.episodes,
                        n = (0, x.Z)().contentsStore,
                        o = (0, s.useState)({
                            drama_id: e,
                            orderBy: "broadcasted_at-asc",
                            page: 1,
                            num: 0
                        }),
                        a = o[0],
                        d = o[1],
                        c = function(t, e) {
                            d(ot(ot({}, a), {}, (0, r.Z)({}, t, e)))
                        };
                    return (0, s.useEffect)((function() {
                        e && c("drama_id", e)
                    }), [e]), (0, b.jsx)(Nt, {
                        children: (0, b.jsx)(b.Fragment, {
                            children: e && (0, b.jsx)(G, {
                                sort: !0,
                                changeParams: c,
                                listParams: a,
                                recentEpisode: function(t) {
                                    n.setRecentEpisode(t)
                                },
                                episodes: i || void 0
                            })
                        })
                    })
                })),
                ht = (0, U.Pi)((function() {
                    var t = (0, s.useState)("episode"),
                        e = t[0],
                        i = t[1],
                        n = (0, s.useState)(0),
                        r = n[0],
                        o = n[1],
                        a = (0, v.useRouter)();
                    (0, s.useEffect)((function() {
                        a.query.tabVisible && a.query.review_id && (i(a.query.tabVisible), setTimeout((function() {
                            var t, e;
                            window.scrollTo(0, null !== (t = null === (e = document.getElementById(a.query.review_id.toString())) || void 0 === e ? void 0 : e.offsetTop) && void 0 !== t ? t : 600)
                        }), 1e3))
                    }), []);
                    var d = (0, x.Z)().contentsStore,
                        c = function(t) {
                            i(t)
                        };
                    return (0, b.jsxs)(xt, {
                        children: [(0, b.jsx)(jt, {
                            children: (0, b.jsxs)("ul", {
                                children: [(0, b.jsx)("li", {
                                    className: "episode" === e ? "active" : "",
                                    children: (0, b.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return c("episode")
                                        },
                                        children: "\uc5d0\ud53c\uc18c\ub4dc"
                                    })
                                }), (0, b.jsx)("li", {
                                    className: "review" === e ? "active" : "",
                                    children: (0, b.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return c("review")
                                        },
                                        children: ["\ub9ac\ubdf0(", r, ")"]
                                    })
                                }), (0, b.jsx)("li", {
                                    className: "intro" === e ? "active" : "",
                                    children: (0, b.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return c("intro")
                                        },
                                        children: "\ud504\ub85c\uadf8\ub7a8 \uc18c\uac1c"
                                    })
                                }), (0, b.jsx)("li", {
                                    className: "poster" === e ? "active" : "",
                                    children: (0, b.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return c("poster")
                                        },
                                        children: "\uacf5\uc2dd\uc774\ubbf8\uc9c0"
                                    })
                                })]
                            })
                        }), (0, b.jsx)(bt, {
                            children: (0, b.jsx)(M.Z, {
                                mode: "out-in",
                                children: (0, b.jsx)(Y.Z, {
                                    addEndListener: function(t, e) {
                                        t.addEventListener("transitionend", e, !1)
                                    },
                                    classNames: "fade",
                                    children: (0, b.jsxs)("div", {
                                        className: "content",
                                        children: [(0, b.jsx)("div", {
                                            className: "panel ".concat("episode" === e ? "active" : ""),
                                            children: (0, b.jsx)(ut, {
                                                dramaId: d.dramaId
                                            })
                                        }), (0, b.jsx)("div", {
                                            className: "panel ".concat("review" === e ? "active" : ""),
                                            children: d.drama && (0, b.jsx)(L, {
                                                isScore: !0,
                                                onTotal: function(t) {
                                                    return o(t)
                                                },
                                                title: "".concat(d.drama.title, " \ud3c9\uc810\uc740?")
                                            }, d.dramaId)
                                        }), (0, b.jsx)("div", {
                                            className: "panel ".concat("intro" === e ? "active" : ""),
                                            children: (0, b.jsx)(kt, {
                                                children: d.drama && d.drama.program_images && d.drama.program_images.map((function(t) {
                                                    return (0, b.jsx)(K.Z, {
                                                        cdnSrc: t,
                                                        width: 680,
                                                        lazy: !0
                                                    }, t)
                                                }))
                                            })
                                        }), (0, b.jsx)("div", {
                                            className: "panel ".concat("poster" === e ? "active" : ""),
                                            children: (0, b.jsx)(_t, {
                                                children: d.drama && d.drama.official_images && d.drama.official_images.map((function(t) {
                                                    return (0, b.jsx)(K.Z, {
                                                        cdnSrc: t,
                                                        width: 680,
                                                        lazy: !0
                                                    }, t)
                                                }))
                                            })
                                        })]
                                    })
                                }, e)
                            })
                        })]
                    })
                })),
                mt = function(t) {
                    var e = t.episode;
                    return (0, b.jsx)(u.Ls, {
                        whiteSpace: 20,
                        className: "button-purchase",
                        children: (0, b.jsx)(m.default, {
                            href: "/watch/".concat(e.id),
                            children: (0, b.jsxs)(u.zx, {
                                radius: 25,
                                size: "large",
                                color: "primary",
                                full: !0,
                                as: "a",
                                children: [e.seq, " ", e.user_position && e.duration && e.user_position > 0 && Math.floor(e.duration / 1e3) > e.user_position ? "\uc774\uc5b4\ubcf4\uae30" : "\uac10\uc0c1\ud558\uae30"]
                            })
                        })
                    })
                },
                ft = (0, U.Pi)((function() {
                    var t, e = (0, x.Z)().contentsStore,
                        i = e.drama,
                        n = (0, s.useState)("DEFAULT"),
                        r = n[0],
                        o = n[1],
                        a = (0, s.useState)(!1),
                        d = a[0],
                        c = a[1],
                        p = (0, s.useState)(!1),
                        m = p[0],
                        w = p[1],
                        y = (0, s.useState)(),
                        j = y[0],
                        k = y[1];
                    (0, s.useEffect)((function() {
                        void 0 === j && k([{
                            thumbnail: "https://doramakr.s3.ap-northeast-2.amazonaws.com/contents/poster/3d4a872789a318b34762ad5f4372bf9c.jpg",
                            subject: "[\ub3c4\ub77c\ub9c8 \ucf54\ub9ac\uc544 \uacf5\uc2dd] \uae30\ub9b0\uc774 \uc628\ub2e4 2-1",
                            channel: "\ub3c4\ub77c\ub9c8 \ucf54\ub9ac\uc544"
                        }, {
                            thumbnail: "https://doramakr.s3.ap-northeast-2.amazonaws.com/contents/poster/3d4a872789a318b34762ad5f4372bf9c.jpg",
                            subject: "[\ub3c4\ub77c\ub9c8 \ucf54\ub9ac\uc544 \uacf5\uc2dd] \uae30\ub9b0\uc774 \uc628\ub2e4 2-1",
                            channel: "\ub3c4\ub77c\ub9c8 \ucf54\ub9ac\uc544"
                        }])
                    }), []);
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsxs)(Pt, {
                            children: [i && (0, b.jsxs)(It, {
                                children: [(0, b.jsx)("div", {
                                    className: "poster",
                                    children: (0, b.jsxs)("div", {
                                        className: "thumbnail-group",
                                        children: [(0, b.jsxs)("div", {
                                            className: "thumbnail-wrapper",
                                            children: [(0, b.jsx)(f.Z, {
                                                path: (0, l.L5)(i.poster_image, 119),
                                                width: 119,
                                                height: 169,
                                                pcWidth: 238,
                                                pcHeight: 342,
                                                className: "thumbnail"
                                            }), void 0 != i.age_limit && i.age_limit >= 19 && (0, b.jsx)($.WS, {
                                                className: "agelimit"
                                            })]
                                        }), (0, b.jsxs)("div", {
                                            className: "info",
                                            children: [(0, b.jsxs)("div", {
                                                children: [(0, b.jsxs)("p", {
                                                    className: "meta",
                                                    children: [i.broadcaster.name, " |", " ", 1 == i.age_limit ? "\uc804\uccb4" : i.age_limit + "\uc138", " ", "\uc774\uc6a9\uac00 |", " ", (0, H.$y)(i.broadcast_ended_at) ? "\ubc29\uc601\uc911" : "\uc644\uacb0"]
                                                }), (0, b.jsx)("h1", {
                                                    className: "subject",
                                                    children: i.title
                                                })]
                                            }), (0, b.jsxs)("div", {
                                                children: [(0, b.jsx)("p", {
                                                    className: "genre",
                                                    children: (null !== (t = i.genres) && void 0 !== t ? t : []).map((function(t) {
                                                        return (0, b.jsx)("span", {
                                                            children: t.name
                                                        }, t.id)
                                                    }))
                                                }), i.avg_rating > 0 && (0, b.jsxs)("p", {
                                                    className: "score",
                                                    children: ["\ud3c9\uc810 ", i.avg_rating]
                                                }), (0, b.jsx)(_.Z, {
                                                    width: [14, 34],
                                                    height: [14, 34],
                                                    score: i.avg_rating
                                                })]
                                            })]
                                        }), (0, b.jsxs)(R.X, {
                                            className: "header",
                                            children: [(0, b.jsx)(R.J, {
                                                flex: "1",
                                                children: (0, b.jsx)(u.jp, {
                                                    color: "white",
                                                    onClick: function() {
                                                        v.default.back()
                                                    },
                                                    children: "\ub4a4\ub85c"
                                                })
                                            }), (0, b.jsxs)(R.J, {
                                                flex: "1",
                                                display: "flex",
                                                justify: "flex-end",
                                                children: [(0, b.jsx)(u.no, {
                                                    onClick: function() {
                                                        c(!0)
                                                    },
                                                    children: "\uacf5\uc720"
                                                }), (0, b.jsx)(B.Z, {
                                                    dramaId: i.id,
                                                    is_liked: i.is_liked,
                                                    logged: Q.Z.logged
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, b.jsx)("div", {
                                    className: "blur",
                                    children: (0, b.jsx)(K.Z, {
                                        cdnSrc: i.card_image
                                    })
                                })]
                            }), e.recentEpisode && (0, b.jsx)(mt, {
                                episode: e.recentEpisode
                            })]
                        }), (0, b.jsx)(E.Z, {
                            visible: d,
                            onClose: function() {
                                c(!1)
                            },
                            full: !0,
                            children: e.drama && (0, b.jsx)("div", {
                                style: {
                                    flex: 1,
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: (0, b.jsx)(tt.Z, {
                                    title: "".concat(e.drama.title, "<br />SNS\uc5d0 \uacf5\uc720\ud574\ubcf4\uc138\uc694"),
                                    url: "https://".concat(location.host, "/contents/").concat(e.dramaId),
                                    meta: {
                                        title: e.drama.title,
                                        description: e.drama.short_desc,
                                        imageUrl: e.drama.poster_image
                                    }
                                })
                            })
                        }), (0, b.jsx)(E.Z, {
                            visible: m,
                            onClose: function() {
                                return w(!1)
                            },
                            position: "rightBottom",
                            width: 560,
                            children: (0, b.jsxs)(yt, {
                                children: ["YOUTUBE" === r && (0, b.jsx)("p", {
                                    className: "stitle",
                                    children: "\uc720\ud29c\ube0c\ub85c \ubcf4\uae30"
                                }), (0, b.jsx)(h.Z, {
                                    ellipsis: 2,
                                    children: "\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c\uae30\ub9b0\uc774 \uc628\ub2e4 2\ud68c"
                                }), "YOUTUBE" === r ? (0, b.jsx)(g.ZP, {
                                    align: "row",
                                    children: j && j.map((function(t, e) {
                                        return (0, b.jsx)(W.Z, {
                                            data: t,
                                            link: "https://www.youtube.com/watch?v=COfUygk8oJY",
                                            width: 130,
                                            height: 73,
                                            pcWidth: 150,
                                            pcHeight: 84,
                                            horizontal: !0
                                        }, e)
                                    }))
                                }) : (0, b.jsxs)(u.Ls, {
                                    className: "button-group",
                                    children: [(0, b.jsx)(u.zx, {
                                        radius: 4,
                                        size: "large",
                                        color: "secondary",
                                        full: !0,
                                        children: "\ubb34\ub8cc\ub85c \ubcf4\uae30"
                                    }), j && (0, b.jsx)(u.zx, {
                                        radius: 4,
                                        size: "large",
                                        color: "secondary",
                                        full: !0,
                                        onClick: function() {
                                            o("YOUTUBE")
                                        },
                                        children: "\uc720\ud29c\ube0c\ub85c \ubcf4\uae30"
                                    }), (0, b.jsx)(u.zx, {
                                        radius: 4,
                                        size: "large",
                                        color: "primary",
                                        full: !0,
                                        children: "\uad6c\ub9e4\ud558\uae30 3\ucf54\uc778"
                                    })]
                                })]
                            })
                        })]
                    })
                })),
                gt = function() {
                    var t = (0, x.Z)().contentsStore,
                        e = (0, v.useRouter)(),
                        i = Number(e.query.id),
                        n = (0, s.useState)(),
                        r = n[0],
                        o = n[1];
                    (0, s.useEffect)((function() {
                        return i && (t.setDramaId(i), T.S.show("PD", i).then((function(e) {
                                o(e), t.setDrama(e), t.setDramaId(e.id)
                            })).catch((function(t) {
                                alert(t.message), e.back()
                            })).finally((function() {}))),
                            function() {
                                t.setDramaId(0)
                            }
                    }), [i]);
                    var a = (0, s.useContext)(D.IsMobileContext);
                    return (0, b.jsx)(c.Z, {
                        isContainerFull: !0,
                        isHeader: !1,
                        children: r && (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(J.default, {
                                children: (0, b.jsx)("title", {
                                    children: r.title
                                })
                            }), (0, b.jsx)(ft, {}), a ? (0, b.jsxs)(vt, {
                                children: [(0, b.jsx)(ht, {}), (0, b.jsx)(at, {}), t.drama && t.drama.series && t.drama.series.id && (0, b.jsx)(st, {}), (0, b.jsx)(dt, {}), (0, b.jsx)(ct, {
                                    tags: r.tags
                                })]
                            }) : (0, b.jsxs)(vt, {
                                children: [(0, b.jsxs)("div", {
                                    className: "col",
                                    children: [(0, b.jsx)(ht, {}), t.drama && t.drama.series && t.drama.series.id && (0, b.jsx)(st, {})]
                                }), (0, b.jsxs)("div", {
                                    className: "col",
                                    children: [(0, b.jsx)(at, {}), (0, b.jsx)(dt, {}), (0, b.jsx)(ct, {
                                        tags: r.tags
                                    })]
                                })]
                            })]
                        })
                    })
                };
            gt.getInitialProps = function() {
                var t = (0, n.Z)(a().mark((function t(e) {
                    var i, n, r, o, s, d;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.query, r = n.id, t.next = 4, it().get("".concat(null !== (i = nt.env.API_URL_IN_DOCKER) && void 0 !== i ? i : "/api", "/dramas/show?subset=PD&id=").concat(r));
                            case 4:
                                return o = t.sent, s = o.data, d = {
                                    url: "".concat("https://dev.dorama.kr", "/contents/").concat(r),
                                    title: s.title,
                                    type: "article",
                                    description: s.short_desc,
                                    image: s.card_image
                                }, t.abrupt("return", {
                                    query: n,
                                    meta: d
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();
            var vt = d.ZP.div.withConfig({
                    displayName: "id__ContentsWrapper",
                    componentId: "cpafkd-2"
                })(["", ";", ";max-width:", "px;margin:0 auto;", "{display:flex;.col{&:first-child{flex:1;}&:last-child{flex:0.5;margin-left:20px;}}}"], (0, l.vw)("padding-left", 20, 0), (0, l.vw)("padding-right", 20, 0), p.r.size.container, (0, l.mI)()),
                wt = d.ZP.div.withConfig({
                    displayName: "id__ContentsBox",
                    componentId: "cpafkd-3"
                })(["background-color:", ";", ";", ";", " h2{font-weight:bold;", " color:", ";", ";}&.purchase{.pricebar{display:flex;justify-content:space-between;", ";.sale{color:", ";font-weight:bold;}.price{font-weight:bold;i{color:", ";", ";&.regular{", ";color:#575757;text-decoration:line-through;font-weight:normal;", ";}}}}}"], p.r.color.background, (0, l.vw)("padding", 20), (0, l.vw)("margin-bottom", 20), (0, l.vw)("border-radius", 2, 4), (0, l.vw)("font-size", 15), p.r.color.main, (0, l.vw)("margin-bottom", 24), (0, l.vw)("margin-bottom", 17), p.r.color.primary, p.r.color.main, (0, l.vw)("font-size", 17), (0, l.vw)("font-size", 14), (0, l.vw)("margin-right", 10)),
                xt = (0, d.ZP)(wt).withConfig({
                    displayName: "id__ContentsTabGroup",
                    componentId: "cpafkd-4"
                })([""]),
                bt = d.ZP.div.withConfig({
                    displayName: "id__TabContents",
                    componentId: "cpafkd-5"
                })([".panel{display:none;&.active{display:block;}}"]),
                yt = d.ZP.div.withConfig({
                    displayName: "id__WarchTypes",
                    componentId: "cpafkd-6"
                })([".stitle{", ";", ";}.text{color:", ";", ";font-weight:bold;line-height:1.5;", ";", ";}.button-group{flex-wrap:wrap;button{&:nth-child(1){flex:0.5;", ";", ";}&:nth-child(2){flex:0.5;", ";", ";}}}"], (0, l.vw)("font-size", 12, 15), (0, l.vw)("margin-bottom", 5), p.r.color.main, (0, l.vw)("font-size", 20), (0, l.vw)("margin-bottom", 30), (0, l.vw)("margin-right", 35), (0, l.vw)("margin-bottom", 10), (0, l.vw)("margin-right", 5), (0, l.vw)("margin-bottom", 10), (0, l.vw)("margin-left", 5)),
                jt = d.ZP.div.withConfig({
                    displayName: "id__Tabs",
                    componentId: "cpafkd-7"
                })(["ul{display:flex;justify-content:space-between;li{&.active{button{border-bottom:2px solid ", ";", " color:", ";span{}}}button{display:block;width:100%;font-weight:bold;", ";", ";", ";", ";color:", ";}}}", "{ul{justify-content:flex-start;li{button{}}}}"], p.r.color.primary, (0, l.vw)("border-bottom-width", 2, 3), p.r.color.main, (0, l.vw)("font-size", 12, 15), (0, l.vw)("line-height", 30), (0, l.vw)("padding-left", 2, 15), (0, l.vw)("padding-right", 2, 15), p.r.color.disabled, (0, l.mI)()),
                _t = d.ZP.div.withConfig({
                    displayName: "id__ProgramPoster",
                    componentId: "cpafkd-8"
                })(["", ";img{max-width:100%;}"], (0, l.vw)("padding-top", 20)),
                kt = d.ZP.div.withConfig({
                    displayName: "id__ProgramIntro",
                    componentId: "cpafkd-9"
                })(["", ";img{max-width:100%;}"], (0, l.vw)("padding-top", 20)),
                Nt = d.ZP.div.withConfig({
                    displayName: "id__EpisodeWrapper",
                    componentId: "cpafkd-10"
                })([".sortingbar{display:flex;justify-content:space-between;align-items:center;", ";border-bottom:solid 1px #393939;.result{", ";}.sort{", ";button{", ";", ";&.active{color:", ";font-weight:bold;}}}", "{margin-top:10px;}}"], (0, l.vw)("height", 50), (0, l.vw)("font-size", 12, 13), (0, l.vw)("margin-right", -5), (0, l.vw)("font-size", 12, 13), (0, l.vw)("padding", 5), p.r.color.primary, (0, l.mI)()),
                Pt = d.ZP.div.withConfig({
                    displayName: "id__PosterWrapper",
                    componentId: "cpafkd-11"
                })(["position:relative;", "{.button-purchase{position:absolute;left:50%;bottom:152px;width:100%;max-width:", "px;padding:0;padding-right:20px;padding-left:20px;transform:translateX(-50%);display:flex;justify-content:flex-end;z-index:100;a,button{width:auto;min-width:240px;padding-left:25px;padding-right:25px;height:54px;font-size:20px;}}}", "{.button-purchase{padding-right:0;padding-left:0;}}"], (0, l.mI)(), p.r.size.container, (0, l.mI)(1100)),
                It = d.ZP.div.withConfig({
                    displayName: "id__PosterContent",
                    componentId: "cpafkd-12"
                })(["position:relative;.poster{position:absolute;left:0;top:0;right:0;bottom:0;z-index:5;display:flex;align-items:flex-end;", " ", " ", " .thumbnail-group{display:flex;}.thumbnail-wrapper{position:relative;}.thumbnail{}.info{flex:1;display:flex;flex-direction:column;justify-content:space-between;color:", ";", " ", " ", " line-height:1.5;}.meta{}.subject{", ' line-height:1.4;font-weight:bold;}.genre{span{&:after{content:"/";display:inline;}&:last-child{&:after{display:none;}}}}.score{}.star-score{', "}.header{position:absolute;left:0;top:0;right:0;display:flex;z-index:10;", ";}", "{.thumbnail-group{flex:1;max-width:", "px;margin:0 auto;}.header{position:static;padding:0;flex:1;& > div{&:first-child{display:none;}}button{margin-left:10px;}}.info{justify-content:flex-start;}.subject{min-height:94px;}.meta{margin-bottom:10px;}.genre{}.score{}}}.blur{", ';position:relative;overflow:hidden;img{filter:blur(2.5px);width:120%;margin-left:-10%;margin-top:-10%;}&:after{position:absolute;left:0;bottom:0;right:0;top:0;display:block;content:"";background-image:linear-gradient( to bottom,rgba(37,37,37,0),#1b1b1b );}}'], (0, l.vw)("padding-bottom", 28, 73), (0, l.vw)("padding-left", 20), (0, l.vw)("padding-right", 20), p.r.color.main, (0, l.vw)("margin-left", 10, 30), (0, l.vw)("font-size", 10, 15), (0, l.vw)("padding-bottom", 5), (0, l.vw)("font-size", 21, 32), (0, l.vw)("margin-top", 18, 38), (0, l.vw)("padding", 17), (0, l.mI)(), p.r.size.container, (0, l.vw)("height", 315, 515)),
                Zt = (0, U.Pi)(gt)
        },
        44888: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return n
                }
            });
            var n, r = i(50029),
                o = i(59499),
                a = i(87794),
                s = i.n(a),
                d = i(9669),
                c = i.n(d),
                l = i(80129),
                p = i.n(l),
                u = i(45522),
                h = i(25139);

            function m(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(i), !0).forEach((function(e) {
                        (0, o.Z)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }! function(t) {
                function e() {
                    return (e = (0, r.Z)(s().mark((function t(e, i) {
                        var n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/episodes/show?" + p().stringify({
                                        subset: e,
                                        id: i
                                    }));
                                case 3:
                                    return n = t.sent, t.abrupt("return", n.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function i() {
                    return (i = (0, r.Z)(s().mark((function t(e) {
                        var i;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/episodes/hit?" + p().stringify(e));
                                case 3:
                                    return i = t.sent, t.abrupt("return", i.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
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
                    return (n = (0, r.Z)(s().mark((function t(e) {
                        var i;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/episodes/delete_hits?" + p().stringify({
                                        ids: e
                                    }));
                                case 3:
                                    return i = t.sent, t.abrupt("return", i.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function o() {
                    return (o = (0, r.Z)(s().mark((function t() {
                        var e;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/episodes/clean_hits");
                                case 3:
                                    return e = t.sent, t.abrupt("return", e.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                t.useEpisodes = function(t, e) {
                    var i = (0, u.ZP)(["/api/episodes", p().stringify(f(f({}, e), {}, {
                            subset: t
                        }))]),
                        n = i.data,
                        r = i.error,
                        o = i.mutate;
                    return f(f({}, n), {}, {
                        isLoading: !r && !n,
                        error: r,
                        mutate: o
                    })
                }, t.show = function(t, i) {
                    return e.apply(this, arguments)
                }, t.hit = function(t) {
                    return i.apply(this, arguments)
                }, t.deleteHits = function(t) {
                    return n.apply(this, arguments)
                }, t.cleanHits = function() {
                    return o.apply(this, arguments)
                }
            }(n || (n = {}))
        },
        57754: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            var n, r = i(50029),
                o = i(59499),
                a = i(87794),
                s = i.n(a),
                d = i(9669),
                c = i.n(d),
                l = i(80129),
                p = i.n(l),
                u = i(45522),
                h = i(25139);

            function m(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(i), !0).forEach((function(e) {
                        (0, o.Z)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }! function(t) {
                function e() {
                    return (e = (0, r.Z)(s().mark((function t(e, i) {
                        var n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/reviews/show?" + p().stringify({
                                        subset: e,
                                        id: i
                                    }));
                                case 3:
                                    return n = t.sent, t.abrupt("return", n.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }

                function i() {
                    return (i = (0, r.Z)(s().mark((function t(e) {
                        var i;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().post("/api/reviews/save", e);
                                case 3:
                                    return i = t.sent, t.abrupt("return", i.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
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
                    return (n = (0, r.Z)(s().mark((function t(e) {
                        var i;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, c().get("/api/reviews/delete?" + p().stringify(e));
                                case 3:
                                    return i = t.sent, t.abrupt("return", i.data);
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(0), (0, h.E)(t.t0);
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
                    var i = (0, u.ZP)(["/api/reviews", p().stringify(f(f({}, e), {}, {
                            subset: t
                        }))]),
                        n = i.data,
                        r = i.error,
                        o = i.mutate;
                    return f(f({}, n), {}, {
                        isLoading: !r && !n,
                        error: r,
                        mutate: o
                    })
                }, t.show = function(t, i) {
                    return e.apply(this, arguments)
                }, t.save = function(t) {
                    return i.apply(this, arguments)
                }, t.del = function(t) {
                    return n.apply(this, arguments)
                }
            }(n || (n = {}))
        }
    }
]);