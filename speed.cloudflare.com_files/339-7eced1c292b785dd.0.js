(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [339],
    {
        12346: function (t, e, n) {
            'use strict';
            n.d(e, {
                eu: function () {
                    return Ie;
                },
                xN: function () {
                    return Te;
                }
            });
            var r = n(67294), a = n(45697), o = n.n(a);
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    'value' in r && (r.writable = true);
                    Object.defineProperty(t, r.key, r);
                    
                }
            }
            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            function s() {
                return s = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                }, s.apply(this, arguments);
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }));
                    n.push.apply(n, r);
                    
                }
                return n;
            }
            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                }, u(t);
            }
            function f(t, e) {
                return f = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t;
                }, f(t, e);
            }
            function p(t, e) {
                return !e || 'object' !== typeof e && 'function' !== typeof e ? function (t) {
                    if (void 0 === t) {
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    }
                    return t;
                }(t) : e;
            }
            function h(t) {
                return function () {
                    return t;
                };
            }
            var d = function () {
            };
            d.thatReturns = h;
            d.thatReturnsFalse = h(false);
            d.thatReturnsTrue = h(true);
            d.thatReturnsNull = h(null);
            d.thatReturnsThis = function () {
                return this;
            };
            d.thatReturnsArgument = function (t) {
                return t;
            };
            
            var v = d;
            var m = function (t, e, n, r, a, o, i, l) {
                    if (!t) {
                        var s;
                        if (void 0 === e) {
                            s = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
                        } else {
                            var c = [
                                    n,
                                    r,
                                    a,
                                    o,
                                    i,
                                    l
                                ], u = 0;
                            (s = new Error(e.replace(/%s/g, function () {
                                return c[u++];
                            }))).name = 'Invariant Violation';
                        }
                        throw s.framesToPop = 1, s;
                    }
                }, b = Object.getOwnPropertySymbols, g = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
            function w(t) {
                if (null === t || void 0 === t) {
                    throw new TypeError('Object.assign cannot be called with null or undefined');
                }
                return Object(t);
            }
            (function () {
                try {
                    if (!Object.assign) {
                        return false;
                    }
                    var t = new String('abc');
                    if (t[5] = 'de', '5' === Object.getOwnPropertyNames(t)[0]) {
                        return false;
                    }
                    for (var e = {
                                innerHTML: t,
                                t: e[t].bind(e),
                                propTypes: {
                                    width: o().number,
                                    autoSize: o().bool
                                }
                            }, n = 0; n < 10; n++) {
                        e['_' + String.fromCharCode(n)] = n;
                    }
                    if ('0123456789' !== Object.getOwnPropertyNames(e).map(function (t) {
                            return e[t];
                        }).join('')) {
                        return false;
                    }
                    var r = { t: t };
                    return 'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                        
                    }), 'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('');
                } catch (a) {
                    return false;
                }
            }()) && Object.assign;
            
            var x, M, E = (x = function (t) {
                    t.exports = (function () {
                        function t(t, e, n, r, a, o) {
                            o !== 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' && m(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                        }
                        function e() {
                            return t;
                        }
                        t.isRequired = t;
                        var n = {
                            array: t,
                            bool: t,
                            func: t,
                            number: t,
                            object: t,
                            string: t,
                            symbol: t,
                            any: t,
                            arrayOf: e,
                            element: t,
                            instanceOf: e,
                            node: t,
                            objectOf: e,
                            oneOf: e,
                            oneOfType: e,
                            shape: e,
                            exact: e
                        };
                        return n.checkPropTypes = v, n.PropTypes = n, n;
                    }());
                }, x(M = { exports: {} }, M.exports), M.exports), j = function (t, e) {
                    var n;
                    'function' === typeof window.CustomEvent ? n = new window.CustomEvent(t, { detail: e }) : ((n = document.createEvent('Event')).initEvent(t, false, true), n.detail = e);
                    window.dispatchEvent(n);
                    
                };
            var _ = function (t, e) {
                    var n = this.state.show, r = this.props.id, a = this.isCapture(e.currentTarget), o = e.currentTarget.getAttribute('currentItem');
                    a || e.stopPropagation();
                    n && 'true' === o ? t || this.hideTooltip(e) : (e.currentTarget.setAttribute('currentItem', 'true'), P(e.currentTarget, this.getTargetArray(r)), this.showTooltip(e));
                    
                }, P = function (t, e) {
                    for (var n = 0; n < e.length; n++) {
                        t !== e[n] ? e[n].setAttribute('currentItem', 'false') : e[n].setAttribute('currentItem', 'true');
                    }
                }, z = {
                    id: '9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf',
                    set: function (t, e, n) {
                        this.id in t ? t[this.id][e] = n : Object.defineProperty(t, this.id, {
                            configurable: true,
                            value: l({}, e, n)
                        });
                    },
                    get: function (t, e) {
                        var n = t[this.id];
                        if (void 0 !== n) {
                            return n[e];
                        }
                    }
                };
            var S = function (t, e, n) {
                    var r = e.respectEffect, a = void 0 !== r && r, o = e.customEvent, i = void 0 !== o && o, l = this.props.id, s = n.target.getAttribute('data-tip') || null, c = n.target.getAttribute('data-for') || null, u = n.target;
                    if (!this.isCustomEvent(u) || i) {
                        var f = null == l && null == c || c === l;
                        if (null != s && (!a || 'float' === this.getEffect(u)) && f) {
                            var p = function (t) {
                                var e = {};
                                for (var n in t)
                                    'function' === typeof t[n] ? e[n] = t[n].bind(t) : e[n] = t[n];
                                return e;
                            }(n);
                            p.currentTarget = u;
                            t(p);
                            
                        }
                    }
                }, L = function (t, e) {
                    var n = {};
                    return t.forEach(function (t) {
                        var r = t.getAttribute(e);
                        r && r.split(' ').forEach(function (t) {
                            return n[t] = true;
                        });
                    }), n;
                }, A = function () {
                    return document.getElementsByTagName('body')[0];
                };
            function T(t, e, n, r, a, o, i) {
                for (var l = N(n), s = l.width, c = l.height, u = N(e), f = u.width, p = u.height, h = V(t, e, o), d = h.mouseX, v = h.mouseY, m = D(o, f, p, s, c), b = B(i), g = b.extraOffset_X, y = b.extraOffset_Y, w = window.innerWidth, O = window.innerHeight, x = I(n), M = x.parentTop, E = x.parentLeft, k = function (t) {
                            var e = m[t].l;
                            return d + e + g;
                        }, j = function (t) {
                            var e = m[t].t;
                            return v + e + y;
                        }, _ = function (t) {
                            return function (t) {
                                var e = m[t].r;
                                return d + e + g;
                            }(t) > w;
                        }, P = function (t) {
                            return function (t) {
                                var e = m[t].b;
                                return v + e + y;
                            }(t) > O;
                        }, z = function (t) {
                            return function (t) {
                                return k(t) < 0;
                            }(t) || _(t) || function (t) {
                                return j(t) < 0;
                            }(t) || P(t);
                        }, S = function (t) {
                            return !z(t);
                        }, L = [
                            'top',
                            'bottom',
                            'left',
                            'right'
                        ], A = [], T = 0; T < 4; T++) {
                    var C = L[T];
                    S(C) && A.push(C);
                }
                var H, R = false, W = a !== r;
                return S(a) && W ? (R = true, H = a) : A.length > 0 && W && z(a) && z(r) && (R = true, H = A[0]), R ? {
                    isNewState: true,
                    newState: { place: H }
                } : {
                    isNewState: false,
                    position: {
                        left: parseInt(k(r) - E, 10),
                        top: parseInt(j(r) - M, 10)
                    }
                };
            }
            var C, H, R, N = function (t) {
                    var e = t.getBoundingClientRect(), n = e.height, r = e.width;
                    return {
                        height: parseInt(n, 10),
                        width: parseInt(r, 10)
                    };
                }, V = function (t, e, n) {
                    var r = e.getBoundingClientRect(), a = r.top, o = r.left, i = N(e), l = i.width, s = i.height;
                    return 'float' === n ? {
                        mouseX: t.clientX,
                        mouseY: t.clientY
                    } : {
                        mouseX: o + l / 2,
                        mouseY: a + s / 2
                    };
                }, D = function (t, e, n, r, a) {
                    var o, i, l, s;
                    return 'float' === t ? (o = {
                        l: -r / 2,
                        r: r / 2,
                        t: -(a + 3 + 2),
                        b: -3
                    }, l = {
                        l: -r / 2,
                        r: r / 2,
                        t: 15,
                        b: a + 3 + 2 + 12
                    }, s = {
                        l: -(r + 3 + 2),
                        r: -3,
                        t: -a / 2,
                        b: a / 2
                    }, i = {
                        l: 3,
                        r: r + 3 + 2,
                        t: -a / 2,
                        b: a / 2
                    }) : 'solid' === t && (o = {
                        l: -r / 2,
                        r: r / 2,
                        t: -(n / 2 + a + 2),
                        b: -n / 2
                    }, l = {
                        l: -r / 2,
                        r: r / 2,
                        t: n / 2,
                        b: n / 2 + a + 2
                    }, s = {
                        l: -(r + e / 2 + 2),
                        r: -e / 2,
                        t: -a / 2,
                        b: a / 2
                    }, i = {
                        l: e / 2,
                        r: r + e / 2 + 2,
                        t: -a / 2,
                        b: a / 2
                    }), {
                        top: o,
                        bottom: l,
                        left: s,
                        right: i
                    };
                }, B = function (t) {
                    var e = 0, n = 0;
                    for (var r in ('[object String]' === Object.prototype.toString.apply(t) && (t = JSON.parse(t.toString().replace(/\'/g, '"'))), t))
                        'top' === r ? n -= parseInt(t[r], 10) : 'bottom' === r ? n += parseInt(t[r], 10) : 'left' === r ? e -= parseInt(t[r], 10) : 'right' === r && (e += parseInt(t[r], 10));
                    return {
                        extraOffset_X: e,
                        extraOffset_Y: n
                    };
                }, I = function (t) {
                    for (var e = t; e && 'none' === window.getComputedStyle(e).getPropertyValue('transform');) {
                        e = e.parentElement;
                    }
                    return {
                        parentTop: e && e.getBoundingClientRect().top || 0,
                        parentLeft: e && e.getBoundingClientRect().left || 0
                    };
                };
            function W(t, e, n, a) {
                if (e) {
                    return e;
                }
                if (void 0 !== n && null !== n) {
                    return n;
                }
                if (null === n) {
                    return null;
                }
                
                return a && 'false' !== a && /<br\s*\/?>/.test(t) ? t.split(/<br\s*\/?>/).map(function (t, e) {
                    return r.createElement('span', {
                        key: e,
                        className: 'multi-line'
                    }, t);
                }) : t;
            }
            function F(t) {
                var e = { n: t[n] };
                return Object.keys(t).filter(function (t) {
                    return /(^aria-\w+$|^role$)/.test(t);
                }).forEach(function (n) {
                    
                }), e;
            }
            !function (t) {
                if (t && 'undefined' !== typeof window) {
                    var e = document.createElement('style');
                    e.setAttribute('type', 'text/css');
                    
                    document.head.appendChild(e);
                    
                }
            }('.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip:before, .__react_component_tooltip:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0px;\n  margin-left: 0px;\n  visibility: visible;\n}\n.__react_component_tooltip.type-dark {\n  color: #fff;\n  background-color: #222;\n}\n.__react_component_tooltip.type-dark.place-top:after {\n  border-top-color: #222;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-bottom:after {\n  border-bottom-color: #222;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-left:after {\n  border-left-color: #222;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-right:after {\n  border-right-color: #222;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-dark.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-success {\n  color: #fff;\n  background-color: #8DC572;\n}\n.__react_component_tooltip.type-success.place-top:after {\n  border-top-color: #8DC572;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-success.place-bottom:after {\n  border-bottom-color: #8DC572;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-success.place-left:after {\n  border-left-color: #8DC572;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-success.place-right:after {\n  border-right-color: #8DC572;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-success.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning {\n  color: #fff;\n  background-color: #F0AD4E;\n}\n.__react_component_tooltip.type-warning.place-top:after {\n  border-top-color: #F0AD4E;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-bottom:after {\n  border-bottom-color: #F0AD4E;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-left:after {\n  border-left-color: #F0AD4E;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-right:after {\n  border-right-color: #F0AD4E;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-warning.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-error {\n  color: #fff;\n  background-color: #BE6464;\n}\n.__react_component_tooltip.type-error.place-top:after {\n  border-top-color: #BE6464;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-error.place-bottom:after {\n  border-bottom-color: #BE6464;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-error.place-left:after {\n  border-left-color: #BE6464;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-error.place-right:after {\n  border-right-color: #BE6464;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-error.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-info {\n  color: #fff;\n  background-color: #337AB7;\n}\n.__react_component_tooltip.type-info.place-top:after {\n  border-top-color: #337AB7;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-info.place-bottom:after {\n  border-bottom-color: #337AB7;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-info.place-left:after {\n  border-left-color: #337AB7;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-info.place-right:after {\n  border-right-color: #337AB7;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-info.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-light {\n  color: #222;\n  background-color: #fff;\n}\n.__react_component_tooltip.type-light.place-top:after {\n  border-top-color: #fff;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-light.place-bottom:after {\n  border-bottom-color: #fff;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-light.place-left:after {\n  border-left-color: #fff;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-light.place-right:after {\n  border-right-color: #fff;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-light.border {\n  border: 1px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-top:before {\n  border-top: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-bottom:before {\n  border-bottom: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-left:before {\n  border-left: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-right:before {\n  border-right: 8px solid #222;\n}\n.__react_component_tooltip.place-top {\n  margin-top: -10px;\n}\n.__react_component_tooltip.place-top:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-top:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  bottom: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n.__react_component_tooltip.place-bottom {\n  margin-top: 10px;\n}\n.__react_component_tooltip.place-bottom:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  top: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n.__react_component_tooltip.place-left {\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left:before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-left:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  right: -6px;\n  top: 50%;\n  margin-top: -4px;\n}\n.__react_component_tooltip.place-right {\n  margin-left: 10px;\n}\n.__react_component_tooltip.place-right:before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  left: -6px;\n  top: 50%;\n  margin-top: -4px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0px;\n  text-align: center;\n}');
            var U, Z = function (t) {
                    t.hide = function (t) {
                        j('__react_tooltip_hide_event', { target: t });
                    };
                    t.rebuild = function () {
                        j('__react_tooltip_rebuild_event');
                    };
                    t.show = function (t) {
                        j('__react_tooltip_show_event', { target: t });
                    };
                    t.prototype.globalRebuild = function () {
                        this.mount && (this.unbindListener(), this.bindListener());
                    };
                    t.prototype.globalShow = function (t) {
                        if (this.mount) {
                            var e = { currentTarget: t.detail.target };
                            this.showTooltip(e, true);
                        }
                    };
                    t.prototype.globalHide = function (t) {
                        if (this.mount) {
                            var e = !!(t && t.detail && t.detail.target);
                            this.hideTooltip({ currentTarget: e && t.detail.target }, e);
                        }
                    };
                    
                }(C = function (t) {
                    t.prototype.bindWindowEvents = function (t) {
                        window.removeEventListener('__react_tooltip_hide_event', this.globalHide);
                        window.addEventListener('__react_tooltip_hide_event', this.globalHide, false);
                        window.removeEventListener('__react_tooltip_rebuild_event', this.globalRebuild);
                        window.addEventListener('__react_tooltip_rebuild_event', this.globalRebuild, false);
                        window.removeEventListener('__react_tooltip_show_event', this.globalShow);
                        window.addEventListener('__react_tooltip_show_event', this.globalShow, false);
                        t && (window.removeEventListener('resize', this.onWindowResize), window.addEventListener('resize', this.onWindowResize, false));
                        
                    };
                    t.prototype.unbindWindowEvents = function () {
                        window.removeEventListener('__react_tooltip_hide_event', this.globalHide);
                        window.removeEventListener('__react_tooltip_rebuild_event', this.globalRebuild);
                        window.removeEventListener('__react_tooltip_show_event', this.globalShow);
                        window.removeEventListener('resize', this.onWindowResize);
                        
                    };
                    t.prototype.onWindowResize = function () {
                        this.mount && this.hideTooltip();
                    };
                    
                }(C = function (t) {
                    t.prototype.isCustomEvent = function (t) {
                        return this.state.event || !!t.getAttribute('data-event');
                    };
                    t.prototype.customBindListener = function (t) {
                        var e = this, n = this.state, r = n.event, a = n.eventOff, o = t.getAttribute('data-event') || r, i = t.getAttribute('data-event-off') || a;
                        o.split(' ').forEach(function (n) {
                            t.removeEventListener(n, z.get(t, n));
                            var r = _.bind(e, i);
                            z.set(t, n, r);
                            t.addEventListener(n, r, false);
                            
                        });
                        i && i.split(' ').forEach(function (n) {
                            t.removeEventListener(n, e.hideTooltip);
                            t.addEventListener(n, e.hideTooltip, false);
                            
                        });
                        
                    };
                    t.prototype.customUnbindListener = function (t) {
                        var e = this.state, n = e.event, r = e.eventOff, a = n || t.getAttribute('data-event'), o = r || t.getAttribute('data-event-off');
                        t.removeEventListener(a, z.get(t, n));
                        o && t.removeEventListener(o, this.hideTooltip);
                        
                    };
                    
                }(C = function (t) {
                    t.prototype.isCapture = function (t) {
                        return t && 'true' === t.getAttribute('data-iscapture') || this.props.isCapture || false;
                    };
                }(C = function (t) {
                    t.prototype.getEffect = function (t) {
                        return t.getAttribute('data-effect') || this.props.effect || 'float';
                    };
                }(C = function (t) {
                    t.prototype.isBodyMode = function () {
                        return !!this.props.bodyMode;
                    };
                    t.prototype.bindBodyListener = function (t) {
                        var e = this, n = this.state, r = n.event, a = n.eventOff, o = n.possibleCustomEvents, i = n.possibleCustomEventsOff, l = A(), s = L(t, 'data-event'), c = L(t, 'data-event-off');
                        null != r && (s[r] = true);
                        null != a && (c[a] = true);
                        o.split(' ').forEach(function (t) {
                            return s[t] = true;
                        });
                        i.split(' ').forEach(function (t) {
                            return c[t] = true;
                        });
                        this.unbindBodyListener(l);
                        
                        var u = this.bodyModeListeners = {};
                        for (var f in (null == r && (u.mouseover = S.bind(this, this.showTooltip, {}), u.mousemove = S.bind(this, this.updateTooltip, { respectEffect: true }), u.mouseout = S.bind(this, this.hideTooltip, {})), s))
                            u[f] = S.bind(this, function (t) {
                                var n = t.currentTarget.getAttribute('data-event-off') || a;
                                _.call(e, n, t);
                            }, { customEvent: true });
                        for (var p in c)
                            u[p] = S.bind(this, this.hideTooltip, { customEvent: true });
                        for (var h in u)
                            l.addEventListener(h, u[h]);
                    };
                    t.prototype.unbindBodyListener = function (t) {
                        t = t || A();
                        var e = this.bodyModeListeners;
                        for (var n in e)
                            t.removeEventListener(n, e[n]);
                    };
                    
                }((R = H = function (t) {
                    function e(t) {
                        var n;
                        return function (t, e) {
                            if (!(t instanceof e)) {
                                throw new TypeError('Cannot call a class as a function');
                            }
                        }(this, e), (n = p(this, u(e).call(this, t))).state = {
                            place: t.place || 'top',
                            desiredPlace: t.place || 'top',
                            type: 'dark',
                            effect: 'float',
                            show: false,
                            border: false,
                            offset: {},
                            extraClass: '',
                            html: false,
                            delayHide: 0,
                            delayShow: 0,
                            event: t.event || null,
                            eventOff: t.eventOff || null,
                            currentEvent: null,
                            currentTarget: null,
                            ariaProps: F(t),
                            isEmptyTip: false,
                            disable: false,
                            possibleCustomEvents: t.possibleCustomEvents || '',
                            possibleCustomEventsOff: t.possibleCustomEventsOff || '',
                            originTooltip: null,
                            isMultiline: false
                        }, n.bind([
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
                        ]), n.mount = true, n.delayShowLoop = null, n.delayHideLoop = null, n.delayReshow = null, n.intervalUpdateContent = null, n;
                    }
                    var n, a, o;
                    return function (t, e) {
                        if ('function' !== typeof e && null !== e) {
                            throw new TypeError('Super expression must either be null or a function');
                        }
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: true,
                                configurable: true
                            }
                        });
                        e && f(t, e);
                        
                    }(e, t), n = e, a = [
                        {
                            key: 'bind',
                            value: function (t) {
                                var e = this;
                                t.forEach(function (t) {
                                    
                                });
                            }
                        },
                        {
                            key: 'componentDidMount',
                            value: function () {
                                var t = this.props, e = (t.insecure, t.resizeHide);
                                this.bindListener();
                                this.bindWindowEvents(e);
                                
                            }
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function () {
                                this.mount = false;
                                this.clearTimer();
                                this.unbindListener();
                                this.removeScrollListener();
                                this.unbindWindowEvents();
                                
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
                            value: function (t) {
                                var e;
                                if (t) {
                                    var n = t.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                                    e = document.querySelectorAll('[data-tip][data-for="'.concat(n, '"]'));
                                } else {
                                    e = document.querySelectorAll('[data-tip]:not([data-for])');
                                }
                                return function (t) {
                                    var e = t.length;
                                    return t.hasOwnProperty ? Array.prototype.slice.call(t) : new Array(e).fill().map(function (e) {
                                        return t[e];
                                    });
                                }(e);
                            }
                        },
                        {
                            key: 'bindListener',
                            value: function () {
                                var t = this, e = this.props, n = e.id, r = e.globalEventOff, a = e.isCapture, o = this.getTargetArray(n);
                                o.forEach(function (e) {
                                    null === e.getAttribute('currentItem') && e.setAttribute('currentItem', 'false');
                                    t.unbindBasicListener(e);
                                    t.isCustomEvent(e) && t.customUnbindListener(e);
                                    
                                });
                                this.isBodyMode() ? this.bindBodyListener(o) : o.forEach(function (e) {
                                    var n = t.isCapture(e), r = t.getEffect(e);
                                    t.isCustomEvent(e) ? t.customBindListener(e) : (e.addEventListener('mouseenter', t.showTooltip, n), 'float' === r && e.addEventListener('mousemove', t.updateTooltip, n), e.addEventListener('mouseleave', t.hideTooltip, n));
                                });
                                r && (window.removeEventListener(r, this.hideTooltip), window.addEventListener(r, this.hideTooltip, a));
                                this.bindRemovalTracker();
                                
                            }
                        },
                        {
                            key: 'unbindListener',
                            value: function () {
                                var t = this, e = this.props, n = e.id, r = e.globalEventOff;
                                this.isBodyMode() ? this.unbindBodyListener() : this.getTargetArray(n).forEach(function (e) {
                                    t.unbindBasicListener(e);
                                    t.isCustomEvent(e) && t.customUnbindListener(e);
                                    
                                });
                                r && window.removeEventListener(r, this.hideTooltip);
                                this.unbindRemovalTracker();
                                
                            }
                        },
                        {
                            key: 'unbindBasicListener',
                            value: function (t) {
                                var e = this.isCapture(t);
                                t.removeEventListener('mouseenter', this.showTooltip, e);
                                t.removeEventListener('mousemove', this.updateTooltip, e);
                                t.removeEventListener('mouseleave', this.hideTooltip, e);
                                
                            }
                        },
                        {
                            key: 'getTooltipContent',
                            value: function () {
                                var t, e = this.props, n = e.getContent, r = e.children;
                                return n && (t = Array.isArray(n) ? n[0] && n[0](this.state.originTooltip) : n(this.state.originTooltip)), W(this.state.originTooltip, r, t, this.state.isMultiline);
                            }
                        },
                        {
                            key: 'isEmptyTip',
                            value: function (t) {
                                return 'string' === typeof t && '' === t || null === t;
                            }
                        },
                        {
                            key: 'showTooltip',
                            value: function (t, e) {
                                if (!e || this.getTargetArray(this.props.id).some(function (e) {
                                        return e === t.currentTarget;
                                    })) {
                                    var n = this.props, r = n.multiline, a = n.getContent, o = t.currentTarget.getAttribute('data-tip'), i = t.currentTarget.getAttribute('data-multiline') || r || false, l = t instanceof window.FocusEvent || e, s = true;
                                    t.currentTarget.getAttribute('data-scroll-hide') ? s = 'true' === t.currentTarget.getAttribute('data-scroll-hide') : null != this.props.scrollHide && (s = this.props.scrollHide);
                                    var c = t.currentTarget.getAttribute('data-place') || this.props.place || 'top', u = l ? 'solid' : this.getEffect(t.currentTarget), f = t.currentTarget.getAttribute('data-offset') || this.props.offset || {}, p = T(t, t.currentTarget, this.tooltipRef, c, c, u, f);
                                    p.position && this.props.overridePosition && (p.position = this.props.overridePosition(p.position, t.currentTarget, this.tooltipRef, c, c, u, f));
                                    var h = p.isNewState ? p.newState.place : c;
                                    this.clearTimer();
                                    var d = t.currentTarget, v = this.state.show ? d.getAttribute('data-delay-update') || this.props.delayUpdate : 0, m = this, b = function () {
                                            m.setState({
                                                originTooltip: o,
                                                isMultiline: i,
                                                desiredPlace: c,
                                                place: h,
                                                type: d.getAttribute('data-type') || m.props.type || 'dark',
                                                effect: u,
                                                offset: f,
                                                html: d.getAttribute('data-html') ? 'true' === d.getAttribute('data-html') : m.props.html || false,
                                                delayShow: d.getAttribute('data-delay-show') || m.props.delayShow || 0,
                                                delayHide: d.getAttribute('data-delay-hide') || m.props.delayHide || 0,
                                                delayUpdate: d.getAttribute('data-delay-update') || m.props.delayUpdate || 0,
                                                border: d.getAttribute('data-border') ? 'true' === d.getAttribute('data-border') : m.props.border || false,
                                                extraClass: d.getAttribute('data-class') || m.props.class || m.props.className || '',
                                                disable: d.getAttribute('data-tip-disable') ? 'true' === d.getAttribute('data-tip-disable') : m.props.disable || false,
                                                currentTarget: d
                                            }, function () {
                                                s && m.addScrollListener(m.state.currentTarget);
                                                m.updateTooltip(t);
                                                a && Array.isArray(a) && (m.intervalUpdateContent = setInterval(function () {
                                                    if (m.mount) {
                                                        var t = m.props.getContent, e = W(o, '', t[0](), i), n = m.isEmptyTip(e);
                                                        m.setState({ isEmptyTip: n });
                                                        m.updatePosition();
                                                        
                                                    }
                                                }, a[1]));
                                                
                                            });
                                        };
                                    v ? this.delayReshow = setTimeout(b, v) : b();
                                }
                            }
                        },
                        {
                            key: 'updateTooltip',
                            value: function (t) {
                                var e = this, n = this.state, r = n.delayShow, a = n.disable, o = this.props.afterShow, i = this.getTooltipContent(), l = parseInt(r, 10), s = t.currentTarget || t.target;
                                if (!this.mouseOnToolTip() && !this.isEmptyTip(i) && !a) {
                                    var c = function () {
                                        if (Array.isArray(i) && i.length > 0 || i) {
                                            var n = !e.state.show;
                                            e.setState({
                                                currentEvent: t,
                                                currentTarget: s,
                                                show: true
                                            }, function () {
                                                e.updatePosition();
                                                n && o && o(t);
                                                
                                            });
                                        }
                                    };
                                    clearTimeout(this.delayShowLoop);
                                    r ? this.delayShowLoop = setTimeout(c, l) : c();
                                    
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
                            value: function (t, e) {
                                var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isScroll: false }, a = this.state.disable, o = r.isScroll, i = o ? 0 : this.state.delayHide, l = this.props.afterHide, s = this.getTooltipContent();
                                if (this.mount && !this.isEmptyTip(s) && !a) {
                                    if (e) {
                                        var c = this.getTargetArray(this.props.id), u = c.some(function (e) {
                                                return e === t.currentTarget;
                                            });
                                        if (!u || !this.state.show) {
                                            return;
                                        }
                                    }
                                    var f = function () {
                                        var e = n.state.show;
                                        n.mouseOnToolTip() ? n.listenForTooltipExit() : (n.removeListenerForTooltipExit(), n.setState({ show: false }, function () {
                                            n.removeScrollListener();
                                            e && l && l(t);
                                            
                                        }));
                                    };
                                    this.clearTimer();
                                    i ? this.delayHideLoop = setTimeout(f, parseInt(i, 10)) : f();
                                    
                                }
                            }
                        },
                        {
                            key: 'hideTooltipOnScroll',
                            value: function (t, e) {
                                this.hideTooltip(t, e, { isScroll: true });
                            }
                        },
                        {
                            key: 'addScrollListener',
                            value: function (t) {
                                var e = this.isCapture(t);
                                window.addEventListener('scroll', this.hideTooltipOnScroll, e);
                            }
                        },
                        {
                            key: 'removeScrollListener',
                            value: function () {
                                window.removeEventListener('scroll', this.hideTooltipOnScroll);
                            }
                        },
                        {
                            key: 'updatePosition',
                            value: function () {
                                var t = this, e = this.state, n = e.currentEvent, r = e.currentTarget, a = e.place, o = e.desiredPlace, i = e.effect, l = e.offset, s = this.tooltipRef, c = T(n, r, s, a, o, i, l);
                                if (c.position && this.props.overridePosition && (c.position = this.props.overridePosition(c.position, n, r, s, a, o, i, l)), c.isNewState) {
                                    return this.setState(c.newState, function () {
                                        t.updatePosition();
                                    });
                                }
                                s.style.left = c.position.left + 'px';
                                s.style.top = c.position.top + 'px';
                                
                            }
                        },
                        {
                            key: 'clearTimer',
                            value: function () {
                                clearTimeout(this.delayShowLoop);
                                clearTimeout(this.delayHideLoop);
                                clearTimeout(this.delayReshow);
                                clearInterval(this.intervalUpdateContent);
                                
                            }
                        },
                        {
                            key: 'render',
                            value: function () {
                                var t = this, n = this.state, a = n.extraClass, o = n.html, i = n.ariaProps, l = n.disable, c = this.getTooltipContent(), u = this.isEmptyTip(c), f = '__react_component_tooltip' + (!this.state.show || l || u ? '' : ' show') + (this.state.border ? ' border' : '') + ' place-'.concat(this.state.place) + ' type-'.concat(this.state.type) + (this.props.delayUpdate ? ' allow_hover' : '') + (this.props.clickable ? ' allow_click' : ''), p = this.props.wrapper;
                                e.supportedWrappers.indexOf(p) < 0 && (p = e.defaultProps.wrapper);
                                var h = [
                                    f,
                                    a
                                ].filter(Boolean).join(' ');
                                return o ? r.createElement(p, s({
                                    className: h,
                                    id: this.props.id,
                                    ref: function (e) {
                                        return t.tooltipRef = e;
                                    }
                                }, i, {
                                    'data-id': 'tooltip',
                                    dangerouslySetInnerHTML: { __html: c }
                                })) : r.createElement(p, s({
                                    className: h,
                                    id: this.props.id
                                }, i, {
                                    ref: function (e) {
                                        return t.tooltipRef = e;
                                    },
                                    'data-id': 'tooltip'
                                }), c);
                            }
                        }
                    ], o = [{
                            key: 'getDerivedStateFromProps',
                            value: function (t, e) {
                                var n = e.ariaProps, r = F(t);
                                return Object.keys(r).some(function (t) {
                                    return r[t] !== n[t];
                                }) ? function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? c(Object(n), true).forEach(function (e) {
                                            l(t, e, n[e]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        });
                                    }
                                    return t;
                                }({}, e, { ariaProps: r }) : null;
                            }
                        }], a && i(n.prototype, a), o && i(n, o), e;
                }(r.Component), l(H, 'propTypes', {
                    children: E.any,
                    place: E.string,
                    type: E.string,
                    effect: E.string,
                    offset: E.object,
                    multiline: E.bool,
                    border: E.bool,
                    insecure: E.bool,
                    class: E.string,
                    className: E.string,
                    id: E.string,
                    html: E.bool,
                    delayHide: E.number,
                    delayUpdate: E.number,
                    delayShow: E.number,
                    event: E.string,
                    eventOff: E.string,
                    watchWindow: E.bool,
                    isCapture: E.bool,
                    globalEventOff: E.string,
                    getContent: E.any,
                    afterShow: E.func,
                    afterHide: E.func,
                    overridePosition: E.func,
                    disable: E.bool,
                    scrollHide: E.bool,
                    resizeHide: E.bool,
                    wrapper: E.string,
                    bodyMode: E.bool,
                    possibleCustomEvents: E.string,
                    possibleCustomEventsOff: E.string,
                    clickable: E.bool
                }), l(H, 'defaultProps', {
                    insecure: true,
                    resizeHide: true,
                    wrapper: 'div',
                    clickable: false
                }), l(H, 'supportedWrappers', [
                    'div',
                    'span'
                ]), l(H, 'displayName', 'ReactTooltip'), (U = C = R).prototype.bindRemovalTracker = function () {
                    var t = this, e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    if (null != e) {
                        var n = new e(function (e) {
                            for (var n = 0; n < e.length; n++) {
                                for (var r = e[n], a = 0; a < r.removedNodes.length; a++) {
                                    if (r.removedNodes[a] === t.state.currentTarget) {
                                        return void t.hideTooltip();
                                    }
                                }
                            }
                        });
                        n.observe(window.document, {
                            childList: true,
                            subtree: true
                        });
                        this.removalTracker = n;
                        
                    }
                }, C = void (U.prototype.unbindRemovalTracker = function () {
                    this.removalTracker && (this.removalTracker.disconnect(), this.removalTracker = null);
                }) || C)) || C) || C) || C) || C) || C) || C, q = Z, $ = n(35272);
            function Y(t, e) {
                if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0) {
                    return null;
                }
                var n, r = t.slice(0, n);
                return [
                    r.length > 1 ? r[0] + r.slice(2) : r,
                    +t.slice(n + 1)
                ];
            }
            var X;
            function G(t) {
                if (!(e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i.exec(t))) {
                    throw new Error('invalid format: ' + t);
                }
                var e;
                return new K({
                    fill: e[1],
                    align: e[2],
                    sign: e[3],
                    symbol: e[4],
                    zero: e[5],
                    width: e[6],
                    comma: e[7],
                    precision: e[8] && e[8].slice(1),
                    trim: e[9],
                    type: e[10]
                });
            }
            function K(t) {
                this.fill = void 0 === t.fill ? ' ' : t.fill + '';
                this.align = void 0 === t.align ? '>' : t.align + '';
                this.sign = void 0 === t.sign ? '-' : t.sign + '';
                this.symbol = void 0 === t.symbol ? '' : t.symbol + '';
                this.zero = !!t.zero;
                this.width = void 0 === t.width ? void 0 : +t.width;
                this.comma = !!t.comma;
                this.precision = void 0 === t.precision ? void 0 : +t.precision;
                this.trim = !!t.trim;
                this.type = void 0 === t.type ? '' : t.type + '';
                
            }
            function Q(t, e) {
                var n = Y(t, e);
                if (!n) {
                    return t + '';
                }
                var r = n[0], a = n[1];
                return a < 0 ? '0.' + new Array(-a).join('0') + r : r.length > a + 1 ? r.slice(0, a + 1) + '.' + r.slice(a + 1) : r + new Array(a - r.length + 2).join('0');
            }
            G.prototype = K.prototype;
            K.prototype.toString = function () {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? '0' : '') + (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) + (this.comma ? ',' : '') + (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) + (this.trim ? '~' : '') + this.type;
            };
            
            var tt = {
                '%': function (t, e) {
                    return (100 * t).toFixed(e);
                },
                b: function (t) {
                    return Math.round(t).toString(2);
                },
                c: function (t) {
                    return t + '';
                },
                d: function (t) {
                    return Math.abs(t = Math.round(t)) >= 1e+21 ? t.toLocaleString('en').replace(/,/g, '') : t.toString(10);
                },
                e: function (t, e) {
                    return t.toExponential(e);
                },
                f: function (t, e) {
                    return t.toFixed(e);
                },
                g: function (t, e) {
                    return t.toPrecision(e);
                },
                o: function (t) {
                    return Math.round(t).toString(8);
                },
                p: function (t, e) {
                    return Q(100 * t, e);
                },
                r: Q,
                s: function (t, e) {
                    var n = Y(t, e);
                    if (!n) {
                        return t + '';
                    }
                    var r = n[0], a = n[1], o = a - (X = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1, i = r.length;
                    return o === i ? r : o > i ? r + new Array(o - i + 1).join('0') : o > 0 ? r.slice(0, o) + '.' + r.slice(o) : '0.' + new Array(1 - o).join('0') + Y(t, Math.max(0, e + o - 1))[0];
                },
                X: function (t) {
                    return Math.round(t).toString(16).toUpperCase();
                },
                x: function (t) {
                    return Math.round(t).toString(16);
                }
            };
            function et(t) {
                return t;
            }
            var nt, rt, at = Array.prototype.map, ot = [
                    'y',
                    'z',
                    'a',
                    'f',
                    'p',
                    'n',
                    'µ',
                    'm',
                    '',
                    'k',
                    'M',
                    'G',
                    'T',
                    'P',
                    'E',
                    'Z',
                    'Y'
                ];
            function it(t) {
                var e, n, r = void 0 === t.grouping || void 0 === t.thousands ? et : (e = at.call(t.grouping, Number), n = t.thousands + '', function (t, r) {
                        for (var a = t.length, o = [], i = 0, l = e[0], s = 0; a > 0 && l > 0 && (s + l + 1 > r && (l = Math.max(1, r - s)), o.push(t.substring(a -= l, a + l)), !((s += l + 1) > r));) {
                            l = e[i = (i + 1) % e.length];
                        }
                        return o.reverse().join(n);
                    }), a = void 0 === t.currency ? '' : t.currency[0] + '', o = void 0 === t.currency ? '' : t.currency[1] + '', i = void 0 === t.decimal ? '.' : t.decimal + '', l = void 0 === t.numerals ? et : function (e) {
                        return e.replace(/[0-9]/g, function (e) {
                            return t[+e];
                        });
                    }, s = void 0 === t.percent ? '%' : t.percent + '', c = void 0 === t.minus ? '-' : t.minus + '', u = void 0 === t.nan ? 'NaN' : t.nan + '';
                function f(t) {
                    var e = (t = G(t)).fill, n = t.align, f = t.sign, p = t.symbol, h = t.zero, d = t.width, v = t.comma, m = t.precision, b = t.trim, g = t.type;
                    'n' === g ? (v = true, g = 'g') : tt[g] || (void 0 === m && (m = 12), b = true, g = 'g');
                    (h || '0' === e && '=' === n) && (h = true, e = '0', n = '=');
                    
                    var y = '$' === p ? a : '#' === p && /[boxX]/.test(g) ? '0' + g.toLowerCase() : '', w = '$' === p ? o : /[%p]/.test(g) ? s : '', O = tt[g], x = /[defgprs%]/.test(g);
                    function M(t) {
                        var a, o, s, p = y, M = w;
                        if ('c' === g) {
                            M = O(t) + M;
                            t = '';
                            
                        } else {
                            var E = (t = +t) < 0 || 1 / t < 0;
                            if (t = isNaN(t) ? u : O(Math.abs(t), m), b && (t = function (t) {
                                    t:
                                        for (var e, n = t.length, r = 1, a = -1; r < n; ++r) {
                                            switch (t[r]) {
                                            case '.':
                                                a = e = r;
                                                break;
                                            case '0':
                                                0 === a && (a = r), e = r;
                                                break;
                                            default:
                                                if (!+t[r]) {
                                                    break t;
                                                }
                                                a > 0 && (a = 0);
                                            }
                                        }
                                    return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t;
                                }(t)), E && 0 === +t && '+' !== f && (E = false), p = (E ? '(' === f ? f : c : '-' === f || '(' === f ? '' : f) + p, M = ('s' === g ? ot[8 + X / 3] : '') + M + (E && '(' === f ? ')' : ''), x) {
                                for (a = -1, o = t.length; ++a < o;) {
                                    if (48 > (s = t.charCodeAt(a)) || s > 57) {
                                        M = (46 === s ? i + t.slice(a + 1) : t.slice(a)) + M;
                                        t = t.slice(0, a);
                                        
                                        break;
                                    }
                                }
                            }
                        }
                        v && !h && (t = r(t, 1e+400));
                        var k = p.length + t.length + M.length, j = k < d ? new Array(d - k + 1).join(e) : '';
                        switch (v && h && (t = r(j + t, j.length ? d - M.length : 1e+400), j = ''), n) {
                        case '<':
                            t = p + t + M + j;
                            break;
                        case '=':
                            t = p + j + t + M;
                            break;
                        case '^':
                            t = j.slice(0, k = j.length >> 1) + p + t + M + j.slice(k);
                            break;
                        default:
                            t = j + p + t + M;
                        }
                        return l(t);
                    }
                    return m = void 0 === m ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)), M.toString = function () {
                        return t + '';
                    }, M;
                }
                return {
                    format: f,
                    formatPrefix: function (t, e) {
                        var n, r = f(((t = G(t)).type = 'f', t)), a = 3 * Math.max(-8, Math.min(8, Math.floor((n = e, ((n = Y(Math.abs(n))) ? n[1] : NaN) / 3)))), o = Math.pow(10, -a), i = ot[8 + a / 3];
                        return function (t) {
                            return r(o * t) + i;
                        };
                    }
                };
            }
            nt = it({
                decimal: '.',
                thousands: ',',
                grouping: [3],
                currency: [
                    '$',
                    ''
                ],
                minus: '-'
            });
            rt = nt.format;
            nt.formatPrefix;
            
            var lt = n(48426);
            n(30381);
            const st = lt.Q.en_US;
            let ut;
            !function (t) {
                t.LongDate = 'LL';
                t.ShortDate = 'll';
                t.Time = 'LT';
                t.DateTime = 'LLL';
                t.ISO8601 = 'YYYY-MM-DDTHH:mm:ssZ';
                t.LongDayMonth = 'D MMMM';
                t.ShortDayMonth = 'D MMM';
                t.DateTimeWithSeparators = 'L LT';
                t.DateTimeSecondsWithSeparators = 'L LTS';
                
            }(ut || (ut = {}));
            const ft = (t, e = st) => t.toLocaleString(e, { maximumFractionDigits: 20 }), pt = (t, e = st, n = false, r = 2, a = true, o = false) => {
                    let i = t, l = '';
                    if (n && t >= 1) {
                        const e = /^([^a-zA-Z]*)([a-zA-Z]?$)/.exec(rt('s')(t));
                        e && (i = +e[1], l = e[2] || '');
                    }
                    const s = rt(`.${ r }${ a ? '~' : '' }f`)(i), c = Number(s).toLocaleString(e);
                    return (true === n && u.hasOwnProperty(l) ? [
                        c,
                        u[l]
                    ] : [
                        c,
                        l
                    ]).join(o ? ' ' : '');
                }, ht = (t, e = st, n = false, r = 2, a = true) => pt(t, e, n, r, a), dt = (t, e = 0, n = st) => {
                    const r = Math.pow(10, e);
                    let a = '';
                    return a = t > 99 ? ft(100 - +(100 - t).toPrecision(1), n) : t < 1 ? ft(+t.toPrecision(1), n) : ht(t * r / r, n, false, e), a + '%';
                };
            function vt(t, e) {
                return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
            }
            var mt = function (t) {
                    var e;
                    return 1 === t.length && (e = t, t = function (t, n) {
                        return vt(e(t), n);
                    }), {
                        left: function (e, n, r, a) {
                            for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                                var o = r + a >>> 1;
                                t(e[o], n) < 0 ? r = o + 1 : a = o;
                            }
                            return r;
                        },
                        right: function (e, n, r, a) {
                            for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                                var o = r + a >>> 1;
                                t(e[o], n) > 0 ? a = o : r = o + 1;
                            }
                            return r;
                        }
                    };
                }(vt), bt = mt.right, gt = (mt.left, bt), yt = Array.prototype;
            yt.slice;
            yt.map;
            Math.sqrt(50);
            Math.sqrt(10);
            Math.sqrt(2);
            
            var wt = n(55581), Ot = Array.prototype, xt = (Ot.map, Ot.slice);
            function Mt(t, e) {
                switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t);
                }
                return this;
            }
            
            function kt() {
                var t = (0, wt.UI)(), e = [], n = [], r = Et;
                function a(a) {
                    var o = a + '', i = t.get(o);
                    if (!i) {
                        if (r !== Et) {
                            return r;
                        }
                        t.set(o, i = e.push(a));
                    }
                    return n[(i - 1) % n.length];
                }
                return a.domain = function (n) {
                    if (!arguments.length) {
                        return e.slice();
                    }
                    e = [];
                    t = (0, wt.UI)();
                    
                    for (var r, o, i = -1, l = n.length; ++i < l;) {
                        t.has(o = (r = n[i]) + '') || t.set(o, e.push(r));
                    }
                    return a;
                }, a.range = function (t) {
                    return arguments.length ? (n = xt.call(t), a) : n.slice();
                }, a.unknown = function (t) {
                    return arguments.length ? (r = t, a) : r;
                }, a.copy = function () {
                    return kt(e, n).unknown(r);
                }, Mt.apply(a, arguments), a;
            }
            function jt() {
                var t, e = [0.5], n = [
                        0,
                        1
                    ], r = 1;
                function a(a) {
                    return a <= a ? n[gt(e, a, 0, r)] : t;
                }
                return a.domain = function (t) {
                    return arguments.length ? (e = xt.call(t), r = Math.min(e.length, n.length - 1), a) : e.slice();
                }, a.range = function (t) {
                    return arguments.length ? (n = xt.call(t), r = Math.min(e.length, n.length - 1), a) : n.slice();
                }, a.invertExtent = function (t) {
                    var r = n.indexOf(t);
                    return [
                        e[r - 1],
                        e[r]
                    ];
                }, a.unknown = function (e) {
                    return arguments.length ? (t = e, a) : t;
                }, a.copy = function () {
                    return jt().domain(e).range(n).unknown(t);
                }, Mt.apply(a, arguments);
            }
            var _t = Math.PI, Pt = 2 * _t, St = Pt - 0.000001;
            function Lt() {
                this._x0 = this._y0 = this._x1 = this._y1 = null;
                this._ = '';
                
            }
            function At() {
                return new Lt();
            }
            Lt.prototype = At.prototype = {
                constructor: Lt,
                moveTo: function (t, e) {
                    this._ += 'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +e);
                },
                closePath: function () {
                    if (null !== this._x1) {
                        this._x1 = this._x0;
                        this._y1 = this._y0;
                        this._ += 'Z';
                    }
                },
                lineTo: function (t, e) {
                    this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +e);
                },
                quadraticCurveTo: function (t, e, n, r) {
                    this._ += 'Q' + +t + ',' + +e + ',' + (this._x1 = +n) + ',' + (this._y1 = +r);
                },
                bezierCurveTo: function (t, e, n, r, a, o) {
                    this._ += 'C' + +t + ',' + +e + ',' + +n + ',' + +r + ',' + (this._x1 = +a) + ',' + (this._y1 = +o);
                },
                arcTo: function (t, e, n, r, a) {
                    t = +t;
                    e = +e;
                    n = +n;
                    r = +r;
                    a = +a;
                    
                    var o = this._x1, i = this._y1, l = n - t, s = r - e, c = o - t, u = i - e, f = c * c + u * u;
                    if (a < 0) {
                        throw new Error('negative radius: ' + a);
                    }
                    if (null === this._x1) {
                        this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = e);
                    } else {
                        if (f > 0.000001) {
                            if (Math.abs(u * l - s * c) > 0.000001 && a) {
                                var p = n - o, h = r - i, d = l * l + s * s, v = p * p + h * h, m = Math.sqrt(d), b = Math.sqrt(f), g = a * Math.tan((_t - Math.acos((d + f - v) / (2 * m * b))) / 2), y = g / b, w = g / m;
                                Math.abs(y - 1) > 0.000001 && (this._ += 'L' + (t + y * c) + ',' + (e + y * u));
                                this._ += 'A' + a + ',' + a + ',0,0,' + +(u * p > c * h) + ',' + (this._x1 = t + w * l) + ',' + (this._y1 = e + w * s);
                                
                            } else {
                                this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = e);
                            }
                        } else {
                            
                        }
                    }
                },
                arc: function (t, e, n, r, a, o) {
                    t = +t;
                    e = +e;
                    o = !!o;
                    
                    var i = (n = +n) * Math.cos(r), l = n * Math.sin(r), s = t + i, c = e + l, u = 1 ^ o, f = o ? r - a : a - r;
                    if (n < 0) {
                        throw new Error('negative radius: ' + n);
                    }
                    null === this._x1 ? this._ += 'M' + s + ',' + c : (Math.abs(this._x1 - s) > 0.000001 || Math.abs(this._y1 - c) > 0.000001) && (this._ += 'L' + s + ',' + c);
                    n && (f < 0 && (f = f % Pt + Pt), f > St ? this._ += 'A' + n + ',' + n + ',0,1,' + u + ',' + (t - i) + ',' + (e - l) + 'A' + n + ',' + n + ',0,1,' + u + ',' + (this._x1 = s) + ',' + (this._y1 = c) : f > 0.000001 && (this._ += 'A' + n + ',' + n + ',0,' + +(f >= _t) + ',' + u + ',' + (this._x1 = t + n * Math.cos(a)) + ',' + (this._y1 = e + n * Math.sin(a))));
                    
                },
                rect: function (t, e, n, r) {
                    this._ += 'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +e) + 'h' + +n + 'v' + +r + 'h' + -n + 'Z';
                },
                toString: function () {
                    return this._;
                }
            };
            var Tt = At;
            function Ct(t) {
                return function () {
                    return t;
                };
            }
            var Ht = Math.abs, Rt = Math.atan2, Nt = Math.cos, Vt = Math.max, Dt = Math.min, Bt = Math.sin, It = Math.sqrt, Ft = Math.PI, Ut = Ft / 2, Zt = 2 * Ft;
            function qt(t) {
                return t > 1 ? 0 : t < -1 ? Ft : Math.acos(t);
            }
            function $t(t) {
                return t >= 1 ? Ut : t <= -1 ? -Ut : Math.asin(t);
            }
            function Yt(t) {
                return t.innerRadius;
            }
            function Xt(t) {
                return t.outerRadius;
            }
            function Jt(t) {
                return t.startAngle;
            }
            function Gt(t) {
                return t.endAngle;
            }
            function Kt(t) {
                return t && t.padAngle;
            }
            function Qt(t, e, n, r, a, o, i, l) {
                var s = n - t, c = r - e, u = i - a, f = l - o, p = f * s - u * c;
                if (!(p * p < 1e-12)) {
                    return [
                        t + (p = (u * (e - o) - f * (t - a)) / p) * s,
                        e + p * c
                    ];
                }
            }
            function te(t, e, n, r, a, o, i) {
                var l = t - n, s = e - r, c = (i ? o : -o) / It(l * l + s * s), u = c * s, f = -c * l, p = t + u, h = e + f, d = n + u, v = r + f, m = (p + d) / 2, b = (h + v) / 2, g = d - p, y = v - h, w = g * g + y * y, O = a - o, x = p * v - d * h, M = (y < 0 ? -1 : 1) * It(Vt(0, O * O * w - x * x)), E = (x * y - g * M) / w, k = (-x * g - y * M) / w, j = (x * y + g * M) / w, _ = (-x * g + y * M) / w, P = E - m, z = k - b, S = j - m, L = _ - b;
                return P * P + z * z > S * S + L * L && (E = j, k = _), {
                    cx: E,
                    cy: k,
                    x01: -u,
                    y01: -f,
                    x11: E * (a / O - 1),
                    y11: k * (a / O - 1)
                };
            }
            function ee() {
                var t = Yt, e = Xt, n = Ct(0), r = null, a = Jt, o = Gt, i = Kt, l = null;
                function s() {
                    var s, c, u = +t.apply(this, arguments), f = +e.apply(this, arguments), p = a.apply(this, arguments) - Ut, h = o.apply(this, arguments) - Ut, d = Ht(h - p), v = h > p;
                    if (l || (l = s = Tt()), f < u && (c = f, f = u, u = c), f > 1e-12) {
                        if (d > Zt - 1e-12) {
                            l.moveTo(f * Nt(p), f * Bt(p));
                            l.arc(0, 0, f, p, h, !v);
                            if (u > 1e-12) {
                                l.moveTo(u * Nt(h), u * Bt(h));
                                l.arc(0, 0, u, h, p, v);
                            }
                            
                        } else {
                            var m, b, g = p, y = h, w = p, O = h, x = d, M = d, E = i.apply(this, arguments) / 2, k = E > 1e-12 && (r ? +r.apply(this, arguments) : It(u * u + f * f)), j = Dt(Ht(f - u) / 2, +n.apply(this, arguments)), _ = j, P = j;
                            if (k > 1e-12) {
                                var z = $t(k / u * Bt(E)), S = $t(k / f * Bt(E));
                                (x -= 2 * z) > 1e-12 ? (w += z *= v ? 1 : -1, O -= z) : (x = 0, w = O = (p + h) / 2);
                                (M -= 2 * S) > 1e-12 ? (g += S *= v ? 1 : -1, y -= S) : (M = 0, g = y = (p + h) / 2);
                                
                            }
                            var L = f * Nt(g), A = f * Bt(g), T = u * Nt(O), C = u * Bt(O);
                            if (j > 1e-12) {
                                var H, R = f * Nt(y), N = f * Bt(y), V = u * Nt(w), D = u * Bt(w);
                                if (d < Ft && (H = Qt(L, A, V, D, R, N, T, C))) {
                                    var B = L - H[0], I = A - H[1], W = R - H[0], F = N - H[1], U = 1 / Bt(qt((B * W + I * F) / (It(B * B + I * I) * It(W * W + F * F))) / 2), Z = It(H[0] * H[0] + H[1] * H[1]);
                                    _ = Dt(j, (u - Z) / (U - 1));
                                    P = Dt(j, (f - Z) / (U + 1));
                                    
                                }
                            }
                            M > 1e-12 ? P > 1e-12 ? (m = te(V, D, L, A, f, P, v), b = te(R, N, T, C, f, P, v), l.moveTo(m.cx + m.x01, m.cy + m.y01), P < j ? l.arc(m.cx, m.cy, P, Rt(m.y01, m.x01), Rt(b.y01, b.x01), !v) : (l.arc(m.cx, m.cy, P, Rt(m.y01, m.x01), Rt(m.y11, m.x11), !v), l.arc(0, 0, f, Rt(m.cy + m.y11, m.cx + m.x11), Rt(b.cy + b.y11, b.cx + b.x11), !v), l.arc(b.cx, b.cy, P, Rt(b.y11, b.x11), Rt(b.y01, b.x01), !v))) : (l.moveTo(L, A), l.arc(0, 0, f, g, y, !v)) : l.moveTo(L, A);
                            u > 1e-12 && x > 1e-12 ? _ > 1e-12 ? (m = te(T, C, R, N, u, -_, v), b = te(L, A, V, D, u, -_, v), l.lineTo(m.cx + m.x01, m.cy + m.y01), _ < j ? l.arc(m.cx, m.cy, _, Rt(m.y01, m.x01), Rt(b.y01, b.x01), !v) : (l.arc(m.cx, m.cy, _, Rt(m.y01, m.x01), Rt(m.y11, m.x11), !v), l.arc(0, 0, u, Rt(m.cy + m.y11, m.cx + m.x11), Rt(b.cy + b.y11, b.cx + b.x11), v), l.arc(b.cx, b.cy, _, Rt(b.y11, b.x11), Rt(b.y01, b.x01), !v))) : l.arc(0, 0, u, O, w, v) : l.lineTo(T, C);
                            
                        }
                    } else {
                        l.moveTo(0, 0);
                    }
                    if (l.closePath(), s) {
                        return l = null, s + '' || null;
                    }
                }
                return s.centroid = function () {
                    var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, r = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ft / 2;
                    return [
                        Nt(r) * n,
                        Bt(r) * n
                    ];
                }, s.innerRadius = function (e) {
                    return arguments.length ? (t = 'function' === typeof e ? e : Ct(+e), s) : t;
                }, s.outerRadius = function (t) {
                    return arguments.length ? (e = 'function' === typeof t ? t : Ct(+t), s) : e;
                }, s.cornerRadius = function (t) {
                    return arguments.length ? (n = 'function' === typeof t ? t : Ct(+t), s) : n;
                }, s.padRadius = function (t) {
                    return arguments.length ? (r = null == t ? null : 'function' === typeof t ? t : Ct(+t), s) : r;
                }, s.startAngle = function (t) {
                    return arguments.length ? (a = 'function' === typeof t ? t : Ct(+t), s) : a;
                }, s.endAngle = function (t) {
                    return arguments.length ? (o = 'function' === typeof t ? t : Ct(+t), s) : o;
                }, s.padAngle = function (t) {
                    return arguments.length ? (i = 'function' === typeof t ? t : Ct(+t), s) : i;
                }, s.context = function (t) {
                    return arguments.length ? (l = null == t ? null : t, s) : l;
                }, s;
            }
            function ne(t, e) {
                return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
            }
            function re(t) {
                return t;
            }
            function ae() {
                var t = re, e = ne, n = null, r = Ct(0), a = Ct(Zt), o = Ct(0);
                function i(i) {
                    var l, s, c, u, f, p = i.length, h = 0, d = new Array(p), v = new Array(p), m = +r.apply(this, arguments), b = Math.min(Zt, Math.max(-Zt, a.apply(this, arguments) - m)), g = Math.min(Math.abs(b) / p, o.apply(this, arguments)), y = g * (b < 0 ? -1 : 1);
                    for (l = 0; l < p; ++l) {
                        (f = v[d[l] = l] = +t(i[l], l, i)) > 0 && (h += f);
                    }
                    for (null != e ? d.sort(function (t, n) {
                            return e(v[t], v[n]);
                        }) : null != n && d.sort(function (t, e) {
                            return n(i[t], i[e]);
                        }), l = 0, c = h ? (b - p * y) / h : 0; l < p; ++l, m = u) {
                        s = d[l];
                        u = m + ((f = v[s]) > 0 ? f * c : 