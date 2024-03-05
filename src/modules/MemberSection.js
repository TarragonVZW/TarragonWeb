import sponsors from "../dbs/sponsors.json";
import logoPauls from "../images/logoPauls2015.png";
import logoBarist from "../images/Baristokat.png";
import logoCraft from "../images/CraftyPotions.png";

function MemberSection() {

    const logo_dict = {
        "Crafty Potions": logoCraft,
        "Paul's Fresh Food Boutique": logoPauls,
        "B'aristokat": logoBarist
    }

    return <>
        <h1 style={{margin: "0"}}>Kobold Deals</h1>
        <h3 style={{marginBottom: "0.5rem"}}>Benefits of our membership</h3>
        <div className="card-list">
            {sponsors.map((sponsor, i) => {
                return <div className="card" key={i}><a href={sponsor.link}>
                    <img src={logo_dict[sponsor.name]} alt={sponsor.name + " Logo"}/>
                    <h3>{sponsor.name}</h3>
                    <p>{sponsor.benefit}</p>
                </a></div>
            })}
        </div>
        <a href={"https://forms.gle/L5g5wyNYtUtDb4D8A/"}>
            <div className={"SignupBtn"}>
                <h1>Become a Kobold!</h1>
                <small>(That's our membership)</small>
            </div>
        </a>
    </>
}

export default MemberSection;