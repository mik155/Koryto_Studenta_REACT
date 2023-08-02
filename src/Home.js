import Recipelist from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => 
{
    const {data:recipes, error, isPending} = useFetch('/api/v1/recipe/all');
    return (
        <div className="Home">
            {error && <div>Fetch data error.</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <Recipelist recipes = {recipes}/> }
        </div>
    );
}

export default Home;