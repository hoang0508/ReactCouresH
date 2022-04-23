import { useState } from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    id: 1,
    title: "Frontend Developer",
  },
  {
    id: 2,
    title: "Backen Developer",
  },
  {
    id: 3,
    title: "Fullstack Developer",
  },
];
const App = () => {
  const [job, setJob] = useState("");
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };
  console.log(job);
  return (
    <>
      {/* <Dropdown
        options={options}
        placehoder="Plase select your job"
        inputPlaholder="Search your job..."
        visibleIconCheck="true"
        visibleInput
      /> */}
      <Dropdown
        placehoder={`${job || "Plase select your job"}`}
        onClick={handleSelectJob}
      >
        <div className="options border border-gray-300 rounded">
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <Dropdown.Option key={option.id}>
                <span>{option.title}</span>
                <Dropdown.IconCheck></Dropdown.IconCheck>
              </Dropdown.Option>
            ))}
        </div>
      </Dropdown>
    </>
  );
};

export default App;
