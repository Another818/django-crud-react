import { useNavigate } from 'react-router-dom';

export function ClientCard({ clients }) {

    const navigate = useNavigate()

    return(
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
        
        onClick={()=> {
            navigate(`/client/${clients.ci}`)
        }}>
            <h1 className='font-bold uppercase'>{clients.nombre} {clients.apellido}</h1>
            <p className='text-slate-400'>{clients.direccion}</p>
        </div>
    );
    
}