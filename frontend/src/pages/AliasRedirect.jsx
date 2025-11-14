import { useParams } from "react-router-dom";

// TODO: implement this
// You can use window.location.href to redirect them, 
// but you must use it in a React Hook
const AliasRedirect = () => {
    const { alias } = useParams();
    return (
        <div className="max-h-screen flex flex-col items-center justify-center bg-white p-4 text-gray-800">
            <h1>Redirect Via Alias: {alias} </h1>
        </div>
    )
}

export default AliasRedirect;