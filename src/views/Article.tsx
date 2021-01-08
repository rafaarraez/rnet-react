import React, { useEffect, useState } from 'react'
import { data } from "../assets/data/articles.js";
import avatar from '../assets/images/f173a2c126f4451161fe7f9055f8bcf9.jpeg'

import {
    RouteComponentProps
} from "react-router-dom";
type TParams = { id: string };
interface IData {
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

    const [art, setArt] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const getData = () => {
        const res: any = data.filter((d) => d.id === parseInt(match.params.id));
        setArt(res[0]);
        setLoading(false);
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <React.Fragment>
            {loading ? (
                <div>Loading...</div>
            ) : (
                    <>
                        <div className="ui segment container">
                            <div className="ui basic segment">
                                <h2 className="ui header">{art.title}</h2>
                                <img alt={art.title}
                                    src={art.imageUrl}
                                    className="ui centered huge image" />
                            </div>
                            <div className="ui text container" dangerouslySetInnerHTML={{ __html: art.story }} />
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
                                </form>
                            </div>
                        </div>
                    </>
                )}
        </React.Fragment >
    )
}

export default Article
