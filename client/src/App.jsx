import React, { Fragment, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Account,
  Collections,
  Error,
  Home,
  Playlists,
  Music,
  Playlist,
  Search,
  Verification,
  History
} from "./pages";
import { Footer, Header, Loading, Menu } from "./components";
import { Auth, Player } from "./features";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./app.scss";

const App = () => {
  let menuRef = useRef();

  const location = useLocation();

  const { player, additional, auth } = useSelector((state) => state);

  useLayoutEffect(() => {
    // for theme
    menuRef?.current?.themeSwitch();
  }, [location]);

  return (
    <Fragment>
      {
        // Loading Screen
        additional?.loading ? <Loading /> : null
      }

      {
        // for login signup forgot
        auth && <Auth />
      }

      <Menu ref={menuRef} />

      <Header menuRef={menuRef} />

      <div className="page">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />

            <Route path="/music/:id" element={<Music />} />

            <Route path="/artist/:id" element={<Collections isArtist />} />
            <Route path="/album/:id" element={<Collections />} />

            <Route path="/search" element={<Search />} />
            <Route path="/search/:type" element={<Search />} />

            <Route
              path="/register/pending/:userId/:secret"
              element={<Verification isRegister />}
            />
            <Route
              path="/forgot/pending/:userId/:secret"
              element={<Verification />}
            />
          </Route>
          <Route element={<ProtectedRoute isAuth />}>
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/library/playlists" element={<Playlists />} />
            <Route path="/library/history" element={<History />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />

      {player?.data?.track && <Player />}
    </Fragment>
  );
};

export default App;
