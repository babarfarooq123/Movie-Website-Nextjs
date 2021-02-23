import React,{useState, useEffect, useRef} from 'react'
// import "./assets/css/movieNav.css";
// import "./assets/css/sub2.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
// import {Link} from "react-router-dom"
// import {ReactSwipeNavigation} from 'react-swipe-navigation'
// import MovieBody from "../components/movieBody"
// import Episode from "../components/Episode"
// import Statistics from "../components/statistics"
// import Characters from "../components/characters"


function Sub2() {
    
return (
    <div style={{backgroundColor: 'white'}}><div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', position: 'relative', top: 40}}><div>The News</div><div>Episode</div><div>Statistics</div><div>Characters</div></div>
    {/* <ReactSwipeNavigation className='menu-item' menu={ ['', '','',''] } >
                <div style={{height: '100vh'}}>

                     <section style={{marginTop:4}}>
                         <MovieBody darkMode={false}/>
                     </section>

                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                        <section style={{marginTop:4}}>
                            <Episode darkMode={false} />
                        </section>
                </div>
                <div>
                        <section>
                            <Statistics darkMode={false} />
                        </section>
                </div>
                <div>
                        <section>
                            <div><Characters darkMode={false} /></div>
                        </section>
                </div>
                </ReactSwipeNavigation> */}

        <ReactSwipe className="carousel"
        swipeOptions={{ continuous: false }} ref={el => (reactSwipeEl = el)} >
            <div  style={{width:'100%',height:'90vh',backgroundColor:'red',color:'white'}} onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} onMouseUp={handleTouchEnd} onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} onTouchEnd={handleTouchEnd}>PANE 1</div>
            <div  style={{width:'100%',height:'90vh',backgroundColor:'yellow',color:'white'}} onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} onMouseUp={handleTouchEnd} onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} onTouchEnd={handleTouchEnd}>PANE 2</div>
            <div style={{width:'100%',height:'90vh',backgroundColor:'blue',color:'white'}} onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} onMouseUp={handleTouchEnd} onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} onTouchEnd={handleTouchEnd}>PANE 3</div>
        </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
);
}


export default Sub2;