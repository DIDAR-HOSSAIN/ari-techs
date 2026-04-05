import React from "react";
import { Head, useForm } from "@inertiajs/react";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

const CreateSlider = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        image: "",
        status: "",
        user_name: "",
    });

    console.log('slider create', data)

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("sliders.store"));
    };

    return (
        <AdminDashboardLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Slider
                </h1>
            }
        >
            <Head title="Create Slider" />
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Title Name */}
                                <div>
                                    <InputLabel
                                        htmlFor="title"
                                        value="Title"
                                    />
                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "title",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>

                                {/* description */}
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />
                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.description}
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
                                        name="image"
                                        className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Slider Status */}
                                <div>
                                    <InputLabel
                                        htmlFor="status"
                                        value="Slider Status"
                                    />
                                    <div className="mt-1 flex space-x-6">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-600"
                                                value="Active"
                                                checked={
                                                    data.status ===
                                                    ""
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "status",
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
                                                    data.status ===
                                                    "Inactive"
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "status",
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
                                        message={errors.status}
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
                                    {processing ? "Creating..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default CreateSlider;
