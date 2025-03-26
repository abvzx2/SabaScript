"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [473], {
        11226: function(e, t, i) {
            i.d(t, {
                zx: function() {
                    return s
                },
                JO: function() {
                    return l
                },
                Ls: function() {
                    return c
                },
                fb: function() {
                    return d
                },
                Gh: function() {
                    return p
                },
                jp: function() {
                    return h
                },
                no: function() {
                    return u
                },
                oL: function() {
                    return g
                },
                SZ: function() {
                    return f
                },
                kv: function() {
                    return m
                },
                kL: function() {
                    return x
                },
                cY: function() {
                    return w
                },
                gi: function() {
                    return v
                },
                O1: function() {
                    return b
                },
                rA: function() {
                    return y
                },
                Jc: function() {
                    return j
                },
                jN: function() {
                    return _
                },
                aW: function() {
                    return k
                },
                h2: function() {
                    return C
                }
            });
            var n = i(87379),
                o = i(64575),
                r = i(9671),
                a = i(85893),
                s = n.ZP.button.withConfig({
                    displayName: "Button",
                    componentId: "sc-1dbu5xw-0"
                })(["position:relative;display:block;display:flex;align-items:center;justify-content:center;width:", ";white-space:nowrap;font-weight:bold;", ";", ";padding-left:", "px;padding-right:", "px;", " ", " ", " ", " ", " .icon{", ";}"], (function(e) {
                    return e.full ? "100%" : null
                }), (0, r.vw)("height", o.r.size.button.height.medium), (0, r.vw)("font-size", o.r.size.button.font.medium), (function(e) {
                    return e.paddingLeft ? e.paddingLeft : 10
                }), (function(e) {
                    return e.paddingRight ? e.paddingRight : 10
                }), (function(e) {
                    return ("small" === e.size || "medium" === e.size || "large" === e.size) && (0, n.iv)(["", ";", ";"], (0, r.vw)("height", o.r.size.button.height[e.size], 1.2 * o.r.size.button.height[e.size]), (0, r.vw)("font-size", o.r.size.button.font[e.size], 1.1 * o.r.size.button.font[e.size]))
                }), (function(e) {
                    return "primary" === e.color && (0, n.iv)(["background-color:", ";color:", ";"], o.r.color.primary, o.r.color.main)
                }), (function(e) {
                    return "secondary" === e.color && (0, n.iv)(["background-color:", ";"], o.r.color.secondary)
                }), (function(e) {
                    return "primary" === e.fColor && (0, n.iv)(["color:", ";"], o.r.color.primary)
                }), (function(e) {
                    return e.radius && e.radius > 0 && (0, n.iv)(["", ""], (0, r.vw)("border-radius", e.radius))
                }), (0, r.vw)("margin-right", 4)),
                l = n.ZP.div.withConfig({
                    displayName: "Button__Icon",
                    componentId: "sc-1dbu5xw-1"
                })(["", ";", ";", ";"], (function(e) {
                    return e.path && (0, n.iv)(["", ";"], (0, r.Rp)(e.path))
                }), (function(e) {
                    return e.w && (0, n.iv)(["", ";"], (0, r.vw)("width", e.w[0], e.w[1]))
                }), (function(e) {
                    return e.h && (0, n.iv)(["", ";"], (0, r.vw)("height", e.h[0], e.h[1]))
                })),
                c = n.ZP.div.withConfig({
                    displayName: "Button__ButtonWrap",
                    componentId: "sc-1dbu5xw-2"
                })(["display:flex;justify-content:", ";align-items:", ";", " ", " ", "{", ";}", " ", " .description{", ";", ";}&.hidden{opacity:0;visibility:hidden;height:0;}"], (function(e) {
                    return e.justify && e.justify
                }), (function(e) {
                    return e.align && e.align
                }), (function(e) {
                    return "bottom" === e.fixed && (0, n.iv)(["position:fixed;left:0;bottom:0;right:0;", "{position:static;}"], (0, r.mI)())
                }), (function(e) {
                    return e.whiteSpace && ("object" === typeof e.whiteSpace ? (0, r.uM)(e.whiteSpace) : (0, r.vw)("padding", e.whiteSpace))
                }), (0, r.mI)(), (function(e) {
                    return e.pcWhiteSpace && (0, n.iv)(["padding:", ";"], e.pcWhiteSpace)
                }), (function(e) {
                    return "row" === e.direction && (0, n.iv)(["flex-direction:row;a,button{", ";", ";&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"], (0, r.vw)("margin-left", 4), (0, r.vw)("margin-right", 4))
                }), (function(e) {
                    return "col" === e.direction && (0, n.iv)(["display:flex;flex-direction:column;a,button{", ";&:first-child{margin-top:0;}}"], (0, r.vw)("margin-top", 10))
                }), (0, r.vw)("margin-top", 10), (0, r.vw)("font-size", 12)),
                d = n.ZP.button.withConfig({
                    displayName: "Button__ButtonClose",
                    componentId: "sc-1dbu5xw-3"
                })(["", ";", ';display:flex;align-items:center;justify-content:center;overflow:hidden;text-indent:-5000px;span{margin-left:-5000px;position:absolute;left:-5000px;}&:after{display:block;content:"";', ";", ";", ";}"], (0, r.vw)("width", 30), (0, r.vw)("height", 30), (0, r.vw)("width", 17), (0, r.vw)("height", 17), (0, r.Rp)("/images/icon_close.png")),
                p = n.ZP.button.withConfig({
                    displayName: "Button__ButtonCertification",
                    componentId: "sc-1dbu5xw-4"
                })(["width:100%;display:block;background-color:", ";border:1px solid ", ";", " ", ';&:before{display:block;content:"";', ";", ";", ";margin:0 auto 15px auto;}"], o.r.color.background, o.r.color.border, (0, r.vw)("border-radius", 10), (0, r.vw)("height", 194), (0, r.vw)("width", 38), (0, r.vw)("height", 62), (0, r.Rp)("/images/icon_cellphone.png")),
                h = n.ZP.button.withConfig({
                    displayName: "Button__ButtonBack",
                    componentId: "sc-1dbu5xw-5"
                })(["", ";", ";display:flex;align-items:center;justify-content:center;text-indent:-5000px;&:after{", ";", ';display:block;content:"";', ";}", ""], (0, r.vw)("width", 30), (0, r.vw)("height", 30), (0, r.vw)("width", 17.5), (0, r.vw)("height", 16), (0, r.Rp)("/images/icon_back.png"), (function(e) {
                    return e.color && (0, n.iv)(["&:after{", ";}"], (0, r.Rp)("/images/icon_back_wh.png"))
                })),
                u = n.ZP.button.withConfig({
                    displayName: "Button__ButtonShare",
                    componentId: "sc-1dbu5xw-6"
                })(["", ";", ";display:flex;align-items:center;justify-content:center;text-indent:-5000px;&:before{", ";", ';display:block;content:"";', ";}", ""], (0, r.vw)("width", 30), (0, r.vw)("height", 30), (0, r.vw)("width", 19, 24), (0, r.vw)("height", 19, 24), (0, r.Rp)("/images/icon_share.png"), (function(e) {
                    return e.isLabel && " \n      flex-direction: column;\n      text-indent: 0;\n      ".concat((0, r.vw)("min-width", 50), ";\n      ").concat((0, r.vw)("height", 50), ";\n      ").concat((0, r.vw)("font-size", 11), ";\n      color: #fff;\n      \n      opacity: 0.5;\n      &:before {\n        margin-bottom: 7px;\n      }  \n  ")
                })),
                g = n.ZP.button.withConfig({
                    displayName: "Button__ButtonLike",
                    componentId: "sc-1dbu5xw-8"
                })(["", ";", ";display:flex;align-items:center;justify-content:center;text-indent:-5000px;&:after{", ";", ';display:block;content:"";', " background-size:contain;}"], (0, r.vw)("width", 30), (0, r.vw)("height", 30), (0, r.vw)("width", 22, 27), (0, r.vw)("height", 19, 24), (function(e) {
                    return e.isLike ? (0, r.Rp)("/images/icon_like_fill.png") : (0, r.Rp)("/images/icon_like.png")
                })),
                f = n.ZP.div.withConfig({
                    displayName: "Button__ButtonMore",
                    componentId: "sc-1dbu5xw-9"
                })(["", ";", ";", ";"], (0, r.vw)("width", 40), (0, r.vw)("height", 40), (0, r.Rp)("/images/btn_getmore.png")),
                m = n.ZP.button.withConfig({
                    displayName: "Button__ButtonSort",
                    componentId: "sc-1dbu5xw-10"
                })(["", ";", ";", ";"], (0, r.vw)("font-size", 12), (0, r.Rp)("/images/icon_sort.png", "auto 70%", "0 50%"), (0, r.vw)("padding-left", 16)),
                x = n.ZP.button.withConfig({
                    displayName: "Button__ButtonScrollPrev",
                    componentId: "sc-1dbu5xw-11"
                })(["width:30px;height:50px;background-color:rgba(37,37,37,0.8);", ";transition:opacity 0.4s;&.off{opacity:0.5;}"], (0, r.Rp)("/images/arrow_wh_left.png", "22px auto", "40% 55%")),
                w = n.ZP.button.withConfig({
                    displayName: "Button__ButtonScrollNext",
                    componentId: "sc-1dbu5xw-12"
                })(["width:30px;height:50px;background-color:rgba(37,37,37,0.8);", ";transition:opacity 0.4s;&.off{opacity:0.5;}"], (0, r.Rp)("/images/arrow_wh_right.png", "22px auto", "60% 55%")),
                v = n.ZP.button.withConfig({
                    displayName: "Button__ButtonBoardWrite",
                    componentId: "sc-1dbu5xw-13"
                })(["display:inline-flex;flex-direction:row;justify-content:center;align-items:center;background-color:", ";", ";", ";", ";", ";", ';&:before{display:block;content:"";', ";", ";", ";", ";}"], o.r.color.backgroundLight, (0, r.vw)("height", 28), (0, r.vw)("padding-left", 15), (0, r.vw)("padding-right", 15), (0, r.vw)("border-radius", 2), (0, r.vw)("font-size", 10), (0, r.vw)("width", 11), (0, r.vw)("height", 11), (0, r.vw)("margin-right", 3), (0, r.Rp)("/images/icon_write.png")),
                b = n.ZP.a.withConfig({
                    displayName: "Button__ButtonPlay",
                    componentId: "sc-1dbu5xw-14"
                })(["", ";", ";", ";", "{", ";}"], (0, r.vw)("width", 33, 54), (0, r.vw)("height", 43, 71), (0, r.Rp)("/images/player_play.png"), (0, r.mI)(), (0, r.Rp)("/images/player_play_pc.png")),
                y = n.ZP.a.withConfig({
                    displayName: "Button__ButtonPause",
                    componentId: "sc-1dbu5xw-15"
                })(["", ";", ";", ";", "{", ";}"], (0, r.vw)("width", 33, 54), (0, r.vw)("height", 43, 71), (0, r.Rp)("/images/player_pause.png", "16px 43px"), (0, r.mI)(), (0, r.Rp)("/images/player_pause_pc.png", "26px 76px")),
                j = n.ZP.a.withConfig({
                    displayName: "Button__ButtonPrev10",
                    componentId: "sc-1dbu5xw-16"
                })(["", ";", ";", ";", "{", ";}"], (0, r.vw)("width", 34, 40), (0, r.vw)("height", 37, 44), (0, r.Rp)("/images/player_prev10.png"), (0, r.mI)(), (0, r.Rp)("/images/player_prev10_pc.png")),
                _ = n.ZP.a.withConfig({
                    displayName: "Button__ButtonNext10",
                    componentId: "sc-1dbu5xw-17"
                })(["", ";", ";", ";", "{", ";}"], (0, r.vw)("width", 34, 40), (0, r.vw)("height", 37, 44), (0, r.Rp)("/images/player_next10.png"), (0, r.mI)(), (0, r.Rp)("/images/player_next10_pc.png")),
                k = function(e) {
                    var t = e.changePhoto,
                        i = e.active;
                    return (0, a.jsxs)(N, {
                        className: i ? "active" : "",
                        children: [(0, a.jsx)("input", {
                            type: "file",
                            onChange: t
                        }), "\uc0ac\uc9c4"]
                    })
                },
                N = n.ZP.button.withConfig({
                    displayName: "Button__ButtonPhotoUploadStyled",
                    componentId: "sc-1dbu5xw-18"
                })(["display:flex;align-items:center;", ';line-height:1;position:relative;input{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;opacity:0;}&:before{display:block;content:"";', ";", ";", ";", ";}&.active{color:", ";&:before{", ";}}"], (0, r.vw)("font-size", 12, 14), (0, r.Rp)("/images/icon_photo_camera.png", "contain"), (0, r.vw)("width", 11, 14), (0, r.vw)("height", 9, 11), (0, r.vw)("margin-right", 4), o.r.color.main, (0, r.Rp)("/images/icon_photo_camera_wh.png", "contain")),
                C = n.ZP.button.withConfig({
                    displayName: "Button__ButtonSnsShare",
                    componentId: "sc-1dbu5xw-19"
                })(["", ";", ";display:flex;align-items:center;justify-content:center;text-indent:-5000px;", " ", " ", " ", " ", ""], (0, r.vw)("width", 50), (0, r.vw)("height", 50), (function(e) {
                    return "facebook" === e.sns && (0, r.Rp)("/images/shareFacebook.png")
                }), (function(e) {
                    return "kakaotalk" === e.sns && (0, r.Rp)("/images/shareKakao.png")
                }), (function(e) {
                    return "twitter" === e.sns && (0, r.Rp)("/images/shareTwitter.png")
                }), (function(e) {
                    return "url" === e.sns && (0, r.Rp)("/images/shareUrl.png")
                }), (function(e) {
                    return "more" === e.sns && (0, r.Rp)("/images/shareMore.png")
                }))
        },
        94435: function(e, t, i) {
            var n = i(67294),
                o = i(87379),
                r = i(9671),
                a = i(62820),
                s = i(85893),
                l = o.ZP.img.withConfig({
                    displayName: "CdnImage__CdnImg",
                    componentId: "qocsaa-0"
                })(["object-fit:none;", ";"], (function(e) {
                    return e.fit && (0, o.iv)(["object-fit:", ";"], e.fit)
                }));
            t.Z = function(e) {
                var t = e.children,
                    i = e.cdnSrc,
                    o = void 0 === i ? "" : i,
                    c = e.width,
                    d = void 0 === c ? 300 : c,
                    p = e.fit,
                    h = void 0 === p ? "contain" : p,
                    u = e.type,
                    g = void 0 === u ? "thumb" : u,
                    f = e.className,
                    m = void 0 === f ? "" : f,
                    x = e.lazy,
                    w = void 0 !== x && x,
                    v = (0, n.useRef)(null),
                    b = (0, n.useState)(!1),
                    y = b[0],
                    j = b[1];
                (0, n.useEffect)((function() {
                    v.current && new IntersectionObserver(k, {
                        threshold: .2
                    }).observe(v.current)
                }), [v.current]);
                var _, k = function(e, t) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            j(!0), t.unobserve(e.target);
                            var i = e.target.querySelector("img");
                            i.src = i.dataset.src
                        }
                    }))
                };
                return "" != o && o ? (0, s.jsx)(s.Fragment, {
                    children: w ? (0, s.jsx)("div", {
                        ref: v,
                        children: y ? (0, s.jsx)(l, {
                            src: "",
                            "data-src": "src" === g ? o : (0, r.L5)(o, d),
                            width: d,
                            fit: h,
                            alt: "",
                            className: m,
                            children: t
                        }) : (0, s.jsx)(a.g, {
                            height: "250px"
                        })
                    }) : (0, s.jsx)(l, {
                        src: "src" === g ? o : null !== (_ = (0, r.L5)(o, d)) && void 0 !== _ ? _ : void 0,
                        width: d,
                        fit: h,
                        alt: "",
                        className: m,
                        children: t
                    })
                }) : (0, s.jsx)("div", {
                    children: o
                })
            }
        },
        3795: function(e, t, i) {
            i.d(t, {
                Vq: function() {
                    return a
                },
                W2: function() {
                    return s
                }
            });
            var n = i(87379),
                o = i(9671),
                r = i(64575),
                a = n.ZP.div.withConfig({
                    displayName: "Common__OnlyPc",
                    componentId: "sc-1immaas-0"
                })(["display:none;", "{display:block;}"], (0, o.mI)()),
                s = n.ZP.div.withConfig({
                    displayName: "Common__Container",
                    componentId: "sc-1immaas-1"
                })(["max-width:", "px;", "{width:100%;margin:0 auto;position:relative;padding-left:15px;padding-right:15px;max-width:", "px;}"], r.r.size.container, (0, o.mI)(), r.r.size.container + 30);
            (0, o.vw)("padding-top", 20), (0, o.vw)("padding-bottom", 20), (0, o.vw)("font-size", 18), (0, o.vw)("margin-bottom", 10), (0, o.vw)("padding-left", 20), (0, o.vw)("padding-right", 20), (0, o.vw)("border-radius", 14), (0, o.vw)("padding-bottom", 20), (0, o.vw)("padding-left", 20), (0, o.vw)("padding-right", 20), (0, o.vw)("margin-bottom", 15), (0, o.vw)("padding-left", 16.5), (0, o.vw)("border-radius", 8), (0, o.vw)("padding-left", 3.5), (0, o.vw)("padding-right", 3.5), (0, o.vw)("padding-left", 20), (0, o.vw)("padding-right", 20), (0, o.vw)("width", 8), (0, o.vw)("height", 8), r.r.color.backgroundLight, (0, o.vw)("margin-left", 5), (0, o.vw)("margin-right", 5), r.r.color.main
        },
        54039: function(e, t, i) {
            var n = i(87379),
                o = i(67294),
                r = i(9671),
                a = i(11226),
                s = i(64575),
                l = i(85893),
                c = .5,
                d = n.ZP.div.withConfig({
                    displayName: "Modal__ModalOverlay",
                    componentId: "q3lp50-0"
                })(["box-sizing:border-box;position:fixed;top:100%;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.7);z-index:999;transition:opacity ", "s;opacity:0;&.show{top:0;opacity:1;", ";}&.hide{transition:top 0s ", "s,opacity ", "s;}"], c, (function(e) {
                    return !1 === e.isOverlay && (0, n.iv)(["opacity:0;"])
                }), c, c),
                p = n.ZP.div.withConfig({
                    displayName: "Modal__ModalWrapper",
                    componentId: "q3lp50-1"
                })(["box-sizing:border-box;position:fixed;top:100%;right:0;bottom:0;left:0;z-index:1000;outline:0;&.show{top:0;}&.hide{top:100%;transition:top 0s ", "s;}"], c),
                h = n.ZP.div.withConfig({
                    displayName: "Modal__ModalInner",
                    componentId: "q3lp50-2"
                })(["box-sizing:border-box;position:fixed;box-shadow:0 0 6px 0 rgba(0,0,0,0.5);background-color:", ";", " ", " width:100%;border-radius:10px;max-width:", "px;", " right:0;bottom:0;left:50%;transform:translate(-50%,100%);transition:all ", "s;", ";opacity:0;will-change:transform;z-index:1001;background-color:", ";.title{color:", ";", ";font-weight:bold;line-height:1;padding-top:10px;}&.full{top:0;overflow-y:auto;", "{top:auto;}}&.show{opacity:1;transform:translate(-50%,0);}.modal-close{position:absolute;", ";", ";}", ";", "{border-radius:10px;&.show{transform:translate(-50%,50%);bottom:50%;}", ";", ";", ";", ";}"], s.r.color.background, (0, r.vw)("border-top-left-radius", 10), (0, r.vw)("border-top-right-radius", 10), (function(e) {
                    return e.width && e.width
                }), (function(e) {
                    return e.maxHeight && (0, n.iv)(["max-height:", "px;"], e.maxHeight)
                }), c, (0, r.vw)("padding", 25), (function(e) {
                    return e.bgColor && e.bgColor
                }), s.r.color.main, (0, r.vw)("font-size", 22), (0, r.mI)(), (0, r.vw)("top", 25), (function(e) {
                    return "left" === e.closePosition ? (0, n.iv)(["", ""], (0, r.vw)("left", 25)) : (0, n.iv)(["", ""], (0, r.vw)("right", 25))
                }), (function(e) {
                    return "center" === e.position && (0, n.iv)(["transition:opacity ", "s;&.show{transform:translate(-50%,50%);bottom:50%;}"], c)
                }), (0, r.mI)(), (function(e) {
                    return "rightBottom" === e.position && (0, n.iv)(["left:auto;transform:translate(-30px,100%);&.show{left:auto;transform:translate(-30px,-30px);bottom:0;}"])
                }), (function(e) {
                    return "centerFull" === e.position && (0, n.iv)(["&.show{transform:translate(-50%,15%);bottom:15%;max-height:calc(100vh - 100px);}"])
                }), (function(e) {
                    return "centerRightFull" === e.position && (0, n.iv)(["&.show{background-color:#252525;transform:translate(70%,15%);bottom:15%;max-height:calc(100vh - 100px);}"])
                }), (function(e) {
                    return "center" === e.position && (0, n.iv)(["&.show{transform:translate(-50%,50%);bottom:50%;}"])
                }));
            t.Z = function(e) {
                var t, i = e.visible,
                    n = void 0 !== i && i,
                    r = e.children,
                    s = e.full,
                    c = void 0 !== s && s,
                    u = e.onClose,
                    g = e.isCloseButton,
                    f = void 0 === g || g,
                    m = e.bgColor,
                    x = void 0 === m ? "#1b1b1b" : m,
                    w = e.isOverlay,
                    v = void 0 === w || w,
                    b = e.width,
                    y = void 0 === b ? 480 : b,
                    j = e.maxHeight,
                    _ = void 0 === j ? 0 : j,
                    k = e.position,
                    N = e.title,
                    C = e.closePosition,
                    P = void 0 === C ? "right" : C,
                    I = function(e) {
                        u(e)
                    },
                    z = n ? "show" : "hide";
                return t = n, (0, o.useLayoutEffect)((function() {
                    return document.body.style.overflow = t ? "hidden" : "hidden auto",
                        function() {
                            document.body.style.overflow = "hidden auto"
                        }
                }), [t]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(d, {
                        className: "modal-overlay " + z,
                        isOverlay: v
                    }), (0, l.jsx)(p, {
                        className: "modal-wrapper " + z,
                        onClick: function(e) {
                            e.target === e.currentTarget && I(e)
                        },
                        children: (0, l.jsxs)(h, {
                            className: "modal-inner ".concat(z, " ").concat(c ? " full" : ""),
                            bgColor: x,
                            width: y,
                            maxHeight: _,
                            position: k,
                            closePosition: P,
                            children: [N && (0, l.jsx)("h1", {
                                className: "title",
                                children: N
                            }), r, f && (0, l.jsx)(a.fb, {
                                onClick: I,
                                className: "modal-close",
                                children: (0, l.jsx)("span", {
                                    children: "\ub2eb\uae30"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        60473: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return $
                }
            });
            var n = i(67294),
                o = i(9008),
                r = i(87379),
                a = i(64575),
                s = i(41664),
                l = i(54039),
                c = i(9671),
                d = i(11226),
                p = i(85893),
                h = r.ZP.a.withConfig({
                    displayName: "Logo__StyleLogo",
                    componentId: "sc-1jsccdz-0"
                })(["width:", ";height:", ";text-indent:-5000px;overflow:hidden;display:block;", ";"], (function(e) {
                    return e.ww ? e.ww + "px" : "0px"
                }), (function(e) {
                    return e.hh ? e.hh + "px" : "0px"
                }), (0, c.Rp)("/images/logo.png")),
                u = function(e) {
                    var t = e.sizeWidth,
                        i = void 0 === t ? 30 : t,
                        n = e.sizeHeight,
                        o = void 0 === n ? 32 : n;
                    return (0, p.jsx)(s.default, {
                        href: "/",
                        children: (0, p.jsx)(h, {
                            ww: i,
                            hh: o,
                            children: "Dorama Korea"
                        })
                    })
                },
                g = i(30172),
                f = i(52997),
                m = i(7649),
                x = i(11163),
                w = i(66828),
                v = i(9261);
            g.Z.use([f.Z, m.Z]);
            var b = r.ZP.nav.withConfig({
                    displayName: "Nav__NavWrapper",
                    componentId: "zfpvto-0"
                })(["ul{", ";", ";li{.logout,.name,.label,.charge{font-weight:bold;", ";", ";", ";", ";", ";display:block;}.name{color:", ";&.active{color:", ";}}.label{}.charge{", ";", ";background-color:", ";display:flex;", ';&:before{content:"";display:block;', ";", ";", ";", ";}}.logout{color:#575757;}}}&.device-pc{ul{display:flex;li{a{font-size:15px;}}}}"], (0, c.vw)("padding-top", 10), (0, c.vw)("padding-bottom", 10), (0, c.vw)("padding-left", 20), (0, c.vw)("padding-right", 20), (0, c.vw)("padding-top", 15), (0, c.vw)("padding-bottom", 15), (0, c.vw)("font-size", 18), a.r.color.main, a.r.color.primary, (0, c.vw)("padding-top", 20), (0, c.vw)("padding-bottom", 20), a.r.color.background, (0, c.vw)("margin-bottom", 10), (0, c.vw)("width", 17), (0, c.vw)("height", 17), (0, c.Rp)("/images/icon_coin.png"), (0, c.vw)("margin-right", 10)),
                y = function(e) {
                    var t = e.isPc,
                        i = void 0 !== t && t,
                        o = e.onClose,
                        r = (0, x.useRouter)(),
                        a = (0, w.Z)(),
                        l = a.filtersStore,
                        c = a.userStore,
                        d = (0, n.useContext)(v.GlobalContext).isMobile;
                    return (0, p.jsx)(b, {
                        className: i ? "device-pc" : "",
                        children: (0, p.jsxs)("ul", {
                            children: [(0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/",
                                    children: (0, p.jsx)("a", {
                                        className: "name ".concat("/" === r.route ? "active" : ""),
                                        children: "\ud648"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/explore",
                                    children: (0, p.jsx)("a", {
                                        onClick: "/explore" === r.route ? function(e) {
                                            return function(e) {
                                                e.preventDefault(), o && o(), l.resetSelectedFilters(), l.setFilters(), r.push("/explore")
                                            }(e)
                                        } : void 0,
                                        className: "name ".concat("/explore" === r.route ? "active" : ""),
                                        children: "\uc804\uccb4\ubcf4\uae30"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/schedule",
                                    children: (0, p.jsx)("a", {
                                        className: "name ".concat("/schedule" === r.route ? "active" : ""),
                                        children: "\uc2a4\ucf00\uc904"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/community",
                                    children: (0, p.jsx)("a", {
                                        className: "name ".concat(r.route.includes("/post/[type]") || r.route.includes("/post/review") || r.route.includes("/community") ? "active" : ""),
                                        children: "\ucee4\ubba4\ub2c8\ud2f0"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/contact",
                                    children: (0, p.jsx)("a", {
                                        className: "name ".concat(r.route.includes("/contact") ? "active" : ""),
                                        children: "\uad11\uace0/\uc81c\ud734"
                                    })
                                })
                            }), d && (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/post/faq",
                                    children: (0, p.jsx)("a", {
                                        className: "name ".concat(r.route.includes("/post/faq") ? "active" : ""),
                                        children: "\uace0\uac1d\uc13c\ud130"
                                    })
                                })
                            }), !i && (0, p.jsx)(p.Fragment, {
                                children: c.logged && !0 === c.logged && (0, p.jsx)("li", {
                                    children: (0, p.jsx)("a", {
                                        className: "logout",
                                        onClick: function() {
                                            return c.logout()
                                        },
                                        children: "\ub85c\uadf8\uc544\uc6c3"
                                    })
                                })
                            })]
                        })
                    })
                },
                j = i(77206);
            g.Z.use([f.Z, m.Z]);
            var _ = function(e) {
                    var t = e.profile_image,
                        i = void 0 === t ? "/images/profile_default.png" : t,
                        n = e.nickname;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)("div", {
                            className: "photo",
                            children: [(0, p.jsx)("input", {
                                type: "file"
                            }), (0, p.jsx)("img", {
                                src: i,
                                className: "cover",
                                loading: "lazy"
                            })]
                        }), (0, p.jsxs)("div", {
                            className: "namebar",
                            children: [(0, p.jsxs)("span", {
                                className: "name",
                                children: [n, " \ub2d8"]
                            }), (0, p.jsx)(s.default, {
                                href: "/user",
                                children: (0, p.jsx)("a", {
                                    children: "\ub9c8\uc774\ud398\uc774\uc9c0"
                                })
                            })]
                        })]
                    })
                },
                k = function() {
                    return (0, p.jsx)(p.Fragment, {
                        children: (0, p.jsxs)("div", {
                            className: "guest",
                            children: [(0, p.jsx)(u, {}), (0, p.jsxs)("h2", {
                                children: [(0, p.jsx)(s.default, {
                                    href: "/login",
                                    children: (0, p.jsx)("a", {
                                        children: "\ub85c\uadf8\uc778"
                                    })
                                }), "/", (0, p.jsx)(s.default, {
                                    href: "/signup",
                                    children: (0, p.jsx)("a", {
                                        children: "\ud68c\uc6d0\uac00\uc785"
                                    })
                                })]
                            })]
                        })
                    })
                },
                N = (0, j.Pi)((function() {
                    var e = (0, x.useRouter)(),
                        t = (0, w.Z)().userStore,
                        i = (0, n.useState)(!1),
                        o = i[0],
                        r = i[1];
                    (0, n.useEffect)((function() {
                        return r(!1),
                            function() {
                                r(!1)
                            }
                    }), [e]);
                    var a = function() {
                        r(!1)
                    };
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)(C, {
                            onClick: function() {
                                r(!0)
                            },
                            children: ["\uba54\ub274", (0, p.jsx)("span", {})]
                        }), (0, p.jsx)(P, {
                            children: (0, p.jsxs)(l.Z, {
                                visible: o,
                                onClose: a,
                                full: !0,
                                isCloseButton: !1,
                                children: [(0, p.jsxs)(I, {
                                    children: [!0 === t.logged ? (0, p.jsx)(_, {
                                        nickname: t.user.nickname,
                                        profile_image: t.user.profile_image ? (0, c.ex)(t.user.profile_image, 140) : void 0
                                    }) : (0, p.jsx)(k, {}), (0, p.jsx)(d.fb, {
                                        onClick: a,
                                        className: "close",
                                        children: (0, p.jsx)("span", {
                                            children: "\ub2eb\uae30"
                                        })
                                    })]
                                }), (0, p.jsx)(y, {
                                    onClose: function() {
                                        return a()
                                    }
                                })]
                            })
                        })]
                    })
                })),
                C = r.ZP.button.withConfig({
                    displayName: "Menu__ButtonMenu",
                    componentId: "sc-1movi9b-0"
                })(['width:30px;height:30px;text-indent:-5000px;overflow:hidden;position:relative;& > span,&:after,&:before{position:absolute;left:50%;top:50%;content:"";background-color:#fff;width:23px;height:2px;margin-left:-11.5px;}&:before{margin-top:-7px;}&:after{margin-top:7px;}& > span{}']),
                P = r.ZP.div.withConfig({
                    displayName: "Menu__StyledModalMenu",
                    componentId: "sc-1movi9b-1"
                })([".modal-inner{padding:0;}"]),
                I = r.ZP.div.withConfig({
                    displayName: "Menu__User",
                    componentId: "sc-1movi9b-2"
                })(["background-color:", ";display:flex;align-items:center;", ";", ";.guest{flex:1;height:100%;display:flex;flex-direction:column;justify-content:space-between;h2{font-weight:bold;color:", ";", ";}}.photo{position:relative;input{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;}.cover{", " ", " object-fit:cover;border-radius:50%;}}.namebar{", ";flex:1;.name{font-weight:bold;", ";color:", ";display:block;", ";}a{", ";}}"], a.r.color.background, (0, c.vw)("height", 136), (0, c.vw)("padding", 20), a.r.color.main, (0, c.vw)("font-size", 18), (0, c.vw)("width", 70), (0, c.vw)("height", 70), (0, c.vw)("margin-left", 20), (0, c.vw)("font-size", 18), a.r.color.main, (0, c.vw)("margin-bottom", 5), (0, c.vw)("font-size", 12)),
                z = N,
                Z = i(94435),
                B = r.ZP.header.withConfig({
                    displayName: "Header__HeaderBar",
                    componentId: "sc-11wjkpc-0"
                })(["background-color:", ";", ";", ";", ";display:flex;align-items:center;justify-content:space-between;&.transparent{background-color:transparent;}&.fixed{position:fixed;left:0;top:0;right:0;z-index:10;}@media (orientation:landscape){&.fixed{position:static;}}&.absolute{position:absolute;left:0;top:0;right:0;z-index:10;}& > div{display:flex;align-items:center;flex:1;&:first-child{justify-content:flex-start;}&:last-child{justify-content:flex-end;}}h1{font-weight:bold;", ";line-height:1;color:", ";}.logo{", ";", ";text-indent:-5000px;overflow:hidden;display:block;&.empty-appconf{", ";}}", "{display:none;}"], a.r.color.background, (0, c.vw)("height", a.r.size.header), (0, c.vw)("padding-left", 18), (0, c.vw)("padding-right", 18), (0, c.vw)("font-size", 20), a.r.color.main, (0, c.vw)("width", 32), (0, c.vw)("height", 30), (0, c.Rp)("/images/logo.png"), (0, c.mI)()),
                R = r.ZP.button.withConfig({
                    displayName: "Header__ButtonBack",
                    componentId: "sc-11wjkpc-1"
                })(["", ";", ";", ";background-size:", " ", ";text-indent:-5000px;"], (0, c.vw)("width", 30), (0, c.vw)("height", 30), (0, c.Rp)("/images/icon_back.png"), (0, c._w)(17.5), (0, c._w)(16)),
                S = r.ZP.button.withConfig({
                    displayName: "Header__ButtonSearch",
                    componentId: "sc-11wjkpc-2"
                })(["", ";", ";", ";", ";text-indent:-5000px;"], (0, c.vw)("width", 30), (0, c.vw)("height", 30), (0, c.Rp)("/images/icon_search.png"), (0, c.vw)("background-size", 19)),
                H = r.ZP.div.withConfig({
                    displayName: "Header__PageTitlebar",
                    componentId: "sc-11wjkpc-3"
                })(["background-color:", ";", ";", ";", ";display:flex;justify-content:center;flex-direction:column;h2{color:", ";font-weight:bold;", ";line-height:1.2;}.desc{color:#aaaaaa;font-weight:500;", ";", ";}", "{display:none;}"], a.r.color.background, (0, c.vw)("height", 68), (0, c.vw)("padding-left", 20), (0, c.vw)("padding-right", 20), a.r.color.main, (0, c.vw)("font-size", 22), (0, c.vw)("margin-top", 5), (0, c.vw)("font-size", 12), (0, c.mI)()),
                F = function(e) {
                    var t, i = e.pageTitle,
                        o = e.pageDesc,
                        r = e.headerChildren,
                        a = void 0 === r ? ["menu", "search"] : r,
                        l = e.headerTitle,
                        c = e.transparent,
                        h = void 0 !== c && c,
                        u = e.fixed,
                        g = void 0 !== u && u,
                        f = e.pageType,
                        m = e.absolute,
                        w = e.headerBackEvent,
                        b = e.headerRight,
                        y = (0, x.useRouter)(),
                        j = {
                            logo: a.indexOf("logo") > -1,
                            back: a.indexOf("back") > -1,
                            menu: a.indexOf("menu") > -1,
                            search: a.indexOf("search") > -1,
                            share: a.indexOf("share") > -1,
                            like: a.indexOf("like") > -1,
                            close: a.indexOf("close") > -1
                        },
                        _ = (0, n.useContext)(v.GlobalContext).appconfs,
                        k = h ? "transparent" : "",
                        N = g ? "fixed" : "",
                        C = m ? "absolute" : "";
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)(B, {
                            className: "".concat(k, " ").concat(N, " ").concat(C),
                            children: [(0, p.jsxs)("div", {
                                children: [j.back && (0, p.jsx)(R, {
                                    onClick: function(e) {
                                        w ? w(e) : x.default.back()
                                    },
                                    children: "\ub4a4\ub85c"
                                }), j.logo && (0, p.jsx)(s.default, {
                                    href: "/",
                                    children: (0, p.jsx)("a", {
                                        className: "".concat(_["dorama-logo"] ? "" : "logo empty-appconf"),
                                        children: _["dorama-logo"] && (0, p.jsx)(Z.Z, {
                                            className: "logo",
                                            type: "src",
                                            cdnSrc: null === (t = _["dorama-logo"]) || void 0 === t ? void 0 : t.image_m
                                        })
                                    })
                                })]
                            }), l && (0, p.jsx)("h1", {
                                children: l
                            }), b ? (0, p.jsx)("div", {
                                children: b
                            }) : (0, p.jsxs)("div", {
                                children: [j.search && (0, p.jsx)(s.default, {
                                    href: "/search",
                                    children: (0, p.jsx)(S, {
                                        children: "\uac80\uc0c9"
                                    })
                                }), j.close && (0, p.jsx)(d.fb, {
                                    onClick: function() {
                                        return y.back()
                                    },
                                    children: "\ub2eb\uae30"
                                }), j.menu && (0, p.jsx)(z, {})]
                            })]
                        }), i && "plog" != f && (0, p.jsxs)(H, {
                            children: [(0, p.jsx)("h2", {
                                children: i
                            }), o && (0, p.jsx)("span", {
                                className: "desc",
                                children: o
                            })]
                        }), f && "plog" == f && (0, p.jsx)(H, {
                            children: (0, p.jsx)("h2", {
                                children: i
                            })
                        })]
                    })
                },
                L = i(3795),
                M = (0, j.Pi)((function(e) {
                    var t, i = e.isHeaderBorder,
                        o = void 0 !== i && i,
                        r = (0, n.useContext)(v.GlobalContext).appconfs,
                        a = (0, w.Z)().userStore,
                        l = (0, n.useState)(!1),
                        c = l[0],
                        d = l[1];
                    return (0, p.jsx)(q, {
                        className: o ? "border-bottom" : "",
                        children: (0, p.jsxs)(D, {
                            children: [(0, p.jsx)(E, {
                                children: (0, p.jsxs)(L.W2, {
                                    className: "container",
                                    children: [a.logged ? (0, p.jsxs)("div", {
                                        className: "user-name",
                                        children: [(0, p.jsxs)("button", {
                                            type: "button",
                                            onClick: function() {
                                                d(!c)
                                            },
                                            children: [a.user.nickname, (0, p.jsx)("span", {})]
                                        }), (0, p.jsx)(W, {
                                            open: c
                                        })]
                                    }) : (0, p.jsx)(s.default, {
                                        href: "/login",
                                        children: (0, p.jsx)("a", {
                                            children: "\ub85c\uadf8\uc778"
                                        })
                                    }), (0, p.jsx)(s.default, {
                                        href: "/post/faq",
                                        children: (0, p.jsx)("a", {
                                            children: "\uace0\uac1d\uc13c\ud130"
                                        })
                                    })]
                                })
                            }), (0, p.jsx)(O, {
                                children: (0, p.jsxs)(L.W2, {
                                    className: "container",
                                    children: [(0, p.jsxs)("div", {
                                        className: "menu-group",
                                        children: [(0, p.jsx)(s.default, {
                                            href: "/",
                                            children: (0, p.jsx)("a", {
                                                className: "".concat(r["dorama-logo"] ? "" : "logo empty-appconf"),
                                                children: r["dorama-logo"] && (0, p.jsx)(Z.Z, {
                                                    className: "logo",
                                                    type: "src",
                                                    cdnSrc: null === (t = r["dorama-logo"]) || void 0 === t ? void 0 : t.image_d
                                                })
                                            })
                                        }), (0, p.jsx)(y, {
                                            isPc: !0
                                        })]
                                    }), (0, p.jsx)(s.default, {
                                        href: "/search",
                                        children: (0, p.jsx)("a", {
                                            className: "search",
                                            children: "\uac80\uc0c9\ud558\uae30"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })),
                O = r.ZP.div.withConfig({
                    displayName: "HeaderPc__HeaderMenu",
                    componentId: "nc9k3i-0"
                })(["& > div{height:84px;display:flex;align-items:center;justify-content:space-between;}.logo{cursor:pointer;margin-right:10px;width:46px;height:44px;&.empty-appconf{", ";}}.menu-group{display:flex;align-items:center;}.search{font-weight:bold;font-size:15px;display:flex;color:", ';&:before{display:block;margin-right:6px;content:"";width:16px;height:15px;', "}}"], (0, c.Rp)("/images/logo_pc.png"), a.r.color.main, (0, c.Rp)("/images/icon_search.png")),
                W = (0, j.Pi)((function(e) {
                    var t = e.open,
                        i = (0, w.Z)().userStore;
                    return (0, p.jsxs)(T, {
                        className: t ? "open" : "",
                        children: [(0, p.jsxs)("div", {
                            className: "profile",
                            children: [(0, p.jsx)("img", {
                                src: i.user.profile_image ? (0, c.ex)(i.user.profile_image, 76) : "/images/profile_default@3x.png",
                                alt: "",
                                className: "photo",
                                loading: "lazy"
                            }), (0, p.jsx)("span", {
                                className: "name",
                                children: i.user.nickname
                            })]
                        }), (0, p.jsxs)("ul", {
                            children: [(0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/user",
                                    children: (0, p.jsx)("a", {
                                        children: "\ub9c8\uc774\ub3c4\ub77c\ub9c8"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(s.default, {
                                    href: "/user/manage",
                                    children: (0, p.jsx)("a", {
                                        children: "\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)("a", {
                                    onClick: function() {
                                        return i.logout()
                                    },
                                    children: "\ub85c\uadf8\uc544\uc6c3"
                                })
                            })]
                        })]
                    })
                })),
                T = r.ZP.div.withConfig({
                    displayName: "HeaderPc__SUserMenu",
                    componentId: "nc9k3i-1"
                })(["background-color:#0f0f0f;position:absolute;left:50%;top:100%;min-width:135px;z-index:999;transform:translate(-50%,-200%);margin-top:6px;text-align:center;padding:14px;border-radius:4px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);opacity:0;transition:opacity 0.5s;&.open{opacity:1;transform:translate(-50%,0);}.profile{.photo{margin:0 auto;width:76px;height:76px;border-radius:50%;object-fit:cover;}.name{color:", ";display:block;margin-top:12px;}}ul{margin-top:6px;li{font-size:13px;padding:5px 0;a{display:block;}}}"], a.r.color.main),
                E = r.ZP.div.withConfig({
                    displayName: "HeaderPc__HeaderTop",
                    componentId: "nc9k3i-2"
                })(["border-bottom:1px solid ", ';& > div{display:flex;justify-content:flex-end;height:39px;align-items:center;.user-name,a{&:after{display:inline;content:"|";margin-left:10px;margin-right:10px;}&:last-child{&:after{display:none;}}}.user-name{display:flex;align-items:center;position:relative;& > button{display:flex;align-items:center;span{display:block;width:7px;height:4px;margin-left:5px;', ";}}}}"], a.r.color.borderDark, (0, c.Rp)("/images/arrow_down_small.png")),
                D = r.ZP.div.withConfig({
                    displayName: "HeaderPc__Header",
                    componentId: "nc9k3i-3"
                })(["background-color:", ";"], a.r.color.backgroundBody),
                q = r.ZP.div.withConfig({
                    displayName: "HeaderPc__HeaderWrapper",
                    componentId: "nc9k3i-4"
                })(["position:relative;height:", "px;display:none;", "{display:block;&.border-bottom{border-bottom:1px solid ", ";}}"], 125, (0, c.mI)(), a.r.color.borderDark),
                U = M,
                Y = (0, j.Pi)((function(e) {
                    var t = e.children,
                        i = e.scrollFixed,
                        o = void 0 !== i && i,
                        r = (0, w.Z)().scheduleStore,
                        a = (0, n.useRef)(null),
                        s = (0, n.useState)(!1),
                        l = s[0],
                        c = s[1];
                    (0, n.useEffect)((function() {
                        a.current && r.selectedDayOffsetY > 0 && (window.scrollTo({
                            top: 124,
                            behavior: "smooth"
                        }), a.current.scrollTo({
                            behavior: "smooth",
                            top: r.selectedDayOffsetY - (a.current.offsetHeight / 2 - 100)
                        }))
                    }), [a.current, r.selectedDayOffsetY]), (0, n.useEffect)((function() {
                        if (o) return window.addEventListener("scroll", d),
                            function() {
                                window.removeEventListener("scroll", d)
                            }
                    }), []);
                    var d = function() {
                        window.scrollY > 125 ? c(!0) : c(!1)
                    };
                    return (0, p.jsx)(A, {
                        className: "aside custom-window-scroll ".concat(l ? "fixed" : ""),
                        ref: a,
                        children: t
                    })
                })),
                A = r.ZP.div.withConfig({
                    displayName: "Aside__AsideWrapper",
                    componentId: "tgo2i3-0"
                })(["width:", "px;background-color:", ";padding:40px 20px;"], a.r.size.aside, a.r.color.background),
                G = Y,
                K = i(7067),
                X = i(59359),
                J = r.ZP.div.withConfig({
                    displayName: "Default__Wrapper",
                    componentId: "vh5sai-0"
                })(["&.page-main,&.page-appLanding{.footer{display:block;}}&.page-explore{.footer{display:none;}}", "{&.page-main{.contents{margin-top:0;width:100%;}}&.page-search{.contents{padding-bottom:0;}}}"], (0, c.mI)()),
                Q = (0, r.ZP)(L.W2).withConfig({
                    displayName: "Default__ContentsContainer",
                    componentId: "vh5sai-1"
                })([".aside{display:none;}.contents{min-height:calc(100vh - 68px);padding-bottom:20px;overflow:hidden;}", " ", "{display:flex;.contents{flex:1;min-height:calc(100vh - 124px);}.aside{margin-right:40px;display:block;position:absolute;left:15px;top:0;bottom:0;overflow-y:auto;& + .contents{margin-left:", "px;&.community{margin-left:", "px;}}&.fixed{position:fixed;left:auto;top:0;z-index:10;}}.contents{padding-bottom:30px;}}"], (function(e) {
                    return e.isContainerFull && (0, r.iv)(["max-width:100%;padding-left:0;padding-right:0;"])
                }), (0, c.mI)(), a.r.size.aside + 40, a.r.size.aside),
                V = r.ZP.footer.withConfig({
                    displayName: "Default__Footer",
                    componentId: "vh5sai-2"
                })(["background-color:#0d0d0d;", ";", ";", ";", ";display:none;", "{display:block;}.logo{display:flex;align-items:center;justify-content:center;}.links{", ";li{a{display:block;", ";", ";", ";font-weight:normal;color:", ";&.privacy{font-weight:bold;}.email{color:", ";}}}}.sns{display:flex;justify-content:center;", ";li{a{display:block;", " ", " background-color:#fff;border-radius:50%;", " ", " text-indent:-5000px;overflow:hidden;&.twitter{", "}&.youtube{", "}&.blog{", "}}}}.copy,.address{", " line-height:1.7;color:", ";}.address{", " p{margin-top:15px;&:first-child{margin-top:0;}}}.copy{margin-top:15px;}", '{padding:60px 0;.footer-top{display:flex;align-items:center;justify-content:space-between;& > div{display:flex;}}.links{margin-top:0;display:flex;align-items:center;margin-left:40px;li{a{padding-left:20px;padding-right:20px;}}}.sns{margin-top:0;}.copy{margin-top:0;}.address{margin-top:42px;line-height:2;justify-content:space-between;p{margin-top:0;&:last-child{text-align:left;}}br{&:first-child{display:none;}}span{&:before{display:inline;content:"/";padding-left:5px;padding-right:5px;}}}}'], (0, c.vw)("padding-top", 35), (0, c.vw)("padding-bottom", 35), (0, c.vw)("padding-left", 30), (0, c.vw)("padding-right", 30), (0, c.mI)(), (0, c.vw)("margin-top", 30), (0, c.vw)("font-size", 15), (0, c.vw)("padding-top", 10), (0, c.vw)("padding-bottom", 10), a.r.color.main, a.r.color.primary, (0, c.vw)("margin-top", 30), (0, c.vw)("width", 35), (0, c.vw)("height", 35), (0, c.vw)("margin-left", 7.5), (0, c.vw)("margin-right", 7.5), (0, c.Rp)("/images/icon_sns_twitter.png"), (0, c.Rp)("/images/icon_sns_youtube.png"), (0, c.Rp)("/images/icon_sns_blog.png"), (0, c.vw)("font-size", 12), a.r.color.main, (0, c.vw)("margin-top", 30), (0, c.mI)(a.r.size.tablet)),
                $ = function(e) {
                    var t = e.children,
                        i = e.title,
                        r = void 0 === i ? "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544" : i,
                        a = e.isHeader,
                        l = void 0 === a || a,
                        c = e.isFooter,
                        d = void 0 === c || c,
                        h = e.headerTitle,
                        g = e.pageTitle,
                        f = e.pageDesc,
                        m = e.pageType,
                        w = e.headerChildren,
                        v = e.transparent,
                        b = void 0 !== v && v,
                        y = e.fixed,
                        j = void 0 !== y && y,
                        _ = e.absolute,
                        k = void 0 !== _ && _,
                        N = e.aside,
                        C = e.isContainerFull,
                        P = void 0 !== C && C,
                        I = e.isHeaderPc,
                        z = void 0 === I || I,
                        Z = e.isHeaderBorder,
                        B = void 0 !== Z && Z,
                        R = e.headerBackEvent,
                        S = e.headerRight,
                        H = e.asideScrollFixed,
                        M = void 0 !== H && H,
                        O = e.contentsClassName,
                        W = (0, x.useRouter)(),
                        T = (0, n.useState)(),
                        E = T[0],
                        D = T[1],
                        q = (0, n.useState)(),
                        Y = q[0],
                        A = q[1];
                    return (0, n.useEffect)((function() {
                        var e = function() {
                            var e = window.document.title,
                                t = window.location,
                                i = t.href,
                                n = t.pathname;
                            window.gtag("config", K.X, {
                                page_title: e,
                                page_location: i,
                                page_path: n
                            })
                        };
                        return D(X.KC.replace(" ", "-")), A(X.BF.replace(" ", "-")), x.Router.events.on("routeChangeComplete", e),
                            function() {
                                x.Router.events.off("routeChangeComplete", e)
                            }
                    }), []), (0, p.jsxs)(J, {
                        className: "".concat("/" === W.route ? "page-main" : "page-" + W.route.replace("/", ""), " os-").concat(Y, " browser-").concat(E),
                        children: [(0, p.jsx)(o.default, {
                            children: (0, p.jsx)("title", {
                                children: r
                            })
                        }), l && (0, p.jsx)(F, {
                            headerTitle: h,
                            pageTitle: g,
                            pageDesc: f,
                            headerChildren: w,
                            transparent: b,
                            fixed: j,
                            pageType: m,
                            absolute: k,
                            headerBackEvent: R,
                            headerRight: S
                        }), z && (0, p.jsx)(U, {
                            isHeaderBorder: B
                        }), (0, p.jsxs)(Q, {
                            isContainerFull: P,
                            children: [N && (0, p.jsx)(G, {
                                scrollFixed: M,
                                children: N
                            }), (0, p.jsx)("div", {
                                className: "contents ".concat(null !== O && void 0 !== O ? O : ""),
                                children: t
                            })]
                        }), d && (0, p.jsx)(V, {
                            className: "footer",
                            children: (0, p.jsxs)(L.W2, {
                                children: [(0, p.jsxs)("div", {
                                    className: "footer-top",
                                    children: [(0, p.jsxs)("div", {
                                        children: [(0, p.jsx)("div", {
                                            className: "logo",
                                            children: (0, p.jsx)(u, {
                                                sizeWidth: 46,
                                                sizeHeight: 44
                                            })
                                        }), (0, p.jsxs)("ul", {
                                            className: "links",
                                            children: [(0, p.jsx)("li", {
                                                children: (0, p.jsx)("a", {
                                                    href: "/post/faq",
                                                    children: "\uace0\uac1d\uc13c\ud130"
                                                })
                                            }), (0, p.jsx)("li", {
                                                children: (0, p.jsxs)("a", {
                                                    href: "mailto:master@dorama.kr",
                                                    target: "_blank",
                                                    children: ["\uc774\uba54\uc77c \ubb38\uc758", " ", (0, p.jsx)("span", {
                                                        className: "email",
                                                        children: "master@dorama.kr"
                                                    })]
                                                })
                                            }), (0, p.jsx)("li", {
                                                children: (0, p.jsx)(s.default, {
                                                    href: "/post/policy/service",
                                                    children: (0, p.jsx)("a", {
                                                        children: "\uc774\uc6a9\uc57d\uad00"
                                                    })
                                                })
                                            }), (0, p.jsx)("li", {
                                                children: (0, p.jsx)(s.default, {
                                                    href: "/post/policy/privacy",
                                                    children: (0, p.jsx)("a", {
                                                        children: "\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, p.jsxs)("ul", {
                                        className: "sns",
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://twitter.com/doramakr",
                                                target: "_blank",
                                                className: "twitter",
                                                children: "\ud2b8\uc704\ud130"
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.youtube.com/channel/UC-mvTI0H8QQPwXXF9P9Wmkw",
                                                target: "_blank",
                                                className: "youtube",
                                                children: "\uc720\ud29c\ube0c"
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://blog.naver.com/dorama_",
                                                target: "_blank",
                                                className: "blog",
                                                children: "\ub124\uc774\ubc84 \ube14\ub85c\uadf8"
                                            })
                                        })]
                                    })]
                                }), (0, p.jsx)("div", {
                                    className: "address",
                                    children: (0, p.jsxs)("p", {
                                        children: ["(\uc8fc)\ub514\ucf00\uc774\ub77c\uc774\uce20 [dk rights Co., Ltd.] ", (0, p.jsx)("br", {}), "\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 494-86-01697 / \ub300\ud45c\uc774\uc0ac : \uc624\uc720\uc11d", (0, p.jsx)("br", {}), "\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c63\uae38 8, \uae08\uc0b0\ube4c\ub529 7\uce35 (\uc6b0)06160", " ", (0, p.jsx)("br", {}), "\ud1b5\uc2e0\ud310\ub9e4\uc5c5 \uc2e0\uace0\ubc88\ud638 \uc81c 2021-\uc11c\uc6b8\uc1a1\ud30c-0516 \ud638"]
                                    })
                                }), (0, p.jsx)("p", {
                                    className: "copy",
                                    children: "\u24d2since 2017 dk rights Co.,Ltd All rights Reserved."
                                })]
                            })
                        })]
                    })
                }
        }
    }
]);