import angular from 'angular';

class Resources {
  constructor($q, $window) {
    'ngInject';
    this.name = 'resources';
    this.orderName = 'resourceOrder';
    this._q = $q;
    this._localStorage = $window.localStorage;
    this.initResources();
  }

  find(id) {
    let self = this;
    let resource = angular.fromJson( self._localStorage.getItem(self.name) ).find(function(res) {
      return res.id.toString() === id.toString();
    });
    return resource;
  }

  peekAll() {
    let self = this;
    let resources = angular.fromJson( self._localStorage.getItem(self.name) );
    return resources;
  }

  push(resources) {
    let self = this;
    self._localStorage.setItem( self.name, angular.toJson(resources) );
  }

  initResources() {
    if (!this.peekAll()) {
      let resources = [
        {
          id: 1,
          src: "https://static.ting.com/shared/Apple-iPhone-5-White_large@2x.jpg",
          title: 'Apple iPhone 5 White',
          name: 'Apple iPhone 5 White',
          price: 203,
          isJustAdded: false,
          marketing: "With a top to bottom redesign, the iPhone 5 is slim, light and super smart. If you\'re already invested in Apple\'s excellent app and music ecosystem, it\'s a no-brainer. A particularly beautiful no-brainer. \n\n(If you\'re buying an iPhone 5 directly from Ting, you\'ll be good to go right out of the box.  If you buy an iPhone 5 from Glyde, eBay, Amazon, or elsewhere, you\'ll need a compatible Sprint or Ting nano SIM.)",
          description: 'The iPhone 4 is a revolutionary device at a revolutionary price. With a 3.5-inch retina display sporting 326 pixels per inch, it\'s not the latest and greatest but it\'s still far from retro.\n\nFaceTime your friends and transmit crystal clear audio thanks to Apple\'s second noise cancelling microphone.\n\nSupporting iOS 7, you get access to some of the latest features including a new way to multitask, iTunes Radio and more.\n\nLooking for a camera that gives you the most bang for your buck? The iPhone 4\'s 5 megapixel rear camera films crisp 720p HD video and can pull off some solid snaps, even in low light settings.\n\nWith its slick stainless steel frame, you\'ll be hard pressed to find a more appealing smartphone at a similar price point.',

          sale: false,
          network: 'GSM',
          condition: 'New',
          type: 'Smartphone',
          brand: 'Apple',

          notIncluded: 'Refurbished devices do not include a microSD card or user manual. They do, of course, come with a battery and charging cable.',

          features: [
            {
              name: 'iOS 7',
              description: 'Get the sleekest and latest software'
            },
            {
              name: 'FaceTime',
              description: 'Share your surroundings and smile with video calling available over WiFi.'
            },
            {
              name: 'Retina Display',
              description: '326 pixels per inch'
            }
          ]
        },
        {
          id: 2,
          src: "https://static.ting.com/shared/Apple-iPhone-4-White_small@2x.jpg",
          title: 'Apple iPhone 4 White',
          name: 'Apple iPhone 4 White',
          price: 87,
          isJustAdded: false,
          marketing: "",
          description: 'The iPhone 4 is a revolutionary device at a revolutionary price. With a 3.5-inch retina display sporting 326 pixels per inch, it\'s not the latest and greatest but it\'s still far from retro.\n\nFaceTime your friends and transmit crystal clear audio thanks to Apple\'s second noise cancelling microphone.\n\nSupporting iOS 7, you get access to some of the latest features including a new way to multitask, iTunes Radio and more.\n\nLooking for a camera that gives you the most bang for your buck? The iPhone 4\'s 5 megapixel rear camera films crisp 720p HD video and can pull off some solid snaps, even in low light settings.\n\nWith its slick stainless steel frame, you\'ll be hard pressed to find a more appealing smartphone at a similar price point.',

          sale: false,
          network: 'GSM',
          condition: 'New',
          type: 'Smartphone',
          brand: 'Apple',

          notIncluded: 'Refurbished devices do not include a microSD card or user manual. They do, of course, come with a battery and charging cable.',

          features: [
            {
              name: 'iOS 7',
              description: 'Get the sleekest and latest software'
            },
            {
              name: 'FaceTime',
              description: 'Share your surroundings and smile with video calling available over WiFi.'
            },
            {
              name: 'Retina Display',
              description: '326 pixels per inch'
            }
          ]
        },
        {
          id: 3,
          src: "https://static.ting.com/shared/v2/LG_K7_Tribute5_Black_Front_Small@2x.jpg",
          title: 'SIM cards',
          name: 'SIM cards',
          price: 89,
          isJustAdded: true,
          marketing: "Unlike the iPhone 5, 5c, and 5s the iPhone 4 does not require a SIM card to activate. You can simply purchase one from us, or find any Sprint version elsewhere, and activate. The iPhone 4 can only be updated to iOS  7.1.2.",
          description: 'The iPhone 4 is a revolutionary device at a revolutionary price. With a 3.5-inch retina display sporting 326 pixels per inch, it\'s not the latest and greatest but it\'s still far from retro.\n\nFaceTime your friends and transmit crystal clear audio thanks to Apple\'s second noise cancelling microphone.\n\nSupporting iOS 7, you get access to some of the latest features including a new way to multitask, iTunes Radio and more.\n\nLooking for a camera that gives you the most bang for your buck? The iPhone 4\'s 5 megapixel rear camera films crisp 720p HD video and can pull off some solid snaps, even in low light settings.\n\nWith its slick stainless steel frame, you\'ll be hard pressed to find a more appealing smartphone at a similar price point.',

          sale: false,
          network: 'GSM',
          condition: 'New',
          type: 'Smartphone',
          brand: 'Apple',

          notIncluded: 'Refurbished devices do not include a microSD card or user manual. They do, of course, come with a battery and charging cable.',

          features: [
            {
              name: 'iOS 7',
              description: 'Get the sleekest and latest software'
            },
            {
              name: 'FaceTime',
              description: 'Share your surroundings and smile with video calling available over WiFi.'
            },
            {
              name: 'Retina Display',
              description: '326 pixels per inch'
            }
          ]
        },
        {
          id: 4,
          src: "https://static.ting.com/shared/v2/Kyocera_TorqueXT_front_Small@2x.jpg",
          title: 'Kyocera Torque XT',
          name: 'Kyocera Torque XT',
          price: 1,
          isJustAdded: true,
          marketing: "Unlike the iPhone 5, 5c, and 5s the iPhone 4 does not require a SIM card to activate. You can simply purchase one from us, or find any Sprint version elsewhere, and activate. The iPhone 4 can only be updated to iOS  7.1.2.",
          description: 'The iPhone 4 is a revolutionary device at a revolutionary price. With a 3.5-inch retina display sporting 326 pixels per inch, it\'s not the latest and greatest but it\'s still far from retro.\n\nFaceTime your friends and transmit crystal clear audio thanks to Apple\'s second noise cancelling microphone.\n\nSupporting iOS 7, you get access to some of the latest features including a new way to multitask, iTunes Radio and more.\n\nLooking for a camera that gives you the most bang for your buck? The iPhone 4\'s 5 megapixel rear camera films crisp 720p HD video and can pull off some solid snaps, even in low light settings.\n\nWith its slick stainless steel frame, you\'ll be hard pressed to find a more appealing smartphone at a similar price point.',

          sale: false,
          network: 'GSM',
          condition: 'New',
          type: 'Feature phone',
          brand: 'Apple',

          notIncluded: 'Refurbished devices do not include a microSD card or user manual. They do, of course, come with a battery and charging cable.',

          features: [
            {
              name: 'iOS 7',
              description: 'Get the sleekest and latest software'
            },
            {
              name: 'FaceTime',
              description: 'Share your surroundings and smile with video calling available over WiFi.'
            },
            {
              name: 'Retina Display',
              description: '326 pixels per inch'
            }
          ]
        }, {
          id: 5,
          src: "https://static.ting.com/shared/v2/s7black_front_Large@2x.jpg",
          title: 'Samsung Galaxy S5 Black',
          name: 'Samsung Galaxy S5 Black',
          price: 203,
          savedPrice: 24,
          isJustAdded: false,
          marketing: "Inside and out, the Samsung Galaxy S7 is a beauty.\n\nSure, it\'s slightly thicker around the middle when compared with last year\'s model, but who among us can\'t say the same about ourselves?",
          description: 'The iPhone 4 is a revolutionary device at a revolutionary price. With a 3.5-inch retina display sporting 326 pixels per inch, it\'s not the latest and greatest but it\'s still far from retro.\n\nFaceTime your friends and transmit crystal clear audio thanks to Apple\'s second noise cancelling microphone.\n\nSupporting iOS 7, you get access to some of the latest features including a new way to multitask, iTunes Radio and more.\n\nLooking for a camera that gives you the most bang for your buck? The iPhone 4\'s 5 megapixel rear camera films crisp 720p HD video and can pull off some solid snaps, even in low light settings.\n\nWith its slick stainless steel frame, you\'ll be hard pressed to find a more appealing smartphone at a similar price point.',

          sale: 'On sale',
          network: 'CDMA',
          condition: 'Refurbished',
          type: 'Smartphone',
          brand: 'Samsung',

          notIncluded: 'It\'d probably be easier to discuss the few things the Samsung Galaxy S5 doesn\'t do rather than choosing to highlight just a few of the things it does. We do like a good challenge though.\n\nThe Galaxy S5 is a sizeable but slim device. With a 5-inch screen, it toes the line between standard smartphone and phablet but is certainly more the former than the latter. \n\nS Health makes the Galaxy S5 the perfect fitness companion. You probably already know about the integrated heart rate sensor on the back of the device. Just in case you don\'t though, it\'s got one and it works well. S Health can (optionally) track your exercise sessions, everything you eat, every step you take and every move you make. It\'s only creepy if you make it that way.\n\nIt\'s rear 16 MP camera and improved Camera app combine forces to catch the best possible pics on your smartphone. With a host of handy camera modes and an auto focus that snaps to in about a third of a second, you\'ll never miss a shot.\n\nLooking beyond all the gee whiz features, our favorite thing about the S5 is that it\'s waterproof. If you\'ve ever dropped your device in the drink, you know that sinking feeling as it sinks. Assuming you remembered to replace the charge / sync port cover after you finished charging, the Galaxy S5 can take it. Just pull it out from under water and you\'re back in business.',

          features: [
            {
              name: 'IP67 certified',
              description: 'Complete protection against dust and submersion up to 3.28 ft for 30 min.'
            },
            {
              name: 'Fingerprint sensor',
              description: 'Swipe to unlock without sacrificing security.'
            },
            {
              name: '4K video recording',
              description: 'Capture video at higher than high def.'
            }
          ]

        },
      ];
      this.push( resources );
    }
  }
}

export {Resources}
