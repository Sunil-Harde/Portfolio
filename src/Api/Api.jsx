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
            <div className='d-grid ' >
                {movieList.map((image) => (
                    <div key={image.id} className='img ' >
                        <img
                            className=" mt-4 w-100 mb-5"
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
                        className="ms-5 mt-4 mb-5"
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
