import { useState } from "react";

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
function Book() {
  const [book, setBook] = useState("");
  const [writer, setWriter] = useState("");
  const [death, setDeath] = useState("");
  const [image, setImage] = useState("");
  // const [users, setUsers] = useState([]);

  function Submit() {
    getB64(image, (imageString) => {
      const user = {
        name: book,
        writer: writer,
        death: death,
        image: imageString,
      };
      console.log(user.image);
      // setUsers([user]);
      fetch("http://localhost:3001/create-book", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      }).then((response) => window.alert("Your Data With Image is Uploaded"));
    });
  }

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="">
        <p className="ml-32">Bismillahi Rohmanir Rohim</p>{" "}
        <div className="flex m-4">
          <p className="m-1 w-20">Name</p>
          <input
            value={book}
            type="text"
            placeholder="   Name"
            onChange={(e) => setBook(e.target.value)}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Writer</p>
          <input
            value={writer}
            type="text"
            placeholder="   Writer"
            onChange={(e) => setWriter(e.target.value)}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Death</p>
          <input
            value={death}
            type="text"
            placeholder="   Death"
            onChange={(e) => setDeath(e.target.value)}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Image</p>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
        </div>
        <button
          className="border-2xl bg-blue-500 ml-36 p-1  w-24 rounded-full"
          onClick={Submit}
        >
          Submit
        </button>
        {/* <p>{JSON.stringify(users)}</p> */}
      </div>
    </div>
  );
}

export default Book;
