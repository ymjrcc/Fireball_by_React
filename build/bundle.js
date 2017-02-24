webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(178);

	var _Home = __webpack_require__(233);

	var _Home2 = _interopRequireDefault(_Home);

	var _Discover = __webpack_require__(256);

	var _Discover2 = _interopRequireDefault(_Discover);

	var _PersonalBox = __webpack_require__(285);

	var _PersonalBox2 = _interopRequireDefault(_PersonalBox);

	var _Personal = __webpack_require__(294);

	var _Personal2 = _interopRequireDefault(_Personal);

	var _MyOrders = __webpack_require__(296);

	var _MyOrders2 = _interopRequireDefault(_MyOrders);

	var _MySubscriptions = __webpack_require__(303);

	var _MySubscriptions2 = _interopRequireDefault(_MySubscriptions);

	var _MyLikes = __webpack_require__(307);

	var _MyLikes2 = _interopRequireDefault(_MyLikes);

	var _Coupons = __webpack_require__(310);

	var _Coupons2 = _interopRequireDefault(_Coupons);

	var _Helps = __webpack_require__(311);

	var _Helps2 = _interopRequireDefault(_Helps);

	var _Settings = __webpack_require__(314);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _Topic = __webpack_require__(317);

	var _Topic2 = _interopRequireDefault(_Topic);

	var _Detail = __webpack_require__(326);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Ranking = __webpack_require__(331);

	var _Ranking2 = _interopRequireDefault(_Ranking);

	var _Buyers = __webpack_require__(334);

	var _Buyers2 = _interopRequireDefault(_Buyers);

	var _Buyer = __webpack_require__(337);

	var _Buyer2 = _interopRequireDefault(_Buyer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/discover', component: _Discover2.default }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/personal', component: _PersonalBox2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Personal2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/order', component: _MyOrders2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/subscription', component: _MySubscriptions2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/like', component: _MyLikes2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/coupon', component: _Coupons2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/help', component: _Helps2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/personal/setting', component: _Settings2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/topic/:name', component: _Topic2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/detail/:id', component: _Detail2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/ranking', component: _Ranking2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/buyers', component: _Buyers2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/buyer/:id', component: _Buyer2.default })
	), document.getElementById('app'));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _BottomTab = __webpack_require__(234);

	var _BottomTab2 = _interopRequireDefault(_BottomTab);

	var _home = __webpack_require__(245);

	var _home2 = _interopRequireDefault(_home);

	var _productsData = __webpack_require__(248);

	var _productsData2 = _interopRequireDefault(_productsData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeTop = function (_Component) {
	    _inherits(HomeTop, _Component);

	    function HomeTop() {
	        _classCallCheck(this, HomeTop);

	        return _possibleConstructorReturn(this, (HomeTop.__proto__ || Object.getPrototypeOf(HomeTop)).apply(this, arguments));
	    }

	    _createClass(HomeTop, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { 'data-maxwidth': true, className: _home2.default.homeTop },
	                '\u4ECA\u65E5\u63A8\u8350'
	            );
	        }
	    }]);

	    return HomeTop;
	}(_react.Component);

	var RecommendBox = function (_Component2) {
	    _inherits(RecommendBox, _Component2);

	    function RecommendBox() {
	        _classCallCheck(this, RecommendBox);

	        return _possibleConstructorReturn(this, (RecommendBox.__proto__ || Object.getPrototypeOf(RecommendBox)).apply(this, arguments));
	    }

	    _createClass(RecommendBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.recommendBox },
	                this.props.children
	            );
	        }
	    }]);

	    return RecommendBox;
	}(_react.Component);

	var RecommendItem = function (_Component3) {
	    _inherits(RecommendItem, _Component3);

	    function RecommendItem() {
	        _classCallCheck(this, RecommendItem);

	        return _possibleConstructorReturn(this, (RecommendItem.__proto__ || Object.getPrototypeOf(RecommendItem)).apply(this, arguments));
	    }

	    _createClass(RecommendItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/detail/" + this.props.id, className: _home2.default.recommendItem },
	                _react2.default.createElement(
	                    'div',
	                    { className: _home2.default.recommendImgBox },
	                    _react2.default.createElement('img', { className: _home2.default.recommendImg, src: __webpack_require__(249)("./" + this.props.cover) })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _home2.default.authorRow },
	                    _react2.default.createElement(
	                        'span',
	                        { className: _home2.default.author },
	                        this.props.author
	                    ),
	                    ' · ',
	                    _react2.default.createElement(
	                        'span',
	                        { className: _home2.default.date },
	                        this.props.date
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _home2.default.title },
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _home2.default.likesRow },
	                    _react2.default.createElement(
	                        'span',
	                        { className: _home2.default.likes },
	                        this.props.likes > 999 ? (this.props.likes / 1000).toFixed(1) + "k" : this.props.likes
	                    )
	                )
	            );
	        }
	    }]);

	    return RecommendItem;
	}(_react.Component);

	var Home = function (_Component4) {
	    _inherits(Home, _Component4);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }

	        // ajax方法获取本地数据，这个路径在build模式下有效
	        // componentDidMount(){
	        //     function ajax(url){
	        //         var xhr = new XMLHttpRequest;
	        //         xhr.onload = function() {
	        //             console.log(this.response);
	        //         };
	        //         xhr.open("get", url, true);
	        //         xhr.send();
	        //     }
	        //     ajax("../app/data/productsData.json");
	        // }

	    }, {
	        key: 'renderRecommendBox',
	        value: function renderRecommendBox(data) {
	            var dataArr = [];
	            for (var i = 0; i < data.length; i++) {
	                dataArr.push(_react2.default.createElement(RecommendItem, {
	                    key: data[i].id,
	                    id: data[i].id,
	                    cover: data[i].cover,
	                    author: data[i].author,
	                    date: data[i].date,
	                    title: data[i].title,
	                    likes: data[i].likes
	                }));
	            }
	            return dataArr;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _home2.default.home },
	                _react2.default.createElement(HomeTop, null),
	                _react2.default.createElement(
	                    RecommendBox,
	                    null,
	                    this.renderRecommendBox(_productsData2.default)
	                ),
	                _react2.default.createElement(_BottomTab2.default, null)
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _bottom = __webpack_require__(235);

	var _bottom2 = _interopRequireDefault(_bottom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabItem = function (_Component) {
	    _inherits(TabItem, _Component);

	    function TabItem() {
	        _classCallCheck(this, TabItem);

	        return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
	    }

	    _createClass(TabItem, [{
	        key: 'render',
	        value: function render() {
	            var name = this.props.name;
	            var curTab = this.props.curTab;
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { className: _bottom2.default.tabItem, to: "/" + name },
	                _react2.default.createElement('div', {
	                    className: name == curTab ? _bottom2.default[name + "1"] : _bottom2.default[name + "0"]
	                })
	            );
	        }
	    }]);

	    return TabItem;
	}(_react.Component);

	var BottomTab = function (_Component2) {
	    _inherits(BottomTab, _Component2);

	    function BottomTab() {
	        _classCallCheck(this, BottomTab);

	        return _possibleConstructorReturn(this, (BottomTab.__proto__ || Object.getPrototypeOf(BottomTab)).apply(this, arguments));
	    }

	    _createClass(BottomTab, [{
	        key: 'render',
	        value: function render() {
	            var curHash = location.hash.substring(2) || "home";
	            return _react2.default.createElement(
	                'div',
	                { 'data-maxwidth': true, className: _bottom2.default.bottomTab },
	                _react2.default.createElement(TabItem, { curTab: curHash, name: 'home' }),
	                _react2.default.createElement(TabItem, { curTab: curHash, name: 'discover' }),
	                _react2.default.createElement(TabItem, { curTab: curHash, name: 'personal' })
	            );
	        }
	    }]);

	    return BottomTab;
	}(_react.Component);

	exports.default = BottomTab;

/***/ },

/***/ 235:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"bottomTab":"bottom__bottomTab-2qxSD","tabItem":"bottom__tabItem-3Pb4R","home0":"bottom__home0-1ojpy","home1":"bottom__home1-2gEnY","discover0":"bottom__discover0-lnra8","discover1":"bottom__discover1-i3wet","personal0":"bottom__personal0-1BCq8","personal1":"bottom__personal1-_ZjRX"};

/***/ },

/***/ 245:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"home":"home__home-eoHdD","homeTop":"home__homeTop-1lDmB","recommendBox":"home__recommendBox-7ndF7","recommendItem":"home__recommendItem-3ELmm","recommendImgBox":"home__recommendImgBox-1gMr0","recommendImg":"home__recommendImg-atweB","authorRow":"home__authorRow-3tv4Q","author":"home__author-2055G","date":"home__date-18DcC","title":"home__title-1WgcK","likesRow":"home__likesRow-1g9T1","likes":"home__likes-1f_1r"};

/***/ },

/***/ 248:
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "p000",
			"title": "论百搭，我只服MA-1飞行夹克",
			"author": "九磅十五便士",
			"authorId": "b003",
			"cover": "c-p000.jpg",
			"date": "2017-02-22",
			"likes": 93,
			"share": 14,
			"price": 379,
			"text": "正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；正文：论百搭，我只服MA-1飞行夹克；"
		},
		{
			"id": "p001",
			"title": "吃冻干水果，像宇航员一样健康（二）",
			"author": "吃喝找野马",
			"authorId": "b007",
			"cover": "c-p001.jpg",
			"date": "2017-02-21",
			"likes": 2343,
			"share": 253,
			"price": 24.8,
			"text": "正文：吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；吃冻干水果，像宇航员一样健康（二）；"
		},
		{
			"id": "p002",
			"title": "开学了，你的麦片准备好了吗？",
			"author": "八号丸子",
			"authorId": "b008",
			"cover": "c-p002.jpg",
			"date": "2017-02-21",
			"likes": 2956,
			"share": 667,
			"price": 42,
			"text": "正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？正文：开学了，你的麦片准备好了吗？"
		},
		{
			"id": "p003",
			"title": "这把刀戳到我心中的某个G点了",
			"author": "梵高先生",
			"authorId": "b000",
			"cover": "c-p003.jpg",
			"date": "2017-02-21",
			"likes": 2366,
			"share": 435,
			"price": 68,
			"text": "正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；正文：这把刀戳到我心中的某个G点了；"
		},
		{
			"id": "p004",
			"title": "套上壳，回到那个红白机年代",
			"author": "有怪售",
			"authorId": "b002",
			"cover": "c-p004.jpg",
			"date": "2017-02-20",
			"likes": 4935,
			"share": 2155,
			"price": 29,
			"text": "正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；正文：套上壳，回到那个红白机年代；"
		},
		{
			"id": "p005",
			"title": "在家如何自制COCO奶茶？",
			"author": "贪吃鬼小埋",
			"authorId": "b009",
			"cover": "c-p005.jpg",
			"date": "2017-02-20",
			"likes": 6098,
			"share": 1263,
			"price": 4.5,
			"text": "正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？正文：在家如何自制COCO奶茶？"
		}
	];

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./c-p000.jpg": 250,
		"./c-p001.jpg": 251,
		"./c-p002.jpg": 252,
		"./c-p003.jpg": 253,
		"./c-p004.jpg": 254,
		"./c-p005.jpg": 255
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 249;


