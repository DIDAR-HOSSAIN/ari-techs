import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const EditSlider = ({ slider, errors }) => {
    const [title, setTitle] = useState(slider.title);
    const [description, setDescription] = useState(slider.description);
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState(slider.status ? true : false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("status", status ? 1 : 0);
        if (image) {
            formData.append("image", image);
        }

        Inertia.put(route("sliders.update", slider.id), formData, {
            forceFormData: true,
            onSuccess: () => alert("Slider updated successfully"),
            onError: (errors) => console.log(errors),
        });

    };


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Slider</h2>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.title && (
                        <span className="text-red-500 text-sm">
                            {errors.title}
                        </span>
                    )}
                </div>
                
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.description && (
                        <span className="text-red-500 text-sm">
                            {errors.description}
                        </span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                    {slider.image && (
                        <p className="text-sm text-gray-500">
                            Current image: {slider.image}
                        </p>
                    )}
                    {errors.image && (
                        <span className="text-red-500 text-sm">
                            {errors.image}
                        </span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700">
                        Active
                    </label>
                    <input
                        type="checkbox"
                        id="status"
                        checked={status}
                        onChange={(e) => setStatus(e.target.checked)}
                        className="rounded"
                    />
                    {errors.status && (
                        <span className="text-red-500 text-sm">
                            {errors.status}
                        </span>
                    )}
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Update Slider
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditSlider;
