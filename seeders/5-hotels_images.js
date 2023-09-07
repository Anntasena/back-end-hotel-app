"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "hotels_images",
      [
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20020708-cba6d863056a1910b400710aacab716f.jpeg?_src=imagekit&tr=c-at_max,fo-auto,h-370,q-40,w-700",
          hotels_id: 1,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20020708-0c547fae038e590f4cc1109b313fee5f.jpeg?_src=imagekit&tr=c-at_max,fo-auto,h-118,q-40,w-186",
          hotels_id: 1,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20020708-05accb90836e534ee477722378ab7d27.jpeg?_src=imagekit&tr=c-at_max,fo-auto,h-118,q-40,w-186",
          hotels_id: 1,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20001802-cb090f45634958f206de205f329d9555.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 2,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20001802-79125355de9abca4f3ba0e2c29119c5c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 2,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20001802-0224ac35f51b293e8749f8eceb373c6f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 2,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20052530-d59aad70c98d464644beb3323c00f0d3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 3,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20052530-38c29cd47a340f2796841ab350265130.jpeg?_src=imagekit&tr=h-145,q-40,w-145",
          hotels_id: 3,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20052530-9994b1cfa2e6b5a283ea4c50ad943520.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 3,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007126-49021dbaa8e419ce4def9720368407b1.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 4,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007126-b3c18cd2a5d07538d0e530b3ac2a2f3c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 4,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007126-1a7f31f6d49460d91c6ebb08875c5a87.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 4,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 5,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1194x895-FIT_AND_TRIM-10a7f2d2e2889a2795f316d907dd5124.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 5,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-3318x1974-FIT_AND_TRIM-50d729ce971b869fbeb0a7effc8ccfa9.jpeg?_src=imagekit&tr=h-145,q-40,w-145",
          hotels_id: 5,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10029705-59a6ae5380504b5200ee6b6d69bc3b38.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 6,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10029705-bafcb7d3f725b05423b1e4225b3dab29.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 6,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10029705-cfcedcf743364120ffeca867b8bcc541.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 6,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/7/0/139/493/432/BDOIC_7089548045_P.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 7,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/6/0/98/688/822/BDOIC_4209234386_P.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 7,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/5/0/91/780/177/BDOIC_4987511960_P.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 7,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008390-642a4da8a288f0473f6b341e0a3519f6.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 8,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008390-3a5e4889883e521b64df2b55dd02883b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 8,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008390-3641ab7126efa739cdd0e8d0aa2fadd9.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 8,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20012123-18e856ec1ed72a34da03f96b4e5f2d8d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 9,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20012123-9146830a5934e3da9d769c152274f245.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 9,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20012123-acdeea301aa3c1e213f553b64d647e9f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 9,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20055017-ed9df502b56c62c19af4268bcbd352a1.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 10,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20055017-26ceb07e7398e882a6fe81846152b1bb.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 10,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20055017-1f229ecb12f46e9c3bb70852ec77c97a.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 10,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008469-1800x1456-FIT_AND_TRIM-3670a4866584703fd7d9d7846b954077.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 11,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008469-05a1759c64d91594b7d33078f76f2587.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 11,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008469-1800x1200-FIT_AND_TRIM-4853eaa97ae6cd5f6d08076fea3c46ce.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 11,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67846363-7aa8bdca085f9164ebf5c2f2b09cbde3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 12,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20064540-0c530488402a08e0e002c13bbc568330.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 12,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20064540-a67d74409f51bd742d52254ee121a2aa.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 12,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20019601-b230fa223b92d0ac95fa0437c92fadd8.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 13,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20019601-f063f227e6e9a8d9e5764538823fad6c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 13,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20019601-9076371bf56ba81ce54f68c807044448.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 13,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20034108-489bb22a26be00f097ccd4b757ef0474.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 14,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20034108-4c6279359aff9931ba7f95463d77e38a.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 14,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20034108-9b3905e8653e52feed419542840a12c4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 14,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10016201-2df176280df4a0bbe63102e753a6c768.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 15,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10016201-6703f02bbd85c1560bdec54b4f349d34.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 15,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10016201-0da10bc8c84642ba6e23438717f7d3a2.jpeg?_src=imagekit&tr=h-145,q-40,w-145",
          hotels_id: 15,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10012189-2000x1125-FIT_AND_TRIM-cc7b2d922e8b570825bcda1a1d3dc91b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 16,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10012189-1544x2316-FIT_AND_TRIM-e52c4b7173046bdea52ed8005a0b926e.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 16,
        },
        {
          url: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10012189-7bf2f8fb7a57cd1d5e7bd95907c27e8b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
          hotels_id: 16,
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