/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/10cfb6b6.c-p000.jpg";

/***/ },

/***/ 251:
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7f31dece.c-p002.jpg";

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9c5865ba.c-p003.jpg";

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7bd7e239.c-p004.jpg";

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/acea6f14.c-p005.jpg";

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _FollowBtn = __webpack_require__(257);

	var _FollowBtn2 = _interopRequireDefault(_FollowBtn);

	var _BottomTab = __webpack_require__(234);

	var _BottomTab2 = _interopRequireDefault(_BottomTab);

	var _discover = __webpack_require__(260);

	var _discover2 = _interopRequireDefault(_discover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DiscoverTop = function DiscoverTop() {
	    return _react2.default.createElement(
	        'div',
	        { 'data-maxwidth': true, className: _discover2.default.discoverTop },
	        '\u53D1 \u73B0'
	    );
	};

	var DiscoverTopRow = function (_Component) {
	    _inherits(DiscoverTopRow, _Component);

	    function DiscoverTopRow() {
	        _classCallCheck(this, DiscoverTopRow);

	        return _possibleConstructorReturn(this, (DiscoverTopRow.__proto__ || Object.getPrototypeOf(DiscoverTopRow)).apply(this, arguments));
	    }

	    _createClass(DiscoverTopRow, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.discoverTopRow },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/ranking', className: _discover2.default.discoverTopItem },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u672C \u5468 \u597D \u7269 \u6392 \u884C'
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/buyers', className: _discover2.default.discoverTopItem },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u6240 \u6709 \u4E70 \u624B'
	                    )
	                )
	            );
	        }
	    }]);

	    return DiscoverTopRow;
	}(_react.Component);

	var DiscoverSection = function (_Component2) {
	    _inherits(DiscoverSection, _Component2);

	    function DiscoverSection() {
	        _classCallCheck(this, DiscoverSection);

	        return _possibleConstructorReturn(this, (DiscoverSection.__proto__ || Object.getPrototypeOf(DiscoverSection)).apply(this, arguments));
	    }

	    _createClass(DiscoverSection, [{
	        key: 'render',
	        value: function render() {
	            var name = encodeURIComponent(this.props.name);
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/topic/" + name },
	                _react2.default.createElement(
	                    'div',
	                    { className: _discover2.default.discoverSection },
	                    _react2.default.createElement('div', { className: _discover2.default.rightIcon }),
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        this.props.name
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        this.props.number + ' 篇推荐'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _discover2.default.sectionImgBox },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _discover2.default.sectionImg },
	                            _react2.default.createElement('img', { src: __webpack_require__(265)("./" + this.props.imgs[0] + '.jpg') })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _discover2.default.sectionImg },
	                            _react2.default.createElement('img', { src: __webpack_require__(265)("./" + this.props.imgs[1] + '.jpg') })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _discover2.default.sectionImg },
	                            _react2.default.createElement('img', { src: __webpack_require__(265)("./" + this.props.imgs[2] + '.jpg') })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DiscoverSection;
	}(_react.Component);

	var DiscoverBannerImg = function (_Component3) {
	    _inherits(DiscoverBannerImg, _Component3);

	    function DiscoverBannerImg() {
	        _classCallCheck(this, DiscoverBannerImg);

	        return _possibleConstructorReturn(this, (DiscoverBannerImg.__proto__ || Object.getPrototypeOf(DiscoverBannerImg)).apply(this, arguments));
	    }

	    _createClass(DiscoverBannerImg, [{
	        key: 'render',


	        // js动画不如CSS3，故废弃该方案
	        // componentDidMount(){
	        //     var ele = findDOMNode(this);
	        //     var left = parseInt(ele.style.left.substring(0, ele.style.left.length - 1));
	        //     var move = 0;
	        //     var count = 0;
	        //     var flag = false;
	        //     setInterval(function(){
	        //         if(move<84 && count==0){
	        //             move++;
	        //             if(flag){
	        //                 ele.setAttribute("style","left:"+(--left)+"%");
	        //                 if(left<-50){
	        //                     left+=336;
	        //                     ele.setAttribute("style","left:"+left+"%");
	        //                 }
	        //             }
	        //         }else{
	        //             flag = true;
	        //             count++;
	        //             if(count==200){
	        //                 count=0;
	        //                 move=0;
	        //             }
	        //         }
	        //     },20)
	        // }

	        value: function render() {
	            return _react2.default.createElement('div', {
	                className: _discover2.default.discoverBannerImg,
	                'data-index': this.props.index,
	                style: { left: this.props.index * 84 - 34 + "%" }
	            });
	        }
	    }]);

	    return DiscoverBannerImg;
	}(_react.Component);

	var DiscoverBanner = function (_Component4) {
	    _inherits(DiscoverBanner, _Component4);

	    function DiscoverBanner() {
	        _classCallCheck(this, DiscoverBanner);

	        return _possibleConstructorReturn(this, (DiscoverBanner.__proto__ || Object.getPrototypeOf(DiscoverBanner)).apply(this, arguments));
	    }

	    _createClass(DiscoverBanner, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.discoverBanner },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/detail/p003' },
	                    _react2.default.createElement(DiscoverBannerImg, { index: '0' })
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/detail/p005' },
	                    _react2.default.createElement(DiscoverBannerImg, { index: '1' })
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/detail/p003' },
	                    _react2.default.createElement(DiscoverBannerImg, { index: '2' })
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/detail/p005' },
	                    _react2.default.createElement(DiscoverBannerImg, { index: '3' })
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/detail/p003' },
	                    _react2.default.createElement(DiscoverBannerImg, { index: '4' })
	                )
	            );
	        }
	    }]);

	    return DiscoverBanner;
	}(_react.Component);

	var RecommendItem = function (_Component5) {
	    _inherits(RecommendItem, _Component5);

	    function RecommendItem() {
	        _classCallCheck(this, RecommendItem);

	        return _possibleConstructorReturn(this, (RecommendItem.__proto__ || Object.getPrototypeOf(RecommendItem)).apply(this, arguments));
	    }

	    _createClass(RecommendItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.recommendItem },
	                _react2.default.createElement('div', { className: _discover2.default.recommendItemImg }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _discover2.default.recommendItemName },
	                    this.props.name
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _discover2.default.recommendItemDesc },
	                    this.props.desc
	                ),
	                _react2.default.createElement(_FollowBtn2.default, { following: false })
	            );
	        }
	    }]);

	    return RecommendItem;
	}(_react.Component);

	var RecommendSection = function (_Component6) {
	    _inherits(RecommendSection, _Component6);

	    function RecommendSection() {
	        _classCallCheck(this, RecommendSection);

	        return _possibleConstructorReturn(this, (RecommendSection.__proto__ || Object.getPrototypeOf(RecommendSection)).apply(this, arguments));
	    }

	    _createClass(RecommendSection, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.recommendSection },
	                _react2.default.createElement('div', { className: _discover2.default.rightIcon }),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '\u672C\u5468\u63A8\u8350'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '3\u4E2A\u63A8\u8350\u4E70\u624B'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _discover2.default.recommendItemBox },
	                    _react2.default.createElement(RecommendItem, { name: '\u963F\u65AF\u8482\u82AC', desc: '\u5065\u8EAB\xD7\u4E50\u8DA3=\u751F\u6D3B' }),
	                    _react2.default.createElement(RecommendItem, { name: '\u81EA\u7136\u9009\u62E9\u53F7', desc: '\u674E\u53D4\u5E26\u4F60\u53D1\u73B0\u597D\u4E1C\u897F' }),
	                    _react2.default.createElement(RecommendItem, { name: '\u76D0', desc: '\u4E00\u4E2A\u76D0\u7CFB\u7537\u5B50\u7684\u65E5\u5E38' })
	                )
	            );
	        }
	    }]);

	    return RecommendSection;
	}(_react.Component);

	var DiscoverBox = function (_Component7) {
	    _inherits(DiscoverBox, _Component7);

	    function DiscoverBox() {
	        _classCallCheck(this, DiscoverBox);

	        return _possibleConstructorReturn(this, (DiscoverBox.__proto__ || Object.getPrototypeOf(DiscoverBox)).apply(this, arguments));
	    }

	    _createClass(DiscoverBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.discoverBox },
	                _react2.default.createElement(DiscoverTopRow, null),
	                _react2.default.createElement(DiscoverSection, { name: '\u706B\u7403\u7CBE\u9009', number: '34', imgs: [1, 2, 3] }),
	                _react2.default.createElement(DiscoverBanner, null),
	                _react2.default.createElement(DiscoverSection, { name: '\u5403\u70B9\u513F\u597D\u7684', number: '31', imgs: [4, 5, 6] }),
	                _react2.default.createElement(DiscoverSection, { name: '\u54C1\u8D28\u751F\u6D3B', number: '18', imgs: [7, 8, 9] }),
	                _react2.default.createElement(DiscoverSection, { name: '\u65B0\u5947\u9177\u73A9', number: '25', imgs: [10, 11, 12] }),
	                _react2.default.createElement(DiscoverSection, { name: '\u578B\u683C\u6307\u5357', number: '34', imgs: [2, 3, 13] }),
	                _react2.default.createElement(DiscoverSection, { name: '\u7A7F\u8863\u642D\u914D', number: '26', imgs: [14, 15, 16] }),
	                _react2.default.createElement(DiscoverSection, { name: '\u793C\u7269\u6307\u5357', number: '13', imgs: [17, 18, 19] }),
	                _react2.default.createElement(RecommendSection, null)
	            );
	        }
	    }]);

	    return DiscoverBox;
	}(_react.Component);

	var Discover = function (_Component8) {
	    _inherits(Discover, _Component8);

	    function Discover() {
	        _classCallCheck(this, Discover);

	        return _possibleConstructorReturn(this, (Discover.__proto__ || Object.getPrototypeOf(Discover)).apply(this, arguments));
	    }

	    _createClass(Discover, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _discover2.default.discover },
	                _react2.default.createElement(DiscoverTop, null),
	                _react2.default.createElement(DiscoverBox, null),
	                _react2.default.createElement(_BottomTab2.default, null)
	            );
	        }
	    }]);

	    return Discover;
	}(_react.Component);

	exports.default = Discover;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _followBtn = __webpack_require__(258);

	var _followBtn2 = _interopRequireDefault(_followBtn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FollowingBtn = function (_Component) {
	    _inherits(FollowingBtn, _Component);

	    function FollowingBtn(props) {
	        _classCallCheck(this, FollowingBtn);

	        var _this = _possibleConstructorReturn(this, (FollowingBtn.__proto__ || Object.getPrototypeOf(FollowingBtn)).call(this, props));

	        _this.state = {
	            following: _this.props.following
	        };
	        return _this;
	    }

	    _createClass(FollowingBtn, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            this.setState({
	                following: !this.state.following
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: this.state.following == true ? _followBtn2.default["followingBtn"] : _followBtn2.default["followBtn"],
	                    onClick: this.handleClick.bind(this)
	                },
	                this.state.following == true ? "已关注" : "关注"
	            );
	        }
	    }]);

	    return FollowingBtn;
	}(_react.Component);

	exports.default = FollowingBtn;

