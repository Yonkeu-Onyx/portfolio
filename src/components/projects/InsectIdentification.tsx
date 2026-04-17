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
      <section className="m-5">
        <h1>Insect Identification API</h1>
        <p>
          This Api was built for the mobile application PestControl, meant to
          identify insects and pests and help control them <br />
          The api receives the image of an insect as input, then via a
          personalised prompt to claude's AI it identifies the insect and
          returns useful information such as the scientific name, a short
          description, the threat level to humans and some counsels on how to
          control them. <br />
          You can test the api below by uploading the image of an insect or
          pasting the address of an image :
        </p>
        <input type="text" className="form-control" onChange={handleImageUrl} />
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
