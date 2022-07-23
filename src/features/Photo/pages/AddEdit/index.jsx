import React from "react";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./styles.scss";

export default function AddEdit() {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😜" />
            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}
