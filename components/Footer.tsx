import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/utils/svg";

const Footer = () => {
  return (
    <div className="bg-secondary py-10 flex flex-col items-center text-white/60 gap-6">
      <h3 className="text-2xl font-semibold">TastyBites</h3>
      <p>
        Contact: +0 123 456 789{" "}
        <span className="hidden xs:inline-block">
          | Email: tastybites@gmail.com
        </span>
      </p>
      <p className="block xs:hidden">Email: tastybites@gmail.com</p>
      <h4>Socials</h4>
      <div className="flex gap-4 -mt-2">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p className="text-sm xs:text-base whitespace-nowrap">
        2023 TastyBites <span className="inline-block xs:mx-3 text-lg">|</span>{" "}
        All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
