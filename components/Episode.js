import React from 'react'
// import '../components/assets/css/episode.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';
// import {Link} from "react-router-dom"

export default function Episode({darkMode}) {
    let array = ['1','2','3','4','5','6'];
    return (
        <section className={darkMode? "episode-background1":"episode-background"} style={darkMode? {backgroundColor:'#182128',flex:1}:{backgroundColor: '#FAFAFA',flex:1}}>
            {
                array.map((element,index)=>
                <div className="episode-grid">
                        {/* <Link to="/episode" className="episode-grid" style={darkMode? {textDecoration:'none',color:'white',flex:1}:{textDecoration:'none',color:'black',flex:1}}> */}
                            <div className="episode-detail">
                            <p>{index+1}: episode {element}</p>
                        </div>
                        <div>
                            <VisibilityIcon style={{marginRight: 10, color: '#C7C7C7'}}/>
                            {/* <Link to="/comments" style={darkMode? {textDecoration:'none',color:'white'}:{textDecoration:'none',color:'black'}}><MessageIcon style={{color: '#606469'}}/></Link> */}
                        </div>
                        {/* </Link> */}
            </div>
            
                )
            }
        </section>
    )
}
