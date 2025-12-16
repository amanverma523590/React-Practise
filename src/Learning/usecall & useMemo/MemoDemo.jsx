import { useMemo, useState } from "react"


export function MemoDemo() {

    const [ref, setRef] = useState()

    function GetData() {
        return 30;
    }

    const data = useMemo(() => {
        return GetData();
    }, [])

    function handleClick() {
        setRef(data)
    }

    return (
        <div>
            <button onClick={handleClick}>Get Data</button>
            {ref}
        </div>
    )
}