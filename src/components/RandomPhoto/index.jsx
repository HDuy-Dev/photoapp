import React from "react";
import { Button } from "reactstrap";
import "./styles.scss";

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};
export default function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, isInvalid } =
        props;

    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };

    return (
        <div className={`random-photo ${isInvalid ? "is-invalid" : ""}`}>
            <div className="random-photo__btn">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Ramdom a photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Ooops ... not found. Please click random again!"
                    />
                )}
            </div>
        </div>
    );
}
