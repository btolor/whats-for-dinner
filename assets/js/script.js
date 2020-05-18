// Start of the main jquery function...
$(() => {
    /**Application Variables... */
    // API endpoint url...
    let api_end_poit = ""
    // Items input variables...
    let item_1, item_2, item_3, item_4
    // Dish type input variable...
    let dish = ""
    // Dish type search variable...
    let dishSearch = ""
    // GET request serch variable...
    let ingredients = ""

    $('#sub-btn').click(()=>{ 
        alert('worked')
        
    })

    ingredient1 = $('#item1').val()
    ingredient2 = $('#item2').val()
    ingredient3 = $('#item3').val()
    ingredient4 = $('#item4').val()
    foodDish = $('#dish').val()

    // if (ingredient1 != "") {
    //     ingredients = ingredient1;
    // }
    // if (ingredient2 != "") {
    //     ingredients = ingredients + "," + ingredient2;
    // }
    // if (ingredient3 != "") {
    //     ingredients = ingredients + "," + ingredient3;
    // }
    // if (ingredient4 != "") {
    //     ingredients = ingredients + "," + ingredient4;
    // }
    // if (foodDish != "") {
    //     dishSearch = "&q=" + foodDish;
    // } else {
    //     dishSearch = "";
    // }

    // let request = $.ajax({
    //     // Stores the GET request url...
    //     url: searchSubBreedRequest,
    //     // Stores the request method type...
    //     method: "GET",
    //     // Stores the erroe fallback function that takes in three parameters...
    //     error: (xhr, ajaxOptions, thrownError) => {
    //         /**If Else statement that checks the value of the GET request xhr 
    //          * status and returns either true or false. 
    //          * */
    //         if (xhr.status == 404) { }
    //     }
    // })



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