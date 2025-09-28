import AmiiboCharacters from "./components/AmiiboCharPreview.tsx"
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {AmiiboChar} from "./types.ts";

const AmiiboPreviewDiv = styled.div`
    margin: 10px;
    padding: 4px;
    width: 400px;
    background-color: lightblue;
`;

function App() {
    const [amiibName, setAmiibName] = useState("");
    const [data, setData] = useState<AmiiboChar[]>([]);

    useEffect(() => {
        async function getCharacters() {
            const res = await fetch(
                `https://www.amiiboapi.com/api/amiibo/?name=${amiibName}`
            );
            const jsonRes = await res.json();
            setData(jsonRes.amiibo);
        }

        getCharacters()
            .then(() => console.log("Data fetched succesfully"))
            .catch((e:Error) => console.log("Error experienced:" + e));
    }, [amiibName]);

    return (
        <div>
            <h2>Amiibo Character</h2>
            <input
                type="string"
                placeholder="Character name"
                value={amiibName}
                onChange={(e) => setAmiibName(String(e.target.value))}/>
            <p>Name of Character: {amiibName}</p>
            <AmiiboPreviewDiv>
                 <AmiiboCharacters data = {data}/>
            </AmiiboPreviewDiv>
        </div>
    );
}

export default App;
