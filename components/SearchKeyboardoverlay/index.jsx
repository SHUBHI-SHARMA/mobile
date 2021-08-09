import React from "react";
import { Link } from "react-router-dom";
import Alphabet from "../Alphabet";
import Alphabet2 from "../Alphabet2";
import Alphabet3 from "../Alphabet3";
import Alphabet4 from "../Alphabet4";
import "./SearchKeyboardoverlay.css";

function SearchKeyboardoverlay(props) {
  const {
    homeIndicator,
    xreturn,
    space,
    alphabet,
    combinedShape,
    alphabet2,
    overlapGroup3,
    number,
    emoji,
    dictation,
    alphabetProps,
    alphabet2Props,
    alphabet3Props,
    alphabet32Props,
    alphabet22Props,
    alphabet23Props,
    alphabet4Props,
    alphabet2Props2,
    alphabet3Props2,
    alphabet24Props,
    alphabet25Props,
    alphabet4Props2,
    alphabet33Props,
    alphabet5Props,
    alphabet6Props,
    alphabet42Props,
    alphabet26Props,
    alphabet43Props,
    alphabet27Props,
    alphabet28Props,
    alphabet29Props,
    alphabet210Props,
    alphabet7Props,
    alphabet211Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-keyboard-overlay screen">
        <div className="overlap-group-49">
          <Link to="/search-results">
            <div className="keyboard">
              <div className="overlap-group1-28">
                <img className="home-indicator" src={homeIndicator} />
                <div className="keyboard-1">
                  <div className="overlap-group2-38">
                    <div className="return">
                      <div className="return-1 sfprodisplay-regular-normal-black-16px">{xreturn}</div>
                    </div>
                    <div className="spacebar">
                      <div className="space sfprodisplay-regular-normal-black-16px">{space}</div>
                    </div>
                    <div className="keys">
                      <div className="flex-row-65">
                        <Alphabet>{alphabetProps.children}</Alphabet>
                        <div className="alphabet">
                          <div className="alphabet-1 sfprodisplay-light-black-25px">{alphabet}</div>
                        </div>
                        <Alphabet2>{alphabet2Props.children}</Alphabet2>
                        <Alphabet3>{alphabet3Props.children}</Alphabet3>
                        <Alphabet3 className={alphabet32Props.className}>{alphabet32Props.children}</Alphabet3>
                        <Alphabet2 className={alphabet22Props.className}>{alphabet22Props.children}</Alphabet2>
                        <Alphabet2>{alphabet23Props.children}</Alphabet2>
                        <Alphabet4>{alphabet4Props.children}</Alphabet4>
                        <Alphabet className={alphabet2Props2.className}>{alphabet2Props2.children}</Alphabet>
                        <Alphabet className={alphabet3Props2.className}>{alphabet3Props2.children}</Alphabet>
                      </div>
                      <div className="flex-row-66">
                        <Alphabet2 className={alphabet24Props.className}>{alphabet24Props.children}</Alphabet2>
                        <Alphabet2 className={alphabet25Props.className}>{alphabet25Props.children}</Alphabet2>
                        <Alphabet className={alphabet4Props2.className}>{alphabet4Props2.children}</Alphabet>
                        <Alphabet3 className={alphabet33Props.className}>{alphabet33Props.children}</Alphabet3>
                        <Alphabet className={alphabet5Props.className}>{alphabet5Props.children}</Alphabet>
                        <Alphabet className={alphabet6Props.className}>{alphabet6Props.children}</Alphabet>
                        <Alphabet4>{alphabet42Props.children}</Alphabet4>
                        <Alphabet2 className={alphabet26Props.className}>{alphabet26Props.children}</Alphabet2>
                        <Alphabet4>{alphabet43Props.children}</Alphabet4>
                      </div>
                      <div className="flex-row-67">
                        <div className="shift">
                          <img className="combined-shape" src={combinedShape} />
                        </div>
                        <Alphabet2 className={alphabet27Props.className}>{alphabet27Props.children}</Alphabet2>
                        <Alphabet2 className={alphabet28Props.className}>{alphabet28Props.children}</Alphabet2>
                        <Alphabet2>{alphabet29Props.children}</Alphabet2>
                        <Alphabet2 className={alphabet210Props.className}>{alphabet210Props.children}</Alphabet2>
                        <Alphabet className={alphabet7Props.className}>{alphabet7Props.children}</Alphabet>
                        <Alphabet2>{alphabet211Props.children}</Alphabet2>
                        <div className="alphabet-2">
                          <div className="alphabet-3 sfprodisplay-light-black-25px">{alphabet2}</div>
                        </div>
                        <div className="backspace">
                          <div className="overlap-group3-30" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                            <img className="shape-10" src="/img/shape-1@2x.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="x123">
                        <div className="number-7 sfprodisplay-regular-normal-black-16px">{number}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row-68">
                    <div className="emoji" style={{ backgroundImage: `url(${emoji})` }}></div>
                    <div className="dictation" style={{ backgroundImage: `url(${dictation})` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchKeyboardoverlay;
