let getHomePage = (req, res) => {
    return res.render("homePage");
}

module.exports = {
    getHomePage: getHomePage,
}