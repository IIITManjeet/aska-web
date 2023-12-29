import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const ROUTE = "http://localhost:4000/upload";
function App() {
  const [data, setData] = useState(null);
  const [get, setGet] = useState(false);
  const [aadhar, setAadhar] = useState();
  const [birth, setBirth] = useState();
  const [tenth, setTenth] = useState();
  const [image, setImage] = useState();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, "data");
  };
  const handleImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL?.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleAadhar = (e) => {
    setAadhar(e.target.files[0]);
  };

  const handleBirth = (e) => {
    setBirth(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/4755dee2-1530-4ec9-b238-3cb492c9cf8a",
        data
      )
      .then((res) => {
        console.log(res);
        setData(null);
        setAadhar(null);
        setBirth(null);
        setGet(false);
        setImage(null);
        setTenth(null);
      });
  };
  const handleTenth = (e) => {
    setTenth(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image?.raw);
    formData.append("aadhar", aadhar);
    formData.append("tenth", tenth);
    formData.append("birth", birth);
    console.log(...formData);
    axios
      .post(ROUTE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setData({ ...data, ...res?.data });
        setGet(true);
      });
  };

  return (
    <div className="min-h-screen w-auto flex flex-col font-mono gap-5">
      <form
        action="/upload"
        method="post"
        enctype="multipart/form-data"
        className="rounded-md w-full m-auto p-4 gap-4 justify-center items-left flex-col flex"
      >
        <h1 className="text-center text-[22px] font-bold">
          Student Registration Form
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="upload-button">
            {image?.preview ? (
              <img
                src={image?.preview}
                alt="dummy"
                className="rounded-md"
                width="250"
                height="250"
              />
            ) : (
              <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="flex bg-neutral-400/50 py-2 px-4 rounded-md h-[250px] w-[250px] items-center justify-center">
                  Upload your photo
                </h5>
              </>
            )}
          </label>
          <input
            type="file"
            name="image"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleImage}
          />
          <br />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Player Name</label>
          <input
            type="text"
            name="playerName"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your DOB"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Father's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Mother's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Permanent Address</label>
          <textarea
            name="permanentAddress"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Temporary / Hostel Address</label>
          <textarea
            name="temporaryAddress"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Temporary Address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Select Sex</label>
          <select
            name="sex"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Sex"
          >
            <option defaultChecked className="p-2">
              Select Your Sex
            </option>
            <option value="Male" className="p-2">
              Male
            </option>
            <option value="Female" className="p-2">
              Female
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Date of Admission</label>
          <input
            type="date"
            onChange={handleChange}
            name="doadmission"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Date of Admission"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Fees</label>
          <span className="w-full flex flex-row items-center justify-center gap-2">
            &#x20B9;
            <input
              type="text"
              name="firstPart"
              onChange={handleChange}
              className="border-2 border-black/50 p-2 w-full rounded-md focus:outline-none"
              placeholder="Enter Your First Part Fee"
            />
          </span>
          <span className="w-full flex flex-row items-center justify-center gap-2">
            &#x20B9;
            <input
              type="text"
              onChange={handleChange}
              name="secondPart"
              className="border-2 border-black/50 p-2 rounded-md w-full focus:outline-none"
              placeholder="Enter Your Second Part Fee"
            />
          </span>
          <span className="w-full flex flex-row items-center justify-center gap-2">
            &#x20B9;
            <input
              type="text"
              onChange={handleChange}
              name="finalSubmission"
              className="border-2 border-black/50 p-2 w-full rounded-md focus:outline-none"
              placeholder="Enter Your Fiinal Submission Amount"
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Branch</label>
          <input
            type="text"
            name="branch"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Branch"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Coach</label>
          <input
            type="text"
            name="coach"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Coach's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Cricket Particular</label>
          <input
            type="text"
            name="cricketParticular"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter if Any"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Latest Corona Dose</label>
          <span className="w-full flex flex-row gap-2">
            <input
              type="checkbox"
              name="firstDose"
              onChange={handleChange}
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> 1st Dose</label>
          </span>
          <span className="w-full flex flex-row gap-2">
            <input
              type="checkbox"
              onChange={handleChange}
              name="secondDose"
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> 2st Dose</label>
          </span>
          <span className="w-full flex flex-row gap-2">
            <input
              type="checkbox"
              name="boosterDose"
              onChange={handleChange}
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> Booster Dose</label>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Any Corona Case</label>
          <select
            name="coronaCase"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Corona Case"
          >
            <option defaultChecked className="p-2">
              Select Any Option
            </option>
            <option value="No" className="p-2">
              No
            </option>
            <option value="Yes" className="p-2">
              Yes
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Aadhar Number</label>
          <input
            type="number"
            name="aadharNumber"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Aadhar Number"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Father's Occupation</label>
          <input
            type="text"
            name="fatherOccupation"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Father's Occupation"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Mother's Occupation</label>
          <input
            type="text"
            name="motherOccupation"
            onChange={handleChange}
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Mother's Occupation"
            required
          />
        </div>
        <label class="text-black" htmlFor="aadharCard">
          Upload Aadhar Card
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="aadharCard"
          name="aadhar"
          accept="image/*,.pdf"
          onChange={handleAadhar}
          type="file"
        />
        <label class="text-black" htmlFor="birthCertificate">
          Upload Birth Certificate
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="birthCertificate"
          accept="image/*,.pdf"
          name="birth"
          onChange={handleBirth}
          type="file"
        />
        <label class="text-black" htmlFor="tenthMarksheet">
          Upload 10th Marksheet
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          onChange={handleTenth}
          accept="image/*,.pdf"
          name="tenth"
          id="tenthMarksheet"
          type="file"
        />
        <button
          onClick={handleUpload}
          className={
            get
              ? `flex justify-center items-center px-4 bg-green-500/30 px-4 py-2 cursor-pointer rounded-lg m-auto w-[50%]`
              : `flex justify-center items-center px-4 bg-slate-500/30 px-4 py-2 cursor-pointer rounded-lg m-auto w-[50%]`
          }
        >
          Upload Files
        </button>
      </form>
      <button
        onClick={handleSubmit}
        className="flex justify-center items-center bg-sky-500/30 px-4 py-2 cursor-pointer rounded-lg m-auto w-[49%] mb-5"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
