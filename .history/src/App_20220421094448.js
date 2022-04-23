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
  return (
    <>
      {/* <Dropdown
        options={options}
        placehoder="Plase select your job"
        inputPlaholder="Search your job..."
        visibleIconCheck="true"
        visibleInput
      /> */}
      <Dropdown placehoder="Plase select your job"></Dropdown>
    </>
  );
};

export default App;
