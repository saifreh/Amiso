function Amiso() {
  function click(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="main">
        <div className="w-full">
          <navbar className="navbar">
            <div className="md:flex items-center justify-between py-8 mx-12">
              <div className="flex text-2xitems-center">
                <a href="#">
                  <img src="/image/logo.svg" alt="amiso" className="" />
                </a>
              </div>
              <div className="absolute right-9 top-7 md:hidden md:w-32 gap-12">
                <img src="/image/bars.svg" alt="bars" className="h-8" />
              </div>
              <div className=" md:flex items-center gap-12">
                <div className="py-4">
                  <a href="#" className="hover:text-green-600">
                    Features
                  </a>
                </div>
                <div className="">
                  <a href="#" className="hover:text-green-600">
                    Prices
                  </a>
                </div>
                <div className="py-4">
                  <a href="#" className="hover:text-green-600">
                    About
                  </a>
                </div>
                <div className="py-4">
                  <a href="#" className="hover:text-green-600">
                    Contacts
                  </a>
                </div>
                <button className="w-32 h-11 rounded-md bg-green-700 hover:bg-green-800 text-white font-medium ">
                  Get Started
                </button>
              </div>
            </div>
          </navbar>
          <div>
            <div className="md:flex justify-between py-8 mx-12 md:font-serif">
              <div className="py-12">
                <h1 className="text-4xl font-bold">
                  Landing page for <br /> your online service
                </h1>
                <div>
                  <p className="my-6 text-lg">
                    Sed ea enim et expedita quo. Sint <br /> consequuntur nobis
                    expedita mollitia <br /> voluptatem aut est a quia.
                  </p>
                </div>
                <div className="md:flex">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-48 h-14 border-2 border-gray outline-none text-gray-700 rounded-l-lg my-4 px-4"
                    />
                  </div>
                  <div className="w-48 h-14 font-semibold text-center bg-green-700 hover:bg-green-800 py-4 mt-4 text-white rounded-r-lg">
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
              <img src="/image/hero.png" className="md:w-2/5 my-12" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between py-8 mx-12 gap-8">
            <div>
              <img src="/image/img.svg" />
            </div>
            <div>
              <img src="/image/img5.svg" />
            </div>
            <div>
              <img src="/image/img2.svg" />
            </div>
            <div>
              <img src="/image/img3.svg" />
            </div>
            <div>
              <img src="/image/img4.svg" />
            </div>
            <div>
              <img src="/image/img1.svg" />
            </div>
          </div>
          <div className="md:flex justify-between py-8 mx-12 md:font-serif">
            <img src="/image/block.svg" className="md:w-2/5 " />
            <div className="mx-12 pr-4">
              <h1 className="text-4xl pt-8 font-bold">Incredible</h1>
              <div>
                <p className="my-6 text-xl leading-8">
                  Consequatur quidem deserunt qui fugit cumque ut esse est{" "}
                  <br />
                  dignissimos. Itaque quia et veritatis. Qui voluptatem dolor
                  quia <br />
                  exercitationem sed similique. Incidunt quae suscipit nihil{" "}
                  <br />
                  deleniti. Possimus praesentium sunt aut tempora ut alias.
                </p>
              </div>
              <button className="w-48 flex justify-around py-2 h-11 rounded-md font-semibold-black bg-green-700 hover:bg-green-800 text-white font-medium ">
                Get Started
                <img src="/image/arrow.png" className="w-6 fill-blue-500" />
              </button>
            </div>
          </div>
          <div className="md:flex justify-between py-8 mx-9 md:font-serif">
            <div className="mx-12 pr-4">
              <h1 className="text-4xl pt-8 font-bold">Fantastic</h1>
              <p className="my-6 text-xl w-full leading-8">
                Itaque cupiditate soluta necessitatibus. Quis ut veritatis sed{" "}
                <br />
                exercitationem autem est. Pariatur dolorum officiis fuga officia{" "}
                <br />
                labore libero. Magni tenetur delectus. Et consequatur <br />
                accusantium quisquam reiciendis aut.
              </p>
              <button className="w-48 h-11 flex justify-around py-2 rounded-md font-semibold-black bg-green-700 hover:bg-green-800 text-white font-medium ">
                Get Started
                <img src="/image/arrow.png" className="w-6 fill-blue-500" />
              </button>
            </div>
            <img src="/image/block.svg" className="md:w-2/5 my-12 " />
          </div>
          <div className="md:flex justify-between py-8 mx-12 md:font-serif">
            <img src="/image/block.svg" className="md:w-2/5 " />
            <div className="mx-12 pr-4">
              <h1 className="text-4xl pt-8 font-bold">Intelligent</h1>
              <div>
                <p className="my-6 text-xl md:w-full leading-8">
                  Neque aperiam labore reiciendis fugit error mollitia. Repellat
                  non <br /> voluptatem expedita quos quia. Quae architecto quia
                  perferendis <br /> dicta facilis. Impedit aut sit. Voluptatem
                  praesentium rem officiis.
                </p>
              </div>
              <button className="w-48 flex justify-around py-2 h-11 rounded-md font-semibold-black bg-green-700 hover:bg-green-800 text-white font-medium ">
                Get Started
                <img src="/image/arrow.png" className="w-6 fill-blue-500" />
              </button>
            </div>
          </div>
          <div className="md:h-full bg-gray-100 text-center">
            <div className="py-24">
              <h1 className="text-4xl font-bold">Our service features</h1>
              <p className=" py-4">
                Aliquid officiis cumque sunt sint. Et quo culpa. Enim <br /> sed
                natus molestiae fugiat cum consequatur quia <br /> sunt.
              </p>
            </div>
            <div className="flex justify-center flex-wrap">
              <div className="w-[380px] h-64 bg-white my-10 mx-8 pt-24 rounded-md shadow-lg hover:shadow-gray-500/50  ">
                <h1 className="text-4xl font-bold text-start px-8">
                  Incredible
                </h1>
                <p className="w-50 mx-8 text-start pt-4">
                  Adipisci tempora pariatur modi recusandae. Omnis neque
                  dolorum. Natus facere voluptatem.
                </p>
              </div>
              <div className="w-[380px] h-64 bg-white my-10 mx-8 pt-24 rounded-md hover:shadow-lg shadow-gray-500/50  ">
                <h1 className="text-4xl font-bold text-start px-8">Generic</h1>
                <p className="w-54 mx-8 text-start pt-4">
                  Adipisci tempora pariatur modi recusandae. Omnis neque
                  dolorum. Natus facere voluptatem.
                </p>
              </div>
              <div className="w-[380px] h-64 bg-white my-10 mx-8 pt-24 rounded-md hover:shadow-lg shadow-gray-500/50  ">
                <h1 className="text-4xl font-bold text-start px-8">Awesome</h1>
                <p className="w-54 mx-8 text-start pt-4">
                  Adipisci tempora pariatur modi recusandae. Omnis neque
                  dolorum. Natus facere voluptatem.
                </p>
              </div>
              <div className="w-[380px] h-64 bg-white  my-10 mx-8 pt-24 rounded-md hover:shadow-lg shadow-gray-500/50  ">
                <h1 className="text-4xl font-bold text-start px-8">Refined</h1>
                <p className="w-54 mx-8 text-start pt-4">
                  Adipisci tempora pariatur modi recusandae. Omnis neque
                  dolorum. Natus facere voluptatem.
                </p>
              </div>
            </div>
          </div>
          <div className="md:h-full text-center">
            <div className="py-24">
              <h1 className="text-4xl font-bold">Testimonials</h1>
              <p className=" py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Quisquam, repellendus numquam.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
              <div className="border-2 border-gray-200 bg-white my-10 mx-12 py-12 pt-10 rounded-md">
                <div className="flex">
                  <img
                    src="/image/men.jpg"
                    className="rounded-full w-16 mx-6"
                  />
                  <div className="pt-4 text-center">
                    <p className="font-semibold">Aron Lowe</p>
                    <p className="text-start">Schneider Inc</p>
                  </div>
                </div>
                <p className="mx-8 text-start pt-8">
                  Itaque est odio et rerum harum molestias aliquam. Ullam et aut
                  velit culpa aut. Perferendis nesciunt non voluptatibus
                  mollitia omnis. Dolorem error inventore. Cupiditate nihil modi
                  quos rerum. Mollitia rerum ipsam facere velit.
                </p>
              </div>
              <div className=" border-2 border-gray-200 hover:border-green-600 bg-white my-10 mx-12 pt-10 rounded-md">
                <div className="flex">
                  <img
                    src="/image/men1.jpg"
                    className="rounded-full w-16 mx-6"
                  />
                  <div className="pt-4">
                    <p className="font-semibold">Murphy Ryan</p>
                    <p className="text-start">Gibson Inc</p>
                  </div>
                </div>
                <p className="mx-8 text-start pt-8">
                  Quis voluptatem nobis quibusdam. Fuga aliquid eum repudiandae
                  aut iure omnis. Omnis facere nisi minus ut quos excepturi
                  saepe perspiciatis et. Dolore ut nihil minima natus enim
                  consequuntur aut qui. Ullam dicta labore dolores eos.
                </p>
              </div>

              <div className="border-2 border-gray-200  bg-white my-10 mx-12 pt-10 rounded-md">
                <div className="flex">
                  <img
                    src="/image/men2.jpg"
                    className="rounded-full w-16 mx-6"
                  />
                  <div className="pt-4 text-center">
                    <p className="font-semibold">Lukas Walker</p>
                    <p className="text-start">Kiehn LLC</p>
                  </div>
                </div>
                <p className="mx-8 text-start pt-8">
                  Et quibusdam voluptatem molestias cum autem autem et ut. Ad et
                  tenetur. Autem quis id tempora accusantium quod dolores et.
                  Possimus voluptatem hic nulla consequatur voluptates libero
                  quia expedita. Eum aut voluptatem qui praesentium vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="md:h-full bg-green-600 rounded-lg text-center">
            <div>
              <h1 className="text-4xl text-white font-bold pt-24">
                Start your free trial
              </h1>
              <p className="w-54 mx-8 text-center text-white pt-4">
                Trial period - 14 days, no credit card required
              </p>
            </div>
            <div className="md:flex justify-center relative my-12">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-64 h-14 text-gray-700 outline-none rounded-l-lg my-4 px-4"
                />
              </div>
              <div>
                <button className="w-64 h-14 font-semibold bg-green-700 hover:bg-green-800 py-4 mt-4 text-white rounded-r-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <hr className=" my-12 mx-10" />
          <footer>
            <div className="md:flex justify-between py-8 mx-8">
              <div className="flex text-2xl cursor-pointer items-center">
                <a href="#">
                  <img
                    src="/image/logo.svg"
                    alt="amiso"
                    className="font-bold-700"
                  />
                </a>
              </div>
              <div className="md:flex text-center font-bold">
                <div className="mx-4">
                  <a href="#" className="hover:text-green-600">
                    Features
                  </a>
                </div>
                <div className="mx-4">
                  <a href="#" className="hover:text-green-600">
                    Prices
                  </a>
                </div>
                <div className="mx-4">
                  <a href="#" className="hover:text-green-600">
                    About
                  </a>
                </div>
                <div className="mx-4">
                  <a href="#" className="hover:text-green-600">
                    Contacts
                  </a>
                </div>
              </div>
              <div className="flex">
                <div>
                  <a href="#">
                    <img
                      src="/image/book.svg"
                      alt="amiso"
                      className="w-8 mx-4"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="/image/twite.svg" alt="amiso" className="w-8" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-center my-8 text-gray-500">
                Copyright © 2021 Amiso. All rights reserved. Hand illustration
                by
                <a href="#" className="text-green-600">
                  {" "}
                  icons8.com{" "}
                </a>
                Photos by
                <a href="#" className="text-green-600">
                  {" "}
                  pexels.com{" "}
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Amiso;
