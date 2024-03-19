import { FiLoader } from "react-icons/fi"

function Loader() {
    return (
        <div className="min-h-[90vh] flex items-center justify-center">
            <FiLoader
                size={80}
            />
        </div>
    )
}

export default Loader