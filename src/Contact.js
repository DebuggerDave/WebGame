import React from 'react';

import bugRectangle from './img/contact_bug_rectangle.webp';
import bugSquare1 from './img/contact_bug_square_one.webp';
import bugSquare2 from './img/contact_bug_square_two.webp';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <img src={bugRectangle} alt='Bug background' />
                <img src={bugSquare1} alt='bug picture' />
                <img src={bugSquare2} alt='Bug picture' />
                <h1>Contact</h1>
                <h3>Thank you for visitng our website...</h3>
                <h3>Good Luck in the hobby!</h3>
                <h5>Shipping Info</h5>
                <p>
                    Invertebrates ship Monday and Tuesday with 2 day priority shipping for live arrival guarantee.
                </p>
                <p>
                    Feel free to contact us with questions or special requests:
                </p>
            </div>
        );
    }
}

export default Contact
