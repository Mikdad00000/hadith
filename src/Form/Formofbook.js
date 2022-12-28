import { useState } from "react";

function Sinput({ lebel, tinput, fn, ph, vl }) {
  return (
    <div className="flex m-4">
      <p className="m-1 w-20">{lebel}</p>
      <input
        value={vl}
        type={"text" || tinput}
        placeholder={ph}
        onChange={fn}
        className="text-green bg-gray-100 w-full  border-2xl rounded-full"
      />
    </div>
  );
}
const getB64 = (file, cb) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    cb(reader.result);
  };
  reader.onerror = function(error) {
    console.log("Error: ", error);
  };
};
function FormofBook() {
  const [book, setBook] = useState("");
  const [writer, setWriter] = useState("");
  const [death, setDeath] = useState("");
  const [image, setImage] = useState("");
  const [users, setUsers] = useState([]);
  function Submit() {
    getB64(image, (imageString) => {
      const user = {
        name: book,
        writer: writer,
        death: death,
        image: imageString,
      };
      console.log(user);
      setUsers(user);
      fetch("http://localhost:3001/create-book", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      }).then((response) => window.alert("Data With Image are Uploaded"));
    });
  }
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="">
        <p className="ml-24">Bismillahi Rohmanir Rohim</p>
        <Sinput
          lebel="Name"
          fn={(e) => setBook(e.target.value)}
          ph="   Name"
          vl={book}
        />
        <Sinput
          lebel="Writer"
          fn={(e) => setWriter(e.target.value)}
          ph="   Writer"
          vl={writer}
        />
        <Sinput
          lebel="Death"
          fn={(e) => setDeath(e.target.value)}
          ph="   Death"
          vl={death}
        />
        <Sinput
          lebel="name"
          fn={(e) => setImage(e.target.files[0])}
          vl={image}
          tinput="file"
        />
        <Sinput lebel="name" />
        <Sinput lebel="name" tinput="password" />
        <button
          className="border-2xl bg-blue-500 ml-36 p-1  w-24 rounded-full"
          onClick={Submit}
        >
          Submit
        </button>
        <p>{JSON.stringify(users)}</p>
      </div>
    </div>
  );
}

// Submit button

export default FormofBook;
