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
    let landingImages = [
        'assets/images/slides/close-up-cold-color-drop-372882.jpg',
        'assets/images/slides/cook-cooking-cuisine-delicious-357737.jpg',
        'assets/images/slides/five-white-plates-with-different-kinds-of-dishes-54455.jpg',
        '/assets/images/slides/food-on-table-326278.jpg',
        'assets/images/slides/shallow-focus-photography-of-chocolate-cupcakes-1028714.jpg',
        '/assets/images/slides/chocolates-and-raspberries-918327.jpg'
    ]

    let contentImages = [
        'assets/images/content-slides/egg-avocado-cooking-tomato-106877.jpg',
        'assets/images/content-slides/food-on-white-background-256318.jpg',
        'assets/images/content-slides/fruits-eating-food-on-wood-326268.jpg',
        'assets/images/content-slides/lunch-table-5929.jpg',
        'assets/images/content-slides/photo-of-vegetable-salad-in-bowls-1640770.jpg',
        'assets/images/content-slides/variety-of-vegetables-1400172.jpg',
        'assets/images/content-slides/vegetables-and-tomatoes-on-cutting-board-255501.jpg'
    ]
    let landingCounter = 0
    let contentCounter = 0

    let changeSearchBackgroundImage = ()=>{
        $('.landing').css({
            backgroundImage : 'url("'+landingImages[landingCounter]+'")'
        })

        if(landingCounter >= 5){
            landingCounter = 0
        }else{
            landingCounter ++
        }
        
    }


    let changeContentBackgroundImage = ()=>{
        $('.content').css({
            backgroundImage : 'url("'+contentImages[contentCounter]+'")'
        })

        if(contentCounter >= 6){
            contentCounter = 0
        }else{
            contentCounter ++
        }
    }

    setInterval(changeSearchBackgroundImage,20000)
    setInterval(changeContentBackgroundImage,30000)

    $(window).scroll(()=>{
        if(window.pageYOffset >20){
            $('header').css({
                position: 'fixed',
                backgroundColor: '#FF652F',
                borderBottom: '1px solid black'
            })
            $('.links-box').hide()
            
            $('.scrolled-header').css({
                display: 'flex'
            })
           
            
        }else{
            $('header').css({
                position: 'absolute',
                backgroundColor: 'transparent',
                borderBottom: 'none'
            })
            if($(window).width() >= 650){
               $('.links-box').show() 
            }
            if($(window).width() <= 650){
                $('.links').hide()
                $('.scrolled-header').css({
                    justifyContent: 'center'
                })
            }
            
            $('.scrolled-header').hide()
            // $('.logo-box').show()
        }
    })


})