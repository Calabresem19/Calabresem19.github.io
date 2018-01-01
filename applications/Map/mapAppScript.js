//window.onload = addListeners;
var map;
var markers = [];
var infowindows = [];
var rightArrow;
var leftArrow;
var x = 1;

/*function addListeners() {
  rightArrow = document.getElementById('rightArrow');
  rightArrow.onclick = handleRightArrow;

  leftArrow = document.getElementById("leftArrow");
  leftArrow.onclick = handleLeftArrow;

};*/



//new google.maps.Marker({position: markerLocation.pittsburghLocations.upperStClair, map: map});



var markerLocation = {

    pittsburghLocations: {

        pittsburgh: {
            name: "pittsburgh",
            lat: 40.44062479999999,
            lng: -79.99588640000002,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Pittsburgh</h1>' +
                '<div id="bodyContent">' +
                '<p>Pittsburgh (/ˈpɪtsbərɡ/ pits-burg) is a city in the Commonwealth of Pennsylvania in the United States, and is the county seat of Allegheny County. The Combined Statistical Area (CSA) population of 2,659,937 is the largest in both the Ohio Valley and Appalachia, the second-largest in Pennsylvania after Philadelphia and the 20th-largest in the U.S. Located at the confluence of the Allegheny and Monongahela rivers, which form the Ohio River, Pittsburgh is known as both "the Steel City" for its more than 300 steel-related businesses, and as the "City of Bridges" for its 446 bridges.[3]  ' +
                '<br><a href=https://en.wikipedia.org/wiki/Pittsburgh>Learn More About Pittsburgh!</a> ' +

                '</div>' +
                '</div>'

        },

        upperStClair: {
            name: "upperStClair",
            lat: 40.320715,
            lng: -80.086033,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Upper St. Clair</h1>' +
                '<div id="bodyContent">' +
                '<p>An affluent suburb located about 10 miles (16 km) south of Pittsburgh, Upper St. Clair possesses a nationally recognized school district. The population was 19,229 at the 2010 census.</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Upper_St._Clair_Township,_Allegheny_County,_Pennsylvania>Learn More About Upper St. Clair!</a> ' +

                '</div>' +
                '</div>'
        },
        southSideFlats: {
            name: "southSideFlats",
            lat: 40.428535,
            lng: -79.976918,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">South Side Flats</h1>' +
                '<div id="bodyContent">' +
                "<p>The South Side Flats is a neighborhood in Pittsburgh, Pennsylvania's South Side area. It is located just south of the Monongahela River. The neighborhood has one of the City of Pittsburgh’s largest concentrations of 19th century homes which has prompted outsiders to call the neighborhood the City’s Georgetown.[4] It includes many bars and restaurants as well as residences. The main throughway in the South Side Flats is East Carson Street. This street is home to a significant portion of Pittsburgh's nightlife.</p>" +
                '<br><a href=https://en.wikipedia.org/wiki/South_Side_Flats_(Pittsburgh)>Learn More About SouthSide Flats!</a> ' +

                '</div>' +
                '</div>'
        },
        thePoint: {
            name: "thePoint",
            lat: 40.441797,
            lng: -80.012784,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">The Point</h1>' +
                '<div id="bodyContent">' +
                '<p>Point State Park (locally known as The Point) is a Pennsylvania state park on 36 acres (150,000 m2) in Downtown Pittsburgh, Allegheny County, Pennsylvania, USA, at the confluence of the Allegheny and Monongahela rivers, forming the Ohio River.</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Point_State_Park>Learn More About the Point!</a> ' +

                '</div>' +
                '</div>'
        },
        stripDistrict: {
            name: "stripDistrict",
            lat: 40.455410,
            lng: -79.977718,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Strip District</h1>' +
                '<div id="bodyContent">' +
                '<p>The Strip District is a neighborhood in Pittsburgh, Pennsylvania in the United States. It is a one-half square mile area of land northeast of the central business district bordered to the north by the Allegheny River and to the south by portions of the Hill District. The Strip District runs between 13th and 33rd Streets and includes three main thoroughfares — Smallman St., Penn Ave., and Liberty Ave. — as well as various side streets.</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Strip_District,_Pittsburgh>Learn More About Strip District!</a> ' +

                '</div>' +
                '</div>'
        },
        oakland: {
            name: "oakland",
            lat: 40.441373,
            lng: -79.95723,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Oakland</h1>' +
                '<div id="bodyContent">' +
                "<p>Oakland is the academic and healthcare center of Pittsburgh, one of the city's major cultural centers, and is Pennsylvania's third largest Downtown. Only Center City Philadelphia and Downtown Pittsburgh can claim more economic and social activity than Oakland.[1] The neighborhood is urban and diverse and is home to several universities, museums, and hospitals, as well as an abundance of shopping, restaurants, recreational activities and students. Oakland is home to the Schenley Farms National Historic District which encompasses two city designated historic districts: the mostly residential Schenley Farms Historic District and the predominantly institutional Oakland Civic Center Historic District. It is also home to the locally designated Oakland Square Historic District.</p>" +
                '<br><a href=https://en.wikipedia.org/wiki/Oakland_(Pittsburgh)>Learn More About Oakland!</a> ' +

                '</div>' +
                '</div>'
        },
        heinzField: {
            name: "heinzField",
            lat: 40.446928,
            lng: -80.015739,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Heinz Field</h1>' +
                '<div id="bodyContent">' +
                "<p>Heinz Field is a stadium located in the North Shore neighborhood of Pittsburgh, Pennsylvania, United States. It primarily serves as the home to the Pittsburgh Steelers of the National Football League (NFL) and the Pittsburgh Panthers of the National Collegiate Athletic Association (NCAA). The stadium opened in 2001, after the controlled implosion of the teams' previous stadium, Three Rivers Stadium. The stadium is named for the locally based H. J. Heinz Company, which purchased the naming rights in 2001. It hosted the 2011 NHL Winter Classic between the Pittsburgh Penguins and Washington Capitals on January 1, 2011. On September 10, 2016 it hosted the Keystone Classic, which featured a renewal of the Penn State-Pitt football rivalry, setting a new attendance record at 69,983 people." +
                '<br><a href=https://en.wikipedia.org/wiki/Heinz_Field>Learn More About Heinz Field!</a> ' +

                '</div>' +
                '</div>'
        },
        PPGPaintsArena: {
            name: "PPGPaintsArena",
            lat: 40.439577,
            lng: -79.989284,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">PPG Paints Arena</h1>' +
                '<div id="bodyContent">' +
                "<p>PPG Paints Arena[7] is a multi-purpose indoor arena in Pittsburgh, Pennsylvania that serves as home to the Pittsburgh Penguins of the National Hockey League (NHL), and was the home of the Arena Football League's (AFL) Pittsburgh Power from 2011 to 2014. Construction was completed on August 1, 2010,[8] and the arena opened in time for the 2010–11 NHL season.[9] It replaced the Penguins' former arena, Civic Arena (formerly known as Mellon Arena), which was completed in 1961. A ceremonial ground-breaking was held on August 14, 2008. The arena is the first Leadership in Energy and Environmental Design (LEED) gold-certified arena in both the NHL and AFL.[10] As soon as the arena opened in 2010 it was lauded as one of the best arenas in the world, winning both Best New Major Concert Venue in the Pollstar Concert Industry Awards[11] and Best NHL Arena in the Sports Business Journal reader poll.[12] The arena was originally named Consol Energy Center after Consol Energy purchased the naming rights in December 2008; in October 2016, the building was renamed after PPG Industries took over the naming rights.[13][14]</p>" +
                '<br><a href=https://en.wikipedia.org/wiki/PPG_Paints_Arena>Learn More About PPG Paints Arena</a> ' +

                '</div>' +
                '</div>'
        }
    },

    personalLocations: {
        USCHighschool: {
            name: "USCHighschool",
            lat: 40.334751,
            lng: -80.070774,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Upper St. Clair HighSchool</h1>' +
                '<div id="bodyContent">' +
                '<p>Home of the Upper St Clair Panthers. This is where I attended High School. Upper St Clair is known around the area as a very prestigious public High School</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Upper_St._Clair_High_School>Learn More About Upper St. Clair High School!</a> ' +

                '</div>' +
                '</div>'
        },
        RE360: {
            name: "RE360",
            lat: 40.421170,
            lng: -79.992824,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">RE360</h1>' +
                '<div id="bodyContent">' +
                '<p>A largest single family home buyer in the Pittsburgh Area. Located in the Southside Flats. This is where I interned during my summers in college and helped mold me into a person</p>' +
                '<br><a href=http://www.re360co.com/>Learn More About RE360!</a> ' +

                '</div>' +
                '</div>'
        },
        chesterField: {
            name: "chesterField",
            lat: 40.440282,
            lng: -79.963111,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Chesterfield Road</h1>' +
                '<div id="bodyContent">' +
                '<p>Street I lived on for a part of college located in the neighbourhood of Oakland</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Oakland_(Pittsburgh)>Learn More About Oakland!</a> ' +

                '</div>' +
                '</div>'
        },
        Duquesne: {
            name: "Duquesne",
            lat: 40.436801,
            lng: -79.990828,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Duquesne University</h1>' +
                '<div id="bodyContent">' +
                '<p>Duquesne University of the Holy Spirit (/djuːˈkeɪn/) is a private Catholic university in Pittsburgh, Pennsylvania, United States. Founded by members of the Congregation of the Holy Spirit, Duquesne first opened its doors as the Pittsburgh Catholic College of the Holy Ghost in October 1878 with an enrollment of 40 students and a faculty of six. In 1911, the college became the first Catholic university in Pennsylvania. It is the only Spiritan institution of higher education in the world.[3]</p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Duquesne_University>Learn More About Duquesne University!</a> ' +

                '</div>' +
                '</div>'
        },
        Rockwell: {
            name: "Rockwell",
            lat: 40.437545,
            lng: -79.993642,
            content: '<div id="content">' +
                '<div id="siteNotice">' +

                '<h1 id="firstHeading" class="firstHeading">Rockwell Hall </h1>' +
                '<div id="bodyContent">' +
                '<p>Rockwall hall is the center of the Duquesne business school. It was where all my classes were located. It also housed all the administrative parts of my educational experience. </p>' +
                '<br><a href=https://en.wikipedia.org/wiki/Duquesne_University>Learn More About Rockwell Hall!</a> ' +

                '</div>' +
                '</div>'
        }
    },


};



