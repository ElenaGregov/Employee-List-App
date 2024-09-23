import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>List of employees of CodeCompany</h1>
      <h2>Amount of employees: {employees}</h2>
      <h2>Bonus will receive: {increased}</h2>
    </div>
  );
};

export default AppInfo;
