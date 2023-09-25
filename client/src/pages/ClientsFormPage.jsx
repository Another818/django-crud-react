import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createClient, deleteClient, updateClient, getClient } from "../api/clients.api";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function ClientFormPages(){
    const {register, handleSubmit, formState: {errors}, setValue} = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data =>{
        if(params.ci){
            console.log(params.ci)
            await updateClient(params.ci, data)
            toast.success('Cliente actualizado', {position: "bottom-right", style: {
                background: "#101010",
                color: 'white'
            }})
        }else{
            await createClient(data)
            toast.success('Cliente creado', {position: "bottom-right", style: {
                background: "#101010",
                color: 'white'
            }})
        }
        navigate("/client")
    })

    useEffect(()=> {
        async function loadClient() {
            if (params.ci){
                const {data} = await getClient(params.ci)
                console.log(data)
                setValue('ci', data.ci)
                setValue('nombre', data.nombre)
                setValue('apellido', data.apellido)
                setValue('direccion', data.direccion)
                setValue('telefono', data.telefono)
            }
        }
    loadClient()
    }, [])

    return(
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="C.I" 
            {...register("ci",  {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.ci && <span>this field is required</span>}
            <input 
            type="text" 
            placeholder="Nombre" 
            {...register("nombre",  {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.nombre && <span>this field is required</span>}
            <input 
            type="text"
            placeholder="Apellido" 
            {...register("apellido",  {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.apellido && <span>this field is required</span>}
            <input 
            type="text" 
            placeholder="Dirección" 
            {...register("direccion",  {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.direccion && <span>this field is required</span>}
            <input 
            type="text" 
            placeholder="Teléfono" 
            {...register("telefono",  {required: true})}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            {errors.telefono && <span>this field is required</span>}

            <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
        </form>

        {params.ci && (
            <div className="flex justify-end">
            <button className="bg-orange-600 p-3 rounded-lg w-48 mt-3" onClick={async ()=> {
            const accepted = window.confirm('Estas seguro de eliminar este cliente?')
            if (accepted){
                await deleteClient(params.ci)
                toast.success('Tarea eliminada', {position: "bottom-right", style: {
                    background: "#101010",
                    color: 'white'
                }})
                navigate("/client")
            }
        }}>Delete</button>
        </div>
        )}
        
        </div>
    )
}
