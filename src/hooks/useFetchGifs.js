import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);    
        setIsLoading(false);    
    }

    /**
     * useEffect se usa para ejecutar una función de acuerdo a las dependencias que contenga
     */
    useEffect(()=>{
        getImages();
    }, []); // dependencias, vacío solo se dispara la primera vez que se construye

    return {
        images,
        isLoading
    }
}