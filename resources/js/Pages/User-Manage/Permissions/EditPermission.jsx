import React, { useState } from "react";
import axios from "axios";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";
import { Link, Head } from "@inertiajs/react";

const EditRole = ({ auth, role, permissions: initialPermissions }) => {
    const [name, setName] = useState(role.name || "");
    const [permissions, setPermissions] = useState(initialPermissions || []);
    const [selectedPermissions, setSelectedPermissions] = useState(
        role.permissions.map((perm) => perm.id) || []
    );
    const [errors, setErrors] = useState({});

    const handleCheckboxChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedPermissions((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((perm) => perm !== value)
                : [...prevSelected, value]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            await axios.patch(`/roles/${role.id}`, {
                name,
                permissions: selectedPermissions,
            });
            Inertia.visit("/roles");
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Error updating role:", error);
            }
        }
    };

    return (
        <AdminDashboardLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Permission
                </h1>
            }
        >
            <Head title="Update Permission" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 margin-tb">
                        <div className="pull-left">
                            <h2>Edit Role</h2>
                        </div>
                        <div className="pull-right">
                            <Link className="btn btn-primary" href="/roles">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                        <strong>Whoops!</strong> There were some problems with
                        your input.
                        <br />
                        <br />
                        <ul>
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="form-group">
                                <strong>Name:</strong>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="form-group">
                                <strong>Permission:</strong>
                                <br />
                                {permissions.map((permission) => (
                                    <label key={permission.id}>
                                        <input
                                            type="checkbox"
                                            value={permission.id}
                                            checked={selectedPermissions.includes(
                                                permission.id
                                            )}
                                            onChange={handleCheckboxChange}
                                            className="name"
                                        />
                                        {permission.name}
                                        <br />
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminDashboardLayout>
    );
};

export default EditRole;
