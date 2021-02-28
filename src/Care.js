import React from 'react';

import bugRectangle from './img/care_bug_rectangle.webp';
import pdf from './img/pdf.webp';
import bugSquare1 from './img/care_bug_square_one.webp';
import bugSquare2 from './img/care_bug_square_two.webp';

class Care extends React.Component {
    render() {
        return (
            <div>
                <img src={bugRectangle} alt='Bug background' />
                <img src={bugSquare1} alt='bug picture' />
                <img src={bugSquare2} alt='Bug picture' />
                <img src={pdf} alt='PDF' />
                <h1>Care Sheets</h1>
                <h3>Isopod Care</h3>
                <h5>How not to kill your isopods</h5>
                <p>
                    Isopods are tough bois, but not invinvible. THey need three things to live:
                </p>
                <ul>
                    <li>Food</li>
                    <li>Water</li>
                    <li>Somewhere to Hide</li>
                </ul>
                <h4>Isopod Care Sheets</h4>
                <p>
                    For a more in depth look into isopod care, I have created this care sheet.
                </p>
                <p>
                    By "sheet" I mean a small book.
                </p>
                <h3>Isopod Maintenance</h3>
                <p>
                    A healthy isopod is a happy isopod. To keep isopods healthy you will need a few things:
                </p>
                <ul>
                    <li>Food- They eat the leaves we rake from the fall</li>
                    <li>Water- I use water from a spray bottle, they think its raining</li>
                    <li>Someplace to hide- Egg crates are like little houses</li>
                    <li>Bonus food- They love fish flakes and vegetables</li>
                    <li>Clean living- When there's too much poop, take it out</li>
                    <li>Temperature- Don't burn them out and don't freeze them</li>
                </ul>
            </div>
        );
    }
}

export default Care
