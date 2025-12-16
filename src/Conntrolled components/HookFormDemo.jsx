
import { DataGrid } from "./Navbar";
export function HookFormDemo(props) {
  return (
    <div className="conatiner-fluid">
      <h2>Employee</h2>
      <DataGrid
        sorting={true}
        caption="Employye Table"
        fields={["FirstName", "LastName", "Designation", "Salary"]}
        data={[
          {
            FirstName: "Raj",
            LastName: "Kumar",
            Designation: "Software Enginerr",
            Salary: "56000",
          },
          {
            FirstName: "Nuni",
            LastName: "Yadav",
            Designation: "Developer",
            Salary: "75000",
          },
        ]}
      />
      <h2>IPL Data Table</h2>
      <DataGrid
        caption="Playoff"
        fields={["Team", "Won", "Lost", "NRR", "PTS"]}
        data={[{ Team: "MI", Won: 2, Lost: 1, NRR: 0.56, PTS: 4 }]}
      />
    </div>
  );
}
