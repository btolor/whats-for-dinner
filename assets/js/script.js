// Start of the main jquery function...
$(() => {
    /**Application Variables... */
    // Stores the API endpoint url...
    let api_end_point = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i="
    // Stores the GET request data results...
    let recipes = ""
    // Stores the items input...
    let item_1, item_2, item_3, item_4
    // Stores the dish type input...
    let dish = ""
    // Stores the dish type search...
    let dishSearch = ""
    // Stores the GET request serch...
    let ingredients = ""
    // Stores the search page number...
    let pageNum = "&p=1"
    // Counter variable for the landing images array...
    let landingCounter = 0
    // Counter variable for the content images array...
    let contentCounter = 0
    /**The landingImages variable stores and array of background images for the 
     * html element with the class of landing...  
     * */
    // let landingImages = [
    //     'assets/images/slides/close-up-cold-color-drop-background.jpg',
    //     'assets/images/slides/cook-cooking-cuisine-delicious-background.jpg',
    //     'assets/images/slides/five-white-plates-with-different-kinds-of-dishes-background.jpg',
    //     '/assets/images/slides/food-on-table-background.jpg',
    //     'assets/images/slides/shallow-focus-photography-of-chocolate-cupcakes-background.jpg',
    //     '/assets/images/slides/chocolates-and-raspberries-background.jpg'
    // ]
    let landingImages = [
        'https://i.postimg.cc/kM1GJ5yk/close-up-cold-color-drop-background.jpg',
        'https://i.postimg.cc/DZffFV4v/cook-cooking-cuisine-delicious-background.jpg',
        'https://i.postimg.cc/JzJz55WL/five-white-plates-with-different-kinds-of-dishes-background.jpg',
        'https://i.postimg.cc/nzdFhdqv/food-on-table-background.jpg',
        'https://i.postimg.cc/158tfZC4/shallow-focus-photography-of-chocolate-cupcakes-background.jpg',
        'https://i.postimg.cc/15bzFY2B/chocolates-and-raspberries-background.jpg'
    ]
    /**The contentImages variable stores and array of background images for the 
     * html element with the class of content...  
     * */
    // let contentImages = [
    //     'assets/images/content-slides/egg-avocado-cooking-tomato-background.jpg',
    //     'assets/images/content-slides/food-on-white-background.jpg',
    //     'assets/images/content-slides/fruits-eating-food-on-wood-background.jpg',
    //     'assets/images/content-slides/lunch-table-background.jpg',
    //     'assets/images/content-slides/photo-of-vegetable-salad-in-bowls-background.jpg',
    //     'assets/images/content-slides/variety-of-vegetables-background.jpg',
    //     'assets/images/content-slides/vegetables-and-tomatoes-on-cutting-board-background.jpg'
    // ]
    let contentImages = [
        'https://i.postimg.cc/g0mmq9DV/egg-avocado-cooking-tomato-background.jpg',
        'https://i.postimg.cc/TP0Gtk7Z/food-on-white-background.jpg',
        'https://i.postimg.cc/dtCYbQNR/fruits-eating-food-on-wood-background.jpg',
        'https://i.postimg.cc/3RwhVgzW/lunch-table-background.jpg',
        'https://i.postimg.cc/j5kTbDrc/photo-of-vegetable-salad-in-bowls-background.jpg',
        'https://i.postimg.cc/VvxcJ2vb/variety-of-vegetables-background.jpg',
        'https://i.postimg.cc/XqGb7njb/vegetables-and-tomatoes-on-cutting-board-background.jpg'
    ]

    /**  Functions...  */

    /**This uses the jquery scroll function change the documents header styles when 
     * the the browser's window is scrolled down 20px or more and changed back when 
     * the window is scrolled back up... 
     * */
    // Calls the jquery scroll method on the browser window...
    $(window).scroll(()=>{
        // If/Else statement to check value of the window.pageYOffset property...
        if(window.pageYOffset >20){
            // If True:
            /**Calls the jqtery css method to change the position, background color, 
             * and border bottom of the header html element... 
             * */
            $('header').css({
                // Changes the css position property...
                position: 'fixed',
                // Changes the css background color property...
                backgroundColor: '#FF652F',
                // Changes the css border bottom property...
                borderBottom: '1px solid black'
            })

            // Calls the jquery hide method to hide the selected html element...
            $('.links-box').hide()

            // Calls the jquery css method to change the background of the .scrolled-header html element...
            $('.scrolled-header').css({
                // Changes the css display property...
                display: 'flex'
            })
        }else{
            // If False:
            /**Calls the jqtery css method to change the position, background color, 
             * and border bottom of the header html element... 
             * */
            $('header').css({
                // Changes the css position property...
                position: 'absolute',
                // Changes the css background color property...
                backgroundColor: 'transparent',
                // Changes the css border bottom property...
                borderBottom: 'none'
            })

            // If statement to check the value of the browser window using the jquery width method...
            if($(window).width() >= 650){
                // Calls the jquery hide method to show the selected html element...
               $('.links-box').show() 
            }

            // If statement to check the value of the browser window using the jquery width method...
            if($(window).width() <= 650){
                // Calls the jquery hide method to hide the selected html element...
                $('.links').hide()

                // Calls the jquery css method to change the background of the .scrolled-header html element...
                $('.scrolled-header').css({
                    // Changes the css justify content property...
                    justifyContent: 'center'
                })
            }

            // Calls the jquery hide method to hide the selected html element...
            $('.scrolled-header').hide()
        }
    })

    /**This variable stores a function that changes the background 
     * image of the html element with a class of landing. It uses 
     * a jquery css method to change the background image of the 
     * selected html element to an image from the landingImages 
     * array at the index of the value of the landingCounter. Once
     * the css method is has finished an if/else statement checks 
     * the value of the landingCounter variable to see if its greater 
     * than or equal to 5. If true the landingCounter variable's value 
     * is changed to 0 else the landingCounter variable's value is 
     * incremented by 1... 
     * */
    // Stores a function to change an html element's background...
    let changeSearchBackgroundImage = ()=>{
        // Calls the jquery css method to change the background of the .landing html element...
        $('.landing').css({
            // Changes the css background image property...
            backgroundImage : 'url("'+landingImages[landingCounter]+'")'
        })
        // If/Else statement to check the landingCounter variable value...
        if(landingCounter >= 5){
            // If True:
            // Changes value of landingCounter variable...
            landingCounter = 0
        }else{
            // If False:
            // Increments the landingCounter variable's value 1...
            landingCounter ++
        }
        
    }

    /**This variable stores a function that changes the background 
     * image of the html element with a class of content. It uses 
     * a jquery css method to change the background image of the 
     * selected html element to an image from the contentImages 
     * array at the index of the value of the contentCounter. Once
     * the css method is has finished an if/else statement checks 
     * the value of the contentCounter variable to see if its greater 
     * than or equal to 6. If true the contentCounter variable's value 
     * is changed to 0 else the contentCounter variable's value is 
     * incremented by 1... 
     * */
    // Stores a function to change an html element's background...
    let changeContentBackgroundImage = ()=>{
        // Calls the jquery css method to change the background of the .content html element...
        $('.content').css({
            // Changes the css background image property...
            backgroundImage : 'url("'+contentImages[contentCounter]+'")'
        })
        // If/Else statement to check the contentCounter variable value...
        if(contentCounter >= 6){
            // If True:
            // Changes value of contentCounter variable...
            contentCounter = 0
        }else{
            // If False:
            // Increments the contentCounter variable's value 1...
            contentCounter ++
        }
    }

    /**Uses the setInterval method to call the changeSearchBackgroundImage 
     * function every 30 seconds... 
     * */
    setInterval(changeSearchBackgroundImage,30000)
    
    /**Uses the setInterval method to call the changeContentBackgroundImage 
     * function every 40 seconds... 
     * */
    setInterval(changeContentBackgroundImage,40000)

    /**The image function takes in a parameter that is used in an 
     * if/else statement to check its value. If the value of the 
     * parameter is equal to an empty string, the default thumbnail
     * image location is returned. If the parameter's value is not 
     * equal to an empty string, the value of the parameter in then 
     * returned... 
     * */
    // Stores the image function...
    let image = (pic)=>{
        // If statement to check the value of the parameter...
        if(pic === ""){
            // If True:
            // Returns an image url locatio...
            return "http://img.recipepuppy.com/9.jpg"
        }else{
            // If False: 
            // Returns the value of the parameter...
            return pic
        }
    }

    /**Creates the initial api search function that sends an https GET request to a url
     * and has a return function that creates html code blocks from the data returned
     * from the api...
     */
    // Stores the initail recipe search function...
    let initSearch = ()=>{
        /**Creates the ajax hhtps request function that has the https url, a method
         * type of GET, a return data type of json for a json data format, and a error 
         * function that uses an if statement to check the value of xhr.status value.
         * If the xhr.status value is equal to 404 the append method is called on the 
         * html element with the class of recipes to create a html code block displaying 
         * a 404 error message... 
         * */
        // Stores the ajax GET request...
        let request = $.ajax({
            // Stores the GET request url...
            url: "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?&p=1",
            // Stores the request method type...
            method: "GET",
            // Stores the data return type...
            dataType: 'json',
            // Stores the erroe fallback function that takes in three parameters...
            error: (xhr, ajaxOptions, thrownError) => {
                /**If Else statement that checks the value of the GET request xhr 
                 * status and returns either true or false. 
                 * */
                if (xhr.status == 404) {
                    // If True:
                    // Uses the hide method to remove the selected html element...
                    $('.content').hide()
                    // Uses the css method to change the seleceted html element's display property...
                    $('.api-error').css({
                        display: 'block'
                    })
                }
            }
        })

        /**Calls the ajax done function that is returned from the ajax function 
         * and it has a separate callback function that has a data parameter 
         * passed in it that store the json data from the GET request. The value 
         * of the data.requets data is then stored inside of the recipes variable.
         * Next, the memove method is called on the html element with a class of 
         * recipe to remove all element with that class. Finally, a for each method
         * is called on the recipes array variable to create a recipe card code block
         * for each element in the recipes array variable...
         * */
        // Stores the successful request done function...
        let response = request.done((data) => {
            // Saves the GET request data in the recipes variable...
            recipes = data.results
            // Calls the remove method to remove the selected element...
            $('.recipe').remove()
            // Calls the for each loop function on the recipes array...
            recipes.forEach((recipe)=> {    
                // Calls the append method to add a code block to the selected html element...
                $('.recipes').append(
                    // Creates the html recipe code block...
                    " <!-- start of recipe --><div class='card recipe'><!-- start of credit -->" +
                    "<div class='credit'><h4>Powered By Recipe Puppy API</h4></div><!-- end of credit -->" +
                    "<!-- start of info --><div class='info'><!-- start of heading --><div class='heading'>" +
                    "<img src='"+ image(recipe.thumbnail) +"' loading='lazy' alt='This is the image of recipe's card dish.'>" +
                    "<a href='" + recipe.href + "' aria-label='"+ recipe.href +"' rel='noopener' id='title' target='_blank'>" + 
                    recipe.title + "</a>" + "</div><!-- end of heading --><hr><p class='ingredients'>"+
                    recipe.ingredients + "</p><hr><!-- start of btns --><div class='btns'>" +
                    "<!-- start of share-links --><div class='share-links'><!-- Facebook Share link -->" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=" + recipe.href + 
                    "' aria-label='https://www.facebook.com/sharer/sharer.php?u="+ recipe.href +"' rel='noopener' target='+blank'>"+
                    "<i class='fa fa-facebook' aria-hidden='true'></i></a><!-- Twitter Share link -->"+
                    "<a href='https://twitter.com/intent/tweet?text=" + recipe.href + "' aria-label='https://twitter.com/intent/tweet?text="+ 
                    recipe.href +"' rel='noopener' target='+blank'>"+
                    "<i class='fa fa-twitter' aria-hidden='true'></i></a><!-- Email Share link -->"+
                    "<a href='mailto:?body=" + recipe.href + "' aria-label='mailto:?body="+ recipe.href +"' rel='noopener' target='_blank'>"+
                    "<i class='fa fa-envelope' aria-hidden='true'></i></a></div><!-- end of share-links -->"+
                    "<a id='recipe-btn' target='_blank' href=" + recipe.href + "  aria-label='"+ recipe.href +"' rel='noopener'>Recipe</a>"+
                    "</div><!-- end of btns --></div><!-- end of info --></div><!-- end of recipe --> "
                )
                
            })
        })
    }

    /**Creates the user's input api search function that takes in the user's input from 
     * form field elements using the val method and checks the value of those inputs and 
     * adds them to string variables. Next, it creates and sends an https GET request to 
     * a url created by the user's input and has a return function that creates html code 
     * blocks from the data returned from the api...
     */
    // Stores the user's input search recipe search function...
    let search = (page)=>{
        // Stores the value of user's input from the html element with an id of item-1 using the val method... 
        ingredient1 = $('#item-1').val()
        // Stores the value of user's input from the html element with an id of item-2 using the val method...  
        ingredient2 = $('#item-2').val()
        // Stores the value of user's input from the html element with an id of item-3 using the val method... 
        ingredient3 = $('#item-3').val()
        // Stores the value of user's input from the html element with an id of item-4 using the val method... 
        ingredient4 = $('#item-4').val()
        // Stores the value of user's input from the html element with an id of dish-type using the val method... 
        foodDish = $('#dish-type').val()

        // If statement to check the value of the ingredient1 variable...
        if (ingredient1 != "") {
            // If True:
            // The ingredients string value is added to the ingredients variable's value...
            ingredients = ingredient1
        }
        // If statement to check the value of the ingredient2 variable...
        if (ingredient2 != "") {
            // If True:
            // The ingredients string value is added to the ingredients variable's value separated by a comma...
            ingredients = ingredients + "," + ingredient2
        }
        // If statement to check the value of the ingredient3 variable...
        if (ingredient3 != "") {
            // If True:
            // The ingredients string value is added to the ingredients variable's value separated by a comma...
            ingredients = ingredients + "," + ingredient3
        }
        // If statement to check the value of the ingredient4 variable...
        if (ingredient4 != "") {
            // If True:
            // The ingredients string value is added to the ingredients variable's value separated by a comma...
            ingredients = ingredients + "," + ingredient4
        }
        // If statement to check the value of the foodDish variable...
        if (foodDish != "") {
            // If True:
            // The foodDish string value is added to the dishSearch variable's value separated by a string of '&q='...
            dishSearch = "&q=" + foodDish
        } else {
            // If False:
            // The dishSearch variable is given the value of an empty string...
            dishSearch = ""
        }

        /**Creates the ajax hhtps request function that has the https url, a method
         * type of GET, a return data type of json for a json data format, and a error 
         * function that uses an if statement to check the value of xhr.status value.
         * If the xhr.status value is equal to 404 the append method is called on the 
         * html element with the class of recipes to create a html code block displaying 
         * a 404 error message... 
         * */
        // Stores the ajax GET request...
        let request = $.ajax({
            // Stores the GET request url created from the user's input...
            url: api_end_point + ingredients + dishSearch + pageNum,
            // Stores the request method type...
            method: "GET",
            // Stores the data return type...
            dataType: 'json',
            // Stores the erroe fallback function that takes in three parameters...
            error: (xhr, ajaxOptions, thrownError) => {
                /**If Else statement that checks the value of the GET request xhr 
                 * status and returns either true or false. 
                 * */
                if (xhr.status == 404) {
                    // If True:
                    // Uses the hide method to remove the selected html element...
                    $('.content').hide()
                    // Uses the css method to change the seleceted html element's display property...
                    $('.api-error').css({
                        display: 'block'
                    })
                }
            }
        })

        /**Calls the ajax done function that is returned from the ajax function 
         * and it has a separate callback function that has a data parameter 
         * passed in it that store the json data from the GET request. The value 
         * of the data.requets data is then stored inside of the recipes variable.
         * Next, the memove method is called on the html element with a class of 
         * recipe to remove all element with that class. Finally, a for each method
         * is called on the recipes array variable to create a recipe card code block
         * for each element in the recipes array variable...
         * */
        // Stores the successful request done function...
        let response = request.done((data) => {
            // Saves the GET request data in the recipes variable...
            recipes = data.results
            // Calls the remove method to remove the selected element...
            $('.recipe').remove()
            // Calls the for each loop function on the recipes array...
            recipes.forEach((recipe)=> {
                // Calls the append method to add a code block to the selected html element...
                $('.recipes').append(
                    // Creates the html recipe code block...
                    " <!-- start of recipe --><div class='card recipe'><!-- start of credit -->" +
                    "<div class='credit'><h4>Powered By Recipe Puppy API</h4></div><!-- end of credit -->" +
                    "<!-- start of info --><div class='info'><!-- start of heading --><div class='heading'>" +
                    "<img src='"+ image(recipe.thumbnail) +"' loading='lazy' alt='This is the image of recipe's card dish.'>" +
                    "<a href='" + recipe.href + "' aria-label='"+ recipe.href +"' rel='noopener' id='title' target='_blank'>" + 
                    recipe.title + "</a>" + "</div><!-- end of heading --><hr><p class='ingredients'>"+
                    recipe.ingredients + "</p><hr><!-- start of btns --><div class='btns'>" +
                    "<!-- start of share-links --><div class='share-links'><!-- Facebook Share link -->" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=" + recipe.href + 
                    "' aria-label='https://www.facebook.com/sharer/sharer.php?u="+ recipe.href +"' rel='noopener' target='+blank'>"+
                    "<i class='fa fa-facebook' aria-hidden='true'></i></a><!-- Twitter Share link -->"+
                    "<a href='https://twitter.com/intent/tweet?text=" + recipe.href + "' aria-label='https://twitter.com/intent/tweet?text="+ 
                    recipe.href +"' rel='noopener' target='+blank'>"+
                    "<i class='fa fa-twitter' aria-hidden='true'></i></a><!-- Email Share link -->"+
                    "<a href='mailto:?body=" + recipe.href + "' aria-label='mailto:?body="+ recipe.href +"' rel='noopener' target='_blank'>"+
                    "<i class='fa fa-envelope' aria-hidden='true'></i></a></div><!-- end of share-links -->"+
                    "<a id='recipe-btn' target='_blank' href=" + recipe.href + "  aria-label='"+ recipe.href +"' rel='noopener'>Recipe</a>"+
                    "</div><!-- end of btns --></div><!-- end of info --></div><!-- end of recipe --> "
                )
                
            })
        })
    }

    // Stores the initial GET request function...
    let init = ()=>{
        // Calls the initial seacrh function...
        initSearch()
    }

    /**Calls the click method on the html element with an id of sub-btn 
     * to use the remove class method to remove the active class from the 
     * html element with a class of page. Next, it uses the add class
     * method add the class of active to the html element with the id of 
     * page-1. Finally it changes the value of the pageNum variable and 
     * calls the search function with the pageNum variable passed in as a 
     * parameter... 
     * */
    // Calls the click function on an html element...
    $('#sub-btn').click(()=>{ 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        // Changes the pageNum variable value...
        pageNum = "&p=1"
        // Calls the searh function with a parameter...
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-1. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-1 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 1 and calls the search function with the pageNum variable passed in 
     * as a parameter... 
     * */
    // Calls a click function on an html element...
    $('#page-1').click(()=> {
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        // Changes the pageNum variable value...
        pageNum = "&p=1"
        // Calls the search function with a parameter...
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-2. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-2 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 2 and calls the search function with the pageNum variable passed in 
     * as a parameter... 
     * */
    // Calls a click function on an html element...
    $('#page-2').click(()=> {
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-2').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=2"
        // Calls the search function with a parameter...
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-3. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-3 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 3 and calls the search function with the pageNum variable passed in 
     * as a parameter... 
     * */
    // Calls a click function on an html element...
    $('#page-3').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-3').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=3"
        // Calls the search function with a parameter...
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-4. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-4 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 4 and calls the search function with the pageNum variable passed in 
     * as a parameter... 
     * */
    // Calls a click function on an html element...
    $('#page-4').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-4').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=4"
        // Calls a search function with a parameter...
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-5. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-5 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 5 and calls the search function with the pageNum variable passed in 
     * as a parameter... 
     * */
    // Calls a click function on an html element...
    $('#page-5').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-5').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=5"
        // Calls the search function with a parameter...
        search(pageNum)
    })

    /**Calls the click method on the html elements with id of logo-link. When 
     * either are clicked the remove class method is used to remove the class 
     * of active from the html element with the class of page. Next the add class 
     * method is used to add the class of active to the html element with the id 
     * of page-1. Finally the the initSeacrh function is called...
     * */
    // Calls the click function on the two html elements...
    $('#logo-link').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        // Calls the initSearch function...
        initSearch()
    })

    // Calls the initial function...
    init()
})