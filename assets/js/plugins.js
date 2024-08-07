/*=============================================
=            Third party plugin list       =
=============================================

    01. Tippy JS
    02. Perfect scrollbar
    03. DL menu
    04. Mailchimp
    05. Slick Slider
    06. Imageloaded
    07. Masonry
    08. WOW JS
    09. Velocity JS
    10. Paraxify
    11. Countdown
    12. jquery.instagramFeed
    13. Magnific Popup
    14. Sticky
    15. Isotope
    16. Nice select
    17. jQuery UI
    18. light gallery
    19. Zoom
    20. Yt player

/*=====  End of Third party plugin list  ======*/




/*=============================================
=            01. Tippy JS            =
=============================================*/


/**
 *
 * version 3.1.3
 *
 */



(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.tippy = t()
})(this, function() {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var r = e.ownerDocument.defaultView,
      a = r.getComputedStyle(e, null);
    return t ? a[t] : a
  }

  function r(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function a(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var p = t(e),
      o = p.overflow,
      i = p.overflowX,
      n = p.overflowY;
    return /(auto|scroll|overlay)/.test(o + n + i) ? e : a(r(e))
  }

  function p(e) {
    return 11 === e ? ve : 10 === e ? ke : ve || ke
  }

  function o(e) {
    if (!e) return document.documentElement;
    for (var r = p(10) ? document.body : null, a = e.offsetParent || null; a === r && e.nextElementSibling;) a = (e = e.nextElementSibling).offsetParent;
    var i = a && a.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(a.nodeName) && 'static' === t(a, 'position') ? o(a) : a : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function n(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || o(e.firstElementChild) === e)
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode)
  }

  function l(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      a = r ? e : t,
      p = r ? t : e,
      i = document.createRange();
    i.setStart(a, 0), i.setEnd(p, 0);
    var d = i.commonAncestorContainer;
    if (e !== d && t !== d || a.contains(p)) return n(d) ? d : o(d);
    var m = s(e);
    return m.host ? l(m.host, t) : l(e, s(t).host)
  }

  function d(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      r = 'top' === t ? 'scrollTop' : 'scrollLeft',
      a = e.nodeName;
    if ('BODY' === a || 'HTML' === a) {
      var p = e.ownerDocument.documentElement,
        o = e.ownerDocument.scrollingElement || p;
      return o[r]
    }
    return e[r]
  }

  function m(e, t) {
    var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
      a = d(t, 'top'),
      p = d(t, 'left'),
      o = r ? -1 : 1;
    return e.top += a * o, e.bottom += a * o, e.left += p * o, e.right += p * o, e
  }

  function c(e, t) {
    var r = 'x' === t ? 'Left' : 'Top',
      a = 'Left' === r ? 'Right' : 'Bottom';
    return parseFloat(e['border' + r + 'Width'], 10) + parseFloat(e['border' + a + 'Width'], 10)
  }

  function f(e, t, r, a) {
    return re(t['offset' + e], t['scroll' + e], r['client' + e], r['offset' + e], r['scroll' + e], p(10) ? parseInt(r['offset' + e]) + parseInt(a['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(a['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
  }

  function h(e) {
    var t = e.body,
      r = e.documentElement,
      a = p(10) && getComputedStyle(r);
    return {
      height: f('Height', t, r, a),
      width: f('Width', t, r, a)
    }
  }

  function b(e) {
    return Le({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function u(e) {
    var r = {};
    try {
      if (p(10)) {
        r = e.getBoundingClientRect();
        var a = d(e, 'top'),
          o = d(e, 'left');
        r.top += a, r.left += o, r.bottom += a, r.right += o
      } else r = e.getBoundingClientRect()
    } catch (t) {}
    var i = {
        left: r.left,
        top: r.top,
        width: r.right - r.left,
        height: r.bottom - r.top
      },
      n = 'HTML' === e.nodeName ? h(e.ownerDocument) : {},
      s = n.width || e.clientWidth || i.right - i.left,
      l = n.height || e.clientHeight || i.bottom - i.top,
      m = e.offsetWidth - s,
      f = e.offsetHeight - l;
    if (m || f) {
      var y = t(e);
      m -= c(y, 'x'), f -= c(y, 'y'), i.width -= m, i.height -= f
    }
    return b(i)
  }

  function y(e, r) {
    var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
      i = p(10),
      n = 'HTML' === r.nodeName,
      s = u(e),
      l = u(r),
      d = a(e),
      c = t(r),
      f = parseFloat(c.borderTopWidth, 10),
      h = parseFloat(c.borderLeftWidth, 10);
    o && n && (l.top = re(l.top, 0), l.left = re(l.left, 0));
    var y = b({
      top: s.top - l.top - f,
      left: s.left - l.left - h,
      width: s.width,
      height: s.height
    });
    if (y.marginTop = 0, y.marginLeft = 0, !i && n) {
      var g = parseFloat(c.marginTop, 10),
        w = parseFloat(c.marginLeft, 10);
      y.top -= f - g, y.bottom -= f - g, y.left -= h - w, y.right -= h - w, y.marginTop = g, y.marginLeft = w
    }
    return (i && !o ? r.contains(d) : r === d && 'BODY' !== d.nodeName) && (y = m(y, r)), y
  }

  function g(e) {
    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
      r = e.ownerDocument.documentElement,
      a = y(e, r),
      p = re(r.clientWidth, window.innerWidth || 0),
      o = re(r.clientHeight, window.innerHeight || 0),
      i = t ? 0 : d(r),
      n = t ? 0 : d(r, 'left'),
      s = {
        top: i - a.top + a.marginTop,
        left: n - a.left + a.marginLeft,
        width: p,
        height: o
      };
    return b(s)
  }

  function w(e) {
    var a = e.nodeName;
    return 'BODY' !== a && 'HTML' !== a && ('fixed' === t(e, 'position') || w(r(e)))
  }

  function x(e) {
    if (!e || !e.parentElement || p()) return document.documentElement;
    for (var r = e.parentElement; r && 'none' === t(r, 'transform');) r = r.parentElement;
    return r || document.documentElement
  }

  function v(e, t, p, o) {
    var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
      n = {
        top: 0,
        left: 0
      },
      s = i ? x(e) : l(e, t);
    if ('viewport' === o) n = g(s, i);
    else {
      var d;
      'scrollParent' === o ? (d = a(r(t)), 'BODY' === d.nodeName && (d = e.ownerDocument.documentElement)) : 'window' === o ? d = e.ownerDocument.documentElement : d = o;
      var m = y(d, s, i);
      if ('HTML' === d.nodeName && !w(s)) {
        var c = h(e.ownerDocument),
          f = c.height,
          b = c.width;
        n.top += m.top - m.marginTop, n.bottom = f + m.top, n.left += m.left - m.marginLeft, n.right = b + m.left
      } else n = m
    }
    p = p || 0;
    var u = 'number' == typeof p;
    return n.left += u ? p : p.left || 0, n.top += u ? p : p.top || 0, n.right -= u ? p : p.right || 0, n.bottom -= u ? p : p.bottom || 0, n
  }

  function k(e) {
    var t = e.width,
      r = e.height;
    return t * r
  }

  function E(e, t, r, a, p) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var i = v(r, a, o, p),
      n = {
        top: {
          width: i.width,
          height: t.top - i.top
        },
        right: {
          width: i.right - t.right,
          height: i.height
        },
        bottom: {
          width: i.width,
          height: i.bottom - t.bottom
        },
        left: {
          width: t.left - i.left,
          height: i.height
        }
      },
      s = Object.keys(n).map(function(e) {
        return Le({
          key: e
        }, n[e], {
          area: k(n[e])
        })
      }).sort(function(e, t) {
        return t.area - e.area
      }),
      l = s.filter(function(e) {
        var t = e.width,
          a = e.height;
        return t >= r.clientWidth && a >= r.clientHeight
      }),
      d = 0 < l.length ? l[0].key : s[0].key,
      m = e.split('-')[1];
    return d + (m ? '-' + m : '')
  }

  function O(e, t, r) {
    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      p = a ? x(t) : l(t, r);
    return y(r, p, a)
  }

  function C(e) {
    var t = e.ownerDocument.defaultView,
      r = t.getComputedStyle(e),
      a = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
      p = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
      o = {
        width: e.offsetWidth + p,
        height: e.offsetHeight + a
      };
    return o
  }

  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function(e) {
      return t[e]
    })
  }

  function T(e, t, r) {
    r = r.split('-')[0];
    var a = C(e),
      p = {
        width: a.width,
        height: a.height
      },
      o = -1 !== ['right', 'left'].indexOf(r),
      i = o ? 'top' : 'left',
      n = o ? 'left' : 'top',
      s = o ? 'height' : 'width',
      l = o ? 'width' : 'height';
    return p[i] = t[i] + t[s] / 2 - a[s] / 2, p[n] = r === n ? t[n] - a[l] : t[L(n)], p
  }

  function A(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function P(e, t, r) {
    if (Array.prototype.findIndex) return e.findIndex(function(e) {
      return e[t] === r
    });
    var a = A(e, function(e) {
      return e[t] === r
    });
    return e.indexOf(a)
  }

  function S(t, r, a) {
    var p = void 0 === a ? t : t.slice(0, P(t, 'name', a));
    return p.forEach(function(t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var a = t['function'] || t.fn;
      t.enabled && e(a) && (r.offsets.popper = b(r.offsets.popper), r.offsets.reference = b(r.offsets.reference), r = a(r, t))
    }), r
  }

  function Y() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = S(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function D(e, t) {
    return e.some(function(e) {
      var r = e.name,
        a = e.enabled;
      return a && r === t
    })
  }

  function X(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], r = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < t.length; a++) {
      var p = t[a],
        o = p ? '' + p + r : e;
      if ('undefined' != typeof document.body.style[o]) return o
    }
    return null
  }

  function I() {
    return this.state.isDestroyed = !0, D(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[X('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function N(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function H(e, t, r, p) {
    var o = 'BODY' === e.nodeName,
      i = o ? e.ownerDocument.defaultView : e;
    i.addEventListener(t, r, {
      passive: !0
    }), o || H(a(i.parentNode), t, r, p), p.push(i)
  }

  function R(e, t, r, p) {
    r.updateBound = p, N(e).addEventListener('resize', r.updateBound, {
      passive: !0
    });
    var o = a(e);
    return H(o, 'scroll', r.updateBound, r.scrollParents), r.scrollElement = o, r.eventsEnabled = !0, r
  }

  function B() {
    this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function M(e, t) {
    return N(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function W() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
  }

  function z(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function _(e, t) {
    Object.keys(t).forEach(function(r) {
      var a = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) && z(t[r]) && (a = 'px'), e.style[r] = t[r] + a
    })
  }

  function U(e, t) {
    Object.keys(t).forEach(function(r) {
      var a = t[r];
      !1 === a ? e.removeAttribute(r) : e.setAttribute(r, t[r])
    })
  }

  function F(e, t, r) {
    var a = A(e, function(e) {
        var r = e.name;
        return r === t
      }),
      p = !!a && e.some(function(e) {
        return e.name === r && e.enabled && e.order < a.order
      });
    if (!p) {
      var o = '`' + t + '`';
      console.warn('`' + r + '`' + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!')
    }
    return p
  }

  function V(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function q(e) {
    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
      r = Ae.indexOf(e),
      a = Ae.slice(r + 1).concat(Ae.slice(0, r));
    return t ? a.reverse() : a
  }

  function j(e, t, r, a) {
    var p = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      o = +p[1],
      i = p[2];
    if (!o) return e;
    if (0 === i.indexOf('%')) {
      var n;
      switch (i) {
        case '%p':
          n = r;
          break;
        case '%':
        case '%r':
        default:
          n = a;
      }
      var s = b(n);
      return s[t] / 100 * o
    }
    if ('vh' === i || 'vw' === i) {
      var l;
      return l = 'vh' === i ? re(document.documentElement.clientHeight, window.innerHeight || 0) : re(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o
    }
    return o
  }

  function K(e, t, r, a) {
    var p = [0, 0],
      o = -1 !== ['right', 'left'].indexOf(a),
      i = e.split(/(\+|\-)/).map(function(e) {
        return e.trim()
      }),
      n = i.indexOf(A(i, function(e) {
        return -1 !== e.search(/,|\s/)
      }));
    i[n] && -1 === i[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var s = /\s*,\s*|\s+/,
      l = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(s)[0]]), [i[n].split(s)[1]].concat(i.slice(n + 1))];
    return l = l.map(function(e, a) {
      var p = (1 === a ? !o : o) ? 'height' : 'width',
        i = !1;
      return e.reduce(function(e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
      }, []).map(function(e) {
        return j(e, p, t, r)
      })
    }), l.forEach(function(e, t) {
      e.forEach(function(r, a) {
        z(r) && (p[t] += r * ('-' === e[a - 1] ? -1 : 1))
      })
    }), p
  }

  function G(e, t) {
    var r = t.offset,
      a = e.placement,
      p = e.offsets,
      o = p.popper,
      i = p.reference,
      n = a.split('-')[0],
      s = void 0;
    return s = z(+r) ? [+r, 0] : K(r, o, i, n), 'left' === n ? (o.top += s[0], o.left -= s[1]) : 'right' === n ? (o.top += s[0], o.left += s[1]) : 'top' === n ? (o.left += s[0], o.top -= s[1]) : 'bottom' === n && (o.left += s[0], o.top += s[1]), e.popper = o, e
  }

  function Q(e) {
    document.addEventListener('click', Lt, e), document.addEventListener('touchstart', Et, {
      passive: !0
    }), window.addEventListener('blur', Tt), window.addEventListener('resize', At), !be && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener('pointerdown', Et)
  }

  function Z(e, t) {
    function r() {
      ht(function() {
        z = !1
      })
    }

    function a() {
      X = new MutationObserver(function() {
        q.popperInstance.update()
      }), X.observe(F, {
        childList: !0,
        subtree: !0
      })
    }

    function p(e) {
      var t = N = e,
        r = t.clientX,
        a = t.clientY;
      if (q.popperInstance) {
        var p = ut(q.popper),
          o = q.popperChildren.arrow ? 20 : 5,
          i = 'top' === p || 'bottom' === p,
          n = 'left' === p || 'right' === p,
          s = i ? re(o, r) : r,
          l = n ? re(o, a) : a;
        i && s > o && (s = J(r, window.innerWidth - o)), n && l > o && (l = J(a, window.innerHeight - o));
        var d = q.reference.getBoundingClientRect(),
          m = q.props.followCursor,
          c = 'horizontal' === m,
          f = 'vertical' === m;
        q.popperInstance.reference = {
          getBoundingClientRect: function() {
            return {
              width: 0,
              height: 0,
              top: c ? d.top : l,
              bottom: c ? d.bottom : l,
              left: f ? d.left : s,
              right: f ? d.right : s
            }
          },
          clientWidth: 0,
          clientHeight: 0
        }, q.popperInstance.scheduleUpdate()
      }
    }

    function o(e) {
      var t = rt(e.target, q.props.target);
      t && !t._tippy && (Z(t, oe({}, q.props, {
        target: '',
        showOnInit: !0
      })), i(e))
    }

    function i(e) {
      if (T(), !q.state.isVisible) {
        if (q.props.target) return o(e);
        if (B = !0, q.props.wait) return q.props.wait(q, e);
        w() && document.addEventListener('mousemove', p);
        var t = Ue(q.props.delay, 0, ie.delay);
        t ? H = setTimeout(function() {
          P()
        }, t) : P()
      }
    }

    function n() {
      if (T(), !q.state.isVisible) return s();
      B = !1;
      var e = Ue(q.props.delay, 1, ie.delay);
      e ? R = setTimeout(function() {
        q.state.isVisible && S()
      }, e) : S()
    }

    function s() {
      document.removeEventListener('mousemove', p), N = null
    }

    function l() {
      document.body.removeEventListener('mouseleave', n), document.removeEventListener('mousemove', _)
    }

    function d(e) {
      !q.state.isEnabled || y(e) || (!q.state.isVisible && (I = e), 'click' === e.type && !1 !== q.props.hideOnClick && q.state.isVisible ? n() : i(e))
    }

    function m(e) {
      var t = at(e.target, function(e) {
          return e._tippy
        }),
        r = rt(e.target, Ye.POPPER) === q.popper,
        a = t === q.reference;
      r || a || bt(ut(q.popper), q.popper.getBoundingClientRect(), e, q.props) && (l(), n())
    }

    function c(e) {
      return y(e) ? void 0 : q.props.interactive ? (document.body.addEventListener('mouseleave', n), void document.addEventListener('mousemove', _)) : void n()
    }

    function f(e) {
      if (e.target === q.reference) {
        if (q.props.interactive) {
          if (!e.relatedTarget) return;
          if (rt(e.relatedTarget, Ye.POPPER)) return
        }
        n()
      }
    }

    function h(e) {
      rt(e.target, q.props.target) && i(e)
    }

    function b(e) {
      rt(e.target, q.props.target) && n()
    }

    function y(e) {
      var t = -1 < e.type.indexOf('touch'),
        r = be && kt && q.props.touchHold && !t,
        a = kt && !q.props.touchHold && t;
      return r || a
    }

    function u() {
      var e = q.popperChildren.tooltip,
        t = q.props.popperOptions,
        r = Ye['round' === q.props.arrowType ? 'ROUND_ARROW' : 'ARROW'],
        p = e.querySelector(r),
        o = oe({
          placement: q.props.placement
        }, t || {}, {
          modifiers: oe({}, t ? t.modifiers : {}, {
            arrow: oe({
              element: r
            }, t && t.modifiers ? t.modifiers.arrow : {}),
            flip: oe({
              enabled: q.props.flip,
              padding: q.props.distance + 5,
              behavior: q.props.flipBehavior
            }, t && t.modifiers ? t.modifiers.flip : {}),
            offset: oe({
              offset: q.props.offset
            }, t && t.modifiers ? t.modifiers.offset : {})
          }),
          onCreate: function() {
            e.style[ut(q.popper)] = yt(q.props.distance, ie.distance), p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
          },
          onUpdate: function() {
            var t = e.style;
            t.top = '', t.bottom = '', t.left = '', t.right = '', t[ut(q.popper)] = yt(q.props.distance, ie.distance), p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
          }
        });
      return X || a(), new Se(q.reference, q.popper, o)
    }

    function g(e) {
      q.popperInstance ? !w() && (q.popperInstance.scheduleUpdate(), q.props.livePlacement && q.popperInstance.enableEventListeners()) : (q.popperInstance = u(), (!q.props.livePlacement || w()) && q.popperInstance.disableEventListeners()), q.popperInstance.reference = q.reference;
      var t = q.popperChildren.arrow;
      if (w()) {
        t && (t.style.margin = '0');
        var r = Ue(q.props.delay, 0, ie.delay);
        I.type && p(r && N ? N : I)
      } else t && (t.style.margin = '');
      ft(q.popperInstance, e), q.props.appendTo.contains(q.popper) || (q.props.appendTo.appendChild(q.popper), q.props.onMount(q), q.state.isMounted = !0)
    }

    function w() {
      return q.props.followCursor && !kt && 'focus' !== I.type
    }

    function x() {
      He([q.popper], fe ? 0 : q.props.updateDuration);
      (function e() {
        q.popperInstance && q.popperInstance.scheduleUpdate(), q.state.isMounted ? requestAnimationFrame(e) : He([q.popper], 0)
      })()
    }

    function v(e, t) {
      E(e, function() {
        !q.state.isVisible && q.props.appendTo.contains(q.popper) && t()
      })
    }

    function k(e, t) {
      E(e, t)
    }

    function E(e, t) {
      if (0 === e) return t();
      var r = q.popperChildren.tooltip,
        a = function a(p) {
          p.target === r && (wt(r, 'remove', a), t())
        };
      wt(r, 'remove', M), wt(r, 'add', a), M = a
    }

    function O(e, t, r) {
      q.reference.addEventListener(e, t), r.push({
        eventType: e,
        handler: t
      })
    }

    function C() {
      W = q.props.trigger.trim().split(' ').reduce(function(e, t) {
        return 'manual' === t ? e : (q.props.target ? 'mouseenter' === t ? (O('mouseover', h, e), O('mouseout', b, e)) : 'focus' === t ? (O('focusin', h, e), O('focusout', b, e)) : 'click' === t ? O(t, h, e) : void 0 : (O(t, d, e), q.props.touchHold && (O('touchstart', d, e), O('touchend', c, e)), 'mouseenter' === t ? O('mouseleave', c, e) : 'focus' === t ? O(fe ? 'focusout' : 'blur', f, e) : void 0), e)
      }, [])
    }

    function L() {
      W.forEach(function(e) {
        var t = e.eventType,
          r = e.handler;
        q.reference.removeEventListener(t, r)
      })
    }

    function T() {
      clearTimeout(H), clearTimeout(R)
    }

    function A() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      vt(e, ie);
      var t = q.props,
        r = gt(q.reference, oe({}, q.props, e, {
          performance: !0
        }));
      r.performance = e.hasOwnProperty('performance') ? e.performance : t.performance, q.props = r, (e.hasOwnProperty('trigger') || e.hasOwnProperty('touchHold')) && (L(), C()), e.hasOwnProperty('interactiveDebounce') && (l(), _ = xt(m, e.interactiveDebounce)), Ze(q.popper, t, r), q.popperChildren = Re(q.popper), q.popperInstance && se.some(function(t) {
        return e.hasOwnProperty(t)
      }) && (q.popperInstance.destroy(), q.popperInstance = u(), !q.state.isVisible && q.popperInstance.disableEventListeners(), q.props.followCursor && N && p(N))
    }

    function P() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 0, ie.duration[0]);
      return q.state.isDestroyed || !q.state.isEnabled || kt && !q.props.touch ? void 0 : q.reference.isVirtual || document.documentElement.contains(q.reference) ? q.reference.hasAttribute('disabled') ? void 0 : z ? void(z = !1) : void(!1 === q.props.onShow(q) || (q.popper.style.visibility = 'visible', q.state.isVisible = !0, He([q.popper, q.popperChildren.tooltip, q.popperChildren.backdrop], 0), g(function() {
        q.state.isVisible && (!w() && q.popperInstance.update(), He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), q.popperChildren.backdrop && (q.popperChildren.content.style.transitionDelay = ee(e / 6) + 'ms'), q.props.interactive && q.reference.classList.add('tippy-active'), q.props.sticky && x(), ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'visible'), k(e, function() {
          0 === q.props.updateDuration && q.popperChildren.tooltip.classList.add('tippy-notransition'), q.props.interactive && -1 < ['focus', 'click'].indexOf(I.type) && pt(q.popper), q.reference.setAttribute('aria-describedby', q.popper.id), q.props.onShown(q), q.state.isShown = !0
        }))
      }))) : Y()
    }

    function S() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 1, ie.duration[1]);
      q.state.isDestroyed || !q.state.isEnabled || !1 === q.props.onHide(q) || (0 === q.props.updateDuration && q.popperChildren.tooltip.classList.remove('tippy-notransition'), q.props.interactive && q.reference.classList.remove('tippy-active'), q.popper.style.visibility = 'hidden', q.state.isVisible = !1, q.state.isShown = !1, He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'hidden'), q.props.interactive && !z && -1 < ['focus', 'click'].indexOf(I.type) && ('focus' === I.type && (z = !0), pt(q.reference)), v(e, function() {
        B || s(), q.reference.removeAttribute('aria-describedby'), q.popperInstance.disableEventListeners(), q.props.appendTo.removeChild(q.popper), q.state.isMounted = !1, q.props.onHidden(q)
      }))
    }

    function Y(e) {
      q.state.isDestroyed || (q.state.isVisible && S(0), L(), q.reference.removeEventListener('click', r), delete q.reference._tippy, q.props.target && e && Xe(q.reference.querySelectorAll(q.props.target)).forEach(function(e) {
        return e._tippy && e._tippy.destroy()
      }), q.popperInstance && q.popperInstance.destroy(), X && X.disconnect(), q.state.isDestroyed = !0)
    }
    var D = gt(e, t);
    if (!D.multiple && e._tippy) return null;
    var X = null,
      I = {},
      N = null,
      H = 0,
      R = 0,
      B = !1,
      M = function() {},
      W = [],
      z = !1,
      _ = 0 < D.interactiveDebounce ? xt(m, D.interactiveDebounce) : m,
      U = Pt++,
      F = Qe(U, D);
    F.addEventListener('mouseenter', function(e) {
      q.props.interactive && q.state.isVisible && 'mouseenter' === I.type && i(e)
    }), F.addEventListener('mouseleave', function(e) {
      q.props.interactive && 'mouseenter' === I.type && 0 === q.props.interactiveDebounce && bt(ut(F), F.getBoundingClientRect(), e, q.props) && n()
    });
    var V = Re(F),
      q = {
        id: U,
        reference: e,
        popper: F,
        popperChildren: V,
        popperInstance: null,
        props: D,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1
        },
        clearDelayTimeouts: T,
        set: A,
        setContent: function(e) {
          A({
            content: e
          })
        },
        show: P,
        hide: S,
        enable: function() {
          q.state.isEnabled = !0
        },
        disable: function() {
          q.state.isEnabled = !1
        },
        destroy: Y
      };
    return C(), e.addEventListener('click', r), D.lazy || (q.popperInstance = u(), q.popperInstance.disableEventListeners()), D.showOnInit && i(), !D.a11y || D.target || Ne(e) || e.setAttribute('tabindex', '0'), e._tippy = q, F._tippy = q, q
  }

  function $(e, t, r) {
    vt(t, ie), St || (Q(Yt), St = !0);
    var a = oe({}, ie, t);
    Be(e) && et(e);
    var p = ze(e),
      o = p[0],
      i = (r && o ? [o] : p).reduce(function(e, t) {
        var r = t && Z(t, a);
        return r && e.push(r), e
      }, []);
    return {
      targets: e,
      props: a,
      instances: i,
      destroyAll: function() {
        this.instances.forEach(function(e) {
          e.destroy()
        }), this.instances = []
      }
    }
  }
  for (var J = Math.min, ee = Math.round, te = Math.floor, re = Math.max, ae = '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}', pe = '3.1.3', oe = Object.assign || function(e) {
      for (var t, r = 1; r < arguments.length; r++)
        for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e
    }, ie = {
      a11y: !0,
      allowHTML: !0,
      animateFill: !0,
      animation: 'shift-away',
      appendTo: function() {
        return document.body
      },
      arrow: !1,
      arrowTransform: '',
      arrowType: 'sharp',
      content: '',
      delay: [0, 20],
      distance: 10,
      duration: [325, 275],
      flip: !0,
      flipBehavior: 'flip',
      followCursor: !1,
      hideOnClick: !0,
      inertia: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      lazy: !0,
      livePlacement: !0,
      multiple: !1,
      offset: 0,
      onHidden: function() {},
      onHide: function() {},
      onMount: function() {},
      onShow: function() {},
      onShown: function() {},
      performance: !1,
      placement: 'top',
      popperOptions: {},
      shouldPopperHideOnBlur: function() {
        return !0
      },
      showOnInit: !1,
      size: 'regular',
      sticky: !1,
      target: '',
      theme: 'dark',
      touch: !0,
      touchHold: !1,
      trigger: 'mouseenter focus',
      updateDuration: 200,
      wait: null,
      zIndex: 9999
    }, ne = function(e) {
      ie = oe({}, ie, e)
    }, se = ['arrowType', 'distance', 'flip', 'flipBehavior', 'offset', 'placement', 'popperOptions'], le = 'undefined' != typeof window, de = le ? navigator : {}, me = le ? window : {}, ce = ('MutationObserver' in me), fe = /MSIE |Trident\//.test(de.userAgent), he = /iPhone|iPad|iPod/.test(de.platform) && !me.MSStream, be = ('ontouchstart' in me), ye = 'undefined' != typeof window && 'undefined' != typeof document, ue = ['Edge', 'Trident', 'Firefox'], ge = 0, we = 0; we < ue.length; we += 1)
    if (ye && 0 <= navigator.userAgent.indexOf(ue[we])) {
      ge = 1;
      break
    } var i = ye && window.Promise,
    xe = i ? function(e) {
      var t = !1;
      return function() {
        t || (t = !0, window.Promise.resolve().then(function() {
          t = !1, e()
        }))
      }
    } : function(e) {
      var t = !1;
      return function() {
        t || (t = !0, setTimeout(function() {
          t = !1, e()
        }, ge))
      }
    },
    ve = ye && !!(window.MSInputMethodContext && document.documentMode),
    ke = ye && /MSIE 10/.test(navigator.userAgent),
    Ee = function(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    Oe = function() {
      function e(e, t) {
        for (var r, a = 0; a < t.length; a++) r = t[a], r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
      return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t
      }
    }(),
    Ce = function(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    },
    Le = Object.assign || function(e) {
      for (var t, r = 1; r < arguments.length; r++)
        for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e
    },
    Te = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    Ae = Te.slice(3),
    Pe = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    Se = function() {
      function t(r, a) {
        var p = this,
          o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        Ee(this, t), this.scheduleUpdate = function() {
          return requestAnimationFrame(p.update)
        }, this.update = xe(this.update.bind(this)), this.options = Le({}, t.Defaults, o), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = r && r.jquery ? r[0] : r, this.popper = a && a.jquery ? a[0] : a, this.options.modifiers = {}, Object.keys(Le({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
          p.options.modifiers[e] = Le({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
          return Le({
            name: e
          }, p.options.modifiers[e])
        }).sort(function(e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function(t) {
          t.enabled && e(t.onLoad) && t.onLoad(p.reference, p.popper, p.options, t, p.state)
        }), this.update();
        var i = this.options.eventsEnabled;
        i && this.enableEventListeners(), this.state.eventsEnabled = i
      }
      return Oe(t, [{
        key: 'update',
        value: function() {
          return Y.call(this)
        }
      }, {
        key: 'destroy',
        value: function() {
          return I.call(this)
        }
      }, {
        key: 'enableEventListeners',
        value: function() {
          return B.call(this)
        }
      }, {
        key: 'disableEventListeners',
        value: function() {
          return W.call(this)
        }
      }]), t
    }();
  Se.Utils = ('undefined' == typeof window ? global : window).PopperUtils, Se.placements = Te, Se.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function() {},
    onUpdate: function() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function(e) {
          var t = e.placement,
            r = t.split('-')[0],
            a = t.split('-')[1];
          if (a) {
            var p = e.offsets,
              o = p.reference,
              i = p.popper,
              n = -1 !== ['bottom', 'top'].indexOf(r),
              s = n ? 'left' : 'top',
              l = n ? 'width' : 'height',
              d = {
                start: Ce({}, s, o[s]),
                end: Ce({}, s, o[s] + o[l] - i[l])
              };
            e.offsets.popper = Le({}, i, d[a])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: G,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function(e, t) {
          var r = t.boundariesElement || o(e.instance.popper);
          e.instance.reference === r && (r = o(r));
          var a = X('transform'),
            p = e.instance.popper.style,
            i = p.top,
            n = p.left,
            s = p[a];
          p.top = '', p.left = '', p[a] = '';
          var l = v(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
          p.top = i, p.left = n, p[a] = s, t.boundaries = l;
          var d = t.priority,
            m = e.offsets.popper,
            c = {
              primary: function(e) {
                var r = m[e];
                return m[e] < l[e] && !t.escapeWithReference && (r = re(m[e], l[e])), Ce({}, e, r)
              },
              secondary: function(e) {
                var r = 'right' === e ? 'left' : 'top',
                  a = m[r];
                return m[e] > l[e] && !t.escapeWithReference && (a = J(m[r], l[e] - ('right' === e ? m.width : m.height))), Ce({}, r, a)
              }
            };
          return d.forEach(function(e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            m = Le({}, m, c[t](e))
          }), e.offsets.popper = m, e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function(e) {
          var t = e.offsets,
            r = t.popper,
            a = t.reference,
            p = e.placement.split('-')[0],
            o = te,
            i = -1 !== ['top', 'bottom'].indexOf(p),
            n = i ? 'right' : 'bottom',
            s = i ? 'left' : 'top',
            l = i ? 'width' : 'height';
          return r[n] < o(a[s]) && (e.offsets.popper[s] = o(a[s]) - r[l]), r[s] > o(a[n]) && (e.offsets.popper[s] = o(a[n])), e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function(e, r) {
          var a;
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var p = r.element;
          if ('string' == typeof p) {
            if (p = e.instance.popper.querySelector(p), !p) return e;
          } else if (!e.instance.popper.contains(p)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var o = e.placement.split('-')[0],
            i = e.offsets,
            n = i.popper,
            s = i.reference,
            l = -1 !== ['left', 'right'].indexOf(o),
            d = l ? 'height' : 'width',
            m = l ? 'Top' : 'Left',
            c = m.toLowerCase(),
            f = l ? 'left' : 'top',
            h = l ? 'bottom' : 'right',
            y = C(p)[d];
          s[h] - y < n[c] && (e.offsets.popper[c] -= n[c] - (s[h] - y)), s[c] + y > n[h] && (e.offsets.popper[c] += s[c] + y - n[h]), e.offsets.popper = b(e.offsets.popper);
          var u = s[c] + s[d] / 2 - y / 2,
            g = t(e.instance.popper),
            w = parseFloat(g['margin' + m], 10),
            x = parseFloat(g['border' + m + 'Width'], 10),
            v = u - e.offsets.popper[c] - w - x;
          return v = re(J(n[d] - y, v), 0), e.arrowElement = p, e.offsets.arrow = (a = {}, Ce(a, c, ee(v)), Ce(a, f, ''), a), e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function(e, t) {
          if (D(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var r = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
            a = e.placement.split('-')[0],
            p = L(a),
            o = e.placement.split('-')[1] || '',
            i = [];
          switch (t.behavior) {
            case Pe.FLIP:
              i = [a, p];
              break;
            case Pe.CLOCKWISE:
              i = q(a);
              break;
            case Pe.COUNTERCLOCKWISE:
              i = q(a, !0);
              break;
            default:
              i = t.behavior;
          }
          return i.forEach(function(n, s) {
            if (a !== n || i.length === s + 1) return e;
            a = e.placement.split('-')[0], p = L(a);
            var l = e.offsets.popper,
              d = e.offsets.reference,
              m = te,
              c = 'left' === a && m(l.right) > m(d.left) || 'right' === a && m(l.left) < m(d.right) || 'top' === a && m(l.bottom) > m(d.top) || 'bottom' === a && m(l.top) < m(d.bottom),
              f = m(l.left) < m(r.left),
              h = m(l.right) > m(r.right),
              b = m(l.top) < m(r.top),
              y = m(l.bottom) > m(r.bottom),
              u = 'left' === a && f || 'right' === a && h || 'top' === a && b || 'bottom' === a && y,
              g = -1 !== ['top', 'bottom'].indexOf(a),
              w = !!t.flipVariations && (g && 'start' === o && f || g && 'end' === o && h || !g && 'start' === o && b || !g && 'end' === o && y);
            (c || u || w) && (e.flipped = !0, (c || u) && (a = i[s + 1]), w && (o = V(o)), e.placement = a + (o ? '-' + o : ''), e.offsets.popper = Le({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = S(e.instance.modifiers, e, 'flip'))
          }), e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function(e) {
          var t = e.placement,
            r = t.split('-')[0],
            a = e.offsets,
            p = a.popper,
            o = a.reference,
            i = -1 !== ['left', 'right'].indexOf(r),
            n = -1 === ['top', 'left'].indexOf(r);
          return p[i ? 'left' : 'top'] = o[r] - (n ? p[i ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = b(p), e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            r = A(e.instance.modifiers, function(e) {
              return 'preventOverflow' === e.name
            }).boundaries;
          if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function(e, t) {
          var r = t.x,
            a = t.y,
            p = e.offsets.popper,
            i = A(e.instance.modifiers, function(e) {
              return 'applyStyle' === e.name
            }).gpuAcceleration;
          void 0 !== i && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var n = void 0 === i ? t.gpuAcceleration : i,
            s = o(e.instance.popper),
            l = u(s),
            d = {
              position: p.position
            },
            m = {
              left: te(p.left),
              top: ee(p.top),
              bottom: ee(p.bottom),
              right: te(p.right)
            },
            c = 'bottom' === r ? 'top' : 'bottom',
            f = 'right' === a ? 'left' : 'right',
            h = X('transform'),
            b = void 0,
            y = void 0;
          if (y = 'bottom' == c ? 'HTML' === s.nodeName ? -s.clientHeight + m.bottom : -l.height + m.bottom : m.top, b = 'right' == f ? 'HTML' === s.nodeName ? -s.clientWidth + m.right : -l.width + m.right : m.left, n && h) d[h] = 'translate3d(' + b + 'px, ' + y + 'px, 0)', d[c] = 0, d[f] = 0, d.willChange = 'transform';
          else {
            var g = 'bottom' == c ? -1 : 1,
              w = 'right' == f ? -1 : 1;
            d[c] = y * g, d[f] = b * w, d.willChange = c + ', ' + f
          }
          var x = {
            "x-placement": e.placement
          };
          return e.attributes = Le({}, x, e.attributes), e.styles = Le({}, d, e.styles), e.arrowStyles = Le({}, e.offsets.arrow, e.arrowStyles), e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function(e) {
          return _(e.instance.popper, e.styles), U(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && _(e.arrowElement, e.arrowStyles), e
        },
        onLoad: function(e, t, r, a, p) {
          var o = O(p, t, e, r.positionFixed),
            i = E(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
          return t.setAttribute('x-placement', i), _(t, {
            position: r.positionFixed ? 'fixed' : 'absolute'
          }), r
        },
        gpuAcceleration: void 0
      }
    }
  };
  var Ye = {
      POPPER: '.tippy-popper',
      TOOLTIP: '.tippy-tooltip',
      CONTENT: '.tippy-content',
      BACKDROP: '.tippy-backdrop',
      ARROW: '.tippy-arrow',
      ROUND_ARROW: '.tippy-roundarrow'
    },
    De = {
      x: !0
    },
    Xe = function(e) {
      return [].slice.call(e)
    },
    Ie = function(e, t) {
      t.content instanceof Element ? (We(e, ''), e.appendChild(t.content)) : e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content
    },
    Ne = function(e) {
      return !(e instanceof Element) || tt.call(e, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !e.hasAttribute('disabled')
    },
    He = function(e, t) {
      e.filter(Boolean).forEach(function(e) {
        e.style.transitionDuration = t + 'ms'
      })
    },
    Re = function(e) {
      var t = function(t) {
        return e.querySelector(t)
      };
      return {
        tooltip: t(Ye.TOOLTIP),
        backdrop: t(Ye.BACKDROP),
        content: t(Ye.CONTENT),
        arrow: t(Ye.ARROW) || t(Ye.ROUND_ARROW)
      }
    },
    Be = function(e) {
      return '[object Object]' === {}.toString.call(e)
    },
    Me = function() {
      return document.createElement('div')
    },
    We = function(e, t) {
      e[De.x && 'innerHTML'] = t instanceof Element ? t[De.x && 'innerHTML'] : t
    },
    ze = function(e) {
      if (e instanceof Element || Be(e)) return [e];
      if (e instanceof NodeList) return Xe(e);
      if (Array.isArray(e)) return e;
      try {
        return Xe(document.querySelectorAll(e))
      } catch (t) {
        return []
      }
    },
    _e = function(e) {
      return !isNaN(e) && !isNaN(parseFloat(e))
    },
    Ue = function(e, t, r) {
      if (Array.isArray(e)) {
        var a = e[t];
        return null == a ? r : a
      }
      return e
    },
    Fe = function(e) {
      var t = Me();
      return 'round' === e ? (t.className = 'tippy-roundarrow', We(t, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : t.className = 'tippy-arrow', t
    },
    Ve = function() {
      var e = Me();
      return e.className = 'tippy-backdrop', e.setAttribute('data-state', 'hidden'), e
    },
    qe = function(e, t) {
      e.setAttribute('tabindex', '-1'), t.setAttribute('data-interactive', '')
    },
    je = function(e, t) {
      e.removeAttribute('tabindex'), t.removeAttribute('data-interactive')
    },
    Ke = function(e) {
      e.setAttribute('data-inertia', '')
    },
    Ge = function(e) {
      e.removeAttribute('data-inertia')
    },
    Qe = function(e, t) {
      var r = Me();
      r.className = 'tippy-popper', r.setAttribute('role', 'tooltip'), r.id = 'tippy-' + e, r.style.zIndex = t.zIndex;
      var a = Me();
      a.className = 'tippy-tooltip', a.setAttribute('data-size', t.size), a.setAttribute('data-animation', t.animation), a.setAttribute('data-state', 'hidden'), t.theme.split(' ').forEach(function(e) {
        a.classList.add(e + '-theme')
      });
      var p = Me();
      return p.className = 'tippy-content', p.setAttribute('data-state', 'hidden'), t.interactive && qe(r, a), t.arrow && a.appendChild(Fe(t.arrowType)), t.animateFill && (a.appendChild(Ve()), a.setAttribute('data-animatefill', '')), t.inertia && a.setAttribute('data-inertia', ''), Ie(p, t), a.appendChild(p), r.appendChild(a), r.addEventListener('focusout', function(t) {
        t.relatedTarget && r._tippy && !at(t.relatedTarget, function(e) {
          return e === r
        }) && t.relatedTarget !== r._tippy.reference && r._tippy.props.shouldPopperHideOnBlur(t) && r._tippy.hide()
      }), r
    },
    Ze = function(e, t, r) {
      var a = Re(e),
        p = a.tooltip,
        o = a.content,
        i = a.backdrop,
        n = a.arrow;
      e.style.zIndex = r.zIndex, p.setAttribute('data-size', r.size), p.setAttribute('data-animation', r.animation), t.content !== r.content && Ie(o, r), !t.animateFill && r.animateFill ? (p.appendChild(Ve()), p.setAttribute('data-animatefill', '')) : t.animateFill && !r.animateFill && (p.removeChild(i), p.removeAttribute('data-animatefill')), !t.arrow && r.arrow ? p.appendChild(Fe(r.arrowType)) : t.arrow && !r.arrow && p.removeChild(n), t.arrow && r.arrow && t.arrowType !== r.arrowType && p.replaceChild(Fe(r.arrowType), n), !t.interactive && r.interactive ? qe(e, p) : t.interactive && !r.interactive && je(e, p), !t.inertia && r.inertia ? Ke(p) : t.inertia && !r.inertia && Ge(p), t.theme !== r.theme && (t.theme.split(' ').forEach(function(e) {
        p.classList.remove(e + '-theme')
      }), r.theme.split(' ').forEach(function(e) {
        p.classList.add(e + '-theme')
      }))
    },
    $e = function(e) {
      Xe(document.querySelectorAll(Ye.POPPER)).forEach(function(t) {
        var r = t._tippy;
        r && !0 === r.props.hideOnClick && (!e || t !== e.popper) && r.hide()
      })
    },
    Je = function(e) {
      return Object.keys(ie).reduce(function(t, r) {
        var a = (e.getAttribute('data-tippy-' + r) || '').trim();
        return a ? (t[r] = 'content' === r ? a : 'true' === a || 'false' !== a && (_e(a) ? +a : '[' === a[0] || '{' === a[0] ? JSON.parse(a) : a), t) : t
      }, {})
    },
    et = function(e) {
      var t = {
        isVirtual: !0,
        attributes: e.attributes || {},
        setAttribute: function(t, r) {
          e.attributes[t] = r
        },
        getAttribute: function(t) {
          return e.attributes[t]
        },
        removeAttribute: function(t) {
          delete e.attributes[t]
        },
        hasAttribute: function(t) {
          return t in e.attributes
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        classList: {
          classNames: {},
          add: function(t) {
            e.classList.classNames[t] = !0
          },
          remove: function(t) {
            delete e.classList.classNames[t]
          },
          contains: function(t) {
            return t in e.classList.classNames
          }
        }
      };
      for (var r in t) e[r] = t[r];
      return e
    },
    tt = function() {
      if (le) {
        var t = Element.prototype;
        return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
      }
    }(),
    rt = function(e, t) {
      return (Element.prototype.closest || function(e) {
        for (var t = this; t;) {
          if (tt.call(t, e)) return t;
          t = t.parentElement
        }
      }).call(e, t)
    },
    at = function(e, t) {
      for (; e;) {
        if (t(e)) return e;
        e = e.parentElement
      }
    },
    pt = function(e) {
      var t = window.scrollX || window.pageXOffset,
        r = window.scrollY || window.pageYOffset;
      e.focus(), scroll(t, r)
    },
    ot = function(e) {
      void e.offsetHeight
    },
    it = function(e, t) {
      return (t ? e : {
        X: 'Y',
        Y: 'X'
      } [e]) || ''
    },
    nt = function(e, t, r, p) {
      var o = t[0],
        i = t[1];
      if (!o && !i) return '';
      var n = {
        scale: function() {
          return i ? r ? o + ', ' + i : i + ', ' + o : '' + o
        }(),
        translate: function() {
          return i ? r ? p ? o + 'px, ' + -i + 'px' : o + 'px, ' + i + 'px' : p ? -i + 'px, ' + o + 'px' : i + 'px, ' + o + 'px' : p ? -o + 'px' : o + 'px'
        }()
      };
      return n[e]
    },
    st = function(e, t) {
      var r = e.match(new RegExp(t + '([XY])'));
      return r ? r[1] : ''
    },
    lt = function(e, t) {
      var r = e.match(t);
      return r ? r[1].split(',').map(parseFloat) : []
    },
    dt = {
      translate: /translateX?Y?\(([^)]+)\)/,
      scale: /scaleX?Y?\(([^)]+)\)/
    },
    mt = function(e, t) {
      var r = ut(rt(e, Ye.POPPER)),
        a = 'top' === r || 'bottom' === r,
        p = 'right' === r || 'bottom' === r,
        o = {
          translate: {
            axis: st(t, 'translate'),
            numbers: lt(t, dt.translate)
          },
          scale: {
            axis: st(t, 'scale'),
            numbers: lt(t, dt.scale)
          }
        },
        i = t.replace(dt.translate, 'translate' + it(o.translate.axis, a) + '(' + nt('translate', o.translate.numbers, a, p) + ')').replace(dt.scale, 'scale' + it(o.scale.axis, a) + '(' + nt('scale', o.scale.numbers, a, p) + ')');
      e.style['undefined' == typeof document.body.style.transform ? 'webkitTransform' : 'transform'] = i
    },
    ct = function(e, t) {
      e.filter(Boolean).forEach(function(e) {
        e.setAttribute('data-state', t)
      })
    },
    ft = function(e, t) {
      var r = e.popper,
        a = e.options,
        p = a.onCreate,
        o = a.onUpdate;
      a.onCreate = a.onUpdate = function() {
        ot(r), t(), o(), a.onCreate = p, a.onUpdate = o
      }
    },
    ht = function(e) {
      setTimeout(e, 1)
    },
    bt = function(e, t, r, a) {
      if (!e) return !0;
      var p = r.clientX,
        o = r.clientY,
        i = a.interactiveBorder,
        n = a.distance,
        s = t.top - o > ('top' === e ? i + n : i),
        l = o - t.bottom > ('bottom' === e ? i + n : i),
        d = t.left - p > ('left' === e ? i + n : i),
        m = p - t.right > ('right' === e ? i + n : i);
      return s || l || d || m
    },
    yt = function(e, t) {
      return -(e - t) + 'px'
    },
    ut = function(e) {
      var t = e.getAttribute('x-placement');
      return t ? t.split('-')[0] : ''
    },
    gt = function(e, t) {
      var r = oe({}, t, t.performance ? {} : Je(e));
      return r.arrow && (r.animateFill = !1), 'function' == typeof r.appendTo && (r.appendTo = t.appendTo(e)), 'function' == typeof r.content && (r.content = t.content(e)), r
    },
    wt = function(e, t, r) {
      e[t + 'EventListener']('transitionend', r)
    },
    xt = function(e, t) {
      var r;
      return function() {
        var a = this,
          p = arguments;
        clearTimeout(r), r = setTimeout(function() {
          return e.apply(a, p)
        }, t)
      }
    },
    vt = function(e, t) {
      for (var r in e || {})
        if (!(r in t)) throw Error('[tippy]: `' + r + '` is not a valid option')
    },
    kt = !1,
    Et = function() {
      kt || (kt = !0, he && document.body.classList.add('tippy-iOS'), window.performance && document.addEventListener('mousemove', Ct))
    },
    Ot = 0,
    Ct = function e() {
      var t = performance.now();
      20 > t - Ot && (kt = !1, document.removeEventListener('mousemove', e), !he && document.body.classList.remove('tippy-iOS')), Ot = t
    },
    Lt = function(e) {
      var t = e.target;
      if (!(t instanceof Element)) return $e();
      var r = rt(t, Ye.POPPER);
      if (!(r && r._tippy && r._tippy.props.interactive)) {
        var a = at(t, function(e) {
          return e._tippy && e._tippy.reference === e
        });
        if (a) {
          var p = a._tippy,
            o = -1 < p.props.trigger.indexOf('click');
          if (kt || o) return $e(p);
          if (!0 !== p.props.hideOnClick || o) return;
          p.clearDelayTimeouts()
        }
        $e()
      }
    },
    Tt = function() {
      var e = document,
        t = e.activeElement;
      t && t.blur && t._tippy && t.blur()
    },
    At = function() {
      Xe(document.querySelectorAll(Ye.POPPER)).forEach(function(e) {
        var t = e._tippy;
        t.props.livePlacement || t.popperInstance.scheduleUpdate()
      })
    },
    Pt = 1,
    St = !1,
    Yt = !1;
  $.version = pe, $.defaults = ie, $.one = function(e, t) {
    return $(e, t, !0).instances[0]
  }, $.setDefaults = function(e) {
    ne(e), $.defaults = ie
  }, $.disableAnimations = function() {
    $.setDefaults({
      duration: 0,
      updateDuration: 0,
      animateFill: !1
    })
  }, $.hideAllPoppers = $e, $.useCapture = function() {
    Yt = !0
  };
  return le && setTimeout(function() {
      Xe(document.querySelectorAll('[data-tippy]')).forEach(function(e) {
        var t = e.getAttribute('data-tippy');
        t && $(e, {
          content: t
        })
      })
    }),
    function(e) {
      if (ce) {
        var t = document.createElement('style');
        t.type = 'text/css', t.textContent = e, document.head.insertBefore(t, document.head.firstChild)
      }
    }(ae), $
});
//# sourceMappingURL=tippy.all.min.js.map

/*=====  End of 01. Tippy JS  ======*/




/*=============================================
=            02. Perfect Scrollbar            =
=============================================*/

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
}(this, function() {
  "use strict";

  function t(t) {
    return getComputedStyle(t)
  }

  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), t.style[i] = r
    }
    return t
  }

  function i(t) {
    var e = document.createElement("div");
    return e.className = t, e
  }

  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e)
  }

  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
  }

  function n(t, e) {
    return Array.prototype.filter.call(t.children, function(t) {
      return r(t, e)
    })
  }

  function o(t, e) {
    var i = t.element.classList,
      r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r)
  }

  function s(t, e) {
    Y[e] = setTimeout(function() {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e))
    }, t.settings.scrollingThreshold)
  }

  function a(t, e) {
    o(t, e), s(t, e)
  }

  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e
  }

  function h(t, e, i, r, l) {
    var n = i[0],
      o = i[1],
      s = i[2],
      h = i[3],
      u = i[4],
      d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]))
  }

  function u(t) {
    return parseInt(t, 10) || 0
  }

  function d(t) {
    return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]")
  }

  function f(e) {
    var i = t(e);
    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth)
  }

  function p(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
  }

  function b(t, i) {
    var r = {
        width: i.railXWidth
      },
      l = Math.floor(t.scrollTop);
    i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r);
    var n = {
      top: l,
      height: i.railYHeight
    };
    i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth
    }), e(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth
    })
  }

  function g(t, e) {
    function i(e) {
      b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault()
    }

    function r() {
      s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i)
    }
    var l = e[0],
      n = e[1],
      a = e[2],
      c = e[3],
      h = e[4],
      u = e[5],
      d = e[6],
      f = e[7],
      p = e[8],
      b = t.element,
      g = null,
      v = null,
      Y = null;
    t.event.bind(t[h], "mousedown", function(e) {
      g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault()
    })
  }
  var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
    m = {
      main: "ps",
      element: {
        thumb: function(t) {
          return "ps__thumb-" + t
        },
        rail: function(t) {
          return "ps__rail-" + t
        },
        consuming: "ps__child--consume"
      },
      state: {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function(t) {
          return "ps--active-" + t
        },
        scrolling: function(t) {
          return "ps--scrolling-" + t
        }
      }
    },
    Y = {
      x: null,
      y: null
    },
    X = function(t) {
      this.element = t, this.handlers = {}
    },
    w = {
      isEmpty: {
        configurable: !0
      }
    };
  X.prototype.bind = function(t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
  }, X.prototype.unbind = function(t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function(r) {
      return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1)
    })
  }, X.prototype.unbindAll = function() {
    var t = this;
    for (var e in t.handlers) t.unbind(e)
  }, w.isEmpty.get = function() {
    var t = this;
    return Object.keys(this.handlers).every(function(e) {
      return 0 === t.handlers[e].length
    })
  }, Object.defineProperties(X.prototype, w);
  var y = function() {
    this.eventElements = []
  };
  y.prototype.eventElement = function(t) {
    var e = this.eventElements.filter(function(e) {
      return e.element === t
    })[0];
    return e || (e = new X(t), this.eventElements.push(e)), e
  }, y.prototype.bind = function(t, e, i) {
    this.eventElement(t).bind(e, i)
  }, y.prototype.unbind = function(t, e, i) {
    var r = this.eventElement(t);
    r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
  }, y.prototype.unbindAll = function() {
    this.eventElements.forEach(function(t) {
      return t.unbindAll()
    }), this.eventElements = []
  }, y.prototype.once = function(t, e, i) {
    var r = this.eventElement(t),
      l = function(t) {
        r.unbind(e, l), i(t)
      };
    r.bind(e, l)
  };
  var W = function(t, e, i, r, l) {
      void 0 === r && (r = !0), void 0 === l && (l = !1);
      var n;
      if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
      else {
        if ("left" !== e) throw new Error("A proper axis should be provided");
        n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
      }
      h(t, i, n, r, l)
    },
    L = {
      isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
      isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    },
    R = function(t) {
      var e = t.element,
        i = Math.floor(e.scrollTop);
      t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function(t) {
        return l(t)
      }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function(t) {
        return l(t)
      }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0)
    },
    T = {
      "click-rail": function(t) {
        t.event.bind(t.scrollbarY, "mousedown", function(t) {
          return t.stopPropagation()
        }), t.event.bind(t.scrollbarYRail, "mousedown", function(e) {
          var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
          t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation()
        }), t.event.bind(t.scrollbarX, "mousedown", function(t) {
          return t.stopPropagation()
        }), t.event.bind(t.scrollbarXRail, "mousedown", function(e) {
          var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
          t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation()
        })
      },
      "drag-thumb": function(t) {
        g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
      },
      keyboard: function(t) {
        function e(e, r) {
          var l = Math.floor(i.scrollTop);
          if (0 === e) {
            if (!t.scrollbarYActive) return !1;
            if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation
          }
          var n = i.scrollLeft;
          if (0 === r) {
            if (!t.scrollbarXActive) return !1;
            if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation
          }
          return !0
        }
        var i = t.element,
          l = function() {
            return r(i, ":hover")
          },
          n = function() {
            return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus")
          };
        t.event.bind(t.ownerDocument, "keydown", function(r) {
          if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
            var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
            if (o) {
              if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
              else
                for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
              if (d(o)) return
            }
            var s = 0,
              a = 0;
            switch (r.which) {
              case 37:
                s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                break;
              case 38:
                a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                break;
              case 39:
                s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                break;
              case 40:
                a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                break;
              case 32:
                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                break;
              case 33:
                a = t.containerHeight;
                break;
              case 34:
                a = -t.containerHeight;
                break;
              case 36:
                a = t.contentHeight;
                break;
              case 35:
                a = -t.contentHeight;
                break;
              default:
                return
            }
            t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault())
          }
        })
      },
      wheel: function(e) {
        function i(t, i) {
          var r = Math.floor(o.scrollTop),
            l = 0 === o.scrollTop,
            n = r + o.offsetHeight === o.scrollHeight,
            s = 0 === o.scrollLeft,
            a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
          return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation
        }

        function r(t) {
          var e = t.deltaX,
            i = -1 * t.deltaY;
          return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
        }

        function l(e, i, r) {
          if (!L.isWebKit && o.querySelector("select:focus")) return !0;
          if (!o.contains(e)) return !1;
          for (var l = e; l && l !== o;) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
              var s = l.scrollHeight - l.clientHeight;
              if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0;
              var a = l.scrollWidth - l.clientWidth;
              if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0
            }
            l = l.parentNode
          }
          return !1
        }

        function n(t) {
          var n = r(t),
            s = n[0],
            a = n[1];
          if (!l(t.target, s, a)) {
            var c = !1;
            e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault())
          }
        }
        var o = e.element;
        void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n)
      },
      touch: function(e) {
        function i(t, i) {
          var r = Math.floor(h.scrollTop),
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);
          if (o > n) {
            if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome
          } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0;
          return !0
        }

        function r(t, i) {
          h.scrollTop -= i, h.scrollLeft -= t, R(e)
        }

        function l(t) {
          return t.targetTouches ? t.targetTouches[0] : t
        }

        function n(t) {
          return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
        }

        function o(t) {
          if (n(t)) {
            var e = l(t);
            u.pageX = e.pageX, u.pageY = e.pageY, d = (new Date).getTime(), null !== p && clearInterval(p)
          }
        }

        function s(e, i, r) {
          if (!h.contains(e)) return !1;
          for (var l = e; l && l !== h;) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
              var o = l.scrollHeight - l.clientHeight;
              if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0;
              var s = l.scrollLeft - l.clientWidth;
              if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0
            }
            l = l.parentNode
          }
          return !1
        }

        function a(t) {
          if (n(t)) {
            var e = l(t),
              o = {
                pageX: e.pageX,
                pageY: e.pageY
              },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
            if (s(t.target, a, c)) return;
            r(a, c), u = o;
            var h = (new Date).getTime(),
              p = h - d;
            p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault()
          }
        }

        function c() {
          e.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
            e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p)
          }, 10))
        }
        if (L.supportsTouch || L.supportsIePointer) {
          var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
          L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)))
        }
      }
    },
    H = function(r, l) {
      var n = this;
      if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
      this.element = r, r.classList.add(m.main), this.settings = {
        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1e3,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipeEasing: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !0,
        wheelSpeed: 1
      };
      for (var o in l) n.settings[o] = l[o];
      this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
      var s = function() {
          return r.classList.add(m.state.focus)
        },
        a = function() {
          return r.classList.remove(m.state.focus)
        };
      this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function() {
        var t = r.scrollLeft,
          e = null;
        return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e
      }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
      var c = t(this.scrollbarXRail);
      this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {
        display: "block"
      }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {
        display: ""
      }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
      var h = t(this.scrollbarYRail);
      this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {
        display: "block"
      }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {
        display: ""
      }), this.railYHeight = null, this.railYRatio = null, this.reach = {
        x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
        y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
      }, this.isAlive = !0, this.settings.handlers.forEach(function(t) {
        return T[t](n)
      }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(t) {
        return n.onScroll(t)
      }), R(this)
    };
  return H.prototype.update = function() {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
      display: "block"
    }), e(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
      display: "none"
    }), e(this.scrollbarYRail, {
      display: "none"
    }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
      display: ""
    }), e(this.scrollbarYRail, {
      display: ""
    }))
  }, H.prototype.onScroll = function(t) {
    this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
  }, H.prototype.destroy = function() {
    this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
  }, H.prototype.removePsClasses = function() {
    this.element.className = this.element.className.split(" ").filter(function(t) {
      return !t.match(/^ps([-_].+|)$/)
    }).join(" ")
  }, H
});

