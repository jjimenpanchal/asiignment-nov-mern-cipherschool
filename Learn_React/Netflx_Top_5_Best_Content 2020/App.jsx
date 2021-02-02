import React from 'react';
import "./index.css"
var img1="https://sportsgrindentertainment.com/wp-content/uploads/2020/11/Durgamati-The-Myth-Bhumi-Pednekar-Looks-Fierce-Like-a.jpg"
var link1="https://www.primevideo.com/detail/amzn1.dv.gti.3cbb140f-8fdf-a8bd-90fb-38a3d0f04a54/?ref_=dvm_pds_gen_in_as_s_gt_durga|m_o0mA26Bzc_c485598881655&gclid=Cj0KCQiAifz-BRDjARIsAEElyGJLHv03efWBViNWKBPGz65X5aJOeOOEk8xOFIWVhA6K-JbdoZyTNOQaAixLEALw_wcB";
var name="Durgavati The Myth"
function App()
{
    return (
        <div>
            <h1>Top 5 Movies 2020</h1>
            <div className="cards">
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'><button>Watch Now</button></a>
                </div>
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'>Watch Now</a>
                </div>
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'>Watch Now</a>
                </div>
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'>Watch Now</a>
                </div>
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'>Watch Now</a>
                </div>
                <div className="card">
                    <img src={img1}></img>
                    <p>Amazone Prime Video</p>
                    <p>{name}</p>
                    <a href={link1} target='_blank'>Watch Now</a>
                </div>
            </div>
        </div>
    )
}
export default App;