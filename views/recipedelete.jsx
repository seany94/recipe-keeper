var React = require('react');
var DefaultLayout = require('./recipecss');
var IngredientsList = require('./IngredientsList');

class Recipedelete extends React.Component{
    render(){
        const recipes = this.props.ingredients.map( recipe => {
            return <IngredientsList list={recipe}></IngredientsList>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h3>Successfully deleted recipe, take a look at the details that have been deleted </h3>
                    <br />
                    Recipe ID: <span> </span>
                    {this.props.id}
                    <br />
                    Recipe Title: <span> </span>
                    {this.props.name}
                    <br />
                    Ingredients: <span> </span>
                    {recipes}
                    <br />
                    Instructions: <span> </span>
                    {this.props.instructions}
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

module.exports = Recipedelete;