(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7209], {
        39330: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return y
                },
                P: function() {
                    return j
                }
            });
            var i = n(59499),
                r = n(27812),
                o = n(67294),
                a = n(59359),
                s = n(19231),
                l = n(87379),
                c = n(69447),
                d = n(24002),
                u = n(9261),
                p = n(31728),
                h = n(52422),
                f = n(9671),
                v = n(85893);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = function(e) {
                    var t = e.position,
                        n = void 0 === t ? "home-middle" : t,
                        i = e.wrapperStyle,
                        l = (0, o.useRef)(null),
                        f = (0, o.useState)(),
                        m = f[0],
                        y = f[1],
                        j = (0, h.Z)().width,
                        k = (0, o.useContext)(u.GlobalContext).appconfs,
                        S = (0, o.useState)(),
                        _ = S[0],
                        N = S[1],
                        P = (0, o.useState)("banner_image_d"),
                        I = P[0],
                        C = P[1],
                        T = (0, o.useState)(3e3),
                        E = T[0],
                        O = T[1],
                        Z = (0, o.useState)(!1),
                        z = Z[0],
                        L = Z[1],
                        R = (0, o.useState)(1),
                        D = R[0],
                        M = R[1],
                        q = (0, o.useState)(),
                        B = q[0],
                        U = q[1],
                        A = (0, o.useState)(!0),
                        H = A[0],
                        Y = A[1],
                        V = (0, s.NM)(l, {}, {
                            disconnectOnLeave: !1
                        }, {
                            inViewport: !0,
                            enterCount: 0,
                            leaveCount: 0
                        }),
                        W = V.inViewport,
                        F = V.enterCount;
                    (0, o.useEffect)((function() {
                        if (W && !(F > 1)) return L(!0),
                            function() {}
                    }), [W, F]), (0, o.useEffect)((function() {
                        return p.M.getBanners(n).then((function(e) {
                                y(e)
                            })).catch((function(e) {
                                console.log(e.message)
                            })),
                            function() {
                                return y(void 0)
                            }
                    }), []), (0, o.useEffect)((function() {
                        return k["banner-duration-" + n] && O(k["banner-duration-" + n].value),
                            function() {
                                return O(3e3)
                            }
                    }), [k]), (0, o.useEffect)((function() {
                        return m && m.banners && (N(m.banners), C(a.tq || j < 768 ? "banner_image_m" : "community-top" === n ? "banner_image_t" : "banner_image_d")),
                            function() {
                                return N(void 0)
                            }
                    }), [j, a.tq, m]);
                    var X = [];
                    return m && m.banners && _ ? (0, v.jsx)(v.Fragment, {
                        children: (0, v.jsxs)(w, {
                            className: "adcampaign-wrapper ".concat(n),
                            style: g({}, i),
                            children: [(0, v.jsx)("div", {
                                ref: l,
                                style: {
                                    marginLeft: 20,
                                    marginRight: 20
                                }
                            }), z && (0, v.jsxs)(v.Fragment, {
                                children: [_.length > 1 && (0, v.jsxs)(b, {
                                    children: [(0, v.jsx)("span", {
                                        children: D
                                    }), "/", _.length, (0, v.jsx)(x, {
                                        isPlay: H,
                                        onClick: function() {
                                            Y(!H), H ? null === B || void 0 === B || B.autoplay.stop() : null === B || void 0 === B || B.autoplay.start()
                                        }
                                    })]
                                }), (0, v.jsx)(c.t, {
                                    onSwiper: U,
                                    pagination: {
                                        clickable: !0
                                    },
                                    autoplay: {
                                        delay: E,
                                        disableOnInteraction: !1
                                    },
                                    loop: !0,
                                    speed: 1500,
                                    direction: "horizontal",
                                    effect: "slide",
                                    onSlideChange: function(e) {
                                        var t = e.slides[e.activeIndex].dataset.id;
                                        if (M(e.realIndex + 1), X.includes(t)) return null;
                                        p.M.trackManually("start", t).then((function() {})).catch((function(e) {
                                            console.log(e.message)
                                        })).finally((function() {
                                            X = [].concat((0, r.Z)(X), [t])
                                        }))
                                    },
                                    children: _.map((function(e) {
                                        var t = e[I];
                                        return t ? (0, v.jsx)(d.o, {
                                            "data-id": e.id,
                                            children: (0, v.jsx)("a", {
                                                onClick: function() {
                                                    return function(e) {
                                                        if (!m || !m.banners || !e) return null;
                                                        p.M.trackManually("click", e)
                                                    }(e.id)
                                                },
                                                href: null === e.link ? void 0 : e.link,
                                                target: "_blank",
                                                children: (0, v.jsx)("img", {
                                                    src: t,
                                                    title: e.title,
                                                    style: {
                                                        maxWidth: "100%"
                                                    }
                                                })
                                            })
                                        }, e.id) : null
                                    }))
                                })]
                            })]
                        })
                    }) : null
                },
                b = l.ZP.div.withConfig({
                    displayName: "Adcampaigns__PageCount",
                    componentId: "sc-1fzrtxd-0"
                })(["position:absolute;", " ", " z-index:9;display:flex;justify-content:center;align-items:center;", ";", " background-color:rgb(57,57,57,0.4);color:#aaa;", ";span{color:#fff;font-weight:bold;}"], (0, f.vw)("right", 10, 20), (0, f.vw)("bottom", 10, 20), (0, f.uM)([0, 0, 0, 13]), (0, f.vw)("border-radius", 26), (0, f.vw)("font-size", 12, 15)),
                x = l.ZP.button.withConfig({
                    displayName: "Adcampaigns__SwiperControlButton",
                    componentId: "sc-1fzrtxd-1"
                })(["", ";", ";", ";", ";"], (function(e) {
                    return e.isPlay ? (0, f.Rp)("/images/banner_pause.png") : (0, f.Rp)("/images/banner_play.png")
                }), (0, f.vw)("width", 28), (0, f.vw)("height", 28), (0, f.t7)([0, 0, 0, 6])),
                j = function(e) {
                    var t = e.id,
                        n = e.title,
                        i = (0, o.useRef)(null),
                        r = (0, s.NM)(i, {}, {
                            disconnectOnLeave: !1
                        }, {
                            inViewport: !0,
                            enterCount: 0,
                            leaveCount: 0
                        }),
                        a = r.inViewport,
                        l = r.enterCount;
                    return (0, o.useEffect)((function() {
                        if (t && a && !(l > 1)) return p.M.trackManually("start", t).then((function(e) {
                                console.log("start", n, t, e)
                            })).catch((function(e) {
                                console.log(e)
                            })),
                            function() {}
                    }), [a, l]), (0, v.jsx)("div", {
                        ref: i,
                        style: {
                            marginLeft: 20,
                            marginRight: 20
                        }
                    })
                },
                w = l.ZP.div.withConfig({
                    displayName: "Adcampaigns__Wrapper",
                    componentId: "sc-1fzrtxd-2"
                })(["position:relative;text-align:center;a{display:block;}"])
        },
        45305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Se
                }
            });
            var i = n(50029),
                r = n(59499),
                o = n(87794),
                a = n.n(o),
                s = n(11163),
                l = n(67294),
                c = n(87379),
                d = n(3795),
                u = n(60473),
                p = n(62820),
                h = n(35952),
                f = n(44888),
                v = n(9671),
                m = n(64575),
                g = n(97620),
                y = n(9008),
                b = n(16835),
                x = n(92777),
                j = n(82262),
                w = n(10748),
                k = n(45959),
                S = n(63553),
                _ = n(37247),
                N = n(11226),
                P = n(41664),
                I = n(85893);

            function C(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = (0, _.Z)(e);
                    if (t) {
                        var r = (0, _.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, S.Z)(this, n)
                }
            }
            var T = null,
                E = function(e) {
                    (0, k.Z)(n, e);
                    var t = C(n);

                    function n(e) {
                        var i;
                        return (0, x.Z)(this, n), i = t.call(this, e), (0, r.Z)((0, w.Z)(i), "player", void 0), (0, r.Z)((0, w.Z)(i), "videoNode", void 0), i.state = {
                            isPlay: !1,
                            active: !1,
                            supposedCurrentTime: 0,
                            ended: !1,
                            showControlBar: !1
                        }, i.player = void 0, i.videoNode = void 0, i.controlNext = i.controlNext.bind((0, w.Z)(i)), i.controlPrev = i.controlPrev.bind((0, w.Z)(i)), i.controlPlay = i.controlPlay.bind((0, w.Z)(i)), i.controlPause = i.controlPause.bind((0, w.Z)(i)), i.controlBackdropTouchEnd = i.controlBackdropTouchEnd.bind((0, w.Z)(i)), i.notHover = i.notHover.bind((0, w.Z)(i)), i._handleKeyDown = i._handleKeyDown.bind((0, w.Z)(i)), i.onSeeked = i.onSeeked.bind((0, w.Z)(i)), i.onSeeking = i.onSeeking.bind((0, w.Z)(i)), i.onTimeUpdate = i.onTimeUpdate.bind((0, w.Z)(i)), i
                    }
                    return (0, j.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (void 0 !== window.bc) {
                                var t, n, i, r, o, a, s, l, c, d, u;
                                if (this.player = window.bc(this.videoNode, this.props), this.props.currentTime) null === (d = this.player) || void 0 === d || d.currentTime(this.props.currentTime);
                                if (this.props.setInterval && this.props.setIntervalTime) null === (u = this.player) || void 0 === u || u.setInterval((function() {
                                    var t, n;
                                    e.props.setInterval && null !== (t = e.player) && void 0 !== t && t.currentTime() && e.props.setInterval(null === (n = e.player) || void 0 === n ? void 0 : n.currentTime())
                                }), this.props.setIntervalTime);
                                this.props.autoplay && this.setState({
                                    isPlay: !0
                                }), null === (t = this.player) || void 0 === t || t.on("play", (function() {
                                    var t;
                                    (e.setState({
                                        isPlay: !0,
                                        ended: !1
                                    }), e.props.play) && e.props.play(null === (t = e.player) || void 0 === t ? void 0 : t.currentTime());
                                    e.props.ended && e.props.ended(!1), e.notHover()
                                })), null === (n = this.player) || void 0 === n || n.on("pause", (function() {
                                    e.setState({
                                        isPlay: !1
                                    })
                                })), null === (i = this.player) || void 0 === i || i.on("ended", (function() {
                                    e.setState({
                                        ended: !0
                                    }), e.props.ended && e.props.ended(!0)
                                })), null === (r = this.player) || void 0 === r || r.on("ads-ad-ended", (function() {
                                    e.setState({
                                        isPlay: !0
                                    }), e.notHover()
                                })), null === (o = this.player) || void 0 === o || o.on("ads-ad-skipped", (function() {
                                    e.setState({
                                        isPlay: !0
                                    }), e.notHover()
                                })), null === (a = this.player) || void 0 === a || a.on("ready", (function() {
                                    e.props.ready && e.props.ready(e.player, e.props.currentTime)
                                })), null === (s = this.player) || void 0 === s || s.on("focus", (function() {
                                    e.notHover()
                                })), null === (l = this.player) || void 0 === l || l.on("blur", (function() {
                                    clearTimeout(T)
                                })), this.props.disabledSkip || document.addEventListener("keydown", this._handleKeyDown), null === (c = this.player) || void 0 === c || c.on("fullscreenchange", (function() {
                                    var t;
                                    null === (t = e.player) || void 0 === t || t.blur()
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.player && this.player.dispose()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this;
                            if (this.props.videoId && this.props.videoId !== e.videoId && this.player) {
                                var n = this.player;
                                n.catalog.getVideo(this.props.videoId, (function(e, i) {
                                    var r;
                                    (n.catalog.load(i), t.props.currentTime) && (null === (r = t.player) || void 0 === r || r.currentTime(t.props.currentTime));
                                    t.props.ready && t.props.ready(t.player, t.props.currentTime)
                                }))
                            }
                        }
                    }, {
                        key: "notHover",
                        value: function() {
                            var e = this;
                            this.props.isMobile && (clearTimeout(T), T = setTimeout((function() {
                                var t, n;
                                null === (t = e.player) || void 0 === t || t.addClass("not-hover"), null === (n = e.player) || void 0 === n || n.blur(), e.setState({
                                    showControlBar: !1
                                })
                            }), 3e3))
                        }
                    }, {
                        key: "controlPrev",
                        value: function() {
                            var e, t;
                            null === (e = this.player) || void 0 === e || e.currentTime((null === (t = this.player) || void 0 === t ? void 0 : t.currentTime()) - 10), this.notHover()
                        }
                    }, {
                        key: "controlNext",
                        value: function() {
                            var e, t;
                            null === (e = this.player) || void 0 === e || e.currentTime((null === (t = this.player) || void 0 === t ? void 0 : t.currentTime()) + 10), this.notHover()
                        }
                    }, {
                        key: "controlPlay",
                        value: function() {
                            var e;
                            null === (e = this.player) || void 0 === e || e.play(), this.setState((function() {
                                return {
                                    isPlay: !0
                                }
                            })), this.notHover()
                        }
                    }, {
                        key: "controlPause",
                        value: function() {
                            var e;
                            null === (e = this.player) || void 0 === e || e.pause(), this.setState((function() {
                                return {
                                    isPlay: !1
                                }
                            }))
                        }
                    }, {
                        key: "controlBackdropTouchEnd",
                        value: function() {
                            var e = this;
                            setTimeout((function() {
                                var t, n;
                                null === (t = e.player) || void 0 === t || t.addClass("not-hover"), null === (n = e.player) || void 0 === n || n.blur()
                            }), 3e3)
                        }
                    }, {
                        key: "_handleKeyDown",
                        value: function(e) {
                            39 === e.keyCode && this.controlNext(), 37 === e.keyCode && this.controlPrev()
                        }
                    }, {
                        key: "onSeeked",
                        value: function(e) {}
                    }, {
                        key: "onTimeUpdate",
                        value: function() {
                            var e, t;
                            null !== (e = this.player) && void 0 !== e && e.seeking() || this.setState({
                                supposedCurrentTime: null === (t = this.player) || void 0 === t ? void 0 : t.currentTime()
                            })
                        }
                    }, {
                        key: "onSeeking",
                        value: function() {
                            var e;
                            if (null !== (e = this.player) && void 0 !== e && e.currentTime() && this.state.supposedCurrentTime) {
                                var t, n, i = (null === (t = this.player) || void 0 === t ? void 0 : t.currentTime()) - this.state.supposedCurrentTime;
                                if (Math.abs(i) > .01) null === (n = this.player) || void 0 === n || n.currentTime(this.state.supposedCurrentTime)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.controls,
                                n = this.props.embedId;
                            return (0, I.jsxs)(Z, {
                                disabledProgressbar: this.props.disabledSkip,
                                children: [(0, I.jsx)("div", {
                                    className: "c-player",
                                    children: (0, I.jsxs)("div", {
                                        className: "c-player__screen",
                                        "data-vjs-player": "true",
                                        children: [(0, I.jsx)("video", {
                                            controls: t,
                                            "data-account": this.props.accountId,
                                            "data-player": this.props.playerId,
                                            "data-embed": n ? this.props.embedId : "default",
                                            "data-video-id": this.props.videoId,
                                            ref: function(t) {
                                                return e.videoNode = t
                                            },
                                            className: "video-js",
                                            playsInline: !0,
                                            id: "videoplayer",
                                            onTimeUpdate: this.props.disabledSkip ? this.onTimeUpdate : void 0,
                                            onSeeking: this.props.disabledSkip ? this.onSeeking : void 0
                                        }), void 0 != this.props.ageLimit && this.props.ageLimit >= 19 && (0, I.jsx)(L, {
                                            className: "agelimit-wrapper",
                                            children: (0, I.jsx)(z, {
                                                className: "agelimit"
                                            })
                                        }), (0, I.jsxs)(O, {
                                            className: "control-overlay",
                                            children: [!this.props.disabledSkip && (0, I.jsx)(N.Jc, {
                                                className: "prev",
                                                onClick: this.controlPrev
                                            }), this.state.isPlay ? (0, I.jsx)(N.rA, {
                                                className: "pause",
                                                onClick: this.controlPause
                                            }) : (0, I.jsx)(N.O1, {
                                                className: "play",
                                                onClick: this.controlPlay
                                            }), !this.props.disabledSkip && (0, I.jsx)(N.jN, {
                                                className: "next",
                                                onClick: this.controlNext
                                            }), (0, I.jsx)("div", {
                                                className: "overlay-backdrop",
                                                onTouchEnd: this.controlBackdropTouchEnd
                                            })]
                                        }), this.state.ended && this.props.episode && this.props.episode.nextEpisode && (0, I.jsx)(R, {
                                            episode: this.props.episode.nextEpisode,
                                            onReplay: function() {
                                                var t, n;
                                                null === (t = e.player) || void 0 === t || t.currentTime(0), null === (n = e.player) || void 0 === n || n.play(), e.setState({
                                                    ended: !1
                                                })
                                            }
                                        })]
                                    })
                                }), this.props.disabledSkip && (0, I.jsx)("div", {
                                    className: "badge-live"
                                })]
                            })
                        }
                    }]), n
                }(l.Component),
                O = c.ZP.div.withConfig({
                    displayName: "VideoPlayer__PlayerControlOverlayStyled",
                    componentId: "sc-24kg7r-0"
                })(["display:flex;position:absolute;left:0;top:0;right:0;bottom:0;a{opacity:0;position:absolute;z-index:10;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity 0.5s;&.prev{", ";}&.next{", ";}&.play,&.pause{}}"], (0, v.vw)("margin-left", -100), (0, v.vw)("margin-left", 100)),
                Z = c.ZP.div.withConfig({
                    displayName: "VideoPlayer__BPlayer",
                    componentId: "sc-24kg7r-1"
                })([".badge-live{position:absolute;", " ", " width:56px;height:30px;", ";}.c-player{overflow:hidden;.video-js{.control-overlay{a{opacity:1;}.overlay-backdrop{display:block;position:absolute;left:0;right:0;top:0;bottom:0;}}.agelimit-wrapper{opacity:1;}", ";&.vjs-ad-playing,&.not-hover.vjs-has-started.vjs-paused.vjs-user-active,&.not-hover.vjs-has-started.vjs-playing.vjs-user-active,&.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive,&.vjs-has-started.vjs-playing.vjs-user-inactive,&.vjs-has-started.vjs-paused.vjs-ad-playing.vjs-user-inactive{.control-overlay{a{opacity:0;}.overlay-backdrop{}}}&.vjs-ad-playing{.agelimit-wrapper{opacity:0;}}&.vjs-ad-playing{.vjs-ad-control-bar{display:none;}}}}.c-player{& > div{&:hover{.vjs-big-play-button{background-color:transparent;.vjs-icon-placeholder{&:before{transition:color 0.2s;color:", ";}}}}}}.vjs-overlay-top-right{right:2%;top:50%;margin-top:-26%;width:", ";height:", ";", "{width:49px;height:47px;}}@media (orientation:landscape){.vjs-fullscreen{.vjs-overlay-top-right{margin-top:0;top:30px;}.agelimit-wrapper{top:90px;margin-top:0;}}}.vjs-big-play-button{display:none;background-color:transparent;margin:0;transform:translate(-50%,-50%);", ";", ";", ";border-radius:0;", "{", ";}span{display:none;}&:active,&:hover{background-color:transparent;}}.vjs-ima3-ad-container{z-index:1;}.videoAdUi-mobile{display:none;}.videoAdUiSkipButtonExperimentalText{text-indent:-5000px;}", "{.vjs-ima3-ad-container{z-index:unset;}}.vjs-progress-holder{.marker{position:absolute;left:0;top:0;bottom:0;width:1px;height:100%;background-color:yellow;text-indent:-5000px;overflow:hidden;", "{width:3px;}}}"], (0, v.vw)("left", 20, 60), (0, v.vw)("top", 20, 40), (0, v.Rp)("/images/badge_live.png", "56px 30px"), (function(e) {
                    return e.disabledProgressbar && (0, c.iv)([".vjs-progress-control{pointer-events:none;}"])
                }), m.r.color.primary, (0, v._w)(49, 1280), (0, v._w)(47, 1280), (0, v.mI)(1280), (0, v.vw)("width", 33, 54), (0, v.vw)("height", 43, 71), (0, v.Rp)("/images/player_play.png"), (0, v.mI)(), (0, v.Rp)("/images/player_play_pc.png"), (0, v.mI)(), (0, v.mI)()),
                z = c.ZP.div.withConfig({
                    displayName: "VideoPlayer__AgeLimitAdult",
                    componentId: "sc-24kg7r-2"
                })(["", ";width:", ";height:", ";", "{width:32px;height:32px;}"], (0, v.Rp)("/images/age_limit_19_2.png"), (0, v._w)(32, 1280), (0, v._w)(32, 1280), (0, v.mI)(1280)),
                L = c.ZP.div.withConfig({
                    displayName: "VideoPlayer__AgeLimitAdultWraper",
                    componentId: "sc-24kg7r-3"
                })(["position:absolute;right:2%;top:50%;margin-top:-21%;width:", ";height:", ";display:flex;justify-content:center;", "{width:49px;height:47px;}"], (0, v._w)(49, 1280), (0, v._w)(47, 1280), (0, v.mI)(1280)),
                R = function(e) {
                    var t = e.episode,
                        n = e.onReplay,
                        i = (0, s.useRouter)(),
                        r = l.useState(10),
                        o = (0, b.Z)(r, 2),
                        a = o[0],
                        c = o[1];
                    l.useEffect((function() {
                        if (a > 0) {
                            var e = setInterval((function() {
                                return c(a - 1)
                            }), 1e3);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                        c(10), i.push("/watch/".concat(t.id))
                    }), [a]);
                    return (0, I.jsx)(D, {
                        children: (0, I.jsxs)("div", {
                            className: "inner",
                            children: [(0, I.jsxs)("div", {
                                className: "time",
                                children: [(0, I.jsx)("span", {
                                    children: a
                                }), "\ucd08 \ud6c4 \ub2e4\uc74c \ub3d9\uc601\uc0c1 \uc7ac\uc0dd"]
                            }), (0, I.jsx)("div", {
                                className: "next-episode",
                                children: (0, I.jsx)(P.default, {
                                    href: "/watch/".concat(t.id),
                                    children: (0, I.jsxs)("a", {
                                        children: [(0, I.jsx)("div", {
                                            className: "thumb",
                                            style: {
                                                backgroundImage: "url(".concat(t.image, ")"),
                                                backgroundSize: "cover"
                                            }
                                        }), (0, I.jsxs)("div", {
                                            className: "info",
                                            children: [(0, I.jsxs)("span", {
                                                className: "title",
                                                children: [t.drama.title, " ", t.seq]
                                            }), (0, I.jsx)("span", {
                                                className: "date",
                                                children: (0, g.Gb)("YYYY.MM.DD", t.broadcasted_at)
                                            })]
                                        })]
                                    })
                                })
                            }), (0, I.jsxs)(N.Ls, {
                                direction: "row",
                                children: [(0, I.jsx)(N.zx, {
                                    as: "a",
                                    full: !0,
                                    size: "medium",
                                    color: "secondary",
                                    radius: 20,
                                    onClick: function() {
                                        n && n()
                                    },
                                    children: "\ub2e4\uc2dc\ubcf4\uae30"
                                }), (0, I.jsx)(P.default, {
                                    href: "/watch/".concat(t.id),
                                    children: (0, I.jsx)(N.zx, {
                                        as: "a",
                                        full: !0,
                                        size: "medium",
                                        color: "primary",
                                        radius: 20,
                                        children: "\uc774\uc5b4\ubcf4\uae30"
                                    })
                                })]
                            })]
                        })
                    })
                },
                D = c.ZP.div.withConfig({
                    displayName: "VideoPlayer__PlayerEndedOverlayStyled",
                    componentId: "sc-24kg7r-4"
                })(["position:absolute;left:0;top:0;right:0;bottom:0;background-color:#000;z-index:1001;", ";display:flex;align-items:center;flex-direction:column;justify-content:center;.inner{flex:1;width:100%;display:flex;flex-direction:column;justify-content:space-between;max-width:700px;max-height:350px;margin:0 auto;}.time{color:", ";", ";line-height:1.1;span{color:", ";font-weight:bold;}}.next-episode{a{display:flex;}.thumb{", ";", ";display:block;}.info{", ";", ";", ";.title{display:block;", ";line-height:1.1;}.date{display:block;color:", ";", ";}}}"], (0, v.vw)("padding", m.r.size.whiteSpace), m.r.color.dark, (0, v.vw)("font-size", 11, 16), m.r.color.main, (0, v.vw)("width", 130, 309), (0, v.vw)("height", 73, 193), (0, v.vw)("font-size", 12, 14), (0, v.vw)("margin-left", 10, 30), (0, v.vw)("margin-top", 5), (0, v.vw)("font-size", 14, 15), m.r.color.dark, (0, v.vw)("margin-top", 5, 8)),
                M = E,
                q = n(59359),
                B = n(10730),
                U = n(27812),
                A = n(86891),
                H = n(2893),
                Y = n(68663),
                V = n(58202),
                W = n(31919),
                F = n(66828),
                X = n(73410),
                K = n(91557),
                G = n(30381),
                J = n.n(G),
                Q = n(39024);

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var te = function(e) {
                    var t = e.postId,
                        n = e.parent_id,
                        i = e.row,
                        r = e.re,
                        o = void 0 !== r && r,
                        a = e.onSaved,
                        c = e.mutate,
                        d = e.onReport,
                        u = e.onSeekTo,
                        p = e.addBlockUser,
                        h = (0, F.Z)().userStore,
                        f = (0, s.useRouter)(),
                        v = (0, l.useState)(!1),
                        m = v[0],
                        g = v[1],
                        y = (0, l.useState)(!1),
                        b = y[0],
                        x = y[1],
                        j = (0, l.useState)(!1),
                        w = j[0],
                        k = j[1],
                        S = (0, l.useState)(!1),
                        _ = S[0],
                        N = S[1],
                        P = h.user.id === i.author.id,
                        C = i.author.id,
                        T = i.author.nickname,
                        E = "p-board" === i.type ? "POSTS" : "REPLIES";
                    (0, l.useEffect)((function() {
                        return document.body.addEventListener("click", (function(e) {
                                "more" !== e.target.className && k(!1)
                            })),
                            function() {
                                document.body.removeEventListener("click", (function(e) {
                                    "more" !== e.target.className && k(!1)
                                }))
                            }
                    }), []);
                    var O = function(e) {
                            var t = "REPLIES";
                            e.id && e.id > 0 && (t = E, x(!1)), a && (a(ee(ee({}, e), {}, {
                                parent_id: o ? n : void 0,
                                mentionee_id: C
                            }), t), g(!1))
                        },
                        Z = function(e, t) {
                            !1 !== h.logged ? (d && d(e, E, t), N(!1)) : confirm("\uc2e0\uace0 \uae30\ub2a5\uc740 \ub85c\uadf8\uc778 \ud6c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && f.push("/login?next=".concat(encodeURIComponent(f.asPath)))
                        },
                        z = function(e, t) {
                            e !== h.user.id ? N(t) : alert("\ubcf8\uc778\uc740 \uc2e0\uace0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4")
                        },
                        L = function(e) {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            }), u && u(J().duration(e.target.innerHTML).asMinutes())
                        };
                    return (0, I.jsxs)(I.Fragment, {
                        children: [b ? (0, I.jsx)(W.Z, {
                            reply: i,
                            postId: t,
                            onSaved: O,
                            onCancel: function() {
                                return x(!1)
                            },
                            showSecret: !1
                        }) : (0, I.jsxs)("div", {
                            className: "content-wrapper",
                            children: [(0, I.jsx)(A.Z, {
                                onClick: function() {
                                    return z(i.author.id, !_)
                                },
                                path: i.author.profile_image ? i.author.profile_image : "/images/profile_default.png",
                                width: 30,
                                height: 30,
                                pcWidth: 32,
                                pcHeight: 32,
                                bgColor: "#aaaaaa",
                                cursor: "true"
                            }), !0 === _ && (0, I.jsxs)("div", {
                                className: "wrap-user-report-form",
                                children: [(0, I.jsx)("span", {
                                    className: "user-block",
                                    onClick: function() {
                                        return e = i.author.id, void Q.f.blockUser(e).then((function() {
                                            alert("\ud574\ub2f9 \uc720\uc800\uac00 \ucc28\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4."), N(!1), p && p(e)
                                        })).catch((function(e) {
                                            alert(e.message)
                                        }));
                                        var e
                                    },
                                    children: "\uc720\uc800 \ucc28\ub2e8\ud558\uae30"
                                }), (0, I.jsx)("span", {
                                    className: "user-report",
                                    onClick: function() {
                                        return Z(i.id, i.author.id)
                                    },
                                    children: "\uc720\uc800 \uc2e0\uace0\ud558\uae30"
                                })]
                            }), (0, I.jsxs)("div", {
                                className: "content",
                                id: i.id.toString(),
                                children: [(0, I.jsxs)("div", {
                                    className: "header",
                                    onClick: function() {
                                        return z(i.author.id, !_)
                                    },
                                    children: [(0, I.jsx)("span", {
                                        className: "name",
                                        children: i.author.nickname
                                    }), 1 === i.is_secret && (0, I.jsx)("span", {
                                        className: "icon-lock"
                                    })]
                                }), (0, I.jsx)("div", {
                                    className: "body",
                                    children: i.is_secret && !P ? (0, I.jsx)("div", {
                                        children: "\ube44\ubc00\ub313\uae00\uc785\ub2c8\ub2e4."
                                    }) : (0, I.jsxs)(I.Fragment, {
                                        children: [i.mentionee && i.mentionee.nickname && (0, I.jsxs)("div", {
                                            className: "mentionee",
                                            children: ["@", i.mentionee.nickname]
                                        }), i.content && (0, I.jsx)("div", {
                                            children: function(e) {
                                                var t = /[0-5]?\d:\d{2}(?::*\d{2})?(?!:?\d)/g,
                                                    n = e.match(t),
                                                    i = e.split("\n");
                                                return n && n.length > 0 ? i.map((function(e, n) {
                                                    var i = e.split(t),
                                                        r = e.match(t);
                                                    return r && r.length > 0 ? (r.forEach((function(e, t) {
                                                        i.splice(0 === t ? 1 : 2 * t + 1, 0, e)
                                                    })), (0, I.jsx)("div", {
                                                        children: i.map((function(e, t) {
                                                            return r.includes(e) ? (0, I.jsx)("span", {
                                                                className: "time",
                                                                onClick: L,
                                                                children: e
                                                            }, t) : (0, I.jsx)("span", {
                                                                children: e
                                                            }, t)
                                                        }))
                                                    }, n)) : (0, I.jsx)("div", {
                                                        children: e
                                                    })
                                                })) : i.map((function(e, t) {
                                                    return (0, I.jsx)("div", {
                                                        children: e
                                                    }, t)
                                                }))
                                            }(i.content)
                                        })]
                                    })
                                }), (0, I.jsxs)("div", {
                                    className: "footer",
                                    children: [(0, I.jsx)("span", {
                                        className: "date",
                                        children: i.created_at
                                    }), (0, I.jsx)("button", {
                                        className: "btn-reply",
                                        onClick: function() {
                                            return g(!m)
                                        },
                                        children: "\ub2f5\uae00\uc4f0\uae30"
                                    }), (0, I.jsxs)("div", {
                                        className: "".concat(w ? "active" : "", " more-wrapper"),
                                        children: [(0, I.jsx)("button", {
                                            className: "more",
                                            onClick: function() {
                                                return k(!w)
                                            },
                                            children: "\xb7\xb7\xb7"
                                        }), (0, I.jsx)("div", {
                                            className: "manage",
                                            children: P ? (0, I.jsxs)(I.Fragment, {
                                                children: [(0, I.jsx)("button", {
                                                    type: "button",
                                                    onClick: function() {
                                                        return function(e) {
                                                            h.user.id === e ? x(!0) : alert("\ubcf8\uc778\uc774 \uc791\uc131\ud55c \ub313\uae00\ub9cc \uc218\uc815 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!")
                                                        }(C)
                                                    },
                                                    children: "\uc218\uc815"
                                                }), (0, I.jsx)("button", {
                                                    type: "button",
                                                    onClick: function() {
                                                        return function(e, t) {
                                                            h.user.id === t ? confirm("\ud574\ub2f9 \ub313\uae00\uc744 \uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && ("REPLIES" === E ? Y.Y.del([e]).then((function() {
                                                                c && c()
                                                            })).catch((function(e) {
                                                                alert(e.message)
                                                            })) : K.P.del({
                                                                ids: [e]
                                                            }).then((function() {
                                                                c && c()
                                                            })).catch((function(e) {
                                                                alert(e.message)
                                                            }))) : alert("\ubcf8\uc778\uc774 \uc791\uc131\ud55c \ub313\uae00\ub9cc \uc0ad\uc81c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!")
                                                        }(i.id, C)
                                                    },
                                                    children: "\uc0ad\uc81c"
                                                })]
                                            }) : (0, I.jsx)("button", {
                                                type: "button",
                                                onClick: function() {
                                                    return Z(i.id)
                                                },
                                                children: "\uc2e0\uace0"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), m && (0, I.jsxs)("div", {
                            className: "reply-re-wrapper",
                            children: [(0, I.jsx)("span", {
                                className: "icon-re-reply"
                            }), (0, I.jsx)(W.Z, {
                                placeholder: "".concat(T, "\ub2d8\uc5d0\uac8c \ub300\ub313\uae00 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),
                                postId: t,
                                onSaved: O,
                                showSecret: !1
                            })]
                        })]
                    })
                },
                ne = function(e) {
                    var t = e.episodeId,
                        n = e.onTotal,
                        i = e.onSeekTo,
                        r = (0, F.Z)().userStore,
                        o = (0, l.useState)(0),
                        a = o[0],
                        s = o[1],
                        c = (0, l.useState)(0),
                        d = c[0],
                        u = c[1],
                        h = (0, l.useState)("POSTS"),
                        f = h[0],
                        v = h[1],
                        m = (0, l.useState)("NEXT"),
                        g = m[0],
                        y = m[1],
                        b = (0, l.useState)({
                            page: 1,
                            num: 10,
                            episode_id: t
                        }),
                        x = b[0],
                        j = b[1],
                        w = (0, l.useState)([]),
                        k = w[0],
                        S = w[1],
                        _ = (0, l.useState)(0),
                        N = _[0],
                        P = _[1],
                        C = (0, l.useState)([]),
                        T = C[0],
                        E = C[1],
                        O = K.P.usePosts("PR", x),
                        Z = O.rows,
                        z = O.total,
                        L = O.isLoading,
                        R = O.mutate;
                    (0, l.useEffect)((function() {
                        if (r.user.blocked_users) {
                            var e = r.user.blocked_users.map((function(e) {
                                return e.target_user.id
                            }));
                            E(e)
                        }
                    }), [r.user]), (0, l.useEffect)((function() {
                        if (void 0 !== Z && x.page && (Z.length > 0 && x.page > 1 && "NEXT" === g ? S([].concat((0, U.Z)(k), (0, U.Z)(Z))) : S(Z)), n && Z) {
                            var e = z || 0;
                            Z.forEach((function(t) {
                                e += t.replies_cnt
                            })), P(e), n(e)
                        }
                    }), [Z]);
                    var D = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POSTS";
                            if ("REPLIES" === n) Y.Y.save(e).then((function() {
                                R()
                            })).catch((function(e) {
                                alert(e.message)
                            }));
                            else {
                                var i = e;
                                i.episode_id = t, i.status = 10, i.title = i.content, i.subtype = "board-episode", i.type = "p-board", K.P.save(i).then((function() {
                                    R()
                                })).catch((function(e) {
                                    alert(e.message)
                                }))
                            }
                        },
                        M = function(e, t, n) {
                            v(t), s(e), n && u(n)
                        },
                        q = function(e) {
                            T.push(e)
                        };
                    return (0, I.jsxs)(V.HR, {
                        children: [(0, I.jsxs)(V.nT, {
                            children: [(0, I.jsxs)("h1", {
                                children: ["\ub313\uae00 ", N > 0 && N]
                            }), (0, I.jsx)(W.Z, {
                                postId: t,
                                onSaved: D,
                                showSecret: !1
                            })]
                        }), (0, I.jsx)(V.en, {
                            children: k.map((function(e) {
                                return (0, I.jsx)(I.Fragment, {
                                    children: T.indexOf(e.author.id) < 0 && (0, I.jsxs)(V.sX, {
                                        className: "item",
                                        children: [(0, I.jsx)(te, {
                                            postId: e.id,
                                            parent_id: e.id,
                                            row: e,
                                            onSaved: D,
                                            mutate: R,
                                            onReport: M,
                                            onSeekTo: i,
                                            addBlockUser: q
                                        }), e.replies.map((function(t) {
                                            return (0, I.jsxs)("div", {
                                                className: "reply-re-wrapper",
                                                id: t.id.toString(),
                                                children: [(0, I.jsx)("span", {
                                                    className: "icon-re-reply"
                                                }), (0, I.jsx)(V.sX, {
                                                    className: "item re",
                                                    children: (0, I.jsx)(te, {
                                                        postId: e.id,
                                                        parent_id: e.id,
                                                        row: t,
                                                        onSaved: D,
                                                        mutate: R,
                                                        onReport: M,
                                                        onSeekTo: i
                                                    })
                                                })]
                                            }, t.id)
                                        }))]
                                    }, e.id)
                                })
                            }))
                        }), L && (0, I.jsx)(p.g, {
                            fixed: "PAGE" === g
                        }), (0, I.jsx)(H.Z, {
                            current: x.page,
                            num: x.num,
                            total: z,
                            onChange: function(e, t) {
                                j(ee(ee({}, x), {}, {
                                    page: e
                                })), y(t)
                            },
                            margin: [20, 0, 0, 0]
                        }), (0, I.jsx)(X.Z, {
                            onCancel: function() {
                                s(0)
                            },
                            reportId: a,
                            replyService: f,
                            userId: d
                        })]
                    })
                },
                ie = n(45989),
                re = n(68665),
                oe = n(85215),
                ae = n(54039),
                se = n(77206),
                le = n(39330),
                ce = n(64203),
                de = n(9669),
                ue = n.n(de),
                pe = n(31728),
                he = n(34155);

            function fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fe(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var me = function(e) {
                    var t, n, i = e.data,
                        r = (0, s.useRouter)(),
                        o = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        c = (0, F.Z)().userStore,
                        m = r.query.id,
                        b = (0, l.useState)(),
                        x = b[0],
                        j = b[1],
                        w = (0, l.useState)(),
                        k = w[0],
                        S = w[1],
                        _ = (0, l.useState)(!1),
                        C = _[0],
                        T = _[1],
                        E = (0, l.useState)(!1),
                        O = E[0],
                        Z = E[1],
                        z = (0, l.useState)({
                            accountId: 6202477110001,
                            videoId: 0,
                            playerId: "JOmPwtX1b",
                            embedId: "default",
                            controls: !0,
                            fluid: !0,
                            setIntervalTime: 3e4,
                            autoplay: "iOS" !== q.BF && "Safari" !== q.KC,
                            isMobile: q.tq,
                            disabledSkip: O
                        }),
                        L = z[0],
                        R = z[1],
                        D = (0, l.useState)(),
                        U = D[0],
                        H = D[1],
                        Y = (0, l.useState)(),
                        V = Y[0],
                        W = Y[1],
                        X = (0, l.useState)(!1),
                        K = X[0],
                        G = X[1],
                        Q = (0, l.useState)(),
                        $ = Q[0],
                        ee = Q[1],
                        te = (0, l.useState)(!1),
                        se = te[0],
                        de = te[1],
                        ue = (0, l.useState)(95),
                        he = ue[0],
                        fe = ue[1],
                        me = (0, l.useState)("EPISODE"),
                        Se = me[0],
                        _e = me[1],
                        Ne = (0, l.useState)(0),
                        Pe = Ne[0],
                        Ie = Ne[1],
                        Ce = (0, l.useState)(0),
                        Te = Ce[0],
                        Ee = Ce[1],
                        Oe = (0, l.useState)(),
                        Ze = Oe[0],
                        ze = Oe[1],
                        Le = (0, l.useState)(!1),
                        Re = Le[0],
                        De = Le[1],
                        Me = (0, l.useState)(!1),
                        qe = Me[0],
                        Be = Me[1];
                    (0, l.useEffect)((function() {
                        return j(Number(m)), i && S(i), !i && m && (T(!0), f.c.show("PD", Number(m)).then((function(e) {
                                S(e)
                            })).catch((function() {})).finally((function() {
                                T(!1)
                            }))), m && pe.M.getVast(c.user.id, Number(m)).then((function() {})).catch((function() {
                                alert("\uad11\uace0 \ucc28\ub2e8 \ud504\ub85c\uadf8\ub7a8\uc744 \uc885\ub8cc\ud574\uc57c\ub9cc \ucf58\ud150\uce20\ub97c \uc2dc\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uad11\uace0 \ucc28\ub2e8\uae30 \ud504\ub85c\uadf8\ub7a8\uc744 \uc885\ub8cc\ud558\uac70\ub098 \uc774 \uc0ac\uc774\ud2b8\ub97c \uc608\uc678\ub85c \ubcc0\uacbd\ud574\uc8fc\uc138\uc694."), location.href = "/bab?next=" + encodeURIComponent(location.pathname)
                            })),
                            function() {}
                    }), [i, m]), (0, l.useEffect)((function() {
                        return k && (ee(k.user_position), Z(null !== k.original_air_until && J()() < J()(k.original_air_until)), "private" !== k.public || c.logged || c.useMeLoading || r.replace("/login?next=".concat(encodeURIComponent(r.asPath)))),
                            function() {}
                    }), [k, c.logged, c.useMeLoading]), (0, l.useEffect)((function() {
                        if (c.testLiveConfig.time && c.isLiveTester) return Z(J()() < J()(c.testLiveConfig.time)),
                            function() {
                                Z(!1)
                            }
                    }), [c.isLiveTester, c.testLiveConfig.time, O]), (0, l.useEffect)((function() {
                        r.query.replyId && "string" === typeof r.query.replyId && parseInt(r.query.replyId) > 0 && (_e("REPLY"), setTimeout((function() {
                            var e, t;
                            window.scrollTo(0, null !== (e = null === (t = document.getElementById(r.query.replyId.toString())) || void 0 === t ? void 0 : t.offsetTop) && void 0 !== e ? e : 600)
                        }), 1e3))
                    }), [r.query.replyId]), (0, l.useEffect)((function() {
                        if (k && Ze) {
                            if (void 0 !== k.age_limit && k.age_limit >= 19 && (0, g.nD)(c.user.birthdate) < 19) return void De(!0);
                            var e = null;
                            k.video_sub && (e = k.video_sub.bc_id), !k.video_sub && k.video_nosub && (e = k.video_nosub.bc_id), W(!k.video_sub && k.video_nosub ? "nosub" : "sub"), H([k.video_sub ? k.video_sub.bc_id : "", k.video_nosub ? k.video_nosub.bc_id : ""]);
                            var t = k.user_position;
                            R(ve(ve({}, L), {}, {
                                episode: k,
                                videoId: Number(e),
                                currentTime: k.user_position && k.duration && k.user_position >= Math.floor(k.duration / 1e3) ? 0 : k.user_position,
                                setInterval: function(e) {
                                    t !== parseInt(e.toString()) && (t = parseInt(e.toString()), ee(parseInt(e.toString())), Ue())
                                },
                                disabledSkip: O,
                                ageLimit: k.age_limit,
                                ended: function(e) {
                                    e && Ue()
                                },
                                ready: function(e, t) {
                                    e.ima3.settings.ima3SdkSettings = {
                                        locale: "ko"
                                    }, e.ima3.setAdsRenderingSettings({
                                        useStyledLinearAds: !0
                                    });
                                    var n = Math.floor(t),
                                        i = n && k.duration && n >= Math.floor(k.duration / 1e3) ? 0 : n;
                                    e.ima3.settings.serverUrl = "//".concat(location.host, "/api/adcampaigns/vast?episode_id=").concat(x, "&position=").concat(null === i ? 0 : 1e3 * i, "&user_id=").concat(c.user.id), setTimeout((function() {
                                        document.querySelector(".vjs-progress-holder") && (document.querySelectorAll(".vjs-progress-holder div.marker").forEach((function(e) {
                                            return e.remove()
                                        })), k.adinventories.forEach((function(e) {
                                            if (k.duration) {
                                                var t, n = e.tcr / k.duration * 100,
                                                    i = document.createElement("div"),
                                                    r = document.createTextNode(e.id.toString());
                                                i.appendChild(r), i.className = "marker", i.style.left = n.toString() + "%", null === (t = document.querySelector(".vjs-progress-holder")) || void 0 === t || t.appendChild(i)
                                            }
                                        })))
                                    }), 1e3)
                                }
                            }))
                        }
                    }), [k, Ze, O]), (0, l.useEffect)((function() {
                        var e = setInterval((function() {
                            void 0 !== window.bc && G(!0), clearInterval(e)
                        }), 3e3);
                        return function() {
                            G(!1), clearInterval(e)
                        }
                    }), [window]), (0, l.useEffect)((function() {
                        return window.addEventListener("scroll", Ae),
                            function() {
                                window.removeEventListener("scroll", Ae)
                            }
                    }), []);
                    var Ue = function(e) {
                            c.logged && f.c.hit({
                                id: Number(m),
                                position: e || parseInt((0, oe.Z)("videoplayer").currentTime().toString())
                            })
                        },
                        Ae = function() {
                            var e = a.current ? a.current.offsetTop : 0,
                                t = o.current ? o.current.offsetTop : 0;
                            window.scrollY > t - e ? Ie(e) : Ie(0)
                        },
                        He = function(e) {
                            _e(e)
                        },
                        Ye = function() {
                            Be(!0)
                        };
                    return x ? (0, I.jsx)(I.Fragment, {
                        children: k && (0, I.jsxs)(u.Z, {
                            title: k.drama.title,
                            headerChildren: ["back"],
                            isContainerFull: !0,
                            fixed: !0,
                            children: [(0, I.jsx)(y.default, {
                                children: (0, I.jsx)("script", {
                                    src: "https://players.brightcove.net/6202477110001/JOmPwtX1b_default/index.min.js"
                                })
                            }), (0, I.jsxs)(ge, {
                                children: [(0, I.jsx)(je, {
                                    children: (0, I.jsx)(d.W2, {
                                        children: K ? x && L.videoId > 0 && (0, I.jsx)(M, ve({}, L)) : (0, I.jsx)(p.g, {
                                            className: "loading",
                                            height: "20vh",
                                            pcHeight: "618px"
                                        })
                                    })
                                }), (0, I.jsx)("div", {
                                    className: "player-size"
                                }), (0, I.jsxs)(d.W2, {
                                    ref: a,
                                    children: [C ? (0, I.jsx)(p.g, {}) : (0, I.jsxs)(we, {
                                        disabledSkip: O,
                                        children: [(0, I.jsxs)("div", {
                                            className: "info",
                                            children: [(0, I.jsxs)("div", {
                                                className: "info-group",
                                                children: [(0, I.jsxs)("span", {
                                                    className: "subject",
                                                    children: [k.drama.title, " ", k.seq]
                                                }), (0, I.jsxs)("div", {
                                                    className: "meta",
                                                    children: [k.drama.broadcaster.name, " |", " ", k.broadcasted_at && (0, g.Gb)("YYYY-MM-DD", k.broadcasted_at), k.duration && " | " + (0, g.MU)(k.duration / 1e3)]
                                                })]
                                            }), (0, I.jsxs)("div", {
                                                className: "share-subtitle-group",
                                                children: [!q.tq && (0, I.jsx)(N.no, {
                                                    onClick: Ye,
                                                    isLabel: !0,
                                                    className: "button-share",
                                                    children: "\uacf5\uc720\ud558\uae30"
                                                }), U && U[0] && U[1] && (0, I.jsx)("div", {
                                                    children: (0, I.jsxs)(N.zx, {
                                                        type: "button",
                                                        className: "subtitle",
                                                        onClick: function() {
                                                            if (U) {
                                                                var e = (0, oe.Z)("videoplayer");
                                                                e.currentTime() && c.logged && f.c.hit({
                                                                    id: Number(m),
                                                                    position: parseInt(e.currentTime().toString())
                                                                }), R(ve(ve({}, L), {}, {
                                                                    videoId: Number(U["sub" === V ? 1 : 0]),
                                                                    currentTime: e.currentTime() ? e.currentTime() : $
                                                                })), W("sub" === V ? "nosub" : "sub")
                                                            }
                                                        },
                                                        children: [(0, I.jsx)(N.JO, {
                                                            w: [16],
                                                            h: [13],
                                                            path: "/images/icon_change.png",
                                                            className: "icon"
                                                        }), "sub" === V && "\ubb34", "\uc790\ub9c9 \uc804\ud658"]
                                                    })
                                                })]
                                            })]
                                        }), k.description && 1 == q.tq ? (0, I.jsxs)(h.Z, {
                                            className: "text",
                                            children: [(0, g.SR)(k.description, he), " ", k.description.length > 95 && (0, I.jsx)("span", {
                                                className: "more",
                                                children: (0, I.jsx)("button", {
                                                    type: "button",
                                                    onClick: function() {
                                                        de(!se), fe(se ? 95 : 2e3)
                                                    },
                                                    children: se ? "\uc811\uae30" : "\ub354\ubcf4\uae30"
                                                })
                                            })]
                                        }) : (0, I.jsx)(h.Z, {
                                            className: "text",
                                            children: k.description
                                        }), (0, I.jsx)(N.no, {
                                            className: "button-share-mb",
                                            onClick: Ye,
                                            isLabel: !0,
                                            style: {
                                                marginTop: 10
                                            },
                                            children: "\uacf5\uc720\ud558\uae30"
                                        }), (0, I.jsx)(ke, {
                                            children: (0, I.jsx)(P.default, {
                                                href: "/contents/".concat(k.drama.id),
                                                children: (0, I.jsxs)("a", {
                                                    children: [(0, I.jsx)(A.Z, {
                                                        path: (0, v.L5)(k.drama.poster_image, 160),
                                                        width: 58,
                                                        height: 83,
                                                        pcWidth: 160,
                                                        pcHeight: 230,
                                                        className: "thumbnail"
                                                    }), (0, I.jsxs)("div", {
                                                        className: "info",
                                                        children: [(0, I.jsx)("h1", {
                                                            className: "drama-title",
                                                            children: k.drama.title
                                                        }), (0, I.jsx)("div", {
                                                            className: "genres",
                                                            children: (null !== (t = k.drama.genres) && void 0 !== t ? t : []).map((function(e) {
                                                                return (0, I.jsx)("span", {
                                                                    children: e.name
                                                                }, e.name)
                                                            }))
                                                        }), (0, I.jsxs)("div", {
                                                            className: "meta",
                                                            children: [(0, I.jsxs)("div", {
                                                                children: [(0, I.jsx)("span", {
                                                                    className: "label",
                                                                    children: "\ubc29\uc1a1\uc0ac"
                                                                }), " ", k.drama.broadcaster.name]
                                                            }), (0, I.jsxs)("div", {
                                                                children: [(0, I.jsx)("span", {
                                                                    className: "label",
                                                                    children: "\ucd9c\uc2dc"
                                                                }), " ", (0, g.Kj)(k.drama.quarter)]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }), !C && !c.user.activeNoAdCouponcode && (0, I.jsx)(le.C, {
                                        position: "watch-middle",
                                        wrapperStyle: {
                                            marginBottom: 20,
                                            marginTop: 20
                                        }
                                    }), (0, I.jsxs)(ye, {
                                        ref: o,
                                        children: [(0, I.jsx)(xe, {
                                            fixed: Pe,
                                            children: (0, I.jsxs)("ul", {
                                                children: [(0, I.jsx)("li", {
                                                    className: "EPISODE" === Se ? "active" : "",
                                                    children: (0, I.jsx)("button", {
                                                        type: "button",
                                                        onClick: function() {
                                                            return He("EPISODE")
                                                        },
                                                        children: (0, I.jsx)("span", {
                                                            children: "\uc804\uccb4\ud68c\ucc28"
                                                        })
                                                    })
                                                }), (0, I.jsx)("li", {
                                                    className: "REPLY" === Se ? "active" : "",
                                                    children: (0, I.jsx)("button", {
                                                        type: "button",
                                                        onClick: function() {
                                                            return He("REPLY")
                                                        },
                                                        children: (0, I.jsxs)("span", {
                                                            children: ["\ub313\uae00 ", Te > 0 && "(" + Te + ")"]
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, I.jsx)(be, {
                                            children: (0, I.jsx)(ie.Z, {
                                                mode: "out-in",
                                                children: (0, I.jsx)(re.Z, {
                                                    addEndListener: function(e, t) {
                                                        e.addEventListener("transitionend", t, !1)
                                                    },
                                                    classNames: "fade",
                                                    children: (0, I.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, I.jsx)("div", {
                                                            className: "panel ".concat("EPISODE" === Se ? "active" : ""),
                                                            children: k.drama.id && (0, I.jsx)(B.Episode, {
                                                                dramaId: k.drama.id,
                                                                episodes: function(e) {
                                                                    ze(e)
                                                                }
                                                            })
                                                        }), (0, I.jsx)("div", {
                                                            className: "panel ".concat("REPLY" === Se ? "active" : ""),
                                                            children: k.id && (0, I.jsx)(ne, {
                                                                episodeId: k.id,
                                                                onTotal: function(e) {
                                                                    return Ee(e)
                                                                },
                                                                onSeekTo: function(e) {
                                                                    return function(e) {
                                                                        if (e) {
                                                                            var t = (0, oe.Z)("videoplayer");
                                                                            t.currentTime() && (t.currentTime(e), f.c.hit({
                                                                                id: Number(m),
                                                                                position: e
                                                                            }))
                                                                        }
                                                                    }(e)
                                                                }
                                                            }, k.id)
                                                        })]
                                                    })
                                                }, Se)
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, I.jsxs)(ae.Z, {
                                visible: Re,
                                onClose: function() {
                                    return console.log("close")
                                },
                                isCloseButton: !1,
                                children: [(0, I.jsxs)("h1", {
                                    className: "title",
                                    style: {
                                        lineHeight: 1.5,
                                        fontSize: 20,
                                        textAlign: "center"
                                    },
                                    children: ["\ud574\ub2f9 \uc5d0\ud53c\uc18c\ub4dc\ub294", (0, I.jsx)("br", {}), "\uccad\uc18c\ub144 \uad00\ub78c\ubd88\uac00 \uc0c1\ud488\uc785\ub2c8\ub2e4"]
                                }), (0, I.jsx)(N.Ls, {
                                    direction: "row",
                                    style: {
                                        marginTop: 30
                                    },
                                    children: (0, I.jsx)(N.zx, {
                                        color: "secondary",
                                        radius: 30,
                                        size: "large",
                                        full: !0,
                                        onClick: function() {
                                            return r.back()
                                        },
                                        children: "\ud655\uc778"
                                    })
                                })]
                            }), (0, I.jsx)(ae.Z, {
                                visible: qe,
                                onClose: function() {
                                    Be(!1)
                                },
                                full: !0,
                                children: k.drama && (0, I.jsx)("div", {
                                    style: {
                                        flex: 1,
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    children: (0, I.jsx)(ce.Z, {
                                        title: "".concat(k.drama.title, " ").concat(k.seq, " <br />SNS\uc5d0 \uacf5\uc720\ud574\ubcf4\uc138\uc694"),
                                        url: "https://".concat(location.host, "/watch/").concat(k.id),
                                        meta: {
                                            title: k.drama.title + " " + k.seq,
                                            description: k.drama.long_desc,
                                            imageUrl: null !== (n = k.image) && void 0 !== n ? n : k.drama.poster_image
                                        }
                                    })
                                })
                            })]
                        })
                    }) : null
                },
                ge = c.ZP.div.withConfig({
                    displayName: "id__WatchWrapper",
                    componentId: "y9wzot-0"
                })([".player-size{", ";padding-bottom:56.25%;}", "{.player-size{display:none;}}@media (orientation:landscape){.player-size{display:none;}}"], (0, v.vw)("margin-top", m.r.size.header), (0, v.mI)()),
                ye = c.ZP.div.withConfig({
                    displayName: "id__ContentsTabGroup",
                    componentId: "y9wzot-1"
                })([""]),
                be = c.ZP.div.withConfig({
                    displayName: "id__TabContents",
                    componentId: "y9wzot-2"
                })(["background-color:#000000;.panel{display:none;&:first-child{", ";}&.active{display:block;}}", "{background-color:transparent;.panel{&:first-child{.list{display:flex;flex-wrap:wrap;.item{width:50%;a{padding:30px 0;}&:last-child{border-bottom:1px solid ", ";}}}}&:last-child{& > div > div > h1{display:none;& + .reply-form{margin-top:0;}}}}}"], (0, v.uM)([10, 20, 20, 20], [0, 0, 0, 0]), (0, v.mI)(), m.r.color.borderDark),
                xe = c.ZP.div.withConfig({
                    displayName: "id__Tabs",
                    componentId: "y9wzot-3"
                })(["", ";ul{display:flex;background-color:", ";li{flex:1;&.active{button{span{border-bottom:2px solid ", ";", " color:", ";}}}button{display:block;width:100%;span{display:inline-flex;font-weight:bold;", ";", ";", ";", ";", ";color:", ";}}}}", ";", "{border-bottom:1px solid ", ";ul{position:static;background-color:transparent;li{flex:none;button{}}}}"], (0, v.vw)("height", 40, 50), m.r.color.backgroundBody, m.r.color.primary, (0, v.vw)("border-bottom-width", 2, 3), m.r.color.main, (0, v.vw)("font-size", 14, 15), (0, v.vw)("height", 40, 50), (0, v.vw)("line-height", 40, 50), (0, v.vw)("padding-left", 8, 15), (0, v.vw)("padding-right", 8, 15), m.r.color.disabled, (function(e) {
                    return e.fixed > 0 && (0, c.iv)(["ul{position:fixed;left:0;right:0;top:", "px;z-index:10;}@media (orientation:landscape){ul{position:static;}}"], e.fixed)
                }), (0, v.mI)(), m.r.color.borderDark),
                je = c.ZP.div.withConfig({
                    displayName: "id__VideoPlayer",
                    componentId: "y9wzot-4"
                })(["background-color:#000;position:fixed;left:0;right:0;", " z-index:10;@media (orientation:landscape){position:static;}video{display:block;width:100%;margin:0 auto;}.loading{padding-bottom:56.25%;position:relative;&:after{position:absolute;left:50%;top:50%;", ";", ";}}", "{position:static;min-height:400px;video{height:619px;}}"], (0, v.vw)("top", m.r.size.header), (0, v.vw)("margin-left", -15, -25), (0, v.vw)("margin-top", -15, -25), (0, v.mI)()),
                we = c.ZP.div.withConfig({
                    displayName: "id__VideoInfo",
                    componentId: "y9wzot-5"
                })(["", ";.info{position:relative;", ";display:flex;justify-content:space-between;.subject{font-weight:bold;", ";color:", ";line-height:1.5;}.meta{", ";", ";}.subtitle{background-color:", ";", ";", ";", ";}}.share-subtitle-group{display:flex;flex-direction:row;justify-content:center;.button-share{&:before{width:22px;height:22px;}display:none;}}.text{line-height:1.6;}", "{.info{.subtitle{border-radius:4px;width:auto;height:auto;font-size:13px;padding:15px 20px;top:0;transform:translateY(0);br{display:none;}}}.share-subtitle-group{.button-share{display:flex;}}.button-share-mb{display:none;}}"], (0, v.uM)([20, 20, 20, 20], [40, 0, 40, 0]), (0, v.vw)("margin-bottom", 25), (0, v.vw)("font-size", 16, 32), (function(e) {
                    return e.disabledSkip ? "#ff0093" : m.r.color.main
                }), (0, v.vw)("font-size", 12, 15), (0, v.vw)("margin-top", 8, 12), m.r.color.background, (0, v.vw)("margin-left", 10), (0, v.vw)("font-size", 10), (0, v.vw)("border-radius", 4), (0, v.mI)()),
                ke = c.ZP.div.withConfig({
                    displayName: "id__DramaInfoStyled",
                    componentId: "y9wzot-6"
                })(["", ";a{display:block;display:flex;align-items:center;}.thumbnail{}.info{flex:1;flex-direction:column;margin:0;", ";.drama-title{", ";line-height:1.5;}.genres{color:", ";", ";", ';span{&:after{content:"/";display:inline;}&:last-child{&:after{display:none;}}}}.meta{', ";", ";line-height:1.7;& > div{display:flex;.label{min-width:50px;}}}}", "{a{align-items:flex-start;}.info{padding-top:5px;.drama-title{color:#fff;}}}"], (0, v.vw)("margin-top", 40), (0, v.vw)("margin-left", 12), (0, v.vw)("font-size", 13, 17), m.r.color.dark, (0, v.vw)("margin-top", 5, 20), (0, v.vw)("font-size", 11, 12), (0, v.vw)("font-size", 11, 12), (0, v.vw)("margin-top", 5, 20), (0, v.mI)());
            me.getInitialProps = function() {
                var e = (0, i.Z)(a().mark((function e(t) {
                    var n, i, r, o, s, l;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = t.query, r = i.id, e.next = 4, ue().get("".concat(null !== (n = he.env.API_URL_IN_DOCKER) && void 0 !== n ? n : "/api", "/episodes/show?subset=PD&id=").concat(r));
                            case 4:
                                return o = e.sent, s = o.data, l = {
                                    url: "".concat("https://dev.dorama.kr", "/watch/").concat(r),
                                    title: s.drama.title + " " + s.seq,
                                    type: "article",
                                    description: s.description,
                                    image: s.image
                                }, e.abrupt("return", {
                                    query: i,
                                    meta: l
                                });
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            var Se = (0, se.Pi)(me)
        },
        31728: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return i
                }
            });
            var i, r = n(50029),
                o = n(87794),
                a = n.n(o),
                s = n(9669),
                l = n.n(s),
                c = n(80129),
                d = n.n(c),
                u = n(25139);
            ! function(e) {
                function t() {
                    return (t = (0, r.Z)(a().mark((function e(t, n) {
                        var i, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = "/api/adcampaigns/vast?" + d().stringify({
                                        position: 0,
                                        user_id: t,
                                        episode_id: n
                                    }), e.prev = 1, e.next = 4, l().get(i);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 8:
                                    throw e.prev = 8, e.t0 = e.catch(1), (0, u.E)(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })))).apply(this, arguments)
                }

                function n() {
                    return (n = (0, r.Z)(a().mark((function e(t) {
                        var n, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = "/api/adcampaigns/banners?" + d().stringify({
                                        position: t
                                    }), e.prev = 1, e.next = 4, l().get(n);
                                case 4:
                                    return i = e.sent, e.abrupt("return", i.data);
                                case 8:
                                    throw e.prev = 8, e.t0 = e.catch(1), (0, u.E)(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })))).apply(this, arguments)
                }

                function i() {
                    return (i = (0, r.Z)(a().mark((function e(t, n) {
                        var i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l().get("/api/adcampaigns/track_manually?" + d().stringify({
                                        type: t,
                                        adcreative_id: n
                                    }));
                                case 3:
                                    return i = e.sent, e.abrupt("return", i.data);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), (0, u.E)(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))).apply(this, arguments)
                }
                e.getVast = function(e, n) {
                    return t.apply(this, arguments)
                }, e.getBanners = function(e) {
                    return n.apply(this, arguments)
                }, e.trackManually = function(e, t) {
                    return i.apply(this, arguments)
                }
            }(i || (i = {}))
        },
        52422: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(67294);

            function r() {
                var e = (0, i.useState)({
                        width: 0,
                        height: 0
                    }),
                    t = e[0],
                    n = e[1];
                return (0, i.useEffect)((function() {
                    function e() {
                        n({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), t
            }
        },
        26473: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/watch/[id]", function() {
                return n(45305)
            }])
        },
        25893: function() {},
        65586: function() {}
    },
    function(e) {
        e.O(0, [2544, 8197, 8447, 2897, 3084, 8552, 6801, 473, 2912, 9671, 730, 3171, 9774, 2888, 179], (function() {
            return t = 26473, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);