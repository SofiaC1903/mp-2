import styled from 'styled-components';
import type {AmiiboChar} from "../types";

/*const ArtworkPreviewDiv = styled.div `
      margin:10px;
      padding: 4px;
    width: 400px;
    background-color: lightblue;
`;*/

export default function AmiiboCharacters({data}:{data:AmiiboChar}) {
    return(


   /* <div>
        <h2>Artworks</h2>
        <input
            type="number"
            placeholder="Number of artworks"
            value={numArtworks}
            min={1}
            onChange={(e) => setNumArtworks(Number(e.target.value))}/>
        <p>Number of Artworks: {numArtworks}</p>
        <div>
            {artworks.map((a)=> {
                return <ArtworkPreview artwork={a}/>;
            })}
        </div>
    </div>*/
    );
}