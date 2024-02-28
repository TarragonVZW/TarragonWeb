// import sponsors from "../dbs/sponsors.json";
import logoPauls from "../images/logoPauls2015.png";
import logoBarist from "../images/Baristokat.png";

function MemberSection() {
    return <>
        <h1 style={{margin: "0"}}>Kobold Deals</h1>
        <h3 style={{marginBottom: "0.5rem"}}>Benefits of our membership</h3>
        <div className="card-list">
            {/*{sponsors.map((sponsor, i) => {*/}
            {/*    return <div className="card" key={i}>*/}
            {/*        <img src={sponsor.logo} alt={sponsor.name + " Logo"} />*/}
            {/*        <h3>{sponsor.logo}</h3>*/}
            {/*    </div>*/}
            {/*})}*/}
            <div className="card">
                <a href={"http://craftypotions.com/CraftyPotions.html"}>
                    <img src={"http://craftypotions.com/Textures/white_icon.png"} alt={"Crafty Potions Logo"}/>
                    <h3>Crafty Potions</h3>
                    <p>10% discount on drinks & snacks.</p>
                </a>
            </div>
            <div className="card">
                <a href={"http://www.paulsboutique.be"}>
                    <img src={logoPauls} alt={"Paul's Boutique Logo"}/>
                    <h3>Paul's Fresh Food Boutique Kortrijk</h3>
                    <p>2€ discount when purchasing a burger.</p>
                </a>
            </div>
            <div className="card">
                <a href={"https://www.baristokat-kattencafe.be"}>
                    <img src={logoBarist} alt={"Baristokat Logo"}/>
                    <h3>B'aristokat</h3>
                    <p>1€ discount on seasonal snacks.</p>
                </a>
            </div>
        </div>
    </>
}

export default MemberSection;