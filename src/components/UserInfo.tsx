export default function () {
  return (
    <div className=" grid place-items-center h-screen ">
      <div className=" shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my6 ">
        <div>
          Name: <span className="font-bold ">Johnny</span>
        </div>
        <div>
          Email: <span className="font-bold ">john@gmail.com</span>
        </div>
        <button className=" font-bold bg-red-400 hover:bg-red-500 text-white px-6 py-2 mt-3 ">
          Logout
        </button>
      </div>
    </div>
  );
}
