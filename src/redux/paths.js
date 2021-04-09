const paths = {};

// shopping bag
paths.shoppingBag = {};
paths.shoppingBag.setItems = "/shoppingBag/setItems";
paths.shoppingBag.setIsLoading = "/shoppingBag/setIsLoading";
paths.shoppingBag.setIsHide = "/shoppingBag/setIsHide";

// wish list
paths.wishList = {};
paths.wishList.setItems = "/wishList/setItems";
paths.wishList.setIsLoading = "/wishList/setIsLoading";
paths.wishList.setIsHide = "/wishList/setIsHide";

// language
paths.language = {};
paths.language.setSelected = "/language/setSelected";
paths.language.setIsLoading = "/language/setIsLoading";
paths.language.setIsHide = "/language/setIsHide";

// search
paths.search = {};
paths.search.setValue = "/search/setValue";
paths.search.setIsLoading = "/search/setIsLoading";

// sign in
paths.signIn = {};
paths.signIn.setEmail = "/signIn/setEmail";
paths.signIn.setPassword = "/signIn/setPassword";
paths.signIn.setRememberMe = "/signIn/setRememberMe";
paths.signIn.setIsLoading = "/signIn/setIsLoading";
paths.signIn.setIsHide = "/signIn/setIsHide";
paths.signIn.setErrors = "/signIn/setErrors";

// menu
paths.menu = {};
paths.menu.setIsLoading = "/menu/setIsLoading";
paths.menu.setItems = "/menu/setItems";

export default paths;