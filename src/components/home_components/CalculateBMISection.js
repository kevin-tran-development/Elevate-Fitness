import { useState } from "react";

export const CalculateBMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(1);
    setBmiResult(bmi);
    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);
    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <>
      <section className="bg-bmi-calculate-banner bg-cover bg-[50%] px-12 py-[10rem] relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container lg:max-w-screen-xl">
          <div className="xl:w-[60rem] relative">
            <h2 className="text-white text-6xl uppercase tracking-wider leading-[1.2] pb-10">
              <span className="text-stroke-2 text-fill-transparent">
                Calculate
              </span>{" "}
              your <span className="text-[#D2042D]">BMI</span>
            </h2>
            <p className="text-[18px] text-white">
              The Body Mass Index {"(BMI)"} Calculator calculates body mass
              index from your Weight and Height.
            </p>
            <div className="flex flex-col pt-10">
              <form className="flex w-full h-[60px] gap-8 mb-12">
                <input
                  className="pl-6 w-[50%] bg-transparent border-2 border-solid border-[#D2042D] rounded-tr-[2rem] text-[16px] text-white"
                  placeholder="Height / cm"
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <input
                  className="pl-6 w-[50%] bg-transparent border-2 border-solid border-[#D2042D] rounded-tr-[2rem] text-[16px] text-white"
                  placeholder="Weight / kg"
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </form>
              {bmiResult && (
                <div className="text-white text-[18px] gap-8 flex w-full mb-14">
                  <p className="w-[50%] pl-4">
                    Your BMI is:{" "}
                    <span className="text-[#D2042D] font-medium">
                      {bmiResult}
                    </span>
                  </p>
                  <p className="w-[50%] pl-4">
                    You are currently:{" "}
                    <span className="text-[#D2042D] font-medium">{status}</span>
                  </p>
                </div>
              )}
              <button
                type="button"
                className="text-[14px] uppercase tracking-wider rounded-xl text-[#fff] hover:text-[#D2042D] font-bold bg-[#D2042D] hover:bg-[#fff] transition ease duration-[0.3s] px-[30px] w-[19rem] py-6"
                onClick={calculateBMI}
              >
                Calculate{" "}
                <i className="fa-solid fa-right-long text-2xl pl-2 pr-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
