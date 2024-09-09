import React, { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

const EditSlider = ({ auth, slider }) => {
    const { data, setData, put, processing, errors } = useForm({
        slider_name: slider.slider_name || "",
        image: slider.image || "",
        slider_status: slider.slider_status || "Active",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("sliders.update", slider.id), data);
    };

    return (
        <AdminDashboardLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Slider
                </h1>
            }
        >
            <Head title="Update Slider" />
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Slider Name */}
                                <div>
                                    <InputLabel
                                        htmlFor="slider_name"
                                        value="Slider Name"
                                    />
                                    <TextInput
                                        id="slider_name"
                                        name="slider_name"
                                        value={data.slider_name}
                                        className="mt-1 block w-full"
                                        autoComplete="slider_name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "slider_name",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.slider_name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Slider Status */}
                                <div>
                                    <InputLabel
                                        htmlFor="slider_status"
                                        value="Slider Status"
                                    />
                                    <div className="mt-1 flex space-x-6">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-600"
                                                value="Active"
                                                checked={
                                                    data.slider_status ===
                                                    "Active"
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "slider_status",
                                                        "Active"
                                                    )
                                                }
                                            />
                                            <span className="ml-2">Active</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-600"
                                                value="Inactive"
                                                checked={
                                                    data.slider_status ===
                                                    "Inactive"
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "slider_status",
                                                        "Inactive"
                                                    )
                                                }
                                            />
                                            <span className="ml-2">
                                                Inactive
                                            </span>
                                        </label>
                                    </div>
                                    <InputError
                                        message={errors.slider_status}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Slider Image */}
                                <div className="col-span-1 sm:col-span-2">
                                    <InputLabel
                                        htmlFor="image"
                                        value="Slider Image"
                                    />
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />

                                    <img
                                        src={`/${image}`}
                                        alt="Preview"
                                        className="mt-4 w-full max-w-sm h-auto object-cover rounded-md"
                                    />

                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex justify-center w-full items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 active:bg-indigo-600 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    {processing ? "Updating..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default EditSlider;
