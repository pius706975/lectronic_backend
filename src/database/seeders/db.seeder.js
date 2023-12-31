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
      date_of_birth: '1999-02-17',
      gender: 'male',
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
      date_of_birth: '1989-02-17',
      gender: 'male',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1695194185/lectronic/userImages/mmrxcjrcundraxqefopx.png',
      role: 'user',
      is_verified: true
    }], {})

    await queryInterface.bulkInsert('categories', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      category_name: 'Headphones'
    }, 
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      category_name: 'Accessories'
    }, 
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      category_name: 'Audio Mixers'
    }, 
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      category_name: 'Audio Interfaces'
    }, 
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      category_name: 'Loudspeakers'
    }], {})

    await queryInterface.bulkInsert('products', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-MV1',
      price: 6200000,
      stock: 95,
      sold: 5,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692265645/lectronic/productImages/Feature1_v2_lfymx3.jpg',
      rating: 5,
      description: 'Open back Studio Monitor Headphones for creating spatial and stereo sound with wide frequency range and soundstage feel. Neutral and high-resolution acoustic characteristics reproduce all sound elements exactly as they are, providing lightweight and excellent wearing comfort for creators during long studio work.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-7506 Professional Headphones',
      price: 1300000,
      stock: 94,
      sold: 6,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1691585600/lectronic/productImages/tfpeodtjb5doackslpx1.png',
      rating: 5,
      description: `The MDR-7506 is an extremely high-quality reference headphone. Lightweight and engineered for maximum comfort over extended periods of wear, it's ideal for use in broadcast and studio environments. A 40mm PET diaphragm and neodymium magnet provide performance exceeding the requirements of digital sources, such as CD, MD and DAT.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-Z1R Premium Headphones',
      price: 27000000,
      stock: 98,
      sold: 2,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266434/lectronic/productImages/thumbnails_large__default_upload_bucket_01._MDR-Z1R_B_cw-Mid_1.png_erh3cg.png',
      rating: 5,
      description: 'Elevating the high-resolution sound experience from one you listen to, to one you can feel.'
    },
    
    {
      category_id: "f3cfb5d7-b8b1-4464-b24e-50db853aa142",
      name: 'Behringer UMC404HD',
      price: 3200000,
      stock: 100,
      sold: 3,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694158442/lectronic/productImages/UMC404HD_P0BK1_Front_XL_kvmvci.png',
      rating: 4,
      description: `The incredible U-PHORIA UMC404HD bridges the gap between your creativity and your fans. This blazingly fast USB 2.0 studio in a box will have you recording your next masterpiece in minutes with all the connectivity required for your microphones, guitars, keyboards and even MIDI devices.

      Record the perfect vocal right to your computer-based DAW thanks to the 4 astonishingly pure, world-class Midas-designed mic preamps, which include +48 Volt phantom power for condenser microphones, all going through studio-grade 24-Bit/192 kHz converters for the best possible sound quality. Whether you’re a singer-songwriter, producer on the go, or just need a rock-solid interface for running backing tracks at a gig, the ultra-dependable U-PHORIA UMC404HD will help you shine in the digital domain. `
    },
    
    {
      category_id: "f3cfb5d7-b8b1-4464-b24e-50db853aa142",
      name: 'Behringer UMC22',
      price: 1900000,
      stock: 97,
      sold: 3,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694216119/lectronic/productImages/UMC22_P0AUX_Front_XL_djlo9e.png',
      rating: 4,
      description: `When it’s time to make recording history, you need the best audio interface you can get – and you need one you can count on. That’s why we’re kicking it up a notch with the amazing UMC22, an ultra-compact 2 x 2, 48 kHz USB audio interface with a professional-grade Midas-designed Mic Preamp, combination XLR/ TRS input for your vocal or line input and an additional ¼" Instrument Input (no DI box required). The rich feature-set, which also boasts a powerful Phones Output for the Direct Monitoring of your session, plus 2 Outputs and USB-supplied power – makes the UMC22 the best, and most-portable recording interface in its class!`
    },
    
    {
      category_id: "f3cfb5d7-b8b1-4464-b24e-50db853aa142",
      name: 'Behringer UMC204HD',
      price: 2497000,
      stock: 89,
      sold: 11,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694216333/lectronic/productImages/UMC204HD_P0BK0_Front_XL_iqartc.png',
      rating: 5,
      description: `The incredible U-PHORIA UMC204HD bridges the gap between your creativity and your fans. This blazingly fast USB 2.0 studio in a box will have you recording your next masterpiece in minutes with all the connectivity required for your microphones, guitars, keyboards and even MIDI devices.

      Record the perfect vocal right to your computer-based DAW thanks to the 2 astonishingly pure, world-class Midas-designed mic preamps, which include +48 Volt phantom power for condenser microphones, all going through studio-grade 24-Bit/192 kHz converters for the best possible sound quality. Whether you’re a singer-songwriter, producer on the go, or just need a rock-solid interface for running backing tracks at a gig, the ultra-dependable U-PHORIA UMC204HD will help you shine in the digital domain.`
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
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Behringer UMC202HD',
      price: 2133000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694216945/lectronic/productImages/UMC202HD_P0BJZ_Front_XL_ydcsiy.png',
      rating: 0,
      description: `This blazingly fast USB 2.0 studio in a box will have you recording your next masterpiece in minutes with all the connectivity for microphones, guitars, bass and keyboards. Record the perfect vocal right to your computer-based DAW thanks to the 2 astonishingly pure, worldclass Midas-designed mic preamps, which include +48 Volt phantom power for condenser microphones, all going through studio-grade 24-Bit/192 kHz converters for the best possible sound quality. Whether you’re a singer-songwriter, producer on the go, or just need a rock-solid interface for running backing tracks at a gig, the ultra-dependable U-PHORIA UMC202HD will help you shine in the digital domain. `
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Behringer UM2',
      price: 1260000,
      stock: 80,
      sold: 20,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694217047/lectronic/productImages/Image_BE_P0AVV_UM2_Front_XL_wa7gdd.png',
      rating: 4,
      description: `When it’s time to make recording history, you need the best audio interface you can get – and you need one you can count on. That’s why we’re kicking it up a notch with the amazing UM2, an ultra-compact 2 x 2, 48 kHz USB interface with a studio-grade XENYX Mic Preamp, combination XLR/ TRS input for your vocal or line input and an additional ¼" Instrument Input (no DI box required). The rich feature-set, which also boasts a powerful Phones Output for the Direct Monitoring of your session, plus 2 Outputs and USB-supplied power – makes the UM2 the best, and most-portable recording interface in its class!`
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
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Behringer UMC1820',
      price: 4700000,
      stock: 98,
      sold: 2,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694217189/lectronic/productImages/Image_BE_0805-AAN_UMC1820_Front_XL_vmkjxd.png',
      rating: 4,
      description: `The incredible U-PHORIA UMC1820 bridges the gap between your creativity and your fans. This blazingly fast USB 2.0 studio-in-a-box will have you recording your next masterpiece in minutes with all the connectivity required for your microphones, guitars, keyboards and even MIDI devices.

      Record the perfect vocal right to your computer-based DAW thanks to the 8 astonishingly clear, world-class Midas-designed mic preamps, which include +48 Volt phantom power for condenser microphones, all going through studio-grade 24-Bit/96 kHz converters for the best possible sound quality. It also provides I/O support for S/PDIF, ADAT and S/MUX formats. Whether you’re a singer-songwriter, producer on the go, or just need a rock-solid interface for running backing tracks at a gig, the ultra-dependable U-PHORIA UMC1820 will help you shine in the digital domain.`
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
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Behringer UFO202',
      price: 868000,
      stock: 90,
      sold: 10,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694224034/lectronic/productImages/UFO202_P0A12_Front_XL_ceh0js.png',
      rating: 4,
      description: `The UFO202 boasts an impressive set of features for its micro size. Use the UFO202’s RCA Inputs and Outputs to connect your computer and your mixing console, tape deck, keyboard, sound modules and active monitors, to just name a few of the myriad options. Additionally, when you connect the UFO202’s outputs to your mixer’s input channels, you gain access to EQ, Aux Sends and much more – allowing you to build extremely-versatile monitor mixes for your recording sessions.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Behringer UCG102',
      price: 1010000,
      stock: 92,
      sold: 8,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694224202/lectronic/productImages/UCG102_P0198_Front_XL_zut2gx.png',
      rating: 3,
      description: `The UCG102 is a USB interface that, like a guitar amp, receives signal from your guitar via a ¼ " input jack. A built-in USB cable then sends the signal directly to your computer, in addition to tracking your latest masterpiece. It has a ¼ " headphone jack and Phones volume dial so you can monitor your performance as you record, a Clip LED to tell you when your signal is too hot, and a Hi/Lo level selector.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'behringer MIC 2 USB',
      price: 1637000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694224337/lectronic/productImages/MIC-2-USB_P0BBQ_Front2_XL_ejjfzr.png',
      rating: 0,
      description: `The incredible MIC 2 USB is the very essence of simplicity. Connect the balanced XLR connector to your dynamic microphone and run the USB cable to your computer. It just doesn’t get any easier than this!`
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'behringer ADA8200',
      price: 5700000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694224449/lectronic/productImages/Image_BE_P0ATL_ADA8200_Front_XL_wxbzct.png',
      rating: 0,
      description: `The ADA8200 is sublimely easy to operate, fits neatly into a single rack space and, thanks to the 8 Midas-designed mic preamps with switchable +48 V Phantom Power and integrated Cirrus Logic 24-bit A/D - D/A converters, you get incredibly detailed, pristine performance. Signal conversion takes place at your choice of 44.1 or 48 kHz with full 24-bit resolution. The ADAT Inputs and Outputs can be operated independently, as long as you use an identical wordclock signal. And ADA8200’s operating frequency range is an ultra-wide 10 Hz to 24 kHz – at a very respectable, 48 kHz sampling rate. Put simply, the ULTRAGAIN ADA8200 is the professional’s edge. `
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett Solo 4th Gen',
      price: 2400000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694432703/lectronic/productImages/c55c018f1b6034cef61c379a65860be70172de8b_FOC_SCARLETTSOLO4G_3_2_jcylxd.jpg',
      rating: 0,
      description: `Bringing big studio sound to wherever you make music, Scarlett Solo makes it easier than ever to record and release your songs. Perfectly crafted for today's music makers, just plug in, record, and produce finished tracks with the best sound you've ever had. Hook a mic up to Solo’s detailed mic pre and it sounds great right away. Plug your guitar into the high-headroom Hi-Z instrument input, it feels just like an amp.
      
      Studio-grade converters, with a huge 120dB dynamic range deliver the audio performance you'd find in a pro studio. Air mode, with Presence and Harmonic Drive, gives you that big console sound wherever you record. Solo’s amped-up headphone output with independent volume control drives your favourite headphones loud and clear. Need software? The Hitmaker Expansion software bundle includes all the tools you need to record, produce and release your tracks.`
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 2i2 4th Gen',
      price: 3550000,
      stock: 99,
      sold: 1,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694497468/lectronic/productImages/18482057_800_pbv7uh.jpg',
      rating: 5,
      description: `The original studio-quality 2-in, 2-out interface, has been remastered for the artist. Two of our most detailed ultra-low-noise mic pres. Hi-Z and super-high-quality line inputs for guitars, keys and synths. Studio-grade converters, with a huge 120dB dynamic range that matches what you'd find in a pro studio.
      
      Auto Gain and Clip Safe make sure you'll never need to worry about your levels. Air mode, with Presence and Harmonic Drive, gives you that big console sound wherever you record. And the Hitmaker Expansion software bundle includes all the tools you need to record, produce and release your tracks.`
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 4i4 4th gen',
      price: 4900000,
      stock: 97,
      sold: 3,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694501704/lectronic/productImages/510r8Yl-fnL_je7ujl.jpg',
      rating: 4,
      description: `Scarlett 4i4 is the complete compact studio hub for all your instruments. Perfect for multi-instrumentalists and collaborators, 4i4 is loaded with I/O for everything. Two of our most detailed ultra-low-noise mic preamps. Hi-Z, line and MIDI connections for your keys, guitars, synths, grooveboxes and controllers. With 4i4 your headphones, monitors, and line outs each get their own mix, so you can match the studio setup to the session.
      
      Air mode, with Presence and Harmonic Drive, gives you that big console sound wherever you record. Auto Gain and Clip Safe make sure you'll never need to worry about your levels. And the Hitmaker Expansion software bundle includes all the tools you need to record, produce and release your tracks.`
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett Solo 3rd Gen',
      price: 2350000,
      stock: 87,
      sold: 13,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694515697/lectronic/productImages/a90a373418145193bf15295e5a7816ee_mesggv.jpg',
      rating: 5,
      description: `Turn ideas into records. Hook up a guitar and a mic and make the best recordings you ever have. Solo is studio sound made simple.
      
      The single 3rd Generation Scarlett mic preamp sounds great straight out of the box. Air mode recreates the legendary effect of Focusrite's ISA mic pres and makes vocals and guitars shine. The high-impedance, high-headroom instrument input is great for recording guitar or bass without clipping, while our iconic Gain Halos make it easy to set input levels fast. Two balanced outputs are hum-free for pristine monitoring, mixing and mastering with studio monitors. And it comes with some of the best-loved tools in the business, including Ableton Live Lite, Avid Pro Tools Artist and Hitmaker Expansion – with plugins from legendary Auto-Tune® creators Antares®, Brainworx®, Softube®, Landr, XLN Audio®, Relab and more.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 2i2 3rd Gen',
      price: 3400000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694515859/lectronic/productImages/14226632_800_q4r06q.jpg',
      rating: 0,
      description: `The record maker. 2i2 has brought studio sound to more artists than any other interface. Ever. Hook up a couple of mics, guitars or keys and record however you want.

      The two 3rd Generation Scarlett mic preamps sound great straight out of the box. Air mode recreates the legendary effect of Focusrite's ISA mic pres and makes vocals and guitars shine. The high-impedance, high-headroom instrument inputs are great for recording guitar or bass without clipping, while our iconic Gain Halos make it easy to set input levels fast. Two balanced outputs are hum-free for pristine monitoring, mixing and mastering with studio monitors. And it comes with some of the best-loved tools in the business, including Ableton Live Lite, Avid Pro Tools Artist and Hitmaker Expansion – with plugins from legendary Auto-Tune® creators Antares®, Brainworx®, Softube®, Landr, XLN Audio®, Relab and more.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 4i4 3rd Gen',
      price: 4600000,
      stock: 98,
      sold: 2,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694516041/lectronic/productImages/scarlett-4i4-gen-3-angle-right-min-scaled_pthubu.jpg',
      rating: 3,
      description: `Play your way. Hook up a mic, guitar and keyboard and make records. 4i4 is studio sound for all your instruments.

      The two 3rd Generation Scarlett mic preamps sound great straight out of the box. Air mode recreates the legendary effect of Focusrite's ISA mic pres and makes vocals and guitars shine. The high-impedance, high-headroom instrument inputs are great for recording guitar or bass without clipping, while our iconic Gain Halos make it easy to set input levels fast. Four balanced outputs are hum-free for pristine monitoring, mixing and mastering with studio monitors. Loopback makes streaming and sampling simple. And it comes with some of the best-loved tools in the business, including Ableton Live Lite, Avid Pro Tools Artist and Hitmaker Expansion – with plugins from legendary Auto-Tune® creators Antares®, Brainworx®, Softube®, Landr, XLN Audio®, Relab and more.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 8i6 3rd Gen',
      price: 5200000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694526530/lectronic/productImages/517795_a8fc13b4-5f14-4516-b055-54a2c21a0e11_2048_2048-1_bvi6os.jpg',
      rating: 0,
      description: `Plug in and produce. All your instruments, all the time. 8i6 is studio sound for all your hardware.

      The two 3rd Generation Scarlett mic preamps sound great straight out of the box. Air mode recreates the legendary effect of Focusrite's ISA mic pres and makes vocals and guitars shine. The high-impedance, high-headroom instrument inputs are great for recording guitar or bass without clipping, while our iconic Gain Halos make it easy to set input levels fast. Four balanced outputs are hum-free for pristine monitoring, and are ideal as FX sends. Two powerful headphone outputs with individual level controls let you monitor, mix and master however you want. Loopback makes streaming and sampling simple. And it comes with some of the best-loved tools in the business, including Ableton Live Lite, Avid Pro Tools Artist and Hitmaker Expansion – with plugins from legendary Auto-Tune® creators Antares®, Brainworx®, Softube®, Landr, XLN Audio®, Relab and more.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Scarlett OctoPre Dynamic',
      price: 13000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694529171/lectronic/productImages/Focusrite-Scarlett-OctoPre-Dynamic-angled_eyutuk.jpg',
      rating: 0,
      description: `Expand your studio with eight mic/line inputs, eight line outputs, Focusrite precision conversion up to 192 kHz AD/DA and analogue compression on every channel.

      The Scarlett Octopre Dynamic builds on the features of the Scarlett OctoPre, adding analogue compression to all input channels and eight channels of precision D-A conversion. With dual ADAT* optical I/O, its ideal for expanding a Scarlett 18i8 or 18i20 — or any interface with ADAT I/O.
      
      Scarlett OctoPre Dynamic is the ideal way of adding eight extra mic/line inputs to your DAW. It also offers eight balanced line outputs, sourced directly from their respective mic preamps for use on stage in a live environment.
      
      Featuring eight channels of Focusrite's 2nd generation Scarlett preamps and a soft-knee VCA compressor on every channel. Scarlett OctoPre Dynamic lets you control the dynamics of all your input signals with an easy-to-use single-knob analogue compressor on every channel. There's a transparent mode for subtle compression plus a "More" button that doubles the ratio for compression with effect.
      
      In addition to the eight input channels, Scarlett OctoPre Dynamic includes eight line outputs, sourced either from the ADAT inputs for eight additional analogue outputs, or directly from the mic inputs for use in a live sound environment.` 
    },
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      name: 'Focusrite Scarlett 18i20 3rd Gen',
      price: 10450000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694528479/lectronic/productImages/focusrite-scarlett-18i20-usb-audio-interface-3rd-gen-a117089_d3umdv.jpg',
      rating: 0,
      description: `The heart of your setup. High channel count. Professional quality audio. Pro features, including talkback mic and speaker switching. 18i20 makes any space a studio.

      The eight 3rd Generation Scarlett mic preamps sound great, with enough IO to record a full band straight out of the box. Air mode recreates the legendary effect of Focusrite's ISA mic pres and makes vocals and guitars shine. The high-impedance, high-headroom instrument inputs are great for recording guitar or bass without clipping. Ten balanced outputs, with Anti Thump speaker switching, are hum-free for pristine monitoring and are ideal as FX sends. Two powerful headphone outputs with individual level controls let you monitor, mix and master however you want. Built-in talkback mic makes it easy to talk to your band during busy recording sessions. Loopback makes streaming and sampling simple. And it comes with some of the best-loved tools in the business, including Ableton Live Lite, Avid Pro Tools Artist and Hitmaker Expansion – with plugins from legendary Auto-Tune® creators Antares®, Brainworx®, Softube®, Landr, XLN Audio®, Relab and more.` 
    },
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      name: 'Behringer XENYX 1202SFX',
      price: 1930000,
      stock: 90,
      sold: 10,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694534037/lectronic/productImages/behringer-xenyx-1202sfx-12-input-analog-mixer-7990_pa6nbf.jpg',
      rating: 4,
      description: `The XENYX 1202SFX analog mixer features 12 inputs allowing you to effortlessly achieve premium-quality sound that’s perfect for streaming, podcasting or live applications. It provides a warm and ultra-musical sound thanks to its award-winning XENYX microphone preamps featuring 48V phantom power for connecting even hi-end studio microphones.` 
    },
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      name: 'Behringer XENYX 1002SFX',
      price: 1624000,
      stock: 87,
      sold: 13,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694534838/lectronic/productImages/Image_BE_P0EWH_XENYX-1002SFX_Top_XL_lvkqhh.png',
      rating: 5,
      description: `The XENYX 1002SFX analog mixer features 10 inputs allowing you to effortlessly achieve premium-quality sound that’s perfect for streaming, podcasting or live applications. It provides a warm and ultra-musical sound thanks to its award-winning XENYX microphone preamps featuring 48V phantom power for connecting even hi-end studio microphones.` 
    },
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      name: 'Behringer PMP4000',
      price: 9620000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694535010/lectronic/productImages/Image_BE_P0A8N_PMP4000_Top_XL_tlpzxx.png',
      rating: 0,
      description: `The amazing PMP4000 Powered Mixer packs tremendous power (2 x 800 Watts stereo or 1,600 Watts in Bridged mode), while maintaining an incredible power-to-weight ratio. These mixers employ high-efficiency Class-D technology and a state-of-the- art switch-mode power supply, which significantly reduces weight and heat. The 16-channel PMP4000 features 8 built-in, studio-grade XENYX mic preamps, 4 stereo channels, a 24-bit Multi-FX processor with 100 awesome presets including studio-class reverbs, delays, pitch shifter and various multi-effects, plus a 7-band stereo graphic EQ with our proprietary FBQ Feedback Detection System – for the ultimate in feedback-free performance.` 
    },
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      name: 'Behringer SX2442FX',
      price: 9140000,
      stock: 98,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694535510/lectronic/productImages/Image_BE_P0811_SX2442FX_Top_XL_j8r1cn.png',
      rating: 5,
      description: `The 24-Input, 4-Bus EURODESK SX2442FX allows you to effortlessly achieve premium-quality sound, thanks to 16 of our studio-grade XENYX Mic Preamps, 2 full stereo channels with 4-band EQ, plus 2 additional sets of stereo inputs channels with Level and Aux controls.

      All mono channels feature our ultra-musical, 3-band “British” channel EQs, complete with a semi-parametric mid band for the ultimate in sound sculpting. Add to this not one, but two of our 24-bit dual-engine stereo FX processors with 99 awesome presets including reverb, chorus, flanger, delay, pitch shifter and various multi-effects – and the SX2442FX becomes an incredibly versatile mixer for your recording projects and live performances.` 
    },
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      name: 'Behringer PMP6000',
      price: 12531000,
      stock: 99,
      sold: 1,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694535581/lectronic/productImages/Image_BE_P0A8O_PMP6000_Top_XL_aucfbo.png',
      rating: 5,
      description: `The amazing PMP6000 Powered Mixer packs tremendous power (2 x 800 Watts stereo or 1,600 Watts in Bridged mode), while maintaining an incredible power-to-weight ratio. These mixers employ high-efficiency Class-D technology and a state-of-the-art switch-mode power supply, which significantly reduces weight and heat. The 20-channel PMP6000 features 12 built-in, studio-grade XENYX mic preamps, 4 stereo channels, dual 24-bit Multi-FX processors with 100 awesome presets including studio-class reverbs, delays, pitch shifter and various multi-effects, plus a 7-band stereo graphic EQ with our proprietary FBQ Feedback Detection System – for the ultimate in feedback free performance.`
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer B1800XP Passive Subwoofer',
      price: 13000000,
      stock: 98,
      sold: 2,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694569879/lectronic/productImages/B1800XP_P0BP2_Left_XL_pgu59h.png',
      rating: 4,
      description: `Our Eurolive B1800XP 3,000-Watt active subwoofer provides the ultimate in low-frequency reproduction, and the built-in stereo crossover makes it ideally suited for use with any of our active 2-way loudspeakers. Packed with a powerful 3,000-Watt Class-D amplifier, a TURBOSOUND 18" long-excursion Low-Frequency (LF) transducer and an incredible array of professional features, the B1800XP produces extreme levels of low-end punch, with the definition and clarity typically reserved for much larger systems!` 
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer B1500XP Passive Subwoofer',
      price: '11335000',
      stock: 99,
      sold: 1,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694570024/lectronic/productImages/B1500XP_P0BP1_Right_XL_ccokse.png',
      rating: 4,
      description: `Our Eurolive B1500XP 3000-Watt active subwoofer provides the ultimate in low-frequency reproduction, and the built-in stereo crossover makes it ideally suited for use with any of our active 2-way loudspeakers. Loaded with an all-new 3000-Watt Class-D amplifier, Turbosound 15" long-excursion Low-Frequency (LF) transducer and an incredible array of professional features, the B1500XP produces extreme levels of low-end punch, with the definition and clarity typically reserved for much larger systems. Packaged in a completely redesigned and lightweight enclosure, the B1500XP is our most robust and articulate subwoofer design ever! ` 
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer B215XL Passive Speaker',
      price: 3200000,
      stock: 97,
      sold: 3,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694570745/lectronic/productImages/B215XL_P0A0T_Right_XL_wczxxm.png',
      rating: 3,
      description: `` 
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer B212D Powered Speaker',
      price: 4950000,
      stock: 89,
      sold: 11,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694570669/lectronic/productImages/B212D_P0A2E_Right_XL_l3sljl.png',
      rating: 5,
      description: `The EUROLIVE B212D active loudspeaker is exactly what you’ve come to expect from Behringer – more power, more features and absolutely more affordable! Our engineers have really outdone themselves, creating a self-contained PA solution that merges state-of-the-art, 550-Watt Class-D power amp technology, an ultra-low noise Mic/Line input section with volume control, integrated DSP – and exceptional portability.

      Then we loaded the B212D with our best 12" long-excursion driver for incredibly deep bass, and a state-of-the-art 1.35" aluminum-diaphragm compression driver for exceptional high-frequency reproduction. The B212D professional active loudspeaker is destined to become a legend in its own right, alongside the other EUROLIVE models that have made Behringer the world leader in active loudspeakers. `
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer EPS500MP3 Powered Speakers',
      price: 11000000,
      stock: 99,
      sold: 1,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694570506/lectronic/productImages/EPS500MP3_P0AA8_Right_XL_xcfxfg.png',
      rating: 5,
      description: `Looking for the ultimate, all-in-one portable PA system? The EUROPORT EPS500MP3 sets up in less than five minutes and delivers articulate, high fidelity performance – yet weighs only 41.3 lbs/18.8 kg. Thanks to the custom-designed 2-way loudspeakers and detachable 8-channel, 500-Watt powered mixer with onboard mp3 player, Reverb and wireless microphone connectivity, the EPS500MP3 can easily fill a large-sized room with crystal-clear, vibrant sound – making you the star of your event! `
    },
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      name: 'Behringer B1200D-PRO Powered Subwoofer',
      price: 8990000,
      stock: 96,
      sold: 4,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694570222/lectronic/productImages/B1200D-PRO_P0A9M_Left_XL_dlzxlv.png',
      rating: 5,
      description: `Our EUROLIVE B1200D-PRO 500-Watt active subwoofer provides the ultimate in low-frequency reproduction, and the built-in stereo crossover makes it ideally suited for use with any of our active 2-way loudspeakers. Packed with a powerful 500-Watt Class-D amplifier, 15" long-excursion Low-Frequency (LF) transducer and an incredible array of professional features, the B1200DPRO produces extreme levels of low-end punch, with the definition and clarity typically reserved for much larger systems!

      Put simply, these cool-running systems are much lighter, making them ultra-easy to transport and set up – and our no-compromise design means you get amazingly-deep, chest-pounding bass that will keep the party going all night long.`
    },
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      name: 'Behringer GIC-1000 Instrument Cable',
      price: '300000',
      stock: '56',
      sold: 24,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694571910/lectronic/productImages/GIC-1000_P0EVU_Front_XL_hxplxc.png',
      rating: 5,
      description: `Your instrument should be heard. Share your passion with the help of the GIC-1000. It connects your instrument directly to any TS audio input and is optimized for guitars, keyboards and amplifiers.`
    },
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      name: 'Behringer GLC2-1000 Speaker Cable',
      price: '350000',
      stock: 67,
      sold: 13,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694571729/lectronic/productImages/GLC2-1000_P0EV9_Front_XL_rknxtn.png',
      rating: 5,
      description: `The GLC2-1000 connects your passive speaker directly to any amplifier or amplified audio source and is optimized for stage and studio applications.`
    },
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      name: 'Behringer GB3002-A Guitar Stand',
      price: 560000,
      stock: 77,
      sold: 23,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694571492/lectronic/productImages/GB3002-A_P0EHL_Left_XL_ciwupb.png',
      rating: 5,
      description: `Behringer has designed a foldable acoustic guitar stand for easy transportation and storage. This lightweight A-frame features metal construction, rubber feet, and secure lock system to keep your guitar stand in place. It is covered with soft padding which helps ensure your guitar is safe in place.`
    },
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      name: 'Behringer SM5002 Loudspeaker Stand',
      price: 1492000,
      stock: 93,
      sold: 7,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694571363/lectronic/productImages/SM5002_P0EIL_Front_XL_dzaymp.png',
      rating: 5,
      description: `Designed to support studio loudspeakers with max weight of 55 lbs (25 kg), the SM5002 provides reliable and rugged speaker placement. The dual floor-standing speaker stand mount design can be used for a wide range of studio monitor, hi-fi, home theater or satellite speakers.

      Safe mounting with precise height adjustment in 5 steps from 3 ft (0.93 m) up to 3.8 ft (1.15 m) ensures proper placement. The triangle base mount design and large 10” x 10” (25 x 25 cm) metal platform with soft rubberized padding allows secure and stable monitor speaker placement.`
    },
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      name: 'Behringer SM2001 Loudspeaker Stand',
      price: 760000,
      stock: 85,
      sold: 15,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1694571305/lectronic/productImages/SM2001_P0EJ4_Left_XL_fckqbs.png',
      rating: 5,
      description: `Designed to support studio loudspeakers with max weight of 18 lbs (8.17 kg), the SM2001 provides reliable and rugged speaker placement. The desk-standing speaker stand mount design can be used for a wide range of studio monitor, hi-fi, home theater or satellite speakers.

      Safe mounting with precise height adjustment in 5 steps from 3 ft (0.30 m) up to 3.8 ft (0.51 m) ensures proper placement. The floor base mount design and large 9.5” x 9.5” (23 x 23 cm) metal platform with soft rubberized padding allows secure and stable monitor speaker placement.`
    },
    
    // {
    //   category_id: ,
    //   name: ,
    //   price: ,
    //   stock: ,
    //   sold: ,
    //   image: ,
    //   rating: ,
    //   description: 
    // },
    ], {})
  },
};
