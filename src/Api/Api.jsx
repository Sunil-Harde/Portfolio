import React, { useState, useEffect } from 'react';
import  './Api.css'
function Api() {
    const [movieList, setMovieList] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=41521122-52441f7d3ad875ffb51812a60&q=${"dog"}&image_type=photo&pretty=true`)
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data.hits);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <div className='container-fluid bg-dark min-vh-100' >
            <div className='d-grid container-fluid ms-2' >
                {movieList.map((image) => (
                    <div key={image.id} className='img  d-flex align-items-center justify-content-center ' >
                        <img
                            className=" w-100 "
                            onClick={() => setSelectedImg(image.id)}
                            src={image.largeImageURL}
                            
                            alt={image.tags}
                        />
                    </div>
                ))}
            </div>

            {selectedImg && (
                <div className='d-flex flex-wrap ms-4 justify-content-center align-items-center'>
                    <img
                        className=""
                        src={movieList.find((img) => img.id === selectedImg).largeImageURL}
                        width="500px"
                        height="400px"
                        alt=""
                    />
                </div>
            )}
        </div>
    );
}

export default Api;
