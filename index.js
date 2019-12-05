const imageSelector = document.getElementById("imageSelector");

for (var i = 500; i <= 10000; i += 500) {
    var option = document.createElement("option");

    option.text = i;
    option.value = i;

    imageSelector.add(option);
}

imageSelector.value = 3000;


function updateImages(nodeCount) {
    const actorsGraph = document.getElementById("actorsGraph");
    const actorsGraphCommunity = document.getElementById("actorsGraphCommunity");
    const actorsGraphEVC = document.getElementById("actorsGraphEVC");
    const actorsGraphBC = document.getElementById("actorsGraphBC");

    actorsGraph.src = "./graph_images_tight/actorsgraph" + nodeCount + ".png";
    actorsGraphCommunity.src = "./graph_images_tight/actorsgraph_community" + nodeCount + ".png";
    actorsGraphEVC.src = "./graph_images_tight/actorsgraphEVC" + nodeCount + ".png";
    actorsGraphBC.src = "./graph_images_tight/actorsgraphBC" + nodeCount + ".png";
}

function updateWordcloudTFIDFPlotImages(genreName) {
    const genrePlotImage = document.getElementById("genrePlotImage");
    const genreTFIDFImage = document.getElementById("genreTFIDFImage");

    genrePlotImage.src = "./wordcloud_images/plot/genrePlots-" + genreName + ".png";
    genreTFIDFImage.src = "./wordcloud_images/tfidf/genreTFIDF-" + genreName + ".png";
}

function updateWordcloudActorActionImages(actorName) {
    const actorImage = document.getElementById("actorWordcloudActionImage");

    actorImage.src = "./wordcloud_images/actors/actor-" + actorName + ".png";
}

function updateWordcloudActorWesternImages(actorName) {
    const actorImage = document.getElementById("actorWordcloudWesternImage");

    actorImage.src = "./wordcloud_images/actors/actor-" + actorName + ".png";
}

function updateWordcloudGenreActorsImages(genreName) {
    const genreActorsImage = document.getElementById("actorWordcloudGenreActorsImage");

    genreActorsImage.src = "./wordcloud_images/movie_actors/genre-" + genreName + ".png";
}

function updateWordcloudDecadePlotImages(genreName) {
    const decade1980 = document.getElementById("genreDecade1980Image");
    const decade1990 = document.getElementById("genreDecade1990Image");
    const decade2000 = document.getElementById("genreDecade2000Image");
    const decade2010 = document.getElementById("genreDecade2010Image");

    decade1980.src = "./wordcloud_images/decades/decadePlot-1980-" + genreName + ".png";
    decade1990.src = "./wordcloud_images/decades/decadePlot-1990-" + genreName + ".png";
    decade2000.src = "./wordcloud_images/decades/decadePlot-2000-" + genreName + ".png";
    decade2010.src = "./wordcloud_images/decades/decadePlot-2010-" + genreName + ".png";
}