/*=====  End of 02. Perfect Scrollbar  ======*/


/*=============================================
=            03. Dl Menu            =
=============================================*/

/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
! function(l, i, n) {
  "use strict";
  var e = i.Modernizr,
    t = l("body");
  l.DLMenu = function(n, i) {
    this.$el = l(i), this._init(n)
  }, l.DLMenu.defaults = {
    animationClasses: {
      classin: "dl-animate-in-1",
      classout: "dl-animate-out-1"
    },
    onLevelClick: function(n, i) {
      return !1
    },
    onLinkClick: function(n, i) {
      return !1
    },
    backLabel: "Back",
    useActiveItemAsBackLabel: !1,
    useActiveItemAsLink: !1,
    resetOnClose: !0
  }, l.DLMenu.prototype = {
    _init: function(n) {
      this.options = l.extend(!0, {}, l.DLMenu.defaults, n), this._config();
      this.animEndEventName = {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
      } [e.prefixed("animation")] + ".dlmenu", this.transEndEventName = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
      } [e.prefixed("transition")] + ".dlmenu", this.supportAnimations = e.cssanimations, this.supportTransitions = e.csstransitions, this._initEvents()
    },
    _config: function() {
      this.open = !1, this.$trigger = this.$el.children(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">' + this.options.backLabel + "</a></li>"), this.$back = this.$menu.find("li.dl-back"), this.options.useActiveItemAsBackLabel && this.$back.each(function() {
        var n = l(this),
          i = n.parents("li:first").find("a:first").text();
        n.find("a").html(i)
      }), this.options.useActiveItemAsLink && this.$el.find("ul.dl-submenu").prepend(function() {
        var n = l(this).parents("li:not(.dl-back):first").find("a:first");
        return '<li class="dl-parent"><a href="' + n.attr("href") + '">' + n.text() + "</a></li>"
      })
    },
    _initEvents: function() {
      var a = this;
      this.$trigger.on("click.dlmenu", function() {
        return a.open ? a._closeMenu() : (a._openMenu(), t.off("click").children().on("click.dlmenu", function() {
          a._closeMenu()
        })), !1
      }), this.$menuitems.on("click.dlmenu", function(n) {
        n.stopPropagation();
        var i = l(this),
          e = i.children("ul.dl-submenu");
        if (0 < e.length && !l(n.currentTarget).hasClass("dl-subviewopen")) {
          var t = e.clone().css("opacity", 0).insertAfter(a.$menu),
            s = function() {
              a.$menu.off(a.animEndEventName).removeClass(a.options.animationClasses.classout).addClass("dl-subview"), i.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), t.remove()
            };
          return setTimeout(function() {
            t.addClass(a.options.animationClasses.classin), a.$menu.addClass(a.options.animationClasses.classout), a.supportAnimations ? a.$menu.on(a.animEndEventName, s) : s.call(), a.options.onLevelClick(i, i.children("a:first").text())
          }), !1
        }
        a.options.onLinkClick(i, n)
      }), this.$back.on("click.dlmenu", function(n) {
        var i = l(this),
          e = i.parents("ul.dl-submenu:first"),
          t = e.parent(),
          s = e.clone().insertAfter(a.$menu),
          o = function() {
            a.$menu.off(a.animEndEventName).removeClass(a.options.animationClasses.classin), s.remove()
          };
        return setTimeout(function() {
          s.addClass(a.options.animationClasses.classout), a.$menu.addClass(a.options.animationClasses.classin), a.supportAnimations ? a.$menu.on(a.animEndEventName, o) : o.call(), t.removeClass("dl-subviewopen");
          var n = i.parents(".dl-subview:first");
          n.is("li") && n.addClass("dl-subviewopen"), n.removeClass("dl-subview")
        }), !1
      })
    },
    closeMenu: function() {
      this.open && this._closeMenu()
    },
    _closeMenu: function() {
      var n = this,
        i = function() {
          n.$menu.off(n.transEndEventName), n.options.resetOnClose && n._resetMenu()
        };
      this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, i) : i.call(), this.open = !1
    },
    openMenu: function() {
      this.open || this._openMenu()
    },
    _openMenu: function() {
      var n = this;
      t.off("click").on("click.dlmenu", function() {
        n._closeMenu()
      }), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, function() {
        l(this).removeClass("dl-menu-toggle")
      }), this.$trigger.addClass("dl-active"), this.open = !0
    },
    _resetMenu: function() {
      this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
    }
  };
  var s = function(n) {
    i.console && i.console.error(n)
  };
  l.fn.dlmenu = function(i) {
    if ("string" == typeof i) {
      var e = Array.prototype.slice.call(arguments, 1);
      this.each(function() {
        var n = l.data(this, "dlmenu");
        n ? l.isFunction(n[i]) && "_" !== i.charAt(0) ? n[i].apply(n, e) : s("no such method '" + i + "' for dlmenu instance") : s("cannot call methods on dlmenu prior to initialization; attempted to call method '" + i + "'")
      })
    } else this.each(function() {
      var n = l.data(this, "dlmenu");
      n ? n._init() : n = l.data(this, "dlmenu", new l.DLMenu(i, this))
    });
    return this
  }
}(jQuery, window);



