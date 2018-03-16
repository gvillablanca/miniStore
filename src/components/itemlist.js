import React, {Component} from 'react';
import propTypes from 'prop-types';
// import CircularProgress from 'material-ui/circularProgress';<--asegurarme que este es el ciclo de vida acordado
import './styles.css'

const siteSelected = 'MLC';
const categorie = '';
const searchProducts = 'https://api.mercadolibre.com/sites/MLC/search?q=ipod';
const musicProducts = 'https://api.mercadolibre.com/sites/${siteSelected}/search?q=musica';
const shoesProducts = 'https://api.mercadolibre.com/sites/${siteSelected}/search?q=calzado';
const bookProducts = 'https://api.mercadolibre.com/sites/${siteSelected}/search?q=libros';
const techProducts = 'https://api.mercadolibre.com/sites/${siteSelected}/search?q=tecnologia';
const makeupProducts = 'https://api.mercadolibre.com/sites/${siteSelected}/search?q=belleza';


class SearchProducts extends Component {
    fetch(bookProducts)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      showMake(data);
      console.log(data);
   render() {
       return ();
   }
});
}
 //exportar