import form from '../images/Tarragon_Dragon_Recruitment_Form_24-25.docx';
import recruitImage from '../images/FB_DragonRecruitment.jpg';

const images = require.context('../images/dragons', true);

function DragonSignup() {


    const imgList = {}
    for (const i in images.keys()) {
        imgList[images.keys()[i].slice(2, -4)] = images(images.keys()[i]);
    }

    return <>
        <div className={"section"}>
            <h1 style={{ margin: "0" }}>So you want to become a Dragon?</h1>
            <p style={{ marginBottom: "0.5rem" }}><ul>
                <li>Press the button below to download the form.</li>
                <li>Make sure to answer all of the questions to the best of your ability.</li>
                <li>Send the form to <a href="mailto:tarragonvzw@gmail.com" target="_blank">tarragonvzw@gmail.com</a>.</li>
            </ul></p>
            <a href={form}>
                <div className={"SignupBtn"}>
                    <h1>Become a Dragon?!</h1>
                    <small>Send <u>this form</u> to tarragonvzw@gmail.com</small>
                </div>
            </a>
        <br />
        <img src={recruitImage} />
        </div>
    </>
}


export default DragonSignup;
