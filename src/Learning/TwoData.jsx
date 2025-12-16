import { useState, useEffect } from "react";

function TwoData() {
  const [uname, setUname] = useState("Aman");

  useEffect(() => {
    setUname("Naman");
  }, []);

  return (
    <div>
      Name : <input type="text" value={uname} />
    </div>
  );
}

export default TwoData;
