const listFooter = [
  {
    footerId: "1",
    footerName: "Customer Service",
    footerList: [
      {
        id: "101",
        name: "Help",
        href: "#",
      },
      {
        id: "102",
        name: "Payment Method",
        href: "#",
      },
      {
        id: "103",
        name: "Virtual Pay",
        href: "#",
      },
      {
        id: "104",
        name: "Coupon",
        href: "#",
      },
      {
        id: "105",
        name: "Delivery Tracking",
        href: "#",
      },
      {
        id: "106",
        name: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    footerId: "2",
    footerName: "Explore",
    footerList: [
      {
        id: "201",
        name: "About Us",
        href: "#",
      },
      {
        id: "202",
        name: "Career",
        href: "#",
      },
      {
        id: "203",
        name: "Terms and Conditions",
        href: "#",
      },
      {
        id: "204",
        name: "Blog",
        href: "#",
      },
      {
        id: "205",
        name: "Flash Sale",
        href: "#",
      },
      {
        id: "206",
        name: "Affiliate",
        href: "#",
      },
      {
        id: "207",
        name: "Seller Centre",
        href: "#",
      },
    ],
  },
  {
    footerId: "3",
    footerName: "Payment",
    footerList: [
      {
        id: "301",
        src: "https://down-id.img.susercontent.com/file/49656d7100598b911a1f247dec64fda4",
        alt: "bca",
      },
      {
        id: "302",
        src: "https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154",
        alt: "bni",
      },
      {
        id: "303",
        src: "https://down-id.img.susercontent.com/file/59185c096964e1892e9122ceaae2609d",
        alt: "bri",
      },
      {
        id: "304",
        src: "https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73",
        alt: "mandiri",
      },
      {
        id: "305",
        src: "https://down-id.img.susercontent.com/file/b228c4523a9d1261e4606e9bf3a4882f",
        alt: "visa",
      },
    ],
  },
  {
    footerId: "4",
    footerName: "Follow Us",
    footerList: [
      {
        id: "401",
        name: "Help",
        href: "#",
      },
    ],
  },
  {
    footerId: "5",
    footerName: "Mobile App",
    footerList: [
      {
        id: "501",
        name: "Help",
        href: "#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 h-fit flex justify-center align-middle py-8">
      <div className="h-full w-5/6 flex flex-col lg:flex-row justify-between">
        {listFooter.map((footer) => (
          <div key={footer.footerId} className="flex flex-col w-fit">
            <h2 className="mb-4 mt-4 text-sm">{footer.footerName}</h2>
            {footer.footerList.map((service) => (
              <a
                className="text-sm mb-1 font-thin hover:font-normal hover:text-blue-800"
                key={service.id}
                href={service.href}>
                {service.name}
                <img src={service.src} alt={service.alt} />
              </a>
            ))}
            <hr className="border-black mt-4 block lg:hidden" />
          </div>
        ))}
      </div>
    </footer>
  );
};
