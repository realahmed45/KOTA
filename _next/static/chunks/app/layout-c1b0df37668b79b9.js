(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    72431: function () {},
    50489: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 58431, 23)),
        Promise.resolve().then(n.bind(n, 86019)),
        Promise.resolve().then(n.bind(n, 500)),
        Promise.resolve().then(n.bind(n, 95423)),
        Promise.resolve().then(n.bind(n, 75962)),
        Promise.resolve().then(n.t.bind(n, 55212, 23)),
        Promise.resolve().then(n.bind(n, 89463)),
        Promise.resolve().then(n.t.bind(n, 73158, 23)),
        Promise.resolve().then(n.bind(n, 35085)),
        Promise.resolve().then(n.bind(n, 22885)),
        Promise.resolve().then(n.bind(n, 67543)),
        Promise.resolve().then(n.bind(n, 56014)),
        Promise.resolve().then(n.t.bind(n, 85935, 23)),
        Promise.resolve().then(n.t.bind(n, 23330, 23)),
        Promise.resolve().then(n.t.bind(n, 26702, 23));
    },
    89461: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(34802),
        i = n.n(o),
        s = n(66203),
        l = n(75962),
        u = n(71947);
      function c(e) {
        let {
            href: t,
            text: n,
            type: o,
            color: c = "black",
            target: d = "",
            direction: _ = "forwards",
          } = e,
          g = (0, a.useRef)(null),
          f = (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("span", {
              className: i().text,
              children: [
                (0, r.jsx)("span", {
                  className: i().textInner,
                  dangerouslySetInnerHTML: { __html: n },
                }),
                (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 17.1 15.17",
                  className: i().buttonArrow,
                  children: (0, r.jsx)("path", {
                    d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
          m = i()[c];
        return (() => {
          switch (o) {
            case "a-internal":
              return (0, r.jsx)(u.default, {
                children: (0, r.jsx)("div", {
                  className: (0, s.cn)(i().button, m),
                  ref: g,
                  "data-direction": _,
                  children: (0, r.jsxs)(l.default, {
                    href: t,
                    className: i().inner,
                    children: [
                      (0, r.jsx)("span", { className: i().border }),
                      f,
                    ],
                  }),
                }),
              });
            case "a-external":
              return (0, r.jsx)(u.default, {
                children: (0, r.jsx)("div", {
                  className: (0, s.cn)(i().button, m),
                  ref: g,
                  "data-direction": _,
                  children: (0, r.jsxs)("a", {
                    href: t,
                    className: i().inner,
                    target: d,
                    children: [
                      (0, r.jsx)("span", { className: i().border }),
                      f,
                    ],
                  }),
                }),
              });
            default:
              return (0, r.jsx)(u.default, {
                children: (0, r.jsx)("button", {
                  className: (0, s.cn)(i().button, m),
                  ref: g,
                  "data-direction": _,
                  children: (0, r.jsxs)("div", {
                    className: i().inner,
                    children: [
                      (0, r.jsx)("span", { className: i().border }),
                      f,
                    ],
                  }),
                }),
              });
          }
        })();
      }
    },
    86019: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(3827),
        a = n(31470),
        o = n.n(a),
        i = n(47907);
      function s() {
        let e = (0, i.usePathname)();
        return e.includes("/service/") ||
          e.includes("/b2b-transformation") ||
          e.includes("/b2b-tech-software-saas") ||
          e.includes("/agencies") ||
          e.includes("/healthcare") ||
          e.includes("/media-entertainment") ||
          e.includes("/retail")
          ? null
          : (0, r.jsx)("p", {
              className: o().celebrating,
              "data-modal-hide": !0,
              children: (0, r.jsx)("a", {
                href: "https://10-years.kota.co.uk/",
                target: "_blank",
                children: "Celebrating 10 years : 2013 - 2023",
              }),
            });
      }
    },
    500: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          getLocalStorage: function () {
            return u;
          },
          setLocalStorage: function () {
            return c;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(66203),
        i = n(72256),
        s = n.n(i),
        l = n(93696);
      function u(e, t) {
        let n = localStorage.getItem(e);
        return null !== n && "undefined" !== n ? JSON.parse(n) : t;
      }
      function c(e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }
      function d() {
        let [e, t] = (0, a.useState)(null),
          [n, i] = (0, a.useState)(!1),
          d = (0, a.useRef)(null);
        return ((0, a.useEffect)(() => {
          let e = u("cookie_consent", null);
          null !== e && t("granted" === e), i(!0);
        }, []),
        (0, a.useEffect)(() => {
          if (null !== e) {
            let t = e ? "granted" : "denied";
            window.gtag("consent", "update", {
              analytics_storage: t,
              ad_user_data: t,
              ad_personalization: t,
              ad_storage: t,
            }),
              c("cookie_consent", t);
          }
        }, [e]),
        (0, a.useEffect)(() => {
          n &&
            null === e &&
            l.p8.fromTo(
              d.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.3, delay: 2 }
            );
        }, [n, e]),
        n)
          ? null === e &&
              (0, r.jsxs)("div", {
                ref: d,
                className: (0, o.cn)(
                  s().banner,
                  null != e ? s().hidden : s().visible
                ),
                children: [
                  (0, r.jsxs)("p", {
                    children: [
                      'Our website uses cookies to enhance user experience. By clicking "Accept", you consent to our use of cookies.',
                      " ",
                      (0, r.jsx)("a", {
                        href: "/privacy-policy",
                        target: "_blank",
                        children: "Privacy policy",
                      }),
                      ".",
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: s().buttons,
                    children: [
                      (0, r.jsx)("button", {
                        className: s().button,
                        onClick: () => t(!0),
                        children: "Accept",
                      }),
                      (0, r.jsx)("button", {
                        className: s().button,
                        onClick: () => t(!1),
                        children: "Reject",
                      }),
                    ],
                  }),
                ],
              })
          : null;
      }
    },
    75962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(3827),
        a = n(56014),
        o = n(8792),
        i = n(64090),
        s = n(47907);
      function l(e) {
        let { href: t, children: n, onClick: l, className: u, ...c } = e,
          { goToRoute: d } = (0, a.useNavigationContext)(),
          { setLoading: _ } = (0, a.useNavigationContext)(),
          g = (0, s.usePathname)();
        return (
          (0, i.useLayoutEffect)(() => {
            _(a.LOADING_STATES.LOADED);
          }, [g]),
          (0, r.jsx)(o.default, {
            prefetch: !0,
            passHref: !0,
            href: t,
            legacyBehavior: !0,
            children: (0, r.jsx)("a", {
              onClick: (e) => {
                let n = new URL(t, window.location.href),
                  r = n.pathname.endsWith("/")
                    ? n.pathname.slice(0, -1)
                    : n.pathname,
                  a = g.endsWith("/") ? g.slice(0, -1) : g;
                e.preventDefault(), l && l(), r !== a && d(t);
              },
              className: u,
              ...c,
              children: n,
            }),
          })
        );
      }
    },
    89463: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(3827),
        a = n(54983);
      function o(e) {
        let { GA_MEASUREMENT_ID: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.default, {
              strategy: "afterInteractive",
              src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
            }),
            (0, r.jsx)(a.default, {
              id: "google-analytics",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('consent', 'default', {\n                'analytics_storage': 'denied'\n            });\n            \n            gtag('config', '".concat(
                    t,
                    "');\n          "
                  ),
              },
            }),
            (0, r.jsx)(a.default, {
              id: "google-tag-manager",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-M3SFD8G');\n          ",
              },
            }),
            (0, r.jsx)(a.default, {
              strategy: "afterInteractive",
              src: "https://www.googletagmanager.com/gtag/js?id=AW-985589288",
            }),
            (0, r.jsx)(a.default, {
              id: "google-tag-manager",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          \n            gtag('config', 'AW-985589288');\n          ",
              },
            }),
          ],
        });
      }
    },
    35085: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
          lenisCTX: function () {
            return l;
          },
          useLenis: function () {
            return u;
          },
        });
      var r = n(3827),
        a = n(35274),
        o = n(85081),
        i = n(37134),
        s = n(64090);
      let l = (0, s.createContext)(null),
        u = () => (0, s.useContext)(l);
      function c(e) {
        let { children: t } = e,
          [n, u] = (0, s.useState)(null);
        return (
          (0, s.useLayoutEffect)(() => {
            let e = new a.Z();
            (window.lenis = e), u(e);
            let t = setInterval(() => {
                e.resize();
              }, 150),
              n = o.Z.add(function (t) {
                e.raf(t);
              });
            return (
              i.default.events.on("routeChangeStart", () => {
                e.scrollTo(0, { immediate: !0 });
              }),
              () => {
                n(), clearInterval(t), u(null), e.destroy();
              }
            );
          }, []),
          (0, r.jsx)(l.Provider, { value: n, children: t })
        );
      }
    },
    67543: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(47907);
      let i = ["/culture", "/start-your-project"];
      function s() {
        let e = (0, o.usePathname)();
        return (
          (0, a.useEffect)(() => {
            i.includes(e)
              ? (document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#fff"
                ),
                document.documentElement.style.setProperty(
                  "--theme-secondary",
                  "#000"
                ))
              : (document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#000"
                ),
                document.documentElement.style.setProperty(
                  "--theme-secondary",
                  "#fff"
                ));
          }, [e]),
          (0, r.jsx)(r.Fragment, {})
        );
      }
    },
    71947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(11984),
        i = n(3568),
        s = n.n(i);
      function l(e) {
        let { children: t, fill: n = !1 } = e,
          i = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (null === i.current || window.innerWidth < 850) return;
            let e = o.p8.quickTo(i.current, "x", {
                duration: 0.5,
                ease: "power3.out",
              }),
              t = o.p8.quickTo(i.current, "y", {
                duration: 0.5,
                ease: "power3.out",
              }),
              n = (n) => {
                if (!i.current) return;
                let { clientX: r, clientY: a } = n,
                  {
                    height: o,
                    width: s,
                    left: l,
                    top: u,
                  } = i.current.getBoundingClientRect(),
                  c = r - (l + s / 2),
                  d = a - (u + o / 2);
                (d *= 0.5), e((c *= 0.5)), t(d);
              },
              r = () => {
                e(0), t(0);
              };
            return (
              i.current.addEventListener("mousemove", n),
              i.current.addEventListener("mouseleave", r),
              () => {
                null !== i.current &&
                  (i.current.removeEventListener("mousemove", n),
                  i.current.removeEventListener("mouseleave", r));
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className: s().magnetic,
            "data-fill": n,
            ref: i,
            children: t,
          })
        );
      }
    },
    95423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(59546),
        i = n.n(o);
      function s(e) {
        let { text: t, className: n } = e,
          o = (0, a.useRef)(null),
          [s, l] = (0, a.useState)("Copy email address"),
          [u, c] = (0, a.useState)("");
        return (0, r.jsxs)("a", {
          className: "".concat(n, " ").concat(i().copyText),
          ref: o,
          onClick: () => {
            navigator.clipboard
              .writeText(t)
              .then(() => {
                l("Copied!"),
                  c(i().mobile),
                  setTimeout(() => {
                    c(""), l("Copy email address");
                  }, 3e3);
              })
              .catch((e) => {
                console.error("Failed to copy text:", e);
              });
          },
          children: [
            t,
            (0, r.jsx)("div", {
              className: "".concat(i().tooltip, " ").concat(u),
              children: s,
            }),
          ],
        });
      }
    },
    22885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(3827),
        a = n(64090),
        o = n(75962),
        i = n(89461),
        s = n(21944),
        l = n.n(s),
        u = n(66203);
      function c(e) {
        var t, n;
        let { data: s } = e,
          [c, d] = (0, a.useState)(!1),
          [_, g] = (0, a.useState)({}),
          f = (e) => {
            g((t) => ({ ...t, [e]: !t[e] }));
          },
          m = () => {
            d(!1),
              g((e) => {
                let t = { ...e };
                for (let e in t) t[e] = !1;
                return t;
              });
          },
          h = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : -1;
            return e.map((e, n) => {
              let a =
                  e.childItems &&
                  Array.isArray(e.childItems.nodes) &&
                  e.childItems.nodes.length > 0,
                i = _[-1 !== t ? t : n];
              return (0, r.jsxs)(
                "li",
                {
                  children: [
                    a
                      ? (0, r.jsxs)("div", {
                          className: l().parent,
                          onClick: () => f(n),
                          children: [
                            (null == e ? void 0 : e.label) || "",
                            (0, r.jsx)("figure", {
                              className: (0, u.cn)(
                                l().toggleSign,
                                i ? l().toggleOpen : ""
                              ),
                              children: (0, r.jsxs)("span", {
                                className: l().toggleInner,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: l().toggleLine,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: l().toggleLine,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        })
                      : (0, r.jsx)(o.default, {
                          href: (null == e ? void 0 : e.uri) || "",
                          onClick: m,
                          children: (null == e ? void 0 : e.label) || "",
                        }),
                    a &&
                      (0, r.jsx)("ul", {
                        className: (0, u.cn)(
                          l().submenu,
                          i ? l().submenuOpen : ""
                        ),
                        children: h(e.childItems.nodes, n),
                      }),
                  ],
                },
                n
              );
            });
          };
        return (0, r.jsxs)("div", {
          className: (0, u.cn)(l().page, c ? l().active : ""),
          children: [
            (0, r.jsxs)("button", {
              className: l().icon,
              onClick: () => d(!c),
              "data-modal-hide": !0,
              children: [
                (0, r.jsx)("div", { className: l().line }),
                (0, r.jsx)("div", { className: l().line }),
              ],
            }),
            (0, r.jsxs)("aside", {
              className: l().flyout,
              children: [
                (0, r.jsxs)("nav", {
                  className: l().navigation,
                  children: [
                    (0, r.jsx)("ul", {
                      children: (
                        null == s
                          ? void 0
                          : null === (n = s.menu) || void 0 === n
                          ? void 0
                          : null === (t = n.menuItems) || void 0 === t
                          ? void 0
                          : t.nodes
                      )
                        ? h(s.menu.menuItems.nodes)
                        : null,
                    }),
                    (0, r.jsx)("div", {
                      className: l().buttonContainer,
                      onClick: m,
                      children: (0, r.jsx)(i.default, {
                        text: "Start your project",
                        type: "a-internal",
                        href: "/start-your-project",
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { className: l().background }),
              ],
            }),
            (0, r.jsx)("figure", { className: l().pageOverlay, onClick: m }),
          ],
        });
      }
    },
    56014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LOADING_STATES: function () {
            return a;
          },
          NavigationContext: function () {
            return c;
          },
          NavigationContextProvider: function () {
            return d;
          },
          useNavigationContext: function () {
            return _;
          },
        });
      var r,
        a,
        o = n(3827),
        i = n(93696),
        s = n(64090);
      let l = () => {
        let { loading: e, setLoading: t } = _(),
          n = (0, s.useRef)(null),
          r = () => {
            i.ZP.set(n.current, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            });
          },
          l = () => {
            i.ZP.to(n.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.inOut",
            });
          },
          u = () => {
            i.ZP.to(n.current, {
              opacity: 0,
              duration: 0.6,
              ease: "none",
              onComplete: () => {
                i.ZP.set(n.current, {
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  opacity: 1,
                });
              },
            });
          };
        return (
          (0, s.useEffect)(() => {
            r();
          }, []),
          (0, s.useEffect)(() => {
            switch (e) {
              case a.LOADING:
                l();
                break;
              case a.LOADED:
                u();
            }
          }, [e]),
          (0, o.jsx)("div", {
            ref: n,
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
      var u = n(47907);
      ((r = a || (a = {})).INIT = "INITIALIZED"),
        (r.LOADING = "PENDING"),
        (r.LOADED = "COMPLETE");
      let c = (0, s.createContext)({
          goToRoute: (e) => {},
          loading: "INITIALIZED",
          setLoading: () => {},
        }),
        d = (e) => {
          let { children: t } = e,
            n = (0, u.useRouter)(),
            [r, a] = (0, s.useState)("INITIALIZED"),
            i = async (e) => {
              a("PENDING"),
                n.prefetch(e),
                setTimeout(() => {
                  window.scrollTo(0, -100), n.push(e, { scroll: !0 });
                }, 1e3);
            };
          return (0, o.jsxs)(c.Provider, {
            value: { goToRoute: i, loading: r, setLoading: a },
            children: [(0, o.jsx)(l, {}), t],
          });
        },
        _ = () => (0, s.useContext)(c);
    },
    66203: function (e, t, n) {
      "use strict";
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let r = (e) =>
          e.reduce(
            (e, t) => (
              Array.isArray(t) ? e.push(...r(t)) : null != t && e.push(t), e
            ),
            []
          );
        return r(t).join(" ");
      }
      n.d(t, {
        cn: function () {
          return r;
        },
      });
    },
    11984: function (e, t, n) {
      "use strict";
      n.d(t, {
        BW: function () {
          return s.Flip;
        },
        C2: function () {
          return o.SplitText;
        },
        ic: function () {
          return a.ScrollTrigger;
        },
        p8: function () {
          return r.ZP;
        },
        t_: function () {
          return i.CustomEase;
        },
      });
      var r = n(93696),
        a = n(52955),
        o = n(76756),
        i = n(85349),
        s = n(21169);
      r.ZP.registerPlugin(a.ScrollTrigger, o.SplitText, s.Flip),
        r.ZP.config({ autoSleep: 60, nullTargetWarn: !1 }),
        r.ZP.defaults({ duration: 1 / ((1 + Math.sqrt(5)) / 2) });
    },
    58431: function () {},
    34802: function (e) {
      e.exports = {
        button: "Button_button__JJiqJ",
        inner: "Button_inner__fnyH6",
        border: "Button_border__hirH2",
        textInner: "Button_textInner__JTTHe",
        white: "Button_white__MQaf2",
        text: "Button_text__IZaCD",
        buttonArrow: "Button_buttonArrow__0W9XI",
        "button-text": "Button_button-text__yLgXu",
      };
    },
    31470: function (e) {
      e.exports = { celebrating: "Celebrating_celebrating__MdmnM" };
    },
    72256: function (e) {
      e.exports = {
        banner: "CookieBanner_banner__MyhNb",
        hidden: "CookieBanner_hidden__f8Cc1",
        noAnimation: "CookieBanner_noAnimation__E5guY",
        instantHide: "CookieBanner_instantHide__qu1ZI",
        disableTransition: "CookieBanner_disableTransition__jd9YO",
        buttons: "CookieBanner_buttons__QHtXK",
        button: "CookieBanner_button__eD4su",
      };
    },
    55212: function (e) {
      e.exports = {
        footer: "Footer_footer__pQtti",
        top: "Footer_top__YBhK_",
        bottom: "Footer_bottom__wxP7Z",
        logo: "Footer_logo__fUEOF",
        email: "Footer_email__nLajh",
        rainbow: "Footer_rainbow__y_VUe",
        privacy: "Footer_privacy__C1meu",
        socialLinks: "Footer_socialLinks__tA7gt",
        logos: "Footer_logos__jFNys",
        last: "Footer_last__auU9C",
        lastNav: "Footer_lastNav__at6Kh",
        newsletterButton: "Footer_newsletterButton__wp2hz",
        copyright: "Footer_copyright__j4atB",
        sectorsWrap: "Footer_sectorsWrap__UM4Zx",
        sectorTitle: "Footer_sectorTitle__yEZhb",
        sectorMenu: "Footer_sectorMenu__GX7QZ",
        sectorItem: "Footer_sectorItem__0Cx14",
        copyrightText: "Footer_copyrightText__f_Lte",
      };
    },
    73158: function (e) {
      e.exports = {
        header: "Header_header__KwdYD",
        logo: "Header_logo____uDV",
        nav: "Header_nav__tNWGY",
      };
    },
    3568: function (e) {
      e.exports = { magnetic: "Magnetic_magnetic__LncOy" };
    },
    59546: function (e) {
      e.exports = {
        copyText: "CopyText_copyText__OtWNq",
        tooltip: "CopyText_tooltip__HuxWa",
        mobile: "CopyText_mobile__rHEGN",
      };
    },
    21944: function (e) {
      e.exports = {
        page: "PrimaryNavigation_page__DgiUM",
        active: "PrimaryNavigation_active__gdInn",
        icon: "PrimaryNavigation_icon__qAQCe",
        line: "PrimaryNavigation_line__eUBQ0",
        toggleSign: "PrimaryNavigation_toggleSign__XESvT",
        toggleOpen: "PrimaryNavigation_toggleOpen__b_ys6",
        toggleLine: "PrimaryNavigation_toggleLine__QUlfd",
        toggleInner: "PrimaryNavigation_toggleInner__Lz3QB",
        flyout: "PrimaryNavigation_flyout__nH7QV",
        parent: "PrimaryNavigation_parent__bfX37",
        buttonContainer: "PrimaryNavigation_buttonContainer__iiKTy",
        navigation: "PrimaryNavigation_navigation__l8Jgb",
        background: "PrimaryNavigation_background__vtv26",
        pageOverlay: "PrimaryNavigation_pageOverlay__QD6me",
        submenu: "PrimaryNavigation_submenu__ryGWu",
        submenuOpen: "PrimaryNavigation_submenuOpen__uJhU7",
      };
    },
  },
  function (e) {
    e.O(0, [922, 912, 572, 971, 69, 744], function () {
      return e((e.s = 50489));
    }),
      (_N_E = e.O());
  },
]);
