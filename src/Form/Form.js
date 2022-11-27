function Sinput({ name, it, vl, oc }) {
  return (
    <div className="mt-1 flex">
      <label className="ml-4 pr-2 mt-7 ">{name} :</label>
      <input
        type={it}
        value={vl}
        onChange={""}
        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
      />
    </div>
  );
}
function SubmitButton() {
  return (
    <div className="ml-12 pr-3 pl-8">
      <button
        type="button"
        onClick={""}
        className="text-center text-1xl text-white font-bold h-[80%] w-[85%] ml-10 bg-blue-600 hover:text-blue-300 p-3 border rounded-md "
      >
        Submit
      </button>
    </div>
  );
}
function Form() {
  const [natinality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [birth, setBirth] = useState("");
  const [nid, setNid] = useState("");
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-4/6 bg-gray-100 p-5 ">
        <p className="mt-1 ml-5 text-left underline mr-10">Input Information</p>
        <Sinput name="Natinality " it="text" vl="natinality" />
        <Sinput name="Religion" it="text" vl="religion" />
        <Sinput name="Birthday" it="text" vl="birth" />
        <Sinput name="NID No" it="password" vl="nid" />
        <SubmitButton />
      </div>
    </div>
  );
}
export default Form;
