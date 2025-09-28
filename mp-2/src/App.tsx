import AmiiboCharacters from "./components/AmiiboCharPreview.tsx"
import {Title, Input, Wrapper} from "./components/AmiiboCharPreview.tsx"
import {useEffect, useState} from "react";
import type {AmiiboChar} from "./types.ts";

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
        <Wrapper>
            <Title>Amiibo Character</Title>
            <Input
                type="string"
                placeholder="Character name"
                value={amiibName}
                onChange={(e) => setAmiibName(String(e.target.value))}/>
            <p>Name of Character: {amiibName}</p>
            <div>
                 <AmiiboCharacters data = {data}/>
            </div>
        </Wrapper>
    );
}

export default App;
