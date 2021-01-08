import React, { useEffect, useState } from 'react'
import {data} from "../../assets/data/articles.js";
import avatar from '../../images/f173a2c126f4451161fe7f9055f8bcf9.jpeg'


interface Article {
    id: string;
}

function ArticleComponent({ id }: Article) {


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
                            <img src={avatar} />
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

export default ArticleComponent;
