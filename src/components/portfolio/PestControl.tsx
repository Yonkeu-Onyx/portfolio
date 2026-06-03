function PestControl(){

    return (
        <div>
            <p>Pest Control is a mobile application designed to help you identify insects and pests that could prove to be potential threats. I help build this application during my internship program. It was meant for a client who has a Pest Eradication business and wanted a professional app to ease and expand his business.
            </p>
            <div>
                <h3>How to use the app</h3>
                <ul>
                    <li>You create an account and log yourself in.</li>
                    <li>On the principal page you click on scan.</li>
                    <li>You upload an insect image (On the mobile app you can directly take the photo of the insect).</li>
                    <li>After scanning, you get the result page, with all the information related to the insect, common name, scientific name, brief description, threat level to human, eradication product recommendations.</li>
                    <li>You have the option to shop for the eradication products directly in the app, but it's not yet fully implemented, so it's greyed out.</li>
                    <li>You have the option to contact a professional exterminator for cases of serious threats, like bed bugs, termites.</li>
                </ul>
            </div>
            <div> <p>To ease the testing process, here are login credentials you can use to test the app :</p>
                <ul>
                    <li>Email : Alibastitch@gmail.com </li>
                    <li>Password : Ali123</li>
                </ul>
                <p>Here's an insect image url you can download to upload to the app : <a href="https://rvcnadfxxfvesczpvish.supabase.co/storage/v1/object/public/InsectImages/images/1780517280369000.jpeg">Insect Image</a></p>
            </div>
        </div>
    )
}
export default PestControl;