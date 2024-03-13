import { useEffect, useState } from "react";

export default function BookOptions({ nowShowing, setWantedMovie }) {
  return (
    <select onChange={(e)=>(
      e.target.value === "---Select a movie---" ? setWantedMovie(null) :
      setWantedMovie(e.target.value)
      )}>
        <option value="none">-----Please Select a Movie-----</option>
      {nowShowing.map((id) => (
        <Option id={id} key={id}/>
      ))}
    </select>
  );
}

function Option({ id }) {
  const [options, setOptions] = useState(null);

  useEffect(function () {
    async function option() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=1f7f89f6&i=${id}`
      );
      const data = await res.json();
      setOptions(data);
    }
    option();
  }, []);

  return (
    <option value={options == null ? "none" : options.Title}>
      {options == null ? <>Loading...</> : options.Title}
    </option>
  );
}