/***/ },

/***/ 258:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"followBtn":"followBtn__followBtn-2M59F","followingBtn":"followBtn__followingBtn-2citV"};

/***/ },

/***/ 260:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"discover":"discover__discover-2D-4H","discoverTop":"discover__discoverTop-HspIP","discoverBox":"discover__discoverBox-24RGv","discoverTopRow":"discover__discoverTopRow-3octI","discoverTopItem":"discover__discoverTopItem-2AGnx","discoverSection":"discover__discoverSection-2h8hz","rightIcon":"discover__rightIcon-2cKu2","sectionImgBox":"discover__sectionImgBox-20_bn","sectionImg":"discover__sectionImg-3M5wQ","discoverBanner":"discover__discoverBanner-3M_yZ","discoverBannerImg":"discover__discoverBannerImg-1dlDI","banner":"discover__banner-2Z9Qk","recommendSection":"discover__recommendSection-aZ8W2","recommendItemBox":"discover__recommendItemBox-oGHTb","recommendItem":"discover__recommendItem-1hDAE","recommendItemImg":"discover__recommendItemImg-1EIxm","recommendItemName":"discover__recommendItemName-2hgdv","recommendItemDesc":"discover__recommendItemDesc-2qIP7"};

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1.jpg": 266,
		"./10.jpg": 267,
		"./11.jpg": 268,
		"./12.jpg": 269,
		"./13.jpg": 270,
		"./14.jpg": 271,
		"./15.jpg": 272,
		"./16.jpg": 273,
		"./17.jpg": 274,
		"./18.jpg": 275,
		"./19.jpg": 276,
		"./2.jpg": 277,
		"./3.jpg": 278,
		"./4.jpg": 279,
		"./5.jpg": 280,
		"./6.jpg": 281,
		"./7.jpg": 282,
		"./8.jpg": 283,
		"./9.jpg": 284
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 265;


/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c7942c2e.1.jpg";

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d6478e1c.10.jpg";

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/2fbb7c0e.11.jpg";

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a260de1b.12.jpg";

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/40b6cd1b.13.jpg";

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/6009cd53.14.jpg";

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b6f9d0c6.15.jpg";

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d9986009.16.jpg";

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/86bb1854.17.jpg";

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/3e1dd9c8.18.jpg";

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/18f8c31e.19.jpg";

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/997587af.2.jpg";

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e6eb7217.3.jpg";

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/40098fcb.4.jpg";

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a68b3507.5.jpg";

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/1de328d1.6.jpg";

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/67435905.7.jpg";

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a2753398.8.jpg";

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/622b2df7.9.jpg";

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _personal = __webpack_require__(286);

	var _personal2 = _interopRequireDefault(_personal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


	var PersonalBox = function (_Component) {
	    _inherits(PersonalBox, _Component);

	    function PersonalBox() {
	        _classCallCheck(this, PersonalBox);

	        return _possibleConstructorReturn(this, (PersonalBox.__proto__ || Object.getPrototypeOf(PersonalBox)).apply(this, arguments));
	    }

	    _createClass(PersonalBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	            /*return (
	                <div>
	                    <ReactCSSTransitionGroup
	                        transitionName="transitionWrapper"
	                        component="div"
	                        className={style.transitionWrapper}
	                        transitionEnter={false}
	                        transitionLeave={false}
	                        transitionEnterTimeout={400}
	                        transitionLeaveTimeout={400}>
	                        <div key={this.props.location.pathname}
	                            style={{position:"absolute", width: "100%"}}>
	                            {
	                                this.props.children
	                            }
	                        </div>
	                    </ReactCSSTransitionGroup>
	                </div>
	            )*/
	        }
	    }]);

	    return PersonalBox;
	}(_react.Component);

	exports.default = PersonalBox;

/***/ },

/***/ 286:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"personal":"personal__personal-jvg88","headBox":"personal__headBox-TXmdM","headImg":"personal__headImg-JTpbE","headInfo":"personal__headInfo-eFuZk","name":"personal__name-2piJJ","desc":"personal__desc-XW6rW","settingBox":"personal__settingBox-2_UbL","settingArea":"personal__settingArea-qAB4U","settingItem":"personal__settingItem-2PHWd","settingTitle":"personal__settingTitle-3YTGb","settingIcon":"personal__settingIcon-3T74r","order":"personal__order-mzuVB","subscription":"personal__subscription-2xEYu","like":"personal__like-109Dn","coupon":"personal__coupon-1N8fj","help":"personal__help-3RVmA","setting":"personal__setting-3HqCW","rightIcon":"personal__rightIcon-1xA4w"};

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _BottomTab = __webpack_require__(234);

	var _BottomTab2 = _interopRequireDefault(_BottomTab);

	var _SettingItem = __webpack_require__(295);

	var _SettingItem2 = _interopRequireDefault(_SettingItem);

	var _personal = __webpack_require__(286);

	var _personal2 = _interopRequireDefault(_personal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderInfo = function (_Component) {
	    _inherits(HeaderInfo, _Component);

	    function HeaderInfo() {
	        _classCallCheck(this, HeaderInfo);

	        return _possibleConstructorReturn(this, (HeaderInfo.__proto__ || Object.getPrototypeOf(HeaderInfo)).apply(this, arguments));
	    }

	    _createClass(HeaderInfo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _personal2.default.headInfo },
	                _react2.default.createElement(
	                    'p',
	                    { className: _personal2.default.name },
	                    this.props.name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _personal2.default.desc },
	                    '买到 ' + this.props.goods + ' 个好物',
	                    ' · ',
	                    this.props.subscription + ' 个订阅',
	                    ' · ',
	                    this.props.likes + ' 喜欢'
	                )
	            );
	        }
	    }]);

	    return HeaderInfo;
	}(_react.Component);

	var HeaderBox = function (_Component2) {
	    _inherits(HeaderBox, _Component2);

	    function HeaderBox() {
	        _classCallCheck(this, HeaderBox);

	        return _possibleConstructorReturn(this, (HeaderBox.__proto__ || Object.getPrototypeOf(HeaderBox)).apply(this, arguments));
	    }

	    _createClass(HeaderBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _personal2.default.headBox },
	                _react2.default.createElement('div', { className: _personal2.default.headImg }),
	                _react2.default.createElement(HeaderInfo, { name: 'Yiming', goods: '0', subscription: '6', likes: '0' })
	            );
	        }
	    }]);

	    return HeaderBox;
	}(_react.Component);

	var SettingRoute = function (_Component3) {
	    _inherits(SettingRoute, _Component3);

	    function SettingRoute() {
	        _classCallCheck(this, SettingRoute);

	        return _possibleConstructorReturn(this, (SettingRoute.__proto__ || Object.getPrototypeOf(SettingRoute)).apply(this, arguments));
	    }

	    _createClass(SettingRoute, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/personal/" + this.props.name },
	                _react2.default.createElement(_SettingItem2.default, { name: this.props.name, title: this.props.title })
	            );
	        }
	    }]);

	    return SettingRoute;
	}(_react.Component);

	var SettingBox = function (_Component4) {
	    _inherits(SettingBox, _Component4);

	    function SettingBox() {
	        _classCallCheck(this, SettingBox);

	        return _possibleConstructorReturn(this, (SettingBox.__proto__ || Object.getPrototypeOf(SettingBox)).apply(this, arguments));
	    }

	    _createClass(SettingBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _personal2.default.settingBox },
	                _react2.default.createElement(
	                    'div',
	                    { className: _personal2.default.settingArea },
	                    _react2.default.createElement(SettingRoute, { name: 'order', title: '\u6211\u7684\u8BA2\u5355' }),
	                    _react2.default.createElement(SettingRoute, { name: 'subscription', title: '\u6211\u7684\u8BA2\u9605' }),
	                    _react2.default.createElement(SettingRoute, { name: 'like', title: '\u6211\u7684\u559C\u6B22' }),
	                    _react2.default.createElement(SettingRoute, { name: 'coupon', title: '\u4F18\u60E0\u5238' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _personal2.default.settingArea },
	                    _react2.default.createElement(SettingRoute, { name: 'help', title: '\u5BA2\u670D\u4E0E\u5E2E\u52A9' }),
	                    _react2.default.createElement(SettingRoute, { name: 'setting', title: '\u8BBE\u7F6E' })
	                )
	            );
	        }
	    }]);

	    return SettingBox;
	}(_react.Component);

	var Personal = function (_Component5) {
	    _inherits(Personal, _Component5);

	    function Personal() {
	        _classCallCheck(this, Personal);

	        return _possibleConstructorReturn(this, (Personal.__proto__ || Object.getPrototypeOf(Personal)).apply(this, arguments));
	    }

	    _createClass(Personal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _personal2.default.personal },
	                _react2.default.createElement(HeaderBox, null),
	                _react2.default.createElement(SettingBox, null),
	                _react2.default.createElement(_BottomTab2.default, null)
	            );
	        }
	    }]);

	    return Personal;
	}(_react.Component);

	exports.default = Personal;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _personal = __webpack_require__(286);

	var _personal2 = _interopRequireDefault(_personal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SettingItem = function (_Component) {
	    _inherits(SettingItem, _Component);

	    function SettingItem() {
	        _classCallCheck(this, SettingItem);

	        return _possibleConstructorReturn(this, (SettingItem.__proto__ || Object.getPrototypeOf(SettingItem)).apply(this, arguments));
	    }

	    _createClass(SettingItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _personal2.default.settingItem },
	                _react2.default.createElement(
	                    'div',
	                    { className: _personal2.default.settingTitle },
	                    _react2.default.createElement('span', { className: _personal2.default.settingIcon + " " + _personal2.default[this.props.name] }),
	                    this.props.title
	                ),
	                _react2.default.createElement('div', { className: _personal2.default.rightIcon })
	            );
	        }
	    }]);

	    return SettingItem;
	}(_react.Component);

	exports.default = SettingItem;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _myOrders = __webpack_require__(301);

	var _myOrders2 = _interopRequireDefault(_myOrders);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OrdersBox = function (_Component) {
	    _inherits(OrdersBox, _Component);

	    function OrdersBox() {
	        _classCallCheck(this, OrdersBox);

	        return _possibleConstructorReturn(this, (OrdersBox.__proto__ || Object.getPrototypeOf(OrdersBox)).apply(this, arguments));
	    }

	    _createClass(OrdersBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _myOrders2.default.ordersBox },
	                _react2.default.createElement(Order, null)
	            );
	        }
	    }]);

	    return OrdersBox;
	}(_react.Component);

	var Order = function (_Component2) {
	    _inherits(Order, _Component2);

	    function Order() {
	        _classCallCheck(this, Order);

	        return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).apply(this, arguments));
	    }

	    _createClass(Order, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _myOrders2.default.order },
	                _react2.default.createElement(
	                    'div',
	                    { className: _myOrders2.default.orderInfoBox },
	                    _react2.default.createElement('div', { className: _myOrders2.default.orderImg }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _myOrders2.default.orderInfo },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _myOrders2.default.orderTitle },
	                            'ILLUMINATOR|\u73A9\u6781\u81F4 \u7231\u751F\u6D3B \u591F\u6D12\u8131'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _myOrders2.default.orderDesc },
	                            '\u89C4\u683C\uFF1A\u7070\u8272\u5730\u56FE\uFF08\u6A61\u80F6\u5E26\uFF09 \xD71'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _myOrders2.default.orderPrice },
	                            '\u603B\u989D\uFF1A',
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                ' 310.00 '
	                            ),
	                            '\u5143'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _myOrders2.default.orderStatus },
	                    '\u5DF2\u53D6\u6D88'
	                )
	            );
	        }
	    }]);

	    return Order;
	}(_react.Component);

	var MyOrders = function (_Component3) {
	    _inherits(MyOrders, _Component3);

	    function MyOrders() {
	        _classCallCheck(this, MyOrders);

	        return _possibleConstructorReturn(this, (MyOrders.__proto__ || Object.getPrototypeOf(MyOrders)).apply(this, arguments));
	    }

	    _createClass(MyOrders, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u6211\u7684\u8BA2\u5355'
	                ),
	                _react2.default.createElement(OrdersBox, null)
	            );
	        }
	    }]);

	    return MyOrders;
	}(_react.Component);

	exports.default = MyOrders;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _topfixed = __webpack_require__(298);

	var _topfixed2 = _interopRequireDefault(_topfixed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopFixed = function (_Component) {
	    _inherits(TopFixed, _Component);

	    function TopFixed() {
	        _classCallCheck(this, TopFixed);

	        return _possibleConstructorReturn(this, (TopFixed.__proto__ || Object.getPrototypeOf(TopFixed)).apply(this, arguments));
	    }

	    _createClass(TopFixed, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { 'data-maxwidth': true, className: _topfixed2.default.topFixed },
	                _react2.default.createElement('span', { className: _topfixed2.default.backBtn, onClick: function onClick() {
	                        _reactRouter.hashHistory.goBack();
	                    } }),
	                this.props.children
	            );
	        }
	    }]);

	    return TopFixed;
	}(_react.Component);

	exports.default = TopFixed;

