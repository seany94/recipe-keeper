var React = require('react');
var DefaultLayout = require('./recipecss');
var IngredientsList = require('./IngredientsList');

class Recipedetails extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <IngredientsList list={recipe}></IngredientsList>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h3 className="recipetitle">Recipe Title: {this.props.name}</h3>
                    <br />
                    ID: <span> </span>
                    {this.props.id}
                    <br />
                    Ingredients:<span> </span>
                    {recipes}
                    Instructions: <span> </span>
                    {this.props.instructions}
                    <br />
                    Date created: <span> </span>
                    {this.props.date_created}
                    <br />
                    Date edited: <span> </span>
                    {this.props.date_edited}
                    <br />
                    <br />
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipedetails;