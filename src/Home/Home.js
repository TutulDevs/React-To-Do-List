import React, { useState } from "react";
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

import './Home.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {

    // For Modal 
    const [modal, setModal] = useState(false);
    const modalHandler = () => (modal ? setModal(false) : setModal(true));

    let transform;
    modal
        ? (transform = { transform: "translateY(0)", transitionDelay: "0s" })
        : (transform = {
            transform: "translateY(-100vh)",
            transitionDelay: "0.5s",
        });
    let scale;
    modal
        ? (scale = { transform: "scale(1) rotate(0deg)" })
        : (scale = { transform: "scale(0) rotate(10deg)" });

    
    // for BigButton Route
    let link = <button className='BigButton' onClick={modalHandler} >Try for Free</button> ;
    if (props.isAuthenticated) {
        link = <Link to='/dashboard' className='BigButton'>See Your To-Dos</Link> ;
    }

    let ModalDisplay = <Modal translate={transform} scale={scale} close={modalHandler}>
      <Form />
    </Modal>;


  return (
    <div className="Home">
      <div className='Container'>

        { !props.isAuthenticated ? ModalDisplay : null }

        <h1 className='Headline'>React To-Do List</h1>

        <p>
          This project built for practicing Reactjs, Reduxjs and Firebase. 
        </p>
        <p>
          This project is built and maintained by <a href='https://github.com/TutulDevs' rel='noreferrer' target='_blank'>Tutul</a>. You can try this app by registering. Your data will be safe and not abused.
        </p>

          { link }

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps)(Home);
