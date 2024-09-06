import React from "react";
import { Head, useForm } from "@inertiajs/react";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";

const CreateReference = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        slider_name: "",
        image: "",
        slider_status: "",
    });

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
            <Head title="Create Slidr" />
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="slider_name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Slider Name
                                    </label>
                                    <input
                                        id="slider_name"
                                        type="text"
                                        value={data.slider_name}
                                        onChange={(e) =>
                                            setData(
                                                "slider_name",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                    {errors.slider_name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.slider_name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <InputLabel htmlFor="slider_status">
                                        Slider Status:
                                    </InputLabel>
                                    <div className="mt-1">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-600 border-gray-300"
                                                value="Collected"
                                                checked={
                                                    data.slider_status ===
                                                    "Collected"
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "slider_status",
                                                        "Collected"
                                                    )
                                                }
                                            />
                                            <span className="ml-2">
                                                Collected
                                            </span>
                                        </label>

                                        <label className="inline-flex items-center ml-6">
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-600 border-gray-300"
                                                value="Not Collected"
                                                checked={
                                                    data.slider_status ===
                                                    "Not Collected"
                                                }
                                                onChange={() =>
                                                    setData(
                                                        "slider_status",
                                                        "Not Collected"
                                                    )
                                                }
                                            />
                                            <span className="ml-2">
                                                Not Collected
                                            </span>
                                        </label>
                                    </div>
                                    <InputError
                                        message={errors.slider_status}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="image"
                                        value="Image 1"
                                    />
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>
                                
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-600 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    {processing ? "Creating..." : "Create"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default CreateReference;