var model = {
    slide: [1, 2, 3, 4, 5],
    slidePostion: 0,
    slidePostionMover: function(direction) {
        if (direction == "right" & model.slidePostion < 5 & model.slidePostion > -1) {
            model.slidePostion = model.slidePostion + 1;



        } else if (direction == "left" & model.slidePostion < 6 & model.slidePostion > 0) {
            model.slidePostion = model.slidePostion - 1;

        }
    },


};




var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("text")
        messageArea.innerHTML = msg;

    },




    position: model.slidePostion,
    slideText: function() {
        if (model.slidePostion == 0) {
            this.displayMessage("<h2>WELCOME !</h2>");
        } else if (model.slidePostion == 1) {
            this.displayMessage("<p>Above is ariel view of the city of Pittsburgh which is my hometown. I highlighted important landmarks and places that were important to me while growing up. Each position will be marked on the map as you click through the slides. Each marker is clickable and will have more information about the marker.</p>");

        } else if (model.slidePostion == 2) {
            this.displayMessage("<p>First, let us look at some the famous neighborhood and landmarks of the city of Pittsburgh that have had a large impact on my life. Feel free to examine the areas by clicking the markers on the map!</p>");
        } else if (model.slidePostion == 3) {
            this.displayMessage("<p>Next, let us look at the neighborhoods above and look at specific places I found to be important locations for my life.</p>");
        } else if (model.slidePostion == 4) {
            this.displayMessage("<p>Here we have these same locations but with the addition of the neighborhoods and landmarks added back in. </p>");
        } else if (model.slidePostion == 5) {
            this.displayMessage('<p>Feel free to use the map above to explore around the city! If you have any questions feel free to reach out to me using the </p> <a href ="../../contact.html">contact form</a>');
        }

    },

};

