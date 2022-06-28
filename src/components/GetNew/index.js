import { useState } from "react";
import TextNew from '../TextNew'

const GetNew = () => {
    const [link, setLink] = useState('')
    const [content, setContent] =  useState(null)

    const getNews = async(_link) => {
        console.log(_link);
        fetch(_link)
        .then(response => response.text())
        .then(data => {
            const dataToRead = data.split(' data-paywall-wrapper')[1].split('id="social-media-lower"')[0]

            console.log(data);
            setContent(dataToRead);
        })
            
    }

    return ( 
    <div className="getNew">
        <div>
            <h1>anti-paywall</h1>
            <h4>Cole abaixo o link da notícia</h4>
            <input type='text' value={link} onChange={(e) => setLink(e.target.value)} />
            <button onClick={() => getNews(link)}>Ler</button>
        </div>
        <div>
            <span>{link}</span>
        </div>
        <div>
            <TextNew content={content} />
        </div>
      </div>
     );
}
 
export default GetNew;