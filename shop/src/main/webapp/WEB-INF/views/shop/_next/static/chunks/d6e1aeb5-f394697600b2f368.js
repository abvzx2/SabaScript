"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2544], {
        85215: function(e, t, i) {
            var n = i(92661),
                r = i.n(n),
                s = i(39561),
                a = i.n(s),
                o = i(67154),
                l = i.n(o),
                u = i(81506),
                c = i.n(u),
                d = (i(78585), i(29754), i(85354)),
                h = i.n(d),
                p = i(75974),
                f = i.n(p),
                m = i(27537),
                g = i.n(m),
                v = i(23316),
                _ = i.n(v),
                y = i(13407),
                T = i.n(y),
                b = i(69100),
                S = i.n(b),
                k = i(2205),
                C = i.n(k),
                E = i(49972),
                w = i.n(E),
                I = i(54758),
                P = i(74810),
                A = i(40973),
                L = i(84221),
                x = i.n(L),
                O = i(49352),
                D = i(40185),
                M = i(65547),
                R = i.n(M),
                U = i(51489),
                N = i(47661),
                F = i.n(N),
                B = i(78044),
                j = "7.10.2",
                q = [];
            var H = function e(t) {
                    var i, n = "info",
                        s = function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            i("log", n, t)
                        };
                    return i = function(e, t) {
                        return function(i, n, s) {
                            var a = t.levels[n],
                                o = new RegExp("^(" + a + ")$");
                            if ("log" !== i && s.unshift(i.toUpperCase() + ":"), s.unshift(e + ":"), q) {
                                q.push([].concat(s));
                                var l = q.length - 1e3;
                                q.splice(0, l > 0 ? l : 0)
                            }
                            if (r().console) {
                                var u = r().console[i];
                                u || "debug" !== i || (u = r().console.info || r().console.log), u && a && o.test(i) && u[Array.isArray(s) ? "apply" : "call"](r().console, s)
                            }
                        }
                    }(t, s), s.createLogger = function(i) {
                        return e(t + ": " + i)
                    }, s.levels = {
                        all: "debug|log|warn|error",
                        off: "",
                        debug: "debug|log|warn|error",
                        info: "log|warn|error",
                        warn: "warn|error",
                        error: "error",
                        DEFAULT: n
                    }, s.level = function(e) {
                        if ("string" === typeof e) {
                            if (!s.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                            n = e
                        }
                        return n
                    }, (s.history = function() {
                        return q ? [].concat(q) : []
                    }).filter = function(e) {
                        return (q || []).filter((function(t) {
                            return new RegExp(".*" + e + ".*").test(t[0])
                        }))
                    }, s.history.clear = function() {
                        q && (q.length = 0)
                    }, s.history.disable = function() {
                        null !== q && (q.length = 0, q = null)
                    }, s.history.enable = function() {
                        null === q && (q = [])
                    }, s.error = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return i("error", n, t)
                    }, s.warn = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return i("warn", n, t)
                    }, s.debug = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return i("debug", n, t)
                    }, s
                }("VIDEOJS"),
                V = H.createLogger,
                W = Object.prototype.toString,
                z = function(e) {
                    return Q(e) ? Object.keys(e) : []
                };

            function G(e, t) {
                z(e).forEach((function(i) {
                    return t(e[i], i)
                }))
            }

            function K(e) {
                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                return Object.assign ? l().apply(void 0, [e].concat(i)) : (i.forEach((function(t) {
                    t && G(t, (function(t, i) {
                        e[i] = t
                    }))
                })), e)
            }

            function Q(e) {
                return !!e && "object" === typeof e
            }

            function X(e) {
                return Q(e) && "[object Object]" === W.call(e) && e.constructor === Object
            }

            function Y(e, t) {
                if (!e || !t) return "";
                if ("function" === typeof r().getComputedStyle) {
                    var i = r().getComputedStyle(e);
                    return i ? i.getPropertyValue(t) || i[t] : ""
                }
                return ""
            }

            function $(e) {
                return "string" === typeof e && Boolean(e.trim())
            }

            function J(e) {
                if (e.indexOf(" ") >= 0) throw new Error("class has illegal whitespace characters")
            }

            function Z() {
                return a() === r().document
            }

            function ee(e) {
                return Q(e) && 1 === e.nodeType
            }

            function te() {
                try {
                    return r().parent !== r().self
                } catch (e) {
                    return !0
                }
            }

            function ie(e) {
                return function(t, i) {
                    if (!$(t)) return a()[e](null);
                    $(i) && (i = a().querySelector(i));
                    var n = ee(i) ? i : a();
                    return n[e] && n[e](t)
                }
            }

            function ne(e, t, i, n) {
                void 0 === e && (e = "div"), void 0 === t && (t = {}), void 0 === i && (i = {});
                var r = a().createElement(e);
                return Object.getOwnPropertyNames(t).forEach((function(e) {
                    var i = t[e]; - 1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (H.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set " + e + " to " + i + "."), r.setAttribute(e, i)) : "textContent" === e ? re(r, i) : r[e] !== i && (r[e] = i)
                })), Object.getOwnPropertyNames(i).forEach((function(e) {
                    r.setAttribute(e, i[e])
                })), n && ke(r, n), r
            }

            function re(e, t) {
                return "undefined" === typeof e.textContent ? e.innerText = t : e.textContent = t, e
            }

            function se(e, t) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }

            function ae(e, t) {
                return J(t), e.classList ? e.classList.contains(t) : (i = t, new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
                var i
            }

            function oe(e, t) {
                return e.classList ? e.classList.add(t) : ae(e, t) || (e.className = (e.className + " " + t).trim()), e
            }

            function le(e, t) {
                return e.classList ? e.classList.remove(t) : (J(t), e.className = e.className.split(/\s+/).filter((function(e) {
                    return e !== t
                })).join(" ")), e
            }

            function ue(e, t, i) {
                var n = ae(e, t);
                if ("function" === typeof i && (i = i(e, t)), "boolean" !== typeof i && (i = !n), i !== n) return i ? oe(e, t) : le(e, t), e
            }

            function ce(e, t) {
                Object.getOwnPropertyNames(t).forEach((function(i) {
                    var n = t[i];
                    null === n || "undefined" === typeof n || !1 === n ? e.removeAttribute(i) : e.setAttribute(i, !0 === n ? "" : n)
                }))
            }

            function de(e) {
                var t = {},
                    i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
                if (e && e.attributes && e.attributes.length > 0)
                    for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
                        var s = n[r].name,
                            a = n[r].value;
                        "boolean" !== typeof e[s] && -1 === i.indexOf("," + s + ",") || (a = null !== a), t[s] = a
                    }
                return t
            }

            function he(e, t) {
                return e.getAttribute(t)
            }

            function pe(e, t, i) {
                e.setAttribute(t, i)
            }

            function fe(e, t) {
                e.removeAttribute(t)
            }

            function me() {
                a().body.focus(), a().onselectstart = function() {
                    return !1
                }
            }

            function ge() {
                a().onselectstart = function() {
                    return !0
                }
            }

            function ve(e) {
                if (e && e.getBoundingClientRect && e.parentNode) {
                    var t = e.getBoundingClientRect(),
                        i = {};
                    return ["bottom", "height", "left", "right", "top", "width"].forEach((function(e) {
                        void 0 !== t[e] && (i[e] = t[e])
                    })), i.height || (i.height = parseFloat(Y(e, "height"))), i.width || (i.width = parseFloat(Y(e, "width"))), i
                }
            }

            function _e(e) {
                if (!e || e && !e.offsetParent) return {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                var t = e.offsetWidth,
                    i = e.offsetHeight,
                    n = 0,
                    r = 0;
                do {
                    n += e.offsetLeft, r += e.offsetTop, e = e.offsetParent
                } while (e);
                return {
                    left: n,
                    top: r,
                    width: t,
                    height: i
                }
            }

            function ye(e, t) {
                var i = {},
                    n = _e(t.target),
                    r = _e(e),
                    s = r.width,
                    a = r.height,
                    o = t.offsetY - (r.top - n.top),
                    l = t.offsetX - (r.left - n.left);
                return t.changedTouches && (l = t.changedTouches[0].pageX - r.left, o = t.changedTouches[0].pageY + r.top), i.y = 1 - Math.max(0, Math.min(1, o / a)), i.x = Math.max(0, Math.min(1, l / s)), i
            }

            function Te(e) {
                return Q(e) && 3 === e.nodeType
            }

            function be(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return e
            }

            function Se(e) {
                return "function" === typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map((function(e) {
                    return "function" === typeof e && (e = e()), ee(e) || Te(e) ? e : "string" === typeof e && /\S/.test(e) ? a().createTextNode(e) : void 0
                })).filter((function(e) {
                    return e
                }))
            }

            function ke(e, t) {
                return Se(t).forEach((function(t) {
                    return e.appendChild(t)
                })), e
            }

            function Ce(e, t) {
                return ke(be(e), t)
            }

            function Ee(e) {
                return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || ("mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons))
            }
            var we, Ie = ie("querySelector"),
                Pe = ie("querySelectorAll"),
                Ae = Object.freeze({
                    __proto__: null,
                    isReal: Z,
                    isEl: ee,
                    isInFrame: te,
                    createEl: ne,
                    textContent: re,
                    prependTo: se,
                    hasClass: ae,
                    addClass: oe,
                    removeClass: le,
                    toggleClass: ue,
                    setAttributes: ce,
                    getAttributes: de,
                    getAttribute: he,
                    setAttribute: pe,
                    removeAttribute: fe,
                    blockTextSelection: me,
                    unblockTextSelection: ge,
                    getBoundingClientRect: ve,
                    findPosition: _e,
                    getPointerPosition: ye,
                    isTextNode: Te,
                    emptyEl: be,
                    normalizeContent: Se,
                    appendContent: ke,
                    insertContent: Ce,
                    isSingleLeftClick: Ee,
                    $: Ie,
                    $$: Pe
                }),
                Le = !1,
                xe = function() {
                    if (Z() && !1 !== we.options.autoSetup) {
                        var e = Array.prototype.slice.call(a().getElementsByTagName("video")),
                            t = Array.prototype.slice.call(a().getElementsByTagName("audio")),
                            i = Array.prototype.slice.call(a().getElementsByTagName("video-js")),
                            n = e.concat(t, i);
                        if (n && n.length > 0)
                            for (var r = 0, s = n.length; r < s; r++) {
                                var o = n[r];
                                if (!o || !o.getAttribute) {
                                    Oe(1);
                                    break
                                }
                                void 0 === o.player && null !== o.getAttribute("data-setup") && we(o)
                            } else Le || Oe(1)
                    }
                };

            function Oe(e, t) {
                t && (we = t), r().setTimeout(xe, e)
            }

            function De() {
                Le = !0, r().removeEventListener("load", De)
            }
            Z() && ("complete" === a().readyState ? De() : r().addEventListener("load", De));
            var Me, Re = function(e) {
                    var t = a().createElement("style");
                    return t.className = e, t
                },
                Ue = function(e, t) {
                    e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
                },
                Ne = 3;

            function Fe() {
                return Ne++
            }
            r().WeakMap || (Me = function() {
                function e() {
                    this.vdata = "vdata" + Math.floor(r().performance && r().performance.now() || Date.now()), this.data = {}
                }
                var t = e.prototype;
                return t.set = function(e, t) {
                    var i = e[this.vdata] || Fe();
                    return e[this.vdata] || (e[this.vdata] = i), this.data[i] = t, this
                }, t.get = function(e) {
                    var t = e[this.vdata];
                    if (t) return this.data[t];
                    H("We have no data for this element", e)
                }, t.has = function(e) {
                    return e[this.vdata] in this.data
                }, t.delete = function(e) {
                    var t = e[this.vdata];
                    t && (delete this.data[t], delete e[this.vdata])
                }, e
            }());
            var Be, je = r().WeakMap ? new WeakMap : new Me;

            function qe(e, t) {
                if (je.has(e)) {
                    var i = je.get(e);
                    0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && je.delete(e)
                }
            }

            function He(e, t, i, n) {
                i.forEach((function(i) {
                    e(t, i, n)
                }))
            }

            function Ve(e) {
                if (e.fixed_) return e;

                function t() {
                    return !0
                }

                function i() {
                    return !1
                }
                if (!e || !e.isPropagationStopped) {
                    var n = e || r().event;
                    for (var s in e = {}, n) "layerX" !== s && "layerY" !== s && "keyLocation" !== s && "webkitMovementX" !== s && "webkitMovementY" !== s && ("returnValue" === s && n.preventDefault || (e[s] = n[s]));
                    if (e.target || (e.target = e.srcElement || a()), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() {
                            n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0
                        }, e.defaultPrevented = !1, e.stopPropagation = function() {
                            n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = t
                        }, e.isPropagationStopped = i, e.stopImmediatePropagation = function() {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                        }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                        var o = a().documentElement,
                            l = a().body;
                        e.pageX = e.clientX + (o && o.scrollLeft || l && l.scrollLeft || 0) - (o && o.clientLeft || l && l.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || l && l.scrollTop || 0) - (o && o.clientTop || l && l.clientTop || 0)
                    }
                    e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
                }
                return e.fixed_ = !0, e
            }
            var We = ["touchstart", "touchmove"];

            function ze(e, t, i) {
                if (Array.isArray(t)) return He(ze, e, t, i);
                je.has(e) || je.set(e, {});
                var n = je.get(e);
                if (n.handlers || (n.handlers = {}), n.handlers[t] || (n.handlers[t] = []), i.guid || (i.guid = Fe()), n.handlers[t].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function(t, i) {
                        if (!n.disabled) {
                            t = Ve(t);
                            var r = n.handlers[t.type];
                            if (r)
                                for (var s = r.slice(0), a = 0, o = s.length; a < o && !t.isImmediatePropagationStopped(); a++) try {
                                    s[a].call(e, t, i)
                                } catch (l) {
                                    H.error(l)
                                }
                        }
                    }), 1 === n.handlers[t].length)
                    if (e.addEventListener) {
                        var s = !1;
                        (function() {
                            if ("boolean" !== typeof Be) {
                                Be = !1;
                                try {
                                    var e = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            Be = !0
                                        }
                                    });
                                    r().addEventListener("test", null, e), r().removeEventListener("test", null, e)
                                } catch (t) {}
                            }
                            return Be
                        })() && We.indexOf(t) > -1 && (s = {
                            passive: !0
                        }), e.addEventListener(t, n.dispatcher, s)
                    } else e.attachEvent && e.attachEvent("on" + t, n.dispatcher)
            }

            function Ge(e, t, i) {
                if (je.has(e)) {
                    var n = je.get(e);
                    if (n.handlers) {
                        if (Array.isArray(t)) return He(Ge, e, t, i);
                        var r = function(e, t) {
                            n.handlers[t] = [], qe(e, t)
                        };
                        if (void 0 !== t) {
                            var s = n.handlers[t];
                            if (s)
                                if (i) {
                                    if (i.guid)
                                        for (var a = 0; a < s.length; a++) s[a].guid === i.guid && s.splice(a--, 1);
                                    qe(e, t)
                                } else r(e, t)
                        } else
                            for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
                    }
                }
            }

            function Ke(e, t, i) {
                var n = je.has(e) ? je.get(e) : {},
                    r = e.parentNode || e.ownerDocument;
                if ("string" === typeof t ? t = {
                        type: t,
                        target: e
                    } : t.target || (t.target = e), t = Ve(t), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) Ke.call(null, r, t, i);
                else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
                    je.has(t.target) || je.set(t.target, {});
                    var s = je.get(t.target);
                    t.target[t.type] && (s.disabled = !0, "function" === typeof t.target[t.type] && t.target[t.type](), s.disabled = !1)
                }
                return !t.defaultPrevented
            }

            function Qe(e, t, i) {
                if (Array.isArray(t)) return He(Qe, e, t, i);
                var n = function n() {
                    Ge(e, t, n), i.apply(this, arguments)
                };
                n.guid = i.guid = i.guid || Fe(), ze(e, t, n)
            }

            function Xe(e, t, i) {
                var n = function n() {
                    Ge(e, t, n), i.apply(this, arguments)
                };
                n.guid = i.guid = i.guid || Fe(), ze(e, t, n)
            }
            var Ye, $e = Object.freeze({
                    __proto__: null,
                    fixEvent: Ve,
                    on: ze,
                    off: Ge,
                    trigger: Ke,
                    one: Qe,
                    any: Xe
                }),
                Je = 30,
                Ze = function(e, t, i) {
                    t.guid || (t.guid = Fe());
                    var n = t.bind(e);
                    return n.guid = i ? i + "_" + t.guid : t.guid, n
                },
                et = function(e, t) {
                    var i = r().performance.now();
                    return function() {
                        var n = r().performance.now();
                        n - i >= t && (e.apply(void 0, arguments), i = n)
                    }
                },
                tt = function() {};
            tt.prototype.allowedEvents_ = {}, tt.prototype.on = function(e, t) {
                var i = this.addEventListener;
                this.addEventListener = function() {}, ze(this, e, t), this.addEventListener = i
            }, tt.prototype.addEventListener = tt.prototype.on, tt.prototype.off = function(e, t) {
                Ge(this, e, t)
            }, tt.prototype.removeEventListener = tt.prototype.off, tt.prototype.one = function(e, t) {
                var i = this.addEventListener;
                this.addEventListener = function() {}, Qe(this, e, t), this.addEventListener = i
            }, tt.prototype.any = function(e, t) {
                var i = this.addEventListener;
                this.addEventListener = function() {}, Xe(this, e, t), this.addEventListener = i
            }, tt.prototype.trigger = function(e) {
                var t = e.type || e;
                "string" === typeof e && (e = {
                    type: t
                }), e = Ve(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), Ke(this, e)
            }, tt.prototype.dispatchEvent = tt.prototype.trigger, tt.prototype.queueTrigger = function(e) {
                var t = this;
                Ye || (Ye = new Map);
                var i = e.type || e,
                    n = Ye.get(this);
                n || (n = new Map, Ye.set(this, n));
                var s = n.get(i);
                n.delete(i), r().clearTimeout(s);
                var a = r().setTimeout((function() {
                    0 === n.size && (n = null, Ye.delete(t)), t.trigger(e)
                }), 0);
                n.set(i, a)
            };
            var it = function(e) {
                    return e instanceof tt || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every((function(t) {
                        return "function" === typeof e[t]
                    }))
                },
                nt = function(e) {
                    return "string" === typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
                },
                rt = function(e) {
                    if (!e.nodeName && !it(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
                },
                st = function(e) {
                    if (!nt(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
                },
                at = function(e) {
                    if ("function" !== typeof e) throw new Error("Invalid listener; must be a function.")
                },
                ot = function(e, t) {
                    var i, n, r, s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
                    return s ? (i = e.eventBusEl_, t.length >= 3 && t.shift(), n = t[0], r = t[1]) : (i = t[0], n = t[1], r = t[2]), rt(i), st(n), at(r), {
                        isTargetingSelf: s,
                        target: i,
                        type: n,
                        listener: r = Ze(e, r)
                    }
                },
                lt = function(e, t, i, n) {
                    rt(e), e.nodeName ? $e[t](e, i, n) : e[t](i, n)
                },
                ut = {
                    on: function() {
                        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        var r = ot(this, i),
                            s = r.isTargetingSelf,
                            a = r.target,
                            o = r.type,
                            l = r.listener;
                        if (lt(a, "on", o, l), !s) {
                            var u = function() {
                                return e.off(a, o, l)
                            };
                            u.guid = l.guid;
                            var c = function() {
                                return e.off("dispose", u)
                            };
                            c.guid = l.guid, lt(this, "on", "dispose", u), lt(a, "on", "dispose", c)
                        }
                    },
                    one: function() {
                        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        var r = ot(this, i),
                            s = r.isTargetingSelf,
                            a = r.target,
                            o = r.type,
                            l = r.listener;
                        if (s) lt(a, "one", o, l);
                        else {
                            var u = function t() {
                                e.off(a, o, t);
                                for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                                l.apply(null, n)
                            };
                            u.guid = l.guid, lt(a, "one", o, u)
                        }
                    },
                    any: function() {
                        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        var r = ot(this, i),
                            s = r.isTargetingSelf,
                            a = r.target,
                            o = r.type,
                            l = r.listener;
                        if (s) lt(a, "any", o, l);
                        else {
                            var u = function t() {
                                e.off(a, o, t);
                                for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                                l.apply(null, n)
                            };
                            u.guid = l.guid, lt(a, "any", o, u)
                        }
                    },
                    off: function(e, t, i) {
                        if (!e || nt(e)) Ge(this.eventBusEl_, e, t);
                        else {
                            var n = e,
                                r = t;
                            rt(n), st(r), at(i), i = Ze(this, i), this.off("dispose", i), n.nodeName ? (Ge(n, r, i), Ge(n, "dispose", i)) : it(n) && (n.off(r, i), n.off("dispose", i))
                        }
                    },
                    trigger: function(e, t) {
                        return Ke(this.eventBusEl_, e, t)
                    }
                };

            function ct(e, t) {
                void 0 === t && (t = {});
                var i = t.eventBusKey;
                if (i) {
                    if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
                    e.eventBusEl_ = e[i]
                } else e.eventBusEl_ = ne("span", {
                    className: "vjs-event-bus"
                });
                return K(e, ut), e.eventedCallbacks && e.eventedCallbacks.forEach((function(e) {
                    e()
                })), e.on("dispose", (function() {
                    e.off(), r().setTimeout((function() {
                        e.eventBusEl_ = null
                    }), 0)
                })), e
            }
            var dt = {
                state: {},
                setState: function(e) {
                    var t, i = this;
                    return "function" === typeof e && (e = e()), G(e, (function(e, n) {
                        i.state[n] !== e && ((t = t || {})[n] = {
                            from: i.state[n],
                            to: e
                        }), i.state[n] = e
                    })), t && it(this) && this.trigger({
                        changes: t,
                        type: "statechanged"
                    }), t
                }
            };

            function ht(e, t) {
                return K(e, dt), e.state = K({}, e.state, t), "function" === typeof e.handleStateChanged && it(e) && e.on("statechanged", e.handleStateChanged), e
            }
            var pt = function(e) {
                    return "string" !== typeof e ? e : e.replace(/./, (function(e) {
                        return e.toLowerCase()
                    }))
                },
                ft = function(e) {
                    return "string" !== typeof e ? e : e.replace(/./, (function(e) {
                        return e.toUpperCase()
                    }))
                };

            function mt() {
                for (var e = {}, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                return i.forEach((function(t) {
                    t && G(t, (function(t, i) {
                        X(t) ? (X(e[i]) || (e[i] = {}), e[i] = mt(e[i], t)) : e[i] = t
                    }))
                })), e
            }
            var gt = function() {
                    function e() {
                        this.map_ = {}
                    }
                    var t = e.prototype;
                    return t.has = function(e) {
                        return e in this.map_
                    }, t.delete = function(e) {
                        var t = this.has(e);
                        return delete this.map_[e], t
                    }, t.set = function(e, t) {
                        return this.set_[e] = t, this
                    }, t.forEach = function(e, t) {
                        for (var i in this.map_) e.call(t, this.map_[i], i, this)
                    }, e
                }(),
                vt = r().Map ? r().Map : gt,
                _t = function() {
                    function e() {
                        this.set_ = {}
                    }
                    var t = e.prototype;
                    return t.has = function(e) {
                        return e in this.set_
                    }, t.delete = function(e) {
                        var t = this.has(e);
                        return delete this.set_[e], t
                    }, t.add = function(e) {
                        return this.set_[e] = 1, this
                    }, t.forEach = function(e, t) {
                        for (var i in this.set_) e.call(t, i, i, this)
                    }, e
                }(),
                yt = r().Set ? r().Set : _t,
                Tt = function() {
                    function e(e, t, i) {
                        if (!e && this.play ? this.player_ = e = this : this.player_ = e, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = mt({}, this.options_), t = this.options_ = mt(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                            var n = e && e.id && e.id() || "no_player";
                            this.id_ = n + "_component_" + Fe()
                        }
                        this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && ct(this, {
                            eventBusKey: this.el_ ? "el_" : null
                        }), ht(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = new yt, this.setIntervalIds_ = new yt, this.rafIds_ = new yt, this.namedRafs_ = new vt, this.clearingTimersOnDispose_ = !1, !1 !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
                    }
                    var t = e.prototype;
                    return t.dispose = function() {
                        if (!this.isDisposed_) {
                            if (this.trigger({
                                    type: "dispose",
                                    bubbles: !1
                                }), this.isDisposed_ = !0, this.children_)
                                for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
                            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), je.has(this.el_) && je.delete(this.el_), this.el_ = null), this.player_ = null
                        }
                    }, t.isDisposed = function() {
                        return Boolean(this.isDisposed_)
                    }, t.player = function() {
                        return this.player_
                    }, t.options = function(e) {
                        return e ? (this.options_ = mt(this.options_, e), this.options_) : this.options_
                    }, t.el = function() {
                        return this.el_
                    }, t.createEl = function(e, t, i) {
                        return ne(e, t, i)
                    }, t.localize = function(e, t, i) {
                        void 0 === i && (i = e);
                        var n = this.player_.language && this.player_.language(),
                            r = this.player_.languages && this.player_.languages(),
                            s = r && r[n],
                            a = n && n.split("-")[0],
                            o = r && r[a],
                            l = i;
                        return s && s[e] ? l = s[e] : o && o[e] && (l = o[e]), t && (l = l.replace(/\{(\d+)\}/g, (function(e, i) {
                            var n = t[i - 1],
                                r = n;
                            return "undefined" === typeof n && (r = e), r
                        }))), l
                    }, t.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, t.id = function() {
                        return this.id_
                    }, t.name = function() {
                        return this.name_
                    }, t.children = function() {
                        return this.children_
                    }, t.getChildById = function(e) {
                        return this.childIndex_[e]
                    }, t.getChild = function(e) {
                        if (e) return this.childNameIndex_[e]
                    }, t.getDescendant = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        t = t.reduce((function(e, t) {
                            return e.concat(t)
                        }), []);
                        for (var n = this, r = 0; r < t.length; r++)
                            if (!(n = n.getChild(t[r])) || !n.getChild) return;
                        return n
                    }, t.addChild = function(t, i, n) {
                        var r, s;
                        if (void 0 === i && (i = {}), void 0 === n && (n = this.children_.length), "string" === typeof t) {
                            s = ft(t);
                            var a = i.componentClass || s;
                            i.name = s;
                            var o = e.getComponent(a);
                            if (!o) throw new Error("Component " + a + " does not exist");
                            if ("function" !== typeof o) return null;
                            r = new o(this.player_ || this, i)
                        } else r = t;
                        if (r.parentComponent_ && r.parentComponent_.removeChild(r), this.children_.splice(n, 0, r), r.parentComponent_ = this, "function" === typeof r.id && (this.childIndex_[r.id()] = r), (s = s || r.name && ft(r.name())) && (this.childNameIndex_[s] = r, this.childNameIndex_[pt(s)] = r), "function" === typeof r.el && r.el()) {
                            var l = null;
                            this.children_[n + 1] && (this.children_[n + 1].el_ ? l = this.children_[n + 1].el_ : ee(this.children_[n + 1]) && (l = this.children_[n + 1])), this.contentEl().insertBefore(r.el(), l)
                        }
                        return r
                    }, t.removeChild = function(e) {
                        if ("string" === typeof e && (e = this.getChild(e)), e && this.children_) {
                            for (var t = !1, i = this.children_.length - 1; i >= 0; i--)
                                if (this.children_[i] === e) {
                                    t = !0, this.children_.splice(i, 1);
                                    break
                                }
                            if (t) {
                                e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[ft(e.name())] = null, this.childNameIndex_[pt(e.name())] = null;
                                var n = e.el();
                                n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                            }
                        }
                    }, t.initChildren = function() {
                        var t = this,
                            i = this.options_.children;
                        if (i) {
                            var n, r = this.options_,
                                s = e.getComponent("Tech");
                            (n = Array.isArray(i) ? i : Object.keys(i)).concat(Object.keys(this.options_).filter((function(e) {
                                return !n.some((function(t) {
                                    return "string" === typeof t ? e === t : e === t.name
                                }))
                            }))).map((function(e) {
                                var n, r;
                                return "string" === typeof e ? r = i[n = e] || t.options_[n] || {} : (n = e.name, r = e), {
                                    name: n,
                                    opts: r
                                }
                            })).filter((function(t) {
                                var i = e.getComponent(t.opts.componentClass || ft(t.name));
                                return i && !s.isTech(i)
                            })).forEach((function(e) {
                                var i = e.name,
                                    n = e.opts;
                                if (void 0 !== r[i] && (n = r[i]), !1 !== n) {
                                    !0 === n && (n = {}), n.playerOptions = t.options_.playerOptions;
                                    var s = t.addChild(i, n);
                                    s && (t[i] = s)
                                }
                            }))
                        }
                    }, t.buildCSSClass = function() {
                        return ""
                    }, t.ready = function(e, t) {
                        if (void 0 === t && (t = !1), e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
                    }, t.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout((function() {
                            var e = this.readyQueue_;
                            this.readyQueue_ = [], e && e.length > 0 && e.forEach((function(e) {
                                e.call(this)
                            }), this), this.trigger("ready")
                        }), 1)
                    }, t.$ = function(e, t) {
                        return Ie(e, t || this.contentEl())
                    }, t.$$ = function(e, t) {
                        return Pe(e, t || this.contentEl())
                    }, t.hasClass = function(e) {
                        return ae(this.el_, e)
                    }, t.addClass = function(e) {
                        oe(this.el_, e)
                    }, t.removeClass = function(e) {
                        le(this.el_, e)
                    }, t.toggleClass = function(e, t) {
                        ue(this.el_, e, t)
                    }, t.show = function() {
                        this.removeClass("vjs-hidden")
                    }, t.hide = function() {
                        this.addClass("vjs-hidden")
                    }, t.lockShowing = function() {
                        this.addClass("vjs-lock-showing")
                    }, t.unlockShowing = function() {
                        this.removeClass("vjs-lock-showing")
                    }, t.getAttribute = function(e) {
                        return he(this.el_, e)
                    }, t.setAttribute = function(e, t) {
                        pe(this.el_, e, t)
                    }, t.removeAttribute = function(e) {
                        fe(this.el_, e)
                    }, t.width = function(e, t) {
                        return this.dimension("width", e, t)
                    }, t.height = function(e, t) {
                        return this.dimension("height", e, t)
                    }, t.dimensions = function(e, t) {
                        this.width(e, !0), this.height(t)
                    }, t.dimension = function(e, t, i) {
                        if (void 0 !== t) return null !== t && t === t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void(i || this.trigger("componentresize"));
                        if (!this.el_) return 0;
                        var n = this.el_.style[e],
                            r = n.indexOf("px");
                        return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + ft(e)], 10)
                    }, t.currentDimension = function(e) {
                        var t = 0;
                        if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
                        if (t = Y(this.el_, e), 0 === (t = parseFloat(t)) || isNaN(t)) {
                            var i = "offset" + ft(e);
                            t = this.el_[i]
                        }
                        return t
                    }, t.currentDimensions = function() {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, t.currentWidth = function() {
                        return this.currentDimension("width")
                    }, t.currentHeight = function() {
                        return this.currentDimension("height")
                    }, t.focus = function() {
                        this.el_.focus()
                    }, t.blur = function() {
                        this.el_.blur()
                    }, t.handleKeyDown = function(e) {
                        this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e))
                    }, t.handleKeyPress = function(e) {
                        this.handleKeyDown(e)
                    }, t.emitTapEvents = function() {
                        var e, t = 0,
                            i = null;
                        this.on("touchstart", (function(n) {
                            1 === n.touches.length && (i = {
                                pageX: n.touches[0].pageX,
                                pageY: n.touches[0].pageY
                            }, t = r().performance.now(), e = !0)
                        })), this.on("touchmove", (function(t) {
                            if (t.touches.length > 1) e = !1;
                            else if (i) {
                                var n = t.touches[0].pageX - i.pageX,
                                    r = t.touches[0].pageY - i.pageY;
                                Math.sqrt(n * n + r * r) > 10 && (e = !1)
                            }
                        }));
                        var n = function() {
                            e = !1
                        };
                        this.on("touchleave", n), this.on("touchcancel", n), this.on("touchend", (function(n) {
                            (i = null, !0 === e) && (r().performance.now() - t < 200 && (n.preventDefault(), this.trigger("tap")))
                        }))
                    }, t.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var e, t = Ze(this.player(), this.player().reportUserActivity);
                            this.on("touchstart", (function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            }));
                            var i = function(i) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
                        }
                    }, t.setTimeout = function(e, t) {
                        var i, n = this;
                        return e = Ze(this, e), this.clearTimersOnDispose_(), i = r().setTimeout((function() {
                            n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i), e()
                        }), t), this.setTimeoutIds_.add(i), i
                    }, t.clearTimeout = function(e) {
                        return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), r().clearTimeout(e)), e
                    }, t.setInterval = function(e, t) {
                        e = Ze(this, e), this.clearTimersOnDispose_();
                        var i = r().setInterval(e, t);
                        return this.setIntervalIds_.add(i), i
                    }, t.clearInterval = function(e) {
                        return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), r().clearInterval(e)), e
                    }, t.requestAnimationFrame = function(e) {
                        var t, i = this;
                        return this.supportsRaf_ ? (this.clearTimersOnDispose_(), e = Ze(this, e), t = r().requestAnimationFrame((function() {
                            i.rafIds_.has(t) && i.rafIds_.delete(t), e()
                        })), this.rafIds_.add(t), t) : this.setTimeout(e, 1e3 / 60)
                    }, t.requestNamedAnimationFrame = function(e, t) {
                        var i = this;
                        if (!this.namedRafs_.has(e)) {
                            this.clearTimersOnDispose_(), t = Ze(this, t);
                            var n = this.requestAnimationFrame((function() {
                                t(), i.namedRafs_.has(e) && i.namedRafs_.delete(e)
                            }));
                            return this.namedRafs_.set(e, n), e
                        }
                    }, t.cancelNamedAnimationFrame = function(e) {
                        this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
                    }, t.cancelAnimationFrame = function(e) {
                        return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_.delete(e), r().cancelAnimationFrame(e)), e) : this.clearTimeout(e)
                    }, t.clearTimersOnDispose_ = function() {
                        var e = this;
                        this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", (function() {
                            [
                                ["namedRafs_", "cancelNamedAnimationFrame"],
                                ["rafIds_", "cancelAnimationFrame"],
                                ["setTimeoutIds_", "clearTimeout"],
                                ["setIntervalIds_", "clearInterval"]
                            ].forEach((function(t) {
                                var i = t[0],
                                    n = t[1];
                                e[i].forEach((function(t, i) {
                                    return e[n](i)
                                }))
                            })), e.clearingTimersOnDispose_ = !1
                        })))
                    }, e.registerComponent = function(t, i) {
                        if ("string" !== typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
                        var n, r = e.getComponent("Tech"),
                            s = r && r.isTech(i),
                            a = e === i || e.prototype.isPrototypeOf(i.prototype);
                        if (s || !a) throw n = s ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + t + '"; ' + n + ".");
                        t = ft(t), e.components_ || (e.components_ = {});
                        var o = e.getComponent("Player");
                        if ("Player" === t && o && o.players) {
                            var l = o.players,
                                u = Object.keys(l);
                            if (l && u.length > 0 && u.map((function(e) {
                                    return l[e]
                                })).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                        }
                        return e.components_[t] = i, e.components_[pt(t)] = i, i
                    }, e.getComponent = function(t) {
                        if (t && e.components_) return e.components_[t]
                    }, e
                }();
            Tt.prototype.supportsRaf_ = "function" === typeof r().requestAnimationFrame && "function" === typeof r().cancelAnimationFrame, Tt.registerComponent("Component", Tt);
            var bt = r().navigator && r().navigator.userAgent || "",
                St = /AppleWebKit\/([\d.]+)/i.exec(bt),
                kt = St ? parseFloat(St.pop()) : null,
                Ct = /iPod/i.test(bt),
                Et = function() {
                    var e = bt.match(/OS (\d+)_/i);
                    return e && e[1] ? e[1] : null
                }(),
                wt = /Android/i.test(bt),
                It = function() {
                    var e = bt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!e) return null;
                    var t = e[1] && parseFloat(e[1]),
                        i = e[2] && parseFloat(e[2]);
                    return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
                }(),
                Pt = wt && It < 5 && kt < 537,
                At = /Firefox/i.test(bt),
                Lt = /Edg/i.test(bt),
                xt = !Lt && (/Chrome/i.test(bt) || /CriOS/i.test(bt)),
                Ot = function() {
                    var e = bt.match(/(Chrome|CriOS)\/(\d+)/);
                    return e && e[2] ? parseFloat(e[2]) : null
                }(),
                Dt = function() {
                    var e = /MSIE\s(\d+)\.\d/.exec(bt),
                        t = e && parseFloat(e[1]);
                    return !t && /Trident\/7.0/i.test(bt) && /rv:11.0/.test(bt) && (t = 11), t
                }(),
                Mt = /Safari/i.test(bt) && !xt && !wt && !Lt,
                Rt = /Windows/i.test(bt),
                Ut = Z() && ("ontouchstart" in r() || r().navigator.maxTouchPoints || r().DocumentTouch && r().document instanceof r().DocumentTouch),
                Nt = /iPad/i.test(bt) || Mt && Ut && !/iPhone/i.test(bt),
                Ft = /iPhone/i.test(bt) && !Nt,
                Bt = Ft || Nt || Ct,
                jt = (Mt || Bt) && !xt,
                qt = Object.freeze({
                    __proto__: null,
                    IS_IPOD: Ct,
                    IOS_VERSION: Et,
                    IS_ANDROID: wt,
                    ANDROID_VERSION: It,
                    IS_NATIVE_ANDROID: Pt,
                    IS_FIREFOX: At,
                    IS_EDGE: Lt,
                    IS_CHROME: xt,
                    CHROME_VERSION: Ot,
                    IE_VERSION: Dt,
                    IS_SAFARI: Mt,
                    IS_WINDOWS: Rt,
                    TOUCH_ENABLED: Ut,
                    IS_IPAD: Nt,
                    IS_IPHONE: Ft,
                    IS_IOS: Bt,
                    IS_ANY_SAFARI: jt
                });

            function Ht(e, t, i, n) {
                return function(e, t, i) {
                    if ("number" !== typeof t || t < 0 || t > i) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
                }(e, n, i.length - 1), i[n][t]
            }

            function Vt(e) {
                return void 0 === e || 0 === e.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: e.length,
                    start: Ht.bind(null, "start", 0, e),
                    end: Ht.bind(null, "end", 1, e)
                }
            }

            function Wt(e, t) {
                return Array.isArray(e) ? Vt(e) : void 0 === e || void 0 === t ? Vt() : Vt([
                    [e, t]
                ])
            }

            function zt(e, t) {
                var i, n, r = 0;
                if (!t) return 0;
                e && e.length || (e = Wt(0, 0));
                for (var s = 0; s < e.length; s++) i = e.start(s), (n = e.end(s)) > t && (n = t), r += n - i;
                return r / t
            }
            for (var Gt, Kt = {
                    prefixed: !0
                }, Qt = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]
                ], Xt = Qt[0], Yt = 0; Yt < Qt.length; Yt++)
                if (Qt[Yt][1] in a()) {
                    Gt = Qt[Yt];
                    break
                }
            if (Gt) {
                for (var $t = 0; $t < Gt.length; $t++) Kt[Xt[$t]] = Gt[$t];
                Kt.prefixed = Gt[0] !== Xt[0]
            }

            function Jt(e) {
                if (e instanceof Jt) return e;
                "number" === typeof e ? this.code = e : "string" === typeof e ? this.message = e : Q(e) && ("number" === typeof e.code && (this.code = e.code), K(this, e)), this.message || (this.message = Jt.defaultMessages[this.code] || "")
            }
            Jt.prototype.code = 0, Jt.prototype.message = "", Jt.prototype.status = null, Jt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Jt.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var Zt = 0; Zt < Jt.errorTypes.length; Zt++) Jt[Jt.errorTypes[Zt]] = Zt, Jt.prototype[Jt.errorTypes[Zt]] = Zt;

            function ei(e) {
                return void 0 !== e && null !== e && "function" === typeof e.then
            }

            function ti(e) {
                ei(e) && e.then(null, (function(e) {}))
            }
            var ii = function(e) {
                    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((function(t, i, n) {
                        return e[i] && (t[i] = e[i]), t
                    }), {
                        cues: e.cues && Array.prototype.map.call(e.cues, (function(e) {
                            return {
                                startTime: e.startTime,
                                endTime: e.endTime,
                                text: e.text,
                                id: e.id
                            }
                        }))
                    })
                },
                ni = function(e) {
                    var t = e.$$("track"),
                        i = Array.prototype.map.call(t, (function(e) {
                            return e.track
                        }));
                    return Array.prototype.map.call(t, (function(e) {
                        var t = ii(e.track);
                        return e.src && (t.src = e.src), t
                    })).concat(Array.prototype.filter.call(e.textTracks(), (function(e) {
                        return -1 === i.indexOf(e)
                    })).map(ii))
                },
                ri = function(e, t) {
                    return e.forEach((function(e) {
                        var i = t.addRemoteTextTrack(e).track;
                        !e.src && e.cues && e.cues.forEach((function(e) {
                            return i.addCue(e)
                        }))
                    })), t.textTracks()
                },
                si = function(e) {
                    function t(t, i) {
                        var n;
                        return (n = e.call(this, t, i) || this).opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1, n.closeable(!n.options_.uncloseable), n.content(n.options_.content), n.contentEl_ = ne("div", {
                            className: "vjs-modal-dialog-content"
                        }, {
                            role: "document"
                        }), n.descEl_ = ne("p", {
                            className: "vjs-modal-dialog-description vjs-control-text",
                            id: n.el().getAttribute("aria-describedby")
                        }), re(n.descEl_, n.description()), n.el_.appendChild(n.descEl_), n.el_.appendChild(n.contentEl_), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, i.dispose = function() {
                        this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, e.prototype.dispose.call(this)
                    }, i.buildCSSClass = function() {
                        return "vjs-modal-dialog vjs-hidden " + e.prototype.buildCSSClass.call(this)
                    }, i.label = function() {
                        return this.localize(this.options_.label || "Modal Window")
                    }, i.description = function() {
                        var e = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
                    }, i.open = function() {
                        if (!this.opened_) {
                            var e = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                    }, i.opened = function(e) {
                        return "boolean" === typeof e && this[e ? "open" : "close"](), this.opened_
                    }, i.close = function() {
                        if (this.opened_) {
                            var e = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                        }
                    }, i.closeable = function(e) {
                        if ("boolean" === typeof e) {
                            var t = this.closeable_ = !!e,
                                i = this.getChild("closeButton");
                            if (t && !i) {
                                var n = this.contentEl_;
                                this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                                    controlText: "Close Modal Dialog"
                                }), this.contentEl_ = n, this.on(i, "close", this.close)
                            }!t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                        }
                        return this.closeable_
                    }, i.fill = function() {
                        this.fillWith(this.content())
                    }, i.fillWith = function(e) {
                        var t = this.contentEl(),
                            i = t.parentNode,
                            n = t.nextSibling;
                        this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), Ce(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) : i.appendChild(t);
                        var r = this.getChild("closeButton");
                        r && i.appendChild(r.el_)
                    }, i.empty = function() {
                        this.trigger("beforemodalempty"), be(this.contentEl()), this.trigger("modalempty")
                    }, i.content = function(e) {
                        return "undefined" !== typeof e && (this.content_ = e), this.content_
                    }, i.conditionalFocus_ = function() {
                        var e = a().activeElement,
                            t = this.player_.el_;
                        this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus())
                    }, i.conditionalBlur_ = function() {
                        this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
                    }, i.handleKeyDown = function(e) {
                        if (e.stopPropagation(), g().isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(), void this.close();
                        if (g().isEventKey(e, "Tab")) {
                            for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)
                                if (n === i[r]) {
                                    t = r;
                                    break
                                }
                            a().activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
                        }
                    }, i.focusableEls_ = function() {
                        var e = this.el_.querySelectorAll("*");
                        return Array.prototype.filter.call(e, (function(e) {
                            return (e instanceof r().HTMLAnchorElement || e instanceof r().HTMLAreaElement) && e.hasAttribute("href") || (e instanceof r().HTMLInputElement || e instanceof r().HTMLSelectElement || e instanceof r().HTMLTextAreaElement || e instanceof r().HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof r().HTMLIFrameElement || e instanceof r().HTMLObjectElement || e instanceof r().HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
                        }))
                    }, t
                }(Tt);
            si.prototype.options_ = {
                pauseOnOpen: !0,
                temporary: !0
            }, Tt.registerComponent("ModalDialog", si);
            var ai = function(e) {
                function t(t) {
                    var i;
                    void 0 === t && (t = []), (i = e.call(this) || this).tracks_ = [], Object.defineProperty(c()(i), "length", {
                        get: function() {
                            return this.tracks_.length
                        }
                    });
                    for (var n = 0; n < t.length; n++) i.addTrack(t[n]);
                    return i
                }
                h()(t, e);
                var i = t.prototype;
                return i.addTrack = function(e) {
                    var t = this.tracks_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get: function() {
                            return this.tracks_[t]
                        }
                    }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                        track: e,
                        type: "addtrack",
                        target: this
                    }))
                }, i.removeTrack = function(e) {
                    for (var t, i = 0, n = this.length; i < n; i++)
                        if (this[i] === e) {
                            (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                            break
                        }
                    t && this.trigger({
                        track: t,
                        type: "removetrack",
                        target: this
                    })
                }, i.getTrackById = function(e) {
                    for (var t = null, i = 0, n = this.length; i < n; i++) {
                        var r = this[i];
                        if (r.id === e) {
                            t = r;
                            break
                        }
                    }
                    return t
                }, t
            }(tt);
            for (var oi in ai.prototype.allowedEvents_ = {
                    change: "change",
                    addtrack: "addtrack",
                    removetrack: "removetrack"
                }, ai.prototype.allowedEvents_) ai.prototype["on" + oi] = null;
            var li = function(e, t) {
                    for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
                },
                ui = function(e) {
                    function t(t) {
                        var i;
                        void 0 === t && (t = []);
                        for (var n = t.length - 1; n >= 0; n--)
                            if (t[n].enabled) {
                                li(t, t[n]);
                                break
                            }
                        return (i = e.call(this, t) || this).changing_ = !1, i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.addTrack = function(t) {
                        var i = this;
                        t.enabled && li(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.enabledChange_ = function() {
                            i.changing_ || (i.changing_ = !0, li(i, t), i.changing_ = !1, i.trigger("change"))
                        }, t.addEventListener("enabledchange", t.enabledChange_))
                    }, i.removeTrack = function(t) {
                        e.prototype.removeTrack.call(this, t), t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_), t.enabledChange_ = null)
                    }, t
                }(ai),
                ci = function(e, t) {
                    for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
                },
                di = function(e) {
                    function t(t) {
                        var i;
                        void 0 === t && (t = []);
                        for (var n = t.length - 1; n >= 0; n--)
                            if (t[n].selected) {
                                ci(t, t[n]);
                                break
                            }
                        return (i = e.call(this, t) || this).changing_ = !1, Object.defineProperty(c()(i), "selectedIndex", {
                            get: function() {
                                for (var e = 0; e < this.length; e++)
                                    if (this[e].selected) return e;
                                return -1
                            },
                            set: function() {}
                        }), i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.addTrack = function(t) {
                        var i = this;
                        t.selected && ci(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.selectedChange_ = function() {
                            i.changing_ || (i.changing_ = !0, ci(i, t), i.changing_ = !1, i.trigger("change"))
                        }, t.addEventListener("selectedchange", t.selectedChange_))
                    }, i.removeTrack = function(t) {
                        e.prototype.removeTrack.call(this, t), t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_), t.selectedChange_ = null)
                    }, t
                }(ai),
                hi = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.addTrack = function(t) {
                        var i = this;
                        e.prototype.addTrack.call(this, t), this.queueChange_ || (this.queueChange_ = function() {
                            return i.queueTrigger("change")
                        }), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
                            return i.trigger("selectedlanguagechange")
                        }), t.addEventListener("modechange", this.queueChange_); - 1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
                    }, i.removeTrack = function(t) {
                        e.prototype.removeTrack.call(this, t), t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
                    }, t
                }(ai),
                pi = function() {
                    function e(e) {
                        void 0 === e && (e = []), this.trackElements_ = [], Object.defineProperty(this, "length", {
                            get: function() {
                                return this.trackElements_.length
                            }
                        });
                        for (var t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t])
                    }
                    var t = e.prototype;
                    return t.addTrackElement_ = function(e) {
                        var t = this.trackElements_.length;
                        "" + t in this || Object.defineProperty(this, t, {
                            get: function() {
                                return this.trackElements_[t]
                            }
                        }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
                    }, t.getTrackElementByTrack_ = function(e) {
                        for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
                            if (e === this.trackElements_[i].track) {
                                t = this.trackElements_[i];
                                break
                            }
                        return t
                    }, t.removeTrackElement_ = function(e) {
                        for (var t = 0, i = this.trackElements_.length; t < i; t++)
                            if (e === this.trackElements_[t]) {
                                this.trackElements_[t].track && "function" === typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), "function" === typeof this.trackElements_[t].off && this.trackElements_[t].off(), this.trackElements_.splice(t, 1);
                                break
                            }
                    }, e
                }(),
                fi = function() {
                    function e(t) {
                        e.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", {
                            get: function() {
                                return this.length_
                            }
                        })
                    }
                    var t = e.prototype;
                    return t.setCues_ = function(e) {
                        var t = this.length || 0,
                            i = 0,
                            n = e.length;
                        this.cues_ = e, this.length_ = e.length;
                        var r = function(e) {
                            "" + e in this || Object.defineProperty(this, "" + e, {
                                get: function() {
                                    return this.cues_[e]
                                }
                            })
                        };
                        if (t < n)
                            for (i = t; i < n; i++) r.call(this, i)
                    }, t.getCueById = function(e) {
                        for (var t = null, i = 0, n = this.length; i < n; i++) {
                            var r = this[i];
                            if (r.id === e) {
                                t = r;
                                break
                            }
                        }
                        return t
                    }, e
                }(),
                mi = {
                    alternative: "alternative",
                    captions: "captions",
                    main: "main",
                    sign: "sign",
                    subtitles: "subtitles",
                    commentary: "commentary"
                },
                gi = {
                    alternative: "alternative",
                    descriptions: "descriptions",
                    main: "main",
                    "main-desc": "main-desc",
                    translation: "translation",
                    commentary: "commentary"
                },
                vi = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                },
                _i = {
                    disabled: "disabled",
                    hidden: "hidden",
                    showing: "showing"
                },
                yi = function(e) {
                    function t(t) {
                        var i;
                        void 0 === t && (t = {}), i = e.call(this) || this;
                        var n = {
                                id: t.id || "vjs_track_" + Fe(),
                                kind: t.kind || "",
                                label: t.label || "",
                                language: t.language || ""
                            },
                            r = function(e) {
                                Object.defineProperty(c()(i), e, {
                                    get: function() {
                                        return n[e]
                                    },
                                    set: function() {}
                                })
                            };
                        for (var s in n) r(s);
                        return i
                    }
                    return h()(t, e), t
                }(tt),
                Ti = function(e) {
                    var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        i = a().createElement("a");
                    i.href = e;
                    var n, s = "" === i.host && "file:" !== i.protocol;
                    s && ((n = a().createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), a().body.appendChild(n));
                    for (var o = {}, l = 0; l < t.length; l++) o[t[l]] = i[t[l]];
                    return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), o.protocol || (o.protocol = r().location.protocol), s && a().body.removeChild(n), o
                },
                bi = function(e) {
                    if (!e.match(/^https?:\/\//)) {
                        var t = a().createElement("div");
                        t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
                    }
                    return e
                },
                Si = function(e) {
                    if ("string" === typeof e) {
                        var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
                        if (t) return t.pop().toLowerCase()
                    }
                    return ""
                },
                ki = function(e, t) {
                    void 0 === t && (t = r().location);
                    var i = Ti(e);
                    return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
                },
                Ci = Object.freeze({
                    __proto__: null,
                    parseUrl: Ti,
                    getAbsoluteURL: bi,
                    getFileExtension: Si,
                    isCrossOrigin: ki
                }),
                Ei = function(e, t) {
                    var i = new(r().WebVTT.Parser)(r(), r().vttjs, r().WebVTT.StringDecoder()),
                        n = [];
                    i.oncue = function(e) {
                        t.addCue(e)
                    }, i.onparsingerror = function(e) {
                        n.push(e)
                    }, i.onflush = function() {
                        t.trigger({
                            type: "loadeddata",
                            target: t
                        })
                    }, i.parse(e), n.length > 0 && (r().console && r().console.groupCollapsed && r().console.groupCollapsed("Text Track parsing errors for " + t.src), n.forEach((function(e) {
                        return H.error(e)
                    })), r().console && r().console.groupEnd && r().console.groupEnd()), i.flush()
                },
                wi = function(e, t) {
                    var i = {
                            uri: e
                        },
                        n = ki(e);
                    n && (i.cors = n);
                    var s = "use-credentials" === t.tech_.crossOrigin();
                    s && (i.withCredentials = s), _()(i, Ze(this, (function(e, i, n) {
                        if (e) return H.error(e, i);
                        t.loaded_ = !0, "function" !== typeof r().WebVTT ? t.tech_ && t.tech_.any(["vttjsloaded", "vttjserror"], (function(e) {
                            if ("vttjserror" !== e.type) return Ei(n, t);
                            H.error("vttjs failed to load, stopping trying to process " + t.src)
                        })) : Ei(n, t)
                    })))
                },
                Ii = function(e) {
                    function t(t) {
                        var i;
                        if (void 0 === t && (t = {}), !t.tech) throw new Error("A tech was not provided.");
                        var n = mt(t, {
                                kind: vi[t.kind] || "subtitles",
                                language: t.language || t.srclang || ""
                            }),
                            r = _i[n.mode] || "disabled",
                            s = n.default;
                        "metadata" !== n.kind && "chapters" !== n.kind || (r = "hidden"), (i = e.call(this, n) || this).tech_ = n.tech, i.cues_ = [], i.activeCues_ = [], i.preload_ = !1 !== i.tech_.preloadTextTracks;
                        var a = new fi(i.cues_),
                            o = new fi(i.activeCues_),
                            l = !1,
                            u = Ze(c()(i), (function() {
                                this.activeCues = this.activeCues, l && (this.trigger("cuechange"), l = !1)
                            }));
                        return "disabled" !== r && i.tech_.ready((function() {
                            i.tech_.on("timeupdate", u)
                        }), !0), Object.defineProperties(c()(i), {
                            default: {
                                get: function() {
                                    return s
                                },
                                set: function() {}
                            },
                            mode: {
                                get: function() {
                                    return r
                                },
                                set: function(e) {
                                    var t = this;
                                    _i[e] && (r = e, this.preload_ || "disabled" === r || 0 !== this.cues.length || wi(this.src, this), "disabled" !== r ? this.tech_.ready((function() {
                                        t.tech_.on("timeupdate", u)
                                    }), !0) : this.tech_.off("timeupdate", u), this.trigger("modechange"))
                                }
                            },
                            cues: {
                                get: function() {
                                    return this.loaded_ ? a : null
                                },
                                set: function() {}
                            },
                            activeCues: {
                                get: function() {
                                    if (!this.loaded_) return null;
                                    if (0 === this.cues.length) return o;
                                    for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                                        var r = this.cues[i];
                                        (r.startTime <= e && r.endTime >= e || r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e) && t.push(r)
                                    }
                                    if (l = !1, t.length !== this.activeCues_.length) l = !0;
                                    else
                                        for (var s = 0; s < t.length; s++) - 1 === this.activeCues_.indexOf(t[s]) && (l = !0);
                                    return this.activeCues_ = t, o.setCues_(this.activeCues_), o
                                },
                                set: function() {}
                            }
                        }), n.src ? (i.src = n.src, i.preload_ || (i.loaded_ = !0), (i.preload_ || s || "subtitles" !== n.kind && "captions" !== n.kind) && wi(i.src, c()(i))) : i.loaded_ = !0, i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.addCue = function(e) {
                        var t = e;
                        if (r().vttjs && !(e instanceof r().vttjs.VTTCue)) {
                            for (var i in t = new(r().vttjs.VTTCue)(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                            t.id = e.id, t.originalCue_ = e
                        }
                        for (var n = this.tech_.textTracks(), s = 0; s < n.length; s++) n[s] !== this && n[s].removeCue(t);
                        this.cues_.push(t), this.cues.setCues_(this.cues_)
                    }, i.removeCue = function(e) {
                        for (var t = this.cues_.length; t--;) {
                            var i = this.cues_[t];
                            if (i === e || i.originalCue_ && i.originalCue_ === e) {
                                this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                                break
                            }
                        }
                    }, t
                }(yi);
            Ii.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            };
            var Pi = function(e) {
                    function t(t) {
                        var i;
                        void 0 === t && (t = {});
                        var n = mt(t, {
                            kind: gi[t.kind] || ""
                        });
                        i = e.call(this, n) || this;
                        var r = !1;
                        return Object.defineProperty(c()(i), "enabled", {
                            get: function() {
                                return r
                            },
                            set: function(e) {
                                "boolean" === typeof e && e !== r && (r = e, this.trigger("enabledchange"))
                            }
                        }), n.enabled && (i.enabled = n.enabled), i.loaded_ = !0, i
                    }
                    return h()(t, e), t
                }(yi),
                Ai = function(e) {
                    function t(t) {
                        var i;
                        void 0 === t && (t = {});
                        var n = mt(t, {
                            kind: mi[t.kind] || ""
                        });
                        i = e.call(this, n) || this;
                        var r = !1;
                        return Object.defineProperty(c()(i), "selected", {
                            get: function() {
                                return r
                            },
                            set: function(e) {
                                "boolean" === typeof e && e !== r && (r = e, this.trigger("selectedchange"))
                            }
                        }), n.selected && (i.selected = n.selected), i
                    }
                    return h()(t, e), t
                }(yi),
                Li = function(e) {
                    function t(t) {
                        var i, n;
                        void 0 === t && (t = {}), i = e.call(this) || this;
                        var r = new Ii(t);
                        return i.kind = r.kind, i.src = r.src, i.srclang = r.language, i.label = r.label, i.default = r.default, Object.defineProperties(c()(i), {
                            readyState: {
                                get: function() {
                                    return n
                                }
                            },
                            track: {
                                get: function() {
                                    return r
                                }
                            }
                        }), n = 0, r.addEventListener("loadeddata", (function() {
                            n = 2, i.trigger({
                                type: "load",
                                target: c()(i)
                            })
                        })), i
                    }
                    return h()(t, e), t
                }(tt);
            Li.prototype.allowedEvents_ = {
                load: "load"
            }, Li.NONE = 0, Li.LOADING = 1, Li.LOADED = 2, Li.ERROR = 3;
            var xi = {
                audio: {
                    ListClass: ui,
                    TrackClass: Pi,
                    capitalName: "Audio"
                },
                video: {
                    ListClass: di,
                    TrackClass: Ai,
                    capitalName: "Video"
                },
                text: {
                    ListClass: hi,
                    TrackClass: Ii,
                    capitalName: "Text"
                }
            };
            Object.keys(xi).forEach((function(e) {
                xi[e].getterName = e + "Tracks", xi[e].privateName = e + "Tracks_"
            }));
            var Oi = {
                    remoteText: {
                        ListClass: hi,
                        TrackClass: Ii,
                        capitalName: "RemoteText",
                        getterName: "remoteTextTracks",
                        privateName: "remoteTextTracks_"
                    },
                    remoteTextEl: {
                        ListClass: pi,
                        TrackClass: Li,
                        capitalName: "RemoteTextTrackEls",
                        getterName: "remoteTextTrackEls",
                        privateName: "remoteTextTrackEls_"
                    }
                },
                Di = l()({}, xi, Oi);
            Oi.names = Object.keys(Oi), xi.names = Object.keys(xi), Di.names = [].concat(Oi.names).concat(xi.names);
            var Mi = function(e) {
                function t(t, i) {
                    var n;
                    return void 0 === t && (t = {}), void 0 === i && (i = function() {}), t.reportTouchActivity = !1, (n = e.call(this, null, t, i) || this).hasStarted_ = !1, n.on("playing", (function() {
                        this.hasStarted_ = !0
                    })), n.on("loadstart", (function() {
                        this.hasStarted_ = !1
                    })), Di.names.forEach((function(e) {
                        var i = Di[e];
                        t && t[i.getterName] && (n[i.privateName] = t[i.getterName])
                    })), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((function(e) {
                        !1 === t["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1)
                    })), !1 === t.nativeCaptions || !1 === t.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== t.nativeCaptions && !0 !== t.nativeTextTracks || (n.featuresNativeTextTracks = !0), n.featuresNativeTextTracks || n.emulateTextTracks(), n.preloadTextTracks = !1 !== t.preloadTextTracks, n.autoRemoteTextTracks_ = new Di.text.ListClass, n.initTrackListeners(), t.nativeControlsForTouch || n.emitTapEvents(), n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.triggerSourceset = function(e) {
                    var t = this;
                    this.isReady_ || this.one("ready", (function() {
                        return t.setTimeout((function() {
                            return t.triggerSourceset(e)
                        }), 1)
                    })), this.trigger({
                        src: e,
                        type: "sourceset"
                    })
                }, i.manualProgressOn = function() {
                    this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                }, i.manualProgressOff = function() {
                    this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                }, i.trackProgress = function(e) {
                    this.stopTrackingProgress(), this.progressInterval = this.setInterval(Ze(this, (function() {
                        var e = this.bufferedPercent();
                        this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
                    })), 500)
                }, i.onDurationChange = function(e) {
                    this.duration_ = this.duration()
                }, i.buffered = function() {
                    return Wt(0, 0)
                }, i.bufferedPercent = function() {
                    return zt(this.buffered(), this.duration_)
                }, i.stopTrackingProgress = function() {
                    this.clearInterval(this.progressInterval)
                }, i.manualTimeUpdatesOn = function() {
                    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                }, i.manualTimeUpdatesOff = function() {
                    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                }, i.trackCurrentTime = function() {
                    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval((function() {
                        this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }), 250)
                }, i.stopTrackingCurrentTime = function() {
                    this.clearInterval(this.currentTimeInterval), this.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    })
                }, i.dispose = function() {
                    this.clearTracks(xi.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
                }, i.clearTracks = function(e) {
                    var t = this;
                    (e = [].concat(e)).forEach((function(e) {
                        for (var i = t[e + "Tracks"]() || [], n = i.length; n--;) {
                            var r = i[n];
                            "text" === e && t.removeRemoteTextTrack(r), i.removeTrack(r)
                        }
                    }))
                }, i.cleanupAutoTextTracks = function() {
                    for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                        var i = e[t];
                        this.removeRemoteTextTrack(i)
                    }
                }, i.reset = function() {}, i.crossOrigin = function() {}, i.setCrossOrigin = function() {}, i.error = function(e) {
                    return void 0 !== e && (this.error_ = new Jt(e), this.trigger("error")), this.error_
                }, i.played = function() {
                    return this.hasStarted_ ? Wt(0, 0) : Wt()
                }, i.setScrubbing = function() {}, i.setCurrentTime = function() {
                    this.manualTimeUpdates && this.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    })
                }, i.initTrackListeners = function() {
                    var e = this;
                    xi.names.forEach((function(t) {
                        var i = xi[t],
                            n = function() {
                                e.trigger(t + "trackchange")
                            },
                            r = e[i.getterName]();
                        r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", (function() {
                            r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                        }))
                    }))
                }, i.addWebVttScript_ = function() {
                    var e = this;
                    if (!r().WebVTT)
                        if (a().body.contains(this.el())) {
                            if (!this.options_["vtt.js"] && X(T()) && Object.keys(T()).length > 0) return void this.trigger("vttjsloaded");
                            var t = a().createElement("script");
                            t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = function() {
                                e.trigger("vttjsloaded")
                            }, t.onerror = function() {
                                e.trigger("vttjserror")
                            }, this.on("dispose", (function() {
                                t.onload = null, t.onerror = null
                            })), r().WebVTT = !0, this.el().parentNode.appendChild(t)
                        } else this.ready(this.addWebVttScript_)
                }, i.emulateTextTracks = function() {
                    var e = this,
                        t = this.textTracks(),
                        i = this.remoteTextTracks(),
                        n = function(e) {
                            return t.addTrack(e.track)
                        },
                        r = function(e) {
                            return t.removeTrack(e.track)
                        };
                    i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_();
                    var s = function() {
                            return e.trigger("texttrackchange")
                        },
                        a = function() {
                            s();
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e];
                                i.removeEventListener("cuechange", s), "showing" === i.mode && i.addEventListener("cuechange", s)
                            }
                        };
                    a(), t.addEventListener("change", a), t.addEventListener("addtrack", a), t.addEventListener("removetrack", a), this.on("dispose", (function() {
                        i.off("addtrack", n), i.off("removetrack", r), t.removeEventListener("change", a), t.removeEventListener("addtrack", a), t.removeEventListener("removetrack", a);
                        for (var e = 0; e < t.length; e++) {
                            t[e].removeEventListener("cuechange", s)
                        }
                    }))
                }, i.addTextTrack = function(e, t, i) {
                    if (!e) throw new Error("TextTrack kind is required but was not provided");
                    return function(e, t, i, n, r) {
                        void 0 === r && (r = {});
                        var s = e.textTracks();
                        r.kind = t, i && (r.label = i), n && (r.language = n), r.tech = e;
                        var a = new Di.text.TrackClass(r);
                        return s.addTrack(a), a
                    }(this, e, t, i)
                }, i.createRemoteTextTrack = function(e) {
                    var t = mt(e, {
                        tech: this
                    });
                    return new Oi.remoteTextEl.TrackClass(t)
                }, i.addRemoteTextTrack = function(e, t) {
                    var i = this;
                    void 0 === e && (e = {});
                    var n = this.createRemoteTextTrack(e);
                    return !0 !== t && !1 !== t && (H.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== t && this.ready((function() {
                        return i.autoRemoteTextTracks_.addTrack(n.track)
                    })), n
                }, i.removeRemoteTextTrack = function(e) {
                    var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                    this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
                }, i.getVideoPlaybackQuality = function() {
                    return {}
                }, i.requestPictureInPicture = function() {
                    var e = this.options_.Promise || r().Promise;
                    if (e) return e.reject()
                }, i.disablePictureInPicture = function() {
                    return !0
                }, i.setDisablePictureInPicture = function() {}, i.setPoster = function() {}, i.playsinline = function() {}, i.setPlaysinline = function() {}, i.overrideNativeAudioTracks = function() {}, i.overrideNativeVideoTracks = function() {}, i.canPlayType = function() {
                    return ""
                }, t.canPlayType = function() {
                    return ""
                }, t.canPlaySource = function(e, i) {
                    return t.canPlayType(e.type)
                }, t.isTech = function(e) {
                    return e.prototype instanceof t || e instanceof t || e === t
                }, t.registerTech = function(e, i) {
                    if (t.techs_ || (t.techs_ = {}), !t.isTech(i)) throw new Error("Tech " + e + " must be a Tech");
                    if (!t.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                    if (!t.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                    return e = ft(e), t.techs_[e] = i, t.techs_[pt(e)] = i, "Tech" !== e && t.defaultTechOrder_.push(e), i
                }, t.getTech = function(e) {
                    if (e) return t.techs_ && t.techs_[e] ? t.techs_[e] : (e = ft(e), r() && r().videojs && r().videojs[e] ? (H.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), r().videojs[e]) : void 0)
                }, t
            }(Tt);
            Di.names.forEach((function(e) {
                var t = Di[e];
                Mi.prototype[t.getterName] = function() {
                    return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
                }
            })), Mi.prototype.featuresVolumeControl = !0, Mi.prototype.featuresMuteControl = !0, Mi.prototype.featuresFullscreenResize = !1, Mi.prototype.featuresPlaybackRate = !1, Mi.prototype.featuresProgressEvents = !1, Mi.prototype.featuresSourceset = !1, Mi.prototype.featuresTimeupdateEvents = !1, Mi.prototype.featuresNativeTextTracks = !1, Mi.withSourceHandlers = function(e) {
                e.registerSourceHandler = function(t, i) {
                    var n = e.sourceHandlers;
                    n || (n = e.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, t)
                }, e.canPlayType = function(t) {
                    for (var i, n = e.sourceHandlers || [], r = 0; r < n.length; r++)
                        if (i = n[r].canPlayType(t)) return i;
                    return ""
                }, e.selectSourceHandler = function(t, i) {
                    for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++)
                        if (n[r].canHandleSource(t, i)) return n[r];
                    return null
                }, e.canPlaySource = function(t, i) {
                    var n = e.selectSourceHandler(t, i);
                    return n ? n.canHandleSource(t, i) : ""
                };
                ["seekable", "seeking", "duration"].forEach((function(e) {
                    var t = this[e];
                    "function" === typeof t && (this[e] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                    })
                }), e.prototype), e.prototype.setSource = function(t) {
                    var i = e.selectSourceHandler(t, this.options_);
                    i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : H.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== e.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = i.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler)
                }, e.prototype.disposeSourceHandler = function() {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, Tt.registerComponent("Tech", Mi), Mi.registerTech("Tech", Mi), Mi.defaultTechOrder_ = [];
            var Ri = {},
                Ui = {},
                Ni = {};

            function Fi(e, t, i) {
                e.setTimeout((function() {
                    return Wi(t, Ri[t.type], i, e)
                }), 1)
            }

            function Bi(e, t, i, n) {
                void 0 === n && (n = null);
                var r = "call" + ft(i),
                    s = e.reduce(Vi(r), n),
                    a = s === Ni,
                    o = a ? null : t[i](s);
                return function(e, t, i, n) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var s = e[r];
                        s[t] && s[t](n, i)
                    }
                }(e, i, o, a), o
            }
            var ji = {
                    buffered: 1,
                    currentTime: 1,
                    duration: 1,
                    muted: 1,
                    played: 1,
                    paused: 1,
                    seekable: 1,
                    volume: 1
                },
                qi = {
                    setCurrentTime: 1,
                    setMuted: 1,
                    setVolume: 1
                },
                Hi = {
                    play: 1,
                    pause: 1
                };

            function Vi(e) {
                return function(t, i) {
                    return t === Ni ? Ni : i[e] ? i[e](t) : t
                }
            }

            function Wi(e, t, i, n, r, s) {
                void 0 === e && (e = {}), void 0 === t && (t = []), void 0 === r && (r = []), void 0 === s && (s = !1);
                var a = t,
                    o = a[0],
                    l = a.slice(1);
                if ("string" === typeof o) Wi(e, Ri[o], i, n, r, s);
                else if (o) {
                    var u = function(e, t) {
                        var i = Ui[e.id()],
                            n = null;
                        if (void 0 === i || null === i) return n = t(e), Ui[e.id()] = [
                            [t, n]
                        ], n;
                        for (var r = 0; r < i.length; r++) {
                            var s = i[r],
                                a = s[0],
                                o = s[1];
                            a === t && (n = o)
                        }
                        return null === n && (n = t(e), i.push([t, n])), n
                    }(n, o);
                    if (!u.setSource) return r.push(u), Wi(e, l, i, n, r, s);
                    u.setSource(K({}, e), (function(t, a) {
                        if (t) return Wi(e, l, i, n, r, s);
                        r.push(u), Wi(a, e.type === a.type ? l : Ri[a.type], i, n, r, s)
                    }))
                } else l.length ? Wi(e, l, i, n, r, s) : s ? i(e, r) : Wi(e, Ri["*"], i, n, r, !0)
            }
            var zi = {
                    opus: "video/ogg",
                    ogv: "video/ogg",
                    mp4: "video/mp4",
                    mov: "video/mp4",
                    m4v: "video/mp4",
                    mkv: "video/x-matroska",
                    m4a: "audio/mp4",
                    mp3: "audio/mpeg",
                    aac: "audio/aac",
                    caf: "audio/x-caf",
                    flac: "audio/flac",
                    oga: "audio/ogg",
                    wav: "audio/wav",
                    m3u8: "application/x-mpegURL",
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    gif: "image/gif",
                    png: "image/png",
                    svg: "image/svg+xml",
                    webp: "image/webp"
                },
                Gi = function(e) {
                    void 0 === e && (e = "");
                    var t = Si(e);
                    return zi[t.toLowerCase()] || ""
                },
                Ki = function e(t) {
                    if (Array.isArray(t)) {
                        var i = [];
                        t.forEach((function(t) {
                            t = e(t), Array.isArray(t) ? i = i.concat(t) : Q(t) && i.push(t)
                        })), t = i
                    } else t = "string" === typeof t && t.trim() ? [Qi({
                        src: t
                    })] : Q(t) && "string" === typeof t.src && t.src && t.src.trim() ? [Qi(t)] : [];
                    return t
                };

            function Qi(e) {
                if (!e.type) {
                    var t = Gi(e.src);
                    t && (e.type = t)
                }
                return e
            }
            var Xi = function(e) {
                function t(t, i, n) {
                    var r, s = mt({
                        createEl: !1
                    }, i);
                    if (r = e.call(this, t, s, n) || this, i.playerOptions.sources && 0 !== i.playerOptions.sources.length) t.src(i.playerOptions.sources);
                    else
                        for (var a = 0, o = i.playerOptions.techOrder; a < o.length; a++) {
                            var l = ft(o[a]),
                                u = Mi.getTech(l);
                            if (l || (u = Tt.getComponent(l)), u && u.isSupported()) {
                                t.loadTech_(l);
                                break
                            }
                        }
                    return r
                }
                return h()(t, e), t
            }(Tt);
            Tt.registerComponent("MediaLoader", Xi);
            var Yi = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).emitTapEvents(), n.enable(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function(t, i, n) {
                    void 0 === t && (t = "div"), void 0 === i && (i = {}), void 0 === n && (n = {}), i = K({
                        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                        className: this.buildCSSClass(),
                        tabIndex: 0
                    }, i), "button" === t && H.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), n = K({
                        role: "button"
                    }, n), this.tabIndex_ = i.tabIndex;
                    var r = e.prototype.createEl.call(this, t, i, n);
                    return this.createControlTextEl(r), r
                }, i.dispose = function() {
                    this.controlTextEl_ = null, e.prototype.dispose.call(this)
                }, i.createControlTextEl = function(e) {
                    return this.controlTextEl_ = ne("span", {
                        className: "vjs-control-text"
                    }, {
                        "aria-live": "polite"
                    }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
                }, i.controlText = function(e, t) {
                    if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ || "Need Text";
                    var i = this.localize(e);
                    this.controlText_ = e, re(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
                }, i.buildCSSClass = function() {
                    return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
                }, i.enable = function() {
                    this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" !== typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("keydown", this.handleKeyDown))
                }, i.disable = function() {
                    this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" !== typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver), this.off("mouseout", this.handleMouseOut), this.off(["tap", "click"], this.handleClick), this.off("keydown", this.handleKeyDown)
                }, i.handleClick = function(e) {
                    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
                }, i.handleKeyDown = function(t) {
                    g().isEventKey(t, "Space") || g().isEventKey(t, "Enter") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
                }, t
            }(Tt);
            Tt.registerComponent("ClickableComponent", Yi);
            var $i = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).update(), t.on("posterchange", Ze(c()(n), n.update)), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.dispose = function() {
                    this.player().off("posterchange", this.update), e.prototype.dispose.call(this)
                }, i.createEl = function() {
                    return ne("div", {
                        className: "vjs-poster",
                        tabIndex: -1
                    })
                }, i.update = function(e) {
                    var t = this.player().poster();
                    this.setSrc(t), t ? this.show() : this.hide()
                }, i.setSrc = function(e) {
                    var t = "";
                    e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
                }, i.handleClick = function(e) {
                    if (this.player_.controls()) {
                        var t = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
                        !this.player_.tech(!0) || (Dt || Lt) && t || this.player_.tech(!0).focus(), this.player_.paused() ? ti(this.player_.play()) : this.player_.pause()
                    }
                }, t
            }(Yi);
            Tt.registerComponent("PosterImage", $i);
            var Ji = {
                monospace: "monospace",
                sansSerif: "sans-serif",
                serif: "serif",
                monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                monospaceSerif: '"Courier New", monospace',
                proportionalSansSerif: "sans-serif",
                proportionalSerif: "serif",
                casual: '"Comic Sans MS", Impact, fantasy',
                script: '"Monotype Corsiva", cursive',
                smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
            };

            function Zi(e, t) {
                var i;
                if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
                else {
                    if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
                    i = e.slice(1)
                }
                return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
            }

            function en(e, t, i) {
                try {
                    e.style[t] = i
                } catch (n) {
                    return
                }
            }
            var tn = function(e) {
                function t(t, i, n) {
                    var s;
                    s = e.call(this, t, i, n) || this;
                    var a = Ze(c()(s), s.updateDisplay);
                    return t.on("loadstart", Ze(c()(s), s.toggleDisplay)), t.on("texttrackchange", a), t.on("loadedmetadata", Ze(c()(s), s.preselectTrack)), t.ready(Ze(c()(s), (function() {
                        if (t.tech_ && t.tech_.featuresNativeTextTracks) this.hide();
                        else {
                            t.on("fullscreenchange", a), t.on("playerresize", a), r().addEventListener("orientationchange", a), t.on("dispose", (function() {
                                return r().removeEventListener("orientationchange", a)
                            }));
                            for (var e = this.options_.playerOptions.tracks || [], i = 0; i < e.length; i++) this.player_.addRemoteTextTrack(e[i], !0);
                            this.preselectTrack()
                        }
                    }))), s
                }
                h()(t, e);
                var i = t.prototype;
                return i.preselectTrack = function() {
                    for (var e, t, i, n = {
                            captions: 1,
                            subtitles: 1
                        }, r = this.player_.textTracks(), s = this.player_.cache_.selectedLanguage, a = 0; a < r.length; a++) {
                        var o = r[a];
                        s && s.enabled && s.language && s.language === o.language && o.kind in n ? o.kind === s.kind ? i = o : i || (i = o) : s && !s.enabled ? (i = null, e = null, t = null) : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
                    }
                    i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
                }, i.toggleDisplay = function() {
                    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                }, i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-text-track-display"
                    }, {
                        "aria-live": "off",
                        "aria-atomic": "true"
                    })
                }, i.clearDisplay = function() {
                    "function" === typeof r().WebVTT && r().WebVTT.processCues(r(), [], this.el_)
                }, i.updateDisplay = function() {
                    var e = this.player_.textTracks(),
                        t = this.options_.allowMultipleShowingTracks;
                    if (this.clearDisplay(), t) {
                        for (var i = [], n = 0; n < e.length; ++n) {
                            var r = e[n];
                            "showing" === r.mode && i.push(r)
                        }
                        this.updateForTrack(i)
                    } else {
                        for (var s = null, a = null, o = e.length; o--;) {
                            var l = e[o];
                            "showing" === l.mode && ("descriptions" === l.kind ? s = l : a = l)
                        }
                        a ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(a)) : s && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(s))
                    }
                }, i.updateDisplayState = function(e) {
                    for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--;) {
                        var s = i[n];
                        if (s) {
                            var a = s.displayState;
                            if (t.color && (a.firstChild.style.color = t.color), t.textOpacity && en(a.firstChild, "color", Zi(t.color || "#fff", t.textOpacity)), t.backgroundColor && (a.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && en(a.firstChild, "backgroundColor", Zi(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? en(a, "backgroundColor", Zi(t.windowColor, t.windowOpacity)) : a.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === t.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), t.fontPercent && 1 !== t.fontPercent) {
                                var o = r().parseFloat(a.style.fontSize);
                                a.style.fontSize = o * t.fontPercent + "px", a.style.height = "auto", a.style.top = "auto"
                            }
                            t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = Ji[t.fontFamily])
                        }
                    }
                }, i.updateForTrack = function(e) {
                    if (Array.isArray(e) || (e = [e]), "function" === typeof r().WebVTT && !e.every((function(e) {
                            return !e.activeCues
                        }))) {
                        for (var t = [], i = 0; i < e.length; ++i)
                            for (var n = e[i], s = 0; s < n.activeCues.length; ++s) t.push(n.activeCues[s]);
                        r().WebVTT.processCues(r(), t, this.el_);
                        for (var a = 0; a < e.length; ++a) {
                            for (var o = e[a], l = 0; l < o.activeCues.length; ++l) {
                                var u = o.activeCues[l].displayState;
                                oe(u, "vjs-text-track-cue"), oe(u, "vjs-text-track-cue-" + (o.language ? o.language : a))
                            }
                            this.player_.textTrackSettings && this.updateDisplayState(o)
                        }
                    }
                }, t
            }(Tt);
            Tt.registerComponent("TextTrackDisplay", tn);
            var nn = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return h()(t, e), t.prototype.createEl = function() {
                    var t = this.player_.isAudio(),
                        i = this.localize(t ? "Audio Player" : "Video Player"),
                        n = ne("span", {
                            className: "vjs-control-text",
                            innerHTML: this.localize("{1} is loading.", [i])
                        }),
                        r = e.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        });
                    return r.appendChild(n), r
                }, t
            }(Tt);
            Tt.registerComponent("LoadingSpinner", nn);
            var rn = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function(e, t, i) {
                    void 0 === t && (t = {}), void 0 === i && (i = {}), t = K({
                        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                        className: this.buildCSSClass()
                    }, t), i = K({
                        type: "button"
                    }, i);
                    var n = Tt.prototype.createEl.call(this, "button", t, i);
                    return this.createControlTextEl(n), n
                }, i.addChild = function(e, t) {
                    void 0 === t && (t = {});
                    var i = this.constructor.name;
                    return H.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Tt.prototype.addChild.call(this, e, t)
                }, i.enable = function() {
                    e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                }, i.disable = function() {
                    e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                }, i.handleKeyDown = function(t) {
                    g().isEventKey(t, "Space") || g().isEventKey(t, "Enter") ? t.stopPropagation() : e.prototype.handleKeyDown.call(this, t)
                }, t
            }(Yi);
            Tt.registerComponent("Button", rn);
            var sn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).mouseused_ = !1, n.on("mousedown", n.handleMouseDown), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-big-play-button"
                }, i.handleClick = function(e) {
                    var t = this.player_.play();
                    if (this.mouseused_ && e.clientX && e.clientY) {
                        var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
                        return ti(t), void(!this.player_.tech(!0) || (Dt || Lt) && i || this.player_.tech(!0).focus())
                    }
                    var n = this.player_.getChild("controlBar"),
                        r = n && n.getChild("playToggle");
                    if (r) {
                        var s = function() {
                            return r.focus()
                        };
                        ei(t) ? t.then(s, (function() {})) : this.setTimeout(s, 1)
                    } else this.player_.tech(!0).focus()
                }, i.handleKeyDown = function(t) {
                    this.mouseused_ = !1, e.prototype.handleKeyDown.call(this, t)
                }, i.handleMouseDown = function(e) {
                    this.mouseused_ = !0
                }, t
            }(rn);
            sn.prototype.controlText_ = "Play Video", Tt.registerComponent("BigPlayButton", sn);
            var an = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).controlText(i && i.controlText || n.localize("Close")), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
                }, i.handleClick = function(e) {
                    this.trigger({
                        type: "close",
                        bubbles: !1
                    })
                }, i.handleKeyDown = function(t) {
                    g().isEventKey(t, "Esc") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
                }, t
            }(rn);
            Tt.registerComponent("CloseButton", an);
            var on = function(e) {
                function t(t, i) {
                    var n;
                    return void 0 === i && (i = {}), n = e.call(this, t, i) || this, i.replay = void 0 === i.replay || i.replay, n.on(t, "play", n.handlePlay), n.on(t, "pause", n.handlePause), i.replay && n.on(t, "ended", n.handleEnded), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
                }, i.handleClick = function(e) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, i.handleSeeked = function(e) {
                    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
                }, i.handlePlay = function(e) {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                }, i.handlePause = function(e) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                }, i.handleEnded = function(e) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
                }, t
            }(rn);
            on.prototype.controlText_ = "Play", Tt.registerComponent("PlayToggle", on);
            var ln = function(e, t) {
                    e = e < 0 ? 0 : e;
                    var i = Math.floor(e % 60),
                        n = Math.floor(e / 60 % 60),
                        r = Math.floor(e / 3600),
                        s = Math.floor(t / 60 % 60),
                        a = Math.floor(t / 3600);
                    return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"), (r = r > 0 || a > 0 ? r + ":" : "") + (n = ((r || s >= 10) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
                },
                un = ln;

            function cn(e, t) {
                return void 0 === t && (t = e), un(e, t)
            }
            var dn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, ["timeupdate", "ended"], n.updateContent), n.updateTextNode_(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    var t = this.buildCSSClass(),
                        i = e.prototype.createEl.call(this, "div", {
                            className: t + " vjs-time-control vjs-control",
                            innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + "\xa0</span>"
                        });
                    return this.contentEl_ = ne("span", {
                        className: t + "-display"
                    }, {
                        "aria-live": "off",
                        role: "presentation"
                    }), i.appendChild(this.contentEl_), i
                }, i.dispose = function() {
                    this.contentEl_ = null, this.textNode_ = null, e.prototype.dispose.call(this)
                }, i.updateTextNode_ = function(e) {
                    var t = this;
                    void 0 === e && (e = 0), e = cn(e), this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", (function() {
                        if (t.contentEl_) {
                            var e = t.textNode_;
                            t.textNode_ = a().createTextNode(t.formattedTime_), t.textNode_ && (e ? t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_))
                        }
                    })))
                }, i.updateContent = function(e) {}, t
            }(Tt);
            dn.prototype.labelText_ = "Time", dn.prototype.controlText_ = "Time", Tt.registerComponent("TimeDisplay", dn);
            var hn = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-current-time"
                }, i.updateContent = function(e) {
                    var t;
                    t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t)
                }, t
            }(dn);
            hn.prototype.labelText_ = "Current Time", hn.prototype.controlText_ = "Current Time", Tt.registerComponent("CurrentTimeDisplay", hn);
            var pn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, "durationchange", n.updateContent), n.on(t, "loadstart", n.updateContent), n.on(t, "loadedmetadata", n.updateContent), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-duration"
                }, i.updateContent = function(e) {
                    var t = this.player_.duration();
                    this.updateTextNode_(t)
                }, t
            }(dn);
            pn.prototype.labelText_ = "Duration", pn.prototype.controlText_ = "Duration", Tt.registerComponent("DurationDisplay", pn);
            var fn = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return h()(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-time-control vjs-time-divider",
                        innerHTML: "<div><span>/</span></div>"
                    }, {
                        "aria-hidden": !0
                    })
                }, t
            }(Tt);
            Tt.registerComponent("TimeDivider", fn);
            var mn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, "durationchange", n.updateContent), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-remaining-time"
                }, i.createEl = function() {
                    var t = e.prototype.createEl.call(this);
                    return t.insertBefore(ne("span", {}, {
                        "aria-hidden": !0
                    }, "-"), this.contentEl_), t
                }, i.updateContent = function(e) {
                    var t;
                    "number" === typeof this.player_.duration() && (t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(t))
                }, t
            }(dn);
            mn.prototype.labelText_ = "Remaining Time", mn.prototype.controlText_ = "Remaining Time", Tt.registerComponent("RemainingTimeDisplay", mn);
            var gn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).updateShowing(), n.on(n.player(), "durationchange", n.updateShowing), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    var t = e.prototype.createEl.call(this, "div", {
                        className: "vjs-live-control vjs-control"
                    });
                    return this.contentEl_ = ne("div", {
                        className: "vjs-live-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "\xa0</span>" + this.localize("LIVE")
                    }, {
                        "aria-live": "off"
                    }), t.appendChild(this.contentEl_), t
                }, i.dispose = function() {
                    this.contentEl_ = null, e.prototype.dispose.call(this)
                }, i.updateShowing = function(e) {
                    this.player().duration() === 1 / 0 ? this.show() : this.hide()
                }, t
            }(Tt);
            Tt.registerComponent("LiveDisplay", gn);
            var vn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).updateLiveEdgeStatus(), n.player_.liveTracker && n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatus), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    var t = e.prototype.createEl.call(this, "button", {
                        className: "vjs-seek-to-live-control vjs-control"
                    });
                    return this.textEl_ = ne("span", {
                        className: "vjs-seek-to-live-text",
                        innerHTML: this.localize("LIVE")
                    }, {
                        "aria-hidden": "true"
                    }), t.appendChild(this.textEl_), t
                }, i.updateLiveEdgeStatus = function() {
                    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
                }, i.handleClick = function() {
                    this.player_.liveTracker.seekToLiveEdge()
                }, i.dispose = function() {
                    this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), this.textEl_ = null, e.prototype.dispose.call(this)
                }, t
            }(rn);
            vn.prototype.controlText_ = "Seek to live, currently playing live", Tt.registerComponent("SeekToLive", vn);
            var _n = function(e, t, i) {
                    return e = Number(e), Math.min(i, Math.max(t, isNaN(e) ? t : e))
                },
                yn = function(e) {
                    function t(t, i) {
                        var n;
                        return (n = e.call(this, t, i) || this).bar = n.getChild(n.options_.barName), n.vertical(!!n.options_.vertical), n.enable(), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.enabled = function() {
                        return this.enabled_
                    }, i.enable = function() {
                        this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                    }, i.disable = function() {
                        if (this.enabled()) {
                            var e = this.bar.el_.ownerDocument;
                            this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("keydown", this.handleKeyDown), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                        }
                    }, i.createEl = function(t, i, n) {
                        return void 0 === i && (i = {}), void 0 === n && (n = {}), i.className = i.className + " vjs-slider", i = K({
                            tabIndex: 0
                        }, i), n = K({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, n), e.prototype.createEl.call(this, t, i, n)
                    }, i.handleMouseDown = function(e) {
                        var t = this.bar.el_.ownerDocument;
                        "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || xt || e.preventDefault(), me(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
                    }, i.handleMouseMove = function(e) {}, i.handleMouseUp = function() {
                        var e = this.bar.el_.ownerDocument;
                        ge(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
                    }, i.update = function() {
                        var e = this;
                        if (this.el_ && this.bar) {
                            var t = this.getProgress();
                            return t === this.progress_ || (this.progress_ = t, this.requestNamedAnimationFrame("Slider#update", (function() {
                                var i = e.vertical() ? "height" : "width";
                                e.bar.el().style[i] = (100 * t).toFixed(2) + "%"
                            }))), t
                        }
                    }, i.getProgress = function() {
                        return Number(_n(this.getPercent(), 0, 1).toFixed(4))
                    }, i.calculateDistance = function(e) {
                        var t = ye(this.el_, e);
                        return this.vertical() ? t.y : t.x
                    }, i.handleKeyDown = function(t) {
                        g().isEventKey(t, "Left") || g().isEventKey(t, "Down") ? (t.preventDefault(), t.stopPropagation(), this.stepBack()) : g().isEventKey(t, "Right") || g().isEventKey(t, "Up") ? (t.preventDefault(), t.stopPropagation(), this.stepForward()) : e.prototype.handleKeyDown.call(this, t)
                    }, i.handleClick = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }, i.vertical = function(e) {
                        if (void 0 === e) return this.vertical_ || !1;
                        this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
                    }, t
                }(Tt);
            Tt.registerComponent("Slider", yn);
            var Tn = function(e, t) {
                    return _n(e / t * 100, 0, 100).toFixed(2) + "%"
                },
                bn = function(e) {
                    function t(t, i) {
                        var n;
                        return (n = e.call(this, t, i) || this).partEls_ = [], n.on(t, "progress", n.update), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                                className: "vjs-load-progress"
                            }),
                            i = ne("span", {
                                className: "vjs-control-text"
                            }),
                            n = ne("span", {
                                textContent: this.localize("Loaded")
                            }),
                            r = a().createTextNode(": ");
                        return this.percentageEl_ = ne("span", {
                            className: "vjs-control-text-loaded-percentage",
                            textContent: "0%"
                        }), t.appendChild(i), i.appendChild(n), i.appendChild(r), i.appendChild(this.percentageEl_), t
                    }, i.dispose = function() {
                        this.partEls_ = null, this.percentageEl_ = null, e.prototype.dispose.call(this)
                    }, i.update = function(e) {
                        var t = this;
                        this.requestNamedAnimationFrame("LoadProgressBar#update", (function() {
                            var e = t.player_.liveTracker,
                                i = t.player_.buffered(),
                                n = e && e.isLive() ? e.seekableEnd() : t.player_.duration(),
                                r = t.player_.bufferedEnd(),
                                s = t.partEls_,
                                a = Tn(r, n);
                            t.percent_ !== a && (t.el_.style.width = a, re(t.percentageEl_, a), t.percent_ = a);
                            for (var o = 0; o < i.length; o++) {
                                var l = i.start(o),
                                    u = i.end(o),
                                    c = s[o];
                                c || (c = t.el_.appendChild(ne()), s[o] = c), c.dataset.start === l && c.dataset.end === u || (c.dataset.start = l, c.dataset.end = u, c.style.left = Tn(l, r), c.style.width = Tn(u - l, r))
                            }
                            for (var d = s.length; d > i.length; d--) t.el_.removeChild(s[d - 1]);
                            s.length = i.length
                        }))
                    }, t
                }(Tt);
            Tt.registerComponent("LoadProgressBar", bn);
            var Sn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).update = et(Ze(c()(n), n.update), Je), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-time-tooltip"
                    }, {
                        "aria-hidden": "true"
                    })
                }, i.update = function(e, t, i) {
                    var n = _e(this.el_),
                        r = ve(this.player_.el()),
                        s = e.width * t;
                    if (r && n) {
                        var a = e.left - r.left + s,
                            o = e.width - s + (r.right - e.right),
                            l = n.width / 2;
                        a < l ? l += l - a : o < l && (l = o), l < 0 ? l = 0 : l > n.width && (l = n.width), this.el_.style.right = "-" + l + "px", this.write(i)
                    }
                }, i.write = function(e) {
                    re(this.el_, e)
                }, i.updateTime = function(e, t, i, n) {
                    var r = this;
                    this.requestNamedAnimationFrame("TimeTooltip#updateTime", (function() {
                        var s, a = r.player_.duration();
                        if (r.player_.liveTracker && r.player_.liveTracker.isLive()) {
                            var o = r.player_.liveTracker.liveWindow(),
                                l = o - t * o;
                            s = (l < 1 ? "" : "-") + cn(l, o)
                        } else s = cn(i, a);
                        r.update(e, t, s), n && n()
                    }))
                }, t
            }(Tt);
            Tt.registerComponent("TimeTooltip", Sn);
            var kn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).update = et(Ze(c()(n), n.update), Je), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-play-progress vjs-slider-bar"
                    }, {
                        "aria-hidden": "true"
                    })
                }, i.update = function(e, t) {
                    var i = this.getChild("timeTooltip");
                    if (i) {
                        var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        i.updateTime(e, t, n)
                    }
                }, t
            }(Tt);
            kn.prototype.options_ = {
                children: []
            }, Bt || wt || kn.prototype.options_.children.push("timeTooltip"), Tt.registerComponent("PlayProgressBar", kn);
            var Cn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).update = et(Ze(c()(n), n.update), Je), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-mouse-display"
                    })
                }, i.update = function(e, t) {
                    var i = this,
                        n = t * this.player_.duration();
                    this.getChild("timeTooltip").updateTime(e, t, n, (function() {
                        i.el_.style.left = e.width * t + "px"
                    }))
                }, t
            }(Tt);
            Cn.prototype.options_ = {
                children: ["timeTooltip"]
            }, Tt.registerComponent("MouseTimeDisplay", Cn);
            var En = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).setEventHandlers_(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.setEventHandlers_ = function() {
                    this.update_ = Ze(this, this.update), this.update = et(this.update_, Je), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.on(this.player_, ["playing"], this.enableInterval_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_), "hidden" in a() && "visibilityState" in a() && this.on(a(), "visibilitychange", this.toggleVisibility_)
                }, i.toggleVisibility_ = function(e) {
                    a().hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.update())
                }, i.enableInterval_ = function() {
                    this.updateInterval || (this.updateInterval = this.setInterval(this.update, Je))
                }, i.disableInterval_ = function(e) {
                    this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null)
                }, i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": this.localize("Progress Bar")
                    })
                }, i.update = function(t) {
                    var i = this,
                        n = e.prototype.update.call(this);
                    return this.requestNamedAnimationFrame("SeekBar#update", (function() {
                        var e = i.player_.ended() ? i.player_.duration() : i.getCurrentTime_(),
                            t = i.player_.liveTracker,
                            r = i.player_.duration();
                        t && t.isLive() && (r = i.player_.liveTracker.liveCurrentTime()), i.percent_ !== n && (i.el_.setAttribute("aria-valuenow", (100 * n).toFixed(2)), i.percent_ = n), i.currentTime_ === e && i.duration_ === r || (i.el_.setAttribute("aria-valuetext", i.localize("progress bar timing: currentTime={1} duration={2}", [cn(e, r), cn(r, r)], "{1} of {2}")), i.currentTime_ = e, i.duration_ = r), i.bar && i.bar.update(ve(i.el()), i.getProgress())
                    })), n
                }, i.getCurrentTime_ = function() {
                    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
                }, i.getPercent = function() {
                    var e, t = this.getCurrentTime_(),
                        i = this.player_.liveTracker;
                    return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), e
                }, i.handleMouseDown = function(t) {
                    Ee(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
                }, i.handleMouseMove = function(e) {
                    if (Ee(e)) {
                        var t, i = this.calculateDistance(e),
                            n = this.player_.liveTracker;
                        if (n && n.isLive()) {
                            if (i >= .99) return void n.seekToLiveEdge();
                            var r = n.seekableStart(),
                                s = n.liveCurrentTime();
                            if ((t = r + i * n.liveWindow()) >= s && (t = s), t <= r && (t = r + .1), t === 1 / 0) return
                        } else(t = i * this.player_.duration()) === this.player_.duration() && (t -= .1);
                        this.player_.currentTime(t)
                    }
                }, i.enable = function() {
                    e.prototype.enable.call(this);
                    var t = this.getChild("mouseTimeDisplay");
                    t && t.show()
                }, i.disable = function() {
                    e.prototype.disable.call(this);
                    var t = this.getChild("mouseTimeDisplay");
                    t && t.hide()
                }, i.handleMouseUp = function(t) {
                    e.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    }), this.videoWasPlaying ? ti(this.player_.play()) : this.update_()
                }, i.stepForward = function() {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, i.stepBack = function() {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, i.handleAction = function(e) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, i.handleKeyDown = function(t) {
                    if (g().isEventKey(t, "Space") || g().isEventKey(t, "Enter")) t.preventDefault(), t.stopPropagation(), this.handleAction(t);
                    else if (g().isEventKey(t, "Home")) t.preventDefault(), t.stopPropagation(), this.player_.currentTime(0);
                    else if (g().isEventKey(t, "End")) t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.duration());
                    else if (/^[0-9]$/.test(g()(t))) {
                        t.preventDefault(), t.stopPropagation();
                        var i = 10 * (g().codes[g()(t)] - g().codes[0]) / 100;
                        this.player_.currentTime(this.player_.duration() * i)
                    } else g().isEventKey(t, "PgDn") ? (t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60)) : g().isEventKey(t, "PgUp") ? (t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60)) : e.prototype.handleKeyDown.call(this, t)
                }, i.dispose = function() {
                    this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableInterval_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableInterval_), "hidden" in a() && "visibilityState" in a() && this.off(a(), "visibilitychange", this.toggleVisibility_), e.prototype.dispose.call(this)
                }, t
            }(yn);
            En.prototype.options_ = {
                children: ["loadProgressBar", "playProgressBar"],
                barName: "playProgressBar"
            }, Bt || wt || En.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Tt.registerComponent("SeekBar", En);
            var wn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).handleMouseMove = et(Ze(c()(n), n.handleMouseMove), Je), n.throttledHandleMouseSeek = et(Ze(c()(n), n.handleMouseSeek), Je), n.enable(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }, i.handleMouseMove = function(e) {
                    var t = this.getChild("seekBar");
                    if (t) {
                        var i = t.getChild("playProgressBar"),
                            n = t.getChild("mouseTimeDisplay");
                        if (i || n) {
                            var r = t.el(),
                                s = _e(r),
                                a = ye(r, e).x;
                            a = _n(a, 0, 1), n && n.update(s, a), i && i.update(s, t.getProgress())
                        }
                    }
                }, i.handleMouseSeek = function(e) {
                    var t = this.getChild("seekBar");
                    t && t.handleMouseMove(e)
                }, i.enabled = function() {
                    return this.enabled_
                }, i.disable = function() {
                    this.children().forEach((function(e) {
                        return e.disable && e.disable()
                    })), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
                }, i.enable = function() {
                    this.children().forEach((function(e) {
                        return e.enable && e.enable()
                    })), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                }, i.handleMouseDown = function(e) {
                    var t = this.el_.ownerDocument,
                        i = this.getChild("seekBar");
                    i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
                }, i.handleMouseUp = function(e) {
                    var t = this.el_.ownerDocument,
                        i = this.getChild("seekBar");
                    i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
                }, t
            }(Tt);
            wn.prototype.options_ = {
                children: ["seekBar"]
            }, Tt.registerComponent("ProgressControl", wn);
            var In = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, ["enterpictureinpicture", "leavepictureinpicture"], n.handlePictureInPictureChange), n.on(t, ["disablepictureinpicturechanged", "loadedmetadata"], n.handlePictureInPictureEnabledChange), n.disable(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-picture-in-picture-control " + e.prototype.buildCSSClass.call(this)
                }, i.handlePictureInPictureEnabledChange = function() {
                    a().pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() ? this.enable() : this.disable()
                }, i.handlePictureInPictureChange = function(e) {
                    this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture"), this.handlePictureInPictureEnabledChange()
                }, i.handleClick = function(e) {
                    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
                }, t
            }(rn);
            In.prototype.controlText_ = "Picture-in-Picture", Tt.registerComponent("PictureInPictureToggle", In);
            var Pn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, "fullscreenchange", n.handleFullscreenChange), !1 === a()[t.fsApi_.fullscreenEnabled] && n.disable(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
                }, i.handleFullscreenChange = function(e) {
                    this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                }, i.handleClick = function(e) {
                    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                }, t
            }(rn);
            Pn.prototype.controlText_ = "Fullscreen", Tt.registerComponent("FullscreenToggle", Pn);
            var An = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return h()(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-level",
                        innerHTML: '<span class="vjs-control-text"></span>'
                    })
                }, t
            }(Tt);
            Tt.registerComponent("VolumeLevel", An);
            var Ln = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on("slideractive", n.updateLastVolume_), n.on(t, "volumechange", n.updateARIAAttributes), t.ready((function() {
                        return n.updateARIAAttributes()
                    })), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": this.localize("Volume Level"),
                        "aria-live": "polite"
                    })
                }, i.handleMouseDown = function(t) {
                    Ee(t) && e.prototype.handleMouseDown.call(this, t)
                }, i.handleMouseMove = function(e) {
                    Ee(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
                }, i.checkMuted = function() {
                    this.player_.muted() && this.player_.muted(!1)
                }, i.getPercent = function() {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, i.stepForward = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, i.stepBack = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, i.updateARIAAttributes = function(e) {
                    var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                }, i.volumeAsPercentage_ = function() {
                    return Math.round(100 * this.player_.volume())
                }, i.updateLastVolume_ = function() {
                    var e = this,
                        t = this.player_.volume();
                    this.one("sliderinactive", (function() {
                        0 === e.player_.volume() && e.player_.lastVolume_(t)
                    }))
                }, t
            }(yn);
            Ln.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, Ln.prototype.playerEvent = "volumechange", Tt.registerComponent("VolumeBar", Ln);
            var xn = function(e) {
                function t(t, i) {
                    var n;
                    return void 0 === i && (i = {}), i.vertical = i.vertical || !1, ("undefined" === typeof i.volumeBar || X(i.volumeBar)) && (i.volumeBar = i.volumeBar || {}, i.volumeBar.vertical = i.vertical), n = e.call(this, t, i) || this,
                        function(e, t) {
                            t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", (function() {
                                t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                            }))
                        }(c()(n), t), n.throttledHandleMouseMove = et(Ze(c()(n), n.handleMouseMove), Je), n.on("mousedown", n.handleMouseDown), n.on("touchstart", n.handleMouseDown), n.on(n.volumeBar, ["focus", "slideractive"], (function() {
                            n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive")
                        })), n.on(n.volumeBar, ["blur", "sliderinactive"], (function() {
                            n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), n.trigger("sliderinactive")
                        })), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    var t = "vjs-volume-horizontal";
                    return this.options_.vertical && (t = "vjs-volume-vertical"), e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-control vjs-control " + t
                    })
                }, i.handleMouseDown = function(e) {
                    var t = this.el_.ownerDocument;
                    this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
                }, i.handleMouseUp = function(e) {
                    var t = this.el_.ownerDocument;
                    this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
                }, i.handleMouseMove = function(e) {
                    this.volumeBar.handleMouseMove(e)
                }, t
            }(Tt);
            xn.prototype.options_ = {
                children: ["volumeBar"]
            }, Tt.registerComponent("VolumeControl", xn);
            var On = function(e) {
                function t(t, i) {
                    var n;
                    return n = e.call(this, t, i) || this,
                        function(e, t) {
                            t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", (function() {
                                t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                            }))
                        }(c()(n), t), n.on(t, ["loadstart", "volumechange"], n.update), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
                }, i.handleClick = function(e) {
                    var t = this.player_.volume(),
                        i = this.player_.lastVolume_();
                    if (0 === t) {
                        var n = i < .1 ? .1 : i;
                        this.player_.volume(n), this.player_.muted(!1)
                    } else this.player_.muted(!this.player_.muted())
                }, i.update = function(e) {
                    this.updateIcon_(), this.updateControlText_()
                }, i.updateIcon_ = function() {
                    var e = this.player_.volume(),
                        t = 3;
                    Bt && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
                    for (var i = 0; i < 4; i++) le(this.el_, "vjs-vol-" + i);
                    oe(this.el_, "vjs-vol-" + t)
                }, i.updateControlText_ = function() {
                    var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
                    this.controlText() !== e && this.controlText(e)
                }, t
            }(rn);
            On.prototype.controlText_ = "Mute", Tt.registerComponent("MuteToggle", On);
            var Dn = function(e) {
                function t(t, i) {
                    var n;
                    return void 0 === i && (i = {}), "undefined" !== typeof i.inline ? i.inline = i.inline : i.inline = !0, ("undefined" === typeof i.volumeControl || X(i.volumeControl)) && (i.volumeControl = i.volumeControl || {}, i.volumeControl.vertical = !i.inline), (n = e.call(this, t, i) || this).on(t, ["loadstart"], n.volumePanelState_), n.on(n.muteToggle, "keyup", n.handleKeyPress), n.on(n.volumeControl, "keyup", n.handleVolumeControlKeyUp), n.on("keydown", n.handleKeyPress), n.on("mouseover", n.handleMouseOver), n.on("mouseout", n.handleMouseOut), n.on(n.volumeControl, ["slideractive"], n.sliderActive_), n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.sliderActive_ = function() {
                    this.addClass("vjs-slider-active")
                }, i.sliderInactive_ = function() {
                    this.removeClass("vjs-slider-active")
                }, i.volumePanelState_ = function() {
                    this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
                }, i.createEl = function() {
                    var t = "vjs-volume-panel-horizontal";
                    return this.options_.inline || (t = "vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-panel vjs-control " + t
                    })
                }, i.dispose = function() {
                    this.handleMouseOut(), e.prototype.dispose.call(this)
                }, i.handleVolumeControlKeyUp = function(e) {
                    g().isEventKey(e, "Esc") && this.muteToggle.focus()
                }, i.handleMouseOver = function(e) {
                    this.addClass("vjs-hover"), ze(a(), "keyup", Ze(this, this.handleKeyPress))
                }, i.handleMouseOut = function(e) {
                    this.removeClass("vjs-hover"), Ge(a(), "keyup", Ze(this, this.handleKeyPress))
                }, i.handleKeyPress = function(e) {
                    g().isEventKey(e, "Esc") && this.handleMouseOut()
                }, t
            }(Tt);
            Dn.prototype.options_ = {
                children: ["muteToggle", "volumeControl"]
            }, Tt.registerComponent("VolumePanel", Dn);
            var Mn = function(e) {
                function t(t, i) {
                    var n;
                    return n = e.call(this, t, i) || this, i && (n.menuButton_ = i.menuButton), n.focusedChild_ = -1, n.on("keydown", n.handleKeyDown), n.boundHandleBlur_ = Ze(c()(n), n.handleBlur), n.boundHandleTapClick_ = Ze(c()(n), n.handleTapClick), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.addEventListenerForItem = function(e) {
                    e instanceof Tt && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
                }, i.removeEventListenerForItem = function(e) {
                    e instanceof Tt && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
                }, i.removeChild = function(t) {
                    "string" === typeof t && (t = this.getChild(t)), this.removeEventListenerForItem(t), e.prototype.removeChild.call(this, t)
                }, i.addItem = function(e) {
                    var t = this.addChild(e);
                    t && this.addEventListenerForItem(t)
                }, i.createEl = function() {
                    var t = this.options_.contentElType || "ul";
                    this.contentEl_ = ne(t, {
                        className: "vjs-menu-content"
                    }), this.contentEl_.setAttribute("role", "menu");
                    var i = e.prototype.createEl.call(this, "div", {
                        append: this.contentEl_,
                        className: "vjs-menu"
                    });
                    return i.appendChild(this.contentEl_), ze(i, "click", (function(e) {
                        e.preventDefault(), e.stopImmediatePropagation()
                    })), i
                }, i.dispose = function() {
                    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, e.prototype.dispose.call(this)
                }, i.handleBlur = function(e) {
                    var t = e.relatedTarget || a().activeElement;
                    if (!this.children().some((function(e) {
                            return e.el() === t
                        }))) {
                        var i = this.menuButton_;
                        i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
                    }
                }, i.handleTapClick = function(e) {
                    if (this.menuButton_) {
                        this.menuButton_.unpressButton();
                        var t = this.children();
                        if (!Array.isArray(t)) return;
                        var i = t.filter((function(t) {
                            return t.el() === e.target
                        }))[0];
                        if (!i) return;
                        "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
                    }
                }, i.handleKeyDown = function(e) {
                    g().isEventKey(e, "Left") || g().isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (g().isEventKey(e, "Right") || g().isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
                }, i.stepForward = function() {
                    var e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
                }, i.stepBack = function() {
                    var e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
                }, i.focus = function(e) {
                    void 0 === e && (e = 0);
                    var t = this.children().slice();
                    t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
                }, t
            }(Tt);
            Tt.registerComponent("Menu", Mn);
            var Rn = function(e) {
                function t(t, i) {
                    var n;
                    void 0 === i && (i = {}), (n = e.call(this, t, i) || this).menuButton_ = new rn(t, i), n.menuButton_.controlText(n.controlText_), n.menuButton_.el_.setAttribute("aria-haspopup", "true");
                    var r = rn.prototype.buildCSSClass();
                    return n.menuButton_.el_.className = n.buildCSSClass() + " " + r, n.menuButton_.removeClass("vjs-control"), n.addChild(n.menuButton_), n.update(), n.enabled_ = !0, n.on(n.menuButton_, "tap", n.handleClick), n.on(n.menuButton_, "click", n.handleClick), n.on(n.menuButton_, "keydown", n.handleKeyDown), n.on(n.menuButton_, "mouseenter", (function() {
                        n.addClass("vjs-hover"), n.menu.show(), ze(a(), "keyup", Ze(c()(n), n.handleMenuKeyUp))
                    })), n.on("mouseleave", n.handleMouseLeave), n.on("keydown", n.handleSubmenuKeyDown), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.update = function() {
                    var e = this.createMenu();
                    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
                }, i.createMenu = function() {
                    var e = new Mn(this.player_, {
                        menuButton: this
                    });
                    if (this.hideThreshold_ = 0, this.options_.title) {
                        var t = ne("li", {
                            className: "vjs-menu-title",
                            innerHTML: ft(this.options_.title),
                            tabIndex: -1
                        });
                        this.hideThreshold_ += 1;
                        var i = new Tt(this.player_, {
                            el: t
                        });
                        e.addItem(i)
                    }
                    if (this.items = this.createItems(), this.items)
                        for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
                    return e
                }, i.createItems = function() {}, i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: this.buildWrapperCSSClass()
                    }, {})
                }, i.buildWrapperCSSClass = function() {
                    var t = "vjs-menu-button";
                    return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + rn.prototype.buildCSSClass() + " " + e.prototype.buildCSSClass.call(this)
                }, i.buildCSSClass = function() {
                    var t = "vjs-menu-button";
                    return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                }, i.controlText = function(e, t) {
                    return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t)
                }, i.dispose = function() {
                    this.handleMouseLeave(), e.prototype.dispose.call(this)
                }, i.handleClick = function(e) {
                    this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                }, i.handleMouseLeave = function(e) {
                    this.removeClass("vjs-hover"), Ge(a(), "keyup", Ze(this, this.handleMenuKeyUp))
                }, i.focus = function() {
                    this.menuButton_.focus()
                }, i.blur = function() {
                    this.menuButton_.blur()
                }, i.handleKeyDown = function(e) {
                    g().isEventKey(e, "Esc") || g().isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), g().isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (g().isEventKey(e, "Up") || g().isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()))
                }, i.handleMenuKeyUp = function(e) {
                    (g().isEventKey(e, "Esc") || g().isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
                }, i.handleSubmenuKeyPress = function(e) {
                    this.handleSubmenuKeyDown(e)
                }, i.handleSubmenuKeyDown = function(e) {
                    (g().isEventKey(e, "Esc") || g().isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), g().isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
                }, i.pressButton = function() {
                    if (this.enabled_) {
                        if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), Bt && te()) return;
                        this.menu.focus()
                    }
                }, i.unpressButton = function() {
                    this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                }, i.disable = function() {
                    this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                }, i.enable = function() {
                    this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                }, t
            }(Tt);
            Tt.registerComponent("MenuButton", Rn);
            var Un = function(e) {
                function t(t, i) {
                    var n, r = i.tracks;
                    if ((n = e.call(this, t, i) || this).items.length <= 1 && n.hide(), !r) return c()(n);
                    var s = Ze(c()(n), n.update);
                    return r.addEventListener("removetrack", s), r.addEventListener("addtrack", s), n.player_.on("ready", s), n.player_.on("dispose", (function() {
                        r.removeEventListener("removetrack", s), r.removeEventListener("addtrack", s)
                    })), n
                }
                return h()(t, e), t
            }(Rn);
            Tt.registerComponent("TrackButton", Un);
            var Nn = ["Tab", "Esc", "Up", "Down", "Right", "Left"],
                Fn = function(e) {
                    function t(t, i) {
                        var n;
                        return (n = e.call(this, t, i) || this).selectable = i.selectable, n.isSelected_ = i.selected || !1, n.multiSelectable = i.multiSelectable, n.selected(n.isSelected_), n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") : n.el_.setAttribute("role", "menuitemradio") : n.el_.setAttribute("role", "menuitem"), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.createEl = function(t, i, n) {
                        return this.nonIconControl = !0, e.prototype.createEl.call(this, "li", K({
                            className: "vjs-menu-item",
                            innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                            tabIndex: -1
                        }, i), n)
                    }, i.handleKeyDown = function(t) {
                        Nn.some((function(e) {
                            return g().isEventKey(t, e)
                        })) || e.prototype.handleKeyDown.call(this, t)
                    }, i.handleClick = function(e) {
                        this.selected(!0)
                    }, i.selected = function(e) {
                        this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
                    }, t
                }(Yi);
            Tt.registerComponent("MenuItem", Fn);
            var Bn = function(e) {
                function t(t, i) {
                    var n, s = i.track,
                        o = t.textTracks();
                    i.label = s.label || s.language || "Unknown", i.selected = "showing" === s.mode, (n = e.call(this, t, i) || this).track = s, n.kinds = (i.kinds || [i.kind || n.track.kind]).filter(Boolean);
                    var l, u = function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n.handleTracksChange.apply(c()(n), t)
                        },
                        d = function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n.handleSelectedLanguageChange.apply(c()(n), t)
                        };
                    (t.on(["loadstart", "texttrackchange"], u), o.addEventListener("change", u), o.addEventListener("selectedlanguagechange", d), n.on("dispose", (function() {
                        t.off(["loadstart", "texttrackchange"], u), o.removeEventListener("change", u), o.removeEventListener("selectedlanguagechange", d)
                    })), void 0 === o.onchange) && n.on(["tap", "click"], (function() {
                        if ("object" !== typeof r().Event) try {
                            l = new(r().Event)("change")
                        } catch (e) {}
                        l || (l = a().createEvent("Event")).initEvent("change", !0, !0), o.dispatchEvent(l)
                    }));
                    return n.handleTracksChange(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.handleClick = function(t) {
                    var i = this.track,
                        n = this.player_.textTracks();
                    if (e.prototype.handleClick.call(this, t), n)
                        for (var r = 0; r < n.length; r++) {
                            var s = n[r]; - 1 !== this.kinds.indexOf(s.kind) && (s === i ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled"))
                        }
                }, i.handleTracksChange = function(e) {
                    var t = "showing" === this.track.mode;
                    t !== this.isSelected_ && this.selected(t)
                }, i.handleSelectedLanguageChange = function(e) {
                    if ("showing" === this.track.mode) {
                        var t = this.player_.cache_.selectedLanguage;
                        if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                        this.player_.cache_.selectedLanguage = {
                            enabled: !0,
                            language: this.track.language,
                            kind: this.track.kind
                        }
                    }
                }, i.dispose = function() {
                    this.track = null, e.prototype.dispose.call(this)
                }, t
            }(Fn);
            Tt.registerComponent("TextTrackMenuItem", Bn);
            var jn = function(e) {
                function t(t, i) {
                    return i.track = {
                        player: t,
                        kind: i.kind,
                        kinds: i.kinds,
                        default: !1,
                        mode: "disabled"
                    }, i.kinds || (i.kinds = [i.kind]), i.label ? i.track.label = i.label : i.track.label = i.kinds.join(" and ") + " off", i.selectable = !0, i.multiSelectable = !1, e.call(this, t, i) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.handleTracksChange = function(e) {
                    for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                        var s = t[n];
                        if (this.options_.kinds.indexOf(s.kind) > -1 && "showing" === s.mode) {
                            i = !1;
                            break
                        }
                    }
                    i !== this.isSelected_ && this.selected(i)
                }, i.handleSelectedLanguageChange = function(e) {
                    for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                        var s = t[n];
                        if (["captions", "descriptions", "subtitles"].indexOf(s.kind) > -1 && "showing" === s.mode) {
                            i = !1;
                            break
                        }
                    }
                    i && (this.player_.cache_.selectedLanguage = {
                        enabled: !1
                    })
                }, t
            }(Bn);
            Tt.registerComponent("OffTextTrackMenuItem", jn);
            var qn = function(e) {
                function t(t, i) {
                    return void 0 === i && (i = {}), i.tracks = t.textTracks(), e.call(this, t, i) || this
                }
                return h()(t, e), t.prototype.createItems = function(e, t) {
                    var i;
                    void 0 === e && (e = []), void 0 === t && (t = Bn), this.label_ && (i = this.label_ + " off"), e.push(new jn(this.player_, {
                        kinds: this.kinds_,
                        kind: this.kind_,
                        label: i
                    })), this.hideThreshold_ += 1;
                    var n = this.player_.textTracks();
                    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                    for (var r = 0; r < n.length; r++) {
                        var s = n[r];
                        if (this.kinds_.indexOf(s.kind) > -1) {
                            var a = new t(this.player_, {
                                track: s,
                                kinds: this.kinds_,
                                kind: this.kind_,
                                selectable: !0,
                                multiSelectable: !1
                            });
                            a.addClass("vjs-" + s.kind + "-menu-item"), e.push(a)
                        }
                    }
                    return e
                }, t
            }(Un);
            Tt.registerComponent("TextTrackButton", qn);
            var Hn = function(e) {
                function t(t, i) {
                    var n, r = i.track,
                        s = i.cue,
                        a = t.currentTime();
                    return i.selectable = !0, i.multiSelectable = !1, i.label = s.text, i.selected = s.startTime <= a && a < s.endTime, (n = e.call(this, t, i) || this).track = r, n.cue = s, r.addEventListener("cuechange", Ze(c()(n), n.update)), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.handleClick = function(t) {
                    e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                }, i.update = function(e) {
                    var t = this.cue,
                        i = this.player_.currentTime();
                    this.selected(t.startTime <= i && i < t.endTime)
                }, t
            }(Fn);
            Tt.registerComponent("ChaptersTrackMenuItem", Hn);
            var Vn = function(e) {
                function t(t, i, n) {
                    return e.call(this, t, i, n) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, i.update = function(t) {
                    this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), e.prototype.update.call(this)
                }, i.setTrack = function(e) {
                    if (this.track_ !== e) {
                        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                            var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                        }
                        if (this.track_ = e, this.track_) {
                            this.track_.mode = "hidden";
                            var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            i && i.addEventListener("load", this.updateHandler_)
                        }
                    }
                }, i.findChaptersTrack = function() {
                    for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
                        var i = e[t];
                        if (i.kind === this.kind_) return i
                    }
                }, i.getMenuCaption = function() {
                    return this.track_ && this.track_.label ? this.track_.label : this.localize(ft(this.kind_))
                }, i.createMenu = function() {
                    return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this)
                }, i.createItems = function() {
                    var e = [];
                    if (!this.track_) return e;
                    var t = this.track_.cues;
                    if (!t) return e;
                    for (var i = 0, n = t.length; i < n; i++) {
                        var r = t[i],
                            s = new Hn(this.player_, {
                                track: this.track_,
                                cue: r
                            });
                        e.push(s)
                    }
                    return e
                }, t
            }(qn);
            Vn.prototype.kind_ = "chapters", Vn.prototype.controlText_ = "Chapters", Tt.registerComponent("ChaptersButton", Vn);
            var Wn = function(e) {
                function t(t, i, n) {
                    var r;
                    r = e.call(this, t, i, n) || this;
                    var s = t.textTracks(),
                        a = Ze(c()(r), r.handleTracksChange);
                    return s.addEventListener("change", a), r.on("dispose", (function() {
                        s.removeEventListener("change", a)
                    })), r
                }
                h()(t, e);
                var i = t.prototype;
                return i.handleTracksChange = function(e) {
                    for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                        var s = t[n];
                        if (s.kind !== this.kind_ && "showing" === s.mode) {
                            i = !0;
                            break
                        }
                    }
                    i ? this.disable() : this.enable()
                }, i.buildCSSClass = function() {
                    return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, t
            }(qn);
            Wn.prototype.kind_ = "descriptions", Wn.prototype.controlText_ = "Descriptions", Tt.registerComponent("DescriptionsButton", Wn);
            var zn = function(e) {
                function t(t, i, n) {
                    return e.call(this, t, i, n) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, t
            }(qn);
            zn.prototype.kind_ = "subtitles", zn.prototype.controlText_ = "Subtitles", Tt.registerComponent("SubtitlesButton", zn);
            var Gn = function(e) {
                function t(t, i) {
                    var n;
                    return i.track = {
                        player: t,
                        kind: i.kind,
                        label: i.kind + " settings",
                        selectable: !1,
                        default: !1,
                        mode: "disabled"
                    }, i.selectable = !1, i.name = "CaptionSettingsMenuItem", (n = e.call(this, t, i) || this).addClass("vjs-texttrack-settings"), n.controlText(", opens " + i.kind + " settings dialog"), n
                }
                return h()(t, e), t.prototype.handleClick = function(e) {
                    this.player().getChild("textTrackSettings").open()
                }, t
            }(Bn);
            Tt.registerComponent("CaptionSettingsMenuItem", Gn);
            var Kn = function(e) {
                function t(t, i, n) {
                    return e.call(this, t, i, n) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, i.createItems = function() {
                    var t = [];
                    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Gn(this.player_, {
                        kind: this.kind_
                    })), this.hideThreshold_ += 1), e.prototype.createItems.call(this, t)
                }, t
            }(qn);
            Kn.prototype.kind_ = "captions", Kn.prototype.controlText_ = "Captions", Tt.registerComponent("CaptionsButton", Kn);
            var Qn = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return h()(t, e), t.prototype.createEl = function(t, i, n) {
                    var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                    return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", e.prototype.createEl.call(this, t, K({
                        innerHTML: r
                    }, i), n)
                }, t
            }(Bn);
            Tt.registerComponent("SubsCapsMenuItem", Qn);
            var Xn = function(e) {
                function t(t, i) {
                    var n;
                    return void 0 === i && (i = {}), (n = e.call(this, t, i) || this).label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"), n.menuButton_.controlText(ft(n.label_)), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, i.createItems = function() {
                    var t = [];
                    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Gn(this.player_, {
                        kind: this.label_
                    })), this.hideThreshold_ += 1), t = e.prototype.createItems.call(this, t, Qn)
                }, t
            }(qn);
            Xn.prototype.kinds_ = ["captions", "subtitles"], Xn.prototype.controlText_ = "Subtitles", Tt.registerComponent("SubsCapsButton", Xn);
            var Yn = function(e) {
                function t(t, i) {
                    var n, r = i.track,
                        s = t.audioTracks();
                    i.label = r.label || r.language || "Unknown", i.selected = r.enabled, (n = e.call(this, t, i) || this).track = r, n.addClass("vjs-" + r.kind + "-menu-item");
                    var a = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        n.handleTracksChange.apply(c()(n), t)
                    };
                    return s.addEventListener("change", a), n.on("dispose", (function() {
                        s.removeEventListener("change", a)
                    })), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function(t, i, n) {
                    var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                    return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), r += "</span>", e.prototype.createEl.call(this, t, K({
                        innerHTML: r
                    }, i), n)
                }, i.handleClick = function(t) {
                    var i = this.player_.audioTracks();
                    e.prototype.handleClick.call(this, t);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n];
                        r.enabled = r === this.track
                    }
                }, i.handleTracksChange = function(e) {
                    this.selected(this.track.enabled)
                }, t
            }(Fn);
            Tt.registerComponent("AudioTrackMenuItem", Yn);
            var $n = function(e) {
                function t(t, i) {
                    return void 0 === i && (i = {}), i.tracks = t.audioTracks(), e.call(this, t, i) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this)
                }, i.createItems = function(e) {
                    void 0 === e && (e = []), this.hideThreshold_ = 1;
                    for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                        var n = t[i];
                        e.push(new Yn(this.player_, {
                            track: n,
                            selectable: !0,
                            multiSelectable: !1
                        }))
                    }
                    return e
                }, t
            }(Un);
            $n.prototype.controlText_ = "Audio Track", Tt.registerComponent("AudioTrackButton", $n);
            var Jn = function(e) {
                function t(t, i) {
                    var n, r = i.rate,
                        s = parseFloat(r, 10);
                    return i.label = r, i.selected = 1 === s, i.selectable = !0, i.multiSelectable = !1, (n = e.call(this, t, i) || this).label = r, n.rate = s, n.on(t, "ratechange", n.update), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.handleClick = function(t) {
                    e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                }, i.update = function(e) {
                    this.selected(this.player().playbackRate() === this.rate)
                }, t
            }(Fn);
            Jn.prototype.contentElType = "button", Tt.registerComponent("PlaybackRateMenuItem", Jn);
            var Zn = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).updateVisibility(), n.updateLabel(), n.on(t, "loadstart", n.updateVisibility), n.on(t, "ratechange", n.updateLabel), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    var t = e.prototype.createEl.call(this);
                    return this.labelEl_ = ne("div", {
                        className: "vjs-playback-rate-value",
                        innerHTML: "1x"
                    }), t.appendChild(this.labelEl_), t
                }, i.dispose = function() {
                    this.labelEl_ = null, e.prototype.dispose.call(this)
                }, i.buildCSSClass = function() {
                    return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
                }, i.buildWrapperCSSClass = function() {
                    return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this)
                }, i.createMenu = function() {
                    var e = new Mn(this.player()),
                        t = this.playbackRates();
                    if (t)
                        for (var i = t.length - 1; i >= 0; i--) e.addChild(new Jn(this.player(), {
                            rate: t[i] + "x"
                        }));
                    return e
                }, i.updateARIAAttributes = function() {
                    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                }, i.handleClick = function(e) {
                    for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                        if (i[r] > t) {
                            n = i[r];
                            break
                        }
                    this.player().playbackRate(n)
                }, i.playbackRates = function() {
                    return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                }, i.playbackRateSupported = function() {
                    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                }, i.updateVisibility = function(e) {
                    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                }, i.updateLabel = function(e) {
                    this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                }, t
            }(Rn);
            Zn.prototype.controlText_ = "Playback Rate", Tt.registerComponent("PlaybackRateMenuButton", Zn);
            var er = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
                }, i.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: this.buildCSSClass()
                    })
                }, t
            }(Tt);
            Tt.registerComponent("Spacer", er);
            var tr = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
                }, i.createEl = function() {
                    var t = e.prototype.createEl.call(this, {
                        className: this.buildCSSClass()
                    });
                    return t.innerHTML = "\xa0", t
                }, t
            }(er);
            Tt.registerComponent("CustomControlSpacer", tr);
            var ir = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return h()(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    })
                }, t
            }(Tt);
            ir.prototype.options_ = {
                children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
            }, "exitPictureInPicture" in a() && ir.prototype.options_.children.splice(ir.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"), Tt.registerComponent("ControlBar", ir);
            var nr = function(e) {
                function t(t, i) {
                    var n;
                    return (n = e.call(this, t, i) || this).on(t, "error", n.open), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.buildCSSClass = function() {
                    return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
                }, i.content = function() {
                    var e = this.player().error();
                    return e ? this.localize(e.message) : ""
                }, t
            }(si);
            nr.prototype.options_ = l()({}, si.prototype.options_, {
                pauseOnOpen: !1,
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), Tt.registerComponent("ErrorDisplay", nr);
            var rr = "vjs-text-track-settings",
                sr = ["#000", "Black"],
                ar = ["#00F", "Blue"],
                or = ["#0FF", "Cyan"],
                lr = ["#0F0", "Green"],
                ur = ["#F0F", "Magenta"],
                cr = ["#F00", "Red"],
                dr = ["#FFF", "White"],
                hr = ["#FF0", "Yellow"],
                pr = ["1", "Opaque"],
                fr = ["0.5", "Semi-Transparent"],
                mr = ["0", "Transparent"],
                gr = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [sr, dr, cr, lr, ar, hr, ur, or]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Transparency",
                        options: [pr, fr, mr]
                    },
                    color: {
                        selector: ".vjs-fg-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [dr, sr, cr, lr, ar, hr, ur, or]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [
                            ["none", "None"],
                            ["raised", "Raised"],
                            ["depressed", "Depressed"],
                            ["uniform", "Uniform"],
                            ["dropshadow", "Dropshadow"]
                        ]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [
                            ["proportionalSansSerif", "Proportional Sans-Serif"],
                            ["monospaceSansSerif", "Monospace Sans-Serif"],
                            ["proportionalSerif", "Proportional Serif"],
                            ["monospaceSerif", "Monospace Serif"],
                            ["casual", "Casual"],
                            ["script", "Script"],
                            ["small-caps", "Small Caps"]
                        ]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [
                            ["0.50", "50%"],
                            ["0.75", "75%"],
                            ["1.00", "100%"],
                            ["1.25", "125%"],
                            ["1.50", "150%"],
                            ["1.75", "175%"],
                            ["2.00", "200%"],
                            ["3.00", "300%"],
                            ["4.00", "400%"]
                        ],
                        default: 2,
                        parser: function(e) {
                            return "1.00" === e ? null : Number(e)
                        }
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Transparency",
                        options: [pr, fr]
                    },
                    windowColor: {
                        selector: ".vjs-window-color > select",
                        id: "captions-window-color-%s",
                        label: "Color"
                    },
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Transparency",
                        options: [mr, fr, pr]
                    }
                };

            function vr(e, t) {
                if (t && (e = t(e)), e && "none" !== e) return e
            }
            gr.windowColor.options = gr.backgroundColor.options;
            var _r = function(e) {
                function t(t, i) {
                    var n;
                    return i.temporary = !1, (n = e.call(this, t, i) || this).updateDisplay = Ze(c()(n), n.updateDisplay), n.fill(), n.hasBeenOpened_ = n.hasBeenFilled_ = !0, n.endDialog = ne("p", {
                        className: "vjs-control-text",
                        textContent: n.localize("End of dialog window.")
                    }), n.el().appendChild(n.endDialog), n.setDefaults(), void 0 === i.persistTextTrackSettings && (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings), n.on(n.$(".vjs-done-button"), "click", (function() {
                        n.saveSettings(), n.close()
                    })), n.on(n.$(".vjs-default-button"), "click", (function() {
                        n.setDefaults(), n.updateDisplay()
                    })), G(gr, (function(e) {
                        n.on(n.$(e.selector), "change", n.updateDisplay)
                    })), n.options_.persistTextTrackSettings && n.restoreSettings(), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.dispose = function() {
                    this.endDialog = null, e.prototype.dispose.call(this)
                }, i.createElSelect_ = function(e, t, i) {
                    var n = this;
                    void 0 === t && (t = ""), void 0 === i && (i = "label");
                    var r = gr[e],
                        s = r.id.replace("%s", this.id_),
                        a = [t, s].join(" ").trim();
                    return ["<" + i + ' id="' + s + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + a + '">'].concat(r.options.map((function(e) {
                        var t = s + "-" + e[1].replace(/\W+/g, "");
                        return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + a + " " + t + '">', n.localize(e[1]), "</option>"].join("")
                    }))).concat("</select>").join("")
                }, i.createElFgColor_ = function() {
                    var e = "captions-text-legend-" + this.id_;
                    return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
                }, i.createElBgColor_ = function() {
                    var e = "captions-background-" + this.id_;
                    return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
                }, i.createElWinColor_ = function() {
                    var e = "captions-window-" + this.id_;
                    return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
                }, i.createElColors_ = function() {
                    return ne("div", {
                        className: "vjs-track-settings-colors",
                        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                    })
                }, i.createElFont_ = function() {
                    return ne("div", {
                        className: "vjs-track-settings-font",
                        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                    })
                }, i.createElControls_ = function() {
                    var e = this.localize("restore all settings to the default values");
                    return ne("div", {
                        className: "vjs-track-settings-controls",
                        innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                    })
                }, i.content = function() {
                    return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
                }, i.label = function() {
                    return this.localize("Caption Settings Dialog")
                }, i.description = function() {
                    return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                }, i.buildCSSClass = function() {
                    return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
                }, i.getValues = function() {
                    var e, t, i, n = this;
                    return t = function(e, t, i) {
                        var r, s, a = (r = n.$(t.selector), s = t.parser, vr(r.options[r.options.selectedIndex].value, s));
                        return void 0 !== a && (e[i] = a), e
                    }, void 0 === (i = {}) && (i = 0), z(e = gr).reduce((function(i, n) {
                        return t(i, e[n], n)
                    }), i)
                }, i.setValues = function(e) {
                    var t = this;
                    G(gr, (function(i, n) {
                        ! function(e, t, i) {
                            if (t)
                                for (var n = 0; n < e.options.length; n++)
                                    if (vr(e.options[n].value, i) === t) {
                                        e.selectedIndex = n;
                                        break
                                    }
                        }(t.$(i.selector), e[n], i.parser)
                    }))
                }, i.setDefaults = function() {
                    var e = this;
                    G(gr, (function(t) {
                        var i = t.hasOwnProperty("default") ? t.default : 0;
                        e.$(t.selector).selectedIndex = i
                    }))
                }, i.restoreSettings = function() {
                    var e;
                    try {
                        e = JSON.parse(r().localStorage.getItem(rr))
                    } catch (t) {
                        H.warn(t)
                    }
                    e && this.setValues(e)
                }, i.saveSettings = function() {
                    if (this.options_.persistTextTrackSettings) {
                        var e = this.getValues();
                        try {
                            Object.keys(e).length ? r().localStorage.setItem(rr, JSON.stringify(e)) : r().localStorage.removeItem(rr)
                        } catch (t) {
                            H.warn(t)
                        }
                    }
                }, i.updateDisplay = function() {
                    var e = this.player_.getChild("textTrackDisplay");
                    e && e.updateDisplay()
                }, i.conditionalBlur_ = function() {
                    this.previouslyActiveEl_ = null;
                    var e = this.player_.controlBar,
                        t = e && e.subsCapsButton,
                        i = e && e.captionsButton;
                    t ? t.focus() : i && i.focus()
                }, t
            }(si);
            Tt.registerComponent("TextTrackSettings", _r);
            var yr = function(e) {
                function t(t, i) {
                    var n, s = i.ResizeObserver || r().ResizeObserver;
                    null === i.ResizeObserver && (s = !1);
                    var a = mt({
                        createEl: !s,
                        reportTouchActivity: !1
                    }, i);
                    return (n = e.call(this, t, a) || this).ResizeObserver = i.ResizeObserver || r().ResizeObserver, n.loadListener_ = null, n.resizeObserver_ = null, n.debouncedHandler_ = function(e, t, i, n) {
                        var s;
                        void 0 === n && (n = r());
                        var a = function() {
                            var r = this,
                                a = arguments,
                                o = function() {
                                    s = null, o = null, i || e.apply(r, a)
                                };
                            !s && i && e.apply(r, a), n.clearTimeout(s), s = n.setTimeout(o, t)
                        };
                        return a.cancel = function() {
                            n.clearTimeout(s), s = null
                        }, a
                    }((function() {
                        n.resizeHandler()
                    }), 100, !1, c()(n)), s ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_), n.resizeObserver_.observe(t.el())) : (n.loadListener_ = function() {
                        if (n.el_ && n.el_.contentWindow) {
                            var e = n.debouncedHandler_,
                                t = n.unloadListener_ = function() {
                                    Ge(this, "resize", e), Ge(this, "unload", t), t = null
                                };
                            ze(n.el_.contentWindow, "unload", t), ze(n.el_.contentWindow, "resize", e)
                        }
                    }, n.one("load", n.loadListener_)), n
                }
                h()(t, e);
                var i = t.prototype;
                return i.createEl = function() {
                    return e.prototype.createEl.call(this, "iframe", {
                        className: "vjs-resize-manager",
                        tabIndex: -1
                    }, {
                        "aria-hidden": "true"
                    })
                }, i.resizeHandler = function() {
                    this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
                }, i.dispose = function() {
                    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, e.prototype.dispose.call(this)
                }, t
            }(Tt);
            Tt.registerComponent("ResizeManager", yr);
            var Tr = {
                    trackingThreshold: 30,
                    liveTolerance: 15
                },
                br = function(e) {
                    function t(t, i) {
                        var n, r = mt(Tr, i, {
                            createEl: !1
                        });
                        return (n = e.call(this, t, r) || this).reset_(), n.on(n.player_, "durationchange", n.handleDurationchange), Dt && "hidden" in a() && "visibilityState" in a() && n.on(a(), "visibilitychange", n.handleVisibilityChange), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.handleVisibilityChange = function() {
                        this.player_.duration() === 1 / 0 && (a().hidden ? this.stopTracking() : this.startTracking())
                    }, i.trackLive_ = function() {
                        var e = this.player_.seekable();
                        if (e && e.length) {
                            var t = Number(r().performance.now().toFixed(4)),
                                i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3;
                            this.lastTime_ = t, this.pastSeekEnd_ = this.pastSeekEnd() + i;
                            var n = this.liveCurrentTime(),
                                s = this.player_.currentTime(),
                                a = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - s) > this.options_.liveTolerance;
                            this.timeupdateSeen_ && n !== 1 / 0 || (a = !1), a !== this.behindLiveEdge_ && (this.behindLiveEdge_ = a, this.trigger("liveedgechange"))
                        }
                    }, i.handleDurationchange = function() {
                        this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking())
                    }, i.startTracking = function() {
                        this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLive_, Je), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLive_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked) : (this.one(this.player_, "play", this.handlePlay), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate)))
                    }, i.handleFirstTimeupdate = function() {
                        this.timeupdateSeen_ = !0, this.on(this.player_, "seeked", this.handleSeeked)
                    }, i.handleSeeked = function() {
                        var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
                        this.seekedBehindLive_ = !this.skipNextSeeked_ && e > 2, this.skipNextSeeked_ = !1, this.trackLive_()
                    }, i.handlePlay = function() {
                        this.one(this.player_, "timeupdate", this.seekToLiveEdge)
                    }, i.reset_ = function() {
                        this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = !0, this.timeupdateSeen_ = !1, this.seekedBehindLive_ = !1, this.skipNextSeeked_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLive_), this.off(this.player_, "seeked", this.handleSeeked), this.off(this.player_, "play", this.handlePlay), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate), this.off(this.player_, "timeupdate", this.seekToLiveEdge)
                    }, i.stopTracking = function() {
                        this.isTracking() && (this.reset_(), this.trigger("liveedgechange"))
                    }, i.seekableEnd = function() {
                        for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--;) t.push(e.end(i));
                        return t.length ? t.sort()[t.length - 1] : 1 / 0
                    }, i.seekableStart = function() {
                        for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--;) t.push(e.start(i));
                        return t.length ? t.sort()[0] : 0
                    }, i.liveWindow = function() {
                        var e = this.liveCurrentTime();
                        return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
                    }, i.isLive = function() {
                        return this.isTracking()
                    }, i.atLiveEdge = function() {
                        return !this.behindLiveEdge()
                    }, i.liveCurrentTime = function() {
                        return this.pastSeekEnd() + this.seekableEnd()
                    }, i.pastSeekEnd = function() {
                        var e = this.seekableEnd();
                        return -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e, this.pastSeekEnd_
                    }, i.behindLiveEdge = function() {
                        return this.behindLiveEdge_
                    }, i.isTracking = function() {
                        return "number" === typeof this.trackingInterval_
                    }, i.seekToLiveEdge = function() {
                        this.seekedBehindLive_ = !1, this.atLiveEdge() || (this.skipNextSeeked_ = !0, this.player_.currentTime(this.liveCurrentTime()))
                    }, i.dispose = function() {
                        this.off(a(), "visibilitychange", this.handleVisibilityChange), this.stopTracking(), e.prototype.dispose.call(this)
                    }, t
                }(Tt);
            Tt.registerComponent("LiveTracker", br);
            var Sr, kr = function(e) {
                    var t = e.el();
                    if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
                    var i = e.$$("source"),
                        n = [],
                        r = "";
                    if (!i.length) return !1;
                    for (var s = 0; s < i.length; s++) {
                        var a = i[s].src;
                        a && -1 === n.indexOf(a) && n.push(a)
                    }
                    return !!n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0)
                },
                Cr = Object.defineProperty({}, "innerHTML", {
                    get: function() {
                        return this.cloneNode(!0).innerHTML
                    },
                    set: function(e) {
                        var t = a().createElement(this.nodeName.toLowerCase());
                        t.innerHTML = e;
                        for (var i = a().createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
                        return this.innerText = "", r().Element.prototype.appendChild.call(this, i), this.innerHTML
                    }
                }),
                Er = function(e, t) {
                    for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++);
                    return i.enumerable = !0, i.configurable = !0, i
                },
                wr = function(e) {
                    var t = e.el();
                    if (!t.resetSourceWatch_) {
                        var i = {},
                            n = function(e) {
                                return Er([e.el(), r().HTMLMediaElement.prototype, r().Element.prototype, Cr], "innerHTML")
                            }(e),
                            s = function(i) {
                                return function() {
                                    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                                    var a = i.apply(t, r);
                                    return kr(e), a
                                }
                            };
                        ["append", "appendChild", "insertAdjacentHTML"].forEach((function(e) {
                            t[e] && (i[e] = t[e], t[e] = s(i[e]))
                        })), Object.defineProperty(t, "innerHTML", mt(n, {
                            set: s(n.set)
                        })), t.resetSourceWatch_ = function() {
                            t.resetSourceWatch_ = null, Object.keys(i).forEach((function(e) {
                                t[e] = i[e]
                            })), Object.defineProperty(t, "innerHTML", n)
                        }, e.one("sourceset", t.resetSourceWatch_)
                    }
                },
                Ir = Object.defineProperty({}, "src", {
                    get: function() {
                        return this.hasAttribute("src") ? bi(r().Element.prototype.getAttribute.call(this, "src")) : ""
                    },
                    set: function(e) {
                        return r().Element.prototype.setAttribute.call(this, "src", e), e
                    }
                }),
                Pr = function(e) {
                    if (e.featuresSourceset) {
                        var t = e.el();
                        if (!t.resetSourceset_) {
                            var i = function(e) {
                                    return Er([e.el(), r().HTMLMediaElement.prototype, Ir], "src")
                                }(e),
                                n = t.setAttribute,
                                s = t.load;
                            Object.defineProperty(t, "src", mt(i, {
                                set: function(n) {
                                    var r = i.set.call(t, n);
                                    return e.triggerSourceset(t.src), r
                                }
                            })), t.setAttribute = function(i, r) {
                                var s = n.call(t, i, r);
                                return /src/i.test(i) && e.triggerSourceset(t.src), s
                            }, t.load = function() {
                                var i = s.call(t);
                                return kr(e) || (e.triggerSourceset(""), wr(e)), i
                            }, t.currentSrc ? e.triggerSourceset(t.currentSrc) : kr(e) || wr(e), t.resetSourceset_ = function() {
                                t.resetSourceset_ = null, t.load = s, t.setAttribute = n, Object.defineProperty(t, "src", i), t.resetSourceWatch_ && t.resetSourceWatch_()
                            }
                        }
                    }
                },
                Ar = function(e, t, i, n) {
                    void 0 === n && (n = !0);
                    var r = function(i) {
                            return Object.defineProperty(e, t, {
                                value: i,
                                enumerable: !0,
                                writable: !0
                            })
                        },
                        s = {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var e = i();
                                return r(e), e
                            }
                        };
                    return n && (s.set = r), Object.defineProperty(e, t, s)
                },
                Lr = function(e) {
                    function t(t, i) {
                        var n;
                        n = e.call(this, t, i) || this;
                        var r = t.source,
                            s = !1;
                        if (r && (n.el_.currentSrc !== r.src || t.tag && 3 === t.tag.initNetworkState_) ? n.setSource(r) : n.handleLateInit_(n.el_), t.enableSourceset && n.setupSourcesetHandling_(), n.el_.hasChildNodes()) {
                            for (var a = n.el_.childNodes, o = a.length, l = []; o--;) {
                                var u = a[o];
                                "track" === u.nodeName.toLowerCase() && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(u), n.remoteTextTracks().addTrack(u.track), n.textTracks().addTrack(u.track), s || n.el_.hasAttribute("crossorigin") || !ki(u.src) || (s = !0)) : l.push(u))
                            }
                            for (var c = 0; c < l.length; c++) n.el_.removeChild(l[c])
                        }
                        return n.proxyNativeTracks_(), n.featuresNativeTextTracks && s && H.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), n.restoreMetadataTracksInIOSNativePlayer_(), (Ut || Ft || Pt) && !0 === t.nativeControlsForTouch && n.setControls(!0), n.proxyWebkitFullscreen_(), n.triggerReady(), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.dispose = function() {
                        this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), t.disposeMediaElement(this.el_), this.options_ = null, e.prototype.dispose.call(this)
                    }, i.setupSourcesetHandling_ = function() {
                        Pr(this)
                    }, i.restoreMetadataTracksInIOSNativePlayer_ = function() {
                        var e, t = this.textTracks(),
                            i = function() {
                                e = [];
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    "metadata" === n.kind && e.push({
                                        track: n,
                                        storedMode: n.mode
                                    })
                                }
                            };
                        i(), t.addEventListener("change", i), this.on("dispose", (function() {
                            return t.removeEventListener("change", i)
                        }));
                        var n = function i() {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                "disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                            }
                            t.removeEventListener("change", i)
                        };
                        this.on("webkitbeginfullscreen", (function() {
                            t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n)
                        })), this.on("webkitendfullscreen", (function() {
                            t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n)
                        }))
                    }, i.overrideNative_ = function(e, t) {
                        var i = this;
                        if (t === this["featuresNative" + e + "Tracks"]) {
                            var n = e.toLowerCase();
                            this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach((function(e) {
                                i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e])
                            })), this["featuresNative" + e + "Tracks"] = !t, this[n + "TracksListeners_"] = null, this.proxyNativeTracksForType_(n)
                        }
                    }, i.overrideNativeAudioTracks = function(e) {
                        this.overrideNative_("Audio", e)
                    }, i.overrideNativeVideoTracks = function(e) {
                        this.overrideNative_("Video", e)
                    }, i.proxyNativeTracksForType_ = function(e) {
                        var t = this,
                            i = xi[e],
                            n = this.el()[i.getterName],
                            r = this[i.getterName]();
                        if (this["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
                            var s = {
                                    change: function(i) {
                                        var n = {
                                            type: "change",
                                            target: r,
                                            currentTarget: r,
                                            srcElement: r
                                        };
                                        r.trigger(n), "text" === e && t[Oi.remoteText.getterName]().trigger(n)
                                    },
                                    addtrack: function(e) {
                                        r.addTrack(e.track)
                                    },
                                    removetrack: function(e) {
                                        r.removeTrack(e.track)
                                    }
                                },
                                a = function() {
                                    for (var e = [], t = 0; t < r.length; t++) {
                                        for (var i = !1, s = 0; s < n.length; s++)
                                            if (n[s] === r[t]) {
                                                i = !0;
                                                break
                                            }
                                        i || e.push(r[t])
                                    }
                                    for (; e.length;) r.removeTrack(e.shift())
                                };
                            this[i.getterName + "Listeners_"] = s, Object.keys(s).forEach((function(e) {
                                var i = s[e];
                                n.addEventListener(e, i), t.on("dispose", (function(t) {
                                    return n.removeEventListener(e, i)
                                }))
                            })), this.on("loadstart", a), this.on("dispose", (function(e) {
                                return t.off("loadstart", a)
                            }))
                        }
                    }, i.proxyNativeTracks_ = function() {
                        var e = this;
                        xi.names.forEach((function(t) {
                            e.proxyNativeTracksForType_(t)
                        }))
                    }, i.createEl = function() {
                        var e = this.options_.tag;
                        if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                            if (e) {
                                var i = e.cloneNode(!0);
                                e.parentNode && e.parentNode.insertBefore(i, e), t.disposeMediaElement(e), e = i
                            } else {
                                e = a().createElement("video");
                                var n = mt({}, this.options_.tag && de(this.options_.tag));
                                Ut && !0 === this.options_.nativeControlsForTouch || delete n.controls, ce(e, K(n, {
                                    id: this.options_.techId,
                                    class: "vjs-tech"
                                }))
                            }
                            e.playerId = this.options_.playerId
                        }
                        "undefined" !== typeof this.options_.preload && pe(e, "preload", this.options_.preload), void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
                        for (var r = ["loop", "muted", "playsinline", "autoplay"], s = 0; s < r.length; s++) {
                            var o = r[s],
                                l = this.options_[o];
                            "undefined" !== typeof l && (l ? pe(e, o, o) : fe(e, o), e[o] = l)
                        }
                        return e
                    }, i.handleLateInit_ = function(e) {
                        if (0 !== e.networkState && 3 !== e.networkState) {
                            if (0 === e.readyState) {
                                var t = !1,
                                    i = function() {
                                        t = !0
                                    };
                                this.on("loadstart", i);
                                var n = function() {
                                    t || this.trigger("loadstart")
                                };
                                return this.on("loadedmetadata", n), void this.ready((function() {
                                    this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                                }))
                            }
                            var r = ["loadstart"];
                            r.push("loadedmetadata"), e.readyState >= 2 && r.push("loadeddata"), e.readyState >= 3 && r.push("canplay"), e.readyState >= 4 && r.push("canplaythrough"), this.ready((function() {
                                r.forEach((function(e) {
                                    this.trigger(e)
                                }), this)
                            }))
                        }
                    }, i.setScrubbing = function(e) {
                        this.isScrubbing_ = e
                    }, i.setCurrentTime = function(e) {
                        try {
                            this.isScrubbing_ && this.el_.fastSeek && jt ? this.el_.fastSeek(e) : this.el_.currentTime = e
                        } catch (t) {
                            H(t, "Video is not ready. (Video.js)")
                        }
                    }, i.duration = function() {
                        var e = this;
                        if (this.el_.duration === 1 / 0 && wt && xt && 0 === this.el_.currentTime) {
                            return this.on("timeupdate", (function t() {
                                e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", t))
                            })), NaN
                        }
                        return this.el_.duration || NaN
                    }, i.width = function() {
                        return this.el_.offsetWidth
                    }, i.height = function() {
                        return this.el_.offsetHeight
                    }, i.proxyWebkitFullscreen_ = function() {
                        var e = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var t = function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                i = function() {
                                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                                        isFullscreen: !0,
                                        nativeIOSFullscreen: !0
                                    }))
                                };
                            this.on("webkitbeginfullscreen", i), this.on("dispose", (function() {
                                e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                            }))
                        }
                    }, i.supportsFullScreen = function() {
                        if ("function" === typeof this.el_.webkitEnterFullScreen) {
                            var e = r().navigator && r().navigator.userAgent || "";
                            if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
                        }
                        return !1
                    }, i.enterFullScreen = function() {
                        var e = this.el_;
                        if (e.paused && e.networkState <= e.HAVE_METADATA) ti(this.el_.play()), this.setTimeout((function() {
                            e.pause();
                            try {
                                e.webkitEnterFullScreen()
                            } catch (t) {
                                this.trigger("fullscreenerror", t)
                            }
                        }), 0);
                        else try {
                            e.webkitEnterFullScreen()
                        } catch (t) {
                            this.trigger("fullscreenerror", t)
                        }
                    }, i.exitFullScreen = function() {
                        this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"))
                    }, i.requestPictureInPicture = function() {
                        return this.el_.requestPictureInPicture()
                    }, i.src = function(e) {
                        if (void 0 === e) return this.el_.src;
                        this.setSrc(e)
                    }, i.reset = function() {
                        t.resetMediaElement(this.el_)
                    }, i.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, i.setControls = function(e) {
                        this.el_.controls = !!e
                    }, i.addTextTrack = function(t, i, n) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, i, n) : e.prototype.addTextTrack.call(this, t, i, n)
                    }, i.createRemoteTextTrack = function(t) {
                        if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t);
                        var i = a().createElement("track");
                        return t.kind && (i.kind = t.kind), t.label && (i.label = t.label), (t.language || t.srclang) && (i.srclang = t.language || t.srclang), t.default && (i.default = t.default), t.id && (i.id = t.id), t.src && (i.src = t.src), i
                    }, i.addRemoteTextTrack = function(t, i) {
                        var n = e.prototype.addRemoteTextTrack.call(this, t, i);
                        return this.featuresNativeTextTracks && this.el().appendChild(n), n
                    }, i.removeRemoteTextTrack = function(t) {
                        if (e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)
                            for (var i = this.$$("track"), n = i.length; n--;) t !== i[n] && t !== i[n].track || this.el().removeChild(i[n])
                    }, i.getVideoPlaybackQuality = function() {
                        if ("function" === typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                        var e = {};
                        return "undefined" !== typeof this.el().webkitDroppedFrameCount && "undefined" !== typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), r().performance && "function" === typeof r().performance.now ? e.creationTime = r().performance.now() : r().performance && r().performance.timing && "number" === typeof r().performance.timing.navigationStart && (e.creationTime = r().Date.now() - r().performance.timing.navigationStart), e
                    }, t
                }(Mi);
            Ar(Lr, "TEST_VID", (function() {
                if (Z()) {
                    var e = a().createElement("video"),
                        t = a().createElement("track");
                    return t.kind = "captions", t.srclang = "en", t.label = "English", e.appendChild(t), e
                }
            })), Lr.isSupported = function() {
                try {
                    Lr.TEST_VID.volume = .5
                } catch (e) {
                    return !1
                }
                return !(!Lr.TEST_VID || !Lr.TEST_VID.canPlayType)
            }, Lr.canPlayType = function(e) {
                return Lr.TEST_VID.canPlayType(e)
            }, Lr.canPlaySource = function(e, t) {
                return Lr.canPlayType(e.type)
            }, Lr.canControlVolume = function() {
                try {
                    var e = Lr.TEST_VID.volume;
                    return Lr.TEST_VID.volume = e / 2 + .1, e !== Lr.TEST_VID.volume
                } catch (t) {
                    return !1
                }
            }, Lr.canMuteVolume = function() {
                try {
                    var e = Lr.TEST_VID.muted;
                    return Lr.TEST_VID.muted = !e, Lr.TEST_VID.muted ? pe(Lr.TEST_VID, "muted", "muted") : fe(Lr.TEST_VID, "muted"), e !== Lr.TEST_VID.muted
                } catch (t) {
                    return !1
                }
            }, Lr.canControlPlaybackRate = function() {
                if (wt && xt && Ot < 58) return !1;
                try {
                    var e = Lr.TEST_VID.playbackRate;
                    return Lr.TEST_VID.playbackRate = e / 2 + .1, e !== Lr.TEST_VID.playbackRate
                } catch (t) {
                    return !1
                }
            }, Lr.canOverrideAttributes = function() {
                try {
                    var e = function() {};
                    Object.defineProperty(a().createElement("video"), "src", {
                        get: e,
                        set: e
                    }), Object.defineProperty(a().createElement("audio"), "src", {
                        get: e,
                        set: e
                    }), Object.defineProperty(a().createElement("video"), "innerHTML", {
                        get: e,
                        set: e
                    }), Object.defineProperty(a().createElement("audio"), "innerHTML", {
                        get: e,
                        set: e
                    })
                } catch (t) {
                    return !1
                }
                return !0
            }, Lr.supportsNativeTextTracks = function() {
                return jt || Bt && xt
            }, Lr.supportsNativeVideoTracks = function() {
                return !(!Lr.TEST_VID || !Lr.TEST_VID.videoTracks)
            }, Lr.supportsNativeAudioTracks = function() {
                return !(!Lr.TEST_VID || !Lr.TEST_VID.audioTracks)
            }, Lr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [
                ["featuresVolumeControl", "canControlVolume"],
                ["featuresMuteControl", "canMuteVolume"],
                ["featuresPlaybackRate", "canControlPlaybackRate"],
                ["featuresSourceset", "canOverrideAttributes"],
                ["featuresNativeTextTracks", "supportsNativeTextTracks"],
                ["featuresNativeVideoTracks", "supportsNativeVideoTracks"],
                ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]
            ].forEach((function(e) {
                var t = e[0],
                    i = e[1];
                Ar(Lr.prototype, t, (function() {
                    return Lr[i]()
                }), !0)
            })), Lr.prototype.movingMediaElementInDOM = !Bt, Lr.prototype.featuresFullscreenResize = !0, Lr.prototype.featuresProgressEvents = !0, Lr.prototype.featuresTimeupdateEvents = !0, Lr.patchCanPlayType = function() {
                It >= 4 && !At && !xt && (Sr = Lr.TEST_VID && Lr.TEST_VID.constructor.prototype.canPlayType, Lr.TEST_VID.constructor.prototype.canPlayType = function(e) {
                    return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ? "maybe" : Sr.call(this, e)
                })
            }, Lr.unpatchCanPlayType = function() {
                var e = Lr.TEST_VID.constructor.prototype.canPlayType;
                return Sr && (Lr.TEST_VID.constructor.prototype.canPlayType = Sr), e
            }, Lr.patchCanPlayType(), Lr.disposeMediaElement = function(e) {
                if (e) {
                    for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                    e.removeAttribute("src"), "function" === typeof e.load && function() {
                        try {
                            e.load()
                        } catch (t) {}
                    }()
                }
            }, Lr.resetMediaElement = function(e) {
                if (e) {
                    for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
                    e.removeAttribute("src"), "function" === typeof e.load && function() {
                        try {
                            e.load()
                        } catch (t) {}
                    }()
                }
            }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach((function(e) {
                Lr.prototype[e] = function() {
                    return this.el_[e] || this.el_.hasAttribute(e)
                }
            })), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach((function(e) {
                Lr.prototype["set" + ft(e)] = function(t) {
                    this.el_[e] = t, t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
                }
            })), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach((function(e) {
                Lr.prototype[e] = function() {
                    return this.el_[e]
                }
            })), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach((function(e) {
                Lr.prototype["set" + ft(e)] = function(t) {
                    this.el_[e] = t
                }
            })), ["pause", "load", "play"].forEach((function(e) {
                Lr.prototype[e] = function() {
                    return this.el_[e]()
                }
            })), Mi.withSourceHandlers(Lr), Lr.nativeSourceHandler = {}, Lr.nativeSourceHandler.canPlayType = function(e) {
                try {
                    return Lr.TEST_VID.canPlayType(e)
                } catch (t) {
                    return ""
                }
            }, Lr.nativeSourceHandler.canHandleSource = function(e, t) {
                if (e.type) return Lr.nativeSourceHandler.canPlayType(e.type);
                if (e.src) {
                    var i = Si(e.src);
                    return Lr.nativeSourceHandler.canPlayType("video/" + i)
                }
                return ""
            }, Lr.nativeSourceHandler.handleSource = function(e, t, i) {
                t.setSrc(e.src)
            }, Lr.nativeSourceHandler.dispose = function() {}, Lr.registerSourceHandler(Lr.nativeSourceHandler), Mi.registerTech("Html5", Lr);
            var xr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
                Or = {
                    canplay: "CanPlay",
                    canplaythrough: "CanPlayThrough",
                    playing: "Playing",
                    seeked: "Seeked"
                },
                Dr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
                Mr = {};
            Dr.forEach((function(e) {
                var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
                Mr[e] = "vjs-layout-" + t
            }));
            var Rr = {
                    tiny: 210,
                    xsmall: 320,
                    small: 425,
                    medium: 768,
                    large: 1440,
                    xlarge: 2560,
                    huge: 1 / 0
                },
                Ur = function(e) {
                    function t(i, n, r) {
                        var s;
                        if (i.id = i.id || n.id || "vjs_video_" + Fe(), (n = K(t.getTagSettings(i), n)).initChildren = !1, n.createEl = !1, n.evented = !1, n.reportTouchActivity = !1, !n.language)
                            if ("function" === typeof i.closest) {
                                var o = i.closest("[lang]");
                                o && o.getAttribute && (n.language = o.getAttribute("lang"))
                            } else
                                for (var l = i; l && 1 === l.nodeType;) {
                                    if (de(l).hasOwnProperty("lang")) {
                                        n.language = l.getAttribute("lang");
                                        break
                                    }
                                    l = l.parentNode
                                }
                        if ((s = e.call(this, null, n, r) || this).boundDocumentFullscreenChange_ = Ze(c()(s), s.documentFullscreenChange_), s.boundFullWindowOnEscKey_ = Ze(c()(s), s.fullWindowOnEscKey), s.isFullscreen_ = !1, s.log = V(s.id_), s.fsApi_ = Kt, s.isPosterFromTech_ = !1, s.queuedCallbacks_ = [], s.isReady_ = !1, s.hasStarted_ = !1, s.userActive_ = !1, s.debugEnabled_ = !1, !s.options_ || !s.options_.techOrder || !s.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        if (s.tag = i, s.tagAttributes = i && de(i), s.language(s.options_.language), n.languages) {
                            var u = {};
                            Object.getOwnPropertyNames(n.languages).forEach((function(e) {
                                u[e.toLowerCase()] = n.languages[e]
                            })), s.languages_ = u
                        } else s.languages_ = t.prototype.options_.languages;
                        s.resetCache_(), s.poster_ = n.poster || "", s.controls_ = !!n.controls, i.controls = !1, i.removeAttribute("controls"), s.changingSrc_ = !1, s.playCallbacks_ = [], s.playTerminatedQueue_ = [], i.hasAttribute("autoplay") ? s.autoplay(!0) : s.autoplay(s.options_.autoplay), n.plugins && Object.keys(n.plugins).forEach((function(e) {
                            if ("function" !== typeof s[e]) throw new Error('plugin "' + e + '" does not exist')
                        })), s.scrubbing_ = !1, s.el_ = s.createEl(), ct(c()(s), {
                            eventBusKey: "el_"
                        }), s.fsApi_.requestFullscreen && (ze(a(), s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_), s.on(s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_)), s.fluid_ && s.on("playerreset", s.updateStyleEl_);
                        var d = mt(s.options_);
                        n.plugins && Object.keys(n.plugins).forEach((function(e) {
                            s[e](n.plugins[e])
                        })), n.debug && s.debug(!0), s.options_.playerOptions = d, s.middleware_ = [], s.initChildren(), s.isAudio("audio" === i.nodeName.toLowerCase()), s.controls() ? s.addClass("vjs-controls-enabled") : s.addClass("vjs-controls-disabled"), s.el_.setAttribute("role", "region"), s.isAudio() ? s.el_.setAttribute("aria-label", s.localize("Audio Player")) : s.el_.setAttribute("aria-label", s.localize("Video Player")), s.isAudio() && s.addClass("vjs-audio"), s.flexNotSupported_() && s.addClass("vjs-no-flex"), Ut && s.addClass("vjs-touch-enabled"), Bt || s.addClass("vjs-workinghover"), t.players[s.id_] = c()(s);
                        var h = j.split(".")[0];
                        return s.addClass("vjs-v" + h), s.userActive(!0), s.reportUserActivity(), s.one("play", s.listenForUserActivity_), s.on("stageclick", s.handleStageClick_), s.on("keydown", s.handleKeyDown), s.breakpoints(s.options_.breakpoints), s.responsive(s.options_.responsive), s
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.dispose = function() {
                        var i = this;
                        this.trigger("dispose"), this.off("dispose"), Ge(a(), this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), Ge(a(), "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), Ui[this.id()] = null, Di.names.forEach((function(e) {
                            var t = Di[e],
                                n = i[t.getterName]();
                            n && n.off && n.off()
                        })), e.prototype.dispose.call(this)
                    }, i.createEl = function() {
                        var t, i = this.tag,
                            n = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"),
                            s = "video-js" === this.tag.tagName.toLowerCase();
                        n ? t = this.el_ = i.parentNode : s || (t = this.el_ = e.prototype.createEl.call(this, "div"));
                        var o = de(i);
                        if (s) {
                            for (t = this.el_ = i, i = this.tag = a().createElement("video"); t.children.length;) i.appendChild(t.firstChild);
                            ae(t, "video-js") || oe(t, "video-js"), t.appendChild(i), n = this.playerElIngest_ = t, Object.keys(t).forEach((function(e) {
                                try {
                                    i[e] = t[e]
                                } catch (n) {}
                            }))
                        }
                        if (i.setAttribute("tabindex", "-1"), o.tabindex = "-1", (Dt || xt && Rt) && (i.setAttribute("role", "application"), o.role = "application"), i.removeAttribute("width"), i.removeAttribute("height"), "width" in o && delete o.width, "height" in o && delete o.height, Object.getOwnPropertyNames(o).forEach((function(e) {
                                s && "class" === e || t.setAttribute(e, o[e]), s && i.setAttribute(e, o[e])
                            })), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = t.player = this, this.addClass("vjs-paused"), !0 !== r().VIDEOJS_NO_DYNAMIC_STYLE) {
                            this.styleEl_ = Re("vjs-styles-dimensions");
                            var l = Ie(".vjs-styles-defaults"),
                                u = Ie("head");
                            u.insertBefore(this.styleEl_, l ? l.nextSibling : u.firstChild)
                        }
                        this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
                        for (var c = i.getElementsByTagName("a"), d = 0; d < c.length; d++) {
                            var h = c.item(d);
                            oe(h, "vjs-hidden"), h.setAttribute("hidden", "hidden")
                        }
                        return i.initNetworkState_ = i.networkState, i.parentNode && !n && i.parentNode.insertBefore(t, i), se(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_), this.el_ = t, t
                    }, i.crossOrigin = function(e) {
                        if (!e) return this.techGet_("crossOrigin");
                        "anonymous" === e || "use-credentials" === e ? this.techCall_("setCrossOrigin", e) : H.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"')
                    }, i.width = function(e) {
                        return this.dimension("width", e)
                    }, i.height = function(e) {
                        return this.dimension("height", e)
                    }, i.dimension = function(e, t) {
                        var i = e + "_";
                        if (void 0 === t) return this[i] || 0;
                        if ("" === t || "auto" === t) return this[i] = void 0, void this.updateStyleEl_();
                        var n = parseFloat(t);
                        isNaN(n) ? H.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n, this.updateStyleEl_())
                    }, i.fluid = function(e) {
                        if (void 0 === e) return !!this.fluid_;
                        var t, i;
                        this.fluid_ = !!e, it(this) && this.off("playerreset", this.updateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(!1), it(t = function() {
                            this.on("playerreset", this.updateStyleEl_)
                        }) ? i() : (t.eventedCallbacks || (t.eventedCallbacks = []), t.eventedCallbacks.push(i))) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                    }, i.fill = function(e) {
                        if (void 0 === e) return !!this.fill_;
                        this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
                    }, i.aspectRatio = function(e) {
                        if (void 0 === e) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                    }, i.updateStyleEl_ = function() {
                        if (!0 !== r().VIDEOJS_NO_DYNAMIC_STYLE) {
                            var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                                s = n[1] / n[0];
                            e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / s : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * s, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Ue(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * s + "%;\n      }\n    ")
                        } else {
                            var a = "number" === typeof this.width_ ? this.width_ : this.options_.width,
                                o = "number" === typeof this.height_ ? this.height_ : this.options_.height,
                                l = this.tech_ && this.tech_.el();
                            l && (a >= 0 && (l.width = a), o >= 0 && (l.height = o))
                        }
                    }, i.loadTech_ = function(e, t) {
                        var i = this;
                        this.tech_ && this.unloadTech_();
                        var n = ft(e),
                            r = e.charAt(0).toLowerCase() + e.slice(1);
                        "Html5" !== n && this.tag && (Mi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                        var s = {
                            source: t,
                            autoplay: "string" !== typeof this.autoplay() && this.autoplay(),
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + r + "_api",
                            playsinline: this.options_.playsinline,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            disablePictureInPicture: this.options_.disablePictureInPicture,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            playerElIngest: this.playerElIngest_ || !1,
                            "vtt.js": this.options_["vtt.js"],
                            canOverridePoster: !!this.options_.techCanOverridePoster,
                            enableSourceset: this.options_.enableSourceset,
                            Promise: this.options_.Promise
                        };
                        Di.names.forEach((function(e) {
                            var t = Di[e];
                            s[t.getterName] = i[t.privateName]
                        })), K(s, this.options_[n]), K(s, this.options_[r]), K(s, this.options_[e.toLowerCase()]), this.tag && (s.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime);
                        var a = Mi.getTech(e);
                        if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                        this.tech_ = new a(s), this.tech_.ready(Ze(this, this.handleTechReady_), !0), ri(this.textTracksJson_ || [], this.tech_), xr.forEach((function(e) {
                            i.on(i.tech_, e, i["handleTech" + ft(e) + "_"])
                        })), Object.keys(Or).forEach((function(e) {
                            i.on(i.tech_, e, (function(t) {
                                0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                                    callback: i["handleTech" + Or[e] + "_"].bind(i),
                                    event: t
                                }) : i["handleTech" + Or[e] + "_"](t)
                            }))
                        })), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "fullscreenerror", this.handleTechFullscreenError_), this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_), this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || se(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, i.unloadTech_ = function() {
                        var e = this;
                        Di.names.forEach((function(t) {
                            var i = Di[t];
                            e[i.privateName] = e[i.getterName]()
                        })), this.textTracksJson_ = ni(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                    }, i.tech = function(e) {
                        return void 0 === e && H.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_
                    }, i.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mouseup", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, i.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mouseup", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
                    }, i.handleTechReady_ = function() {
                        this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
                    }, i.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
                    }, i.manualAutoplay_ = function(e) {
                        var t = this;
                        if (this.tech_ && "string" === typeof e) {
                            var i, n = function() {
                                var e = t.muted();
                                t.muted(!0);
                                var i = function() {
                                    t.muted(e)
                                };
                                t.playTerminatedQueue_.push(i);
                                var n = t.play();
                                if (ei(n)) return n.catch(i)
                            };
                            if ("any" === e && !0 !== this.muted() ? ei(i = this.play()) && (i = i.catch(n)) : i = "muted" === e && !0 !== this.muted() ? n() : this.play(), ei(i)) return i.then((function() {
                                t.trigger({
                                    type: "autoplay-success",
                                    autoplay: e
                                })
                            })).catch((function(i) {
                                t.trigger({
                                    type: "autoplay-failure",
                                    autoplay: e
                                })
                            }))
                        }
                    }, i.updateSourceCaches_ = function(e) {
                        void 0 === e && (e = "");
                        var t = e,
                            i = "";
                        "string" !== typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function(e, t) {
                            if (!t) return "";
                            if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                            var i = e.cache_.sources.filter((function(e) {
                                return e.src === t
                            }));
                            if (i.length) return i[0].type;
                            for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                                var s = n[r];
                                if (s.type && s.src && s.src === t) return s.type
                            }
                            return Gi(t)
                        }(this, t)), this.cache_.source = mt({}, e, {
                            src: t,
                            type: i
                        });
                        for (var n = this.cache_.sources.filter((function(e) {
                                return e.src && e.src === t
                            })), r = [], s = this.$$("source"), a = [], o = 0; o < s.length; o++) {
                            var l = de(s[o]);
                            r.push(l), l.src && l.src === t && a.push(l.src)
                        }
                        a.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
                    }, i.handleTechSourceset_ = function(e) {
                        var t = this;
                        if (!this.changingSrc_) {
                            var i = function(e) {
                                    return t.updateSourceCaches_(e)
                                },
                                n = this.currentSource().src,
                                r = e.src;
                            n && !/^blob:/.test(n) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== n) && (i = function() {}), i(r), e.src || this.tech_.any(["sourceset", "loadstart"], (function(e) {
                                if ("sourceset" !== e.type) {
                                    var i = t.techGet("currentSrc");
                                    t.lastSource_.tech = i, t.updateSourceCaches_(i)
                                }
                            }))
                        }
                        this.lastSource_ = {
                            player: this.currentSource().src,
                            tech: e.src
                        }, this.trigger({
                            src: e.src,
                            type: "sourceset"
                        })
                    }, i.hasStarted = function(e) {
                        if (void 0 === e) return this.hasStarted_;
                        e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                    }, i.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, i.handleTechRateChange_ = function() {
                        this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach((function(e) {
                            return e.callback(e.event)
                        })), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                    }, i.handleTechWaiting_ = function() {
                        var e = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting");
                        var t = this.currentTime();
                        this.on("timeupdate", (function i() {
                            t !== e.currentTime() && (e.removeClass("vjs-waiting"), e.off("timeupdate", i))
                        }))
                    }, i.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, i.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, i.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, i.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, i.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked")
                    }, i.handleTechFirstPlay_ = function() {
                        this.options_.starttime && (H.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, i.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, i.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, i.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, i.handleTechClick_ = function(e) {
                        Ee(e) && this.controls_ && (this.paused() ? ti(this.play()) : this.pause())
                    }, i.handleTechDoubleClick_ = function(e) {
                        this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (function(t) {
                            return t.contains(e.target)
                        })) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" === typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
                    }, i.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, i.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, i.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, i.handleTechTouchEnd_ = function(e) {
                        e.preventDefault()
                    }, i.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, i.toggleFullscreenClass_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, i.documentFullscreenChange_ = function(e) {
                        var t = e.target.player;
                        if (!t || t === this) {
                            var i = this.el(),
                                n = a()[this.fsApi_.fullscreenElement] === i;
                            !n && i.matches ? n = i.matches(":" + this.fsApi_.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)), this.isFullscreen(n)
                        }
                    }, i.handleTechFullscreenChange_ = function(e, t) {
                        t && (t.nativeIOSFullscreen && this.toggleClass("vjs-ios-native-fs"), this.isFullscreen(t.isFullscreen))
                    }, i.handleTechFullscreenError_ = function(e, t) {
                        this.trigger("fullscreenerror", t)
                    }, i.togglePictureInPictureClass_ = function() {
                        this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
                    }, i.handleTechEnterPictureInPicture_ = function(e) {
                        this.isInPictureInPicture(!0)
                    }, i.handleTechLeavePictureInPicture_ = function(e) {
                        this.isInPictureInPicture(!1)
                    }, i.handleTechError_ = function() {
                        var e = this.tech_.error();
                        this.error(e)
                    }, i.handleTechTextData_ = function() {
                        var e = null;
                        arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e)
                    }, i.getCache = function() {
                        return this.cache_
                    }, i.resetCache_ = function() {
                        this.cache_ = {
                            currentTime: 0,
                            initTime: 0,
                            inactivityTimeout: this.options_.inactivityTimeout,
                            duration: NaN,
                            lastVolume: 1,
                            lastPlaybackRate: this.defaultPlaybackRate(),
                            media: null,
                            src: "",
                            source: {},
                            sources: [],
                            volume: 1
                        }
                    }, i.techCall_ = function(e, t) {
                        this.ready((function() {
                            if (e in qi) return function(e, t, i, n) {
                                return t[i](e.reduce(Vi(i), n))
                            }(this.middleware_, this.tech_, e, t);
                            if (e in Hi) return Bi(this.middleware_, this.tech_, e, t);
                            try {
                                this.tech_ && this.tech_[e](t)
                            } catch (i) {
                                throw H(i), i
                            }
                        }), !0)
                    }, i.techGet_ = function(e) {
                        if (this.tech_ && this.tech_.isReady_) {
                            if (e in ji) return function(e, t, i) {
                                return e.reduceRight(Vi(i), t[i]())
                            }(this.middleware_, this.tech_, e);
                            if (e in Hi) return Bi(this.middleware_, this.tech_, e);
                            try {
                                return this.tech_[e]()
                            } catch (t) {
                                if (void 0 === this.tech_[e]) throw H("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t;
                                if ("TypeError" === t.name) throw H("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1, t;
                                throw H(t), t
                            }
                        }
                    }, i.play = function() {
                        var e = this,
                            t = this.options_.Promise || r().Promise;
                        return t ? new t((function(t) {
                            e.play_(t)
                        })) : this.play_()
                    }, i.play_ = function(e) {
                        var t = this;
                        void 0 === e && (e = ti), this.playCallbacks_.push(e);
                        var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
                        if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !i) return this.waitToPlay_ = function(e) {
                            t.play_()
                        }, this.one(["ready", "loadstart"], this.waitToPlay_), void(i || !jt && !Bt || this.load());
                        var n = this.techGet_("play");
                        null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
                    }, i.runPlayTerminatedQueue_ = function() {
                        var e = this.playTerminatedQueue_.slice(0);
                        this.playTerminatedQueue_ = [], e.forEach((function(e) {
                            e()
                        }))
                    }, i.runPlayCallbacks_ = function(e) {
                        var t = this.playCallbacks_.slice(0);
                        this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.forEach((function(t) {
                            t(e)
                        }))
                    }, i.pause = function() {
                        this.techCall_("pause")
                    }, i.paused = function() {
                        return !1 !== this.techGet_("paused")
                    }, i.played = function() {
                        return this.techGet_("played") || Wt(0, 0)
                    }, i.scrubbing = function(e) {
                        if ("undefined" === typeof e) return this.scrubbing_;
                        this.scrubbing_ = !!e, this.techCall_("setScrubbing", this.scrubbing_), e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                    }, i.currentTime = function(e) {
                        return "undefined" !== typeof e ? (e < 0 && (e = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e), void(this.cache_.initTime = 0)) : (this.cache_.initTime = e, this.off("canplay", this.applyInitTime_), void this.one("canplay", this.applyInitTime_))) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, i.applyInitTime_ = function() {
                        this.currentTime(this.cache_.initTime)
                    }, i.duration = function(e) {
                        if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                        (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"))
                    }, i.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, i.remainingTimeDisplay = function() {
                        return Math.floor(this.duration()) - Math.floor(this.currentTime())
                    }, i.buffered = function() {
                        var e = this.techGet_("buffered");
                        return e && e.length || (e = Wt(0, 0)), e
                    }, i.bufferedPercent = function() {
                        return zt(this.buffered(), this.duration())
                    }, i.bufferedEnd = function() {
                        var e = this.buffered(),
                            t = this.duration(),
                            i = e.end(e.length - 1);
                        return i > t && (i = t), i
                    }, i.volume = function(e) {
                        var t;
                        return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                    }, i.muted = function(e) {
                        if (void 0 === e) return this.techGet_("muted") || !1;
                        this.techCall_("setMuted", e)
                    }, i.defaultMuted = function(e) {
                        return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
                    }, i.lastVolume_ = function(e) {
                        if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                        this.cache_.lastVolume = e
                    }, i.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, i.isFullscreen = function(e) {
                        if (void 0 !== e) {
                            var t = this.isFullscreen_;
                            return this.isFullscreen_ = Boolean(e), this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), void this.toggleFullscreenClass_()
                        }
                        return this.isFullscreen_
                    }, i.requestFullscreen = function(e) {
                        var t = this.options_.Promise || r().Promise;
                        if (t) {
                            var i = this;
                            return new t((function(t, n) {
                                function r() {
                                    i.off("fullscreenerror", a), i.off("fullscreenchange", s)
                                }

                                function s() {
                                    r(), t()
                                }

                                function a(e, t) {
                                    r(), n(t)
                                }
                                i.one("fullscreenchange", s), i.one("fullscreenerror", a);
                                var o = i.requestFullscreenHelper_(e);
                                if (o) return o.then(r, r), o
                            }))
                        }
                        return this.requestFullscreenHelper_()
                    }, i.requestFullscreenHelper_ = function(e) {
                        var t, i = this;
                        if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) {
                            var n = this.el_[this.fsApi_.requestFullscreen](t);
                            return n && n.then((function() {
                                return i.isFullscreen(!0)
                            }), (function() {
                                return i.isFullscreen(!1)
                            })), n
                        }
                        this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : this.enterFullWindow()
                    }, i.exitFullscreen = function() {
                        var e = this.options_.Promise || r().Promise;
                        if (e) {
                            var t = this;
                            return new e((function(e, i) {
                                function n() {
                                    t.off("fullscreenerror", s), t.off("fullscreenchange", r)
                                }

                                function r() {
                                    n(), e()
                                }

                                function s(e, t) {
                                    n(), i(t)
                                }
                                t.one("fullscreenchange", r), t.one("fullscreenerror", s);
                                var a = t.exitFullscreenHelper_();
                                if (a) return a.then(n, n), a
                            }))
                        }
                        return this.exitFullscreenHelper_()
                    }, i.exitFullscreenHelper_ = function() {
                        var e = this;
                        if (this.fsApi_.requestFullscreen) {
                            var t = a()[this.fsApi_.exitFullscreen]();
                            return t && t.then((function() {
                                return e.isFullscreen(!1)
                            })), t
                        }
                        this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : this.exitFullWindow()
                    }, i.enterFullWindow = function() {
                        this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = a().documentElement.style.overflow, ze(a(), "keydown", this.boundFullWindowOnEscKey_), a().documentElement.style.overflow = "hidden", oe(a().body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, i.fullWindowOnEscKey = function(e) {
                        g().isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                    }, i.exitFullWindow = function() {
                        this.isFullscreen(!1), this.isFullWindow = !1, Ge(a(), "keydown", this.boundFullWindowOnEscKey_), a().documentElement.style.overflow = this.docOrigOverflow, le(a().body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, i.disablePictureInPicture = function(e) {
                        if (void 0 === e) return this.techGet_("disablePictureInPicture");
                        this.techCall_("setDisablePictureInPicture", e), this.options_.disablePictureInPicture = e, this.trigger("disablepictureinpicturechanged")
                    }, i.isInPictureInPicture = function(e) {
                        return void 0 !== e ? (this.isInPictureInPicture_ = !!e, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_
                    }, i.requestPictureInPicture = function() {
                        if ("pictureInPictureEnabled" in a() && !1 === this.disablePictureInPicture()) return this.techGet_("requestPictureInPicture")
                    }, i.exitPictureInPicture = function() {
                        if ("pictureInPictureEnabled" in a()) return a().exitPictureInPicture()
                    }, i.handleKeyDown = function(e) {
                        var t = this.options_.userActions;
                        if (t && t.hotkeys) {
                            (function(e) {
                                var t = e.tagName.toLowerCase();
                                if (e.isContentEditable) return !0;
                                if ("input" === t) return -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type);
                                return -1 !== ["textarea"].indexOf(t)
                            })(this.el_.ownerDocument.activeElement) || ("function" === typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e))
                        }
                    }, i.handleHotkeys = function(e) {
                        var t = this.options_.userActions ? this.options_.userActions.hotkeys : {},
                            i = t.fullscreenKey,
                            n = void 0 === i ? function(e) {
                                return g().isEventKey(e, "f")
                            } : i,
                            r = t.muteKey,
                            s = void 0 === r ? function(e) {
                                return g().isEventKey(e, "m")
                            } : r,
                            o = t.playPauseKey,
                            l = void 0 === o ? function(e) {
                                return g().isEventKey(e, "k") || g().isEventKey(e, "Space")
                            } : o;
                        if (n.call(this, e)) {
                            e.preventDefault(), e.stopPropagation();
                            var u = Tt.getComponent("FullscreenToggle");
                            !1 !== a()[this.fsApi_.fullscreenEnabled] && u.prototype.handleClick.call(this, e)
                        } else if (s.call(this, e)) {
                            e.preventDefault(), e.stopPropagation(), Tt.getComponent("MuteToggle").prototype.handleClick.call(this, e)
                        } else if (l.call(this, e)) {
                            e.preventDefault(), e.stopPropagation(), Tt.getComponent("PlayToggle").prototype.handleClick.call(this, e)
                        }
                    }, i.canPlayType = function(e) {
                        for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                            var r = n[i],
                                s = Mi.getTech(r);
                            if (s || (s = Tt.getComponent(r)), s) {
                                if (s.isSupported() && (t = s.canPlayType(e))) return t
                            } else H.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, i.selectSource = function(e) {
                        var t, i = this,
                            n = this.options_.techOrder.map((function(e) {
                                return [e, Mi.getTech(e)]
                            })).filter((function(e) {
                                var t = e[0],
                                    i = e[1];
                                return i ? i.isSupported() : (H.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            })),
                            r = function(e, t, i) {
                                var n;
                                return e.some((function(e) {
                                    return t.some((function(t) {
                                        if (n = i(e, t)) return !0
                                    }))
                                })), n
                            },
                            s = function(e, t) {
                                var n = e[0];
                                if (e[1].canPlaySource(t, i.options_[n.toLowerCase()])) return {
                                    source: t,
                                    tech: n
                                }
                            };
                        return (this.options_.sourceOrder ? r(e, n, (t = s, function(e, i) {
                            return t(i, e)
                        })) : r(n, e, s)) || !1
                    }, i.src = function(e) {
                        var t = this;
                        if ("undefined" === typeof e) return this.cache_.src || "";
                        var i = Ki(e);
                        i.length ? (this.changingSrc_ = !0, this.cache_.sources = i, this.updateSourceCaches_(i[0]), Fi(this, i[0], (function(e, n) {
                            var r, s;
                            if (t.middleware_ = n, t.cache_.sources = i, t.updateSourceCaches_(e), t.src_(e)) return i.length > 1 ? t.src(i.slice(1)) : (t.changingSrc_ = !1, t.setTimeout((function() {
                                this.error({
                                    code: 4,
                                    message: this.localize(this.options_.notSupportedMessage)
                                })
                            }), 0), void t.triggerReady());
                            r = n, s = t.tech_, r.forEach((function(e) {
                                return e.setTech && e.setTech(s)
                            }))
                        }))) : this.setTimeout((function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }), 0)
                    }, i.src_ = function(e) {
                        var t, i, n = this,
                            r = this.selectSource([e]);
                        return !r || (t = r.tech, i = this.techName_, ft(t) !== ft(i) ? (this.changingSrc_ = !0, this.loadTech_(r.tech, r.source), this.tech_.ready((function() {
                            n.changingSrc_ = !1
                        })), !1) : (this.ready((function() {
                            this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                        }), !0), !1))
                    }, i.load = function() {
                        this.techCall_("load")
                    }, i.reset = function() {
                        var e = this,
                            t = this.options_.Promise || r().Promise;
                        this.paused() || !t ? this.doReset_() : ti(this.play().then((function() {
                            return e.doReset_()
                        })))
                    }, i.doReset_ = function() {
                        this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), it(this) && this.trigger("playerreset")
                    }, i.resetControlBarUI_ = function() {
                        this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
                    }, i.resetProgressBar_ = function() {
                        this.currentTime(0);
                        var e = this.controlBar,
                            t = e.durationDisplay,
                            i = e.remainingTimeDisplay;
                        t && t.updateContent(), i && i.updateContent()
                    }, i.resetPlaybackRate_ = function() {
                        this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
                    }, i.resetVolumeBar_ = function() {
                        this.volume(1), this.trigger("volumechange")
                    }, i.currentSources = function() {
                        var e = this.currentSource(),
                            t = [];
                        return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
                    }, i.currentSource = function() {
                        return this.cache_.source || {}
                    }, i.currentSrc = function() {
                        return this.currentSource() && this.currentSource().src || ""
                    }, i.currentType = function() {
                        return this.currentSource() && this.currentSource().type || ""
                    }, i.preload = function(e) {
                        return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload")
                    }, i.autoplay = function(e) {
                        if (void 0 === e) return this.options_.autoplay || !1;
                        var t;
                        "string" === typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = "undefined" === typeof t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
                    }, i.playsinline = function(e) {
                        return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
                    }, i.loop = function(e) {
                        return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop")
                    }, i.poster = function(e) {
                        if (void 0 === e) return this.poster_;
                        e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
                    }, i.handleTechPosterChange_ = function() {
                        if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                            var e = this.tech_.poster() || "";
                            e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                        }
                    }, i.controls = function(e) {
                        if (void 0 === e) return !!this.controls_;
                        e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                    }, i.usingNativeControls = function(e) {
                        if (void 0 === e) return !!this.usingNativeControls_;
                        e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                    }, i.error = function(e) {
                        if (void 0 === e) return this.error_ || null;
                        if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
                            var t = function() {
                                this.error(e)
                            };
                            return this.options_.suppressNotSupportedError = !1, this.any(["click", "touchstart"], t), void this.one("loadstart", (function() {
                                this.off(["click", "touchstart"], t)
                            }))
                        }
                        if (null === e) return this.error_ = e, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close());
                        this.error_ = new Jt(e), this.addClass("vjs-error"), H.error("(CODE:" + this.error_.code + " " + Jt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error")
                    }, i.reportUserActivity = function(e) {
                        this.userActivity_ = !0
                    }, i.userActive = function(e) {
                        if (void 0 === e) return this.userActive_;
                        if ((e = !!e) !== this.userActive_) {
                            if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                            this.tech_ && this.tech_.one("mousemove", (function(e) {
                                e.stopPropagation(), e.preventDefault()
                            })), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                        }
                    }, i.listenForUserActivity_ = function() {
                        var e, t, i, n = Ze(this, this.reportUserActivity),
                            r = function(t) {
                                n(), this.clearInterval(e)
                            };
                        this.on("mousedown", (function() {
                            n(), this.clearInterval(e), e = this.setInterval(n, 250)
                        })), this.on("mousemove", (function(e) {
                            e.screenX === t && e.screenY === i || (t = e.screenX, i = e.screenY, n())
                        })), this.on("mouseup", r), this.on("mouseleave", r);
                        var s, a = this.getChild("controlBar");
                        !a || Bt || wt || (a.on("mouseenter", (function(e) {
                            this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout, this.player().options_.inactivityTimeout = 0
                        })), a.on("mouseleave", (function(e) {
                            this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
                        }))), this.on("keydown", n), this.on("keyup", n), this.setInterval((function() {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s);
                                var e = this.options_.inactivityTimeout;
                                e <= 0 || (s = this.setTimeout((function() {
                                    this.userActivity_ || this.userActive(!1)
                                }), e))
                            }
                        }), 250)
                    }, i.playbackRate = function(e) {
                        if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                        this.techCall_("setPlaybackRate", e)
                    }, i.defaultPlaybackRate = function(e) {
                        return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                    }, i.isAudio = function(e) {
                        if (void 0 === e) return !!this.isAudio_;
                        this.isAudio_ = !!e
                    }, i.addTextTrack = function(e, t, i) {
                        if (this.tech_) return this.tech_.addTextTrack(e, t, i)
                    }, i.addRemoteTextTrack = function(e, t) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
                    }, i.removeRemoteTextTrack = function(e) {
                        void 0 === e && (e = {});
                        var t = e.track;
                        if (t || (t = e), this.tech_) return this.tech_.removeRemoteTextTrack(t)
                    }, i.getVideoPlaybackQuality = function() {
                        return this.techGet_("getVideoPlaybackQuality")
                    }, i.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, i.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, i.language = function(e) {
                        if (void 0 === e) return this.language_;
                        this.language_ = String(e).toLowerCase()
                    }, i.languages = function() {
                        return mt(t.prototype.options_.languages, this.languages_)
                    }, i.toJSON = function() {
                        var e = mt(this.options_),
                            t = e.tracks;
                        e.tracks = [];
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n = mt(n)).player = void 0, e.tracks[i] = n
                        }
                        return e
                    }, i.createModal = function(e, t) {
                        var i = this;
                        (t = t || {}).content = e || "";
                        var n = new si(this, t);
                        return this.addChild(n), n.on("dispose", (function() {
                            i.removeChild(n)
                        })), n.open(), n
                    }, i.updateCurrentBreakpoint_ = function() {
                        if (this.responsive())
                            for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Dr.length; i++) {
                                var n = Dr[i];
                                if (t <= this.breakpoints_[n]) {
                                    if (e === n) return;
                                    e && this.removeClass(Mr[e]), this.addClass(Mr[n]), this.breakpoint_ = n;
                                    break
                                }
                            }
                    }, i.removeCurrentBreakpoint_ = function() {
                        var e = this.currentBreakpointClass();
                        this.breakpoint_ = "", e && this.removeClass(e)
                    }, i.breakpoints = function(e) {
                        return void 0 === e || (this.breakpoint_ = "", this.breakpoints_ = K({}, Rr, e), this.updateCurrentBreakpoint_()), K(this.breakpoints_)
                    }, i.responsive = function(e) {
                        return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? (this.responsive_ = e, e ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
                    }, i.currentBreakpoint = function() {
                        return this.breakpoint_
                    }, i.currentBreakpointClass = function() {
                        return Mr[this.breakpoint_] || ""
                    }, i.loadMedia = function(e, t) {
                        var i = this;
                        if (e && "object" === typeof e) {
                            this.reset(), this.cache_.media = mt(e);
                            var n = this.cache_.media,
                                r = n.artwork,
                                s = n.poster,
                                a = n.src,
                                o = n.textTracks;
                            !r && s && (this.cache_.media.artwork = [{
                                src: s,
                                type: Gi(s)
                            }]), a && this.src(a), s && this.poster(s), Array.isArray(o) && o.forEach((function(e) {
                                return i.addRemoteTextTrack(e, !1)
                            })), this.ready(t)
                        }
                    }, i.getMedia = function() {
                        if (!this.cache_.media) {
                            var e = this.poster(),
                                t = {
                                    src: this.currentSources(),
                                    textTracks: Array.prototype.map.call(this.remoteTextTracks(), (function(e) {
                                        return {
                                            kind: e.kind,
                                            label: e.label,
                                            language: e.language,
                                            src: e.src
                                        }
                                    }))
                                };
                            return e && (t.poster = e, t.artwork = [{
                                src: t.poster,
                                type: Gi(t.poster)
                            }]), t
                        }
                        return mt(this.cache_.media)
                    }, t.getTagSettings = function(e) {
                        var t = {
                                sources: [],
                                tracks: []
                            },
                            i = de(e),
                            n = i["data-setup"];
                        if (ae(e, "vjs-fill") && (i.fill = !0), ae(e, "vjs-fluid") && (i.fluid = !0), null !== n) {
                            var r = f()(n || "{}"),
                                s = r[0],
                                a = r[1];
                            s && H.error(s), K(i, a)
                        }
                        if (K(t, i), e.hasChildNodes())
                            for (var o = e.childNodes, l = 0, u = o.length; l < u; l++) {
                                var c = o[l],
                                    d = c.nodeName.toLowerCase();
                                "source" === d ? t.sources.push(de(c)) : "track" === d && t.tracks.push(de(c))
                            }
                        return t
                    }, i.flexNotSupported_ = function() {
                        var e = a().createElement("i");
                        return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
                    }, i.debug = function(e) {
                        if (void 0 === e) return this.debugEnabled_;
                        e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1)
                    }, t
                }(Tt);
            Di.names.forEach((function(e) {
                var t = Di[e];
                Ur.prototype[t.getterName] = function() {
                    return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
                }
            })), Ur.prototype.crossorigin = Ur.prototype.crossOrigin, Ur.players = {};
            var Nr = r().navigator;
            Ur.prototype.options_ = {
                techOrder: Mi.defaultTechOrder_,
                html5: {},
                flash: {},
                inactivityTimeout: 2e3,
                playbackRates: [],
                liveui: !1,
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
                language: Nr && (Nr.languages && Nr.languages[0] || Nr.userLanguage || Nr.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media.",
                fullscreen: {
                    options: {
                        navigationUI: "hide"
                    }
                },
                breakpoints: {},
                responsive: !1
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach((function(e) {
                Ur.prototype[e] = function() {
                    return this.techGet_(e)
                }
            })), xr.forEach((function(e) {
                Ur.prototype["handleTech" + ft(e) + "_"] = function() {
                    return this.trigger(e)
                }
            })), Tt.registerComponent("Player", Ur);
            var Fr = "plugin",
                Br = {},
                jr = function(e) {
                    return Br.hasOwnProperty(e)
                },
                qr = function(e) {
                    return jr(e) ? Br[e] : void 0
                },
                Hr = function(e, t) {
                    e.activePlugins_ = e.activePlugins_ || {}, e.activePlugins_[t] = !0
                },
                Vr = function(e, t, i) {
                    var n = (i ? "before" : "") + "pluginsetup";
                    e.trigger(n, t), e.trigger(n + ":" + t.name, t)
                },
                Wr = function(e, t) {
                    return t.prototype.name = e,
                        function() {
                            Vr(this, {
                                name: e,
                                plugin: t,
                                instance: null
                            }, !0);
                            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            var s = S()(t, [this].concat(n));
                            return this[e] = function() {
                                return s
                            }, Vr(this, s.getEventHash()), s
                        }
                },
                zr = function() {
                    function e(t) {
                        if (this.constructor === e) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                        this.player = t, this.log || (this.log = this.player.log.createLogger(this.name)), ct(this), delete this.trigger, ht(this, this.constructor.defaultState), Hr(t, this.name), this.dispose = Ze(this, this.dispose), t.on("dispose", this.dispose)
                    }
                    var t = e.prototype;
                    return t.version = function() {
                        return this.constructor.VERSION
                    }, t.getEventHash = function(e) {
                        return void 0 === e && (e = {}), e.name = this.name, e.plugin = this.constructor, e.instance = this, e
                    }, t.trigger = function(e, t) {
                        return void 0 === t && (t = {}), Ke(this.eventBusEl_, e, this.getEventHash(t))
                    }, t.handleStateChanged = function(e) {}, t.dispose = function() {
                        var e = this.name,
                            t = this.player;
                        this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t.activePlugins_[e] = !1, this.player = this.state = null, t[e] = Wr(e, Br[e])
                    }, e.isBasic = function(t) {
                        var i = "string" === typeof t ? qr(t) : t;
                        return "function" === typeof i && !e.prototype.isPrototypeOf(i.prototype)
                    }, e.registerPlugin = function(t, i) {
                        if ("string" !== typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + ".");
                        if (jr(t)) H.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
                        else if (Ur.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
                        if ("function" !== typeof i) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof i + ".");
                        return Br[t] = i, t !== Fr && (e.isBasic(i) ? Ur.prototype[t] = function(e, t) {
                            var i = function() {
                                Vr(this, {
                                    name: e,
                                    plugin: t,
                                    instance: null
                                }, !0);
                                var i = t.apply(this, arguments);
                                return Hr(this, e), Vr(this, {
                                    name: e,
                                    plugin: t,
                                    instance: i
                                }), i
                            };
                            return Object.keys(t).forEach((function(e) {
                                i[e] = t[e]
                            })), i
                        }(t, i) : Ur.prototype[t] = Wr(t, i)), i
                    }, e.deregisterPlugin = function(e) {
                        if (e === Fr) throw new Error("Cannot de-register base plugin.");
                        jr(e) && (delete Br[e], delete Ur.prototype[e])
                    }, e.getPlugins = function(e) {
                        var t;
                        return void 0 === e && (e = Object.keys(Br)), e.forEach((function(e) {
                            var i = qr(e);
                            i && ((t = t || {})[e] = i)
                        })), t
                    }, e.getPluginVersion = function(e) {
                        var t = qr(e);
                        return t && t.VERSION || ""
                    }, e
                }();
            zr.getPlugin = qr, zr.BASE_PLUGIN_NAME = Fr, zr.registerPlugin(Fr, zr), Ur.prototype.usingPlugin = function(e) {
                return !!this.activePlugins_ && !0 === this.activePlugins_[e]
            }, Ur.prototype.hasPlugin = function(e) {
                return !!jr(e)
            };
            var Gr = function(e) {
                return 0 === e.indexOf("#") ? e.slice(1) : e
            };

            function Kr(e, t, i) {
                var n = Kr.getPlayer(e);
                if (n) return t && H.warn('Player "' + e + '" is already initialised. Options will not be applied.'), i && n.ready(i), n;
                var r = "string" === typeof e ? Ie("#" + Gr(e)) : e;
                if (!ee(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || H.warn("The element supplied is not included in the DOM"), t = t || {}, Kr.hooks("beforesetup").forEach((function(e) {
                    var i = e(r, mt(t));
                    Q(i) && !Array.isArray(i) ? t = mt(t, i) : H.error("please return an object in beforesetup hooks")
                }));
                var s = Tt.getComponent("Player");
                return n = new s(r, t, i), Kr.hooks("setup").forEach((function(e) {
                    return e(n)
                })), n
            }
            if (Kr.hooks_ = {}, Kr.hooks = function(e, t) {
                    return Kr.hooks_[e] = Kr.hooks_[e] || [], t && (Kr.hooks_[e] = Kr.hooks_[e].concat(t)), Kr.hooks_[e]
                }, Kr.hook = function(e, t) {
                    Kr.hooks(e, t)
                }, Kr.hookOnce = function(e, t) {
                    Kr.hooks(e, [].concat(t).map((function(t) {
                        return function i() {
                            return Kr.removeHook(e, i), t.apply(void 0, arguments)
                        }
                    })))
                }, Kr.removeHook = function(e, t) {
                    var i = Kr.hooks(e).indexOf(t);
                    return !(i <= -1) && (Kr.hooks_[e] = Kr.hooks_[e].slice(), Kr.hooks_[e].splice(i, 1), !0)
                }, !0 !== r().VIDEOJS_NO_DYNAMIC_STYLE && Z()) {
                var Qr = Ie(".vjs-styles-defaults");
                if (!Qr) {
                    Qr = Re("vjs-styles-defaults");
                    var Xr = Ie("head");
                    Xr && Xr.insertBefore(Qr, Xr.firstChild), Ue(Qr, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            Oe(1, Kr), Kr.VERSION = j, Kr.options = Ur.prototype.options_, Kr.getPlayers = function() {
                return Ur.players
            }, Kr.getPlayer = function(e) {
                var t, i = Ur.players;
                if ("string" === typeof e) {
                    var n = Gr(e),
                        r = i[n];
                    if (r) return r;
                    t = Ie("#" + n)
                } else t = e;
                if (ee(t)) {
                    var s = t,
                        a = s.player,
                        o = s.playerId;
                    if (a || i[o]) return a || i[o]
                }
            }, Kr.getAllPlayers = function() {
                return Object.keys(Ur.players).map((function(e) {
                    return Ur.players[e]
                })).filter(Boolean)
            }, Kr.players = Ur.players, Kr.getComponent = Tt.getComponent, Kr.registerComponent = function(e, t) {
                Mi.isTech(t) && H.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Tt.registerComponent.call(Tt, e, t)
            }, Kr.getTech = Mi.getTech, Kr.registerTech = Mi.registerTech, Kr.use = function(e, t) {
                Ri[e] = Ri[e] || [], Ri[e].push(t)
            }, Object.defineProperty(Kr, "middleware", {
                value: {},
                writeable: !1,
                enumerable: !0
            }), Object.defineProperty(Kr.middleware, "TERMINATOR", {
                value: Ni,
                writeable: !1,
                enumerable: !0
            }), Kr.browser = qt, Kr.TOUCH_ENABLED = Ut, Kr.extend = function(e, t) {
                void 0 === t && (t = {});
                var i = function() {
                        e.apply(this, arguments)
                    },
                    n = {};
                for (var r in "object" === typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), n = t) : "function" === typeof t && (i = t), C()(i, e), e && (i.super_ = e), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
                return i
            }, Kr.mergeOptions = mt, Kr.bind = Ze, Kr.registerPlugin = zr.registerPlugin, Kr.deregisterPlugin = zr.deregisterPlugin, Kr.plugin = function(e, t) {
                return H.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), zr.registerPlugin(e, t)
            }, Kr.getPlugins = zr.getPlugins, Kr.getPlugin = zr.getPlugin, Kr.getPluginVersion = zr.getPluginVersion, Kr.addLanguage = function(e, t) {
                var i;
                return e = ("" + e).toLowerCase(), Kr.options.languages = mt(Kr.options.languages, ((i = {})[e] = t, i)), Kr.options.languages[e]
            }, Kr.log = H, Kr.createLogger = V, Kr.createTimeRange = Kr.createTimeRanges = Wt, Kr.formatTime = cn, Kr.setFormatTime = function(e) {
                un = e
            }, Kr.resetFormatTime = function() {
                un = ln
            }, Kr.parseUrl = Ti, Kr.isCrossOrigin = ki, Kr.EventTarget = tt, Kr.on = ze, Kr.one = Qe, Kr.off = Ge, Kr.trigger = Ke, Kr.xhr = _(), Kr.TextTrack = Ii, Kr.AudioTrack = Pi, Kr.VideoTrack = Ai, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((function(e) {
                Kr[e] = function() {
                    return H.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Ae[e].apply(null, arguments)
                }
            })), Kr.computedStyle = Y, Kr.dom = Ae, Kr.url = Ci, Kr.defineLazyProperty = Ar;
            var Yr, $r = w(),
                Jr = function(e, t, i) {
                    return e && i && i.responseURL && t !== i.responseURL ? i.responseURL : t
                },
                Zr = Kr.log,
                es = function(e, t) {
                    return e + "-" + t
                },
                ts = function(e) {
                    var t = e.manifestString,
                        i = e.customTagParsers,
                        n = void 0 === i ? [] : i,
                        r = e.customTagMappers,
                        s = void 0 === r ? [] : r,
                        a = new I._b;
                    return n.forEach((function(e) {
                        return a.addParser(e)
                    })), s.forEach((function(e) {
                        return a.addTagMapper(e)
                    })), a.push(t), a.end(), a.manifest
                },
                is = function(e, t) {
                    ["AUDIO", "SUBTITLES"].forEach((function(i) {
                        for (var n in e.mediaGroups[i])
                            for (var r in e.mediaGroups[i][n]) {
                                var s = e.mediaGroups[i][n][r];
                                t(s, i, n, r)
                            }
                    }))
                },
                ns = function(e) {
                    var t = e.playlist,
                        i = e.uri,
                        n = e.id;
                    t.id = n, i && (t.uri = i), t.attributes = t.attributes || {}
                },
                rs = function(e, t) {
                    e.uri = t;
                    for (var i = 0; i < e.playlists.length; i++)
                        if (!e.playlists[i].uri) {
                            var n = "placeholder-uri-" + i;
                            e.playlists[i].uri = n
                        }
                    is(e, (function(t, i, n, r) {
                            if (t.playlists && t.playlists.length && !t.playlists[0].uri) {
                                var s = "placeholder-uri-" + i + "-" + n + "-" + r,
                                    a = es(0, s);
                                t.playlists[0].uri = s, t.playlists[0].id = a, e.playlists[a] = t.playlists[0], e.playlists[s] = t.playlists[0]
                            }
                        })),
                        function(e) {
                            for (var t = e.playlists.length; t--;) {
                                var i = e.playlists[t];
                                ns({
                                    playlist: i,
                                    id: es(t, i.uri)
                                }), i.resolvedUri = $r(e.uri, i.uri), e.playlists[i.id] = i, e.playlists[i.uri] = i, i.attributes.BANDWIDTH || Zr.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")
                            }
                        }(e),
                        function(e) {
                            is(e, (function(t) {
                                t.uri && (t.resolvedUri = $r(e.uri, t.uri))
                            }))
                        }(e)
                },
                ss = Kr.mergeOptions,
                as = Kr.EventTarget,
                os = function(e, t) {
                    e.resolvedUri || (e.resolvedUri = $r(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = $r(t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = $r(t, e.map.uri))
                },
                ls = function(e, t) {
                    var i = ss(e, {}),
                        n = i.playlists[t.id];
                    if (!n) return null;
                    if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null;
                    var r = ss(n, t);
                    n.segments && (r.segments = function(e, t, i) {
                        var n = t.slice();
                        i = i || 0;
                        for (var r = Math.min(e.length, t.length + i), s = i; s < r; s++) n[s - i] = ss(e[s], n[s - i]);
                        return n
                    }(n.segments, t.segments, t.mediaSequence - n.mediaSequence)), r.segments.forEach((function(e) {
                        os(e, r.resolvedUri)
                    }));
                    for (var s = 0; s < i.playlists.length; s++) i.playlists[s].id === t.id && (i.playlists[s] = r);
                    return i.playlists[t.id] = r, i.playlists[t.uri] = r, i
                },
                us = function(e, t) {
                    var i = e.segments[e.segments.length - 1];
                    return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
                },
                cs = function(e) {
                    function t(t, i, n) {
                        var r;
                        if (void 0 === n && (n = {}), r = e.call(this) || this, !t) throw new Error("A non-empty playlist URL or object is required");
                        var s = n,
                            a = s.withCredentials,
                            o = void 0 !== a && a,
                            l = s.handleManifestRedirects,
                            u = void 0 !== l && l;
                        r.src = t, r.vhs_ = i, r.withCredentials = o, r.handleManifestRedirects = u;
                        var c = i.options_;
                        return r.customTagParsers = c && c.customTagParsers || [], r.customTagMappers = c && c.customTagMappers || [], r.state = "HAVE_NOTHING", r.on("mediaupdatetimeout", (function() {
                            "HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA", r.request = r.vhs_.xhr({
                                uri: $r(r.master.uri, r.media().uri),
                                withCredentials: r.withCredentials
                            }, (function(e, t) {
                                if (r.request) return e ? r.playlistRequestError(r.request, r.media(), "HAVE_METADATA") : void r.haveMetadata({
                                    playlistString: r.request.responseText,
                                    url: r.media().uri,
                                    id: r.media().id
                                })
                            })))
                        })), r
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.playlistRequestError = function(e, t, i) {
                        var n = t.uri,
                            r = t.id;
                        this.request = null, i && (this.state = i), this.error = {
                            playlist: this.master.playlists[r],
                            status: e.status,
                            message: "HLS playlist request error at URL: " + n + ".",
                            responseText: e.responseText,
                            code: e.status >= 500 ? 4 : 2
                        }, this.trigger("error")
                    }, i.haveMetadata = function(e) {
                        var t = this,
                            i = e.playlistString,
                            n = e.playlistObject,
                            s = e.url,
                            a = e.id;
                        this.request = null, this.state = "HAVE_METADATA";
                        var o = n || ts({
                            manifestString: i,
                            customTagParsers: this.customTagParsers,
                            customTagMappers: this.customTagMappers
                        });
                        ns({
                            playlist: o,
                            uri: s,
                            id: a
                        });
                        var l = ls(this.master, o);
                        this.targetDuration = o.targetDuration, l ? (this.master = l, this.media_ = this.master.playlists[a]) : this.trigger("playlistunchanged"), this.media().endList || (r().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = r().setTimeout((function() {
                            t.trigger("mediaupdatetimeout")
                        }), us(this.media(), !!l))), this.trigger("loadedplaylist")
                    }, i.dispose = function() {
                        this.trigger("dispose"), this.stopRequest(), r().clearTimeout(this.mediaUpdateTimeout), r().clearTimeout(this.finalRenditionTimeout), this.off()
                    }, i.stopRequest = function() {
                        if (this.request) {
                            var e = this.request;
                            this.request = null, e.onreadystatechange = null, e.abort()
                        }
                    }, i.media = function(e, t) {
                        var i = this;
                        if (!e) return this.media_;
                        if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                        if ("string" === typeof e) {
                            if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
                            e = this.master.playlists[e]
                        }
                        if (r().clearTimeout(this.finalRenditionTimeout), t) {
                            var n = e.targetDuration / 2 * 1e3 || 5e3;
                            this.finalRenditionTimeout = r().setTimeout(this.media.bind(this, e, !1), n)
                        } else {
                            var s = this.state,
                                a = !this.media_ || e.id !== this.media_.id;
                            if (this.master.playlists[e.id].endList || e.endList && e.segments.length) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = e, void(a && (this.trigger("mediachanging"), "HAVE_MASTER" === s ? this.trigger("loadedmetadata") : this.trigger("mediachange")));
                            if (a) {
                                if (this.state = "SWITCHING_MEDIA", this.request) {
                                    if (e.resolvedUri === this.request.url) return;
                                    this.request.onreadystatechange = null, this.request.abort(), this.request = null
                                }
                                this.media_ && this.trigger("mediachanging"), this.request = this.vhs_.xhr({
                                    uri: e.resolvedUri,
                                    withCredentials: this.withCredentials
                                }, (function(t, n) {
                                    if (i.request) {
                                        if (e.resolvedUri = Jr(i.handleManifestRedirects, e.resolvedUri, n), t) return i.playlistRequestError(i.request, e, s);
                                        i.haveMetadata({
                                            playlistString: n.responseText,
                                            url: e.uri,
                                            id: e.id
                                        }), "HAVE_MASTER" === s ? i.trigger("loadedmetadata") : i.trigger("mediachange")
                                    }
                                }))
                            }
                        }
                    }, i.pause = function() {
                        this.stopRequest(), r().clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                    }, i.load = function(e) {
                        var t = this;
                        r().clearTimeout(this.mediaUpdateTimeout);
                        var i = this.media();
                        if (e) {
                            var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                            this.mediaUpdateTimeout = r().setTimeout((function() {
                                return t.load()
                            }), n)
                        } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                    }, i.start = function() {
                        var e = this;
                        if (this.started = !0, "object" === typeof this.src) return this.src.uri || (this.src.uri = r().location.href), this.src.resolvedUri = this.src.uri, void setTimeout((function() {
                            e.setupInitialPlaylist(e.src)
                        }), 0);
                        this.request = this.vhs_.xhr({
                            uri: this.src,
                            withCredentials: this.withCredentials
                        }, (function(t, i) {
                            if (e.request) {
                                if (e.request = null, t) return e.error = {
                                    status: i.status,
                                    message: "HLS playlist request error at URL: " + e.src + ".",
                                    responseText: i.responseText,
                                    code: 2
                                }, "HAVE_NOTHING" === e.state && (e.started = !1), e.trigger("error");
                                e.src = Jr(e.handleManifestRedirects, e.src, i);
                                var n = ts({
                                    manifestString: i.responseText,
                                    customTagParsers: e.customTagParsers,
                                    customTagMappers: e.customTagMappers
                                });
                                e.setupInitialPlaylist(n)
                            }
                        }))
                    }, i.srcUri = function() {
                        return "string" === typeof this.src ? this.src : this.src.uri
                    }, i.setupInitialPlaylist = function(e) {
                        if (this.state = "HAVE_MASTER", e.playlists) return this.master = e, rs(this.master, this.srcUri()), e.playlists.forEach((function(e) {
                            e.segments && e.segments.forEach((function(t) {
                                os(t, e.resolvedUri)
                            }))
                        })), this.trigger("loadedplaylist"), void(this.request || this.media(this.master.playlists[0]));
                        var t = this.srcUri() || r().location.href;
                        this.master = function(e, t) {
                            var i = es(0, t),
                                n = {
                                    mediaGroups: {
                                        AUDIO: {},
                                        VIDEO: {},
                                        "CLOSED-CAPTIONS": {},
                                        SUBTITLES: {}
                                    },
                                    uri: r().location.href,
                                    resolvedUri: r().location.href,
                                    playlists: [{
                                        uri: t,
                                        id: i,
                                        resolvedUri: t,
                                        attributes: {}
                                    }]
                                };
                            return n.playlists[i] = n.playlists[0], n.playlists[t] = n.playlists[0], n
                        }(0, t), this.haveMetadata({
                            playlistObject: e,
                            url: t,
                            id: this.master.playlists[0].id
                        }), this.trigger("loadedmetadata")
                    }, t
                }(as),
                ds = 1 / 30,
                hs = .1,
                ps = function(e, t) {
                    var i, n = [];
                    if (e && e.length)
                        for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && n.push([e.start(i), e.end(i)]);
                    return Kr.createTimeRanges(n)
                },
                fs = function(e, t) {
                    return ps(e, (function(e, i) {
                        return e - hs <= t && i + hs >= t
                    }))
                },
                ms = function(e, t) {
                    return ps(e, (function(e) {
                        return e - ds >= t
                    }))
                },
                gs = function(e) {
                    var t = [];
                    if (!e || !e.length) return "";
                    for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
                    return t.join(", ")
                },
                vs = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) t.push({
                        start: e.start(i),
                        end: e.end(i)
                    });
                    return t
                },
                _s = Kr.createTimeRange,
                ys = function(e, t, i) {
                    if ("undefined" === typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence) return 0;
                    var n = function(e, t) {
                        var i = 0,
                            n = t - e.mediaSequence,
                            r = e.segments[n];
                        if (r) {
                            if ("undefined" !== typeof r.start) return {
                                result: r.start,
                                precise: !0
                            };
                            if ("undefined" !== typeof r.end) return {
                                result: r.end - r.duration,
                                precise: !0
                            }
                        }
                        for (; n--;) {
                            if ("undefined" !== typeof(r = e.segments[n]).end) return {
                                result: i + r.end,
                                precise: !0
                            };
                            if (i += r.duration, "undefined" !== typeof r.start) return {
                                result: i + r.start,
                                precise: !0
                            }
                        }
                        return {
                            result: i,
                            precise: !1
                        }
                    }(e, t);
                    if (n.precise) return n.result;
                    var r = function(e, t) {
                        for (var i, n = 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
                            if ("undefined" !== typeof(i = e.segments[r]).start) return {
                                result: i.start - n,
                                precise: !0
                            };
                            if (n += i.duration, "undefined" !== typeof i.end) return {
                                result: i.end - n,
                                precise: !0
                            }
                        }
                        return {
                            result: -1,
                            precise: !1
                        }
                    }(e, t);
                    return r.precise ? r.result : n.result + i
                },
                Ts = function(e, t, i) {
                    if (!e) return 0;
                    if ("number" !== typeof i && (i = 0), "undefined" === typeof t) {
                        if (e.totalDuration) return e.totalDuration;
                        if (!e.endList) return r()[1 / 0]
                    }
                    return ys(e, t, i)
                },
                bs = function(e, t, i) {
                    var n = 0;
                    if (t > i) {
                        var r = [i, t];
                        t = r[0], i = r[1]
                    }
                    if (t < 0) {
                        for (var s = t; s < Math.min(0, i); s++) n += e.targetDuration;
                        t = 0
                    }
                    for (var a = t; a < i; a++) n += e.segments[a].duration;
                    return n
                },
                Ss = function(e, t) {
                    if (!e.segments.length) return 0;
                    var i = e.segments.length,
                        n = e.segments[i - 1].duration || e.targetDuration,
                        r = "number" === typeof t ? t : n + 2 * e.targetDuration;
                    if (0 === r) return i;
                    for (var s = 0; i-- && !((s += e.segments[i].duration) >= r););
                    return Math.max(0, i)
                },
                ks = function(e, t, i, n) {
                    if (!e || !e.segments) return null;
                    if (e.endList) return Ts(e);
                    if (null === t) return null;
                    t = t || 0;
                    var r = i ? Ss(e, n) : e.segments.length;
                    return ys(e, e.mediaSequence + r, t)
                },
                Cs = function(e) {
                    return e.excludeUntil && e.excludeUntil > Date.now()
                },
                Es = function(e) {
                    return e.excludeUntil && e.excludeUntil === 1 / 0
                },
                ws = function(e) {
                    var t = Cs(e);
                    return !e.disabled && !t
                },
                Is = function(e, t) {
                    return t.attributes && t.attributes[e]
                },
                Ps = function(e, t) {
                    if (1 === e.playlists.length) return !0;
                    var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
                    return 0 === e.playlists.filter((function(e) {
                        return !!ws(e) && (e.attributes.BANDWIDTH || 0) < i
                    })).length
                },
                As = {
                    duration: Ts,
                    seekable: function(e, t, i) {
                        var n = t || 0,
                            r = ks(e, t, !0, i);
                        return null === r ? _s() : _s(n, r)
                    },
                    safeLiveIndex: Ss,
                    getMediaInfoForTime: function(e, t, i, n) {
                        var r, s = e.segments.length,
                            a = t - n;
                        if (a < 0) {
                            if (i > 0)
                                for (r = i - 1; r >= 0; r--)
                                    if ((a += e.segments[r].duration + ds) > 0) return {
                                        mediaIndex: r,
                                        startTime: n - bs(e, i, r)
                                    };
                            return {
                                mediaIndex: 0,
                                startTime: t
                            }
                        }
                        if (i < 0) {
                            for (r = i; r < 0; r++)
                                if ((a -= e.targetDuration) < 0) return {
                                    mediaIndex: 0,
                                    startTime: t
                                };
                            i = 0
                        }
                        for (r = i; r < s; r++)
                            if ((a -= e.segments[r].duration + ds) < 0) return {
                                mediaIndex: r,
                                startTime: n + bs(e, i, r)
                            };
                        return {
                            mediaIndex: s - 1,
                            startTime: t
                        }
                    },
                    isEnabled: ws,
                    isDisabled: function(e) {
                        return e.disabled
                    },
                    isBlacklisted: Cs,
                    isIncompatible: Es,
                    playlistEnd: ks,
                    isAes: function(e) {
                        for (var t = 0; t < e.segments.length; t++)
                            if (e.segments[t].key) return !0;
                        return !1
                    },
                    hasAttribute: Is,
                    estimateSegmentRequestTime: function(e, t, i, n) {
                        return void 0 === n && (n = 0), Is("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * n) / t : NaN
                    },
                    isLowestEnabledRendition: Ps
                },
                Ls = Kr.xhr,
                xs = Kr.mergeOptions,
                Os = function(e, t, i, n) {
                    var r = "arraybuffer" === e.responseType ? e.response : e.responseText;
                    !t && r && (e.responseTime = Date.now(), e.roundTripTime = e.responseTime - e.requestTime, e.bytesReceived = r.byteLength || r.length, e.bandwidth || (e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3))), i.headers && (e.responseHeaders = i.headers), t && "ETIMEDOUT" === t.code && (e.timedout = !0), t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode || (t = new Error("XHR Failed with a response of: " + (e && (r || e.responseText)))), n(t, e)
                },
                Ds = function() {
                    return function e(t, i) {
                        t = xs({
                            timeout: 45e3
                        }, t);
                        var n = e.beforeRequest || Kr.Vhs.xhr.beforeRequest;
                        if (n && "function" === typeof n) {
                            var r = n(t);
                            r && (t = r)
                        }
                        var s = Ls(t, (function(e, t) {
                                return Os(s, e, t, i)
                            })),
                            a = s.abort;
                        return s.abort = function() {
                            return s.aborted = !0, a.apply(s, arguments)
                        }, s.uri = t.uri, s.requestTime = Date.now(), s
                    }
                },
                Ms = function(e) {
                    var t = {};
                    return e.byterange && (t.Range = function(e) {
                        var t = e.offset + e.length - 1;
                        return "bytes=" + e.offset + "-" + t
                    }(e.byterange)), t
                },
                Rs = function(e, t) {
                    return e.start(t) + "-" + e.end(t)
                },
                Us = function(e, t) {
                    var i = e.toString(16);
                    return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
                },
                Ns = function(e) {
                    return e >= 32 && e < 126 ? String.fromCharCode(e) : "."
                },
                Fs = function(e) {
                    var t = {};
                    return Object.keys(e).forEach((function(i) {
                        var n = e[i];
                        ArrayBuffer.isView(n) ? t[i] = {
                            bytes: n.buffer,
                            byteOffset: n.byteOffset,
                            byteLength: n.byteLength
                        } : t[i] = n
                    })), t
                },
                Bs = function(e) {
                    var t = e.byterange || {
                        length: 1 / 0,
                        offset: 0
                    };
                    return [t.length, t.offset, e.resolvedUri].join(",")
                },
                js = function(e) {
                    return e.resolvedUri
                },
                qs = function(e) {
                    for (var t = Array.prototype.slice.call(e), i = 16, n = "", r = 0; r < t.length / i; r++) n += t.slice(r * i, r * i + i).map(Us).join("") + " " + t.slice(r * i, r * i + i).map(Ns).join("") + "\n";
                    return n
                },
                Hs = Object.freeze({
                    __proto__: null,
                    createTransferableMessage: Fs,
                    initSegmentId: Bs,
                    segmentKeyId: js,
                    hexDump: qs,
                    tagDump: function(e) {
                        var t = e.bytes;
                        return qs(t)
                    },
                    textRanges: function(e) {
                        var t, i = "";
                        for (t = 0; t < e.length; t++) i += Rs(e, t) + " ";
                        return i
                    }
                }),
                Vs = function(e) {
                    var t = e.playlist,
                        i = e.time,
                        n = void 0 === i ? void 0 : i,
                        r = e.callback;
                    if (!r) throw new Error("getProgramTime: callback must be provided");
                    if (!t || void 0 === n) return r({
                        message: "getProgramTime: playlist and time must be provided"
                    });
                    var s = function(e, t) {
                        if (!t || !t.segments || 0 === t.segments.length) return null;
                        for (var i, n = 0, r = 0; r < t.segments.length && !(e <= (n = (i = t.segments[r]).videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationEnd : n + i.duration)); r++);
                        var s = t.segments[t.segments.length - 1];
                        if (s.videoTimingInfo && s.videoTimingInfo.transmuxedPresentationEnd < e) return null;
                        if (e > n) {
                            if (e > n + .25 * s.duration) return null;
                            i = s
                        }
                        return {
                            segment: i,
                            estimatedStart: i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationStart : n - i.duration,
                            type: i.videoTimingInfo ? "accurate" : "estimate"
                        }
                    }(n, t);
                    if (!s) return r({
                        message: "valid programTime was not found"
                    });
                    if ("estimate" === s.type) return r({
                        message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                        seekTime: s.estimatedStart
                    });
                    var a = {
                            mediaSeconds: n
                        },
                        o = function(e, t) {
                            if (!t.dateTimeObject) return null;
                            var i = t.videoTimingInfo.transmuxerPrependedSeconds,
                                n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
                            return new Date(t.dateTimeObject.getTime() + 1e3 * n)
                        }(n, s.segment);
                    return o && (a.programDateTime = o.toISOString()), r(null, a)
                },
                Ws = function e(t) {
                    var i = t.programTime,
                        n = t.playlist,
                        r = t.retryCount,
                        s = void 0 === r ? 2 : r,
                        a = t.seekTo,
                        o = t.pauseAfterSeek,
                        l = void 0 === o || o,
                        u = t.tech,
                        c = t.callback;
                    if (!c) throw new Error("seekToProgramTime: callback must be provided");
                    if ("undefined" === typeof i || !n || !a) return c({
                        message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
                    });
                    if (!n.endList && !u.hasStarted_) return c({
                        message: "player must be playing a live stream to start buffering"
                    });
                    if (! function(e) {
                            if (!e.segments || 0 === e.segments.length) return !1;
                            for (var t = 0; t < e.segments.length; t++)
                                if (!e.segments[t].dateTimeObject) return !1;
                            return !0
                        }(n)) return c({
                        message: "programDateTime tags must be provided in the manifest " + n.resolvedUri
                    });
                    var d = function(e, t) {
                        var i;
                        try {
                            i = new Date(e)
                        } catch (u) {
                            return null
                        }
                        if (!t || !t.segments || 0 === t.segments.length) return null;
                        var n = t.segments[0];
                        if (i < n.dateTimeObject) return null;
                        for (var r = 0; r < t.segments.length - 1 && (n = t.segments[r], !(i < t.segments[r + 1].dateTimeObject)); r++);
                        var s, a = t.segments[t.segments.length - 1],
                            o = a.dateTimeObject,
                            l = a.videoTimingInfo ? (s = a.videoTimingInfo).transmuxedPresentationEnd - s.transmuxedPresentationStart - s.transmuxerPrependedSeconds : a.duration + .25 * a.duration;
                        return i > new Date(o.getTime() + 1e3 * l) ? null : (i > o && (n = a), {
                            segment: n,
                            estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : As.duration(t, t.mediaSequence + t.segments.indexOf(n)),
                            type: n.videoTimingInfo ? "accurate" : "estimate"
                        })
                    }(i, n);
                    if (!d) return c({
                        message: i + " was not found in the stream"
                    });
                    var h = d.segment,
                        p = function(e, t) {
                            var i, n;
                            try {
                                i = new Date(e), n = new Date(t)
                            } catch (s) {}
                            var r = i.getTime();
                            return (n.getTime() - r) / 1e3
                        }(h.dateTimeObject, i);
                    if ("estimate" === d.type) return 0 === s ? c({
                        message: i + " is not buffered yet. Try again"
                    }) : (a(d.estimatedStart + p), void u.one("seeked", (function() {
                        e({
                            programTime: i,
                            playlist: n,
                            retryCount: s - 1,
                            seekTo: a,
                            pauseAfterSeek: l,
                            tech: u,
                            callback: c
                        })
                    })));
                    var f = h.start + p;
                    u.one("seeked", (function() {
                        return c(null, u.currentTime())
                    })), l && u.pause(), a(f)
                },
                zs = function(e, t) {
                    if (4 === e.readyState) return t()
                },
                Gs = Kr.EventTarget,
                Ks = Kr.mergeOptions,
                Qs = function(e) {
                    var t = e.masterXml,
                        i = e.srcUrl,
                        n = e.clientOffset,
                        r = e.sidxMapping,
                        s = (0, A.Qc)(t, {
                            manifestUri: i,
                            clientOffset: n,
                            sidxMapping: r
                        });
                    return rs(s, i), s
                },
                Xs = function(e, t) {
                    for (var i = !0, n = Ks(e, {
                            duration: t.duration,
                            minimumUpdatePeriod: t.minimumUpdatePeriod
                        }), r = 0; r < t.playlists.length; r++) {
                        var s = ls(n, t.playlists[r]);
                        s && (n = s, i = !1)
                    }
                    return is(t, (function(e, t, r, s) {
                        if (e.playlists && e.playlists.length) {
                            var a = e.playlists[0].id,
                                o = ls(n, e.playlists[0]);
                            o && ((n = o).mediaGroups[t][r][s].playlists[0] = n.playlists[a], i = !1)
                        }
                    })), t.minimumUpdatePeriod !== e.minimumUpdatePeriod && (i = !1), i ? null : n
                },
                Ys = function(e) {
                    var t = e.byterange.offset + e.byterange.length - 1;
                    return e.uri + "-" + e.byterange.offset + "-" + t
                },
                $s = function(e, t) {
                    var i, n, r = {};
                    for (var s in e) {
                        var a = e[s].sidx;
                        if (a) {
                            var o = Ys(a);
                            if (!t[o]) break;
                            var l = t[o].sidxInfo;
                            i = l, n = a, (Boolean(!i.map && !n.map) || Boolean(i.map && n.map && i.map.byterange.offset === n.map.byterange.offset && i.map.byterange.length === n.map.byterange.length)) && i.uri === n.uri && i.byterange.offset === n.byterange.offset && i.byterange.length === n.byterange.length && (r[o] = t[o])
                        }
                    }
                    return r
                },
                Js = function(e, t, i, n, r, s) {
                    var a = {
                            uri: Jr(r.handleManifestRedirects, t.resolvedUri),
                            byterange: t.byterange,
                            playlist: i
                        },
                        o = Kr.mergeOptions(a, {
                            responseType: "arraybuffer",
                            headers: Ms(a)
                        });
                    return function(e, t, i) {
                        var n, r = [],
                            s = !1,
                            a = function(e, t, n, r) {
                                return t.abort(), s = !0, i(e, t, n, r)
                            },
                            o = function(e, t) {
                                if (!s) {
                                    if (e) return a(e, t, "", r);
                                    var i = t.responseText.substring(r && r.byteLength || 0, t.responseText.length);
                                    if (r = (0, D.lx)(r, (0, D.qX)(i, !0)), n = n || (0, O.cc)(r), r.length < 10 || n && r.length < n + 2) return zs(t, (function() {
                                        return a(e, t, "", r)
                                    }));
                                    var o = (0, O.Xm)(r);
                                    return "ts" === o && r.length < 188 || !o && r.length < 376 ? zs(t, (function() {
                                        return a(e, t, "", r)
                                    })) : a(null, t, o, r)
                                }
                            },
                            l = t({
                                uri: e,
                                beforeSend: function(e) {
                                    e.overrideMimeType("text/plain; charset=x-user-defined"), e.addEventListener("progress", (function(t) {
                                        return t.total, t.loaded, Os(e, null, {
                                            statusCode: e.status
                                        }, o)
                                    }))
                                }
                            }, (function(e, t) {
                                return Os(l, e, t, o)
                            }));
                        return l
                    }(a.uri, n, (function(t, r, l, u) {
                        if (t) return s(t, r);
                        if (!l || "mp4" !== l) return s({
                            status: r.status,
                            message: "Unsupported " + (l || "unknown") + " container type for sidx segment at URL: " + a.uri,
                            response: "",
                            playlist: i,
                            internal: !0,
                            blacklistDuration: 1 / 0,
                            code: 2
                        }, r);
                        var c = a.byterange,
                            d = c.offset,
                            h = c.length;
                        if (u.length >= h + d) return s(t, {
                            response: u.subarray(d, d + h),
                            status: r.status,
                            uri: r.uri
                        });
                        e.request = n(o, s)
                    }))
                },
                Zs = function(e) {
                    function t(t, i, n, r) {
                        var s;
                        void 0 === n && (n = {}), s = e.call(this) || this;
                        var a = n,
                            o = a.withCredentials,
                            l = void 0 !== o && o,
                            u = a.handleManifestRedirects,
                            d = void 0 !== u && u;
                        if (s.vhs_ = i, s.withCredentials = l, s.handleManifestRedirects = d, !t) throw new Error("A non-empty playlist URL or object is required");
                        return s.on("minimumUpdatePeriod", (function() {
                            s.refreshXml_()
                        })), s.on("mediaupdatetimeout", (function() {
                            s.refreshMedia_(s.media().id)
                        })), s.state = "HAVE_NOTHING", s.loadedPlaylists_ = {}, "string" === typeof t ? (s.srcUrl = t, s.sidxMapping_ = {}, c()(s)) : (s.setupChildLoader(r, t), s)
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.setupChildLoader = function(e, t) {
                        this.masterPlaylistLoader_ = e, this.childPlaylist_ = t
                    }, i.dispose = function() {
                        this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, r().clearTimeout(this.minimumUpdatePeriodTimeout_), r().clearTimeout(this.mediaRequest_), r().clearTimeout(this.mediaUpdateTimeout), this.off()
                    }, i.hasPendingRequest = function() {
                        return this.request || this.mediaRequest_
                    }, i.stopRequest = function() {
                        if (this.request) {
                            var e = this.request;
                            this.request = null, e.onreadystatechange = null, e.abort()
                        }
                    }, i.sidxRequestFinished_ = function(e, t, i, n) {
                        var r = this;
                        return function(s, a) {
                            if (r.request) {
                                if (r.request = null, s) return r.error = "object" === typeof s ? s : {
                                    status: a.status,
                                    message: "DASH playlist request error at URL: " + e.uri,
                                    response: a.response,
                                    code: 2
                                }, i && (r.state = i), void r.trigger("error");
                                var o = (0, D.Ki)(a.response),
                                    l = x()(o.subarray(8));
                                return n(t, l)
                            }
                        }
                    }, i.media = function(e) {
                        var t = this;
                        if (!e) return this.media_;
                        if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                        var i = this.state;
                        if ("string" === typeof e) {
                            if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
                            e = this.master.playlists[e]
                        }
                        var n = !this.media_ || e.id !== this.media_.id;
                        if (n && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList) return this.state = "HAVE_METADATA", this.media_ = e, void(n && (this.trigger("mediachanging"), this.trigger("mediachange")));
                        if (n)
                            if (this.media_ && this.trigger("mediachanging"), e.sidx) {
                                var s, a;
                                this.masterPlaylistLoader_ ? (s = this.masterPlaylistLoader_.master, a = this.masterPlaylistLoader_.sidxMapping_) : (s = this.master, a = this.sidxMapping_);
                                var o = Ys(e.sidx);
                                a[o] = {
                                    sidxInfo: e.sidx
                                }, this.request = Js(this, e.sidx, e, this.vhs_.xhr, {
                                    handleManifestRedirects: this.handleManifestRedirects
                                }, this.sidxRequestFinished_(e, s, i, (function(n, r) {
                                    if (!n || !r) throw new Error("failed to request sidx");
                                    a[o].sidx = r, t.haveMetadata({
                                        startingState: i,
                                        playlist: n.playlists[e.id]
                                    })
                                })))
                            } else this.mediaRequest_ = r().setTimeout(this.haveMetadata.bind(this, {
                                startingState: i,
                                playlist: e
                            }), 0)
                    }, i.haveMetadata = function(e) {
                        var t = e.startingState,
                            i = e.playlist;
                        this.state = "HAVE_METADATA", this.loadedPlaylists_[i.id] = i, this.mediaRequest_ = null, this.refreshMedia_(i.id), "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange")
                    }, i.pause = function() {
                        this.stopRequest(), r().clearTimeout(this.mediaUpdateTimeout), r().clearTimeout(this.minimumUpdatePeriodTimeout_), "HAVE_NOTHING" === this.state && (this.started = !1)
                    }, i.load = function(e) {
                        var t = this;
                        r().clearTimeout(this.mediaUpdateTimeout), r().clearTimeout(this.minimumUpdatePeriodTimeout_);
                        var i = this.media();
                        if (e) {
                            var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                            this.mediaUpdateTimeout = r().setTimeout((function() {
                                return t.load()
                            }), n)
                        } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                    }, i.start = function() {
                        var e = this;
                        this.started = !0, this.masterPlaylistLoader_ ? this.mediaRequest_ = r().setTimeout(this.haveMaster_.bind(this), 0) : this.request = this.vhs_.xhr({
                            uri: this.srcUrl,
                            withCredentials: this.withCredentials
                        }, (function(t, i) {
                            if (e.request) {
                                if (e.request = null, t) return e.error = {
                                    status: i.status,
                                    message: "DASH playlist request error at URL: " + e.srcUrl,
                                    responseText: i.responseText,
                                    code: 2
                                }, "HAVE_NOTHING" === e.state && (e.started = !1), e.trigger("error");
                                e.masterXml_ = i.responseText, i.responseHeaders && i.responseHeaders.date ? e.masterLoaded_ = Date.parse(i.responseHeaders.date) : e.masterLoaded_ = Date.now(), e.srcUrl = Jr(e.handleManifestRedirects, e.srcUrl, i), e.syncClientServerClock_(e.onClientServerClockSync_.bind(e))
                            }
                        }))
                    }, i.syncClientServerClock_ = function(e) {
                        var t = this,
                            i = (0, A.LG)(this.masterXml_);
                        return null === i ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), e()) : "DIRECT" === i.method ? (this.clientOffset_ = i.value - Date.now(), e()) : void(this.request = this.vhs_.xhr({
                            uri: $r(this.srcUrl, i.value),
                            method: i.method,
                            withCredentials: this.withCredentials
                        }, (function(n, r) {
                            if (t.request) {
                                if (n) return t.clientOffset_ = t.masterLoaded_ - Date.now(), e();
                                var s;
                                s = "HEAD" === i.method ? r.responseHeaders && r.responseHeaders.date ? Date.parse(r.responseHeaders.date) : t.masterLoaded_ : Date.parse(r.responseText), t.clientOffset_ = s - Date.now(), e()
                            }
                        })))
                    }, i.haveMaster_ = function() {
                        this.state = "HAVE_MASTER", this.mediaRequest_ = null, this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.updateMainManifest_(Qs({
                            masterXml: this.masterXml_,
                            srcUrl: this.srcUrl,
                            clientOffset: this.clientOffset_,
                            sidxMapping: this.sidxMapping_
                        })), this.trigger("loadedplaylist"))
                    }, i.updateMinimumUpdatePeriodTimeout_ = function() {
                        var e = this;
                        r().clearTimeout(this.minimumUpdatePeriodTimeout_);
                        var t = function(t) {
                                e.minimumUpdatePeriodTimeout_ = r().setTimeout((function() {
                                    e.trigger("minimumUpdatePeriod")
                                }), t)
                            },
                            i = this.master && this.master.minimumUpdatePeriod;
                        i > 0 ? t(i) : 0 === i && (this.media() ? t(1e3 * this.media().targetDuration) : this.one("loadedplaylist", (function() {
                            t(1e3 * e.media().targetDuration)
                        })))
                    }, i.onClientServerClockSync_ = function() {
                        this.haveMaster_(), this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]), this.updateMinimumUpdatePeriodTimeout_()
                    }, i.updateMainManifest_ = function(e) {
                        if (this.master = e, this.master.locations && this.master.locations.length) {
                            var t = this.master.locations[0];
                            t !== this.srcUrl && (this.srcUrl = t)
                        }
                    }, i.refreshXml_ = function() {
                        var e = this;
                        this.request = this.vhs_.xhr({
                            uri: this.srcUrl,
                            withCredentials: this.withCredentials
                        }, (function(t, i) {
                            if (e.request) {
                                if (e.request = null, t) return e.error = {
                                    status: i.status,
                                    message: "DASH playlist request error at URL: " + e.srcUrl,
                                    responseText: i.responseText,
                                    code: 2
                                }, "HAVE_NOTHING" === e.state && (e.started = !1), e.trigger("error");
                                e.masterXml_ = i.responseText, e.sidxMapping_ = function(e, t, i, n) {
                                    var r = (0, A.Qc)(e, {
                                            manifestUri: t,
                                            clientOffset: i
                                        }),
                                        s = $s(r.playlists, n);
                                    return is(r, (function(e, t, i, r) {
                                        if (e.playlists && e.playlists.length) {
                                            var a = e.playlists;
                                            s = Ks(s, $s(a, n))
                                        }
                                    })), s
                                }(e.masterXml_, e.srcUrl, e.clientOffset_, e.sidxMapping_);
                                var n = Qs({
                                        masterXml: e.masterXml_,
                                        srcUrl: e.srcUrl,
                                        clientOffset: e.clientOffset_,
                                        sidxMapping: e.sidxMapping_
                                    }),
                                    r = Xs(e.master, n),
                                    s = e.media().sidx;
                                if (r)
                                    if (s) {
                                        var a = Ys(s);
                                        if (!e.sidxMapping_[a]) {
                                            var o = e.media();
                                            e.request = Js(e, o.sidx, o, e.vhs_.xhr, {
                                                handleManifestRedirects: e.handleManifestRedirects
                                            }, e.sidxRequestFinished_(o, n, e.state, (function(t, i) {
                                                if (!t || !i) throw new Error("failed to request sidx on minimumUpdatePeriod");
                                                e.sidxMapping_[a].sidx = i, e.updateMinimumUpdatePeriodTimeout_(), e.refreshMedia_(e.media().id)
                                            })))
                                        }
                                    } else e.updateMainManifest_(r), e.media_ && (e.media_ = e.master.playlists[e.media_.id]);
                                e.updateMinimumUpdatePeriodTimeout_()
                            }
                        }))
                    }, i.refreshMedia_ = function(e) {
                        var t, i, n = this;
                        if (!e) throw new Error("refreshMedia_ must take a media id");
                        this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master, i = Qs({
                            masterXml: this.masterPlaylistLoader_.masterXml_,
                            srcUrl: this.masterPlaylistLoader_.srcUrl,
                            clientOffset: this.masterPlaylistLoader_.clientOffset_,
                            sidxMapping: this.masterPlaylistLoader_.sidxMapping_
                        })) : (t = this.master, i = Qs({
                            masterXml: this.masterXml_,
                            srcUrl: this.srcUrl,
                            clientOffset: this.clientOffset_,
                            sidxMapping: this.sidxMapping_
                        }));
                        var s = Xs(t, i);
                        s ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = s : this.master = s, this.media_ = s.playlists[e]) : (this.media_ = t.playlists[e], this.trigger("playlistunchanged")), this.media().endList || (this.mediaUpdateTimeout = r().setTimeout((function() {
                            n.trigger("mediaupdatetimeout")
                        }), us(this.media(), !!s))), this.trigger("loadedplaylist")
                    }, t
                }(Gs),
                ea = {
                    GOAL_BUFFER_LENGTH: 30,
                    MAX_GOAL_BUFFER_LENGTH: 60,
                    BACK_BUFFER_LENGTH: 30,
                    GOAL_BUFFER_LENGTH_RATE: 1,
                    INITIAL_BANDWIDTH: 4194304,
                    BANDWIDTH_VARIANCE: 1.2,
                    BUFFER_LOW_WATER_LINE: 0,
                    MAX_BUFFER_LOW_WATER_LINE: 30,
                    BUFFER_LOW_WATER_LINE_RATE: 1
                },
                ta = function(e) {
                    for (var t = new Uint8Array(new ArrayBuffer(e.length)), i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
                    return t.buffer
                },
                ia = [],
                na = function(e) {
                    var t = e.transmuxer,
                        i = e.bytes,
                        n = e.audioAppendStart,
                        r = e.gopsToAlignWith,
                        s = e.isPartial,
                        a = e.remux,
                        o = e.onData,
                        l = e.onTrackInfo,
                        u = e.onAudioTimingInfo,
                        c = e.onVideoTimingInfo,
                        d = e.onVideoSegmentTimingInfo,
                        h = e.onId3,
                        p = e.onCaptions,
                        f = e.onDone,
                        m = {
                            isPartial: s,
                            buffer: []
                        };
                    if (t.onmessage = function(e) {
                            Yr && ("data" === e.data.action && function(e, t, i) {
                                var n = e.data.segment,
                                    r = n.type,
                                    s = n.initSegment,
                                    a = n.captions,
                                    o = n.captionStreams,
                                    l = n.metadata,
                                    u = n.videoFrameDtsTime,
                                    c = n.videoFramePtsTime;
                                t.buffer.push({
                                    captions: a,
                                    captionStreams: o,
                                    metadata: l
                                });
                                var d = e.data.segment.boxes || {
                                        data: e.data.segment.data
                                    },
                                    h = {
                                        type: r,
                                        data: new Uint8Array(d.data, d.data.byteOffset, d.data.byteLength),
                                        initSegment: new Uint8Array(s.data, s.byteOffset, s.byteLength)
                                    };
                                "undefined" !== typeof u && (h.videoFrameDtsTime = u), "undefined" !== typeof c && (h.videoFramePtsTime = c), i(h)
                            }(e, m, o), "trackinfo" === e.data.action && l(e.data.trackInfo), "gopInfo" === e.data.action && function(e, t) {
                                t.gopInfo = e.data.gopInfo
                            }(e, m), "audioTimingInfo" === e.data.action && u(e.data.audioTimingInfo), "videoTimingInfo" === e.data.action && c(e.data.videoTimingInfo), "videoSegmentTimingInfo" === e.data.action && d(e.data.videoSegmentTimingInfo), "id3Frame" === e.data.action && h([e.data.id3Frame], e.data.id3Frame.dispatchType), "caption" === e.data.action && p(e.data.caption), "transmuxed" === e.data.type && (t.onmessage = null, function(e) {
                                var t = e.transmuxedData,
                                    i = e.callback;
                                t.buffer = [], i(t)
                            }({
                                transmuxedData: m,
                                callback: f
                            }), ra()))
                        }, n && t.postMessage({
                            action: "setAudioAppendStart",
                            appendStart: n
                        }), Array.isArray(r) && t.postMessage({
                            action: "alignGopsWith",
                            gopsToAlignWith: r
                        }), "undefined" !== typeof a && t.postMessage({
                            action: "setRemux",
                            remux: a
                        }), i.byteLength) {
                        var g = i instanceof ArrayBuffer ? i : i.buffer,
                            v = i instanceof ArrayBuffer ? 0 : i.byteOffset;
                        t.postMessage({
                            action: "push",
                            data: g,
                            byteOffset: v,
                            byteLength: i.byteLength
                        }, [g])
                    }
                    t.postMessage({
                        action: s ? "partialFlush" : "flush"
                    })
                },
                ra = function() {
                    Yr = null, ia.length && ("function" === typeof(Yr = ia.shift()) ? Yr() : na(Yr))
                },
                sa = function(e, t) {
                    e.postMessage({
                        action: t
                    }), ra()
                },
                aa = function(e, t) {
                    if (!Yr) return Yr = e, void sa(t, e);
                    ia.push(sa.bind(null, t, e))
                },
                oa = function(e) {
                    if (!Yr) return Yr = e, void na(e);
                    ia.push(e)
                },
                la = function(e) {
                    aa("reset", e)
                },
                ua = function() {
                    Yr = null, ia.length = 0
                },
                ca = function(e) {
                    aa("endTimeline", e)
                },
                da = 2,
                ha = -101,
                pa = -102,
                fa = function(e) {
                    e.forEach((function(e) {
                        e.abort()
                    }))
                },
                ma = function(e, t) {
                    return t.timedout ? {
                        status: t.status,
                        message: "HLS request timed-out at URL: " + t.uri,
                        code: ha,
                        xhr: t
                    } : t.aborted ? {
                        status: t.status,
                        message: "HLS request aborted at URL: " + t.uri,
                        code: pa,
                        xhr: t
                    } : e ? {
                        status: t.status,
                        message: "HLS request errored at URL: " + t.uri,
                        code: da,
                        xhr: t
                    } : null
                },
                ga = function(e) {
                    var t = e.segment,
                        i = e.bytes,
                        n = e.isPartial,
                        r = e.trackInfoFn,
                        s = e.timingInfoFn,
                        a = e.videoSegmentTimingInfoFn,
                        o = e.id3Fn,
                        l = e.captionsFn,
                        u = e.dataFn,
                        c = e.doneFn,
                        d = t.map && t.map.tracks || {},
                        h = Boolean(d.audio && d.video),
                        p = s.bind(null, t, "audio", "start"),
                        f = s.bind(null, t, "audio", "end"),
                        m = s.bind(null, t, "video", "start"),
                        g = s.bind(null, t, "video", "end");
                    if (!n && !t.lastReachedChar) {
                        var v = function(e, t) {
                            var i = R().inspect(e, t * U.ONE_SECOND_IN_TS);
                            if (!i) return null;
                            var n = {
                                hasVideo: i.video && 2 === i.video.length || !1,
                                hasAudio: i.audio && 2 === i.audio.length || !1
                            };
                            return n.hasVideo && (n.videoStart = i.video[0].ptsTime), n.hasAudio && (n.audioStart = i.audio[0].ptsTime), n
                        }(i, t.baseStartTime);
                        v && (r(t, {
                            hasAudio: v.hasAudio,
                            hasVideo: v.hasVideo,
                            isMuxed: h
                        }), r = null, v.hasAudio && !h && p(v.audioStart), v.hasVideo && m(v.videoStart), p = null, m = null)
                    }
                    oa({
                        bytes: i,
                        transmuxer: t.transmuxer,
                        audioAppendStart: t.audioAppendStart,
                        gopsToAlignWith: t.gopsToAlignWith,
                        isPartial: n,
                        remux: h,
                        onData: function(e) {
                            e.type = "combined" === e.type ? "video" : e.type, u(t, e)
                        },
                        onTrackInfo: function(e) {
                            r && (h && (e.isMuxed = !0), r(t, e))
                        },
                        onAudioTimingInfo: function(e) {
                            p && "undefined" !== typeof e.start && (p(e.start), p = null), f && "undefined" !== typeof e.end && f(e.end)
                        },
                        onVideoTimingInfo: function(e) {
                            m && "undefined" !== typeof e.start && (m(e.start), m = null), g && "undefined" !== typeof e.end && g(e.end)
                        },
                        onVideoSegmentTimingInfo: function(e) {
                            a(e)
                        },
                        onId3: function(e, i) {
                            o(t, e, i)
                        },
                        onCaptions: function(e) {
                            l(t, [e])
                        },
                        onDone: function(e) {
                            c && !n && (e.type = "combined" === e.type ? "video" : e.type, c(null, t, e))
                        }
                    })
                },
                va = function(e) {
                    var t = e.segment,
                        i = e.bytes,
                        n = e.isPartial,
                        r = e.trackInfoFn,
                        s = e.timingInfoFn,
                        a = e.videoSegmentTimingInfoFn,
                        o = e.id3Fn,
                        l = e.captionsFn,
                        u = e.dataFn,
                        c = e.doneFn,
                        d = new Uint8Array(i);
                    if ((0, O.cz)(d)) {
                        t.isFmp4 = !0;
                        var h = t.map.tracks,
                            p = {
                                isFmp4: !0,
                                hasVideo: !!h.video,
                                hasAudio: !!h.audio
                            };
                        h.audio && h.audio.codec && "enca" !== h.audio.codec && (p.audioCodec = h.audio.codec), h.video && h.video.codec && "encv" !== h.video.codec && (p.videoCodec = h.video.codec), h.video && h.audio && (p.isMuxed = !0), r(t, p);
                        var f = F().startTime(t.map.timescales, d);
                        p.hasAudio && !p.isMuxed && s(t, "audio", "start", f), p.hasVideo && s(t, "video", "start", f);
                        var m = function(e) {
                            u(t, {
                                data: i,
                                type: p.hasAudio && !p.isMuxed ? "audio" : "video"
                            }), e && e.length && l(t, e), c(null, t, {})
                        };
                        if (!h.video || !i.byteLength || !t.transmuxer) return void m();
                        var g = i instanceof ArrayBuffer ? i : i.buffer,
                            v = i instanceof ArrayBuffer ? 0 : i.byteOffset;
                        return t.transmuxer.addEventListener("message", (function e(n) {
                            if ("mp4Captions" === n.data.action) {
                                t.transmuxer.removeEventListener("message", e);
                                var r = n.data.data;
                                t.bytes = i = new Uint8Array(r, r.byteOffset || 0, r.byteLength), m(n.data.captions)
                            }
                        })), void t.transmuxer.postMessage({
                            action: "pushMp4Captions",
                            timescales: t.map.timescales,
                            trackIds: [h.video.id],
                            data: g,
                            byteOffset: v,
                            byteLength: i.byteLength
                        }, [g])
                    }
                    if (t.transmuxer) {
                        if ("undefined" === typeof t.container && (t.container = (0, O.Xm)(d)), "ts" !== t.container && "aac" !== t.container) return r(t, {
                            hasAudio: !1,
                            hasVideo: !1
                        }), void c(null, t, {});
                        ga({
                            segment: t,
                            bytes: i,
                            isPartial: n,
                            trackInfoFn: r,
                            timingInfoFn: s,
                            videoSegmentTimingInfoFn: a,
                            id3Fn: o,
                            captionsFn: l,
                            dataFn: u,
                            doneFn: c
                        })
                    } else c(null, t, {})
                },
                _a = function(e) {
                    var t = e.activeXhrs,
                        i = e.decryptionWorker,
                        n = e.trackInfoFn,
                        r = e.timingInfoFn,
                        s = e.videoSegmentTimingInfoFn,
                        a = e.id3Fn,
                        o = e.captionsFn,
                        l = e.dataFn,
                        u = e.doneFn,
                        c = 0,
                        d = !1;
                    return function(e, h) {
                        if (!d) {
                            if (e) return d = !0, fa(t), u(e, h);
                            if ((c += 1) === t.length) {
                                if (h.endOfAllRequests = Date.now(), h.encryptedBytes) return function(e) {
                                    var t, i = e.decryptionWorker,
                                        n = e.segment,
                                        r = e.trackInfoFn,
                                        s = e.timingInfoFn,
                                        a = e.videoSegmentTimingInfoFn,
                                        o = e.id3Fn,
                                        l = e.captionsFn,
                                        u = e.dataFn,
                                        c = e.doneFn;
                                    i.addEventListener("message", (function e(t) {
                                        if (t.data.source === n.requestId) {
                                            i.removeEventListener("message", e);
                                            var d = t.data.decrypted;
                                            n.bytes = new Uint8Array(d.bytes, d.byteOffset, d.byteLength), va({
                                                segment: n,
                                                bytes: n.bytes,
                                                isPartial: !1,
                                                trackInfoFn: r,
                                                timingInfoFn: s,
                                                videoSegmentTimingInfoFn: a,
                                                id3Fn: o,
                                                captionsFn: l,
                                                dataFn: u,
                                                doneFn: c
                                            })
                                        }
                                    })), t = n.key.bytes.slice ? n.key.bytes.slice() : new Uint32Array(Array.prototype.slice.call(n.key.bytes)), i.postMessage(Fs({
                                        source: n.requestId,
                                        encrypted: n.encryptedBytes,
                                        key: t,
                                        iv: n.key.iv
                                    }), [n.encryptedBytes.buffer, t.buffer])
                                }({
                                    decryptionWorker: i,
                                    segment: h,
                                    trackInfoFn: n,
                                    timingInfoFn: r,
                                    videoSegmentTimingInfoFn: s,
                                    id3Fn: a,
                                    captionsFn: o,
                                    dataFn: l,
                                    doneFn: u
                                });
                                va({
                                    segment: h,
                                    bytes: h.bytes,
                                    isPartial: !1,
                                    trackInfoFn: n,
                                    timingInfoFn: r,
                                    videoSegmentTimingInfoFn: s,
                                    id3Fn: a,
                                    captionsFn: o,
                                    dataFn: l,
                                    doneFn: u
                                })
                            }
                        }
                    }
                },
                ya = function(e) {
                    var t = e.segment,
                        i = e.progressFn,
                        n = e.trackInfoFn,
                        r = e.timingInfoFn,
                        s = e.videoSegmentTimingInfoFn,
                        a = e.id3Fn,
                        o = e.captionsFn,
                        l = e.dataFn,
                        u = e.handlePartialData;
                    return function(e) {
                        var c = e.target;
                        if (!c.aborted) {
                            if (u && !t.key && c.responseText && c.responseText.length >= 8) {
                                var d = ta(c.responseText.substring(t.lastReachedChar || 0));
                                !t.lastReachedChar && (0, O.cz)(new Uint8Array(d)) || (t.lastReachedChar = c.responseText.length, va({
                                    segment: t,
                                    bytes: d,
                                    isPartial: !0,
                                    trackInfoFn: n,
                                    timingInfoFn: r,
                                    videoSegmentTimingInfoFn: s,
                                    id3Fn: a,
                                    captionsFn: o,
                                    dataFn: l
                                }))
                            }
                            return t.stats = Kr.mergeOptions(t.stats, function(e) {
                                var t = e.target,
                                    i = {
                                        bandwidth: 1 / 0,
                                        bytesReceived: 0,
                                        roundTripTime: Date.now() - t.requestTime || 0
                                    };
                                return i.bytesReceived = e.loaded, i.bandwidth = Math.floor(i.bytesReceived / i.roundTripTime * 8 * 1e3), i
                            }(e)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), i(e, t)
                        }
                    }
                },
                Ta = function(e) {
                    var t = e.xhr,
                        i = e.xhrOptions,
                        n = e.decryptionWorker,
                        r = e.segment,
                        s = e.abortFn,
                        a = e.progressFn,
                        o = e.trackInfoFn,
                        l = e.timingInfoFn,
                        u = e.videoSegmentTimingInfoFn,
                        c = e.id3Fn,
                        d = e.captionsFn,
                        h = e.dataFn,
                        p = e.doneFn,
                        f = e.handlePartialData,
                        m = [],
                        g = _a({
                            activeXhrs: m,
                            decryptionWorker: n,
                            trackInfoFn: o,
                            timingInfoFn: l,
                            videoSegmentTimingInfoFn: u,
                            id3Fn: c,
                            captionsFn: d,
                            dataFn: h,
                            doneFn: p
                        });
                    if (r.key && !r.key.bytes) {
                        var v = t(Kr.mergeOptions(i, {
                            uri: r.key.resolvedUri,
                            responseType: "arraybuffer"
                        }), function(e, t) {
                            return function(i, n) {
                                var r = n.response,
                                    s = ma(i, n);
                                if (s) return t(s, e);
                                if (16 !== r.byteLength) return t({
                                    status: n.status,
                                    message: "Invalid HLS key at URL: " + n.uri,
                                    code: da,
                                    xhr: n
                                }, e);
                                var a = new DataView(r);
                                return e.key.bytes = new Uint32Array([a.getUint32(0), a.getUint32(4), a.getUint32(8), a.getUint32(12)]), t(null, e)
                            }
                        }(r, g));
                        m.push(v)
                    }
                    if (r.map && !r.map.bytes) {
                        var _ = t(Kr.mergeOptions(i, {
                            uri: r.map.resolvedUri,
                            responseType: "arraybuffer",
                            headers: Ms(r.map)
                        }), function(e) {
                            var t = e.segment,
                                i = e.finishProcessingFn;
                            return function(e, n) {
                                var r = n.response,
                                    s = ma(e, n);
                                if (s) return i(s, t);
                                if (0 === r.byteLength) return i({
                                    status: n.status,
                                    message: "Empty HLS segment content at URL: " + n.uri,
                                    code: da,
                                    xhr: n
                                }, t);
                                t.map.bytes = new Uint8Array(n.response);
                                var a = (0, O.Xm)(t.map.bytes);
                                return "mp4" !== a ? i({
                                    status: n.status,
                                    message: "Found unsupported " + (a || "unknown") + " container for initialization segment at URL: " + n.uri,
                                    code: da,
                                    internal: !0,
                                    xhr: n
                                }, t) : (F().tracks(t.map.bytes).forEach((function(e) {
                                    t.map.tracks = t.map.tracks || {}, t.map.tracks[e.type] || (t.map.tracks[e.type] = e, e.id && e.timescale && (t.map.timescales = t.map.timescales || {}, t.map.timescales[e.id] = e.timescale))
                                })), i(null, t))
                            }
                        }({
                            segment: r,
                            finishProcessingFn: g
                        }));
                        m.push(_)
                    }
                    var y = Kr.mergeOptions(i, {
                        uri: r.resolvedUri,
                        responseType: "arraybuffer",
                        headers: Ms(r)
                    });
                    f && (y.responseType = "text", y.beforeSend = function(e) {
                        e.overrideMimeType("text/plain; charset=x-user-defined")
                    });
                    var T = t(y, function(e) {
                        var t = e.segment,
                            i = e.finishProcessingFn,
                            n = e.responseType;
                        return function(e, r) {
                            var s = r.response,
                                a = ma(e, r);
                            if (a) return i(a, t);
                            var o = "arraybuffer" !== n && r.responseText ? ta(r.responseText.substring(t.lastReachedChar || 0)) : r.response;
                            return 0 === s.byteLength ? i({
                                status: r.status,
                                message: "Empty HLS segment content at URL: " + r.uri,
                                code: da,
                                xhr: r
                            }, t) : (t.stats = function(e) {
                                return {
                                    bandwidth: e.bandwidth,
                                    bytesReceived: e.bytesReceived || 0,
                                    roundTripTime: e.roundTripTime || 0
                                }
                            }(r), t.key ? t.encryptedBytes = new Uint8Array(o) : t.bytes = new Uint8Array(o), i(null, t))
                        }
                    }({
                        segment: r,
                        finishProcessingFn: g,
                        responseType: y.responseType
                    }));
                    T.addEventListener("progress", ya({
                        segment: r,
                        progressFn: a,
                        trackInfoFn: o,
                        timingInfoFn: l,
                        videoSegmentTimingInfoFn: u,
                        id3Fn: c,
                        captionsFn: d,
                        dataFn: h,
                        handlePartialData: f
                    })), m.push(T);
                    var b = {};
                    return m.forEach((function(e) {
                            e.addEventListener("loadend", function(e) {
                                var t = e.loadendState,
                                    i = e.abortFn;
                                return function(e) {
                                    e.target.aborted && i && !t.calledAbortFn && (i(), t.calledAbortFn = !0)
                                }
                            }({
                                loadendState: b,
                                abortFn: s
                            }))
                        })),
                        function() {
                            return fa(m)
                        }
                },
                ba = "undefined" !== typeof window ? window : {},
                Sa = "undefined" === typeof Symbol ? "__target" : Symbol(),
                ka = ba.BlobBuilder || ba.WebKitBlobBuilder || ba.MozBlobBuilder || ba.MSBlobBuilder,
                Ca = ba.URL || ba.webkitURL || Ca && Ca.msURL,
                Ea = ba.Worker;

            function wa(e, t) {
                return function(i) {
                    var n = this;
                    if (!t) return new Ea(e);
                    if (Ea && !i) {
                        var r = La(t.toString().replace(/^function.+?{/, "").slice(0, -1));
                        return this[Sa] = new Ea(r),
                            function(e, t) {
                                if (!e || !t) return;
                                var i = e.terminate;
                                e.objURL = t, e.terminate = function() {
                                    e.objURL && Ca.revokeObjectURL(e.objURL), i.call(e)
                                }
                            }(this[Sa], r), this[Sa]
                    }
                    var s = {
                        postMessage: function(e) {
                            n.onmessage && setTimeout((function() {
                                n.onmessage({
                                    data: e,
                                    target: s
                                })
                            }))
                        }
                    };
                    t.call(s), this.postMessage = function(e) {
                        setTimeout((function() {
                            s.onmessage({
                                data: e,
                                target: n
                            })
                        }))
                    }, this.isThisThread = !0
                }
            }
            if (Ea) {
                var Ia, Pa = La("self.onmessage = function () {}"),
                    Aa = new Uint8Array(1);
                try {
                    (Ia = new Ea(Pa)).postMessage(Aa, [Aa.buffer])
                } catch (Qo) {
                    Ea = null
                } finally {
                    Ca.revokeObjectURL(Pa), Ia && Ia.terminate()
                }
            }

            function La(e) {
                try {
                    return Ca.createObjectURL(new Blob([e], {
                        type: "application/javascript"
                    }))
                } catch (Qo) {
                    var t = new ka;
                    return t.append(e), Ca.createObjectURL(t.getBlob(type))
                }
            }
            var xa = new wa("./transmuxer-worker.worker.js", (function(e, t) {
                    var i = this;
                    ! function() {
                        var e = function() {
                            this.init = function() {
                                var e = {};
                                this.on = function(t, i) {
                                    e[t] || (e[t] = []), e[t] = e[t].concat(i)
                                }, this.off = function(t, i) {
                                    var n;
                                    return !!e[t] && (n = e[t].indexOf(i), e[t] = e[t].slice(), e[t].splice(n, 1), n > -1)
                                }, this.trigger = function(t) {
                                    var i, n, r, s;
                                    if (i = e[t])
                                        if (2 === arguments.length)
                                            for (r = i.length, n = 0; n < r; ++n) i[n].call(this, arguments[1]);
                                        else {
                                            for (s = [], n = arguments.length, n = 1; n < arguments.length; ++n) s.push(arguments[n]);
                                            for (r = i.length, n = 0; n < r; ++n) i[n].apply(this, s)
                                        }
                                }, this.dispose = function() {
                                    e = {}
                                }
                            }
                        };
                        e.prototype.pipe = function(e) {
                            return this.on("data", (function(t) {
                                e.push(t)
                            })), this.on("done", (function(t) {
                                e.flush(t)
                            })), this.on("partialdone", (function(t) {
                                e.partialFlush(t)
                            })), this.on("endedtimeline", (function(t) {
                                e.endTimeline(t)
                            })), this.on("reset", (function(t) {
                                e.reset(t)
                            })), e
                        }, e.prototype.push = function(e) {
                            this.trigger("data", e)
                        }, e.prototype.flush = function(e) {
                            this.trigger("done", e)
                        }, e.prototype.partialFlush = function(e) {
                            this.trigger("partialdone", e)
                        }, e.prototype.endTimeline = function(e) {
                            this.trigger("endedtimeline", e)
                        }, e.prototype.reset = function(e) {
                            this.trigger("reset", e)
                        };
                        var t, n, r, s, a, o, l, u, c, d, h, p, f, m, g, v, _, y, T, b, S, k, C, E, w, I, P, A, L, x, O, D, M, R, U, N, F = e,
                            B = Math.pow(2, 32) - 1;
                        ! function() {
                            var e;
                            if (C = {
                                    avc1: [],
                                    avcC: [],
                                    btrt: [],
                                    dinf: [],
                                    dref: [],
                                    esds: [],
                                    ftyp: [],
                                    hdlr: [],
                                    mdat: [],
                                    mdhd: [],
                                    mdia: [],
                                    mfhd: [],
                                    minf: [],
                                    moof: [],
                                    moov: [],
                                    mp4a: [],
                                    mvex: [],
                                    mvhd: [],
                                    pasp: [],
                                    sdtp: [],
                                    smhd: [],
                                    stbl: [],
                                    stco: [],
                                    stsc: [],
                                    stsd: [],
                                    stsz: [],
                                    stts: [],
                                    styp: [],
                                    tfdt: [],
                                    tfhd: [],
                                    traf: [],
                                    trak: [],
                                    trun: [],
                                    trex: [],
                                    tkhd: [],
                                    vmhd: []
                                }, "undefined" !== typeof Uint8Array) {
                                for (e in C) C.hasOwnProperty(e) && (C[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                                E = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), I = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), w = new Uint8Array([0, 0, 0, 1]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), L = {
                                    video: P,
                                    audio: A
                                }, D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), R = M, U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), N = M, x = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                            }
                        }(), t = function(e) {
                                var t, i, n = [],
                                    r = 0;
                                for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
                                for (t = n.length; t--;) r += n[t].byteLength;
                                for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++) i.set(n[t], r), r += n[t].byteLength;
                                return i
                            }, n = function() {
                                return t(C.dinf, t(C.dref, D))
                            }, r = function(e) {
                                return t(C.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
                            }, s = function() {
                                return t(C.ftyp, E, w, E, I)
                            }, v = function(e) {
                                return t(C.hdlr, L[e])
                            }, a = function(e) {
                                return t(C.mdat, e)
                            }, g = function(e) {
                                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
                                return e.samplerate && (i[12] = e.samplerate >>> 24 & 255, i[13] = e.samplerate >>> 16 & 255, i[14] = e.samplerate >>> 8 & 255, i[15] = 255 & e.samplerate), t(C.mdhd, i)
                            }, m = function(e) {
                                return t(C.mdia, g(e), v(e.type), l(e))
                            }, o = function(e) {
                                return t(C.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
                            }, l = function(e) {
                                return t(C.minf, "video" === e.type ? t(C.vmhd, x) : t(C.smhd, O), n(), y(e))
                            }, u = function(e, i) {
                                for (var n = [], r = i.length; r--;) n[r] = b(i[r]);
                                return t.apply(null, [C.moof, o(e)].concat(n))
                            }, c = function(e) {
                                for (var i = e.length, n = []; i--;) n[i] = p(e[i]);
                                return t.apply(null, [C.moov, h(4294967295)].concat(n).concat(d(e)))
                            }, d = function(e) {
                                for (var i = e.length, n = []; i--;) n[i] = S(e[i]);
                                return t.apply(null, [C.mvex].concat(n))
                            }, h = function(e) {
                                var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                return t(C.mvhd, i)
                            }, _ = function(e) {
                                var i, n, r = e.samples || [],
                                    s = new Uint8Array(4 + r.length);
                                for (n = 0; n < r.length; n++) i = r[n].flags, s[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                                return t(C.sdtp, s)
                            }, y = function(e) {
                                return t(C.stbl, T(e), t(C.stts, N), t(C.stsc, R), t(C.stsz, U), t(C.stco, M))
                            },
                            function() {
                                var e, i;
                                T = function(n) {
                                    return t(C.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === n.type ? e(n) : i(n))
                                }, e = function(e) {
                                    var i, n, r = e.sps || [],
                                        s = e.pps || [],
                                        a = [],
                                        o = [];
                                    for (i = 0; i < r.length; i++) a.push((65280 & r[i].byteLength) >>> 8), a.push(255 & r[i].byteLength), a = a.concat(Array.prototype.slice.call(r[i]));
                                    for (i = 0; i < s.length; i++) o.push((65280 & s[i].byteLength) >>> 8), o.push(255 & s[i].byteLength), o = o.concat(Array.prototype.slice.call(s[i]));
                                    if (n = [C.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), t(C.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([r.length], a, [s.length], o))), t(C.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio) {
                                        var l = e.sarRatio[0],
                                            u = e.sarRatio[1];
                                        n.push(t(C.pasp, new Uint8Array([(4278190080 & l) >> 24, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, (4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u])))
                                    }
                                    return t.apply(null, n)
                                }, i = function(e) {
                                    return t(C.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), r(e))
                                }
                            }(), f = function(e) {
                                var i = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
                                return t(C.tkhd, i)
                            }, b = function(e) {
                                var i, n, r, s, a, o;
                                return i = t(C.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(e.baseMediaDecodeTime / (B + 1)), o = Math.floor(e.baseMediaDecodeTime % (B + 1)), n = t(C.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])), 92, "audio" === e.type ? (r = k(e, 92), t(C.traf, i, n, r)) : (s = _(e), r = k(e, s.length + 92), t(C.traf, i, n, r, s))
                            }, p = function(e) {
                                return e.duration = e.duration || 4294967295, t(C.trak, f(e), m(e))
                            }, S = function(e) {
                                var i = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                                return "video" !== e.type && (i[i.length - 1] = 0), t(C.trex, i)
                            },
                            function() {
                                var e, i, n;
                                n = function(e, t) {
                                    var i = 0,
                                        n = 0,
                                        r = 0,
                                        s = 0;
                                    return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (s = 8)), [0, 0, i | n | r | s, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
                                }, i = function(e, i) {
                                    var r, s, a, o, l, u;
                                    for (i += 20 + 16 * (o = e.samples || []).length, a = n(o, i), (s = new Uint8Array(a.length + 16 * o.length)).set(a), r = a.length, u = 0; u < o.length; u++) l = o[u], s[r++] = (4278190080 & l.duration) >>> 24, s[r++] = (16711680 & l.duration) >>> 16, s[r++] = (65280 & l.duration) >>> 8, s[r++] = 255 & l.duration, s[r++] = (4278190080 & l.size) >>> 24, s[r++] = (16711680 & l.size) >>> 16, s[r++] = (65280 & l.size) >>> 8, s[r++] = 255 & l.size, s[r++] = l.flags.isLeading << 2 | l.flags.dependsOn, s[r++] = l.flags.isDependedOn << 6 | l.flags.hasRedundancy << 4 | l.flags.paddingValue << 1 | l.flags.isNonSyncSample, s[r++] = 61440 & l.flags.degradationPriority, s[r++] = 15 & l.flags.degradationPriority, s[r++] = (4278190080 & l.compositionTimeOffset) >>> 24, s[r++] = (16711680 & l.compositionTimeOffset) >>> 16, s[r++] = (65280 & l.compositionTimeOffset) >>> 8, s[r++] = 255 & l.compositionTimeOffset;
                                    return t(C.trun, s)
                                }, e = function(e, i) {
                                    var r, s, a, o, l, u;
                                    for (i += 20 + 8 * (o = e.samples || []).length, a = n(o, i), (r = new Uint8Array(a.length + 8 * o.length)).set(a), s = a.length, u = 0; u < o.length; u++) l = o[u], r[s++] = (4278190080 & l.duration) >>> 24, r[s++] = (16711680 & l.duration) >>> 16, r[s++] = (65280 & l.duration) >>> 8, r[s++] = 255 & l.duration, r[s++] = (4278190080 & l.size) >>> 24, r[s++] = (16711680 & l.size) >>> 16, r[s++] = (65280 & l.size) >>> 8, r[s++] = 255 & l.size;
                                    return t(C.trun, r)
                                }, k = function(t, n) {
                                    return "audio" === t.type ? e(t, n) : i(t, n)
                                }
                            }();
                        var j, q, H, V, W, z, G, K, Q = a,
                            X = u,
                            Y = function(e) {
                                var t, i = s(),
                                    n = c(e);
                                return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i), t.set(n, i.byteLength), t
                            },
                            $ = function(e, t) {
                                var i = {
                                    size: 0,
                                    flags: {
                                        isLeading: 0,
                                        dependsOn: 1,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradationPriority: 0,
                                        isNonSyncSample: 1
                                    }
                                };
                                return i.dataOffset = t, i.compositionTimeOffset = e.pts - e.dts, i.duration = e.duration, i.size = 4 * e.length, i.size += e.byteLength, e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0), i
                            },
                            J = function(e) {
                                var t, i, n = [],
                                    r = [];
                                for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, n.byteLength = 0, t = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                                return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, r.push(n), r
                            },
                            Z = function(e) {
                                var t, i, n = [],
                                    r = [];
                                for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)(i = e[t]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                                return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
                            },
                            ee = function(e) {
                                var t;
                                return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
                            },
                            te = function(e, t) {
                                var i, n, r, s, a, o = t || 0,
                                    l = [];
                                for (i = 0; i < e.length; i++)
                                    for (s = e[i], n = 0; n < s.length; n++) a = s[n], o += (r = $(a, o)).size, l.push(r);
                                return l
                            },
                            ie = function(e) {
                                var t, i, n, r, s, a, o = 0,
                                    l = e.byteLength,
                                    u = e.nalCount,
                                    c = new Uint8Array(l + 4 * u),
                                    d = new DataView(c.buffer);
                                for (t = 0; t < e.length; t++)
                                    for (r = e[t], i = 0; i < r.length; i++)
                                        for (s = r[i], n = 0; n < s.length; n++) a = s[n], d.setUint32(o, a.data.byteLength), o += 4, c.set(a.data, o), o += a.data.byteLength;
                                return c
                            },
                            ne = function(e, t) {
                                var i, n = [];
                                return i = $(e, t || 0), n.push(i), n
                            },
                            re = function(e) {
                                var t, i, n = 0,
                                    r = e.byteLength,
                                    s = e.length,
                                    a = new Uint8Array(r + 4 * s),
                                    o = new DataView(a.buffer);
                                for (t = 0; t < e.length; t++) i = e[t], o.setUint32(n, i.data.byteLength), n += 4, a.set(i.data, n), n += i.data.byteLength;
                                return a
                            },
                            se = [33, 16, 5, 32, 164, 27],
                            ae = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                            oe = function(e) {
                                for (var t = []; e--;) t.push(0);
                                return t
                            },
                            le = function() {
                                if (!j) {
                                    var e = {
                                        96e3: [se, [227, 64], oe(154), [56]],
                                        88200: [se, [231], oe(170), [56]],
                                        64e3: [se, [248, 192], oe(240), [56]],
                                        48e3: [se, [255, 192], oe(268), [55, 148, 128], oe(54), [112]],
                                        44100: [se, [255, 192], oe(268), [55, 163, 128], oe(84), [112]],
                                        32e3: [se, [255, 192], oe(268), [55, 234], oe(226), [112]],
                                        24e3: [se, [255, 192], oe(268), [55, 255, 128], oe(268), [111, 112], oe(126), [224]],
                                        16e3: [se, [255, 192], oe(268), [55, 255, 128], oe(268), [111, 255], oe(269), [223, 108], oe(195), [1, 192]],
                                        12e3: [ae, oe(268), [3, 127, 248], oe(268), [6, 255, 240], oe(268), [13, 255, 224], oe(268), [27, 253, 128], oe(259), [56]],
                                        11025: [ae, oe(268), [3, 127, 248], oe(268), [6, 255, 240], oe(268), [13, 255, 224], oe(268), [27, 255, 192], oe(268), [55, 175, 128], oe(108), [112]],
                                        8e3: [ae, oe(268), [3, 121, 16], oe(47), [7]]
                                    };
                                    t = e, j = Object.keys(t).reduce((function(e, i) {
                                        return e[i] = new Uint8Array(t[i].reduce((function(e, t) {
                                            return e.concat(t)
                                        }), [])), e
                                    }), {})
                                }
                                var t;
                                return j
                            },
                            ue = 9e4;
                        z = function(e, t) {
                            return q(W(e, t))
                        }, G = function(e, t) {
                            return H(V(e), t)
                        }, K = function(e, t, i) {
                            return V(i ? e : e - t)
                        };
                        var ce = ue,
                            de = (H = function(e, t) {
                                return e * t
                            }, V = function(e) {
                                return e / ue
                            }),
                            he = (W = function(e, t) {
                                return e / t
                            }, z),
                            pe = G,
                            fe = K,
                            me = q = function(e) {
                                return e * ue
                            },
                            ge = de,
                            ve = function(e, t, i, n) {
                                var r, s, a, o, l, u = 0,
                                    c = 0,
                                    d = 0;
                                if (t.length && (r = he(e.baseMediaDecodeTime, e.samplerate), s = Math.ceil(ce / (e.samplerate / 1024)), i && n && (u = r - Math.max(i, n), d = (c = Math.floor(u / s)) * s), !(c < 1 || d > ce / 2))) {
                                    for ((a = le()[e.samplerate]) || (a = t[0].data), o = 0; o < c; o++) l = t[0], t.splice(0, 0, {
                                        data: a,
                                        dts: l.dts - s,
                                        pts: l.pts - s
                                    });
                                    e.baseMediaDecodeTime -= Math.floor(pe(d, e.samplerate))
                                }
                            },
                            _e = function(e, t, i) {
                                return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter((function(e) {
                                    return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                                })))
                            },
                            ye = function(e) {
                                var t, i, n = [];
                                for (t = 0; t < e.length; t++) i = e[t], n.push({
                                    size: i.data.byteLength,
                                    duration: 1024
                                });
                                return n
                            },
                            Te = function(e) {
                                var t, i, n = 0,
                                    r = new Uint8Array(function(e) {
                                        var t, i = 0;
                                        for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                                        return i
                                    }(e));
                                for (t = 0; t < e.length; t++) i = e[t], r.set(i.data, n), n += i.data.byteLength;
                                return r
                            },
                            be = ce,
                            Se = function(e) {
                                delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                            },
                            ke = function(e, t) {
                                var i, n = e.minSegmentDts;
                                return t || (n -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === e.type && (i *= e.samplerate / be, i = Math.floor(i)), i
                            },
                            Ce = function(e, t) {
                                "number" === typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" === typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
                            },
                            Ee = function(e) {
                                for (var t = 0, i = {
                                        payloadType: -1,
                                        payloadSize: 0
                                    }, n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                                    for (; 255 === e[t];) n += 255, t++;
                                    for (n += e[t++]; 255 === e[t];) r += 255, t++;
                                    if (r += e[t++], !i.payload && 4 === n) {
                                        if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                                            i.payloadType = n, i.payloadSize = r, i.payload = e.subarray(t, t + r);
                                            break
                                        }
                                        i.payload = void 0
                                    }
                                    t += r, n = 0, r = 0
                                }
                                return i
                            },
                            we = function(e) {
                                return 181 !== e.payload[0] || 49 !== (e.payload[1] << 8 | e.payload[2]) || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
                            },
                            Ie = function(e, t) {
                                var i, n, r, s, a = [];
                                if (!(64 & t[0])) return a;
                                for (n = 31 & t[0], i = 0; i < n; i++) s = {
                                    type: 3 & t[(r = 3 * i) + 2],
                                    pts: e
                                }, 4 & t[r + 2] && (s.ccData = t[r + 3] << 8 | t[r + 4], a.push(s));
                                return a
                            },
                            Pe = function(e) {
                                for (var t, i, n = e.byteLength, r = [], s = 1; s < n - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++;
                                if (0 === r.length) return e;
                                t = n - r.length, i = new Uint8Array(t);
                                var a = 0;
                                for (s = 0; s < t; a++, s++) a === r[0] && (a++, r.shift()), i[s] = e[a];
                                return i
                            },
                            Ae = 4,
                            Le = function e() {
                                e.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Re(0, 0), new Re(0, 1), new Re(1, 0), new Re(1, 1)], this.reset(), this.ccStreams_.forEach((function(e) {
                                    e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"))
                                }), this)
                            };
                        (Le.prototype = new F).push = function(e) {
                            var t, i, n;
                            if ("sei_rbsp" === e.nalUnitType && (t = Ee(e.escapedRBSP)).payloadType === Ae && (i = we(t)))
                                if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                                else {
                                    if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                                    n = Ie(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
                                }
                        }, Le.prototype.flushCCStreams = function(e) {
                            this.ccStreams_.forEach((function(t) {
                                return "flush" === e ? t.flush() : t.partialFlush()
                            }), this)
                        }, Le.prototype.flushStream = function(e) {
                            this.captionPackets_.length ? (this.captionPackets_.forEach((function(e, t) {
                                e.presortIndex = t
                            })), this.captionPackets_.sort((function(e, t) {
                                return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                            })), this.captionPackets_.forEach((function(e) {
                                e.type < 2 && this.dispatchCea608Packet(e)
                            }), this), this.captionPackets_.length = 0, this.flushCCStreams(e)) : this.flushCCStreams(e)
                        }, Le.prototype.flush = function() {
                            return this.flushStream("flush")
                        }, Le.prototype.partialFlush = function() {
                            return this.flushStream("partialFlush")
                        }, Le.prototype.reset = function() {
                            this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach((function(e) {
                                e.reset()
                            }))
                        }, Le.prototype.dispatchCea608Packet = function(e) {
                            this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
                        }, Le.prototype.setsChannel1Active = function(e) {
                            return 4096 === (30720 & e.ccData)
                        }, Le.prototype.setsChannel2Active = function(e) {
                            return 6144 === (30720 & e.ccData)
                        }, Le.prototype.setsTextOrXDSActive = function(e) {
                            return 256 === (28928 & e.ccData) || 4138 === (30974 & e.ccData) || 6186 === (30974 & e.ccData)
                        };
                        var xe = {
                                42: 225,
                                92: 233,
                                94: 237,
                                95: 243,
                                96: 250,
                                123: 231,
                                124: 247,
                                125: 209,
                                126: 241,
                                127: 9608,
                                304: 174,
                                305: 176,
                                306: 189,
                                307: 191,
                                308: 8482,
                                309: 162,
                                310: 163,
                                311: 9834,
                                312: 224,
                                313: 160,
                                314: 232,
                                315: 226,
                                316: 234,
                                317: 238,
                                318: 244,
                                319: 251,
                                544: 193,
                                545: 201,
                                546: 211,
                                547: 218,
                                548: 220,
                                549: 252,
                                550: 8216,
                                551: 161,
                                552: 42,
                                553: 39,
                                554: 8212,
                                555: 169,
                                556: 8480,
                                557: 8226,
                                558: 8220,
                                559: 8221,
                                560: 192,
                                561: 194,
                                562: 199,
                                563: 200,
                                564: 202,
                                565: 203,
                                566: 235,
                                567: 206,
                                568: 207,
                                569: 239,
                                570: 212,
                                571: 217,
                                572: 249,
                                573: 219,
                                574: 171,
                                575: 187,
                                800: 195,
                                801: 227,
                                802: 205,
                                803: 204,
                                804: 236,
                                805: 210,
                                806: 242,
                                807: 213,
                                808: 245,
                                809: 123,
                                810: 125,
                                811: 92,
                                812: 94,
                                813: 95,
                                814: 124,
                                815: 126,
                                816: 196,
                                817: 228,
                                818: 214,
                                819: 246,
                                820: 223,
                                821: 165,
                                822: 164,
                                823: 9474,
                                824: 197,
                                825: 229,
                                826: 216,
                                827: 248,
                                828: 9484,
                                829: 9488,
                                830: 9492,
                                831: 9496
                            },
                            Oe = function(e) {
                                return null === e ? "" : (e = xe[e] || e, String.fromCharCode(e))
                            },
                            De = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                            Me = function() {
                                for (var e = [], t = 15; t--;) e.push("");
                                return e
                            },
                            Re = function e(t, i) {
                                e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(e) {
                                    var t, i, n, r, s;
                                    if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                                        if (4096 === (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_)
                                            if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                            else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts;
                                        else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts);
                                        else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts);
                                        else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts);
                                        else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts;
                                        else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                                        else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = Me();
                                        else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Me();
                                        else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Me()), this.mode_ = "paintOn", this.startPts_ = e.pts;
                                        else if (this.isSpecialCharacter(n, r)) s = Oe((n = (3 & n) << 8) | r), this[this.mode_](e.pts, s), this.column_++;
                                        else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), s = Oe((n = (3 & n) << 8) | r), this[this.mode_](e.pts, s), this.column_++;
                                        else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 === (14 & r) && this.addFormatting(e.pts, ["i"]), 1 === (1 & r) && this.addFormatting(e.pts, ["u"]);
                                        else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                                        else if (this.isPAC(n, r)) {
                                            var a = De.indexOf(7968 & t);
                                            "rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)), a !== this.row_ && (this.clearFormatting(e.pts), this.row_ = a), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 === (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 === (14 & r) && this.addFormatting(e.pts, ["i"])
                                        } else this.isNormalChar(n) && (0 === r && (r = null), s = Oe(n), s += Oe(r), this[this.mode_](e.pts, s), this.column_ += s.length)
                                    } else this.lastControlCode_ = null
                                }
                            };
                        Re.prototype = new F, Re.prototype.flushDisplayed = function(e) {
                            var t = this.displayed_.map((function(e) {
                                try {
                                    return e.trim()
                                } catch (Qo) {
                                    return console.error("Skipping malformed caption."), ""
                                }
                            })).join("\n").replace(/^\n+|\n+$/g, "");
                            t.length && this.trigger("data", {
                                startPts: this.startPts_,
                                endPts: e,
                                text: t,
                                stream: this.name_
                            })
                        }, Re.prototype.reset = function() {
                            this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Me(), this.nonDisplayed_ = Me(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
                        }, Re.prototype.setConstants = function() {
                            0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                        }, Re.prototype.isSpecialCharacter = function(e, t) {
                            return e === this.EXT_ && t >= 48 && t <= 63
                        }, Re.prototype.isExtCharacter = function(e, t) {
                            return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
                        }, Re.prototype.isMidRowCode = function(e, t) {
                            return e === this.EXT_ && t >= 32 && t <= 47
                        }, Re.prototype.isOffsetControlCode = function(e, t) {
                            return e === this.OFFSET_ && t >= 33 && t <= 35
                        }, Re.prototype.isPAC = function(e, t) {
                            return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
                        }, Re.prototype.isColorPAC = function(e) {
                            return e >= 64 && e <= 79 || e >= 96 && e <= 127
                        }, Re.prototype.isNormalChar = function(e) {
                            return e >= 32 && e <= 127
                        }, Re.prototype.setRollUp = function(e, t) {
                            if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Me(), this.displayed_ = Me()), void 0 !== t && t !== this.row_)
                                for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = "";
                            void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
                        }, Re.prototype.addFormatting = function(e, t) {
                            this.formatting_ = this.formatting_.concat(t);
                            var i = t.reduce((function(e, t) {
                                return e + "<" + t + ">"
                            }), "");
                            this[this.mode_](e, i)
                        }, Re.prototype.clearFormatting = function(e) {
                            if (this.formatting_.length) {
                                var t = this.formatting_.reverse().reduce((function(e, t) {
                                    return e + "</" + t + ">"
                                }), "");
                                this.formatting_ = [], this[this.mode_](e, t)
                            }
                        }, Re.prototype.popOn = function(e, t) {
                            var i = this.nonDisplayed_[this.row_];
                            i += t, this.nonDisplayed_[this.row_] = i
                        }, Re.prototype.rollUp = function(e, t) {
                            var i = this.displayed_[this.row_];
                            i += t, this.displayed_[this.row_] = i
                        }, Re.prototype.shiftRowsUp_ = function() {
                            var e;
                            for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
                            for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
                            for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                            this.displayed_[this.row_] = ""
                        }, Re.prototype.paintOn = function(e, t) {
                            var i = this.displayed_[this.row_];
                            i += t, this.displayed_[this.row_] = i
                        };
                        var Ue = {
                                CaptionStream: Le,
                                Cea608Stream: Re
                            },
                            Ne = {
                                H264_STREAM_TYPE: 27,
                                ADTS_STREAM_TYPE: 15,
                                METADATA_STREAM_TYPE: 21
                            },
                            Fe = "shared",
                            Be = function(e, t) {
                                var i = 1;
                                for (e > t && (i = -1); Math.abs(t - e) > 4294967296;) e += 8589934592 * i;
                                return e
                            },
                            je = function e(t) {
                                var i, n;
                                e.prototype.init.call(this), this.type_ = t || Fe, this.push = function(e) {
                                    this.type_ !== Fe && e.type !== this.type_ || (void 0 === n && (n = e.dts), e.dts = Be(e.dts, n), e.pts = Be(e.pts, n), i = e.dts, this.trigger("data", e))
                                }, this.flush = function() {
                                    n = i, this.trigger("done")
                                }, this.endTimeline = function() {
                                    this.flush(), this.trigger("endedtimeline")
                                }, this.discontinuity = function() {
                                    n = void 0, i = void 0
                                }, this.reset = function() {
                                    this.discontinuity(), this.trigger("reset")
                                }
                            };
                        je.prototype = new F;
                        var qe, He = je,
                            Ve = function(e, t, i) {
                                var n, r = "";
                                for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
                                return r
                            },
                            We = function(e, t, i) {
                                return decodeURIComponent(Ve(e, t, i))
                            },
                            ze = function(e) {
                                return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
                            },
                            Ge = {
                                TXXX: function(e) {
                                    var t;
                                    if (3 === e.data[0]) {
                                        for (t = 1; t < e.data.length; t++)
                                            if (0 === e.data[t]) {
                                                e.description = We(e.data, 1, t), e.value = We(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                                                break
                                            }
                                        e.data = e.value
                                    }
                                },
                                WXXX: function(e) {
                                    var t;
                                    if (3 === e.data[0])
                                        for (t = 1; t < e.data.length; t++)
                                            if (0 === e.data[t]) {
                                                e.description = We(e.data, 1, t), e.url = We(e.data, t + 1, e.data.length);
                                                break
                                            }
                                },
                                PRIV: function(e) {
                                    var t, i;
                                    for (t = 0; t < e.data.length; t++)
                                        if (0 === e.data[t]) {
                                            e.owner = (i = e.data, unescape(Ve(i, 0, t)));
                                            break
                                        }
                                    e.privateData = e.data.subarray(t + 1), e.data = e.privateData
                                }
                            };
                        (qe = function(e) {
                            var t, i = {
                                    debug: !(!e || !e.debug),
                                    descriptor: e && e.descriptor
                                },
                                n = 0,
                                r = [],
                                s = 0;
                            if (qe.prototype.init.call(this), this.dispatchType = Ne.METADATA_STREAM_TYPE.toString(16), i.descriptor)
                                for (t = 0; t < i.descriptor.length; t++) this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
                            this.push = function(e) {
                                var t, a, o, l, u;
                                if ("timed-metadata" === e.type)
                                    if (e.dataAlignmentIndicator && (s = 0, r.length = 0), 0 === r.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) i.debug && console.log("Skipping unrecognized metadata packet");
                                    else if (r.push(e), s += e.data.byteLength, 1 === r.length && (n = ze(e.data.subarray(6, 10)), n += 10), !(s < n)) {
                                    for (t = {
                                            data: new Uint8Array(n),
                                            frames: [],
                                            pts: r[0].pts,
                                            dts: r[0].dts
                                        }, u = 0; u < n;) t.data.set(r[0].data.subarray(0, n - u), u), u += r[0].data.byteLength, s -= r[0].data.byteLength, r.shift();
                                    a = 10, 64 & t.data[5] && (a += 4, a += ze(t.data.subarray(10, 14)), n -= ze(t.data.subarray(16, 20)));
                                    do {
                                        if ((o = ze(t.data.subarray(a + 4, a + 8))) < 1) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                                        if ((l = {
                                                id: String.fromCharCode(t.data[a], t.data[a + 1], t.data[a + 2], t.data[a + 3]),
                                                data: t.data.subarray(a + 10, a + o + 10)
                                            }).key = l.id, Ge[l.id] && (Ge[l.id](l), "com.apple.streaming.transportStreamTimestamp" === l.owner)) {
                                            var c = l.data,
                                                d = (1 & c[3]) << 30 | c[4] << 22 | c[5] << 14 | c[6] << 6 | c[7] >>> 2;
                                            d *= 4, d += 3 & c[7], l.timeStamp = d, void 0 === t.pts && void 0 === t.dts && (t.pts = l.timeStamp, t.dts = l.timeStamp), this.trigger("timestamp", l)
                                        }
                                        t.frames.push(l), a += 10, a += o
                                    } while (a < n);
                                    this.trigger("data", t)
                                }
                            }
                        }).prototype = new F;
                        var Ke, Qe, Xe, Ye = qe,
                            $e = He,
                            Je = 188;
                        (Ke = function() {
                            var e = new Uint8Array(Je),
                                t = 0;
                            Ke.prototype.init.call(this), this.push = function(i) {
                                var n, r = 0,
                                    s = Je;
                                for (t ? ((n = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)), n.set(i, t), t = 0) : n = i; s < n.byteLength;) 71 !== n[r] || 71 !== n[s] ? (r++, s++) : (this.trigger("data", n.subarray(r, s)), r += Je, s += Je);
                                r < n.byteLength && (e.set(n.subarray(r), 0), t = n.byteLength - r)
                            }, this.flush = function() {
                                t === Je && 71 === e[0] && (this.trigger("data", e), t = 0), this.trigger("done")
                            }, this.endTimeline = function() {
                                this.flush(), this.trigger("endedtimeline")
                            }, this.reset = function() {
                                t = 0, this.trigger("reset")
                            }
                        }).prototype = new F, (Qe = function() {
                            var e, t, i, n;
                            Qe.prototype.init.call(this), n = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, e = function(e, n) {
                                var r = 0;
                                n.payloadUnitStartIndicator && (r += e[r] + 1), "pat" === n.type ? t(e.subarray(r), n) : i(e.subarray(r), n)
                            }, t = function(e, t) {
                                t.section_number = e[7], t.last_section_number = e[8], n.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = n.pmtPid
                            }, i = function(e, t) {
                                var i, r;
                                if (1 & e[5]) {
                                    for (n.programMapTable = {
                                            video: null,
                                            audio: null,
                                            "timed-metadata": {}
                                        }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, r = 12 + ((15 & e[10]) << 8 | e[11]); r < i;) {
                                        var s = e[r],
                                            a = (31 & e[r + 1]) << 8 | e[r + 2];
                                        s === Ne.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = a : s === Ne.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = a : s === Ne.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][a] = s), r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
                                    }
                                    t.programMapTable = n.programMapTable
                                }
                            }, this.push = function(t) {
                                var i = {},
                                    n = 4;
                                if (i.payloadUnitStartIndicator = !!(64 & t[1]), i.pid = 31 & t[1], i.pid <<= 8, i.pid |= t[2], (48 & t[3]) >>> 4 > 1 && (n += t[n] + 1), 0 === i.pid) i.type = "pat", e(t.subarray(n), i), this.trigger("data", i);
                                else if (i.pid === this.pmtPid)
                                    for (i.type = "pmt", e(t.subarray(n), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                                else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, n, i]) : this.processPes_(t, n, i)
                            }, this.processPes_ = function(e, t, i) {
                                i.pid === this.programMapTable.video ? i.streamType = Ne.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Ne.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
                            }
                        }).prototype = new F, Qe.STREAM_TYPES = {
                            h264: 27,
                            adts: 15
                        }, (Xe = function() {
                            var e, t = this,
                                i = {
                                    data: [],
                                    size: 0
                                },
                                n = {
                                    data: [],
                                    size: 0
                                },
                                r = {
                                    data: [],
                                    size: 0
                                },
                                s = function(e, i, n) {
                                    var r, s, a = new Uint8Array(e.size),
                                        o = {
                                            type: i
                                        },
                                        l = 0,
                                        u = 0;
                                    if (e.data.length && !(e.size < 9)) {
                                        for (o.trackId = e.data[0].pid, l = 0; l < e.data.length; l++) s = e.data[l], a.set(s.data, u), u += s.data.byteLength;
                                        ! function(e, t) {
                                            var i;
                                            t.packetLength = 6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = 0 !== (4 & e[6]), 192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1)), t.data = e.subarray(9 + e[8])
                                        }(a, o), r = "video" === i || o.packetLength <= e.size, (n || r) && (e.size = 0, e.data.length = 0), r && t.trigger("data", o)
                                    }
                                };
                            Xe.prototype.init.call(this), this.push = function(a) {
                                ({
                                    pat: function() {},
                                    pes: function() {
                                        var e, t;
                                        switch (a.streamType) {
                                            case Ne.H264_STREAM_TYPE:
                                                e = i, t = "video";
                                                break;
                                            case Ne.ADTS_STREAM_TYPE:
                                                e = n, t = "audio";
                                                break;
                                            case Ne.METADATA_STREAM_TYPE:
                                                e = r, t = "timed-metadata";
                                                break;
                                            default:
                                                return
                                        }
                                        a.payloadUnitStartIndicator && s(e, t, !0), e.data.push(a), e.size += a.data.byteLength
                                    },
                                    pmt: function() {
                                        var i = {
                                            type: "metadata",
                                            tracks: []
                                        };
                                        null !== (e = a.programMapTable).video && i.tracks.push({
                                            timelineStartInfo: {
                                                baseMediaDecodeTime: 0
                                            },
                                            id: +e.video,
                                            codec: "avc",
                                            type: "video"
                                        }), null !== e.audio && i.tracks.push({
                                            timelineStartInfo: {
                                                baseMediaDecodeTime: 0
                                            },
                                            id: +e.audio,
                                            codec: "adts",
                                            type: "audio"
                                        }), t.trigger("data", i)
                                    }
                                })[a.type]()
                            }, this.reset = function() {
                                i.size = 0, i.data.length = 0, n.size = 0, n.data.length = 0, this.trigger("reset")
                            }, this.flushStreams_ = function() {
                                s(i, "video"), s(n, "audio"), s(r, "timed-metadata")
                            }, this.flush = function() {
                                this.flushStreams_(), this.trigger("done")
                            }
                        }).prototype = new F;
                        var Ze = {
                            PAT_PID: 0,
                            MP2T_PACKET_LENGTH: Je,
                            TransportPacketStream: Ke,
                            TransportParseStream: Qe,
                            ElementaryStream: Xe,
                            TimestampRolloverStream: $e,
                            CaptionStream: Ue.CaptionStream,
                            Cea608Stream: Ue.Cea608Stream,
                            MetadataStream: Ye
                        };
                        for (var et in Ne) Ne.hasOwnProperty(et) && (Ze[et] = Ne[et]);
                        var tt, it = Ze,
                            nt = ce,
                            rt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                        (tt = function(e) {
                            var t, i = 0;
                            tt.prototype.init.call(this), this.push = function(n) {
                                var r, s, a, o, l, u, c = 0;
                                if (e || (i = 0), "audio" === n.type)
                                    for (t ? (o = t, (t = new Uint8Array(o.byteLength + n.data.byteLength)).set(o), t.set(n.data, o.byteLength)) : t = n.data; c + 5 < t.length;)
                                        if (255 === t[c] && 240 === (246 & t[c + 1])) {
                                            if (s = 2 * (1 & ~t[c + 1]), r = (3 & t[c + 3]) << 11 | t[c + 4] << 3 | (224 & t[c + 5]) >> 5, u = (l = 1024 * (1 + (3 & t[c + 6]))) * nt / rt[(60 & t[c + 2]) >>> 2], a = c + r, t.byteLength < a) return;
                                            if (this.trigger("data", {
                                                    pts: n.pts + i * u,
                                                    dts: n.dts + i * u,
                                                    sampleCount: l,
                                                    audioobjecttype: 1 + (t[c + 2] >>> 6 & 3),
                                                    channelcount: (1 & t[c + 2]) << 2 | (192 & t[c + 3]) >>> 6,
                                                    samplerate: rt[(60 & t[c + 2]) >>> 2],
                                                    samplingfrequencyindex: (60 & t[c + 2]) >>> 2,
                                                    samplesize: 16,
                                                    data: t.subarray(c + 7 + s, a)
                                                }), i++, t.byteLength === a) return void(t = void 0);
                                            t = t.subarray(a)
                                        } else c++
                            }, this.flush = function() {
                                i = 0, this.trigger("done")
                            }, this.reset = function() {
                                t = void 0, this.trigger("reset")
                            }, this.endTimeline = function() {
                                t = void 0, this.trigger("endedtimeline")
                            }
                        }).prototype = new F;
                        var st, at, ot, lt = tt,
                            ut = function(e) {
                                var t = e.byteLength,
                                    i = 0,
                                    n = 0;
                                this.length = function() {
                                    return 8 * t
                                }, this.bitsAvailable = function() {
                                    return 8 * t + n
                                }, this.loadWord = function() {
                                    var r = e.byteLength - t,
                                        s = new Uint8Array(4),
                                        a = Math.min(4, t);
                                    if (0 === a) throw new Error("no bytes available");
                                    s.set(e.subarray(r, r + a)), i = new DataView(s.buffer).getUint32(0), n = 8 * a, t -= a
                                }, this.skipBits = function(e) {
                                    var r;
                                    n > e ? (i <<= e, n -= e) : (e -= n, e -= 8 * (r = Math.floor(e / 8)), t -= r, this.loadWord(), i <<= e, n -= e)
                                }, this.readBits = function(e) {
                                    var r = Math.min(n, e),
                                        s = i >>> 32 - r;
                                    return (n -= r) > 0 ? i <<= r : t > 0 && this.loadWord(), (r = e - r) > 0 ? s << r | this.readBits(r) : s
                                }, this.skipLeadingZeros = function() {
                                    var e;
                                    for (e = 0; e < n; ++e)
                                        if (0 !== (i & 2147483648 >>> e)) return i <<= e, n -= e, e;
                                    return this.loadWord(), e + this.skipLeadingZeros()
                                }, this.skipUnsignedExpGolomb = function() {
                                    this.skipBits(1 + this.skipLeadingZeros())
                                }, this.skipExpGolomb = function() {
                                    this.skipBits(1 + this.skipLeadingZeros())
                                }, this.readUnsignedExpGolomb = function() {
                                    var e = this.skipLeadingZeros();
                                    return this.readBits(e + 1) - 1
                                }, this.readExpGolomb = function() {
                                    var e = this.readUnsignedExpGolomb();
                                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                                }, this.readBoolean = function() {
                                    return 1 === this.readBits(1)
                                }, this.readUnsignedByte = function() {
                                    return this.readBits(8)
                                }, this.loadWord()
                            };
                        (at = function() {
                            var e, t, i = 0;
                            at.prototype.init.call(this), this.push = function(n) {
                                var r;
                                t ? ((r = new Uint8Array(t.byteLength + n.data.byteLength)).set(t), r.set(n.data, t.byteLength), t = r) : t = n.data;
                                for (var s = t.byteLength; i < s - 3; i++)
                                    if (1 === t[i + 2]) {
                                        e = i + 5;
                                        break
                                    }
                                for (; e < s;) switch (t[e]) {
                                    case 0:
                                        if (0 !== t[e - 1]) {
                                            e += 2;
                                            break
                                        }
                                        if (0 !== t[e - 2]) {
                                            e++;
                                            break
                                        }
                                        i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
                                        do {
                                            e++
                                        } while (1 !== t[e] && e < s);
                                        i = e - 2, e += 3;
                                        break;
                                    case 1:
                                        if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                                            e += 3;
                                            break
                                        }
                                        this.trigger("data", t.subarray(i + 3, e - 2)), i = e - 2, e += 3;
                                        break;
                                    default:
                                        e += 3
                                }
                                t = t.subarray(i), e -= i, i = 0
                            }, this.reset = function() {
                                t = null, i = 0, this.trigger("reset")
                            }, this.flush = function() {
                                t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)), t = null, i = 0, this.trigger("done")
                            }, this.endTimeline = function() {
                                this.flush(), this.trigger("endedtimeline")
                            }
                        }).prototype = new F, ot = {
                            100: !0,
                            110: !0,
                            122: !0,
                            244: !0,
                            44: !0,
                            83: !0,
                            86: !0,
                            118: !0,
                            128: !0,
                            138: !0,
                            139: !0,
                            134: !0
                        }, (st = function() {
                            var e, t, i, n, r, s, a, o = new at;
                            st.prototype.init.call(this), e = this, this.push = function(e) {
                                "video" === e.type && (t = e.trackId, i = e.pts, n = e.dts, o.push(e))
                            }, o.on("data", (function(a) {
                                var o = {
                                    trackId: t,
                                    pts: i,
                                    dts: n,
                                    data: a
                                };
                                switch (31 & a[0]) {
                                    case 5:
                                        o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                        break;
                                    case 6:
                                        o.nalUnitType = "sei_rbsp", o.escapedRBSP = r(a.subarray(1));
                                        break;
                                    case 7:
                                        o.nalUnitType = "seq_parameter_set_rbsp", o.escapedRBSP = r(a.subarray(1)), o.config = s(o.escapedRBSP);
                                        break;
                                    case 8:
                                        o.nalUnitType = "pic_parameter_set_rbsp";
                                        break;
                                    case 9:
                                        o.nalUnitType = "access_unit_delimiter_rbsp"
                                }
                                e.trigger("data", o)
                            })), o.on("done", (function() {
                                e.trigger("done")
                            })), o.on("partialdone", (function() {
                                e.trigger("partialdone")
                            })), o.on("reset", (function() {
                                e.trigger("reset")
                            })), o.on("endedtimeline", (function() {
                                e.trigger("endedtimeline")
                            })), this.flush = function() {
                                o.flush()
                            }, this.partialFlush = function() {
                                o.partialFlush()
                            }, this.reset = function() {
                                o.reset()
                            }, this.endTimeline = function() {
                                o.endTimeline()
                            }, a = function(e, t) {
                                var i, n = 8,
                                    r = 8;
                                for (i = 0; i < e; i++) 0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), n = 0 === r ? n : r
                            }, r = function(e) {
                                for (var t, i, n = e.byteLength, r = [], s = 1; s < n - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++;
                                if (0 === r.length) return e;
                                t = n - r.length, i = new Uint8Array(t);
                                var a = 0;
                                for (s = 0; s < t; a++, s++) a === r[0] && (a++, r.shift()), i[s] = e[a];
                                return i
                            }, s = function(e) {
                                var t, i, n, r, s, o, l, u, c, d, h, p, f, m = 0,
                                    g = 0,
                                    v = 0,
                                    _ = 0,
                                    y = 1;
                                if (i = (t = new ut(e)).readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), ot[i] && (3 === (s = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                                    for (h = 3 !== s ? 8 : 12, f = 0; f < h; f++) t.readBoolean() && a(f < 6 ? 16 : 64, t);
                                if (t.skipUnsignedExpGolomb(), 0 === (o = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                                else if (1 === o)
                                    for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), l = t.readUnsignedExpGolomb(), f = 0; f < l; f++) t.skipExpGolomb();
                                if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), c = t.readUnsignedExpGolomb(), 0 === (d = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), v = t.readUnsignedExpGolomb(), _ = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                                    switch (t.readUnsignedByte()) {
                                        case 1:
                                            p = [1, 1];
                                            break;
                                        case 2:
                                            p = [12, 11];
                                            break;
                                        case 3:
                                            p = [10, 11];
                                            break;
                                        case 4:
                                            p = [16, 11];
                                            break;
                                        case 5:
                                            p = [40, 33];
                                            break;
                                        case 6:
                                            p = [24, 11];
                                            break;
                                        case 7:
                                            p = [20, 11];
                                            break;
                                        case 8:
                                            p = [32, 11];
                                            break;
                                        case 9:
                                            p = [80, 33];
                                            break;
                                        case 10:
                                            p = [18, 11];
                                            break;
                                        case 11:
                                            p = [15, 11];
                                            break;
                                        case 12:
                                            p = [64, 33];
                                            break;
                                        case 13:
                                            p = [160, 99];
                                            break;
                                        case 14:
                                            p = [4, 3];
                                            break;
                                        case 15:
                                            p = [3, 2];
                                            break;
                                        case 16:
                                            p = [2, 1];
                                            break;
                                        case 255:
                                            p = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                                    }
                                    p && (y = p[0] / p[1])
                                }
                                return {
                                    profileIdc: i,
                                    levelIdc: n,
                                    profileCompatibility: r,
                                    width: Math.ceil((16 * (u + 1) - 2 * m - 2 * g) * y),
                                    height: (2 - d) * (c + 1) * 16 - 2 * v - 2 * _,
                                    sarRatio: p
                                }
                            }
                        }).prototype = new F;
                        var ct, dt = {
                                H264Stream: st,
                                NalByteStream: at
                            },
                            ht = function(e, t) {
                                var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                                return i = i >= 0 ? i : 0, (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
                            },
                            pt = function e(t, i) {
                                return t.length - i < 10 || t[i] !== "I".charCodeAt(0) || t[i + 1] !== "D".charCodeAt(0) || t[i + 2] !== "3".charCodeAt(0) ? i : e(t, i += ht(t, i))
                            },
                            ft = function(e) {
                                var t = pt(e, 0);
                                return e.length >= t + 2 && 255 === (255 & e[t]) && 240 === (240 & e[t + 1]) && 16 === (22 & e[t + 1])
                            },
                            mt = ht,
                            gt = function(e, t) {
                                var i = (224 & e[t + 5]) >> 5,
                                    n = e[t + 4] << 3;
                                return 6144 & e[t + 3] | n | i
                            };
                        (ct = function() {
                            var e = new Uint8Array,
                                t = 0;
                            ct.prototype.init.call(this), this.setTimestamp = function(e) {
                                t = e
                            }, this.push = function(i) {
                                var n, r, s, a, o = 0,
                                    l = 0;
                                for (e.length ? (a = e.length, (e = new Uint8Array(i.byteLength + a)).set(e.subarray(0, a)), e.set(i, a)) : e = i; e.length - l >= 3;)
                                    if (e[l] !== "I".charCodeAt(0) || e[l + 1] !== "D".charCodeAt(0) || e[l + 2] !== "3".charCodeAt(0))
                                        if (255 !== (255 & e[l]) || 240 !== (240 & e[l + 1])) l++;
                                        else {
                                            if (e.length - l < 7) break;
                                            if (l + (o = gt(e, l)) > e.length) break;
                                            s = {
                                                type: "audio",
                                                data: e.subarray(l, l + o),
                                                pts: t,
                                                dts: t
                                            }, this.trigger("data", s), l += o
                                        }
                                else {
                                    if (e.length - l < 10) break;
                                    if (l + (o = mt(e, l)) > e.length) break;
                                    r = {
                                        type: "timed-metadata",
                                        data: e.subarray(l, l + o)
                                    }, this.trigger("data", r), l += o
                                }
                                n = e.length - l, e = n > 0 ? e.subarray(l) : new Uint8Array
                            }, this.reset = function() {
                                e = new Uint8Array, this.trigger("reset")
                            }, this.endTimeline = function() {
                                e = new Uint8Array, this.trigger("endedtimeline")
                            }
                        }).prototype = new F;
                        var vt, _t, yt, Tt, bt = ct,
                            St = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                            kt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"],
                            Ct = dt.H264Stream,
                            Et = ft,
                            wt = ce,
                            It = function(e, t) {
                                var i;
                                if (e.length !== t.length) return !1;
                                for (i = 0; i < e.length; i++)
                                    if (e[i] !== t[i]) return !1;
                                return !0
                            },
                            Pt = function(e, t, i, n, r, s) {
                                return {
                                    start: {
                                        dts: e,
                                        pts: e + (i - t)
                                    },
                                    end: {
                                        dts: e + (n - t),
                                        pts: e + (r - i)
                                    },
                                    prependedContentDuration: s,
                                    baseMediaDecodeTime: e
                                }
                            };
                        (_t = function(e, t) {
                            var i = [],
                                n = 0,
                                r = 0,
                                s = 0,
                                a = 1 / 0;
                            t = t || {}, _t.prototype.init.call(this), this.push = function(t) {
                                Ce(e, t), e && St.forEach((function(i) {
                                    e[i] = t[i]
                                })), i.push(t)
                            }, this.setEarliestDts = function(e) {
                                r = e
                            }, this.setVideoBaseMediaDecodeTime = function(e) {
                                a = e
                            }, this.setAudioAppendStart = function(e) {
                                s = e
                            }, this.flush = function() {
                                var o, l, u, c, d;
                                0 !== i.length ? (o = _e(i, e, r), e.baseMediaDecodeTime = ke(e, t.keepOriginalTimestamps), ve(e, o, s, a), e.samples = ye(o), u = Q(Te(o)), i = [], l = X(n, [e]), c = new Uint8Array(l.byteLength + u.byteLength), n++, c.set(l), c.set(u, l.byteLength), Se(e), d = Math.ceil(1024 * wt / e.samplerate), o.length && this.trigger("timingInfo", {
                                    start: o[0].pts,
                                    end: o[0].pts + o.length * d
                                }), this.trigger("data", {
                                    track: e,
                                    boxes: c
                                }), this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream")
                            }, this.reset = function() {
                                Se(e), i = [], this.trigger("reset")
                            }
                        }).prototype = new F, (vt = function(e, t) {
                            var i, n, r = 0,
                                s = [],
                                a = [];
                            t = t || {}, vt.prototype.init.call(this), delete e.minPTS, this.gopCache_ = [], this.push = function(t) {
                                Ce(e, t), "seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config, e.sps = [t.data], kt.forEach((function(t) {
                                    e[t] = i[t]
                                }), this)), "pic_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.data, e.pps = [t.data]), s.push(t)
                            }, this.flush = function() {
                                for (var i, n, o, l, u, c, d, h, p = 0; s.length && "access_unit_delimiter_rbsp" !== s[0].nalUnitType;) s.shift();
                                if (0 === s.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                                if (i = J(s), (o = Z(i))[0][0].keyFrame || ((n = this.getGopForFusion_(s[0], e)) ? (p = n.duration, o.unshift(n), o.byteLength += n.byteLength, o.nalCount += n.nalCount, o.pts = n.pts, o.dts = n.dts, o.duration += n.duration) : o = ee(o)), a.length) {
                                    var f;
                                    if (!(f = t.alignGopsAtEnd ? this.alignGopsAtEnd_(o) : this.alignGopsAtStart_(o))) return this.gopCache_.unshift({
                                        gop: o.pop(),
                                        pps: e.pps,
                                        sps: e.sps
                                    }), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                                    Se(e), o = f
                                }
                                Ce(e, o), e.samples = te(o), u = Q(ie(o)), e.baseMediaDecodeTime = ke(e, t.keepOriginalTimestamps), this.trigger("processedGopsInfo", o.map((function(e) {
                                    return {
                                        pts: e.pts,
                                        dts: e.dts,
                                        byteLength: e.byteLength
                                    }
                                }))), d = o[0], h = o[o.length - 1], this.trigger("segmentTimingInfo", Pt(e.baseMediaDecodeTime, d.dts, d.pts, h.dts + h.duration, h.pts + h.duration, p)), this.trigger("timingInfo", {
                                    start: o[0].pts,
                                    end: o[o.length - 1].pts + o[o.length - 1].duration
                                }), this.gopCache_.unshift({
                                    gop: o.pop(),
                                    pps: e.pps,
                                    sps: e.sps
                                }), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), this.trigger("timelineStartInfo", e.timelineStartInfo), l = X(r, [e]), c = new Uint8Array(l.byteLength + u.byteLength), r++, c.set(l), c.set(u, l.byteLength), this.trigger("data", {
                                    track: e,
                                    boxes: c
                                }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                            }, this.reset = function() {
                                this.resetStream_(), s = [], this.gopCache_.length = 0, a.length = 0, this.trigger("reset")
                            }, this.resetStream_ = function() {
                                Se(e), i = void 0, n = void 0
                            }, this.getGopForFusion_ = function(t) {
                                var i, n, r, s, a, o = 1 / 0;
                                for (a = 0; a < this.gopCache_.length; a++) r = (s = this.gopCache_[a]).gop, e.pps && It(e.pps[0], s.pps[0]) && e.sps && It(e.sps[0], s.sps[0]) && (r.dts < e.timelineStartInfo.dts || (i = t.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || o > i) && (n = s, o = i));
                                return n ? n.gop : null
                            }, this.alignGopsAtStart_ = function(e) {
                                var t, i, n, r, s, o, l, u;
                                for (s = e.byteLength, o = e.nalCount, l = e.duration, t = i = 0; t < a.length && i < e.length && (n = a[t], r = e[i], n.pts !== r.pts);) r.pts > n.pts ? t++ : (i++, s -= r.byteLength, o -= r.nalCount, l -= r.duration);
                                return 0 === i ? e : i === e.length ? null : ((u = e.slice(i)).byteLength = s, u.duration = l, u.nalCount = o, u.pts = u[0].pts, u.dts = u[0].dts, u)
                            }, this.alignGopsAtEnd_ = function(e) {
                                var t, i, n, r, s, o, l;
                                for (t = a.length - 1, i = e.length - 1, s = null, o = !1; t >= 0 && i >= 0;) {
                                    if (n = a[t], r = e[i], n.pts === r.pts) {
                                        o = !0;
                                        break
                                    }
                                    n.pts > r.pts ? t-- : (t === a.length - 1 && (s = i), i--)
                                }
                                if (!o && null === s) return null;
                                if (0 === (l = o ? i : s)) return e;
                                var u = e.slice(l),
                                    c = u.reduce((function(e, t) {
                                        return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                                    }), {
                                        byteLength: 0,
                                        duration: 0,
                                        nalCount: 0
                                    });
                                return u.byteLength = c.byteLength, u.duration = c.duration, u.nalCount = c.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
                            }, this.alignGopsWith = function(e) {
                                a = e
                            }
                        }).prototype = new F, (Tt = function(e, t) {
                            this.numberOfTracks = 0, this.metadataStream = t, "undefined" !== typeof(e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" === typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps = !1, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, Tt.prototype.init.call(this), this.push = function(e) {
                                return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), void("audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes))))
                            }
                        }).prototype = new F, Tt.prototype.flush = function(e) {
                            var t, i, n, r, s = 0,
                                a = {
                                    captions: [],
                                    captionStreams: {},
                                    metadata: [],
                                    info: {}
                                },
                                o = 0;
                            if (this.pendingTracks.length < this.numberOfTracks) {
                                if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                                if (this.remuxTracks) return;
                                if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
                            }
                            if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, kt.forEach((function(e) {
                                    a.info[e] = this.videoTrack[e]
                                }), this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, St.forEach((function(e) {
                                    a.info[e] = this.audioTrack[e]
                                }), this)), this.videoTrack || this.audioTrack) {
                                for (1 === this.pendingTracks.length ? a.type = this.pendingTracks[0].type : a.type = "combined", this.emittedTracks += this.pendingTracks.length, n = Y(this.pendingTracks), a.initSegment = new Uint8Array(n.byteLength), a.initSegment.set(n), a.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) a.data.set(this.pendingBoxes[r], s), s += this.pendingBoxes[r].byteLength;
                                for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = fe(t.startPts, o, this.keepOriginalTimestamps), t.endTime = fe(t.endPts, o, this.keepOriginalTimestamps), a.captionStreams[t.stream] = !0, a.captions.push(t);
                                for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = fe(i.pts, o, this.keepOriginalTimestamps), a.metadata.push(i);
                                for (a.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a), r = 0; r < a.captions.length; r++) t = a.captions[r], this.trigger("caption", t);
                                for (r = 0; r < a.metadata.length; r++) i = a.metadata[r], this.trigger("id3Frame", i)
                            }
                            this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                        }, Tt.prototype.setRemux = function(e) {
                            this.remuxTracks = e
                        }, (yt = function(e) {
                            var t, i, n = this,
                                r = !0;
                            yt.prototype.init.call(this), e = e || {}, this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
                                var r = {};
                                this.transmuxPipeline_ = r, r.type = "aac", r.metadataStream = new it.MetadataStream, r.aacStream = new bt, r.audioTimestampRolloverStream = new it.TimestampRolloverStream("audio"), r.timedMetadataTimestampRolloverStream = new it.TimestampRolloverStream("timed-metadata"), r.adtsStream = new lt, r.coalesceStream = new Tt(e, r.metadataStream), r.headOfPipeline = r.aacStream, r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream), r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream), r.metadataStream.on("timestamp", (function(e) {
                                    r.aacStream.setTimestamp(e.timeStamp)
                                })), r.aacStream.on("data", (function(s) {
                                    "timed-metadata" !== s.type && "audio" !== s.type || r.audioSegmentStream || (i = i || {
                                        timelineStartInfo: {
                                            baseMediaDecodeTime: n.baseMediaDecodeTime
                                        },
                                        codec: "adts",
                                        type: "audio"
                                    }, r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new _t(i, e), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream), n.trigger("trackinfo", {
                                        hasAudio: !!i,
                                        hasVideo: !!t
                                    }))
                                })), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("done", this.trigger.bind(this, "done"))
                            }, this.setupTsPipeline = function() {
                                var r = {};
                                this.transmuxPipeline_ = r, r.type = "ts", r.metadataStream = new it.MetadataStream, r.packetStream = new it.TransportPacketStream, r.parseStream = new it.TransportParseStream, r.elementaryStream = new it.ElementaryStream, r.timestampRolloverStream = new it.TimestampRolloverStream, r.adtsStream = new lt, r.h264Stream = new Ct, r.captionStream = new it.CaptionStream, r.coalesceStream = new Tt(e, r.metadataStream), r.headOfPipeline = r.packetStream, r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream), r.timestampRolloverStream.pipe(r.h264Stream), r.timestampRolloverStream.pipe(r.adtsStream), r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream), r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream), r.elementaryStream.on("data", (function(s) {
                                    var a;
                                    if ("metadata" === s.type) {
                                        for (a = s.tracks.length; a--;) t || "video" !== s.tracks[a].type ? i || "audio" !== s.tracks[a].type || ((i = s.tracks[a]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime) : (t = s.tracks[a]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime;
                                        t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++, r.videoSegmentStream = new vt(t, e), r.videoSegmentStream.on("timelineStartInfo", (function(t) {
                                            i && !e.keepOriginalTimestamps && (i.timelineStartInfo = t, r.audioSegmentStream.setEarliestDts(t.dts - n.baseMediaDecodeTime))
                                        })), r.videoSegmentStream.on("processedGopsInfo", n.trigger.bind(n, "gopInfo")), r.videoSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "videoSegmentTimingInfo")), r.videoSegmentStream.on("baseMediaDecodeTime", (function(e) {
                                            i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                                        })), r.videoSegmentStream.on("timingInfo", n.trigger.bind(n, "videoTimingInfo")), r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)), i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new _t(i, e), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)), n.trigger("trackinfo", {
                                            hasAudio: !!i,
                                            hasVideo: !!t
                                        })
                                    }
                                })), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("id3Frame", (function(e) {
                                    e.dispatchType = r.metadataStream.dispatchType, n.trigger("id3Frame", e)
                                })), r.coalesceStream.on("caption", this.trigger.bind(this, "caption")), r.coalesceStream.on("done", this.trigger.bind(this, "done"))
                            }, this.setBaseMediaDecodeTime = function(n) {
                                var r = this.transmuxPipeline_;
                                e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n), i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, Se(i), r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()), t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []), t.timelineStartInfo.dts = void 0, t.timelineStartInfo.pts = void 0, Se(t), r.captionStream.reset()), r.timestampRolloverStream && r.timestampRolloverStream.discontinuity()
                            }, this.setAudioAppendStart = function(e) {
                                i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                            }, this.setRemux = function(t) {
                                var i = this.transmuxPipeline_;
                                e.remux = t, i && i.coalesceStream && i.coalesceStream.setRemux(t)
                            }, this.alignGopsWith = function(e) {
                                t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                            }, this.push = function(e) {
                                if (r) {
                                    var t = Et(e);
                                    t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), r = !1
                                }
                                this.transmuxPipeline_.headOfPipeline.push(e)
                            }, this.flush = function() {
                                r = !0, this.transmuxPipeline_.headOfPipeline.flush()
                            }, this.endTimeline = function() {
                                this.transmuxPipeline_.headOfPipeline.endTimeline()
                            }, this.reset = function() {
                                this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
                            }, this.resetCaptions = function() {
                                this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                            }
                        }).prototype = new F;
                        var At = {
                                Transmuxer: yt,
                                VideoSegmentStream: vt,
                                AudioSegmentStream: _t,
                                AUDIO_PROPERTIES: St,
                                VIDEO_PROPERTIES: kt,
                                generateVideoSegmentTimingInfo: Pt
                            }.Transmuxer,
                            Lt = {
                                Adts: lt,
                                h264: dt
                            },
                            xt = ce,
                            Ot = function e(t, i) {
                                var n = [],
                                    r = 0,
                                    s = 0,
                                    a = 0,
                                    o = 1 / 0,
                                    l = null,
                                    u = null;
                                i = i || {}, e.prototype.init.call(this), this.push = function(e) {
                                    Ce(t, e), t && St.forEach((function(i) {
                                        t[i] = e[i]
                                    })), n.push(e)
                                }, this.setEarliestDts = function(e) {
                                    s = e
                                }, this.setVideoBaseMediaDecodeTime = function(e) {
                                    o = e
                                }, this.setAudioAppendStart = function(e) {
                                    a = e
                                }, this.processFrames_ = function() {
                                    var e, c, d, h, p;
                                    0 !== n.length && 0 !== (e = _e(n, t, s)).length && (t.baseMediaDecodeTime = ke(t, i.keepOriginalTimestamps), ve(t, e, a, o), t.samples = ye(e), d = Q(Te(e)), n = [], c = X(r, [t]), r++, t.initSegment = Y([t]), (h = new Uint8Array(c.byteLength + d.byteLength)).set(c), h.set(d, c.byteLength), Se(t), null === l && (u = l = e[0].pts), u += e.length * (1024 * xt / t.samplerate), p = {
                                        start: l
                                    }, this.trigger("timingInfo", p), this.trigger("data", {
                                        track: t,
                                        boxes: h
                                    }))
                                }, this.flush = function() {
                                    this.processFrames_(), this.trigger("timingInfo", {
                                        start: l,
                                        end: u
                                    }), this.resetTiming_(), this.trigger("done", "AudioSegmentStream")
                                }, this.partialFlush = function() {
                                    this.processFrames_(), this.trigger("partialdone", "AudioSegmentStream")
                                }, this.endTimeline = function() {
                                    this.flush(), this.trigger("endedtimeline", "AudioSegmentStream")
                                }, this.resetTiming_ = function() {
                                    Se(t), l = null, u = null
                                }, this.reset = function() {
                                    this.resetTiming_(), n = [], this.trigger("reset")
                                }
                            };
                        Ot.prototype = new F;
                        var Dt = Ot,
                            Mt = function e(t, i) {
                                var n, r, s, a = 0,
                                    o = [],
                                    l = [],
                                    u = null,
                                    c = null,
                                    d = !0;
                                i = i || {}, e.prototype.init.call(this), this.push = function(e) {
                                    Ce(t, e), "undefined" === typeof t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), "seq_parameter_set_rbsp" !== e.nalUnitType || n || (n = e.config, t.sps = [e.data], kt.forEach((function(e) {
                                        t[e] = n[e]
                                    }), this)), "pic_parameter_set_rbsp" !== e.nalUnitType || r || (r = e.data, t.pps = [e.data]), o.push(e)
                                }, this.processNals_ = function(e) {
                                    var n;
                                    for (o = l.concat(o); o.length && "access_unit_delimiter_rbsp" !== o[0].nalUnitType;) o.shift();
                                    if (0 !== o.length) {
                                        var r = J(o);
                                        if (r.length)
                                            if (l = r[r.length - 1], e && (r.pop(), r.duration -= l.duration, r.nalCount -= l.length, r.byteLength -= l.byteLength), r.length) {
                                                if (this.trigger("timelineStartInfo", t.timelineStartInfo), d) {
                                                    if (!(s = Z(r))[0][0].keyFrame) {
                                                        if (!(s = ee(s))[0][0].keyFrame) return o = [].concat.apply([], r).concat(l), void(l = []);
                                                        (r = [].concat.apply([], s)).duration = s.duration
                                                    }
                                                    d = !1
                                                }
                                                for (null === u && (u = r[0].pts, c = u), c += r.duration, this.trigger("timingInfo", {
                                                        start: u,
                                                        end: c
                                                    }), n = 0; n < r.length; n++) {
                                                    var h = r[n];
                                                    t.samples = ne(h);
                                                    var p = Q(re(h));
                                                    Se(t), Ce(t, h), t.baseMediaDecodeTime = ke(t, i.keepOriginalTimestamps);
                                                    var f = X(a, [t]);
                                                    a++, t.initSegment = Y([t]);
                                                    var m = new Uint8Array(f.byteLength + p.byteLength);
                                                    m.set(f), m.set(p, f.byteLength), this.trigger("data", {
                                                        track: t,
                                                        boxes: m,
                                                        sequence: a,
                                                        videoFrameDts: h.dts,
                                                        videoFramePts: h.pts
                                                    })
                                                }
                                                o = []
                                            } else o = []
                                    }
                                }, this.resetTimingAndConfig_ = function() {
                                    n = void 0, r = void 0, u = null, c = null
                                }, this.partialFlush = function() {
                                    this.processNals_(!0), this.trigger("partialdone", "VideoSegmentStream")
                                }, this.flush = function() {
                                    this.processNals_(!1), this.resetTimingAndConfig_(), this.trigger("done", "VideoSegmentStream")
                                }, this.endTimeline = function() {
                                    this.flush(), this.trigger("endedtimeline", "VideoSegmentStream")
                                }, this.reset = function() {
                                    this.resetTimingAndConfig_(), l = [], o = [], d = !0, this.trigger("reset")
                                }
                            };
                        Mt.prototype = new F;
                        var Rt = Mt,
                            Ut = ft,
                            Nt = function(e) {
                                return e.prototype = new F, e.prototype.init.call(e), e
                            },
                            Ft = function(e, t) {
                                e.on("data", t.trigger.bind(t, "data")), e.on("done", t.trigger.bind(t, "done")), e.on("partialdone", t.trigger.bind(t, "partialdone")), e.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), e.on("audioTimingInfo", t.trigger.bind(t, "audioTimingInfo")), e.on("videoTimingInfo", t.trigger.bind(t, "videoTimingInfo")), e.on("trackinfo", t.trigger.bind(t, "trackinfo")), e.on("id3Frame", (function(i) {
                                    i.dispatchType = e.metadataStream.dispatchType, i.cueTime = de(i.pts), t.trigger("id3Frame", i)
                                })), e.on("caption", (function(e) {
                                    t.trigger("caption", e)
                                }))
                            },
                            Bt = function e(t) {
                                var i = null,
                                    n = !0;
                                t = t || {}, e.prototype.init.call(this), t.baseMediaDecodeTime = t.baseMediaDecodeTime || 0, this.push = function(e) {
                                    if (n) {
                                        var r = Ut(e);
                                        !r || i && "aac" === i.type ? r || i && "ts" === i.type || (i = function(e) {
                                            var t = {
                                                type: "ts",
                                                tracks: {
                                                    audio: null,
                                                    video: null
                                                },
                                                packet: new it.TransportPacketStream,
                                                parse: new it.TransportParseStream,
                                                elementary: new it.ElementaryStream,
                                                timestampRollover: new it.TimestampRolloverStream,
                                                adts: new Lt.Adts,
                                                h264: new Lt.h264.H264Stream,
                                                captionStream: new it.CaptionStream,
                                                metadataStream: new it.MetadataStream
                                            };
                                            return t.headOfPipeline = t.packet, t.packet.pipe(t.parse).pipe(t.elementary).pipe(t.timestampRollover), t.timestampRollover.pipe(t.h264), t.h264.pipe(t.captionStream), t.timestampRollover.pipe(t.metadataStream), t.timestampRollover.pipe(t.adts), t.elementary.on("data", (function(i) {
                                                if ("metadata" === i.type) {
                                                    for (var n = 0; n < i.tracks.length; n++) t.tracks[i.tracks[n].type] || (t.tracks[i.tracks[n].type] = i.tracks[n], t.tracks[i.tracks[n].type].timelineStartInfo.baseMediaDecodeTime = e.baseMediaDecodeTime);
                                                    t.tracks.video && !t.videoSegmentStream && (t.videoSegmentStream = new Rt(t.tracks.video, e), t.videoSegmentStream.on("timelineStartInfo", (function(i) {
                                                        t.tracks.audio && !e.keepOriginalTimestamps && t.audioSegmentStream.setEarliestDts(i.dts - e.baseMediaDecodeTime)
                                                    })), t.videoSegmentStream.on("timingInfo", t.trigger.bind(t, "videoTimingInfo")), t.videoSegmentStream.on("data", (function(e) {
                                                        t.trigger("data", {
                                                            type: "video",
                                                            data: e
                                                        })
                                                    })), t.videoSegmentStream.on("done", t.trigger.bind(t, "done")), t.videoSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), t.videoSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.h264.pipe(t.videoSegmentStream)), t.tracks.audio && !t.audioSegmentStream && (t.audioSegmentStream = new Dt(t.tracks.audio, e), t.audioSegmentStream.on("data", (function(e) {
                                                        t.trigger("data", {
                                                            type: "audio",
                                                            data: e
                                                        })
                                                    })), t.audioSegmentStream.on("done", t.trigger.bind(t, "done")), t.audioSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), t.audioSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.audioSegmentStream.on("timingInfo", t.trigger.bind(t, "audioTimingInfo")), t.adts.pipe(t.audioSegmentStream)), t.trigger("trackinfo", {
                                                        hasAudio: !!t.tracks.audio,
                                                        hasVideo: !!t.tracks.video
                                                    })
                                                }
                                            })), t.captionStream.on("data", (function(i) {
                                                var n;
                                                n = t.tracks.video && t.tracks.video.timelineStartInfo.pts || 0, i.startTime = fe(i.startPts, n, e.keepOriginalTimestamps), i.endTime = fe(i.endPts, n, e.keepOriginalTimestamps), t.trigger("caption", i)
                                            })), (t = Nt(t)).metadataStream.on("data", t.trigger.bind(t, "id3Frame")), t
                                        }(t), Ft(i, this)) : (i = function(e) {
                                            var t = {
                                                type: "aac",
                                                tracks: {
                                                    audio: null
                                                },
                                                metadataStream: new it.MetadataStream,
                                                aacStream: new bt,
                                                audioRollover: new it.TimestampRolloverStream("audio"),
                                                timedMetadataRollover: new it.TimestampRolloverStream("timed-metadata"),
                                                adtsStream: new lt(!0)
                                            };
                                            return t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioRollover).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataRollover).pipe(t.metadataStream), t.metadataStream.on("timestamp", (function(e) {
                                                t.aacStream.setTimestamp(e.timeStamp)
                                            })), t.aacStream.on("data", (function(i) {
                                                "timed-metadata" !== i.type && "audio" !== i.type || t.audioSegmentStream || (t.tracks.audio = t.tracks.audio || {
                                                    timelineStartInfo: {
                                                        baseMediaDecodeTime: e.baseMediaDecodeTime
                                                    },
                                                    codec: "adts",
                                                    type: "audio"
                                                }, t.audioSegmentStream = new Dt(t.tracks.audio, e), t.audioSegmentStream.on("data", (function(e) {
                                                    t.trigger("data", {
                                                        type: "audio",
                                                        data: e
                                                    })
                                                })), t.audioSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), t.audioSegmentStream.on("done", t.trigger.bind(t, "done")), t.audioSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.audioSegmentStream.on("timingInfo", t.trigger.bind(t, "audioTimingInfo")), t.adtsStream.pipe(t.audioSegmentStream), t.trigger("trackinfo", {
                                                    hasAudio: !!t.tracks.audio,
                                                    hasVideo: !!t.tracks.video
                                                }))
                                            })), (t = Nt(t)).metadataStream.on("data", t.trigger.bind(t, "id3Frame")), t
                                        }(t), Ft(i, this)), n = !1
                                    }
                                    i.headOfPipeline.push(e)
                                }, this.flush = function() {
                                    i && (n = !0, i.headOfPipeline.flush())
                                }, this.partialFlush = function() {
                                    i && i.headOfPipeline.partialFlush()
                                }, this.endTimeline = function() {
                                    i && i.headOfPipeline.endTimeline()
                                }, this.reset = function() {
                                    i && i.headOfPipeline.reset()
                                }, this.setBaseMediaDecodeTime = function(e) {
                                    t.keepOriginalTimestamps || (t.baseMediaDecodeTime = e), i && (i.tracks.audio && (i.tracks.audio.timelineStartInfo.dts = void 0, i.tracks.audio.timelineStartInfo.pts = void 0, Se(i.tracks.audio), i.audioRollover && i.audioRollover.discontinuity()), i.tracks.video && (i.videoSegmentStream && (i.videoSegmentStream.gopCache_ = []), i.tracks.video.timelineStartInfo.dts = void 0, i.tracks.video.timelineStartInfo.pts = void 0, Se(i.tracks.video)), i.timestampRollover && i.timestampRollover.discontinuity())
                                }, this.setRemux = function(e) {
                                    t.remux = e, i && i.coalesceStream && i.coalesceStream.setRemux(e)
                                }, this.setAudioAppendStart = function(e) {
                                    i && i.tracks.audio && i.audioSegmentStream && i.audioSegmentStream.setAudioAppendStart(e)
                                }, this.alignGopsWith = function(e) {}
                            };
                        Bt.prototype = new F;
                        var jt = Bt,
                            qt = function(e) {
                                return e >>> 0
                            },
                            Ht = function(e) {
                                var t = "";
                                return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
                            },
                            Vt = qt,
                            Wt = function e(t, i) {
                                var n, r, s, a, o, l = [];
                                if (!i.length) return null;
                                for (n = 0; n < t.byteLength;) r = Vt(t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3]), s = Ht(t.subarray(n + 4, n + 8)), a = r > 1 ? n + r : t.byteLength, s === i[0] && (1 === i.length ? l.push(t.subarray(n + 8, a)) : (o = e(t.subarray(n + 8, a), i.slice(1))).length && (l = l.concat(o))), n = a;
                                return l
                            },
                            zt = qt,
                            Gt = function(e) {
                                var t = {
                                    version: e[0],
                                    flags: new Uint8Array(e.subarray(1, 4)),
                                    baseMediaDecodeTime: zt(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7])
                                };
                                return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += zt(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), t
                            },
                            Kt = function(e) {
                                return {
                                    isLeading: (12 & e[0]) >>> 2,
                                    dependsOn: 3 & e[0],
                                    isDependedOn: (192 & e[1]) >>> 6,
                                    hasRedundancy: (48 & e[1]) >>> 4,
                                    paddingValue: (14 & e[1]) >>> 1,
                                    isNonSyncSample: 1 & e[1],
                                    degradationPriority: e[2] << 8 | e[3]
                                }
                            },
                            Qt = function(e) {
                                var t, i = {
                                        version: e[0],
                                        flags: new Uint8Array(e.subarray(1, 4)),
                                        samples: []
                                    },
                                    n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                    r = 1 & i.flags[2],
                                    s = 4 & i.flags[2],
                                    a = 1 & i.flags[1],
                                    o = 2 & i.flags[1],
                                    l = 4 & i.flags[1],
                                    u = 8 & i.flags[1],
                                    c = n.getUint32(4),
                                    d = 8;
                                for (r && (i.dataOffset = n.getInt32(d), d += 4), s && c && (t = {
                                        flags: Kt(e.subarray(d, d + 4))
                                    }, d += 4, a && (t.duration = n.getUint32(d), d += 4), o && (t.size = n.getUint32(d), d += 4), u && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) : t.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(t), c--); c--;) t = {}, a && (t.duration = n.getUint32(d), d += 4), o && (t.size = n.getUint32(d), d += 4), l && (t.flags = Kt(e.subarray(d, d + 4)), d += 4), u && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) : t.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(t);
                                return i
                            },
                            Xt = function(e) {
                                var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                    n = {
                                        version: e[0],
                                        flags: new Uint8Array(e.subarray(1, 4)),
                                        trackId: i.getUint32(4)
                                    },
                                    r = 1 & n.flags[2],
                                    s = 2 & n.flags[2],
                                    a = 8 & n.flags[2],
                                    o = 16 & n.flags[2],
                                    l = 32 & n.flags[2],
                                    u = 65536 & n.flags[0],
                                    c = 131072 & n.flags[0];
                                return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), s && (n.sampleDescriptionIndex = i.getUint32(t), t += 4), a && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), t += 4), l && (n.defaultSampleFlags = i.getUint32(t)), u && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
                            },
                            Yt = Pe,
                            $t = Ue.CaptionStream,
                            Jt = function(e, t) {
                                for (var i = e, n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    if (i < r.size) return r;
                                    i -= r.size
                                }
                                return null
                            },
                            Zt = function(e, t) {
                                var i = Wt(e, ["moof", "traf"]),
                                    n = Wt(e, ["mdat"]),
                                    r = {},
                                    s = [];
                                return n.forEach((function(e, t) {
                                    var n = i[t];
                                    s.push({
                                        mdat: e,
                                        traf: n
                                    })
                                })), s.forEach((function(e) {
                                    var i, n = e.mdat,
                                        s = e.traf,
                                        a = Wt(s, ["tfhd"]),
                                        o = Xt(a[0]),
                                        l = o.trackId,
                                        u = Wt(s, ["tfdt"]),
                                        c = u.length > 0 ? Gt(u[0]).baseMediaDecodeTime : 0,
                                        d = Wt(s, ["trun"]);
                                    t === l && d.length > 0 && (i = function(e, t, i) {
                                        var n, r, s, a, o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                            l = [];
                                        for (r = 0; r + 4 < e.length; r += s)
                                            if (s = o.getUint32(r), r += 4, !(s <= 0)) switch (31 & e[r]) {
                                                case 6:
                                                    var u = e.subarray(r + 1, r + 1 + s),
                                                        c = Jt(r, t);
                                                    if (n = {
                                                            nalUnitType: "sei_rbsp",
                                                            size: s,
                                                            data: u,
                                                            escapedRBSP: Yt(u),
                                                            trackId: i
                                                        }, c) n.pts = c.pts, n.dts = c.dts, a = c;
                                                    else {
                                                        if (!a) {
                                                            console.log("We've encountered a nal unit without data. See mux.js#233.");
                                                            break
                                                        }
                                                        n.pts = a.pts, n.dts = a.dts
                                                    }
                                                    l.push(n)
                                            }
                                        return l
                                    }(n, function(e, t, i) {
                                        var n = t,
                                            r = i.defaultSampleDuration || 0,
                                            s = i.defaultSampleSize || 0,
                                            a = i.trackId,
                                            o = [];
                                        return e.forEach((function(e) {
                                            var t = Qt(e).samples;
                                            t.forEach((function(e) {
                                                void 0 === e.duration && (e.duration = r), void 0 === e.size && (e.size = s), e.trackId = a, e.dts = n, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), e.pts = n + e.compositionTimeOffset, n += e.duration
                                            })), o = o.concat(t)
                                        })), o
                                    }(d, c, o), l), r[l] || (r[l] = []), r[l] = r[l].concat(i))
                                })), r
                            },
                            ei = function() {
                                var e, t, i, n, r, s, a = !1;
                                this.isInitialized = function() {
                                    return a
                                }, this.init = function(t) {
                                    e = new $t, a = !0, s = !!t && t.isPartial, e.on("data", (function(e) {
                                        e.startTime = e.startPts / n, e.endTime = e.endPts / n, r.captions.push(e), r.captionStreams[e.stream] = !0
                                    }))
                                }, this.isNewInit = function(e, t) {
                                    return !(e && 0 === e.length || t && "object" === typeof t && 0 === Object.keys(t).length) && (i !== e[0] || n !== t[i])
                                }, this.parse = function(e, s, a) {
                                    var o;
                                    if (!this.isInitialized()) return null;
                                    if (!s || !a) return null;
                                    if (this.isNewInit(s, a)) i = s[0], n = a[i];
                                    else if (null === i || !n) return t.push(e), null;
                                    for (; t.length > 0;) {
                                        var l = t.shift();
                                        this.parse(l, s, a)
                                    }
                                    return null !== (o = function(e, t, i) {
                                        return null === t ? null : {
                                            seiNals: Zt(e, t)[t],
                                            timescale: i
                                        }
                                    }(e, i, n)) && o.seiNals ? (this.pushNals(o.seiNals), this.flushStream(), r) : null
                                }, this.pushNals = function(t) {
                                    if (!this.isInitialized() || !t || 0 === t.length) return null;
                                    t.forEach((function(t) {
                                        e.push(t)
                                    }))
                                }, this.flushStream = function() {
                                    if (!this.isInitialized()) return null;
                                    s ? e.partialFlush() : e.flush()
                                }, this.clearParsedCaptions = function() {
                                    r.captions = [], r.captionStreams = {}
                                }, this.resetCaptionStream = function() {
                                    if (!this.isInitialized()) return null;
                                    e.reset()
                                }, this.clearAllCaptions = function() {
                                    this.clearParsedCaptions(), this.resetCaptionStream()
                                }, this.reset = function() {
                                    t = [], i = null, n = null, r ? this.clearParsedCaptions() : r = {
                                        captions: [],
                                        captionStreams: {}
                                    }, this.resetCaptionStream()
                                }, this.reset()
                            },
                            ti = function(e) {
                                return "AudioSegmentStream" === e ? "audio" : "VideoSegmentStream" === e ? "video" : ""
                            },
                            ii = function() {
                                function e(e, t) {
                                    this.options = t || {}, this.self = e, this.init()
                                }
                                var t = e.prototype;
                                return t.init = function() {
                                    this.transmuxer && this.transmuxer.dispose(), this.transmuxer = this.options.handlePartialData ? new jt(this.options) : new At(this.options), this.options.handlePartialData ? function(e, t) {
                                        t.on("data", (function(t) {
                                            var i = {
                                                    data: t.data.track.initSegment.buffer,
                                                    byteOffset: t.data.track.initSegment.byteOffset,
                                                    byteLength: t.data.track.initSegment.byteLength
                                                },
                                                n = {
                                                    boxes: {
                                                        data: t.data.boxes.buffer,
                                                        byteOffset: t.data.boxes.byteOffset,
                                                        byteLength: t.data.boxes.byteLength
                                                    },
                                                    initSegment: i,
                                                    type: t.type,
                                                    sequence: t.data.sequence
                                                };
                                            "undefined" !== typeof t.data.videoFrameDts && (n.videoFrameDtsTime = ge(t.data.videoFrameDts)), "undefined" !== typeof t.data.videoFramePts && (n.videoFramePtsTime = ge(t.data.videoFramePts)), e.postMessage({
                                                action: "data",
                                                segment: n
                                            }, [n.boxes.data, n.initSegment.data])
                                        })), t.on("id3Frame", (function(t) {
                                            e.postMessage({
                                                action: "id3Frame",
                                                id3Frame: t
                                            })
                                        })), t.on("caption", (function(t) {
                                            e.postMessage({
                                                action: "caption",
                                                caption: t
                                            })
                                        })), t.on("done", (function(t) {
                                            e.postMessage({
                                                action: "done",
                                                type: ti(t)
                                            })
                                        })), t.on("partialdone", (function(t) {
                                            e.postMessage({
                                                action: "partialdone",
                                                type: ti(t)
                                            })
                                        })), t.on("endedsegment", (function(t) {
                                            e.postMessage({
                                                action: "endedSegment",
                                                type: ti(t)
                                            })
                                        })), t.on("trackinfo", (function(t) {
                                            e.postMessage({
                                                action: "trackinfo",
                                                trackInfo: t
                                            })
                                        })), t.on("audioTimingInfo", (function(t) {
                                            if (null !== t.start) {
                                                var i = {
                                                    start: ge(t.start)
                                                };
                                                t.end && (i.end = ge(t.end)), e.postMessage({
                                                    action: "audioTimingInfo",
                                                    audioTimingInfo: i
                                                })
                                            } else e.postMessage({
                                                action: "audioTimingInfo",
                                                audioTimingInfo: t
                                            })
                                        })), t.on("videoTimingInfo", (function(t) {
                                            var i = {
                                                start: ge(t.start)
                                            };
                                            t.end && (i.end = ge(t.end)), e.postMessage({
                                                action: "videoTimingInfo",
                                                videoTimingInfo: i
                                            })
                                        }))
                                    }(this.self, this.transmuxer) : function(e, t) {
                                        t.on("data", (function(t) {
                                            var i = t.initSegment;
                                            t.initSegment = {
                                                data: i.buffer,
                                                byteOffset: i.byteOffset,
                                                byteLength: i.byteLength
                                            };
                                            var n = t.data;
                                            t.data = n.buffer, e.postMessage({
                                                action: "data",
                                                segment: t,
                                                byteOffset: n.byteOffset,
                                                byteLength: n.byteLength
                                            }, [t.data])
                                        })), t.on("done", (function(t) {
                                            e.postMessage({
                                                action: "done"
                                            })
                                        })), t.on("gopInfo", (function(t) {
                                            e.postMessage({
                                                action: "gopInfo",
                                                gopInfo: t
                                            })
                                        })), t.on("videoSegmentTimingInfo", (function(t) {
                                            var i = {
                                                start: {
                                                    decode: ge(t.start.dts),
                                                    presentation: ge(t.start.pts)
                                                },
                                                end: {
                                                    decode: ge(t.end.dts),
                                                    presentation: ge(t.end.pts)
                                                },
                                                baseMediaDecodeTime: ge(t.baseMediaDecodeTime)
                                            };
                                            t.prependedContentDuration && (i.prependedContentDuration = ge(t.prependedContentDuration)), e.postMessage({
                                                action: "videoSegmentTimingInfo",
                                                videoSegmentTimingInfo: i
                                            })
                                        })), t.on("id3Frame", (function(t) {
                                            e.postMessage({
                                                action: "id3Frame",
                                                id3Frame: t
                                            })
                                        })), t.on("caption", (function(t) {
                                            e.postMessage({
                                                action: "caption",
                                                caption: t
                                            })
                                        })), t.on("trackinfo", (function(t) {
                                            e.postMessage({
                                                action: "trackinfo",
                                                trackInfo: t
                                            })
                                        })), t.on("audioTimingInfo", (function(t) {
                                            e.postMessage({
                                                action: "audioTimingInfo",
                                                audioTimingInfo: {
                                                    start: ge(t.start),
                                                    end: ge(t.end)
                                                }
                                            })
                                        })), t.on("videoTimingInfo", (function(t) {
                                            e.postMessage({
                                                action: "videoTimingInfo",
                                                videoTimingInfo: {
                                                    start: ge(t.start),
                                                    end: ge(t.end)
                                                }
                                            })
                                        }))
                                    }(this.self, this.transmuxer)
                                }, t.pushMp4Captions = function(e) {
                                    this.captionParser || (this.captionParser = new ei, this.captionParser.init());
                                    var t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
                                        i = this.captionParser.parse(t, e.trackIds, e.timescales);
                                    this.self.postMessage({
                                        action: "mp4Captions",
                                        captions: i && i.captions || [],
                                        data: t.buffer
                                    }, [t.buffer])
                                }, t.clearAllMp4Captions = function() {
                                    this.captionParser && this.captionParser.clearAllCaptions()
                                }, t.clearParsedMp4Captions = function() {
                                    this.captionParser && this.captionParser.clearParsedCaptions()
                                }, t.push = function(e) {
                                    var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                                    this.transmuxer.push(t)
                                }, t.reset = function() {
                                    this.transmuxer.reset()
                                }, t.setTimestampOffset = function(e) {
                                    var t = e.timestampOffset || 0;
                                    this.transmuxer.setBaseMediaDecodeTime(Math.round(me(t)))
                                }, t.setAudioAppendStart = function(e) {
                                    this.transmuxer.setAudioAppendStart(Math.ceil(me(e.appendStart)))
                                }, t.setRemux = function(e) {
                                    this.transmuxer.setRemux(e.remux)
                                }, t.flush = function(e) {
                                    this.transmuxer.flush(), i.postMessage({
                                        action: "done",
                                        type: "transmuxed"
                                    })
                                }, t.partialFlush = function(e) {
                                    this.transmuxer.partialFlush(), i.postMessage({
                                        action: "partialdone",
                                        type: "transmuxed"
                                    })
                                }, t.endTimeline = function() {
                                    this.transmuxer.endTimeline(), i.postMessage({
                                        action: "endedtimeline",
                                        type: "transmuxed"
                                    })
                                }, t.alignGopsWith = function(e) {
                                    this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                                }, e
                            }();
                        new function(e) {
                            e.onmessage = function(t) {
                                "init" === t.data.action && t.data.options ? this.messageHandlers = new ii(e, t.data.options) : (this.messageHandlers || (this.messageHandlers = new ii(e)), t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data))
                            }
                        }(i)
                    }()
                })),
                Oa = function(e, t) {
                    var i = t.attributes || {};
                    return e && e.mediaGroups && e.mediaGroups.AUDIO && i.AUDIO && e.mediaGroups.AUDIO[i.AUDIO]
                },
                Da = function(e, t) {
                    var i = t.attributes || {},
                        n = function(e) {
                            var t = e.attributes || {};
                            if (t.CODECS) return (0, B.kS)(t.CODECS)
                        }(t) || {};
                    if (Oa(e, t) && !n.audio && ! function(e, t) {
                            if (!Oa(e, t)) return !0;
                            var i = t.attributes || {},
                                n = e.mediaGroups.AUDIO[i.AUDIO];
                            for (var r in n)
                                if (!n[r].uri && !n[r].playlists) return !0;
                            return !1
                        }(e, t)) {
                        var r = (0, B.Jg)(e, i.AUDIO);
                        r && (n.audio = r.audio)
                    }
                    var s = {};
                    return n.video && (s.video = (0, B.ws)("" + n.video.type + n.video.details)), n.audio && (s.audio = (0, B.ws)("" + n.audio.type + n.audio.details)), s
                },
                Ma = function(e) {
                    return Kr.log.debug ? Kr.log.debug.bind(Kr, "VHS:", e + " >") : function() {}
                },
                Ra = Ma("PlaylistSelector"),
                Ua = function(e) {
                    if (e && e.playlist) {
                        var t = e.playlist;
                        return JSON.stringify({
                            id: t.id,
                            bandwidth: e.bandwidth,
                            width: e.width,
                            height: e.height,
                            codecs: t.attributes && t.attributes.CODECS || ""
                        })
                    }
                },
                Na = function(e, t) {
                    if (!e) return "";
                    var i = r().getComputedStyle(e);
                    return i ? i[t] : ""
                },
                Fa = function(e, t) {
                    var i = e.slice();
                    e.sort((function(e, n) {
                        var r = t(e, n);
                        return 0 === r ? i.indexOf(e) - i.indexOf(n) : r
                    }))
                },
                Ba = function(e, t) {
                    var i, n;
                    return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || r().Number.MAX_VALUE, t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH), i - (n = n || r().Number.MAX_VALUE)
                },
                ja = function(e) {
                    var t = e.inbandTextTracks,
                        i = e.metadataArray,
                        n = e.timestampOffset,
                        s = e.videoDuration;
                    if (i) {
                        var a = r().WebKitDataCue || r().VTTCue,
                            o = t.metadataTrack_;
                        if (o && (i.forEach((function(e) {
                                var t = e.cueTime + n;
                                !("number" !== typeof t || r().isNaN(t) || t < 0) && t < 1 / 0 && e.frames.forEach((function(e) {
                                    var i = new a(t, t, e.value || e.url || e.data || "");
                                    i.frame = e, i.value = e,
                                        function(e) {
                                            Object.defineProperties(e.frame, {
                                                id: {
                                                    get: function() {
                                                        return Kr.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key
                                                    }
                                                },
                                                value: {
                                                    get: function() {
                                                        return Kr.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data
                                                    }
                                                },
                                                privateData: {
                                                    get: function() {
                                                        return Kr.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data
                                                    }
                                                }
                                            })
                                        }(i), o.addCue(i)
                                }))
                            })), o.cues && o.cues.length)) {
                            for (var l = o.cues, u = [], c = 0; c < l.length; c++) l[c] && u.push(l[c]);
                            var d = u.reduce((function(e, t) {
                                    var i = e[t.startTime] || [];
                                    return i.push(t), e[t.startTime] = i, e
                                }), {}),
                                h = Object.keys(d).sort((function(e, t) {
                                    return Number(e) - Number(t)
                                }));
                            h.forEach((function(e, t) {
                                var i = d[e],
                                    n = Number(h[t + 1]) || s;
                                i.forEach((function(e) {
                                    e.endTime = n
                                }))
                            }))
                        }
                    }
                },
                qa = function(e, t, i) {
                    var n, r;
                    if (i && i.cues)
                        for (n = i.cues.length; n--;)(r = i.cues[n]).startTime >= e && r.endTime <= t && i.removeCue(r)
                },
                Ha = function(e) {
                    return "number" === typeof e && isFinite(e)
                },
                Va = function(e) {
                    return e + "TimingInfo"
                },
                Wa = function(e) {
                    var t = e.segmentTimeline,
                        i = e.currentTimeline,
                        n = e.startOfSegment,
                        r = e.buffered;
                    return e.overrideCheck || t !== i ? r.length ? r.end(r.length - 1) : n : null
                },
                za = function(e) {
                    var t = e.timelineChangeController,
                        i = e.currentTimeline,
                        n = e.segmentTimeline,
                        r = e.loaderType,
                        s = e.audioDisabled;
                    if (i === n) return !1;
                    if ("audio" === r) {
                        var a = t.lastTimelineChange({
                            type: "main"
                        });
                        return !a || a.to !== n
                    }
                    if ("main" === r && s) {
                        var o = t.pendingTimelineChange({
                            type: "audio"
                        });
                        return !o || o.to !== n
                    }
                    return !1
                },
                Ga = function(e) {
                    function t(t, i) {
                        var n;
                        if (n = e.call(this) || this, !t) throw new TypeError("Initialization settings are required");
                        if ("function" !== typeof t.currentTime) throw new TypeError("No currentTime getter specified");
                        if (!t.mediaSource) throw new TypeError("No MediaSource specified");
                        return n.bandwidth = t.bandwidth, n.throughput = {
                            rate: 0,
                            count: 0
                        }, n.roundTrip = NaN, n.resetStats_(), n.mediaIndex = null, n.hasPlayed_ = t.hasPlayed, n.currentTime_ = t.currentTime, n.seekable_ = t.seekable, n.seeking_ = t.seeking, n.duration_ = t.duration, n.mediaSource_ = t.mediaSource, n.vhs_ = t.vhs, n.loaderType_ = t.loaderType, n.currentMediaInfo_ = void 0, n.startingMediaInfo_ = void 0, n.segmentMetadataTrack_ = t.segmentMetadataTrack, n.goalBufferLength_ = t.goalBufferLength, n.sourceType_ = t.sourceType, n.sourceUpdater_ = t.sourceUpdater, n.inbandTextTracks_ = t.inbandTextTracks, n.state_ = "INIT", n.handlePartialData_ = t.handlePartialData, n.timelineChangeController_ = t.timelineChangeController, n.shouldSaveSegmentTimingInfo_ = !0, n.checkBufferTimeout_ = null, n.error_ = void 0, n.currentTimeline_ = -1, n.pendingSegment_ = null, n.xhrOptions_ = null, n.pendingSegments_ = [], n.audioDisabled_ = !1, n.isPendingTimestampOffset_ = !1, n.gopBuffer_ = [], n.timeMapping_ = 0, n.safeAppend_ = Kr.browser.IE_VERSION >= 11, n.appendInitSegment_ = {
                            audio: !0,
                            video: !0
                        }, n.playlistOfLastInitSegment_ = {
                            audio: null,
                            video: null
                        }, n.callQueue_ = [], n.loadQueue_ = [], n.metadataQueue_ = {
                            id3: [],
                            caption: []
                        }, n.activeInitSegmentId_ = null, n.initSegments_ = {}, n.cacheEncryptionKeys_ = t.cacheEncryptionKeys, n.keyCache_ = {}, n.decrypter_ = t.decrypter, n.syncController_ = t.syncController, n.syncPoint_ = {
                            segmentIndex: 0,
                            time: 0
                        }, n.transmuxer_ = n.createTransmuxer_(), n.triggerSyncInfoUpdate_ = function() {
                            return n.trigger("syncinfoupdate")
                        }, n.syncController_.on("syncinfoupdate", n.triggerSyncInfoUpdate_), n.mediaSource_.addEventListener("sourceopen", (function() {
                            n.isEndOfStream_() || (n.ended_ = !1)
                        })), n.fetchAtBuffer_ = !1, n.logger_ = Ma("SegmentLoader[" + n.loaderType_ + "]"), Object.defineProperty(c()(n), "state", {
                            get: function() {
                                return this.state_
                            },
                            set: function(e) {
                                e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e, this.trigger("statechange"))
                            }
                        }), n.sourceUpdater_.on("ready", (function() {
                            n.hasEnoughInfoToAppend_() && n.processCallQueue_()
                        })), "main" === n.loaderType_ && n.timelineChangeController_.on("pendingtimelinechange", (function() {
                            n.hasEnoughInfoToAppend_() && n.processCallQueue_()
                        })), "audio" === n.loaderType_ && n.timelineChangeController_.on("timelinechange", (function() {
                            n.hasEnoughInfoToLoad_() && n.processLoadQueue_(), n.hasEnoughInfoToAppend_() && n.processCallQueue_()
                        })), n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.createTransmuxer_ = function() {
                        var e = new xa;
                        return e.postMessage({
                            action: "init",
                            options: {
                                remux: !1,
                                alignGopsAtEnd: this.safeAppend_,
                                keepOriginalTimestamps: !0,
                                handlePartialData: this.handlePartialData_
                            }
                        }), e
                    }, i.resetStats_ = function() {
                        this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
                    }, i.dispose = function() {
                        this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && (this.transmuxer_.terminate(), ua()), this.resetStats_(), this.checkBufferTimeout_ && r().clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off()
                    }, i.setAudio = function(e) {
                        this.audioDisabled_ = !e, e ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_())
                    }, i.abort = function() {
                        "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
                    }, i.abort_ = function() {
                        this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_)
                    }, i.checkForAbort_ = function(e) {
                        return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e : (this.state = "READY", !0)
                    }, i.error = function(e) {
                        return "undefined" !== typeof e && (this.logger_("error occurred:", e), this.error_ = e), this.pendingSegment_ = null, this.error_
                    }, i.endOfStream = function() {
                        this.ended_ = !0, this.transmuxer_ && la(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended")
                    }, i.buffered_ = function() {
                        if (!this.sourceUpdater_ || !this.startingMediaInfo_) return Kr.createTimeRanges();
                        if ("main" === this.loaderType_) {
                            var e = this.startingMediaInfo_,
                                t = e.hasAudio,
                                i = e.hasVideo,
                                n = e.isMuxed;
                            if (i && t && !this.audioDisabled_ && !n) return this.sourceUpdater_.buffered();
                            if (i) return this.sourceUpdater_.videoBuffered()
                        }
                        return this.sourceUpdater_.audioBuffered()
                    }, i.initSegmentForMap = function(e, t) {
                        if (void 0 === t && (t = !1), !e) return null;
                        var i = Bs(e),
                            n = this.initSegments_[i];
                        return t && !n && e.bytes && (this.initSegments_[i] = n = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            bytes: e.bytes,
                            tracks: e.tracks,
                            timescales: e.timescales
                        }), n || e
                    }, i.segmentKey = function(e, t) {
                        if (void 0 === t && (t = !1), !e) return null;
                        var i = js(e),
                            n = this.keyCache_[i];
                        this.cacheEncryptionKeys_ && t && !n && e.bytes && (this.keyCache_[i] = n = {
                            resolvedUri: e.resolvedUri,
                            bytes: e.bytes
                        });
                        var r = {
                            resolvedUri: (n || e).resolvedUri
                        };
                        return n && (r.bytes = n.bytes), r
                    }, i.couldBeginLoading_ = function() {
                        return this.playlist_ && !this.paused()
                    }, i.load = function() {
                        if (this.monitorBuffer_(), this.playlist_) {
                            if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                            !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                        }
                    }, i.init_ = function() {
                        return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                    }, i.playlist = function(e, t) {
                        if (void 0 === t && (t = {}), e) {
                            var i = this.playlist_,
                                n = this.pendingSegment_;
                            this.playlist_ = e, this.xhrOptions_ = t, "INIT" === this.state && (e.syncInfo = {
                                mediaSequence: e.mediaSequence,
                                time: 0
                            });
                            var r = null;
                            if (i && (i.id ? r = i.id : i.uri && (r = i.uri)), this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                            if (!i || i.uri !== e.uri) return (null !== this.mediaIndex || this.handlePartialData_) && this.resyncLoader(), this.currentMediaInfo_ = void 0, void this.trigger("playlistupdate");
                            var s = e.mediaSequence - i.mediaSequence;
                            this.logger_("live window shift [" + s + "]"), null !== this.mediaIndex && (this.mediaIndex -= s), n && (n.mediaIndex -= s, n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, e)
                        }
                    }, i.pause = function() {
                        this.checkBufferTimeout_ && (r().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                    }, i.paused = function() {
                        return null === this.checkBufferTimeout_
                    }, i.resetEverything = function(e) {
                        this.ended_ = !1, this.appendInitSegment_ = {
                            audio: !0,
                            video: !0
                        }, this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && this.transmuxer_.postMessage({
                            action: "clearAllMp4Captions"
                        })
                    }, i.resetLoader = function() {
                        this.fetchAtBuffer_ = !1, this.resyncLoader()
                    }, i.resyncLoader = function() {
                        this.transmuxer_ && la(this.transmuxer_), this.mediaIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = !1, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
                            action: "clearParsedMp4Captions"
                        })
                    }, i.remove = function(e, t, i) {
                        if (void 0 === i && (i = function() {}), t === 1 / 0 && (t = this.duration_()), this.sourceUpdater_ && this.currentMediaInfo_) {
                            var n = 1,
                                r = function() {
                                    0 === --n && i()
                                };
                            for (var s in this.audioDisabled_ || (n++, this.sourceUpdater_.removeAudio(e, t, r)), "main" === this.loaderType_ && this.currentMediaInfo_ && this.currentMediaInfo_.hasVideo && (this.gopBuffer_ = function(e, t, i, n) {
                                    for (var r = Math.ceil((t - n) * U.ONE_SECOND_IN_TS), s = Math.ceil((i - n) * U.ONE_SECOND_IN_TS), a = e.slice(), o = e.length; o-- && !(e[o].pts <= s););
                                    if (-1 === o) return a;
                                    for (var l = o + 1; l-- && !(e[l].pts <= r););
                                    return l = Math.max(l, 0), a.splice(l, o - l + 1), a
                                }(this.gopBuffer_, e, t, this.timeMapping_), n++, this.sourceUpdater_.removeVideo(e, t, r)), this.inbandTextTracks_) qa(e, t, this.inbandTextTracks_[s]);
                            qa(e, t, this.segmentMetadataTrack_), r()
                        }
                    }, i.monitorBuffer_ = function() {
                        this.checkBufferTimeout_ && r().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = r().setTimeout(this.monitorBufferTick_.bind(this), 1)
                    }, i.monitorBufferTick_ = function() {
                        "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && r().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = r().setTimeout(this.monitorBufferTick_.bind(this), 500)
                    }, i.fillBuffer_ = function() {
                        if (!this.sourceUpdater_.updating()) {
                            this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                            var e = this.buffered_(),
                                t = this.checkBuffer_(e, this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                            t && (t.timestampOffset = Wa({
                                segmentTimeline: t.timeline,
                                currentTimeline: this.currentTimeline_,
                                startOfSegment: t.startOfSegment,
                                buffered: e,
                                overrideCheck: this.isPendingTimestampOffset_
                            }), this.isPendingTimestampOffset_ = !1, "number" === typeof t.timestampOffset && this.timelineChangeController_.pendingTimelineChange({
                                type: this.loaderType_,
                                from: this.currentTimeline_,
                                to: t.timeline
                            }), this.loadSegment_(t))
                        }
                    }, i.isEndOfStream_ = function(e, t) {
                        if (void 0 === e && (e = this.mediaIndex), void 0 === t && (t = this.playlist_), !t || !this.mediaSource_) return !1;
                        var i = e + 1 === t.segments.length;
                        return t.endList && "open" === this.mediaSource_.readyState && i
                    }, i.checkBuffer_ = function(e, t, i, n, r, s) {
                        var a = 0;
                        e.length && (a = e.end(e.length - 1));
                        var o = Math.max(0, a - r);
                        if (!t.segments.length) return null;
                        if (o >= this.goalBufferLength_()) return null;
                        if (!n && o >= 1) return null;
                        var l, u = null,
                            c = !1;
                        if (null === s) u = this.getSyncSegmentCandidate_(t), c = !0;
                        else if (null !== i) {
                            var d = t.segments[i];
                            l = d && d.end ? d.end : a, u = i + 1
                        } else if (this.fetchAtBuffer_) {
                            var h = As.getMediaInfoForTime(t, a, s.segmentIndex, s.time);
                            u = h.mediaIndex, l = h.startTime
                        } else {
                            var p = As.getMediaInfoForTime(t, r, s.segmentIndex, s.time);
                            u = p.mediaIndex, l = p.startTime
                        }
                        var f = this.generateSegmentInfo_(t, u, l, c);
                        return !f || this.mediaSource_ && this.playlist_ && f.mediaIndex === this.playlist_.segments.length - 1 && "ended" === this.mediaSource_.readyState && !this.seeking_() ? void 0 : (this.logger_("checkBuffer_ returning " + f.uri, {
                            segmentInfo: f,
                            playlist: t,
                            currentMediaIndex: i,
                            nextMediaIndex: u,
                            startOfSegment: l,
                            isSyncRequest: c
                        }), f)
                    }, i.getSyncSegmentCandidate_ = function(e) {
                        var t = this;
                        if (-1 === this.currentTimeline_) return 0;
                        var i = e.segments.map((function(e, t) {
                            return {
                                timeline: e.timeline,
                                segmentIndex: t
                            }
                        })).filter((function(e) {
                            return e.timeline === t.currentTimeline_
                        }));
                        return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
                    }, i.generateSegmentInfo_ = function(e, t, i, n) {
                        if (t < 0 || t >= e.segments.length) return null;
                        var r, s, a = e.segments[t],
                            o = this.sourceUpdater_.audioBuffered(),
                            l = this.sourceUpdater_.videoBuffered();
                        return o.length && (r = o.end(o.length - 1) - this.sourceUpdater_.audioTimestampOffset()), l.length && (s = function(e, t, i) {
                            if ("undefined" === typeof t || null === t || !e.length) return [];
                            var n, r = Math.ceil((t - i + 3) * U.ONE_SECOND_IN_TS);
                            for (n = 0; n < e.length && !(e[n].pts > r); n++);
                            return e.slice(n)
                        }(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), {
                            requestId: "segment-loader-" + Math.random(),
                            uri: a.resolvedUri,
                            mediaIndex: t,
                            isSyncRequest: n,
                            startOfSegment: i,
                            playlist: e,
                            bytes: null,
                            encryptedBytes: null,
                            timestampOffset: null,
                            timeline: a.timeline,
                            duration: a.duration,
                            segment: a,
                            byteLength: 0,
                            transmuxer: this.transmuxer_,
                            audioAppendStart: r,
                            gopsToAlignWith: s
                        }
                    }, i.abortRequestEarly_ = function(e) {
                        if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                        if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                        var t = this.currentTime_(),
                            i = e.bandwidth,
                            n = this.pendingSegment_.duration,
                            r = As.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
                            s = function(e, t, i) {
                                return void 0 === i && (i = 1), ((e.length ? e.end(e.length - 1) : 0) - t) / i
                            }(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1;
                        if (r <= s) return !1;
                        var a = function(e) {
                            var t = e.master,
                                i = e.currentTime,
                                n = e.bandwidth,
                                r = e.duration,
                                s = e.segmentDuration,
                                a = e.timeUntilRebuffer,
                                o = e.currentTimeline,
                                l = e.syncController,
                                u = t.playlists.filter((function(e) {
                                    return !As.isIncompatible(e)
                                })),
                                c = u.filter(As.isEnabled);
                            c.length || (c = u.filter((function(e) {
                                return !As.isDisabled(e)
                            })));
                            var d = c.filter(As.hasAttribute.bind(null, "BANDWIDTH")).map((function(e) {
                                    var t = l.getSyncPoint(e, r, o, i) ? 1 : 2;
                                    return {
                                        playlist: e,
                                        rebufferingImpact: As.estimateSegmentRequestTime(s, n, e) * t - a
                                    }
                                })),
                                h = d.filter((function(e) {
                                    return e.rebufferingImpact <= 0
                                }));
                            return Fa(h, (function(e, t) {
                                return Ba(t.playlist, e.playlist)
                            })), h.length ? h[0] : (Fa(d, (function(e, t) {
                                return e.rebufferingImpact - t.rebufferingImpact
                            })), d[0] || null)
                        }({
                            master: this.vhs_.playlists.master,
                            currentTime: t,
                            bandwidth: i,
                            duration: this.duration_(),
                            segmentDuration: n,
                            timeUntilRebuffer: s,
                            currentTimeline: this.currentTimeline_,
                            syncController: this.syncController_
                        });
                        if (a) {
                            var o = r - s - a.rebufferingImpact,
                                l = .5;
                            return s <= ds && (l = 1), !a.playlist || a.playlist.uri === this.playlist_.uri || o < l ? !1 : (this.bandwidth = a.playlist.attributes.BANDWIDTH * ea.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                        }
                    }, i.handleAbort_ = function() {
                        this.mediaRequestsAborted += 1
                    }, i.handleProgress_ = function(e, t) {
                        this.checkForAbort_(t.requestId) || this.abortRequestEarly_(t.stats) || this.trigger("progress")
                    }, i.handleTrackInfo_ = function(e, t) {
                        this.checkForAbort_(e.requestId) || this.abortRequestEarly_(e.stats) || this.checkForIllegalMediaSwitch(t) || (t = t || {}, function(e, t) {
                            if (!e && !t || !e && t || e && !t) return !1;
                            if (e === t) return !0;
                            var i = Object.keys(e).sort(),
                                n = Object.keys(t).sort();
                            if (i.length !== n.length) return !1;
                            for (var r = 0; r < i.length; r++) {
                                var s = i[r];
                                if (s !== n[r]) return !1;
                                if (e[s] !== t[s]) return !1
                            }
                            return !0
                        }(this.currentMediaInfo_, t) || (this.appendInitSegment_ = {
                            audio: !0,
                            video: !0
                        }, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), this.checkForAbort_(e.requestId) || this.abortRequestEarly_(e.stats) || (this.pendingSegment_.trackInfo = t, this.hasEnoughInfoToAppend_() && this.processCallQueue_()))
                    }, i.handleTimingInfo_ = function(e, t, i, n) {
                        if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats)) {
                            var r = this.pendingSegment_,
                                s = Va(t);
                            r[s] = r[s] || {}, r[s][i] = n, this.logger_("timinginfo: " + t + " - " + i + " - " + n), this.hasEnoughInfoToAppend_() && this.processCallQueue_()
                        }
                    }, i.handleCaptions_ = function(e, t) {
                        var i = this;
                        if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                            if (0 !== t.length)
                                if (this.pendingSegment_.hasAppendedData_) {
                                    var n = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(),
                                        s = {};
                                    t.forEach((function(e) {
                                        s[e.stream] = s[e.stream] || {
                                            startTime: 1 / 0,
                                            captions: [],
                                            endTime: 0
                                        };
                                        var t = s[e.stream];
                                        t.startTime = Math.min(t.startTime, e.startTime + n), t.endTime = Math.max(t.endTime, e.endTime + n), t.captions.push(e)
                                    })), Object.keys(s).forEach((function(e) {
                                        var t = s[e],
                                            a = t.startTime,
                                            o = t.endTime,
                                            l = t.captions,
                                            u = i.inbandTextTracks_;
                                        i.logger_("adding cues from " + a + " -> " + o + " for " + e),
                                            function(e, t, i) {
                                                if (!e[i]) {
                                                    t.trigger({
                                                        type: "usage",
                                                        name: "vhs-608"
                                                    }), t.trigger({
                                                        type: "usage",
                                                        name: "hls-608"
                                                    });
                                                    var n = t.textTracks().getTrackById(i);
                                                    e[i] = n || t.addRemoteTextTrack({
                                                        kind: "captions",
                                                        id: i,
                                                        label: i
                                                    }, !1).track
                                                }
                                            }(u, i.vhs_.tech_, e), qa(a, o, u[e]),
                                            function(e) {
                                                var t = e.inbandTextTracks,
                                                    i = e.captionArray,
                                                    n = e.timestampOffset;
                                                if (i) {
                                                    var s = r().WebKitDataCue || r().VTTCue;
                                                    i.forEach((function(e) {
                                                        var i = e.stream;
                                                        t[i].addCue(new s(e.startTime + n, e.endTime + n, e.text))
                                                    }))
                                                }
                                            }({
                                                captionArray: l,
                                                inbandTextTracks: u,
                                                timestampOffset: n
                                            })
                                    })), this.transmuxer_ && this.transmuxer_.postMessage({
                                        action: "clearParsedMp4Captions"
                                    })
                                } else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
                        else this.logger_("SegmentLoader received no captions from a caption event")
                    }, i.handleId3_ = function(e, t, i) {
                        if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                            if (this.pendingSegment_.hasAppendedData_) {
                                var n = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset();
                                ! function(e, t, i) {
                                    e.metadataTrack_ || (e.metadataTrack_ = i.addRemoteTextTrack({
                                        kind: "metadata",
                                        label: "Timed Metadata"
                                    }, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = t)
                                }(this.inbandTextTracks_, i, this.vhs_.tech_), ja({
                                    inbandTextTracks: this.inbandTextTracks_,
                                    metadataArray: t,
                                    timestampOffset: n,
                                    videoDuration: this.duration_()
                                })
                            } else this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i))
                    }, i.processMetadataQueue_ = function() {
                        this.metadataQueue_.id3.forEach((function(e) {
                            return e()
                        })), this.metadataQueue_.caption.forEach((function(e) {
                            return e()
                        })), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = []
                    }, i.processCallQueue_ = function() {
                        var e = this.callQueue_;
                        this.callQueue_ = [], e.forEach((function(e) {
                            return e()
                        }))
                    }, i.processLoadQueue_ = function() {
                        var e = this.loadQueue_;
                        this.loadQueue_ = [], e.forEach((function(e) {
                            return e()
                        }))
                    }, i.hasEnoughInfoToLoad_ = function() {
                        if ("audio" !== this.loaderType_) return !0;
                        var e = this.pendingSegment_;
                        return !!e && (!this.currentMediaInfo_ || !za({
                            timelineChangeController: this.timelineChangeController_,
                            currentTimeline: this.currentTimeline_,
                            segmentTimeline: e.timeline,
                            loaderType: this.loaderType_,
                            audioDisabled: this.audioDisabled_
                        }))
                    }, i.hasEnoughInfoToAppend_ = function() {
                        if (!this.sourceUpdater_.ready()) return !1;
                        var e = this.pendingSegment_;
                        if (!e || !e.trackInfo) return !1;
                        if (!this.handlePartialData_) {
                            var t = this.currentMediaInfo_,
                                i = t.hasAudio,
                                n = t.hasVideo,
                                r = t.isMuxed;
                            if (n && !e.videoTimingInfo) return !1;
                            if (i && !this.audioDisabled_ && !r && !e.audioTimingInfo) return !1
                        }
                        return !za({
                            timelineChangeController: this.timelineChangeController_,
                            currentTimeline: this.currentTimeline_,
                            segmentTimeline: e.timeline,
                            loaderType: this.loaderType_,
                            audioDisabled: this.audioDisabled_
                        })
                    }, i.handleData_ = function(e, t) {
                        if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                            if (!this.callQueue_.length && this.hasEnoughInfoToAppend_()) {
                                var i = this.pendingSegment_;
                                if (this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.segment), "closed" !== this.mediaSource_.readyState) {
                                    if (e.map && (e.map = this.initSegmentForMap(e.map, !0), i.segment.map = e.map), e.key && this.segmentKey(e.key, !0), i.isFmp4 = e.isFmp4, i.timingInfo = i.timingInfo || {}, i.isFmp4) this.trigger("fmp4"), i.timingInfo.start = i[Va(t.type)].start;
                                    else {
                                        var n, r = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo;
                                        r && (n = this.handlePartialData_ ? t.videoFramePtsTime : i.videoTimingInfo.start), i.timingInfo.start = this.trueSegmentStart_({
                                            currentStart: i.timingInfo.start,
                                            playlist: i.playlist,
                                            mediaIndex: i.mediaIndex,
                                            currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                                            useVideoTimingInfo: r,
                                            firstVideoFrameTimeForData: n,
                                            videoTimingInfo: i.videoTimingInfo,
                                            audioTimingInfo: i.audioTimingInfo
                                        })
                                    }
                                    this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), i.hasAppendedData_ = !0, this.processMetadataQueue_(), this.appendData_(i, t)
                                }
                            } else this.callQueue_.push(this.handleData_.bind(this, e, t))
                    }, i.updateAppendInitSegmentStatus = function(e, t) {
                        "main" !== this.loaderType_ || "number" !== typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = {
                            audio: !0,
                            video: !0
                        }), this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0)
                    }, i.getInitSegmentAndUpdateState_ = function(e) {
                        var t = e.type,
                            i = e.initSegment,
                            n = e.map,
                            r = e.playlist;
                        if (n) {
                            var s = Bs(n);
                            if (this.activeInitSegmentId_ === s) return null;
                            i = this.initSegmentForMap(n, !0).bytes, this.activeInitSegmentId_ = s
                        }
                        return i && this.appendInitSegment_[t] ? (this.playlistOfLastInitSegment_[t] = r, this.appendInitSegment_[t] = !!n, this.activeInitSegmentId_ = null, i) : null
                    }, i.appendToSourceBuffer_ = function(e) {
                        var t = this,
                            i = e.segmentInfo,
                            n = e.type,
                            r = e.initSegment,
                            s = e.data,
                            a = [s],
                            o = s.byteLength;
                        r && (a.unshift(r), o += r.byteLength);
                        var l = function(e) {
                            var t, i = 0;
                            return e.bytes && (t = new Uint8Array(e.bytes), e.segments.forEach((function(e) {
                                t.set(e, i), i += e.byteLength
                            }))), t
                        }({
                            bytes: o,
                            segments: a
                        });
                        this.sourceUpdater_.appendBuffer({
                            segmentInfo: i,
                            type: n,
                            bytes: l
                        }, (function(e) {
                            e && (t.error(n + " append of " + l.length + "b failed for segment #" + i.mediaIndex + " in playlist " + i.playlist.id), t.trigger("appenderror"))
                        }))
                    }, i.handleVideoSegmentTimingInfo_ = function(e, t) {
                        if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                            var i = this.pendingSegment_.segment;
                            i.videoTimingInfo || (i.videoTimingInfo = {}), i.videoTimingInfo.transmuxerPrependedSeconds = t.prependedContentDuration || 0, i.videoTimingInfo.transmuxedPresentationStart = t.start.presentation, i.videoTimingInfo.transmuxedPresentationEnd = t.end.presentation, i.videoTimingInfo.baseMediaDecodeTime = t.baseMediaDecodeTime
                        }
                    }, i.appendData_ = function(e, t) {
                        var i = t.type,
                            n = t.data;
                        if (n && n.byteLength && ("audio" !== i || !this.audioDisabled_)) {
                            var r = this.getInitSegmentAndUpdateState_({
                                type: i,
                                initSegment: t.initSegment,
                                playlist: e.playlist,
                                map: e.isFmp4 ? e.segment.map : null
                            });
                            this.appendToSourceBuffer_({
                                segmentInfo: e,
                                type: i,
                                initSegment: r,
                                data: n
                            })
                        }
                    }, i.loadSegment_ = function(e) {
                        var t = this;
                        this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), "number" === typeof e.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({
                            action: "clearAllMp4Captions"
                        }), this.hasEnoughInfoToLoad_() ? this.updateTransmuxerAndRequestSegment_(e) : this.loadQueue_.push((function() {
                            var i = t.buffered_();
                            "number" === typeof e.timestampOffset && (e.timestampOffset = Wa({
                                segmentTimeline: e.timeline,
                                currentTimeline: t.currentTimeline_,
                                startOfSegment: e.startOfSegment,
                                buffered: i,
                                overrideCheck: !0
                            })), delete e.audioAppendStart;
                            var n = t.sourceUpdater_.audioBuffered();
                            n.length && (e.audioAppendStart = n.end(n.length - 1) - t.sourceUpdater_.audioTimestampOffset()), t.updateTransmuxerAndRequestSegment_(e)
                        }))
                    }, i.updateTransmuxerAndRequestSegment_ = function(e) {
                        this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0, e.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({
                            action: "reset"
                        }), this.transmuxer_.postMessage({
                            action: "setTimestampOffset",
                            timestampOffset: e.timestampOffset
                        }));
                        var t = this.createSimplifiedSegmentObj_(e);
                        e.abortRequests = Ta({
                            xhr: this.vhs_.xhr,
                            xhrOptions: this.xhrOptions_,
                            decryptionWorker: this.decrypter_,
                            segment: t,
                            handlePartialData: this.handlePartialData_,
                            abortFn: this.handleAbort_.bind(this),
                            progressFn: this.handleProgress_.bind(this),
                            trackInfoFn: this.handleTrackInfo_.bind(this),
                            timingInfoFn: this.handleTimingInfo_.bind(this),
                            videoSegmentTimingInfoFn: this.handleVideoSegmentTimingInfo_.bind(this, e.requestId),
                            captionsFn: this.handleCaptions_.bind(this),
                            id3Fn: this.handleId3_.bind(this),
                            dataFn: this.handleData_.bind(this),
                            doneFn: this.segmentRequestFinished_.bind(this)
                        })
                    }, i.trimBackBuffer_ = function(e) {
                        var t = function(e, t, i) {
                            var n = t - ea.BACK_BUFFER_LENGTH;
                            e.length && (n = Math.max(n, e.start(0)));
                            var r = t - i;
                            return Math.min(r, n)
                        }(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                        t > 0 && this.remove(0, t)
                    }, i.createSimplifiedSegmentObj_ = function(e) {
                        var t = e.segment,
                            i = {
                                resolvedUri: t.resolvedUri,
                                byterange: t.byterange,
                                requestId: e.requestId,
                                transmuxer: e.transmuxer,
                                audioAppendStart: e.audioAppendStart,
                                gopsToAlignWith: e.gopsToAlignWith
                            },
                            n = e.playlist.segments[e.mediaIndex];
                        if (n && n.end && n.timeline === t.timeline && (i.baseStartTime = n.end + e.timestampOffset), t.key) {
                            var r = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                            i.key = this.segmentKey(t.key), i.key.iv = r
                        }
                        return t.map && (i.map = this.initSegmentForMap(t.map)), i
                    }, i.saveTransferStats_ = function(e) {
                        this.mediaRequests += 1, e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime)
                    }, i.saveBandwidthRelatedStats_ = function(e) {
                        this.bandwidth = e.bandwidth, this.roundTrip = e.roundTripTime, this.pendingSegment_.byteLength = e.bytesReceived
                    }, i.handleTimeout_ = function() {
                        this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate")
                    }, i.segmentRequestFinished_ = function(e, t, i) {
                        if (this.callQueue_.length) this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));
                        else if (this.saveTransferStats_(t.stats), this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId) {
                            if (e) {
                                if (this.pendingSegment_ = null, this.state = "READY", e.code === pa) return;
                                return this.pause(), e.code === ha ? void this.handleTimeout_() : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error"))
                            }
                            this.saveBandwidthRelatedStats_(t.stats);
                            var n = this.pendingSegment_;
                            n.endOfAllRequests = t.endOfAllRequests, i.gopInfo && (this.gopBuffer_ = function(e, t, i) {
                                if (!t.length) return e;
                                if (i) return t.slice();
                                for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++);
                                return e.slice(0, r).concat(t)
                            }(this.gopBuffer_, i.gopInfo, this.safeAppend_)), this.state = "APPENDING";
                            var r = this.isEndOfStream_(n.mediaIndex, n.playlist),
                                s = null !== this.mediaIndex,
                                a = n.timeline !== this.currentTimeline_ && n.timeline > 0;
                            !n.isFmp4 && (r || s && a) && ca(this.transmuxer_), this.trigger("appending"), this.waitForAppendsToComplete_(n)
                        }
                    }, i.setTimeMapping_ = function(e) {
                        var t = this.syncController_.mappingForTimeline(e);
                        null !== t && (this.timeMapping_ = t)
                    }, i.updateMediaSecondsLoaded_ = function(e) {
                        "number" === typeof e.start && "number" === typeof e.end ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration
                    }, i.shouldUpdateTransmuxerTimestampOffset_ = function(e) {
                        return null !== e && ("main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset())
                    }, i.trueSegmentStart_ = function(e) {
                        var t = e.currentStart,
                            i = e.playlist,
                            n = e.mediaIndex,
                            r = e.firstVideoFrameTimeForData,
                            s = e.currentVideoTimestampOffset,
                            a = e.useVideoTimingInfo,
                            o = e.videoTimingInfo,
                            l = e.audioTimingInfo;
                        if ("undefined" !== typeof t) return t;
                        if (!a) return l.start;
                        var u = i.segments[n - 1];
                        return 0 !== n && u && "undefined" !== typeof u.start && u.end === r + s ? o.start : r
                    }, i.waitForAppendsToComplete_ = function(e) {
                        if (!this.currentMediaInfo_) return this.error({
                            message: "No starting media returned, likely due to an unsupported media format.",
                            blacklistDuration: 1 / 0
                        }), void this.trigger("error");
                        var t = this.currentMediaInfo_,
                            i = t.hasAudio,
                            n = t.hasVideo,
                            r = t.isMuxed,
                            s = "main" === this.loaderType_ && n,
                            a = !this.audioDisabled_ && i && !r;
                        if (e.waitingOnAppends = 0, !e.hasAppendedData_) return e.timingInfo || "number" !== typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0), e.timingInfo = {
                            start: 0
                        }, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()), void this.checkAppendsDone_(e);
                        s && e.waitingOnAppends++, a && e.waitingOnAppends++, s && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), a && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))
                    }, i.checkAppendsDone_ = function(e) {
                        this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_())
                    }, i.checkForIllegalMediaSwitch = function(e) {
                        var t = function(e, t, i) {
                            return "main" === e && t && i ? i.hasAudio || i.hasVideo ? t.hasVideo && !i.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.hasVideo && i.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null
                        }(this.loaderType_, this.currentMediaInfo_, e);
                        return !!t && (this.error({
                            message: t,
                            blacklistDuration: 1 / 0
                        }), this.trigger("error"), !0)
                    }, i.updateSourceBufferTimestampOffset_ = function(e) {
                        if (null !== e.timestampOffset && "number" === typeof e.timingInfo.start && !e.changedTimestampOffset && "main" === this.loaderType_) {
                            var t = !1;
                            e.timestampOffset -= e.timingInfo.start, e.changedTimestampOffset = !0, e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), t = !0), e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), t = !0), t && this.trigger("timestampoffset")
                        }
                    }, i.updateTimingInfoEnd_ = function(e) {
                        e.timingInfo = e.timingInfo || {};
                        var t = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
                        t && (e.timingInfo.end = "number" === typeof t.end ? t.end : t.start + e.duration)
                    }, i.handleAppendsDone_ = function() {
                        if (this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
                        var e = this.pendingSegment_;
                        if (this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
                                segmentInfo: e,
                                shouldSaveTimelineMapping: "main" === this.loaderType_
                            }), this.logger_(function(e) {
                                var t = e.segment,
                                    i = t.start,
                                    n = t.end,
                                    r = e.playlist,
                                    s = r.mediaSequence,
                                    a = r.id,
                                    o = r.segments,
                                    l = void 0 === o ? [] : o,
                                    u = e.mediaIndex,
                                    c = e.timeline;
                                return ["appending [" + u + "] of [" + s + ", " + (s + l.length) + "] from playlist [" + a + "]", "[" + i + " => " + n + "] in timeline [" + c + "]"].join(" ")
                            }(e)), this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest) this.trigger("syncinfoupdate");
                        else {
                            this.addSegmentMetadataCue_(e), this.fetchAtBuffer_ = !0, this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({
                                type: this.loaderType_,
                                from: this.currentTimeline_,
                                to: e.timeline
                            }), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({
                                type: "audio",
                                from: this.currentTimeline_,
                                to: e.timeline
                            })), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate");
                            var t = e.segment;
                            if (t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration) this.resetEverything();
                            else null !== this.mediaIndex && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, this.isEndOfStream_(e.mediaIndex, e.playlist) && this.endOfStream(), this.trigger("appended"), this.paused() || this.monitorBuffer_()
                        }
                    }, i.recordThroughput_ = function(e) {
                        var t = this.throughput.rate,
                            i = Date.now() - e.endOfAllRequests + 1,
                            n = Math.floor(e.byteLength / i * 8 * 1e3);
                        this.throughput.rate += (n - t) / ++this.throughput.count
                    }, i.addSegmentMetadataCue_ = function(e) {
                        if (this.segmentMetadataTrack_) {
                            var t = e.segment,
                                i = t.start,
                                n = t.end;
                            if (Ha(i) && Ha(n)) {
                                qa(i, n, this.segmentMetadataTrack_);
                                var s = r().WebKitDataCue || r().VTTCue,
                                    a = {
                                        custom: t.custom,
                                        dateTimeObject: t.dateTimeObject,
                                        dateTimeString: t.dateTimeString,
                                        bandwidth: e.playlist.attributes.BANDWIDTH,
                                        resolution: e.playlist.attributes.RESOLUTION,
                                        codecs: e.playlist.attributes.CODECS,
                                        byteLength: e.byteLength,
                                        uri: e.uri,
                                        timeline: e.timeline,
                                        playlist: e.playlist.id,
                                        start: i,
                                        end: n
                                    },
                                    o = new s(i, n, JSON.stringify(a));
                                o.value = a, this.segmentMetadataTrack_.addCue(o)
                            }
                        }
                    }, t
                }(Kr.EventTarget);

            function Ka() {}
            var Qa, Xa = function(e) {
                    return "string" !== typeof e ? e : e.replace(/./, (function(e) {
                        return e.toUpperCase()
                    }))
                },
                Ya = ["video", "audio"],
                $a = function(e, t) {
                    var i = t[e + "Buffer"];
                    return i && i.updating || t.queuePending[e]
                },
                Ja = function e(t, i) {
                    if (0 !== i.queue.length) {
                        var n = 0,
                            r = i.queue[n];
                        if ("mediaSource" !== r.type) {
                            if ("mediaSource" !== t && i.started_ && "closed" !== i.mediaSource.readyState && !$a(t, i)) {
                                if (r.type !== t) {
                                    if (null === (n = function(e, t) {
                                            for (var i = 0; i < t.length; i++) {
                                                var n = t[i];
                                                if ("mediaSource" === n.type) return null;
                                                if (n.type === e) return i
                                            }
                                            return null
                                        }(t, i.queue))) return;
                                    r = i.queue[n]
                                }
                                i.queue.splice(n, 1), r.action(t, i), r.doneFn ? i.queuePending[t] = r : e(t, i)
                            }
                        } else i.updating() || "closed" === i.mediaSource.readyState || (i.queue.shift(), r.action(i), r.doneFn && r.doneFn(), e("audio", i), e("video", i))
                    }
                },
                Za = function(e, t) {
                    var i = t[e + "Buffer"],
                        n = Xa(e);
                    i && (i.removeEventListener("updateend", t["on" + n + "UpdateEnd_"]), i.removeEventListener("error", t["on" + n + "Error_"]), t.codecs[e] = null, t[e + "Buffer"] = null)
                },
                eo = function(e, t) {
                    return e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t)
                },
                to = function(e, t) {
                    return function(i, n) {
                        var r = n[i + "Buffer"];
                        eo(n.mediaSource, r) && (n.logger_("Appending segment " + t.mediaIndex + "'s " + e.length + " bytes to " + i + "Buffer"), r.appendBuffer(e))
                    }
                },
                io = function(e, t) {
                    return function(i, n) {
                        var r = n[i + "Buffer"];
                        eo(n.mediaSource, r) && (n.logger_("Removing " + e + " to " + t + " from " + i + "Buffer"), r.remove(e, t))
                    }
                },
                no = function(e) {
                    return function(t, i) {
                        var n = i[t + "Buffer"];
                        eo(i.mediaSource, n) && (i.logger_("Setting " + t + "timestampOffset to " + e), n.timestampOffset = e)
                    }
                },
                ro = function(e) {
                    return function(t, i) {
                        e()
                    }
                },
                so = function(e) {
                    return function(t) {
                        if ("open" === t.mediaSource.readyState) {
                            t.logger_("Calling mediaSource endOfStream(" + (e || "") + ")");
                            try {
                                t.mediaSource.endOfStream(e)
                            } catch (Qo) {
                                Kr.log.warn("Failed to call media source endOfStream", Qo)
                            }
                        }
                    }
                },
                ao = function(e) {
                    return function(t) {
                        t.logger_("Setting mediaSource duration to " + e);
                        try {
                            t.mediaSource.duration = e
                        } catch (Qo) {
                            Kr.log.warn("Failed to set media source duration", Qo)
                        }
                    }
                },
                oo = function() {
                    return function(e, t) {
                        if ("open" === t.mediaSource.readyState) {
                            var i = t[e + "Buffer"];
                            if (eo(t.mediaSource, i)) {
                                t.logger_("calling abort on " + e + "Buffer");
                                try {
                                    i.abort()
                                } catch (Qo) {
                                    Kr.log.warn("Failed to abort on " + e + "Buffer", Qo)
                                }
                            }
                        }
                    }
                },
                lo = function(e, t) {
                    return function(i) {
                        var n = Xa(e),
                            r = (0, B._5)(t);
                        i.logger_("Adding " + e + "Buffer with codec " + t + " to mediaSource");
                        var s = i.mediaSource.addSourceBuffer(r);
                        s.addEventListener("updateend", i["on" + n + "UpdateEnd_"]), s.addEventListener("error", i["on" + n + "Error_"]), i.codecs[e] = t, i[e + "Buffer"] = s
                    }
                },
                uo = function(e) {
                    return function(t) {
                        var i = t[e + "Buffer"];
                        if (Za(e, t), eo(t.mediaSource, i)) {
                            t.logger_("Removing " + e + "Buffer with codec " + t.codecs[e] + " from mediaSource");
                            try {
                                t.mediaSource.removeSourceBuffer(i)
                            } catch (Qo) {
                                Kr.log.warn("Failed to removeSourceBuffer " + e + "Buffer", Qo)
                            }
                        }
                    }
                },
                co = function(e) {
                    return function(t, i) {
                        var n = i[t + "Buffer"],
                            r = (0, B._5)(e);
                        eo(i.mediaSource, n) && i.codecs[t] !== e && (i.logger_("changing " + t + "Buffer codec from " + i.codecs[t] + " to " + e), n.changeType(r), i.codecs[t] = e)
                    }
                },
                ho = function(e) {
                    var t = e.type,
                        i = e.sourceUpdater,
                        n = e.action,
                        r = e.doneFn,
                        s = e.name;
                    i.queue.push({
                        type: t,
                        action: n,
                        doneFn: r,
                        name: s
                    }), Ja(t, i)
                },
                po = function(e, t) {
                    return function(i) {
                        if (t.queuePending[e]) {
                            var n = t.queuePending[e].doneFn;
                            t.queuePending[e] = null, n && n(t[e + "Error_"])
                        }
                        Ja(e, t)
                    }
                },
                fo = function(e) {
                    function t(t) {
                        var i;
                        return (i = e.call(this) || this).mediaSource = t, i.sourceopenListener_ = function() {
                            return Ja("mediaSource", c()(i))
                        }, i.mediaSource.addEventListener("sourceopen", i.sourceopenListener_), i.logger_ = Ma("SourceUpdater"), i.audioTimestampOffset_ = 0, i.videoTimestampOffset_ = 0, i.queue = [], i.queuePending = {
                            audio: null,
                            video: null
                        }, i.delayedAudioAppendQueue_ = [], i.videoAppendQueued_ = !1, i.codecs = {}, i.onVideoUpdateEnd_ = po("video", c()(i)), i.onAudioUpdateEnd_ = po("audio", c()(i)), i.onVideoError_ = function(e) {
                            i.videoError_ = e
                        }, i.onAudioError_ = function(e) {
                            i.audioError_ = e
                        }, i.started_ = !1, i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.ready = function() {
                        return this.started_
                    }, i.createSourceBuffers = function(e) {
                        this.ready() || (this.addOrChangeSourceBuffers(e), this.started_ = !0, this.trigger("ready"))
                    }, i.addSourceBuffer = function(e, t) {
                        ho({
                            type: "mediaSource",
                            sourceUpdater: this,
                            action: lo(e, t),
                            name: "addSourceBuffer"
                        })
                    }, i.abort = function(e) {
                        ho({
                            type: e,
                            sourceUpdater: this,
                            action: oo(e),
                            name: "abort"
                        })
                    }, i.removeSourceBuffer = function(e) {
                        this.canRemoveSourceBuffer() ? ho({
                            type: "mediaSource",
                            sourceUpdater: this,
                            action: uo(e),
                            name: "removeSourceBuffer"
                        }) : Kr.log.error("removeSourceBuffer is not supported!")
                    }, i.canRemoveSourceBuffer = function() {
                        return !Kr.browser.IE_VERSION && r().MediaSource && r().MediaSource.prototype && "function" === typeof r().MediaSource.prototype.removeSourceBuffer
                    }, t.canChangeType = function() {
                        return r().SourceBuffer && r().SourceBuffer.prototype && "function" === typeof r().SourceBuffer.prototype.changeType
                    }, i.canChangeType = function() {
                        return this.constructor.canChangeType()
                    }, i.changeType = function(e, t) {
                        this.canChangeType() ? ho({
                            type: e,
                            sourceUpdater: this,
                            action: co(t),
                            name: "changeType"
                        }) : Kr.log.error("changeType is not supported!")
                    }, i.addOrChangeSourceBuffers = function(e) {
                        var t = this;
                        if (!e || "object" !== typeof e || 0 === Object.keys(e).length) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
                        Object.keys(e).forEach((function(i) {
                            var n = e[i];
                            if (!t.ready()) return t.addSourceBuffer(i, n);
                            t.canChangeType() && t.changeType(i, n)
                        }))
                    }, i.appendBuffer = function(e, t) {
                        var i = this,
                            n = e.segmentInfo,
                            r = e.type,
                            s = e.bytes;
                        if (this.processedAppend_ = !0, "audio" === r && this.videoBuffer && !this.videoAppendQueued_) return this.delayedAudioAppendQueue_.push([e, t]), void this.logger_("delayed audio append of " + s.length + " until video append");
                        if (ho({
                                type: r,
                                sourceUpdater: this,
                                action: to(s, n || {
                                    mediaIndex: -1
                                }),
                                doneFn: t,
                                name: "appendBuffer"
                            }), "video" === r) {
                            if (this.videoAppendQueued_ = !0, !this.delayedAudioAppendQueue_.length) return;
                            var a = this.delayedAudioAppendQueue_.slice();
                            this.logger_("queuing delayed audio " + a.length + " appendBuffers"), this.delayedAudioAppendQueue_.length = 0, a.forEach((function(e) {
                                i.appendBuffer.apply(i, e)
                            }))
                        }
                    }, i.audioBuffered = function() {
                        return eo(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : Kr.createTimeRange()
                    }, i.videoBuffered = function() {
                        return eo(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : Kr.createTimeRange()
                    }, i.buffered = function() {
                        var e = eo(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
                            t = eo(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
                        return t && !e ? this.audioBuffered() : e && !t ? this.videoBuffered() : function(e, t) {
                            var i = null,
                                n = null,
                                r = 0,
                                s = [],
                                a = [];
                            if (!e || !e.length || !t || !t.length) return Kr.createTimeRange();
                            for (var o = e.length; o--;) s.push({
                                time: e.start(o),
                                type: "start"
                            }), s.push({
                                time: e.end(o),
                                type: "end"
                            });
                            for (o = t.length; o--;) s.push({
                                time: t.start(o),
                                type: "start"
                            }), s.push({
                                time: t.end(o),
                                type: "end"
                            });
                            for (s.sort((function(e, t) {
                                    return e.time - t.time
                                })), o = 0; o < s.length; o++) "start" === s[o].type ? 2 === ++r && (i = s[o].time) : "end" === s[o].type && 1 === --r && (n = s[o].time), null !== i && null !== n && (a.push([i, n]), i = null, n = null);
                            return Kr.createTimeRanges(a)
                        }(this.audioBuffered(), this.videoBuffered())
                    }, i.setDuration = function(e, t) {
                        void 0 === t && (t = Ka), ho({
                            type: "mediaSource",
                            sourceUpdater: this,
                            action: ao(e),
                            name: "duration",
                            doneFn: t
                        })
                    }, i.endOfStream = function(e, t) {
                        void 0 === e && (e = null), void 0 === t && (t = Ka), "string" !== typeof e && (e = void 0), ho({
                            type: "mediaSource",
                            sourceUpdater: this,
                            action: so(e),
                            name: "endOfStream",
                            doneFn: t
                        })
                    }, i.removeAudio = function(e, t, i) {
                        void 0 === i && (i = Ka), this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? ho({
                            type: "audio",
                            sourceUpdater: this,
                            action: io(e, t),
                            doneFn: i,
                            name: "remove"
                        }) : i()
                    }, i.removeVideo = function(e, t, i) {
                        void 0 === i && (i = Ka), this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? ho({
                            type: "video",
                            sourceUpdater: this,
                            action: io(e, t),
                            doneFn: i,
                            name: "remove"
                        }) : i()
                    }, i.updating = function() {
                        return !(!$a("audio", this) && !$a("video", this))
                    }, i.audioTimestampOffset = function(e) {
                        return "undefined" !== typeof e && this.audioBuffer && this.audioTimestampOffset_ !== e && (ho({
                            type: "audio",
                            sourceUpdater: this,
                            action: no(e),
                            name: "timestampOffset"
                        }), this.audioTimestampOffset_ = e), this.audioTimestampOffset_
                    }, i.videoTimestampOffset = function(e) {
                        return "undefined" !== typeof e && this.videoBuffer && this.videoTimestampOffset !== e && (ho({
                            type: "video",
                            sourceUpdater: this,
                            action: no(e),
                            name: "timestampOffset"
                        }), this.videoTimestampOffset_ = e), this.videoTimestampOffset_
                    }, i.audioQueueCallback = function(e) {
                        this.audioBuffer && ho({
                            type: "audio",
                            sourceUpdater: this,
                            action: ro(e),
                            name: "callback"
                        })
                    }, i.videoQueueCallback = function(e) {
                        this.videoBuffer && ho({
                            type: "video",
                            sourceUpdater: this,
                            action: ro(e),
                            name: "callback"
                        })
                    }, i.dispose = function() {
                        var e = this;
                        this.trigger("dispose"), Ya.forEach((function(t) {
                            e.abort(t), e.canRemoveSourceBuffer() ? e.removeSourceBuffer(t) : e[t + "QueueCallback"]((function() {
                                return Za(t, e)
                            }))
                        })), this.videoAppendQueued_ = !1, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off()
                    }, t
                }(Kr.EventTarget),
                mo = function(e) {
                    return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
                },
                go = new Uint8Array("\n\n".split("").map((function(e) {
                    return e.charCodeAt(0)
                }))),
                vo = function(e) {
                    function t(t, i) {
                        var n;
                        return void 0 === i && (i = {}), (n = e.call(this, t, i) || this).handlePartialData_ = !1, n.mediaSource_ = null, n.subtitlesTrack_ = null, n.loaderType_ = "subtitle", n.featuresNativeTextTracks_ = t.featuresNativeTextTracks, n.shouldSaveSegmentTimingInfo_ = !1, n
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.createTransmuxer_ = function() {
                        return null
                    }, i.buffered_ = function() {
                        if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return Kr.createTimeRanges();
                        var e = this.subtitlesTrack_.cues,
                            t = e[0].startTime,
                            i = e[e.length - 1].startTime;
                        return Kr.createTimeRanges([
                            [t, i]
                        ])
                    }, i.initSegmentForMap = function(e, t) {
                        if (void 0 === t && (t = !1), !e) return null;
                        var i = Bs(e),
                            n = this.initSegments_[i];
                        if (t && !n && e.bytes) {
                            var r = go.byteLength + e.bytes.byteLength,
                                s = new Uint8Array(r);
                            s.set(e.bytes), s.set(go, e.bytes.byteLength), this.initSegments_[i] = n = {
                                resolvedUri: e.resolvedUri,
                                byterange: e.byterange,
                                bytes: s
                            }
                        }
                        return n || e
                    }, i.couldBeginLoading_ = function() {
                        return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                    }, i.init_ = function() {
                        return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                    }, i.track = function(e) {
                        return "undefined" === typeof e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
                    }, i.remove = function(e, t) {
                        qa(e, t, this.subtitlesTrack_)
                    }, i.fillBuffer_ = function() {
                        var e = this;
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (t = this.skipEmptySegments_(t)) {
                            if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                                return this.syncController_.one("timestampoffset", (function() {
                                    e.state = "READY", e.paused() || e.monitorBuffer_()
                                })), void(this.state = "WAITING_ON_TIMELINE")
                            }
                            this.loadSegment_(t)
                        }
                    }, i.skipEmptySegments_ = function(e) {
                        for (; e && e.segment.empty;) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
                        return e
                    }, i.stopForError = function(e) {
                        this.error(e), this.state = "READY", this.pause(), this.trigger("error")
                    }, i.segmentRequestFinished_ = function(e, t, i) {
                        var n = this;
                        if (this.subtitlesTrack_) {
                            if (this.saveTransferStats_(t.stats), !this.pendingSegment_) return this.state = "READY", void(this.mediaRequestsAborted += 1);
                            if (e) return e.code === ha && this.handleTimeout_(), e.code === pa ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, void this.stopForError(e);
                            this.saveBandwidthRelatedStats_(t.stats), this.state = "APPENDING", this.trigger("appending");
                            var s = this.pendingSegment_,
                                a = s.segment;
                            if (a.map && (a.map.bytes = t.map.bytes), s.bytes = t.bytes, "function" !== typeof r().WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                                var o, l = function() {
                                    n.subtitlesTrack_.tech_.off("vttjsloaded", o), n.stopForError({
                                        message: "Error loading vtt.js"
                                    })
                                };
                                return o = function() {
                                    n.subtitlesTrack_.tech_.off("vttjserror", l), n.segmentRequestFinished_(e, t, i)
                                }, this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", o), void this.subtitlesTrack_.tech_.one("vttjserror", l)
                            }
                            a.requested = !0;
                            try {
                                this.parseVTTCues_(s)
                            } catch (Qo) {
                                return void this.stopForError({
                                    message: Qo.message
                                })
                            }
                            if (this.updateTimeMapping_(s, this.syncController_.timelines[s.timeline], this.playlist_), s.cues.length ? s.timingInfo = {
                                    start: s.cues[0].startTime,
                                    end: s.cues[s.cues.length - 1].endTime
                                } : s.timingInfo = {
                                    start: s.startOfSegment,
                                    end: s.startOfSegment + s.duration
                                }, s.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                            s.byteLength = s.bytes.byteLength, this.mediaSecondsLoaded += a.duration, s.cues.forEach((function(e) {
                                n.remove(e.startTime, e.endTime), n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_ ? new(r().VTTCue)(e.startTime, e.endTime, e.text) : e)
                            })), this.handleAppendsDone_()
                        } else this.state = "READY"
                    }, i.handleData_ = function() {}, i.updateTimingInfoEnd_ = function() {}, i.parseVTTCues_ = function(e) {
                        var t, i = !1;
                        "function" === typeof r().TextDecoder ? t = new(r().TextDecoder)("utf8") : (t = r().WebVTT.StringDecoder(), i = !0);
                        var n = new(r().WebVTT.Parser)(r(), r().vttjs, t);
                        if (e.cues = [], e.timestampmap = {
                                MPEGTS: 0,
                                LOCAL: 0
                            }, n.oncue = e.cues.push.bind(e.cues), n.ontimestampmap = function(t) {
                                e.timestampmap = t
                            }, n.onparsingerror = function(e) {
                                Kr.log.warn("Error encountered when parsing cues: " + e.message)
                            }, e.segment.map) {
                            var s = e.segment.map.bytes;
                            i && (s = mo(s)), n.parse(s)
                        }
                        var a = e.bytes;
                        i && (a = mo(a)), n.parse(a), n.flush()
                    }, i.updateTimeMapping_ = function(e, t, i) {
                        var n = e.segment;
                        if (t)
                            if (e.cues.length) {
                                var r = e.timestampmap,
                                    s = r.MPEGTS / U.ONE_SECOND_IN_TS - r.LOCAL + t.mapping;
                                if (e.cues.forEach((function(e) {
                                        e.startTime += s, e.endTime += s
                                    })), !i.syncInfo) {
                                    var a = e.cues[0].startTime,
                                        o = e.cues[e.cues.length - 1].startTime;
                                    i.syncInfo = {
                                        mediaSequence: i.mediaSequence + e.mediaIndex,
                                        time: Math.min(a, o - n.duration)
                                    }
                                }
                            } else n.empty = !0
                    }, t
                }(Ga),
                _o = function(e, t) {
                    for (var i = e.cues, n = 0; n < i.length; n++) {
                        var r = i[n];
                        if (t >= r.adStartTime && t <= r.adEndTime) return r
                    }
                    return null
                },
                yo = [{
                    name: "VOD",
                    run: function(e, t, i, n, r) {
                        if (i !== 1 / 0) {
                            return {
                                time: 0,
                                segmentIndex: 0
                            }
                        }
                        return null
                    }
                }, {
                    name: "ProgramDateTime",
                    run: function(e, t, i, n, r) {
                        if (!e.datetimeToDisplayTime) return null;
                        var s = t.segments || [],
                            a = null,
                            o = null;
                        r = r || 0;
                        for (var l = 0; l < s.length; l++) {
                            var u = s[l];
                            if (u.dateTimeObject) {
                                var c = u.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime,
                                    d = Math.abs(r - c);
                                if (null !== o && (0 === d || o < d)) break;
                                o = d, a = {
                                    time: c,
                                    segmentIndex: l
                                }
                            }
                        }
                        return a
                    }
                }, {
                    name: "Segment",
                    run: function(e, t, i, n, r) {
                        var s = t.segments || [],
                            a = null,
                            o = null;
                        r = r || 0;
                        for (var l = 0; l < s.length; l++) {
                            var u = s[l];
                            if (u.timeline === n && "undefined" !== typeof u.start) {
                                var c = Math.abs(r - u.start);
                                if (null !== o && o < c) break;
                                (!a || null === o || o >= c) && (o = c, a = {
                                    time: u.start,
                                    segmentIndex: l
                                })
                            }
                        }
                        return a
                    }
                }, {
                    name: "Discontinuity",
                    run: function(e, t, i, n, r) {
                        var s = null;
                        if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length)
                            for (var a = null, o = 0; o < t.discontinuityStarts.length; o++) {
                                var l = t.discontinuityStarts[o],
                                    u = t.discontinuitySequence + o + 1,
                                    c = e.discontinuities[u];
                                if (c) {
                                    var d = Math.abs(r - c.time);
                                    if (null !== a && a < d) break;
                                    (!s || null === a || a >= d) && (a = d, s = {
                                        time: c.time,
                                        segmentIndex: l
                                    })
                                }
                            }
                        return s
                    }
                }, {
                    name: "Playlist",
                    run: function(e, t, i, n, r) {
                        return t.syncInfo ? {
                            time: t.syncInfo.time,
                            segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
                        } : null
                    }
                }],
                To = function(e) {
                    function t(t) {
                        var i;
                        return (i = e.call(this) || this).timelines = [], i.discontinuities = [], i.datetimeToDisplayTime = null, i.logger_ = Ma("SyncController"), i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.getSyncPoint = function(e, t, i, n) {
                        var r = this.runStrategies_(e, t, i, n);
                        return r.length ? this.selectSyncPoint_(r, {
                            key: "time",
                            value: n
                        }) : null
                    }, i.getExpiredTime = function(e, t) {
                        if (!e || !e.segments) return null;
                        var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                        if (!i.length) return null;
                        var n = this.selectSyncPoint_(i, {
                            key: "segmentIndex",
                            value: 0
                        });
                        return n.segmentIndex > 0 && (n.time *= -1), Math.abs(n.time + bs(e, n.segmentIndex, 0))
                    }, i.runStrategies_ = function(e, t, i, n) {
                        for (var r = [], s = 0; s < yo.length; s++) {
                            var a = yo[s],
                                o = a.run(this, e, t, i, n);
                            o && (o.strategy = a.name, r.push({
                                strategy: a.name,
                                syncPoint: o
                            }))
                        }
                        return r
                    }, i.selectSyncPoint_ = function(e, t) {
                        for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, s = 1; s < e.length; s++) {
                            var a = Math.abs(e[s].syncPoint[t.key] - t.value);
                            a < n && (n = a, i = e[s].syncPoint, r = e[s].strategy)
                        }
                        return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
                    }, i.saveExpiredSegmentInfo = function(e, t) {
                        for (var i = t.mediaSequence - e.mediaSequence - 1; i >= 0; i--) {
                            var n = e.segments[i];
                            if (n && "undefined" !== typeof n.start) {
                                t.syncInfo = {
                                    mediaSequence: e.mediaSequence + i,
                                    time: n.start
                                }, this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate");
                                break
                            }
                        }
                    }, i.setDateTimeMapping = function(e) {
                        if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                            var t = e.segments[0].dateTimeObject.getTime() / 1e3;
                            this.datetimeToDisplayTime = -t
                        }
                    }, i.saveSegmentTimingInfo = function(e) {
                        var t = e.segmentInfo,
                            i = e.shouldSaveTimelineMapping;
                        this.calculateSegmentTimeMapping_(t, t.timingInfo, i) && (this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo || (t.playlist.syncInfo = {
                            mediaSequence: t.playlist.mediaSequence + t.mediaIndex,
                            time: t.segment.start
                        }))
                    }, i.timestampOffsetForTimeline = function(e) {
                        return "undefined" === typeof this.timelines[e] ? null : this.timelines[e].time
                    }, i.mappingForTimeline = function(e) {
                        return "undefined" === typeof this.timelines[e] ? null : this.timelines[e].mapping
                    }, i.calculateSegmentTimeMapping_ = function(e, t, i) {
                        var n = e.segment,
                            r = this.timelines[e.timeline];
                        if (null !== e.timestampOffset) r = {
                            time: e.startOfSegment,
                            mapping: e.startOfSegment - t.start
                        }, i && (this.timelines[e.timeline] = r, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": [time: " + r.time + "] [mapping: " + r.mapping + "]")), n.start = e.startOfSegment, n.end = t.end + r.mapping;
                        else {
                            if (!r) return !1;
                            n.start = t.start + r.mapping, n.end = t.end + r.mapping
                        }
                        return !0
                    }, i.saveDiscontinuitySyncInfo_ = function(e) {
                        var t = e.playlist,
                            i = e.segment;
                        if (i.discontinuity) this.discontinuities[i.timeline] = {
                            time: i.start,
                            accuracy: 0
                        };
                        else if (t.discontinuityStarts && t.discontinuityStarts.length)
                            for (var n = 0; n < t.discontinuityStarts.length; n++) {
                                var r = t.discontinuityStarts[n],
                                    s = t.discontinuitySequence + n + 1,
                                    a = r - e.mediaIndex,
                                    o = Math.abs(a);
                                if (!this.discontinuities[s] || this.discontinuities[s].accuracy > o) {
                                    var l = void 0;
                                    l = a < 0 ? i.start - bs(t, e.mediaIndex, r) : i.end + bs(t, e.mediaIndex + 1, r), this.discontinuities[s] = {
                                        time: l,
                                        accuracy: o
                                    }
                                }
                            }
                    }, i.dispose = function() {
                        this.trigger("dispose"), this.off()
                    }, t
                }(Kr.EventTarget),
                bo = function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).pendingTimelineChanges_ = {}, t.lastTimelineChanges_ = {}, t
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.clearPendingTimelineChange = function(e) {
                        this.pendingTimelineChanges_[e] = null, this.trigger("pendingtimelinechange")
                    }, i.pendingTimelineChange = function(e) {
                        var t = e.type,
                            i = e.from,
                            n = e.to;
                        return "number" === typeof i && "number" === typeof n && (this.pendingTimelineChanges_[t] = {
                            type: t,
                            from: i,
                            to: n
                        }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[t]
                    }, i.lastTimelineChange = function(e) {
                        var t = e.type,
                            i = e.from,
                            n = e.to;
                        return "number" === typeof i && "number" === typeof n && (this.lastTimelineChanges_[t] = {
                            type: t,
                            from: i,
                            to: n
                        }, delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")), this.lastTimelineChanges_[t]
                    }, i.dispose = function() {
                        this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off()
                    }, t
                }(Kr.EventTarget),
                So = new wa("./decrypter-worker.worker.js", (function(e, t) {
                    var i = this;
                    ! function() {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        var t = function(t, i, n) {
                            return i && e(t.prototype, i), n && e(t, n), t
                        };
                        var n = function(e, t) {
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                            },
                            r = function() {
                                function e() {
                                    this.listeners = {}
                                }
                                var t = e.prototype;
                                return t.on = function(e, t) {
                                    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                                }, t.off = function(e, t) {
                                    if (!this.listeners[e]) return !1;
                                    var i = this.listeners[e].indexOf(t);
                                    return this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(i, 1), i > -1
                                }, t.trigger = function(e) {
                                    var t = this.listeners[e];
                                    if (t)
                                        if (2 === arguments.length)
                                            for (var i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1]);
                                        else
                                            for (var r = Array.prototype.slice.call(arguments, 1), s = t.length, a = 0; a < s; ++a) t[a].apply(this, r)
                                }, t.dispose = function() {
                                    this.listeners = {}
                                }, t.pipe = function(e) {
                                    this.on("data", (function(t) {
                                        e.push(t)
                                    }))
                                }, e
                            }();
                        var s = null,
                            a = function() {
                                function e(e) {
                                    var t, i, n;
                                    s || (s = function() {
                                        var e, t, i, n, r, s, a, o, l = [
                                                [
                                                    [],
                                                    [],
                                                    [],
                                                    [],
                                                    []
                                                ],
                                                [
                                                    [],
                                                    [],
                                                    [],
                                                    [],
                                                    []
                                                ]
                                            ],
                                            u = l[0],
                                            c = l[1],
                                            d = u[4],
                                            h = c[4],
                                            p = [],
                                            f = [];
                                        for (e = 0; e < 256; e++) f[(p[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                                        for (t = i = 0; !d[t]; t ^= n || 1, i = f[i] || 1)
                                            for (s = (s = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4) >> 8 ^ 255 & s ^ 99, d[t] = s, h[s] = t, o = 16843009 * p[r = p[n = p[t]]] ^ 65537 * r ^ 257 * n ^ 16843008 * t, a = 257 * p[s] ^ 16843008 * s, e = 0; e < 4; e++) u[e][t] = a = a << 24 ^ a >>> 8, c[e][s] = o = o << 24 ^ o >>> 8;
                                        for (e = 0; e < 5; e++) u[e] = u[e].slice(0), c[e] = c[e].slice(0);
                                        return l
                                    }()), this._tables = [
                                        [s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()],
                                        [s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]
                                    ];
                                    var r = this._tables[0][4],
                                        a = this._tables[1],
                                        o = e.length,
                                        l = 1;
                                    if (4 !== o && 6 !== o && 8 !== o) throw new Error("Invalid aes key size");
                                    var u = e.slice(0),
                                        c = [];
                                    for (this._key = [u, c], t = o; t < 4 * o + 28; t++) n = u[t - 1], (t % o === 0 || 8 === o && t % o === 4) && (n = r[n >>> 24] << 24 ^ r[n >> 16 & 255] << 16 ^ r[n >> 8 & 255] << 8 ^ r[255 & n], t % o === 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), u[t] = u[t - o] ^ n;
                                    for (i = 0; t; i++, t--) n = u[3 & i ? t : t - 4], c[i] = t <= 4 || i < 4 ? n : a[0][r[n >>> 24]] ^ a[1][r[n >> 16 & 255]] ^ a[2][r[n >> 8 & 255]] ^ a[3][r[255 & n]]
                                }
                                return e.prototype.decrypt = function(e, t, i, n, r, s) {
                                    var a, o, l, u, c = this._key[1],
                                        d = e ^ c[0],
                                        h = n ^ c[1],
                                        p = i ^ c[2],
                                        f = t ^ c[3],
                                        m = c.length / 4 - 2,
                                        g = 4,
                                        v = this._tables[1],
                                        _ = v[0],
                                        y = v[1],
                                        T = v[2],
                                        b = v[3],
                                        S = v[4];
                                    for (u = 0; u < m; u++) a = _[d >>> 24] ^ y[h >> 16 & 255] ^ T[p >> 8 & 255] ^ b[255 & f] ^ c[g], o = _[h >>> 24] ^ y[p >> 16 & 255] ^ T[f >> 8 & 255] ^ b[255 & d] ^ c[g + 1], l = _[p >>> 24] ^ y[f >> 16 & 255] ^ T[d >> 8 & 255] ^ b[255 & h] ^ c[g + 2], f = _[f >>> 24] ^ y[d >> 16 & 255] ^ T[h >> 8 & 255] ^ b[255 & p] ^ c[g + 3], g += 4, d = a, h = o, p = l;
                                    for (u = 0; u < 4; u++) r[(3 & -u) + s] = S[d >>> 24] << 24 ^ S[h >> 16 & 255] << 16 ^ S[p >> 8 & 255] << 8 ^ S[255 & f] ^ c[g++], a = d, d = h, h = p, p = f, f = a
                                }, e
                            }(),
                            o = function(e) {
                                function t() {
                                    var t;
                                    return (t = e.call(this, r) || this).jobs = [], t.delay = 1, t.timeout_ = null, t
                                }
                                n(t, e);
                                var i = t.prototype;
                                return i.processJob_ = function() {
                                    this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                                }, i.push = function(e) {
                                    this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                                }, t
                            }(r),
                            l = function(e) {
                                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                            },
                            u = function() {
                                function e(t, i, n, r) {
                                    var s = e.STEP,
                                        a = new Int32Array(t.buffer),
                                        u = new Uint8Array(t.byteLength),
                                        c = 0;
                                    for (this.asyncStream_ = new o, this.asyncStream_.push(this.decryptChunk_(a.subarray(c, c + s), i, n, u)), c = s; c < a.length; c += s) n = new Uint32Array([l(a[c - 4]), l(a[c - 3]), l(a[c - 2]), l(a[c - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(c, c + s), i, n, u));
                                    this.asyncStream_.push((function() {
                                        var e;
                                        r(null, (e = u).subarray(0, e.byteLength - e[e.byteLength - 1]))
                                    }))
                                }
                                return e.prototype.decryptChunk_ = function(e, t, i, n) {
                                    return function() {
                                        var r = function(e, t, i) {
                                            var n, r, s, o, u, c, d, h, p, f = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                                                m = new a(Array.prototype.slice.call(t)),
                                                g = new Uint8Array(e.byteLength),
                                                v = new Int32Array(g.buffer);
                                            for (n = i[0], r = i[1], s = i[2], o = i[3], p = 0; p < f.length; p += 4) u = l(f[p]), c = l(f[p + 1]), d = l(f[p + 2]), h = l(f[p + 3]), m.decrypt(u, c, d, h, v, p), v[p] = l(v[p] ^ n), v[p + 1] = l(v[p + 1] ^ r), v[p + 2] = l(v[p + 2] ^ s), v[p + 3] = l(v[p + 3] ^ o), n = u, r = c, s = d, o = h;
                                            return g
                                        }(e, t, i);
                                        n.set(r, e.byteOffset)
                                    }
                                }, t(e, null, [{
                                    key: "STEP",
                                    get: function() {
                                        return 32e3
                                    }
                                }]), e
                            }();
                        new function(e) {
                            e.onmessage = function(t) {
                                var i = t.data,
                                    n = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength),
                                    r = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4),
                                    s = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
                                new u(n, r, s, (function(t, n) {
                                    e.postMessage(function(e) {
                                        var t = {};
                                        return Object.keys(e).forEach((function(i) {
                                            var n = e[i];
                                            ArrayBuffer.isView(n) ? t[i] = {
                                                bytes: n.buffer,
                                                byteOffset: n.byteOffset,
                                                byteLength: n.byteLength
                                            } : t[i] = n
                                        })), t
                                    }({
                                        source: i.source,
                                        decrypted: n
                                    }), [n.buffer])
                                }))
                            }
                        }(i)
                    }()
                })),
                ko = function(e) {
                    var t = e.default ? "main" : "alternative";
                    return e.characteristics && e.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"), t
                },
                Co = function(e, t) {
                    e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
                },
                Eo = function(e, t) {
                    t.activePlaylistLoader = e, e.load()
                },
                wo = {
                    AUDIO: function(e, t) {
                        return function() {
                            var i = t.segmentLoaders[e],
                                n = t.mediaTypes[e],
                                r = t.blacklistCurrentPlaylist;
                            Co(i, n);
                            var s = n.activeTrack(),
                                a = n.activeGroup(),
                                o = (a.filter((function(e) {
                                    return e.default
                                }))[0] || a[0]).id,
                                l = n.tracks[o];
                            if (s !== l) {
                                for (var u in Kr.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), n.tracks) n.tracks[u].enabled = n.tracks[u] === l;
                                n.onTrackChanged()
                            } else r({
                                message: "Problem encountered loading the default audio track."
                            })
                        }
                    },
                    SUBTITLES: function(e, t) {
                        return function() {
                            var i = t.segmentLoaders[e],
                                n = t.mediaTypes[e];
                            Kr.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), Co(i, n);
                            var r = n.activeTrack();
                            r && (r.mode = "disabled"), n.onTrackChanged()
                        }
                    }
                },
                Io = {
                    AUDIO: function(e, t, i) {
                        if (t) {
                            var n = i.tech,
                                r = i.requestOptions,
                                s = i.segmentLoaders[e];
                            t.on("loadedmetadata", (function() {
                                var e = t.media();
                                s.playlist(e, r), (!n.paused() || e.endList && "none" !== n.preload()) && s.load()
                            })), t.on("loadedplaylist", (function() {
                                s.playlist(t.media(), r), n.paused() || s.load()
                            })), t.on("error", wo[e](e, i))
                        }
                    },
                    SUBTITLES: function(e, t, i) {
                        var n = i.tech,
                            r = i.requestOptions,
                            s = i.segmentLoaders[e],
                            a = i.mediaTypes[e];
                        t.on("loadedmetadata", (function() {
                            var e = t.media();
                            s.playlist(e, r), s.track(a.activeTrack()), (!n.paused() || e.endList && "none" !== n.preload()) && s.load()
                        })), t.on("loadedplaylist", (function() {
                            s.playlist(t.media(), r), n.paused() || s.load()
                        })), t.on("error", wo[e](e, i))
                    }
                },
                Po = {
                    AUDIO: function(e, t) {
                        var i = t.vhs,
                            n = t.sourceType,
                            r = t.segmentLoaders[e],
                            s = t.requestOptions,
                            a = t.master,
                            o = a.mediaGroups,
                            l = a.playlists,
                            u = t.mediaTypes[e],
                            c = u.groups,
                            d = u.tracks,
                            h = t.masterPlaylistLoader;
                        o[e] && 0 !== Object.keys(o[e]).length || (o[e] = {
                            main: {
                                default: {
                                    default: !0
                                }
                            }
                        });
                        var p = function(r) {
                            c[r] || (c[r] = []);
                            var a = l.filter((function(t) {
                                    return t.attributes[e] === r
                                })),
                                u = function(l) {
                                    var u = o[e][r][l];
                                    a.filter((function(e) {
                                        return e.resolvedUri === u.resolvedUri
                                    })).length && delete u.resolvedUri;
                                    var p = void 0;
                                    if (p = "vhs-json" === n && u.playlists ? new cs(u.playlists[0], i, s) : u.resolvedUri ? new cs(u.resolvedUri, i, s) : u.playlists && "dash" === n ? new Zs(u.playlists[0], i, s, h) : null, u = Kr.mergeOptions({
                                            id: l,
                                            playlistLoader: p
                                        }, u), Io[e](e, u.playlistLoader, t), c[r].push(u), "undefined" === typeof d[l]) {
                                        var f = new Kr.AudioTrack({
                                            id: l,
                                            kind: ko(u),
                                            enabled: !1,
                                            language: u.language,
                                            default: u.default,
                                            label: l
                                        });
                                        d[l] = f
                                    }
                                };
                            for (var p in o[e][r]) u(p)
                        };
                        for (var f in o[e]) p(f);
                        r.on("error", wo[e](e, t))
                    },
                    SUBTITLES: function(e, t) {
                        var i = t.tech,
                            n = t.vhs,
                            r = t.sourceType,
                            s = t.segmentLoaders[e],
                            a = t.requestOptions,
                            o = t.master.mediaGroups,
                            l = t.mediaTypes[e],
                            u = l.groups,
                            c = l.tracks,
                            d = t.masterPlaylistLoader;
                        for (var h in o[e])
                            for (var p in u[h] || (u[h] = []), o[e][h])
                                if (!o[e][h][p].forced) {
                                    var f = o[e][h][p],
                                        m = void 0;
                                    if ("hls" === r ? m = new cs(f.resolvedUri, n, a) : "dash" === r ? m = new Zs(f.playlists[0], n, a, d) : "vhs-json" === r && (m = new cs(f.playlists ? f.playlists[0] : f.resolvedUri, n, a)), f = Kr.mergeOptions({
                                            id: p,
                                            playlistLoader: m
                                        }, f), Io[e](e, f.playlistLoader, t), u[h].push(f), "undefined" === typeof c[p]) {
                                        var g = i.addRemoteTextTrack({
                                            id: p,
                                            kind: "subtitles",
                                            default: f.default && f.autoselect,
                                            language: f.language,
                                            label: p
                                        }, !1).track;
                                        c[p] = g
                                    }
                                }
                        s.on("error", wo[e](e, t))
                    },
                    "CLOSED-CAPTIONS": function(e, t) {
                        var i = t.tech,
                            n = t.master.mediaGroups,
                            r = t.mediaTypes[e],
                            s = r.groups,
                            a = r.tracks;
                        for (var o in n[e])
                            for (var l in s[o] || (s[o] = []), n[e][o]) {
                                var u = n[e][o][l];
                                if (u.instreamId.match(/CC\d/) && (s[o].push(Kr.mergeOptions({
                                        id: l
                                    }, u)), "undefined" === typeof a[l])) {
                                    var c = i.addRemoteTextTrack({
                                        id: u.instreamId,
                                        kind: "captions",
                                        default: u.default && u.autoselect,
                                        language: u.language,
                                        label: l
                                    }, !1).track;
                                    a[l] = c
                                }
                            }
                    }
                },
                Ao = {
                    AUDIO: function(e, t) {
                        return function() {
                            var i = t.mediaTypes[e].tracks;
                            for (var n in i)
                                if (i[n].enabled) return i[n];
                            return null
                        }
                    },
                    SUBTITLES: function(e, t) {
                        return function() {
                            var i = t.mediaTypes[e].tracks;
                            for (var n in i)
                                if ("showing" === i[n].mode || "hidden" === i[n].mode) return i[n];
                            return null
                        }
                    }
                },
                Lo = function(e) {
                    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(t) {
                        Po[t](t, e)
                    }));
                    var t = e.mediaTypes,
                        i = e.masterPlaylistLoader,
                        n = e.tech,
                        r = e.vhs;
                    ["AUDIO", "SUBTITLES"].forEach((function(i) {
                        t[i].activeGroup = function(e, t) {
                            return function(i) {
                                var n = t.masterPlaylistLoader,
                                    r = t.mediaTypes[e].groups,
                                    s = n.media();
                                if (!s) return null;
                                var a = null;
                                return s.attributes[e] && (a = r[s.attributes[e]]), a = a || r.main, "undefined" === typeof i ? a : null === i ? null : a.filter((function(e) {
                                    return e.id === i.id
                                }))[0] || null
                            }
                        }(i, e), t[i].activeTrack = Ao[i](i, e), t[i].onGroupChanged = function(e, t) {
                            return function() {
                                var i = t.segmentLoaders,
                                    n = i[e],
                                    r = i.main,
                                    s = t.mediaTypes[e],
                                    a = s.activeTrack(),
                                    o = s.activeGroup(a),
                                    l = s.activePlaylistLoader;
                                Co(n, s), o && (o.playlistLoader ? (n.resyncLoader(), Eo(o.playlistLoader, s)) : l && r.resetEverything())
                            }
                        }(i, e), t[i].onGroupChanging = function(e, t) {
                            return function() {
                                var i = t.segmentLoaders[e];
                                i.abort(), i.pause()
                            }
                        }(i, e), t[i].onTrackChanged = function(e, t) {
                            return function() {
                                var i = t.segmentLoaders,
                                    n = i[e],
                                    r = i.main,
                                    s = t.mediaTypes[e],
                                    a = s.activeTrack(),
                                    o = s.activeGroup(a),
                                    l = s.activePlaylistLoader;
                                if (Co(n, s), o) {
                                    if ("AUDIO" === e) {
                                        if (!o.playlistLoader) return r.setAudio(!0), void r.resetEverything();
                                        n.setAudio(!0), r.setAudio(!1)
                                    }
                                    l !== o.playlistLoader ? (n.track && n.track(a), n.resetEverything(), Eo(o.playlistLoader, s)) : Eo(o.playlistLoader, s)
                                }
                            }
                        }(i, e)
                    }));
                    var s = t.AUDIO.activeGroup();
                    if (s) {
                        var a = (s.filter((function(e) {
                            return e.default
                        }))[0] || s[0]).id;
                        t.AUDIO.tracks[a].enabled = !0, t.AUDIO.onTrackChanged()
                    }
                    i.on("mediachange", (function() {
                        ["AUDIO", "SUBTITLES"].forEach((function(e) {
                            return t[e].onGroupChanged()
                        }))
                    })), i.on("mediachanging", (function() {
                        ["AUDIO", "SUBTITLES"].forEach((function(e) {
                            return t[e].onGroupChanging()
                        }))
                    }));
                    var o = function() {
                        t.AUDIO.onTrackChanged(), n.trigger({
                            type: "usage",
                            name: "vhs-audio-change"
                        }), n.trigger({
                            type: "usage",
                            name: "hls-audio-change"
                        })
                    };
                    for (var l in n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged), r.on("dispose", (function() {
                            n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged)
                        })), n.clearTracks("audio"), t.AUDIO.tracks) n.audioTracks().addTrack(t.AUDIO.tracks[l])
                },
                xo = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
                Oo = function(e) {
                    return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
                },
                Do = function(e) {
                    function t(t) {
                        var i;
                        i = e.call(this) || this;
                        var n = t.src,
                            s = t.handleManifestRedirects,
                            a = t.withCredentials,
                            o = t.tech,
                            l = t.bandwidth,
                            u = t.externVhs,
                            d = t.useCueTags,
                            h = t.blacklistDuration,
                            p = t.enableLowInitialPlaylist,
                            f = t.sourceType,
                            m = t.cacheEncryptionKeys,
                            g = t.handlePartialData;
                        if (!n) throw new Error("A non-empty playlist URL or JSON manifest string is required");
                        Qa = u, i.withCredentials = a, i.tech_ = o, i.vhs_ = o.vhs, i.sourceType_ = f, i.useCueTags_ = d, i.blacklistDuration = h, i.enableLowInitialPlaylist = p, i.useCueTags_ && (i.cueTagsTrack_ = i.tech_.addTextTrack("metadata", "ad-cues"), i.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), i.requestOptions_ = {
                            withCredentials: a,
                            handleManifestRedirects: s,
                            timeout: null
                        }, i.on("error", i.pauseLoading), i.mediaTypes_ = function() {
                            var e = {};
                            return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(t) {
                                e[t] = {
                                    groups: {},
                                    tracks: {},
                                    activePlaylistLoader: null,
                                    activeGroup: Ka,
                                    activeTrack: Ka,
                                    onGroupChanged: Ka,
                                    onTrackChanged: Ka
                                }
                            })), e
                        }(), i.mediaSource = new(r().MediaSource), i.handleDurationChange_ = i.handleDurationChange_.bind(c()(i)), i.handleSourceOpen_ = i.handleSourceOpen_.bind(c()(i)), i.handleSourceEnded_ = i.handleSourceEnded_.bind(c()(i)), i.mediaSource.addEventListener("durationchange", i.handleDurationChange_), i.mediaSource.addEventListener("sourceopen", i.handleSourceOpen_), i.mediaSource.addEventListener("sourceended", i.handleSourceEnded_), i.seekable_ = Kr.createTimeRanges(), i.hasPlayed_ = !1, i.syncController_ = new To(t), i.segmentMetadataTrack_ = o.addRemoteTextTrack({
                            kind: "metadata",
                            label: "segment-metadata"
                        }, !1).track, i.decrypter_ = new So, i.sourceUpdater_ = new fo(i.mediaSource), i.inbandTextTracks_ = {}, i.timelineChangeController_ = new bo;
                        var v = {
                            vhs: i.vhs_,
                            mediaSource: i.mediaSource,
                            currentTime: i.tech_.currentTime.bind(i.tech_),
                            seekable: function() {
                                return i.seekable()
                            },
                            seeking: function() {
                                return i.tech_.seeking()
                            },
                            duration: function() {
                                return i.duration()
                            },
                            hasPlayed: function() {
                                return i.hasPlayed_
                            },
                            goalBufferLength: function() {
                                return i.goalBufferLength()
                            },
                            bandwidth: l,
                            syncController: i.syncController_,
                            decrypter: i.decrypter_,
                            sourceType: i.sourceType_,
                            inbandTextTracks: i.inbandTextTracks_,
                            cacheEncryptionKeys: m,
                            handlePartialData: g,
                            sourceUpdater: i.sourceUpdater_,
                            timelineChangeController: i.timelineChangeController_
                        };
                        return i.masterPlaylistLoader_ = "dash" === i.sourceType_ ? new Zs(n, i.vhs_, i.requestOptions_) : new cs(n, i.vhs_, i.requestOptions_), i.setupMasterPlaylistLoaderListeners_(), i.mainSegmentLoader_ = new Ga(Kr.mergeOptions(v, {
                            segmentMetadataTrack: i.segmentMetadataTrack_,
                            loaderType: "main"
                        }), t), i.audioSegmentLoader_ = new Ga(Kr.mergeOptions(v, {
                            loaderType: "audio"
                        }), t), i.subtitleSegmentLoader_ = new vo(Kr.mergeOptions(v, {
                            loaderType: "vtt",
                            featuresNativeTextTracks: i.tech_.featuresNativeTextTracks
                        }), t), i.setupSegmentLoaderListeners_(), xo.forEach((function(e) {
                            i[e + "_"] = Oo.bind(c()(i), e)
                        })), i.logger_ = Ma("MPC"), i.triggeredFmp4Usage = !1, i.masterPlaylistLoader_.load(), i
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.setupMasterPlaylistLoaderListeners_ = function() {
                        var e = this;
                        this.masterPlaylistLoader_.on("loadedmetadata", (function() {
                            var t = e.masterPlaylistLoader_.media(),
                                i = 1.5 * t.targetDuration * 1e3;
                            Ps(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i, t.endList && "none" !== e.tech_.preload() && (e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load()), Lo({
                                sourceType: e.sourceType_,
                                segmentLoaders: {
                                    AUDIO: e.audioSegmentLoader_,
                                    SUBTITLES: e.subtitleSegmentLoader_,
                                    main: e.mainSegmentLoader_
                                },
                                tech: e.tech_,
                                requestOptions: e.requestOptions_,
                                masterPlaylistLoader: e.masterPlaylistLoader_,
                                vhs: e.vhs_,
                                master: e.master(),
                                mediaTypes: e.mediaTypes_,
                                blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e)
                            }), e.triggerPresenceUsage_(e.master(), t), e.setupFirstPlay(), !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") : e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", (function() {
                                e.trigger("selectedinitialmedia")
                            }))
                        })), this.masterPlaylistLoader_.on("loadedplaylist", (function() {
                            var t = e.masterPlaylistLoader_.media();
                            if (!t) {
                                var i;
                                if (e.excludeUnsupportedVariants_(), e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()), i || (i = e.selectPlaylist()), e.initialMedia_ = i, e.masterPlaylistLoader_.media(e.initialMedia_), !("vhs-json" === e.sourceType_ && e.initialMedia_.segments)) return;
                                t = e.initialMedia_
                            }
                            e.handleUpdatedMediaPlaylist(t)
                        })), this.masterPlaylistLoader_.on("error", (function() {
                            e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
                        })), this.masterPlaylistLoader_.on("mediachanging", (function() {
                            e.mainSegmentLoader_.abort(), e.mainSegmentLoader_.pause()
                        })), this.masterPlaylistLoader_.on("mediachange", (function() {
                            var t = e.masterPlaylistLoader_.media(),
                                i = 1.5 * t.targetDuration * 1e3;
                            Ps(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = i, e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load(), e.tech_.trigger({
                                type: "mediachange",
                                bubbles: !0
                            })
                        })), this.masterPlaylistLoader_.on("playlistunchanged", (function() {
                            var t = e.masterPlaylistLoader_.media();
                            e.stuckAtPlaylistEnd_(t) && (e.blacklistCurrentPlaylist({
                                message: "Playlist no longer updating."
                            }), e.tech_.trigger("playliststuck"))
                        })), this.masterPlaylistLoader_.on("renditiondisabled", (function() {
                            e.tech_.trigger({
                                type: "usage",
                                name: "vhs-rendition-disabled"
                            }), e.tech_.trigger({
                                type: "usage",
                                name: "hls-rendition-disabled"
                            })
                        })), this.masterPlaylistLoader_.on("renditionenabled", (function() {
                            e.tech_.trigger({
                                type: "usage",
                                name: "vhs-rendition-enabled"
                            }), e.tech_.trigger({
                                type: "usage",
                                name: "hls-rendition-enabled"
                            })
                        }))
                    }, i.handleUpdatedMediaPlaylist = function(e) {
                        this.useCueTags_ && this.updateAdCues_(e), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.updateDuration(!e.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load())
                    }, i.triggerPresenceUsage_ = function(e, t) {
                        var i = e.mediaGroups || {},
                            n = !0,
                            r = Object.keys(i.AUDIO);
                        for (var s in i.AUDIO)
                            for (var a in i.AUDIO[s]) {
                                i.AUDIO[s][a].uri || (n = !1)
                            }
                        n && (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-demuxed"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-demuxed"
                        })), Object.keys(i.SUBTITLES).length && (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-webvtt"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-webvtt"
                        })), Qa.Playlist.isAes(t) && (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-aes"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-aes"
                        })), r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-alternate-audio"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-alternate-audio"
                        })), this.useCueTags_ && (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-playlist-cue-tags"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-playlist-cue-tags"
                        }))
                    }, i.setupSegmentLoaderListeners_ = function() {
                        var e = this;
                        this.mainSegmentLoader_.on("bandwidthupdate", (function() {
                            var t = e.selectPlaylist(),
                                i = e.masterPlaylistLoader_.media(),
                                n = e.tech_.buffered();
                            (function(e) {
                                var t = e.currentPlaylist,
                                    i = e.nextPlaylist,
                                    n = e.forwardBuffer,
                                    r = e.bufferLowWaterLine,
                                    s = e.duration;
                                return e.log, i ? !t.endList || s < ea.MAX_BUFFER_LOW_WATER_LINE || i.attributes.BANDWIDTH < t.attributes.BANDWIDTH || n >= r : (Kr.log.warn("We received no playlist to switch to. Please check your stream."), !1)
                            })({
                                currentPlaylist: i,
                                nextPlaylist: t,
                                forwardBuffer: n.length ? n.end(n.length - 1) - e.tech_.currentTime() : 0,
                                bufferLowWaterLine: e.bufferLowWaterLine(),
                                duration: e.duration(),
                                log: e.logger_
                            }) && e.masterPlaylistLoader_.media(t), e.tech_.trigger("bandwidthupdate")
                        })), this.mainSegmentLoader_.on("progress", (function() {
                            e.trigger("progress")
                        })), this.mainSegmentLoader_.on("error", (function() {
                            e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
                        })), this.mainSegmentLoader_.on("appenderror", (function() {
                            e.error = e.mainSegmentLoader_.error_, e.trigger("error")
                        })), this.mainSegmentLoader_.on("syncinfoupdate", (function() {
                            e.onSyncInfoUpdate_()
                        })), this.mainSegmentLoader_.on("timestampoffset", (function() {
                            e.tech_.trigger({
                                type: "usage",
                                name: "vhs-timestamp-offset"
                            }), e.tech_.trigger({
                                type: "usage",
                                name: "hls-timestamp-offset"
                            })
                        })), this.audioSegmentLoader_.on("syncinfoupdate", (function() {
                            e.onSyncInfoUpdate_()
                        })), this.audioSegmentLoader_.on("appenderror", (function() {
                            e.error = e.audioSegmentLoader_.error_, e.trigger("error")
                        })), this.mainSegmentLoader_.on("ended", (function() {
                            e.logger_("main segment loader ended"), e.onEndOfStream()
                        })), this.mainSegmentLoader_.on("earlyabort", (function() {
                            e.blacklistCurrentPlaylist({
                                message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                            }, 120)
                        }));
                        var t = function() {
                            if (!e.sourceUpdater_.ready()) return e.tryToCreateSourceBuffers_();
                            var t = e.getCodecsOrExclude_();
                            t && e.sourceUpdater_.addOrChangeSourceBuffers(t)
                        };
                        this.mainSegmentLoader_.on("trackinfo", t), this.audioSegmentLoader_.on("trackinfo", t), this.mainSegmentLoader_.on("fmp4", (function() {
                            e.triggeredFmp4Usage || (e.tech_.trigger({
                                type: "usage",
                                name: "vhs-fmp4"
                            }), e.tech_.trigger({
                                type: "usage",
                                name: "hls-fmp4"
                            }), e.triggeredFmp4Usage = !0)
                        })), this.audioSegmentLoader_.on("fmp4", (function() {
                            e.triggeredFmp4Usage || (e.tech_.trigger({
                                type: "usage",
                                name: "vhs-fmp4"
                            }), e.tech_.trigger({
                                type: "usage",
                                name: "hls-fmp4"
                            }), e.triggeredFmp4Usage = !0)
                        })), this.audioSegmentLoader_.on("ended", (function() {
                            e.logger_("audioSegmentLoader ended"), e.onEndOfStream()
                        }))
                    }, i.mediaSecondsLoaded_ = function() {
                        return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                    }, i.load = function() {
                        this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                    }, i.smoothQualityChange_ = function(e) {
                        void 0 === e && (e = this.selectPlaylist()), e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
                    }, i.fastQualityChange_ = function(e) {
                        var t = this;
                        void 0 === e && (e = this.selectPlaylist()), e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetEverything((function() {
                            Kr.browser.IE_VERSION || Kr.browser.IS_EDGE ? t.tech_.setCurrentTime(t.tech_.currentTime() + .04) : t.tech_.setCurrentTime(t.tech_.currentTime())
                        })))
                    }, i.play = function() {
                        if (!this.setupFirstPlay()) {
                            this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
                            var e = this.tech_.seekable();
                            return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0
                        }
                    }, i.setupFirstPlay = function() {
                        var e = this,
                            t = this.masterPlaylistLoader_.media();
                        if (!t || this.tech_.paused() || this.hasPlayed_) return !1;
                        if (!t.endList) {
                            var i = this.seekable();
                            if (!i.length) return !1;
                            if (Kr.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", (function() {
                                e.trigger("firstplay"), e.tech_.setCurrentTime(i.end(0)), e.hasPlayed_ = !0
                            })), !1;
                            this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0))
                        }
                        return this.hasPlayed_ = !0, this.load(), !0
                    }, i.handleSourceOpen_ = function() {
                        if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
                            var e = this.tech_.play();
                            "undefined" !== typeof e && "function" === typeof e.then && e.then(null, (function(e) {}))
                        }
                        this.trigger("sourceopen")
                    }, i.handleSourceEnded_ = function() {
                        if (this.inbandTextTracks_.metadataTrack_) {
                            var e = this.inbandTextTracks_.metadataTrack_.cues;
                            if (e && e.length) {
                                var t = this.duration();
                                e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
                            }
                        }
                    }, i.handleDurationChange_ = function() {
                        this.tech_.trigger("durationchange")
                    }, i.onEndOfStream = function() {
                        var e = this.mainSegmentLoader_.ended_;
                        this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.currentMediaInfo_ || this.mainSegmentLoader_.currentMediaInfo_.hasVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), e && this.sourceUpdater_.endOfStream()
                    }, i.stuckAtPlaylistEnd_ = function(e) {
                        if (!this.seekable().length) return !1;
                        var t = this.syncController_.getExpiredTime(e, this.duration());
                        if (null === t) return !1;
                        var i = Qa.Playlist.playlistEnd(e, t),
                            n = this.tech_.currentTime(),
                            r = this.tech_.buffered();
                        if (!r.length) return i - n <= hs;
                        var s = r.end(r.length - 1);
                        return s - n <= hs && i - s <= hs
                    }, i.blacklistCurrentPlaylist = function(e, t) {
                        void 0 === e && (e = {});
                        var i = e.playlist || this.masterPlaylistLoader_.media();
                        if (t = t || e.blacklistDuration || this.blacklistDuration, !i) return this.error = e, void("open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network"));
                        var n = this.masterPlaylistLoader_.master.playlists,
                            r = n.filter(ws),
                            s = 1 === r.length && r[0] === i;
                        if (1 === n.length && t !== 1 / 0) return Kr.log.warn("Problem encountered with playlist " + i.id + ". Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(s);
                        if (s) {
                            var a = !1;
                            n.forEach((function(e) {
                                if (e !== i) {
                                    var t = e.excludeUntil;
                                    "undefined" !== typeof t && t !== 1 / 0 && (a = !0, delete e.excludeUntil)
                                }
                            })), a && (Kr.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"))
                        }
                        i.excludeUntil = Date.now() + 1e3 * t, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-rendition-blacklisted"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-blacklisted"
                        });
                        var o = this.selectPlaylist();
                        if (!o) return this.error = "Playback cannot continue. No available working or supported playlists.", void this.trigger("error");
                        var l = e.internal ? this.logger_ : Kr.log.warn,
                            u = e.message ? " " + e.message : "";
                        return l((e.internal ? "Internal problem" : "Problem") + " encountered with playlist " + i.id + "." + u + " Switching to playlist " + o.id + "."), o.attributes.AUDIO !== i.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), o.attributes.SUBTITLES !== i.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]), this.masterPlaylistLoader_.media(o, s)
                    }, i.pauseLoading = function() {
                        this.delegateLoaders_("all", ["abort", "pause"])
                    }, i.delegateLoaders_ = function(e, t) {
                        var i = this,
                            n = [],
                            r = "all" === e;
                        (r || "main" === e) && n.push(this.masterPlaylistLoader_);
                        var s = [];
                        (r || "audio" === e) && s.push("AUDIO"), (r || "subtitle" === e) && (s.push("CLOSED-CAPTIONS"), s.push("SUBTITLES")), s.forEach((function(e) {
                            var t = i.mediaTypes_[e] && i.mediaTypes_[e].activePlaylistLoader;
                            t && n.push(t)
                        })), ["main", "audio", "subtitle"].forEach((function(t) {
                            var r = i[t + "SegmentLoader_"];
                            !r || e !== t && "all" !== e || n.push(r)
                        })), n.forEach((function(e) {
                            return t.forEach((function(t) {
                                "function" === typeof e[t] && e[t]()
                            }))
                        }))
                    }, i.setCurrentTime = function(e) {
                        var t = fs(this.tech_.buffered(), e);
                        return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
                    }, i.duration = function() {
                        if (!this.masterPlaylistLoader_) return 0;
                        var e = this.masterPlaylistLoader_.media();
                        return e ? e.endList ? this.mediaSource ? this.mediaSource.duration : Qa.Playlist.duration(e) : 1 / 0 : 0
                    }, i.seekable = function() {
                        return this.seekable_
                    }, i.onSyncInfoUpdate_ = function() {
                        var e;
                        if (this.masterPlaylistLoader_) {
                            var t = this.masterPlaylistLoader_.media();
                            if (t) {
                                var i = this.syncController_.getExpiredTime(t, this.duration());
                                if (null !== i) {
                                    var n = this.masterPlaylistLoader_.master.suggestedPresentationDelay,
                                        r = Qa.Playlist.seekable(t, i, n);
                                    if (0 !== r.length) {
                                        if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                            if (t = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (i = this.syncController_.getExpiredTime(t, this.duration()))) return;
                                            if (0 === (e = Qa.Playlist.seekable(t, i, n)).length) return
                                        }
                                        var s, a;
                                        this.seekable_ && this.seekable_.length && (s = this.seekable_.end(0), a = this.seekable_.start(0)), e ? e.start(0) > r.end(0) || r.start(0) > e.end(0) ? this.seekable_ = r : this.seekable_ = Kr.createTimeRanges([
                                            [e.start(0) > r.start(0) ? e.start(0) : r.start(0), e.end(0) < r.end(0) ? e.end(0) : r.end(0)]
                                        ]) : this.seekable_ = r, this.seekable_ && this.seekable_.length && this.seekable_.end(0) === s && this.seekable_.start(0) === a || (this.logger_("seekable updated [" + gs(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"))
                                    }
                                }
                            }
                        }
                    }, i.updateDuration = function(e) {
                        if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), "open" !== this.mediaSource.readyState) return this.updateDuration_ = this.updateDuration.bind(this, e), void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
                        if (e) {
                            var t = this.seekable();
                            if (!t.length) return;
                            (isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) && this.sourceUpdater_.setDuration(t.end(t.length - 1))
                        } else {
                            var i = this.tech_.buffered(),
                                n = Qa.Playlist.duration(this.masterPlaylistLoader_.media());
                            i.length > 0 && (n = Math.max(n, i.end(i.length - 1))), this.mediaSource.duration !== n && this.sourceUpdater_.setDuration(n)
                        }
                    }, i.dispose = function() {
                        var e = this;
                        this.trigger("dispose"), this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach((function(t) {
                            var i = e.mediaTypes_[t].groups;
                            for (var n in i) i[n].forEach((function(e) {
                                e.playlistLoader && e.playlistLoader.dispose()
                            }))
                        })), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off()
                    }, i.master = function() {
                        return this.masterPlaylistLoader_.master
                    }, i.media = function() {
                        return this.masterPlaylistLoader_.media() || this.initialMedia_
                    }, i.areMediaTypesKnown_ = function() {
                        var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
                        return !(!this.mainSegmentLoader_.currentMediaInfo_ || e && !this.audioSegmentLoader_.currentMediaInfo_)
                    }, i.getCodecsOrExclude_ = function() {
                        var e = this,
                            t = {
                                main: this.mainSegmentLoader_.currentMediaInfo_ || {},
                                audio: this.audioSegmentLoader_.currentMediaInfo_ || {}
                            };
                        t.video = t.main;
                        var i = Da(this.master(), this.media()),
                            n = {},
                            r = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
                        if (t.main.hasVideo && (n.video = i.video || t.main.videoCodec || B.xz), t.main.isMuxed && (n.video += "," + (i.audio || t.main.audioCodec || B.lA)), (t.main.hasAudio && !t.main.isMuxed || t.audio.hasAudio || r) && (n.audio = i.audio || t.main.audioCodec || t.audio.audioCodec || B.lA, t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 : t.audio.isFmp4), n.audio || n.video) {
                            var s, a = {};
                            if (["video", "audio"].forEach((function(e) {
                                    if (n.hasOwnProperty(e) && (r = t[e].isFmp4, o = n[e], !(r ? (0, B.p7)(o) : (0, B.Hi)(o)))) {
                                        var i = t[e].isFmp4 ? "browser" : "muxer";
                                        a[i] = a[i] || [], a[i].push(n[e]), "audio" === e && (s = i)
                                    }
                                    var r, o
                                })), r && s && this.media().attributes.AUDIO) {
                                var o = this.media().attributes.AUDIO;
                                this.master().playlists.forEach((function(t) {
                                    (t.attributes && t.attributes.AUDIO) === o && t !== e.media() && (t.excludeUntil = 1 / 0)
                                })), this.logger_("excluding audio group " + o + " as " + s + ' does not support codec(s): "' + n.audio + '"')
                            }
                            if (!Object.keys(a).length) {
                                if (this.sourceUpdater_.ready() && !this.sourceUpdater_.canChangeType()) {
                                    var l = [];
                                    if (["video", "audio"].forEach((function(t) {
                                            var i = ((0, B.kS)(e.sourceUpdater_.codecs[t] || "")[t] || {}).type,
                                                r = ((0, B.kS)(n[t] || "")[t] || {}).type;
                                            i && r && i.toLowerCase() !== r.toLowerCase() && l.push('"' + e.sourceUpdater_.codecs[t] + '" -> "' + n[t] + '"')
                                        })), l.length) return void this.blacklistCurrentPlaylist({
                                        playlist: this.media(),
                                        message: "Codec switching not supported: " + l.join(", ") + ".",
                                        blacklistDuration: 1 / 0,
                                        internal: !0
                                    })
                                }
                                return n
                            }
                            var u = Object.keys(a).reduce((function(e, t) {
                                return e && (e += ", "), e += t + ' does not support codec(s): "' + a[t].join(",") + '"'
                            }), "") + ".";
                            this.blacklistCurrentPlaylist({
                                playlist: this.media(),
                                internal: !0,
                                message: u,
                                blacklistDuration: 1 / 0
                            })
                        } else this.blacklistCurrentPlaylist({
                            playlist: this.media(),
                            message: "Could not determine codecs for playlist.",
                            blacklistDuration: 1 / 0
                        })
                    }, i.tryToCreateSourceBuffers_ = function() {
                        if ("open" === this.mediaSource.readyState && !this.sourceUpdater_.ready() && this.areMediaTypesKnown_()) {
                            var e = this.getCodecsOrExclude_();
                            if (e) {
                                this.sourceUpdater_.createSourceBuffers(e);
                                var t = [e.video, e.audio].filter(Boolean).join(",");
                                this.excludeIncompatibleVariants_(t)
                            }
                        }
                    }, i.excludeUnsupportedVariants_ = function() {
                        var e = this;
                        this.master().playlists.forEach((function(t) {
                            var i = Da(e.master, t);
                            !i.audio || (0, B.Hi)(i.audio) || (0, B.p7)(i.audio) || (t.excludeUntil = 1 / 0), !i.video || (0, B.Hi)(i.video) || (0, B.p7)(i.video) || (t.excludeUntil = 1 / 0)
                        }))
                    }, i.excludeIncompatibleVariants_ = function(e) {
                        var t = this,
                            i = (0, B.kS)(e),
                            n = Object.keys(i).length;
                        this.master().playlists.forEach((function(e) {
                            if (e.excludeUntil !== 1 / 0) {
                                var r = {},
                                    s = 2,
                                    a = [],
                                    o = Da(t.masterPlaylistLoader_.master, e);
                                if (o.audio || o.video) {
                                    var l = [o.video, o.audio].filter(Boolean).join(",");
                                    r = (0, B.kS)(l), s = Object.keys(r).length
                                }
                                s !== n && (a.push('codec count "' + s + '" !== "' + n + '"'), e.excludeUntil = 1 / 0), t.sourceUpdater_.canChangeType() || (r.video && i.video && r.video.type.toLowerCase() !== i.video.type.toLowerCase() && (a.push('video codec "' + r.video.type + '" !== "' + i.video.type + '"'), e.excludeUntil = 1 / 0), r.audio && i.audio && r.audio.type.toLowerCase() !== i.audio.type.toLowerCase() && (e.excludeUntil = 1 / 0, a.push('audio codec "' + r.audio.type + '" !== "' + i.audio.type + '"'))), a.length && t.logger_("blacklisting " + e.id + ": " + a.join(" && "))
                            }
                        }))
                    }, i.updateAdCues_ = function(e) {
                        var t = 0,
                            i = this.seekable();
                        i.length && (t = i.start(0)),
                            function(e, t, i) {
                                if (void 0 === i && (i = 0), e.segments)
                                    for (var n, s = i, a = 0; a < e.segments.length; a++) {
                                        var o = e.segments[a];
                                        if (n || (n = _o(t, s + o.duration / 2)), n) {
                                            if ("cueIn" in o) {
                                                n.endTime = s, n.adEndTime = s, s += o.duration, n = null;
                                                continue
                                            }
                                            if (s < n.endTime) {
                                                s += o.duration;
                                                continue
                                            }
                                            n.endTime += o.duration
                                        } else if ("cueOut" in o && ((n = new(r().VTTCue)(s, s + o.duration, o.cueOut)).adStartTime = s, n.adEndTime = s + parseFloat(o.cueOut), t.addCue(n)), "cueOutCont" in o) {
                                            var l = o.cueOutCont.split("/").map(parseFloat),
                                                u = l[0],
                                                c = l[1];
                                            (n = new(r().VTTCue)(s, s + o.duration, "")).adStartTime = s - u, n.adEndTime = n.adStartTime + c, t.addCue(n)
                                        }
                                        s += o.duration
                                    }
                            }(e, this.cueTagsTrack_, t)
                    }, i.goalBufferLength = function() {
                        var e = this.tech_.currentTime(),
                            t = ea.GOAL_BUFFER_LENGTH,
                            i = ea.GOAL_BUFFER_LENGTH_RATE,
                            n = Math.max(t, ea.MAX_GOAL_BUFFER_LENGTH);
                        return Math.min(t + e * i, n)
                    }, i.bufferLowWaterLine = function() {
                        var e = this.tech_.currentTime(),
                            t = ea.BUFFER_LOW_WATER_LINE,
                            i = ea.BUFFER_LOW_WATER_LINE_RATE,
                            n = Math.max(t, ea.MAX_BUFFER_LOW_WATER_LINE);
                        return Math.min(t + e * i, n)
                    }, t
                }(Kr.EventTarget),
                Mo = function(e, t, i) {
                    var n, r, s, a = e.masterPlaylistController_,
                        o = a[(e.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(a);
                    if (t.attributes.RESOLUTION) {
                        var l = t.attributes.RESOLUTION;
                        this.width = l.width, this.height = l.height
                    }
                    this.bandwidth = t.attributes.BANDWIDTH, this.codecs = Da(a.master(), t), this.playlist = t, this.id = i, this.enabled = (n = e.playlists, r = t.id, s = o, function(e) {
                        var t = n.master.playlists[r],
                            i = Es(t),
                            a = ws(t);
                        return "undefined" === typeof e ? a : (e ? delete t.disabled : t.disabled = !0, e === a || i || (s(), e ? n.trigger("renditionenabled") : n.trigger("renditiondisabled")), e)
                    })
                },
                Ro = ["seeking", "seeked", "pause", "playing", "error"],
                Uo = function() {
                    function e(e) {
                        var t = this;
                        this.masterPlaylistController_ = e.masterPlaylistController, this.tech_ = e.tech, this.seekable = e.seekable, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, this.media = e.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Ma("PlaybackWatcher"), this.logger_("initialize");
                        var i = function() {
                                return t.monitorCurrentTime_()
                            },
                            n = function() {
                                return t.techWaiting_()
                            },
                            s = function() {
                                return t.cancelTimer_()
                            },
                            a = function() {
                                return t.fixesBadSeeks_()
                            },
                            o = this.masterPlaylistController_,
                            l = ["main", "subtitle", "audio"],
                            u = {};
                        l.forEach((function(e) {
                            u[e] = {
                                reset: function() {
                                    return t.resetSegmentDownloads_(e)
                                },
                                updateend: function() {
                                    return t.checkSegmentDownloads_(e)
                                }
                            }, o[e + "SegmentLoader_"].on("appendsdone", u[e].updateend), o[e + "SegmentLoader_"].on("playlistupdate", u[e].reset), t.tech_.on(["seeked", "seeking"], u[e].reset)
                        })), this.tech_.on("seekablechanged", a), this.tech_.on("waiting", n), this.tech_.on(Ro, s), this.tech_.on("canplay", i), this.dispose = function() {
                            t.logger_("dispose"), t.tech_.off("seekablechanged", a), t.tech_.off("waiting", n), t.tech_.off(Ro, s), t.tech_.off("canplay", i), l.forEach((function(e) {
                                o[e + "SegmentLoader_"].off("appendsdone", u[e].updateend), o[e + "SegmentLoader_"].off("playlistupdate", u[e].reset), t.tech_.off(["seeked", "seeking"], u[e].reset)
                            })), t.checkCurrentTimeTimeout_ && r().clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_()
                        }
                    }
                    var t = e.prototype;
                    return t.monitorCurrentTime_ = function() {
                        this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && r().clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = r().setTimeout(this.monitorCurrentTime_.bind(this), 250)
                    }, t.resetSegmentDownloads_ = function(e) {
                        var t = this.masterPlaylistController_[e + "SegmentLoader_"];
                        this[e + "StalledDownloads_"] > 0 && this.logger_("resetting possible stalled download count for " + e + " loader"), this[e + "StalledDownloads_"] = 0, this[e + "Buffered_"] = t.buffered_()
                    }, t.checkSegmentDownloads_ = function(e) {
                        var t = this.masterPlaylistController_,
                            i = t[e + "SegmentLoader_"],
                            n = i.buffered_(),
                            r = function(e, t) {
                                if (e === t) return !1;
                                if (!e && t || !t && e) return !0;
                                if (e.length !== t.length) return !0;
                                for (var i = 0; i < e.length; i++)
                                    if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0;
                                return !1
                            }(this[e + "Buffered_"], n);
                        this[e + "Buffered_"] = n, r ? this.resetSegmentDownloads_(e) : (this[e + "StalledDownloads_"]++, this.logger_("found #" + this[e + "StalledDownloads_"] + " " + e + " appends that did not increase buffer (possible stalled download)", {
                            playlistId: i.playlist_ && i.playlist_.id,
                            buffered: vs(n)
                        }), this[e + "StalledDownloads_"] < 10 || (this.logger_(e + " loader stalled download exclusion"), this.resetSegmentDownloads_(e), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-" + e + "-download-exclusion"
                        }), "subtitle" !== e && t.blacklistCurrentPlaylist({
                            message: "Excessive " + e + " segment downloading detected."
                        }, 1 / 0)))
                    }, t.checkCurrentTime_ = function() {
                        if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
                        if (!this.tech_.paused() && !this.tech_.seeking()) {
                            var e = this.tech_.currentTime(),
                                t = this.tech_.buffered();
                            if (this.lastRecordedTime === e && (!t.length || e + hs >= t.end(t.length - 1))) return this.techWaiting_();
                            this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
                        }
                    }, t.cancelTimer_ = function() {
                        this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
                    }, t.fixesBadSeeks_ = function() {
                        if (!this.tech_.seeking()) return !1;
                        var e, t = this.seekable(),
                            i = this.tech_.currentTime();
                        this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (e = t.end(t.length - 1));
                        if (this.beforeSeekableWindow_(t, i)) {
                            var n = t.start(0);
                            e = n + (n === t.end(0) ? 0 : hs)
                        }
                        if ("undefined" !== typeof e) return this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + gs(t) + ". Seeking to " + e + "."), this.tech_.setCurrentTime(e), !0;
                        var r = this.tech_.buffered();
                        return !! function(e) {
                            var t = e.buffered,
                                i = e.targetDuration,
                                n = e.currentTime;
                            return !!t.length && !(t.end(0) - t.start(0) < 2 * i) && !(n > t.start(0)) && t.start(0) - n < i
                        }({
                            buffered: r,
                            targetDuration: this.media().targetDuration,
                            currentTime: i
                        }) && (e = r.start(0) + hs, this.logger_("Buffered region starts (" + r.start(0) + ")  just beyond seek point (" + i + "). Seeking to " + e + "."), this.tech_.setCurrentTime(e), !0)
                    }, t.waiting_ = function() {
                        if (!this.techWaiting_()) {
                            var e = this.tech_.currentTime(),
                                t = this.tech_.buffered(),
                                i = fs(t, e);
                            return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), this.tech_.trigger({
                                type: "usage",
                                name: "vhs-unknown-waiting"
                            }), void this.tech_.trigger({
                                type: "usage",
                                name: "hls-unknown-waiting"
                            })) : void 0
                        }
                    }, t.techWaiting_ = function() {
                        var e = this.seekable(),
                            t = this.tech_.currentTime();
                        if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                        if (this.tech_.seeking() || null !== this.timer_) return !0;
                        if (this.beforeSeekableWindow_(e, t)) {
                            var i = e.end(e.length - 1);
                            return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
                                type: "usage",
                                name: "vhs-live-resync"
                            }), this.tech_.trigger({
                                type: "usage",
                                name: "hls-live-resync"
                            }), !0
                        }
                        var n = this.tech_.vhs.masterPlaylistController_.sourceUpdater_,
                            r = this.tech_.buffered();
                        if (this.videoUnderflow_({
                                audioBuffered: n.audioBuffered(),
                                videoBuffered: n.videoBuffered(),
                                currentTime: t
                            })) return this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-video-underflow"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-video-underflow"
                        }), !0;
                        var s = ms(r, t);
                        if (s.length > 0) {
                            var a = s.start(0) - t;
                            return this.logger_("Stopped at " + t + ", setting timer for " + a + ", seeking to " + s.start(0)), this.cancelTimer_(), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, t), !0
                        }
                        return !1
                    }, t.afterSeekableWindow_ = function(e, t, i, n) {
                        if (void 0 === n && (n = !1), !e.length) return !1;
                        var r = e.end(e.length - 1) + hs;
                        return !i.endList && n && (r = e.end(e.length - 1) + 3 * i.targetDuration), t > r
                    }, t.beforeSeekableWindow_ = function(e, t) {
                        return !!(e.length && e.start(0) > 0 && t < e.start(0) - hs)
                    }, t.videoUnderflow_ = function(e) {
                        var t = e.videoBuffered,
                            i = e.audioBuffered,
                            n = e.currentTime;
                        if (t) {
                            var r;
                            if (t.length && i.length) {
                                var s = fs(t, n - 3),
                                    a = fs(t, n),
                                    o = fs(i, n);
                                o.length && !a.length && s.length && (r = {
                                    start: s.end(0),
                                    end: o.end(0)
                                })
                            } else {
                                ms(t, n).length || (r = this.gapFromVideoUnderflow_(t, n))
                            }
                            return !!r && (this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + n), !0)
                        }
                    }, t.skipTheGap_ = function(e) {
                        var t = this.tech_.buffered(),
                            i = this.tech_.currentTime(),
                            n = ms(t, i);
                        this.cancelTimer_(), 0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), this.tech_.setCurrentTime(n.start(0) + ds), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-gap-skip"
                        }), this.tech_.trigger({
                            type: "usage",
                            name: "hls-gap-skip"
                        }))
                    }, t.gapFromVideoUnderflow_ = function(e, t) {
                        for (var i = function(e) {
                                if (e.length < 2) return Kr.createTimeRanges();
                                for (var t = [], i = 1; i < e.length; i++) {
                                    var n = e.end(i - 1),
                                        r = e.start(i);
                                    t.push([n, r])
                                }
                                return Kr.createTimeRanges(t)
                            }(e), n = 0; n < i.length; n++) {
                            var r = i.start(n),
                                s = i.end(n);
                            if (t - r < 4 && t - r > 2) return {
                                start: r,
                                end: s
                            }
                        }
                        return null
                    }, e
                }(),
                No = {
                    errorInterval: 30,
                    getSource: function(e) {
                        return e(this.tech({
                            IWillNotUseThisInPlugins: !0
                        }).currentSource_ || this.currentSource())
                    }
                },
                Fo = function e(t, i) {
                    var n = 0,
                        r = 0,
                        s = Kr.mergeOptions(No, i);
                    t.ready((function() {
                        t.trigger({
                            type: "usage",
                            name: "vhs-error-reload-initialized"
                        }), t.trigger({
                            type: "usage",
                            name: "hls-error-reload-initialized"
                        })
                    }));
                    var a = function() {
                            r && t.currentTime(r)
                        },
                        o = function(e) {
                            null !== e && void 0 !== e && (r = t.duration() !== 1 / 0 && t.currentTime() || 0, t.one("loadedmetadata", a), t.src(e), t.trigger({
                                type: "usage",
                                name: "vhs-error-reload"
                            }), t.trigger({
                                type: "usage",
                                name: "hls-error-reload"
                            }), t.play())
                        },
                        l = function() {
                            return Date.now() - n < 1e3 * s.errorInterval ? (t.trigger({
                                type: "usage",
                                name: "vhs-error-reload-canceled"
                            }), void t.trigger({
                                type: "usage",
                                name: "hls-error-reload-canceled"
                            })) : s.getSource && "function" === typeof s.getSource ? (n = Date.now(), s.getSource.call(t, o)) : void Kr.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                        },
                        u = function e() {
                            t.off("loadedmetadata", a), t.off("error", l), t.off("dispose", e)
                        };
                    t.on("error", l), t.on("dispose", u), t.reloadSourceOnError = function(i) {
                        u(), e(t, i)
                    }
                },
                Bo = function(e) {
                    Fo(this, e)
                },
                jo = "2.2.4",
                qo = {
                    PlaylistLoader: cs,
                    Playlist: As,
                    utils: Hs,
                    STANDARD_PLAYLIST_SELECTOR: function() {
                        var e = this.useDevicePixelRatio && r().devicePixelRatio || 1;
                        return function(e, t, i, n, s) {
                            var a = {
                                    bandwidth: t,
                                    width: i,
                                    height: n,
                                    limitRenditionByPlayerDimensions: s
                                },
                                o = e.playlists.map((function(e) {
                                    var t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                                        i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height;
                                    return {
                                        bandwidth: e.attributes.BANDWIDTH || r().Number.MAX_VALUE,
                                        width: t,
                                        height: i,
                                        playlist: e
                                    }
                                }));
                            Fa(o, (function(e, t) {
                                return e.bandwidth - t.bandwidth
                            }));
                            var l = (o = o.filter((function(e) {
                                return !As.isIncompatible(e.playlist)
                            }))).filter((function(e) {
                                return As.isEnabled(e.playlist)
                            }));
                            l.length || (l = o.filter((function(e) {
                                return !As.isDisabled(e.playlist)
                            })));
                            var u = l.filter((function(e) {
                                    return e.bandwidth * ea.BANDWIDTH_VARIANCE < t
                                })),
                                c = u[u.length - 1],
                                d = u.filter((function(e) {
                                    return e.bandwidth === c.bandwidth
                                }))[0];
                            if (!1 === s) {
                                var h = d || l[0] || o[0];
                                if (h && h.playlist) {
                                    var p = "sortedPlaylistReps";
                                    return d && (p = "bandwidthBestRep"), l[0] && (p = "enabledPlaylistReps"), Ra("choosing " + Ua(h) + " using " + p + " with options", a), h.playlist
                                }
                                return Ra("could not choose a playlist with options", a), null
                            }
                            var f = u.filter((function(e) {
                                return e.width && e.height
                            }));
                            Fa(f, (function(e, t) {
                                return e.width - t.width
                            }));
                            var m = f.filter((function(e) {
                                return e.width === i && e.height === n
                            }));
                            c = m[m.length - 1];
                            var g, v, _, y = m.filter((function(e) {
                                return e.bandwidth === c.bandwidth
                            }))[0];
                            y || (v = (g = f.filter((function(e) {
                                return e.width > i || e.height > n
                            }))).filter((function(e) {
                                return e.width === g[0].width && e.height === g[0].height
                            })), c = v[v.length - 1], _ = v.filter((function(e) {
                                return e.bandwidth === c.bandwidth
                            }))[0]);
                            var T = _ || y || d || l[0] || o[0];
                            if (T && T.playlist) {
                                var b = "sortedPlaylistReps";
                                return _ ? b = "resolutionPlusOneRep" : y ? b = "resolutionBestRep" : d ? b = "bandwidthBestRep" : l[0] && (b = "enabledPlaylistReps"), Ra("choosing " + Ua(T) + " using " + b + " with options", a), T.playlist
                            }
                            return Ra("could not choose a playlist with options", a), null
                        }(this.playlists.master, this.systemBandwidth, parseInt(Na(this.tech_.el(), "width"), 10) * e, parseInt(Na(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions)
                    },
                    INITIAL_PLAYLIST_SELECTOR: function() {
                        var e = this,
                            t = this.playlists.master.playlists.filter(As.isEnabled);
                        return Fa(t, (function(e, t) {
                            return Ba(e, t)
                        })), t.filter((function(t) {
                            return !!Da(e.playlists.master, t).video
                        }))[0] || null
                    },
                    comparePlaylistBandwidth: Ba,
                    comparePlaylistResolution: function(e, t) {
                        var i, n;
                        return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || r().Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width), i === (n = n || r().Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
                    },
                    xhr: Ds()
                };
            ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "BACK_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach((function(e) {
                Object.defineProperty(qo, e, {
                    get: function() {
                        return Kr.log.warn("using Vhs." + e + " is UNSAFE be sure you know what you are doing"), ea[e]
                    },
                    set: function(t) {
                        Kr.log.warn("using Vhs." + e + " is UNSAFE be sure you know what you are doing"), "number" !== typeof t || t < 0 ? Kr.log.warn("value of Vhs." + e + " must be greater than or equal to 0") : ea[e] = t
                    }
                })
            }));
            var Ho = "videojs-vhs",
                Vo = function(e, t) {
                    for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
                        if (e[r].id === i.id) {
                            n = r;
                            break
                        }
                    e.selectedIndex_ = n, e.trigger({
                        selectedIndex: n,
                        type: "change"
                    })
                };
            qo.canPlaySource = function() {
                return Kr.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
            };
            var Wo = function(e) {
                    var t = e.player,
                        i = e.sourceKeySystems,
                        n = e.media,
                        r = e.audioMedia,
                        s = e.mainPlaylists,
                        a = function(e, t, i) {
                            if (!e) return e;
                            var n = {
                                video: t && t.attributes && t.attributes.CODECS,
                                audio: i && i.attributes && i.attributes.CODECS
                            };
                            !n.audio && n.video && n.video.split(",").length > 1 && n.video.split(",").forEach((function(e) {
                                e = e.trim(), (0, B.KL)(e) ? n.audio = e : (0, B.tf)(e) && (n.video = e)
                            }));
                            var r = n.video ? 'video/mp4;codecs="' + n.video + '"' : null,
                                s = n.audio ? 'audio/mp4;codecs="' + n.audio + '"' : null,
                                a = {};
                            for (var o in e) a[o] = {
                                audioContentType: s,
                                videoContentType: r
                            }, t.contentProtection && t.contentProtection[o] && t.contentProtection[o].pssh && (a[o].pssh = t.contentProtection[o].pssh), "string" === typeof e[o] && (a[o].url = e[o]);
                            return Kr.mergeOptions(e, a)
                        }(i, n, r);
                    a && (t.currentSource().keySystems = a, !a || t.eme ? 11 !== Kr.browser.IE_VERSION && t.eme.initializeMediaKeys && function(e, t) {
                        return e.reduce((function(e, i) {
                            if (!i.contentProtection) return e;
                            var n = t.reduce((function(e, t) {
                                var n = i.contentProtection[t];
                                return n && n.pssh && (e[t] = {
                                    pssh: n.pssh
                                }), e
                            }), {});
                            return Object.keys(n).length && e.push(n), e
                        }), [])
                    }(r ? s.concat([r]) : s, Object.keys(i)).forEach((function(e) {
                        t.eme.initializeMediaKeys({
                            keySystems: e
                        })
                    })) : Kr.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"))
                },
                zo = function() {
                    if (!r().localStorage) return null;
                    var e = r().localStorage.getItem(Ho);
                    if (!e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (Qo) {
                        return null
                    }
                };
            qo.supportsNativeHls = function() {
                if (!a() || !a().createElement) return !1;
                var e = a().createElement("video");
                if (!Kr.getTech("Html5").isSupported()) return !1;
                return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some((function(t) {
                    return /maybe|probably/i.test(e.canPlayType(t))
                }))
            }(), qo.supportsNativeDash = !!(a() && a().createElement && Kr.getTech("Html5").isSupported()) && /maybe|probably/i.test(a().createElement("video").canPlayType("application/dash+xml")), qo.supportsTypeNatively = function(e) {
                return "hls" === e ? qo.supportsNativeHls : "dash" === e && qo.supportsNativeDash
            }, qo.isSupported = function() {
                return Kr.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
            };
            var Go = function(e) {
                    function t(t, i, n) {
                        var r;
                        if (r = e.call(this, i, Kr.mergeOptions(n.hls, n.vhs)) || this, n.hls && Object.keys(n.hls).length && Kr.log.warn("Using hls options is deprecated. Use vhs instead."), i.options_ && i.options_.playerId) {
                            var s = Kr(i.options_.playerId);
                            s.hasOwnProperty("hls") || Object.defineProperty(s, "hls", {
                                get: function() {
                                    return Kr.log.warn("player.hls is deprecated. Use player.tech().vhs instead."), i.trigger({
                                        type: "usage",
                                        name: "hls-player-access"
                                    }), c()(r)
                                },
                                configurable: !0
                            }), s.hasOwnProperty("vhs") || Object.defineProperty(s, "vhs", {
                                get: function() {
                                    return Kr.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."), i.trigger({
                                        type: "usage",
                                        name: "vhs-player-access"
                                    }), c()(r)
                                },
                                configurable: !0
                            }), s.hasOwnProperty("dash") || Object.defineProperty(s, "dash", {
                                get: function() {
                                    return Kr.log.warn("player.dash is deprecated. Use player.tech().vhs instead."), c()(r)
                                },
                                configurable: !0
                            }), r.player_ = s
                        }
                        if (r.tech_ = i, r.source_ = t, r.stats = {}, r.ignoreNextSeekingEvent_ = !1, r.setOptions_(), r.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks) i.overrideNativeAudioTracks(!0), i.overrideNativeVideoTracks(!0);
                        else if (r.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                        return r.on(a(), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (function(e) {
                            var t = a().fullscreenElement || a().webkitFullscreenElement || a().mozFullScreenElement || a().msFullscreenElement;
                            t && t.contains(r.tech_.el()) && r.masterPlaylistController_.smoothQualityChange_()
                        })), r.on(r.tech_, "seeking", (function() {
                            this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
                        })), r.on(r.tech_, "error", (function() {
                            this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                        })), r.on(r.tech_, "play", r.play), r
                    }
                    h()(t, e);
                    var i = t.prototype;
                    return i.setOptions_ = function() {
                        var e = this;
                        if (this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.handleManifestRedirects = !1 !== this.options_.handleManifestRedirects, this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1, this.options_.useBandwidthFromLocalStorage = "undefined" !== typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, this.options_.handlePartialData = this.options_.handlePartialData || !1, "number" !== typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" !== typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
                            var t = zo();
                            t && t.bandwidth && (this.options_.bandwidth = t.bandwidth, this.tech_.trigger({
                                type: "usage",
                                name: "vhs-bandwidth-from-local-storage"
                            }), this.tech_.trigger({
                                type: "usage",
                                name: "hls-bandwidth-from-local-storage"
                            })), t && t.throughput && (this.options_.throughput = t.throughput, this.tech_.trigger({
                                type: "usage",
                                name: "vhs-throughput-from-local-storage"
                            }), this.tech_.trigger({
                                type: "usage",
                                name: "hls-throughput-from-local-storage"
                            }))
                        }
                        "number" !== typeof this.options_.bandwidth && (this.options_.bandwidth = ea.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === ea.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys", "handlePartialData"].forEach((function(t) {
                            "undefined" !== typeof e.source_[t] && (e.options_[t] = e.source_[t])
                        })), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio
                    }, i.src = function(e, t) {
                        var i, n = this;
                        e && (this.setOptions_(), this.options_.src = 0 === (i = this.source_.src).toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(i.substring(i.indexOf(",") + 1)) : i, this.options_.tech = this.tech_, this.options_.externVhs = qo, this.options_.sourceType = (0, P.t)(t), this.options_.seekTo = function(e) {
                            n.tech_.setCurrentTime(e)
                        }, this.masterPlaylistController_ = new Do(this.options_), this.playbackWatcher_ = new Uo(Kr.mergeOptions(this.options_, {
                            seekable: function() {
                                return n.seekable()
                            },
                            media: function() {
                                return n.masterPlaylistController_.media()
                            },
                            masterPlaylistController: this.masterPlaylistController_
                        })), this.masterPlaylistController_.on("error", (function() {
                            var e = Kr.players[n.tech_.options_.playerId],
                                t = n.masterPlaylistController_.error;
                            "object" !== typeof t || t.code ? "string" === typeof t && (t = {
                                message: t,
                                code: 3
                            }) : t.code = 3, e.error(t)
                        })), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : qo.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = qo.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                            selectPlaylist: {
                                get: function() {
                                    return this.masterPlaylistController_.selectPlaylist
                                },
                                set: function(e) {
                                    this.masterPlaylistController_.selectPlaylist = e.bind(this)
                                }
                            },
                            throughput: {
                                get: function() {
                                    return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                                },
                                set: function(e) {
                                    this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                                }
                            },
                            bandwidth: {
                                get: function() {
                                    return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                                },
                                set: function(e) {
                                    this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                        rate: 0,
                                        count: 0
                                    }
                                }
                            },
                            systemBandwidth: {
                                get: function() {
                                    var e, t = 1 / (this.bandwidth || 1);
                                    return e = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (t + e))
                                },
                                set: function() {
                                    Kr.log.error('The "systemBandwidth" property is read-only')
                                }
                            }
                        }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                            bandwidth: {
                                get: function() {
                                    return n.bandwidth || 0
                                },
                                enumerable: !0
                            },
                            mediaRequests: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaRequests_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsAborted: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaRequestsAborted_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsTimedout: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaRequestsTimedout_() || 0
                                },
                                enumerable: !0
                            },
                            mediaRequestsErrored: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaRequestsErrored_() || 0
                                },
                                enumerable: !0
                            },
                            mediaTransferDuration: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaTransferDuration_() || 0
                                },
                                enumerable: !0
                            },
                            mediaBytesTransferred: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaBytesTransferred_() || 0
                                },
                                enumerable: !0
                            },
                            mediaSecondsLoaded: {
                                get: function() {
                                    return n.masterPlaylistController_.mediaSecondsLoaded_() || 0
                                },
                                enumerable: !0
                            },
                            buffered: {
                                get: function() {
                                    return vs(n.tech_.buffered())
                                },
                                enumerable: !0
                            },
                            currentTime: {
                                get: function() {
                                    return n.tech_.currentTime()
                                },
                                enumerable: !0
                            },
                            currentSource: {
                                get: function() {
                                    return n.tech_.currentSource_
                                },
                                enumerable: !0
                            },
                            currentTech: {
                                get: function() {
                                    return n.tech_.name_
                                },
                                enumerable: !0
                            },
                            duration: {
                                get: function() {
                                    return n.tech_.duration()
                                },
                                enumerable: !0
                            },
                            master: {
                                get: function() {
                                    return n.playlists.master
                                },
                                enumerable: !0
                            },
                            playerDimensions: {
                                get: function() {
                                    return n.tech_.currentDimensions()
                                },
                                enumerable: !0
                            },
                            seekable: {
                                get: function() {
                                    return vs(n.tech_.seekable())
                                },
                                enumerable: !0
                            },
                            timestamp: {
                                get: function() {
                                    return Date.now()
                                },
                                enumerable: !0
                            },
                            videoPlaybackQuality: {
                                get: function() {
                                    return n.tech_.getVideoPlaybackQuality()
                                },
                                enumerable: !0
                            }
                        }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.tech_.on("bandwidthupdate", (function() {
                            n.options_.useBandwidthFromLocalStorage && function(e) {
                                if (!r().localStorage) return !1;
                                var t = zo();
                                t = t ? Kr.mergeOptions(t, e) : e;
                                try {
                                    r().localStorage.setItem(Ho, JSON.stringify(t))
                                } catch (Qo) {
                                    return !1
                                }
                            }({
                                bandwidth: n.bandwidth,
                                throughput: Math.round(n.throughput)
                            })
                        })), this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                            ! function(e) {
                                var t = e.playlists;
                                e.representations = function() {
                                    return t && t.master && t.master.playlists ? t.master.playlists.filter((function(e) {
                                        return !Es(e)
                                    })).map((function(t, i) {
                                        return new Mo(e, t, t.id)
                                    })) : []
                                }
                            }(n)
                        })), this.masterPlaylistController_.sourceUpdater_.on("ready", (function() {
                            var e = n.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader;
                            Wo({
                                player: n.player_,
                                sourceKeySystems: n.source_.keySystems,
                                media: n.playlists.media(),
                                audioMedia: e && e.media(),
                                mainPlaylists: n.playlists.master.playlists
                            })
                        })), this.on(this.masterPlaylistController_, "progress", (function() {
                            this.tech_.trigger("progress")
                        })), this.on(this.masterPlaylistController_, "firstplay", (function() {
                            this.ignoreNextSeekingEvent_ = !0
                        })), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = r().URL.createObjectURL(this.masterPlaylistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_)))
                    }, i.setupQualityLevels_ = function() {
                        var e = this,
                            t = Kr.players[this.tech_.options_.playerId];
                        t && t.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                            var t, i;
                            t = e.qualityLevels_, (i = e).representations().forEach((function(e) {
                                t.addQualityLevel(e)
                            })), Vo(t, i.playlists)
                        })), this.playlists.on("mediachange", (function() {
                            Vo(e.qualityLevels_, e.playlists)
                        })))
                    }, t.version = function() {
                        return {
                            "@videojs/http-streaming": jo,
                            "mux.js": "5.6.7",
                            "mpd-parser": "0.14.0",
                            "m3u8-parser": "4.5.0",
                            "aes-decrypter": "3.1.0"
                        }
                    }, i.version = function() {
                        return this.constructor.version()
                    }, i.canChangeType = function() {
                        return fo.canChangeType()
                    }, i.play = function() {
                        this.masterPlaylistController_.play()
                    }, i.setCurrentTime = function(e) {
                        this.masterPlaylistController_.setCurrentTime(e)
                    }, i.duration = function() {
                        return this.masterPlaylistController_.duration()
                    }, i.seekable = function() {
                        return this.masterPlaylistController_.seekable()
                    }, i.dispose = function() {
                        this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.tech_ && delete this.tech_.hls, this.mediaSourceUrl_ && r().URL.revokeObjectURL && (r().URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), e.prototype.dispose.call(this)
                    }, i.convertToProgramTime = function(e, t) {
                        return Vs({
                            playlist: this.masterPlaylistController_.media(),
                            time: e,
                            callback: t
                        })
                    }, i.seekToProgramTime = function(e, t, i, n) {
                        return void 0 === i && (i = !0), void 0 === n && (n = 2), Ws({
                            programTime: e,
                            playlist: this.masterPlaylistController_.media(),
                            retryCount: n,
                            pauseAfterSeek: i,
                            seekTo: this.options_.seekTo,
                            tech: this.options_.tech,
                            callback: t
                        })
                    }, t
                }(Kr.getComponent("Component")),
                Ko = {
                    name: "videojs-http-streaming",
                    VERSION: jo,
                    canHandleSource: function(e, t) {
                        void 0 === t && (t = {});
                        var i = Kr.mergeOptions(Kr.options, t);
                        return Ko.canPlayType(e.type, i)
                    },
                    handleSource: function(e, t, i) {
                        void 0 === i && (i = {});
                        var n = Kr.mergeOptions(Kr.options, i);
                        return t.vhs = new Go(e, t, n), Kr.hasOwnProperty("hls") || Object.defineProperty(t, "hls", {
                            get: function() {
                                return Kr.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."), t.vhs
                            },
                            configurable: !0
                        }), t.vhs.xhr = Ds(), t.vhs.src(e.src, e.type), t.vhs
                    },
                    canPlayType: function(e, t) {
                        void 0 === t && (t = {});
                        var i = Kr.mergeOptions(Kr.options, t).vhs.overrideNative,
                            n = void 0 === i ? !Kr.browser.IS_ANY_SAFARI : i,
                            r = (0, P.t)(e);
                        return r && (!qo.supportsTypeNatively(r) || n) ? "maybe" : ""
                    }
                };
            (0, B.p7)("avc1.4d400d,mp4a.40.2") && Kr.getTech("Html5").registerSourceHandler(Ko, 0), Kr.VhsHandler = Go, Object.defineProperty(Kr, "HlsHandler", {
                get: function() {
                    return Kr.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."), Go
                },
                configurable: !0
            }), Kr.VhsSourceHandler = Ko, Object.defineProperty(Kr, "HlsSourceHandler", {
                get: function() {
                    return Kr.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."), Ko
                },
                configurable: !0
            }), Kr.Vhs = qo, Object.defineProperty(Kr, "Hls", {
                get: function() {
                    return Kr.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."), qo
                },
                configurable: !0
            }), Kr.use || (Kr.registerComponent("Hls", qo), Kr.registerComponent("Vhs", qo)), Kr.options.vhs = Kr.options.vhs || {}, Kr.options.hls = Kr.options.hls || {}, Kr.registerPlugin ? Kr.registerPlugin("reloadSourceOnError", Bo) : Kr.plugin("reloadSourceOnError", Bo), t.Z = Kr
        }
    }
]);