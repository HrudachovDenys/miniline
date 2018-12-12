class MainController{
    static async indexAction(req, res, next){
        res.render('main.view.ejs');
    }
}

module.exports = MainController;