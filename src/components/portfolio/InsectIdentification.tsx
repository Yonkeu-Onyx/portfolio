import { useState } from "react";

function InsectIdentification() {
  const [image, setImage] = useState("");
  const [imgResult, setImageResult] = useState(null);
  const VITE_CLAUDE_IDENTIFICATION_URL = import.meta.env
    .VITE_CLAUDE_IDENTIFICATION_URL;

  function handleImageUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }

  async function AnalyzeImage() {
    if (image != "") {
      const response = await fetch(VITE_CLAUDE_IDENTIFICATION_URL, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          image_url: image,
        }),
      });
      const data = await response.json();
      setImageResult(data);
    }
  }

  let results = (
    <div className="container">
      <h2>Results</h2>
      {imgResult && <pre>{JSON.stringify(imgResult, null, 2)}</pre>}
    </div>
  );

  return (
    <>
      <section className="m-5 ms-8 me-8">
        <h1 className="text-center text-2xl text-sm md:text-lg xl:text-2xl font-semibold leading-relaxed mt-7 mb-5">
          Insect Identification API
        </h1>
        <p className="leading-loose">
          This Api was built for the mobile application PestControl, meant to
          identify insects and pests and help control them.
          The api receives the image of an insect as input, then via a
          personalised prompt to claude's AI it identifies the insect and
          returns useful information such as the scientific name, a short
          description, the threat level to humans and some tips on how to
          control them.
          You can test the api below by uploading the image of an insect or
          pasting the address of an image :
        </p>
        <br />
        <input
          style={{ width: "25%" }}
          type="text"
          className="peer w-full px-4 pt-2 pb-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-4 focus:ring-blue-500"
          onChange={handleImageUrl}
        />
        <br />
        <br />
        <input
          type="submit"
          onClick={AnalyzeImage}
          className="btn btn-primary"
        />
        <br />
        <br />

        {imgResult && results}
      </section>
    </>
  );
}

export default InsectIdentification;
