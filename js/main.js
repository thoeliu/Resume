$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage', 'lastPage'],
		menu: '#myMenu',
		navigation: true,
    	sectionsColor: ['#f4f100', '#252525', '#f4f100', '#252525', '#f4f100','#252525','#f4f100' ],
    	'afterLoad': function(anchorLink, index){
    				var speed = 500
				    var windowWidth =  $(window).width()
				    var radius = 60;
						if(windowWidth < 600){
							radius = 50;
						}
						if(windowWidth < 350){
							radius = 40;
						}
						var fontSize = Math.floor(radius / 3.3);
				if(index == 1){
					}
					if(index == 2){
						setTimeout(function () {
							$('#skills').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#skills').find('.order2').addClass('active')
						}, speed*2)

						$('#photoshop').waterbubble({
							radius: radius,
							wave: false,
							txt: 'PhotoShop',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.9
						})
						$('#illustrator').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Illustrator',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.9
						})
						$('#xmind').waterbubble({
							radius: radius,
							wave: false,
							txt: 'XMind',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.9
						})
						$('#axure').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Axure',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.8
						})
						$('#dw').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Dw',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.7
						})
						$('#ae').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Ae',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#f4f100',
							textColor: 'rgba(0, 0, 0, 1.0)',
							data: 0.6
						})
					}
					if(index == 3){
						setTimeout(function () {
							$('#projects').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#projects').find('.order2').addClass('active')
						}, speed*2)
					}

					if(index == 4){
						setTimeout(function () {
							$('#education').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#education').find('.order2').addClass('active')
						}, speed*2)
					}
				}
	});
	
	

});

