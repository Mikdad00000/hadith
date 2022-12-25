function RightSide() {
  return (
    <div className="w-[20%] h-full bg-red-500">
      <Support />
      <Profile />
      <ReadListen headline="ja icha tai" name="nam" />
    </div>
  );
}

function Profile() {
  return (
    <div className="h-[60%]">
      <p className="text-2xl">Profile</p>
    </div>
  );
}

function ReadListen({ headline, name, detail }) {
  return (
    <div>
      <p className="">{headline}</p>
      <p className="">{name}</p>
      <p className="">{detail}</p>
    </div>
  );
}

function Support() {
  return <button type="" className="" onClick={""}>Support</button>;
}

export default RightSide;
