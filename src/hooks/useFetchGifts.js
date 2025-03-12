import { useEffect, useState } from "react";
import { getGiphy } from "../helpers/GetGiphy";

export const useFetchGifts = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGiphy(category);
        setImages(newImages);
        setIsLoading(false);
    }

    const deleteImages = ( e ) => {
        const imageName = e.target.id;

        const newImages = images.filter( 
            (image) => image.id != imageName );
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
        deleteImages
    }
}
