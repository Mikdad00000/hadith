function SortBy() {
  return (
    <div className="h-[12%] w-full bg-pink-500 flex">
      <Empty />
      <div className="flex w-full">
        <SSortBy value="Serial" />
        <SSortBy value="Alphabet" />
        <SSortBy value="Total Ayah" />
        <SSortBy value="Parah" />
      </div>
    </div>
  );
}

function SSortBy({ value }) {
  return (
    <div className="h-[50%] w-[50%] border-2 rounded-lg m-6 pl-5">
      <div className="">
        <p className="">Sort by</p>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
}

function Empty() {
  return <div className="w-[50%]">Empty</div>;
}

export default SortBy;
