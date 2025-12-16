export function DataGrid(props) {
  if (props.layout === "grid") {
    return (
      <table className={`table ${props.theme} table-hover caption-top`}>
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            {props.fields.map((field) => (
              <th key={field}>
                {" "}
                {field}{" "}
                {props.sorting === true ? (
                  <button className="btn bi bi-sort-alpha-down"></button>
                ) : null}{" "}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((record, index) => (
            <tr key={index}>
              {Object.keys(record).map((key) => (
                <td key={key}>{record[key]}</td>
              ))}
              <td>
                <button className="btn btn-danger bi bi-trash"></button>
                <button className="btn btn-warning bi bi-pen mx-2"></button>
                <button className="btn btn-primary bi bi-eye"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (props.layout === "card") {
    return (
      <div className="d-flex flex-wrap flex-row">
        {props.data.map((record, index) => (
          <div key={index} className="card p-2 m-2" style={{ width: "200px" }}>
            <div className="card-header">
              {Object.keys(record)[0]} {Object.keys(record)[1]}
            </div>
            <div className="card-body">
              {record[Object.keys(record)[0]]}
              &nbsp;
              {record[Object.keys(record)[1]]}
            </div>
            <div className="card-footer">
              <button className="btn btn-warning bi bi-pen-fill mx-2"></button>
              <button className="btn btn-danger bi bi-trash"></button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Select a Layout - To Display Data</h3>
      </div>
    );
  }
}
