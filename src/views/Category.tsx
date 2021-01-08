import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { data } from "../assets/data/articles.js";
// import articleRow from '../Components/article-row/articleRow';

function Category({ match }: any) {

    const [articulos, setArticulos] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const res: any = data.filter((d) => d.category === match.params.category);
        setArticulos(res);
        setLoading(false);
    }, [match]);
    
    return (
        <>
        {
            loading ? (
                <div>Cargando...</div>
            ):(
                <div className="ui container segment">
                       <h1 className="header">{ match.params.category.toUpperCase() }</h1>
                       <div className='ui divided items'>
                            {
                                articulos.map( (x: any) => (
                                    <div className='item' key={x.id}>
                                        <Link to={'/article/' + x.id} className="ui link medium rounded image">
                                            <img src={x.imageUrl} alt={x.title} />
                                        </Link>
                                        <div className="content">
                                            <Link to={'/article/' + x.id}className="header" >{x.title}</Link>
                                            <div className="meta">
                                                <span dangerouslySetInnerHTML={{ __html: x.story.substr(0, 200) }} />...
                                            </div>
                                            <div className="extra">
                                                <Link to={'/category/' + x.category}>{x.category }</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                       </div>
                </div>
            )
        }
        
        </>

    )
}

export default Category
