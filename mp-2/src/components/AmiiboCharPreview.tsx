import styled from 'styled-components';
import type {AmiiboChar} from "../types";

const AllCharsDiv = styled.div `
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      background-color: #68B893;
`;

const SingleCharDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    color: #65000B;
    border: 1px solid #65000B;
    text-align: center;
    
    
`;

export default function AmiiboCharacters(props:{data:AmiiboChar[]}) {
    return(

        <AllCharsDiv>
            {
                props.data.map((char: AmiiboChar) =>
                    <SingleCharDiv key={char.id} >
                        <h1>{char.name}</h1>
                        <h4>{char.character} | {char.game_series}</h4>
                        <img src={char.image} alt={`character ${char.name} from ${char.game_series}`}/>
                        <p>{char.amiibo_series} | {char.type}</p>
                    </SingleCharDiv>)
            }
        </AllCharsDiv>
    );
}