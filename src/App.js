import { useState } from "react";
import "./App.css";
function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div className="min-h-screen w-auto px-12 py-4 flex font-mono">
      <form className="rounded-md w-full shadow-lg shadow-black/50 m-auto p-4 gap-4 justify-center items-left flex-col flex">
        <h1 className="text-center text-[22px] font-bold">
          Aska Registration Form
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="upload-button">
            {image.preview ? (
              <img src={image.preview} alt="dummy" className="rounded-md" width="300" height="300" />
            ) : (
              <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="flex bg-neutral-400/50 py-2 px-4 rounded-md h-[300px] w-[300px] items-center justify-center">
                  Upload your photo
                </h5>
              </>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <br />
          <button
            onClick={handleUpload}
            className="flex justify-center items-center bg-slate-500/30 px-6 py-2 cursor-pointer rounded-lg m-auto"
          >
            Upload
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Player Name</label>
          <input
            type="text"
            name="playerName"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your DOB"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Father's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Mother's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Permanent Address</label>
          <textarea
            name="permanentAddress"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Temporary / Hostel Address</label>
          <textarea
            name="temporaryAddress"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Temporary Address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Select Sex</label>
          <select
            name="sex"
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
              type="number"
              name="firstPart"
              className="border-2 border-black/50 p-2 w-full rounded-md focus:outline-none"
              placeholder="Enter Your First Part Fee"
            />
          </span>
          <span className="w-full flex flex-row items-center justify-center gap-2">
            &#x20B9;
            <input
              type="number"
              name="secondPart"
              className="border-2 border-black/50 p-2 rounded-md w-full focus:outline-none"
              placeholder="Enter Your Second Part Fee"
            />
          </span>
          <span className="w-full flex flex-row items-center justify-center gap-2">
            &#x20B9;
            <input
              type="number"
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
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Branch"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Coach</label>
          <input
            type="text"
            name="coach"
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Coach's Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Cricket Particular</label>
          <input
            type="text"
            name="cricketParticular"
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
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> 1st Dose</label>
          </span>
          <span className="w-full flex flex-row gap-2">
            <input
              type="checkbox"
              name="secondDose"
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> 2st Dose</label>
          </span>
          <span className="w-full flex flex-row gap-2">
            <input
              type="checkbox"
              name="boosterDose"
              className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            />
            <label className="text-black"> Booster Dose</label>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black">Any Corona Case</label>
          <select
            name="sex"
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
            className="border-2 border-black/50 p-2 rounded-md focus:outline-none"
            placeholder="Enter Your Mother's Occupation"
            required
          />
        </div>
        <label class="text-black" for="aadharCard">
          Upload Aadhar Card
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="aadharCard"
          type="file"
        />
        <label class="text-black" for="birthCertificate">
          Upload Birth Certificate
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="birthCertificate"
          type="file"
        />
        <label class="text-black" for="tenthMarksheet">
          Upload 10th Marksheet
        </label>
        <input
          class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="tenthMarksheet"
          type="file"
        />
        <button className="flex justify-center items-center bg-sky-500/30 px-4 py-2 cursor-pointer rounded-lg m-auto w-[50%]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