/*=====  End of 03. Dl Menu  ======*/


/*=============================================
=            04. Mailchimp            =
=============================================*/

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
(function($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    },
    translations: {
      en: null
    },
    init: function(selector, options) {
      $(selector).ajaxChimp(options)
    }
  };
  $.fn.ajaxChimp = function(options) {
    $(this).each(function(i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend({
        url: form.attr("action"),
        language: "en"
      }, options);
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function() {
        var msg;

        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid")
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1]
                } else {
                  index = -1;
                  msg = resp.msg
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg
            }
          }
          if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
            msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp)
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function(index, item) {
          data[item.name] = item.value
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function(resp, text) {
            console.log("mailchimp ajax submit error: " + text)
          }
        });
        var submitMsg = "Submitting...";
        if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
        }
        label.html(submitMsg).show(2e3);
        return false
      })
    });
    return this
  }
})(jQuery);


/*=====  End of 04. Mailchimp  ======*/



/*=============================================
=            05. Slick Slider            =
=============================================*/

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
})(function(i) {
  "use strict";
  var e = window.Slick || {};
  e = function() {
    function e(e, o) {
      var s, n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
          return i('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }
    var t = 0;
    return e
  }(), e.prototype.activateADA = function() {
    var i = this;
    i.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;
    else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
      i(t).attr("data-slick-index", e)
    }), s.$slidesCache = s.$slides, s.reinit()
  }, e.prototype.animateHeight = function() {
    var i = this;
    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed)
    }
  }, e.prototype.animateSlide = function(e, t) {
    var o = {},
      s = this;
    s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function(i) {
        i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
      },
      complete: function() {
        t && t.call()
      }
    })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
      s.disableTransition(), t.call()
    }, s.options.speed))
  }, e.prototype.getNavTarget = function() {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t
  }, e.prototype.asNavFor = function(e) {
    var t = this,
      o = t.getNavTarget();
    null !== o && "object" == typeof o && o.each(function() {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0)
    })
  }, e.prototype.applyTransition = function(i) {
    var e = this,
      t = {};
    e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.autoPlay = function() {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
  }, e.prototype.autoPlayClear = function() {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer)
  }, e.prototype.autoPlayIterator = function() {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
  }, e.prototype.buildArrows = function() {
    var e = this;
    e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, e.prototype.buildDots = function() {
    var e, t, o = this;
    if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
    }
  }, e.prototype.buildOut = function() {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
  }, e.prototype.buildRows = function() {
    var i, e, t, o, s, n, r, l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c))
          }
          d.appendChild(a)
        }
        o.appendChild(d)
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, e.prototype.checkResponsive = function(e, t) {
    var o, s, n, r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
    }
  }, e.prototype.changeSlide = function(e, t) {
    var o, s, n, r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return
    }
  }, e.prototype.checkNavigable = function(i) {
    var e, t, o = this;
    if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
    else
      for (var s in e) {
        if (i < e[s]) {
          i = t;
          break
        }
        t = e[s]
      }
    return i
  }, e.prototype.cleanUpEvents = function() {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.cleanUpSlideEvents = function() {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.cleanUpRows = function() {
    var i, e = this;
    e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
  }, e.prototype.clickHandler = function(i) {
    var e = this;
    e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
  }, e.prototype.destroy = function(e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      i(this).attr("style", i(this).data("originalStyling"))
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
  }, e.prototype.disableTransition = function(i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.fadeSlide = function(i, e) {
    var t = this;
    t.cssTransitions === !1 ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function() {
      t.disableTransition(i), e.call()
    }, t.options.speed))
  }, e.prototype.fadeSlideOut = function(i) {
    var e = this;
    e.cssTransitions === !1 ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }))
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
  }, e.prototype.focusHandler = function() {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(t) {
      var o = i(this);
      setTimeout(function() {
        e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay())
      }, 0)
    }).on("blur.slick", "*", function(t) {
      i(this);
      e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay())
    })
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
    var i = this;
    return i.currentSlide
  }, e.prototype.getDotCount = function() {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (i.options.infinite === !0)
      if (i.slideCount <= i.options.slidesToShow) ++o;
      else
        for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    else if (i.options.centerMode === !0) o = i.slideCount;
    else if (i.options.asNavFor)
      for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1
  }, e.prototype.getLeft = function(i) {
    var e, t, o, s, n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
  }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
    var e = this;
    return e.options[i]
  }, e.prototype.getNavigableIndexes = function() {
    var i, e = this,
      t = 0,
      o = 0,
      s = [];
    for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s
  }, e.prototype.getSlick = function() {
    return this
  }, e.prototype.getSlideCount = function() {
    var e, t, o, s, n = this;
    return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(e, s) {
      var r, l, d;
      if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1
    }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
  }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
    var t = this;
    t.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e)
  }, e.prototype.init = function(e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
  }, e.prototype.initADA = function() {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function(i) {
        return i >= 0 && i < e.slideCount
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
      var s = o.indexOf(t);
      if (i(this).attr({
          role: "tabpanel",
          id: "slick-slide" + e.instanceUid + t,
          tabindex: -1
        }), s !== -1) {
        var n = "slick-slide-control" + e.instanceUid + s;
        i("#" + n).length && i(this).attr({
          "aria-describedby": n
        })
      }
    }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      })
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
      tabindex: "0"
    }) : e.$slides.eq(s).removeAttr("tabindex");
    e.activateADA()
  }, e.prototype.initArrowEvents = function() {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
  }, e.prototype.initDotEvents = function() {
    var e = this;
    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.initSlideEvents = function() {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
  }, e.prototype.initializeEvents = function() {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
  }, e.prototype.initUI = function() {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
  }, e.prototype.keyHandler = function(i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, e.prototype.lazyLoad = function() {
    function e(e) {
      i("img[data-lazy]", e).each(function() {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
          n = document.createElement("img");
        n.onload = function() {
          e.animate({
            opacity: 0
          }, 100, function() {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function() {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
            }), r.$slider.trigger("lazyLoaded", [r, e, t])
          })
        }, n.onerror = function() {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
        }, n.src = t
      })
    }
    var t, o, s, n, r = this;
    if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
      for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
    e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o))
  }, e.prototype.loadSlider = function() {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
  }, e.prototype.next = e.prototype.slickNext = function() {
    var i = this;
    i.changeSlide({
      data: {
        message: "next"
      }
    })
  }, e.prototype.orientationChange = function() {
    var i = this;
    i.checkResponsive(), i.setPosition()
  }, e.prototype.pause = e.prototype.slickPause = function() {
    var i = this;
    i.autoPlayClear(), i.paused = !0
  }, e.prototype.play = e.prototype.slickPlay = function() {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
  }, e.prototype.postSlide = function(e) {
    var t = this;
    if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
      var o = i(t.$slides.get(t.currentSlide));
      o.attr("tabindex", 0).focus()
    }
  }, e.prototype.prev = e.prototype.slickPrev = function() {
    var i = this;
    i.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, e.prototype.preventDefault = function(i) {
    i.preventDefault()
  }, e.prototype.progressiveLazyLoad = function(e) {
    e = e || 1;
    var t, o, s, n, r, l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
    }, r.onerror = function() {
      e < 3 ? setTimeout(function() {
        l.progressiveLazyLoad(e + 1)
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
  }, e.prototype.refresh = function(e) {
    var t, o, s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1)
  }, e.prototype.registerBreakpoints = function() {
    var e, t, o, s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n)
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
        } s.breakpoints.sort(function(i, e) {
        return s.options.mobileFirst ? i - e : e - i
      })
    }
  }, e.prototype.reinit = function() {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
  }, e.prototype.resize = function() {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
    }, 50))
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
    var o = this;
    return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
  }, e.prototype.setCSS = function(i) {
    var e, t, o = this,
      s = {};
    o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
  }, e.prototype.setDimensions = function() {
    var i = this;
    i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
  }, e.prototype.setFade = function() {
    var e, t = this;
    t.$slides.each(function(o, s) {
      e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      })
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    })
  }, e.prototype.setHeight = function() {
    var i = this;
    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e)
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
    var e, t, o, s, n, r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
    else if ("multiple" === n) i.each(o, function(i, e) {
      r.options[i] = e
    });
    else if ("responsive" === n)
      for (t in s)
        if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
        else {
          for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
          r.options.responsive.push(s[t])
        } l && (r.unload(), r.reinit())
  }, e.prototype.setPosition = function() {
    var i = this;
    i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
  }, e.prototype.setProps = function() {
    var i = this,
      e = document.body.style;
    i.positionProp = i.options.vertical === !0 ? "top" : "left",
      "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
  }, e.prototype.setSlideClasses = function(i) {
    var e, t, o, s, n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
      var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
  }, e.prototype.setupInfinite = function() {
    var e, t, o, s = this;
    if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        i(this).attr("id", "")
      })
    }
  }, e.prototype.interrupt = function(i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i
  }, e.prototype.selectHandler = function(e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
  }, e.prototype.slideHandler = function(i, e, t) {
    var o, s, n, r, l, d = null,
      a = this;
    if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
      a.postSlide(o)
    }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
      a.postSlide(o)
    }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
      a.postSlide(s)
    })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function() {
      a.postSlide(s)
    }) : a.postSlide(s)))
  }, e.prototype.startLoad = function() {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
  }, e.prototype.swipeDirection = function() {
    var i, e, t, o, s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
  }, e.prototype.swipeEnd = function(i) {
    var e, t, o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
  }, e.prototype.swipeHandler = function(i) {
    var e = this;
    if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i)
    }
  }, e.prototype.swipeMove = function(i) {
    var e, t, o, s, n, r, l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
  }, e.prototype.swipeStart = function(i) {
    var e, t = this;
    return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
  }, e.prototype.unload = function() {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, e.prototype.unslick = function(i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy()
  }, e.prototype.updateArrows = function() {
    var i, e = this;
    i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, e.prototype.updateDots = function() {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
  }, e.prototype.visibility = function() {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
  }, i.fn.slick = function() {
    var i, t, o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++)
      if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
    return o
  }
});

/*=====  End of 05. Slick Slider  ======*/


