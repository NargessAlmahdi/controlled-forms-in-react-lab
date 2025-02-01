import { useState } from 'react';

const Bookshelf = () => {
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  

// NEW BOOK ADDED
const [newBook, setNewBook] = useState ({
    title: '',
    author: '',

})

// CHANGES
const handleInputChange=(event) => {
    const{name, value} = event.target

    setNewBook((prevBook) => ({
        ...prevBook,
        [name]: value,
    }))

}

// FORM TO ADD NEW BOOK
const handleSubmit = (event) => {
    event.preventDefault()

    setBooks((prevBooks) => [...prevBooks, newBook])

    setNewBook({
        title: '',
        author: '',
    })
}

return(
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>

    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor='title'>Title:</label>
        <input 
        type='text'
        id='title'
        name="title"
        value={newBook.title}
        onChange={handleInputChange}/>
        </div>


        <div>
        <label htmlFor='Author'>Author:</label>
        <input 
        type='text'
        id='author'
        name="author"
        value={newBook.author}
        onChange={handleInputChange}/>
        </div>
        <button type='submit'>Add Book</button>
        </form>
        </div>


  <div className="bookCardsDiv">
    {books.length === 0 && <p>No books added yet!</p>}
    {books.length > 0 && books.map ((book, index) => (
        <div key={index} className='bookCard'>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            </div>
    ))}
    
    </div>
</div>
)
}



export default Bookshelf