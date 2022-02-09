import styled from "styled-components";


const MovieCardContainer = styled.div`

    width: 250px;
    height:100px;
    margin:40px;
    position:relative;
    cursor: pointer;

    img  {
        position:absolute;
        top:0;
        left:0;
        z-index: 0;
        width:250px;
        object-fit: cover;
    }

    .movie-title{
        position: absolute;
        z-index: 1;
        left:0;
        bottom: 0px;
        left:1px;
        text-align: left;
        font-weight:600;
        color: #fff;
        padding:5px 10px;
        background-color: rgba(0, 0, 0, 0.44);
        line-height: 15px;
    
    }
`

export default MovieCardContainer
