import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Disc, Expand, List, MenuBar, Mic, MusicIcon } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setExpand } from "../../redux/additional";
import { setAuth } from "../../redux/auth";
import { setUser } from "../../redux/user";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../lib/axios";
import "./style.scss";

const Menu = forwardRef((params, ref) => {
  const { user } = useSelector((state) => state);

  const refs = useRef({
    menu: null,
    theme: null,
    fullScreen: null,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    themeSwitch: (click) => {
      let theme = localStorage.getItem("theme");

      const dark = () => {
        localStorage.setItem("theme", "dark");

        document.body?.classList?.add("dark");
        document.body?.classList?.remove("light");

        refs.current.theme?.classList?.add("dark");
      };

      const light = () => {
        localStorage.removeItem("theme");

        document.body?.classList?.add("light");
        document.body?.classList?.remove("dark");

        refs.current.theme?.classList?.remove("dark");
      };

      if (click) {
        switch (theme ? theme : null) {
          case "dark":
            light();
            break;
          default:
            dark();
            break;
        }
      } else {
        switch (theme ? theme : null) {
          case "dark":
            dark();
            break;
          default:
            light();
            break;
        }
      }
    },
    menuToggle: (show) => {
      if (show) {
        // for show menu

        if (matchMedia("(max-width:767px)").matches) {
          // Small Device

          refs?.current?.menu?.classList?.add("showSm");
        } else {
          // Medium plus devices

          document.body?.classList?.remove("expand");
          refs?.current?.menu?.classList?.add("showMd");
          dispatch(setExpand(false));
        }
      } else {
        //for hide menu

        if (matchMedia("(max-width:767px)").matches) {
          // Small Device

          refs?.current?.menu?.classList?.remove("showSm");
        } else {
          // Medium plus devices

          document.body?.classList?.add("expand");
          refs?.current?.menu?.classList?.remove("showMd");
          dispatch(setExpand(true));
        }
      }
    },
  }));

  return (
    <div
      className="menu showMd"
      ref={(elm) => {
        if (refs?.current) {
          refs.current.menu = elm;
        }
      }}
    >
      <div className="inner">
        <div className="logo_menu">
          <div className="logo">
            <div className="dot" />
          </div>
          <div>
            <h1>Rhythm Realm</h1>
          </div>&nbsp;&nbsp;&nbsp;
          <div className="bar">
            <button
              onClick={() => {
                ref?.current?.menuToggle();
              }}
            >
              <MenuBar height={"16px"} width={"16px"} color={"#888"} />
            </button>
          </div>
        </div>

        <div className="scrollable">
          <div className="card">
            <h5>Hi {user ? user?.name : "Signup Now"}</h5>

            <p>Follow your favorite artists and create unlimited playlists.</p>

            <div className="btns">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/account");
                    }}
                  >
                    Account
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        let response = await instance.get("/user/logout");

                        if (response) {
                          dispatch(setUser(null));
                          if (
                            window.location.pathname.includes("account") ||
                            window.location.pathname.includes("library") ||
                            window.location.pathname.includes("playlist")
                          ) {
                            navigate("/");
                          }
                        }
                      } catch (err) {
                        alert("Facing An Error");
                      }
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      dispatch(setAuth({ signup: true }));
                    }}
                  >
                    Signup
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setAuth({ login: true }));
                    }}
                  >
                    Login
                  </button>{" "}
                </>
              )}
            </div>
          </div>

          <div className="actions">
            <button
              className={window.location.pathname === "/" ? "active" : ""}
              onClick={() => {
                navigate("/");
              }}
            >
              <span>
                <Disc width={"16px"} height={"16px"} color={"#ca1901"} />
              </span>
              Discover
            </button>
            <button
              className={
                window.location.pathname === "/search/album" ||
                window.location.pathname === "/search/album/"
                  ? "active"
                  : ""
              }
              onClick={() => {
                navigate("/search/album");
              }}
            >
              <span>
                <MusicIcon width={"16px"} height={"16px"} color={"#ca1901"} />
              </span>
              Albums
            </button>
            <button
              className={
                window.location.pathname === "/search/artist" ||
                window.location.pathname === "/search/artist/"
                  ? "active"
                  : ""
              }
              onClick={() => {
                navigate("/search/artist");
              }}
            >
              <span>
                <Mic width={"16px"} height={"16px"} color={"#ca1901"} />
              </span>
              Artists
            </button>
            <button
              className={
                window.location.pathname === "/library/playlists" ||
                window.location.pathname === "/library/playlists/" ||
                window.location.pathname === "/library/history" ||
                window.location.pathname === "/library/history/"
                  ? "active"
                  : ""
              }
              onClick={() => {
                navigate("/library/playlists");
              }}
            >
             
              <span>
                <List width={"16px"} height={"16px"} color={"#ca1901"} />
              </span>
              Library
            </button>
            <button
              onClick={() => {
                if (refs?.current) {
                  import("./functions/fullScreen").then((module) => {
                    if (module.default()) {
                      refs.current["fullScreen"].innerHTML = "Exit fullscreen";
                    } else {
                      refs.current["fullScreen"].innerHTML = "Fullscreen";
                    }
                  });
                }
              }}
            >
              <span>
                <Expand width={"16px"} height={"16px"} color={"#ca1901"} />
              </span>
              <span
                data-for="fullScreen"
                ref={(elem) => {
                  if (refs?.current) {
                    refs.current["fullScreen"] = elem;
                  }
                }}
              >
                Fullscreen
              </span>
            </button>

            <button
              ref={(elm) => {
                if (refs?.current) {
                  refs.current.theme = elm;
                }
              }}
              onClick={() => {
                ref?.current?.themeSwitch(true);
              }}
            >
              <span>
                <div className="swicth">
                  <div className="round" />
                </div>
              </span>
              Dark Mode
            </button>
          </div>

          <div className="rights">
            <p>{new Date().getFullYear()}  Created by Chirag Pawar, Dhruvil Shah and Dhruv Raval
            </p>
          </div>
        </div>
      </div>

      <div
        className="blur"
        onClick={() => {
          ref?.current?.menuToggle();
        }}
      />
    </div>
  );
});

export default Menu;
