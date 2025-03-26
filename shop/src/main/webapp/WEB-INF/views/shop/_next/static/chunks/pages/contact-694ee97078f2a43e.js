(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9335], {
        16550: function(e, t, n) {
            "use strict";
            n.d(t, {
                n5: function() {
                    return v
                },
                cw: function() {
                    return b
                },
                L5: function() {
                    return g
                },
                fb: function() {
                    return x
                },
                zG: function() {
                    return y
                },
                sC: function() {
                    return j
                },
                HK: function() {
                    return P
                },
                Vv: function() {
                    return _
                },
                Hg: function() {
                    return z
                },
                FW: function() {
                    return w
                }
            });
            var r = n(50029),
                i = n(87794),
                o = n.n(i),
                a = n(87379),
                c = n(9671),
                s = n(64575),
                l = n(67294),
                u = n(35157),
                p = n(39024),
                d = n(62820),
                f = n(11226),
                h = n(85893),
                g = function(e) {
                    var t = e.subject,
                        n = e.size;
                    return (0, h.jsx)(m, {
                        className: "form-subject",
                        size: n,
                        children: t && (0, h.jsx)("h2", {
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    })
                },
                m = a.ZP.div.withConfig({
                    displayName: "Form__Subject",
                    componentId: "sc-1vq2e27-0"
                })(["line-height:1.5;", ";h2{}", ""], (0, c.vw)("margin-bottom", 10), (function(e) {
                    return "large" === e.size && (0, a.iv)(["", ";font-weight:bold;"], (0, c.vw)("font-size", 17))
                })),
                v = a.ZP.form.withConfig({
                    displayName: "Form__FormWrapper",
                    componentId: "sc-1vq2e27-1"
                })(["", '{&.light{[class*="InputTextBox"]{background-color:', ";}}}"], (0, c.mI)(), s.r.color.backgroundLight),
                b = a.ZP.div.withConfig({
                    displayName: "Form__FormGroup",
                    componentId: "sc-1vq2e27-2"
                })(["", " ", " ", ' [class*="Form__FormContent"]{& + [class*="Form__FormContent"]{', ";}}"], (function(e) {
                    return e.horizontal && e.subjectWidth && (0, a.iv)(["display:flex;align-items:center;.form-subject{", ";margin-bottom:0;}.form-content{flex:1;}"], (0, c.vw)("width", e.subjectWidth))
                }), (function(e) {
                    return !e.whiteSpace && (0, a.iv)(["", ";", ";", ";", ";"], (0, c.vw)("padding-left", 20), (0, c.vw)("padding-right", 20), (0, c.vw)("padding-top", 15), (0, c.vw)("padding-bottom", 15))
                }), (function(e) {
                    return e.whiteSpace && (0, c.uM)(e.whiteSpace)
                }), (0, c.vw)("margin-top", 10)),
                w = a.ZP.div.withConfig({
                    displayName: "Form__InputTextBox",
                    componentId: "sc-1vq2e27-3"
                })(["display:flex;align-items:center;background-color:", ";", ";", ";", ";", ";", ";", ";textarea,input{width:100%;background-color:transparent;color:", ";border:0;outline:none;padding:0;", ";font-size:inherit;}textarea{", ";", ";resize:vertical;}input{", ";}button{padding-right:0;padding-left:0;}", " ", " ", "{", ";}"], s.r.color.backgroundForm, (0, c.vw)("padding-left", 15), (0, c.vw)("padding-right", 15), (0, c.vw)("border-radius", 5), (0, c.vw)("font-size", 12, 13), (function(e) {
                    return e.margin && (0, c.t7)(e.margin)
                }), (function(e) {
                    return e.padding && (0, c.uM)(e.padding)
                }), s.r.color.main, (0, c.vw)("border-radius", 5), (0, c.vw)("margin-top", 10), (0, c.vw)("margin-bottom", 10), (0, c.vw)("height", s.r.size.form.height), (function(e) {
                    return e.bg && (0, a.iv)(["background-color:", ";"], e.bg)
                }), (function(e) {
                    return "between" === e.align && (0, a.iv)(["display:flex;justify-content:space-between;"])
                }), (0, c.mI)(), (function(e) {
                    return e.isBgLight && (0, a.iv)(["background-color:", ";"], s.r.color.backgroundLight)
                })),
                x = a.ZP.div.withConfig({
                    displayName: "Form__FormContent",
                    componentId: "sc-1vq2e27-4"
                })(["", ";", ""], (function(e) {
                    return e.padding && (0, c.uM)(e.padding)
                }), (function(e) {
                    return e.align && "col" === e.align && (0, a.iv)(["display:flex;.col{", ";&:first-child{margin-left:0;}}"], (0, c.vw)("margin-left", 20))
                })),
                y = a.ZP.div.withConfig({
                    displayName: "Form__FormMessage",
                    componentId: "sc-1vq2e27-5"
                })(['display:flex;align-items:center;&:before{display:block;content:"";', ";", ";", " ", ";", " ", "}", ";", ";", " ", ""], (0, c.vw)("width", 12), (0, c.vw)("height", 12), (0, c.vw)("margin-right", 5), (0, c.Rp)("/images/icon_information.png"), (function(e) {
                    return "positive" === e.type && (0, c.Rp)("/images/icon_information_confirm.png")
                }), (function(e) {
                    return "warning" === e.type && (0, c.Rp)("/images/icon_information_warning_purple.png")
                }), (0, c.vw)("font-size", 12), (0, c.vw)("margin-top", 12), (function(e) {
                    return "positive" === e.type && (0, a.iv)(["color:", ";"], s.r.color.primary)
                }), (function(e) {
                    return "warning" === e.type && (0, a.iv)(["color:", ";"], s.r.color.warning)
                })),
                j = function(e) {
                    var t = e.path,
                        n = e.label,
                        i = void 0 === n ? "\uc774\ubbf8\uc9c0 \ubc14\uafb8\uae30" : n,
                        a = e.onUpload,
                        c = e.user,
                        s = e.onChange,
                        f = e.size,
                        g = void 0 === f ? [81, 108] : f,
                        m = (0, l.useState)("/images/profile_default@3x.png"),
                        v = m[0],
                        b = m[1],
                        w = (0, l.useState)()[1],
                        x = (0, l.useState)(!1),
                        y = x[0],
                        j = x[1];
                    (0, l.useEffect)((function() {
                        return t && b(t),
                            function() {
                                b("/images/profile_default@3x.png")
                            }
                    }), [t]);
                    var _ = function(e) {
                            var t = new FileReader,
                                n = e.target.files[0];
                            n && (t.onloadend = function() {
                                "string" === typeof t.result && (w(t.result), b(t.result))
                            }, t.readAsDataURL(n), s && s(n), a && C(n))
                        },
                        C = function() {
                            var e = (0, r.Z)(o().mark((function e(t) {
                                var n, r;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return j(!0), e.prev = 1, e.next = 4, u.n.upload(t);
                                        case 4:
                                            if ((n = e.sent).file.url) {
                                                e.next = 7;
                                                break
                                            }
                                            throw {
                                                message: "\uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."
                                            };
                                        case 7:
                                            return e.next = 9, p.f.changeExtra({
                                                nickname: c.nickname,
                                                email: "" === c.email ? "unknown@unknown.com" : c.email,
                                                profile_image: n.file.url
                                            });
                                        case 9:
                                            r = e.sent, a && a(r), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(1), alert(e.t0.message);
                                        case 16:
                                            return e.prev = 16, j(!1), e.finish(16);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 13, 16, 19]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, h.jsxs)(k, {
                        path: v,
                        size: g,
                        children: [(0, h.jsxs)("div", {
                            className: "profile",
                            children: [(0, h.jsx)("input", {
                                type: "file",
                                onChange: function(e) {
                                    return _(e)
                                }
                            }), y && (0, h.jsx)(d.g, {
                                absolute: !0
                            })]
                        }), i && (0, h.jsx)("p", {
                            className: "label",
                            children: i
                        })]
                    })
                },
                k = a.ZP.div.withConfig({
                    displayName: "Form__Profile",
                    componentId: "sc-1vq2e27-6"
                })(["text-align:center;", ";.profile{position:relative;display:block;", ";", ";", ';margin:0 auto;border-radius:100%;.img{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;border-radius:100%;img{width:100%;height:100%;object-fit:cover;}}.remove{position:absolute;right:-12px;top:-12px;z-index:10;&:after{width:10px;height:10px;}}input[type="file"]{cursor:pointer;position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;}}.label{font-weight:bold;', ";", ";}"], (function(e) {
                    return e.path && (0, a.iv)([".profile{background-image:url(", ");background-repeat:no-repeat;background-size:cover;background-position:center center;}"], e.path)
                }), (0, c.vw)("width", 81, 108), (0, c.vw)("height", 81, 108), (function(e) {
                    return e.size && (0, a.iv)(["", ";", ";"], (0, c.vw)("width", e.size[0], e.size[1]), (0, c.vw)("height", e.size[0], e.size[1]))
                }), (0, c.vw)("margin-top", 10), (0, c.vw)("font-size", 12, 14)),
                _ = function(e) {
                    var t = e.path,
                        n = e.changePhoto,
                        r = e.removePhoto;
                    return (0, h.jsxs)(C, {
                        children: [(0, h.jsx)("input", {
                            type: "file",
                            onChange: n
                        }), (0, h.jsx)("div", {
                            className: "photo",
                            style: {
                                backgroundImage: "url(".concat(t, ")")
                            }
                        }), (0, h.jsx)("button", {
                            type: "button",
                            onClick: r,
                            children: "\uc0ad\uc81c"
                        })]
                    })
                },
                C = a.ZP.div.withConfig({
                    displayName: "Form__FormPhotoUploadStyled",
                    componentId: "sc-1vq2e27-7"
                })(["position:relative;border:1px solid ", ";", ";", ';display:block;align-items:center;justify-content:center;&:before{display:block;content:"";', ";", ";", ";}.photo{position:absolute;left:0;top:0;bottom:0;right:0;background-size:cover;background-position:center center;}input{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;opacity:0;z-index:5;}button{position:absolute;left:100%;top:0;", ";", ";", ";", ";", ";border:1px solid ", ";border-radius:50%;text-indent:-5000px;overflow:hidden;background-color:", ";z-index:10;}"], s.r.color.border, (0, c.vw)("width", 50, 90), (0, c.vw)("height", 50, 90), (0, c.vw)("width", 14), (0, c.vw)("height", 14), (0, c.Rp)("/images/icon_add.png"), (0, c.Rp)("/images/icon_close_small_dark.png", "9px 9px"), (0, c.vw)("width", 22), (0, c.vw)("height", 22), (0, c.vw)("margin-left", -11), (0, c.vw)("margin-top", -11), s.r.color.dark, s.r.color.background),
                z = a.ZP.ul.withConfig({
                    displayName: "Form__FormCheckeds",
                    componentId: "sc-1vq2e27-8"
                })(["display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;li{padding-right:20px;", ";", ";}", ";"], (0, c.vw)("padding-top", 5), (0, c.vw)("padding-bottom", 5), (function(e) {
                    return e.colWidth && (0, a.iv)(["li{width:", ";padding-right:0;}"], e.colWidth)
                })),
                P = function(e) {
                    var t = e.value,
                        n = e.onSubmit,
                        r = (0, l.useRef)(null);
                    return (0, h.jsxs)(O, {
                        children: [(0, h.jsx)(f.JO, {
                            w: [14, 14],
                            h: [13, 13],
                            path: "/images/icon_zoom.png"
                        }), (0, h.jsx)("input", {
                            type: "search",
                            defaultValue: t,
                            onKeyUp: function(e) {
                                var t = e.currentTarget.value;
                                "Enter" === e.key && n && n(t)
                            },
                            placeholder: "\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",
                            ref: r
                        })]
                    })
                },
                O = a.ZP.div.withConfig({
                    displayName: "Form__FormSearchStyled",
                    componentId: "sc-1vq2e27-9"
                })(["", " background-color:", ";display:flex;align-items:center;", ";", ";input{", ";background-color:transparent;border:0;", ";", ";width:100%;outline:none;color:", ";}"], (0, c.vw)("border-radius", 2), s.r.color.backgroundLight, (0, c.vw)("padding-left", 10), (0, c.vw)("padding-right", 10), (0, c.vw)("margin-left", 5), (0, c.vw)("height", 28), (0, c.vw)("font-size", 11), s.r.color.main)
        },
        46042: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return o
                },
                J: function() {
                    return a
                }
            });
            var r = n(87379),
                i = n(9671),
                o = r.ZP.div.withConfig({
                    displayName: "Grid__Row",
                    componentId: "sc-16fypi6-0"
                })(["display:flex;", " ", " ", ""], (function(e) {
                    return e.flex && (0, r.iv)(["flex:", ";"], e.flex)
                }), (function(e) {
                    return e.justify && (0, r.iv)(["justify-content:", ";"], e.justify)
                }), (function(e) {
                    return e.align && (0, r.iv)(["align-items:", ";"], e.align)
                })),
                a = r.ZP.div.withConfig({
                    displayName: "Grid__Col",
                    componentId: "sc-16fypi6-1"
                })(["display:block;", ";", " ", " ", " ", ";"], (function(e) {
                    return e.flex && (0, r.iv)(["flex:", ";"], e.flex)
                }), (function(e) {
                    return e.display && (0, r.iv)(["display:", ";"], e.display)
                }), (function(e) {
                    return e.justify && (0, r.iv)(["justify-content:", ";"], e.justify)
                }), (function(e) {
                    return e.align && (0, r.iv)(["align-items:", ";"], e.align)
                }), (function(e) {
                    return e.padding && (0, i.uM)(e.padding)
                }))
        },
        39393: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return c
                }
            });
            var r = n(87379),
                i = n(9671),
                o = n(64575),
                a = n(85893),
                c = function(e) {
                    var t = e.type,
                        n = void 0 === t ? "checkbox" : t,
                        r = e.name,
                        i = void 0 === r ? "input" : r,
                        o = e.isSelected,
                        c = e.label,
                        l = void 0 === c ? "\ucc44\ud06c\ubc15\uc2a4" : c,
                        u = e.value,
                        p = void 0 === u ? 1 : u,
                        d = e.onChange,
                        f = e.size,
                        h = void 0 === f ? 23 : f,
                        g = e.bullet,
                        m = void 0 === g ? "vchk" : g;
                    return (0, a.jsx)(s, {
                        size: h,
                        bullet: m,
                        children: (0, a.jsxs)("label", {
                            className: "name",
                            children: [(0, a.jsx)("input", {
                                type: n,
                                checked: o,
                                value: p,
                                onChange: function(e) {
                                    d && d(e)
                                },
                                name: i
                            }), (0, a.jsx)("span", {
                                className: "label",
                                children: (0, a.jsx)("span", {
                                    className: "text",
                                    dangerouslySetInnerHTML: {
                                        __html: l
                                    }
                                })
                            })]
                        })
                    })
                },
                s = r.ZP.div.withConfig({
                    displayName: "InputCheckbox__StyledCustomCheckbox",
                    componentId: "tmmrqb-0"
                })(["position:relative;input{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;cursor:pointer;&:checked{& + .label .text{", ";", ";}}}.label{display:block;a{&.underline{font-weight:bold;color:", ";text-decoration:underline;}}.text{position:relative;display:flex;align-items:center;", ';&:after,&:before{content:"";display:block;', " ", ";}&:before{border:1px solid ", ";border-radius:1px;}&:after{position:absolute;left:0;top:0;}}", " ", ";}"], (function(e) {
                    return "vchk" === e.bullet && (0, r.iv)(["&:after{", ";background-color:", ";border-color:", ";}"], (0, i.Rp)("/images/icon_vcheck_on.png"), o.r.color.primary, o.r.color.primary)
                }), (function(e) {
                    return "dot" === e.bullet && (0, r.iv)(["&:before{background-color:", ";border-color:", ";}&:after{background-color:#fff;}"], o.r.color.primary, o.r.color.primary)
                }), o.r.color.main, (0, i.vw)("font-size", 12, 13), (function(e) {
                    return e.size && (0, r.iv)(["", ";", ";"], (0, i.vw)("width", e.size), (0, i.vw)("height", e.size))
                }), (0, i.vw)("margin-right", 10), o.r.color.border, (function(e) {
                    return "vchk" === e.bullet && e.size && (0, r.iv)([".text{&:after{position:absolute;left:0;top:0;", ";", ";}}"], (0, i.vw)("width", e.size + 2), (0, i.vw)("height", e.size + 2))
                }), (function(e) {
                    return "dot" === e.bullet && e.size && (0, r.iv)([".text{&:after,&:before{border-radius:50%;}&:after{width:4px;height:4px;background-color:", ";", " ", "}}"], o.r.color.border, (0, i.vw)("left", e.size / 2 - 1), (0, i.vw)("top", e.size / 2 - 1))
                }))
        },
        69432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(59499),
                i = n(87379),
                o = n(11226),
                a = n(60473),
                c = n(67294),
                s = n(16550),
                l = n(39393),
                u = n(46042),
                p = n(91557),
                d = n(9671),
                f = n(85893);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m() {
                var e = (0, c.useState)({
                        title: "",
                        content: ""
                    }),
                    t = e[0],
                    n = e[1],
                    i = (0, c.useState)({
                        name: "",
                        tel: "",
                        email: "",
                        subtype: ""
                    }),
                    d = i[0],
                    h = i[1],
                    m = (0, c.useState)(!1),
                    b = m[0],
                    w = m[1],
                    x = function(e) {
                        "title" === e.target.name || "content" === e.target.name ? n(g(g({}, t), {}, (0, r.Z)({}, e.target.name, e.target.value))) : h(g(g({}, d), {}, (0, r.Z)({}, e.target.name, e.target.value)))
                    };
                return (0, f.jsx)(a.Z, {
                    headerChildren: ["logo", "search", "menu"],
                    title: "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544",
                    headerTitle: "\uad11\uace0/\uc81c\ud734 \ubb38\uc758\ud558\uae30",
                    children: (0, f.jsxs)(v, {
                        children: [(0, f.jsx)("h1", {
                            children: "\uad11\uace0/\uc81c\ud734 \ubb38\uc758\ud558\uae30"
                        }), (0, f.jsxs)(s.n5, {
                            children: [(0, f.jsx)(s.cw, {
                                whiteSpace: [30, 20, 4, 20],
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(s.FW, {
                                        children: (0, f.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "\uc774\ub984",
                                            onChange: x
                                        })
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                whiteSpace: [4, 20, 4, 20],
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(s.FW, {
                                        children: (0, f.jsx)("input", {
                                            type: "text",
                                            name: "tel",
                                            placeholder: "\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                                            onChange: x
                                        })
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                whiteSpace: [4, 20, 4, 20],
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(s.FW, {
                                        children: (0, f.jsx)("input", {
                                            type: "email",
                                            name: "email",
                                            placeholder: "\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
                                            onChange: x
                                        })
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsxs)(u.X, {
                                        children: [(0, f.jsx)(u.J, {
                                            padding: [0, 20, 0, 0],
                                            children: (0, f.jsx)(l.X, {
                                                type: "radio",
                                                name: "subtype",
                                                label: "\uad11\uace0",
                                                value: "\uad11\uace0",
                                                onChange: x
                                            })
                                        }), (0, f.jsx)(u.J, {
                                            padding: [0, 20, 0, 0],
                                            children: (0, f.jsx)(l.X, {
                                                type: "radio",
                                                name: "subtype",
                                                label: "\uc81c\ud734",
                                                value: "\uc81c\ud734",
                                                onChange: x
                                            })
                                        })]
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                whiteSpace: [4, 20, 4, 20],
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(s.FW, {
                                        children: (0, f.jsx)("input", {
                                            type: "text",
                                            name: "title",
                                            placeholder: "\ubb38\uc758 \uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
                                            onChange: x
                                        })
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                whiteSpace: [4, 20, 4, 20],
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(s.FW, {
                                        children: (0, f.jsx)("textarea", {
                                            rows: 10,
                                            name: "content",
                                            onChange: x,
                                            placeholder: "\ubb38\uc758 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."
                                        })
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                children: (0, f.jsx)(s.fb, {
                                    children: (0, f.jsx)(l.X, {
                                        label: "<a href='/post/policy/privacy' class='underline' target='_blank'>\uc0ac\uc5c5\uc81c\ud734 \uad11\uace0\ubb38\uc758\ub97c \uc704\ud55c \uc815\ubcf4\uc218\uc9d1 \ubc0f \uc774\uc6a9</a>\uc5d0 \ub300\ud55c \ub3d9\uc758",
                                        name: "agree",
                                        value: 1,
                                        onChange: function(e) {
                                            return w(e.target.checked)
                                        }
                                    })
                                })
                            }), (0, f.jsx)(s.cw, {
                                children: (0, f.jsx)(o.zx, {
                                    size: "large",
                                    color: "primary",
                                    radius: 30,
                                    full: !0,
                                    type: "button",
                                    onClick: function() {
                                        if ("" !== d.name)
                                            if ("" !== d.tel)
                                                if ("" !== d.email)
                                                    if (void 0 !== d.subtype)
                                                        if ("" !== t.title)
                                                            if ("" !== t.content)
                                                                if (b) {
                                                                    var e = t.content;
                                                                    if ("" !== d.name || "" !== d.email || "" !== d.tel) e += "\n\n\ubb38\uc758 \uc885\ub958 : ".concat(d.subtype, "\n\uc774\ub984 : ").concat(d.name, "\n\uc5f0\ub77d\ucc98 : ").concat(d.tel, "\n\uc774\uba54\uc77c : ").concat(d.email, "\n\t\t\t");
                                                                    p.P.save({
                                                                        type: "p-partnership",
                                                                        status: 10,
                                                                        title: t.title,
                                                                        content: e,
                                                                        content_type: "text"
                                                                    }).then((function(e) {
                                                                        e && (alert("\uad11\uace0/\uc81c\ud734 \ubb38\uc758\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."), location.reload())
                                                                    })).catch((function(e) {
                                                                        alert(e.message)
                                                                    }))
                                                                } else alert("\uc0ac\uc5c5\uc81c\ud734 \uad11\uace0\ubb38\uc758\ub97c \uc704\ud55c \uc815\ubcf4\uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub300\ud55c \ub3d9\uc758\ub97c \ud574\uc8fc\uc138\uc694.");
                                        else alert("\ubb38\uc758 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.");
                                        else alert("\ubb38\uc758 \uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.");
                                        else alert("\ubb38\uc758 \uc720\ud615\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.");
                                        else alert("\uc5f0\ub77d\ubc1b\uc73c\uc2e4 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.");
                                        else alert("\uc5f0\ub77d\ubc1b\uc73c\uc2e4 \uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.");
                                        else alert("\uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")
                                    },
                                    children: "\ubcf4\ub0b4\uae30"
                                })
                            })]
                        })]
                    })
                })
            }
            var v = i.ZP.div.withConfig({
                displayName: "contact__ContactFormWrapper",
                componentId: "sc-1w5ksdm-0"
            })(["max-width:450px;margin:0 auto;h1{display:none;text-align:center;font-size:24px;padding-bottom:10px;}", "{padding-top:40px;h1{display:block;text-align:center;font-size:24px;}}"], (0, d.mI)())
        },
        35157: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return r
                }
            });
            var r, i = n(50029),
                o = n(87794),
                a = n.n(o),
                c = n(9669),
                s = n.n(c),
                l = n(25139);
            ! function(e) {
                function t() {
                    return (t = (0, i.Z)(a().mark((function e(t) {
                        var n, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, (n = new FormData).append("file", t), e.next = 5, s()({
                                        method: "post",
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        },
                                        data: n,
                                        url: "/api/files/upload"
                                    });
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 9:
                                    throw e.prev = 9, e.t0 = e.catch(0), (0, l.E)(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })))).apply(this, arguments)
                }
                e.upload = function(e) {
                    return t.apply(this, arguments)
                }
            }(r || (r = {}))
        },
        91557: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return r
                }
            });
            var r, i = n(50029),
                o = n(59499),
                a = n(87794),
                c = n.n(a),
                s = n(9669),
                l = n.n(s),
                u = n(80129),
                p = n.n(u),
                d = n(45522),
                f = n(25139);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }! function(e) {
                function t() {
                    return (t = (0, i.Z)(c().mark((function e(t, n) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l().get("/api/posts/show?" + p().stringify({
                                        subset: t,
                                        id: n
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

                function n() {
                    return (n = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l().post("/api/posts/save", t);
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
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l().get("/api/posts/delete?" + p().stringify(t));
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

                function o() {
                    return (o = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l().get("/api/posts/hit?" + p().stringify({
                                        id: t
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
                e.usePosts = function(e, t) {
                    var n = (0, d.ZP)(["/api/posts", p().stringify(g(g({}, t), {}, {
                            subset: e
                        }))]),
                        r = n.data,
                        i = n.error,
                        o = n.mutate;
                    return g(g({}, r), {}, {
                        isLoading: !i && !r,
                        error: i,
                        mutate: o
                    })
                }, e.show = function(e, n) {
                    return t.apply(this, arguments)
                }, e.save = function(e) {
                    return n.apply(this, arguments)
                }, e.del = function(e) {
                    return r.apply(this, arguments)
                }, e.hit = function(e) {
                    return o.apply(this, arguments)
                }
            }(r || (r = {}))
        },
        33038: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return n(69432)
            }])
        }
    },
    function(e) {
        e.O(0, [8197, 473, 9774, 2888, 179], (function() {
            return t = 33038, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);