/*=============================================
=            06. ImagesLoaded            =
=============================================*/

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return t.on = function(e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
        n = i[e] = i[e] || [];
      return n.indexOf(t) == -1 && n.push(t), this
    }
  }, t.once = function(e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[e] = i[e] || {};
      return n[t] = !0, this
    }
  }, t.off = function(e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      var n = i.indexOf(t);
      return n != -1 && i.splice(n, 1), this
    }
  }, t.emitEvent = function(e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      i = i.slice(0), t = t || [];
      for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(e, r), delete n[r]), r.apply(this, t)
      }
      return this
    }
  }, t.allOff = function() {
    delete this._events, delete this._onceEvents
  }, e
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
    return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
  function i(e, t) {
    for (var i in t) e[i] = t[i];
    return e
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == typeof e && "number" == typeof e.length;
    return t ? d.call(e) : [e]
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
  }

  function r(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }
  var h = e.jQuery,
    a = e.console,
    d = Array.prototype.slice;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function(e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function(e) {
    var t = getComputedStyle(e);
    if (t)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
      }
  }, o.prototype.addImage = function(e) {
    var t = new r(e);
    this.images.push(t)
  }, o.prototype.addBackground = function(e, t) {
    var i = new s(e, t);
    this.images.push(i)
  }, o.prototype.check = function() {
    function e(e, i, n) {
      setTimeout(function() {
        t.progress(e, i, n)
      })
    }
    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
      t.once("progress", e), t.check()
    }) : void this.complete()
  }, o.prototype.progress = function(e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
  }, o.prototype.complete = function() {
    var e = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth
  }, r.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, r.prototype.handleEvent = function(e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, r.prototype.onload = function() {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function() {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, o.makeJQueryPlugin = function(t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});


/*=====  End of 06. ImagesLoaded  ======*/





/*=============================================
=            07. Masonry          =
=============================================*/

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o, r = "$()." + i + '("' + e + '")';
      return t.each(function(t, h) {
        var u = a.data(h, i);
        if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
        var l = d.apply(u, n);
        o = void 0 === o ? l : o
      }), void 0 !== o ? o : t
    }

    function u(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
      })
    }
    a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return h(this, t, e)
      }
      return u(this, t), this
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    r = t.console,
    s = "undefined" == typeof r ? function() {} : function(t) {
      r.error(t)
    };
  return n(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || {};
      return n[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(t, r), delete n[r]), r.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; u > e; e++) {
      var i = h[e];
      t[i] = 0
    }
    return t
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
    }
  }

  function r(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
        var c = h[l],
          f = r[c],
          m = parseFloat(f);
        a[c] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        g = a.paddingTop + a.paddingBottom,
        y = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        E = d && s,
        b = t(r.width);
      b !== !1 && (a.width = b + (E ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
    }
  }
  var s, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    u = h.length,
    d = !1;
  return r
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  };
  var n = Array.prototype.slice;
  i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? n.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
      }
    }), o
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
        r = this;
      this[o] = setTimeout(function() {
        n.apply(r, e), delete r[o]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var o = t.console;
  return i.htmlInit = function(e, n) {
    i.docReady(function() {
      var r = i.toDashed(n),
        s = "data-" + r,
        a = document.querySelectorAll("[" + s + "]"),
        h = document.querySelectorAll(".js-" + r),
        u = i.makeArray(a).concat(i.makeArray(h)),
        d = s + "-options",
        l = t.jQuery;
      u.forEach(function(t) {
        var i, r = t.getAttribute(s) || t.getAttribute(d);
        try {
          i = r && JSON.parse(r)
        } catch (a) {
          return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
        }
        var h = new e(t, i);
        l && l.data(t, n, h)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var r = document.documentElement.style,
    s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
    h = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [s],
    u = {
      transform: a,
      transition: s,
      transitionDuration: s + "Duration",
      transitionProperty: s + "Property",
      transitionDelay: s + "Delay"
    },
    d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var n = u[i] || i;
      e[n] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      r = parseFloat(n),
      s = parseFloat(o),
      a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      r = i ? "left" : "right",
      s = i ? "right" : "left",
      a = this.position.x + t[o];
    e[r] = this.getXValue(a), e[s] = "";
    var h = n ? "paddingTop" : "paddingBottom",
      u = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      l = this.position.y + t[h];
    e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
    var r = t - i,
      s = e - n,
      a = {};
    a.transform = this.getTranslate(r, s), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + o(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(h, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var c = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        n = c[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var f = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(f)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, n
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
    return e(t, i, n, o, r)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
  "use strict";

  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, c[o] = this, this._create();
    var r = this._getOption("initLayout");
    r && this.layout()
  }

  function s(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o
  }
  var h = t.console,
    u = t.jQuery,
    d = function() {},
    l = 0,
    c = {};
  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var f = r.prototype;
  n.extend(f, e.prototype), f.option = function(t) {
    n.extend(this.options, t)
  }, f._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, f._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, f.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, f._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var r = e[o],
        s = new i(r, this);
      n.push(s)
    }
    return n
  }, f._filterFindItemElements = function(t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, f.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, f.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, f._init = f.layout, f._resetLayout = function() {
    this.getSize()
  }, f.getSize = function() {
    this.size = i(this.element)
  }, f._getMeasurement = function(t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, f.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, f._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, f._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }, this), this._processLayoutQueue(i)
    }
  }, f._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, f._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, f.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, f._positionItem = function(t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, f._postLayout = function() {
    this.resizeContainer()
  }, f.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, f._emitCompleteOnItems = function(t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      s++, s == r && i()
    }
    var o = this,
      r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function(e) {
      e.once(t, n)
    })
  }, f.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), u)
      if (this.$element = this.$element || u(this.element), e) {
        var o = u.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, f.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, f.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, f.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, f.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, f._find = function(t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, f._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, f._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, f._manageStamp = d, f._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      r = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return r
  }, f.handleEvent = n.handleEvent, f.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, f.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, f.onresize = function() {
    this.resize()
  }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, f.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, f.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, f.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, f.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, f.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, f.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, f.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, f.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, f.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, f.getItems = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, f.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), n.removeFrom(this.items, t)
    }, this)
  }, f.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
  }, r.data = function(t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e]
  }, r.create = function(t, e) {
    var i = s(r);
    return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return r.Item = o, r
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return n._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, n.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      r = o / n,
      s = n - o % n,
      a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, n.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth
  }, n._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
        x: this.columnWidth * r.col,
        y: r.y
      }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
    return s
  }, n._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, n._getTopColGroup = function(t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
    return e
  }, n._getColGroupY = function(t, e) {
    if (2 > e) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, n._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      n = t > 1 && i + t > this.cols;
    i = n ? 0 : i;
    var o = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, n._manageStamp = function(t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      r = o ? n.left : n.right,
      s = r + i.outerWidth,
      a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
    for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, n._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, n._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, n.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
});


/*=====  End of 07. Masonry  ======*/


/*=============================================
=            08. WOW JS            =
=============================================*/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
  var a, b, c, d, e, f = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    g = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  b = function() {
    function a() {}
    return a.prototype.extend = function(a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a
    }, a.prototype.isMobile = function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }, a.prototype.createEvent = function(a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }, a.prototype.emitEvent = function(a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
    }, a.prototype.addEvent = function(a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }, a.prototype.removeEvent = function(a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }, a.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, a
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a() {
      this.keys = [], this.values = []
    }
    return a.prototype.get = function(a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
        if (c = f[b], c === a) return this.values[b]
    }, a.prototype.set = function(a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
        if (d = g[c], d === a) return void(this.values[c] = b);
      return this.keys.push(a), this.values.push(b)
    }, a
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return a.notSupported = !0, a.prototype.observe = function() {}, a
  }()), d = this.getComputedStyle || function(a, b) {
    return this.getPropertyValue = function(b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
        return b.toUpperCase()
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = function() {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    }, e.prototype.init = function() {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, e.prototype.start = function() {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function() {
          var a, c, d, e;
          for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.all = function() {
          var a, c, d, e;
          for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.boxes.length)
        if (this.disabled()) this.resetStyle();
        else
          for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
        return function(b) {
          var c, d, e, f, g;
          for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
            var a, b, c, d;
            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
            return d
          }.call(a));
          return g
        }
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0
    }, e.prototype.stop = function() {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, e.prototype.sync = function(b) {
      return a.notSupported ? this.doSync(this.element) : void 0
    }, e.prototype.doSync = function(a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f
      }
    }, e.prototype.show = function(a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
    }, e.prototype.applyStyle = function(a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
        return function() {
          return f.customStyle(a, b, d, c, e)
        }
      }(this))
    }, e.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a) {
        return window.requestAnimationFrame(a)
      } : function(a) {
        return a()
      }
    }(), e.prototype.resetStyle = function() {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e
    }, e.prototype.resetAnimation = function(a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
    }, e.prototype.customStyle = function(a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
      var c, d, e, f;
      d = [];
      for (c in b) e = b[c], a["" + c] = e, d.push(function() {
        var b, d, g, h;
        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
        return h
      }.call(this));
      return d
    }, e.prototype.vendorCSS = function(a, b) {
      var c, e, f, g, h, i;
      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      return g
    }, e.prototype.animationName = function(a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText
      } catch (c) {
        b = d(a).getPropertyValue("animation-name")
      }
      return "none" === b ? "" : b
    }, e.prototype.cacheAnimationName = function(a) {
      return this.animationNameCache.set(a, this.animationName(a))
    }, e.prototype.cachedAnimationName = function(a) {
      return this.animationNameCache.get(a)
    }, e.prototype.scrollHandler = function() {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function() {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, e.prototype.offsetTop = function(a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b
    }, e.prototype.isVisible = function(a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b
    }, e.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}).call(this);


/*=====  End of 08. WOW JS  ======*/


/*=============================================
=            09. Velocity JS            =
=============================================*/

/*! VelocityJS.org (1.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.0-rc1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(e) {
  function t(e) {
    var t = e.length,
      r = $.type(e);
    return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }
  if (!e.jQuery) {
    var $ = function(e, t) {
      return new $.fn.init(e, t)
    };
    $.isWindow = function(e) {
      return null != e && e == e.window
    }, $.type = function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
    }, $.isArray = Array.isArray || function(e) {
      return "array" === $.type(e)
    }, $.isPlainObject = function(e) {
      var t;
      if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
      try {
        if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (r) {
        return !1
      }
      for (t in e);
      return void 0 === t || n.call(e, t)
    }, $.each = function(e, r, a) {
      var n, o = 0,
        i = e.length,
        s = t(e);
      if (a) {
        if (s)
          for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
        else
          for (o in e)
            if (n = r.apply(e[o], a), n === !1) break
      } else if (s)
        for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
      else
        for (o in e)
          if (n = r.call(e[o], o, e[o]), n === !1) break;
      return e
    }, $.data = function(e, t, a) {
      if (void 0 === a) {
        var n = e[$.expando],
          o = n && r[n];
        if (void 0 === t) return o;
        if (o && t in o) return o[t]
      } else if (void 0 !== t) {
        var n = e[$.expando] || (e[$.expando] = ++$.uuid);
        return r[n] = r[n] || {}, r[n][t] = a, a
      }
    }, $.removeData = function(e, t) {
      var a = e[$.expando],
        n = a && r[a];
      n && $.each(t, function(e, t) {
        delete n[t]
      })
    }, $.extend = function() {
      var e, t, r, a, n, o, i = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
        if (null != (n = arguments[s]))
          for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
      return i
    }, $.queue = function(e, r, a) {
      function n(e, r) {
        var a = r || [];
        return null != e && (t(Object(e)) ? ! function(e, t) {
          for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
          if (r !== r)
            for (; void 0 !== t[a];) e[n++] = t[a++];
          return e.length = n, e
        }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
      }
      if (e) {
        r = (r || "fx") + "queue";
        var o = $.data(e, r);
        return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
      }
    }, $.dequeue = function(e, t) {
      $.each(e.nodeType ? [e] : e, function(e, r) {
        t = t || "fx";
        var a = $.queue(r, t),
          n = a.shift();
        "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
          $.dequeue(r, t)
        }))
      })
    }, $.fn = $.prototype = {
      init: function(e) {
        if (e.nodeType) return this[0] = e, this;
        throw new Error("Not a DOM node.")
      },
      offset: function() {
        var t = this[0].getBoundingClientRect();
        return {
          top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        }
      },
      position: function() {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
          return e || document
        }
        var t = this[0],
          e = e.apply(t),
          r = this.offset(),
          a = /^(?:body|html)$/i.test(e.nodeName) ? {
            top: 0,
            left: 0
          } : $(e).offset();
        return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
          top: r.top - a.top,
          left: r.left - a.left
        }
      }
    };
    var r = {};
    $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
    for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
    $.fn.init.prototype = $.fn, e.Velocity = {
      Utilities: $
    }
  }
}(window),
function(e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
  return function(e, t, r, a) {
    function n(e) {
      for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
        var n = e[t];
        n && a.push(n)
      }
      return a
    }

    function o(e) {
      return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
    }

    function i(e) {
      var t = $.data(e, "velocity");
      return null === t ? a : t
    }

    function s(e) {
      return function(t) {
        return Math.round(t * e) * (1 / e)
      }
    }

    function l(e, r, a, n) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e
      }

      function i(e, t) {
        return 3 * t - 6 * e
      }

      function s(e) {
        return 3 * e
      }

      function l(e, t, r) {
        return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
      }

      function u(e, t, r) {
        return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
      }

      function c(t, r) {
        for (var n = 0; m > n; ++n) {
          var o = u(r, e, a);
          if (0 === o) return r;
          var i = l(r, e, a) - t;
          r -= i / o
        }
        return r
      }

      function p() {
        for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
      }

      function f(t, r, n) {
        var o, i, s = 0;
        do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
        return i
      }

      function d(t) {
        for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
        --n;
        var i = (t - w[n]) / (w[n + 1] - w[n]),
          s = r + i * x,
          l = u(s, e, a);
        return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
      }

      function g() {
        V = !0, (e != r || a != n) && p()
      }
      var m = 4,
        y = .001,
        h = 1e-7,
        v = 10,
        b = 11,
        x = 1 / (b - 1),
        S = "Float32Array" in t;
      if (4 !== arguments.length) return !1;
      for (var P = 0; 4 > P; ++P)
        if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
      e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
      var w = S ? new Float32Array(b) : new Array(b),
        V = !1,
        C = function(t) {
          return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
        };
      C.getControlPoints = function() {
        return [{
          x: e,
          y: r
        }, {
          x: a,
          y: n
        }]
      };
      var T = "generateBezier(" + [e, r, a, n] + ")";
      return C.toString = function() {
        return T
      }, C
    }

    function u(e, t) {
      var r = e;
      return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
    }

    function c(e) {
      if (e)
        for (var t = (new Date).getTime(), r = 0, n = v.State.calls.length; n > r; r++)
          if (v.State.calls[r]) {
            var o = v.State.calls[r],
              s = o[0],
              l = o[2],
              u = o[3];
            u || (u = v.State.calls[r][3] = t - 16);
            for (var f = Math.min((t - u) / l.duration, 1), d = 0, m = s.length; m > d; d++) {
              var y = s[d],
                h = y.element;
              if (i(h)) {
                var b = !1;
                if (l.display !== a && null !== l.display && "none" !== l.display) {
                  if ("flex" === l.display) {
                    var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                    $.each(S, function(e, t) {
                      x.setPropertyValue(h, "display", t)
                    })
                  }
                  x.setPropertyValue(h, "display", l.display)
                }
                l.visibility && "hidden" !== l.visibility && x.setPropertyValue(h, "visibility", l.visibility);
                for (var w in y)
                  if ("element" !== w) {
                    var V = y[w],
                      C, T = g.isString(V.easing) ? v.Easings[V.easing] : V.easing;
                    if (C = 1 === f ? V.endValue : V.startValue + (V.endValue - V.startValue) * T(f), V.currentValue = C, x.Hooks.registered[w]) {
                      var k = x.Hooks.getRoot(w),
                        A = i(h).rootPropertyValueCache[k];
                      A && (V.rootPropertyValue = A)
                    }
                    var F = x.setPropertyValue(h, w, V.currentValue + (0 === parseFloat(C) ? "" : V.unitType), V.rootPropertyValue, V.scrollData);
                    x.Hooks.registered[w] && (i(h).rootPropertyValueCache[k] = x.Normalizations.registered[k] ? x.Normalizations.registered[k]("extract", null, F[1]) : F[1]), "transform" === F[0] && (b = !0)
                  } l.mobileHA && i(h).transformCache.translate3d === a && (i(h).transformCache.translate3d = "(0px, 0px, 0px)", b = !0), b && x.flushTransformCache(h)
              }
            }
            l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], f, Math.max(0, u + l.duration - t), u), 1 === f && p(r)
          } v.State.isTicking && P(c)
    }

    function p(e, t) {
      if (!v.State.calls[e]) return !1;
      for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
        var p = r[u].element;
        if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
          i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
          var f = !1;
          $.each(x.Lists.transforms3D, function(e, t) {
            var r = /^scale/.test(t) ? 1 : 0,
              n = i(p).transformCache[t];
            i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
          }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
        }
        if (!t && o.complete && !o.loop && u === c - 1) try {
          o.complete.call(n, n)
        } catch (d) {
          setTimeout(function() {
            throw d
          }, 1)
        }
        s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
        }), v(p, "reverse", {
          loop: !0,
          delay: o.delay
        })), o.queue !== !1 && $.dequeue(p, o.queue)
      }
      v.State.calls[e] = !1;
      for (var g = 0, m = v.State.calls.length; m > g; g++)
        if (v.State.calls[g] !== !1) {
          l = !0;
          break
        } l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
    }
    var f = function() {
        if (r.documentMode) return r.documentMode;
        for (var e = 7; e > 4; e--) {
          var t = r.createElement("div");
          if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
        }
        return a
      }(),
      d = function() {
        var e = 0;
        return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
          var r = (new Date).getTime(),
            a;
          return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
            t(r + a)
          }, a)
        }
      }(),
      g = {
        isString: function(e) {
          return "string" == typeof e
        },
        isArray: Array.isArray || function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        isFunction: function(e) {
          return "[object Function]" === Object.prototype.toString.call(e)
        },
        isNode: function(e) {
          return e && e.nodeType
        },
        isNodeList: function(e) {
          return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
        },
        isWrapped: function(e) {
          return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
        },
        isSVG: function(e) {
          return t.SVGElement && e instanceof SVGElement
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
        }
      },
      $, m = !1;
    if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
    var y = 400,
      h = "swing",
      v = {
        State: {
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          isAndroid: /Android/i.test(navigator.userAgent),
          isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
          isChrome: t.chrome,
          isFirefox: /Firefox/i.test(navigator.userAgent),
          prefixElement: r.createElement("div"),
          prefixMatches: {},
          scrollAnchor: null,
          scrollPropertyLeft: null,
          scrollPropertyTop: null,
          isTicking: !1,
          calls: []
        },
        CSS: {},
        Utilities: $,
        Sequences: {},
        Easings: {},
        Promise: t.Promise,
        defaults: {
          queue: "",
          duration: y,
          easing: h,
          begin: null,
          complete: null,
          progress: null,
          display: a,
          loop: !1,
          delay: !1,
          mobileHA: !0,
          _cacheValues: !0
        },
        init: function(e) {
          $.data(e, "velocity", {
            isSVG: g.isSVG(e),
            isAnimating: !1,
            computedStyle: null,
            tweensContainer: null,
            rootPropertyValueCache: {},
            transformCache: {}
          })
        },
        animate: null,
        hook: null,
        mock: !1,
        version: {
          major: 1,
          minor: 0,
          patch: 0
        },
        debug: !1
      };
    t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
    var b = function() {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v
      }

      function t(t, r, a) {
        var n = {
          x: t.x + a.dx * r,
          v: t.v + a.dv * r,
          tension: t.tension,
          friction: t.friction
        };
        return {
          dx: n.v,
          dv: e(n)
        }
      }

      function r(r, a) {
        var n = {
            dx: r.v,
            dv: e(r)
          },
          o = t(r, .5 * a, n),
          i = t(r, .5 * a, o),
          s = t(r, a, i),
          l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
          u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
        return r.x = r.x + l * a, r.v = r.v + u * a, r
      }
      return function a(e, t, n) {
        var o = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
          },
          i = [0],
          s = 0,
          l = 1e-4,
          u = .016,
          c, p, f;
        for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
          if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
        return c ? function(e) {
          return i[e * (i.length - 1) | 0]
        } : s
      }
    }();
    v.Easings = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      spring: function(e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
      }
    }, $.each([
      ["ease", [.25, .1, .25, 1]],
      ["ease-in", [.42, 0, 1, 1]],
      ["ease-out", [0, 0, .58, 1]],
      ["ease-in-out", [.42, 0, .58, 1]],
      ["easeInSine", [.47, 0, .745, .715]],
      ["easeOutSine", [.39, .575, .565, 1]],
      ["easeInOutSine", [.445, .05, .55, .95]],
      ["easeInQuad", [.55, .085, .68, .53]],
      ["easeOutQuad", [.25, .46, .45, .94]],
      ["easeInOutQuad", [.455, .03, .515, .955]],
      ["easeInCubic", [.55, .055, .675, .19]],
      ["easeOutCubic", [.215, .61, .355, 1]],
      ["easeInOutCubic", [.645, .045, .355, 1]],
      ["easeInQuart", [.895, .03, .685, .22]],
      ["easeOutQuart", [.165, .84, .44, 1]],
      ["easeInOutQuart", [.77, 0, .175, 1]],
      ["easeInQuint", [.755, .05, .855, .06]],
      ["easeOutQuint", [.23, 1, .32, 1]],
      ["easeInOutQuint", [.86, 0, .07, 1]],
      ["easeInExpo", [.95, .05, .795, .035]],
      ["easeOutExpo", [.19, 1, .22, 1]],
      ["easeInOutExpo", [1, 0, 0, 1]],
      ["easeInCirc", [.6, .04, .98, .335]],
      ["easeOutCirc", [.075, .82, .165, 1]],
      ["easeInOutCirc", [.785, .135, .15, .86]]
    ], function(e, t) {
      v.Easings[t[0]] = l.apply(null, t[1])
    });
    var x = v.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
      },
      Hooks: {
        templates: {
          textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
          boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
          backgroundPosition: ["X Y", "0% 0%"],
          transformOrigin: ["X Y Z", "50% 50% 0px"],
          perspectiveOrigin: ["X Y", "50% 50%"]
        },
        registered: {},
        register: function() {
          for (var e = 0; e < x.Lists.colors.length; e++) x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", "255 255 255 1"];
          var t, r, a;
          if (f)
            for (t in x.Hooks.templates) {
              r = x.Hooks.templates[t], a = r[0].split(" ");
              var n = r[1].match(x.RegEx.valueSplit);
              "Color" === a[0] && (a.push(a.shift()), n.push(n.shift()), x.Hooks.templates[t] = [a.join(" "), n.join(" ")])
            }
          for (t in x.Hooks.templates) {
            r = x.Hooks.templates[t], a = r[0].split(" ");
            for (var e in a) {
              var o = t + a[e],
                i = e;
              x.Hooks.registered[o] = [t, i]
            }
          }
        },
        getRoot: function(e) {
          var t = x.Hooks.registered[e];
          return t ? t[0] : e
        },
        cleanRootPropertyValue: function(e, t) {
          return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.Hooks.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
        },
        extractValue: function(e, t) {
          var r = x.Hooks.registered[e];
          if (r) {
            var a = r[0],
              n = r[1];
            return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
          }
          return t
        },
        injectValue: function(e, t, r) {
          var a = x.Hooks.registered[e];
          if (a) {
            var n = a[0],
              o = a[1],
              i, s;
            return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
          }
          return r
        }
      },
      Normalizations: {
        registered: {
          clip: function(e, t, r) {
            switch (e) {
              case "name":
                return "clip";
              case "extract":
                var a;
                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
              case "inject":
                return "rect(" + r + ")"
            }
          },
          opacity: function(e, t, r) {
            if (8 >= f) switch (e) {
              case "name":
                return "filter";
              case "extract":
                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                return r = a ? a[1] / 100 : 1;
              case "inject":
                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
            } else switch (e) {
              case "name":
                return "opacity";
              case "extract":
                return r;
              case "inject":
                return r
            }
          }
        },
        register: function() {
          9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
          for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
            var t = x.Lists.transformsBase[e];
            x.Normalizations.registered[t] = function(e, r, n) {
              switch (e) {
                case "name":
                  return "transform";
                case "extract":
                  return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                case "inject":
                  var o = !1;
                  switch (t.substr(0, t.length - 1)) {
                    case "translate":
                      o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                      break;
                    case "scal":
                    case "scale":
                      v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                      break;
                    case "skew":
                      o = !/(deg|\d)$/i.test(n);
                      break;
                    case "rotate":
                      o = !/(deg|\d)$/i.test(n)
                  }
                  return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
              }
            }
          }();
          for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
            var t = x.Lists.colors[e];
            x.Normalizations.registered[t] = function(e, r, n) {
              switch (e) {
                case "name":
                  return t;
                case "extract":
                  var o;
                  if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                  else {
                    var i, s = {
                      black: "rgb(0, 0, 0)",
                      blue: "rgb(0, 0, 255)",
                      gray: "rgb(128, 128, 128)",
                      green: "rgb(0, 128, 0)",
                      red: "rgb(255, 0, 0)",
                      white: "rgb(255, 255, 255)"
                    };
                    /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                  }
                  return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                case "inject":
                  return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
              }
            }
          }()
        }
      },
      Names: {
        camelCase: function(e) {
          return e.replace(/-(\w)/g, function(e, t) {
            return t.toUpperCase()
          })
        },
        SVGAttribute: function(e) {
          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
        },
        prefixCheck: function(e) {
          if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
          for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
            var n;
            if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                return e.toUpperCase()
              }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
          }
          return [e, !1]
        }
      },
      Values: {
        hexToRgb: function(e) {
          var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            a;
          return e = e.replace(t, function(e, t, r, a) {
            return t + t + r + r + a + a
          }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
        },
        isCSSNullValue: function(e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
        },
        getUnitType: function(e) {
          return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
        },
        getDisplayType: function(e) {
          var t = e.tagName.toString().toLowerCase();
          return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
        },
        addClass: function(e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
        },
        removeClass: function(e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
        }
      },
      getPropertyValue: function(e, r, n, o) {
        function s(e, r) {
          function n() {
            u && x.setPropertyValue(e, "display", "none")
          }
          var l = 0;
          if (8 >= f) l = $.css(e, r);
          else {
            var u = !1;
            if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
              if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                return n(), c
              }
              if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                return n(), p
              }
            }
            var d;
            d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
          }
          if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
            var g = s(e, "position");
            ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
          }
          return l
        }
        var l;
        if (x.Hooks.registered[r]) {
          var u = r,
            c = x.Hooks.getRoot(u);
          n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
        } else if (x.Normalizations.registered[r]) {
          var p, d;
          p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
        }
        return /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
      },
      setPropertyValue: function(e, r, a, n, o) {
        var s = r;
        if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
        else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
        else {
          if (x.Hooks.registered[r]) {
            var l = r,
              u = x.Hooks.getRoot(r);
            n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
          }
          if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
            e.style[s] = a
          } catch (c) {
            v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
          } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
          v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
        }
        return [s, a]
      },
      flushTransformCache: function(e) {
        function t(t) {
          return parseFloat(x.getPropertyValue(e, t))
        }
        var r = "";
        if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
          var a = {
            translate: [t("translateX"), t("translateY")],
            skewX: [t("skewX")],
            skewY: [t("skewY")],
            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
            rotate: [t("rotateZ"), 0, 0]
          };
          $.each(i(e).transformCache, function(e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
          })
        } else {
          var n, o;
          $.each(i(e).transformCache, function(t) {
            return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
          }), o && (r = "perspective" + o + " " + r)
        }
        x.setPropertyValue(e, "transform", r)
      }
    };
    x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
      var n = a;
      return e = o(e), $.each(e, function(e, o) {
        if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
        else {
          var s = v.CSS.setPropertyValue(o, t, r);
          "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
        }
      }), n
    };
    var S = function() {
      function e() {
        return f ? k.promise || null : d
      }

      function s() {
        function e(e) {
          function f(e, t) {
            var r = a,
              n = a,
              i = a;
            return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), g.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
          }

          function d(e, t) {
            var r, a;
            return a = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
              return r = e, ""
            }), r || (r = x.Values.getUnitType(e)), [a, r]
          }

          function m() {
            var e = {
                myParent: o.parentNode || r.body,
                position: x.getPropertyValue(o, "position"),
                fontSize: x.getPropertyValue(o, "fontSize")
              },
              a = e.position === L.lastPosition && e.myParent === L.lastParent,
              n = e.fontSize === L.lastFontSize;
            L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
            var s = 100,
              l = {};
            if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
            else {
              var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
              v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                v.CSS.setPropertyValue(u, t, "hidden")
              }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                v.CSS.setPropertyValue(u, t, s + "%")
              }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
            }
            return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
          }
          if (s.begin && 0 === V) try {
            s.begin.call(h, h)
          } catch (y) {
            setTimeout(function() {
              throw y
            }, 1)
          }
          if ("scroll" === A) {
            var S = /^x$/i.test(s.axis) ? "Left" : "Top",
              C = parseFloat(s.offset) || 0,
              T, F, E;
            s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = $(o).offset()[S.toLowerCase()] + C), l = {
              scroll: {
                rootPropertyValue: !1,
                startValue: T,
                currentValue: T,
                endValue: E,
                unitType: "",
                easing: s.easing,
                scrollData: {
                  container: s.container,
                  direction: S,
                  alternateValue: F
                }
              },
              element: o
            }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
          } else if ("reverse" === A) {
            if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
            "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
            var j = $.extend(!0, {}, i(o).tweensContainer);
            for (var H in j)
              if ("element" !== H) {
                var N = j[H].startValue;
                j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o)
              } l = j
          } else if ("start" === A) {
            var j;
            i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
              if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                var r = f(t, !0),
                  n = r[0],
                  o = r[1],
                  i = r[2];
                if (x.RegEx.isHex.test(n)) {
                  for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) b[e + s[c]] = [l[c], o, u ? u[c] : u];
                  delete b[e]
                }
              }
            });
            for (var z in b) {
              var q = f(b[z]),
                R = q[0],
                M = q[1],
                I = q[2];
              z = x.Names.camelCase(z);
              var W = x.Hooks.getRoot(z),
                B = !1;
              if (i(o).isSVG || x.Names.prefixCheck(W)[1] !== !1 || x.Normalizations.registered[W] !== a) {
                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !I && 0 !== R && (I = 0), s._cacheValues && j && j[z] ? (I === a && (I = j[z].endValue + j[z].unitType), B = i(o).rootPropertyValueCache[W]) : x.Hooks.registered[z] ? I === a ? (B = x.getPropertyValue(o, W), I = x.getPropertyValue(o, z, B)) : B = x.Hooks.templates[W][1] : I === a && (I = x.getPropertyValue(o, z));
                var G, D, X, Y = !1;
                if (G = d(z, I), I = G[0], X = G[1], G = d(z, R), R = G[0].replace(/^([+-\/*])=/, function(e, t) {
                    return Y = t, ""
                  }), D = G[1], I = parseFloat(I) || 0, R = parseFloat(R) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(z) ? (R /= 100, D = "em") : /^scale/.test(z) ? (R /= 100, D = "") : /(Red|Green|Blue)$/i.test(z) && (R = R / 100 * 255, D = "")), /[\/*]/.test(Y)) D = X;
                else if (X !== D && 0 !== I)
                  if (0 === R) D = X;
                  else {
                    p = p || m();
                    var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                    switch (X) {
                      case "%":
                        I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                        break;
                      case "px":
                        break;
                      default:
                        I *= p[X + "ToPx"]
                    }
                    switch (D) {
                      case "%":
                        I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                        break;
                      case "px":
                        break;
                      default:
                        I *= 1 / p[D + "ToPx"]
                    }
                  } switch (Y) {
                  case "+":
                    R = I + R;
                    break;
                  case "-":
                    R = I - R;
                    break;
                  case "*":
                    R = I * R;
                    break;
                  case "/":
                    R = I / R
                }
                l[z] = {
                  rootPropertyValue: B,
                  startValue: I,
                  currentValue: I,
                  endValue: R,
                  unitType: D,
                  easing: M
                }, v.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o)
              } else v.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
            }
            l.element = o
          }
          l.element && (x.Values.addClass(o, "velocity-animating"), O.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([O, h, s, null, k.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : V++)
        }
        var o = this,
          s = $.extend({}, v.defaults, P),
          l = {},
          p;
        if (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
            v.velocityQueueEntryFlag = !0, i(o).delayTimer = {
              setTimeout: setTimeout(e, parseFloat(s.delay)),
              next: e
            }
          }), v.mock === !0) s.duration = 1;
        else switch (s.duration.toString().toLowerCase()) {
          case "fast":
            s.duration = 200;
            break;
          case "normal":
            s.duration = y;
            break;
          case "slow":
            s.duration = 600;
            break;
          default:
            s.duration = parseFloat(s.duration) || 1
        }
        s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
          return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o)
      }
      var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
        f, d, m, h, b, P;
      if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), h = o(h)) {
        l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], P = arguments[m + 1]);
        var w = h.length,
          V = 0;
        if ("stop" !== b && !$.isPlainObject(P)) {
          var C = m + 1;
          P = {};
          for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/fast|normal|slow/i.test(arguments[T].toString()) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T]
        }
        var k = {
          promise: null,
          resolver: null,
          rejecter: null
        };
        f && v.Promise && (k.promise = new v.Promise(function(e, t) {
          k.resolver = e, k.rejecter = t
        }));
        var A;
        switch (b) {
          case "scroll":
            A = "scroll";
            break;
          case "reverse":
            A = "reverse";
            break;
          case "stop":
            $.each(h, function(e, t) {
              i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
            });
            var F = [];
            return $.each(v.State.calls, function(e, t) {
              t && $.each(t[1], function(r, n) {
                var o = g.isString(P) ? P : "";
                return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                  r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                    g.isFunction(t) && t(null, !0)
                  }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                    t.endValue = t.currentValue
                  }), F.push(e))
                })
              })
            }), $.each(F, function(e, t) {
              p(t, !0)
            }), k.promise && k.resolver(h), e();
          default:
            if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
              if (g.isString(b) && v.Sequences[b]) {
                var E = $.extend({}, P),
                  j = E.duration,
                  H = E.delay || 0;
                return E.backwards === !0 && (h = h.reverse()), $.each(h, function(e, t) {
                  parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), v.Sequences[b].call(t, t, E || {}, e, w, h, k.promise ? k : a)
                }), e()
              }
              var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered sequence. Aborting.";
              return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
            }
            A = "start"
        }
        var L = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPx: null,
            vwToPx: null,
            vhToPx: null
          },
          O = [];
        $.each(h, function(e, t) {
          g.isNode(t) && s.call(t)
        });
        var E = $.extend({}, v.defaults, P),
          z;
        if (E.loop = parseInt(E.loop), z = 2 * E.loop - 1, E.loop)
          for (var q = 0; z > q; q++) {
            var R = {
              delay: E.delay
            };
            q === z - 1 && (R.display = E.display, R.visibility = E.visibility, R.complete = E.complete), S(h, "reverse", R)
          }
        return e()
      }
    };
    v = $.extend(S, v), v.animate = S;
    var P = t.requestAnimationFrame || d;
    return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
      r.hidden ? (P = function(e) {
        return setTimeout(function() {
          e(!0)
        }, 16)
      }, c()) : P = t.requestAnimationFrame || d
    }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
      v.Sequences["slide" + t] = function(e, r, n, o, i, s) {
        var l = $.extend({}, r),
          u = l.begin,
          c = l.complete,
          p = {
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: ""
          },
          f = {};
        l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
          u && u.call(i, i), f.overflow = e.style.overflow, e.style.overflow = "hidden";
          for (var r in p) {
            f[r] = e.style[r];
            var a = v.CSS.getPropertyValue(e, r);
            p[r] = "Down" === t ? [a, 0] : [0, a]
          }
        }, l.complete = function() {
          for (var t in f) e.style[t] = f[t];
          c && c.call(i, i), s && s.resolver(i)
        }, v(e, p, l)
      }
    }), $.each(["In", "Out"], function(e, t) {
      v.Sequences["fade" + t] = function(e, r, n, o, i, s) {
        var l = $.extend({}, r),
          u = {
            opacity: "In" === t ? 1 : 0
          },
          c = l.complete;
        l.complete = n !== o - 1 ? l.begin = null : function() {
          c && c.call(i, i), s && s.resolver(i)
        }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
      }
    }), v
  }(window.jQuery || window.Zepto || window, window, document)
});

/*=====  End of 09. Velocity JS  ======*/



