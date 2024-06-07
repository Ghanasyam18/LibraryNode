import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">Publish Date</th>
                                    <th scope="col">Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Don Quixote</td>
                                    <td>Miguel de Cervantes</td>
                                    <td>2018</td>
                                    <td>$11.33</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Alice's Adventures in Wonderland</td>
                                    <td>Lewis Carroll</td>
                                    <td>2017</td>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>The Adventures of Huckleberry Finn</td>
                                    <td>Mark Twain</td>
                                    <td>2001</td>
                                    <td>$45</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Oliver Twist</td>
                                    <td>Charles Dickens</td>
                                    <td>1992</td>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>David Copperfield</td>
                                    <td>Charles Dickens</td>
                                    <td>1987</td>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Gulliver's Travels</td>
                                    <td>Jonathan Swift</td>
                                    <td>1991</td>
                                    <td>$28.99</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Pride and Prejudice</td>
                                    <td>Jane Austen</td>
                                    <td>1995</td>
                                    <td>$22</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Moby Dick</td>
                                    <td>Herman Melville</td>
                                    <td>1989</td>
                                    <td>$18.78</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Treasure Island</td>
                                    <td>Robert Louis Stevenson</td>
                                    <td>1981</td>
                                    <td>$44.50</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Crime and Punishment</td>
                                    <td>Fyodor Dostoyevsky</td>
                                    <td>1950</td>
                                    <td>$20</td>
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll