        Bl('__react_tooltip_hide_event', { target: e });
                    };
                    e.rebuild = function () {
                        Bl('__react_tooltip_rebuild_event');
                    };
                    e.show = function (e) {
                        Bl('__react_tooltip_show_event', { target: e });
                    };
                    e.prototype.globalRebuild = function () {
                        this.mount && (this.unbindListener(), this.bindListener());
                    };
                    e.prototype.globalShow = function (e) {
                        if (this.mount) {
                            var t = !!(e && e.detail && e.detail.target);
                            this.showTooltip({ currentTarget: t && e.detail.target }, true);
                        }
                    };
                    e.prototype.globalHide = function (e) {
                        if (this.mount) {
                            var t = !!(e && e.detail && e.detail.target);
                            this.hideTooltip({ currentTarget: t && e.detail.target }, t);
                        }
                    };
                }(Jl = function (e) {
                    e.prototype.bindWindowEvents = function (e) {
                        window.removeEventListener('__react_tooltip_hide_event', this.globalHide);
                        window.addEventListener('__react_tooltip_hide_event', this.globalHide, false);
                        window.removeEventListener('__react_tooltip_rebuild_event', this.globalRebuild);
                        window.addEventListener('__react_tooltip_rebuild_event', this.globalRebuild, false);
                        window.removeEventListener('__react_tooltip_show_event', this.globalShow);
                        window.addEventListener('__react_tooltip_show_event', this.globalShow, false);
                        e && (window.removeEventListener('resize', this.onWindowResize), window.addEventListener('resize', this.onWindowResize, false));
                    };
                    e.prototype.unbindWindowEvents = function () {
                        window.removeEventListener('__react_tooltip_hide_event', this.globalHide);
                        window.removeEventListener('__react_tooltip_rebuild_event', this.globalRebuild);
                        window.removeEventListener('__react_tooltip_show_event', this.globalShow);
                        window.removeEventListener('resize', this.onWindowResize);
                    };
                    e.prototype.onWindowResize = function () {
                        this.mount && this.hideTooltip();
                    };
                }(Jl = function (e) {
                    e.prototype.isCustomEvent = function (e) {
                        return this.state.event || !!e.getAttribute('data-event');
                    };
                    e.prototype.customBindListener = function (e) {
                        var t = this, r = this.state, n = r.event, a = r.eventOff, l = e.getAttribute('data-event') || n, o = e.getAttribute('data-event-off') || a;
                        l.split(' ').forEach(function (r) {
                            e.removeEventListener(r, Sl.get(e, r));
                            var n = Tl.bind(t, o);
                            Sl.set(e, r, n);
                            e.addEventListener(r, n, false);
                        });
                        o && o.split(' ').forEach(function (r) {
                            e.removeEventListener(r, t.hideTooltip);
                            e.addEventListener(r, t.hideTooltip, false);
                        });
                    };
                    e.prototype.customUnbindListener = function (e) {
                        var t = this.state, r = t.event, n = t.eventOff, a = r || e.getAttribute('data-event'), l = n || e.getAttribute('data-event-off');
                        e.removeEventListener(a, Sl.get(e, r));
                        l && e.removeEventListener(l, this.hideTooltip);
                    };
                }(Jl = function (e) {
                    e.prototype.isCapture = function (e) {
                        return e && 'true' === e.getAttribute('data-iscapture') || this.props.isCapture || false;
                    };
                }(Jl = function (e) {
                    e.prototype.getEffect = function (e) {
                        return e.getAttribute('data-effect') || this.props.effect || 'float';
                    };
                }(Jl = function (e) {
                    e.prototype.isBodyMode = function () {
                        return !!this.props.bodyMode;
                    };
                    e.prototype.bindBodyListener = function (e) {
                        var t = this, r = this.state, n = r.event, a = r.eventOff, l = r.possibleCustomEvents, o = r.possibleCustomEventsOff, i = Il(), c = Rl(e, 'data-event'), s = Rl(e, 'data-event-off');
                        null != n && (c[n] = true);
                        null != a && (s[a] = true);
                        l.split(' ').forEach(function (e) {
                            return c[e] = true;
                        });
                        o.split(' ').forEach(function (e) {
                            return s[e] = true;
                        });
                        this.unbindBodyListener(i);
                        var h = this.bodyModeListeners = {};
                        for (var v in (null == n && (h.mouseover = kl.bind(this, this.showTooltip, {}), h.mousemove = kl.bind(this, this.updateTooltip, { respectEffect: true }), h.mouseout = kl.bind(this, this.hideTooltip, {})), c))
                            h[v] = kl.bind(this, function (e) {
                                var r = e.currentTarget.getAttribute('data-event-off') || a;
                                Tl.call(t, r, e);
                            }, { customEvent: true });
                        for (var u in s)
                            h[u] = kl.bind(this, this.hideTooltip, { customEvent: true });
                        for (var p in h)
                            i.addEventListener(p, h[p]);
                    };
                    e.prototype.unbindBodyListener = function (e) {
                        e = e || Il();
                        var t = this.bodyModeListeners;
                        for (var r in t)
                            e.removeEventListener(r, t[r]);
                    };
                }((Kl = function (e) {
                    !function (e, t) {
                        if ('function' !== typeof t && null !== t) {
                            throw new TypeError('Super expression must either be null or a function');
                        }
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: true,
                                configurable: true
                            }
                        });
                        Object.defineProperty(e, 'prototype', { writable: false });
                        t && w(e, t);
                    }(i, e);
                    var t, r, a, o = O(i);
                    function i(e) {
                        var t;
                        return function (e, t) {
                            if (!(e instanceof t)) {
                                throw new TypeError('Cannot call a class as a function');
                            }
                        }(this, i), (t = o.call(this, e)).state = {
                            uuid: e.uuid || 't' + u(),
                            place: e.place || 'top',
                            desiredPlace: e.place || 'top',
                            type: e.type || 'dark',
                            effect: e.effect || 'float',
                            show: false,
                            border: false,
                            borderClass: 'border',
                            customColors: {},
                            customRadius: {},
                            offset: {},
                            padding: e.padding,
                            extraClass: '',
                            html: false,
                            delayHide: 0,
                            delayShow: 0,
                            event: e.event || null,
                            eventOff: e.eventOff || null,
                            currentEvent: null,
                            currentTarget: null,
                            ariaProps: Yl(e),
                            isEmptyTip: false,
                            disable: false,
                            possibleCustomEvents: e.possibleCustomEvents || '',
                            possibleCustomEventsOff: e.possibleCustomEventsOff || '',
                            originTooltip: null,
                            isMultiline: false
                        }, t.bind([
                            'showTooltip',
                            'updateTooltip',
                            'hideTooltip',
                            'hideTooltipOnScroll',
                            'getTooltipContent',
                            'globalRebuild',
                            'globalShow',
                            'globalHide',
                            'onWindowResize',
                            'mouseOnToolTip'
                        ]), t.mount = true, t.delayShowLoop = null, t.delayHideLoop = null, t.delayReshow = null, t.intervalUpdateContent = null, t;
                    }
                    return t = i, r = [
                        {
                            key: 'bind',
                            value: function (e) {
                                var t = this;
                                e.forEach(function (e) {
                                });
                            }
                        },
                        {
                            key: 'componentDidMount',
                            value: function () {
                                var e = this.props;
                                e.insecure;
                                var t = e.resizeHide, r = e.disableInternalStyle;
                                this.mount = true;
                                this.bindListener();
                                this.bindWindowEvents(t);
                                r || this.injectStyles();
                            }
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.mount = false;
                                this.clearTimer();
                                this.unbindListener();
                                this.removeScrollListener(this.state.currentTarget);
                                this.unbindWindowEvents();
                            }
                        },
                        {
                            key: 'injectStyles',
                            value: function () {
                                var e = this.tooltipRef;
                                if (e) {
                                    for (var t, r = e.parentNode; r.parentNode;) {
                                        r = r.parentNode;
                                    }
                                    switch (r.constructor.name) {
                                    case 'Document':
                                    case 'HTMLDocument':
                                    case void 0:
                                        t = r.head;
                                        break;
                                    default:
                                        t = r;
                                    }
                                    if (!t.querySelector('style[data-react-tooltip]')) {
                                        var n = document.createElement('style');
                                        n.textContent = '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  bottom: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-bottom::before {\n  top: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-left::before {\n  right: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip.place-right::before {\n  left: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}';
                                        n.setAttribute('data-react-tooltip', 'true');
                                        t.appendChild(n);
                                    }
                                }
                            }
                        },
                        {
                            key: 'mouseOnToolTip',
                            value: function () {
                                return !(!this.state.show || !this.tooltipRef) && (this.tooltipRef.matches || (this.tooltipRef.msMatchesSelector ? this.tooltipRef.matches = this.tooltipRef.msMatchesSelector : this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector), this.tooltipRef.matches(':hover'));
                            }
                        },
                        {
                            key: 'getTargetArray',
                            value: function (e) {
                                var t, r = [];
                                if (e) {
                                    var n = e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                                    t = '[data-tip][data-for="'.concat(n, '"]');
                                } else {
                                    t = '[data-tip]:not([data-for])';
                                }
                                return Gl(document.getElementsByTagName('*')).filter(function (e) {
                                    return e.shadowRoot;
                                }).forEach(function (e) {
                                    r = r.concat(Gl(e.shadowRoot.querySelectorAll(t)));
                                }), r.concat(Gl(document.querySelectorAll(t)));
                            }
                        },
                        {
                            key: 'bindListener',
                            value: function () {
                                var e = this, t = this.props, r = t.id, n = t.globalEventOff, a = t.isCapture, l = this.getTargetArray(r);
                                l.forEach(function (t) {
                                    null === t.getAttribute('currentItem') && t.setAttribute('currentItem', 'false');
                                    e.unbindBasicListener(t);
                                    e.isCustomEvent(t) && e.customUnbindListener(t);
                                });
                                this.isBodyMode() ? this.bindBodyListener(l) : l.forEach(function (t) {
                                    var r = e.isCapture(t), n = e.getEffect(t);
                                    e.isCustomEvent(t) ? e.customBindListener(t) : (t.addEventListener('mouseenter', e.showTooltip, r), t.addEventListener('focus', e.showTooltip, r), 'float' === n && t.addEventListener('mousemove', e.updateTooltip, r), t.addEventListener('mouseleave', e.hideTooltip, r), t.addEventListener('blur', e.hideTooltip, r));
                                });
                                n && (window.removeEventListener(n, this.hideTooltip), window.addEventListener(n, this.hideTooltip, a));
                                this.bindRemovalTracker();
                            }
                        },
                        {
                            key: 'unbindListener',
                            value: function () {
                                var e = this, t = this.props, r = t.id, n = t.globalEventOff;
                                this.isBodyMode() ? this.unbindBodyListener() : this.getTargetArray(r).forEach(function (t) {
                                    e.unbindBasicListener(t);
                                    e.isCustomEvent(t) && e.customUnbindListener(t);
                                });
                                n && window.removeEventListener(n, this.hideTooltip);
                                this.unbindRemovalTracker();
                            }
                        },
                        {
                            key: 'unbindBasicListener',
                            value: function (e) {
                                var t = this.isCapture(e);
                                e.removeEventListener('mouseenter', this.showTooltip, t);
                                e.removeEventListener('mousemove', this.updateTooltip, t);
                                e.removeEventListener('mouseleave', this.hideTooltip, t);
                            }
                        },
                        {
                            key: 'getTooltipContent',
                            value: function () {
                                var e, t = this.props, r = t.getContent, n = t.children;
                                return r && (e = Array.isArray(r) ? r[0] && r[0](this.state.originTooltip) : r(this.state.originTooltip)), Xl(this.state.originTooltip, n, e, this.state.isMultiline);
                            }
                        },
                        {
                            key: 'isEmptyTip',
                            value: function (e) {
                                return 'string' === typeof e && '' === e || null === e;
                            }
                        },
                        {
                            key: 'showTooltip',
                            value: function (e, t) {
                                if (this.tooltipRef) {
                                    if (t && !this.getTargetArray(this.props.id).some(function (t) {
                                            return t === e.currentTarget;
                                        })) {
                                        return;
                                    }
                                    var r = this.props, n = r.multiline, a = r.getContent, l = e.currentTarget.getAttribute('data-tip'), o = e.currentTarget.getAttribute('data-multiline') || n || false, i = e instanceof window.FocusEvent || t, c = true;
                                    e.currentTarget.getAttribute('data-scroll-hide') ? c = 'true' === e.currentTarget.getAttribute('data-scroll-hide') : null != this.props.scrollHide && (c = this.props.scrollHide);
                                    e && e.currentTarget && e.currentTarget.setAttribute && e.currentTarget.setAttribute('aria-describedby', this.props.id || this.state.uuid);
                                    var s = e.currentTarget.getAttribute('data-place') || this.props.place || 'top', h = i ? 'solid' : this.getEffect(e.currentTarget), v = e.currentTarget.getAttribute('data-offset') || this.props.offset || {}, u = Dl(e, e.currentTarget, this.tooltipRef, s.split(',')[0], s, h, v);
                                    u.position && this.props.overridePosition && (u.position = this.props.overridePosition(u.position, e, e.currentTarget, this.tooltipRef, s, s, h, v));
                                    var p = u.isNewState ? u.newState.place : s.split(',')[0];
                                    this.clearTimer();
                                    var f = e.currentTarget, d = this.state.show ? f.getAttribute('data-delay-update') || this.props.delayUpdate : 0, b = this, g = function () {
                                            b.setState({
                                                originTooltip: l,
                                                isMultiline: o,
                                                desiredPlace: s,
                                                place: p,
                                                type: f.getAttribute('data-type') || b.props.type || 'dark',
                                                customColors: {
                                                    text: f.getAttribute('data-text-color') || b.props.textColor || null,
                                                    background: f.getAttribute('data-background-color') || b.props.backgroundColor || null,
                                                    border: f.getAttribute('data-border-color') || b.props.borderColor || null,
                                                    arrow: f.getAttribute('data-arrow-color') || b.props.arrowColor || null
                                                },
                                                customRadius: {
                                                    tooltip: f.getAttribute('data-tooltip-radius') || b.props.tooltipRadius || '3',
                                                    arrow: f.getAttribute('data-arrow-radius') || b.props.arrowRadius || '0'
                                                },
                                                effect: h,
                                                offset: v,
                                                padding: f.getAttribute('data-padding') || b.props.padding,
                                                html: (f.getAttribute('data-html') ? 'true' === f.getAttribute('data-html') : b.props.html) || false,
                                                delayShow: f.getAttribute('data-delay-show') || b.props.delayShow || 0,
                                                delayHide: f.getAttribute('data-delay-hide') || b.props.delayHide || 0,
                                                delayUpdate: f.getAttribute('data-delay-update') || b.props.delayUpdate || 0,
                                                border: (f.getAttribute('data-border') ? 'true' === f.getAttribute('data-border') : b.props.border) || false,
                                                borderClass: f.getAttribute('data-border-class') || b.props.borderClass || 'border',
                                                extraClass: f.getAttribute('data-class') || b.props.class || b.props.className || '',
                                                disable: (f.getAttribute('data-tip-disable') ? 'true' === f.getAttribute('data-tip-disable') : b.props.disable) || false,
                                                currentTarget: f
                                            }, function () {
                                                c && b.addScrollListener(b.state.currentTarget);
                                                b.updateTooltip(e);
                                                a && Array.isArray(a) && (b.intervalUpdateContent = setInterval(function () {
                                                    if (b.mount) {
                                                        var e = b.props.getContent, t = Xl(l, '', e[0](), o), r = b.isEmptyTip(t);
                                                        b.setState({ isEmptyTip: r });
                                                        b.updatePosition();
                                                    }
                                                }, a[1]));
                                            });
                                        };
                                    d ? this.delayReshow = setTimeout(g, d) : g();
                                }
                            }
                        },
                        {
                            key: 'updateTooltip',
                            value: function (e) {
                                var t = this, r = this.state, n = r.delayShow, a = r.disable, l = this.props, o = l.afterShow, i = l.disable, c = this.getTooltipContent(), s = e.currentTarget || e.target;
                                if (!this.mouseOnToolTip() && !(this.isEmptyTip(c) || a || i)) {
                                    var h = this.state.show ? 0 : parseInt(n, 10), v = function () {
                                            if (Array.isArray(c) && c.length > 0 || c) {
                                                var r = !t.state.show;
                                                t.setState({
                                                    currentEvent: e,
                                                    currentTarget: s,
                                                    show: true
                                                }, function () {
                                                    t.updatePosition(function () {
                                                        r && o && o(e);
                                                    });
                                                });
                                            }
                                        };
                                    this.delayShowLoop && clearTimeout(this.delayShowLoop);
                                    h ? this.delayShowLoop = setTimeout(v, h) : (this.delayShowLoop = null, v());
                                }
                            }
                        },
                        {
                            key: 'listenForTooltipExit',
                            value: function () {
                                this.state.show && this.tooltipRef && this.tooltipRef.addEventListener('mouseleave', this.hideTooltip);
                            }
                        },
                        {
                            key: 'removeListenerForTooltipExit',
                            value: function () {
                                this.state.show && this.tooltipRef && this.tooltipRef.removeEventListener('mouseleave', this.hideTooltip);
                            }
                        },
                        {
                            key: 'hideTooltip',
                            value: function (e, t) {
                                var r = this, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isScroll: false }, a = this.state.disable, l = n.isScroll, o = l ? 0 : this.state.delayHide, i = this.props, c = i.afterHide, s = i.disable, h = this.getTooltipContent();
                                if (this.mount && !(this.isEmptyTip(h) || a || s)) {
                                    if (t) {
                                        var v = this.getTargetArray(this.props.id), u = v.some(function (t) {
                                                return t === e.currentTarget;
                                            });
                                        if (!u || !this.state.show) {
                                            return;
                                        }
                                    }
                                    e && e.currentTarget && e.currentTarget.removeAttribute && e.currentTarget.removeAttribute('aria-describedby');
                                    var p = function () {
                                        var t = r.state.show;
                                        r.mouseOnToolTip() ? r.listenForTooltipExit() : (r.removeListenerForTooltipExit(), r.setState({ show: false }, function () {
                                            r.removeScrollListener(r.state.currentTarget);
                                            t && c && c(e);
                                        }));
                                    };
                                    this.clearTimer();
                                    o ? this.delayHideLoop = setTimeout(p, parseInt(o, 10)) : p();
                                }
                            }
                        },
                        {
                            key: 'hideTooltipOnScroll',
                            value: function (e, t) {
                                this.hideTooltip(e, t, { isScroll: true });
                            }
                        },
                        {
                            key: 'addScrollListener',
                            value: function (e) {
                                var t = this.isCapture(e);
                                window.addEventListener('scroll', this.hideTooltipOnScroll, t);
                            }
                        },
                        {
                            key: 'removeScrollListener',
                            value: function (e) {
                                var t = this.isCapture(e);
                                window.removeEventListener('scroll', this.hideTooltipOnScroll, t);
                            }
                        },
                        {
                            key: 'updatePosition',
                            value: function (e) {
                                var t = this, r = this.state, n = r.currentEvent, a = r.currentTarget, l = r.place, o = r.desiredPlace, i = r.effect, c = r.offset, s = this.tooltipRef, h = Dl(n, a, s, l, o, i, c);
                                if (h.position && this.props.overridePosition && (h.position = this.props.overridePosition(h.position, n, a, s, l, o, i, c)), h.isNewState) {
                                    return this.setState(h.newState, function () {
                                        t.updatePosition(e);
                                    });
                                }
                                e && 'function' === typeof e && e();
                                s.style.left = h.position.left + 'px';
                                s.style.top = h.position.top + 'px';
                            }
                        },
                        {
                            key: 'clearTimer',
                            value: function () {
                                this.delayShowLoop && (clearTimeout(this.delayShowLoop), this.delayShowLoop = null);
                                this.delayHideLoop && (clearTimeout(this.delayHideLoop), this.delayHideLoop = null);
                                this.delayReshow && (clearTimeout(this.delayReshow), this.delayReshow = null);
                                this.intervalUpdateContent && (clearInterval(this.intervalUpdateContent), this.intervalUpdateContent = null);
                            }
                        },
                        {
                            key: 'hasCustomColors',
                            value: function () {
                                var e = this;
                                return Boolean(Object.keys(this.state.customColors).find(function (t) {
                                    return 'border' !== t && e.state.customColors[t];
                                }) || this.state.border && this.state.customColors.border);
                            }
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e = this, t = this.state, r = t.extraClass, a = t.html, l = t.ariaProps, o = t.disable, c = t.uuid, s = this.getTooltipContent(), h = this.isEmptyTip(s), v = this.props.disableInternalStyle ? '' : to(this.state.uuid, this.state.customColors, this.state.type, this.state.border, this.state.padding, this.state.customRadius), u = '__react_component_tooltip' + ' '.concat(this.state.uuid) + (!this.state.show || o || h ? '' : ' show') + (this.state.border ? ' ' + this.state.borderClass : '') + ' place-'.concat(this.state.place) + ' type-'.concat(this.hasCustomColors() ? 'custom' : this.state.type) + (this.props.delayUpdate ? ' allow_hover' : '') + (this.props.clickable ? ' allow_click' : ''), p = this.props.wrapper;
                                i.supportedWrappers.indexOf(p) < 0 && (p = i.defaultProps.wrapper);
                                var f = [
                                    u,
                                    r
                                ].filter(Boolean).join(' ');
                                if (a) {
                                    var d = ''.concat(s).concat(v ? '\n<style aria-hidden="true">'.concat(v, '</style>') : '');
                                    return n.createElement(p, g({
                                        className: ''.concat(f),
                                        id: this.props.id || c,
                                        ref: function (t) {
                                            return e.tooltipRef = t;
                                        }
                                    }, l, {
                                        'data-id': 'tooltip',
                                        dangerouslySetInnerHTML: { __html: d }
                                    }));
                                }
                                return n.createElement(p, g({
                                    className: ''.concat(f),
                                    id: this.props.id || c
                                }, l, {
                                    ref: function (t) {
                                        return e.tooltipRef = t;
                                    },
                                    'data-id': 'tooltip'
                                }), v && n.createElement('style', {
                                    dangerouslySetInnerHTML: { __html: v },
                                    'aria-hidden': 'true'
                                }), s);
                            }
                        }
                    ], a = [
                        {
                            key: 'propTypes',
                            get: function () {
                                return {
                                    uuid: l().string,
                                    children: l().any,
                                    place: l().string,
                                    type: l().string,
                                    effect: l().string,
                                    offset: l().object,
                                    padding: l().string,
                                    multiline: l().bool,
                                    border: l().bool,
                                    borderClass: l().string,
                                    textColor: l().string,
                                    backgroundColor: l().string,
                                    borderColor: l().string,
                                    arrowColor: l().string,
                                    arrowRadius: l().string,
                                    tooltipRadius: l().string,
                                    insecure: l().bool,
                                    class: l().string,
                                    className: l().string,
                                    id: l().string,
                                    html: l().bool,
                                    delayHide: l().number,
                                    delayUpdate: l().number,
                                    delayShow: l().number,
                                    event: l().string,
                                    eventOff: l().string,
                                    isCapture: l().bool,
                                    globalEventOff: l().string,
                                    getContent: l().any,
                                    afterShow: l().func,
                                    afterHide: l().func,
                                    overridePosition: l().func,
                                    disable: l().bool,
                                    scrollHide: l().bool,
                                    resizeHide: l().bool,
                                    wrapper: l().string,
                                    bodyMode: l().bool,
                                    possibleCustomEvents: l().string,
                                    possibleCustomEventsOff: l().string,
                                    clickable: l().bool,
                                    disableInternalStyle: l().bool
                                };
                            }
                        },
                        {
                            key: 'getDerivedStateFromProps',
                            value: function (e, t) {
                                var r = t.ariaProps, n = Yl(e);
                                return Object.keys(n).some(function (e) {
                                    return n[e] !== r[e];
                                }) ? f(f({}, t), {}, { ariaProps: n }) : null;
                            }
                        }
                    ], r && d(t.prototype, r), a && d(t, a), Object.defineProperty(t, 'prototype', { writable: false }), i;
                }(n.Component), b(Kl, 'defaultProps', {
                    insecure: true,
                    resizeHide: true,
                    wrapper: 'div',
                    clickable: false
                }), b(Kl, 'supportedWrappers', [
                    'div',
                    'span'
                ]), b(Kl, 'displayName', 'ReactTooltip'), (ro = Jl = Kl).prototype.bindRemovalTracker = function () {
                    var e = this, t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    if (null != t) {
                        var r = new t(function (t) {
                            for (var r = 0; r < t.length; r++) {
                                for (var n = t[r], a = 0; a < n.removedNodes.length; a++) {
                                    if (n.removedNodes[a] === e.state.currentTarget) {
                                        return void e.hideTooltip();
                                    }
                                }
                            }
                        });
                        r.observe(window.document, {
                            childList: true,
                            subtree: true
                        });
                        this.removalTracker = r;
                    }
                }, Jl = void (ro.prototype.unbindRemovalTracker = function () {
                    this.removalTracker && (this.removalTracker.disconnect(), this.removalTracker = null);
                }) || Jl)) || Jl) || Jl) || Jl) || Jl) || Jl) || Jl;
        },
        52587: function (e, t, r) {
            'use strict';
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) {
                    n[r] = e[r];
                }
                return n;
            }
            r.d(t, {
                Z: function () {
                    return n;
                }
            });
        },
        50029: function (e, t, r) {
            'use strict';
            function n(e, t, r, n, a, l, o) {
                try {
                    var i = e[l](o), c = i.value;
                } catch (s) {
                    return void r(s);
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a);
            }
            function a(e) {
                return function () {
                    var t = this, r = arguments;
                    return new Promise(function (a, l) {
                        var o = e.apply(t, r);
                        function i(e) {
                            n(o, a, l, i, c, 'next', e);
                        }
                        function c(e) {
                            n(o, a, l, i, c, 'throw', e);
                        }
                        i(void 0);
                    });
                };
            }
            r.d(t, {
                Z: function () {
                    return a;
                }
            });
        },
        16835: function (e, t, r) {
            'use strict';
            r.d(t, {
                Z: function () {
                    return a;
                }
            });
            var n = r(2937);
            function a(e, t) {
                return function (e) {
                    if (Array.isArray(e)) {
                        return e;
                    }
                }(e) || function (e, t) {
                    var r = null == e ? null : 'undefined' !== typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
                    if (null != r) {
                        var n, a, l = [], o = true, i = false;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done) && (l.push(n.value), !t || l.length !== t); o = true) {
                            }
                        } catch (c) {
                            i = true;
                            a = c;
                        } finally {
                            try {
                                o || null == r.return || r.return();
                            } finally {
                                if (i) {
                                    throw a;
                                }
                            }
                        }
                        return l;
                    }
                }(e, t) || (0, n.Z)(e, t) || (function () {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }());
            }
        },
        27812: function (e, t, r) {
            'use strict';
            r.d(t, {
                Z: function () {
                    return l;
                }
            });
            var n = r(52587);
            var a = r(2937);
            function l(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        return (0, n.Z)(e);
                    }
                }(e) || function (e) {
                    if ('undefined' !== typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator']) {
                        return Array.from(e);
                    }
                }(e) || (0, a.Z)(e) || (function () {
                    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }());
            }
        },
        2937: function (e, t, r) {
            'use strict';
            r.d(t, {
                Z: function () {
                    return a;
                }
            });
            var n = r(52587);
            function a(e, t) {
                if (e) {
                    if ('string' === typeof e) {
                        return (0, n.Z)(e, t);
                    }
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(e, t) : void 0;
                }
            }
        }
    }
]);