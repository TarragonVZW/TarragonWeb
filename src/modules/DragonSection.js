import { Link } from 'react-router-dom';
import dragons from '../dbs/dragons.json';

const images = require.context('../images/dragons', true);

function DragonSection() {


    const imgList = {}
    for (const i in images.keys())
    {
        imgList[images.keys()[i].slice(2, -4)] = images(images.keys()[i]);
    }

    return <>
        <h1 style={{margin: "0"}}>Dragons</h1>
        <h3 style={{marginBottom: "0.5rem"}}>Who's on our team?</h3>
        <div className={"card-list"}>
            {dragons.map((dragon, i) => {
                return <div className="card" key={i}>
                    <img alt={dragon.name} src={imgList[dragon.name]}/>
                    <h3 style={{textAlign:"center", margin:"0.2rem"}}>{dragon.name}</h3>
                    <p style={{textAlign: "center"}}>{dragon.title}</p>
                </div>
            })}
    <Link to="/DragonSignup"> 
            <div className={"SignupBtn"}>
                <h1>Become a Dragon?!</h1>
                <small>Click here to find out more!</small>
            </div>
        </Link>
        </div>
    </>
}


export default DragonSection;