/***/ },

/***/ 298:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"topFixed":"topfixed__topFixed-2sM1q","backBtn":"topfixed__backBtn-2AVN2"};

/***/ },

/***/ 301:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ordersBox":"myOrders__ordersBox-3f8ca","order":"myOrders__order-3Tlcd","orderInfoBox":"myOrders__orderInfoBox-2dD9O","orderImg":"myOrders__orderImg-cZhVk","orderInfo":"myOrders__orderInfo-duwdU","orderTitle":"myOrders__orderTitle-1ph3J","orderDesc":"myOrders__orderDesc-2xjIa","orderPrice":"myOrders__orderPrice-1op8j","orderStatus":"myOrders__orderStatus-1-YVO"};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _FollowBtn = __webpack_require__(257);

	var _FollowBtn2 = _interopRequireDefault(_FollowBtn);

	var _mySubscriptions = __webpack_require__(304);

	var _mySubscriptions2 = _interopRequireDefault(_mySubscriptions);

	var _buyersData = __webpack_require__(306);

	var _buyersData2 = _interopRequireDefault(_buyersData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubscriptionItem = function (_Component) {
	    _inherits(SubscriptionItem, _Component);

	    function SubscriptionItem() {
	        _classCallCheck(this, SubscriptionItem);

	        return _possibleConstructorReturn(this, (SubscriptionItem.__proto__ || Object.getPrototypeOf(SubscriptionItem)).apply(this, arguments));
	    }

	    _createClass(SubscriptionItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/buyer/" + this.props.id, className: _mySubscriptions2.default.subscriptionItem },
	                _react2.default.createElement('div', { className: _mySubscriptions2.default.headImg }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _mySubscriptions2.default.name },
	                    this.props.name,
	                    _react2.default.createElement(
	                        'div',
	                        { className: _mySubscriptions2.default.btnBox },
	                        _react2.default.createElement(_FollowBtn2.default, { following: true })
	                    )
	                )
	            );
	        }
	    }]);

	    return SubscriptionItem;
	}(_react.Component);

	var SubscriptionsBox = function (_Component2) {
	    _inherits(SubscriptionsBox, _Component2);

	    function SubscriptionsBox() {
	        _classCallCheck(this, SubscriptionsBox);

	        return _possibleConstructorReturn(this, (SubscriptionsBox.__proto__ || Object.getPrototypeOf(SubscriptionsBox)).apply(this, arguments));
	    }

	    _createClass(SubscriptionsBox, [{
	        key: 'renderSubscriptions',
	        value: function renderSubscriptions(data) {
	            var dataArr = [];
	            for (var i = 0; i < data.length; i++) {
	                if (data[i].following == true) {
	                    dataArr.push(_react2.default.createElement(SubscriptionItem, { key: data[i].id,
	                        id: data[i].id,
	                        name: data[i].name
	                    }));
	                }
	            }
	            return dataArr;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _mySubscriptions2.default.subscriptionsBox },
	                this.renderSubscriptions(_buyersData2.default)
	            );
	        }
	    }]);

	    return SubscriptionsBox;
	}(_react.Component);

	var MySubscriptions = function (_Component3) {
	    _inherits(MySubscriptions, _Component3);

	    function MySubscriptions() {
	        _classCallCheck(this, MySubscriptions);

	        return _possibleConstructorReturn(this, (MySubscriptions.__proto__ || Object.getPrototypeOf(MySubscriptions)).apply(this, arguments));
	    }

	    _createClass(MySubscriptions, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u6211\u7684\u8BA2\u9605'
	                ),
	                _react2.default.createElement(SubscriptionsBox, null)
	            );
	        }
	    }]);

	    return MySubscriptions;
	}(_react.Component);

	exports.default = MySubscriptions;

/***/ },

/***/ 304:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"subscriptionsBox":"mySubscriptions__subscriptionsBox-3QRr_","subscriptionItem":"mySubscriptions__subscriptionItem-2z0sS","headImg":"mySubscriptions__headImg-1A0ks","name":"mySubscriptions__name-VO4X2","btnBox":"mySubscriptions__btnBox-eNU-t"};

/***/ },

/***/ 306:
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "b000",
			"name": "梵高先生",
			"desc": "专注提升逼格",
			"label": [
				"逼格好物",
				"服饰穿搭"
			],
			"followers": 72951,
			"following": true
		},
		{
			"id": "b001",
			"name": "盐",
			"desc": "一个盐系男子的日常穿搭",
			"label": [
				"日系",
				"穿搭",
				"男士"
			],
			"followers": 40679,
			"following": true
		},
		{
			"id": "b002",
			"name": "有怪售",
			"desc": "脑洞少女的次元穿梭日记",
			"label": [
				"趣玩",
				"设计感"
			],
			"followers": 122475,
			"following": true
		},
		{
			"id": "b003",
			"name": "九磅十五便士",
			"desc": "男士生活指南",
			"label": [
				"男式、男士、男事"
			],
			"followers": 85763,
			"following": true
		},
		{
			"id": "b004",
			"name": "桥豆麻袋",
			"desc": "青春貌美是你的宇宙特质",
			"label": [
				"颜控",
				"少女向",
				"服饰穿搭"
			],
			"followers": 61463,
			"following": false
		},
		{
			"id": "b005",
			"name": "阿多斯日志",
			"desc": "男士时尚生活",
			"label": [
				"欧美",
				"服饰",
				"鞋包",
				"配饰"
			],
			"followers": 24236,
			"following": false
		},
		{
			"id": "b006",
			"name": "STAR",
			"desc": "是你身上的亮点",
			"label": [
				"首饰",
				"欧美"
			],
			"followers": 22765,
			"following": false
		},
		{
			"id": "b007",
			"name": "吃喝找野马",
			"desc": "神经大条的射手座",
			"label": [
				"爱吃爱喝爱睡觉",
				"记性差"
			],
			"followers": 39547,
			"following": true
		},
		{
			"id": "b008",
			"name": "八号丸子",
			"desc": "给你带来网红零食的一手报告",
			"label": [
				"网红",
				"零食"
			],
			"followers": 67421,
			"following": true
		},
		{
			"id": "b009",
			"name": "贪吃鬼小埋",
			"desc": "只为找到最好吃的你",
			"label": [
				"懂吃会吃",
				"狮子座"
			],
			"followers": 126742,
			"following": true
		}
	];

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _myLikes = __webpack_require__(308);

	var _myLikes2 = _interopRequireDefault(_myLikes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LikeItem = function (_Component) {
	    _inherits(LikeItem, _Component);

	    function LikeItem() {
	        _classCallCheck(this, LikeItem);

	        return _possibleConstructorReturn(this, (LikeItem.__proto__ || Object.getPrototypeOf(LikeItem)).apply(this, arguments));
	    }

	    _createClass(LikeItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/detail/" + this.props.id },
	                _react2.default.createElement('div', { className: _myLikes2.default.likeItem, 'data-index': this.props.index })
	            );
	        }
	    }]);

	    return LikeItem;
	}(_react.Component);

	var LikesBox = function (_Component2) {
	    _inherits(LikesBox, _Component2);

	    function LikesBox() {
	        _classCallCheck(this, LikesBox);

	        return _possibleConstructorReturn(this, (LikesBox.__proto__ || Object.getPrototypeOf(LikesBox)).apply(this, arguments));
	    }

	    _createClass(LikesBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _myLikes2.default.likesBox },
	                _react2.default.createElement(LikeItem, { id: 'p001', index: '0' }),
	                _react2.default.createElement(LikeItem, { id: 'p002', index: '1' }),
	                _react2.default.createElement(LikeItem, { id: 'p004', index: '2' })
	            );
	        }
	    }]);

	    return LikesBox;
	}(_react.Component);

	var MyLikes = function (_Component3) {
	    _inherits(MyLikes, _Component3);

	    function MyLikes() {
	        _classCallCheck(this, MyLikes);

	        return _possibleConstructorReturn(this, (MyLikes.__proto__ || Object.getPrototypeOf(MyLikes)).apply(this, arguments));
	    }

	    _createClass(MyLikes, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _myLikes2.default.myLikes },
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u6211\u7684\u559C\u6B22'
	                ),
	                _react2.default.createElement(LikesBox, null)
	            );
	        }
	    }]);

	    return MyLikes;
	}(_react.Component);

	exports.default = MyLikes;

/***/ },

