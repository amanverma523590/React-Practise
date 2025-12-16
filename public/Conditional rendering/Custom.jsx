import { useState } from "react";
import { DataGrid } from "./DataGrid";

export function CustomDemo() {
  const [layout, setLayout] = useState("card");

  function handleLayoutChange(e) {
    setLayout(e.target.value);
  }

  return (
    <div className="container-fluid">
      <h2>Employee</h2>
      <div className="my-3 w-25">
        <label className="form-label">Select Layout</label>
        <select className="form-select" onChange={handleLayoutChange}>
          <option value="">Select Layout</option>
          <option value="grid">Grid</option>
          <option value="card">Card</option>
        </select>
      </div>
      <DataGrid
        layout={layout}
        theme="table-warning"
        sorting={true}
        caption="Employye Data Table"
        fields={["First Name", "LastName", "Designation", "Salary"]}
        data={[
          {
            firstName: "Raj",
            LastName: "Kumar",
            Designation: "Developer",
            Salary: "50000",
          },
        ]}
      />
      <h2>IPL Points</h2>
      <DataGrid
        layout={layout}
        theme="table-danger"
        caption="Ipl Table"
        fields={["Team", "Won", "Lost", "NRR", "PTS"]}
        data={[
          {
            Team: "MI",
            Won: 8,
            Lost: "2",
            NRR: 0.56,
            PTS: 4,
          },
        ]}
      />
    </div>
  );
}
