import styled from 'styled-components';
import type {AmiiboChar} from "../types";



export const Wrapper = styled.div`
    background-image: url("../assets/Ashaife-AC Leaf Wallpapers.jpeg");
    margin: 0;
    padding: 0;
`

export const Title = styled.h1`
    color: #FCEA64;
    font-size: calc(5px + 3vw);
    font-family: "Slackey", sans-serif;
    text-align: center;
    padding-top: 3%;
    text-shadow: 2px 3px 2px #DA7635;
`

export const Input = styled.input`
    margin-left: 6%;
    margin-top: 1%;
    padding: 0.5%;
    border-radius: 5px;
    background-color: #E7B89D;
    border: 1px solid #65000B;
    accent-color: #65000B;
    font-size: calc(2px + 1vw);
    font-family: "Marker Felt", sans-serif;
`

export const Subtitle = styled.p` 
    margin-left:6%;
    margin-top: 1%;
    font-size: calc(2px + 2vw);
    font-family: "Slackey", sans-serif;
    color: #65000B;
`

const Image = styled.img`
    display: block;
    max-width: 55%;
    justify-content: center;
    margin: 3%;
`

const AllCharsDiv = styled.div `
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: center;
      box-sizing: border-box;
      background-image: url("../assets/Ashaife-AC Leaf Wallpapers.jpeg");
`;

const SingleCharDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 25%;
    max-width: 35%;
    margin: 4%;
    padding: 2%;
    color: #65000B;
    border: 2px solid #65000B;
    border-radius: 8px;
    background-color: #E7B89D;
    text-align: center;
    align-items: center;
    box-shadow: 2px 3px 10px #DA7635;
    
    img{
        transition: transform 50ms ease-in-out;
    }
    
    &:hover {
        background-color: #FCEA64;
        
        h1, h4, p{
            visibility: hidden;
        }
        
        img {
            transform: Scale(150%) translateY(-4%);
        }
        
    }
    
`;

export default function AmiiboCharacters(props:{data:AmiiboChar[]}) {
    return(

        <AllCharsDiv>
            {
                props.data.map((char: AmiiboChar) =>
                    <SingleCharDiv key={char.id} >
                        <h1>{char.name}</h1>
                        <h4>{char.character}, {char.gameSeries}</h4>
                        <Image src={char.image} alt={`character ${char.name} from ${char.gameSeries}`}/>
                        <p>{char.amiiboSeries},  {char.type}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}