/*=============================================
=            10. Paraxify            =
=============================================*/

! function(e, t, i) {
  "use strict";
  var o;
  o = function(i, o) {
    var s, n, r, h, f, g, c;
    return g = 0, c = 0, r = 0, h = {}, f = [], n = 0, s = function(t, i) {
      this.options = {
        speed: 1,
        boost: 0
      };
      for (r in i) this.options[r] = i[r];
      if ((this.options.speed < 0 || this.options.speed > 1) && (this.options.speed = 1), t || (t = "paraxify"), e.getElementsByClassName(t.replace(".", ""))) this.photos = e.getElementsByClassName(t.replace(".", ""));
      else {
        if (e.querySelector(t) === !1) throw new Error("The elements you're trying to select don't exist.");
        this.photos = querySelector(t)
      }
      h = this.options, f = this.photos, this._init(this)
    }, s.prototype = {
      update: function() {
        for (c = t.innerHeight, r = 0; r < f.length;) f[r].style.backgroundPosition = "center center", f[r].url = t.getComputedStyle(f[r], !1).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2").split(",")[0], f[r].img || (f[r].img = new Image), f[r].url !== f[r].img.src && (this._check(r), f[r].img.src = f[r].url), r++;
        this._animate()
      },
      _init: function() {
        this.update(), t.onscroll = function() {
          this._animate()
        }.bind(this), t.onresize = function() {
          this.update()
        }.bind(this)
      },
      _check: function(e) {
        var i, o;
        o = f[e], o.ok = !0, o.bgSize = t.getComputedStyle(o, !1).backgroundSize, i = c, f[e].img.onload = function() {
          if ("" === o.bgSize || "auto" === o.bgSize) {
            if (this.height < o.offsetHeight) throw o.ok = !1, new Error("The image " + o.url + " (" + this.height + "px) is too short for that container (" + o.offsetHeight + "px).");
            i = this.height, this.height < c && (i += (c - o.offsetHeight) * h.speed)
          } else if ("cover" === o.bgSize) {
            if (c < o.offsetHeight) throw o.ok = !1, new Error("The container (" + o.offsetHeight + "px) can't be bigger than the image (" + c + "px).")
          } else "cover" === t.getComputedStyle(o, !1).backgroundSize, this._check(e);
          o.diff = -(i - o.offsetHeight) * h.speed, o.diff = o.diff - o.offsetHeight * h.boost
        }
      },
      _visible: function(e) {
        return g + c > f[e].offsetTop && g < f[e].offsetTop + f[e].offsetHeight ? !0 : !1
      },
      _animate: function() {
        var i, o;
        for (g = void 0 !== t.pageYOffset ? t.pageYOffset : (e.documentElement || e.body.parentNode || e.body).scrollTop, r = 0; r < f.length;) this._check(r), f[r].ok && "fixed" === t.getComputedStyle(f[r], !1).backgroundAttachment && this._visible(r) ? (i = (g - f[r].offsetTop + c) / (f[r].offsetHeight + c), o = f[r].diff * (i - .5), "cover" !== f[r].bgSize && (o += (c - f[r].img.height) / 2), o = Math.round(100 * o) / 100) : o = "center", f[r].style.backgroundPosition = "center " + o + "px", r++
      }
    }, new s(i, o)
  }, t.paraxify = o
}(document, window, 0);

/*=====  End of 10. Paraxify  ======*/



/*=============================================
=            11. Countdown            =
=============================================*/



/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.")
  }

  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b)
  }

  function d(a) {
    return function(b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
        }
      return b = b.replace(/%%/, "%")
    }
  }

  function e(a, b) {
    var c = "s",
      d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
  }
  var f = [],
    g = [],
    h = {
      precision: 100,
      elapse: !1,
      defer: !1
    };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds"
    },
    j = function(b, c, d) {
      this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
    };
  a.extend(j.prototype, {
    start: function() {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function() {
        a.update.call(a)
      }, this.options.precision)
    },
    stop: function() {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    },
    toggle: function() {
      this.interval ? this.stop() : this.start()
    },
    pause: function() {
      this.stop()
    },
    resume: function() {
      this.start()
    },
    remove: function() {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    },
    setFinalDate: function(a) {
      this.finalDate = b(a)
    },
    update: function() {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a, b = new Date;
      return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(this.totalSecsLeft / 60),
        totalSeconds: this.totalSecsLeft
      }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
    },
    dispatchEvent: function(b) {
      var c = a.Event(b + ".countdown");
      c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
    }
  }), a.fn.countdown = function() {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function() {
      var c = a(this).data("countdown-instance");
      if (void 0 !== c) {
        var d = f[c],
          e = b[0];
        j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
      } else new j(this, b[0], b[1])
    })
  }
});




/*=====  End of 11. Countdown  ======*/


/*=============================================
=            12. jquery.instagramFeed            =
=============================================*/
// 
// /*
//  jquery.instagramFeed
//
//  @version 1.2.6
//
//  @author Javier Sanahuja Liebana <bannss1@gmail.com>
//  @contributor csanahuja <csanahuja@gmail.com>
//
//  https://github.com/jsanahuja/jquery.instagramFeed
//
// */
// (function(g) {
//   function r(g) {
//     return g.replace(/[&<>"'`=\/]/g, function(a) {
//       return f[a]
//     })
//   }
//   var m = {
//       host: "javascript:void(0)",
//       username: "",
//       tag: "",
//       container: "",
//       display_profile: !0,
//       display_biography: !0,
//       display_gallery: !0,
//       display_igtv: !1,
//       get_data: !1,
//       callback: null,
//       styling: !0,
//       items: 8,
//       items_per_row: 4,
//       margin: .5,
//       image_size: 640
//     },
//     n = {
//       150: 0,
//       240: 1,
//       320: 2,
//       480: 3,
//       640: 4
//     },
//     f = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&#39;",
//       "/": "&#x2F;",
//       "`": "&#x60;",
//       "=": "&#x3D;"
//     };
//   g.instagramFeed = function(f) {
//     var a = g.fn.extend({},
//       m, f);
//     if ("" == a.username && "" == a.tag) return console.error("Instagram Feed: Error, no username or tag found."), !1;
//     "undefined" !== typeof a.get_raw_json && (console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"), a.get_data = a.get_raw_json);
//     if (!a.get_data && "" == a.container) return console.error("Instagram Feed: Error, no container found."), !1;
//     if (a.get_data && null == a.callback) return console.error("Instagram Feed: Error, no callback defined to get the raw json"), !1;
//     var l = "" == a.username;
//     g.get(l ? a.host + "explore/tags/" + a.tag + "/" : a.host + a.username + "/", function(b) {
//       try {
//         b = b.split("window._sharedData = ")[1].split("\x3c/script>")[0]
//       } catch (u) {
//         console.error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26");
//         return
//       }
//       b = JSON.parse(b.substr(0, b.length - 1));
//       b = b.entry_data.ProfilePage || b.entry_data.TagPage;
//       if ("undefined" === typeof b) console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");
//       else if (b = b[0].graphql.user || b[0].graphql.hashtag, a.get_data) a.callback(b);
//       else {
//         var c = "",
//           h = "",
//           k = "",
//           e = "",
//           f = "";
//         a.styling && (c = " style='text-align:center;'", h = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", k = " style='font-size:1.2em;'", e = " style='font-size:1em;'", f = " style='margin:" + a.margin + "% " + a.margin + "%;width:" + (100 - 2 * a.margin * a.items_per_row) / a.items_per_row + "%;float:left;'");
//         var d = "";
//         a.display_profile && (d = d + ("<div class='instagram_profile'" + c + ">") + ("<img class='instagram_profile_image' src='" +
//           b.profile_pic_url + "' alt='" + (l ? b.name + " tag pic" : b.username + " profile pic") + "'" + h + " />"), d = l ? d + ("<p class='instagram_tag'" + k + "><a href='javascript:void(0)explore/tags/" + a.tag + "' rel='noopener' target='_blank'>#" + a.tag + "</a></p>") : d + ("<p class='instagram_username'" + k + ">@" + b.full_name + " (<a href='javascript:void(0)" + a.username + "' rel='noopener' target='_blank'>@" + a.username + "</a>)</p>"), !l && a.display_biography && (d += "<p class='instagram_biography'" + e + ">" + b.biography + "</p>"), d += "</div>");
//         k = "undefined" !== typeof n[a.image_size] ? n[a.image_size] : n[640];
//         if (a.display_gallery)
//           if ("undefined" !== typeof b.is_private && !0 === b.is_private) d += "<p class='instagram_private'><strong>This profile is private</strong></p>";
//           else {
//             e = (b.edge_owner_to_timeline_media || b.edge_hashtag_to_media).edges;
//             h = e.length > a.items ? a.items : e.length;
//             d += "<div class='instagram_gallery'>";
//             for (c = 0; c < h; c++) {
//               var m = "javascript:void(0)p/" + e[c].node.shortcode;
//               switch (e[c].node.__typename) {
//                 case "GraphSidecar":
//                   var p = "sidecar";
//                   var q = e[c].node.thumbnail_resources[k].src;
//                   break;
//                 case "GraphVideo":
//                   p = "video";
//                   q = e[c].node.thumbnail_src;
//                   break;
//                 default:
//                   p = "image", q = e[c].node.thumbnail_resources[k].src
//               }
//               var t = "undefined" !== typeof e[c].node.edge_media_to_caption.edges[0] && "undefined" !== typeof e[c].node.edge_media_to_caption.edges[0].node && "undefined" !== typeof e[c].node.edge_media_to_caption.edges[0].node.text && null !== e[c].node.edge_media_to_caption.edges[0].node.text ? e[c].node.edge_media_to_caption.edges[0].node.text : "undefined" !== typeof e[c].node.accessibility_caption &&
//                 null !== e[c].node.accessibility_caption ? e[c].node.accessibility_caption : (l ? b.name : b.username) + " image " + c;
//               d += "<a href='" + m + "' class='instagram-" + p + "' rel='noopener' target='_blank'>";
//               d += "<img src='" + q + "' alt='" + r(t) + "'" + f + " />";
//               d += "</a>"
//             }
//             d += "</div>"
//           } if (a.display_igtv && "undefined" !== typeof b.edge_felix_video_timeline && (b = b.edge_felix_video_timeline.edges, h = b.length > a.items ? a.items : b.length, 0 < b.length)) {
//           d += "<div class='instagram_igtv'>";
//           for (c = 0; c < h; c++) d += "<a href='javascript:void(0)p/" + b[c].node.shortcode +
//             "' rel='noopener' target='_blank'>", d += "<img src='" + b[c].node.thumbnail_src + "' alt='" + a.username + " instagram image " + c + "'" + f + " />", d += "</a>";
//           d += "</div>"
//         }
//         g(a.container).html(d)
//       }
//     }).fail(function(a) {
//       console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ", a.status)
//     });
//     return !0
//   }
// })(jQuery);
//
// /*=====  End of 12. jquery.instagramFeed  ======*/



