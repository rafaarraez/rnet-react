import React, { useEffect, useState } from 'react'
import ArticleComponent from '../Components/article/ArticleComponent'
import data from "../assets/data/articles.json";
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
    const [article, setArticle] = useState<Object>({});
    useEffect(() => {
        const getData: Object = data.filter((d) => d.id === parseInt(match.params.id));
        setArticle({ ...article, getData });
        console.log(article);
    }, []);
    return (
        <React.Fragment>
            <div className="ui segment container">
                <div className="ui basic segment">
                    <h2 className="ui header">dsfgd</h2>
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
                        <a className="avatar">
                            <img src="" />
                        </a>
                        <div className="content">
                            <a className="author">Rafaaa</a>
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
