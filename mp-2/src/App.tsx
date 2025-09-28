import AmiiboCharacters from "./components/AmiiboCharPreview.tsx"
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { AmiiboChar } from "./types.ts";

const AmiiboPreviewDiv = styled.div `
    margin:10px;
    padding: 4px;
    width: 400px;
    background-color: lightblue;
`;

function App(){
    const [amiibName, setAmiibName] = useState("");
    const [data, setData] = useState<AmiiboChar []>([]);

    useEffect(()=>{
        async function getCharacters(){
            const res = await fetch (
                `https://www.amiiboapi.com/api/?name=${amiibName}`
            );
            const jsonRes = await res.json();
            setData(jsonRes.data);
        }
        getCharacters().catch((e)=> console.error(e));
    }, [amiibName]);

    return(
        <div>
            <h2>Amiibo Character</h2>
            <input
                type="string"
                placeholder="Character name"
                value={amiibName}
                onChange={(e) => setAmiibName(String(e.target.value))}/>
            <p>Name of Character: {amiibName}</p>
            <div>
                {data.map((d)=> {
                    return <AmiiboPreviewDiv data={d}/>;
                })}
            </div>
        </div>
        /*<AmiiboPreviewDiv>
            <AmiiboCharacters data={data} />
        </AmiiboPreviewDiv>*/
    );
}

export default App;
