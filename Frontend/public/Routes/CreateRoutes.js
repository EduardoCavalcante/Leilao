document.addEventListener("DOMContentLoaded", function () {

    let myRouter = new Router('myRouter', [
        {
            path: '/',
            name: "Login",
            controller: new AuctionController(new AuctionService(), new AuctionView())
        },
        {
            path: '/Autcions',
            name: "Auctions",
            controller: null
        }
    ]);
    const currentPath = window.location.pathname;

    const currentRouter = myRouter.Routes.find(route => route.path === currentPath);

    if (currentRouter)
        currentRouter.name;
    else
        myRouter.Routes[0].controller.init();

});