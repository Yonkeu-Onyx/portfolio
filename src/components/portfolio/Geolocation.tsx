import { useState } from "react";
import Modal from "./Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
function Geolocation() {
  const [lat, setLat] = useState("37.4224864"); //to store the latitude from user
  const [long, setLong] = useState("-122.0855962"); //to store the longitude from user
  const [city, setCity] = useState(""); //city result from lat and long api
  const [theme, setTheme] = useState("");
  const [lang, setLang] = useState("eng");
  const [address, setAddress] = useState(
    "1600 Amphitheatre Parkway, Mountain View, California",
  );
  const [addressResult, setAddressResult] = useState<any | null>(null); //The api results from the search with an address
  const [coorResult, setCoorResult] = useState<any | null>(null);

  // const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

  function Latitude(event: React.ChangeEvent<HTMLInputElement>) {
    setLat(event.target.value);
  }
  function Longitude(event: React.ChangeEvent<HTMLInputElement>) {
    setLong(event.target.value);
  }
  function Address(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  async function getAddress() {
    const baseUrl =
      "https://gemini-maps-service-544450034690.us-central1.run.app/getAll";
    const response = await fetch(baseUrl, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: long,
      }),
    });
    const data = await response.json();
    console.log(data);
    setAddressResult(null);
    setCoorResult(data);
  }

  async function getCity() {
    const response = await fetch(
      "https://gemini-maps-service-544450034690.us-central1.run.app/getcity",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: long,
        }),
      },
    );
    const data = await response.json();
    console.log(data);
    setCity(data.city);
  }

  function Hide() {
    setAddressResult(null);
    setCoorResult(null);
    setCity("");
  }

  //body variables
  const disp = <p>La ville est : </p>;

  const eng = (
    <div className="leading-loose">
      The Geolocation API is an API that takes as input the longitude and
      latitude of a location and returns the region of that location
      <br />
      <br />
      <h3 className="text-xl font-semibold text-sm md:text-lg xl:text-2xl">
        Context
      </h3>
      <p>
        I made the api for a mobile application named Pest Control on which i
        was working during my internship. The application was designed to
        identify insects and pests and help control them. This specific api was
        made in order to determine the region in which the user is located, in
        order to connect him to a professional insect exterminator in his region
        and help him eliminate potential threats. To do this, i used the api of
        google, named google Geocoding, which converts an address into
        coordinates, and vice versa. You can test google's api Examples have
        been provided for quick testing, but you can replace them with your own
        values.
      </p>
    </div>
  );
  const fr = (
    <section>
      The Geolocation API is an API that takes as input the longitude and
      latitude of a location and returns the city of that <br />
      <h3>Context</h3>
      <p>
        I made the api for a mobile application named Pest Control on which i
        was working during my internship. The application was designed to
        identify insects and pests and help control them. This specific api was
        made in order to determine the region in which the user is located, in
        order to connect him to a professional insect exterminator in his region
        and help him eliminate potential threats <br />
        To do this, i used the api of google, named google Geocoding, which
        converts an address into coordinates, and vice versa. You can take a
        look at what google's api return, by entering either an address or
        coordinates below. Examples have been provided for quick testing, but
        you can replace them with your own values.
      </p>
    </section>
  );
 
  return (
    <section className="ms-10 me-8">
      <h1 className="text-center text-2xl text-sm md:text-lg xl:text-2xl font-semibold leading-relaxed mt-5">
        Geolocation API
      </h1>
      {lang == "eng" ? eng : fr}
      <div className="container d-flex" style={{ display: "flex" }}>
        <div className="w-50 m-3" style={{ width: "50%" }}>
         
        </div>
        <div className="w-50 m-3">
          <p>Enter some coordinates: </p>
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input
            style={{ width: "100%" }}
            type="text"
            className="peer w-full px-4 pt-2 pb-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-4 focus:ring-blue-500"
            onChange={Latitude}
            placeholder="ex : 37.4224864"
            value={lat}
          />
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input
            style={{ width: "100%" }}
            value={long}
            type="text"
            className="peer w-full px-4 pt-2 pb-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-4 focus:ring-blue-500"
            onChange={Longitude}
            placeholder="ex : -122.0855962"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Send"
            className="btn btn-primary"
            onClick={getAddress}
          />
        </div>
      </div>
      <div className="leading-loose">
        <p>
          As you can see, if you've tested the google Geocoding Api, the results
          can get confusing really fast and it could be hard to use, especially
          if you just need a piece of information
          <br />
          That's why i built an api just to extract the name of the region from
          the result of the user's coordinates, because that's what we needed
          for the mobile app.
          <br /> Of course i could customise my api to return whatever a
          specific app needs from the geocoding api, be it the province, postal
          code, country...
          <br /> But for now, it returns just the region. You can test it below
          :
        </p>
        <form action="#" className="form m-5 w-50">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <br />
          <input
            style={{ width: "100%" }}
            type="number"
            className="peer w-full px-4 pt-2 pb-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lat}
            onChange={Latitude}
          />
          <br />
          <br />
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <br />
          <input
            type="number"
            className="peer w-full px-4 pt-2 pb-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-4 focus:ring-blue-500"
            value={long}
            onChange={Longitude}
          />
          <br />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            name="submit"
            value="Send"
            id=""
            onClick={(e) => {
              e.preventDefault();
              getCity();
            }}
          />
        </form>
        
        {(city || addressResult || coorResult) && (
          <Modal onClose={Hide}>
            {city && <p className="mb-2 font-semibold">Region: {city}</p>}
            {addressResult && (
              <pre>{JSON.stringify(addressResult, null, 2)}</pre>
            )}
            {coorResult && <pre>{JSON.stringify(coorResult, null, 2)}</pre>}
          </Modal>
        )}

      </div>
    </section>
  );
}
export default Geolocation;
