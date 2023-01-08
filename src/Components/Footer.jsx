import React from "react";

export default function Footer() {
    return (
        <section id="footer" className="bg-black">
            <div className="container px-5 py-5 mx-auto mt-1">
                <div className="grid grid-cols-3">
                <div className="items-center text-center mx-auto">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Shayar Community</h2>
                    <h6 className="text-center text-white">Thank you for visiting our community page. Connect with us over socials. <br /> <br /> Keep Exploring 🚀. . .</h6>
                </div>

                <div className="items-center mx-auto pr-10">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Quick links</h2>
                    <div id="quick" className="flex flex-col text-left">
                    <a className="transition delay-40 title-font font-medium text-white hover:text-purple-500 duration-500" href="#starter"><i class="fas fa-chevron-circle-right"></i> home</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-purple-500 duration-500" href="#about"><i class="fas fa-chevron-circle-right"></i> genre</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-purple-500 duration-500" href="#skills"><i class="fas fa-chevron-circle-right"></i> open mics</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-purple-500 duration-500" href="#education"><i class="fas fa-chevron-circle-right"></i> traction</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-purple-500 duration-500" href="#projects"><i class="fas fa-chevron-circle-right"></i> testimonial</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-purple-500 duration-500" href="#contact"><i class="fas fa-chevron-circle-right"></i> FAQ's</a>
                    </div>
                </div>

                <div class="items-center text-white">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4"> Contact info</h2>
                    <p className="py-1"> <i class="fas fa-phone text-purple-500 mr-2"></i><a href="tel:+91 704-350-7789">+91 704-350-7789</a></p>
                    <p className="py-1"> <i class="fas fa-envelope text-purple-500 mr-2 "></i><a href="mailto:info@shayar.me">info@shayar.me</a></p>
                    <p className="py-1"> <i class="fas fa-map-marked-alt text-purple-500 mr-2"></i><a href="https://google.com">G-405,Darshanam Plaza,<br /> Danteshwar,Vadodara,<br /> India-390004</a></p>
                    
                    <div id="social" class="flex flex-wrap">
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-500 duration-500" href="https://www.linkedin.com/in/samanuay-nambiar-31852b233/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-500 duration-500" href="https://github.com/GitSam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-500 duration-500" href="mailto:samanuaynr67@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-500 duration-500" href="https://twitter.com/SamanuayN" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-500 duration-500" href="https://dev.to/devsam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-dev"></i> </a>
                    </div>
                </div>
                </div>
            </div>

            <h1 class="w-10/12 mx-auto py-2 text-center text-white title-font font-medium border-t-2 border-gray-600">Copyright © 2023 Shayar Community Pvt. Ltd. • All rights reserved.</h1>

        </section>

    )
}