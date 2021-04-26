import React from 'react';

function ProjectSection(){
    return(
        <div className="projSecBod mt-4" id="projSecBod">
            <div className="container pt-4 pb-4">
                <h1 className="projTitle mb-4">Projects</h1>

                <div className="projCard p-3 mt-4">
                    <h2>Food For Dayz</h2>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src='https://res.cloudinary.com/dj63qafw1/image/upload/v1619387287/foodForDays_pqojwb.png' width="100%"></img>
                            <div className="d-flex justify-content-center align-item-center mt-3">
                                <a className="projLink" href="https://github.com/AtifAShaikh/FoodForDays"><h5 className="mx-4">Github</h5></a>
                                <a className="projLink" href="https://atifashaikh.github.io/FoodForDays/"><h5 className="mx-4">Visit</h5></a>
                            </div>
                        </div>
                        <div className="col-7 projText">
                            <h5>
                                Food For Dayz is a website designed to make it easy to meal prep and track your macro nutrients.
                                It allows users to search for food products and recipes and get their nutritional value.
                                Once a user finds a food they like they can favorite it, and then use them to create custom meal plans, allowing them to track their calories and macronutrients.
                            </h5>
                            <div className="sep"></div>
                            <h6 className="mt-2">
                                HTML5 • CSS • Javascript • Jquery • Chart JS • Edamam Recipe Search API • USDA Food Data Central API
                            </h6>

                        </div>
                    </div>
                </div>

                <div className="projCard p-3 mt-4">
                    <h2>Woofer</h2>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src='https://res.cloudinary.com/dj63qafw1/image/upload/v1619389862/Woofer_gnsht6.png' width="100%"></img>
                            <div className="d-flex justify-content-center align-item-center mt-3">
                                <a className="projLink" href="https://github.com/IdFightGandhi/Group_Project_2"><h5 className="mx-4">Github</h5></a>
                                <a className="projLink" href="https://pacific-taiga-59353.herokuapp.com/"><h5 className="mx-4">Visit</h5></a>
                            </div>
                        </div>
                        <div className="col-7 projText">
                            <h5>
                                Woofer is a social media platform for pet owners. After signing up users can update their information, upload a profile picture, and add pets to their profiles.
                                These pets have their own profiles that can be updated and pictures of the pets can also be uploaded.
                                You can browse and search for other users, view their profiles, and send them friend requests. 
                                Once the friend request is accepted the two users will now be able to chat with each other.
                            </h5>
                            <div className="sep"></div>
                            <h6 className="mt-2">
                                Node JS • Express • Handlebars • Sequelize • MySQL • Cloudinary • Heroku
                            </h6>

                        </div>
                    </div>
                </div>

                <div className="projCard p-3 mt-4">
                    <h2>Bounce</h2>
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src='https://res.cloudinary.com/dj63qafw1/image/upload/v1619391079/bounce_kkenkk.png' width="100%"></img>
                            <div className="d-flex justify-content-center align-item-center mt-3">
                                <a className="projLink" href="https://github.com/AtifAShaikh/Question-Answer-Website"><h5 className="mx-4">Github</h5></a>
                                <a className="projLink" href="https://warm-hollows-89179.herokuapp.com/"><h5 className="mx-4">Visit</h5></a>
                            </div>
                        </div>
                        <div className="col-7 projText">
                            <h5>
                                Bounce is a question answer platform for sharing questions and ideas on the internet. 
                                Users can signup and upload a profile picture. The home page features a feed of the latest posts that the user can then filter by catagory.
                                The user can also make his/her own posts, answer other posts they have knowledge of, and follow posts to come back to them later.
                                The user can also filter their feed by their activity to follow up on posts they have made, answered, or followed.
                            </h5>
                            <div className="sep"></div>
                            <h6 className="mt-2">
                                React • Node JS •  Express • Mongoose • MongoDB • Javascript • TinyMCE • Cloudinary • Heroku
                            </h6> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectSection;