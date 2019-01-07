import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {getBookQuery} from '../queries/queries'

class BookDetails extends Component {
    displayBookDetails(){
        const {book} = this.props.data
        console.log('book', book)
        if(book){
            return (
            <div>
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author && book.author.name}</p>
                <p>books</p>
                <ul className="other-books">
                    {book.author && book.author.books.map(item=>{
                        return (<li key={item.id}>{item.name}</li>)
                    })}
                </ul>
            </div>)
        } else {
            return (<div>No books</div>)
        }
    }

    render() {
        console.log('detail',this.props)
        return (
            <div id="bookDetail">
                {this.displayBookDetails()}
            </div>
        )
    }
}

export default graphql(getBookQuery,{
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)