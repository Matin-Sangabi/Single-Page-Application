
// function router

function router(){
    // add Array object for path 
    // view : function to show pages
    const routers = [
        {path : "/" , view : ()=> console.log('Home Page')},
        {path : "/products" , view : ()=> console.log('products Page')},
        {path : "/blog" , view : ()=> console.log('blog Page')},
    ];

    // loop in routers  
    // * location.pathname => history of page
    const potentialRouter =  routers.map((item)=>{
        return {
            router : item, 
            isMatch : location.pathname === item.path, // ? return  Boolean (true , false)
        }
    });

    let findRouter = potentialRouter.find((find) => find.isMatch); // ? if isMatch true return 

    // * if not findRouter send user to 404 page

    if(!findRouter){
        findRouter = {
            router : {path : "/notFound" , view : ()=> console.log('notFound Page')},
            isMatch : true ,
        };
    }

    console.log(findRouter.router.view());
}

router();