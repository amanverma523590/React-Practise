import { useTitleCase } from "./Sort"

export function SortedList(){

   const text = 'Welcome to javaScript is it working';
   const output = useTitleCase(text);

  return(
    <div>
      Output for Title Case: {output}
    </div>
  )

}