var controller = {

    ProcessRequest: function(side) {
        if (side == "right") {
            model.slidePostionMover("right");
        } else if (side == "left") {
            model.slidePostionMover("left");
        }
        view.slideText();
        //view.updateMap;
    },


};

function handleRightArrow() {

    controller.ProcessRequest("right");

};

function handleLeftArrow() {
    controller.ProcessRequest("left");

};

function initMap() {
    //USE ARRAY TO MAKE MARKERS
    var pittsburgh = {
        lat: 40.44062479999999,
        lng: -79.99588640000002
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: pittsburgh
    });
    var marker = new google.maps.Marker({
        position: pittsburgh,
        map: map,
        title: 'Pittsburgh'

    });



    var contentString = {
        pittsburgh: '<div id="content">' +
            '<div id="siteNotice">' +

            '<h1 id="firstHeading" class="firstHeading">Pittsburgh</h1>' +
            '<div id="bodyContent">' +
            '<p>Pittsburgh (/ˈpɪtsbərɡ/ pits-burg) is a city in the Commonwealth of Pennsylvania in the United States, and is the county seat of Allegheny County. The Combined Statistical Area (CSA) population of 2,659,937 is the largest in both the Ohio Valley and Appalachia, the second-largest in Pennsylvania after Philadelphia and the 20th-largest in the U.S. Located at the confluence of the Allegheny and Monongahela rivers, which form the Ohio River, Pittsburgh is known as both "the Steel City" for its more than 300 steel-related businesses, and as the "City of Bridges" for its 446 bridges.[3]  ' +
            '<br><a href=https://en.wikipedia.org/wiki/Pittsburgh>Learn More About Pittsburgh!</a> ' +

            '</div>' +
            '</div>'
    };



    var infowindow = new google.maps.InfoWindow({
        content: markerLocation.pittsburghLocations.pittsburgh.content
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });



    var rightArrow = document.getElementById('rightArrow');
    var leftArrow = document.getElementById("leftArrow");

    function removeMarkers() {
        for (i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        };
    };

    function removeInfoWindows() {
        infowindows = [];
    };



    // adds pittsburgh neighborhoods to the Map
    google.maps.event.addDomListener(rightArrow, 'click', function(location) {
            handleRightArrow();

            function addMarkers(location) {

                for (prop in location) {

                    markers.push(new google.maps.Marker({
                        name: location[prop].name,
                        position: location[prop],
                        map: map,
                        animation: google.maps.Animation.DROP,
                        content: location[prop],
                        addListenerToMaker: function() {

                            this.addListener('click', function() {



                                for (i = 0; i < markers.length; i++) {
                                    if (this.name == infowindows[i].name) {
                                        infowindows[i].open(map, this);
                                    }
                                }

                            })
                        }
                    }));

                    infowindows.push(new google.maps.InfoWindow({
                        name: location[prop].name,
                        content: location[prop].content

                    }));


                    i++;
                };
                for (i = 0; i < markers.length; i++) {
                    var location = markers[i];
                    location.addListenerToMaker();

                };
            };


            if (model.slidePostion == 2) {
                removeInfoWindows();
                removeMarkers();
                addMarkers(markerLocation.pittsburghLocations);

            } else if (model.slidePostion == 3) {
                removeInfoWindows();
                removeMarkers();
                addMarkers(markerLocation.personalLocations);

            } else if (model.slidePostion == 5 || model.slidePostion == 4) {
                removeInfoWindows();
                addMarkers(markerLocation.pittsburghLocations);
                addMarkers(markerLocation.personalLocations);

            } else {

                removeMarkers();
                removeInfoWindows();

            };
        }

    );
    google.maps.event.addDomListener(leftArrow, 'click', function(location) {
            handleLeftArrow();

            function addMarkers(location) {

                for (prop in location) {

                    markers.push(new google.maps.Marker({
                        name: location[prop].name,
                        position: location[prop],
                        map: map,
                        animation: google.maps.Animation.DROP,
                        content: location[prop],
                        addListenerToMaker: function() {

                            this.addListener('click', function() {



                                for (i = 0; i < markers.length; i++) {
                                    if (this.name == infowindows[i].name) {
                                        infowindows[i].open(map, this);
                                    }
                                }

                            })
                        }
                    }));

                    infowindows.push(new google.maps.InfoWindow({
                        name: location[prop].name,
                        content: location[prop].content

                    }));


                    i++;
                };
                for (i = 0; i < markers.length; i++) {
                    var location = markers[i];
                    location.addListenerToMaker();

                };
            };
            if (model.slidePostion == 2) {
                removeMarkers();
                removeInfoWindows();
                addMarkers(markerLocation.pittsburghLocations);

            } else if (model.slidePostion == 3) {
                removeMarkers();
                removeInfoWindows();
                addMarkers(markerLocation.personalLocations);

            } else if (model.slidePostion == 4 || model.slidePostion == 5) {
                removeInfoWindows();
                addMarkers(markerLocation.pittsburghLocations);
                addMarkers(markerLocation.personalLocations);

            } else {
                removeMarkers();
                removeInfoWindows();
            };
        }

    );

};
