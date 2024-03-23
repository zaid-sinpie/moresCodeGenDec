export default function Content({title, btnTitle}) {
  return (
    <div className="flex flex-col items-center gap-3 mb-[3rem] border-sky-400 border-2 rounded-md h-[calc(60%)] justify-around w-full bg-slate-600">
      <h1 className="text-2xl uppercase text-stone-800 text-center font-bold bg-stone-500 px-2 py-2 rounded-md">{title}</h1>
      <div className="flex gap-4 items-start justify-around">
        <textarea placeholder="Enter text here." className="rounded-md outline-none p-5 font-bold text-slate-500 resize-none" id="" cols="30" rows="5"></textarea>
        <p className="font-bold text-xl text-stone-200 bg-slate-500 px-1 py-1 rounded-md">Hello chuchu restoraurent</p>
      </div>
      <button className="text-sky-800 p-2 bg-slate-800 uppercase rounded-md font-bold w-[10rem] hover:text-stone-100 hover:bg-slate-900 transition-all">{btnTitle}</button>
    </div>
  );
}
