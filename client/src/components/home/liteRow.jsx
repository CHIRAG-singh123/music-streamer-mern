import React from "react";
import { Play, Pause } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { getTrack, setStatus } from "../../redux/player";
import { setAuth } from "../../redux/auth";
import "./style.scss";

const LiteRow = ({ data, title }) => {
  const dispatch = useDispatch();

  const { player, user } = useSelector((state) => state);
  return (
    <div className="liteRow">
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="grid">
        {data
          ?.slice(0, data?.length > 6 ? 6 : data?.length)
          ?.map((elm, key) => {
            return (
              <div className="card" key={key}>
                <div>
                  <img src={elm?.images?.[0]?.url} alt={elm?.uri} />
                </div>
                <div className="details">
                  <h5>{elm?.name}</h5>
                  <p>{elm?.artists?.[0]?.name}</p>
                </div>

                <div className="play">
                  {player?.data?.type === elm?.type &&
                  player?.data?.id === elm?.id &&
                  player?.status ? (
                    <button
                      onClick={() => {
                        dispatch(setStatus(false));
                      }}
                    >
                      <Pause width={"16px"} height={"16px"} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (user) {
                          if (
                            player?.data?.type === elm?.type &&
                            player?.data?.id === elm?.id
                          ) {
                            dispatch(setStatus(true));
                          } else {
                            dispatch(
                              getTrack({ type: elm?.type, id: elm?.id })
                            );
                          }
                        } else {
                          dispatch(setAuth({ login: true }));
                        }
                      }}
                    >
                      <Play width={"16px"} height={"16px"} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LiteRow;
