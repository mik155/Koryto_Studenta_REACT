import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBriefcase, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const RecipeList = ( {recipes} ) =>
{
        return recipes.map( (recipe) => {
            console.log(recipe)
            return (
                    <section className="recipes">
                    <Link to = {'http://localhost:9000/recipes/' + recipe.id } >
                        <div className="recipe-1" >
                            <img src={recipe.imagePath} alt ='img error'/>
                            <div className="recipe-stat">
                                <div classNAme="recipe-title">
                                    <h3>{recipe.name}</h3>
                                </div>
            
                                <div className="recipe-rate">
                                    <div className="recipe-rate-specific">
                                        <FontAwesomeIcon icon={faHeartSolid} /> 
                                    <div id ="likes">
                                            {recipe.likes}
                                        </div>
                                    </div>
            
                                    <div className="recipe-rate-specific" id="prep_time">
                                    <FontAwesomeIcon icon={faBell} /> 
                                        { recipe.minutesToMake}
                                    </div>
            
                                    <div className="recipe-rate-specific" id="ingr_num">
                                        <FontAwesomeIcon icon={faBriefcase} /> 
                                        { recipe.ingriedientNumber }
                                    </div>
                                </div>
            
                            </div>
                            <div id="add-fav">
                                { recipe.isFav && <FontAwesomeIcon icon={faHeartSolid} />} 
                                { !recipe.isFav && <FontAwesomeIcon icon={faHeartRegular}/>} 
                            </div>
                        </div>
                    </Link>
                </section>
            );
        })
}

export default RecipeList;