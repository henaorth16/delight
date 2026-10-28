import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWechat,
  BsWhatsapp,
} from "react-icons/bs";
export const Under = () => {
  return (
    <div>
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://ezoltech.netlify.app"
                src="/logo.svg"
                alt="Delight Logo"
                name="Delight Tour and Accommodation"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/about">Delight (who we are)</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us on" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 relative items-center">
              <Footer.Copyright href="#" by="Delight™" year={2023} />
              <h2>
                made by <a href="https://ezoltech.netlify.app">ezoltech</a> and{" "}
                <a href="https://contact-henok.netlify.app/">henaorth</a>{" "}
              </h2>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=61554133757479&mibextid=ZbWKwL"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/delight_tours_accomodation?igsh=MTVuYjAwbGpweXZhMw=="
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://wa.me/qr/A7SKJLRIQAJZF1"
                icon={BsWhatsapp}
              />
              <Footer.Icon href="#" icon={BsWechat} />

              <img src="/qr.png\" alt="qr" height="50px" width="50px" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};