/*=============================================
=            13. Magnific Popup            =
=============================================*/

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function() {},
    u = !!window.jQuery,
    v = a(window),
    w = function(a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function(c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function() {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function(c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function() {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function() {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function(c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function(a, c) {
      var d = function(d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
          }
        } else b.find(p + "-" + c).html(d)
      })
    },
    _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function(c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function() {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        b.types.push(F), w(h + "." + F, function() {
          G()
        })
      },
      getInline: function(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function() {
      H && a(document.body).removeClass(H)
    },
    K = function() {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function() {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function() {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function(a) {
        var c = 0,
          d = a.img[0],
          e = function(f) {
            L && clearInterval(L), L = setInterval(function() {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function(c, d) {
        var e = 0,
          f = function() {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function() {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function(a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function() {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                f.css(b._getOffset(!0)), e = setTimeout(function() {
                  k(), setTimeout(function() {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function() {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function() {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        b.types.push(P), w("BeforeChange", function(a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function() {
          R()
        })
      },
      getIframe: function(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function(a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function(a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function(a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function() {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function() {
              b.prev()
            }), f.click(function() {
              b.next()
            }), b.container.append(e.add(f))
          }
        }), w(n + e, function() {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function() {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
            d.hasSize = !0
          }).on("error.mfploader", function() {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function(a) {
        return a.src.replace(/\.\w+$/, function(a) {
          return "@2x" + a
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            })
          }), w("ElementParse." + U, function(b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), A()
});

/*=====  End of 13. Magnific Popup  ======*/





/*=============================================
=            14. Sticky sidebar            =
=============================================*/
/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
}(this, function() {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

  function t(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
  }

  function e(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }
  var i = e(function(t, e) {
    (function(t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l, n, e = function() {
          function n(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
          }
        }(),
        i = (l = ".stickySidebar", n = {
          topSpacing: 0,
          bottomSpacing: 0,
          containerSelector: !1,
          innerWrapperSelector: ".inner-wrapper-sticky",
          stickyClass: "is-affixed",
          resizeSensor: !0,
          minWidth: !1
        }, function() {
          function c(t) {
            var e = this,
              i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
            this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
              transform: !1,
              transform3d: !1
            }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
              translateY: 0,
              maxTranslateY: 0,
              topSpacing: 0,
              lastTopSpacing: 0,
              bottomSpacing: 0,
              lastBottomSpacing: 0,
              sidebarHeight: 0,
              sidebarWidth: 0,
              containerTop: 0,
              containerHeight: 0,
              viewportHeight: 0,
              viewportTop: 0,
              lastViewportTop: 0
            }, ["handleEvent"].forEach(function(t) {
              e[t] = e[t].bind(e)
            }), this.initialize()
          }
          return e(c, [{
            key: "initialize",
            value: function() {
              var i = this;
              if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                var t = document.createElement("div");
                for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
                this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
              }
              if (this.options.containerSelector) {
                var e = document.querySelectorAll(this.options.containerSelector);
                if ((e = Array.prototype.slice.call(e)).forEach(function(t, e) {
                    t.contains(i.sidebar) && (i.container = t)
                  }), !e.length) throw new Error("The container does not contains on the sidebar.")
              }
              "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
            }
          }, {
            key: "bindEvents",
            value: function() {
              window.addEventListener("resize", this, {
                passive: !0,
                capture: !1
              }), window.addEventListener("scroll", this, {
                passive: !0,
                capture: !1
              }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
            }
          }, {
            key: "handleEvent",
            value: function(t) {
              this.updateSticky(t)
            }
          }, {
            key: "calcDimensions",
            value: function() {
              if (!this._breakpoint) {
                var t = this.dimensions;
                t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll()
              }
            }
          }, {
            key: "_calcDimensionsWithScroll",
            value: function() {
              var t = this.dimensions;
              t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
            }
          }, {
            key: "isSidebarFitsViewport",
            value: function() {
              var t = this.dimensions,
                e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
              return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
            }
          }, {
            key: "observeScrollDir",
            value: function() {
              var t = this.dimensions;
              if (t.lastViewportTop !== t.viewportTop) {
                var e = "down" === this.direction ? Math.min : Math.max;
                t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
              }
            }
          }, {
            key: "getAffixType",
            value: function() {
              this._calcDimensionsWithScroll();
              var t = this.dimensions,
                e = t.viewportTop + t.topSpacing,
                i = this.affixedType;
              return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
            }
          }, {
            key: "_getAffixTypeScrollingDown",
            value: function() {
              var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
              return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
            }
          }, {
            key: "_getAffixTypeScrollingUp",
            value: function() {
              var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
              return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
            }
          }, {
            key: "_getStyle",
            value: function(t) {
              if (void 0 !== t) {
                var e = {
                    inner: {},
                    outer: {}
                  },
                  i = this.dimensions;
                switch (t) {
                  case "VIEWPORT-TOP":
                    e.inner = {
                      position: "fixed",
                      top: i.topSpacing,
                      left: i.sidebarLeft - i.viewportLeft,
                      width: i.sidebarWidth
                    };
                    break;
                  case "VIEWPORT-BOTTOM":
                    e.inner = {
                      position: "fixed",
                      top: "auto",
                      left: i.sidebarLeft,
                      bottom: i.bottomSpacing,
                      width: i.sidebarWidth
                    };
                    break;
                  case "CONTAINER-BOTTOM":
                  case "VIEWPORT-UNBOTTOM":
                    var n = this._getTranslate(0, i.translateY + "px");
                    e.inner = n ? {
                      transform: n
                    } : {
                      position: "absolute",
                      top: i.translateY,
                      width: i.sidebarWidth
                    }
                }
                switch (t) {
                  case "VIEWPORT-TOP":
                  case "VIEWPORT-BOTTOM":
                  case "VIEWPORT-UNBOTTOM":
                  case "CONTAINER-BOTTOM":
                    e.outer = {
                      height: i.sidebarHeight,
                      position: "relative"
                    }
                }
                return e.outer = c.extend({
                  height: "",
                  position: ""
                }, e.outer), e.inner = c.extend({
                  position: "relative",
                  top: "",
                  left: "",
                  bottom: "",
                  width: "",
                  transform: ""
                }, e.inner), e
              }
            }
          }, {
            key: "stickyPosition",
            value: function(t) {
              if (!this._breakpoint) {
                t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;
                var e = this.getAffixType(),
                  i = this._getStyle(e);
                if ((this.affixedType != e || t) && e) {
                  var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
                  for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
                    var s = "number" == typeof i.outer[o] ? "px" : "";
                    this.sidebar.style[o] = i.outer[o] + s
                  }
                  for (var r in i.inner) {
                    var a = "number" == typeof i.inner[r] ? "px" : "";
                    this.sidebarInner.style[r] = i.inner[r] + a
                  }
                  var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                  c.eventTrigger(this.sidebar, p)
                } else this._initialized && (this.sidebarInner.style.left = i.inner.left);
                this.affixedType = e
              }
            }
          }, {
            key: "_widthBreakpoint",
            value: function() {
              window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
            }
          }, {
            key: "updateSticky",
            value: function() {
              var t, e = this,
                i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
              this._running || (this._running = !0, t = i.type, requestAnimationFrame(function() {
                switch (t) {
                  case "scroll":
                    e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                    break;
                  case "resize":
                  default:
                    e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
                }
                e._running = !1
              }))
            }
          }, {
            key: "_setSupportFeatures",
            value: function() {
              var t = this.support;
              t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0)
            }
          }, {
            key: "_getTranslate",
            value: function() {
              var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
              return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
            }
          }, {
            key: "destroy",
            value: function() {
              window.removeEventListener("resize", this, {
                capture: !1
              }), window.removeEventListener("scroll", this, {
                capture: !1
              }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
              var t = {
                inner: {},
                outer: {}
              };
              for (var e in t.inner = {
                  position: "",
                  top: "",
                  left: "",
                  bottom: "",
                  width: "",
                  transform: ""
                }, t.outer = {
                  height: "",
                  position: ""
                }, t.outer) this.sidebar.style[e] = t.outer[e];
              for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
              this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
            }
          }], [{
            key: "supportTransform",
            value: function(t) {
              var i = !1,
                e = t ? "perspective" : "transform",
                n = e.charAt(0).toUpperCase() + e.slice(1),
                o = document.createElement("support").style;
              return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function(t, e) {
                if (void 0 !== o[t]) return i = t, !1
              }), i
            }
          }, {
            key: "eventTrigger",
            value: function(t, e, i) {
              try {
                var n = new CustomEvent(e, {
                  detail: i
                })
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
              }
              t.dispatchEvent(n)
            }
          }, {
            key: "extend",
            value: function(t, e) {
              var i = {};
              for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
              return i
            }
          }, {
            key: "offsetRelative",
            value: function(t) {
              var e = {
                left: 0,
                top: 0
              };
              do {
                var i = t.offsetTop,
                  n = t.offsetLeft;
                isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
              } while (t);
              return e
            }
          }, {
            key: "addClass",
            value: function(t, e) {
              c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
            }
          }, {
            key: "removeClass",
            value: function(t, e) {
              c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }
          }, {
            key: "hasClass",
            value: function(t, e) {
              return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
            }
          }, {
            key: "defaults",
            get: function() {
              return n
            }
          }]), c
        }());
      t.default = i, window.StickySidebar = i
    })(e)
  });
  return t(i), t(e(function(t, e) {
    (function(t) {
      var e, s = (e = t) && e.__esModule ? e : {
        default: e
      };
      ! function() {
        if ("undefined" != typeof window) {
          var n = window.$ || window.jQuery || window.Zepto,
            o = "stickySidebar";
          if (n) {
            n.fn.stickySidebar = function(i) {
              return this.each(function() {
                var t = n(this),
                  e = n(this).data(o);
                if (e || (e = new s.default(this, "object" == typeof i && i), t.data(o, e)), "string" == typeof i) {
                  if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i)) throw new Error('No method named "' + i + '"');
                  e[i]()
                }
              })
            }, n.fn.stickySidebar.Constructor = s.default;
            var t = n.fn.stickySidebar;
            n.fn.stickySidebar.noConflict = function() {
              return n.fn.stickySidebar = t, this
            }
          }
        }
      }()
    })(i)
  }))
});

/*=====  End of 14. Sticky sidebar  ======*/



/*=============================================
=            15. isotope            =
=============================================*/

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n, s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n
      }), void 0 !== n ? n : t
    }

    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
      })
    }
    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e)
      }
      return h(this, t), this
    }, o(a))
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var n = Array.prototype.slice,
    s = t.console,
    r = "undefined" == typeof s ? function() {} : function(t) {
      s.error(t)
    };
  return o(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        o = i[t] = i[t] || {};
      return o[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
          r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0
    }
    return t
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        I = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
    }
  }
  var r, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    h = u.length,
    d = !1;
  return s
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
        n = o + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  };
  var o = Array.prototype.slice;
  i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? o.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);
        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
      }
    }), n
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
      n = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[n] = setTimeout(function() {
        o.apply(s, e), delete s[n]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
    i.docReady(function() {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function(t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (a) {
          return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
        }
        var u = new e(t, i);
        l && l.data(t, o, u)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      o = t[e ? "left" : "right"],
      n = t[i ? "top" : "bottom"],
      s = parseFloat(o),
      r = parseFloat(n),
      a = this.layout.size;
    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop"),
      n = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[n];
    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
      h = o ? "top" : "bottom",
      d = o ? "bottom" : "top",
      l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      o = this.position.y,
      n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
      r = e - o,
      a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop");
    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + n(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        o = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(c)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, o
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
    return e(t, i, o, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();
    var s = this._getOption("initLayout");
    s && this.layout()
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n
  }
  var u = t.console,
    h = t.jQuery,
    d = function() {},
    l = 0,
    f = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function(t) {
    o.extend(this.options, t)
  }, c._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, c.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, c._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
        r = new i(s, this);
      o.push(r)
    }
    return o
  }, c._filterFindItemElements = function(t) {
    return o.filterFindElements(t, this.options.itemSelector)
  }, c.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, c._init = c.layout, c._resetLayout = function() {
    this.getSize()
  }, c.getSize = function() {
    this.size = i(this.element)
  }, c._getMeasurement = function(t, e) {
    var o, n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
  }, c.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, c._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, c._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var o = this._getItemLayoutPosition(t);
        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
      }, this), this._processLayoutQueue(i)
    }
  }, c._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, c._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, c.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, c._positionItem = function(t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
  }, c._postLayout = function() {
    this.resizeContainer()
  }, c.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, c._emitCompleteOnItems = function(t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e])
    }

    function o() {
      r++, r == s && i()
    }
    var n = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function(e) {
      e.once(t, o)
    })
  }, c.dispatchEvent = function(t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h)
      if (this.$element = this.$element || h(this.element), e) {
        var n = h.Event(e);
        n.type = t, this.$element.trigger(n, i)
      } else this.$element.trigger(t, i)
  }, c.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, c.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, c.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, c.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      o.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, c._find = function(t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
  }, c._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, c._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, c._manageStamp = d, c._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      o = this._boundingRect,
      n = i(t),
      s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
    return s
  }, c.handleEvent = o.handleEvent, c.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, c.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, c.onresize = function() {
    this.resize()
  }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, c.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, c.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, c.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, c.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, c.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, c.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, c.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, c.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, c.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, c.getItems = function(t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, c.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), o.removeFrom(this.items, t)
    }, this)
  }, c.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function(t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function(t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    o = i._create;
  i._create = function() {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
  }, i.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function() {
    n.apply(this, arguments), this.css({
      display: ""
    })
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var o = i.prototype,
    n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function(t) {
    o[t] = function() {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  }), o.needsVerticalResizeLayout = function() {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, o._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments)
  }, o.getColumnWidth = function() {
    this.getSegmentSize("column", "Width")
  }, o.getRowHeight = function() {
    this.getSegmentSize("row", "Height")
  }, o.getSegmentSize = function(t, e) {
    var i = t + e,
      o = "outer" + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e]
    }
  }, o.getFirstItemSize = function() {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, o.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments)
  }, o.getSize = function() {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(t, e) {
    function n() {
      i.apply(this, arguments)
    }
    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, o.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter,
      n = this.containerWidth + this.gutter,
      s = n / o,
      r = o - n % o,
      a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1)
  }, o.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      o = e(i);
    this.containerWidth = o && o.innerWidth
  }, o._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && e < 1 ? "round" : "ceil",
      o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);
    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
        x: this.columnWidth * s.col,
        y: s.y
      }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
    return r
  }, o._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, o._getTopColGroup = function(t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
    return e
  }, o._getColGroupY = function(t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, o._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, o._manageStamp = function(t) {
    var i = e(t),
      o = this._getElementOffset(t),
      n = this._getOption("originLeft"),
      s = n ? o.left : o.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, o._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, o._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, o.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
    o = i.prototype,
    n = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = o._getOption;
  return o._getOption = function(t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function() {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
  }, i._getContainerSize = function() {
    return {
      height: this.maxY
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function() {
    this.y = 0
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function() {
    return {
      height: this.y
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
  function a(t, e) {
    return function(i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          r = i.sortData[s],
          a = o.sortData[s];
        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
    h = String.prototype.trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function() {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function() {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function(t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function() {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function(t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function() {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e, e
  }, l._bindArrangeComplete = function() {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
    }
    var e, i, o, n = this;
    this.once("layoutComplete", function() {
      e = !0, t()
    }), this.once("hideComplete", function() {
      i = !0, t()
    }), this.once("revealComplete", function() {
      o = !0, t()
    })
  }, l._filter = function(t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
      }
    }
    return {
      matches: i,
      needReveal: o,
      needHide: n
    }
  }, l._getFilterTest = function(t) {
    return u && this.options.isJQueryFiltering ? function(e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function(e) {
      return t(e.element)
    } : function(e) {
      return o(e.element, t)
    }
  }, l.updateSortData = function(t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function() {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i)
    }
  }, l._updateItemsSortData = function(t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData()
    }
  };
  var f = function() {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        o = i[0],
        n = o.match(/^\[(.+)\]$/),
        s = n && n[1],
        r = e(s, o),
        a = d.sortDataParsers[i[1]];
      return t = a ? function(t) {
        return t && a(r(t))
      } : function(t) {
        return t && r(t)
      }
    }

    function e(t, e) {
      return t ? function(e) {
        return e.getAttribute(t)
      } : function(t) {
        var i = t.querySelector(e);
        return i && i.textContent
      }
    }
    return t
  }();
  d.sortDataParsers = {
    parseInt: function(t) {
      return parseInt(t, 10)
    },
    parseFloat: function(t) {
      return parseFloat(t)
    }
  }, l._sort = function() {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e)
    }
  }, l._getIsSameSortBy = function(t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0
  }, l._mode = function() {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function(t) {
    return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function(t) {
    this._mode()._manageStamp(t)
  }, l._getContainerSize = function() {
    return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout()
  }, l.appended = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, l._filterRevealAdded = function(t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, o, n = e.length;
      for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
      var s = this._filter(e).matches;
      for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var c = l.remove;
  return l.remove = function(t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s)
    }
  }, l.shuffle = function() {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function(t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o
  }, l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t) {
      return t.element
    })
  }, d
});

/*=====  End of 15. isotope  ======*/


/*=============================================
=            16. Nice Select            =
=============================================*/

/*  jQuery Nice Select - v1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio
*/
! function(e) {
  e.fn.niceSelect = function(t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
        var n = e(this),
          i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
      })
    }
    if ("string" == typeof t) return "update" == t ? this.each(function() {
      var t = e(this),
        n = e(this).next(".nice-select"),
        i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"))
    }) : "destroy" == t ? (this.each(function() {
      var t = e(this),
        s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""))
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function() {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t)
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
    }), e(document).on("click.nice_select", function(t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
      var s = e(this),
        n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
    }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
      var s = e(this),
        n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
        } else s.trigger("click");
        return !1
      }
      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
        } else s.trigger("click");
        return !1
      }
      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
      else if (9 == t.keyCode && s.hasClass("open")) return !1
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
  }
}(jQuery);


/*=====  End of 16. Nice Select  ======*/



/*=============================================
=            17. jQuery UI            =
=============================================*/


/*! jQuery UI - v1.11.4 - 2015-12-02
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
  function t(t, s) {
    var n, a, o, r = t.nodeName.toLowerCase();
    return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
  }

  function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility")
    }).length
  }
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function(t) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        a = this.parents().filter(function() {
          var t = e(this);
          return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
      return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
    },
    uniqueId: function() {
      var e = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++e)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t)
      }
    }) : function(t, i, s) {
      return !!e.data(t, s[3])
    },
    focusable: function(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")))
    },
    tabbable: function(i) {
      var s = e.attr(i, "tabindex"),
        n = isNaN(s);
      return (n || s >= 0) && t(i, !n)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
    function s(t, i, s, a) {
      return e.each(n, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
      a = i.toLowerCase(),
      o = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + i] = function(t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
        e(this).css(a, s(this, t) + "px")
      })
    }, e.fn["outer" + i] = function(t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
        e(this).css(a, s(this, t, !0, n) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function(t) {
      return function(i, s) {
        return "number" == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus),
    disableSelection: function() {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.bind(e + ".ui-disableSelection", function(e) {
          e.preventDefault()
        })
      }
    }(),
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    },
    zIndex: function(t) {
      if (void 0 !== t) return this.css("zIndex", t);
      if (this.length)
        for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
          if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
          n = n.parent()
        }
      return 0
    }
  }), e.ui.plugin = {
    add: function(t, i, s) {
      var n, a = e.ui[t].prototype;
      for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
    },
    call: function(e, t, i, s) {
      var n, a = e.plugins[t];
      if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
        for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
    }
  };
  var s = 0,
    n = Array.prototype.slice;
  e.cleanData = function(t) {
    return function(i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++) try {
        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
      } catch (o) {}
      t(i)
    }
  }(e.cleanData), e.widget = function(t, i, s) {
    var n, a, o, r, h = {},
      l = t.split(".")[0];
    return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
      return !!e.data(t, n)
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
    }, e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
      return e.isFunction(s) ? (h[t] = function() {
        var e = function() {
            return i.prototype[t].apply(this, arguments)
          },
          n = function(e) {
            return i.prototype[t].apply(this, e)
          };
        return function() {
          var t, i = this._super,
            a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
        }
      }(), void 0) : (h[t] = s, void 0)
    }), o.prototype = e.widget.extend(r, {
      widgetEventPrefix: a ? r.widgetEventPrefix || t : t
    }, h, {
      constructor: o,
      namespace: l,
      widgetName: t,
      widgetFullName: n
    }), a ? (e.each(a._childConstructors, function(t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, o, i._proto)
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
  }, e.widget.extend = function(t) {
    for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
      for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
    return t
  }, e.widget.bridge = function(t, i) {
    var s = i.prototype.widgetFullName || t;
    e.fn[t] = function(a) {
      var o = "string" == typeof a,
        r = n.call(arguments, 1),
        h = this;
      return o ? this.each(function() {
        var i, n = e.data(this, s);
        return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
      }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
        var t = e.data(this, s);
        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
      })), h
    }
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(e) {
          e.target === i && this.destroy()
        }
      }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function() {
      return this.element
    },
    option: function(t, i) {
      var s, n, a, o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t)
        if (o = {}, s = t.split("."), t = s.shift(), s.length) {
          for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
          if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
          n[t] = i
        } else {
          if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
          o[t] = i
        } return this._setOptions(o), this
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function() {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function() {
      return this._setOptions({
        disabled: !0
      })
    },
    _on: function(t, i, s) {
      var n, a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
        }
        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
          l = h[1] + a.eventNamespace,
          u = h[2];
        u ? n.delegate(u, l, r) : i.bind(l, r)
      })
    },
    _off: function(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
    },
    _delay: function(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
      }
      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(t, i, s) {
      var n, a, o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
        for (n in a) n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, i) {
    e.Widget.prototype["_" + t] = function(s, n, a) {
      "string" == typeof n && (n = {
        effect: n
      });
      var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
        e(this)[t](), a && a.call(s[0]), i()
      })
    }
  }), e.widget;
  var a = !1;
  e(document).mouseup(function() {
    a = !1
  }), e.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function(i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(t) {
      if (!a) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this,
          s = 1 === t.which,
          n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
          return i._mouseMove(e)
        }, this._mouseUpDelegate = function(e) {
          return i._mouseUp(e)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
      }
    },
    _mouseMove: function(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
        if (!t.which) return this._mouseUp(t)
      }
      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  }), e.widget("ui.slider", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function() {
      var t, i, s = this.options,
        n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
        a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
        o = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
      this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
        e(this).data("ui-slider-handle-index", t)
      })
    },
    _createRange: function() {
      var t = this.options,
        i = "";
      t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    },
    _mouseCapture: function(t) {
      var i, s, n, a, o, r, h, l, u = this,
        d = this.options;
      return d.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: t.pageX,
        y: t.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
        var i = Math.abs(s - u.values(t));
        (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
      }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - h.left - a.width() / 2,
        top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
    },
    _mouseStart: function() {
      return !0
    },
    _mouseDrag: function(e) {
      var t = {
          x: e.pageX,
          y: e.pageY
        },
        i = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, i), !1
    },
    _mouseStop: function(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
    },
    _start: function(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
    },
    _slide: function(e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i,
        values: n
      }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i
      }), a !== !1 && this.value(i))
    },
    _stop: function(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
    },
    _change: function(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
      }
    },
    value: function(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
    },
    values: function(t, i) {
      var s, n, a;
      if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      this._refreshValue()
    },
    _setOption: function(t, i) {
      var s, n = 0;
      switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _value: function() {
      var e = this.options.value;
      return e = this._trimAlignValue(e)
    },
    _values: function(e) {
      var t, i, s;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i
      }
      return []
    },
    _trimAlignValue: function(e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        i = (e - this._valueMin()) % t,
        s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
    },
    _calculateNewMax: function() {
      var e = this.options.max,
        t = this._valueMin(),
        i = this.options.step,
        s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
      e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
    },
    _precision: function() {
      var e = this._precisionOf(this.options.step);
      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
    },
    _precisionOf: function(e) {
      var t = "" + e,
        i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.max
    },
    _refreshValue: function() {
      var t, i, s, n, a, o = this.options.range,
        r = this.options,
        h = this,
        l = this._animateOff ? !1 : r.animate,
        u = {};
      this.options.values && this.options.values.length ? this.handles.each(function(s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), t = i
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }))
    },
    _handleEvents: {
      keydown: function(t) {
        var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
        }
        switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case e.ui.keyCode.END:
            n = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + a);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - a)
        }
        this._slide(t, o, n)
      },
      keyup: function(t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
      }
    }
  })
});




/*=====  End of 17. jQuery UI  ======*/




/*=============================================
=            18. light gallery            =
=============================================*/

