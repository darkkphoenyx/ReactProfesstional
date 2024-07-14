import "./App.css";
import TextInput from "./components/input/TextInput";

function App() {
  // function test(value) {
  //   alert(value);
  // }
  return (
    <>
      <div className="container grid bg-gray-500 mt-2 ml-auto mr-auto max-w-xs rounded-lg  border-2 border-gray-700">
        {/* <TextInput placeholder="FullName" onchange={ (v) => test(v) }></TextInput> */}
        <TextInput
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="rounded-md m-1 border-1 border-red-600 "
        ></TextInput>
        <TextInput
          type="text"
          name="address"
          placeholder="Address"
          className="rounded-sm m-1 border-1 border-red-600 "
        ></TextInput>
        <TextInput
          type="text"
          name="email"
          placeholder="Email"
          className="rounded-sm m-1 border-1 border-red-600 "
        ></TextInput>
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-sm m-1 border-1 border-red-600 "
        ></TextInput>
      </div>
    </>
  );
}

export default App;
