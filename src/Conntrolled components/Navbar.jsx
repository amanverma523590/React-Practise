

export function DataGrid(props){
      return (
    <table className={`table table-hover caption-top`}>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
          {props.fields.map((feld) => (
            <th key={feld}>
              {feld}{" "}
              {props.sorting === true ? (
                <button className="btn bi bi-sort-alpha-down"></button>
              ) : null}
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
}