/*! lightgallery - v1.6.11 - 2018-05-22
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
! function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
  ! function() {
    "use strict";

    function b(b, d) {
      if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }
    var c = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1
    };
    b.prototype.init = function() {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
        b.build(b.index)
      }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
        b.build(b.index), a("body").addClass("lg-on")
      })) : b.$items.on("click.lgcustom", function(c) {
        try {
          c.preventDefault(), c.preventDefault()
        } catch (a) {
          c.returnValue = !1
        }
        b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
      })
    }, b.prototype.build = function(b) {
      var c = this;
      c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
        c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
      }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function() {
        c.enableDrag(), c.enableSwipe()
      }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
        c.$el.trigger("onSlideClick.lg")
      }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
        c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
          c.$outer.addClass("lg-hide-items")
        }, c.s.hideBarsDelay)
      }), c.$outer.trigger("mousemove.lg")
    }, b.prototype.structure = function() {
      var b, c = "",
        d = "",
        e = 0,
        f = "",
        g = this;
      for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
      if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() {
          setTimeout(function() {
            g.setTop()
          }, 100)
        }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
        var h = this.$outer.find(".lg-inner");
        h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
      }
      setTimeout(function() {
        a(".lg-backdrop").addClass("in")
      }), setTimeout(function() {
        g.$outer.addClass("lg-visible")
      }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
    }, b.prototype.setTop = function() {
      if ("100%" !== this.s.height) {
        var b = a(window).height(),
          c = (b - parseInt(this.s.height, 10)) / 2,
          d = this.$outer.find(".lg");
        b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
      }
    }, b.prototype.doCss = function() {
      return !! function() {
        var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
          b = document.documentElement,
          c = 0;
        for (c = 0; c < a.length; c++)
          if (a[c] in b.style) return !0
      }()
    }, b.prototype.isVideo = function(a, b) {
      var c;
      if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? {
        html5: !0
      } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
      var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
        e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
        f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
        g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
      return d ? {
        youtube: d
      } : e ? {
        vimeo: e
      } : f ? {
        dailymotion: f
      } : g ? {
        vk: g
      } : void 0
    }, b.prototype.counter = function() {
      this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, b.prototype.addHtml = function(b) {
      var c, d, e = null;
      if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
        if (void 0 !== e && null !== e) {
          var f = e.substring(0, 1);
          "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
        } else e = "";
      ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }, b.prototype.preload = function(a) {
      var b = 1,
        c = 1;
      for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
      for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
    }, b.prototype.loadContent = function(b, c, d) {
      var e, f, g, h, i, j, k = this,
        l = !1,
        m = function(b) {
          for (var c = [], d = [], e = 0; e < b.length; e++) {
            var g = b[e].split(" ");
            "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
          }
          for (var h = a(window).width(), i = 0; i < c.length; i++)
            if (parseInt(c[i], 10) > h) {
              f = d[i];
              break
            }
        };
      if (k.s.dynamic) {
        if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
          m(k.s.dynamicEl[b].responsive.split(","))
        }
        h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
      } else {
        if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
          m(k.$items.eq(b).attr("data-responsive").split(","))
        }
        h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
      }
      var n = !1;
      k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
      var o = k.isVideo(f, b);
      if (!k.$slide.eq(b).hasClass("lg-loaded")) {
        if (n) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
        else if (l) {
          var p = "";
          p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
        } else o ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
        if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
          e.attr("srcset", h);
          try {
            picturefill({
              elements: [e[0]]
            })
          } catch (a) {
            console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
          }
        }
        ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
      }
      k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
        var c = 0;
        d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function() {
          k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
        }, c)
      }), o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), !0 === c && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
        k.preload(b)
      }))
    }, b.prototype.slide = function(b, c, d, e) {
      var f = this.$outer.find(".lg-current").index(),
        g = this;
      if (!g.lGalleryOn || f !== b) {
        var h = this.$slide.length,
          i = g.lGalleryOn ? this.s.speed : 0;
        if (!g.lgBusy) {
          if (this.s.download) {
            var j;
            j = g.s.dynamic ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
          }
          if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
              g.addHtml(b)
            }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
            this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
            var k, l;
            h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
          } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() {
            g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans")
          }, 50);
          g.lGalleryOn ? (setTimeout(function() {
            g.loadContent(b, !0, 0)
          }, this.s.speed + 50), setTimeout(function() {
            g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
          }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
        }
        g.index = b
      }
    }, b.prototype.goToNextSlide = function(a) {
      var b = this,
        c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
        b.$outer.removeClass("lg-right-end")
      }, 400)))
    }, b.prototype.goToPrevSlide = function(a) {
      var b = this,
        c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
        b.$outer.removeClass("lg-left-end")
      }, 400)))
    }, b.prototype.keyPress = function() {
      var b = this;
      this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
        b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
      }), a(window).on("keydown.lg", function(a) {
        !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
      })
    }, b.prototype.arrow = function() {
      var a = this;
      this.$outer.find(".lg-prev").on("click.lg", function() {
        a.goToPrevSlide()
      }), this.$outer.find(".lg-next").on("click.lg", function() {
        a.goToNextSlide()
      })
    }, b.prototype.arrowDisable = function(a) {
      !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, b.prototype.setTranslate = function(a, b, c) {
      this.s.useLeft ? a.css("left", b) : a.css({
        transform: "translate3d(" + b + "px, " + c + "px, 0px)"
      })
    }, b.prototype.touchMove = function(b, c) {
      var d = c - b;
      Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }, b.prototype.touchEnd = function(a) {
      var b = this;
      "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
        b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
      }), setTimeout(function() {
        b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
      }, b.s.speed + 100)
    }, b.prototype.enableSwipe = function() {
      var a = this,
        b = 0,
        c = 0,
        d = !1;
      a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
        a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
      }), a.$slide.on("touchmove.lg", function(e) {
        a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
      }), a.$slide.on("touchend.lg", function() {
        a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
      }))
    }, b.prototype.enableDrag = function() {
      var b = this,
        c = 0,
        d = 0,
        e = !1,
        f = !1;
      b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
        b.$outer.hasClass("lg-zoomed") || b.lgBusy || a(d.target).text().trim() || (d.preventDefault(), b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg"))
      }), a(window).on("mousemove.lg", function(a) {
        e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"))
      }), a(window).on("mouseup.lg", function(g) {
        f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
      }))
    }, b.prototype.manageSwipeClass = function() {
      var a = this.index + 1,
        b = this.index - 1;
      this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
    }, b.prototype.mousewheel = function() {
      var a = this;
      a.$outer.on("mousewheel.lg", function(b) {
        b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
      })
    }, b.prototype.closeGallery = function() {
      var b = this,
        c = !1;
      this.$outer.find(".lg-close").on("click.lg", function() {
        b.destroy()
      }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
        c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
      }), b.$outer.on("mousemove.lg", function() {
        c = !1
      }), b.$outer.on("mouseup.lg", function(d) {
        (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
      }))
    }, b.prototype.destroy = function(b) {
      var c = this;
      b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
        c.modules[a] && c.modules[a].destroy()
      }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
        c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg")
      }, c.s.backdropDuration + 50)
    }, a.fn.lightGallery = function(c) {
      return this.each(function() {
        if (a.data(this, "lightGallery")) try {
          a(this).data("lightGallery").init()
        } catch (a) {
          console.error("lightGallery has not initiated properly")
        } else a.data(this, "lightGallery", new b(this, c))
      })
    }, a.fn.lightGallery.modules = {}
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        autoplay: !1,
        pause: 5e3,
        progressBar: !0,
        fourceAutoplay: !1,
        autoplayControls: !0,
        appendAutoplayControlsTo: ".lg-toolbar"
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.$el = a(c), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
      };
    c.prototype.init = function() {
      var a = this;
      a.core.s.autoplayControls && a.controls(), a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a.progress(), a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() {
        a.startlAuto()
      }), a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
        a.interval && (a.cancelAuto(), a.canceledOnTouch = !0)
      }), a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
        !a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1)
      })
    }, c.prototype.progress = function() {
      var a, b, c = this;
      c.$el.on("onBeforeSlide.lg.tm", function() {
        c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"), b = c.core.$outer.find(".lg-progress"), c.interval && (b.removeAttr("style"), a.removeClass("lg-start"), setTimeout(function() {
          b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start")
        }, 20))), c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(), c.fromAuto = !1
      })
    }, c.prototype.controls = function() {
      var b = this;
      a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
        a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
      })
    }, c.prototype.startlAuto = function() {
      var a = this;
      a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"), a.core.$outer.addClass("lg-show-autoplay"), a.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a.interval = setInterval(function() {
        a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0, a.fromAuto = !0, a.core.slide(a.core.index, !1, !1, "next")
      }, a.core.s.speed + a.core.s.pause)
    }, c.prototype.cancelAuto = function() {
      clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
    }, c.prototype.destroy = function() {
      this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
    }, a.fn.lightGallery.modules.autoplay = c
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        fullScreen: !0
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.init(), this
      };
    c.prototype.init = function() {
      var a = "";
      if (this.core.s.fullScreen) {
        if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
        a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen()
      }
    }, c.prototype.requestFullscreen = function() {
      var a = document.documentElement;
      a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }, c.prototype.exitFullscreen = function() {
      document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }, c.prototype.fullScreen = function() {
      var b = this;
      a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
        b.core.$outer.toggleClass("lg-fullscreen-on")
      }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen()
      })
    }, c.prototype.destroy = function() {
      this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
    }, a.fn.lightGallery.modules.fullscreen = c
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        pager: !1
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
      };
    c.prototype.init = function() {
      var b, c, d, e = this,
        f = "";
      if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic)
        for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
      else e.core.$items.each(function() {
        e.core.s.exThumbImage ? f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>'
      });
      c = e.core.$outer.find(".lg-pager-outer"), c.html(f), b = e.core.$outer.find(".lg-pager-cont"), b.on("click.lg touchend.lg", function() {
        var b = a(this);
        e.core.index = b.index(), e.core.slide(e.core.index, !1, !0, !1)
      }), c.on("mouseover.lg", function() {
        clearTimeout(d), c.addClass("lg-pager-hover")
      }), c.on("mouseout.lg", function() {
        d = setTimeout(function() {
          c.removeClass("lg-pager-hover")
        })
      }), e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) {
        b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active")
      })
    }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.pager = c
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        thumbnail: !0,
        animateThumb: !0,
        currentPagerPosition: "middle",
        thumbWidth: 100,
        thumbHeight: "80px",
        thumbContHeight: 100,
        thumbMargin: 5,
        exThumbImage: !1,
        showThumbByDefault: !0,
        toogleThumb: !0,
        pullCaptionUp: !0,
        enableThumbDrag: !0,
        enableThumbSwipe: !0,
        swipeThreshold: 50,
        loadYoutubeThumbnail: !0,
        youtubeThumbSize: 1,
        loadVimeoThumbnail: !0,
        vimeoThumbSize: "thumbnail_small",
        loadDailymotionThumbnail: !0
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
      };
    c.prototype.init = function() {
      var a = this;
      this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
        a.core.$outer.addClass("lg-thumb-open")
      }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
    }, c.prototype.build = function() {
      function b(a, b, c) {
        var g, h = d.core.isVideo(a, c) || {},
          i = "";
        h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>', i = ""
      }
      var c, d = this,
        e = "",
        f = "",
        g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
      switch (this.core.s.vimeoThumbSize) {
        case "thumbnail_large":
          f = "640";
          break;
        case "thumbnail_medium":
          f = "200x150";
          break;
        case "thumbnail_small":
          f = "100x75"
      }
      if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
          width: d.thumbTotalWidth + "px",
          position: "relative"
        }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic)
        for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
      else d.core.$items.each(function(c) {
        d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
      });
      d.core.$outer.find(".lg-thumb").html(e), c = d.core.$outer.find(".lg-thumb-item"), c.each(function() {
        var b = a(this),
          c = b.attr("data-vimeo-id");
        c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {
          format: "json"
        }, function(a) {
          b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
        })
      }), c.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function() {
        c.removeClass("active"), c.eq(d.core.index).addClass("active")
      }), c.on("click.lg touchend.lg", function() {
        var b = a(this);
        setTimeout(function() {
          (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
        }, 50)
      }), d.core.$el.on("onBeforeSlide.lg.tm", function() {
        d.animateThumb(d.core.index)
      }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
        setTimeout(function() {
          d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width()
        }, 200)
      })
    }, c.prototype.setTranslate = function(a) {
      this.core.$outer.find(".lg-thumb").css({
        transform: "translate3d(-" + a + "px, 0px, 0px)"
      })
    }, c.prototype.animateThumb = function(a) {
      var b = this.core.$outer.find(".lg-thumb");
      if (this.core.s.animateThumb) {
        var c;
        switch (this.core.s.currentPagerPosition) {
          case "left":
            c = 0;
            break;
          case "middle":
            c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
            break;
          case "right":
            c = this.thumbOuterWidth - this.core.s.thumbWidth
        }
        this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({
          left: -this.left + "px"
        }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left)
      }
    }, c.prototype.enableThumbDrag = function() {
      var b = this,
        c = 0,
        d = 0,
        e = !1,
        f = !1,
        g = 0;
      b.$thumbOuter.addClass("lg-grab"), b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) {
        b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
      }), a(window).on("mousemove.lg.thumb", function(a) {
        e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass("lg-dragging"), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g))
      }), a(window).on("mouseup.lg.thumb", function() {
        f ? (f = !1, b.$thumbOuter.removeClass("lg-dragging"), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0, e && (e = !1, b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
      })
    }, c.prototype.enableThumbSwipe = function() {
      var a = this,
        b = 0,
        c = 0,
        d = !1,
        e = 0;
      a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) {
        a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1)
      }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
        a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e))
      }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
        a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0
      })
    }, c.prototype.toogle = function() {
      var a = this;
      a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
        a.core.$outer.toggleClass("lg-thumb-open")
      }))
    }, c.prototype.thumbkeyPress = function() {
      var b = this;
      a(window).on("keydown.lg.thumb", function(a) {
        38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open"))
      })
    }, c.prototype.destroy = function() {
      this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
        this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
    }, a.fn.lightGallery.modules.Thumbnail = c
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
  ! function() {
    "use strict";

    function b(a, b, c, d) {
      var e = this;
      if (e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c, "lg-object", !0, b, d)), d)
        if (e.core.s.videojs) try {
          videojs(e.core.$slide.eq(b).find(".lg-html5").get(0), e.core.s.videojsOptions, function() {
            !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play()
          })
        } catch (a) {
          console.error("Make sure you have included videojs")
        } else !e.videoLoaded && e.core.s.autoplayFirstVideo && e.core.$slide.eq(b).find(".lg-html5").get(0).play()
    }

    function c(a, b) {
      var c = this.core.$slide.eq(b).find(".lg-video-cont");
      c.hasClass("lg-has-iframe") || (c.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
    }

    function d(b, c, d) {
      var e = this,
        f = e.core.$slide.eq(c),
        g = f.find(".lg-youtube").get(0),
        h = f.find(".lg-vimeo").get(0),
        i = f.find(".lg-dailymotion").get(0),
        j = f.find(".lg-vk").get(0),
        k = f.find(".lg-html5").get(0);
      if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      else if (h) try {
          $f(h).api("pause")
        } catch (a) {
          console.error("Make sure you have included froogaloop2 js")
        } else if (i) i.contentWindow.postMessage("pause", "*");
        else if (k)
        if (e.core.s.videojs) try {
          videojs(k).pause()
        } catch (a) {
          console.error("Make sure you have included videojs")
        } else k.pause();
      j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
      var l;
      l = e.core.s.dynamic ? e.core.s.dynamicEl[d].src : e.core.$items.eq(d).attr("href") || e.core.$items.eq(d).attr("data-src");
      var m = e.core.isVideo(l, d) || {};
      (m.youtube || m.vimeo || m.dailymotion || m.vk) && e.core.$outer.addClass("lg-hide-download")
    }
    var e = {
        videoMaxWidth: "855px",
        autoplayFirstVideo: !0,
        youtubePlayerParams: !1,
        vimeoPlayerParams: !1,
        dailymotionPlayerParams: !1,
        vkPlayerParams: !1,
        videojs: !1,
        videojsOptions: {}
      },
      f = function(b) {
        return this.core = a(b).data("lightGallery"), this.$el = a(b), this.core.s = a.extend({}, e, this.core.s), this.videoLoaded = !1, this.init(), this
      };
    f.prototype.init = function() {
      var e = this;
      e.core.$el.on("hasVideo.lg.tm", b.bind(this)), e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)), e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe || e.core.s.enableDrag) ? e.core.$el.on("onSlideClick.lg.tm", function() {
        var a = e.core.$slide.eq(e.core.index);
        e.loadVideoOnclick(a)
      }) : e.core.$slide.on("click.lg", function() {
        e.loadVideoOnclick(a(this))
      }), e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)), e.core.$el.on("onAfterSlide.lg.tm", function(a, b) {
        e.core.$slide.eq(b).removeClass("lg-video-playing")
      }), e.core.s.autoplayFirstVideo && e.core.$el.on("onAferAppendSlide.lg.tm", function(a, b) {
        if (!e.core.lGalleryOn) {
          var c = e.core.$slide.eq(b);
          setTimeout(function() {
            e.loadVideoOnclick(c)
          }, 100)
        }
      })
    }, f.prototype.loadVideo = function(b, c, d, e, f) {
      var g = "",
        h = 1,
        i = "",
        j = this.core.isVideo(b, e) || {};
      if (d && (h = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
      else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
      else if (j.html5) {
        var k = f.substring(0, 1);
        "." !== k && "#" !== k || (f = a(f).html()), g = f
      } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="//vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
      return g
    }, f.prototype.loadVideoOnclick = function(a) {
      var b = this;
      if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
        if (a.hasClass("lg-has-video")) {
          var c = a.find(".lg-youtube").get(0),
            d = a.find(".lg-vimeo").get(0),
            e = a.find(".lg-dailymotion").get(0),
            f = a.find(".lg-html5").get(0);
          if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
          else if (d) try {
              $f(d).api("play")
            } catch (a) {
              console.error("Make sure you have included froogaloop2 js")
            } else if (e) e.contentWindow.postMessage("play", "*");
            else if (f)
            if (b.core.s.videojs) try {
              videojs(f).play()
            } catch (a) {
              console.error("Make sure you have included videojs")
            } else f.play();
          a.addClass("lg-video-playing")
        } else {
          a.addClass("lg-video-playing lg-has-video");
          var g, h, i = function(c, d) {
            if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d)
              if (b.core.s.videojs) try {
                videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                  this.play()
                })
              } catch (a) {
                console.error("Make sure you have included videojs")
              } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
          };
          b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));
          var j = a.find(".lg-object");
          a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function() {
            a.addClass("lg-complete")
          }))
        }
    }, f.prototype.destroy = function() {
      this.videoLoaded = !1
    }, a.fn.lightGallery.modules.video = f
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = function() {
        var a = !1,
          b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return b && parseInt(b[2], 10) < 54 && (a = !0), a
      },
      c = {
        scale: 1,
        zoom: !0,
        actualSize: !0,
        enableZoomAfter: 300,
        useLeftForZoom: b()
      },
      d = function(b) {
        return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this
      };
    d.prototype.init = function() {
      var b = this,
        c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
      b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
        var f = b.core.s.enableZoomAfter + e;
        a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function() {
          b.core.$slide.eq(d).addClass("lg-zoomable")
        }, f + 30)
      });
      var d = 1,
        e = function(c) {
          var d, e, f = b.core.$outer.find(".lg-current .lg-image"),
            g = (a(window).width() - f.prop("offsetWidth")) / 2,
            h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
          d = b.pageX - g, e = b.pageY - h;
          var i = (c - 1) * d,
            j = (c - 1) * e;
          f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? f.parent().css({
            left: -i + "px",
            top: -j + "px"
          }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
        },
        f = function() {
          d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d)
        },
        g = function(c, e, g, h) {
          var i, j = e.prop("offsetWidth");
          i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
          var k;
          b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function() {
            b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
          }, 10)
        },
        h = !1;
      b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
        var d = b.core.$slide.eq(c).find(".lg-image");
        d.on("dblclick", function(a) {
          g(a, d, c)
        }), d.on("touchstart", function(a) {
          h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function() {
            h = null
          }, 300), a.preventDefault()
        })
      }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
        b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d)
      }), a("#lg-zoom-out").on("click.lg", function() {
        b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f())
      }), a("#lg-zoom-in").on("click.lg", function() {
        b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f())
      }), a("#lg-actual-size").on("click.lg", function(a) {
        g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
      }), b.core.$el.on("onBeforeSlide.lg.tm", function() {
        d = 1, b.resetZoom()
      }), b.zoomDrag(), b.zoomSwipe()
    }, d.prototype.resetZoom = function() {
      this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()
    }, d.prototype.zoomSwipe = function() {
      var a = this,
        b = {},
        c = {},
        d = !1,
        e = !1,
        f = !1;
      a.core.$slide.on("touchstart.lg", function(c) {
        if (a.core.$outer.hasClass("lg-zoomed")) {
          var d = a.core.$slide.eq(a.core.index).find(".lg-object");
          f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
            x: c.originalEvent.targetTouches[0].pageX,
            y: c.originalEvent.targetTouches[0].pageY
          })
        }
      }), a.core.$slide.on("touchmove.lg", function(g) {
        if (a.core.$outer.hasClass("lg-zoomed")) {
          var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
          g.preventDefault(), d = !0, c = {
            x: g.originalEvent.targetTouches[0].pageX,
            y: g.originalEvent.targetTouches[0].pageY
          }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
            left: h + "px",
            top: i + "px"
          }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }
      }), a.core.$slide.on("touchend.lg", function() {
        a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
      })
    }, d.prototype.zoomDrag = function() {
      var b = this,
        c = {},
        d = {},
        e = !1,
        f = !1,
        g = !1,
        h = !1;
      b.core.$slide.on("mousedown.lg.zoom", function(d) {
        var f = b.core.$slide.eq(b.core.index).find(".lg-object");
        h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = {
          x: d.pageX,
          y: d.pageY
        }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
      }), a(window).on("mousemove.lg.zoom", function(a) {
        if (e) {
          var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
          f = !0, d = {
            x: a.pageX,
            y: a.pageY
          }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), b.core.s.useLeftForZoom ? k.css({
            left: i + "px",
            top: j + "px"
          }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
        }
      }), a(window).on("mouseup.lg.zoom", function(a) {
        e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = {
          x: a.pageX,
          y: a.pageY
        }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
      })
    }, d.prototype.touchendZoom = function(a, b, c, d) {
      var e = this,
        f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
        g = e.core.$slide.eq(e.core.index).find(".lg-object"),
        h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
        i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
        j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
        k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
        l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
        m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
      (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({
        left: h + "px",
        top: i + "px"
      }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
    }, d.prototype.destroy = function() {
      var b = this;
      b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
    }, a.fn.lightGallery.modules.zoom = d
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        hash: !0
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
      };
    c.prototype.init = function() {
      var b, c = this;
      c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) {
        history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d
      }), a(window).on("hashchange.lg.hash", function() {
        b = window.location.hash;
        var a = parseInt(b.split("&slide=")[1], 10);
        b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
      })
    }, c.prototype.destroy = function() {
      this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
    }, a.fn.lightGallery.modules.hash = c
  }()
}),
function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
  ! function() {
    "use strict";
    var b = {
        share: !0,
        facebook: !0,
        facebookDropdownText: "Facebook",
        twitter: !0,
        twitterDropdownText: "Twitter",
        googlePlus: !0,
        googlePlusDropdownText: "GooglePlus",
        pinterest: !0,
        pinterestDropdownText: "Pinterest"
      },
      c = function(c) {
        return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this
      };
    c.prototype.init = function() {
      var b = this,
        c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
      c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function() {
        b.core.$outer.toggleClass("lg-dropdown-active")
      }), a("#lg-dropdown-overlay").on("click.lg", function() {
        b.core.$outer.removeClass("lg-dropdown-active")
      }), b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) {
        setTimeout(function() {
          a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText"))
        }, 100)
      })
    }, c.prototype.getSahreProps = function(a, b) {
      var c = "";
      if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
      else {
        var d = this.core.$items.eq(a).attr("href"),
          e = this.core.$items.eq(a).data(b);
        c = "src" === b ? d || e : e
      }
      return c
    }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.share = c
  }()
});

/*=====  End of 18. light gallery  ======*/


/*=============================================
=            19. zoom            =
=============================================*/

/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function(o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1
  };
  o.zoom = function(t, n, e, i) {
    var u, c, a, r, m, l, s, f = o(t),
      h = f.css("position"),
      d = o(n);
    return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      width: e.width * i,
      height: e.height * i,
      border: "none",
      maxWidth: "none",
      maxHeight: "none"
    }).appendTo(t), {
      init: function() {
        c = f.outerWidth(), u = f.outerHeight(), n === t ? (r = c, a = u) : (r = d.outerWidth(), a = d.outerHeight()), m = (e.width - c) / r, l = (e.height - u) / a, s = d.offset()
      },
      move: function(o) {
        var t = o.pageX - s.left,
          n = o.pageY - s.top;
        n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, r), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px"
      }
    }
  }, o.fn.zoom = function(n) {
    return this.each(function() {
      var e = o.extend({}, t, n || {}),
        i = e.target && o(e.target)[0] || this,
        u = this,
        c = o(u),
        a = document.createElement("img"),
        r = o(a),
        m = "mousemove.zoom",
        l = !1,
        s = !1;
      if (!e.url) {
        var f = u.querySelector("img");
        if (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url) return
      }
      c.one("zoom.destroy", function(o, t) {
        c.off(".zoom"), i.style.position = o, i.style.overflow = t, a.onload = null, r.remove()
      }.bind(this, i.style.position, i.style.overflow)), a.onload = function() {
        function t(t) {
          f.init(), f.move(t), r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1)
        }

        function n() {
          r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1)
        }
        var f = o.zoom(i, u, a, e.magnify);
        "grab" === e.on ? c.on("mousedown.zoom", function(e) {
          1 === e.which && (o(document).one("mouseup.zoom", function() {
            n(), o(document).off(m, f.move)
          }), t(e), o(document).on(m, f.move), e.preventDefault())
        }) : "click" === e.on ? c.on("click.zoom", function(e) {
          return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function() {
            n(), l = !1, o(document).off(m, f.move)
          }), !1)
        }) : "toggle" === e.on ? c.on("click.zoom", function(o) {
          l ? n() : t(o), l = !l
        }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function(o) {
          o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
        }).on("touchmove.zoom", function(o) {
          o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
        }).on("touchend.zoom", function(o) {
          o.preventDefault(), s && (s = !1, n())
        }), o.isFunction(e.callback) && e.callback.call(a)
      }, a.setAttribute("role", "presentation"), a.alt = "", a.src = e.url
    })
  }, o.fn.zoom.defaults = t
})(window.jQuery);

/*=====  End of 19. zoom  ======*/

/*=============================================
=            20. YT player           =
=============================================*/

/*jquery.mb.YTPlayer 01-12-2018
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */

