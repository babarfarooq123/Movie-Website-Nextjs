import React from 'react'
// import "../components/assets/css/character.css";
// import {Link} from 'react-router-dom';


export default function Characters() {
    return (
        <div>
            <div className="card">
                <h2 style={{textAlign:'right',paddingRight:15}}>Main characters</h2>
                <div>
                <div className="scrollX">
                    {/* <Link to="/characterclick" style={{"textDecoration":'none'}}> */}
                        {/* <Link to="/characterclick" style={{"textDecoration":'none'}}> */}
                            <div className="imgDiv">
                            <img className="poster-images1 pImg1" src="https://cdn.myanimelist.net/images/characters/8/380950.jpg" alt="somepicture"/>
                            <p className="TextImage2 tImg1">Sankuu</p>
                        </div>
                        {/* </Link> */}
                    {/* </Link> */}
                    {/* <Link to="/characterclick" style={{"textDecoration":'none'}}> */}
                        <div className="imgDiv">
                            <img className="poster-images1" src="https://cdn.myanimelist.net/images/characters/8/380950.jpg" alt="somepicture"/>
                            <p className="TextImage2 tImg2">Sankuu</p>
                        </div>
                        {/* </Link> */}
                 
                </div>
                </div>
            </div>

            {/* crews are here... */}
            <div className="card">
                <h2 style={{textAlign:'right',paddingRight:15}}>Crew</h2>
                <div>
                <div className="scrollX">
                    
                {/* <Link to="/characterclick" style={{"textDecoration":'none'}}> */}
                    <div className="imgDiv">
                        <img className="poster-images1" src="data:image/jpeg;base64,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" alt="somepicture"/>
                        <p className="TextImage2 tImg3">Biochi</p>
                        <p className="TextImage1 tImg3">Original character</p>
                    </div>
                    {/* </Link> */}
                    
                    

                   

                </div>
                </div>
            </div>



        </div>
    )
}
