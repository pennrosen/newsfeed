module.exports = {
	app_files:{
		js:[
			// jQuery
			'./vendor/jquery/jquery.js',

			//--- Greensock (GSAP) ---//

			// TweenMax INCLUDES: 
            // TweenLite
            // TimelineLite
            // TimelineMax
            // CSSPlugin
            // EasePack
            // RoundPropsPlugin
            // BezierPlugin
            // AttrPlugin
            // DirectionalRotationPlugin
            //'./vendor/gsap/src/uncompressed/TweenMax.js',

            // TweenLite and plugins
            // DO NOT include these if using TweenMax
			// './vendor/gsap/src/uncompressed/TweenLite.js',
			// './vendor/gsap/src/uncompressed/TimelineLite.js',
			// './vendor/gsap/src/uncompressed/plugins/CSSPlugin.js',
			// './vendor/gsap/src/uncompressed/easing/EasePack.js',

			//- GSAP plugins not included in TweenMax -//
			// './vendor/gsap/src/uncompressed/plugins/DrawSVGPlugin.js',
			// './vendor/gsap/src/uncompressed/utils/SplitText.js',
			// './vendor/gsap/src/uncompressed/plugins/ScrollToPlugin.js', 


			//--- ScrollMagic ---//
            // './vendor/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js',

            // ScrollMagic Plugins
            
            // animations.gsap.js 
            // use to set/remove tweens with scrollmagic (http://scrollmagic.io/docs/animation.GSAP.html) 
			// './vendor/ScrollMagic/scrollmagic/uncompressed/plugins/animation.gsap.js',

			//  debug.addIndicators.js
            // './vendor/ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',

            // Scrollmagic Sticky Nav
            // other js files required for scrollmagic sticky nav: 
            // ScrollMagic.js
            // TweenLite/Max.js
            // ScrollToPlugin.js
			// './src/plugins/scrollmagic.sticky-nav.js',

			// App File (must be included)
			'./src/js/app.js' 
		] ,
		styles :[

			// main.scss must be included
			'./src/scss/main.scss'
			
		],
		header : [
			'<!DOCTYPE html>',
			'<html>',
			'<head>',
			'<meta charset="UTF-8">',
			'<title>Newsfeed</title>',
			'</head>',
			'<body>'
		],
		footer: [
			'</body>',
			'</html>'
		]
	}
};