var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var getYTPVideoID = function(e) {
  var r, t;
  return 0 < e.indexOf("youtu.be") || 0 < e.indexOf("youtube.com/embed") ? r = (t = 0 < (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : t = -1 < e.indexOf("http") ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], 0 < e.indexOf("list=") ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (r = 15 < e.length ? null : e) ? null : e, {
    videoID: r,
    playlistID: t
  }
};

function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
  }
}! function(jQuery, ytp) {
  jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.2.8",
    build: "7398",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      videoURL: null,
      containment: "body",
      ratio: "auto",
      fadeOnStartTime: 1500,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      coverImage: !1,
      loop: !0,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      vol: 50,
      mute: !1,
      showControls: !0,
      anchor: "center,center",
      showAnnotations: !1,
      cc_load_policy: !1,
      showYTLogo: !0,
      useOnMobile: !0,
      mobileFallbackImage: null,
      playOnlyIfVisible: !1,
      onScreenPercentage: 30,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      optimizeDisplay: !0,
      abundance: .3,
      gaTrack: !0,
      remember_last_time: !1,
      addFilters: !1,
      onReady: function(e) {},
      onError: function(e, r) {}
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y"
    },
    controlBar: null,
    locationProtocol: "https:",
    defaultFilters: {
      grayscale: {
        value: 0,
        unit: "%"
      },
      hue_rotate: {
        value: 0,
        unit: "deg"
      },
      invert: {
        value: 0,
        unit: "%"
      },
      opacity: {
        value: 0,
        unit: "%"
      },
      saturate: {
        value: 0,
        unit: "%"
      },
      sepia: {
        value: 0,
        unit: "%"
      },
      brightness: {
        value: 0,
        unit: "%"
      },
      contrast: {
        value: 0,
        unit: "%"
      },
      blur: {
        value: 0,
        unit: "px"
      }
    },
    buildPlayer: function(options) {
      if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function() {
        jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
      }, 100);
      else {
        jQuery("#YTAPI").remove();
        var tag = jQuery("<script><\/script>").attr({
          src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
          id: "YTAPI"
        });
        jQuery("head").prepend(tag)
      }

      function isIframe() {
        var r = !1;
        try {
          self.location.href != top.location.href && (r = !0)
        } catch (e) {
          r = !0
        }
        return r
      }
      return this.each(function() {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        $YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
        var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
        "object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function() {
          $YTPlayer.YTPPlay()
        }), console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
        var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        YTPlayer.opt.realfullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realfullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
        var start_from_last = 0;
        if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }).addClass("YTPOverlay"), YTPlayer.opt.coverImage || "none" != YTPlayer.orig_containment_background) {
            var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
            YTPlayer.opt.containment.css({
              background: bgndURL,
              backgroundColor: "#000",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            })
          }
          YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
            position: "absolute",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            opacity: 0
          }).addClass("mbYTP_wrapper"), YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function(e) {
            $YTPlayer.YTPPlay(), e.stopPropagation()
          }), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function() {
            $YTPlayer.YTPTogglePlay()
          }).css({
            cursor: "pointer"
          }));
          var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
          if (playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden",
              opacity: 1
            }), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
              position: "relative",
              maxWidth: YTPlayer.opt.containment.css("width")
            }), YTPlayer.opt.containment.css({
              position: "relative",
              paddingBottom: "56.25%",
              overflow: "hidden",
              height: 0
            }), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function() {
              "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
            }), YTPlayer.isBackground ? (jQuery("body").css({
              boxSizing: "border-box"
            }), YTPlayer.wrapper.css({
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0
            })) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
              position: "relative"
            }), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
              YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
            }).on("mouseleave", function() {
              YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
            }), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 1
          }), YTPlayer.wrapper.css({
            opacity: 1
          })), $YTPlayer;
          jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function() {
            YTPlayer.player.playVideo()
          }), jQuery(document).one("YTAPIReady", function() {
            $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
          }), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
            var o = this,
              t = jQuery(o);
            o.isBackground && ytp.backgroundIsInited || o.isInit || (o.isBackground && (ytp.backgroundIsInited = !0), o.opt.autoPlay = void 0 === o.opt.autoPlay ? !!o.isBackground : o.opt.autoPlay, o.opt.vol = o.opt.vol ? o.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(o), jQuery(o).on("YTPChanged", function(e) {
              if (!o.isInit) {
                o.isInit = !0;
                var r = {
                  modestbranding: 1,
                  autoplay: 0,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                  enablejsapi: 1,
                  version: 3,
                  playerapiid: o.playerID,
                  origin: "*",
                  allowfullscreen: !0,
                  wmode: "transparent",
                  iv_load_policy: o.opt.showAnnotations,
                  cc_load_policy: o.opt.cc_load_policy,
                  playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                  html5: document.createElement("video").canPlayType ? 1 : 0
                };
                new YT.Player(o.playerID, {
                  playerVars: r,
                  events: {
                    onReady: function(e) {
                      o.player = e.target, o.player.loadVideoById({
                        videoId: o.videoID.toString(),
                        suggestedQuality: o.opt.quality
                      }), t.trigger("YTPlayerIsReady_" + o.id)
                    },
                    onStateChange: function(e) {
                      if ("function" == typeof e.target.getPlayerState) {
                        var r = e.target.getPlayerState();
                        if (o.preventTrigger || o.isStarting) o.preventTrigger = !1;
                        else {
                          var t;
                          switch (o.state = r) {
                            case -1:
                              t = "YTPUnstarted";
                              break;
                            case 0:
                              t = "YTPRealEnd";
                              break;
                            case 1:
                              t = "YTPPlay", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), o.isPlayer && o.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
                              break;
                            case 2:
                              t = "YTPPause", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), o.isPlayer && o.inlinePlayButton.show();
                              break;
                            case 3:
                              o.player.setPlaybackQuality(o.opt.quality), t = "YTPBuffering", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                              break;
                            case 5:
                              t = "YTPCued"
                          }
                          var a = jQuery.Event(t);
                          a.time = o.currentTime, jQuery(o).trigger(a)
                        }
                      }
                    },
                    onPlaybackQualityChange: function(e) {
                      var r = e.target.getPlaybackQuality(),
                        t = jQuery.Event("YTPQualityChange");
                      t.quality = r, jQuery(o).trigger(t)
                    },
                    onError: function(e) {
                      switch ("function" == typeof o.opt.onError && o.opt.onError(t, e), e.data) {
                        case 2:
                          console.error("video ID:: " + o.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                          break;
                        case 5:
                          console.error("video ID:: " + o.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                          break;
                        case 100:
                          console.error("video ID:: " + o.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                          break;
                        case 101:
                        case 150:
                          console.error("video ID:: " + o.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
                      }
                      o.isList && jQuery(o).YTPPlayNext()
                    }
                  }
                }), t.on("YTPlayerIsReady_" + o.id, function() {
                  if (o.isReady) return this;
                  o.playerEl = o.player.getIframe(), jQuery(o.playerEl).unselectable(), t.optimizeDisplay(), jQuery(window).off("resize.YTP_" + o.id).on("resize.YTP_" + o.id, function() {
                    t.optimizeDisplay()
                  }), o.opt.remember_last_time && jQuery(window).on("unload.YTP_" + o.id, function() {
                    var e = o.player.getCurrentTime();
                    jQuery.mbCookie.set("YTPlayer_start_from" + o.videoID, e, 0)
                  }), t.YTPCheckForState()
                })
              }
            }))
          }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
        }
      })
    },
    isOnScreen: function(e, r) {
      r = r || 10;
      var t = e.wrapper,
        a = jQuery(window).scrollTop(),
        o = a + jQuery(window).height(),
        n = t.height() * r / 100,
        i = t.offset().top + n;
      return t.offset().top + (t.height() - n) <= o && a <= i
    },
    getDataFromAPI: function(n) {
      n.videoData = jQuery.mbStorage.get("YTPlayer_data_" + n.videoID), n.videoData ? (setTimeout(function() {
        n.dataReceived = !0;
        var e = jQuery.Event("YTPChanged");
        e.time = n.currentTime, e.videoId = n.videoID, e.opt = n.opt, jQuery(n).trigger(e);
        var r = jQuery.Event("YTPData");
        for (var t in r.prop = {}, n.videoData) r.prop[t] = n.videoData[t];
        jQuery(n).trigger(r)
      }, n.opt.fadeOnStartTime), n.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + n.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(e) {
        n.dataReceived = !0;
        var r, t = jQuery.Event("YTPChanged");
        t.time = n.currentTime, t.videoId = n.videoID, jQuery(n).trigger(t), e.items[0] ? (r = e.items[0].snippet, n.videoData = {}, n.videoData.id = n.videoID, n.videoData.channelTitle = r.channelTitle, n.videoData.title = r.title, n.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", n.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, n.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, n.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + n.videoID, n.videoData), n.hasData = !0) : (n.videoData = {}, n.hasData = !1);
        var a = jQuery.Event("YTPData");
        for (var o in a.prop = {}, n.videoData) a.prop[o] = n.videoData[o];
        jQuery(n).trigger(a)
      }) : (setTimeout(function() {
        var e = jQuery.Event("YTPChanged");
        e.time = n.currentTime, e.videoId = n.videoID, jQuery(n).trigger(e)
      }, 10), n.videoData = null), n.opt.ratio = "auto" == n.opt.ratio ? 16 / 9 : n.opt.ratio, n.isPlayer && !n.opt.autoPlay && (n.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(n).append(n.loading), n.loading.fadeIn())
    },
    removeStoredData: function() {
      jQuery.mbStorage.remove()
    },
    getVideoData: function() {
      return this.get(0).videoData
    },
    getVideoID: function() {
      return this.get(0).videoID || !1
    },
    getPlaylistID: function() {
      return this.get(0).playlistID || !1
    },
    setVideoQuality: function(e) {
      return this.get(0).player.setPlaybackQuality(e), this
    },
    playlist: function(e, r, t) {
      var a = this.get(0);
      return a.isList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 1, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).YTPlayer()), "function" == typeof t && jQuery(a).one("YTPChanged", function() {
        t(a)
      }), jQuery(a).on("YTPEnd", function() {
        jQuery(a).YTPPlayNext()
      }), this
    },
    playNext: function() {
      var e = this.get(0);
      return e.videoCounter++, e.videoCounter > e.videoLength && (e.videoCounter = 1), jQuery(e).YTPPlayIndex(e.videoCounter), this
    },
    playPrev: function() {
      var e = this.get(0);
      return e.videoCounter--, e.videoCounter <= 0 && (e.videoCounter = e.videoLength), jQuery(e).YTPPlayIndex(e.videoCounter), this
    },
    playIndex: function(e) {
      var r = this.get(0);
      r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
      var t = r.videos[r.videoCounter - 1];
      return jQuery(r).YTPChangeVideo(t), this
    },
    changeVideo: function(e) {
      var r = this,
        t = r.get(0);
      t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.opt.autoPlay = !0, t.opt.addFilters = !1, t.opt.coverImage = !1, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999), t.wrapper.css({
        background: "none"
      }), jQuery(t.playerEl).CSSAnimate({
        opacity: 0
      }, t.opt.fadeOnStartTime, function() {
        jQuery.mbYTPlayer.getDataFromAPI(t), r.YTPGetPlayer().loadVideoById({
          videoId: t.videoID,
          suggestedQuality: t.opt.quality
        }), r.YTPPause(), r.optimizeDisplay(), r.YTPCheckForState()
      });
      var a = jQuery.Event("YTPChangeVideo");
      return a.time = t.currentTime, jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this
    },
    getPlayer: function() {
      var e = this.get(0);
      return e.isReady && e.player || null
    },
    playerDestroy: function() {
      var e = this.get(0);
      return e.isReady && (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)), this
    },
    fullscreen: function(real) {
      var YTPlayer = this.get(0);
      void 0 === real && (real = eval(YTPlayer.opt.realfullscreen));
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
          RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
            opacity: YTPlayer.opt.opacity
          }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
            zIndex: 0
          }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
        })
      }
      if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
        cursor: "auto"
      }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
        opacity: YTPlayer.opt.opacity
      }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
        zIndex: 0
      })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
      else {
        function hideMouse() {
          YTPlayer.overlay.css({
            cursor: "none"
          })
        }
        jQuery(document).on("mousemove.YTPlayer", function(e) {
          YTPlayer.overlay.css({
            cursor: "auto"
          }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
        }), hideMouse(), real ? (videoWrapper.css({
          opacity: 0
        }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
          videoWrapper.CSSAnimate({
            opacity: 1
          }, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
        }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
          zIndex: 1e4
        }).CSSAnimate({
          opacity: 1
        }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
      }

      function RunPrefixMethod(e, r) {
        for (var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[t];) {
          if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[n] + t])) return o = [o[n]], "function" == a ? e[t]() : e[t];
          n++
        }
      }

      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen")
      }

      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
      }
      return this
    },
    toggleLoops: function() {
      var e = this.get(0),
        r = e.opt;
      return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this
    },
    play: function() {
      var e = this.get(0),
        r = jQuery(e);
      return e.isReady && (setTimeout(function() {
        r.YTPSetAbundance(e.opt.abundance)
      }, 300), e.player.playVideo(), jQuery(e.playerEl).css({
        opacity: 1
      }), e.wrapper.css({
        backgroundImage: "none"
      }), e.wrapper.CSSAnimate({
        opacity: e.isAlone ? 1 : e.opt.opacity
      }, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1), this
    },
    togglePlay: function(e) {
      var r = this.get(0);
      return r.isReady && (1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state)), this
    },
    stop: function() {
      var e = this.get(0);
      return e.isReady && (jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()), this
    },
    pause: function() {
      var e = this.get(0);
      return e.isReady && (e.opt.abundance < .2 && this.YTPSetAbundance(.2), e.player.pauseVideo(), e.state = 2), this
    },
    seekTo: function(e) {
      var r = this.get(0);
      return r.isReady && r.player.seekTo(e, !0), this
    },
    setVolume: function(e) {
      var r = this.get(0);
      return r.isReady && (r.opt.vol = e, r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)), this
    },
    getVolume: function() {
      var e = this.get(0);
      return e.isReady ? e.player.getVolume() : this
    },
    toggleVolume: function() {
      var e = this.get(0);
      return e.isReady && (e.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute()) : this.YTPMute()), this
    },
    mute: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (e.isMute) return this;
      e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && 10 < e.volumeBar.width() && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
      var r = jQuery.Event("YTPMuted");
      return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
    },
    unmute: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (!e.isMute) return this;
      e.player.unMute(), e.isMute = !1, jQuery(e).YTPSetVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
      var r = jQuery.Event("YTPUnmuted");
      return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
    },
    applyFilter: function(e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters()
    },
    applyFilters: function(e) {
      var r = this,
        t = r.get(0);
      if (!t.isReady) return this;
      if (!t.isReady) return jQuery(t).on("YTPReady", function() {
        r.YTPApplyFilters(e)
      }), this;
      for (var a in e) r.YTPApplyFilter(a, e[a]);
      r.trigger("YTPFiltersApplied")
    },
    toggleFilter: function(e, r) {
      var t = this.get(0);
      return t.isReady && (t.filters[e].value ? t.filters[e].value = 0 : t.filters[e].value = r, t.filtersEnabled && jQuery(t).YTPEnableFilters()), this
    },
    toggleFilters: function(e) {
      var r = this.get(0);
      return r.isReady && (r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled)), this
    },
    disableFilters: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl);
      return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
    },
    enableFilters: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl),
        t = "";
      for (var a in e.filters) e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
      return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
    },
    removeFilter: function(e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      if ("function" == typeof e && (r = e, e = null), e) this.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
      else {
        for (var a in t.filters) this.YTPApplyFilter(a, 0);
        "function" == typeof r && r(a), t.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
      }
      var o = jQuery.Event("YTPFiltersApplied");
      return this.trigger(o), this
    },
    getFilters: function() {
      var e = this.get(0);
      return e.isReady ? e.filters : this
    },
    addMask: function(e) {
      var r = this.get(0);
      if (!r.isReady) return this;
      e || (e = r.actualMask);
      var t = jQuery("<img/>").attr("src", e).on("load", function() {
        r.overlay.CSSAnimate({
          opacity: 0
        }, r.opt.fadeOnStartTime, function() {
          r.hasMask = !0, t.remove(), r.overlay.css({
            backgroundImage: "url(" + e + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }), r.overlay.CSSAnimate({
            opacity: 1
          }, r.opt.fadeOnStartTime)
        })
      });
      return this
    },
    removeMask: function() {
      var e = this.get(0);
      return e.isReady && e.overlay.CSSAnimate({
        opacity: 0
      }, e.opt.fadeOnStartTime, function() {
        e.hasMask = !1, e.overlay.css({
          backgroundImage: "",
          backgroundRepeat: "",
          backgroundPosition: "",
          backgroundSize: ""
        }), e.overlay.CSSAnimate({
          opacity: 1
        }, e.opt.fadeOnStartTime)
      }), this
    },
    applyMask: function(t) {
      var a = jQuery(t);
      if (!t.isReady) return this;
      if (a.off("YTPTime.mask"), t.opt.mask)
        if ("string" == typeof t.opt.mask) a.YTPAddMask(t.opt.mask), t.actualMask = t.opt.mask;
        else if ("object" == typeof t.opt.mask) {
        for (var e in t.opt.mask)
          if (t.opt.mask[e]) jQuery("<img/>").attr("src", t.opt.mask[e]);
        t.opt.mask[0] && a.YTPAddMask(t.opt.mask[0]), a.on("YTPTime.mask", function(e) {
          for (var r in t.opt.mask) e.time == r && (t.opt.mask[r] ? (a.YTPAddMask(t.opt.mask[r]), t.actualMask = t.opt.mask[r]) : a.YTPRemoveMask())
        })
      }
    },
    toggleMask: function() {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this
    },
    manageProgress: function() {
      var e = this.get(0),
        r = jQuery("#controlBar_" + e.id),
        t = r.find(".mb_YTPProgress"),
        a = r.find(".mb_YTPLoaded"),
        o = r.find(".mb_YTPseekbar"),
        n = t.outerWidth(),
        i = Math.floor(e.player.getCurrentTime()),
        l = Math.floor(e.player.getDuration()),
        s = i * n / l,
        u = 100 * e.player.getVideoLoadedFraction();
      return a.css({
        left: 0,
        width: u + "%"
      }), o.css({
        left: 0,
        width: s
      }), {
        totalTime: l,
        currentTime: i
      }
    },
    buildControls: function(YTPlayer) {
      if (jQuery("#controlBar_" + YTPlayer.id).remove(), YTPlayer.opt.showControls) {
        if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
          YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
            whiteSpace: "noWrap",
            position: YTPlayer.isBackground ? "fixed" : "absolute",
            zIndex: YTPlayer.isBackground ? 1e4 : 1e3
          }).hide().on("click", function(e) {
            e.stopPropagation()
          });
          var buttonBar = jQuery("<div/>").addClass("buttonBar"),
            playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(e) {
              e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
            }),
            MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(e) {
              e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
            }),
            volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
              display: "inline-block"
            });
          YTPlayer.volumeBar = volumeBar;
          var idx = jQuery("<span/>").addClass("mb_YTPTime"),
            vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
          vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
          var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
              window.open(vURL, "viewOnYT")
            }),
            onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(e) {
              e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
            }),
            progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(e) {
              e.stopPropagation(), timeBar.css({
                width: e.clientX - timeBar.offset().left
              }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                width: 0
              });
              var r = Math.floor(YTPlayer.player.getDuration());
              YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                width: 0
              })
            }),
            loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
            timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
          progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
            initialval: YTPlayer.opt.vol,
            scale: 100,
            orientation: "h",
            callback: function(e) {
              0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
            }
          })
        }
      } else YTPlayer.controlBar = !1
    },
    checkForState: function() {
      var YTPlayer = this.get(0),
        $YTPlayer = jQuery(YTPlayer);
      clearInterval(YTPlayer.getState);
      var interval = 100;
      if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
      jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function() {
        var $YTPlayer = jQuery(YTPlayer);
        if (YTPlayer.isReady) {
          var prog = jQuery(YTPlayer).YTPManageProgress(),
            stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
          if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
            var YTPEvent = jQuery.Event("YTPTime");
            YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
          }
          if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
            var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
            isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
          }
          if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && 400 < YTPlayer.controlBar.outerWidth() && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 0 < YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || 0 < stopAt && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
            if (YTPlayer.isEnded) return;
            if (YTPlayer.isEnded = !0, setTimeout(function() {
                YTPlayer.isEnded = !1
              }, 1e3), YTPlayer.isList) {
              if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                var YTPEnd = jQuery.Event("YTPEnd");
                return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
              }
            } else if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
              YTPlayer.player.loopTime = void 0, YTPlayer.state = 2;
              var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
              return YTPlayer.opt.containment.css({
                background: bgndURL,
                backgroundSize: "cover"
              }), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                opacity: 0
              }, YTPlayer.opt.fadeOnStartTime, function() {
                YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                var e = jQuery.Event("YTPEnd");
                e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                var r = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                YTPlayer.opt.containment.css({
                  background: r,
                  backgroundSize: "cover"
                })
              })
            }
            YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
          }
        }
      }, interval)
    },
    checkForStart: function(YTPlayer) {
      var $YTPlayer = jQuery(YTPlayer);
      if (jQuery.contains(document, YTPlayer)) {
        if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay)
          if (YTPlayer.opt.addRaster) {
            var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
            YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
          } else YTPlayer.overlay.removeClass(function(e, r) {
            var t = r.split(" "),
              a = [];
            return jQuery.each(t, function(e, r) {
              /raster.*/.test(r) && a.push(r)
            }), a.push("retina"), a.join(" ")
          });
        YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
        var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
        return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function() {
          YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
          var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
          if (0 < YTPlayer.player.getDuration() && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
            YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
            var YTPready = jQuery.Event("YTPReady");
            if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? YTPlayer.player.mute() : (YTPlayer.player.unMute(), YTPlayer.opt.autoPlay && console.debug("To make the video 'auto-play' you must mute the audio according with the new vendor policy")), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
              var YTPStart = jQuery.Event("YTPStart");
              YTPStart.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPStart), YTPlayer.isStarting = !1, "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function() {
                $YTPlayer.YTPPlay()
              }), $YTPlayer.YTPPlay()
            } else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function() {
              YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), console.debug("YTPPause"), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
                opacity: 0
              }), setTimeout(function() {
                var e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                YTPlayer.wrapper.css({
                  background: e,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                })
              }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 1
              }, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
              }, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
            }, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function() {
              YTPlayer.loading.fadeOut()
            }, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
          }
          "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), 0 <= startAt && YTPlayer.player.seekTo(startAt, !0))
        }, 100), $YTPlayer
      }
      $YTPlayer.YTPPlayerDestroy()
    },
    getTime: function() {
      var e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime)
    },
    getTotalTime: function(e) {
      var r = this.get(0);
      return jQuery.mbYTPlayer.formatTime(r.totalTime)
    },
    formatTime: function(e) {
      var r = Math.floor(e / 60),
        t = Math.floor(e - 60 * r);
      return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
    },
    setAnchor: function(e) {
      this.optimizeDisplay(e)
    },
    getAnchor: function() {
      return this.get(0).opt.anchor
    },
    setAbundance: function(e, r) {
      var t = this.get(0);
      return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
    },
    getAbundance: function() {
      return this.get(0).opt.abundance
    },
    setOption: function(e, r) {
      var t = this.get(0);
      return t.opt[e] = r, this
    }
  }, jQuery.fn.optimizeDisplay = function(anchor, abundanceX) {
    var YTPlayer = this.get(0),
      vid = {},
      el = YTPlayer.wrapper,
      iframe = jQuery(YTPlayer.playerEl);
    YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
    var YTPAlign = YTPlayer.opt.anchor.split(","),
      ab = abundanceX || YTPlayer.opt.abundance;
    if (YTPlayer.opt.optimizeDisplay) {
      var abundance = el.height() * ab,
        win = {};
      win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height) / 2), vid.marginLeft = -abundance / 2;
      var lowest = vid.height < win.height;
      for (var a in lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)), YTPAlign)
        if (YTPAlign.hasOwnProperty(a)) {
          var al = YTPAlign[a].replace(/ /g, "");
          switch (al) {
            case "top":
              vid.marginTop = -abundance / 2;
              break;
            case "bottom":
              vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
              break;
            case "left":
              vid.marginLeft = -abundance / 2;
              break;
            case "right":
              vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2);
              break;
            default:
              vid.width > win.width && (vid.marginLeft = -(vid.width - win.width) / 2 + abundance / 2)
          }
        }
    } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
    iframe.css({
      width: vid.width,
      height: vid.height,
      marginTop: vid.marginTop,
      marginLeft: vid.marginLeft,
      maxWidth: "initial"
    })
  }, jQuery.shuffle = function(e) {
    for (var r = e.slice(), t = r.length, a = t; a--;) {
      var o = parseInt(Math.random() * t),
        n = r[a];
      r[a] = r[o], r[o] = n
    }
    return r
  }, jQuery.fn.unselectable = function() {
    return this.each(function() {
      jQuery(this).css({
        "-moz-user-select": "none",
        "-webkit-user-select": "none",
        "user-select": "none"
      }).attr("unselectable", "on")
    })
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption
}(jQuery, ytp);
var nAgt = navigator.userAgent;

function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var e = {
      version: "Unknown version",
      name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
  },
  nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
  jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

function uncamel(e) {
  return e.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase()
  })
}

function setUnit(e, r) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}

function setFilter(e, r, t) {
  var a = uncamel(r),
    o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r]
} - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, r) {
  if ("stringstring" != typeof e + typeof r) return !1;
  for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
    if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
    if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
  }
  return 0
}, jQuery.support.CSStransition = function() {
  var e = (document.body || document.documentElement).style;
  return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
  name: "mb.CSSAnimate",
  author: "Matteo Bicocchi",
  version: "2.0.0",
  transitionEnd: "transitionEnd",
  sfx: "",
  filters: {
    blur: {
      min: 0,
      max: 100,
      unit: "px"
    },
    brightness: {
      min: 0,
      max: 400,
      unit: "%"
    },
    contrast: {
      min: 0,
      max: 400,
      unit: "%"
    },
    grayscale: {
      min: 0,
      max: 100,
      unit: "%"
    },
    hueRotate: {
      min: 0,
      max: 360,
      unit: "deg"
    },
    invert: {
      min: 0,
      max: 100,
      unit: "%"
    },
    saturate: {
      min: 0,
      max: 400,
      unit: "%"
    },
    sepia: {
      min: 0,
      max: 100,
      unit: "%"
    }
  },
  normalizeCss: function(e) {
    var r = jQuery.extend(!0, {}, e);
    for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r) {
      if ("transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]), "x" === t) {
        var a = jQuery.CSS.sfx + "transform";
        r[a] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]
      }
      "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t])
    }
    return r
  },
  getProp: function(e) {
    var r, t = [];
    for (r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
    return t.join(",")
  },
  animate: function(l, s, u, y, d) {
    return this.each(function() {
      function e() {
        r.called = !0, r.CSSAIsRunning = !1, t.off(jQuery.CSS.transitionEnd + "." + r.id), clearTimeout(r.timeout), t.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof d && d.apply(r), "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null)
      }
      var r = this,
        t = jQuery(this);
      r.id = r.id || "CSSA_" + (new Date).getTime();
      var a = a || {
        type: "noEvent"
      };
      if (r.CSSAIsRunning && r.eventType == a.type && !jQuery.browser.msie && jQuery.browser.version <= 9) r.CSSqueue = function() {
        t.CSSAnimate(l, s, u, y, d)
      };
      else if (r.CSSqueue = null, r.eventType = a.type, 0 !== t.length && l) {
        if (l = jQuery.normalizeCss(l), r.CSSAIsRunning = !0, "function" == typeof s && (d = s, s = jQuery.fx.speeds._default), "function" == typeof u && (y = u, u = 0), "string" == typeof u && (d = u, u = 0), "function" == typeof y && (d = y, y = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof s)
          for (var o in jQuery.fx.speeds) {
            if (s == o) {
              s = jQuery.fx.speeds[o];
              break
            }
            s = jQuery.fx.speeds._default
          }
        if (s || (s = jQuery.fx.speeds._default), "string" == typeof d && (y = d, d = null), jQuery.support.CSStransition) {
          var n = {
            default: "ease",
            in: "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
          };
          n[y] && (y = n[y]), t.off(jQuery.CSS.transitionEnd + "." + r.id), n = jQuery.CSS.getProp(l);
          var i = {};
          jQuery.extend(i, l), i[jQuery.CSS.sfx + "transition-property"] = n, i[jQuery.CSS.sfx + "transition-duration"] = s + "ms", i[jQuery.CSS.sfx + "transition-delay"] = u + "ms", i[jQuery.CSS.sfx + "transition-timing-function"] = y, setTimeout(function() {
            t.one(jQuery.CSS.transitionEnd + "." + r.id, e), t.css(i)
          }, 1), r.timeout = setTimeout(function() {
            r.called || !d ? (r.called = !1, r.CSSAIsRunning = !1) : (t.css(jQuery.CSS.sfx + "transition", ""), d.apply(r), r.CSSAIsRunning = !1, "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null))
          }, s + u + 10)
        } else {
          for (n in l) "transform" === n && delete l[n], "filter" === n && delete l[n], "transform-origin" === n && delete l[n], "auto" === l[n] && delete l[n], "x" === n && (a = l[n], l[o = "left"] = a, delete l[n]), "y" === n && (a = l[n], l[o = "top"] = a, delete l[n]), "-ms-transform" !== n && "-ms-filter" !== n || delete l[n];
          t.delay(u).animate(l, s, d)
        }
      }
    })
  }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(t) {
  return this.each(function() {
    var e = jQuery(this),
      r = jQuery.normalizeCss(t);
    e.css(r)
  })
};
var nAgt = navigator.userAgent;

function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var e = {
      version: "Unknown version",
      name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
  },
  nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
  jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
      if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
      if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
    }
    return 0
  },
  function(o) {
    o.simpleSlider = {
      defaults: {
        initialval: 0,
        scale: 100,
        orientation: "h",
        readonly: !1,
        callback: !1
      },
      events: {
        start: o.browser.mobile ? "touchstart" : "mousedown",
        end: o.browser.mobile ? "touchend" : "mouseup",
        move: o.browser.mobile ? "touchmove" : "mousemove"
      },
      init: function(a) {
        return this.each(function() {
          var r = this,
            t = o(r);
          t.addClass("simpleSlider"), r.opt = {}, o.extend(r.opt, o.simpleSlider.defaults, a), o.extend(r.opt, t.data());
          var e = "h" == r.opt.orientation ? "horizontal" : "vertical";
          e = o("<div/>").addClass("level").addClass(e), t.prepend(e), r.level = e, t.css({
            cursor: "default"
          }), "auto" == r.opt.scale && (r.opt.scale = o(r).outerWidth()), t.updateSliderVal(), r.opt.readonly || (t.on(o.simpleSlider.events.start, function(e) {
            o.browser.mobile && (e = e.changedTouches[0]), r.canSlide = !0, t.updateSliderVal(e), "h" == r.opt.orientation ? t.css({
              cursor: "col-resize"
            }) : t.css({
              cursor: "row-resize"
            }), o.browser.mobile || (e.preventDefault(), e.stopPropagation())
          }), o(document).on(o.simpleSlider.events.move, function(e) {
            o.browser.mobile && (e = e.changedTouches[0]), r.canSlide && (o(document).css({
              cursor: "default"
            }), t.updateSliderVal(e), o.browser.mobile || (e.preventDefault(), e.stopPropagation()))
          }).on(o.simpleSlider.events.end, function() {
            o(document).css({
              cursor: "auto"
            }), r.canSlide = !1, t.css({
              cursor: "auto"
            })
          }))
        })
      },
      updateSliderVal: function(e) {
        var r = this.get(0);
        if (r.opt) {
          r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
          var t = o(r).outerWidth(),
            a = o(r).outerHeight();
          r.x = "object" == typeof e ? e.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof e ? e * t / r.opt.scale : r.opt.initialval * t / r.opt.scale, r.y = "object" == typeof e ? e.clientY + document.body.scrollTop - this.offset().top : "number" == typeof e ? (r.opt.scale - r.opt.initialval - e) * a / r.opt.scale : r.opt.initialval * a / r.opt.scale, r.y = this.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / t, r.scaleY = r.y * r.opt.scale / a, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = void 0 !== e ? "h" == r.opt.orientation ? r.x >= this.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= this.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(Math.floor(100 * r.x / t) + "%") : r.level.height(Math.floor(100 * r.y / a)), "function" == typeof r.opt.callback && r.opt.callback(r)
        }
      }
    }, o.fn.simpleSlider = o.simpleSlider.init, o.fn.updateSliderVal = o.simpleSlider.updateSliderVal
  }(jQuery),
  function(r) {
    r.mbCookie = {
      set: function(e, r, t, a) {
        "object" == typeof r && (r = JSON.stringify(r)), a = a ? "; domain=" + a : "";
        var o = new Date,
          n = "";
        0 < t && (o.setTime(o.getTime() + 864e5 * t), n = "; expires=" + o.toGMTString()), document.cookie = e + "=" + r + n + "; path=/" + a
      },
      get: function(r) {
        r += "=";
        for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
          for (var a = e[t];
            " " == a.charAt(0);) a = a.substring(1, a.length);
          if (0 == a.indexOf(r)) try {
            return JSON.parse(a.substring(r.length, a.length))
          } catch (e) {
            return a.substring(r.length, a.length)
          }
        }
        return null
      },
      remove: function(e) {
        r.mbCookie.set(e, "", -1)
      }
    }, r.mbStorage = {
      set: function(e, r) {
        "object" == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r)
      },
      get: function(r) {
        if (!localStorage[r]) return null;
        try {
          return JSON.parse(localStorage[r])
        } catch (e) {
          return localStorage[r]
        }
      },
      remove: function(e) {
        e ? localStorage.removeItem(e) : localStorage.clear()
      }
    }
  }(jQuery);

/*=====  End of 20. Yt player ======*/
