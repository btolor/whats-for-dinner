// Start of the main jquery function...
$(() => {
    /**Application Variables... */
    // API endpoint url...
    // let api_end_poit = ""
    // Items input variables...
    // let item_1, item_2, item_3, item_4
    // Dish type input variable...
    // let dish = ""
    // Dish type search variable...
    // let dishSearch = ""
    // GET request serch variable...
    // let ingredients = ""


    // ingredient1 = $('#item1').val()
    // ingredient2 = $('#item2').val()
    // ingredient3 = $('#item3').val()
    // ingredient4 = $('#item4').val()
    // foodDish = $('#dish').val()

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
    let images = [
        '/assets/images/slides/chocolates-and-raspberries-918327.jpg',
        'assets/images/slides/close-up-cold-color-drop-372882.jpg',
        'assets/images/slides/cook-cooking-cuisine-delicious-357737.jpg',
        'assets/images/slides/five-white-plates-with-different-kinds-of-dishes-54455.jpg',
        '/assets/images/slides/food-on-table-326278.jpg',
        'assets/images/slides/shallow-focus-photography-of-chocolate-cupcakes-1028714.jpg'
    ]
    let counter = 0

    let changeBackgroundImage = ()=>{
        $('.landing').css({
            backgroundImage : 'url("'+images[counter]+'")'
        })

        if(counter >= 5){
            counter = 0
        }else{
            counter ++
        }
    }

    setInterval(changeBackgroundImage,10000)

    $(window).scroll(()=>{
        if(window.pageYOffset >20){
            $('header').css({
                color: 'red',
                position: 'fixed',
                backgroundColor: 'white'
            })
        }else{
            $('header').css({
                color: 'white',
                position: 'absolute',
                backgroundColor: 'transparent'
            })
        }
    })


})