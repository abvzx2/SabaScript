"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5501], {
        25501: function(t, i, e) {
            var n = e(77206),
                o = e(41664),
                a = e(67294),
                r = e(97620),
                s = e(9671),
                l = e(35952),
                d = e(18289),
                c = e(85893),
                p = (0, n.Pi)((function(t) {
                    var i = t.rows,
                        e = t.itemWidth,
                        n = t.bg,
                        p = t.className,
                        m = t.isLoading,
                        g = t.move,
                        h = (0, a.useRef)(null);
                    return (0, a.useEffect)((function() {
                        h.current && e && e(h.current.offsetWidth)
                    }), [i]), (0, c.jsx)(c.Fragment, {
                        children: (0, c.jsxs)(d.AO, {
                            className: "list ".concat(p),
                            bg: n,
                            style: {
                                transform: "translate3d(".concat(g, "px, 0px, 0px)")
                            },
                            children: [(null !== i && void 0 !== i ? i : []).map((function(t, i) {
                                return (0, c.jsx)(d.U, {
                                    className: "item",
                                    ref: h,
                                    children: (0, c.jsx)(o.default, {
                                        href: "/contents/" + t.id,
                                        children: (0, c.jsxs)("a", {
                                            children: [(0, c.jsxs)("div", {
                                                className: "thumb",
                                                children: [(0, c.jsx)("img", {
                                                    src: (0, s.ex)(t.poster_image, 340),
                                                    alt: t.title,
                                                    loading: "lazy"
                                                }), void 0 != t.age_limit && t.age_limit >= 19 && (0, c.jsx)(d.WS, {
                                                    className: "agelimit"
                                                })]
                                            }), (0, c.jsxs)("div", {
                                                className: "info",
                                                children: [t.broadcast_ended_at && (0, c.jsx)("div", {
                                                    className: "meta",
                                                    children: (0, c.jsx)("span", {
                                                        className: "status ".concat((0, r.$y)(t.broadcast_ended_at) ? "active" : "completed"),
                                                        children: (0, r.$y)(t.broadcast_ended_at) ? "\ud604\uc9c0\ubc29\uc601\uc911" : "\uc644\uacb0\uc791"
                                                    })
                                                }), (0, c.jsx)(l.H, {
                                                    className: "subject",
                                                    ellipsis: 1,
                                                    children: t.title
                                                })]
                                            })]
                                        })
                                    })
                                }, "".concat(t.id, "-").concat(i))
                            })), m && i.length > 10 && (0, c.jsxs)(c.Fragment, {
                                children: [(0, c.jsx)(d.U, {
                                    className: "item skeleton",
                                    children: (0, c.jsxs)("a", {
                                        children: [(0, c.jsx)("div", {
                                            className: "thumb"
                                        }), (0, c.jsx)("div", {
                                            className: "info"
                                        }), " "]
                                    })
                                }), (0, c.jsx)(d.U, {
                                    className: "item skeleton",
                                    children: (0, c.jsxs)("a", {
                                        children: [(0, c.jsx)("div", {
                                            className: "thumb"
                                        }), (0, c.jsx)("div", {
                                            className: "info"
                                        }), " "]
                                    })
                                }), (0, c.jsx)(d.U, {
                                    className: "item skeleton",
                                    children: (0, c.jsxs)("a", {
                                        children: [(0, c.jsx)("div", {
                                            className: "thumb"
                                        }), (0, c.jsx)("div", {
                                            className: "info"
                                        }), " "]
                                    })
                                }), (0, c.jsx)(d.U, {
                                    className: "item skeleton",
                                    children: (0, c.jsxs)("a", {
                                        children: [(0, c.jsx)("div", {
                                            className: "thumb"
                                        }), (0, c.jsx)("div", {
                                            className: "info"
                                        }), " "]
                                    })
                                }), (0, c.jsx)(d.U, {
                                    className: "item skeleton",
                                    children: (0, c.jsxs)("a", {
                                        children: [(0, c.jsx)("div", {
                                            className: "thumb"
                                        }), (0, c.jsx)("div", {
                                            className: "info"
                                        }), " "]
                                    })
                                })]
                            }), (0, c.jsx)("div", {
                                className: "item"
                            }), (0, c.jsx)("div", {
                                className: "item"
                            }), (0, c.jsx)("div", {
                                className: "item"
                            }), (0, c.jsx)("div", {
                                className: "item"
                            }), (0, c.jsx)("div", {
                                className: "item"
                            })]
                        })
                    })
                }));
            i.Z = p
        },
        18289: function(t, i, e) {
            e.d(i, {
                AO: function() {
                    return d
                },
                ip: function() {
                    return c
                },
                TP: function() {
                    return p
                },
                U: function() {
                    return g
                },
                dH: function() {
                    return h
                },
                f2: function() {
                    return f
                },
                kl: function() {
                    return u
                },
                bW: function() {
                    return w
                },
                cY: function() {
                    return v
                },
                zH: function() {
                    return b
                },
                qA: function() {
                    return x
                },
                T6: function() {
                    return y
                },
                WS: function() {
                    return j
                }
            });
            var n = e(87379),
                o = e(9671),
                a = e(64575),
                r = [108, 170],
                s = [156, 244],
                l = n.ZP.div.withConfig({
                    displayName: "liststyled__List",
                    componentId: "sc-196ajge-0"
                })([".item{overflow:hidden;&:empty{height:0;", ";}}", ";", ";", ";", ";"], (0, o.vw)("width", 108, 170), (function(t) {
                    return "COLUMN" === t.direction && (0, n.iv)(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;"])
                }), (function(t) {
                    return "ROW" === t.direction && (0, n.iv)(["display:block;.item{}", "{display:block;}"], (0, o.mI)())
                }), (function(t) {
                    return "HORIZONTAL" === t.scroll && (0, n.iv)(["display:block;min-width:3000px;width:", "px;", " .item{float:left;a{", ";}}"], t.scrollWidth, (0, o.i0)(), (0, o.vw)("margin-left", 6))
                }), (function(t) {
                    return t.scrollWidth && (0, n.iv)(["min-width:", "px;width:", "px;.item{a{", ";}}"], t.scrollWidth, t.scrollWidth, (0, o.vw)("margin-left", 6))
                })),
                d = (0, n.ZP)(l).withConfig({
                    displayName: "liststyled__PosterListStyled",
                    componentId: "sc-196ajge-1"
                })(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;", ";&.main{", "{.item{a{width:204px;}.thumb{height:294px;img{height:294px;}}.meta{font-size:14px;}.subject{font-size:18px;margin-top:8px;}}}}"], (function(t) {
                    return t.bg && (0, n.iv)([".item{a{background-color:", ";.info{", ";}}}", "{.item{a{.info{padding:14px;}}}}"], t.bg, (0, o.vw)("padding", 10), (0, o.mI)())
                }), (0, o.mI)()),
                c = (0, n.ZP)(l).withConfig({
                    displayName: "liststyled__EpisodeListStyled",
                    componentId: "sc-196ajge-2"
                })(["& > div{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}}.item{a{", " width:100%;display:flex;align-items:center;}}", ";"], a.r.color.borderDark, (0, o.uM)([15, 0, 15, 0]), (function(t) {
                    return "COLUMN" === t.direction && (0, n.iv)([".item{border-bottom:0;a{display:block;padding:0;", ";overflow:hidden;", ";.thumb{width:100%;", ";img{", ";}}.info{", " flex:none;overflow:hidden;width:100%;.meta{", ";", ";}.subject{line-height:1.4;", ";color:", ";margin-top:0;}}}}"], (0, o.vw)("width", 150, 204), (0, o.vw)("padding-bottom", 40), (0, o.vw)("height", 84, 114), (0, o.vw)("height", 84, 114), (0, o.uM)([6, 0, 0, 0], [14, 0, 0, 0]), (0, o.vw)("font-size", 11, 14), (0, o.vw)("margin-bottom", 2, 5), (0, o.vw)("font-size", 12, 18), a.r.color.default)
                })),
                p = n.ZP.div.withConfig({
                    displayName: "liststyled__ListSorting",
                    componentId: "sc-196ajge-3"
                })(["display:flex;align-items:center;justify-content:space-between;", ";", ";p{color:", ";font-weight:bold;", ";line-height:1.1;display:flex;align-items:center;span{color:", ";", ";}}.sort-m{}.sort-pc{display:none;}", "{p{font-weight:normal;}.sort-m{display:none;}.sort-pc{display:block;}}"], (0, o.vw)("padding-top", 15), (0, o.vw)("padding-bottom", 15, 30), a.r.color.main, (0, o.vw)("font-size", 12, 14), a.r.color.primary, (0, o.vw)("font-size", 12, 20), (0, o.mI)()),
                m = n.ZP.div.withConfig({
                    displayName: "liststyled__Item",
                    componentId: "sc-196ajge-4"
                })(["&.default-image{.thumb{", ';background-color:rgba(255,255,255,0.5);}}a{display:block;position:relative;overflow:hidden;}.thumb{position:relative;background-image:url("/images/logo@3x.png");background-size:20% auto;background-repeat:no-repeat;background-position:center center;}.info{flex:1;', ";}.meta{", ";& + .subject{", ";}}.status{&.active{color:", ";}}.round{", ';position:relative;padding-left:6px;margin-left:5px;&:before{display:block;content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background-color:', ";opacity:0.5;}}.subject{", ";font-weight:bold;overflow:hidden;display:block;& + .date{", ";}}.date{", ';display:block;}&.skeleton{a{&:after{display:block;content:"";position:absolute;left:0;top:0;width:100%;height:100%;transform:translateX(-100%);background:linear-gradient( 90deg,transparent,rgba(255,255,255,0.1),transparent );animation:loading 1s infinite;}.thumb{background-color:rgba(255,255,255,0.1);}.info{&:before{background-color:rgba(255,255,255,0.1);content:"";display:block;', ';border-radius:3px;}&:after{background-color:rgba(255,255,255,0.1);content:"";display:block;', ";", ";border-radius:3px;}}}}&.poster{a{", ";}.thumb{", ";img{height:inherit;}}}&.card{a{", ";}.thumb{", ";img{height:inherit;}}.subject{color:", ";margin-bottom:5px;margin-top:0;}}&.grid-large,&.grid{.info{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;margin-top:0;color:", ";", ";display:flex;align-items:flex-end;background:rgb(2,0,36);background:linear-gradient( 0deg,rgba(2,0,36,0.6) 0%,rgba(0,0,0,0) 50% );}}&.grid{a{", ";}.thumb{", ";img{height:inherit;}}}"], (0, o.Rp)("/images/logo.png", "50% auto"), (0, o.vw)("padding-top", 10, 12), (0, o.vw)("font-size", 10, 12), (0, o.vw)("margin-top", 1, 4), a.r.color.primary, (0, o.vw)("font-size", 10, 12), a.r.color.default, (0, o.vw)("font-size", 12, 14), (0, o.vw)("margin-top", 2), (0, o.vw)("font-size", 12), (0, o.vw)("height", 11), (0, o.vw)("height", 14), (0, o.vw)("margin-top", 10), (0, o.vw)("width", r[0], 204), (0, o.vw)("height", s[0], 294), (0, o.vw)("width", 300, 360), (0, o.vw)("height", 169, 230), a.r.color.main, a.r.color.main, (0, o.vw)("padding", 10), (0, o.vw)("width", 140, 166), (0, o.vw)("height", 140, 166)),
                g = (0, n.ZP)(m).withConfig({
                    displayName: "liststyled__PosterListItemStyled",
                    componentId: "sc-196ajge-5"
                })(["display:flex;align-items:center;", ";a{", ";}.thumb{", ";img{height:inherit;}}@keyframes loading{100%{transform:translateX(100%);}}"], (0, o.vw)("padding-bottom", 40), (0, o.vw)("width", r[0], r[1]), (0, o.vw)("height", s[0], s[1])),
                h = (0, n.ZP)(m).withConfig({
                    displayName: "liststyled__EpisodeListItemStyled",
                    componentId: "sc-196ajge-6"
                })(["a{}.thumb{", ";", ";img{height:inherit;width:inherit;}}.info{", ";flex:1;overflow:hidden;}.subject{", ";color:", ";width:100%;}.status{", ";}", ";"], (0, o.vw)("width", 130, 150), (0, o.vw)("height", 73, 84), (0, o.uM)([0, 0, 0, 15]), (0, o.vw)("font-size", 13, 15), a.r.color.main, (0, o.vw)("font-size", 12), (function(t) {
                    return t.live && (0, n.iv)([".subject{color:#ff0093;}.thumb{&:after{position:absolute;", " ", ' display:block;content:"";', " ", " ", "}}"], (0, o.vw)("left", 9), (0, o.vw)("top", 9), (0, o.vw)("width", 38), (0, o.vw)("height", 21), (0, o.Rp)("/images/badge_live_small.png"))
                })),
                f = (0, n.ZP)(l).withConfig({
                    displayName: "liststyled__UserPlayListStyled",
                    componentId: "sc-196ajge-7"
                })(["", " .item{float:left;a{}}", "{.item{a{}}}"], (0, o.i0)(), (0, o.mI)()),
                u = (0, n.ZP)(m).withConfig({
                    displayName: "liststyled__UserPlayListItemStyled",
                    componentId: "sc-196ajge-8"
                })(["text-align:center;a{", ";}.thumb{", ";background-color:transparent;img{height:inherit;border-radius:50%;}.circle{position:absolute;left:0;top:0;}}", "{.subject{font-weight:normal;.seq{display:block;margin-top:5px;}}}"], (0, o.vw)("width", 84, 170), (0, o.vw)("height", 84, 170), (0, o.mI)()),
                w = n.ZP.div.withConfig({
                    displayName: "liststyled__ProgressbarStyled",
                    componentId: "sc-196ajge-9"
                })(["position:absolute;left:0;bottom:0;", " ", " background-color:", ";"], (0, o.vw)("height", 5), (function(t) {
                    return t.position && (0, n.iv)(["width:", "%;"], t.position / (t.duration / 1e3) * 100)
                }), a.r.color.primary),
                v = n.ZP.div.withConfig({
                    displayName: "liststyled__ScrollWrapperStyled",
                    componentId: "sc-196ajge-10"
                })(["", ";", ";", ";", ";&.user-play-list-scroll{", "{margin-left:40px;margin-right:40px;.list{.item{a{margin-right:42px;}}}}}", "{overflow-x:hidden;.list{transition-duration:300ms;}}"], (function(t) {
                    return "HORIZONTAL" === t.scroll && (0, n.iv)(["overflow-x:auto;scroll-behavior:smooth;padding-bottom:10px;.list{display:block;display:flex;flex-wrap:nowrap;.item{flex:0 0 auto;padding-bottom:0;a{", ';padding-bottom:0;}&:first-child{a{margin-left:0;}}}[class*="liststyled__Item"]{&:last-child{a{', ";}}}}"], (0, o.vw)("margin-right", 6, 20), (0, o.vw)("margin-right", 20, 20))
                }), (function(t) {
                    return t.itemGap && (0, n.iv)([".list{.item{a{", ";}}}"], (0, o.vw)("margin-left", t.itemGap))
                }), (function(t) {
                    return t.wrapperWidth && (0, n.iv)([".list{width:", "px;min-width:", "px;}"], t.wrapperWidth, t.wrapperWidth)
                }), (function(t) {
                    return t.padding && (0, o.uM)(t.padding, [0, 0, 30, 0])
                }), (0, o.mI)(1110), (0, o.mI)(1110)),
                b = n.ZP.div.withConfig({
                    displayName: "liststyled__ScrollWrapperContainerStyled",
                    componentId: "sc-196ajge-11"
                })(["position:relative;.prev2,.next2,.prev,.next{position:absolute;top:50%;transform:translateY(-50%);margin-top:-30px;z-index:10;display:none;&.card{margin-top:-50px;}&.episode{margin-top:-55px;}}.prev2,.next2{margin-top:-42.5px;background-color:transparent;}.prev2{left:0;}.next2{right:0;}.prev{left:-50px;transition:left 0.3s;}.next{right:-50px;transition:right 0.3s;}&:hover{.prev{left:0;}.next{right:0;}}", "{.prev2,.next2,.prev,.next{display:block;}}"], (0, o.mI)(1100)),
                x = n.ZP.div.withConfig({
                    displayName: "liststyled__ListTitleBarStyled",
                    componentId: "sc-196ajge-12"
                })(["display:flex;", " justify-content:space-between;align-items:center;", " h2{font-weight:bold;", ";", " line-height:1;color:", ";", " display:flex;align-items:center;text-overflow:ellipsis;overflow:hidden;.label{display:block;border:1px solid ", ";color:", ";", ";", ";", ";", ";", ";", ";}}.more{display:block;text-align:right;", ";", ";", ";min-width:60px;}"], (0, o.uM)([20, 20, 20, 20], [20, 0, 30, 0]), (function(t) {
                    return t.groupTitle && (0, n.iv)(["padding-bottom:0;padding-top:0;"])
                }), (0, o.vw)("font-size", 17, 24), (function(t) {
                    return t.small && (0, n.iv)(["", ";"], (0, o.vw)("font-size", 15, 24))
                }), a.r.color.main, (0, o.LH)(1), a.r.color.primary, a.r.color.primary, (0, o.vw)("font-size", 12, 13), (0, o.vw)("height", 20, 28), (0, o.vw)("line-height", 20, 28), (0, o.vw)("padding-left", 5), (0, o.vw)("padding-right", 5), (0, o.vw)("margin-right", 8, 10), (0, o.vw)("padding-right", 14), (0, o.vw)("font-size", 14, 16), (0, o.Rp)("/images/arrow_more.png", "7px 13px", "100% 50%")),
                y = n.ZP.div.withConfig({
                    displayName: "liststyled__CurationsWrapper",
                    componentId: "sc-196ajge-13"
                })(['div[class*="liststyled__ListTitleBarStyled"]{', ';}& > div[class*="liststyled__ListTitleBarStyled"]{', ";}.list-group{", ";&:first-child{margin-top:0;}}", "{.list{.item{.subject{font-size:18px;}}}}.grid-wrapper{& > .item{", ";", ";", ";a{width:100%;}.thumb{", ";img{height:inherit;}}.subject{", ";}}.list{.item{&.grid{&:first-child{display:none;}}}}", "{display:flex;& > div{flex:1;margin-right:9px;&:last-child{padding-bottom:0;margin-left:9px;margin-right:0;}.list{flex-wrap:wrap;justify-items:space-between;.item{padding-bottom:0;a{margin-right:0;}&:nth-child(n + 8){display:none;}&:nth-child(n + 5){margin-top:18px;}}}}}}"], (0, o.vw)("padding-bottom", 15, 28), (0, o.vw)("padding-bottom", 0, 20), (0, o.vw)("margin-top", 45, 75), (0, o.mI)(), (0, o.vw)("padding-left", a.r.size.whiteSpace, 0), (0, o.vw)("padding-right", a.r.size.whiteSpace, 0), (0, o.vw)("padding-bottom", 10, 0), (0, o.vw)("height", 200, 350), (0, o.vw)("font-size", 13, 18), (0, o.mI)()),
                j = n.ZP.div.withConfig({
                    displayName: "liststyled__AgeLimitAdultIcon",
                    componentId: "sc-196ajge-14"
                })(["position:absolute;right:6px;top:6px;", ";width:28px;height:28px;"], (0, o.Rp)("/images/age_limit_19_2.png"))
        }
    }
]);