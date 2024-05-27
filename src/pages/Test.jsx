import React, { useEffect, useState } from "react";
import "./Test.css";

function Test() {
  const [mainactive, setmainactive] = useState("first");
  const [activeTab, setActiveTab] = useState("");

  // for the FTL(Full Truckload) ---------
  const [ftlmain, setftlmain] = useState(false);
  const [ftl_weight, setftl_weight] = useState(false);
  const [ftlparcel, setftlparcel] = useState(false);

  // for the PTL(Partial Truckload) FLAT-----------

  const [ptlflat_main, setptlflat_main] = useState(false);
  const [ptlflat_flat_wg, setptlflat_flat_wg] = useState(false);
  const [ptlflat_flat_pr, setptlflat_flat_pr] = useState(false);

  // ==========PTL(Partial Truckload) RANGE===================

  const [ptl_range, setptl_range] = useState(false);
  const [ptl_range_weight, setptl_range_weight] = useState(false);
  const [ptl_range_parcel, setptl_range_parcel] = useState(false);

  // for the FTL(Full Truckload) ---------

  const togglefunction = () => {
    setftlmain(!ftlmain);
  };
  const togglefunction1 = () => {
    setftl_weight(!ftl_weight);
  };
  const togglefunction2 = () => {
    setftlparcel(!ftlparcel);
  };

  // for the PTL(Partial Truckload) FLAT-----------
  const subtogglefunction = () => {
    setptlflat_main(!ptlflat_main);
  };
  const subtogglefunction1 = () => {
    setptlflat_flat_wg(!ptlflat_flat_wg);
  };
  const subtogglefunction2 = () => {
    setptlflat_flat_pr(!ptlflat_flat_pr);
  };
  // ==========PTL(Partial Truckload) RANGE===================

  const subtogglefunction3 = () => {
    setptl_range(!ptl_range);
  };
  const subtogglefunction4 = () => {
    setptl_range_weight(!ptl_range_weight);
  };
  const subtogglefunction5 = () => {
    setptl_range_parcel(!ptl_range_parcel);
  };
  // -----------------------------

  const [partialtruck_main, setpartialtruck_main] = useState(false);
  const Partialmain = () => {
    setpartialtruck_main(!partialtruck_main);
  };

  // ----------------------
  const [ptl_flat_main, setptl_flat_main] = useState(false);
  const Ptl_Flat_main = () => {
    setptl_flat_main(!ptl_flat_main);
  };

  // -------------------------------

  const [ptl_range_main, setptl_range_main] = useState(false);
  const Ptl_range_main = () => {
    setptl_range_main(!ptl_range_main);
  };

  // =================================
  const [ftl_sub_last, setftl_sub_last] = useState(false);
  const FTL_sub_last = () => {
    setftl_sub_last(!ftl_sub_last);
  };

  //   ---------------------all the dependanecy ------

  useEffect(() => {
    if (!partialtruck_main) {
      setptl_flat_main(false);
      setptlflat_flat_wg(false);
      setptlflat_flat_pr(false);
    }
  }, [partialtruck_main, ptl_flat_main]);
  // ----------------------------------
  useEffect(() => {
    if (!partialtruck_main) {
      setptl_range_main(false);
      setptl_range_weight(false);
      setptl_range_parcel(false);
    }
  }, [partialtruck_main, ptl_flat_main]);

  useEffect(() => {
    if (!ftlmain) {
      setftl_weight(false);
      setftl_sub_last(false);
      setftlparcel(false);
    }
  }, [ftlmain, ftl_weight]);

  return (
    <div className="App">
      <div className="navbar_top">
        <div
          className={`nav-item ${ftlmain ? "active" : ""}`}
          onClick={() => {
            setmainactive("first");
            togglefunction();
          }}
        >
          FTL(Full Truckload)
        </div>

        <div
          className={`nav-item ${partialtruck_main ? "active" : ""}`}
          onClick={() => {
            setmainactive("FTL_MAIN");
            Partialmain();
          }}
        >
          {" "}
          PTL(Partial Truckload)
        </div>
      </div>

      {/* ==================second layer========================================================== */}

      <div className="second-navbar">
        {ftlmain && (
          <>
            <div
              className={`second-nav-item ${ftl_weight ? "active" : ""}`}
              onClick={() => {
                setActiveTab("FTL WEIGHT");
                togglefunction1();
              }}
            >
              FTL WEIGHT
            </div>
          </>
        )}
        {partialtruck_main && (
          <>
            <div
              className={`second-nav-item ${ptl_flat_main ? "active" : ""}`}
              onClick={() => {
                setmainactive("ptl_flat_main");
                Ptl_Flat_main();
              }}
            >
              PTL(Partial Truckload) FLAT
            </div>

            <div
              className={`second-nav-item ${ptl_range_main ? "active" : ""}`}
              onClick={() => {
                setmainactive("Ptl_range_main");
                Ptl_range_main();
              }}
            >
              PTL(Partial Truckload) RANGE
            </div>
          </>
        )}
      </div>

      {/* ================== sub-bar =======================*/}

      <div className="sub-navbar">
        {ftlmain && ftl_weight && (
          <>
            <div
              className={`sub-nav-item ${ftl_sub_last ? "active" : ""}`}
              onClick={() => {
                setActiveTab("FTL WEIGHT SUB");
                FTL_sub_last();
              }}
            >
              FTL WEIGHT
            </div>

            <div
              className={`sub-nav-item ${ftlparcel ? "active" : ""}`}
              onClick={() => {
                setActiveTab("FTL PARCEL SUB");
                togglefunction2();
              }}
            >
              FTL PARCEL
            </div>
          </>
        )}

        {ptl_flat_main && (
          <>
            <div
              className={`sub-nav-item ${ptlflat_flat_wg ? "active" : ""}`}
              onClick={() => {
                setActiveTab("PTL FLAT WEIGHT");
                subtogglefunction1();
              }}
            >
              PTL FLAT WEIGHT
            </div>

            <div
              className={`sub-nav-item ${ptlflat_flat_pr ? "active" : ""}`}
              onClick={() => {
                subtogglefunction2();
                setActiveTab("PTL FLAT PARCEL");
              }}
            >
              PTL FLAT PARCEL
            </div>
          </>
        )}

        {ptl_range_main && (
          <>
            <div
              className={`sub-nav-item ${ptl_range_weight ? "active" : ""}`}
              onClick={() => {
                setActiveTab("PTL RANGE WEIGHT");
                subtogglefunction4();
              }}
            >
              PTL RANGE WEIGHT
            </div>

            <div
              className={`sub-nav-item ${ptl_range_parcel ? "active" : ""}`}
              onClick={() => {
                setActiveTab("PTL RANGE PARCEL");
                subtogglefunction5();
              }}
            >
              PTL RANGE PARCEL
            </div>
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {activeTab === "FTL WEIGHT SUB" && ftl_sub_last ? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            FTL WEIGHT
          </span>
        ) : activeTab === "FTL PARCEL SUB" && ftlparcel ? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            FTL PARCEL SUB
          </span>
        ) : activeTab === "PTL FLAT WEIGHT" && ptlflat_flat_wg ? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            PTL FLAT WEIGHT
          </span>
        ) : activeTab === "PTL FLAT PARCEL" && ptlflat_flat_pr ? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            PTL FLAT PARCEL
          </span>
        ) : activeTab === "PTL RANGE WEIGHT" && ptl_range_weight? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            PTL RANGE WEIGHT
          </span>
        ) : activeTab === "PTL RANGE PARCEL" && ptl_range_parcel ? (
          <span style={{ fontSize: "22px", border: "2px solid black" }}>
            PTL RANGE PARCEL{" "}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Test;
