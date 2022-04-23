import { useState } from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backen Developer",
  },
  {
    title: "Fullstack Developer",
  },
];
const App = () => {
  const [job, setJob] = useState("");
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };
  return (
    <>
      {/* <Dropdown
        options={options}
        placehoder="Plase select your job"
        inputPlaholder="Search your job..."
        visibleIconCheck="true"
        visibleInput
      /> */}
      <Dropdown placehoder="Plase select your job" onClick={handleSelectJob}>
        <div className="options border border-gray-300 rounded">
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <Dropdown.Option key={option.title}>
                {option.title}
              </Dropdown.Option>
            ))}
        </div>
      </Dropdown>
    </>
  );
};

export default App;
