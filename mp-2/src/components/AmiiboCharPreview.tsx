import styled from 'styled-components';
import type {AmiiboChar} from "../types";



export const Wrapper = styled.div`
    background-color: #68B893;
    margin: 0;
    padding: 0;
`

export const Title = styled.h1`
    color: #FCEA64;
    text-align: center;
    padding-top: 2%;
    
`

export const Input = styled.input`
    margin-left: 2%;
`

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
    border-radius: 5px;
    background-color: #C28D84;
    text-align: center;
    
    
`;

export default function AmiiboCharacters(props:{data:AmiiboChar[]}) {
    return(

        <AllCharsDiv>
            {
                props.data.map((char: AmiiboChar) =>
                    <SingleCharDiv key={char.id} >
                        <h1>{char.name}</h1>
                        <h4>{char.character}, {char.gameSeries}</h4>
                        <img src={char.image} alt={`character ${char.name} from ${char.gameSeries}`}/>
                        <p>{char.amiiboSeries},  {char.type}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}