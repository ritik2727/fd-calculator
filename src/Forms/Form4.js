import { PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Form4() {
  const [show, setShow] = useState(false);
  const [totalInvestments, setTotalInvestments] = useState(5000);
  const [rateOfInterest, setRateOFInterest] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);
  const [ci, setCI] = useState();
  const [ret, setRet] = useState();
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const calSI = () => {
    // Formula for Compound Interest (CI)
    const principal = totalInvestments;
    const rate = rateOfInterest / 100; // Convert interest rate to decimal
    const time = timePeriod;

    const compoundInterest = (principal * Math.pow(1 + rate, time)).toFixed(0);
    const est = (compoundInterest - totalInvestments).toFixed(0);

    console.log(compoundInterest);
    setCI(compoundInterest);
    setRet(est);
  };
  useEffect(() => {
    calSI();
  }, [timePeriod, totalInvestments, rateOfInterest]);
  return (
    <>
      <Button onClick={handleShow}>FD calculator</Button>
      <Modal show={show} onHide={handleClose} size="lg" scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>FD calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4>Total investment</h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(144, 238, 144, 0.3)",
                      padding: 2,
                      textAlign: "center",
                      borderRadius: 10,
                      color: "green",
                    }}
                  >
                    <h4>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "INR",
                      }).format(totalInvestments)}
                    </h4>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min={5000}
                    max={10000000}
                    value={totalInvestments}
                    style={{ width: "100%", height: "3%" }}
                    onChange={(e) => setTotalInvestments(e.target.value)}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4>Rate of interest (P.a)</h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(144, 238, 144, 0.3)",
                      padding: 2,
                      textAlign: "center",
                      borderRadius: 10,
                      color: "green",
                    }}
                  >
                    <h4>{rateOfInterest}%</h4>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    value={rateOfInterest}
                    style={{ width: "100%", height: "3%" }}
                    onChange={(e) => setRateOFInterest(e.target.value)}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4>Time Period (Years)</h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(144, 238, 144, 0.3)",
                      padding: 2,
                      textAlign: "center",
                      borderRadius: 10,
                      color: "green",
                    }}
                  >
                    <h4>{timePeriod}</h4>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min={1}
                    max={25}
                    value={timePeriod}
                    style={{ width: "100%", height: "3%" }}
                    onChange={(e) => setTimePeriod(e.target.value)}
                  />
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: totalInvestments, label: "Total investment" },
                  { id: 1, value: ret, label: "Total return" },
                 
                ],
              },
            ]}
            width={500}
            height={200}
          />
          <div>
            <div>
              <h6>
                Total investments :{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(totalInvestments)}
              </h6>
            </div>
            <div>
              <h6>
                Est. return :{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(ret)}
              </h6>
            </div>
            <div>
              <h6>
                Total Value :{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(ci)}
              </h6>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