/***/ 308:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"myLikes":"myLikes__myLikes-3tBrC","likesBox":"myLikes__likesBox-sfZ_r","likeItem":"myLikes__likeItem-1Gpe6"};

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Coupons = function (_Component) {
	    _inherits(Coupons, _Component);

	    function Coupons() {
	        _classCallCheck(this, Coupons);

	        return _possibleConstructorReturn(this, (Coupons.__proto__ || Object.getPrototypeOf(Coupons)).apply(this, arguments));
	    }

	    _createClass(Coupons, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u4F18\u60E0\u5238'
	                ),
	                _react2.default.createElement(
	                    'h2',
	                    { style: {
	                            position: "relative",
	                            top: "200px",
	                            textAlign: "center",
	                            color: "#444",
	                            fontStyle: "italic",
	                            margin: "0"
	                        } },
	                    '\u6682\u65E0\u53EF\u7528\u4F18\u60E0\u5238'
	                )
	            );
	        }
	    }]);

	    return Coupons;
	}(_react.Component);

	exports.default = Coupons;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _helps = __webpack_require__(312);

	var _helps2 = _interopRequireDefault(_helps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpsBox = function (_Component) {
	    _inherits(HelpsBox, _Component);

	    function HelpsBox() {
	        _classCallCheck(this, HelpsBox);

	        return _possibleConstructorReturn(this, (HelpsBox.__proto__ || Object.getPrototypeOf(HelpsBox)).apply(this, arguments));
	    }

	    _createClass(HelpsBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _helps2.default.helpsBox },
	                _react2.default.createElement(
	                    'div',
	                    { className: _helps2.default.selfTit },
	                    '\u81EA\u52A9\u670D\u52A1'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _helps2.default.selfBox },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _helps2.default.selfItem },
	                        '\u63D0\u9192\u53D1\u8D27'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _helps2.default.selfItem },
	                        '\u8BA2\u5355\u95EE\u9898'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _helps2.default.selfItem },
	                        '\u5728\u7EBF\u5BA2\u670D'
	                    )
	                )
	            );
	        }
	    }]);

	    return HelpsBox;
	}(_react.Component);

	var QueItem = function (_Component2) {
	    _inherits(QueItem, _Component2);

	    function QueItem() {
	        _classCallCheck(this, QueItem);

	        return _possibleConstructorReturn(this, (QueItem.__proto__ || Object.getPrototypeOf(QueItem)).apply(this, arguments));
	    }

	    _createClass(QueItem, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.toggleAns(this.props.q);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _helps2.default.queItem, onClick: this.handleClick.bind(this) },
	                this.props.children
	            );
	        }
	    }]);

	    return QueItem;
	}(_react.Component);

	var AnsItem = function (_Component3) {
	    _inherits(AnsItem, _Component3);

	    function AnsItem() {
	        _classCallCheck(this, AnsItem);

	        return _possibleConstructorReturn(this, (AnsItem.__proto__ || Object.getPrototypeOf(AnsItem)).apply(this, arguments));
	    }

	    _createClass(AnsItem, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.show ? "block" : "none";
	            return _react2.default.createElement(
	                'div',
	                { className: _helps2.default.ansItem, style: { display: res } },
	                this.props.children
	            );
	        }
	    }]);

	    return AnsItem;
	}(_react.Component);

	var Questions = function (_Component4) {
	    _inherits(Questions, _Component4);

	    function Questions(props) {
	        _classCallCheck(this, Questions);

	        var _this4 = _possibleConstructorReturn(this, (Questions.__proto__ || Object.getPrototypeOf(Questions)).call(this, props));

	        _this4.state = {
	            a0: false,
	            a1: false,
	            a2: false,
	            a3: false,
	            a4: false
	        };
	        return _this4;
	    }

	    _createClass(Questions, [{
	        key: 'toggleAns',
	        value: function toggleAns(index) {
	            var res = !this.state["a" + index];
	            this.setState(Object.assign({
	                a0: false,
	                a1: false,
	                a2: false,
	                a3: false,
	                a4: false
	            }, _defineProperty({}, "a" + index, res)));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _helps2.default.questions },
	                _react2.default.createElement(
	                    'div',
	                    { className: _helps2.default.queTit },
	                    '\u5E38\u89C1\u95EE\u9898'
	                ),
	                _react2.default.createElement(
	                    QueItem,
	                    { q: '0', toggleAns: this.toggleAns.bind(this) },
	                    '\u706B\u7403\u7684\u5546\u54C1\u4ECE\u54EA\u91CC\u53D1\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    AnsItem,
	                    { a: '0', show: this.state.a0 },
	                    '\u591A\u4ED3\u76F4\u53D1\uFF1A\u6BCF\u4E2A\u4E70\u624B\u6709\u591A\u4E2A\u5408\u4F5C\u5546\u5BB6\uFF0C\u53D1\u8D27\u5730\u70B9\u6839\u636E\u5546\u5BB6\u4E0D\u540C\u800C\u6539\u53D8\u3002'
	                ),
	                _react2.default.createElement(
	                    QueItem,
	                    { q: '1', toggleAns: this.toggleAns.bind(this) },
	                    '\u5982\u4F55\u4FEE\u6539\u5730\u5740/\u7535\u8BDD\uFF1F'
	                ),
	                _react2.default.createElement(
	                    AnsItem,
	                    { a: '1', show: this.state.a1 },
	                    '\u5FEB\u9012\u516C\u53F8\u7684\u7CFB\u7EDF\u4E0D\u652F\u6301\u4FEE\u6539\u6536\u8D27\u5730\u5740\u548C\u7535\u8BDD\uFF0C\u5EFA\u8BAE\u60A8\u627E\u670B\u53CB\u6216\u5BB6\u4EBA\u4EE3\u6536\u3002\u82E5\u6709\u7279\u6B8A\u60C5\u51B5\uFF0C\u8BF7\u8054\u7CFB\u5728\u7EBF\u5BA2\u670D\u3002'
	                ),
	                _react2.default.createElement(
	                    QueItem,
	                    { q: '2', toggleAns: this.toggleAns.bind(this) },
	                    '\u4EC0\u4E48\u65F6\u5019\u53D1\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    AnsItem,
	                    { a: '2', show: this.state.a2 },
	                    '\u53EF\u53C2\u8003\u5546\u54C1\u8BE6\u60C5\u9875\u5E95\u90E8\u6807\u6CE8\u7684\u9884\u8BA1\u53D1\u8D27\u65F6\u95F4\u3002\u9884\u552E\u5546\u54C1\u53CA\u6D77\u5916\u4EE3\u8D2D\u5546\u54C1\u53D1\u8D27\u65F6\u95F4\u4F1A\u6709\u76F8\u5E94\u5EF6\u957F\u3002'
	                ),
	                _react2.default.createElement(
	                    QueItem,
	                    { q: '3', toggleAns: this.toggleAns.bind(this) },
	                    '\u5982\u4F55\u529E\u7406\u9000\u6362\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    AnsItem,
	                    { a: '3', show: this.state.a3 },
	                    '\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u9875\u9762\uFF0C\u9009\u62E9\u9700\u8981\u9000/\u6362\u8D27\u7684\u8BA2\u5355\uFF0C\u627E\u5230\u5E95\u90E8\u201C\u9000/\u6362\u8D27\u201D\u6309\u94AE\u7533\u8BF7\u552E\u540E\u3002\u6536\u8D277\u5929\u540E\u7684\u8BA2\u5355\u65E0\u6CD5\u518D\u53D1\u8D77\u552E\u540E\u3002'
	                ),
	                _react2.default.createElement(
	                    QueItem,
	                    { q: '4', toggleAns: this.toggleAns.bind(this) },
	                    '\u9000\u6B3E\u591A\u4E45\u53EF\u4EE5\u6536\u5230\uFF1F'
	                ),
	                _react2.default.createElement(
	                    AnsItem,
	                    { a: '4', show: this.state.a4 },
	                    '\u9000\u6B3E\u4F1A\u5728\u5546\u5BB6\u6536\u5230\u5BC4\u56DE\u5546\u54C1\u540E\u76841-7\u4E2A\u5DE5\u4F5C\u65E5\u5185\u9000\u56DE\u539F\u652F\u4ED8\u8D26\u6237\u3002'
	                )
	            );
	        }
	    }]);

	    return Questions;
	}(_react.Component);

	var Helps = function (_Component5) {
	    _inherits(Helps, _Component5);

	    function Helps() {
	        _classCallCheck(this, Helps);

	        return _possibleConstructorReturn(this, (Helps.__proto__ || Object.getPrototypeOf(Helps)).apply(this, arguments));
	    }

	    _createClass(Helps, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u5BA2\u670D\u4E0E\u5E2E\u52A9'
	                ),
	                _react2.default.createElement(HelpsBox, null),
	                _react2.default.createElement(Questions, null)
	            );
	        }
	    }]);

	    return Helps;
	}(_react.Component);

	exports.default = Helps;

/***/ },

/***/ 312:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"helpsBox":"helps__helpsBox-1TlGT","selfTit":"helps__selfTit-pRmWy","selfBox":"helps__selfBox-3hmQf","selfItem":"helps__selfItem-14Qju","questions":"helps__questions-36e4E","queTit":"helps__queTit-3ln0f","queItem":"helps__queItem-rdfEr","ansItem":"helps__ansItem-3kEzv"};

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _SettingItem = __webpack_require__(295);

	var _SettingItem2 = _interopRequireDefault(_SettingItem);

	var _settings = __webpack_require__(315);

	var _settings2 = _interopRequireDefault(_settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SettingBox = function (_Component) {
	    _inherits(SettingBox, _Component);

	    function SettingBox() {
	        _classCallCheck(this, SettingBox);

	        return _possibleConstructorReturn(this, (SettingBox.__proto__ || Object.getPrototypeOf(SettingBox)).apply(this, arguments));
	    }

	    _createClass(SettingBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _settings2.default.settingBox },
	                _react2.default.createElement(
	                    'div',
	                    { className: _settings2.default.settingArea },
	                    _react2.default.createElement(_SettingItem2.default, { name: 'clean', title: '\u6E05\u7406\u7F13\u5B58' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _settings2.default.settingArea },
	                    _react2.default.createElement(_SettingItem2.default, { name: 'encourage', title: '\u9F13\u52B1\u4E00\u4E0B' }),
	                    _react2.default.createElement(_SettingItem2.default, { name: 'agreement', title: '\u9690\u79C1\u548C\u534F\u8BAE' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _settings2.default.settingArea },
	                    _react2.default.createElement(_SettingItem2.default, { name: 'logout', title: '\u9000\u51FA\u767B\u5F55' })
	                )
	            );
	        }
	    }]);

	    return SettingBox;
	}(_react.Component);

	var Settings = function (_Component2) {
	    _inherits(Settings, _Component2);

	    function Settings() {
	        _classCallCheck(this, Settings);

	        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
	    }

	    _createClass(Settings, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u8BBE\u7F6E'
	                ),
	                _react2.default.createElement(SettingBox, null)
	            );
	        }
	    }]);

	    return Settings;
	}(_react.Component);

	exports.default = Settings;

/***/ },

