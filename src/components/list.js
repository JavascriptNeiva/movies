import React from 'react';
import Item from './item';
import Input from './input';



export default class List extends React.Component {

    render(){
        const Search =[{title:'batman1',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman2',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman3',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman4',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman5',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman6',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman7',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman8',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman9',year:1996,type:'movie',Poster:'urlImagen'},
                        {title:'batman10',year:1996,type:'movie',Poster:'urlImagen'}
                    ]
        const totalResult = 50000;
        return(
            <div>
                <h1>List Movies</h1>
                <div> 
                    <Input/>
                    <div>
                        <h3>Results: { totalResult }</h3>
                        { Search.map((item,index) => <Item search={ item }  />)}
                    </div>
                    
                </div>
            </div>
        );
    }
}



