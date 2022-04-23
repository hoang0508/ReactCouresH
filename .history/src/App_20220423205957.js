import React, { useState } from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";
const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
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
  console.log(job);
  return (
    <div>
      {/* <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder={"Search your jobs..."}
        visibleIconCheck
        visibleSearch
      ></Dropdown> */}
      <Dropdown
        placeholder={`${job || "Select your job"}`}
        onClick={handleSelectJob}
      >
        <div className="options border border-gray-300 rounded">
          <Dropdown.Search placeholder="Search your jobs..."></Dropdown.Search>
          {options.map((option) => (
            <Dropdown.Option key={option.title}>
              <span>{option.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
