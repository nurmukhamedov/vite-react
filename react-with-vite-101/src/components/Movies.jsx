import useFetch from "./UseFetch"
import useForm from "./UseForm"

const Movies = () => {

    const { data, loading, error } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=9fb0a1aac1518937a0a495440a1ef66f');

    if (loading) {
        return <div>Loading Movies...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>Movies</div>
    )
}

export default Movies