$(document).ready(function() {
    var exampleProductName = "Example Project";

    //Set the data for the specified product
    setProduct(exampleProductName, exampleData);

    //Click on a title -> reveal the media box
    $( ".title_link" ).click(function() {
        //Open media box
        $(".media_" + $( this ).attr("linkid")).toggleClass("hidden");
    });

    //Search button pressed
    $("#search_input").keyup(function(){
        //Get the query from the textbox
        var searchExpr = $("#search_input").val();

        //Check if valid search query
        if(searchExpr != "" && search_input != null && search_input != undefined)
        {
            //Filter the data
            var filteredData = filterData(searchExpr, exampleData);
            //Output
            setProduct(exampleProductName, filteredData);
        }
        else //No valid search query, just output all
            setProduct(exampleProductName, exampleData);
    });
});

function filterData(expr, data)
{
    //Filters the data acording to a certain search query / expression
    var outputArray = [];
    for(var i = 0; i < data.length; i++)
    {
        //Check whether the title contains the expression
        if(data[i].title.toLowerCase().includes(expr.toLowerCase()))
            outputArray.push(data[i]);
    }

    return outputArray;
}

function transformData(productName, data)
{
    //Transformation of the input data from a simple object array 
    //to a well structured object hirarchy
    
    var transformedData = {};
    //Iterate through the data array
    for(var i = 0; i < data.length; i++)
    {
        //Only data for the current product
        if(data[i].product == productName)
        {
            //Check if version exists
            if(transformedData[data[i].version] == undefined)
            {
                transformedData[data[i].version] = {};
            }

            //Check if type exists
            if(transformedData[data[i].version][data[i].type] == undefined)
            {
                transformedData[data[i].version][data[i].type] = [];
            }

            //Add the data after the preceeding structure is set
            transformedData[data[i].version][data[i].type].push(
                {"title":data[i].title, "media":data[i].media}
            );
        }
    }
    return transformedData;
}

//show product data
function setProduct(productName, data)
{
    //Set the headline for the product name
    $(".product_headline").text(productName);

    var transformedData = transformData(productName, data)

    //Output
    var output = "";
    var linkId = 0;

    //Every version
    for (var version in transformedData) {
        output += '<div class="version_wrapper"><span class="version_hl">Version ' + version + '</span></div>';

        //Every type
        for (var type in transformedData[version]) {
            output += '<div class="art_wrapper '+type.toLowerCase()+'">'+type+'</div>';

            //Every title / entry
            for(var entry in transformedData[version][type])
            {
                entry = transformedData[version][type][entry];
                
                //Generate a media page
                if(entry.media != "")
                {
                    output += '<div class="titel_wrapper"><a href="#" linkid="'+linkId+'" class="title_link">'+entry.title+'</a></div>';
                    output += '<div class="media_content media_'+linkId+' hidden">'+entry.media+'</div>';
                    linkId++;
                }
                else //No media page
                {
                    output += '<div class="titel_wrapper">'+entry.title+'</div>';                    
                }
            }

            output += '</hr>';
        }
    }

    if(output != "")
    {
        //Output the result
        $(".content").html(output);
    }
    else
    {
        $(".content").html("This search leads to no results");
    }
}