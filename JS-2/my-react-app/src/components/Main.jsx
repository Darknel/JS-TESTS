import React from 'react';

const Main = () => {
    return (
        <main class="main">
            <div class="main__image"></div>
            <div class="main__personal">
                <div class="main__avatar">
                    <img src="dsafsdfsfds" alt="asdfsaff" />
                </div>
                <div class="main__data">
                    <span>Evgen Kushnir</span>
                    <ul class="main__list">
                        <li>Date of Birth: 24 August</li>
                        <li>City: Lviv</li>
                        <li>Education: CHDTU'19</li>
                        <li>Web Site: https://github.com/Darknel</li>
                    </ul>
                </div>
            </div>
            <form class="main__form">
                <fieldset>
                    <legend>My posts</legend>
                    <input type="textarea" class="main__text" id="text" placeholder="your news..." />
                    <input type="submit" class="main__button" />
                </fieldset>
            </form>
        </main>
    );
}

export default Main;