/***/ 315:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"settingBox":"settings__settingBox-1tzL4","settingArea":"settings__settingArea-5_HFB","settingItem":"settings__settingItem-2TaC5"};

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _classnames2 = __webpack_require__(318);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Item = __webpack_require__(319);

	var _Item2 = _interopRequireDefault(_Item);

	var _topic = __webpack_require__(322);

	var _topic2 = _interopRequireDefault(_topic);

	var _topicData = __webpack_require__(325);

	var _topicData2 = _interopRequireDefault(_topicData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopicHeader = function (_Component) {
	    _inherits(TopicHeader, _Component);

	    function TopicHeader() {
	        _classCallCheck(this, TopicHeader);

	        return _possibleConstructorReturn(this, (TopicHeader.__proto__ || Object.getPrototypeOf(TopicHeader)).apply(this, arguments));
	    }

	    _createClass(TopicHeader, [{
	        key: 'render',
	        value: function render() {
	            var str = location.hash.split("/").pop();
	            var title = decodeURIComponent(str);
	            return _react2.default.createElement(
	                'div',
	                { className: _topic2.default.topicHeader },
	                _react2.default.createElement('div', { className: _topic2.default.topicHeaderBack, onClick: function onClick() {
	                        _reactRouter.hashHistory.goBack();
	                    } }),
	                title
	            );
	        }
	    }]);

	    return TopicHeader;
	}(_react.Component);

	var NavItem = function (_Component2) {
	    _inherits(NavItem, _Component2);

	    function NavItem() {
	        _classCallCheck(this, NavItem);

	        return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
	    }

	    _createClass(NavItem, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.handleChoose(this.props.type);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                {
	                    className: _topic2.default.navItem + " " + (0, _classnames3.default)(_defineProperty({}, _topic2.default.choosenItem, this.props.choosen)),
	                    onClick: this.handleClick.bind(this)
	                },
	                this.props.children
	            );
	        }
	    }]);

	    return NavItem;
	}(_react.Component);

	var TopicNav = function (_Component3) {
	    _inherits(TopicNav, _Component3);

	    function TopicNav(props) {
	        _classCallCheck(this, TopicNav);

	        var _this3 = _possibleConstructorReturn(this, (TopicNav.__proto__ || Object.getPrototypeOf(TopicNav)).call(this, props));

	        _this3.state = { value: "new" };
	        return _this3;
	    }

	    _createClass(TopicNav, [{
	        key: 'handleChoose',
	        value: function handleChoose(val) {
	            this.setState({
	                value: val
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _topic2.default.topicNav },
	                _react2.default.createElement(
	                    NavItem,
	                    { choosen: this.state.value == "new", type: 'new', handleChoose: this.handleChoose.bind(this) },
	                    '\u6700\u65B0'
	                ),
	                _react2.default.createElement(
	                    NavItem,
	                    { choosen: this.state.value == "hot", type: 'hot', handleChoose: this.handleChoose.bind(this) },
	                    '\u6700\u70ED'
	                )
	            );
	        }
	    }]);

	    return TopicNav;
	}(_react.Component);

	var TopicList = function (_Component4) {
	    _inherits(TopicList, _Component4);

	    function TopicList() {
	        _classCallCheck(this, TopicList);

	        return _possibleConstructorReturn(this, (TopicList.__proto__ || Object.getPrototypeOf(TopicList)).apply(this, arguments));
	    }

	    _createClass(TopicList, [{
	        key: 'renderTopicList',
	        value: function renderTopicList(data) {
	            var dataArr = [];
	            for (var i = 0; i < data.length; i++) {
	                dataArr.push(_react2.default.createElement(_Item2.default, { key: data[i].id, title: data[i].title, likes: data[i].likes, price: data[i].price }));
	            }
	            return dataArr;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _topic2.default.topicList },
	                this.renderTopicList(_topicData2.default)
	            );
	        }
	    }]);

	    return TopicList;
	}(_react.Component);

	var TopicBox = function (_Component5) {
	    _inherits(TopicBox, _Component5);

	    function TopicBox() {
	        _classCallCheck(this, TopicBox);

	        return _possibleConstructorReturn(this, (TopicBox.__proto__ || Object.getPrototypeOf(TopicBox)).apply(this, arguments));
	    }

	    _createClass(TopicBox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _topic2.default.topicBox },
	                _react2.default.createElement(TopicNav, null),
	                _react2.default.createElement(TopicList, null)
	            );
	        }
	    }]);

	    return TopicBox;
	}(_react.Component);

	var Topic = function (_Component6) {
	    _inherits(Topic, _Component6);

	    function Topic() {
	        _classCallCheck(this, Topic);

	        return _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).apply(this, arguments));
	    }

	    _createClass(Topic, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _topic2.default.topic },
	                _react2.default.createElement(TopicHeader, null),
	                _react2.default.createElement(TopicBox, null)
	            );
	        }
	    }]);

	    return Topic;
	}(_react.Component);

	exports.default = Topic;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _item = __webpack_require__(320);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	    _inherits(Item, _Component);

	    function Item() {
	        _classCallCheck(this, Item);

	        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
	    }

	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _item2.default.item },
	                _react2.default.createElement('div', { className: _item2.default.img }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _item2.default.info },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _item2.default.title },
	                        this.props.title
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _item2.default.likes },
	                        this.props.likes
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _item2.default.price },
	                        this.props.price + " 元"
	                    )
	                )
	            );
	        }
	    }]);

	    return Item;
	}(_react.Component);

	exports.default = Item;

/***/ },

/***/ 320:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"item":"item__item-3X-cC","img":"item__img-18IC2","info":"item__info-22TU-","title":"item__title-a5ySn","likes":"item__likes-1k1M9","price":"item__price-173VH"};

/***/ },

/***/ 322:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"topicHeader":"topic__topicHeader-1ZRk6","topicHeaderBack":"topic__topicHeaderBack-i3tEb","topicBox":"topic__topicBox-2xNOv","topicNav":"topic__topicNav-2Yz8w","navItem":"topic__navItem-2S0_j","choosenItem":"topic__choosenItem-1tlXz","topicList":"topic__topicList-tw2bY"};

/***/ },

