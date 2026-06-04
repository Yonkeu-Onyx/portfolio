function PestControl() {
  return (
    <div className="text-xs sm:text-lg">
      <h1 className="text-center text-2xl text-sm md:text-lg xl:text-2xl font-semibold leading-relaxed mt-7 mb-5">
        Pest Control
      </h1>
      <h1 className="text-2xl text-sm md:text-lg xl:text-2xl font-semibold leading-relaxed mt-7 mb-5">
        Context
      </h1>
      <p>
        Pest Control is a mobile application designed to help you identify
        insects and pests that could prove to be potential threats. I helped build
        this application during my internship program. It was meant for a client
        who has a Pest Eradication business and wanted a professional app to
        ease and expand his business.
      </p>
      <div>
        <h1 className="text-2xl text-sm md:text-lg xl:text-2xl font-semibold leading-relaxed mt-7 mb-5">
          How to use the app
        </h1>
        <ul className="list-disc list-inside pl-5 font-normal text-gray-500 mb-3">
          <li>You create an account and log yourself in.</li>
          <li>On the principal page you click on scan.</li>
          <li>
            You upload an insect image (On the mobile app you can directly take
            the photo of the insect).
          </li>
          <li>
            After scanning, you get the result page, with all the information
            related to the insect, common name, scientific name, brief
            description, threat level to human, eradication product
            recommendations.
          </li>
          <li>
            You have the option to shop for the eradication products directly in
            the app, but it's not yet fully implemented, so it's greyed out.
          </li>
          <li>
            You have the option to contact a professional exterminator for cases
            of serious threats, like bed bugs, termites.
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <p>
          To ease the testing process, here are login credentials you can use to
          test the app :
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>
            {" "}
            Email :{" "}
            <span className="text-gray-500 font-semibold">
              Alibastitch@gmail.com
            </span>{" "}
          </li>
          <li>
            Password :{" "}
            <span className="text-gray-500 font-semibold">Ali123</span>
          </li>
        </ul>
        <p>
          Here's an insect image url you can download to upload to the app :{" "}
          <a
            className="text-lg text-sm md:text-lg xl:text-lg font-semibold leading-relaxed mt-7 mb-5 text-blue-600"
            href="https://rvcnadfxxfvesczpvish.supabase.co/storage/v1/object/public/InsectImages/images/1780517280369000.jpeg"
            target="_blank"
          >
            Insect Image
          </a>
        </p>
        <p>
          You can test the app by following this link :{" "}
          <a
            className="text-lg text-sm md:text-lg xl:text-lg font-semibold leading-relaxed mt-7 text-blue-600"
            href="https://p-cont-ygopz2.flutterflow.app/"
            target="_blank"
            
          >
            Pest Control
          </a>
        </p>
        <p className="mt-3">The app was developped with flutterflow and we collaborated as team to build it. I did most of the backend logic, including the api used for insect identification and the api used to determine the user's region. You can test both apis separately, by clicking on each one's link above.</p>
      </div>
    </div>
  );
}
export default PestControl;
