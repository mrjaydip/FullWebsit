import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [boxdata1, setdata1] = useState(1);
  const [boxdata2, setdata2] = useState(2);
  const [boxdata3, setdata3] = useState(3);
  const [boxdata4, setdata4] = useState(4);
  const [boxdata5, setdata5] = useState(5);
  const [boxdata6, setdata6] = useState(6);
  const [boxdata7, setdata7] = useState(7);
  const [boxdata8, setdata8] = useState(" ");
  const [boxdata9, setdata9] = useState(8);
  var winner1 = "";
  win();
  const abc1 = () => {
    if (boxdata2 == " ") {
      setdata1(" ");
      setdata2(boxdata1);
    }
    if (boxdata4 == " ") {
      setdata1(" ");
      setdata4(boxdata1);
    }
  };
  const abc2 = () => {
    if (boxdata1 == " ") {
      setdata2(" ");
      setdata1(boxdata2);
    }
    if (boxdata3 == " ") {
      setdata2(" ");
      setdata3(boxdata2);
    }
    if (boxdata5 == " ") {
      setdata2(" ");
      setdata5(boxdata2);
    }
  };
  const abc3 = () => {
    if (boxdata2 == " ") {
      setdata3(" ");
      setdata2(boxdata3);
    }
    if (boxdata6 == " ") {
      setdata3(" ");
      setdata6(boxdata3);
    }
  };
  const abc4 = () => {
    if (boxdata1 == " ") {
      setdata4(" ");
      setdata1(boxdata4);
    }
    if (boxdata5 == " ") {
      setdata4(" ");
      setdata5(boxdata4);
    }
    if (boxdata7 == " ") {
      setdata4(" ");
      setdata7(boxdata4);
    }
  };
  const abc5 = () => {
    if (boxdata2 == " ") {
      setdata5(" ");
      setdata2(boxdata5);
    }
    if (boxdata4 == " ") {
      setdata5(" ");
      setdata4(boxdata5);
    }
    if (boxdata6 == " ") {
      setdata5(" ");
      setdata6(boxdata5);
    }
    if (boxdata8 == " ") {
      setdata5(" ");
      setdata8(boxdata5);
    }
  };
  const abc6 = () => {
    if (boxdata3 == " ") {
      setdata6(" ");
      setdata3(boxdata6);
    }
    if (boxdata5 == " ") {
      setdata6(" ");
      setdata5(boxdata6);
    }
    if (boxdata9 == " ") {
      setdata6(" ");
      setdata9(boxdata6);
    }
  };
  const abc7 = () => {
    if (boxdata4 == " ") {
      setdata7(" ");
      setdata4(boxdata7);
    }
    if (boxdata8 == " ") {
      setdata7(" ");
      setdata8(boxdata7);
    }
  };
  const abc8 = () => {
    if (boxdata7 == " ") {
      setdata8(" ");
      setdata7(boxdata8);
    }
    if (boxdata9 == " ") {
      setdata8(" ");
      setdata9(boxdata8);
    }
    if (boxdata5 == " ") {
      setdata8(" ");
      setdata5(boxdata8);
    }
  };
  const abc9 = () => {
    if (boxdata8 == " ") {
      setdata9(" ");
      setdata8(boxdata9);
    }
    if (boxdata6 == " ") {
      setdata9(" ");
      setdata6(boxdata9);
    }
  };
  function win() {
    if (
      boxdata1 == "1" &&
      boxdata2 == "2" &&
      boxdata3 == "3" &&
      boxdata4 == "4" &&
      boxdata5 == "5" &&
      boxdata6 == "6" &&
      boxdata7 == "7" &&
      boxdata8 == "8" &&
      boxdata9 == " "
    ) {
      winner1 = "You Are Winner........!";
    }
  }
  const reset = () => {
    setdata1("1");
    setdata2("2");
    setdata3("3");
    setdata4("4");
    setdata5("5");
    setdata6("6");
    setdata7("7");
    setdata8(" ");
    setdata9("8");
  };
  return (
    <>
      <div className="img">
        <div>
          <h1 className="text-center pt-5 fs-1 text-uppercase">Pazzale Game</h1>
        </div>
        <div className="text-center pt-3">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center">
                <table striped hover className="fs-1">
                  <tr className="bg-dark">
                    <td>
                      <input
                        value={boxdata1}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc1()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata2}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc2()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata3}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc3()}
                      />
                    </td>
                  </tr>
                  <tr className="bg-dark">
                    <td>
                      <input
                        value={boxdata4}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc4()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata5}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc5()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata6}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc6()}
                      />
                    </td>
                  </tr>
                  <tr className="bg-dark">
                    <td>
                      <input
                        value={boxdata7}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc7()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata8}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc8()}
                      />
                    </td>
                    <td>
                      <input
                        value={boxdata9}
                        type="button"
                        className="px-5 py-4 bg-danger  text-light"
                        onClick={() => abc9()}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <button
              onClick={() => reset()}
              className="mt-3 px-5 fs-5 bg-info text-dark"
            >
              Reset
            </button>
          </div>
        </div>
        <h1 className="text-center p-3 fs-3 text-success">{winner1}</h1>
      </div>
    </>
  );
}

export default App;
