(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    2488: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 75220, 23)),
        Promise.resolve().then(r.bind(r, 84036)),
        Promise.resolve().then(r.bind(r, 69679)),
        Promise.resolve().then(r.bind(r, 51133)),
        Promise.resolve().then(r.bind(r, 49780)),
        Promise.resolve().then(r.bind(r, 71359)),
        Promise.resolve().then(r.bind(r, 40861)),
        Promise.resolve().then(r.bind(r, 47855)),
        Promise.resolve().then(r.bind(r, 87965)),
        Promise.resolve().then(r.t.bind(r, 43674, 23)),
        Promise.resolve().then(r.bind(r, 84187));
    },
    75962: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(3827),
        i = r(56014),
        s = r(8792),
        o = r(64090),
        l = r(47907);
      function a(e) {
        let { href: t, children: r, onClick: a, className: c, ...u } = e,
          { goToRoute: d } = (0, i.useNavigationContext)(),
          { setLoading: f } = (0, i.useNavigationContext)(),
          m = (0, l.usePathname)();
        return (
          (0, o.useLayoutEffect)(() => {
            f(i.LOADING_STATES.LOADED);
          }, [m]),
          (0, n.jsx)(s.default, {
            prefetch: !0,
            passHref: !0,
            href: t,
            legacyBehavior: !0,
            children: (0, n.jsx)("a", {
              onClick: (e) => {
                let r = new URL(t, window.location.href),
                  n = r.pathname.endsWith("/")
                    ? r.pathname.slice(0, -1)
                    : r.pathname,
                  i = m.endsWith("/") ? m.slice(0, -1) : m;
                e.preventDefault(), a && a(), n !== i && d(t);
              },
              className: c,
              ...u,
              children: r,
            }),
          })
        );
      }
    },
    40861: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(75962),
        o = r(49908),
        l = r(11984),
        a = r(69162),
        c = r.n(a);
      function u() {
        let e = (0, i.useRef)(null);
        return (
          (0, o.V)(() => {
            let t = window.innerHeight;
            l.p8.to(e.current, {
              opacity: 1,
              scrollTrigger: {
                trigger: document.body,
                start: "top+=".concat(t / 2, " top"),
                end: "bottom bottom",
                toggleActions: "play reverse play reverse",
              },
              ease: "power3.out",
              duration: 0.3,
            });
          }),
          (0, n.jsx)("div", {
            className: c().linkContainer,
            ref: e,
            children: (0, n.jsx)(s.default, {
              className: c().button,
              href: "/start-your-project",
              children: (0, n.jsxs)("span", {
                className: c().text,
                children: [
                  (0, n.jsx)("span", {
                    className: c().textInner,
                    children: "Start your project",
                  }),
                  (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 17.1 15.17",
                    className: c().buttonArrow,
                    children: (0, n.jsx)("path", {
                      d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                      fill: "currentColor",
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    23560: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(3827),
        i = r(64090);
      r(61374);
      var s = r(66203),
        o = r(38715),
        l = r.n(o);
      function a(e) {
        var t, r, o, a;
        let {
          image: c,
          sizes: u = "100vw",
          lazy: d = !0,
          priority: f = "low",
          layout: m = "fill",
        } = e;
        if (!c) return null;
        let p = l()[m];
        return (
          (0, i.useEffect)(() => {
            window.lazySizes &&
              "function" == typeof window.lazySizes.update &&
              window.lazySizes.update();
          }, [c]),
          (0, n.jsxs)("span", {
            className: (0, s.cn)(l().image, p),
            children: [
              d &&
                (0, n.jsx)("img", {
                  "data-srcset": c.srcSet || "",
                  "data-src": c.sourceUrl || "",
                  alt: c.altText || "",
                  fetchPriority: f,
                  height:
                    (null == c
                      ? void 0
                      : null === (t = c.mediaDetails) || void 0 === t
                      ? void 0
                      : t.height) || "",
                  width:
                    (null == c
                      ? void 0
                      : null === (r = c.mediaDetails) || void 0 === r
                      ? void 0
                      : r.width) || "",
                  sizes: "auto",
                  className: "lazyload",
                }),
              !d &&
                (0, n.jsx)("img", {
                  srcSet: c.srcSet || "",
                  src: c.sourceUrl || "",
                  alt: c.altText || "",
                  loading: "eager",
                  fetchPriority: f,
                  height:
                    (null == c
                      ? void 0
                      : null === (o = c.mediaDetails) || void 0 === o
                      ? void 0
                      : o.height) || "",
                  width:
                    (null == c
                      ? void 0
                      : null === (a = c.mediaDetails) || void 0 === a
                      ? void 0
                      : a.width) || "",
                  sizes: u,
                }),
            ],
          })
        );
      }
    },
    41852: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(3827),
        i = r(17039),
        s = r.n(i),
        o = r(23560),
        l = r(75962),
        a = r(66203);
      function c(e) {
        var t, r, i, c, u, d, f, m, p, h;
        let { project: v, size: g = "small" } = e;
        return v
          ? (0, n.jsxs)(
              l.default,
              {
                className: (0, a.cn)(s().project, s()[g]),
                href: "/work/".concat(null == v ? void 0 : v.slug),
                "data-animation": "grid-item",
                children: [
                  (0, n.jsxs)("div", {
                    className: s().projectText,
                    children: [
                      (0, n.jsxs)("h3", {
                        children: [
                          (0, n.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 14.78 14.78",
                            children: [
                              (0, n.jsx)("defs", {
                                children: (0, n.jsxs)("linearGradient", {
                                  id: "d",
                                  x1: "3.54",
                                  x2: "13.98",
                                  y1: "3.54",
                                  y2: "13.99",
                                  gradientUnits: "userSpaceOnUse",
                                  children: [
                                    (0, n.jsx)("stop", {
                                      offset: "0",
                                      stopColor: "#7c41f3",
                                    }),
                                    (0, n.jsx)("stop", {
                                      offset: "1",
                                      stopColor: "#ff6eff",
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)("path", {
                                fill: "url(#d)",
                                strokeWidth: "0",
                                d: "M13.25 12.18L13.25 0.23 14.78 0.23 14.78 14.76 14.74 14.76 14.74 14.78 0.21 14.78 0.21 13.25 12.18 13.25 0 1.08 1.08 0 13.25 12.18z",
                              }),
                            ],
                          }),
                          null == v ? void 0 : v.title,
                        ],
                      }),
                      (0, n.jsx)("p", {
                        children:
                          null == v
                            ? void 0
                            : null === (r = v.singleProject) || void 0 === r
                            ? void 0
                            : null === (t = r.projectDetails) || void 0 === t
                            ? void 0
                            : t.yearCompleted,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: s().projectImage,
                    children: [
                      (0, n.jsxs)("div", {
                        className: s().imageOverlay,
                        children: [
                          (0, n.jsx)("p", {
                            className: s().heading,
                            dangerouslySetInnerHTML: {
                              __html:
                                (null == v
                                  ? void 0
                                  : null === (c = v.singleProject) ||
                                    void 0 === c
                                  ? void 0
                                  : null === (i = c.hero) || void 0 === i
                                  ? void 0
                                  : i.heading) ||
                                (null == v ? void 0 : v.title) ||
                                "",
                            },
                          }),
                          (0, n.jsxs)("ul", {
                            className: s().tags,
                            children: [
                              null == v
                                ? void 0
                                : null === (d = v.taxonomyServices) ||
                                  void 0 === d
                                ? void 0
                                : null === (u = d.edges) || void 0 === u
                                ? void 0
                                : u.map((e) => {
                                    var t, r;
                                    return (0, n.jsx)(
                                      "li",
                                      {
                                        children:
                                          null == e
                                            ? void 0
                                            : null === (t = e.node) ||
                                              void 0 === t
                                            ? void 0
                                            : t.name,
                                      },
                                      null == e
                                        ? void 0
                                        : null === (r = e.node) || void 0 === r
                                        ? void 0
                                        : r.name
                                    );
                                  }),
                              null == v
                                ? void 0
                                : null === (m = v.taxonomySectors) ||
                                  void 0 === m
                                ? void 0
                                : null === (f = m.edges) || void 0 === f
                                ? void 0
                                : f.map((e) => {
                                    var t, r;
                                    return (0, n.jsx)(
                                      "li",
                                      {
                                        children:
                                          null == e
                                            ? void 0
                                            : null === (t = e.node) ||
                                              void 0 === t
                                            ? void 0
                                            : t.name,
                                      },
                                      null == e
                                        ? void 0
                                        : null === (r = e.node) || void 0 === r
                                        ? void 0
                                        : r.name
                                    );
                                  }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.default, {
                        image:
                          null == v
                            ? void 0
                            : null === (h = v.singleProject) || void 0 === h
                            ? void 0
                            : null === (p = h.projectDetails) || void 0 === p
                            ? void 0
                            : p.featuredImage,
                        layout: "fill",
                      }),
                    ],
                  }),
                ],
              },
              null == v ? void 0 : v.databaseId
            )
          : null;
      }
    },
    84036: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(11984),
        o = r(49908),
        l = r(39476),
        a = r.n(l);
      function c(e) {
        let { children: t, fill: r = !1, duration: l = 0.75, delay: c = 0 } = e,
          u = (0, i.useRef)(null);
        return (
          (0, o.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(u.current, {
                opacity: 1,
                scrollTrigger: {
                  trigger: u.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "none",
                duration: l,
                delay: c,
              });
            });
          }),
          (0, n.jsx)("span", {
            className: a().container,
            "data-fill": r,
            ref: u,
            children: t,
          })
        );
      }
    },
    69679: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(11984),
        o = r(49908),
        l = r(64454),
        a = r.n(l);
      function c(e) {
        let {
            children: t,
            fill: r = !1,
            duration: l = 0.75,
            delay: c = 0,
            direction: u = "counterclockwise",
          } = e,
          d = (0, i.useRef)(null);
        return (
          (0, o.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                opacity: 1,
                rotate: 0,
                scrollTrigger: {
                  trigger: d.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "power4.out",
                duration: l,
                delay: c,
              });
            });
          }),
          (0, n.jsx)("span", {
            className: a().container,
            "data-fill": r,
            "data-direction": u,
            ref: d,
            children: t,
          })
        );
      }
    },
    51133: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(11984),
        o = r(49908),
        l = r(86612),
        a = r.n(l);
      function c(e) {
        let { children: t, delay: r = 0, lineThreshold: l = 0.9 } = e,
          c = (0, i.useRef)(null);
        return (
          (0, o.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                new s.C2("span", {
                  type: "lines,words",
                  linesClass: "split-line",
                  wordsClass: "split-word",
                  tag: "span",
                  lineThreshold: l,
                }),
                  s.ic.create({
                    trigger: c.current,
                    start: "top bottom",
                    end: "bottom top",
                    onEnter: () => {
                      let e = s.p8.utils.toArray(".split-line");
                      0 !== e.length &&
                        e.forEach((e, t) => {
                          let n = s.p8.utils.toArray(
                            e.querySelectorAll(".split-word")
                          );
                          e.querySelector("em"),
                            s.p8.to(n, {
                              y: 0,
                              duration: 1,
                              delay: r + 0.125 * t,
                              ease: "power3.out",
                              onComplete: () => {
                                s.p8.set(e, { overflow: "visible" });
                              },
                            }),
                            s.p8.fromTo(
                              e,
                              { "--clipEnd": "0%" },
                              {
                                "--clipEnd": "100%",
                                delay: 0.25 * t + r + 0.55,
                                duration: 0.5,
                                ease: "power3.out",
                              }
                            );
                        });
                    },
                  });
              });
            },
            { scope: c }
          ),
          (0, n.jsx)("span", {
            className: a().headingOuter,
            ref: c,
            children: t,
          })
        );
      }
    },
    49780: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(11984),
        o = r(49908),
        l = r(32502),
        a = r.n(l);
      function c(e) {
        let { children: t, fill: r = !1, duration: l = 0.5, delay: c = 0 } = e,
          u = (0, i.useRef)(null),
          d = (0, i.useRef)(null);
        return (
          (0, o.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                y: 0,
                scrollTrigger: {
                  trigger: u.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "power1.out",
                duration: l,
                delay: c,
              });
            });
          }),
          (0, n.jsx)("span", {
            className: a().container,
            "data-fill": r,
            ref: u,
            children: (0, n.jsx)("div", {
              className: a().inner,
              ref: d,
              children: t,
            }),
          })
        );
      }
    },
    71359: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(11984),
        o = r(49908),
        l = r(69655),
        a = r.n(l);
      function c(e) {
        let { children: t, fill: r = !1, duration: l = 0.5, delay: c = 0 } = e,
          u = (0, i.useRef)(null),
          d = (0, i.useRef)(null);
        return (
          (0, o.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(u.current, {
                scale: 1,
                scrollTrigger: {
                  trigger: u.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: s.t_.create(
                  "custom",
                  "M0,0 C0,0 0.03,0.285 0.062,0.42 0.094,0.555 0.115,0.589 0.14,0.654 0.163,0.714 0.199,0.826 0.227,0.873 0.25,0.914 0.295,0.983 0.322,1.01 0.346,1.034 0.394,1.08 0.444,1.08 0.549,1.08 0.597,0.939 0.67,0.939 0.782,0.917 1,1 1,1 "
                ),
                duration: l,
                delay: c,
              }),
                s.p8.to(d.current, {
                  opacity: 1,
                  scrollTrigger: {
                    trigger: u.current,
                    start: "top bottom",
                    end: "bottom top",
                  },
                  ease: "none",
                  duration: l / 2,
                  delay: c,
                });
            });
          }),
          (0, n.jsx)("span", {
            className: a().container,
            "data-fill": r,
            ref: u,
            children: (0, n.jsx)("span", {
              className: a().inner,
              "data-fill": r,
              ref: d,
              children: t,
            }),
          })
        );
      }
    },
    98405: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(3827),
        i = r(64090),
        s = r(47907),
        o = r(11984),
        l = r(49908),
        a = r(72670),
        c = r.n(a);
      function u(e) {
        let { children: t } = e,
          r = (0, i.useRef)(null),
          a = (0, s.useSearchParams)();
        return (
          (0, l.V)(
            () => {
              o.p8.matchMedia().add("(min-width: 850px)", () => {
                o.ic.batch('[data-animation="grid-item"]', {
                  onEnter: (e) =>
                    o.p8.to(e, {
                      opacity: 1,
                      y: 0,
                      ease: "power1.out",
                      duration: 1,
                      stagger: 0.15,
                    }),
                });
              });
            },
            { dependencies: [a], scope: r, revertOnUpdate: !0 }
          ),
          (0, n.jsx)("div", { className: c().grid, ref: r, children: t })
        );
      }
    },
    87965: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return b;
          },
        });
      var n = r(3827),
        i = r(64090),
        s = r(47907),
        o = r(96342),
        l = r.n(o),
        a = r(66203),
        c = r(48060),
        u = r.n(c),
        d = r(91987),
        f = r.n(d);
      function m(e) {
        let { term: t } = e;
        if (!t) return null;
        let r = (0, s.useRouter)(),
          o = (0, s.usePathname)(),
          l = (0, s.useSearchParams)(),
          [c, u] = (0, i.useState)("not-active"),
          d = (0, i.useCallback)(
            (e, t) => {
              let r = new URLSearchParams(l),
                n = r.get(e);
              if (n) {
                let i = n.split(","),
                  s = i.indexOf(t);
                s > -1 ? i.splice(s, 1) : i.push(t),
                  0 === i.length ? r.delete(e) : r.set(e, i.join(","));
              } else r.set(e, t);
              return r.toString();
            },
            [l]
          );
        return (
          (0, i.useEffect)(() => {
            let e = l.get("sector");
            if (!e) return u("not-active");
            u(
              (null == e ? void 0 : e.split(",").includes(t.slug))
                ? "active"
                : "not-active"
            );
          }, [l, t]),
          (0, n.jsx)(n.Fragment, {
            children:
              (null == t ? void 0 : t.count) !== null &&
              (0, n.jsx)("button", {
                className: (0, a.cn)(f().filter, f()[c]),
                onClick: () => {
                  r.push(o + "?" + d("sector", t.slug), { scroll: !1 });
                },
                children: t.name,
              }),
          })
        );
      }
      function p(e) {
        let { sectors: t } = e;
        return (0, n.jsx)("div", {
          className: u().taxonomyTerms,
          children:
            t &&
            t.map(
              (e) => e.node && (0, n.jsx)(m, { term: e.node }, e.node.slug)
            ),
        });
      }
      var h = r(72627),
        v = r.n(h);
      function g(e) {
        let { term: t } = e;
        if (!t) return null;
        let r = (0, s.useRouter)(),
          o = (0, s.usePathname)(),
          l = (0, s.useSearchParams)(),
          [c, u] = (0, i.useState)("not-active"),
          d = (0, i.useCallback)(
            (e, t) => {
              let r = new URLSearchParams(l),
                n = r.get(e);
              if (n) {
                let i = n.split(","),
                  s = i.indexOf(t);
                s > -1 ? i.splice(s, 1) : i.push(t),
                  0 === i.length ? r.delete(e) : r.set(e, i.join(","));
              } else r.set(e, t);
              return r.toString();
            },
            [l]
          );
        return (
          (0, i.useEffect)(() => {
            let e = l.get("service");
            if (!e) return u("not-active");
            u(
              (null == e ? void 0 : e.split(",").includes(t.slug))
                ? "active"
                : "not-active"
            );
          }, [l, t]),
          (0, n.jsx)(n.Fragment, {
            children:
              (null == t ? void 0 : t.count) !== null &&
              (0, n.jsx)("button", {
                className: (0, a.cn)(f().filter, f()[c]),
                onClick: () => {
                  r.push(o + "?" + d("service", t.slug), { scroll: !1 });
                },
                children: t.name,
              }),
          })
        );
      }
      function _(e) {
        let { services: t } = e;
        return (0, n.jsx)("div", {
          className: v().taxonomyTerms,
          children:
            t &&
            t.map(
              (e) => e.node && (0, n.jsx)(g, { term: e.node }, e.node.slug)
            ),
        });
      }
      var x = r(78740),
        j = r.n(x);
      let w = (e) => {
        let { label: t, slug: r, type: o } = e,
          l = (0, s.useRouter)(),
          a = (0, s.usePathname)(),
          c = (0, s.useSearchParams)(),
          u = (0, i.useCallback)(() => {
            let e = new URLSearchParams(c),
              t = e.get(o);
            if (t) {
              let n = t.split(","),
                i = n.indexOf(r);
              i > -1 && n.splice(i, 1),
                0 === n.length ? e.delete(o) : e.set(o, n.join(",")),
                l.push(a + "?" + e.toString(), { scroll: !1 });
            }
          }, [c, o, r, a, l]);
        return (0, n.jsxs)("button", {
          onClick: u,
          className: j().filter,
          children: [
            t,
            (0, n.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 15.695 15.691",
              children: (0, n.jsx)("path", {
                d: "M7.85 9.264l-6.428 6.427L0 14.274l6.43-6.429L0 1.417 1.422 0 7.85 6.428 14.279 0l1.416 1.417-6.428 6.428 6.428 6.429-1.416 1.417z",
                fill: "currentColor",
              }),
            }),
          ],
        });
      };
      var y = (e) => {
        let { services: t, sectors: r } = e,
          o = (0, s.useSearchParams)(),
          [l, a] = (0, i.useState)([]),
          [c, u] = (0, i.useState)([]),
          d = (e, t) => {
            let r = t.find((t) => t.node.slug === e);
            return r ? r.node.name : e;
          };
        return (
          (0, i.useEffect)(() => {
            let e = o.get("service"),
              t = o.get("sector");
            a(e ? e.split(",") : []), u(t ? t.split(",") : []);
          }, [o]),
          (0, n.jsxs)("div", {
            className: j().filterList,
            children: [
              l.map((e, r) =>
                (0, n.jsx)(w, { slug: e, label: d(e, t), type: "service" }, r)
              ),
              c.map((e, t) =>
                (0, n.jsx)(w, { slug: e, label: d(e, r), type: "sector" }, t)
              ),
            ],
          })
        );
      };
      function b(e) {
        let { sectors: t, services: r } = e,
          [o, c] = (0, i.useState)(!1),
          [u, d] = (0, i.useState)(!1),
          [f, m] = (0, i.useState)(!1),
          h = (0, s.useRouter)(),
          v = (0, s.usePathname)(),
          g = (0, s.useSearchParams)();
        return (
          (0, i.useEffect)(() => {
            let e = g.get("sector"),
              t = g.get("service");
            e || t ? m(!0) : m(!1);
          }, [g]),
          (0, n.jsxs)("div", {
            className: l().filters,
            children: [
              (0, n.jsxs)("div", {
                className: l().left,
                children: [
                  (0, n.jsxs)("div", {
                    className: l().triggers,
                    children: [
                      (0, n.jsxs)("button", {
                        className: (0, a.cn)(l().trigger, o ? l().active : ""),
                        onClick: () => {
                          c(!o), u && d(!1);
                        },
                        children: [
                          "Sectors",
                          (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 32.53 18.59",
                            children: (0, n.jsx)("path", {
                              fill: "currentColor",
                              d: "M16.26 18.59L0 2.32 2.32 0l13.94 13.94L30.21 0l2.32 2.32-16.26 16.26z",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("button", {
                        className: (0, a.cn)(l().trigger, u ? l().active : ""),
                        onClick: () => {
                          d(!u), o && c(!1);
                        },
                        children: [
                          "Services",
                          (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 32.53 18.59",
                            children: (0, n.jsx)("path", {
                              fill: "currentColor",
                              d: "M16.26 18.59L0 2.32 2.32 0l13.94 13.94L30.21 0l2.32 2.32-16.26 16.26z",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o && (0, n.jsx)(p, { sectors: t }),
                  u && (0, n.jsx)(_, { services: r }),
                  f &&
                    (0, n.jsx)("button", {
                      className: l().clearAll,
                      onClick: () => {
                        h.push(v, { scroll: !1 }), c(!1), d(!1);
                      },
                      children: "Clear all filters",
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: l().right,
                children: (0, n.jsx)(y, { sectors: t, services: r }),
              }),
            ],
          })
        );
      }
    },
    84187: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(3827),
        i = r(47907),
        s = r(938),
        o = r.n(s),
        l = r(41852),
        a = r(98405);
      function c(e) {
        var t, r, s, c;
        let { projects: u } = e,
          d = (0, i.useSearchParams)(),
          f =
            null !==
              (s =
                null === (t = d.get("sector")) || void 0 === t
                  ? void 0
                  : t.split(",")) && void 0 !== s
              ? s
              : [],
          m =
            null !==
              (c =
                null === (r = d.get("service")) || void 0 === r
                  ? void 0
                  : r.split(",")) && void 0 !== c
              ? c
              : [];
        if (!u) return null;
        let p = u.filter((e) => {
          let { node: t } = e,
            r = t.taxonomySectors.edges.map((e) => {
              let { node: t } = e;
              return t.slug;
            }),
            n = t.taxonomyServices.edges.map((e) => {
              let { node: t } = e;
              return t.slug;
            }),
            i = 0 === f.length || f.some((e) => r.includes(e)),
            s = 0 === m.length || m.some((e) => n.includes(e));
          return f.length > 0 && m.length > 0
            ? i || s
            : f.length > 0
            ? i
            : !(m.length > 0) || s;
        });
        return (0, n.jsx)(a.Z, {
          children: (0, n.jsx)("div", {
            className: o().projectList,
            children: Array.isArray(p)
              ? p.map((e, t) => {
                  let { node: r } = e;
                  return (
                    r &&
                    (0, n.jsx)(l.Z, { project: r, size: "small" }, r.databaseId)
                  );
                })
              : null,
          }),
        });
      }
    },
    56014: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          LOADING_STATES: function () {
            return i;
          },
          NavigationContext: function () {
            return u;
          },
          NavigationContextProvider: function () {
            return d;
          },
          useNavigationContext: function () {
            return f;
          },
        });
      var n,
        i,
        s = r(3827),
        o = r(93696),
        l = r(64090);
      let a = () => {
        let { loading: e, setLoading: t } = f(),
          r = (0, l.useRef)(null),
          n = () => {
            o.ZP.set(r.current, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            });
          },
          a = () => {
            o.ZP.to(r.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.inOut",
            });
          },
          c = () => {
            o.ZP.to(r.current, {
              opacity: 0,
              duration: 0.6,
              ease: "none",
              onComplete: () => {
                o.ZP.set(r.current, {
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  opacity: 1,
                });
              },
            });
          };
        return (
          (0, l.useEffect)(() => {
            n();
          }, []),
          (0, l.useEffect)(() => {
            switch (e) {
              case i.LOADING:
                a();
                break;
              case i.LOADED:
                c();
            }
          }, [e]),
          (0, s.jsx)("div", {
            ref: r,
            style: {
              position: "fixed",
              zIndex: 50,
              width: "100vw",
              height: "100vh",
              background: "#efefef",
            },
          })
        );
      };
      var c = r(47907);
      ((n = i || (i = {})).INIT = "INITIALIZED"),
        (n.LOADING = "PENDING"),
        (n.LOADED = "COMPLETE");
      let u = (0, l.createContext)({
          goToRoute: (e) => {},
          loading: "INITIALIZED",
          setLoading: () => {},
        }),
        d = (e) => {
          let { children: t } = e,
            r = (0, c.useRouter)(),
            [n, i] = (0, l.useState)("INITIALIZED"),
            o = async (e) => {
              i("PENDING"),
                r.prefetch(e),
                setTimeout(() => {
                  window.scrollTo(0, -100), r.push(e, { scroll: !0 });
                }, 1e3);
            };
          return (0, s.jsxs)(u.Provider, {
            value: { goToRoute: o, loading: n, setLoading: i },
            children: [(0, s.jsx)(a, {}), t],
          });
        },
        f = () => (0, l.useContext)(u);
    },
    47907: function (e, t, r) {
      "use strict";
      var n = r(15313);
      r.o(n, "useParams") &&
        r.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    66203: function (e, t, r) {
      "use strict";
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let n = (e) =>
          e.reduce(
            (e, t) => (
              Array.isArray(t) ? e.push(...n(t)) : null != t && e.push(t), e
            ),
            []
          );
        return n(t).join(" ");
      }
      r.d(t, {
        cn: function () {
          return n;
        },
      });
    },
    75220: function (e) {
      e.exports = { projectsWithFilters: "Work_projectsWithFilters__mwDTM" };
    },
    69162: function (e) {
      e.exports = {
        linkContainer: "FloatingStartButton_linkContainer__eZz7z",
        button: "FloatingStartButton_button__Ncnrf",
        buttonArrow: "FloatingStartButton_buttonArrow__re1eN",
        "button-text": "FloatingStartButton_button-text__qflla",
        text: "FloatingStartButton_text__70x9M",
      };
    },
    38715: function (e) {
      e.exports = {
        image: "Image_image__RAAdZ",
        fill: "Image_fill__EiIzS",
        contain: "Image_contain__awbZj",
        intrinsic: "Image_intrinsic__JRoea",
      };
    },
    17039: function (e) {
      e.exports = {
        project: "ProjectCard_project__d1wbY",
        imageOverlay: "ProjectCard_imageOverlay__OCawr",
        small: "ProjectCard_small__xsL92",
        large: "ProjectCard_large__JOQbv",
        heading: "ProjectCard_heading__1csIW",
        projectText: "ProjectCard_projectText__o770X",
        projectImage: "ProjectCard_projectImage__Nfx9I",
        tags: "ProjectCard_tags__XdVcf",
      };
    },
    39476: function (e) {
      e.exports = { container: "FadeIn_container__bjQVL" };
    },
    64454: function (e) {
      e.exports = { container: "FadeInRotate_container__QE9u9" };
    },
    86612: function (e) {
      e.exports = { headingOuter: "LineByLine_headingOuter__JmusT" };
    },
    32502: function (e) {
      e.exports = {
        container: "MaskInUp_container__0AW5i",
        inner: "MaskInUp_inner__kzXc3",
      };
    },
    69655: function (e) {
      e.exports = {
        container: "ScaleFadeIn_container__cK78G",
        inner: "ScaleFadeIn_inner__y4reT",
      };
    },
    78740: function (e) {
      e.exports = {
        filterList: "ActiveFilters_filterList__7UN2U",
        filter: "ActiveFilters_filter__QMfhO",
      };
    },
    72670: function (e) {
      e.exports = { grid: "AnimatedWorkGrid_grid__4aD0h" };
    },
    91987: function (e) {
      e.exports = {
        filter: "Filter_filter__biXuq",
        active: "Filter_active__Fsw7R",
      };
    },
    96342: function (e) {
      e.exports = {
        filters: "Filters_filters__Q0lSM",
        left: "Filters_left__IQOv2",
        right: "Filters_right__RxPXO",
        triggers: "Filters_triggers__mq2v7",
        trigger: "Filters_trigger__2suyY",
        active: "Filters_active__z1IMg",
        clearAll: "Filters_clearAll__i6ba_",
      };
    },
    43674: function (e) {
      e.exports = {
        hero: "Hero_hero__Oyf4n",
        video: "Hero_video__rzcbe",
        top: "Hero_top__RRkYH",
        bottom: "Hero_bottom__ktiOH",
        introText: "Hero_introText__oP34v",
        arrow: "Hero_arrow__lxSeM",
      };
    },
    938: function (e) {
      e.exports = { projectList: "ProjectsList_projectList__H4dCn" };
    },
    48060: function (e) {
      e.exports = { taxonomyTerms: "SectorFilters_taxonomyTerms__TRbbe" };
    },
    72627: function (e) {
      e.exports = { taxonomyTerms: "ServiceFilters_taxonomyTerms__hSuja" };
    },
  },
  function (e) {
    e.O(0, [922, 689, 912, 924, 855, 971, 69, 744], function () {
      return e((e.s = 2488));
    }),
      (_N_E = e.O());
  },
]);
