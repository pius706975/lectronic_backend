'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // these 2 users have the same password: User@7777
    await queryInterface.bulkInsert('users', [{
      name: 'Admin Gahol',
      email: 'admin@gmail.com',
      password: '$2b$10$sfkjVmyIr7xX.CFurjFBkuvc6KKTSFfPgSvGHzKiVuQb3miGS29yy',
      address: 'Ghost Cave Street',
      phone_number: '081244556678',
      date_of_birth: '17-02-1999',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'admin',
      is_verified: true
    }, 
    
    {
      name: 'Visitor Tamvan',
      email: 'visitor@gmail.com',
      password: '$2b$10$qYCYLV6S5M9WzGGVmO5nhumdIZ7VKpeJ8pPTD.Em7sCL.vETJEqBO',
      address: 'Jump 21 Street',
      phone_number: '081232320099',
      date_of_birth: '17-02-1989',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'user',
      is_verified: true
    }], {})

    await queryInterface.bulkInsert('categories', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      category_name: 'Headphone'
    }, 
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      category_name: 'Addional Equipment'
    }, 
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      category_name: 'Audio Mixer'
    }, 
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      category_name: 'Audio Interface'
    }, 
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      category_name: 'Speaker'
    }], {})

    await queryInterface.bulkInsert('products', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-MV1',
      price: 6200000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692265645/lectronic/productImages/Feature1_v2_lfymx3.jpg',
      rating: 0,
      description: 'Open back Studio Monitor Headphones for creating spatial and stereo sound with wide frequency range and soundstage feel. Neutral and high-resolution acoustic characteristics reproduce all sound elements exactly as they are, providing lightweight and excellent wearing comfort for creators during long studio work.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-7506 Professional Headphones',
      price: 1300000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1691585600/lectronic/productImages/tfpeodtjb5doackslpx1.png',
      rating: 0,
      description: `The MDR-7506 is an extremely high-quality reference headphone. Lightweight and engineered for maximum comfort over extended periods of wear, it's ideal for use in broadcast and studio environments. A 40mm PET diaphragm and neodymium magnet provide performance exceeding the requirements of digital sources, such as CD, MD and DAT.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-Z1R Premium Headphones',
      price: 27000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266434/lectronic/productImages/thumbnails_large__default_upload_bucket_01._MDR-Z1R_B_cw-Mid_1.png_erh3cg.png',
      rating: 0,
      description: 'Elevating the high-resolution sound experience from one you listen to, to one you can feel.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      price: 6000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266705/lectronic/productImages/6145c1d32e6ac8e63a46c912dc33c5bb_djcoiq.avif',
      rating: 0,
      description: 'With four microphones on each earcup, this is our biggest ever step forward in noise cancelling. Ambient sound is captured even more accurately for a dramatic reduction in high frequency noise. Thanks to Auto NC Optimizer, noise cancelling performance is always and automatically optimised based on wearing conditions and external environmental factors such as atmospheric pressure.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
      price: 5100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266891/lectronic/productImages/291712201_eklh1u.jpg',
      rating: 0,
      description: `It's just you and your music with the WH-1000XM4 headphones. The easy way to enjoy less noise and even purer sound, with smart listening technology that automatically personalises your experience.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-H910N h.ear on 3 Wireless Noise Cancelling Headphones',
      price: 4500000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269247/lectronic/productImages/DM_0AF57D4FBE7097D96A5887C30AC4D71F_010223100245_ll_iz0rdd.jpg',
      rating: 0,
      description: `The new h.ear range brings different colours together harmoniously, creating unexpected combinations where each element has its own place, and complements the other. From distinctive design to exceptional sound and functionality, see what the h.ear range has to offer.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-XB910N Wireless Headphones',
      price: 3100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269844/lectronic/productImages/Sony-WHXB910N_bgc0e8.jpg',
      rating: 0,
      description: `The WH-XB910N noise cancelling headphones enhance all your low-end frequencies for exceptional bass. A dedicated bass duct on the headphone housing and increased air-tightness between the driver units and eardrums help to create precise, punchy rhythms that lift every track. Yet these wireless headphones also maintain vocal clarity for a wonderfully rich, well-rounded listening experience. `
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-CH720N',
      price: 2000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269436/lectronic/productImages/design-medium_l9zos6.jpg',
      rating: 0,
      description: `With noise-cancelling technology, a lightweight design and a long-lasting battery life you can enjoy your music for longer and without background interruptions. Dual Noise Sensor technology and an Integrated Processor V1 take Noise Cancelling to the next level. Now you can shut the world around you out and immerse yourself in the music.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer BH470NC',
      price: 1100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270206/lectronic/productImages/51R3mzqQzZL_lxxd0b.jpg',
      rating: 0,
      description: `Active Noise Cancelling Headphones for Audiophiles. These audiophile headphones deliver high-definition bass and super-transparent highs across an ultra-wide dynamic range. The BH470NC fulfills your needs to compose your own tunes in peace, no matter where you are – at a price that is very kind to every budget!
      `
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer BH480NC',
      price: 1400000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270691/lectronic/productImages/BH480NC-large_ngpsxf.jpg',
      rating: 0,
      description: `Active Noise Cancelling Headphones. These audiophile headphones deliver fullness of bass and super-transparent highs across the full audio spectrum (20 Hz – 20 kHz). Our BH480NC fulfills your need to enjoy every detail of your favorite music in peace, no matter where you are!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HC 2000BNC',
      price: 990000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270795/lectronic/productImages/HC2000BNC-large_mtgrjj.jpg',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite song, you want headphones that deliver a wide frequency response and high dynamic range. Our HC 2000BNC headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer BB 560M',
      price: 650000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693818464/lectronic/productImages/BB-560M_P0E3U_Front2_XL_yijzb3.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or enjoying a conversation with your favorite friend you want headphones that deliver a wide frequency response and high dynamic range. Our BB 560M headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HO 66',
      price: 260000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693818986/lectronic/productImages/Image_BE_0403-AAF_HO-66_Front_XL_ybmpsu.png',
      rating: 0,
      description: `When you are just sitting back enjoying your favorite song, you want light comfortable headphones that deliver a wide frequency response and high dynamic range. Our HO 66 headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPM1000',
      price: 250000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693819110/lectronic/productImages/Image_BE_P0223_HPM1000_Front1_XL_bkcl06.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite MP3, you want headphones that deliver a wide frequency response and high dynamic range. Our HPM1000 headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPM1000-BK',
      price: 250000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693819241/lectronic/productImages/Image_BE_P0DX1_HPM1000-BK_Front_XL_z0cr9n.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite music, you want headphones that deliver a wide frequency response and high dynamic range. Our HPM1000-BK headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPM1100',
      price: 270000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693819875/lectronic/productImages/HPM1100_P0EW1_Front1_XL_ip3hj5.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line, or just sitting back enjoying your favorite music, you want headphones that deliver a wide frequency response and high dynamic range. Our HPM1100 closed-back studio reference headphones fulfill your need to compose your own tunes in peace, no matter where you are – at a price that is very kind to every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPM1100-BK',
      price: 270000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693819990/lectronic/productImages/HPM1100-BK_P0EW2_Front1_XL_z9r0uz.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line, or just sitting back enjoying your favorite music, you want headphones that deliver a wide frequency response and high dynamic range. Our HPM1100-BK closed-back studio reference headphones fulfill your need to compose your own tunes in peace, no matter where you are – at a price that is very kind to every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPS3000',
      price: 320000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693820095/lectronic/productImages/HPS3000_P0189_Front_XL_qzl5jj.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite MP3, you want headphones that deliver high-definition bass and super-transparent highs across an ultra-wide dynamic range. Our HPS3000 headphones feature high-efficiency cobalt capsules that provide incredible high-resolution performance – at a price that is very kind to every budget!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer MO240',
      price: 800000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693820278/lectronic/productImages/MO240_P0EIU_Front_XL_nlpzdk.png',
      rating: 0,
      description: `Whether you’re mixing a recording or monitoring a bass line, you want earphones that deliver ultra-deep bass and super-transparent highs across an ultra-wide dynamic range. Our MO240 in-ear monitors feature to fulfill your needs to compose your own tunes in peace, doesn’t matter where you are – at a price that is very kind to every budget!` 
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HPS5000',
      price: 420000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693820216/lectronic/productImages/HPS5000_P0297_Front_XL_hvtbnj.png',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite MP3, you want headphones that deliver high-definition bass and super-transparent highs across an ultra-wide dynamic range. Our HPS5000 headphones feature high-efficiency cobalt capsules that provide incredible high-resolution performance – at a price that is very kind to every budget! Let`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'AKG K182',
      price: 2500000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693820760/lectronic/productImages/lQbtueo_xhlggd.jpg',
      rating: 0,
      description: `Take control of your sound. 
      
      Never too hot. Never too high. Always just right. Designed for discerning musicians and engineers, the K182 professional closed-back monitor headphones deliver incredibly accurate sound. 50mm drivers keep it loud — even when using mobile devices — while the 10 Hz - 28 kHz frequency range provides a truly balanced mix. 3D-axis folding and comfortable, replaceable ear pads make these headphones an easy travel companion, no matter where your sound takes you.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'AKG K361-BT',
      price: 2460000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693820859/lectronic/productImages/akg_k361_bt_professional_bluetooth_closed_back_1509175_xkylhw.jpg',
      rating: 0,
      description: `Precision Performance, Pure Freedom.

      Whether you’re an artist, engineer, podcaster or beat maker, you’re always in creative mode. AKG K361-BT Professional Studio Headphones strike the perfect balance between studio-quality sound, Bluetooth functionality, plush comfort and a sleek, sturdy design that stands up to your mobile lifestyle.

      K361-BTs are precision-engineered to reproduce natural, balanced audio in exceptional detail, so you can make more confident decisions when you’re mixing and editing. They deliver the deepest bass and highest highs in their class, with a stunning frequency response of 15 Hz to 28 kHz. K361-BTs offer the convenience of switchable Bluetooth wireless and wired connectivity. A built-in microphone allows two-way Bluetooth communications, whether you’re in a studio session or a conference call; use gesture controls located right on the earcups to answer calls, adjust volume, play and pause music, and more with the swipe of a finger. Ergonomic earcups cradle your ears in supreme comfort—because once you hear how amazing your K361-BTs sound, you won’t ever want to take them off.` 
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'AKG K92',
      price: 860000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693821063/lectronic/productImages/AKGK92-1_szljo2.jpg',
      rating: 0,
      description: `A studio mainstay
      
      Mix and master your tracks with uninhibited clarity with the AKG K92 over-ear, closed back headphones. Professional-grade 40mm drivers reveal even the subtlest nuances, so you can be confident your mix will translate accurately on any system. Whether you’re fine-tuning track levels within the mix or mastering the final product, the self-adjusting headband and lightweight design will provide hours of comfort. Designed by the company whose mics and headphones have helped create some of the world’s most iconic recordings, the durable K92 is a serious headphone that delivers great sound in the studio and beyond.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'AKG K271 MKII',
      price: 2690000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693824182/lectronic/productImages/AKG-K271-MKII-angled-750x750_ni9dj4.jpg',
      rating: 0,
      description: `Universal genius
      
      The AKG K271 MKII are professional over-ear headphones designed for studio mixing, studio monitoring and live performance applications. Perfect for vocalists and drummers and built to provide the best possible sound reproduction, their fully-enclosed, sealed design provides high noise insulation, low signal bleeding into studio microphones and maximum isolation for live-mixing applications. In addition to great sound quality and insulation, the AKG K271 MKII headphones are extremely durable and comfortable. Not only designed to withstand the demands of countless hours in the studio, their self-adjusting headband provides an ideal fit and their over-ear pads nicely envelop the ears. Other features include an auto-mute switch in the headband as well as a professional mini XLR connector. The AKG K271 MKII headphones also come with a 3m (10ft) straight cable and 5m (16ft) coiled cable, so you can start listening to your music, mix or project right away. Altogether, from performance and ease of use to comfort and reliability, the AKG K271 MKII is a powerful tool for mixing and monitoring environments.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'AKG K240 MKII',
      price: 2358000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1693824259/lectronic/productImages/6AEbdCh_zrkwlx.jpg',
      rating: 0,
      description: `Everybody´s darling
      
      The AKG K240 MKII professional over-ear, semi-open headphones carry on the success of their predecessor—the AKG K240 Studio—and are a standard in studios, orchestras and on stages around the world. Their advanced 30 mm XXL transducers with patented Varimotion diaphragms deliver a wide dynamic range, increased sensitivity and high sound levels, while their semi-open design provides the airiness of open headphones with the powerful bass response of closed designs. With impressive accuracy, musicians, producers and engineers rely on the AKG K240 MKII to clearly hear mixing details, which has made these headphones a standard in recording settings. In addition to great sound quality, the headphones are extremely durable and comfortable. Not only built to withstand the demands of countless hours in the studio, their self-adjusting headband provides an ideal fit and their over-ear pads nicely envelop the ears. The AKG K240 MKII headphones also feature a professional mini XLR connector and come with a 3m (10ft) straight cable, 5m (16ft) coiled cable and convertible jack plug for connecting portable equipment easily. Altogether, from performance and ease of use to comfort and reliability, the AKG K240 MKII is a powerful tool for production environments.`
    }
    ], {})
  },
};
