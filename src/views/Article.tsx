import React, { useEffect, useState } from 'react'
import {data} from "../assets/data/articles.js";
import avatar from '../assets/images/f173a2c126f4451161fe7f9055f8bcf9.jpeg'

import {
    RouteComponentProps
} from "react-router-dom";
type TParams = { id: string };
interface getData {
    id: number;
    featured: boolean;
    title: string;
    story: string;
    imageUrl: string;
    category: string;
    comments: {
        avatarUrl: string;
        author: string;
        date: string;
        comment: string;
    };
}
function Article({ match }: RouteComponentProps<TParams>) {

    const [article, setArticle] = useState<any[]>([]);

    const getData = () => {
        const algo = []
        const res: any = data.filter((d) => d.id === parseInt(match.params.id));
        res.forEach((element: any) => {
           algo.push(element);
        });
        
        console.log(article);
        console.log(res);
        
    }
    
    useEffect(() => getData(), []);

    return (
        <React.Fragment>
            <div className="ui segment container">
                <div className="ui basic segment">
                    <h2 className="ui header">dsfgdsssdd</h2>
                    <img alt="gfvhfg"
                        src=""
                        className="ui centered huge image" />
                </div>
                <div className="ui text container">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo expedita exercitationem cum corporis odio quis velit commodi recusandae ratione. Consequuntur iusto suscipit, quis necessitatibus esse et non sed saepe.
                </div>
            </div>
            <div className="ui segment container">
                <div className="ui comments">
                    <h3 className="ui dividing header">Comentarios</h3>
                    <div className="comment">
                        <div className="avatar">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="content">
                            <span className="author">Rafa</span>
                            <div className="metadata">
                                <span className="date">12/12/2020</span>
                            </div>
                            <div className="text">
                                Cooomet
                                </div>
                        </div>
                    </div>
                    <form className="ui reply form">
                        <div className="field">
                            <label htmlFor="comment">Escriba su comentario:</label>
                            <textarea name="comment" id="comment"></textarea>
                        </div>
                        <button type="submit" className="ui blue labeled submit icon button">
                            <i className="icon edit"></i> Publicar comentario
                </button>
                    </form >
                </div>
            </div >
        </React.Fragment >
    )
}

export default Article
