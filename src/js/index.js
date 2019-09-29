import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base';


/** Global state of the map
 * Current recipe object
 * Shopping list object
 * Liked Recipes
 */
const state ={};


/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    // 1) get the query from view
    const query = searchView.getInput(); 
    //console.log(query);

    if (query){
        //2) new search object and to state
        state.search = new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //4) Search for recipes
        await state.search.getResults();

        //5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }

}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = () => {
    const id = window.location.hash;
    console.log(id);
}

window.addEventListener('hasgchange',controlRecipe);