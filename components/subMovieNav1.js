import React,{useState, useEffect, useRef} from 'react'
// import "./assets/css/movieNav.css";
// import "./assets/css/sub1.css";
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
import MovieBody from "../components/movieBody"
import Episode from "../components/Episode"
import Statistics from "../components/statistics"
import Characters from "../components/characters"
import ReactSwipe from 'react-swipe';


function Sub1() {
    let reactSwipeEl;
    const refer = useRef(null);
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);
    const [counter,setCounter] = useState(0);
    const [clickCounter,setClickCounter] = useState(0);

function handleTouchStart(e) {
    setTouchStart(e.clientX);
}

function handleTouchMove(e) {
    setTouchEnd(e.clientX);
}

// console.log(counter)
function handleTouchEnd() {
    if (touchStart - touchEnd > 0) {
        if(counter < 2){
        setCounter(counter => counter+1);}
        reactSwipeEl.next()
    }

    if (touchStart - touchEnd < 0) {
        if(counter > 0){
        setCounter(counter => counter-1);}
        reactSwipeEl.prev()
    }
}

    useEffect(() => {
        // console.log('click counter => '+ clickCounter)
            if(clickCounter==0&&counter==1) {
                reactSwipeEl.prev();
                setCounter(counter => 0);
            }
            else if(clickCounter==0&&counter==2) {
                reactSwipeEl.prev();
                reactSwipeEl.prev();
                setCounter(counter => 0);
            }
            else if(clickCounter==1&&counter==2) {
                reactSwipeEl.prev();
                setCounter(counter => 1);
            }
            else if(clickCounter==1&&counter==0) {
                reactSwipeEl.next();
                setCounter(counter => 1);
            }
            else if(clickCounter==2&&counter==0) {
                reactSwipeEl.next();
                reactSwipeEl.next();
                setCounter(counter => 2);
            }
            else if(clickCounter==2&&counter==1) {
                reactSwipeEl.next();
                setCounter(counter => 2);
            }
    },[clickCounter])
    
return (
    <div style={{paddingTop: 0, backgroundColor: '#182128'}}>
        
        <div style={{backgroundColor: '#182128', marginBottom: '40px', marginTop: -40, color: 'white', backgroundColor: '#182128', display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', position: 'relative', top: 40, color: 'white'}}><div style={{flex: 1, paddingTop: 30, paddingBottom: 30}} onClick={()=>setClickCounter(0)}>The News</div><div style={{paddingTop: 20, paddingBottom: 20, flex: 1}} onClick={()=>setClickCounter(1)} >Statistics</div><div style={{paddingTop: 20, paddingBottom: 20, flex: 1}} onClick={()=>setClickCounter(2)}>Characters</div></div>

                
      <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)} >

              <div  style={{backgroundColor:'red',color:'white'}} 
            onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} 
            onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} 
            onMouseUp={handleTouchEnd} 
            onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} 
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} 
            onTouchEnd={handleTouchEnd}>
                <div style={{height: '100%'}}>
                    <section style={{marginTop:4}}>
                        <MovieBody darkMode={true}/>
                    </section>
                </div>
            </div>
    
            <div style={{width:'100%',height:'90vh',backgroundColor:'blue',color:'white'}} 
            onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} 
            onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} 
            onMouseUp={handleTouchEnd} 
            onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} 
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} 
            onTouchEnd={handleTouchEnd}>
                <div>
                    <section>
                        <Statistics darkMode={true} />
                    </section>
                </div>
            </div>
            
            <div style={{width:'100%',height:'90vh',backgroundColor:'blue',color:'white'}} 
            onMouseDown={mouseDownEvent =>setTouchStart(mouseDownEvent.clientX)} 
            onMouseMove={mouseMoveEvent => setTouchEnd(mouseMoveEvent.clientX)} 
            onMouseUp={handleTouchEnd} 
            onTouchStart={touchStartEvent =>handleTouchStart(touchStartEvent)} 
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} 
            onTouchEnd={handleTouchEnd}>
                <div>
                    <section>
                       <Characters darkMode={true} />
                    </section>
                </div>
            </div>
            </ReactSwipe>

      
    </div>
);
}


export default Sub1;