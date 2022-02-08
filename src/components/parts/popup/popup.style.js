import styled from "styled-components";



const PopUpContainer = styled.div`
position: fixed;
overflow: scroll;
top: 0px;
z-index: 10000000;
height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0, 0.8);
// display:${(props)=>props.isOpen ? 'block':'none'};


.close_button {
  position: absolute;
  z-index:1000000;
  top: 10px;
  right: 10px;

 background-color:#000;
  border:2px solid #000;
  height:40px;
  width:40px;
  border-radius:50%;
  color:#fff;
  font-weight:900;
  font-size:1.5;
  text-align:center;
  cursor: pointer;

  
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  min-height: 100vh;
  background-color: rgba(29, 29, 29, 1);
  color: #fff;
  margin-top: 5%;
  border-radius: 10px;

  * {
    display: block;
  }

  .hero {
    position: relative;
    height: 50vh;
    width: 100%;
    background-image: linear-gradient(
        to top,
        rgba(29, 29, 29, 1),
        rgba(29, 29, 29, 0)
      ),
      url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: contain,cover;
   // background-position: center;

    
    .hero_content {
      position: absolute;
      bottom: 1em;
      width: 100%;
      padding: 10px;

      * {
        text-align: left;
        color: #fff;
      }

      .title {
        font-size: 4em;
        font-weight: 800;
      }

      .buttons {
        display: flex;

        .btn {
          font-weight: 700;
        }
        .btn_play {
          display: flex;
          align-items: center;
          justify-content: space-evently;
          background-color: #fff;
          color: rgba(29, 29, 29, 1);

          img {
            width: 35px;
          }
        }
      }
    }
  }

  .movie_details {
    display: flex;
    gap: 20px;
    text-align: left;
    font-size: 1.1em;
    padding: 20px;

    .description {
      width: 60%;
    }

    .other_details {
      display: flex;
      flex-direction: column;
      width: 40%;
    }
  }
}
`;

export default PopUpContainer