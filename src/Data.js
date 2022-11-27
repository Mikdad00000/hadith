function Data() {
  fetch("./public/data.json")
  .then(res => res.json())
  .then(data => data.map( x => <p className="text-red-500">{x}</p>));
  
  return <div className="text-green-500">{g}</div>;
}
export default Data;