/***/ 325:
/***/ function(module, exports) {

	module.exports = [
		{
			"id": 0,
			"title": "一根爽嗨的咖啡因能量棒",
			"likes": 48621,
			"price": 49
		},
		{
			"id": 1,
			"title": "看了这个之后我长高了5公分",
			"likes": 11047,
			"price": 198
		},
		{
			"id": 2,
			"title": "这是属于工装夹克的季节",
			"likes": 3350,
			"price": 169
		},
		{
			"id": 3,
			"title": "露腿之际 | 坐着瘦才是正经事",
			"likes": 4172,
			"price": 179
		},
		{
			"id": 4,
			"title": "让你的袜子一周不重样",
			"likes": 6699,
			"price": 35
		},
		{
			"id": 5,
			"title": "今天，我不难过",
			"likes": 999,
			"price": 39
		},
		{
			"id": 6,
			"title": "开春了，换上新的四件套吧",
			"likes": 2738,
			"price": 213
		},
		{
			"id": 7,
			"title": "外婆家的味道 红糖大暴走",
			"likes": 1400,
			"price": 20
		}
	];

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _detail = __webpack_require__(327);

	var _detail2 = _interopRequireDefault(_detail);

	var _reactRouter = __webpack_require__(178);

	var _productsData = __webpack_require__(248);

	var _productsData2 = _interopRequireDefault(_productsData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DetailTop = function (_Component) {
	    _inherits(DetailTop, _Component);

	    function DetailTop() {
	        _classCallCheck(this, DetailTop);

	        return _possibleConstructorReturn(this, (DetailTop.__proto__ || Object.getPrototypeOf(DetailTop)).apply(this, arguments));
	    }

	    _createClass(DetailTop, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/buyer/" + res.authorId, className: _detail2.default.detailTop },
	                _react2.default.createElement('div', { className: _detail2.default.topHeadImg }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.topMain },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _detail2.default.topAuthor },
	                        res.author
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _detail2.default.topDate },
	                        res.date
	                    ),
	                    _react2.default.createElement('div', { className: _detail2.default.topToAutor })
	                )
	            );
	        }
	    }]);

	    return DetailTop;
	}(_react.Component);

	var DetailMain = function (_Component2) {
	    _inherits(DetailMain, _Component2);

	    function DetailMain() {
	        _classCallCheck(this, DetailMain);

	        return _possibleConstructorReturn(this, (DetailMain.__proto__ || Object.getPrototypeOf(DetailMain)).apply(this, arguments));
	    }

	    _createClass(DetailMain, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.detailMain },
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.coverBox },
	                    _react2.default.createElement('img', { src: __webpack_require__(249)("./" + res.cover) })
	                ),
	                _react2.default.createElement(
	                    'h4',
	                    { className: _detail2.default.title },
	                    res.title
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.text },
	                    res.text
	                )
	            );
	        }
	    }]);

	    return DetailMain;
	}(_react.Component);

	var DetailFooter1 = function (_Component3) {
	    _inherits(DetailFooter1, _Component3);

	    function DetailFooter1() {
	        _classCallCheck(this, DetailFooter1);

	        return _possibleConstructorReturn(this, (DetailFooter1.__proto__ || Object.getPrototypeOf(DetailFooter1)).apply(this, arguments));
	    }

	    _createClass(DetailFooter1, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.footer1Box },
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.footer1Item },
	                    res.likes,
	                    '\u4EBA\u559C\u6B22'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.footer1Item },
	                    res.share,
	                    '\u4EBA\u544A\u8BC9\u670B\u53CB'
	                )
	            );
	        }
	    }]);

	    return DetailFooter1;
	}(_react.Component);

	var DetailFooter2 = function (_Component4) {
	    _inherits(DetailFooter2, _Component4);

	    function DetailFooter2() {
	        _classCallCheck(this, DetailFooter2);

	        return _possibleConstructorReturn(this, (DetailFooter2.__proto__ || Object.getPrototypeOf(DetailFooter2)).apply(this, arguments));
	    }

	    _createClass(DetailFooter2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.footer2Box },
	                '\u9650\u65F6\u5206\u4EAB\u5956\u52B1'
	            );
	        }
	    }]);

	    return DetailFooter2;
	}(_react.Component);

	var DetailFooter3 = function (_Component5) {
	    _inherits(DetailFooter3, _Component5);

	    function DetailFooter3() {
	        _classCallCheck(this, DetailFooter3);

	        return _possibleConstructorReturn(this, (DetailFooter3.__proto__ || Object.getPrototypeOf(DetailFooter3)).apply(this, arguments));
	    }

	    _createClass(DetailFooter3, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.footer3Box },
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.footer3Title },
	                    '\u6B64\u5546\u54C1'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.footer3Div },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _detail2.default.footer3Item },
	                        '3\u4E2A\u5DE5\u4F5C\u65E5\u53D1\u8D27'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _detail2.default.footer3Item },
	                        '\u6B63\u54C1\u4FDD\u969C'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _detail2.default.footer3Item },
	                        '\u65E0\u5FE7\u9000\u8D27'
	                    )
	                )
	            );
	        }
	    }]);

	    return DetailFooter3;
	}(_react.Component);

	var DetailFooter4 = function (_Component6) {
	    _inherits(DetailFooter4, _Component6);

	    function DetailFooter4() {
	        _classCallCheck(this, DetailFooter4);

	        return _possibleConstructorReturn(this, (DetailFooter4.__proto__ || Object.getPrototypeOf(DetailFooter4)).apply(this, arguments));
	    }

	    _createClass(DetailFooter4, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.footer4Box },
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.footer4Title },
	                    '\u5E38\u89C1\u95EE\u9898'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.que },
	                    '\u706B\u7403\u4E70\u624B\u7684\u5546\u54C1\u4ECE\u54EA\u91CC\u53D1\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.ans },
	                    '\u591A\u4ED3\u76F4\u53D1\uFF1A\u6BCF\u4E2A\u4E70\u624B\u6709\u591A\u4E2A\u5408\u4F5C\u5546\u5BB6\uFF0C\u53D1\u8D27\u5730\u70B9\u6839\u636E\u5546\u5BB6\u4E0D\u540C\u800C\u6539\u53D8\u3002'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.que },
	                    '\u4EC0\u4E48\u65F6\u5019\u53D1\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.ans },
	                    '\u8BF7\u53C2\u8003\u5546\u54C1\u8BE6\u60C5\u9875\u5E95\u90E8\u6807\u6CE8\u7684\u201C\u9884\u8BA1\u53D1\u8D27\u65F6\u95F4\u201D\u3002\u9884\u552E\u5546\u54C1\u53CA\u6D77\u5916\u4EE3\u8D2D\u5546\u54C1\u53D1\u8D27\u65F6\u95F4\u4F1A\u6709\u76F8\u5E94\u5EF6\u957F\u3002'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.que },
	                    '\u5982\u4F55\u529E\u7406\u9000/\u6362\u8D27\uFF1F'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.ans },
	                    '1.\u975E\u7279\u6B8A\u5546\u54C1\u81EA\u6536\u5230\u4E4B\u65E5\u8D777\u5929\u5185\uFF0C\u53EF\u529E\u7406\u9000\u6362\u8D27\u670D\u52A1\uFF0C\u6D89\u53CA\u9000\u6B3E\u5C06\u539F\u8DEF\u8FD4\u56DE\uFF0C\u9884\u8BA11-7\u4E2A\u5DE5\u4F5C\u65E5\u5230\u8D26\uFF1B\u5546\u54C1\u8BE6\u60C5\u9875\u5E95\u90E8\u6807\u6CE8\u7684\u7279\u6B8A\u5546\u54C1\u6682\u4E0D\u652F\u6301\u9000\u8D27\u3002',
	                    _react2.default.createElement('br', null),
	                    '2.\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u9875\u9762\uFF0C\u9009\u62E9\u9700\u8981\u9000/\u6362\u8D27\u7684\u8BA2\u5355\uFF0C\u627E\u5230\u5E95\u90E8\u201C\u9000/\u6362\u8D27\u201D\u6309\u94AE\u7533\u8BF7\u552E\u540E\u3002'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.que },
	                    '\u9000\u6362\u8D27\u8FD0\u8D39\u8C01\u627F\u62C5\uFF1F'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: _detail2.default.ans },
	                    '\u56E0\u706B\u7403\u4E70\u624B\u5546\u54C1\u95EE\u9898\u4EA7\u751F\u7684\u9000\u6362\u8D27\uFF0C\u8FD0\u8D39\u7531\u76F8\u5E94\u4E70\u624B\u5E97\u627F\u62C5\uFF0C\u5BC4\u51FA\u8FD0\u8D39\u9700\u8981\u987E\u5BA2\u5148\u884C\u57AB\u4ED8\uFF0C\u5546\u5BB6\u6536\u5230\u8D27\u7269\u540E\uFF0C\u9000\u56DE\u987E\u5BA2\u5BC4\u51FA\u8D39\u7528\uFF1B\u56E0\u987E\u5BA2\u4E2A\u4EBA\u539F\u56E0\u4EA7\u751F\u7684\u9000\u6362\u8D27\uFF0C\u8D2D\u4E70\u548C\u5BC4\u56DE\u8FD0\u8D39\u7531\u987E\u5BA2\u4E2A\u4EBA\u627F\u62C5\u3002'
	                )
	            );
	        }
	    }]);

	    return DetailFooter4;
	}(_react.Component);

	var DetailFooter = function (_Component7) {
	    _inherits(DetailFooter, _Component7);

	    function DetailFooter() {
	        _classCallCheck(this, DetailFooter);

	        return _possibleConstructorReturn(this, (DetailFooter.__proto__ || Object.getPrototypeOf(DetailFooter)).apply(this, arguments));
	    }

	    _createClass(DetailFooter, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.detailFooter },
	                _react2.default.createElement(DetailFooter1, { productInfo: res }),
	                _react2.default.createElement(DetailFooter2, null),
	                _react2.default.createElement(DetailFooter3, null),
	                _react2.default.createElement(DetailFooter4, null)
	            );
	        }
	    }]);

	    return DetailFooter;
	}(_react.Component);

	var DetailBottom = function (_Component8) {
	    _inherits(DetailBottom, _Component8);

	    function DetailBottom() {
	        _classCallCheck(this, DetailBottom);

	        return _possibleConstructorReturn(this, (DetailBottom.__proto__ || Object.getPrototypeOf(DetailBottom)).apply(this, arguments));
	    }

	    _createClass(DetailBottom, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                'div',
	                { 'data-maxwidth': true, className: _detail2.default.detailBottom },
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.bottomLeft },
	                    _react2.default.createElement(GoBackBtn, null),
	                    _react2.default.createElement(
	                        'span',
	                        { className: _detail2.default.bottomItem },
	                        _react2.default.createElement('div', { className: _detail2.default.like }),
	                        res.likes > 999 ? (res.likes / 1000).toFixed(1) + "k" : res.likes
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: _detail2.default.bottomItem },
	                        _react2.default.createElement('div', { className: _detail2.default.share }),
	                        res.share > 999 ? (res.share / 1000.0).toFixed(1) + "k" : res.share
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.bottomRight },
	                    _react2.default.createElement(ToBuyBtn, { productInfo: res })
	                )
	            );
	        }
	    }]);

	    return DetailBottom;
	}(_react.Component);

	var GoBackBtn = function (_Component9) {
	    _inherits(GoBackBtn, _Component9);

	    function GoBackBtn() {
	        _classCallCheck(this, GoBackBtn);

	        return _possibleConstructorReturn(this, (GoBackBtn.__proto__ || Object.getPrototypeOf(GoBackBtn)).apply(this, arguments));
	    }

	    _createClass(GoBackBtn, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                {
	                    className: _detail2.default.bottomItem,
	                    onClick: function onClick() {
	                        _reactRouter.hashHistory.goBack();
	                    }
	                },
	                _react2.default.createElement('div', { className: _detail2.default.back })
	            );
	        }
	    }]);

	    return GoBackBtn;
	}(_react.Component);

	var ToBuyBtn = function (_Component10) {
	    _inherits(ToBuyBtn, _Component10);

	    function ToBuyBtn() {
	        _classCallCheck(this, ToBuyBtn);

	        return _possibleConstructorReturn(this, (ToBuyBtn.__proto__ || Object.getPrototypeOf(ToBuyBtn)).apply(this, arguments));
	    }

	    _createClass(ToBuyBtn, [{
	        key: 'render',
	        value: function render() {
	            var res = this.props.productInfo;
	            return _react2.default.createElement(
	                'div',
	                { className: _detail2.default.toBuyBtn },
	                '\uFFE5 ',
	                res.price,
	                ' \u8D2D\u4E70 '
	            );
	        }
	    }]);

	    return ToBuyBtn;
	}(_react.Component);

	var Detail = function (_Component11) {
	    _inherits(Detail, _Component11);

	    function Detail() {
	        _classCallCheck(this, Detail);

	        return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
	    }

	    _createClass(Detail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'getProductInfo',
	        value: function getProductInfo(data) {
	            var id = location.hash.split("/").pop();
	            var productObj = { id: "__WARNING__" };
	            for (var i = 0; i < data.length; i++) {
	                if (data[i].id === id) {
	                    productObj = data[i];
	                    break;
	                }
	            }
	            return productObj;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var productInfo = this.getProductInfo(_productsData2.default);
	            if (productInfo.id == "__WARNING__") {
	                setTimeout(function () {
	                    location.hash = "#/";
	                }, 2000);
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    '\u627E\u4E0D\u5230\u8D44\u6E90\uFF01'
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _detail2.default.detailBox },
	                    _react2.default.createElement(DetailTop, { productInfo: productInfo }),
	                    _react2.default.createElement(DetailMain, { productInfo: productInfo }),
	                    _react2.default.createElement(DetailFooter, { productInfo: productInfo }),
	                    _react2.default.createElement(DetailBottom, { productInfo: productInfo })
	                );
	            }
	        }
	    }]);

	    return Detail;
	}(_react.Component);

	exports.default = Detail;

/***/ },

/***/ 327:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"detailBox":"detail__detailBox-1b6ne","detailTop":"detail__detailTop-y67pU","topHeadImg":"detail__topHeadImg-1F-dC","topMain":"detail__topMain-2ocL_","topAuthor":"detail__topAuthor-2S8CJ","topDate":"detail__topDate-3g-mq","topToAutor":"detail__topToAutor-3yV1r","detailMain":"detail__detailMain-2FgJ8","title":"detail__title-25WQY","text":"detail__text-1Itjd","coverBox":"detail__coverBox-RTVdl","footer1Box":"detail__footer1Box-32sxZ","footer1Item":"detail__footer1Item-3c7MH","footer2Box":"detail__footer2Box-1I_1V","footer3Box":"detail__footer3Box-3-dOX","footer3Title":"detail__footer3Title-3SPcj","footer3Div":"detail__footer3Div-3GtmX","footer3Item":"detail__footer3Item-3UbY4","footer4Box":"detail__footer4Box-2AQQs","footer4Title":"detail__footer4Title-1T6QE","que":"detail__que-Iw08T","ans":"detail__ans-3cNDb","detailBottom":"detail__detailBottom-wwWK5","bottomLeft":"detail__bottomLeft-2hXUT","bottomRight":"detail__bottomRight-25V45","bottomItem":"detail__bottomItem-3w1Vl","back":"detail__back-Kvo7c","like":"detail__like-37XOr","share":"detail__share-2dNpf","toBuyBtn":"detail__toBuyBtn-2Ie37"};

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _Item = __webpack_require__(319);

	var _Item2 = _interopRequireDefault(_Item);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _ranking = __webpack_require__(332);

	var _ranking2 = _interopRequireDefault(_ranking);

	var _topicData = __webpack_require__(325);

	var _topicData2 = _interopRequireDefault(_topicData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ranking = function (_Component) {
	    _inherits(Ranking, _Component);

	    function Ranking() {
	        _classCallCheck(this, Ranking);

	        return _possibleConstructorReturn(this, (Ranking.__proto__ || Object.getPrototypeOf(Ranking)).apply(this, arguments));
	    }

	    _createClass(Ranking, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _ranking2.default.ranking },
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u672C\u5468\u597D\u7269\u6392\u884C'
	                ),
	                _react2.default.createElement(RankingList, null)
	            );
	        }
	    }]);

	    return Ranking;
	}(_react.Component);

	var RankingList = function (_Component2) {
	    _inherits(RankingList, _Component2);

	    function RankingList() {
	        _classCallCheck(this, RankingList);

	        return _possibleConstructorReturn(this, (RankingList.__proto__ || Object.getPrototypeOf(RankingList)).apply(this, arguments));
	    }

	    _createClass(RankingList, [{
	        key: 'renderRanking',
	        value: function renderRanking(data) {
	            var dataArr = [];
	            for (var i = 0; i < data.length; i++) {
	                dataArr.push(_react2.default.createElement(_Item2.default, { key: data[i].id, title: data[i].title, likes: data[i].likes, price: data[i].price }));
	            }
	            return dataArr;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _ranking2.default.rankingList },
	                this.renderRanking(_topicData2.default)
	            );
	        }
	    }]);

	    return RankingList;
	}(_react.Component);

	exports.default = Ranking;

