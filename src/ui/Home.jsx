import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" my-10  text-center ">
      <h1 className=" mb-5 text-black  outline-1 md:text-4xl sm:text-3xl text-3xl lg:text-5xl font-bold">
        The best pizza.
        <br />
        <span className="text-pizza text-xl sm:text-2xl md:text-3xl font-semibold italic"> Straight out of the oven, straight to you.</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
