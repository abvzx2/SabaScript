"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3171], {
        31919: function(e, t, r) {
            var n = r(11163),
                o = r(67294),
                i = r(66828),
                a = r(11226),
                s = r(16550),
                c = r(58202),
                p = r(85893);
            t.Z = function(e) {
                var t, r = e.post,
                    l = e.id,
                    d = void 0 === l ? 0 : l,
                    u = e.placeholder,
                    f = void 0 === u ? "\ub313\uae00 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694." : u,
                    g = e.content,
                    h = e.maxLength,
                    v = void 0 === h ? 300 : h,
                    w = e.onSaved,
                    y = e.postId,
                    m = e.reply,
                    b = e.onCancel,
                    x = e.showSecret,
                    k = void 0 === x || x,
                    j = e.disabledMessage,
                    _ = (0, i.Z)().userStore,
                    O = (0, n.useRouter)(),
                    P = (0, o.useState)(""),
                    R = P[0],
                    S = P[1],
                    Z = (0, o.useState)(0),
                    z = Z[0],
                    C = Z[1],
                    I = (0, o.useState)(0),
                    E = I[0],
                    N = I[1],
                    D = (0, o.useState)(),
                    q = D[0],
                    L = D[1],
                    F = (0, o.useState)(),
                    V = F[0],
                    X = F[1];
                (0, o.useEffect)((function() {
                    g && S(g)
                }), [g, d]), (0, o.useEffect)((function() {
                    m && (C(m.id), S(m.content), N(m.is_secret ? 1 : 0), X(m.image)), r && N("secret" === r.reply_policy ? 1 : 0)
                }), []);
                var M = function(e) {
                    var t = new FileReader,
                        r = e.target.files[0];
                    r && (L(r), t.onloadend = function() {
                        "string" === typeof t.result && X(t.result)
                    }, t.readAsDataURL(r))
                };
                return (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)(c.IR, {
                        className: "reply-form",
                        children: [(0, p.jsx)("textarea", {
                            placeholder: f,
                            onChange: function(e) {
                                return function(e) {
                                    !1 !== _.logged ? S(e.target.value) : confirm("\ub313\uae00 \uc791\uc131\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && O.push("/login?next=".concat(encodeURIComponent(O.asPath)))
                                }(e)
                            },
                            value: R,
                            maxLength: v
                        }), V && (0, p.jsx)("div", {
                            children: (0, p.jsx)(s.Vv, {
                                path: V,
                                changePhoto: M,
                                removePhoto: function() {
                                    L(z > 0 ? "" : void 0), X(void 0)
                                }
                            })
                        }), (0, p.jsxs)("div", {
                            className: "info",
                            children: [(0, p.jsxs)("span", {
                                className: "byte",
                                children: [R.length, "/", v]
                            }), (0, p.jsxs)("div", {
                                children: [r && "a-event" === r.type && (0, p.jsx)(a.aW, {
                                    changePhoto: M,
                                    active: !!V
                                }), k && !(null !== r && void 0 !== r && null !== (t = r.episode) && void 0 !== t && t.id) && (0, p.jsxs)(c.Vx, {
                                    children: [(0, p.jsx)("input", {
                                        id: "secretReply",
                                        type: "checkbox",
                                        checked: 1 == E,
                                        onChange: function() {
                                            N(0 === E || r && "secret" === r.reply_policy ? 1 : 0)
                                        }
                                    }), (0, p.jsx)("label", {
                                        htmlFor: "secretReply",
                                        children: "\ube44\ubc00\ub313\uae00"
                                    })]
                                }), (0, p.jsx)("input", {
                                    className: "submit",
                                    type: "submit",
                                    value: z > 0 ? "\uc218\uc815" : "\uc791\uc131",
                                    onClick: function() {
                                        return function() {
                                            if (_.logged)
                                                if ("" !== R) {
                                                    var e = {
                                                        content: R,
                                                        is_secret: E,
                                                        post_id: y,
                                                        id: z > 0 ? z : void 0,
                                                        is_pinned: 0,
                                                        image: q
                                                    };
                                                    console.log(e), S(""), L(void 0), X(void 0), w(e)
                                                } else alert("\ub313\uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694");
                                            else alert("\ub313\uae00 \uc791\uc131\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4")
                                        }()
                                    }
                                }), z > 0 && (0, p.jsx)("button", {
                                    onClick: b,
                                    children: "\ucde8\uc18c"
                                })]
                            })]
                        }), j && (0, p.jsx)(c.XV, {
                            message: j
                        })]
                    })
                })
            }
        },
        58202: function(e, t, r) {
            r.d(t, {
                HR: function() {
                    return a
                },
                nT: function() {
                    return s
                },
                en: function() {
                    return c
                },
                sX: function() {
                    return p
                },
                IR: function() {
                    return l
                },
                Vx: function() {
                    return d
                },
                XV: function() {
                    return u
                }
            });
            var n = r(87379),
                o = r(9671),
                i = r(64575),
                a = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyStyled",
                    componentId: "eixe0q-0"
                })(["background-color:", ";padding-bottom:30px;", "{background-color:transparent;}"], i.r.color.background, (0, o.mI)()),
                s = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyWriteStyled",
                    componentId: "eixe0q-1"
                })(["", ";h1{font-weight:bold;", ";line-height:1.1;", ";}"], (0, o.uM)([20, 20, 20, 20], [40, 0, 20, 0]), (0, o.vw)("font-size", 12, 15), (0, o.vw)("margin-bottom", 10, 20)),
                c = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyListStyled",
                    componentId: "eixe0q-2"
                })([".more-arrow{text-align:center;", ";", ";button{", ";", ";", ";text-indent:-5000px;overflow:hidden;}}"], (0, o.vw)("padding-top", 25), (0, o.vw)("padding-bottom", 25), (0, o.vw)("width", 54), (0, o.vw)("height", 54), (0, o.Rp)("/images/icon_arrow_down_circle.png")),
                p = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyItemStyled",
                    componentId: "eixe0q-3"
                })(["", " border-top:1px dashed ", ';[class*="replystyled__ReplyItemStyled"]{border-top:0;padding-left:0;padding-right:0;}&.pin-item{background-color:#1b1b1b;.btn-reply{display:none;}.more-wrapper{display:none;}}&.re{border-top:0;flex:1;}.reply-form{flex:1;}.content-wrapper{display:flex;position:relative;}.wrap-user-report-form{display:flex;flex-direction:column;position:absolute;top:0;left:0;', ";", ";", ";background-color:#252525;.user-block{display:flex;align-items:center;justify-content:center;width:100%;", ";border-bottom:1px solid #393939;", ";color:white;cursor:pointer;}.user-report{display:flex;align-items:center;justify-content:center;width:100%;", ";", ";color:white;cursor:pointer;}}.reply-re-wrapper{display:flex;flex-direction:row;align-items:flex-start;", ";", ";.icon-re-reply{", ";", ";", ";", ";", ";}&:empty{display:none;}}.thum{border-radius:50%;}.content{flex:1;", ";.pin{", ";align-items:center;display:flex;padding-top:4px;color:", ";.icon{margin-right:5px;}}.header{", ";", ";display:flex;align-items:center;.name{", ";", ";font-weight:500;}.icon-lock{display:block;", ";", ";", ";}}.body{line-height:1.6;", ";word-wrap:break-word;word-break:break-all;.name{color:", ";margin-right:5px;}.mentionee{color:", ";}img{max-width:100%;max-width:230px;", ";}.time{color:", ";}}.footer{", ";display:flex;align-items:center;color:", ";.date{", ";}.more{", ";display:flex;align-items:center;padding:0 6px;color:inherit;}.btn-reply{", ";color:inherit;padding:0 6px;}.owner{", ";color:", ";font-weight:bold;", ";}.more-wrapper{position:relative;.manage{position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:4px;background-color:", ";box-shadow:0 2px 5px rgba(0,0,0,0.5);display:flex;border-radius:5px;height:0;overflow:hidden;opacity:0;transition:opacity 0.4s;button{", ";color:rgba(255,255,255,0.8);", ";", ";position:relative;&:last-child{&:after{display:none;}}&:after{", ";position:absolute;right:0;top:50%;width:1px;background-color:", ';transform:translateY(-50%);opacity:0.5;content:"";display:block;}}}&.active{.manage{height:auto;opacity:1;}}}}}', "{&.pin-item{background-color:", ";border-top-color:", ";border-top-style:solid;& + .item{border-top-color:", ";border-top-style:solid;}}}"], (0, o.uM)([15, 20, 15, 20]), i.r.color.borderDark, (0, o.vw)("width", 91), (0, o.vw)("margin-top", 44), (0, o.vw)("border-radius", 5), (0, o.vw)("height", 35), (0, o.vw)("font-size", 12), (0, o.vw)("height", 35), (0, o.vw)("font-size", 12), (0, o.vw)("padding-left", 15), (0, o.vw)("margin-top", 10), (0, o.vw)("width", 18), (0, o.vw)("height", 18), (0, o.vw)("margin-right", 15), (0, o.vw)("margin-top", 14), (0, o.Rp)("/images/icon_re_reply.png"), (0, o.vw)("margin-left", 15, 20), (0, o.vw)("font-size", 11), i.r.color.dark, (0, o.vw)("height", 30), (0, o.vw)("margin-bottom", 5), (0, o.vw)("font-size", 12, 14), (0, o.vw)("margin-right", 10), (0, o.vw)("width", 10), (0, o.vw)("height", 12), (0, o.Rp)("/images/icon_lock.png"), (0, o.vw)("font-size", 12, 14), i.r.color.main, i.r.color.main, (0, o.vw)("margin-top", 25), i.r.color.primary, (0, o.vw)("margin-top", 16), i.r.color.dark, (0, o.vw)("font-size", 12), (0, o.vw)("font-size", 12), (0, o.vw)("font-size", 12), (0, o.vw)("font-size", 12), i.r.color.primary, (0, o.vw)("margin-left", 15), i.r.color.backgroundLight, (0, o.vw)("font-size", 11), (0, o.vw)("width", 40), (0, o.vw)("height", 24), (0, o.vw)("height", 10), i.r.color.dark, (0, o.mI)(), i.r.color.background, i.r.color.border, i.r.color.border),
                l = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyFormStyled",
                    componentId: "eixe0q-4"
                })(["position:relative;", ";", " ", ";background-color:", ";", ";textarea{border:0;width:100%;background-color:transparent;", " outline:none;resize:vertical;line-height:1.5;color:", ";", "}& > div.info{", ";display:flex;justify-content:space-between;button{", ";", ";", ";", ";&:last-child{", ";}}.byte{", ";}.submit{", ";font-weight:bold;color:", ";background-color:transparent;border:0;}& > div{display:flex;}}"], (0, o.vw)("margin-top", 15, 22), (0, o.vw)("border-radius", 5, 8), (0, o.vw)("padding", 15, 20), i.r.color.inputBg, (function(e) {
                    return "ready" === e.edit && (0, n.iv)(["background-color:transparent;border:1px solid #393939;"])
                }), (0, o.vw)("min-height", 100, 50), i.r.color.main, (0, o.vw)("font-size", 12, 14), (0, o.vw)("margin-top", 3, 10), (0, o.vw)("font-size", 12, 14), (0, o.vw)("padding-left", 8), (0, o.vw)("padding-right", 8), (0, o.vw)("margin-right", 10, 20), (0, o.vw)("margin-right", -8), (0, o.vw)("font-size", 12, 14), (0, o.vw)("font-size", 12, 14), i.r.color.primary),
                d = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplySecretStyled",
                    componentId: "eixe0q-5"
                })(["position:relative;", ";input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:100%;height:100%;cursor:pointer;&:checked{& + label{color:", ";&:before{", ";}}}}label{display:flex;align-items:center;", ';&:before{display:block;content:"";', ";", ";", ";", ";}}"], (0, o.vw)("margin-right", 10, 20), i.r.color.primary, (0, o.Rp)("/images/icon_lock_on.png"), (0, o.vw)("font-size", 12, 14), (0, o.Rp)("/images/icon_lock.png", "contain"), (0, o.vw)("width", 9), (0, o.vw)("height", 11), (0, o.vw)("margin-right", 4)),
                u = n.ZP.div.withConfig({
                    displayName: "replystyled__ReplyFormDisabledStyled",
                    componentId: "eixe0q-6"
                })(["position:absolute;left:0;top:0;background-color:rgba(0,0,0,0.6);right:0;bottom:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;margin:0 !important;&:after{display:block;", ";", ";}"], (function(e) {
                    return e.message && (0, n.iv)(['content:"', '";'], e.message)
                }), (0, o.vw)("font-size", 16))
        },
        91557: function(e, t, r) {
            r.d(t, {
                P: function() {
                    return n
                }
            });
            var n, o = r(50029),
                i = r(59499),
                a = r(87794),
                s = r.n(a),
                c = r(9669),
                p = r.n(c),
                l = r(80129),
                d = r.n(l),
                u = r(45522),
                f = r(25139);

            function g(e, t) {
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
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }! function(e) {
                function t() {
                    return (t = (0, o.Z)(s().mark((function e(t, r) {
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
                    return (r = (0, o.Z)(s().mark((function e(t) {
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
                    return (n = (0, o.Z)(s().mark((function e(t) {
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
                    return (i = (0, o.Z)(s().mark((function e(t) {
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
                    var r = (0, u.ZP)(["/api/posts", d().stringify(h(h({}, t), {}, {
                            subset: e
                        }))]),
                        n = r.data,
                        o = r.error,
                        i = r.mutate;
                    return h(h({}, n), {}, {
                        isLoading: !o && !n,
                        error: o,
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
        68663: function(e, t, r) {
            r.d(t, {
                Y: function() {
                    return n
                }
            });
            var n, o = r(50029),
                i = r(59499),
                a = r(87794),
                s = r.n(a),
                c = r(9669),
                p = r.n(c),
                l = r(80129),
                d = r.n(l),
                u = r(45522),
                f = r(25139);

            function g(e, t) {
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
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }! function(e) {
                function t() {
                    return (t = (0, o.Z)(s().mark((function e(t, r) {
                        var n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().get("/api/replies/show?" + d().stringify({
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
                    return (r = (0, o.Z)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, p().post("/api/replies/save", t);
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
                    return (n = (0, o.Z)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p().get("/api/replies/delete?" + d().stringify({
                                        ids: t
                                    }));
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                e.useReplies = function(e, t) {
                    var r = (0, u.ZP)(["/api/replies", d().stringify(h(h({}, t), {}, {
                            subset: e
                        }))]),
                        n = r.data,
                        o = r.error,
                        i = r.mutate;
                    return h(h({}, n), {}, {
                        isLoading: !o && !n,
                        error: o,
                        mutate: i
                    })
                }, e.show = function(e, r) {
                    return t.apply(this, arguments)
                }, e.save = function(e) {
                    return r.apply(this, arguments)
                }, e.del = function(e) {
                    return n.apply(this, arguments)
                }
            }(n || (n = {}))
        }
    }
]);