/***/ },

/***/ 332:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ranking":"ranking__ranking-3AuN8","rankingList":"ranking__rankingList-2qjCZ"};

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _FollowBtn = __webpack_require__(257);

	var _FollowBtn2 = _interopRequireDefault(_FollowBtn);

	var _buyers = __webpack_require__(335);

	var _buyers2 = _interopRequireDefault(_buyers);

	var _buyersData = __webpack_require__(306);

	var _buyersData2 = _interopRequireDefault(_buyersData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BuyerItem = function (_Component) {
	    _inherits(BuyerItem, _Component);

	    function BuyerItem() {
	        _classCallCheck(this, BuyerItem);

	        return _possibleConstructorReturn(this, (BuyerItem.__proto__ || Object.getPrototypeOf(BuyerItem)).apply(this, arguments));
	    }

	    _createClass(BuyerItem, [{
	        key: 'render',
	        value: function render() {
	            var label = "<span>" + this.props.label.join("</span><span>") + "</span>";
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/buyer/" + this.props.id },
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyers2.default.buyerItem },
	                    _react2.default.createElement('div', { className: _buyers2.default.buyerImg }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyers2.default.buyerInfo },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyers2.default.name },
	                            this.props.name
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyers2.default.desc },
	                            this.props.desc
	                        ),
	                        _react2.default.createElement('div', { className: _buyers2.default.label, dangerouslySetInnerHTML: { __html: label } }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyers2.default.followers },
	                            this.props.followers + "人关注"
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyers2.default.followBtnBox },
	                            _react2.default.createElement(_FollowBtn2.default, { following: this.props.following })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return BuyerItem;
	}(_react.Component);

	var BuyersList = function (_Component2) {
	    _inherits(BuyersList, _Component2);

	    function BuyersList() {
	        _classCallCheck(this, BuyersList);

	        return _possibleConstructorReturn(this, (BuyersList.__proto__ || Object.getPrototypeOf(BuyersList)).apply(this, arguments));
	    }

	    _createClass(BuyersList, [{
	        key: 'renderBuyers',
	        value: function renderBuyers(data) {
	            var dataArr = [];
	            for (var i = 0; i < data.length; i++) {
	                dataArr.push(_react2.default.createElement(BuyerItem, { key: data[i].id,
	                    id: data[i].id,
	                    name: data[i].name,
	                    desc: data[i].desc,
	                    label: data[i].label,
	                    followers: data[i].followers,
	                    following: data[i].following
	                }));
	            }
	            return dataArr;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _buyers2.default.buyersList },
	                this.renderBuyers(_buyersData2.default)
	            );
	        }
	    }]);

	    return BuyersList;
	}(_react.Component);

	var Buyers = function (_Component3) {
	    _inherits(Buyers, _Component3);

	    function Buyers() {
	        _classCallCheck(this, Buyers);

	        return _possibleConstructorReturn(this, (Buyers.__proto__ || Object.getPrototypeOf(Buyers)).apply(this, arguments));
	    }

	    _createClass(Buyers, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _TopFixed2.default,
	                    null,
	                    '\u4E70\u624B\u96C6\u5E02'
	                ),
	                _react2.default.createElement(BuyersList, null)
	            );
	        }
	    }]);

	    return Buyers;
	}(_react.Component);

	exports.default = Buyers;

/***/ },

/***/ 335:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buyersList":"buyers__buyersList-3bONT","buyerItem":"buyers__buyerItem-6UuY8","buyerImg":"buyers__buyerImg-1bp6B","buyerInfo":"buyers__buyerInfo-3Y6Uj","name":"buyers__name-TagUH","desc":"buyers__desc-wqAa8","label":"buyers__label-2xzbG","followers":"buyers__followers-2QytB","followBtnBox":"buyers__followBtnBox-2YpUz"};

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TopFixed = __webpack_require__(297);

	var _TopFixed2 = _interopRequireDefault(_TopFixed);

	var _FollowBtn = __webpack_require__(257);

	var _FollowBtn2 = _interopRequireDefault(_FollowBtn);

	var _buyer = __webpack_require__(338);

	var _buyer2 = _interopRequireDefault(_buyer);

	var _buyersData = __webpack_require__(306);

	var _buyersData2 = _interopRequireDefault(_buyersData);

	var _productsData = __webpack_require__(248);

	var _productsData2 = _interopRequireDefault(_productsData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Card = function (_Component) {
	    _inherits(Card, _Component);

	    function Card() {
	        _classCallCheck(this, Card);

	        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	    }

	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {

	            var res = this.props.buyerInfo;

	            return _react2.default.createElement(
	                'div',
	                { className: _buyer2.default.card },
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.cardMain },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyer2.default.cardImgBox },
	                        _react2.default.createElement('div', { className: _buyer2.default.cardImg })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyer2.default.cardInfo },
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyer2.default.name },
	                            res.name
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _buyer2.default.followers },
	                            res.followers,
	                            '\u4EBA\u8BA2\u9605'
	                        ),
	                        _react2.default.createElement(_FollowBtn2.default, { following: res.following })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.desc },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyer2.default.quoteBox },
	                        _react2.default.createElement('div', { className: _buyer2.default.quote })
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        res.label.join("，")
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        res.desc
	                    )
	                )
	            );
	        }
	    }]);

	    return Card;
	}(_react.Component);

	var Popular = function (_Component2) {
	    _inherits(Popular, _Component2);

	    function Popular() {
	        _classCallCheck(this, Popular);

	        return _possibleConstructorReturn(this, (Popular.__proto__ || Object.getPrototypeOf(Popular)).apply(this, arguments));
	    }

	    _createClass(Popular, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _buyer2.default.popular },
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.title },
	                    '\u6700\u53D7\u6B22\u8FCE'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.subTitle },
	                    'POPULAR'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.popularBox },
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null)
	                )
	            );
	        }
	    }]);

	    return Popular;
	}(_react.Component);

	var ProductItem = function (_Component3) {
	    _inherits(ProductItem, _Component3);

	    function ProductItem() {
	        _classCallCheck(this, ProductItem);

	        return _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).apply(this, arguments));
	    }

	    _createClass(ProductItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _buyer2.default.productItem },
	                _react2.default.createElement('div', { className: _buyer2.default.productImg }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.productTitle },
	                    '\u8FD9\u628A\u5200\u6233\u5230\u4E86\u6211\u5FC3\u4E2D\u7684\u67D0\u4E2AG\u70B9\u4E86'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.productDesc },
	                    '14\u5C0F\u65F6\u524D\u53D1\u5E03 1641\u4EBA\u559C\u6B22'
	                )
	            );
	        }
	    }]);

	    return ProductItem;
	}(_react.Component);

	var Products = function (_Component4) {
	    _inherits(Products, _Component4);

	    function Products() {
	        _classCallCheck(this, Products);

	        return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).apply(this, arguments));
	    }

	    _createClass(Products, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _buyer2.default.products },
	                _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.productsHeader },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyer2.default.title },
	                        '\u6700\u65B0\u5546\u54C1'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _buyer2.default.subTitle },
	                        '48 PRODUCTS'
	                    )
	                ),
	                _react2.default.createElement(ProductItem, null),
	                _react2.default.createElement(ProductItem, null),
	                _react2.default.createElement(ProductItem, null),
	                _react2.default.createElement(ProductItem, null)
	            );
	        }
	    }]);

	    return Products;
	}(_react.Component);

	var Buyer = function (_Component5) {
	    _inherits(Buyer, _Component5);

	    function Buyer() {
	        _classCallCheck(this, Buyer);

	        return _possibleConstructorReturn(this, (Buyer.__proto__ || Object.getPrototypeOf(Buyer)).apply(this, arguments));
	    }

	    _createClass(Buyer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: 'getBuyerInfo',
	        value: function getBuyerInfo(data) {
	            var id = location.hash.split("/").pop();
	            var buyerObj = { id: "__WARNING__" };
	            for (var i = 0; i < data.length; i++) {
	                if (data[i].id === id) {
	                    buyerObj = data[i];
	                    break;
	                }
	            }
	            return buyerObj;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var buyerInfo = this.getBuyerInfo(_buyersData2.default);
	            if (buyerInfo.id == "__WARNING__") {
	                setTimeout(function () {
	                    location.hash = "#/";
	                }, 2000);
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    '\u627E\u4E0D\u5230\u8D44\u6E90\uFF01'
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _buyer2.default.buyer },
	                    _react2.default.createElement(_TopFixed2.default, null),
	                    _react2.default.createElement(Card, { buyerInfo: buyerInfo }),
	                    _react2.default.createElement(Popular, null),
	                    _react2.default.createElement(Products, null)
	                );
	            }
	        }
	    }]);

	    return Buyer;
	}(_react.Component);

	exports.default = Buyer;

/***/ },

/***/ 338:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buyer":"buyer__buyer-3yUTi","card":"buyer__card-3KyMo","cardMain":"buyer__cardMain-9zEPT","cardImgBox":"buyer__cardImgBox-13HAw","cardImg":"buyer__cardImg-2mmBS","cardInfo":"buyer__cardInfo-1j5Uo","quoteBox":"buyer__quoteBox-1M3ug","quote":"buyer__quote-348CC","name":"buyer__name-1Cdol","followers":"buyer__followers-2BR9j","desc":"buyer__desc-3t9ju","popular":"buyer__popular-3eidV","title":"buyer__title-X9Uq0","subTitle":"buyer__subTitle-1gFeF","popularBox":"buyer__popularBox-2ObYe","productsHeader":"buyer__productsHeader-3gu78","productItem":"buyer__productItem-3Gl8t","productImg":"buyer__productImg-3FQZN","productTitle":"buyer__productTitle-11stn","productDesc":"buyer__productDesc-2fhsb"};

/***/ }

});