"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "hotels",
      [
        {
          name: "Hotel Indonesia Kempinski Jakarta",
          address:
            "Jalan MH Thamrin No. 1, Thamrin, Jakarta Pusat, Jakarta, Indonesia, 10310",
          description:
            "Hotel Kempinski adalah pilihan tepat bagi Anda yang ingin menghabiskan waktu dengan berbagai fasilitas mewah.",
          telephone: "021 23583800",
          email: "info.jakarta@kempinski.com",
          locations_id: 1,
        },
        {
          name: "Sheraton Grand Jakarta Gandaria City Hotel",
          address:
            "Jalan Sultan Iskandar Muda, Kebayoran Lama, Kebayoran Lama Utara, Jakarta, Indonesia, 12240",
          description:
            "Hotel Sheraton Grand Jakarta Gandaria City adalah pilihan tepat bagi Anda yang membutuhkan ruangan besar untuk berbagai agenda kegiatan.",
          telephone: "021 80630888",
          email: "sheraton.jakartagandariacity@sheraton.com",
          locations_id: 1,
        },
        {
          name: "The Langham, Jakarta",
          address:
            "Jalan MH Thamrin No. 1, Thamrin, Jakarta Pusat, Jakarta, Indonesia, 10310",
          description:
            "The Langham Jakarta adalah hotel dengan akomodasi fasilitas yang baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.",
          telephone: "021 27087888",
          email: "tljkt.info@langhamhotels.com",
          locations_id: 1,
        },
        {
          name: "Aston Priority Simatupang & Conference Center",
          address:
            "Jalan Let. Jend. T.B. Simatupang Kav. 9 Kebagusan, Cilandak, Kebagusan, Jakarta, Indonesia, 12520",
          description:
            "Aston Simatupang adalah akomodasi ideal untuk menikmati pemandangan indah dan menjelajahi segala destinasi wisata Kota Jakarta.",
          telephone: "021 78838777",
          email: "simatupangInfo@AstonHotelsInternational.com",
          locations_id: 1,
        },
        {
          name: "The Trans Luxury Hotel",
          address:
            "Jalan Gatot Subroto No. 289, Buahbatu, Bandung, Jawa Barat, Indonesia, 40273",
          description:
            "The Trans Luxury Hotel Bandung adalah sebuah penginapan bintang lima yang berdiri megah tepat di dalam kompleks Trans Studio, Bandung.",
          telephone: "022 87348888",
          email: "info@thetranshotel.com",
          locations_id: 2,
        },
        {
          name: "Padma Hotel Bandung",
          address:
            "Jalan Ranca Bentang 56-58, Ciumbuleuit, Bandung, Jawa Barat, Indonesia, 40142",
          description:
            "Padma Hotel Bandung adalah hotel mewah yang menawarkan hunian dengan desain sederhana tanpa meninggalkan kesan glamor dan modern.",
          telephone: "022 2030333",
          email: "reservation@padmahotelbandung.com",
          locations_id: 2,
        },
        {
          name: "InterContinental Hotels Bandung Dago Pakar",
          address:
            "Jalan Resor Dago Pakar Raya 2B, Resor Dago Pakar, Dago, Bandung, Jawa Barat, Indonesia, 40198",
          description:
            "InterContinental Hotels Bandung adalah hotel dengan kualitas pelayanan super ditambah berbagai fasilitas unggulan yang akan memberikan kesan luar biasa.",
          telephone: "022 87806688",
          email: "icbandung.reservation@ihg.com",
          locations_id: 2,
        },
        {
          name: "Grand Tjokro Premiere Bandung",
          address:
            "Jalan Cihampelas No. 211 - 217, Cihampelas, Bandung, Jawa Barat, Indonesia, 40131",
          description:
            "Grand Tjokro Premiere Bandung adalah hotel yang menawarkan penginapan bersih dan modern lengkap dengan berbagai fasilitas menarik.",
          telephone: "022 82021220",
          email: "reservation.bandung@grandtjokro.com",
          locations_id: 2,
        },
        {
          name: "JHL Solitaire Gading Serpong",
          address:
            "Jalan Gading Serpong Boulevard Barat Blok S No. 5, Gading Serpong, Tangerang, Banten, Indonesia, 15810",
          description:
            "JHL Solitaire Gading Serpong adalah hotel dengan kualitas pelayanan super, ditambah berbagai fasilitas unggulan yang memberikan kesan luar biasa.",
          telephone: "021 39503000",
          email: "info.sgs@jhlcollections.com",
          locations_id: 3,
        },
        {
          name: "Episode Hotel Gading Serpong",
          address:
            "Jalan Gading Serpong Boulevard Barat Blok S No. 6-7, Gading Serpong, Tangerang, Banten, Indonesia, 15810",
          description:
            "Episode Gading Serpong adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.",
          telephone: "021 39521212",
          email: "info.egs@jhlcollections.com",
          locations_id: 3,
        },
        {
          name: "Hotel Santika Premiere ICE - BSD City",
          address:
            "Jalan BSD Grand Boulevard, BSD City, Serpong, Tangerang Selatan, Indonesia, 15339",
          description:
            "Hotel Santika Premiere ICE - BSD City memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.",
          telephone: "021 80634899",
          email: "icebsd@reservation.santika.com",
          locations_id: 3,
        },
        {
          name: "Trembesi Hotel",
          address:
            "Jalan Pahlawan Seribu - CBD Lot Kavling VII.A - BSD, Serpong, Tangerang Selatan, Indonesia, 15311",
          description:
            "Trembesi Hotel menggabungkan kenyamanan jarak yang dekat dengan berbagai fasilitas di dalam kawasan dan kemudahan akses.",
          telephone: "021 50886363",
          email: "trembesiqrfb.thetrembesi.com",
          locations_id: 3,
        },
        {
          name: "The Apurva Kempinski Bali",
          address:
            "Jalan Raya Nusa Dua Selatan, Sawangan, Nusa Dua, Bali, Indonesia, 80361",
          description:
            "The Apurva Kempinski Bali adalah pilihan tepat bagi Anda dan pasangan yang ingin menikmati liburan romantis",
          telephone: "0361 2092288",
          email: "info.bali@kempinski.com",
          locations_id: 4,
        },
        {
          name: "Potato Head Suites & Studios",
          address:
            "Jalan Petitenget No. 51B, Seminyak, Kuta Utara, Badung, Bali, Indonesia, 80361",
          description:
            "Potato Head Suites & Studios adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.",
          telephone: "0361 6207979",
          email: "seminyak@potatohead.co",
          locations_id: 4,
        },
        {
          name: "The Anvanya Beach Resort Bali",
          address: "Jalan Kartika Plaza, Kuta, Badung, Bali, Indonesia, 80361",
          description:
            "The Anvaya Beach Resort Bali memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.",
          telephone: "0361 2090477",
          email: "info@theanvanyabali.com",
          locations_id: 4,
        },
        {
          name: "Daun Bali Seminyak Hotel",
          address:
            "Jalan Petitenget No. 8 Seminyak, Kerobokan Kelod, Kuta Utara, Seminyak, Kuta, Bali, Indonesia",
          description:
            "Daun Bali Seminyak Hotel memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.",
          telephone: "0361 9346333",
          email: "booking@daunbaliseminyak.com",
          locations_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
