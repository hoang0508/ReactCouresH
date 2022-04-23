import Dropdown from "./components/advanced-react/inversion-of-control/Dropdown";

const options = [
  {
    title: "Frontend Developer",
    onclick: () => {},
  },
  {
    title: "Backen Developer",
    onclick: () => {},
  },
  {
    title: "Fullstack Developer",
    onclick: () => {},
  },
];
const App = () => {
  return (
    <>
      <Dropdown
        options={options}
        placehoder="Plase select your job"
        inputPlaholder="Search your job..."
        visibleIconCheck="true"
        visibleInput
      />
    </>
  );
};

export default App;
