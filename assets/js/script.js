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

    /**Calls the jquery click method on the html element with an id of 
     * page-1. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-1 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 1... 
     * */
    // Calls a click function on an html element...
    $('#page-1').click(()=> {
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        // Changes the pageNum variable value...
        pageNum = "&p=1"
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-2. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-2 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 2... 
     * */
    // Calls a click function on an html element...
    $('#page-2').click(()=> {
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-2').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=2"
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-3. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-3 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 3... 
     * */
    // Calls a click function on an html element...
    $('#page-3').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-3').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=3"
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-4. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-4 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 4... 
     * */
    // Calls a click function on an html element...
    $('#page-4').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-4').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=4"
        search(pageNum)
    })

    /**Calls the jquery click method on the html element with an id of 
     * page-5. When the html element is clicked, the jquery remove class 
     * method removes the active class from the html element class of page 
     * and adds the class to the element with an id of page-5 with the jquery 
     * add class method. Then the value of the pageNum variable to an integer 
     * of 5... 
     * */
    // Calls a click function on an html element...
    $('#page-5').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-5').addClass('active')  
        // Changes the pageNum variable value...
        pageNum = "&p=5"
        search(pageNum)
    })


    let search = (page)=>{

        ingredient1 = $('#item-1').val()
        ingredient2 = $('#item-2').val()
        ingredient3 = $('#item-3').val()
        ingredient4 = $('#item-4').val()
        foodDish = $('#dish-type').val()


        if (ingredient1 != "") {
            ingredients = ingredient1;
            console.log(ingredients)
        }
        if (ingredient2 != "") {
            ingredients = ingredients + "," + ingredient2
            console.log(ingredients)
        }
        if (ingredient3 != "") {
            ingredients = ingredients + "," + ingredient3
            console.log(ingredients)
        }
        if (ingredient4 != "") {
            ingredients = ingredients + "," + ingredient4
            console.log(ingredients)
        }
        if (foodDish != "") {
            dishSearch = "&q=" + foodDish
        } else {
            dishSearch = ""
        }


        let request = $.ajax({
            // Stores the GET request url...
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

                }
            }
        })

        let response = request.done((data) => {
            // Saves the GET request data in the recipes variable...
            recipes = data.results

            $('.recipe').remove()

            recipes.forEach((recipe)=> {
                // title,ingredients,href,thumbnail...
                $('.recipes').append(
                    " <!-- start of recipe --><div class='card recipe'><!-- start of credit -->" +
                    "<div class='credit'><h4>Powered By Recipe Puppy API</h4></div><!-- end of credit -->" +
                    "<!-- start of info --><div class='info'><!-- start of heading --><div class='heading'>" +
                    "<img src='"+ image(recipe.thumbnail) +"' alt='This is the image of recipe's card dish.'>" +
                    "<a href='" + recipe.href + "' id='title' target='_blank'>" + recipe.title + "</a>"+
                    "</div><!-- end of heading --><hr><p id='ingredients'>"+
                    recipe.ingredients + "</p><hr><!-- start of btns --><div class='btns'>" +
                    "<!-- start of share-links --><div class='share-links'><!-- Facebook Share link -->" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=" + recipe.href + "' target='+blank'>"+
                    "<i class='fa fa-facebook' aria-hidden='true'></i></a><!-- Twitter Share link -->"+
                    "<a href='https://twitter.com/intent/tweet?text=" + recipe.href + "' target='+blank'>"+
                    "<i class='fa fa-twitter' aria-hidden='true'></i></a><!-- Email Share link -->"+
                    "<a href='mailto:?body=" + recipe.href + "' target='_blank'>"+
                    "<i class='fa fa-envelope' aria-hidden='true'></i></a></div><!-- end of share-links -->"+
                    "<a id='recipe-btn' target='_blank' href=" + recipe.href + ">Recipe</a>"+
                    "</div><!-- end of btns --></div><!-- end of info --></div><!-- end of recipe --> "
                )
                
            })
        })

    }

    /**############################################################################################################# */
    // Search GET Request...
    $('#sub-btn').click(()=>{ 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        // Changes the pageNum variable value...
        pageNum = "&p=1"
        search(pageNum)
    })
    /**############################################################################################################# */

    let image = (pic)=>{
        if(pic === ""){
            return "http://img.recipepuppy.com/9.jpg"
        }else{
            return pic
        }
    }


    let initSearch = ()=>{
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

                }
            }
        })


        let response = request.done((data) => {
            // Saves the GET request data in the recipes variable...
            recipes = data.results

            $('.recipe').remove()

            recipes.forEach((recipe)=> {
                
                // title,ingredients,href,thumbnail...
                $('.recipes').append(
                    " <!-- start of recipe --><div class='card recipe'><!-- start of credit -->" +
                    "<div class='credit'><h4>Powered By Recipe Puppy API</h4></div><!-- end of credit -->" +
                    "<!-- start of info --><div class='info'><!-- start of heading --><div class='heading'>" +
                    "<img src='"+ image(recipe.thumbnail) +"' alt='This is the image of recipe's card dish.'>" +
                    "<a href='" + recipe.href + "' id='title' target='_blank'>" + recipe.title + "</a>"+
                    "</div><!-- end of heading --><hr><p id='ingredients'>"+
                    recipe.ingredients + "</p><hr><!-- start of btns --><div class='btns'>" +
                    "<!-- start of share-links --><div class='share-links'><!-- Facebook Share link -->" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=" + recipe.href + "' target='+blank'>"+
                    "<i class='fa fa-facebook' aria-hidden='true'></i></a><!-- Twitter Share link -->"+
                    "<a href='https://twitter.com/intent/tweet?text=" + recipe.href + "' target='+blank'>"+
                    "<i class='fa fa-twitter' aria-hidden='true'></i></a><!-- Email Share link -->"+
                    "<a href='mailto:?body=" + recipe.href + "' target='_blank'>"+
                    "<i class='fa fa-envelope' aria-hidden='true'></i></a></div><!-- end of share-links -->"+
                    "<a id='recipe-btn' target='_blank' href=" + recipe.href + ">Recipe</a>"+
                    "</div><!-- end of btns --></div><!-- end of info --></div><!-- end of recipe --> "
                )
                
            })
        })
    }
    

    /**############################################################################################################# */
    // Initial GET Request...
    let init = ()=>{
        initSearch()
    }
    /**############################################################################################################# */


    init()



    $('#logo-img, .logo-title').click(()=> { 
        // Uses the jquery remove class method to remove a class...
        $('.page').removeClass('active')
        // Uses the jquery remove class method to remove a class...
        $('#page-1').addClass('active') 
        initSearch()
    })




    
    



    /**The landingImages variable stores and array of background images for the 
     * html element with the class of landing...  
     * */
    let landingImages = [
        'assets/images/slides/close-up-cold-color-drop-372882.jpg',
        'assets/images/slides/cook-cooking-cuisine-delicious-357737.jpg',
        'assets/images/slides/five-white-plates-with-different-kinds-of-dishes-54455.jpg',
        '/assets/images/slides/food-on-table-326278.jpg',
        'assets/images/slides/shallow-focus-photography-of-chocolate-cupcakes-1028714.jpg',
        '/assets/images/slides/chocolates-and-raspberries-918327.jpg'
    ]
    // Counter variable for the landing images array...
    let landingCounter = 0
    
    /**The contentImages variable stores and array of background images for the 
     * html element with the class of content...  
     * */
    let contentImages = [
        'assets/images/content-slides/egg-avocado-cooking-tomato-106877.jpg',
        'assets/images/content-slides/food-on-white-background-256318.jpg',
        'assets/images/content-slides/fruits-eating-food-on-wood-326268.jpg',
        'assets/images/content-slides/lunch-table-5929.jpg',
        'assets/images/content-slides/photo-of-vegetable-salad-in-bowls-1640770.jpg',
        'assets/images/content-slides/variety-of-vegetables-1400172.jpg',
        'assets/images/content-slides/vegetables-and-tomatoes-on-cutting-board-255501.jpg'
    ]
    // Counter variable for the content images array...
    let contentCounter = 0

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


})