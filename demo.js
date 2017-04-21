

var selectedItem = null,

    movies = [
        {
            Title: "The Red Violin",
            Languages: [
                { Name: "English" },
                { Name: "French" }
            ]
        },
        {
            Title: "Eyes Wide Shut",
            Languages: [
                { Name: "French" },
                { Name: "German" },
                { Name: "Spanish" }
            ]
        },
        {
            Title: "The Inheritance",
            ReleaseYear: "1976",
            Languages: [
                { Name: "English" },
                { Name: "Dutch" }
            ]
        }
    ],

    detailTemplate = $( "#detailTemplate" ).template(),

    summaryTemplate = $( "#summaryTemplate" ).template();

function unselect( tmplItem ) {
    /* Set the template of the selected item
     back to the summary template */
    if ( selectedItem ) {
        selectedItem.tmpl = summaryTemplate;
        selectedItem.update();
        selectedItem = null;
    }
}

/* Render the summaryTemplate with the "movies" data */
$( "#summaryTemplate" )
    .tmpl( movies )
    .appendTo( "#movieList" );

/* Add onclick handlers for movie template items
 using the summary or details template */
$("#movieList")
    .delegate( ".movieSummary", "click", function () {
        /* Unselect the currently selected item */
        unselect( selectedItem );

        /* Get the template item data structure
         which this clicked element belongs to,
         and make it the selected item */
        selectedItem = $.tmplItem(this);

        /* Set the template on this item to the detail template */
        selectedItem.tmpl = detailTemplate;
        selectedItem.update();
    })
    .delegate( ".movieDetail", "click", function () {
        /* Unselect the currently selected item */
        unselect();
    });
