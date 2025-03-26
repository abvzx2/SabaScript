"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3422], {
        56596: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return l
                }
            });
            var r = n(16835),
                i = n(67294),
                o = n(87379),
                a = n(9671),
                c = n(64575),
                s = n(85893),
                l = function(e) {
                    var t, n = e.list,
                        o = e.current,
                        a = e.onChange,
                        c = e.className,
                        l = (0, i.useState)(),
                        p = l[0],
                        u = l[1];
                    return (0, i.useEffect)((function() {
                        u(o ? n.get(o) : "\uc120\ud0dd")
                    }), [o]), (0, s.jsxs)(d, {
                        className: "select-wrapper ".concat(c),
                        children: [(0, s.jsx)("span", {
                            className: "icon-list"
                        }), (0, s.jsxs)("div", {
                            className: "select",
                            children: [(0, s.jsx)("span", {
                                className: "subtype-name",
                                children: "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00" === p ? "\ub313\uae00" : p
                            }), (0, s.jsx)("span", {
                                className: "icon-arrow-down"
                            })]
                        }), (0, s.jsx)("select", {
                            onChange: function(e) {
                                u(n.get(e.target.value)), a && a(e.target.value)
                            },
                            value: o,
                            children: (null !== (t = Array.from(n)) && void 0 !== t ? t : []).map((function(e) {
                                var t = (0, r.Z)(e, 2),
                                    n = t[0],
                                    i = t[1];
                                return (0, s.jsx)("option", {
                                    value: n,
                                    children: "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00" === i ? "\ub313\uae00" : i
                                }, n)
                            }))
                        })]
                    })
                },
                d = o.ZP.div.withConfig({
                    displayName: "CustomForms__CustomSelectStyled",
                    componentId: "sc-1gqkd20-0"
                })(["display:flex;flex-direction:row;align-items:center;position:relative;select{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;opacity:0;}&:not(.board-sort){border-bottom:1px solid #393939;", ";", ";", ";.icon-list{", ";", ";", ";", ";display:block;}.select{display:flex;flex-direction:row;align-items:center;.subtype-name{color:white;", ";", ";}.icon-arrow-down{", ";", ";", ";}}}&.drama-sort{border:0;", ";padding-left:0;padding-right:0;.icon-list{display:none;}.select{.subtype-name{color:", ";}}}&.board-sort{position:relative;background-color:", ";", " ", ";", ";", ";.icon-list{display:block;", ";", ";", ";", ";}.select{.subtype-name{display:block;", ";}.icon-arrow-down{display:none;}}}"], (0, a.vw)("height", 51), (0, a.vw)("padding-left", 20), (0, a.vw)("padding-right", 20), (0, a.vw)("width", 13), (0, a.vw)("height", 11), (0, a.vw)("margin-right", 15), (0, a.Rp)("/images/icon_list_more.png"), (0, a.vw)("margin-right", 15), (0, a.vw)("font-size", 12), (0, a.vw)("width", 11), (0, a.vw)("height", 5), (0, a.Rp)("/images/icon_arrow_down.png"), (0, a.vw)("height", 22), c.r.color.default, c.r.color.backgroundLight, (0, a.vw)("border-radius", 2), (0, a.vw)("height", 28), (0, a.vw)("padding-left", 10), (0, a.vw)("padding-right", 10), (0, a.vw)("width", 11), (0, a.vw)("height", 11), (0, a.vw)("margin-right", 5), (0, a.Rp)("/images/icon_sort.png"), (0, a.vw)("font-size", 11))
        },
        16550: function(e, t, n) {
            n.d(t, {
                n5: function() {
                    return v
                },
                cw: function() {
                    return w
                },
                L5: function() {
                    return h
                },
                fb: function() {
                    return y
                },
                zG: function() {
                    return x
                },
                sC: function() {
                    return j
                },
                HK: function() {
                    return O
                },
                Vv: function() {
                    return _
                },
                Hg: function() {
                    return N
                },
                FW: function() {
                    return b
                }
            });
            var r = n(50029),
                i = n(87794),
                o = n.n(i),
                a = n(87379),
                c = n(9671),
                s = n(64575),
                l = n(67294),
                d = n(35157),
                p = n(39024),
                u = n(62820),
                f = n(11226),
                g = n(85893),
                h = function(e) {
                    var t = e.subject,
                        n = e.size;
                    return (0, g.jsx)(m, {
                        className: "form-subject",
                        size: n,
                        children: t && (0, g.jsx)("h2", {
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
                w = a.ZP.div.withConfig({
                    displayName: "Form__FormGroup",
                    componentId: "sc-1vq2e27-2"
                })(["", " ", " ", ' [class*="Form__FormContent"]{& + [class*="Form__FormContent"]{', ";}}"], (function(e) {
                    return e.horizontal && e.subjectWidth && (0, a.iv)(["display:flex;align-items:center;.form-subject{", ";margin-bottom:0;}.form-content{flex:1;}"], (0, c.vw)("width", e.subjectWidth))
                }), (function(e) {
                    return !e.whiteSpace && (0, a.iv)(["", ";", ";", ";", ";"], (0, c.vw)("padding-left", 20), (0, c.vw)("padding-right", 20), (0, c.vw)("padding-top", 15), (0, c.vw)("padding-bottom", 15))
                }), (function(e) {
                    return e.whiteSpace && (0, c.uM)(e.whiteSpace)
                }), (0, c.vw)("margin-top", 10)),
                b = a.ZP.div.withConfig({
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
                y = a.ZP.div.withConfig({
                    displayName: "Form__FormContent",
                    componentId: "sc-1vq2e27-4"
                })(["", ";", ""], (function(e) {
                    return e.padding && (0, c.uM)(e.padding)
                }), (function(e) {
                    return e.align && "col" === e.align && (0, a.iv)(["display:flex;.col{", ";&:first-child{margin-left:0;}}"], (0, c.vw)("margin-left", 20))
                })),
                x = a.ZP.div.withConfig({
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
                        h = void 0 === f ? [81, 108] : f,
                        m = (0, l.useState)("/images/profile_default@3x.png"),
                        v = m[0],
                        w = m[1],
                        b = (0, l.useState)()[1],
                        y = (0, l.useState)(!1),
                        x = y[0],
                        j = y[1];
                    (0, l.useEffect)((function() {
                        return t && w(t),
                            function() {
                                w("/images/profile_default@3x.png")
                            }
                    }), [t]);
                    var _ = function(e) {
                            var t = new FileReader,
                                n = e.target.files[0];
                            n && (t.onloadend = function() {
                                "string" === typeof t.result && (b(t.result), w(t.result))
                            }, t.readAsDataURL(n), s && s(n), a && k(n))
                        },
                        k = function() {
                            var e = (0, r.Z)(o().mark((function e(t) {
                                var n, r;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return j(!0), e.prev = 1, e.next = 4, d.n.upload(t);
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
                    return (0, g.jsxs)(P, {
                        path: v,
                        size: h,
                        children: [(0, g.jsxs)("div", {
                            className: "profile",
                            children: [(0, g.jsx)("input", {
                                type: "file",
                                onChange: function(e) {
                                    return _(e)
                                }
                            }), x && (0, g.jsx)(u.g, {
                                absolute: !0
                            })]
                        }), i && (0, g.jsx)("p", {
                            className: "label",
                            children: i
                        })]
                    })
                },
                P = a.ZP.div.withConfig({
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
                    return (0, g.jsxs)(k, {
                        children: [(0, g.jsx)("input", {
                            type: "file",
                            onChange: n
                        }), (0, g.jsx)("div", {
                            className: "photo",
                            style: {
                                backgroundImage: "url(".concat(t, ")")
                            }
                        }), (0, g.jsx)("button", {
                            type: "button",
                            onClick: r,
                            children: "\uc0ad\uc81c"
                        })]
                    })
                },
                k = a.ZP.div.withConfig({
                    displayName: "Form__FormPhotoUploadStyled",
                    componentId: "sc-1vq2e27-7"
                })(["position:relative;border:1px solid ", ";", ";", ';display:block;align-items:center;justify-content:center;&:before{display:block;content:"";', ";", ";", ";}.photo{position:absolute;left:0;top:0;bottom:0;right:0;background-size:cover;background-position:center center;}input{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;opacity:0;z-index:5;}button{position:absolute;left:100%;top:0;", ";", ";", ";", ";", ";border:1px solid ", ";border-radius:50%;text-indent:-5000px;overflow:hidden;background-color:", ";z-index:10;}"], s.r.color.border, (0, c.vw)("width", 50, 90), (0, c.vw)("height", 50, 90), (0, c.vw)("width", 14), (0, c.vw)("height", 14), (0, c.Rp)("/images/icon_add.png"), (0, c.Rp)("/images/icon_close_small_dark.png", "9px 9px"), (0, c.vw)("width", 22), (0, c.vw)("height", 22), (0, c.vw)("margin-left", -11), (0, c.vw)("margin-top", -11), s.r.color.dark, s.r.color.background),
                N = a.ZP.ul.withConfig({
                    displayName: "Form__FormCheckeds",
                    componentId: "sc-1vq2e27-8"
                })(["display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;li{padding-right:20px;", ";", ";}", ";"], (0, c.vw)("padding-top", 5), (0, c.vw)("padding-bottom", 5), (function(e) {
                    return e.colWidth && (0, a.iv)(["li{width:", ";padding-right:0;}"], e.colWidth)
                })),
                O = function(e) {
                    var t = e.value,
                        n = e.onSubmit,
                        r = (0, l.useRef)(null);
                    return (0, g.jsxs)(C, {
                        children: [(0, g.jsx)(f.JO, {
                            w: [14, 14],
                            h: [13, 13],
                            path: "/images/icon_zoom.png"
                        }), (0, g.jsx)("input", {
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
                C = a.ZP.div.withConfig({
                    displayName: "Form__FormSearchStyled",
                    componentId: "sc-1vq2e27-9"
                })(["", " background-color:", ";display:flex;align-items:center;", ";", ";input{", ";background-color:transparent;border:0;", ";", ";width:100%;outline:none;color:", ";}"], (0, c.vw)("border-radius", 2), s.r.color.backgroundLight, (0, c.vw)("padding-left", 10), (0, c.vw)("padding-right", 10), (0, c.vw)("margin-left", 5), (0, c.vw)("height", 28), (0, c.vw)("font-size", 11), s.r.color.main)
        },
        2893: function(e, t, n) {
            var r = n(87379),
                i = n(9671),
                o = n(64575),
                a = n(67294),
                c = n(9261),
                s = n(11226),
                l = n(58447),
                d = n(85893),
                p = r.ZP.div.withConfig({
                    displayName: "Paginate__PaginationWrapper",
                    componentId: "sc-1keijzs-0"
                })(["display:flex;justify-content:center;", ";&.hidden{opacity:0;visibility:hidden;height:0;}ul{display:flex;li{a{background-color:", ";color:#797979;height:25px;padding:0 8px;display:flex;align-items:center;justify-content:center;margin-left:3.5px;margin-right:3.5px;}&.active{a{color:", ";font-weight:bold;background-color:", ";}}&.first{display:none;}}}", ";", ";", "{justify-content:flex-end;}"], (0, i.vw)("margin-top", 20), o.r.color.background, o.r.color.main, o.r.color.backgroundLight, (function(e) {
                    return e.pageRange && e.current && e.current > e.pageRange && (0, r.iv)(["ul{li{&.first{display:block;}}}"])
                }), (function(e) {
                    return e.current == e.last && (0, r.iv)(["ul{li{&.last{display:none;}}}"])
                }), (0, i.mI)());
            t.Z = function(e) {
                var t = e.margin,
                    n = e.current,
                    r = void 0 === n ? 1 : n,
                    i = e.total,
                    o = void 0 === i ? 0 : i,
                    u = e.num,
                    f = void 0 === u ? 5 : u,
                    g = e.onChangePagination,
                    h = e.onChange,
                    m = e.onLastPage,
                    v = e.hidden,
                    w = void 0 !== v && v;
                if (0 === o) return null;
                var b = o && f ? Math.ceil(o / f) : 1,
                    y = (0, a.useContext)(c.IsMobileContext),
                    x = function(e, t) {
                        g && g(e, t), h && h(e, t)
                    };
                return (0, a.useEffect)((function() {
                    m && m(b)
                }), [b]), y ? o < f ? null : (0, d.jsx)(s.Ls, {
                    whiteSpace: 20,
                    justify: "center",
                    className: "".concat(w ? "hidden" : ""),
                    children: r === b ? (0, d.jsx)("div", {
                        children: "\ub9c8\uc9c0\ub9c9\uc785\ub2c8\ub2e4."
                    }) : (0, d.jsx)(s.SZ, {
                        onClick: function() {
                            return x(r + 1, "NEXT")
                        }
                    })
                }) : (0, d.jsx)(p, {
                    margin: t,
                    current: r,
                    pageRange: f,
                    last: b,
                    className: "".concat(w ? "hidden" : ""),
                    children: (0, d.jsx)(l.Z, {
                        activePage: r,
                        itemsCountPerPage: f,
                        totalItemsCount: o,
                        pageRangeDisplayed: 5,
                        onChange: function(e) {
                            return x(e, "PAGE")
                        },
                        lastPageText: b.toString(),
                        firstPageText: "1",
                        itemClassFirst: "first",
                        itemClassLast: "last"
                    })
                })
            }
        },
        68340: function(e, t, n) {
            var r = n(41664),
                i = n(67294),
                o = n(87379),
                a = n(60473),
                c = n(64575),
                s = n(11163),
                l = n(9261),
                d = n(9671),
                p = n(85893),
                u = function() {
                    var e = (0, s.useRouter)(),
                        t = (0, i.useContext)(l.GlobalContext).appconfs,
                        n = (0, i.useState)(!1),
                        o = n[0],
                        a = n[1],
                        c = (0, i.useState)(!1),
                        d = c[0],
                        u = c[1];
                    return (0, i.useEffect)((function() {
                        return void 0 !== t["post-event-new"] && Number(t["post-event-new"].value) > 0 && u(!0), void 0 !== t["post-notice-new"] && Number(t["post-notice-new"].value) > 0 && a(!0),
                            function() {
                                u(!1), a(!1)
                            }
                    }), [t]), (0, p.jsxs)(f, {
                        children: [(0, p.jsx)("h1", {
                            children: "\uc804\uccb4 \uac8c\uc2dc\ubb3c"
                        }), (0, p.jsxs)("ul", {
                            children: [(0, p.jsx)("li", {
                                children: (0, p.jsx)(r.default, {
                                    href: "/post/notice",
                                    children: (0, p.jsxs)("a", {
                                        className: e.route.includes("/post/notice") || e.query.type && e.query.type.includes("notice") ? "active" : "",
                                        children: ["\uacf5\uc9c0\uc0ac\ud56d", o && (0, p.jsx)("span", {
                                            className: "icon-new"
                                        })]
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(r.default, {
                                    href: "/post/event",
                                    children: (0, p.jsxs)("a", {
                                        className: e.route.includes("/post/event") || e.query.type && e.query.type.includes("event") ? "active" : "",
                                        children: ["\uc774\ubca4\ud2b8", d && (0, p.jsx)("span", {
                                            className: "icon-new"
                                        })]
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(r.default, {
                                    href: "/post/board",
                                    children: (0, p.jsx)("a", {
                                        className: e.route.includes("/post/board") || e.query.type && e.query.type.includes("board") ? "active" : "",
                                        children: "\uc790\uc720 \uac8c\uc2dc\ud310"
                                    })
                                })
                            }), (0, p.jsx)("li", {
                                children: (0, p.jsx)(r.default, {
                                    href: "/post/review",
                                    children: (0, p.jsx)("a", {
                                        className: e.route.includes("/post/review") || e.query.type && e.query.type.includes("review") ? "active" : "",
                                        children: "\uc2dc\uccad\uc790 \ud3c9\uc810"
                                    })
                                })
                            })]
                        })]
                    })
                },
                f = o.ZP.div.withConfig({
                    displayName: "Post__AsideWrapper",
                    componentId: "sc-7ihobh-0"
                })(["h1{font-weight:bold;color:", ";font-size:13px;border-bottom:1px solid ", ";padding-bottom:17px;}& > div{padding-left:0;padding-right:0;}ul{margin-top:15px;li{font-size:13px;a{display:block;padding:5px 0;&.active{color:", ";}.icon-new{display:inline-block;margin-top:-1.5px;", ";", ";", ";", ";}}}}"], c.r.color.main, c.r.color.borderDark, c.r.color.primary, (0, d.vw)("width", 8), (0, d.vw)("height", 8), (0, d.vw)("margin-left", 5), (0, d.Rp)("/images/icon_new.png"));
            t.Z = function(e) {
                var t = e.title,
                    n = e.children,
                    r = e.titleName,
                    i = e.titleDesc,
                    o = e.headerTitle,
                    c = e.headerChildren,
                    s = e.PostIdHeader,
                    l = e.contentsClassName;
                return (0, p.jsx)(a.Z, {
                    pageTitle: r,
                    pageDesc: i,
                    aside: u(),
                    isHeaderBorder: !0,
                    headerTitle: o,
                    headerChildren: c,
                    title: t || "\ub3c4\ub77c\ub9c8\ucf54\ub9ac\uc544",
                    headerRight: s,
                    contentsClassName: l,
                    children: n
                })
            }
        },
        78014: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return d
                },
                Y: function() {
                    return p
                }
            });
            var r = n(41664),
                i = n(67294),
                o = n(9261),
                a = n(50285),
                c = n(11226),
                s = n(70348),
                l = n(85893),
                d = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "\uc81c\ubaa9" : t,
                        a = e.more,
                        d = e.description,
                        p = e.writeUrl,
                        u = e.bg,
                        f = e.search,
                        g = (0, i.useContext)(o.GlobalContext).isMobile;
                    return (0, l.jsxs)(s.bt, {
                        bg: u,
                        children: [(0, l.jsxs)("div", {
                            className: "titlebar",
                            children: [(0, l.jsx)("span", {
                                className: "title",
                                children: n
                            }), d && (0, l.jsx)("p", {
                                className: "description",
                                children: d
                            }), void 0 !== p || f, (0, l.jsxs)("div", {
                                className: "search-group",
                                children: [g && f && f, p && (0, l.jsx)(r.default, {
                                    href: p,
                                    children: (0, l.jsx)(c.gi, {
                                        as: "a",
                                        className: "btn-write",
                                        children: "\uac8c\uc2dc\uae00 \uc4f0\uae30"
                                    })
                                })]
                            })]
                        }), a && (0, l.jsx)(r.default, {
                            href: a,
                            children: a && (0, l.jsxs)("div", {
                                className: "more",
                                children: [(0, l.jsx)("span", {
                                    children: "\uc804\uccb4\ubcf4\uae30"
                                }), (0, l.jsx)("span", {
                                    className: "icon-arrow"
                                })]
                            })
                        })]
                    })
                },
                p = function(e) {
                    var t, n = e.data,
                        i = e.columns;
                    return (0, l.jsx)(s.LK, {
                        isPinned: n.is_pinned,
                        children: (0, l.jsx)(r.default, {
                            href: n.episode ? "/watch/".concat(n.episode.id, "?replyId=").concat(n.id) : "/post/".concat(null === (t = a.a.TYPE.get(n.type)) || void 0 === t ? void 0 : t.swap, "/").concat(n.id),
                            children: (0, l.jsx)("div", {
                                className: "item",
                                children: i.map((function(e) {
                                    return (0, l.jsx)(s.g_, {
                                        colWidth: e.width,
                                        className: "td ".concat(e.tdClassName, " ").concat("\ub9c8\uac10" === e.value(n) ? "end" : "", " ").concat("\uc9c4\ud589\uc911" === e.value(n) ? "ing" : ""),
                                        children: e.value(n)
                                    }, e.title)
                                }))
                            })
                        })
                    })
                }
        },
        11429: function(e, t, n) {
            var r = n(27812),
                i = n(59499),
                o = n(67294),
                a = n(2893),
                c = n(91557),
                s = n(62820),
                l = n(70348),
                d = n(78014),
                p = n(50285),
                u = n(97620),
                f = n(30381),
                g = n.n(f),
                h = n(11226),
                m = n(11163),
                v = n(76852),
                w = n(9261),
                b = n(87379),
                y = n(9671),
                x = n(85893);

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = b.ZP.div.withConfig({
                displayName: "PostList__PostSearchPaginateGroup",
                componentId: "sc-1k5y8s4-0"
            })(['display:flex;flex-direction:column;margin-top:20px;padding-left:10px;padding-right:10px;&.mobile{justify-content:center;}[class*="PostSearch__PostSearchWrapper"]{min-width:300px;}[class*="Paginate__PaginationWrapper"]{}', '{padding-left:0;padding-right:0;flex-direction:row;justify-content:flex-end;&.p-board{justify-content:space-between;}[class*="Paginate__PaginationWrapper"]{margin-top:0;}}'], (0, y.mI)());
            t.Z = function(e) {
                var t = e.listParams,
                    n = e.isPaging,
                    i = void 0 === n || n,
                    f = e.columnList,
                    b = void 0 === f ? ["\ubd84\ub958", "\uc81c\ubaa9", "\ub4f1\ub85d\uc77c"] : f,
                    y = (0, m.useRouter)(),
                    j = (0, o.useContext)(w.GlobalContext).isMobile,
                    k = (0, o.useState)(P({
                        page: 1,
                        num: 20
                    }, t)),
                    N = k[0],
                    O = k[1],
                    C = (0, o.useState)([]),
                    S = C[0],
                    E = C[1],
                    Z = (0, o.useState)("NEXT"),
                    I = Z[0],
                    z = Z[1],
                    D = c.P.usePosts("PL", N),
                    R = D.rows,
                    F = D.total,
                    q = D.isLoading;
                (0, o.useEffect)((function() {
                    R && N.page && (N.page > 1 && "NEXT" === I ? E([].concat((0, r.Z)(S), (0, r.Z)(R))) : E(R))
                }), [R]);
                var T = [{
                    title: "\ubd84\ub958",
                    width: "120px",
                    tdClassName: "type",
                    value: function(e) {
                        return e.event_began_at && e.event_ended_at ? (0, u.DY)(e.event_began_at, e.event_ended_at) : e.subtype ? "\uc5d0\ud53c\uc18c\ub4dc\ub313\uae00" === p.a.SUBTYPE.get(e.subtype) ? "\ub313\uae00" : p.a.SUBTYPE.get(e.subtype) : void 0
                    }
                }, {
                    title: "\uc81c\ubaa9",
                    width: "100%",
                    tdClassName: "title-wrapper",
                    value: function(e) {
                        return (0, x.jsx)(x.Fragment, {
                            children: (0, x.jsxs)("span", {
                                className: "title",
                                children: [" ", e.episode && e.episode.drama.title && (0, x.jsxs)("span", {
                                    className: "drama-title",
                                    children: ["[", e.episode.drama.title, "]"]
                                }), " ", 1 === e.is_pinned && (0, x.jsx)(h.JO, {
                                    path: "/images/icon_pin.png",
                                    w: [8, 8],
                                    h: [13, 13],
                                    className: "pin"
                                }), " ", e.title, e.replies_cnt > 0 && (0, x.jsxs)("span", {
                                    className: "reply-count",
                                    children: ["[", e.replies_cnt, "]"]
                                }), g()(e.created_at) > g()().subtract(7, "d") == 1 && (0, x.jsx)("span", {
                                    className: "icon-new"
                                })]
                            })
                        })
                    }
                }, {
                    title: "\uc791\uc131\uc790",
                    width: "150px",
                    tdClassName: "author",
                    value: function(e) {
                        return e.author && e.author.nickname
                    }
                }, {
                    title: "\ub4f1\ub85d\uc77c",
                    width: "150px",
                    tdClassName: "date",
                    value: function(e) {
                        return (0, u.Gb)("YYYY.MM.DD", e.created_at)
                    }
                }].filter((function(e) {
                    return b.includes(e.title)
                }));
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsxs)(l.pO, {
                        children: [(0, x.jsx)(l.aC, {
                            colWidth: ["120px", "100%", "150px", "150px"],
                            children: T.map((function(e) {
                                return (0, x.jsx)("div", {
                                    className: "th",
                                    children: e.title
                                }, e.title)
                            }))
                        }), S && S.map((function(e) {
                            return (0, x.jsx)(d.Y, {
                                columns: T,
                                data: e
                            }, e.id)
                        }))]
                    }), q && (0, x.jsx)(s.g, {
                        fixed: "PAGE" === I
                    }), (0, x.jsxs)(_, {
                        className: "".concat(j ? "mobile" : "pc", " ").concat(N.type),
                        children: [!j && "p-board" === N.type && i && (0, x.jsx)(v.Z, {}), i && N.page && N.num && (0, x.jsx)(a.Z, {
                            current: N.page,
                            num: N.num,
                            total: F,
                            onChange: function(e, t) {
                                O(P(P({}, N), {}, {
                                    page: e
                                })), z(t), "PAGE" === t && y.push((0, u.hp)({
                                    page: e
                                }))
                            },
                            margin: [20, 0, 0, 0]
                        })]
                    })]
                })
            }
        },
        76852: function(e, t, n) {
            var r = n(59499),
                i = n(11163),
                o = n(67294),
                a = n(87379),
                c = n(50285),
                s = n(97620),
                l = n(9671),
                d = n(56596),
                p = n(16550),
                u = n(85893);

            function f(e, t) {
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
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = new Map([
                ["all", "\uc804\uccb4"]
            ]);
            c.a.SUBTYPE.forEach((function(e, t) {
                t.includes("board") && h.set(t, e)
            }));
            var m = a.ZP.div.withConfig({
                displayName: "PostSearch__PostSearchWrapper",
                componentId: "sc-1k6f0hj-0"
            })(["display:flex;align-items:center;min-width:200px;& > div{&:last-child{flex:1;", ";}}"], (0, l.vw)("margin-left", 6));
            t.Z = function() {
                var e = (0, i.useRouter)(),
                    t = (0, o.useState)({}),
                    n = t[0],
                    r = t[1];
                (0, o.useEffect)((function() {
                    e && r(g({}, e.query))
                }), [e]);
                return (0, u.jsxs)(m, {
                    children: [(0, u.jsx)(d.A, {
                        list: h,
                        current: n.subtype ? n.subtype : "all",
                        onChange: function(t) {
                            e.push((0, s.hp)(g(g({}, n), {}, {
                                page: 1,
                                subtype: "all" === t ? void 0 : t
                            })))
                        },
                        className: "board-sort"
                    }), (0, u.jsx)(p.HK, {
                        value: n.keyword,
                        onSubmit: function(t) {
                            e.push((0, s.hp)(g(g({}, n), {}, {
                                page: 1,
                                keyword: t
                            })))
                        }
                    })]
                })
            }
        },
        70348: function(e, t, n) {
            n.d(t, {
                pO: function() {
                    return a
                },
                aC: function() {
                    return c
                },
                bt: function() {
                    return s
                },
                LK: function() {
                    return l
                },
                g_: function() {
                    return d
                },
                dd: function() {
                    return p
                },
                rf: function() {
                    return u
                }
            });
            var r = n(87379),
                i = n(9671),
                o = n(64575),
                a = r.ZP.div.withConfig({
                    displayName: "poststyled__PostListStyled",
                    componentId: "sc-123vj5g-0"
                })(["display:flex;flex-direction:column;width:100%;border-bottom:1px solid ", ";"], o.r.color.borderDark),
                c = r.ZP.div.withConfig({
                    displayName: "poststyled__PostListHeaderStyled",
                    componentId: "sc-123vj5g-1"
                })(["display:none;", "{display:flex;justify-content:space-between;border-bottom:1px solid ", ";.th{text-align:center;", ";padding:20px 10px;&:nth-child(1){width:", ";}&:nth-child(2){width:", ";}&:nth-child(3){width:", ";}&:nth-child(4){width:", ";}}}"], (0, i.mI)(), o.r.color.borderDark, (0, i.vw)("font-size", 15), (function(e) {
                    return e.colWidth && e.colWidth[0] && e.colWidth[0]
                }), (function(e) {
                    return e.colWidth && e.colWidth[1] && e.colWidth[1]
                }), (function(e) {
                    return e.colWidth && e.colWidth[2] && e.colWidth[2]
                }), (function(e) {
                    return e.colWidth && e.colWidth[3] && e.colWidth[3]
                })),
                s = r.ZP.div.withConfig({
                    displayName: "poststyled__PostHeaderStyled",
                    componentId: "sc-123vj5g-2"
                })(["display:flex;flex-direction:row;justify-content:space-between;width:100%;", ";", ";border-bottom:1px solid ", ";background-color:", ";", ";", ";.titlebar{}.search-group{", ";display:flex;justify-content:space-between;& > div{&:first-child{flex:1;", ";}}}span.title{display:block;font-weight:bold;color:white;line-height:1.3;", ";}p.description{", ";display:block;", ";}.btn-write{}div.more{display:flex;flex-direction:row;align-items:center;cursor:pointer;span{color:#aaaaaa;font-weight:500;", ";", ";}span.icon-arrow{", " ", " ", ";margin-right:0;}}", "{background-color:transparent;padding-left:0;padding-right:0;padding-top:40px;padding-bottom:20px;display:block;position:relative;.titlebar{position:relative;}.btn-write{position:absolute;right:0;bottom:7px;}}"], (0, i.vw)("padding", o.r.size.whiteSpace, 40), (0, i.vw)("padding-top", 0), o.r.color.borderDark, o.r.color.background, (function(e) {
                    return e.bg && (0, r.iv)(["background-color:", ";"], e.bg)
                }), (function(e) {
                    return "transparent" === e.bg && (0, r.iv)(["border-bottom:0;"])
                }), (0, i.vw)("margin-top", 13), (0, i.vw)("margin-right", 6), (0, i.vw)("font-size", 20, 32), (0, i.vw)("margin-top", 8), (0, i.vw)("font-size", 12, 14), (0, i.vw)("font-size", 14), (0, i.vw)("margin-right", 10), (0, i.vw)("width", 6), (0, i.vw)("height", 12), (0, i.Rp)("/images/icon_right_arrow.png"), (0, i.mI)()),
                l = r.ZP.div.withConfig({
                    displayName: "poststyled__PostItemStyled",
                    componentId: "sc-123vj5g-3"
                })(["position:relative;border-bottom:1px dotted ", ";:last-child{border-bottom:0;}div.item{display:flex;flex-direction:column;justify-content:center;", " cursor:pointer;}", "{div.item{overflow:hidden;flex-direction:row;}}", ";"], o.r.color.borderDark, (0, i.uM)([17, 20, 17, 20], [16, 0, 16, 0]), (0, i.mI)(), (function(e) {
                    return e.isPinned && (0, r.iv)(["background-color:", ";"], o.r.color.background)
                })),
                d = r.ZP.div.withConfig({
                    displayName: "poststyled__PostItemTdStyled",
                    componentId: "sc-123vj5g-4"
                })(["position:relative;&.type{color:white;", ";", ";&.end{color:", ";}&.ing{color:", ";}}&.title-wrapper{display:flex;flex-direction:row;", ";vertical-align:middle;.title{display:block;.pin{display:inline-block;vertical-align:middle;margin-right:3px;}}.reply-count{color:", ";", ";", ";}.icon-new{display:inline-block;", ";", ";", ";", ";}.drama-title{font-weight:bold;color:", ";}}&.author{position:absolute;", " bottom:0;", " color:", ";", ";}&.date{color:", ";", ";}&.review-wrapper{display:flex;flex-direction:row;justify-content:space-between;.user-name{color:#575757;", ";}}", "{text-align:center;&.title-wrapper{text-align:left;overflow:hidden;width:100%;margin-bottom:0;}.title{", ";max-width:400px;}&.type{color:#aaaaaa;}&.author{position:static;}", ";}"], (0, i.vw)("font-size", 12, 14), (0, i.vw)("margin-bottom", 5, 0), o.r.color.dark, o.r.color.primary, (0, i.vw)("margin-bottom", 5), o.r.color.primary, (0, i.vw)("margin-left", 3), (0, i.vw)("font-size", 14), (0, i.vw)("width", 8), (0, i.vw)("height", 8), (0, i.vw)("margin-left", 5), (0, i.Rp)("/images/icon_new.png"), o.r.color.dark, (0, i.vw)("right", 20), (0, i.vw)("bottom", 17), o.r.color.dark, (0, i.vw)("font-size", 12, 14), o.r.color.dark, (0, i.vw)("font-size", 12, 14), (0, i.vw)("font-size", 12), (0, i.mI)(), (0, i.LH)(1), (function(e) {
                    return e.colWidth && (0, r.iv)(["width:", ";"], e.colWidth)
                })),
                p = r.ZP.div.withConfig({
                    displayName: "poststyled__ReviewWrapper",
                    componentId: "sc-123vj5g-5"
                })(["display:flex;flex-direction:column;width:100%;", ";"], (0, i.vw)("margin-top", 20, 0)),
                u = r.ZP.a.withConfig({
                    displayName: "poststyled__ReviewItem",
                    componentId: "sc-123vj5g-6"
                })(["display:flex;flex-direction:row;background-color:#252525;", ";", "{background-color:transparent;border-bottom:1px solid ", ";padding-left:0;}img.thumb{", ";", ";", ";}div.review-info{flex:1;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;.title{color:#aaaaaa;font-weight:bold;", ";", ";line-height:1.5;", "}.desc{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;-webkit-line-clamp:3;-webkit-box-orient:vertical;line-height:1.67;margin-top:5px;", ";", ";}div.user-info{display:flex;flex-direction:row;align-items:center;color:#575757;", ";.user-name{", ";", ";", ";}.bar{", ";}.date{", ";", ";}}}"], (0, i.vw)("padding", 20), (0, i.mI)(), o.r.color.borderDark, (0, i.vw)("width", 74, 97), (0, i.vw)("height", 107, 140), (0, i.vw)("margin-right", 15, 20), (0, i.vw)("font-size", 14), (0, i.vw)("margin-bottom", 5), (0, i.LH)(1), (0, i.vw)("font-size", 12), (0, i.vw)("margin-bottom", 7), (0, i.vw)("font-size", 11), (0, i.vw)("margin-left", 8), (0, i.vw)("margin-right", 2), (0, i.vw)("margin-top", 2), (0, i.vw)("margin-top", 2), (0, i.vw)("margin-left", 2), (0, i.vw)("margin-top", 2))
        },
        35157: function(e, t, n) {
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
        50285: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });
            var r = {
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
        91557: function(e, t, n) {
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
                d = n(80129),
                p = n.n(d),
                u = n(45522),
                f = n(25139);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
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
                    var n = (0, u.ZP)(["/api/posts", p().stringify(h(h({}, t), {}, {
                            subset: e
                        }))]),
                        r = n.data,
                        i = n.error,
                        o = n.mutate;
                    return h(h({}, r), {}, {
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
        97620: function(e, t, n) {
            n.d(t, {
                Kj: function() {
                    return h
                },
                bE: function() {
                    return v
                },
                Tq: function() {
                    return b
                },
                Gb: function() {
                    return y
                },
                MU: function() {
                    return x
                },
                $y: function() {
                    return j
                },
                SR: function() {
                    return P
                },
                Mi: function() {
                    return _
                },
                hp: function() {
                    return k
                },
                Y7: function() {
                    return N
                },
                DY: function() {
                    return O
                },
                nD: function() {
                    return C
                }
            });
            var r = n(59499),
                i = n(16835),
                o = n(80129),
                a = n.n(o),
                c = n(11987),
                s = n.n(c),
                l = n(22188),
                d = n(30381),
                p = n.n(d),
                u = n(54561);

            function f(e, t) {
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
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                    var t = Array.from(u.B.QUARTER).find((function(t) {
                        return (0, i.Z)(t, 1)[0] === e
                    }));
                    return t ? t[1] : e
                },
                m = {
                    kakao: "\uce74\uce74\uc624\ud1a1",
                    facebook: "\ud398\uc774\uc2a4\ubd81",
                    naver: "\ub124\uc774\ubc84",
                    apple: "\uc560\ud50c"
                },
                v = function(e) {
                    return !!e && m[e]
                },
                w = {
                    genres: "\uc7a5\ub974",
                    tags: "\ud0dc\uadf8",
                    quarter: "\uc5f0\ub3c4",
                    active: "\ubc29\uc601",
                    broadcasters: "\uc81c\uc791\uc0ac"
                },
                b = function(e) {
                    return w[e]
                },
                y = function(e, t) {
                    return t ? p()(t).format(e) : "0000-00-00"
                },
                x = function(e) {
                    var t = p().duration(e, "seconds"),
                        n = Math.floor(t.asHours()),
                        r = t.minutes(),
                        i = t.seconds();
                    return "".concat(n > 0 ? n + ":" : "").concat(r, ":").concat(i < 10 ? "0" + i : i)
                },
                j = function(e) {
                    return null === e || p()(e) > p()()
                },
                P = function(e, t) {
                    return e.length > t ? e.substr(0, t - 2) + "..." : e
                },
                _ = function(e) {
                    return e.replace(new RegExp("\n", "g"), "<br/>")
                },
                k = function(e) {
                    var t, n = s().parse(location.href),
                        i = location.href.replace(null !== (t = n.search) && void 0 !== t ? t : "", ""),
                        o = {};
                    Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        o = g(g({}, o), {}, (0, r.Z)({}, t, (0, l.ZN)(n)))
                    }));
                    var c = "".concat(a().stringify(o, {
                        encode: !1,
                        arrayFormat: "brackets"
                    }));
                    return "".concat(i, "?").concat(c)
                },
                N = function(e, t) {
                    return e.slice(0, t)
                },
                O = function(e, t) {
                    if (e && t) {
                        var n = p()(),
                            r = p()(e),
                            i = p()(t);
                        return r < n && i > n ? "\uc9c4\ud589\uc911" : i < n ? "\ub9c8\uac10" : "\uc608\uc815"
                    }
                    return null
                },
                C = function(e) {
                    console.log(e);
                    var t = new Date,
                        n = t.getFullYear(),
                        r = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                        i = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                        o = String(r) + String(i),
                        a = Number(e.substr(0, 4)),
                        c = Number(e.substr(4, 4));
                    return Number(o) < c ? n - a - 1 : n - a
                }
        }
    }
]);