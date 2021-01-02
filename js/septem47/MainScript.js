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
    if (filetitle_str === "index.html" || filetitle_str === "") {
        TeleportByLanguage();
    }
    else {
        if (filetitle_str === "en_top.html") {
            RenderEnglishTopPage();
        } else if (filetitle_str === "jp_top.html") {
            RenderJapaneseTopPage();
        } else if (filetitle_str === "en_qa.html") {
            RenderEnglishQaPage();
        } else if (filetitle_str === "jp_qa.html") {
            RenderJapaneseQaPage();
        } else if (filetitle_str === "en_feature.html") {
            RenderEnglishFeaturePage();
        } else if (filetitle_str === "jp_feature.html") {
            RenderJapaneseFeaturePage();
        }
    }
}
function RenderHead() {
    let headElem = document.querySelector('head');
    headElem.innerHTML = headHTML;
}

function RenderEnglishTopPage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("en") + englishMainPictureHTML + GetMainAboutHTML("en") +
        englishMainMovieHTML + englishMainContactHTML + englishMainFooterHTML + copyrightAndBackButton;
}

function RenderJapaneseTopPage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("ja") + englishMainPictureHTML + GetMainAboutHTML("ja") +
        englishMainMovieHTML + englishMainContactHTML + englishMainFooterHTML + copyrightAndBackButton;
}

function RenderEnglishQaPage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("en") + GetQaTopString("en") + GetQaContentString("en") + GetContentCautionString("en") + copyrightAndBackButton;
}

function RenderJapaneseQaPage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("ja") + GetQaTopString("ja") + GetQaContentString("ja") + GetContentCautionString("ja") + copyrightAndBackButton;
}

function RenderEnglishFeaturePage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("en") + GetFeatureTopString("en") + GetFeatureTableString("en") + GetContentCautionString("en") + copyrightAndBackButton;
}

function RenderJapaneseFeaturePage() {
    let mainElem = document.querySelector('main');
    mainElem.innerHTML = GetNavString("ja") + GetFeatureTopString("ja") + GetFeatureTableString("ja") + GetContentCautionString("ja") + copyrightAndBackButton;
}

