import React from 'react';

export default () => {
    return (
        // mt = margin top, p = padding
        <footer className="bg-dark text-white mt-5 p-4 text-center">

<a class="fb-ic">
                        <i class="fab fa-facebook-f fa-lg text-light mr-md-5 mr-3 fa-2x"> </i>
                    </a>

                    <a class="tw-ic">
                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>

                    <a class="youtube-ic">
                        <i class="fab fa-youtube fa-lg text-danger mr-md-5 mr-3 fa-2x"> </i>
                    </a>

                    <a class="li-ic">
                        <i class="fab fa-linkedin-in fa-lg text-light mr-md-5 mr-3 fa-2x"> </i>
                    </a>

                    <a class="ins-ic">
                        <i class="fab fa-instagram fa-lg text-warning mr-md-5 mr-3 fa-2x"> </i>
                    </a>

                    <a class="pin-ic">
                        <i class="fab fa-pinterest fa-lg text-danger fa-2x"> </i>
                    </a>
                    <br></br>
                    <br></br>

            Copyright &copy; {new Date().getFullYear()} DevArena
        </footer>
    );
};
