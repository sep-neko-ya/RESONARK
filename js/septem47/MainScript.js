var filetitle_str;
var language_str;

window.addEventListener('load', function () {
    // 初期化
    filetitle_str = window.location.href.split('/').pop();
    language_str = document.documentElement.lang;
    // alert(language_str);

    Start();

}, false);

function Start() {
    // RenderHead();

    // GithubPagesのトップは空白になる
    if(filetitle_str === "index.html" || filetitle_str ===  "")
    {
        TeleportByLanguage();
    }
    else
    {
        // 日本語の条件分岐
        RenderEnglishTopPage();
    }
}
function RenderHead(){
    let headElem = document.querySelector('head');
    headElem.innerHTML = englishHeadHTML;
}

function RenderEnglishTopPage(){
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = englishMainNavHTML + englishMainPictureHTML + englishMainAboutHTML + 
    englishMainMovieHTML + englishMainContactHTML + englishMainFooterHTML;
}

function TeleportByLanguage () {
    try{
        var langs = window.navigator.languages || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
        var isJapanese = false;
        langs.forEach(element => {
            if(element == 'ja') isJapanese = true;
        });

        if(isJapanese){
            location.href = relativeJapaneseTopPagePath;
        } else {
            location.href = relativeEnglishTopPagePath;
        }
    }
    catch
    {
        location.href = relativeEnglishTopPagePath;
    }
  }

// Const

const relativeEnglishTopPagePath = "en_top.html";
const relativeJapaneseTopPagePath = "jp_top.html";


var englishHeadHTML = function(){/*
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>RESONARK Series</title>
    <!-- Font Awesome icons (free version)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
        crossorigin="anonymous"></script>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet">
    <!-- Fonts CSS-->
    <link rel="stylesheet" href="css/heading.css">
    <link rel="stylesheet" href="css/body.css">
    <link rel="stylesheet" href="css/septem47/general.css">
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainNavHTML = function(){/*
    <nav class="navbar navbar-expand-lg bg-secondary" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">RESONARK</a>
            <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#portfolio">TOP</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainPictureHTML = function(){/*
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/img/top/rx-v12-maincap.png" class="d-block w-100" alt="...">
        </div>
    </div>
</div>
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainAboutHTML = function(){/*
    <section class="page-section  mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <div class="text-center">
                <h2 class="page-section-heading d-inline-block">ABOUT</h2>
            </div>
            <!-- Icon Divider-->
            <div class="divider-custom ">
                <div class="divider-custom-line"></div>
            </div>
            <!-- About Section Content-->
            <div class="row">
                <div class="col-lg-12 flex-grow-1">
                    <p class="pre-wrap lead">RESONARK Series is an unprecedented rhythm game that offers a different way to play on the desktop and in VR. In VR mode, you use a two-handed hand controller to clap your hands and manipulate six strings as you play.</p>
                </div>
            </div>
        </div>
    </section>
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainMovieHTML = function(){/*
    <section class="page-section bg-primary text-white portfolio" id="portfolio">
        <div class="container">
            <!-- Portfolio Section Heading-->
            <div class="text-center">
                <h2 class="page-section-heading text-white mb-0 d-inline-block">MOVIE</h2>
            </div>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <div class="row justify-content-center">
                <!-- Portfolio Items-->
                <div class="mb-12 s47-youtube-main">
                    <iframe src="https://www.youtube.com/embed/CdvwC2SssHE" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainContactHTML = function(){/*
    <section class="page-section" id="contact">
        <div class="container">
            <!-- Contact Section Heading-->
            <div class="text-center">
                <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
            </div>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
            </div>
            <!-- Contact Section Content-->
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <div class="icon-contact mb-3"><i class="far fa-envelope"></i></div>
                        <div class="text-muted">Email</div><a class="lead font-weight-bold">sepnekoya@gmail.com</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <a href="https://mobile.twitter.com/resonark_x" target="_blank" rel="noopener noreferrer">
                            <div class="icon-contact btn btn-outline-primary btn-social mb-3"><i
                                    class="fab fa-fw fa-twitter"></i></div>
                        </a>
                        <div class="text-muted">Twitter</div>
                        <a class="lead font-weight-bold">@resonark_x</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    */}.toString().split("\n").slice(1,-1).join("\n");

var englishMainFooterHTML = function(){/*
    <footer class="footer text-center">
        <div class="container">
            <!-- Contact Section Heading-->
            <div class="text-center">
                <h2 class="page-section-heading text-light d-inline-block mb-0">DOWNLOAD</h2>
            </div>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
            </div>
            <!-- Contact Section Content-->
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <a href="https://store.steampowered.com/app/1366570/RESONARK_X/" target="_blank" rel="noopener noreferrer">
                            <div class="icon-contact btn btn-outline-primary btn-social mb-3"><i
                                    class="fab fa-fw fa-steam"></i></div>
                        </a>
                        <a class="lead font-weight-bold">Steam</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    */}.toString().split("\n").slice(1,-1).join("\n");