function TeleportByLanguage() {
    try {
        var langs = window.navigator.languages || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
        var isJapanese = false;
        langs.forEach(element => {
            if (element == 'ja') isJapanese = true;
        });

        if (isJapanese) {
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
const relativeEnglishFeaturePath = "en_feature.html";
const relativeEnglishQaPath = "en_qa.html";

const relativeJapaneseTopPagePath = "jp_top.html";
const relativeJapaneseFeaturePath = "jp_feature.html";
const relativeJapaneseQaPath = "jp_qa.html";

var headHTML = String.raw`
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>RESONARK Series</title>
    <!-- Font Awesome icons (free version)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
        crossorigin="anonymous"></script>
    <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico?">
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet">
    <!-- Fonts CSS-->
    <link rel="stylesheet" href="css/heading.css">
    <link rel="stylesheet" href="css/body.css">
    <link rel="stylesheet" href="css/septem47/general.css">
    `;

function GetNavString(langstr) {

    var relTopPath = relativeEnglishTopPagePath;
    var relFeaturePath = relativeEnglishFeaturePath;
    var relQaPath = relativeEnglishQaPath;
    var relOtherLangPath = relativeJapaneseTopPagePath;
    var otherLangStr = "日本語ページへ";

    if (langstr === "ja") {
        var relTopPath = relativeJapaneseTopPagePath;
        var relFeaturePath = relativeJapaneseFeaturePath;
        var relQaPath = relativeJapaneseQaPath;
        var relOtherLangPath = relativeEnglishTopPagePath;
        var otherLangStr = "To English Page";
    }

    return String.raw`
    <nav class="navbar navbar-expand-lg bg-secondary" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="${relTopPath}">RESONARK</a>
            <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="${relTopPath}">TOP</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="${relFeaturePath}">FEATURES</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="${relQaPath}">Q&A</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="${relOtherLangPath}">${otherLangStr}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

var englishMainPictureHTML = String.raw`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/img/top/rx-v12-maincap.png" class="d-block w-100" alt="...">
        </div>
    </div>
</div>
    `;

function GetMainAboutHTML(langstr) {

    var aboutStr = String.raw`RESONARK is an unprecedented rhythm game that offers a different way to play on the desktop and in VR. In VR mode, you use a two-handed hand controller to clap your hands and manipulate six strings as you play.
    `;
    var relFeaturePath = relativeEnglishFeaturePath;


    if (langstr === "ja") {
        aboutStr = String.raw`「RESONARK(レゾナーク)」はデスクトップとVRでそれぞれ異なる遊びが楽しめる、今までにないリズムゲームです。<br>どちらのモードでも「演奏によって変化する演出とステージ」を通して、音楽を深く楽しむことができます。
        `;
        var relFeaturePath = relativeJapaneseFeaturePath;

    }

    return String.raw`
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
                <img src="assets/img/top/playimage.jpg" class="img-fluid">
                <p class="pre-wrap lead">${aboutStr}</p>
                <div class="d-flex justify-content-center"><a href="${relFeaturePath}">
                    <button type="button" class="btn btn-outline-primary btn-lg">Check Features</button>
                </a></div>
            </div>
    
        </div>
    </div>
    </section>
    `;
}

var englishMainAboutHTML = String.raw`
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
            <img src="assets/img/top/playimage.jpg" class="img-fluid">
            <p class="pre-wrap lead">RESONARK Series is an unprecedented rhythm game that offers a different wayto play on the desktop and in VR. In VR mode, you use a two-handed hand controller to clap yourhands and manipulate six strings as you play.</p>
            <div class="d-flex justify-content-center"><a href="${relativeEnglishFeaturePath}">
                <button type="button" class="btn btn-outline-primary btn-lg">Check Features</button>
            </a></div>
        </div>

    </div>
</div>
</section>
`;

var englishMainMovieHTML = String.raw`
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
                <div class="mb-12 s47-youtube-main mb-4">
                    <iframe src="https://www.youtube.com/embed/CdvwC2SssHE" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="mb-12 s47-youtube-main">
                <iframe src="https://www.youtube.com/embed/djjRKke1LxU" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            </div>
        </div>
    </section>
    `;

var englishMainContactHTML = String.raw`
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
    `;

var englishMainFooterHTML = String.raw`
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
    `;

function GetQaTopString(langstr) {
    if (langstr === "ja") {
        return String.raw`
        <header class="masthead indivBackGround text-white">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto">
                    <div class="page-heading">
                        <h1>Q&A</h1>
                        <span class="subheading text-lightgray">RESONARKシリーズに関するQ&Aを掲載しています。</span>
                    </div>
                </div>
            </div>
        </div>
        </header>
        `;
    } else {
        return String.raw`
        <header class="masthead indivBackGround text-white">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto">
                    <div class="page-heading">
                        <h1>Q&A</h1>
                        <span class="subheading text-lightgray">Questions and answers about the RESONARK series.</span>
                    </div>
                </div>
            </div>
        </div>
        </header>
        `;
    }
}

function GetQaContentString(langstr) {
    if (langstr === "ja") {
        return String.raw`
    <section class="page-section s47-siteContent">
        <div class="container">
            <!-- About Section Heading-->
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto">
                    <h3 class="d-inline-block mb-3">Q&A</h3>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body d-flex">
                                <div class="w-50 justify-content-start mt-3 mb-3 mr-3">
                                    <img src="assets/img/feature/rx-akariicon.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="mb-3 justify-content-end mb-3">
                                    <p class="card-text">
                                        sep-neko-yaでRESONARKシリーズの譜面を作ったりしている一条
                                        灯里(Akari)です。<br>ここでは、プレイヤーの皆様から高い頻度でお寄せいただく質問に回答させていただきます！</p>
                                    <p class="card-text">
                                        以下、プラットフォーム別に質問をまとめています。プラットフォームごとの違いについては「特徴」のページを見てくださいね。</p>
                                    <p class="card-text">
                                        このQ&Aで書かれている内容は2021年1月1日現在の物で、仕様が予告なく変更される場合がございます。予めご了承ください。</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">Steam版/VRChat版共通</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">VRモード演奏画面</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. 青い音符(ブロウノーツ)をちょうどよいタイミングで処理するコツは？</h6>
                                <h6 class="card-title">A. ちょっと早めを意識してコントローラを動かしましょう</h6>
                                <p class="card-text">
                                    青い音符の処理操作をどうやって検知しているかというと、糸からプレイヤーの手が離された瞬間、その糸(レーン)の判定範囲の中に青い音符があるかサーチされます。サーチされた結果、判定範囲内に青い音符があれば判定ラインとの距離に応じて、PERFECT,
                                    GOOD, BADのいずれかの判定が下されます。</p>
                                <p class="card-text">
                                    望ましいのは、どの距離まで手を動かしたときに「糸から手が離された判定」になるかを自分なりに覚えておくことです。この感覚は数をこなすことで覚えることになると思います。
                                </p>
                                <p class="card-text">
                                    ただ、ゲームを始めてすぐに感覚をつかむことは難しいため、最初は青い音符が判定ラインに重なるくらいに手が離れている状態になるように、少し早めに手を離そうとするのがよさそうだと思います。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. 青い音符(ブロウノーツ)を連続で処理するコツは？</h6>
                                <h6 class="card-title">A. どの方向にコントローラを動かすか意識してみましょう。</h6>
                                <p class="card-text">
                                    青い音符の処理操作をどうやって検知しているかというと、糸からプレイヤーの手が離された瞬間、その糸(レーン)の判定範囲の中に青い音符があるかサーチされます。サーチされた結果、判定範囲内に青い音符があれば判定ラインとの距離に応じて、PERFECT,
                                    GOOD, BADのいずれかの判定が下されます。</p>
                                <p class="card-text">
                                    ここで重要なのは、糸から手を離せるならばどの方向にコントローラを移動させてもよいということです。右にコントローラを動かした方がうまく次の音符を処理できることもあれば、左に動かした方がよいこともあります。
                                </p>
                                <p class="card-text">
                                    おすすめとしては、いまコントローラがあるレーンの青い音符を処理する動作と同時に、次に青い音符が流れてくるレーンを目掛けてコントローラ動かす動作を行うことです。</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. 緑の音符(クラップノーツ)を処理するコツは？</h6>
                                <h6 class="card-title">A. コントローラ同士がどのくらいの距離にあるとき、拍手判定が行われるか確認してみましょう。</h6>
                                <p class="card-text">
                                    緑の音符の処理操作(拍手操作)をどうやって検知しているかというと、コントローラ同士の距離がある一定以下になった瞬間、判定範囲の中に緑の音符があるかサーチされます。サーチされた結果、判定範囲内に緑の音符があれば判定ラインとの距離に応じて、PERFECT,
                                    GOOD, BADのいずれかの判定が下されます。</p>
                                <p class="card-text">
                                    まずはゆっくりと両手を近づけてみることを意識し、どのくらいの距離で拍手操作が検知されているかを体で覚えましょう。力任せにコントローラを振るような操作をしてはいけません。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. 緑の音符(クラップノーツ)の判定距離はどうなってるの？</h6>
                                <h6 class="card-title">A. 一般に、フレーム(黄色い六角形)が大きいほど遠く設定されます。</h6>
                                <p class="card-text">
                                    緑の音符の処理操作(拍手操作)をどうやって検知しているかというと、コントローラ同士の距離がある一定以下になった瞬間、判定範囲の中に緑の音符があるかサーチされます。サーチされた結果、判定範囲内に緑の音符があれば判定ラインとの距離に応じて、PERFECT,
                                    GOOD, BADのいずれかの判定が下されます。</p>
                                <p class="card-text">
                                    「コントローラ同士の距離がある一定以下になった瞬間」とありますが、この閾値は一般にフレームが大きいほど大きくなるように設定されています。
                                </p>
                                <p class="card-text">
                                    Steam版では、VRM連携画面のモデルの大きさの数値を増やす、演奏画面でフレームの大きさを増やすなどで、フレームの大きさを調節できます。
                                </p>
                                <p class="card-text">
                                    VRChat版では、(プラットフォームに仕様に依拠するため、はっきりしたことは書けませんが)体感として小さいアバターを使うほどフレームが大きくなるように思われます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">Steam版のみ</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">VRモードのVRMモデル連携機能</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. VRMモデル連携機能を使ったら何ができるの？</h6>
                                <h6 class="card-title">A. VRモード限定ですが、自分の好きなモデルで楽曲を演奏できます。</h6>
                                <div class="mb-12 s47-youtube-main">
                                    <iframe src="https://www.youtube.com/embed/djjRKke1LxU" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                                <p class="card-text">
                                    VRモードでは、お手持ちのVRM形式のモデルを読み込むことができます。モデルを読み込むことで、そのモデルを演奏画面で演奏する自分のアバターとして使えます。</p>
                                <p class="card-text">
                                    カメラ機能と組み合わせて使うことで、上記の動画のような画面がデスクトップのウインドウに出力されます。</p>
                                <p class="card-text">
                                    現在、ゲームには一切のVRMモデルが付属していないため、モデルは予めお手元にご用意されるようお願い致します。</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. VRMモデルって何？</h6>
                                <h6 class="card-title">A. アバター使用を想定したプラットフォーム非依存のファイル形式です。</h6>
                                <p class="card-text">
                                    詳しくは一般社団法人ＶＲＭコンソーシアムのWebサイト(<a href="https://vrm-consortium.org/"
                                        target="_blank">https://vrm-consortium.org/</a>)をご覧ください。</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. VRMモデルを読み込む方法は？</h6>
                                <h6 class="card-title">A. 現時点でローカルファイルもしくはVRoid Hubから読み込むことができます。</h6>
                                <p class="card-text">
                                    VRoid Hubは、pixivによる3Dキャラクターのための投稿・共有プラットフォームです。VRoid
                                    Hubに対応したコンテンツ内で、登録されたキャラクターを呼び出し、アバターとしての利用ができます。</p>
                                <p class="card-text">
                                    VRoid Hubのご利用にあたっては、VRoid
                                    HubのWebサイト(<a href="https://hub.vroid.com/"
                                        target="_blank">https://hub.vroid.com/</a>)をご覧ください。</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. VRMモデル連携機能で読み込んだモデルのトラッキング方式は？</h6>
                                <h6 class="card-title">A. 現時点で3点トラッキング(HMD, 両手のコントローラ)のみとなります。</h6>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="d-inline-block mb-3">ランキングについて</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. Steam版の楽曲別スコアランキングが見たい</h6>
                                <h6 class="card-title">A. 以下のページに記載しております。</h6>
                                <p class="card-text">
                                    Steamによって提供されるグローバルランキング(<a
                                        href="https://steamcommunity.com/stats/1366570/leaderboards/5050098"
                                        target="_blank">https://steamcommunity.com/stats/1366570/leaderboards/5050098</a>)をご覧ください。
                                </p>
                                <p class="card-text">
                                    なお、このランキングにスコアが登録されるには、楽曲のクリア時にSteamクライアントが正常に動作していることなどの条件が必要ですので予めご了承ください。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="d-inline-block mb-3">規約などについて</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. Steam版のエンドユーザーライセンスとプライバシーポリシーは？</h6>
                                <h6 class="card-title">A. 以下のページに記載しております。</h6>
                                <p class="card-text">
                                    ソフトウェアのご利用前Steam版のEULA, プライバシーポリシー掲載ページ(<a
                                        href="https://store.steampowered.com//eula/1366570_eula_0"
                                        target="_blank">https://store.steampowered.com//eula/1366570_eula_0</a>)をご覧ください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. SNS等でゲーム配信や動画投稿をしてもいいですか？</h6>
                                <p class="card-text">
                                    ・演奏画面以外について</p>
                                <p class="card-text">
                                    弊サークルの判断で許可します。ただし、ローカルファイルの読み込み画面や外部サービスとの連携画面なども表示されるため、配信箇所にはご注意ください。また、法人の方は配信前にご一報くださいますと幸いです。
                                </p>
                                <p class="card-text">
                                    ・演奏画面について</p>
                                <p class="card-text">
                                    原則、楽曲を始めとするコンテンツご提供者様には「第三者による本作品のゲームプレイ共有目的のコンテンツの利用（主にゲームのプレイ動画の投稿など）」についてご許可いただいておりますので、問題ないと思われます。ただし、例外的なコンテンツもありますので、以下に記述します。
                                </p>
                                <p class="card-text">
                                    * アルバム「without Permission」が出典の楽曲(Chartreuse Green, Psyched Fevereiro, Dogbite)</p>
                                <p class="card-text">
                                    弊サークルに対して直接「第三者による本作品のゲームプレイ共有目的のコンテンツの利用」をご許可いただいておりません。楽曲利用についてはアルバムのWebサイト( <a
                                        href="http://c-h-s.me/chs0038/" target="_blank">http://c-h-s.me/chs0038/</a>
                                    )「使用するにあたって」を参照いただいた上でご判断いただくようお願い致します。</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">VRChat版のみ</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">規約などについて</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. SNS等でゲーム配信や動画投稿をしてもいいですか？</h6>
                                <p class="card-text">
                                    VRChat版はseptem47というユーザーよりアップロードされたワールドです。このワールドにはVRChatのTerm of Use(<a
                                        href="https://hello.vrchat.com/legal">https://hello.vrchat.com/legal</a>)が適用されますので、配信なども含めたプラットフォームの規約についてはTerm
                                    of Useをご覧いただいた上ご判断いただくようお願い致します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    `;
    }
    else {
        return String.raw`
    <section class="page-section s47-siteContent">
        <div class="container">
            <!-- About Section Heading-->
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto">
                    <h3 class="d-inline-block mb-3">Q&A</h3>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body d-flex">
                                <div class="w-50 justify-content-start mt-3 mb-3 mr-3">
                                    <img src="assets/img/feature/rx-akariicon.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="mb-3 justify-content-end mb-3">
                                    <p class="card-text">
                                    I'm Akari, and I'm working on sep-neko-ya. Here, I'll be answering some of the most frequently asked questions from players!</p>
                                    <p class="card-text">
                                    Below is a list of questions by platform. Please see the "Features" page for more information about the differences between the platforms.</p>
                                    <p class="card-text">
                                    The information contained in this Q&A is current as of January 1, 2021, and specifications are subject to change without notice. Please be forewarned.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">Steam version/VRChat version</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">VR Mode Performance Scene</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. How do you handle the blue notes (brow notes) at the right time?</h6>
                                <h6 class="card-title">A. Let's move the controller with a little bit of speed in mind.</h6>
                                <p class="card-text">
                                When the player's hand is released from the string, a search is made to see if there is a blue note in the judging range of the string (lane). If there is a blue note in the judging range, it will be judged as PERFECT, GOOD, or BAD, depending on the distance from the judging line.</p>
                                <p class="card-text">
                                What is desirable is to remember in your own way how far you have to move your hand. I think you will learn this feeling by doing a few.
                                </p>
                                <p class="card-text">
                                However, since it is difficult to get a feel for the game right away, I think it would be a good idea to try to release your hand a little earlier at first.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. How do I get rid of the blue notes (brow notes) in a sequence?</h6>
                                <h6 class="card-title">A. Be aware of which direction you are moving the controller in.</h6>
                                <p class="card-text">
                                When the player's hand is released from the string, a search is made to see if there is a blue note in the judging range of the string (lane). If there is a blue note in the judging range, it will be judged as PERFECT, GOOD, or BAD, depending on the distance from the judging line.</p>
                                <p class="card-text">
                                The important thing to remember is that you can move the controller in any direction as long as you can keep your hands off the string. Sometimes moving the controller to the right will work better for the next note, and sometimes moving it to the left will work better.
                                </p>
                                <p class="card-text">
                                I recommend that you move the controller to the next lane where the blue notes will flow at the same time as you process the blue notes in the lane where the controller is now.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. How to process the green notes (clap notes)?</h6>
                                <h6 class="card-title">A. Let's check how far away the controllers are from each other to determine clapping.</h6>
                                <p class="card-text">
                                The moment the distance between the controllers drops below a certain level, Game System will made to see if there is a green note in the judging range. If there is a green note within the judging range, it will be judged as either PERFECT, GOOD, or BAD, depending on the distance from the judging line.</p>
                                <p class="card-text">
                                First of all, be aware of slowly bringing your hands closer to each other, and let your body learn at what distance the clapping operation is detected. Do not try to shake the controller with force.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. How is the judging distance of green notes (clap notes) set?</h6>
                                <h6 class="card-title">A. In general, the larger the frame (yellow hexagon), the farther it is set.</h6>
                                <p class="card-text">
                                The moment the distance between the controllers drops below a certain level, Game System will made to see if there is a green note in the judging range. If there is a green note within the judging range, it will be judged as either PERFECT, GOOD, or BAD, depending on the distance from the judging line.</p>
                                <p class="card-text">
                                It says, "The moment the distance between the controllers drops below a certain level. This threshold is generally set to increase with the size of the frame.
                                </p>
                                <p class="card-text">
                                In the Steam version, you can adjust the size of the frame by increasing the model size value in the VRM linkage scene, or by increasing the frame size in the performance scene.
                                </p>
                                <p class="card-text">
                                In the VRChat version, it seems that the smaller the avatar, the larger the frame (although this depends on the platform specs, so I can't say for sure).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">Steam version</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">VRM model loading function in VR mode</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. What can I do with the VRM model loading function?</h6>
                                <h6 class="card-title">A. In VR mode only, you can play songs with your own models.</h6>
                                <div class="mb-12 s47-youtube-main">
                                    <iframe src="https://www.youtube.com/embed/djjRKke1LxU" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                                <p class="card-text">
                                In VR mode, you can import your own VRM models. By importing a model, you can use that model as your avatar to perform on the performance screen.</p>
                                <p class="card-text">
                                When used in combination with the camera function, a screen like the one in the video above will be output to the desktop window.</p>
                                <p class="card-text">
                                Currently, the game does not come with any VRM models, so please prepare your models in advance.</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. What is the VRM model?</h6>
                                <h6 class="card-title">A. This is a platform-independent file format designed for avatar use.</h6>
                                <p class="card-text">
                                For more information, please visit the website of the VRM Consortium. <a href="https://vrm-consortium.org/"target="_blank">https://vrm-consortium.org/</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. How do I load a VRM model?</h6>
                                <h6 class="card-title">A. At this time, it can be loaded from a local file or from VRoid Hub.</h6>
                                <p class="card-text">
                                VRoid Hub is a posting and sharing platform for 3D characters by pixiv. registered characters can be called up and used as avatars in the contents compatible with VRoid Hub.</p>
                                <p class="card-text">
                                To use VRoid Hub, please visit the following website. <a href="https://hub.vroid.com/"
                                        target="_blank">https://hub.vroid.com/</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. What is the tracking method for models loaded with the VRM linkage function?</h6>
                                <h6 class="card-title">A. At the present time, only three-point tracking (HMD, two-handed controller) is available.</h6>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="d-inline-block mb-3">Rankings</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. I'd like to see the score ranking by song for the Steam version.</h6>
                                <p class="card-text">
                                See the global rankings provided by Steam. <a
                                        href="https://steamcommunity.com/stats/1366570/leaderboards/5050098"
                                        target="_blank">https://steamcommunity.com/stats/1366570/leaderboards/5050098</a>
                                </p>
                                <p class="card-text">
                                Please note that in order for your score to be registered in this ranking, the Steam client must be working properly when the song is cleared.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="d-inline-block mb-3">About Terms of Use</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. What is the end user license and privacy policy for the Steam version?</h6>
                                <p class="card-text">
                                    <a href="https://store.steampowered.com//eula/1366570_eula_0"
                                        target="_blank">https://store.steampowered.com//eula/1366570_eula_0</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. Can I distribute games or post videos on social networking sites, etc.?</h6>
                                <p class="card-text">
                                    - About non-Performance scenes</p>
                                <p class="card-text">
                                It is allowed at the discretion of our circle. However, please pay attention to the distribution point, because the screen for loading local files and the screen for linking with external services will be displayed. Also, if you are a corporation, please let us know before distributing.
                                </p>
                                <p class="card-text">
                                    - About the Performance scenes</p>
                                <p class="card-text">
                                As a general rule, the content providers, including the music, have given us permission to use their content for the purpose of sharing the gameplay of this work with third persons (mainly by posting gameplay videos), so there should be no problem. However, there are some exceptions to this rule, which are described below.
                                </p>
                                <p class="card-text">
                                    * Music from the album "without Permission".(Chartreuse Green, Psyched Fevereiro, Dogbite)</p>
                                <p class="card-text">
                                We do not directly ask for permission to "use the contents of this work for gameplay sharing purposes by third persons". Please refer to the album's website before making a decision on the use of the music.( <a
                                        href="http://c-h-s.me/chs0038/" target="_blank">http://c-h-s.me/chs0038/</a>
                                    )</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="d-inline-block mb-3">VRChat version</h4>
                    </div>
                    <div>
                        <h5 class="d-inline-block mb-3">About Terms of Use</h5>
                    </div>
                    <div class="card-deck mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Q. Can I distribute games or post videos on social networking sites, etc.?</h6>
                                <p class="card-text">
                                The VRChat version is a world uploaded by a user named septem47. This world is subject to VRChat's Term of Use, so please refer to the Term of Use for the platform's terms and conditions, including distribution.(<a
                                        href="https://hello.vrchat.com/legal">https://hello.vrchat.com/legal</a>)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    `;
    }
}

function GetContentCautionString(langstr) {
    if(langstr === "ja"){
        return String.raw`
        <section class="page-section s47-siteContent bg-primary text-white">
            <div class="container">
                <!-- About Section Heading-->
                <div class="row">
                    <div class="col-lg-11 col-md-11 mx-auto">
                        <h3 class="d-inline-block">注意事項</h3>
                        <p>本サイトその他関連サイト等に記載されている会社名、システム名、製品名は一般に各社の登録商標または商標です。なお、本文および図表中では、「™」、「®」は明記しておりません。</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
    else
    {
        return String.raw`
        <section class="page-section s47-siteContent bg-primary text-white">
            <div class="container">
                <!-- About Section Heading-->
                <div class="row">
                    <div class="col-lg-11 col-md-11 mx-auto">
                        <h3 class="d-inline-block">Caution</h3>
                        <p>Company names, system names, and product names appearing on this site and other related sites are generally registered trademarks or trademarks of their respective owners. Please note that "™" and "®" are not indicated in the text and figures.</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

function GetFeatureTopString(langstr) {
    if(langstr === "ja"){
    return String.raw`
    <header class="masthead indivBackGround text-white">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto">
                    <div class="page-heading">
                        <h1>特徴</h1>
                        <span class="subheading text-lightgray">RESONARKシリーズや、それぞれの作品の特徴について解説します。</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;
    }
    else
    {
        return String.raw`
        <header class="masthead indivBackGround text-white">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-11 col-md-11 mx-auto">
                        <div class="page-heading">
                            <h1>Features</h1>
                            <span class="subheading text-lightgray">This section describes the RESONARK series and the feature of each of its works.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
}

function GetFeatureTableString(langstr) {
    if(langstr === "ja"){
    return String.raw`
    <section class="page-section s47-siteContent">
        <div class="container">
            <!-- About Section Heading-->
            <div class="row">
                <div class="col-lg-11 col-md-11 mx-auto mb-4">
                    <h3 class="d-inline-block">概要</h3>
                    <p>「RESONARK(レゾナーク)」はデスクトップとVRでそれぞれ異なる遊びが楽しめる、今までにないリズムゲームです。</p>
                    <p>VRモードでは、両手に持ったハンドコントローラを使って、拍手をしたり、6本の糸を操ったりしながら演奏を行います。</p>
                    <p>どちらのモードでも「演奏によって変化する演出とステージ」を通して、深く音楽を楽しむことができます。</p>
                </div>

                <div class="col-lg-11 col-md-11 mx-auto mb-4">
                    <h3 class="d-inline-block mb-4">遊び方 (VRモード)</h3>
                    <div class="mb-4 s47-youtube-main">
                        <iframe src="https://www.youtube.com/embed/gxspCAF8cME" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <img src="assets/img/feature/rxtuto-jp.png" class="img-fluid">
                </div>

                <div class="col-lg-11 col-md-11 mx-auto mb-4">
                    <h3 class="d-inline-block">プラットフォーム別機能表</h3>
                    <p>情報は2021年1月1日時点のものです。</p>
                    <table class="table table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th title="Field #1">プラットフォーム</th>
                                <th title="Field #2">Steam版(RESONARK X)</th>
                                <th title="Field #3">VRChat版(RESONARK, RESONARK 2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VRモード</td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i>(※1)</td>
                            </tr>
                            <tr>
                                <td>デスクトップモード</td>
                                <td><i class="fas fa-check"></i>(※2)</td>
                                <td><i class="fas fa-check"></i>(※2)</td>
                            </tr>
                            <tr>
                                <td>収録楽曲</td>
                                <td>28程度</td>
                                <td>最大12程度/1ワールド(※3)</td>
                            </tr>
                            <tr>
                                <td>同時に表示される音符数</td>
                                <td>45程度</td>
                                <td>20程度</td>
                            </tr>
                            <tr>
                                <td>アバター形式</td>
                                <td>VRM(Local/Vroid Hub)</td>
                                <td>VRChat Avatar(※4)</td>
                            </tr>
                            <tr>
                                <td>プレイヤー撮影モード(VR)</td>
                                <td><i class="fas fa-check"></i>(※5)</td>
                                <td>△(※5)</td>
                            </tr>
                            <tr>
                                <td>プラットフォーム</td>
                                <td>Steam VR(Oculus, HTC VIVE, Valve Index), Steam(Windows)</td>
                                <td>VRChatの対応するプラットフォーム(※6)</td>
                            </tr>
                            <tr>
                                <td>リンク</td>
                                <td><a href="https://store.steampowered.com/app/1366570/" target="_blank"
                                        rel="noopener noreferrer">LINK (Steam)</a></td>
                                <td><a href="https://www.vrchat.com/home/launch?worldId=wrld_2e647e8d-8430-4b40-8bd7-914f1fa817b2"
                                        target="_blank" rel="noopener noreferrer">LINK (RESONARK World)</a>, <br><a
                                        href="https://www.vrchat.com/home/launch?worldId=wrld_b71d0c77-58e7-49ae-8baa-0ab7ae784486"
                                        target="_blank" rel="noopener noreferrer">LINK (RESONARK 2 World)</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>(※1) VRChat版はVRCSDK3で作成されており、動作がプラットフォームに強く依存する可能性があります。</p>
                    <p>(※2) Steam版では6レーン+αに最適化されたデスクトップモードが楽しめます。VRChat版ではVRモード準拠のデスクトップモードが遊べます。</p>
                    <p>(※3) VRChat版は1ワールドの容量上限が50MBであるため、1ワールドごとの収録楽曲数が制限されます。</p>
                    <p>(※4) VRChat版で利用したいアバターはVRCSDK経由でVRChatにアップロードしておく必要があります。</p>
                    <p>(※5) Steam版での撮影モードはカメラの角度、動かし方をあらかじめ用意された数パターンから選ぶ形式です。VRChat版でプレイの様子を撮影する場合は、VRChatのカメラ機能を利用する必要があります。</p>
                    <p>(※6) VRChat版は、PC/Quest向けワールドで遊べる機器に対応しています。</p>
                </div>

                <div class="col-lg-11 col-md-11 mx-auto mb-4">
                    <h3 class="d-inline-block">Q&A</h3>
                    <p>より詳しい仕様解説などをQ&Aページにまとめました。</p>
                    <div class="d-flex justify-content-start"><a href="${relativeJapaneseQaPath}">
                        <button type="button" class="btn btn-outline-primary btn-lg">Q&Aページに進む</button>
                    </a></div>
                </div>
            </div>
        </div>
    </section>
    `;
    }
    else
    {
        return String.raw`
        <section class="page-section s47-siteContent">
            <div class="container">
                <!-- About Section Heading-->
                <div class="row">
                    <div class="col-lg-11 col-md-11 mx-auto mb-4">
                        <h3 class="d-inline-block">About</h3>
                        <p>RESONARK is an unprecedented rhythm game that offers a different way to play on the desktop and in VR.</p>
                        <p>In VR mode, you use a two-handed hand controller to clap your hands and manipulate six strings as you play.</p>
                        <p>In both modes, you will be able to enjoy music deeply through the performance and stage that changes depending on your performance.</p>
                    </div>
    
                    <div class="col-lg-11 col-md-11 mx-auto mb-4">
                        <h3 class="d-inline-block mb-4">How to play (VR Mode)</h3>
                        <div class="mb-4 s47-youtube-main">
                            <iframe src="https://www.youtube.com/embed/gxspCAF8cME" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <img src="assets/img/feature/rxtuto-en.png" class="img-fluid">
                    </div>
    
                    <div class="col-lg-11 col-md-11 mx-auto mb-4">
                        <h3 class="d-inline-block">Functional Table by Platform</h3>
                        <p>Information is current as of January 1, 2021.</p>
                        <table class="table table-bordered table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th title="Field #1">Version</th>
                                    <th title="Field #2">Steam version(RESONARK X)</th>
                                    <th title="Field #3">VRChat version(RESONARK, RESONARK 2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VR Mode</td>
                                    <td><i class="fas fa-check"></i></td>
                                    <td><i class="fas fa-check"></i>(※1)</td>
                                </tr>
                                <tr>
                                    <td>Desktop Mode</td>
                                    <td><i class="fas fa-check"></i>(※2)</td>
                                    <td><i class="fas fa-check"></i>(※2)</td>
                                </tr>
                                <tr>
                                    <td>Playable Songs</td>
                                    <td>About 28</td>
                                    <td>Max 12/1 World(※3)</td>
                                </tr>
                                <tr>
                                    <td>Number of notes displayed at once</td>
                                    <td>About 45</td>
                                    <td>About 20</td>
                                </tr>
                                <tr>
                                    <td>Avatar format</td>
                                    <td>VRM(Local/Vroid Hub)</td>
                                    <td>VRChat Avatar(※4)</td>
                                </tr>
                                <tr>
                                    <td>Player shot mode(VR)</td>
                                    <td>△(※5)</td>
                                    <td><i class="fas fa-check"></i>(※5)</td>
                                </tr>
                                <tr>
                                    <td>Platform</td>
                                    <td>Steam VR(Oculus, HTC VIVE, Valve Index), Steam(Windows)</td>
                                    <td>Platforms supported by VRChat(※6)</td>
                                </tr>
                                <tr>
                                    <td>Links</td>
                                    <td><a href="https://store.steampowered.com/app/1366570/" target="_blank"
                                            rel="noopener noreferrer">LINK (Steam)</a></td>
                                    <td><a href="https://www.vrchat.com/home/launch?worldId=wrld_2e647e8d-8430-4b40-8bd7-914f1fa817b2"
                                            target="_blank" rel="noopener noreferrer">LINK (RESONARK World)</a>, <br><a
                                            href="https://www.vrchat.com/home/launch?worldId=wrld_b71d0c77-58e7-49ae-8baa-0ab7ae784486"
                                            target="_blank" rel="noopener noreferrer">LINK (RESONARK 2 World)</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>(※1) The VRChat version is created with VRCSDK3, and its behavior may be strongly platform-dependent.</p>
                        <p>(※2) The Steam version offers a desktop mode optimized for 6 lanes plus alpha, while the VRChat version offers a VR mode compliant desktop mode.</p>
                        <p>(※3) The VRChat version has a capacity limit of 50MB per world, which limits the number of songs recorded per world.</p>
                        <p>(※4) Avatars that you want to use in the VRChat version need to be uploaded to VRChat via VRCSDK.</p>
                        <p>(※5) In the Steam version, you can choose the angle and movement of the camera from several pre-designed patterns. If you want to use the VRChat version, you need to use the camera function of VRChat.</p>
                        <p>(※6) The VRChat version is compatible with devices that can play in the world for PC/Quest.</p>
                    </div>
    
                    <div class="col-lg-11 col-md-11 mx-auto mb-4">
                        <h3 class="d-inline-block">Q&A</h3>
                        <p>A more detailed explanation of the specifications is provided in the Q&A page.</p>
                        <div class="d-flex justify-content-start"><a href="${relativeEnglishQaPath}">
                            <button type="button" class="btn btn-outline-primary btn-lg">Q&A</button>
                        </a></div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

var copyrightAndBackButton = String.raw`
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
        <div class="container"><small class="pre-wrap">Copyright © sep-neko-ya 2020 - 2021 </small></div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div class="scroll-to-top position-fixed"><a
            class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i
                class="fa fa-chevron-up"></i></a></div>
`;