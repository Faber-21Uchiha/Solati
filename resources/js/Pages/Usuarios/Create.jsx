import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        edad: '',
        correo: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('usuarios.store'), {
            onSuccess: () => {
                // La redirección se manejará automáticamente por Inertia
            },
            onError: (errors) => {
                // Maneja errores si es necesario
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Usuario</h2>}
        >
            <Head title="Crear Usuario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Nombre</label>
                                    <input
                                        type="text"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="form-input rounded-md shadow-sm mt-1 block w-full"
                                    />
                                    {errors.nombre && <div className="text-red-600">{errors.nombre}</div>}
                                </div>

                                <div className="mt-4">
                                    <label className="block font-medium text-sm text-gray-700">Edad</label>
                                    <input
                                        type="number"
                                        value={data.edad}
                                        onChange={(e) => setData('edad', e.target.value)}
                                        className="form-input rounded-md shadow-sm mt-1 block w-full"
                                    />
                                    {errors.edad && <div className="text-red-600">{errors.edad}</div>}
                                </div>

                                <div className="mt-4">
                                    <label className="block font-medium text-sm text-gray-700">Correo</label>
                                    <input
                                        type="email"
                                        value={data.correo}
                                        onChange={(e) => setData('correo', e.target.value)}
                                        className="form-input rounded-md shadow-sm mt-1 block w-full"
                                    />
                                    {errors.correo && <div className="text-red-600">{errors.correo}</div>}
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md" disabled={processing}>
                                        Crear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
