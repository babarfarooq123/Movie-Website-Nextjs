import React, {useState} from 'react';
import Image from 'next/image';
// import './assets/css/movieBody.css';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
// import {Link} from 'react-router-dom';
// import DiscreteSlider from './episodeSlid';

// 
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// import { useSpring, animated } from 'react-spring/web.cjs';
// 
// import mal from "./assets/images/mal.png"
// import {Link} from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';




const useStyles = makeStyles((theme) => ({
    bodyImage: {
      backgroundImage: 'url(/assets/images/bg.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center center',
      height: '160px',
      opacity: 0.5,
      zIndex: 1
    },
    gradient:{
        height: '10.4rem',
        backgroundImage: 'linear-gradient( 180deg, transparent, rgba(251, 255, 251, 0.7), #ffff)'
    },
    // darkGradient:{
    //     height: '10.4rem',
    //     backgroundImage: 'linear-gradient( 180deg, transparent, rgba(24, 33, 40,0.5), #182128)'
    // },
    mainMovieImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
        bottom: '140px',
        marginLeft: '20px',
    
    },
    detail: {
        marginLeft: '8px',
    },
    star:{
        color: '#FF9200',
        fontSize: 40,    
    },
    starBorder:{
        color: 'black',
        fontSize: 40,    
    },
    starDark:{
        color: 'white',
        fontSize: 40, 
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#252E39',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'right',
        backgroundColor: '#252E39',
        color: 'white',
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',

      },
      fullList1:{
        width: 'auto',
        backgroundColor: '#252E39',
        color: '#9AA0A6'
      }
}));


const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };

export default function Moviebody({darkMode}) {
    const [rating, setRating] = useState(false)
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });


      //drawer: 
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={darkMode? clsx(classes.list, {
            [classes.fullList1]: anchor === 'top' || anchor === 'bottom',
          }):clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
           
              <ListItem button>
                <ListItemIcon> <AddToQueueIcon style={darkMode? {color: '#9AA0A6'}:''} /></ListItemIcon>
                <ListItemText primary={"I'd like to watch it"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon> <PlayCircleOutlineIcon style={darkMode? {color: '#9AA0A6'}:''} /></ListItemIcon>
                <ListItemText primary={"currently set up"} />
              </ListItem>
             <ListItem button>
                <ListItemIcon> <PausePresentationIcon style={darkMode? {color: '#9AA0A6'}:''} /></ListItemIcon>
                <ListItemText primary={"pause.."} />
              </ListItem>

              <ListItem button>
                <ListItemIcon> <DesktopWindowsIcon style={darkMode? {color: '#9AA0A6'}:''} /></ListItemIcon>
                <ListItemText primary={"I'd like to watch it"} />
              </ListItem>
          </List>
          <Divider />
         
        </div>
      );






    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        setRating(true);
    };

    const handleClose = () => {
        setOpen(false);
        setRating(false);
    };

    return (
        <section className={darkMode? "body-of-movie-1":"body-of-movie"}>
            <section className={classes.bodyImage}>
              
                <section className={darkMode? "darkGradient":'darkGradient1'}/>
            </section>
            
            <section className={classes.mainMovieImg}>
                <section className={classes.mainMovieImgsection1}>
                    <img className="img" src="https://media.kitsu.io/anime/poster_images/2/large.jpg?1597696808"  alt="somepicture" width={150} height={200}/>
                </section>
                <section className="makeStyles">
                    <h2 className="header">Noblesse</h2>
                    <p className='headerCont'>Complete<br />
                    <span>2020 fall</span><br />
                    <span>series | 13 episodes | 17+</span>
                    </p>
                </section>
            </section>

            <section className="rating-section">
                <section className="star">
                    <StarIcon className={classes.star}/>
                    {/* <br/> */}
                    <p><strong>9.0</strong>/10<br/>8,335</p>
                </section>
                <section className="star">
                    {/* <img src='../assets/images/mal.png' alt="mal" style={{width:40,height:40}} className={classes.star}/> */}
                    <img src="/assets/images/mal.png" alt="mal" width={40} height={40} className={classes.star}/>
                    {/* <StarIcon className={classes.star}/> */}
                    {/* <br/> */}
                    <p><strong>9.0</strong>/10<br/>8,335</p>
                </section>
                {/* <section className="star tagsMar">
                    <StarBorderOutlinedIcon onClick={() => handleOpen()} className={darkMode? classes.starDark:classes.starBorder}/>
                    
                    <p style={{fontWeight: 600, fontSize: '16px'}}>Add a rating</p>
                    
                </section>
                <section className="star tagsMar">
                    <AddOutlinedIcon onClick={toggleDrawer('bottom', true)} className={darkMode? classes.starDark:classes.starBorder}/>
                    
                    <p style={{fontWeight: 600, fontSize: '16px'}}>My List</p>
                    <Drawer anchor="bottom" open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
            {list('bottom')}
            </Drawer>
                </section> */}
            
            </section>

            <section className={darkMode? "description-movie-1":"description-movie"}>
                <p>The story revolves around a noble vampire in a contemporary world after 820 years of hibernation. Dangerous adventures with new friends await him, as he uncovers is past and confronts a secret organization.</p>
                <section className={darkMode? "tags-1":"tags"}>
                    <p>Action</p>
                    <p>Uncanny</p>
                    <p>School</p>
                    <p>Vampire</p>
                    {/* <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Action</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Uncanny</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>School</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Vampire</p></Link> */}
                    
                </section>

                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Source</strong></p>
                        
                        <p>Web Manga</p>
                    </section>
                    <section className="details-2">
                        <p><strong>Duration of the episode</strong></p>
                    
                        <p>23 minutes</p>
                    </section>
                </section>
                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Presentation</strong></p>
                        
                        <p>2020-10-08</p>
                    </section>
                    <section className="details-2">
                        <p><strong>To</strong></p>
                    
                        <p>2020-12-31</p>
                    </section>
                </section>
                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Studio</strong></p>
                        
                        
                        <section className={darkMode? "tags-1":"tags"}>
                        <p>Production I.G</p>
                        {/* <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Production I.G</p></Link> */}
                        </section>
                    </section>
                </section>

            </section>


            <section className="trailer-portion">
                <h2>Trailer</h2>
        
                <iframe title="trailer" className="trailer" width="560" height="315" src="https://www.youtube.com/embed/aSgrNkvqnmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>


            <section className="related">
                <h2>Related</h2>
                {/* <section className="related-movies">
                <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture" width={120} height={150}/>
                <p className="movies-related-title">Movie This</p>
                </section> */}
                <section>
                        <section>
                            <img className="poster-Image" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
       
                            <p className="textOnImage-1">Movie Name</p>
                        </section>
                        <p className="movie-title">Movie Name</p>
                        <p className="rating">Rating: <span> < StarIcon style={{color: '#FF9200', fontSize: 18,marginBottom:-3}}/> 6.05</span></p>
                    </section>
            </section>


            {
                rating?
                <Modal
                  aria-labelledby="spring-modal-title"
                  aria-describedby="spring-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2 id="spring-modal-title">Rating modal</h2>
                      <p id="spring-modal-description">Rating 1</p>
                      <DiscreteSlider />
                      <p id="spring-modal-description">Rating 2</p>
                      <DiscreteSlider />
                      <p id="spring-modal-description">Rating 3</p>
                      <DiscreteSlider />
                    </div>
                  </Fade>
                </Modal>
              :<div></div>
            }

          </section>
    )
}
